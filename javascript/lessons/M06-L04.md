# Async/Await, Promise, & Event Loop Mendalam

**Slug**: `async-await-asynchronous` · **Level**: Intermediate · **Waktu**: 30 Menit

## 🎯 Tujuan Pembelajaran
- Membedah arsitektur asynchronous JavaScript: interaksi V8 Call Stack, libuv/Web APIs, Microtask Queue, dan Macrotask (Task) Queue.
- Menguasai lifecycle Promise serta pemanfaatan `async`/`await` untuk manajemen operasi asinkron non-blocking.
- Mengimplementasikan orkestrasi konkurensi tingkat lanjut menggunakan kombinator modern (`Promise.all`, `Promise.allSettled`, `Promise.any`, `Promise.race`) secara optimal dan efisien.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript berjalan di atas runtime berbasis *single-threaded non-blocking event-driven architecture*. Engine V8 mengeksekusi instruksi sinkron pada satu thread utama melalui struktur data **Call Stack** dengan prinsip LIFO (*Last In, First Out*). Ketika engine mendeteksi instruksi asynchronous (seperti I/O, timer, atau network request), eksekusi didelegasikan ke thread pool lingkungan host (Web APIs di browser atau `libuv` di Node.js), sehingga Call Stack tidak terblokir (*run-to-completion invariant*).

Komponen inti yang mengatur aliran ini adalah **Event Loop**. Event Loop terus-menerus mengevaluasi apakah Call Stack telah kosong. Ketika stack kosong, Event Loop memeriksa antrean tugas:
1. **Microtask Queue (Job Queue)**: Memiliki prioritas tertinggi. Berisi callback dari `Promise.then()`, `catch()`, `finally()`, `queueMicrotask()`, dan `process.nextTick()` (Node.js). Seluruh antrean microtask harus dikosongkan (*drained*) secara tuntas sebelum runtime beralih ke tugas lain.
2. **Macrotask Queue (Callback/Task Queue)**: Berisi callback dari `setTimeout`, `setInterval`, `setImmediate`, dan event listener DOM/IO. Event Loop hanya mengambil *satu* macrotask per siklus (tick), lalu segera memeriksa dan mengosongkan kembali Microtask Queue jika ada microtask baru yang dijadwalkan.

Objek **Promise** merepresentasikan representasi nilai eventual dari operasi asinkron dengan 3 state mutlak yang *immutable* setelah berubah: `pending`, `fulfilled`, atau `rejected`. Sintaks `async`/`await` adalah lapisan abstraksi (*syntactic sugar*) di atas Promise dan Generator, di mana keyword `await` menangguhkan eksekusi fungsi lokal dan secara implisit membungkus sisa instruksi di bawahnya ke dalam Microtask Queue.

### 2. Sintaks & Penggunaan Modern
Eksekusi konkurensi di ES2024 memanfaatkan Promise combinators untuk mengeksekusi multiple asynchronous operations secara paralel, mencegah bottleneck *sequential waterfall*.

```javascript
// Demonstrasi Prioritas Eksekusi Event Loop & Promise Combinators

console.log("1. Synchronous Main Thread Start");

// Macrotask
setTimeout(() => {
  console.log("6. Macrotask: setTimeout executed");
}, 0);

// Microtask via queueMicrotask
queueMicrotask(() => {
  console.log("4. Microtask: queueMicrotask executed");
});

// Microtask via Promise
Promise.resolve().then(() => {
  console.log("5. Microtask: Promise.then executed");
});

// Async/Await & Combinators
const fetchService = (id, delayMs, shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(`Service ${id} Error`));
      else resolve({ id, data: `Payload ${id}` });
    }, delayMs);
  });

async function executeParallelOperations() {
  console.log("2. Async Function Initialized");

  try {
    // 1. Promise.all: Fail-fast, butuh SEMUA sukses
    const allResults = await Promise.all([
      fetchService("Auth", 30),
      fetchService("Config", 20)
    ]);
    console.log("Promise.all Results:", allResults.map(r => r.id));

    // 2. Promise.allSettled: Menunggu semua selesai tanpa fail-fast
    const settledResults = await Promise.allSettled([
      fetchService("Inventory", 10),
      fetchService("Payment", 15, true) // Gagal
    ]);
    console.log("Promise.allSettled Statuses:", settledResults.map(r => r.status));

    // 3. Promise.any: Mengambil yang PERTAMA sukses (mengabaikan error jika ada yang sukses)
    const fastestSuccess = await Promise.any([
      fetchService("Mirror 1", 50, true),
      fetchService("Mirror 2", 25)
    ]);
    console.log("Promise.any Winner:", fastestSuccess.id);

  } catch (err) {
    console.error("Pipeline Exception:", err.message);
  }
}

executeParallelOperations();

console.log("3. Synchronous Main Thread End");
```

### 3. Studi Kasus Nyata
Skenario agregasi data dasbor: Mengambil metadata akun, metrik analitik, dan daftar notifikasi. Jika metrik gagal diambil karena timeout sistem analitik pihak ketiga, halaman profil tetap harus tampil dengan data akun dan notifikasi tanpa mengalami crash total.

