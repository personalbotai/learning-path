# Variabel dan Tipe Data Modern (let/const, BigInt, ??, ?.)

**Slug**: `variabel-dan-tipe-data` · **Level**: Dasar · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai mekanisme alokasi memori (*Call Stack* vs *Memory Heap*) serta siklus hidup variabel dalam fase kompilasi V8 (*Hoisting* dan *Temporal Dead Zone*).
- Membedakan karakteristik 7 tipe data primitif dan tipe referensi (*Object*) secara presisi, termasuk representasi *arbitrary-precision integer* (`BigInt`).
- Mengimplementasikan teknik defensif modern ES2024 menggunakan *Optional Chaining* (`?.`), *Nullish Coalescing* (`??`), serta perbandingan presisi tipe data.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik layar, *engine* JavaScript (seperti Google V8) mengeksekusi kode melalui dua fase utama: **Fase Kreasi (Creation Phase)** dan **Fase Eksekusi (Execution Phase)**. Pada Fase Kreasi, *Execution Context* dibentuk dan seluruh deklarasi variabel dicatat ke dalam *Environment Record*. 

Variabel yang dideklarasikan dengan `var` diikat ke *Variable Environment* dan langsung diinisialisasi dengan nilai `undefined` (*hoisting klasik*). Sebaliknya, `let` dan `const` dicatat ke dalam *Lexical Environment* dalam status *uninitialized*. Area antara awal *scope* hingga baris inisialisasi dieksekusi disebut **Temporal Dead Zone (TDZ)**. Mengakses variabel pada fase TDZ akan memicu `ReferenceError` secara deterministik untuk mencegah *runtime bug*.

```text
Scope Dimulai ──> [ Masuk TDZ: let / const uninitialized ] ──> Akses = ReferenceError!
                  [ Baris Inisialisasi: let x = 10;       ] ──> Keluar TDZ
Akses Valid   ──> [ Nilai x dapat dibaca di Memory Stack  ]
```

Dari perspektif manajemen memori:
1. **Tipe Data Primitif** (`string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`): Bersifat *immutable* (nilainya tidak dapat diubah di alamat memori yang sama) dan disimpan langsung di **Call Stack** dengan ukuran alokasi tetap.
2. **Tipe Data Referensi** (`Object`, `Array`, `Function`): Bersifat *mutable* dan disimpan di **Memory Heap** (alokasi memori dinamis tak beraturan). Variabel di *Call Stack* hanya menyimpan *pointer* (alamat memori heksadesimal) yang merujuk ke lokasi objek di *Heap*.

Perbedaan ini krusial: `const` hanya mengunci nilai pada *Call Stack*. Untuk tipe primitif, nilainya absolut tidak bisa diubah; namun untuk objek, `const` hanya mengunci alamat *pointer*-nya, sedangkan properti internal di *Heap* tetap dapat dimutasi (*mutated*).

---

### 2. Sintaks & Penggunaan Modern

JavaScript modern menyediakan operator eksplisit untuk membedakan nilai absensial (`null` / `undefined`) dari nilai *falsy* (`0`, `""`, `false`). Operator *Nullish Coalescing* (`??`) hanya mengevaluasi operand kanan jika operand kiri bernilai *nullish*, berbeda dengan operator logika OR (`||`) yang memicu *fallback* pada semua nilai *falsy*.

```javascript
// 1. Primitive Types, BigInt & Immutability
const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
const largeInt = 9007199254740991n + 2n; // BigInt literal (akhiran 'n')
const uniqueKey = Symbol("transaction_id");

let primitiveStr = "v8-engine";
primitiveStr.toUpperCase(); // Mengembalikan string baru, tidak mengubah nilai asli
console.log(primitiveStr); // "v8-engine"

// 2. Stack vs Heap Mutability
const config = { timeout: 5000 };
config.timeout = 3000; // Valid: mutasi data di Memory Heap
// config = { timeout: 3000 }; // TypeError: Assignment to constant variable (Pointer diubah)

// 3. Type Checking: typeof vs instanceof
console.log(typeof 42n);             // "bigint"
console.log(typeof uniqueKey);        // "symbol"
console.log(typeof null);             // "object" (Legacy bug dalam spesifikasi JS awal)
console.log([] instanceof Array);     // true (Pengecekan prototype chain)

// 4. Modern Short-Circuit & Safe Navigation
const serverConfig = {
  port: 0,
  tls: { version: "TLSv1.3" }
};

// Operator || vs ??
const portFallback1 = serverConfig.port || 8080; // 8080 (0 dianggap falsy)
const portFallback2 = serverConfig.port ?? 8080; // 0 (0 dipertahankan karena bukan null/undefined)

// Optional Chaining (?.) & Nullish Coalescing Assignment (??=)
let client;
client ??= { name: "Guest" }; // Assign hanya jika client adalah null/undefined
const tlsVer = serverConfig?.tls?.version ?? "TLSv1.2";

console.log({ portFallback1, portFallback2, tlsVer, client });
```

