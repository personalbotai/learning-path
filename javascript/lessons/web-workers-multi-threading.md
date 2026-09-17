# Web Workers: Multi-threading di Browser

**Slug**: `web-workers-multi-threading` · **Level**: Advanced · **Waktu**: 30 Menit

## 🎯 Tujuan Pembelajaran
- Memahami arsitektur thread isolation dan alokasi memori V8 Isolate independen antara UI Thread dan Dedicated Worker.
- Menguasai teknik komunikasi data antar thread menggunakan Structured Clone Algorithm serta optimasi Zero-Copy via Transferable Objects (`ArrayBuffer`).
- Mampu mendesain pipeline komputasi paralel intensif (data crunching/enkripsi) tanpa memblokir siklus render 60/120 FPS pada Main Thread.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript di peramban secara *default* beroperasi di bawah model *single-threaded event loop*. Pada *Main Thread*, engine JavaScript (seperti V8) berbagi jalur eksekusi yang sama dengan parsing HTML, kalkulasi CSSOM, reflow/layout, dan proses *paint* antarmuka pengguna. Jika sebuah fungsi sinkronus mengeksekusi komputasi berat (misal memproses jutaan matriks atau kalkulasi kriptografi) selama lebih dari 50ms (*Long Task*), Call Stack akan tersumbat. Akibatnya, browser tidak dapat memproses antrian *Microtask/Macrotask* maupun siklus *rendering*, menyebabkan *frame dropping* (UI *freeze* atau *jank*).

Web Workers menyelesaikan batasan fundamental ini dengan menginstansiasi *OS-level background thread* yang sepenuhnya independen. Setiap Worker dialokasikan ke dalam *V8 Isolate* tersendiri yang memiliki Call Stack, Memory Heap, dan Event Loop independen. Worker beroperasi di bawah konteks global `DedicatedWorkerGlobalScope` (bukan `window`), yang berarti Worker tidak memiliki akses langsung ke DOM API, `document`, `localStorage`, atau UI Thread, sehingga mencegah terjadinya kondisi *race condition* pada manipulasi pohon DOM.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              BROWSER PROCESS                           │
│                                                                        │
│  ┌───────────────────────────┐      ┌───────────────────────────────┐  │
│  │    MAIN THREAD (UI)       │      │     WORKER THREAD (BG)        │  │
│  │  - DOM & Layout Engine    │      │  - Pure Data Processing       │  │
│  │  - Main Event Loop        │      │  - Worker Event Loop          │  │
│  │  - V8 Isolate (Heap A)    │      │  - V8 Isolate (Heap B)        │  │
│  └─────────────┬─────────────┘      └───────────────┬───────────────┘  │
│                │                                    │                  │
│                │ postMessage(data, [transfer])      │                  │
│                ├───────────────────────────────────>│                  │
│                │                                    │                  │
│                │ onmessage = (e) => {}              │                  │
│                │<───────────────────────────────────┤                  │
└────────────────┴────────────────────────────────────┴──────────────────┘
```

Mekanisme pertukaran data antar thread terbagi menjadi dua paradigma utama:
1. **Structured Clone Algorithm**: Engine melakukan serialisasi *deep-copy* terhadap graph objek data dari Heap Main Thread ke Heap Worker Thread. Meskipun aman dari mutasi simultan, proses ini memakan kompleksitas waktu $O(N)$ dan menggandakan konsumsi alokasi memori RAM.
2. **Transferable Objects**: Pendekatan *Zero-Copy Transfer* memindahkan alamat penunjuk kepemilikan (*ownership pointer*) blok memori biner (seperti `ArrayBuffer`) secara instan ($O(1)$) antar V8 Isolate. Saat memori ditransfer, buffer pada thread pengirim langsung dideteksi sebagai *detached* (panjang byte menjadi `0`), mengeliminasi overhead serialisasi dan bahaya *shared-state concurrency*.

### 2. Sintaks & Penggunaan Modern
Untuk membuat arsitektur modular yang kompatibel dengan modern bundling, Worker dapat diinisialisasi langsung sebagai *ES Module Worker* menggunakan opsi `{ type: 'module' }` atau melalui *Inline Blob Worker* untuk komputasi terisolasi mandiri.

```javascript
// Membangun Worker secara inline via Blob & ES2024 Object URL
const workerScript = `
  self.onmessage = (event) => {
    const { task, payload } = event.data;

    if (task === 'PROCESS_BUFFER') {
      const uint8View = new Uint8Array(payload);
      
      // Mutasi data intensif langsung pada memori biner
      for (let i = 0; i < uint8View.length; i++) {
        uint8View[i] = (uint8View[i] ^ 0x5a) & 0xff; // Transformasi bitwise
      }

      // Transfer kembali ArrayBuffer ke Main Thread (Zero-Copy)
      self.postMessage(
        { status: 'SUCCESS', result: uint8View.buffer },
        [uint8View.buffer]
      );
    }
  };
`;

