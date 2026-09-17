# Vite, Webpack & Turbopack: Modern Bundlers

**Slug**: `webpack-bundling-assets` · **Level**: Intermediate · **Waktu**: 30 Menit

## 🎯 Tujuan Pembelajaran
- Memahami mekanisme pembentukan *Dependency Graph*, teknik *Tree-Shaking*, dan *Code Splitting* pada level engine JavaScript.
- Menganalisis perbedaan fundamental arsitektur *Dev Server* berbasis *Native ESM* (Vite) vs *Bundle-based* (Webpack 5) vs *Incremental Computation Engine* berbasis Rust (Turbopack).
- Mengimplementasikan pola impor modular modern ES2024 (Dynamic Imports & Top-Level Await) untuk optimasi alokasi memori runtime.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Pondasi dari setiap web bundler adalah konstruksi **Dependency Graph** (Graf Dependensi). Ketika sebuah aplikasi memiliki *entry point* (misalnya `main.js`), bundler melakukan *parsing* kode sumber menjadi *Abstract Syntax Tree* (AST) menggunakan parser seperti SWC, Babel, atau Acorn. Melalui analisis AST, bundler melacak setiap pernyataan `import` statis untuk menemukan seluruh node dependensi, memetakan topologi relasi antar-file, serta mendeteksi *dead-code* melalui mekanisme **Tree-Shaking**. 

*Tree-shaking* bekerja mengandalkan struktur statis dari ECMAScript Modules (ESM). Berbeda dengan CommonJS (`require()`) yang dievaluasi secara dinamis saat runtime, sintaks ESM (`import`/`export`) bersifat deterministik pada waktu kompilasi (*compile-time*). Engine bundler menandai (*mark*) simbol yang diekspor namun tidak pernah diimpor oleh modul mana pun, lalu memangkasnya (*sweep*) dari bundel final, sehingga menghemat ukuran memori heap ketika skrip diuraikan (*parsed*) oleh V8 engine di browser.

Pergeseran paradigma terjadi saat Vite memperkenalkan arsitektur **No-Bundle Dev Server**. Webpack 5 memproses seluruh AST dan membundel ulang aplikasi setiap kali dev server dijalankan atau saat file dimodifikasi. Sebaliknya, Vite memanfaatkan dukungan **Native ESM** di peramban modern. Vite membagi modul menjadi dua kategori:
1. **Dependencies (node_modules)**: Dikompilasi sekali di awal menggunakan `esbuild` (berbasis Go) yang berkecepatan 10–100x lipat dibanding bundler JavaScript tradisional.
2. **Source Code**: Tidak dibundel sama sekali saat dev. Browser meminta file secara langsung via HTTP request (`<script type="module">`), dan Vite hanya mentransformasi modul yang diminta secara *on-demand*.

Untuk lingkungan produksi, Vite mengandalkan **Rollup** guna menghasilkan aset statis yang optimal melalui *scope hoisting*, *code splitting* cerdas, dan emisi *chunks* terisolasi. Sementara itu, **Turbopack** (penerus Webpack oleh Vercel) mengusung arsitektur *Incremental Computation Engine* berbasis Rust (Turbo Engine), di mana hasil fungsi AST tidak pernah dihitung dua kali jika input hashing identik, membawa komputasi caching granular ke tingkat fungsi atomik.

### 2. Sintaks & Penggunaan Modern
Pola modern dalam pengorganisasian modul memanfaatkan fitur *Dynamic Imports* untuk *Code Splitting* otomatis dan *Import Attributes* ES2024 (`with { type: "json" }`).

```javascript
// Simulasi Registry Modul Runtime & Dynamic Code Splitting ES2024

// 1. Modul Statis: Utility Matematika dengan Pure Annotation semantics
export const calculateTax = (amount, rate) => amount * rate;

// Fungsi tak terpakai (Kandidat eliminasi Tree-Shaking pada static bundling)
export const unusedHelper = () => {
  console.log("Dead code: harus dibuang oleh bundler production.");
};

// 2. Simulasi Dependency Container & Dynamic Chunk Resolver
class ModuleLoader {
  #registry = new Map();

  register(modulePath, factory) {
    this.#registry.set(modulePath, factory);
  }

  // Meniru mekanisme Dynamic Import (import()) di level runtime
  async importModule(modulePath) {
    if (!this.#registry.has(modulePath)) {
      throw new Error(`Module '${modulePath}' gagal dimuat (404 Not Found)`);
    }

    console.log(`[Network Engine] Mengunduh chunk: ${modulePath}`);
    // Simulasi penundaan latensi I/O jaringan
    await new Promise((resolve) => setTimeout(resolve, 50));

    const factory = this.#registry.get(modulePath);
    return factory();
  }
}

// Inisialisasi Loader
const loader = new ModuleLoader();

// Pendaftaran Chunk secara terpisah (Mirip output Code Splitting Rollup/Webpack)
loader.register('./modules/analytics.js', () => ({
  trackEvent: (name) => `[Event Tracked]: ${name}`,
}));

loader.register('./data/config.json', () => ({
  environment: 'production',
  version: '2024.1.0',
}));

// Eksekusi Runtime
async function bootstrapApp() {
  console.log("App Core siap dieksekusi.");

  // Memuat chunk analytics hanya saat dibutuhkan (On-Demand / Lazy Loading)
  const isUserInteracted = true;
  if (isUserInteracted) {
    const analyticsModule = await loader.importModule('./modules/analytics.js');
    console.log(analyticsModule.trackEvent('BUTTON_CLICK_CHECKOUT'));
  }
}

await bootstrapApp();
```

