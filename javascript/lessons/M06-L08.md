# Project 2: Real-time Weather Dashboard App

**Slug**: `project-weather-dashboard` · **Level**: Intermediate · **Waktu**: 45 Menit

## 🎯 Tujuan Pembelajaran
- Mengorkestrasi pipeline asinkronus multi-tahap (Geocoding ke Forecast API) menggunakan `async/await` dengan pembatalan request dinamis via `AbortController`.
- Mengimplementasikan sistem multi-tier caching (In-Memory `Map` dan `sessionStorage`) dengan mekanisme TTL (*Time-to-Live*) untuk efisiensi alokasi heap dan penghematan kuota API.
- Membangun *state machine* UI terpadu yang menangani siklus hidup aplikasi secara atomik (*idle*, *loading*, *success*, *error*, *offline*).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Aplikasi Weather Dashboard skala produksi mengandalkan orkestrasi asinkronus berlapis. Saat pengguna mengetikkan nama kota, aplikasi harus: (1) Mengonversi nama kota menjadi koordinat lintang/bujur melalui Geocoding API, (2) Mengambil data cuaca saat ini beserta prakiraan (*forecast*), (3) Mentransmisikan data mentah ke *state* representasional, dan (4) Memperbarui DOM.

Di balik layar engine JavaScript (V8), pemanggilan `fetch()` mendelegasikan I/O jaringan ke thread sistem operasi di luar Call Stack melalui Web APIs. Saat respons HTTP tiba, *callback* resolusi Promise didorong ke **Microtask Queue**, bukan Macrotask (Task) Queue. Microtask Queue memiliki prioritas absolut: V8 akan menguras habis seluruh antrean microtask sebelum membiarkan render engine melakukan *repaint* atau memproses event macrotask berikutnya.

```text
[Call Stack: fetch()] ──> [Web API: Network I/O] ──> [Microtask Queue: Promise.then()] ──> [Call Stack: Execute UI Update]
```

Tantangan arsitektural terbesar dalam aplikasi cuaca *real-time* adalah **Race Condition** dan **Memory Bloat**:
1. **Race Condition**: Terjadi saat pengguna mencari "Jakarta", lalu segera menggantinya dengan "Bandung". Jika respons "Jakarta" datang lebih lambat daripada "Bandung", data Jakarta dapat menimpa Bandung. Solusinya adalah membatalkan *in-flight request* sebelumnya dengan `AbortController`.
2. **Cache Expiration**: Menyimpan seluruh respons API di Heap memory via JavaScript `Map` rentan terhadap data usang dan *memory leak*. Kita perlu mengombinasikan cache berbasis waktu (TTL) dengan fallback storage (`sessionStorage`) agar data persisten terhadap *page reload* tanpa membebani RAM secara permanen.

### 2. Sintaks & Penggunaan Modern
Arsitektur modern memanfaatkan `AbortController` untuk mengontrol siklus hidup request, serta *nullish coalescing assignment* (`??=`) dan *logical assignment* untuk manipulasi state yang ringkas.

```javascript
// Implementasi WeatherApiClient dengan In-Memory TTL Cache & Cancellation
class WeatherApiClient {
  #cache = new Map();
  #activeController = null;
  #ttlMs = 60_000; // 1 Menit Cache TTL

  async fetchCoordinates(city) {
    const cacheKey = `geo:${city.toLowerCase().trim()}`;
    const cached = this.#getFromCache(cacheKey);
    if (cached) return cached;

    // Batalkan request sebelumnya yang masih berjalan
    if (this.#activeController) {
      this.#activeController.abort("New search initiated");
    }
    this.#activeController = new AbortController();

    try {
      // Simulasi fetch Geocoding (Mock REST API)
      const data = await this.#mockFetch(
        `https://api.weather.mock/geo?q=${encodeURIComponent(city)}`,
        {
          lat: -6.2088,
          lon: 106.8456,
          name: city,
          country: "ID"
        },
        this.#activeController.signal
      );

      this.#setCache(cacheKey, data);
      return data;
    } finally {
      this.#activeController = null;
    }
  }

  #getFromCache(key) {
    const record = this.#cache.get(key);
    if (!record) return null;
    if (Date.now() > record.expiry) {
      this.#cache.delete(key);
      return null;
    }
    return record.value;
  }

  #setCache(key, value) {
    this.#cache.set(key, {
      value,
      expiry: Date.now() + this.#ttlMs
    });
  }

  #mockFetch(url, mockData, signal) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        resolve(mockData);
      }, 300);

      signal?.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new DOMException(signal.reason, "AbortError"));
      });
    });
  }
}

