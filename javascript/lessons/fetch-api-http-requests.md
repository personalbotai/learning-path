# Fetch API: HTTP Requests + AbortController

**Slug**: `fetch-api-http-requests` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai arsitektur dua fase Fetch API (resolusi header vs konsumsi stream body) serta membedakan network failure dari HTTP error statuses (`res.ok`).
- Mengimplementasikan manajemen siklus hidup request modern dengan `AbortController`, `AbortSignal.timeout()`, dan `AbortSignal.any()`.
- Menyusun abstraksi HTTP client tangguh dengan manipulasi `Headers`, validasi Content-Type, payload parsing (`.json()`, `.blob()`), dan penanganan CORS serta otentikasi berbasis token.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Fetch API adalah standar antarmuka berbasis Promise untuk komunikasi jaringan asinkron yang menggantikan arsitektur lama berbasis callback (`XMLHttpRequest`). Di balik layar, eksekusi `fetch()` mendelegasikan pemrosesan I/O jaringan ke lapisan *Host Environment* (seperti Chromium Network Service pada browser atau modul *undici* pada Node.js runtime). V8 engine tidak mengeksekusi transfer soket TCP/TLS secara langsung di dalam Call Stack, melainkan memicu Web API di thread terpisah dan mengembalikan *Pending Promise* seketika ke Call Stack.

Karakteristik fundamental dari `fetch()` yang sering disalahpahami adalah **resolusi dua fase (Two-Phase Resolution)**:
1. **Fase Resolusi Jaringan & Header**: Promise dari `fetch(url)` akan *settled* (resolved) segera setelah respons HTTP pertama (status line & headers) diterima dari server, **bukan** ketika seluruh payload selesai diunduh.
2. **Fase Konsumsi Body (Stream Processing)**: Payload (`body`) direpresentasikan sebagai `ReadableStream`. Pemanggilan metode seperti `res.json()`, `res.text()`, atau `res.blob()` mengunci stream tersebut (`bodyUsed = true`) dan mengembalikan Promise baru yang melakukan *buffering* serta decoding dari heap memory. Body tidak dapat dibaca dua kali tanpa melakukan kloning eksplisit via `res.clone()`.

```
fetch(url) ──> Resolusi Header ──> res.json() / res.blob() ──> Resolusi Payload
(Microtask)    (Phase 1: res.ok)   (Phase 2: ReadableStream)    (Microtask)
```

Poin krusial lain terletak pada penanganan error: `fetch()` **hanya akan me-reject Promise jika terjadi kegagalan jaringan fatal** (seperti *DNS lookup failure*, *TCP connection refused*, atau pelanggaran kebijakan CORS). Status HTTP error seperti `404 Not Found`, `401 Unauthorized`, atau `500 Internal Server Error` **tetap dianggap sukses (resolved)** oleh Promise `fetch()`. Pengembang wajib memeriksa properti boolean `res.ok` (yang bernilai `true` jika status berada di rentang 200–299).

Untuk pembatalan transmisi data secara deterministik, JavaScript menyediakan antarmuka `AbortController`. Melalui instance `AbortSignal`, sinyal pembatalan dikirimkan langsung ke network worker thread untuk menutup koneksi soket, mencegah alokasi memori berlebih (*memory leak*), serta melempar error `DOMException` dengan nama `AbortError` atau `TimeoutError`.

### 2. Sintaks & Penggunaan Modern
Pada JavaScript modern (ES2024), kita dapat memanfaatkan metode statis `AbortSignal.timeout(ms)` untuk menetapkan batas waktu request secara deklaratif tanpa instansiasi manual `setTimeout`, atau `AbortSignal.any()` untuk menggabungkan pembatalan manual dan timeout.

```javascript
async function requestUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
  // Timeout otomatis 3000ms via static method ES2024
  const timeoutSignal = AbortSignal.timeout(3000);

  const customHeaders = new Headers({
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "X-Client-Version": "2024.1.0"
  });

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: customHeaders,
      signal: timeoutSignal,
      mode: "cors", // Mengaktifkan cross-origin resource sharing
      cache: "no-store"
    });

    // Guard Clause wajib: Evaluasi status HTTP 2xx
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    // Memverifikasi Content-Type sebelum parsing stream
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Payload yang diterima bukan format JSON!");
    }

    const userData = await response.json();
    console.log("Status Koneksi:", response.status);
    console.log("Data User:", userData.name);
    return userData;
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.error("Koneksi dibatalkan: Request melebihi batas waktu (3000ms)");
    } else if (error.name === "AbortError") {
      console.error("Koneksi dibatalkan secara eksplisit oleh pengguna");
    } else {
      console.error("Kesalahan Fetch:", error.message);
    }
  }
}

requestUser(1);
```

### 3. Studi Kasus Nyata
Implementasi API Client tangguh untuk modul e-commerce yang menangani pembatalan request sebelumnya saat user memicu pencarian baru (*debounce/cancellation pattern*), injeksi token dinamis, dan ekstraksi blob binary.

