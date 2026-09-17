# IIFE & Module Pattern → ESM & Top-Level Await

**Slug**: `iife-dan-module-pattern` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Membedakan mekanisme isolasi scope berbasis Closure (IIFE/Revealing Module Pattern) dengan enkapsulasi berbasis Module Record pada ECMAScript Modules (ESM).
- Menguasai siklus hidup ESM: *Parsing*, *Instantiation*, dan *Evaluation*, serta perbedaannya dengan evaluasi sekuensial skrip klasik.
- Mengimplementasikan *dynamic import()* dan *Top-Level Await* untuk asynchronous module initialization tanpa memblokir thread utama eksekusi JavaScript.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Sebelum standardisasi ECMAScript 2015 (ES6), JavaScript tidak memiliki sistem modul bawaan pada level bahasa. Seluruh skrip berbagi satu ruang lingkup global (*Global Execution Context*), yang memicu risiko fatal *global namespace pollution* dan tabrakan nama variabel. Untuk mengatasi ini, komunitas menciptakan pola **IIFE (Immediately Invoked Function Expression)** dan **Revealing Module Pattern**. Pola ini mengeksploitasi fungsi JavaScript untuk membuat *Lexical Environment* baru. Variabel privat ditahan di dalam *heap memory* via mekanisme *closure*, sedangkan API publik dikembalikan (*return*) dalam bentuk *plain object reference*.

Transisi ke **ES Modules (ESM)** mengubah paradigma dari runtime object creation menjadi parsing statis pada level engine (V8/SpiderMonkey). ESM beroperasi dalam mode `strict` secara default dan melalui tiga fase deterministik:
1. **Construction (Parsing)**: Engine mengunduh berkas dan mem-parsing sintaks menjadi *Module Record*.
2. **Instantiation**: Engine mengalokasikan lokasi memori untuk semua *export* dan *import* (*live bindings*), menghubungkannya tanpa mengeksekusi kode.
3. **Evaluation**: Engine mengeksekusi kode di dalam tubuh modul dan mengisi alokasi memori dengan nilai sebenarnya.

Hadirnya **Top-Level Await (TLA)** di standard modern memungkinkan *keyword* `await` digunakan langsung di root level modul ESM tanpa pembungkus fungsi `async`. Di balik layar, modul dengan TLA dikonversi menjadi *asynchronous execution graph*. Modul yang mengimpor modul TLA akan menunda eksekusi evaluasinya hingga *Promise* dari sub-modul selesai di-resolve pada *Microtask Queue*, tanpa memblokir *sibling modules* yang tidak bergantung padanya.

### 2. Sintaks & Penggunaan Modern
Berikut perbandingan arsitektur dari Revealing Module Pattern klasik hingga modern ESM dengan Dynamic Import dan Top-Level Await.

```javascript
// ==========================================
// 1. REVEALING MODULE PATTERN (LEGACY ESM EMULATION)
// ==========================================
const AuthModule = (function () {
  // Private state tersimpan dalam closure Lexical Environment
  let sessionToken = null;
  const encryptionKey = "v8-internal-secret";

  function encrypt(data) {
    return `${data}:${encryptionKey}`;
  }

  // Public API
  return {
    login(username) {
      sessionToken = encrypt(username);
      console.log(`[IIFE] User ${username} logged in.`);
    },
    isAuthenticated() {
      return sessionToken !== null;
    }
  };
})();

AuthModule.login("alex_staff_eng");
console.log(`[IIFE] Auth Status:`, AuthModule.isAuthenticated());
// console.log(AuthModule.sessionToken); // undefined (terenkapsulasi)

// ==========================================
// 2. MODERN ESM WITH DYNAMIC IMPORT & ASYNC PATTERN
// ==========================================
// Simulasi dynamic module loading menggunakan Native Promise & Dynamic Import
async function loadPaymentGateway(provider) {
  console.log(`[ESM] Memulai lazy loading gateway: ${provider}...`);
  
  // Simulasi import() dinamis: import(`./gateways/${provider}.js`)
  const gatewayModule = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        processTransaction: (amount) => {
          return { success: true, txnId: `TXN-${Date.now()}`, amount };
        }
      });
    }, 100);
  });

  return gatewayModule;
}

// Top-Level Await execution flow (ES2024 Module Context)
const stripe = await loadPaymentGateway("stripe");
const transaction = stripe.processTransaction(500000);
console.log(`[ESM] Transaksi berhasil dieksekusi:`, transaction);
```