### 3. Studi Kasus Nyata
Implementasi sistem *Hot Module Replacement* (HMR) dan resolusi dependensi berbasis pemetaan siklus memori:

```javascript
// Sistem HMR Runtime Emulator (Mekanisme Vite / Webpack HMR Engine)
class HMRContext {
  #listeners = new Set();
  #state = new Map();

  constructor(publicId) {
    this.id = publicId;
  }

  accept(callback) {
    this.#listeners.add(callback);
  }

  dispose(cleanup) {
    this.#state.set('cleanup', cleanup);
  }

  emitUpdate(newCode) {
    console.log(`[HMR] Menerapkan hot-update untuk modul: ${this.id}`);
    
    // Jalankan cleanup hook modul lama untuk cegah memory leak
    const cleanup = this.#state.get('cleanup');
    if (typeof cleanup === 'function') {
      cleanup();
    }

    for (const listener of this.#listeners) {
      listener(newCode);
    }
  }
}

// Implementasi Modul Komponen State
let activeTimer = null;

function renderDashboard(text) {
  return `Dashboard UI: [${text}] - Memory Address Active`;
}

// Simulasi Instance Modul
const dashboardHMR = new HMRContext('/src/components/Dashboard.js');

// Lifecycle runtime komponen
function mountComponent() {
  let counter = 0;
  activeTimer = setInterval(() => {
    counter++;
  }, 1000);

  dashboardHMR.dispose(() => {
    console.log('[HMR Memory Management] Menghapus interval lama...');
    clearInterval(activeTimer);
  });

  dashboardHMR.accept((newModule) => {
    console.log('[HMR Hook] Komponen diperbarui tanpa refresh halaman:');
    console.log(newModule.render('State v2.0 Tersinkronisasi'));
  });
}

// Inisialisasi awal
mountComponent();
console.log(renderDashboard('State v1.0 Awal'));

// Simulasi Developer Mengubah Kode (File Change Trigger)
dashboardHMR.emitUpdate({
  render: (customText) => `Dashboard UI Modifikasi: [${customText}]`,
});
```

### 4. Visualisasi & Mental Model

```text
======================= PERBANDINGAN ARSITEKTUR DEV SERVER =======================

1. TRADISIONAL (Webpack 5): BUNDLE-BASED DEV
   Entry File ──> Analisis Seluruh AST ──> Bundle 1 Besar ──> Dev Server ──> Browser
   (Modifikasi 1 file = Bundler memproses ulang sebagian besar rantai modul)

2. MODERN (Vite): NATIVE ESM-BASED DEV
   Browser Request (<script type="module" src="/src/App.js">)
         │
         ▼
   Vite Dev Server (On-Demand Transform)
         │──> Hanya mentransformasikan /src/App.js (via esbuild/Rollup plugins)
         │──> Node modules di-prebundle instan via esbuild
         ▼
   Browser mengeksekusi ESM secara native di V8 Engine

3. NEXT-GEN (Turbopack): INCREMENTAL COMPUTATION
   Source Modul ──> [Turbo Engine Graph] ──> Hashed Function Output (Cache)
   (Hanya komputasi ulang fungsi AST dengan hash input yang berubah)
==================================================================================
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan ES Module Statis di Level Atas**: Pastikan struktur *import/export* dapat dianalisis secara statis agar Rollup/Turbopack dapat membuang *dead code* secara maksimal saat proses *tree-shaking*.
- ✅ **Terapkan Dynamic Imports untuk Rute/Fitur Berat**: Pisahkan komponen berat (misal: chart visualisasi, rich text editor) menggunakan `import('./HeavyComponent.js')` agar browser tidak memuat chunk yang belum dibutuhkan saat First Contentful Paint (FCP).
- ✅ **Beri Penanda `sideEffects: false` pada `package.json`**: Informasikan kepada bundler bahwa modul Anda bebas dari efek samping global, memungkinkan eliminasi total file yang tidak diimpor langsung.
- ❌ **Hindari Pola Re-Export `export * from './all'` Secara Ceroboh**: Barrel files raksasa dapat merusak efisiensi *tree-shaking* dan membebani parser modul saat kompilasi graf dependensi.

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, buatlah sebuah simulasi sistem *Plugin Pipeline* sederhana yang menerima kode JavaScript mentah dalam bentuk string, melakukan transformasi teks (misal: mengubah sintaks arrow function menjadi function declaration klasik), lalu mengembalikan modul hasil build.
2. Manfaatkan metode `Promise.allSettled()` di **Code Editor di bawah** untuk membuat modul *Parallel Preloader* yang memuat beberapa modul fiktif secara asinkron dan melaporkan chunk mana yang berhasil dimuat serta chunk mana yang mengalami kegagalan resolusi URL.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Modules (ESM)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Vite Architecture Guide: Why Vite](https://vitejs.dev/guide/why.html)
- [ECMAScript Specification: Dynamic Import Evaluation](https://tc39.es/ecma262/#sec-import-calls)