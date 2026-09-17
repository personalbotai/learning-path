# Generators dan Iterators: Custom Iteration & Streams

**Slug**: `generators-dan-iterators` · **Level**: Advanced · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai mekanika *Iteration Protocols* (`Iterable` dan `Iterator`) serta implementasi `[Symbol.iterator]` pada struktur data kustom.
- Memahami arsitektur internal *Generator State Machine* di engine V8, suspensi eksekusi via `yield`, dan delegasi traversal via `yield*`.
- Mengimplementasikan komunikasi dua arah (*bidirectional messaging*) melalui `generator.next(value)` serta manipulasi eksepsi melalui `.throw()` dan `.return()`.
- Merancang arsitektur evaluasi malas (*lazy evaluation*) untuk streaming data tak hingga (*infinite sequence*) dan paginasi memori efisien.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript mengabstraksi konsumsi data sekuensial melalui dua protokol formal: **Iterable Protocol** dan **Iterator Protocol**. Suatu objek berstatus *Iterable* jika mengimplementasikan metode dengan kunci *well-known symbol* `[Symbol.iterator]` yang mengembalikan sebuah objek *Iterator*. Objek *Iterator* wajib mengimplementasikan metode `next()`, yang mengembalikan record berstruktur `IteratorResult` yaitu `{ value: any, done: boolean }`. Konstruksi bahasa seperti `for...of`, operator spread `...`, dan *destructuring assignment* bergantung sepenuhnya pada protokol ini.

Di balik layar, fungsi reguler di JavaScript beroperasi di bawah model *run-to-completion*: sekali fungsi dipanggil masuk ke Call Stack, ia mengeksekusi seluruh instruksi hingga mencapai `return` atau melempar *exception*, lalu *execution context frame*-nya di-pop dari stack. Sebaliknya, **Generator Function** (`function*`) memecah paradigma ini dengan bertindak sebagai *resumable state machine*. Saat generator dipanggil, ia tidak langsung mengeksekusi *body* fungsinya, melainkan mengalokasikan dan mengembalikan objek `Generator` khusus di Heap Memory.

Engine JavaScript (seperti Google V8) mengelola generator menggunakan struktur internal context yang dipreservasi. Ketika eksekusi menemui kata kunci `yield`, V8 membekukan state register, *lexical environment scope*, dan penunjuk instruksi (*instruction pointer*) generator tersebut, lalu menangguhkan (*suspend*) eksekusi dan keluar dari Call Stack untuk menyerahkan kontrol kembali ke pemanggil (*caller*). Saat `next()` dipanggil kembali, context frame yang tersimpan di-hydrate ulang ke Call Stack dan eksekusi dilanjutkan tepat dari titik terminasi `yield` sebelumnya.

Mekanisme ini memungkinkan evaluasi malas (*lazy evaluation*) dan komputasi *on-demand*. Tidak seperti `Array` yang mengalokasikan memori di awal untuk seluruh elemen, generator memproduksi nilai tepat saat diminta. Ini memungkinkan representasi deret data tak terhingga (*infinite streams*) dengan footprint memori $O(1)$.

### 2. Sintaks & Penggunaan Modern
Generator memungkinkan pertukaran data dua arah. Argumen yang dipassing ke pemanggilan `next(val)` pertama akan diabaikan (karena generator belum mencapai `yield` pertama), namun pemanggilan `next(val)` selanjutnya akan mengevaluasi ekspresi `yield` yang sedang aktif menjadi nilai `val` tersebut.

Delegasi generator diselesaikan melalui `yield*`, yang mentransfer kontrol iterasi ke Iterable lain secara rekursif hingga iterable target selesai (`done: true`), lalu melanjutkan sisa eksekusi generator induk.

