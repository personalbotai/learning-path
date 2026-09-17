# Array: Dasar dan Metode Modern (at, findLast, toSorted)

**Slug**: `array-dasar-dan-metode` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai pengambilan elemen berbasis indeks negatif menggunakan `Array.prototype.at()` dan teknik destructuring/rest-spread secara efisien.
- Memahami perbedaan fundamental di memori antara metode mutasi klasik (`sort`, `reverse`, `splice`) dan metode *Change Array by Copy* ES2023 (`toSorted`, `toReversed`, `toSpliced`, `with`).
- Menerapkan metode pencarian mundur (`findLast`, `findLastIndex`) serta transformasi matriks/koleksi hierarkis dengan `flat()` dan `flatMap()`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Dalam JavaScript engine seperti V8, `Array` bukanlah blok memori kontinu sederhana seperti pada bahasa tingkat rendah (C/C++), melainkan objek terindeks khusus yang dioptimalkan secara dinamis. V8 membedakan array ke dalam representasi internal seperti *PACKED Elements* (padat tanpa lubang/indeks kosong) dan *HOLEY Elements* (memiliki lubang/sparse array). Ketika array dimutasi secara langsung (*in-place mutation*), pointer memori pada heap yang sama dimodifikasi, menimbulkan risiko efek samping (*side-effects*) tak terduga pada arsitektur reaktif modern seperti React, Vue, atau Redux.

Secara historis, manipulasi array memerlukan pertukaran antara kenyamanan sintaksis dan imutabilitas. Pemanggilan `arr.sort()` atau `arr.reverse()` memutasi array asli secara langsung di memori heap. Untuk mencegah mutasi, developer terpaksa melakukan kloning manual seperti `[...arr].sort()`, yang menambah *overhead* sintaksis dan alokasi memori berlapis.

```text
Mutasi Klasik (In-Place):
Heap Pointer [0x01] ──> [ Data A, Data B ]  (Memodifikasi data yang sama)

Metode ES2023 (Change by Copy):
Heap Pointer [0x01] ──> [ Data A, Data B ]  (Tetap utuh)
Heap Pointer [0x02] ──> [ Data B, Data A ]  (Alokasi shallow copy baru terisolasi)
```

Standar ECMAScript 2022 (`at()`) dan ECMAScript 2023 (*Change Array by Copy*) mengatasi masalah ini. Mesin JavaScript kini menyediakan metode tingkat bahasa bawaan (*native engine-level*) yang secara deterministik mengembalikan *shallow copy* baru yang telah dimodifikasi, mempertahankan imutabilitas data asli tanpa merusak representasi internal *PACKED Elements*.

### 2. Sintaks & Penggunaan Modern

Fitur modern mencakup empat domain utama:
1. **Relative Indexing (`at`)**: Mendukung nilai negatif untuk membaca dari indeks terakhir tanpa kalkulasi `arr[arr.length - 1]`.
2. **Non-Mutating Transformations (`toSorted`, `toReversed`, `toSpliced`, `with`)**: Mengembalikan array baru tanpa menyentuh array asal.
3. **Reverse Searching (`findLast`, `findLastIndex`)**: Memindai elemen dari akhir ke awal dengan kompleksitas $O(N)$ terbaik tanpa perlu melakukan `reverse()` terlebih dahulu.
4. **Flattening (`flat`, `flatMap`)**: Meleburkan struktur multidimensi dan memetakan data dalam satu langkah lintasan (*single-pass traversal*).

```javascript
const numbers = Object.freeze([10, 20, 30, 40, 50]);

// 1. Indexing Negatif Modern vs Destructuring
console.log(numbers.at(-1)); // 50 (elemen terakhir)
console.log(numbers.at(-2)); // 40

const [first, ...rest] = numbers;
console.log(first, rest); // 10, [20, 30, 40, 50]

// 2. Metode Imutabel ES2023
const unsorted = [3, 1, 4, 1, 5];
const sorted = unsorted.toSorted((a, b) => a - b);
const reversed = unsorted.toReversed();
const spliced = unsorted.toSpliced(1, 2, 99); // Hapus 2 elemen di idx 1, sisipkan 99
const replaced = unsorted.with(0, 100);       // Ganti elemen idx 0 dengan 100

console.log("Original:", unsorted); // [3, 1, 4, 1, 5] (Tidak berubah)
console.log("Sorted  :", sorted);   // [1, 1, 3, 4, 5]
console.log("Reversed:", reversed); // [5, 1, 4, 1, 3]
console.log("Spliced :", spliced);  // [3, 99, 1, 5]
console.log("With    :", replaced); // [100, 1, 4, 1, 5]

// 3. Reverse Searching
const users = [
  { id: 1, role: "user" },
  { id: 2, role: "admin" },
  { id: 3, role: "user" }
];
const lastUser = users.findLast(u => u.role === "user");
const lastUserIdx = users.findLastIndex(u => u.role === "user");
console.log("Last User:", lastUser, "at index:", lastUserIdx); // { id: 3, role: 'user' } at index: 2

// 4. flat & flatMap
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

const sentences = ["Halo dunia", "JavaScript modern"];
const words = sentences.flatMap(s => s.split(" "));
console.log(words); // ['Halo', 'dunia', 'JavaScript', 'modern']
```