// Eksekusi
const client = new WeatherApiClient();
client.fetchCoordinates("Jakarta")
  .then(data => console.log("Koordinat ditemukan:", data))
  .catch(err => console.error("Error:", err.message));
```

### 3. Studi Kasus Nyata
Pipeline pengolahan data cuaca lengkap: menerima input kota, memeriksa multi-tier cache, melakukan *network call* paralel untuk cuaca saat ini & *forecast*, mengelompokkan data menggunakan `Object.groupBy` (fitur ES2024), dan menangani error secara defensif.

```javascript
// Service Lengkap: Weather Dashboard Engine
class WeatherDashboardService {
  #memoryCache = new Map();
  #TTL = 5 * 60 * 1000; // 5 menit

  // Simulasi REST API Endpoints
  async #mockApiCall(endpoint, params) {
    await new Promise(res => setTimeout(res, 200)); // Simulasi network latency
    
    if (params.city?.toLowerCase() === "error_city") {
      throw new Error("404: Kota tidak ditemukan");
    }

    if (endpoint === "current") {
      return {
        city: params.city,
        temp: 29.5,
        condition: "Rain",
        icon: "🌧️",
        humidity: 85,
        timestamp: Date.now()
      };
    }

    if (endpoint === "forecast") {
      return {
        list: [
          { day: "Senin", temp: 30, condition: "Sunny" },
          { day: "Senin", temp: 28, condition: "Cloudy" },
          { day: "Selasa", temp: 27, condition: "Rain" },
          { day: "Selasa", temp: 26, condition: "Rain" },
          { day: "Rabu", temp: 29, condition: "Sunny" }
        ]
      };
    }
  }

  // Multi-tier Cache: Memory -> SessionStorage
  #getCache(key) {
    // 1. Cek L1: Memory Heap
    if (this.#memoryCache.has(key)) {
      const { val, exp } = this.#memoryCache.get(key);
      if (Date.now() < exp) return val;
      this.#memoryCache.delete(key);
    }

    // 2. Cek L2: SessionStorage (Fallback jika di-browser)
    try {
      if (typeof sessionStorage !== "undefined") {
        const raw = sessionStorage.getItem(key);
        if (raw) {
          const { val, exp } = JSON.parse(raw);
          if (Date.now() < exp) {
            this.#memoryCache.set(key, { val, exp }); // Promosikan ke L1
            return val;
          }
          sessionStorage.removeItem(key);
        }
      }
    } catch {
      // Abaikan error kuota storage
    }
    return null;
  }

  #setCache(key, val) {
    const exp = Date.now() + this.#TTL;
    this.#memoryCache.set(key, { val, exp });
    try {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(key, JSON.stringify({ val, exp }));
      }
    } catch {
      // Graceful degradation bila storage penuh
    }
  }

  async getDashboardData(city) {
    const normalizedKey = `dashboard:${city.toLowerCase().trim()}`;
    const cachedData = this.#getCache(normalizedKey);

    if (cachedData) {
      return { source: "CACHE", data: cachedData };
    }

    // Pipeline: Jalankan pengambilan Current Weather & Forecast secara paralel
    const [currentResult, forecastResult] = await Promise.allSettled([
      this.#mockApiCall("current", { city }),
      this.#mockApiCall("forecast", { city })
    ]);

    if (currentResult.status === "rejected") {
      throw new Error(`Gagal memuat cuaca: ${currentResult.reason.message}`);
    }

    const current = currentResult.value;
    const forecastRaw = forecastResult.status === "fulfilled" ? forecastResult.value.list : [];

    // ES2024 Feature: Object.groupBy untuk merangkum forecast harian
    const groupedForecast = Object.groupBy(forecastRaw, item => item.day);

    const payload = {
      current,
      groupedForecast,
      retrievedAt: new Date().toISOString()
    };

    this.#setCache(normalizedKey, payload);
    return { source: "NETWORK", data: payload };
  }
}

