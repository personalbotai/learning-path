# Kontrol Alur: if/else dan switch

**Slug**: `kontrol-alur-if-else` · **Level**: Dasar · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami evaluasi predikat kondisional pada `if/else`, ternary operator, dan `switch` hingga tingkat kompilasi engine JavaScript (V8 bytecode).
- Menguasai implementasi *Guard Clauses Pattern* (*Early Return*) untuk mengeliminasi *Pyramid of Doom* dan menurunkan kompleksitas siklomatik (*cyclomatic complexity*).
- Menganalisis perbedaan performa dan semantik antara `switch-case` berbasis *strict comparison* (`===`) dengan struktur *Lookup Table* (*Object literal* / `Map`).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Struktur percabangan kondisional adalah mekanisme dasar komputasi yang menginstruksikan CPU untuk mengeksekusi jalur instruksi (*branch*) yang berbeda berdasarkan evaluasi nilai *truthy* atau *falsy*. Pada engine JavaScript modern seperti V8, blok `if/else` dikompilasi oleh pipeline Ignition menjadi instruksi bytecode kondisional seperti `JumpIfFalse` atau `JumpIfTrue`. 

Saat percabangan dieksekusi berulang kali, *profiler* V8 mencatat histori percabangan tersebut untuk membantu CPU melakukan *Branch Prediction*. Jika sebuah kondisi hampir selalu menghasilkan nilai `true`, CPU akan melakukan spekulasi eksekusi instruksi berikutnya secara paralel sebelum evaluasi selesai. Namun, percabangan bersarang (*nested conditionals*) yang terlalu dalam membuat *branch prediction* rentan mengalami *misprediction penalty*, yang memaksa CPU membuang instruksi dalam *pipeline* eksekusi dan mengulang proses evaluasi.

```text
Eksekusi Bytecode Percabangan V8:
[Evaluasi Kondisi] ───> [JumpIfFalse offset] ───> [Lompat ke Blok Else]
         │
         └───> (Jika True) ───> [Eksekusi Blok If] ───> [Jump end]
```

Pernyataan `switch` bekerja secara berbeda dengan mengevaluasi ekspresi satu kali, lalu membandingkannya terhadap setiap klausa `case` menggunakan operator kesetaraan ketat (*strict equality* `===`). Tidak ada koersi tipe data (*type coercion*) implisit yang terjadi. Jika nilai kecocokan berupa deretan integer berurutan atau string konstan terdefinisi, engine kompilator *Just-In-Time* (JIT) dapat mengoptimalkannya menjadi tabel lompatan (*Jump Table*) berkemampuan resolusi $O(1)$, berbeda dengan evaluasi sekuensial linear $O(n)$ pada rantai `if-else if` panjang.

### 2. Sintaks & Penggunaan Modern
JavaScript modern menyediakan beragam strategi percabangan sesuai dengan skenario kontekstual kode.

#### A. Guard Clauses (Early Return) vs Nested Nesting
Struktur *Guard Clause* membalikkan paradigma evaluasi: validasi kondisi kegagalan atau kasus tepi (*edge cases*) terlebih dahulu di awal fungsi, lalu hentikan eksekusi segera (*early exit*). Pendekatan ini menjaga alur logika utama tetap berada di level indentasi terluar.

```javascript
// CONTOH 1: Perbandingan Nested if vs Guard Clause

// ❌ Anti-pattern: Pyramid of Doom (Nested)
function processOrderBad(order) {
  if (order) {
    if (order.isValid) {
      if (order.items.length > 0) {
        return `Memproses ${order.items.length} item.`;
      } else {
        return "Keranjang kosong.";
      }
    } else {
      return "Order tidak valid.";
    }
  } else {
    return "Data order wajib ada.";
  }
}

// ✅ Clean & Modern: Guard Clause Pattern
function processOrderClean(order) {
  if (!order) return "Data order wajib ada.";
  if (!order.isValid) return "Order tidak valid.";
  if (order.items.length === 0) return "Keranjang kosong.";

  // Jalur sukses utama (Happy Path) dieksekusi secara linear
  return `Memproses ${order.items.length} item.`;
}

console.log(processOrderClean({ isValid: true, items: ["Buku", "Pulpen"] }));
// Output: Memproses 2 item.
```

#### B. Strict Equality pada `switch` dan Mekanisme *Fall-Through*
Klausa `case` dalam blok `switch` mewajibkan kata kunci `break` atau `return` untuk menghentikan evaluasi. Tanpa `break`, eksekusi akan merembes (*fall-through*) ke blok `case` di bawahnya tanpa mempedulikan kecocokan kondisi.

```javascript
// CONTOH 2: switch-case dengan penanganan fall-through terkontrol
function evaluateHttpStatus(statusCode) {
  switch (statusCode) {
    case 200:
    case 201:
    case 204:
      return "Kategori: Sukses";
    case 400:
    case 401:
    case 403:
    case 404:
      return "Kategori: Client Error";
    case 500:
    case 502:
    case 503:
      return "Kategori: Server Error";
    default:
      return "Status Code Tidak Dikenali";
  }
}

console.log(evaluateHttpStatus(201)); // Output: Kategori: Sukses
console.log(evaluateHttpStatus("200")); // Output: Status Code Tidak Dikenali (Strict Comparison gagal)
```

#### C. Lookup Tables (Object / Map) sebagai Alternatif Deklaratif
Untuk pemetaan nilai dinamis yang kompleks, penggunaan kamus (*dictionary lookup*) berbasis `Map` atau *Object literal* jauh lebih deklaratif dan modular dibandingkan `switch` raksasa.

