# Final Project: Full-Stack Vanilla + REST API Architecture

**Slug**: `final-project-fullstack` · **Level**: Advanced · **Waktu**: 4 Jam

## 🎯 Tujuan Pembelajaran
- Merancang arsitektur Single Page Application (SPA) modular berbasis Vanilla JavaScript ES2024 murni dengan sistem client-side routing dan component lifecycle management.
- Mengembangkan *reactive state store* deterministik berbasis `Proxy` dan *API Service Layer* modular dengan *asynchronous interceptor pipeline* untuk menangani autentikasi JWT serta auto-retry.
- Membangun dan mengintegrasikan kontrak REST API CRUD end-to-end yang aman, efisien dalam konsumsi memori, serta bebas dari memory leak menggunakan `AbortController` dan `WeakMap`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Membangun arsitektur full-stack tanpa framework (*vanilla*) menuntut pemahaman mendalam tentang bagaimana abstraksi modern bekerja di tingkat V8 engine dan Web API. Pada frontend SPA, antarmuka pengguna tidak lagi dirender ulang dari server pada setiap navigasi, melainkan dimanipulasi secara dinamis di DOM menggunakan JavaScript. Untuk mengelola siklus hidup komponen dan perpindahan halaman tanpa memicu *full-page reload*, kita memanfaatkan HTML5 History API (`pushState`, `replaceState`, dan *event* `popstate`).

Dalam memori V8, pengelolaan status (*state management*) reaktif dibangun di atas objek `Proxy`. Alih-alih melakukan *dirty checking* (seperti digest cycle lawas) atau kompilasi virtual DOM yang berat, `Proxy` mencegat operasi internal (`[[Get]]`, `[[Set]]`) secara langsung pada *heap memory*. Ketika mutasi terjadi, trap `set` pada Proxy mengeksekusi *subscriber callbacks* yang terdaftar secara sinkron atau dijadwalkan ke dalam *Microtask Queue* melalui `queueMicrotask()`. Pendekatan ini memastikan rendering antarmuka terjadi tepat setelah mutasi data selesai, sebelum *macro-task* atau repaint browser berikutnya dijalankan.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│              Siklus Eksekusi Interceptor & Microtask Queue              │
│                                                                         │
│  [Request Inisiasi] ──> [Request Interceptor Chain]                     │
│                               │ (Inject JWT / Modifikasi Header)        │
│                               ▼                                         │
│                      [Fetch Network Task]                               │
│                               │                                         │
│  ┌────────────────────────────┴──────────────────────────────────────┐  │
│  │                       Microtask Queue Engine                      │  │
│  │  1. Response Resolved ──> 2. Response Interceptor (Check 401)    │  │
│  │  3. Token Refresh (Promise.withResolvers) ──> 4. State Update     │  │
│  └────────────────────────────┬──────────────────────────────────────┘  │
│                               ▼                                         │
│                       [DOM / UI Update]                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

Lapisan komunikasi data (*API Service Layer*) diabstraksikan melalui sebuah HTTP Client berbasis `fetch` yang mengimplementasikan pola *pipeline middleware/interceptor*. Interceptor memungkinkan transformasi payload request, penyisipan header `Authorization: Bearer <token>`, pemusatan penanganan error, serta mekanisme *refresh token replay* ketika API merespons status `401 Unauthorized`. Masalah *circular dependency* dan *race condition* pada token refresh diselesaikan dengan antrean Promise (`Promise.withResolvers()`), sehingga beberapa request paralel yang gagal dapat ditangguhkan (*paused*) dan dieksekusi ulang sekaligus begitu token baru didapatkan.

### 2. Sintaks & Penggunaan Modern
Implementasi arsitektur SPA modern mengandalkan pola modular ES2024: *Observer/Proxy pattern* untuk store, pipeline fungsi untuk interceptor, dan *dynamic event dispatching* untuk routing.