---

### 3. Studi Kasus Nyata

Dalam pemrosesan data transaksi finansial skala tinggi, nilai moneter mikro sering melebihi batasan floating-point IEEE-754 (`Number`). Kita menggunakan `BigInt` untuk presisi saldo, dan kombinasi `?.` serta `??` untuk membaca *payload* API yang tidak lengkap tanpa melempar *runtime exception*.

```javascript
// Simulasi respons API Gateway perbankan
const apiPayload = {
  transactionId: 18446744073709551615n, // BigInt: ID transaksi di luar jangkauan Number
  sender: {
    accountNumber: "ACC-9901",
    profile: null // Profil pengguna belum lengkap
  },
  meta: {
    retryCount: 0,
    feeInMicroCents: 0n
  }
};

function processTransaction(payload) {
  // Safe deep property read dengan Optional Chaining
  const senderEmail = payload.sender?.profile?.email ?? "no-email@domain.com";
  
  // Memastikan nilai 0 (angka / BigInt) tidak tertimpa default
  const retryLimit = payload.meta?.retryCount ?? 3;
  const platformFee = payload.meta?.feeInMicroCents ?? 1000n;

  // Type Coercion Check: Hindari == (loose equality)
  const isZeroFee = platformFee === 0n;

  return {
    txId: payload.transactionId.toString(),
    senderEmail,
    retryLimit,
    platformFee: `${platformFee}n`,
    isZeroFee
  };
}

const result = processTransaction(apiPayload);
console.log(result);
// Output:
// {
//   txId: '18446744073709551615',
//   senderEmail: 'no-email@domain.com',
//   retryLimit: 0,
//   platformFee: '0n',
//   isZeroFee: true
// }
```

---

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          ARSITEKTUR MEMORI V8                          │
├───────────────────────────────────┬────────────────────────────────────┤
│       CALL STACK (Primitif)       │        MEMORY HEAP (Objek)         │
│  [Alokasi Tetap, Cepat, LIFO]     │  [Alokasi Dinamis, Ukuran Fleksibel]│
├───────────────────────────────────┼────────────────────────────────────┤
│ let id      = 1001                │                                    │
│ let isAuth  = true                │                                    │
│ let bigVal  = 9007199254740995n   │                                    │
│ const user  = 0x00F4A12B ─────────┼──────> 0x00F4A12B: {               │
│                                   │          name: "Alex",             │
│                                   │          role: "Engineer"          │
│                                   │        }                           │
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `const` secara default**: Gunakan `let` hanya ketika nilai variabel memang dirancang untuk di-*reassign*. Tinggalkan penggunaan `var` sepenuhnya untuk mengeliminasi efek samping *function-scoping leakage*.
- ✅ **Gunakan `??` bukan `||` untuk parameter konfigurasi**: Operator `??` mencegah penggantian nilai valid seperti angka `0`, string kosong `""`, atau boolean `false`.
- ✅ **Selalu gunakan Strict Equality (`===`)**: Hindari *type coercion* implisit dari `==` yang dapat menghasilkan anomali komparasi (contoh: `0 == ""` bernilai `true`, namun `0 === ""` bernilai `false`).
- ❌ **Jangan mencampur operasi `BigInt` dengan `Number` secara implisit**: Ekspresi `10n + 5` akan melempar `TypeError`. Konversikan salah satu tipe secara eksplisit (`10n + BigInt(5)`).

---

## ✍️ Latihan Mandiri
1. Buat sebuah fungsi pembersih konfigurasi di **Code Editor di bawah** yang menerima objek dengan properti *nested* opsional, lalu kembalikan objek baru dengan nilai *fallback* menggunakan `??` dan `?.` tanpa memodifikasi objek sumber.
2. Tulis kode di **Code Editor di bawah** yang membuktikan fenomena *Temporal Dead Zone* (TDZ) pada `let` dan `const` saat mendeklarasikan variabel di dalam *block scope* (`{ ... }`), serta tangani error tersebut menggunakan blok `try...catch`.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [ECMAScript® 2024 Language Specification (ECMA-262)](https://tc39.es/ecma262/)
- [V8 Engine Memory Management Internals](https://v8.dev/blog)