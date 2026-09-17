# Setup Environment: Browser vs Node.js vs Bun/Deno

**Slug**: `setup-environment` · **Level**: Dasar · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Membedakan peran JavaScript Engine (V8, JavaScriptCore) dengan JavaScript Runtime (Browser, Node.js, Bun, Deno).
- Mengidentifikasi perbedaan akses global API (`window`, `global`, `globalThis`) serta dependensi platform (DOM vs POSIX/File System).
- Menulis kode Universal JavaScript yang aman dieksekusi di berbagai lingkungan eksekusi modern.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript murni (*ECMAScript specification*) tidak memiliki kemampuan bawaan untuk mencetak teks ke terminal, membaca berkas dari cakram padat, maupun merender elemen ke layar. Kemampuan tersebut disediakan oleh **Host Environment** (Runtime). Mesin eksekusi seperti **V8** (Chrome, Node.js, Deno) atau **JavaScriptCore** (Safari, Bun) bertugas melakukan *parsing*, kompilasi *Just-In-Time* (JIT), alokasi memori (*heap* dan *call stack*), serta eksekusi *bytecode*. Runtime membungkus mesin tersebut dengan kumpulan API tambahan.

Di lingkungan **Browser**, V8/Spidermonkey diintegrasikan dengan *Web APIs* seperti DOM (*Document Object Model*), BOM (*Browser Object Model*), WebGL, dan Event Loop berbasis rendering UI. Sebaliknya, **Node.js** memadukan V8 dengan library C++ bernama **libuv** untuk mengelola *threadpool*, *asynchronous I/O*, serta modul sistem berkas (`node:fs`) dan jaringan (`node:http`), tanpa menyertakan DOM.

Generasi runtime modern seperti **Deno** dan **Bun** hadir untuk mengatasi keterbatasan historis Node.js:
- **Deno**: Menggunakan V8 dan runtime berbasis Rust (Tokio). Mengadopsi standar Web API secara native (`fetch`, `WebSocket`, `Web Crypto`), memiliki sistem keamanan berbasis izin (*sandbox permissions*), serta mengeksekusi TypeScript secara langsung (*first-class support*).
- **Bun**: Ditulis dari nol menggunakan bahasa **Zig** di atas mesin **JavaScriptCore** (milik WebKit). Pendekatan ini menghasilkan kecepatan *startup* yang lebih instan, overhead memori yang lebih rendah, serta modul bawaan seperti *bundler*, *test runner*, dan *package manager* yang kompatibel dengan ekosistem Node.js.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        JAVASCRIPT ECOSYSTEM ARCHITECTURE               │
├────────────────────────────┬───────────────────────────────────────────┤
│        BROWSER             │            NODE.JS / DENO / BUN           │
├────────────────────────────┼───────────────────────────────────────────┤
│  Engine: V8 / SpiderMonkey │  Engine: V8 (Node/Deno) / JSC (Bun)       │
│  Global: window / self     │  Global: global (Node) / globalThis       │
│  I/O: Network (Fetch, XHR) │  I/O: POSIX, File System, TCP Sockets     │
│  UI: DOM, CSSOM, Canvas    │  UI: None (Headless / Server-side)        │
└────────────────────────────┴───────────────────────────────────────────┘
```

Untuk menyatukan disparitas akses objek global di seluruh runtime, ECMAScript memperkenalkan `globalThis`. Standar ini menjamin referensi ke objek konteks global tertinggi tanpa memedulikan apakah kode berjalan di browser (`window`), web worker (`self`), atau server (`global`).

### 2. Sintaks & Penggunaan Modern
Kode modern menuntut pendekatan *Universal JavaScript* (Isomorphic). Kita dapat mendeteksi kapabilitas runtime tanpa mengandalkan *hack* lama yang rentan *error*.

```javascript
// Memeriksa konteks eksekusi global secara universal
const runtimeContext = {
  isBrowser: typeof window !== 'undefined' && typeof window.document !== 'undefined',
  isNode: typeof process !== 'undefined' && Boolean(process.versions?.node) && !process.versions?.bun,
  isBun: typeof process !== 'undefined' && Boolean(process.versions?.bun),
  isDeno: typeof Deno !== 'undefined',
  globalIdentifier: globalThis.constructor.name
};

console.log('--- Identifikasi Runtime ---');
console.log(`Global Scope Name : ${runtimeContext.globalIdentifier}`);
console.log(`Berjalan di Browser: ${runtimeContext.isBrowser}`);
console.log(`Berjalan di Node.js: ${runtimeContext.isNode}`);
console.log(`Berjalan di Bun    : ${runtimeContext.isBun}`);
console.log(`Berjalan di Deno   : ${runtimeContext.isDeno}`);

// Mengakses Structured Cloning API (Tersedia secara native di Browser modern, Node.js 17+, Deno, Bun)
const stateSnapshot = {
  session: "auth_token_9921",
  timestamp: Date.now(),
  user: { id: 101, permissions: ["read", "write"] }
};

