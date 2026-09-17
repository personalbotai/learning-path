# Operator dan Ekspresi Modern (??, ??=, ||=, &&=, ?.)

**Slug**: `operator-dan-ekspresi` · **Level**: Dasar · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami semantik evaluasi ekspresi, presedensi operator, dan perbedaan fundamental antara coercive comparison (`==`) dengan strict comparison (`===`).
- Menguasai mekanisme *short-circuit evaluation* pada logical operators (`||`, `&&`), nullish coalescing (`??`), serta *safe property navigation* via optional chaining (`?.`).
- Mengimplementasikan logical assignment operators (`??=`, `||=`, `&&=`) untuk optimasi mutasi state tanpa memicu eksekusi setter yang redundan.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di dalam engine JavaScript (seperti V8 pada Node.js dan Chromium), setiap baris kode diuraikan menjadi Abstract Syntax Tree (AST) sebelum dikompilasi menjadi bytecode oleh interpreter (Ignition). Operator adalah instruksi primitif yang memanipulasi operand melalui operasi internal ECMAScript. Pemahaman terhadap operator bukan sekadar menghafal simbol, melainkan memahami bagaimana engine mengevaluasi nilai di Call Stack dan Heap Memory.

Perbedaan paling mendasar dalam evaluasi logika terletak pada pemisahan antara nilai *Falsy* dan *Nullish*. Operasi abstrak `ToBoolean` mengkategorikan enam nilai sebagai falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, dan `NaN`. Operator logika klasik (`||`, `&&`) bekerja berbasis konversi `ToBoolean`. Sebaliknya, *Nullish Coalescing* (`??`) hanya memeriksa apakah operand bernilai *nullish* (`null` atau `undefined`). Perbedaan ini sangat krusial ketika menangani data valid yang bernilai `0`, string kosong `""`, atau `false`.

```text
┌───────────────────────────────────────────────────────────┐
│                      Tipe Evaluasi                        │
├─────────────────────────┬─────────────────────────────────┤
│ Falsy (ToBoolean === false)                              │
│ ├── false, 0, "", NaN   ───> Ditolak oleh ||             │
│ └── null, undefined     ───> Ditolak oleh || dan ??       │
└─────────────────────────┴─────────────────────────────────┘
```

Fitur modern seperti *Logical Assignment* (`??=`, `||=`, `&&=`) membawa efisiensi level engine. Ekspresi `target ??= fallback` tidak sama persis dengan `target = target ?? fallback`. Pada logical assignment, engine V8 melakukan evaluasi short-circuit *sebelum* operasi penugasan. Jika `target` sudah terdefinisi (bukan nullish), internal method `[[Set]]` tidak akan pernah dipanggil. Hal ini mengeliminasi pemanggilan *setter traps* atau mutasi properti yang tidak diperlukan pada struktur data reaktif.

### 2. Sintaks & Penggunaan Modern
ECMAScript modern memperkenalkan operator ekspresif untuk memangkas boilerplate pengecekan defensif tanpa mengorbankan performa eksekusi runtime.

```javascript
// 1. Exponentiation & Unary Coercion
const base = 2;
const power = base ** 8; // 256 (setara Math.pow(2, 8))
const numericString = "42";
const convertedNum = +numericString; // 42 (unary plus: konversi cepat ke Number)

// 2. Strict Equality (===) vs Loose Equality (==)
// Loose equality memicu Abstract Equality Comparison Algorithm (type coercion implisit)
console.log(0 == false);   // true (koersi berbahaya)
console.log(0 === false);  // false (tipe beda: Number vs Boolean)

// 3. Optional Chaining (?., ?.[], ?.())
const apiResponse = {
  data: {
    users: [
      { id: 1, getBio: () => "Software Engineer" }
    ]
  }
};

// Safe access property, dynamic array index, dan fungsi invocation
const bio = apiResponse?.data?.users?.[0]?.getBio?.();
const nonExistent = apiResponse?.meta?.pagination?.total ?? 0;

console.log("Bio:", bio);                 // "Software Engineer"
console.log("Pagination:", nonExistent);  // 0

// 4. Logical Assignment Operators
const config = {
  timeout: 0,
  retries: null,
  debug: false
};

// ||= menimpa jika falsy (hati-hati: 0 dan false akan tertimpa)
config.debug ||= true;       // false -> true

// ??= hanya menimpa jika null atau undefined (aman untuk 0, "", false)
config.timeout ??= 5000;     // 0 tetap 0 (bukan nullish)
config.retries ??= 3;        // null -> diisi 3

// &&= menimpa hanya jika operand kiri bernilai truthy
let activeSession = { token: "abc-123" };
activeSession &&= { token: "renewed-456", refreshed: true };

console.log("Config Result:", config);
console.log("Active Session:", activeSession);
```