```javascript
class ResilientHttpClient {
  #baseUrl;
  #activeController = null;

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  async searchProducts(query, externalSignal = null) {
    // Batalkan request pencarian sebelumnya jika masih berjalan di network thread
    if (this.#activeController) {
      this.#activeController.abort("Pencarian baru dipicu, request lama dibatalkan.");
    }

    this.#activeController = new AbortController();
    
    // Gabungkan signal internal dengan signal eksternal jika disediakan
    const combinedSignal = externalSignal 
      ? AbortSignal.any([this.#activeController.signal, externalSignal])
      : this.#activeController.signal;

    const endpoint = `${this.#baseUrl}/products?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        },
        signal: combinedSignal
      });

      if (!response.ok) {
        throw new Error(`Gagal memuat katalog: Status ${response.status}`);
      }

      const products = await response.json();
      return products;
    } finally {
      // Bersihkan referensi controller jika request ini yang terakhir
      if (this.#activeController?.signal === combinedSignal) {
        this.#activeController = null;
      }
    }
  }

  async downloadInvoicePdf(orderId) {
    const endpoint = `${this.#baseUrl}/orders/${orderId}/invoice`;
    
    const response = await fetch(endpoint, {
      method: "GET",
      headers: { "Accept": "application/pdf" },
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) throw new Error("Gagal mengunduh berkas invoice.");

    // Membaca body sebagai Blob (Binary Large Object)
    const blobData = await response.blob();
    console.log(`Blob diterima: Size ${blobData.size} bytes, Type: ${blobData.type}`);
    return blobData;
  }
}

// Simulasi Penggunaan
const client = new ResilientHttpClient("https://jsonplaceholder.typicode.com");

// Trigger request pertama
client.searchProducts("laptop")
  .then(data => console.log("Hasil 1:", data.length))
  .catch(err => console.log("Log 1:", err.message));

// Trigger request kedua seketika (akan membatalkan request pertama)
client.searchProducts("smartphone")
  .then(data => console.log("Hasil 2:", data))
  .catch(err => console.log("Log 2:", err.message));
```

### 4. Diagram Alur & Visualisasi Event Loop
Berikut siklus interaksi antara JavaScript Engine (Call Stack), Web APIs/Network Thread, Microtask Queue, dan mekanisme pembatalan:

```text
┌─────────────────────────┐         ┌──────────────────────────────────────┐
│       Call Stack        │         │        Web APIs (Network Thread)     │
│ 1. fetch(url, {signal}) ├────────>│ 2. Mengirim SYN TCP / DNS Query     │
│ 3. controller.abort()   ├────┐    │    Menunggu respons server...        │
└───────────┬─────────────┘    │    └──────────────────┬───────────────────┘
            │                  │                       │
            │                  │ (Signal Abort Trigger)│
            ▼                  └──────────────────────>│ [Koneksi Soket Ditutup]
┌─────────────────────────┐                            ▼
│     Microtask Queue     │         ┌──────────────────────────────────────┐
│                         │<────────┤ 4. Enqueue: Reject DOMException      │
│ [PromiseReactionJob]    │         │    ("AbortError") via Event Loop     │
└───────────┬─────────────┘         └──────────────────────────────────────┘
            │
            ▼ (Event Loop menaikkan microtask ke stack saat stack kosong)
┌─────────────────────────┐
│     catch (error)       │
│ console.error(error)    │
└─────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Selalu Evaluasi `res.ok`**: Jangan berasumsi blok `catch` akan menangani HTTP 404 atau 500. Selalu gunakan `if (!res.ok) throw new Error(...)` sebelum memanggil `.json()`.
- ✅ **Gunakan `AbortSignal.timeout(ms)`**: Hindari `setTimeout` manual untuk membatalkan fetch; API statis modern lebih hemat memori dan secara otomatis menangani pembersihan timer.
- ✅ **Periksa Header Content-Type**: Validasi header respons sebelum melakukan parsing stream (`res.json()`) guna menghindari syntax parsing error saat server mengembalikan HTML error page.
- ❌ **Anti-Pattern (Membaca Stream Ganda)**: Memanggil `await res.json()` kemudian `await res.text()` pada instance response yang sama tanpa melakukan kloning (`res.clone()`). Tindakan ini akan melempar `TypeError: Failed to execute 'json' on 'Response': body stream already read`.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah fungsi `fetchWithRetry(url, options, maxRetries)` yang menjalankan request `fetch` dengan batas waktu 2000ms per percobaan. Jika terjadi network error atau HTTP status 5xx, fungsi harus mengulang request hingga batas `maxRetries` terpenuhi menggunakan jeda eksponensial.
2. Di **Code Editor di bawah**, implementasikan abstraksi download gambar yang memanggil `fetch()` untuk aset binary, mengonversi hasilnya menjadi `Blob`, memvalidasi bahwa `blob.type` adalah `image/png` atau `image/jpeg`, lalu simulasikan penanganan error jika ukuran file melebihi 2MB.

---

## 🔗 Referensi
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs: AbortController Interface](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/)