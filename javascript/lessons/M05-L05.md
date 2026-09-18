# Number dan BigInt

**Slug**: `number-dan-bigint` · **Level**: Basic · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami struktur internal representasi data angka berbasis standar IEEE 754 64-bit *double precision* serta implikasinya terhadap presisi desimal.
- Mengidentifikasi akar penyebab anomali floating-point (`0.1 + 0.2 !== 0.3`) dan menyelesaikan masalah komparasi fraksional menggunakan `Number.EPSILON`.
- Menguasai penggunaan metode statis evaluasi nilai seperti `Number.isFinite`, `Number.isNaN`, dan `Number.isSafeInteger` untuk validasi tipe yang ketat.
- Menerapkan tipe data primitif `BigInt` untuk menangani kalkulasi integer di luar batas aman 53-bit, memahami pemotongan pembagian (*truncation*), serta mengelola aturan konversi tipe data eksplisit.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di dalam JavaScript, tipe data `Number` tidak dibedakan menjadi *integer*, *float*, atau *double* layaknya bahasa seperti C++ atau Java. Seluruh nilai numerik standar direpresentasikan sebagai format **IEEE 754 binary64** (*double-precision floating-point*). Struktur 64-bit ini terbagi menjadi tiga segmen memori: **1 bit sign** (tanda positif/negatif), **11 bit exponent** (skala perpangkatan basis 2 dengan bias 1023), dan **52 bit mantissa/significand** (fraksi presisi nilai).

```text
  1 bit        11 bit                  52 bit
┌───────┬───────────────────┬──────────────────────────────────────────┐
│ Sign  │     Exponent      │           Fraction (Mantissa)            │
└───────┴───────────────────┴──────────────────────────────────────────┘
```

Karena mantissa memiliki lebar 52 bit ditambah 1 bit implisit (*hidden leading bit* bernilai 1 untuk bilangan ternormalisasi), JavaScript hanya memiliki batas presisi integer sebesar 53 bit. Batas tertinggi integer aman tanpa distorsi matematis didefinisikan sebagai `Number.MAX_SAFE_INTEGER` ($2^{53} - 1 = 9.007.199.254.740.991$). Jika operasi aritmatika melampaui batas ini, dua integer berurutan dapat menghasilkan representasi bit yang identik akibat keterbatasan resolusi pada *Least Significant Bit* (LSB).

Masalah klasik seperti `0.1 + 0.2 !== 0.3` berakar dari konversi desimal ke fraksi biner. Angka desimal $0.1$ ($1/10$) dan $0.2$ ($1/5$) menghasilkan representasi biner periodik tak terhingga ($0.0001100110011..._2$). Mesin V8 memotong fraksi ini tepat pada batas 53 bit, memicu *rounding error* sebesar $\approx 2.77 \times 10^{-17}$. Hasil kalkulasinya menjadi `0.30000000000000004`.

Untuk mengatasi kebutuhan integer berukuran tak terbatas (misalnya *hashing* kriptografi, ID database 64-bit, atau komputasi finansial presisi tinggi), ECMAScript memperkenalkan tipe primitif **`BigInt`**. Berbeda dari `Number` yang pada level engine dioptimasi sebagai nilai unboxed 31/62-bit *Smi* (*Small Integer*) atau *HeapNumber*, `BigInt` disimpan di memory heap sebagai *digit array* dinamis berukuran variabel yang kapasitasnya hanya dibatasi oleh memori sistem.

### 2. Sintaks & Penggunaan Modern
ECMAScript modern menyediakan metode statis eksplisit pada namespace `Number` untuk menggantikan fungsi global legacy yang memiliki perilaku *coercion* agresif.

```javascript
// 1. Masalah Floating-Point dan Solusi Epsilon
const sum = 0.1 + 0.2;
const expected = 0.3;
const isAccurate = Math.abs(sum - expected) < Number.EPSILON;

console.log("0.1 + 0.2 =", sum); // 0.30000000000000004
console.log("Strict Equality (===):", sum === expected); // false
console.log("Safe Precision Check:", isAccurate); // true

// 2. Evaluasi Nilai Aman dan Validasi Modern
console.log("Safe Integer Check:", Number.isSafeInteger(9_007_199_254_740_991)); // true
console.log("Unsafe Integer Check:", Number.isSafeInteger(9_007_199_254_740_992)); // false

// Number.isNaN vs window.isNaN (Tidak melakukan type coercion implisit)
console.log("global isNaN('foo'):", isNaN("foo")); // true (String di-cast jadi NaN)
console.log("Number.isNaN('foo'):", Number.isNaN("foo")); // false (Bukan tipe Number bernilai NaN)

// 3. Sintaks BigInt dan Operasi Aritmatika
const bigA = 9007199254740991n; // Akhiran 'n' menandakan BigInt
const bigB = BigInt("9007199254740995");

const bigSum = bigA + bigB;
console.log("BigInt Addition:", bigSum.toString()); // 18014398509481986n

// Pembagian BigInt selalu melakukan pembulatan ke bawah (truncate toward zero)
const division = 7n / 2n;
console.log("BigInt Division (7n / 2n):", division); // 3n (Bukan 3.5n)

// 4. Strict Type Boundary: Coercion dilarang dalam operasi biner
try {
  // @ts-expect-error sengaja dicoba untuk demonstrasi
  const invalid = 10n + 5; 
} catch (error) {
  console.log("Mixed Type Error:", error.message); // Cannot mix BigInt and other types
}

// Konversi Eksplisit Wajib Dilakukan
const validCalculation = bigA + BigInt(5);
console.log("Explicit Cast:", validCalculation);

// Komparasi Equality
console.log("Loose Equality (10n == 10):", 10n == 10); // true
console.log("Strict Equality (10n === 10):", 10n === 10); // false
```

