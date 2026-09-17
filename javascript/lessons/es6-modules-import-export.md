# ES Modules: import/export + Top-Level Await

**Slug**: `es6-modules-import-export` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami siklus hidup evaluasi ES Modules (Construction, Instantiation, Evaluation) serta mekanisme *live bindings* pada memori V8.
- Menguasai sintaks modular modern: *named exports*, *default exports*, *re-exporting*, *import aliases*, dan *dynamic import()* untuk *lazy loading*.
- Mengimplementasikan *Top-Level Await* secara aman tanpa memblokir *main thread* serta mengonfigurasi native browser ESM menggunakan *Import Maps*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
ECMAScript Modules (ESM) adalah standar resmi JavaScript untuk modularisasi kode yang bersifat statis secara deklaratif. Berbeda dengan sistem CommonJS (`require`/`module.exports`) milik Node.js tradisional yang bersifat sinkron dan mengevaluasi modul pada saat *runtime* (menghasilkan salinan nilai objek), ESM diproses oleh *JavaScript engine* (seperti Google V8) melalui tiga fase terpisah: **Construction** (penguraian AST dan resolusi modul), **Instantiation** (alokasi memori untuk *live bindings*), dan **Evaluation** (eksekusi kode sebenarnya di Call Stack).

Karakteristik paling krusial dari ESM adalah **Live Bindings**. Ketika sebuah variabel diekspor dan dimodifikasi di dalam modul asalnya, seluruh modul pengimpor akan langsung membaca nilai terbaru tersebut secara *read-only*. Engine V8 tidak menyalin (*copy*) nilai ke *scope* modul lain, melainkan membuat referensi langsung (*pointer*) ke lokasi memori variabel tersebut pada *module record environment*.

```
CommonJS: module.exports = { count } ──> [Copy Value: count=0] (Statis/Terputus)
ESM     : export let count           ──> [Live Memory Reference] ──> Nilai selalu sinkron
```

Fitur **Top-Level Await (TLA)** memungkinkan kata kunci `await` digunakan langsung di cakupan terluar (*top-level scope*) modul ESM tanpa harus dibungkus fungsi `async`. Saat engine menemukan `await` pada *top-level*, eksekusi modul tersebut akan ditangguhkan (*paused*), modul yang bergantung padanya akan menunggu hingga *Promise* selesai (*resolved*), namun *Event Loop* tetap bebas memproses tugas lain pada *Microtask Queue* tanpa memblokir *thread* utama aplikasi.

### 2. Sintaks & Penggunaan Modern
ESM menyediakan fleksibilitas impor dan ekspor, baik secara statis maupun dinamis (*on-demand*).

```javascript
// --- Simulasi Arsitektur Modul via Dynamic Data URI (Runnable ES2024) ---

// 1. Definisikan modul kalkulasi (Named Export & Live Binding)
const mathModuleCode = `
  export let counter = 0;
  export const increment = () => ++counter;
  export const add = (a, b) => a + b;
  export const multiply = (a, b) => a * b;
`;

// 2. Definisikan modul konfigurasi (Default Export)
const configModuleCode = `
  const config = { apiEndpoint: "https://api.domain.internal/v1", timeout: 5000 };
  export default config;
`;

// Inisialisasi dynamic modules menggunakan Base64/Data URI
const mathModuleUri = `data:text/javascript;base64,${btoa(mathModuleCode)}`;
const configModuleUri = `data:text/javascript;base64,${btoa(configModuleCode)}`;

// Eksekusi Import Dinamis & Top-Level Await
console.log("=== 1. Live Bindings & Named Imports ===");
const { counter, increment, add, multiply: times } = await import(mathModuleUri);

console.log("Counter awal:", counter); // 0
increment();
// Mengakses kembali counter membuktikan sifat live binding
const updatedMath = await import(mathModuleUri);
console.log("Counter setelah increment:", updatedMath.counter); // 1
console.log("Hasil add:", add(5, 3)); // 8
console.log("Hasil multiply (alias 'times'):", times(4, 2)); // 8

console.log("\n=== 2. Default Export & Dynamic Import ===");
const { default: appConfig } = await import(configModuleUri);
console.log("Loaded App Config:", appConfig.apiEndpoint);
```

### 3. Studi Kasus Nyata
Implementasi pola *Plugin Architecture* dengan *dynamic import()* untuk memuat driver database sesuai konfigurasi lingkungan secara *lazy*, dikombinasikan dengan *Top-Level Await* untuk koneksi instan.

```javascript
// Database Driver Abstraction
const postgresDriverCode = `
  export async function connect() {
    return { status: "CONNECTED", type: "PostgreSQL Pool", latency: "1.2ms" };
  }
