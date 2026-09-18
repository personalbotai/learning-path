# Perulangan: for, while, for...of, for await...of

**Slug**: `perulangan` · **Level**: Dasar · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai mekanisme eksekusi loop klasik (`for`, `while`, `do...while`) beserta optimasi evaluasi kondisi pada level engine JavaScript.
- Memahami implementasi Iteration Protocols (`Symbol.iterator` dan `Symbol.asyncIterator`) untuk membedakan penggunaan `for...of` dan `for...in`.
- Mengimplementasikan `for await...of` untuk konsumsi data asinkron berbasis *stream* atau *async generator* terintegrasi dengan Microtask Queue.
- Mengontrol alur percabangan perulangan kompleks menggunakan `break`, `continue`, serta *labeled statement* secara presisi.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Perulangan dalam JavaScript beroperasi melalui dua paradigma: manipulasi indeks imperatif (loop tradisional) dan konsumsi protokol iterasi (loop modern). Pada loop klasik seperti `for (init; condition; update)` dan `while (condition)`, V8 Engine mengalokasikan variabel penghitung di *call stack* dan mengevaluasi blok *statement* secara berulang selama ekspresi kondisi menghasilkan nilai *truthy*. Jika struktur data yang diiterasi adalah array terindeks rapat (*holey vs packed elements*), V8 memanfaatkan *Inline Caches (IC)* dan kompilator TurboFan untuk melakukan *loop unrolling*, mengoptimasi lompatan instruksi pada level bytecode.

```
+-------------------------------------------------------------------------+
|                        Iteration Protocols                              |
|                                                                         |
|  [Iterable Object] ──> Menghasilkan [Iterator] via [Symbol.iterator]()  |
|                                │                                        |
|                                ▼                                        |
|                      Pemanggilan .next()                                |
|                                │                                        |
|                                ▼                                        |
|                  { value: any, done: boolean }                          |
+-------------------------------------------------------------------------+
```

Perulangan modern `for...of` diperkenalkan pada ES6 untuk mengonsumsi objek yang mengimplementasikan **Iterable Protocol**. Suatu objek dianggap *iterable* jika memiliki properti dengan kunci `Symbol.iterator`, yaitu fungsi pabrik yang mengembalikan *iterator* dengan metode `.next()`. Setiap iterasi mengekstrak `{ value, done }`. Karakteristik ini membuat `for...of` kompatibel dengan `Array`, `Map`, `Set`, `String`, serta `TypedArray`. 

Sebaliknya, `for...in` tidak menggunakan protokol iterasi; pernyataan ini menginspeksi semua properti *enumerable* dari suatu objek beserta rantai prototipenya (*prototype chain*), mengembalikan kunci (*keys*) dalam bentuk string, bukan nilai elemen.

Untuk skenario asinkron, ES2018 memperkenalkan `for await...of` yang beroperasi pada **Async Iterable Protocol** melalui metode `[Symbol.asyncIterator]()`. Setiap pemanggilan `.next()` mengembalikan sebuah `Promise<{ value, done }>`. Saat iterasi berlangsung, *engine* menunda eksekusi blok perulangan dan melepaskan kendali kembali ke Event Loop hingga Promise tersebut berstatus *fulfilled* via Microtask Queue, memungkinkan pemrosesan *stream* data secara berurutan (*sequential non-blocking*).

### 2. Sintaks & Penggunaan Modern

```javascript
// 1. Loop Klasik & Labeled Statement untuk matriks multidimensi
const matrix = [
  [1, 2, 3],
  [4, 99, 6],
  [7, 8, 9]
];

let targetFound = false;

searchLoop: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === 99) {
      console.log(`Target ditemukan di baris ${row}, kolom ${col}`);
      targetFound = true;
      break searchLoop; // Menghentikan kedua perulangan sekaligus
    }
  }
}

// 2. Perbedaan for...of vs for...in
const techStack = ['TypeScript', 'Node.js', 'PostgreSQL'];
techStack.customMetadata = 'Runtime Stack'; // Properti tambahan

console.log('--- Hasil for...of (Iterable Values) ---');
for (const tech of techStack) {
  console.log(tech); // Mengabaikan non-index property
}

console.log('--- Hasil for...in (Enumerable Keys) ---');
for (const key in techStack) {
  console.log(`Key: ${key}`); // Mencakup 'customMetadata' dan indeks string
}

// 3. Iterasi Koleksi Modern: Map & Set dengan Destructuring
const rolePermissions = new Map([
  ['admin', ['CREATE', 'READ', 'UPDATE', 'DELETE']],
  ['editor', ['CREATE', 'READ', 'UPDATE']],
  ['viewer', ['READ']]
]);

for (const [role, permissions] of rolePermissions) {
  console.log(`Role ${role} memiliki izin: ${permissions.join(', ')}`);
}

// 4. Async Iteration menggunakan for await...of
async function* fetchPaginatedMetrics() {
  const pages = [
    { page: 1, cpuUsage: 45 },
    { page: 2, cpuUsage: 78 },
    { page: 3, cpuUsage: 92 }
  ];

  for (const page of pages) {
    // Simulasi latensi jaringan (I/O)
    await new Promise((resolve) => setTimeout(resolve, 50));
    yield page;
  }
}

async function processMetrics() {
  console.log('--- Memulai Konsumsi Async Iterator ---');
  for await (const metric of fetchPaginatedMetrics()) {
    console.log(`Metrik Halaman ${metric.page}: CPU ${metric.cpuUsage}%`);
  }
}

await processMetrics();
```

