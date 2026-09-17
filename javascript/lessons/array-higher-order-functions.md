# Array Higher-Order Functions: map, filter, reduce & chaining

**Slug**: `array-higher-order-functions` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai paradigma deklaratif dan fungsional untuk manipulasi array tanpa mutasi (*immutability*).
- Membedah mekanisme eksekusi engine V8 terkait alokasi memori heap pada operasi chaining vs single-pass reduction.
- Menerapkan fungsi agregasi kompleks, pencarian terbalik modern (`findLast`), serta perbandingan performa antara `flatMap` dan `map().flat()`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Higher-Order Functions (HOF) pada JavaScript adalah fungsi yang menerima fungsi lain sebagai argumen (callback) atau mengembalikan fungsi. Dalam konteks `Array.prototype`, HOF mengabstraksi mekanisme iterasi imperatif (seperti loop `for` atau `while`) menjadi deklarasi intent logis: transformasi 1:1 (`map`), reduksi predikat boolean (`filter`), atau agregasi multi-dimensi (`reduce`).

Di balik layar, engine JavaScript seperti V8 mengoptimalkan array bergantung pada konsistensi tipe datanya (misalnya optimasi elemen *PACKED_SMI_ELEMENTS* atau *PACKED_ELEMENTS*). Saat metode seperti `.map()` atau `.filter()` dieksekusi, V8 mengalokasikan blok memori baru di Heap untuk instansiasi Array hasil return, mengiterasi indeks array sumber secara sekuensial, mengeksekusi callback pada Call Stack, dan memasukkan nilai ke array baru. 

Namun, perangkaian metode (*method chaining*) yang tidak efisien—seperti `.filter().map().filter()` pada dataset berukuran masif—menyebabkan masalah alokasi memori intermediat (*intermediate array thrashing*). Setiap tahapan chain menghasilkan array sementara yang langsung dibuang ke Heap, memaksa Garbage Collector (GC) bekerja ekstra keras (*minor GC / Scavenger cycle*). Memahami kapan harus melakukan chaining demi keterbacaan kode (*readability*) dan kapan harus mengonsolidasikannya ke dalam satu iterasi (`reduce` atau loop) adalah pembeda mendasar antara developer pemula dan *engineer* berpengalaman.

### 2. Sintaks & Penggunaan Modern
ECMAScript modern (ES2023–ES2024) memperkaya ekosistem HOF dengan penambahan kemampuan pencarian dari belakang (`findLast`, `findLastIndex`) serta optimasi flattening melalui `flatMap`.

```javascript
const transactions = [
  { id: 'tx_01', type: 'DEPOSIT', amount: 1500, active: true },
  { id: 'tx_02', type: 'WITHDRAW', amount: 200, active: true },
  { id: 'tx_03', type: 'WITHDRAW', amount: 800, active: false },
  { id: 'tx_04', type: 'DEPOSIT', amount: 3000, active: true },
  { id: 'tx_05', type: 'WITHDRAW', amount: 450, active: true }
];

// 1. Validasi Boolean: some() & every()
const hasLargeDeposit = transactions.some(t => t.type === 'DEPOSIT' && t.amount >= 3000);
const allActive = transactions.every(t => t.active);
console.log('Ada deposit >= 3000:', hasLargeDeposit); // true
console.log('Semua transaksi aktif:', allActive);       // false

// 2. Pencarian Presisi: findLast & findLastIndex (ES2023)
// Menemukan penarikan aktif terakhir tanpa perlu membalik (reverse) array
const lastWithdrawal = transactions.findLast(t => t.type === 'WITHDRAW' && t.active);
const lastWithdrawalIdx = transactions.findLastIndex(t => t.type === 'WITHDRAW' && t.active);
console.log('Penarikan Terakhir:', lastWithdrawal); // { id: 'tx_05', ... }
console.log('Index Terakhir:', lastWithdrawalIdx);  // 4

// 3. flatMap: Transformasi 1-to-N dan Unnesting dalam 1 pass alokasi
const userOrders = [
  { user: 'Budi', items: ['Laptop', 'Mouse'] },
  { user: 'Siti', items: ['Keyboard'] }
];

// flatMap lebih efisien dibanding .map().flat()
const allItems = userOrders.flatMap(order => 
  order.items.map(item => `${order.user}: ${item}`)
);
console.log('Daftar Item Flat:', allItems);
// ['Budi: Laptop', 'Budi: Mouse', 'Siti: Keyboard']
```

### 3. Studi Kasus Nyata
Skenario: Pipeline pemrosesan analitik e-commerce. Kita harus menyaring transaksi valid, menghitung total metrik pendapatan kotor, mengelompokkan item berdasarkan kategori, dan menghitung rerata nilai order secara deklaratif.