`;

const redisDriverCode = `
  export async function connect() {
    return { status: "CONNECTED", type: "Redis In-Memory", latency: "0.4ms" };
  }
`;

// Plugin Registry Loader
async function initializeDriver(driverName) {
  const drivers = {
    postgres: `data:text/javascript;base64,${btoa(postgresDriverCode)}`,
    redis: `data:text/javascript;base64,${btoa(redisDriverCode)}`
  };

  if (!drivers[driverName]) {
    throw new Error(`Driver [${driverName}] tidak terdaftar.`);
  }

  // Lazy loading driver on-demand
  console.log(`[Loader] Mengunduh modul driver: ${driverName}...`);
  const driverModule = await import(drivers[driverName]);
  return await driverModule.connect();
}

// Simulasi Environment Bootstrap menggunakan Top-Level Await
const ACTIVE_DB = "postgres";
console.log(`[App] Inisialisasi Database Driver: ${ACTIVE_DB}`);

// Top-Level Await resolving dependency
const connection = await initializeDriver(ACTIVE_DB);
console.log("[App] Database siap digunakan:", connection);
```

Pada *environment* browser modern, resolusi *bare specifier* disederhanakan menggunakan `<script type="importmap">`:
```html
<script type="importmap">
{
  "imports": {
    "app/utils": "./src/utils/index.js",
    "app/config": "./src/config/app.json"
  }
}
</script>
<script type="module">
  // Resolusi instan tanpa bundler eksternal
  import { formatCurrency } from "app/utils";
</script>
```

### 4. Visualisasi & Mental Model
Alur parsing, instansiasi live binding, dan evaluasi *Top-Level Await* di dalam engine JavaScript:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   FASE EVALUASI ES MODULES & TLA                       │
└────────────────────────────────────────────────────────────────────────┘

 1. CONSTRUCTION (Static Graph)
    Parse AST ───> Bentuk Dependency Tree Module Records (Statis)
         │
 2. INSTANTIATION (Memory Allocation)
    Heap Memory: [ Module Record A ] <──Live Binding──> [ Module Record B ]
         │       (Pointer terhubung, kode belum dieksekusi)
         │
 3. EVALUATION (Execution & Top-Level Await)
    Call Stack             Microtask Queue               Downstream Modules
    ┌──────────────┐      ┌─────────────────┐           ┌──────────────────┐
    │ Eval Modul A │ ───> │ Promise Pending │ ───(TLA)─>│ Status: BLOCKED  │
    │ (await fetch)│      │ (HTTP/IO Task)  │           │ (Menunggu Modul A│
    └──────────────┘      └────────┬────────┘           │ selesai dieval)  │
           │                       │                    └────────┬─────────┘
      (Yield Thread)               ▼                             │
    Event Loop tetap       Promise Resolved                      ▼
    memproses UI/Timer    Microtask dijalankan ───────> Modul B Lanjut Eval
```

---

## 💡 Best Practices & Tips
- ✅ **Prioritaskan Named Exports**: Mempermudah proses *Static Analysis* dan *Tree-Shaking* oleh bundler (Vite/Rollup/Webpack) untuk memangkas *dead code*.
- ✅ **Gunakan Dynamic `import()` untuk Code Splitting**: Pisahkan dependensi berat (seperti library visualisasi chart atau PDF generator) agar hanya dimuat saat user membuka rute/aksi tertentu.
- ✅ **Hati-hati dengan Top-Level Await Waterfall**: Jika sebuah modul mengimpor modul lain yang memiliki *Top-Level Await*, modul pengimpor akan tertahan. Hindari rantai dependensi TLA yang serial dan terlalu dalam.
- ❌ **Hindari Circular Dependencies**: Meskipun ESM menangani *circular import* lebih baik dari CommonJS melalui *Live Bindings*, penggunaan variabel sebelum dievaluasi (*temporal dead zone*) akan melempar `ReferenceError`.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah struktur modul menggunakan *Data URI* yang mengekspor variabel `state` dan fungsi `updateState()`. Tunjukkan bahwa perubahan pada modul sumber merefleksikan nilai baru secara langsung pada modul pengimpor (*Live Binding*).
2. Tuliskan implementasi pemanggilan dua modul secara paralel menggunakan `Promise.all` di dalam *Top-Level Await* untuk menghindari *blocking waterfall*.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [TC39 Proposal: Top-Level Await](https://github.com/tc39/proposal-top-level-await)
- [V8 Engine: JavaScript Modules Internals](https://v8.dev/features/modules)