### 3. Studi Kasus Nyata
Implementasi *Database & Configuration Bootstrapper* modern: modul konfigurasi melakukan koneksi asinkron dan validasi environment secara independen sebelum mengekspos instance siap pakai ke consumer module.

```javascript
// databaseBootstrap.js (Simulasi Modul ESM dengan Top-Level Await)
class DatabaseClient {
  #connectionString;
  #isConnected = false;

  constructor(connStr) {
    this.#connectionString = connStr;
  }

  async connect() {
    // Simulasi handshake network I/O
    await new Promise((resolve) => setTimeout(resolve, 150));
    this.#isConnected = true;
    return `Connected to [${this.#connectionString}] via V8 microtask loop`;
  }

  query(sql) {
    if (!this.#isConnected) throw new Error("Database belum terinisialisasi!");
    return { status: 200, sql, records: [{ id: 1, name: "Production Node" }] };
  }
}

// Inisialisasi asinkron langsung di level modul (Top-Level Await)
const dbUrl = "postgresql://cluster-prod.internal:5432/app";
const dbClient = new DatabaseClient(dbUrl);

console.log("[DB Module] Memulai inisialisasi koneksi...");
const statusMessage = await dbClient.connect();
console.log(`[DB Module] Status: ${statusMessage}`);

// Export live-instance yang dijamin telah terkoneksi
const db = dbClient;

// ==========================================
// Consumer Module Execution
// ==========================================
const queryResult = db.query("SELECT * FROM nodes WHERE active = true;");
console.log("[Consumer Module] Data berhasil ditarik:", queryResult.records);
```

### 4. Visualisasi & Mental Model

```text
┌──────────────────────────────────────────────────────────────────────────┐
│              ESM TOP-LEVEL AWAIT EXECUTION GRAPH IN ENGINE               │
└──────────────────────────────────────────────────────────────────────────┘

 [ Module A (Static TLA) ]             [ Module B (Sync Leaf) ]
           │                                      │
    (Awaits Promise)                              │
           │                                      │
           ▼                                      ▼
 ┌───────────────────┐                  ┌───────────────────┐
 │ Microtask Queue   │                  │ Call Stack (Sync) │
 │ [Resolve Module A]│                  │ [Evaluate Mod B]  │
 └─────────┬─────────┘                  └───────────────────┘
           │                                      │
           ▼ (Event Loop Tick)                    │
 ┌────────────────────────────────────────────────┴────────────────────────┐
 │                      Root Module (Entry Point)                          │
 │  Menunggu Module A resolve TANPA memblokir thread eksekusi paralel     │
 └─────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Manfaatkan *Live Bindings* ESM**: Nilai export pada ESM adalah referensi ke lokasi memori asli, bukan salinan nilai statis (*by-value*) seperti pada `module.exports` CommonJS.
- ✅ **Gunakan *Dynamic Import* untuk Code Splitting**: Pisahkan dependensi berat non-kritis menggunakan `import('module-path')` untuk menghemat alokasi memori awal saat cold start.
- ✅ **Isolasi Kegagalan pada Top-Level Await**: Selalu tangani potensi error pada root module dengan `try...catch` agar tidak menyebabkan *unhandled rejection* yang menghentikan bootstrap seluruh *Module Dependency Tree*.
- ❌ **Hindari Top-Level Await Waterfall**: Jangan menempatkan beberapa operasi asynchronous sequential di root module jika dapat dieksekusi secara paralel menggunakan `await Promise.all([...])`.

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, modifikasi modul IIFE klasik agar mengekspos method publik yang dapat memanipulasi variabel privat tipe `Map`, lalu cegah modifikasi langsung via *Object Mutation* menggunakan `Object.freeze()`.
2. Tulis sebuah simulasi ESM di **Code Editor di bawah** yang memuat dua layanan pihak ketiga secara dinamis (`dynamic import()`) menggunakan `Promise.allSettled`, dan buat fallback module jika salah satu layanan mengalami kegagalan (*network failure*).

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Modules (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [TC39 Specification: Top-Level Await in ES2022+](https://tc39.es/ecma262/#sec-modules)
- [V8 Dev Blog: Understanding JavaScript Modules & Top-Level Await](https://v8.dev/features/top-level-await)