```javascript
const rawCartEvents = [
  { cartId: 101, status: 'PAID', items: [{ cat: 'ELEC', price: 1200 }, { cat: 'BOOK', price: 30 }] },
  { cartId: 102, status: 'CANCELLED', items: [{ cat: 'FASHION', price: 150 }] },
  { cartId: 103, status: 'PAID', items: [{ cat: 'ELEC', price: 800 }, { cat: 'FASHION', price: 200 }] },
  { cartId: 104, status: 'PAID', items: [{ cat: 'BOOK', price: 45 }] }
];

// Pipeline Transformasi & Agregasi menggunakan Reduce Terstruktur
const analytics = rawCartEvents
  .filter(event => event.status === 'PAID')
  .reduce((acc, currentCart) => {
    // 1. Akumulasi Revenue Total
    const cartTotal = currentCart.items.reduce((sum, item) => sum + item.price, 0);
    acc.totalRevenue += cartTotal;
    acc.paidOrderCount += 1;

    // 2. Agregasi Item per Kategori
    for (const item of currentCart.items) {
      acc.categoryBreakdown[item.cat] = (acc.categoryBreakdown[item.cat] || 0) + item.price;
    }

    return acc;
  }, {
    totalRevenue: 0,
    paidOrderCount: 0,
    categoryBreakdown: {}
  });

// Hitung metrik turunan
const averageOrderValue = analytics.totalRevenue / analytics.paidOrderCount;

console.log('Total Revenue:', analytics.totalRevenue); // 2275
console.log('Average Order Value:', averageOrderValue.toFixed(2)); // 758.33
console.log('Distribusi Kategori:', analytics.categoryBreakdown);
// { ELEC: 2000, BOOK: 75, FASHION: 200 }
```

### 4. Visualisasi & Mental Model
Perbandingan eksekusi pipeline chaining vs flatMap di tingkat alokasi memori V8 Heap:

```text
Chaining Konvensional (map + flat):
┌────────────────┐      ┌─────────────────────────┐      ┌────────────────────────┐
│ [Array Sumber] │ ───> │  [Array of Arrays]      │ ───> │ [Array Flat Final]     │
└────────────────┘      │  (Heap Alokasi Tahap 1) │      │ (Heap Alokasi Tahap 2) │
                        └─────────────────────────┘      └────────────────────────┘
                                     │
                        (GC harus membersihkan tahap 1)

Optimasi flatMap (Single-Pass Allocation):
┌────────────────┐      ┌─────────────────────────────────────────────────────────┐
│ [Array Sumber] │ ───> │ Iterator Internal -> [Array Flat Final] (Single Alloc) │
└────────────────┘      └─────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `flatMap` daripada `.map().flat()`**: `flatMap` memetakan dan meratakan array 1 tingkat dalam satu siklus iterasi, menghindari overhead instansiasi array intermediat bersarang.
- ✅ **Hindari Spread Operator di dalam Reducer**: Penulisan `acc = { ...acc, [key]: val }` pada `.reduce()` menciptakan kompleksitas waktu $O(N^2)$ dan alokasi objek baru berulang. Selalu mutasi *accumulator object* secara langsung (`acc[key] = val`) di dalam callback sebelum me-return `acc`.
- ✅ **Pilih method berdasarkan semantic intent**: Jangan gunakan `.map()` jika Anda tidak membutuhkan nilai kembaliannya (gunakan `forEach` atau `for...of` untuk *side-effects* murni).
- ❌ **Hindari Excessive Chaining pada Big Data (>100.000 elemen)**: Melakukan 4-5 kali chain (`filter().map().filter().map()`) pada dataset besar menciptakan latensi GC yang masif. Gabungkan ke dalam satu pemanggilan `.reduce()` atau iterator loop generator.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah fungsi pipeline data yang menerima array objek karyawan, menyaring karyawan yang `status: 'active'` dan `department: 'engineering'`, lalu hitung total pengeluaran gaji (*salary*) serta buat daftar nama karyawan dalam format huruf kapital menggunakan perpaduan chaining yang optimal.
2. Di **Code Editor di bawah**, implementasikan pencarian transaksi menggunakan `findLast` untuk mendeteksi anomali: cari transaksi bernilai negatif pertama yang terjadi dari urutan paling belakang pada log audit finansial, lalu kembalikan indeks serta data transaksinya.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [MDN Web Docs: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [ECMAScript 2024 Array Specification](https://tc39.es/ecma262/#sec-array-objects)