// Simulasi Konsumsi oleh UI Controller
async function renderDashboard(city) {
  const service = new WeatherDashboardService();

  console.log(`[UI] Memulai pencarian: "${city}"...`);
  console.log(`[UI] Menampilkan Loading Skeleton... ⏳`);

  try {
    // Panggilan pertama (Network Hit)
    const res1 = await service.getDashboardData(city);
    console.log(`[UI] Hasil 1 Diterima (${res1.source}):`, res1.data.current.city, res1.data.current.temp + "°C", res1.data.current.icon);
    console.log(`[UI] Forecast Terkelompok:`, Object.keys(res1.data.groupedForecast));

    // Panggilan kedua (Cache Hit)
    const res2 = await service.getDashboardData(city);
    console.log(`[UI] Hasil 2 Diterima (${res2.source}): Data diambil langsung dari memori tanpa latency.`);
  } catch (error) {
    console.error(`[UI Error]: ${error.message} ❌`);
  } finally {
    console.log(`[UI] Menutup Loading Skeleton.\n`);
  }
}

// Jalankan demonstrasi
await renderDashboard("Surabaya");
await renderDashboard("error_city");
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   Asynchronous Weather Data Pipeline                   │
└────────────────────────────────────────────────────────────────────────┘

 [Input Query]
       │
       ▼
 [L1 Memory Cache] ──(Hit)──> [Return Fast Cache Data] ──┐
       │ (Miss)                                          │
       ▼                                                 │
 [L2 Session Storage] ──(Hit)──> [Promote L1 & Return] ──┤
       │ (Miss)                                          │
       ▼                                                 │
 [Abort In-Flight Request]                               │
       │                                                 │
       ▼                                                 │
 [Promise.allSettled]                                    │
  ├──> Call: Geocoding / Current API ──┐                 │
  └──> Call: 5-Day Forecast API     ───┴─> Microtask Q   │
                                                │        │
                                                ▼        │
                                     [Transform Data]    │
                                     (Object.groupBy)    │
                                                │        │
                                                ▼        │
 [DOM Mutation: Render Icon, Temp, Chart] <──────────────┴── [State Update]
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `AbortController` pada setiap *keystroke* search input**: Cegah data balikan lambat (*slow network*) menimpa data pencarian terbaru pengguna.
- ✅ **Gunakan `Promise.allSettled()` bukan `Promise.all()`** saat memuat sub-komponen dashboard independen: Kegagalan mengambil grafik prakiraan cuaca tidak boleh merusak tampilan ringkasan suhu utama.
- ✅ **Normalisasi Kunci Cache**: Selalu lakukan `.toLowerCase().trim()` pada input kota sebelum dijadikan *key* cache untuk mencegah duplikasi memori.
- ❌ **Jangan menyimpan instance DOM atau AbortController di dalam `sessionStorage`**: `sessionStorage` hanya menerima string serializable (JSON). Objek non-serializable harus disimpan di In-Memory `Map`.
- ❌ **Hindari penulisan `async` tanpa blok `try/catch/finally`**: Loading spinner dapat macet selamanya jika Promise mengalami *rejection* yang tidak tertangkap.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah** dan tambahkan mekanisme *Auto-Retry* dengan batas maksimal 3 kali percobaan (*exponential backoff*) ke dalam method `#mockApiCall` jika terjadi kegagalan jaringan (simulasi *flaky network*).
2. Di **Code Editor di bawah**, modifikasi sistem cache agar menerapkan algoritma penggusuran **LRU (Least Recently Used)** jika ukuran `Map` cache melebihi kapasitas maksimum 5 item.

---

## 🔗 Referensi
- [MDN Web Docs: AbortController API](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [MDN Web Docs: Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [ECMAScript 2024 Language Specification: Microtask Delivery](https://tc39.es/ecma262/)