# Clean Code Principles di JavaScript Modern

**Slug**: `clean-code-principles` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menerapkan konvensi penamaan intensi-eksplisit dan predikatif yang mengurangi beban kognitif saat membaca kodebase.
- Merancang fungsi modular berprinsip *Single Responsibility* (SRP) serta mengeliminasi efek samping (*side effects*) mutasi referensi memori di Heap.
- Mengimplementasikan pola *Destructuring Options Object* untuk menjaga *function arity* tetap rendah dan mempermudah ekstensi API.
- Menyeimbangkan penerapan *Don't Repeat Yourself* (DRY) dengan *You Aren't Gonna Need It* (YAGNI) guna mencegah abstraksi prematur (*premature abstraction*).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript adalah bahasa dinamis multiparadigma yang mengeksekusi kode di atas *runtime engine* seperti V8. Fleksibilitas ini sering kali menjadi pedang bermata dua: tipe data dinamis dan mutabilitas objek secara *default* dapat menciptakan kode yang sulit diprediksi jika tidak diikat oleh disiplin arsitektur yang ketat. Prinsip *Clean Code* yang diadaptasi untuk JavaScript modern bukan sekadar masalah estetika, melainkan optimasi struktural untuk mempermudah penalaran (*cognitive load minimization*) dan mendukung optimasi mesin eksekusi (seperti *inlining* fungsi oleh V8 TurboFan).

Di balik layar, ketika sebuah fungsi melakukan mutasi langsung pada objek atau *array* yang diterima sebagai argumen, fungsi tersebut memodifikasi data di alamat memori *Heap* yang sama. Hal ini memicu *side effects* tersembunyi (*hidden coupling*), di mana bagian program lain yang memegang referensi ke objek tersebut mengalami perubahan status secara tak terduga. Clean code di JavaScript menuntut penerapan *Pure Functions* dan immutabilitas: fungsi menerima input, memproses data tanpa menyentuh *scope* luar, dan mengembalikan instans baru.

```text
┌─────────────────────────────────────────────────────────────┐
│                    V8 Memory Allocation                     │
├──────────────────────────────┬──────────────────────────────┤
│ Stack Frame (Primitif & Ptr) │ Heap Space (Objek & Array)   │
│                              │                              │
│  stateRef ───────────────────┼───> { id: 1, total: 100 }    │
│                              │        ▲                     │
│  mutasiLangsung() ───────────┼────────┘ [Unsafe Mutation]   │
│                              │                              │
│  transformasiMurni() ────────┼───> { id: 1, total: 120 }    │
│                              │     [New Allocated Object]   │
└──────────────────────────────┴──────────────────────────────┘
```

Selain mutasi, ukuran fungsi dan kompleksitas parameter (*arity*) sangat menentukan keterbacaan. Fungsi yang menerima lebih dari dua argumen posisional rentan mengalami kesalahan passing urutan argumen (*positional bugs*). Dengan memanfaatkan *Destructuring Options Pattern*, kita menggeser tanggung jawab pemetaan argumen dari urutan memori ke asosiasi *key-value* yang eksplisit dan mudah diekstensi tanpa merusak *backward compatibility*.

### 2. Sintaks & Penggunaan Modern
JavaScript ES2024 menyediakan fitur bawaan untuk mendukung prinsip *Clean Code*, seperti metode *immutable array* (`toSorted`, `toSpliced`, `toReversed`), operator nullish coalescing (`??`), dan *destructuring default values*. 

Kaidah utama penulisan clean code modern:
1. **Penamaan Intensional**: Variabel boolean menggunakan prefiks predikat (`isActive`, `hasPermission`, `canExecute`). Variabel koleksi menggunakan bentuk jamak (`users`, `validTokenList`).
2. **Ketiadaan Flag Arguments**: Hindari melewatkan boolean ke dalam fungsi untuk membedakan dua alur logika berbeda. Pisahkan menjadi dua fungsi terpisah.
3. **Immutabilitas Eksplisit**: Gunakan metode non-mutating untuk menjaga integritas data global/induk.

```javascript
// --- ANTI-PATTERN: Mutasi data, flag arguments, penamaan ambigu ---
function processUsers(u, flag) {
  if (flag) {
    return u.sort((a, b) => a.score - b.score); // Mutasi array asli via Array.prototype.sort!
  }
  return u.filter(x => x.active === true);
}

// --- CLEAN CODE (ES2024): Deskriptif, murni, destructured options ---
interface ScoreCriteria {
  minScore?: number;
  sortByScore?: boolean;
}

const filterAndSortActiveUsers = (
  users, 
  { minScore = 0, sortByScore = false } = {}
) => {
  const activeUsers = users.filter((user) => user.isActive && user.score >= minScore);

  if (!sortByScore) {
    return activeUsers;
  }

  // ES2024 toSorted() tidak memutasi array asli, aman dari side effects
  return activeUsers.toSorted((currentUser, nextUser) => nextUser.score - currentUser.score);
};

// Eksekusi Runnable
const rawUsers = [
  { id: 'usr_1', name: 'Alif', score: 85, isActive: true },
  { id: 'usr_2', name: 'Budi', score: 92, isActive: false },
  { id: 'usr_3', name: 'Citra', score: 78, isActive: true }
];

const topActiveUsers = filterAndSortActiveUsers(rawUsers, { 
  minScore: 70, 
  sortByScore: true 
});

console.log('Hasil Transformasi Bersih:', topActiveUsers);
console.log('Array Asli Tetap Murni:', rawUsers[0].name === 'Alif'); // true
```