```javascript
// CONTOH 3: Map Lookup Pattern untuk Command Execution
const paymentProcessors = new Map([
  ["CREDIT_CARD", (amount) => `Memotong kartu kredit sebesar Rp${amount}`],
  ["E_WALLET", (amount) => `Mengurangi saldo e-wallet sebesar Rp${amount}`],
  ["BANK_TRANSFER", (amount) => `Membuat Virtual Account untuk Rp${amount}`],
]);

function executePayment(method, amount) {
  const handler = paymentProcessors.get(method);
  
  if (!handler) {
    throw new Error(`Metode pembayaran '${method}' belum didukung.`);
  }

  return handler(amount);
}

console.log(executePayment("E_WALLET", 150000));
// Output: Mengurangi saldo e-wallet sebesar Rp150000
```

### 3. Studi Kasus Nyata
Implementasi mesin kalkulasi diskon bertingkat (*Tiered Discount Engine*) pada transaksi e-commerce, menggabungkan validasi *guard clause*, operator ternary untuk seleksi ringkas, dan *Map lookup* untuk aturan tipe pengguna.

```javascript
// Ekosistem kalkulasi transaksi e-commerce
const TIER_DISCOUNT_RULES = new Map([
  ["REGULAR", (total) => (total > 500000 ? total * 0.05 : 0)],
  ["GOLD", (total) => total * 0.15],
  ["PLATINUM", (total) => total * 0.25],
]);

function calculateFinalTransaction({ userType, totalAmount, isPromoActive = false }) {
  // 1. Guard Clause: Validasi input data numerik & integritas objek
  if (typeof totalAmount !== "number" || Number.isNaN(totalAmount) || totalAmount < 0) {
    throw new TypeError("Parameter 'totalAmount' harus berupa angka positif valid.");
  }

  // 2. Guard Clause: Validasi ketersediaan rule
  const discountRule = TIER_DISCOUNT_RULES.get(userType);
  if (!discountRule) {
    throw new Error(`Tipe user '${userType}' tidak valid dalam sistem kupon.`);
  }

  // 3. Kalkulasi diskon berbasis tier
  const baseDiscount = discountRule(totalAmount);

  // 4. Operator Ternary: Tambahan diskon promo flat jika aktif
  const additionalPromo = isPromoActive ? 25000 : 0;

  // Total kalkulasi akhir
  const totalDiscount = Math.min(baseDiscount + additionalPromo, totalAmount);
  const payableAmount = totalAmount - totalDiscount;

  return {
    subtotal: totalAmount,
    discountApplied: totalDiscount,
    payableAmount,
    currency: "IDR"
  };
}

// Eksekusi skenario transaksi
const invoice1 = calculateFinalTransaction({
  userType: "GOLD",
  totalAmount: 1000000,
  isPromoActive: true,
});

console.log("Invoice Transaksi 1:", invoice1);
// Output Invoice Transaksi 1: { subtotal: 1000000, discountApplied: 175000, payableAmount: 825000, currency: 'IDR' }
```

### 4. Visualisasi & Mental Model

```text
POLA 1: NESTED PYRAMID OF DOOM (Tinggi Kompleksitas Kognitif & Siklomatik)
Request ──> [If Valid?] 
                 └──> [If Authenticated?] 
                           └──> [If Authorized?] ──> [Business Logic]

POLA 2: GUARD CLAUSES / EARLY EXIT (Linear, $O(1)$ Indentasi Jalur Utama)
Request ──> [!Valid?]        ──> (Throw Error / Exit)
        ──> [!Authenticated?] ──> (Throw Error / Exit)
        ──> [!Authorized?]    ──> (Throw Error / Exit)
        ──> [Business Logic (Happy Path Target)]
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Guard Clauses**: Tempatkan kondisi pengecualian, nilai *falsy*, atau batas kasus di baris paling awal fungsi guna memastikan jalur logika sukses (*happy path*) berada di tingkat indentasi dasar.
- ✅ **Batasi Penggunaan Ternary**: Gunakan operator ternary (`? :`) hanya untuk penugasan ekspresi tunggal sederhana (*single expression assignment*). Hindari menyarangkan operator ternary (*nested ternaries*) karena menurunkan keterbacaan kode (*readability*).
- ✅ **Gunakan Lookup Table untuk Kondisi Ekstensif**: Jika klausa `switch` atau `if-else if` mencakup lebih dari 4-5 cabang statis, refaktorkan menjadi `Map` atau *Object dictionary* untuk memisahkan data dari logika kendali (*data-driven design*).
- ❌ **Hindari Lupa Menyertakan `break`**: Pada konstruksi `switch-case`, ketiadaan `break` atau `return` menyebabkan *accidental fall-through* yang dapat memicu *bug state* logis fatal.

---

## ✍️ Latihan Mandiri
1. Tulis sebuah fungsi `getShippingCost(tier, weight)` di **Code Editor di bawah**. Refaktorkan struktur bercabang yang menentukan ongkos kirim (misal: "REGULAR", "EXPRESS", "SAME_DAY") menjadi *Map lookup table* yang memproses berat per kilogram secara dinamis, lengkap dengan validasi *Guard Clause*.
2. Buat fungsi `evaluateUserRisk(score, hasPendingCase)` di **Code Editor di bawah** menggunakan teknik *early return* tanpa blok `else` sama sekali untuk mengembalikan status risiko: `"HIGH"`, `"MEDIUM"`, atau `"LOW"`.

---

## 🔗 Referensi
- [MDN Web Docs: Making decisions in your code — Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [MDN Web Docs: switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [ECMAScript® 2024 Language Specification (ECMA-262): Conditional Statements](https://tc39.es/ecma262/)