const blob = new Blob([workerScript], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);
const worker = new Worker(workerUrl);

// Alokasi 16MB Raw ArrayBuffer pada Main Thread
const bufferSize = 16 * 1024 * 1024; // 16 MB
const sharedData = new ArrayBuffer(bufferSize);
const initialView = new Uint8Array(sharedData);
initialView.fill(42);

console.log(`[Main Thread] Ukuran buffer sebelum transfer: ${sharedData.byteLength} bytes`);

// Menangani pesan kembalian dari Worker
worker.onmessage = (event) => {
  const { status, result } = event.data;
  console.log(`[Main Thread] Status diterima: ${status}`);
  console.log(`[Main Thread] Ukuran buffer hasil: ${result.byteLength} bytes`);
  
  const processedView = new Uint8Array(result);
  console.log(`[Main Thread] Sampel byte pertama: ${processedView[0]}`);

  // Pembersihan resource memori thread
  worker.terminate();
  URL.revokeObjectURL(workerUrl);
  console.log('[Main Thread] Worker dimatikan.');
};

// Eksekusi postMessage dengan Transfer List (Zero-Copy Transfer)
worker.postMessage(
  { task: 'PROCESS_BUFFER', payload: sharedData },
  [sharedData]
);

// Buffer pada Main Thread seketika menjadi detached (0 byte)
console.log(`[Main Thread] Ukuran buffer setelah transfer: ${sharedData.byteLength} bytes (Detached)`);
```

### 3. Studi Kasus Nyata
Skenario: Pemrosesan agregasi dan enkripsi data analitik skala besar (1.000.000 records) secara *asynchronous* tanpa menyebabkan *freeze* pada interaksi form/tombol UI.

```javascript
// Abstraksi Komputasi Paralel Berbasis Promise
class ComputeBridge {
  #worker;

  constructor(workerUrl) {
    this.#worker = new Worker(workerUrl);
  }

  execute(taskName, payload, transferables = []) {
    return new Promise((resolve, reject) => {
      const handleMessage = (event) => {
        if (event.data.error) {
          cleanup();
          reject(new Error(event.data.error));
        } else {
          cleanup();
          resolve(event.data.result);
        }
      };

      const handleError = (error) => {
        cleanup();
        reject(error);
      };

      const cleanup = () => {
        this.#worker.removeEventListener('message', handleMessage);
        this.#worker.removeEventListener('error', handleError);
      };

      this.#worker.addEventListener('message', handleMessage);
      this.#worker.addEventListener('error', handleError);

      this.#worker.postMessage({ task: taskName, payload }, transferables);
    });
  }

  destroy() {
    this.#worker.terminate();
  }
}

// Inisialisasi Script Worker untuk komputasi analitik
const analyticsWorkerCode = `
  self.onmessage = (e) => {
    const { task, payload } = e.data;
    
    if (task === 'AGGREGATE_AND_ENCRYPT') {
      try {
        const records = payload;
        let sum = 0n;

        // Komputasi agregasi berat
        for (let i = 0; i < records.length; i++) {
          sum += BigInt(records[i].value);
        }

        self.postMessage({
          result: {
            processedRows: records.length,
            aggregatedSum: sum.toString(),
            timestamp: Date.now()
          }
        });
      } catch (err) {
        self.postMessage({ error: err.message });
      }
    }
  };
`;