### 3. Studi Kasus Nyata
Skenario: Refaktor modul kalkulasi diskon dan ringkasan pesanan pada sistem E-Commerce. Kode legasi memiliki dependensi tinggi terhadap variabel global, validasi tercampur dengan kalkulasi, dan memutasi item keranjang belanja.

```javascript
// Data State Simulasi
const shoppingCart = [
  { sku: 'ITEM-01', name: 'Mechanical Keyboard', price: 1_200_000, quantity: 1 },
  { sku: 'ITEM-02', name: 'Desk Mat', price: 250_000, quantity: 2 },
  { sku: 'ITEM-03', name: 'USB-C Cable', price: 80_000, quantity: 3 }
];

// 1. Single Responsibility: Fungsi spesifik untuk kalkulasi harga item
const calculateItemSubtotal = ({ price, quantity }) => price * quantity;

// 2. Single Responsibility: Kalkulator Diskon Bersih (Pure Calculation)
const applyDiscountTier = (totalAmount, discountCode) => {
  const DISCOUNT_RULES = {
    HARBOLNAS: { rate: 0.15, maxDiscount: 300_000 },
    TECHNEW: { rate: 0.10, maxDiscount: 150_000 }
  };

  const selectedRule = DISCOUNT_RULES[discountCode];
  if (!selectedRule) return 0;

  const calculatedDiscount = totalAmount * selectedRule.rate;
  return Math.min(calculatedDiscount, selectedRule.maxDiscount);
};

// 3. Orchestrator Function: Menggabungkan sub-tugas secara deklaratif
const generateOrderInvoice = (cartItems, { discountCode = null, taxRate = 0.11 } = {}) => {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    throw new Error('Validasi Gagal: Keranjang belanja tidak boleh kosong.');
  }

  // Hitung total murni tanpa mutasi
  const rawSubtotal = cartItems.reduce(
    (accumulatedTotal, item) => accumulatedTotal + calculateItemSubtotal(item), 
    0
  );

  const discountDeduction = applyDiscountTier(rawSubtotal, discountCode);
  const taxableAmount = rawSubtotal - discountDeduction;
  const calculatedTax = taxableAmount * taxRate;
  const finalPayableAmount = taxableAmount + calculatedTax;

  return {
    subtotal: rawSubtotal,
    discount: discountDeduction,
    tax: calculatedTax,
    totalFinal: finalPayableAmount,
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0)
  };
};

// Eksekusi
const orderSummary = generateOrderInvoice(shoppingCart, { discountCode: 'HARBOLNAS' });
console.log('Order Summary Invoice:', JSON.stringify(orderSummary, null, 2));
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│               ALUR PIPELINE DATA TANPA MUTASI (CLEAN CODE)             │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Raw Input] ──> [Validasi Domain]                                     │
│                         │                                              │
│                         ▼                                              │
│                  [Transformasi Murni] (calculateItemSubtotal)          │
│                         │                                              │
│                         ▼                                              │
│                  [Aggregasi Bersih] (reduce / toSorted)                │
│                         │                                              │
│                         ▼                                              │
│  [Output Instans Baru] ◄┘ (Tidak ada referensi Heap lama yang diubah) │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Early Returns / Guard Clauses**: Hindari *deep nested `if-else`*. Validasi kondisi kegagalan di baris awal fungsi lalu langsung kembalikan *error* atau nilai kosong.
- ✅ **Pisahkan DRY vs YAGNI dengan Bijak**: Terapkan DRY jika duplikasi logika mengandung aturan domain bisnis yang sama. Jangan satukan dua blok kode yang kebetulan mirip strukturnya tetapi memiliki alasan perubahan (*reasons to change*) yang berbeda (Hindari *Premature Abstraction*).
- ✅ **Komentari "Mengapa", Bukan "Apa"**: Jangan tulis komentar yang mendeskripsikan sintaks JavaScript (`// loop semua user`). Tulis komentar untuk menjelaskan alasan bisnis, *edge case* perangkat keras, atau algoritma non-intuitif yang tidak bisa dijelaskan langsung oleh nama variabel.
- ❌ **Hindari Objek Argumen Tunggal Tanpa Skema**: Jangan menggunakan argumen `options` generik tanpa dekonstruksi atau nilai *default*, karena memaksa pembaca membuka seluruh implementasi fungsi untuk mengetahui properti apa saja yang dibutuhkan.

---

## ✍️ Latihan Mandiri
1. **Refaktorisasi Nested Conditional**: Buka Code Editor di bawah. Tulis ulang fungsi kalkulasi hak akses yang memiliki *if-else* bersarang 4 level menjadi fungsi datar (*flat*) dengan menerapkan teknik *Guard Clauses* dan *Early Returns*.
2. **Eliminasi Side-Effect Array**: Di Code Editor di bawah, buat sebuah fungsi `sanitizeAndRankScores(scores, threshold)` yang menerima *array of numbers*, memfilter nilai di bawah *threshold*, membalikkan urutannya dari terbesar ke terkecil menggunakan metode ES2024 `toSorted()`, dan pastikan *array* referensi asal tidak mengalami mutasi indeks.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [ECMAScript Specification: Destructuring Assignment](https://tc39.es/ecma262/#sec-destructuring-assignment)