```javascript
// Implementasi Generator Komprehensif: Komunikasi 2-Arah & Delegasi
function* subTaskGenerator() {
  yield "Sub-task A";
  yield "Sub-task B";
  return "Sub-task Complete"; // Nilai kembalian ditangkap oleh yield*
}

function* controlFlowGenerator() {
  console.log("[Engine] Generator dimulai");
  
  // Menerima input dari luar via yield
  const inputA = yield "Langkah 1: Masukkan angka pertama";
  console.log(`[Engine] Diterima inputA: ${inputA}`);
  
  const inputB = yield "Langkah 2: Masukkan angka kedua";
  console.log(`[Engine] Diterima inputB: ${inputB}`);
  
  // Delegasi iterasi ke generator lain via yield*
  console.log("[Engine] Mendelegasikan ke subTaskGenerator...");
  const subResult = yield* subTaskGenerator();
  console.log(`[Engine] Hasil delegasi: ${subResult}`);

  yield `Hasil Penjumlahan: ${inputA + inputB}`;
}

// Eksekusi State Machine
const iterator = controlFlowGenerator();

console.log(iterator.next()); 
// Output: { value: 'Langkah 1: Masukkan angka pertama', done: false }

console.log(iterator.next(10)); // Mengirim nilai 10 ke inputA
// Output: { value: 'Langkah 2: Masukkan angka kedua', done: false }

console.log(iterator.next(25)); // Mengirim nilai 25 ke inputB
// Output: { value: 'Sub-task A', done: false }

console.log(iterator.next()); 
// Output: { value: 'Sub-task B', done: false }

console.log(iterator.next()); 
// Output: { value: 'Hasil Penjumlahan: 35', done: false }

console.log(iterator.next()); 
// Output: { value: undefined, done: true }
```

### 3. Studi Kasus Nyata
#### Kasus A: Custom Iterable Tree Data Structure
Implementasi *Depth-First Search* (DFS) traversal kustom pada struktur data Hierarki Organisasi menggunakan `[Symbol.iterator]` dan delegasi `yield*`.

#### Kasus B: Lazy Streaming & Windowing ID Generator
Generator ID unik terenkapsulasi yang beroperasi secara tak terhingga tanpa risiko kebocoran memori (*memory leak*).