### 3. Studi Kasus Nyata
Skenario: Normalisasi konfigurasi runtime service dan agregasi telemetri dari payload parsial tanpa merusak nilai batas (*boundary values* seperti limit 0).

```javascript
// Simulasi payload parsial dari microservice / environment variables
function initializeServerConfig(rawInput = {}) {
  // Defensive cloning sederhana
  const serverOptions = { ...rawInput };

  // 1. Inisialisasi fallback menggunakan ??= (mempertahankan 0 sebagai limit sah)
  serverOptions.port ??= 8080;
  serverOptions.maxConnections ??= 1000;
  serverOptions.rateLimit ??= 0; // 0 berarti rate limit nonaktif (jangan ditimpa ke default!)

  // 2. Gunakan ||= hanya jika string/objek kosong harus diganti fallback
  serverOptions.serverName ||= "internal-node-worker";

  // 3. Optional chaining untuk nested hooks/handlers
  const metricsHook = serverOptions.plugins?.telemetry?.onBoot;
  const executionStatus = metricsHook?.(serverOptions.serverName) ?? "No telemetry hook registered";

  return {
    serverOptions,
    status: executionStatus
  };
}

// Uji kasus dengan nilai batas (edge-cases)
const productionPayload = {
  serverName: "", // String kosong -> harus fallback
  rateLimit: 0,   // Nilai 0 -> HARUS dipertahankan
  plugins: {
    telemetry: {
      onBoot: (name) => `Telemetry active for: ${name}`
    }
  }
};

const initialized = initializeServerConfig(productionPayload);

console.log("Final Config:", initialized.serverOptions);
// rateLimit: 0 (berhasil dipertahankan, tidak tertimpa)
// serverName: "internal-node-worker" (berhasil difallback)
console.log("Telemetry Status:", initialized.status);
```

### 4. Visualisasi & Mental Model
Mekanisme percabangan alur evaluasi di balik operator logika:

```text
Logical OR (A || B)
  Evaluasi A ──── (Truthy) ────> Return A (Stop)
       │
    (Falsy)
       └───────────────────────> Return B

Nullish Coalescing (A ?? B)
  Evaluasi A ── (Bukan Null/Undefined) ──> Return A (Stop - 0/""/false aman)
       │
  (Null/Undefined)
       └───────────────────────────────> Return B

Optional Chaining (A?.B)
  Evaluasi A ── (Null/Undefined) ────────> Return undefined (B tidak dievaluasi)
       │
  (Bukan Null/Undefined)
       └───────────────────────────────> Evaluasi & Return A.B
```

---

## 💡 Best Practices & Tips
- ✅ Gunakan `??` daripada `||` untuk parameter numerik dan boolean agar nilai sah seperti `0`, `false`, dan `""` tidak tertimpa secara tidak sengaja.
- ✅ Gunakan `===` (Strict Equality) secara konsisten untuk menghindari *type coercion matrix* JavaScript yang ambigu dan menurunkan optimasi kompilasi JIT (TurboFan).
- ✅ Manfaatkan `?.` saat membaca data hierarkis dari eksternal (API/JSON), namun hindari over-chaining pada arsitektur internal sendiri karena dapat menyembunyikan inkonsistensi *domain model*.
- ❌ **Anti-Pattern**: Menggunakan `||` untuk menetapkan default value pada variabel boolean:
  ```javascript
  // BURUK: jika isDisabled bernilai false, ekspresi menghasilkan true
  const disabledState = isDisabled || true;

  // BENAR: mempertahankan false
  const safeDisabledState = isDisabled ?? true;
  ```

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buat sebuah fungsi `parseUserSession(rawUser)` yang menerima objek dengan properti opsional bersarang (`profile?.settings?.theme`). Gunakan `??=` untuk mengisi default theme `"dark"` hanya jika nilai aslinya `null` atau `undefined`, lalu uji dengan objek yang memiliki theme `""` (string kosong).
2. Tulis implementasi fungsi kalkulasi diskon di **Code Editor di bawah** yang membedakan penanganan diskon `0%` (angka valid) menggunakan operator `??`, pastikan nilai diskon tidak berubah menjadi nilai default `10%`.

---

## 🔗 Referensi
- [MDN Web Docs: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [TC39 Proposal: Logical Assignment Operators](https://github.com/tc39/proposal-logical-assignment)
- [ECMAScript 2024 Language Specification (ECMA-262)](https://tc39.es/ecma262/)