### 3. Studi Kasus Nyata
Implementasi *Audit Trail Processor* pada sistem perbankan. Kita perlu memproses riwayat mutasi rekening nasabah: menyaring entri, mengurutkannya secara kronologis tanpa merusak sumber data, memperbarui status audit via `with()`, serta mencari transaksi gagal terakhir secara efisien.

```javascript
const rawTransactions = [
  { id: "TX-101", amount: 500_000, status: "SUCCESS", timestamp: 1700000100 },
  { id: "TX-102", amount: 150_000, status: "FAILED",  timestamp: 1700000400 },
  { id: "TX-103", amount: 1_200_000, status: "SUCCESS", timestamp: 1700000200 },
  { id: "TX-104", amount: 300_000, status: "FAILED",  timestamp: 1700000300 },
];

function processAudit(transactions) {
  // 1. Dapatkan transaksi gagal paling mutakhir secara instan tanpa reverse()
  const latestFailure = transactions.findLast(tx => tx.status === "FAILED");

  // 2. Urutkan berdasarkan waktu secara imutabel
  const chronological = transactions.toSorted((a, b) => a.timestamp - b.timestamp);

  // 3. Temukan indeks transaksi tertentu dan perbarui status menggunakan .with()
  const targetIndex = chronological.findIndex(tx => tx.id === "TX-102");
  const updatedTimeline = chronological.with(targetIndex, {
    ...chronological[targetIndex],
    audited: true,
    status: "RESOLVED"
  });

  return {
    latestFailure,
    oldestTx: chronological.at(0),
    latestTx: chronological.at(-1),
    updatedTimeline
  };
}

const auditResult = processAudit(rawTransactions);

console.log("Latest Failure:", auditResult.latestFailure.id); // TX-102
console.log("Timeline Original Tetap Utuh:", rawTransactions[1].status); // FAILED
console.log("Audited TX-102 Status:", auditResult.updatedTimeline[3].status); // RESOLVED
```

### 4. Visualisasi & Mental Model

```text
┌───────────────────────────────────────────────────────────────────────────┐
│                      Operasi Array: Mutasi vs Imutabel                    │
├───────────────────────────────────────────────────────────────────────────┤
│ Array Asal: [A, B, C, D] (Ref: 0x01)                                      │
│                                                                           │
│ 1. Mutasi (sort, reverse, splice):                                        │
│    0x01 ──> Modifikasi langsung ──> [D, C, B, A] (Data asal hilang)       │
│                                                                           │
│ 2. Change by Copy (toSorted, toReversed, toSpliced, with):                │
│    0x01 ──> [A, B, C, D] (Terisolasi / Tetap Utuh)                        │
│    0x02 ──> [D, C, B, A] (Buffer baru dikembalikan ke Call Stack)         │
│                                                                           │
│ 3. Pencarian Terbalik (findLast / findLastIndex):                         │
│    [A, B, C, D] <── [Pointer Iterasi Bergerak Mundur (Index: 3 -> 0)]     │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `at()` untuk Nilai Dinamis/Negatif**: Gunakan `arr.at(-1)` alih-alih `arr[arr.length - 1]` untuk keterbacaan kode (*readability*) dan performa yang konsisten.
- ✅ **Gunakan `toSorted()` / `toReversed()` pada State Management**: Mencegah *subtle bugs* pada React state atau arsitektur fungsional akibat mutasi referensi objek array secara tidak sengaja.
- ✅ **Gunakan `flatMap()` daripada kombinasi `.map().flat()`**: Menghemat 1 kali alokasi array perantara (*intermediate array*) dan memangkas kompleksitas iterasi menjadi satu lintasan tunggal.
- ❌ **Hindari `.reverse().find()` untuk Pencarian Mundur**: Mengubah susunan array asli secara mutatif hanya untuk mencari satu elemen terakhir adalah anti-pattern berat. Gunakan `findLast()`.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, buat array berisi 5 angka acak. Urutkan angka-angka tersebut secara menurun (*descending*) menggunakan `toSorted()`, lalu ganti angka elemen pertama dengan `999` menggunakan `.with()`. Pastikan array sumber tidak berubah.
2. Buat sebuah array objek transaksi tiket `[{ id, status }]`. Gunakan `findLastIndex()` untuk menemukan indeks transaksi terakhir yang berstatus `"PENDING"`, lalu buat array baru menggunakan `toSpliced()` yang menghapus transaksi tersebut dari antrean. Jalankan kode di **Code Editor di bawah**.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [MDN Web Docs: Change Array by Copy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [ECMAScript 2023 Language Specification](https://tc39.es/ecma262/2023/#sec-array-objects)