```javascript
// Production-grade Concurrent Data Aggregator
async function fetchAccountData(userId) {
  // Simulasi query DB utama (kritis)
  return { userId, role: "Staff Engineer", active: true };
}

async function fetchAnalytics(userId) {
  // Simulasi metrik eksternal yang rawan timeout/gagal
  throw new Error("Analytics Service Unavailable (503)");
}

async function fetchNotifications(userId) {
  return [{ id: 101, message: "System maintenance at 00:00 UTC" }];
}

async function compileDashboard(userId) {
  console.log(`[INIT] Memulai agregasi data untuk user: ${userId}`);
  const startTime = performance.now();

  // Eksekusi konkuren non-blocking
  const [accountResult, analyticsResult, notificationsResult] = await Promise.allSettled([
    fetchAccountData(userId),
    fetchAnalytics(userId),
    fetchNotifications(userId)
  ]);

  // Degradasi layanan terkelola (Graceful Degradation)
  if (accountResult.status === "rejected") {
    throw new Error(`Critical: Gagal memuat data akun dasar - ${accountResult.reason.message}`);
  }

  const payload = {
    user: accountResult.value,
    notifications: notificationsResult.status === "fulfilled" ? notificationsResult.value : [],
    analytics: analyticsResult.status === "fulfilled" ? analyticsResult.value : { fallback: true, data: null },
    meta: {
      analyticsDegraded: analyticsResult.status === "rejected",
      executionTimeMs: Number((performance.now() - startTime).toFixed(2))
    }
  };

  console.log("[SUCCESS] Payload dashboard berhasil dikompilasi:", JSON.stringify(payload, null, 2));
  return payload;
}

compileDashboard("usr_9901x");
```

### 4. Diagram Alur & Visualisasi Event Loop
Berikut visualisasi siklus transisi data antara Call Stack, Host APIs, Microtask Queue, dan Macrotask Queue:

```text
┌────────────────────────────────────────────────────────┐
│                   CALL STACK (V8)                      │
│  [ Eksekusi synchronous task sampai stack benar-benar  │
│    kosong (Run-to-completion)                        ] │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼ Delegasi Operasi Asinkron
┌────────────────────────────────────────────────────────┐
│           HOST / WEB APIs & LIBUV THREAD POOL          │
│  [ Timers, Fetch/XHR, File System, Network Socket ]    │
└─────────────┬────────────────────────────┬─────────────┘
              │ Callback selesai           │ Promise resolve/reject
              ▼                            ▼
┌──────────────────────────┐  PRIORITAS  ┌──────────────────────────┐
│     MACROTASK QUEUE      │  <========  │     MICROTASK QUEUE      │
│  - setTimeout / Interval │   RENDAH    │  - Promise callbacks     │
│  - setImmediate (Node)   │             │  - async / await resume  │
│  - UI Rendering Event    │             │  - queueMicrotask()      │
└─────────────┬────────────┘             └─────────────┬────────────┘
              │                                        │
              │  ┌──────────────────────────────────┐  │
              │  │           EVENT LOOP             │  │
              └─>│ 1. Kuras SEMUA Microtask         │<─┘
                 │ 2. Jalankan Render Frame (Opt.)  │
                 │ 3. Ambil SATU Macrotask          │
                 │ 4. Ulangi siklus (Tick)          │
                 └──────────────────┬───────────────┘
                                    │ Push ke Stack
                                    ▼
                         ┌────────────────────┐
                         │   CALL STACK (V8)  │
                         └────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `Promise.all()` untuk dependensi paralel**: Jika sub-tugas tidak saling bergantung secara berurutan, jalankan secara konkuren untuk memangkas latensi dari `T1 + T2 + T3` menjadi `Max(T1, T2, T3)`.
- ✅ **Gunakan `Promise.allSettled()` untuk toleransi kesalahan**: Ideal untuk dashboard atau batch-processing di mana kegagalan satu request tidak boleh membatalkan request lainnya.
- ✅ **Bungkus `await` dalam `try/catch` eksplisit**: Selalu tangani penolakan Promise untuk menghindari unhandled promise rejections yang dapat mematikan proses Node.js.
- ❌ **Hindari Async Waterfall di dalam Loop**: Jangan menulis `for (const item of list) { await process(item); }` jika item dapat diproses secara independen. Gunakan `await Promise.all(list.map(process))` sebagai gantinya.
- ❌ **Hindari callback `async` pada `Array.prototype.forEach`**: `forEach` tidak aware terhadap Promise; callback `async` akan berjalan secara *fire-and-forget* tanpa menunggu penyelesaian antar iterasi.

---

## ✍️ Latihan Mandiri
1. **Analisis Order of Execution**: Di Code Editor di bawah, buat potongan kode yang mencampurkan `console.log`, `setTimeout(..., 0)`, `Promise.resolve().then(...)`, dan `queueMicrotask(...)`. Prediksikan output terminal sebelum menjalankannya untuk memvalidasi pemahaman Anda tentang Microtask vs Macrotask priority.
2. **Implementasi Retry Mechanism dengan Exponential Backoff**: Di Code Editor di bawah, buat fungsi `fetchWithRetry(fn, retries = 3, delay = 500)` yang menerima fungsi asinkron `fn`. Jika `fn` melempar error, fungsi harus menunggu secara asinkron dengan jeda bertingkat (`delay * 2^attempt`) sebelum mencoba kembali hingga kuota `retries` habis.

---

## 🔗 Referensi
- [MDN Web Docs: Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
- [MDN Web Docs: Promise Combinators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)
- [ECMAScript Specification: Jobs and Host Operations to Enqueue Jobs](https://tc39.es/ecma262/#sec-jobs-and-host-operations-to-enqueue-jobs)