### 3. Studi Kasus Nyata
Saat berinteraksi dengan sistem terdistribusi (seperti Twitter Snowflake ID atau PostgreSQL `BIGINT`), ID 64-bit yang dikirimkan sebagai payload string akan rusak jika di-parse menggunakan `Number`. Penggunaan `BigInt` mutlak diperlukan untuk menjaga integritas data identitas entitas.

```javascript
// Payload JSON dari database terdistribusi
const rawDatabasePayload = {
  transactionId: "18446744073709551614", // Nilai > Number.MAX_SAFE_INTEGER
  amountInCents: 155050n,
  taxRateBasisPoints: 1100n // 11.00%
};

// Fungsi perhitungan pajak presisi integer tanpa floating-point drift
function calculateTax(amount, basisPoints) {
  // Formula: (amount * basisPoints) / 10000n
  return (amount * basisPoints) / 10000n;
}

function processTransaction(payload) {
  // Parsing ID ke BigInt untuk menjamin integritas 64-bit unsigned integer
  const parsedId = BigInt(payload.transactionId);
  const tax = calculateTax(payload.amountInCents, payload.taxRateBasisPoints);
  const total = payload.amountInCents + tax;

  return {
    id: parsedId.toString(),
    base: `${Number(payload.amountInCents) / 100} USD`,
    tax: `${Number(tax) / 100} USD`,
    total: `${Number(total) / 100} USD`
  };
}

const result = processTransaction(rawDatabasePayload);
console.log("Transaction Result:", result);
// Output id tetap: "18446744073709551614" (Tidak terdistorsi menjadi 18446744073709552000)
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│               Komparasi Model Memori & Type Boundary                   │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Number (IEEE 754 64-bit)                                            │
│    Stack / Smi Range (-2^31 s/d 2^31-1)  ──> Langsung pada Pointer Tag │
│    Float / HeapNumber (Lebih dari batas) ──> Heap Boxed 64-bit Float   │
│    Batas Aman: Presisi hilang jika > 9.007.199.254.740.991             │
├────────────────────────────────────────────────────────────────────────┤
│ 2. BigInt (Arbitrary Precision)                                        │
│    Heap Array Allocation: [ Digit_0, Digit_1, ... Digit_N ]            │
│    Batas: Kapasitas Memori Sistem RAM                                  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Interaksi Tipe                                                      │
│    [ Number ] ── (+) ── [ BigInt ] ──> ❌ TypeError (Strict Separation)│
│    [ Number ] ── (==) ── [ BigInt ] ──> ✅ Evaluasi Nilai Matematika   │
│    [ Number ] ── (===) ─ [ BigInt ] ──> ❌ Tipe Berbeda (Bukan Identik)│
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ Selalu gunakan toleransi selisih `Number.EPSILON` saat membandingkan kesetaraan dua bilangan *floating-point*.
- ✅ Gunakan representasi string atau `BigInt` untuk menangani ID numerik 64-bit dari database agar terhindar dari pemangkasan bit (*bit-truncation*).
- ✅ Gunakan `Number.isNaN()` dan `Number.isFinite()` alih-alih padanan global bawaannya untuk mencegah bugs akibat pemaksaan tipe implisit (*implicit type coercion*).
- ❌ Jangan mengonversi `BigInt` ke `Number` menggunakan `Number(bigIntValue)` sebelum melakukan operasi jika ada potensi nilai tersebut melampaui `Number.MAX_SAFE_INTEGER`, karena pemotongan presisi (*precision loss*) akan langsung terjadi secara permanen.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, lalu buat fungsi `areFloatsEqual(a, b)` yang menerima dua parameter angka desimal dan mengembalikan nilai boolean `true` jika kedua angka tersebut dianggap setara secara matematis dalam batas presisi `Number.EPSILON`.
2. Pada **Code Editor di bawah**, buat kalkulator faktorial berbasis `BigInt` bernama `bigFactorial(n)` yang dapat menghitung nilai faktorial dari angka 50 (`50n!`) secara tepat tanpa mengalami overflow atau menampilkan notasi ilmiah `Infinity`.

---

## 🔗 Referensi
- [MDN Web Docs: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN Web Docs: BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [ECMAScript 2024 Language Specification: Numbers and BigInts](https://tc39.es/ecma262/#sec-numbers-and-bigints)