const analyticsBlob = new Blob([analyticsWorkerCode], { type: 'application/javascript' });
const analyticsBridge = new ComputeBridge(URL.createObjectURL(analyticsBlob));

// Simulasi 1 Juta Dataset Records
const dataset = Array.from({ length: 1_000_000 }, (_, idx) => ({
  id: idx,
  value: (idx % 100) + 1
}));

console.log('[Main Thread] Mengirim 1.000.000 record ke Worker Thread...');

analyticsBridge.execute('AGGREGATE_AND_ENCRYPT', dataset)
  .then(output => {
    console.log('[Main Thread] Hasil Komputasi Worker:', output);
  })
  .catch(err => {
    console.error('[Main Thread] Error Worker:', err);
  })
  .finally(() => {
    analyticsBridge.destroy();
  });
```

### 4. Diagram Alur & Visualisasi Event Loop
Diagram berikut menggambarkan bagaimana Worker memisahkan *Task Scheduling* dan siklus Call Stack dari Main Thread:

```text
┌─────────────────────────────────────────────────────────────┐
│                        MAIN THREAD                          │
│                                                             │
│   Call Stack                 Task / Microtask Queues        │
│ ┌──────────────┐            ┌─────────────────────────────┐ │
│ │ UI Event /   │ ──(Render)─│ Frame Rendering (16.6ms)    │ │
│ │ DOM Handler  │            └──────────────┬──────────────┘ │
│ └──────┬───────┘                           │                │
│        │ worker.postMessage()              │ (Tak Terganggu)│
└────────┼───────────────────────────────────┼────────────────┘
         │ (MessagePort IPC)                 │
         ▼                                   ▼
┌─────────────────────────────────────────────────────────────┐
│                       WORKER THREAD                         │
│                                                             │
│   Worker Call Stack          Worker Macrotask Queue         │
│ ┌──────────────┐            ┌─────────────────────────────┐ │
│ │ Heavy Math / │ <──────────│ onmessage Event Callback    │ │
│ │ Array Buffer │            └─────────────────────────────┘ │
│ └──────────────┘                                            │
│        │ self.postMessage() (Zero-Copy / Structured Clone)   │
└────────┼────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│ Main Thread Macrotask Queue: [ worker.onmessage callback ]  │
└─────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Transferable Objects untuk Payload Biner Besar**: Saat mengirim data citra, video frame (`ImageBitmap`), atau stream raw bytes, gunakan `ArrayBuffer` di dalam transfer list `postMessage(data, [data])` untuk menghindari alokasi memori berulang dan lonjakan Garbage Collection.
- ✅ **Gunakan Worker Pooling**: Menginstansiasi thread memiliki *overhead* alokasi memori. Buat sejumlah worker tetap (berdasarkan `navigator.hardwareConcurrency`) dan gunakan mekanisme *task queue* alih-alih membuat Worker baru per operasi.
- ✅ **Matikan Worker Secara Eksplisit**: Panggil `worker.terminate()` dari Main Thread atau `self.close()` dari dalam Worker setelah proses selesai jika worker tersebut bersifat sementara untuk mencegah kebocoran memori OS thread.
- ❌ **Jangan Kirim Data Non-Cloneable**: Menyerahkan objek yang mengandung referensi fungsi (*functions*), DOM Node, atau mutasi *circular reference* yang kompleks secara sembarangan akan melempar `DOMException: DataCloneError`.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, modifikasi implementasi Worker untuk memproses sebuah `Float64Array` berukuran 5.000.000 elemen. Lakukan komputasi kalkulasi standar deviasi di dalam Worker dan kembalikan hasilnya ke Main Thread.
2. Buat skema *Error Handling* di **Code Editor di bawah** yang menangkap galat sintaks di dalam worker script menggunakan event listener `onerror` dan `onmessageerror`, lalu pastikan Main Thread menerima pesan galat tersebut secara elegan.

---

## 🔗 Referensi
- [MDN Web Docs: Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [HTML Standard: Structured Cloning & Transferable Objects](https://html.spec.whatwg.org/multipage/structured-data.html)
- [ECMAScript Specification: Shared Memory and Atomics](https://tc39.es/ecma262/)