```javascript
// ==========================================
// 1. REACTIVE STORE ENGINE (Proxy + Observer)
// ==========================================
class Store {
  #state;
  #listeners = new Set();

  constructor(initialState = {}) {
    this.#state = new Proxy(initialState, {
      set: (target, property, value) => {
        if (Reflect.get(target, property) === value) return true;
        const success = Reflect.set(target, property, value);
        if (success) {
          // Jadwalkan notifikasi subscriber ke Microtask Queue
          queueMicrotask(() => this.#notify(property, value));
        }
        return success;
      },
      get: (target, property) => {
        const val = Reflect.get(target, property);
        return (val !== null && typeof val === 'object') ? new Proxy(val, this) : val;
      }
    });
  }

  get state() {
    return this.#state;
  }

  subscribe(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener); // Unsubscribe cleanup
  }

  #notify(key, value) {
    for (const listener of this.#listeners) {
      listener(this.#state, { key, value });
    }
  }
}

// ==========================================
// 2. HTTP CLIENT DENGAN INTERCEPTOR PIPELINE
// ==========================================
class ApiClient {
  #baseURL;
  #requestInterceptors = [];
  #responseInterceptors = [];

  constructor(baseURL = '') {
    this.#baseURL = baseURL;
  }

  useRequest(interceptor) {
    this.#requestInterceptors.push(interceptor);
  }

  useResponse(interceptor) {
    this.#responseInterceptors.push(interceptor);
  }

  async request(endpoint, options = {}) {
    let config = {
      url: `${this.#baseURL}${endpoint}`,
      headers: { 'Content-Type': 'application/json' },
      ...options
    };

    // Jalankan pipeline request interceptors
    for (const interceptor of this.#requestInterceptors) {
      config = await interceptor(config);
    }

    try {
      // Mocking fetch call untuk lingkungan Node.js/eksekusi lokal
      let response = await this.#mockFetch(config);

      // Jalankan pipeline response interceptors
      for (const interceptor of this.#responseInterceptors) {
        response = await interceptor(response, config, this);
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  // Simulasi REST API Endpoint untuk demonstrasi
  async #mockFetch(config) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.url.endsWith('/api/tasks') && config.method === 'GET') {
          resolve({
            ok: true,
            status: 200,
            json: async () => ([{ id: 1, title: 'Implement Architecture', done: true }])
          });
        } else if (config.url.endsWith('/api/tasks') && config.method === 'POST') {
          const payload = JSON.parse(config.body);
          resolve({
            ok: true,
            status: 201,
            json: async () => ({ id: Date.now(), ...payload })
          });
        } else {
          resolve({ ok: false, status: 404, json: async () => ({ message: 'Not Found' }) });
        }
      }, 50);
    });
  }
}

// Inisialisasi dan verifikasi runtime
const globalStore = new Store({ user: null, tasks: [] });
const api = new ApiClient('https://api.domain.local');

// Daftarkan request interceptor untuk menyisipkan Auth Header
api.useRequest(async (config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy';
  config.headers['Authorization'] = `Bearer ${token}`;
  console.log(`[HTTP REQ] ${config.method || 'GET'} -> ${config.url}`);
  return config;
});

// Daftarkan response interceptor untuk validasi format
api.useResponse(async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return response.json();
});

// Eksekusi data fetching
(async () => {
  globalStore.subscribe((state, mutation) => {
    console.log(`[STORE MUTATION] Property "${mutation.key}" changed:`, mutation.value);
  });

  const initialTasks = await api.request('/api/tasks', { method: 'GET' });
  globalStore.state.tasks = initialTasks;

  const newTask = await api.request('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ title: 'Deploy to Edge Runtime', done: false })
  });
  globalStore.state.tasks = [...globalStore.state.tasks, newTask];
})();
```

### 3. Studi Kasus Nyata: Arsitektur Full-Stack Vanilla SPA
Berikut adalah simulasi lengkap arsitektur SPA yang memuat Router berbasis Hash/History, Controller Lifecycle Component, Abstraction Store, serta Error Boundary.

```javascript
// ==========================================
// CLIENT-SIDE ROUTER ENGINE
// ==========================================
class Router {
  #routes = new Map();
  #currentRoute = null;

  register(path, componentFactory) {
    this.#routes.set(path, componentFactory);
    return this;
  }

  async navigate(path) {
    const componentFactory = this.#routes.get(path) || this.#routes.get('/404');
    if (!componentFactory) return;

    if (this.#currentRoute?.instance?.onDestroy) {
      this.#currentRoute.instance.onDestroy(); // Pencegahan memory leak
    }

    const instance = componentFactory();
    this.#currentRoute = { path, instance };

    const renderedOutput = await instance.render();
    console.log(`\n--- [NAVIGATE: ${path}] ---\n${renderedOutput}\n------------------------`);
    
    if (instance.onMounted) {
      instance.onMounted();
    }
  }
}