### 3. Studi Kasus Nyata
Implementasi pemrosesan *stream batch* data transaksi keuangan dengan mekanisme pembatasan laju (*rate limiting*) dan penanganan kegagalan otomatis (*retry backoff*).

```javascript
// Generator asinkron untuk simulasi pembacaan chunk transaksi dari database
async function* transactionStream(totalBatches) {
  for (let i = 1; i <= totalBatches; i++) {
    await new Promise((resolve) => setTimeout(resolve, 30));
    yield {
      batchId: `BATCH-00${i}`,
      records: [
        { id: `TX-${i}A`, amount: 150_000, valid: true },
        { id: `TX-${i}B`, amount: -50_000, valid: false }, // Tidak valid
        { id: `TX-${i}C`, amount: 750_000, valid: true }
      ]
    };
  }
}

async function executeFinancialAuditing() {
  let grandTotal = 0;
  let processedCount = 0;
  let rejectedCount = 0;

  batchLoop: for await (const batch of transactionStream(3)) {
    console.log(`Memproses ${batch.batchId}...`);

    for (const tx of batch.records) {
      if (!tx.valid || tx.amount <= 0) {
        console.warn(`[REJECTED] Transaksi anomali: ${tx.id}`);
        rejectedCount++;
        continue; // Lewati transaksi bermasalah
      }

      grandTotal += tx.amount;
      processedCount++;

      // Proteksi overload: jika grandTotal melebihi ambang batas darurat
      if (grandTotal > 2_000_000) {
        console.error('Ambang batas likuiditas tercapai! Menghentikan audit.');
        break batchLoop;
      }
    }
  }

  console.log('--- Ringkasan Audit ---');
  console.log(`Berhasil Diproses : ${processedCount}`);
  console.log(`Ditolak           : ${rejectedCount}`);
  console.log(`Total Nilai (IDR) : ${grandTotal.toLocaleString('id-ID')}`);
}

await executeFinancialAuditing();
```

### 4. Visualisasi & Mental Model

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│              Siklus Eksekusi for await...of pada JavaScript Event Loop           │
└──────────────────────────────────────────────────────────────────────────────────┘

 [ Call Stack ]                   [ Web API / Node Core ]      [ Microtask Queue ]
        │                                    │                          │
        ▼                                    │                          │
 1. for await...of                           │                          │
    memanggil .next()                        │                          │
    menghasilkan Promise ───────────────────►│                          │
        │                                    │                          │
 2. Engine menunda eksekusi                  │                          │
    (Yield ke Event Loop)                    │                          │
        │                                    │                          │
        │                             3. Async Timer/IO selesai         │
        │                                Resolve Promise ──────────────►│
        │                                                               │ Enqueue:
        │                                                               │ Resumption Task
        │                                                               │
        │◄───────────────────────────── 4. Event Loop ──────────────────┘
 5. Call Stack dipulihkan                  Mentransfer Microtask
    Isi blok loop dieksekusi
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `for...of` untuk struktur data berurutan**: Selalu prioritaskan `for...of` dibandingkan `for...in` untuk `Array`, `Map`, dan `Set` guna menghindari pembacaan properti prototipe yang tidak diinginkan.
- ✅ **Cache panjang array pada loop klasik kritis**: Pada komputasi intensif dengan array masif, gunakan `for (let i = 0, len = arr.length; i < len; i++)` untuk mengeliminasi evaluasi properti `.length` yang redundan jika array dimutasi.
- ✅ **Manfaatkan `labeled statement` untuk loop bersarang (*nested loop*)**: Gunakan label alih-alih menambahkan variabel *flag boolean* tambahan yang membebani alokasi memori lokal.
- ❌ **Hindari modifikasi koleksi saat diiterasi**: Menghapus atau menambah elemen array di dalam `for...of` dapat menyebabkan lonjakan indeks atau kebocoran memori iterator (*out of sync iteration*).
- ❌ **Hindari pemanggilan asinkron tidak berurutan di dalam `forEach`**: Jangan gunakan `async/await` di dalam metode `arr.forEach(async () => {})` karena `forEach` tidak menunggu penyelesaian Promise; gunakan `for...of` atau `for await...of`.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah *custom iterable object* bernama `rangeScanner` yang menerima parameter `start`, `end`, dan `step`. Implementasikan `[Symbol.iterator]` manual tanpa menggunakan generator sehingga objek tersebut dapat diiterasi langsung menggunakan sintaks `for...of`.
2. Tulis sebuah fungsi `async function* streamAggregator(asyncIter)` di **Code Editor di bawah** yang mengonsumsi rentetan payload angka melalui `for await...of`, menyaring angka genap, dan menghentikan iterasi menggunakan `break` saat total akumulasi nilai genap melampaui angka 500.

---

## 🔗 Referensi
- [MDN Web Docs: Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN Web Docs: for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [ECMAScript Language Specification: Iteration Statements](https://tc39.es/ecma262/#sec-iteration-statements)