```javascript
// --- STUDI KASUS A: Custom Iterable Data Structure ---
class TreeNode {
  constructor(name, children = []) {
    this.name = name;
    this.children = children;
  }

  // Menjadikan class TreeNode sebagai Iterable resmi
  *[Symbol.iterator]() {
    yield this.name;
    for (const child of this.children) {
      yield* child; // Rekursi traversi pohon via delegasi generator
    }
  }
}

const techOrg = new TreeNode("CTO", [
  new TreeNode("Engineering Director", [
    new TreeNode("Staff Engineer"),
    new TreeNode("Senior SRE"),
  ]),
  new TreeNode("Head of Data", [
    new TreeNode("Data Architect"),
  ]),
]);

console.log("--- Traversi Organisasi (DFS via for..of) ---");
for (const role of techOrg) {
  console.log(`Node: ${role}`);
}

// --- STUDI KASUS B: Lazy Chunked Stream Processor ---
function* infiniteIdSequence(prefix = "TX") {
  let seq = 1;
  while (true) {
    yield `${prefix}-${String(seq++).padStart(6, "0")}`;
  }
}

function* chunkStream(iterable, chunkSize) {
  let chunk = [];
  for (const item of iterable) {
    chunk.push(item);
    if (chunk.length === chunkSize) {
      yield chunk;
      chunk = [];
    }
  }
}

// Pipeline Komposisi Generator: Streaming Transaksi
const txGenerator = infiniteIdSequence("ORD");
const batchProcessor = chunkStream(txGenerator, 3);

console.log("\n--- Batch Streaming (Evaluasi Malas) ---");
console.log("Batch 1:", batchProcessor.next().value); // [ 'ORD-000001', 'ORD-000002', 'ORD-000003' ]
console.log("Batch 2:", batchProcessor.next().value); // [ 'ORD-000004', 'ORD-000005', 'ORD-000006' ]
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               V8 GENERATOR SUSPENSION & CONTEXT PERSISTENCE LIFECYCLE                   │
└────────────────────────────────────────────────────────────────────────────────────────┘

 CALL STACK (Main Thread)               HEAP MEMORY (Persistent State Context)
┌─────────────────────────┐            ┌───────────────────────────────────────────────┐
│ 1. caller() runs        │            │ Generator Object Instance                     │
│    gen = myGen()        │ ─────────> │   - Context Scope: { seq: 1 }                 │
│    gen.next()           │            │   - Instruction Pointer: Offset 0x00A         │
└─────────────────────────┘            │   - State: "SUSPENDED_START"                  │
             │                         └───────────────────────────────────────────────┘
             ▼ Push context                                  │
┌─────────────────────────┐                                  │
│ 2. Generator Body Exec  │                                  │
│    let seq = 1;         │                                  │
│    yield seq;           │ ── (Capture State: seq=1) ───────┤
└─────────────────────────┘                                  │
             │                                               ▼
             ▼ Pop context             ┌───────────────────────────────────────────────┐
┌─────────────────────────┐            │ Updated Generator Context                     │
│ 3. Caller Receives:     │            │   - State: "SUSPENDED_YIELD"                  │
│    {value: 1, done: false}           │   - Scope Ref preserved on Heap               │
└─────────────────────────┘            └───────────────────────────────────────────────┘
             │                                               │
             ▼ gen.next(100)                                 ▼ Re-hydrate
┌─────────────────────────┐            ┌───────────────────────────────────────────────┐
│ 4. Resume from Pointer  │ <───────── │ Restore Register & Heap Context               │
│    yield evaluates to   │            │ State: "EXECUTING"                            │
│    100 (injected val)   │            └───────────────────────────────────────────────┘
└─────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `yield*` untuk Traversi Rekursif**: Hindari *flattening* manual dengan loop bersarang pada struktur data pohon/graf; delegasi `yield*` menghemat alokasi array perantara.
- ✅ **Gunakan Blok `try...finally` untuk Resource Cleanup**: Jika generator ditutup paksa oleh konsumer menggunakan `iterator.return()`, blok `finally` di dalam generator dijamin tetap dieksekusi engine V8 untuk menutup koneksi database, handle file, atau stream.
- ✅ **Manfaatkan Generator untuk Infinite Stream Memory Optimization**: Hindari membuat array dengan jutaan elemen di memori jika hanya sebagian yang diproses secara sekuensial.
- ❌ **Hindari Penggunaan Spread Operator `[...gen]` pada Infinite Generator**: Mengeksekusi spread operator atau `Array.from()` pada generator tak hingga akan memicu alokasi memori tanpa batas dan menyebabkan *Fatal JavaScript out of memory error*.
- ❌ **Jangan Mengabaikan Nilai `.return()`**: Perlu diingat bahwa nilai yang dikembalikan melalui sintaks `return val` dalam generator menghasilkan `{ value: val, done: true }`. Loop `for...of` secara standar akan **mengabaikan** nilai pada posisi `done: true`.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah generator bernama `fibonacciSequence()` yang menghasilkan deret angka Fibonacci tanpa batas ($0, 1, 1, 2, 3, 5, 8, \dots$). Kombinasikan dengan fungsi utilitas `take(iterable, count)` yang hanya mengonsumsi sejumlah `count` item pertama menggunakan protokol iterator murni.
2. Di **Code Editor di bawah**, implementasikan kelas `PaginatedAPIStream` yang memiliki metode `async function* [Symbol.asyncIterator]()`. Simulasikan penarikan data halaman API (Page 1, 2, 3) secara malas, di mana penarikan data halaman berikutnya hanya dieksekusi saat konsumer memintanya pada loop `for await...of`.

---

## 🔗 Referensi
- [MDN Web Docs: Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN Web Docs: Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [ECMAScript Language Specification: Generator Objects](https://tc39.es/ecma262/#sec-generator-objects)