// ==========================================
// COMPONENT DEFINITIONS
// ==========================================
const DashboardComponent = (store, client) => {
  const abortController = new AbortController();
  let unsubscribe = null;

  return {
    async render() {
      return `<div class="dashboard">
  <h1>Dashboard</h1>
  <p>Tasks Loaded: ${store.state.tasks.length}</p>
</div>`;
    },
    onMounted() {
      console.log('[DashboardComponent] Mounted. Mengikat store listener...');
      unsubscribe = store.subscribe((state) => {
        console.log('[DashboardComponent] Re-rendering view karena state berubah...');
      });
    },
    onDestroy() {
      console.log('[DashboardComponent] Cleanup: Membatalkan async task dan listener.');
      abortController.abort(); // Cancel pending network requests
      if (unsubscribe) unsubscribe();
    }
  };
};

// ==========================================
// EKSEKUSI APLIKASI
// ==========================================
const appStore = new Store({ tasks: [] });
const appRouter = new Router();

appRouter
  .register('/', () => DashboardComponent(appStore, api))
  .register('/404', () => ({
    render: async () => '<div>404 - Halaman Tidak Ditemukan</div>'
  }));

// Simulasi perpindahan halaman dan mutasi state
(async () => {
  await appRouter.navigate('/');
  
  // Mutasi state asinkron
  appStore.state.tasks = [{ id: 101, title: 'Refactor Core Client' }];
  
  // Navigasi ke halaman lain untuk memicu lifecycle destroy
  setTimeout(async () => {
    await appRouter.navigate('/404');
  }, 100);
})();
```

### 4. Visualisasi & Mental Model

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                  Arsitektur Single Page Application                     │
│                                                                         │
│  [URL Event / Navigation]                                               │
│            │                                                            │
│            ▼                                                            │
│     [Router Engine] ──(Unmount Old)──> [onDestroy: AbortController]     │
│            │                                                            │
│      (Mount New)                                                        │
│            ▼                                                            │
│    [Vanilla Component] <──── Subscribes ────┐                           │
│      │               │                      │                           │
│   (Render)     (Dispatches)                 │                           │
│      │               │                      │                           │
│      ▼               ▼                      │                           │
│   [  DOM  ]   [API Service Layer]    [Reactive Store]                   │
│                      │                 (Proxy Trap)                     │
│                  (Fetch HTTP)               │                           │
│                      │                      │                           │
│                      ▼                      │                           │
│              [REST API Backend] ────────────┘                           │
│               (Mutasi State)                                            │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `AbortController` pada Setiap Komponen**: Teruskan `signal` dari `AbortController` ke setiap pemanggilan `fetch` di dalam komponen. Panggil `.abort()` pada hook `onDestroy` untuk membatalkan koneksi tertunda saat pengguna berpindah route secara cepat.
- ✅ **Gunakan `WeakMap` untuk State Metadata Pribadi**: Simpan data privat dan referensi subscriber yang berikatan dengan node DOM di dalam `WeakMap` agar garbage collector V8 dapat secara otomatis menghapus memori saat elemen DOM dilepas dari tree.
- ✅ **Isolasi Mutasi State dengan Deep Freezing atau Handler Terkontrol**: Hindari memodifikasi nested object pada state secara langsung tanpa melalui jalur trap Proxy yang terdaftar, untuk menghindari ketidaksinkronan UI.
- ❌ **Anti-Pattern (Inner HTML Injection)**: Jangan me-render data dari respons API mentah secara langsung via `element.innerHTML` tanpa sanitasi; selalu gunakan `textContent`, DOM API standar (`document.createElement`), atau parser HTML ter-escape untuk mencegah eksploitasi Cross-Site Scripting (XSS).

---

## ✍️ Latihan Mandiri
1. Modifikasi `ApiClient` pada **Code Editor di bawah** dengan menambahkan response interceptor khusus yang mampu menangani status HTTP `401 Unauthorized`. Gunakan fitur `Promise.withResolvers()` untuk menunda (queue) request yang gagal, memanggil endpoint simulasi `/api/refresh-token`, dan me-replay kembali request pertama dengan token yang baru secara transparan.
2. Perluas fungsionalitas `Router` pada **Code Editor di bawah** agar mendukung parsing dynamic parameter (misalnya rute dinamis `/tasks/:id`). Pastikan parameter tersebut diekstrak ke dalam objek JavaScript murni dan diteruskan langsung ke argumen pabrik komponen target.

---

## 🔗 Referensi
- [MDN Web Docs: History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [MDN Web Docs: Proxy and Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [ECMAScript 2024 (ECMA-262) Language Specification](https://tc39.es/ecma262/)