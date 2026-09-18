# Debugging: Chrome DevTools & Runtime Profiling

**Slug**: `debugging-chrome-devtools` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai utilisasi Console API tingkat lanjut (`console.table`, `console.time`, `console.group`, `console.assert`, `console.trace`) untuk instrumentasi data dan profil eksekusi runtime.
- Memahami interaksi Chrome DevTools Protocol (CDP) dengan V8 Engine saat eksekusi dihentikan oleh breakpoint, manipulasi Call Stack, serta inspeksi Scope Chain (Local, Closure, Global).
- Menguasai teknik Memory Profiling menggunakan V8 Heap Snapshot untuk mengidentifikasi memory leak melalui analisis *Shallow Size* versus *Retained Size*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Debugging modern pada browser berbasis Chromium beroperasi melalui antarmuka **Chrome DevTools Protocol (CDP)** yang berkomunikasi langsung dengan **V8 Engine**. Ketika instruksi `debugger;` dieksekusi atau breakpoint terpancing, V8 membekukan *main execution thread*. Pada kondisi ini, seluruh state mesin—mulai dari *Call Stack*, *Lexical Environment Record*, *Closure scope*, hingga status *Microtask Queue*—ditangguhkan (suspended) sehingga dapat diinspeksi secara deterministik.

Breakpoint dalam Sources panel terbagi menjadi beberapa tipe spesifik:
1. **Line-of-code & Conditional Breakpoints**: Eksekusi hanya berhenti jika ekspresi logika bernilai *truthy* (misal: `response.status === 500`).
2. **Logpoints**: Menyuntikkan logging variabel ke console saat runtime tanpa memodifikasi source code atau menghentikan eksekusi thread.
3. **DOM Mutation Breakpoints**: Menangkap mutasi subtree, modifikasi atribut, atau penghapusan node DOM secara langsung ke fungsi pemanggilnya.
4. **XHR/Fetch Breakpoints**: Menghentikan eksekusi sesaat sebelum request jaringan dikirimkan berdasarkan pola URL.

Di balik layar pengelolaan memori, V8 mengalokasikan objek pada **V8 Memory Heap**. Objek dialokasikan ke generasi memori (*New Space* dan *Old Space*) yang dikelola oleh *Garbage Collector* (Scavenger dan Major Mark-Sweep-Compact). Memory leak terjadi saat objek yang sudah tidak terpakai tetap memiliki jalur referensi aktif ke **GC Root** (misalnya via *dangling event listeners*, *unbounded closures*, atau *detached DOM nodes*).

Dalam Heap Snapshot, terdapat dua metrik krusial:
- **Shallow Size**: Jumlah memori langsung yang dialokasikan untuk menyimpan struktur internal objek itu sendiri.
- **Retained Size**: Total memori yang akan dibebaskan apabila objek tersebut beserta objek-objek turunannya yang bergantung (retained objects) dihancurkan oleh Garbage Collector.

### 2. Sintaks & Penggunaan Modern

Console API modern menyediakan instrumentasi diagnostik terstruktur langsung di dalam alur eksekusi program.

```javascript
// Instrumentasi performa dan pelacakan alur eksekusi
class PipelineTracker {
  static #metrics = new Map();

  static start(label) {
    console.time(`[ExecTimer] ${label}`);
    console.group(`🔍 Trace Pipeline: ${label}`);
  }

  static checkpoint(assertion, message, payload = {}) {
    // console.assert hanya mencetak pesan jika ekspresi assertion bernilai false
    console.assert(assertion, `❌ Assertion Failed: ${message}`, payload);
  }

  static end(label, dataToInspect) {
    if (dataToInspect) {
      console.log('📦 Final Payload Snapshot:');
      console.table(dataToInspect);
    }
    console.trace('📍 Stack Trace Lokasi Akhir Pipeline');
    console.groupEnd();
    console.timeEnd(`[ExecTimer] ${label}`);
  }
}

// Simulasi eksekusi data processing
const orders = [
  { id: 'ORD-001', total: 150000, status: 'PAID' },
  { id: 'ORD-002', total: 0, status: 'PENDING' },
  { id: 'ORD-003', total: -25000, status: 'CORRUPTED' }
];

PipelineTracker.start('OrderValidation');

orders.forEach((order, idx) => {
  PipelineTracker.checkpoint(
    order.total > 0, 
    `Order pada indeks ${idx} memiliki nilai total tidak valid!`, 
    order
  );
});

PipelineTracker.end('OrderValidation', orders);
```

### 3. Studi Kasus Nyata
**Skenario:** Mengidentifikasi kebocoran memori (*memory leak*) pada *state store* berbasis subscription di mana closure menahan referensi objek besar, serta memanfaatkan statement `debugger;` untuk menginspeksi lexical scope.