// Deep clone native tanpa JSON.parse(JSON.stringify())
const clonedState = globalThis.structuredClone(stateSnapshot);
clonedState.user.permissions.push("admin");

console.log('\n--- Deep Clone via Web Standard API ---');
console.log('Original Perms:', stateSnapshot.user.permissions);
console.log('Cloned Perms  :', clonedState.user.permissions);
```

### 3. Studi Kasus Nyata
Dalam arsitektur mikroservis atau aplikasi web modern, pustaka *telemetry* dan *logger* harus dapat berjalan di sisi klien (Browser) maupun sisi server (Node.js/Bun/Edge). Berikut adalah implementasi *Universal Structured Logger* yang memilih strategi penyimpanan log berdasarkan ketersediaan API lokal.

```javascript
class UniversalLogger {
  #environment;

  constructor() {
    this.#environment = this.#resolveEnvironment();
  }

  #resolveEnvironment() {
    if (typeof window !== 'undefined' && window.document) return 'BROWSER';
    if (typeof Bun !== 'undefined') return 'BUN';
    if (typeof Deno !== 'undefined') return 'DENO';
    if (typeof process !== 'undefined' && process.versions?.node) return 'NODE';
    return 'UNKNOWN';
  }

  log(event, payload = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      runtime: this.#environment,
      event,
      payload,
      memoryUsage: this.#getMemoryMetrics()
    };

    // Output terstandarisasi berbasis JSON stream
    console.log(JSON.stringify(logEntry));
  }

  #getMemoryMetrics() {
    // Pengambilan metrik memori adaptif sesuai runtime
    if (this.#environment === 'NODE' || this.#environment === 'BUN') {
      const mem = process.memoryUsage();
      return { heapUsedMB: (mem.heapUsed / 1024 / 1024).toFixed(2) };
    }
    
    if (this.#environment === 'BROWSER' && performance?.memory) {
      return { heapUsedMB: (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2) };
    }

    return { heapUsedMB: 'N/A' };
  }
}

// Eksekusi logger
const logger = new UniversalLogger();
logger.log('APP_INITIALIZED', { status: 'ready', port: 8080 });
logger.log('DATABASE_CONNECTED', { latencyMs: 12.4 });
```

### 4. Visualisasi & Mental Model
Perbedaan ekosistem terjadi pada lapisan API yang diinjeksikan ke dalam *Global Scope* saat runtime melakukan inisialisasi:

```text
       ┌───────────────────────────────────────────────────────────┐
       │                   ECMAScript Engine                       │
       │         (V8 / JavaScriptCore / SpiderMonkey)              │
       │    Syntax, Types, Memory Heap, Call Stack, Microtasks     │
       └─────────────────────────────┬─────────────────────────────┘
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│    BROWSER HOST     │   │    NODE.JS HOST     │   │   BUN / DENO HOST   │
├─────────────────────┤   ├─────────────────────┤   ├─────────────────────┤
│ • window / document │   │ • global / process  │   │ • globalThis        │
│ • DOM / CSSOM APIs  │   │ • libuv Event Loop  │   │ • Web Standards     │
│ • Fetch / WebGL     │   │ • fs, net, http     │   │ • Native TypeScript │
│ • LocalStorage      │   │ • CommonJS / ESM    │   │ • Zig/Rust Core     │
└─────────────────────┘   └─────────────────────┘   └─────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `globalThis`**: Selalu rujuk konteks global dengan `globalThis`, hindari penggunaan langsung `window` atau `global` pada pustaka yang bersifat lintas platform.
- ✅ **Prioritaskan Web Standard APIs**: Gunakan API bawaan web standar seperti `fetch()`, `crypto.randomUUID()`, dan `TransformStream` yang kini didukung di seluruh runtime modern.
- ✅ **Gunakan Prefix Modul Node.js**: Saat bekerja di runtime server, gunakan selalu prefix skema `node:` (contoh: `import fs from 'node:fs'`) untuk membedakan modul bawaan dengan pustaka NPM.
- ❌ **Hindari Asumsi Keberadaan DOM**: Jangan memanggil objek `document` atau `navigator` tanpa pengecekan tipe (*guard clause*), karena akan memicu *fatal runtime error* `ReferenceError` pada lingkungan server-side rendering (SSR).

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, tulis sebuah fungsi bernama `detectCapabilities()` yang mengembalikan objek berisi status *boolean* apakah fitur-fitur berikut tersedia: `fetch`, `localStorage`, `process`, dan `structuredClone`.
2. Modifikasi kode pada **Code Editor di bawah** untuk membuat fungsi generator UUID universal menggunakan `globalThis.crypto.randomUUID()` dengan *fallback* aman jika API tersebut tidak tersedia.

---

## 🔗 Referensi
- [MDN Web Docs: globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
- [Node.js Architecture & libuv Integration](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Deno & Bun Runtime Runtime Standards](https://deno.land/manual) · [Bun Documentation](https://bun.sh/docs)