```javascript
// Simulasi State Store dengan Memory Leak vs Cleanup Optimal
class DataStore {
  #subscribers = new Set();
  #cache = new Map();

  subscribe(callback) {
    this.#subscribers.add(callback);
    // Cleanup handler wajib disediakan untuk menghapus retainers
    return () => this.#subscribers.delete(callback);
  }

  dispatch(key, payload) {
    this.#cache.set(key, payload);
    for (const callback of this.#subscribers) {
      callback(payload);
    }
  }
}

const store = new DataStore();

function initSubscriberScope() {
  // Objek alokasi memori besar (misal array 1 juta elemen)
  const heavyBuffer = new Uint8Array(1024 * 1024 * 5); // ~5 MB
  heavyBuffer.fill(42);

  const unsubscribe = store.subscribe((data) => {
    // Closure scope: fungsi ini menahan referensi ke 'heavyBuffer'
    if (data.type === 'DEBUG_INSPECT') {
      // DevTools akan berhenti di sini saat dispatch dijalankan
      debugger;
      console.log(`Buffer Length: ${heavyBuffer.length}`);
    }
  });

  return unsubscribe;
}

// Inisialisasi subscription
const cleanup = initSubscriberScope();

// Memicu breakpoint terarah via event
console.log('Mengirim event debug...');
store.dispatch('channel-1', { type: 'DEBUG_INSPECT', timestamp: Date.now() });

// Melakukan pembersihan referensi (Memutus jalur GC Root)
cleanup();
console.log('Cleanup selesai. Referensi heap dilepas untuk GC.');
```

### 4. Visualisasi & Mental Model

Berikut representasi proses pembekuan V8 Call Stack dan isolasi alokasi Heap saat intervensi breakpoint terjadi:

```text
  ┌─────────────────────────────────────────────────────────────┐
  │                    V8 ENGINE RUNTIME                        │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
                 [Eksekusi Statement: debugger;]
                                 │
                                 ▼
  ┌─────────────────────────────────────────────────────────────┐
  │         CHROME DEVTOOLS PROTOCOL (CDP) SUSPENSION           │
  │  Call Stack & Microtask Queue Dihentikan Sementara          │
  └──────────────┬───────────────────────────────┬──────────────┘
                 │                               │
                 ▼                               ▼
  ┌──────────────────────────────┐ ┌─────────────────────────────┐
  │      CALL STACK FRAME        │ │        MEMORY HEAP          │
  │ ├─ Anonymous Frame           │ │ ├─ GC Roots (Window/Global) │
  │ ├─ initSubscriberScope()     │ │ │   └── Store Subscribers   │
  │ └─ Scope Variables:          │ │ │         └── heavyBuffer   │
  │    ├─ Local: (this, data)    │ │ │             [Retained:    │
  │    ├─ Closure: (heavyBuffer) │ │ │              ~5.2 MB]     │
  │    └─ Global: (Window)       │ │ └─ Shallow: ArrayBuffer Obj │
  └──────────────────────────────┘ └─────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Logpoints di Production**: Gunakan *Logpoints* pada Sources panel DevTools ketika mendebug isu di production runtime tanpa perlu mengubah bundler build atau menyisipkan `console.log` permanen.
- ✅ **Manfaatkan 3-Snapshot Technique**: Ambil Heap Snapshot ke-1 (Baseline) -> lakukan aksi -> ambil Snapshot ke-2 -> ulangi aksi -> ambil Snapshot ke-3. Bandingkan delta antara Snapshot 2 dan 3 untuk mendeteksi objek yang dialokasikan terus-menerus tanpa pernah didaur ulang.
- ✅ **Manfaatkan Conditional Breakpoints pada Loop Besar**: Hindari menekan *Resume Script Execution* ribuan kali pada loop; pasang kondisi `i === targetIndex` atau `item.isInvalid === true`.
- ❌ **Hindari Lingkup Closure Liar Tanpa Lifecycle**: Jangan membuat event listener anonim atau closure global yang mereferensikan objek masif tanpa menyediakan mekanisme pelepasan referensi (`null`-ing atau `unsubscribe`).

---

## ✍️ Latihan Mandiri
1. Jalankan kode pada **Code Editor di bawah**, buatlah sebuah simulasi pemrosesan 100 data transaksi dan gunakan `console.time` bersama `console.groupCollapsed` untuk mencatat metrik durasi setiap 10 transaksi secara berkelompok.
2. Di **Code Editor di bawah**, modifikasi objek data transaksi agar memiliki status `CORRUPTED`, lalu terapkan `console.assert` dan `console.trace` untuk mendeteksi secara otomatis posisi tepat terjadinya anomali data tersebut.

---

## 🔗 Referensi
- [Chrome DevTools Documentation: JavaScript Debugging Reference](https://developer.chrome.com/docs/devtools/javascript)
- [MDN Web Docs: Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [V8 Engine: Memory Management and Garbage Collection](https://v8.dev/blog/trash-talk)