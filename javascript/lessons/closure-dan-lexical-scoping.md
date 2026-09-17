# Closure dan Lexical Scoping

**Slug**: `closure-dan-lexical-scoping` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Memahami mekanisme resolusi variabel pada Lexical Environment, Scope Chain, dan Execution Context di JavaScript runtime.
- Menganalisis bagaimana engine V8 mempertahankan variabel di Heap Memory saat Execution Context dilepas dari Call Stack.
- Mengimplementasikan pola fungsional mutakhir (encapsulation, function factory, currying, dan memoization) menggunakan closure secara efisien tanpa menimbulkan memory leak.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Lexical Scoping (atau *static scoping*) menetapkan bahwa jangkauan aksesibilitas suatu variabel ditentukan secara statis berdasarkan lokasi fisik penulisan kode pada fase kompilasi/parsing, bukan berdasarkan lokasi pemanggilan fungsi (*dynamic scoping*). Setiap kali fungsi dideklarasikan, engine JavaScript mengikat referensi ke lingkungan leksikal induknya melalui internal property `[[Scopes]]`.

Saat sebuah fungsi dieksekusi, runtime membuat **Execution Context** baru yang terdiri dari **Environment Record** (penyimpan identifier lokal) dan referensi ke **Outer Lexical Environment**. Resolusi variabel terjadi melalui mekanisme **Scope Chain**: jika suatu identifier tidak ditemukan pada Environment Record lokal, engine melintasi pointer `Outer` secara hierarkis hingga mencapai Global Environment Record sebelum melempar `ReferenceError`.

```text
┌─────────────────────────────────────────────────────────────┐
│                 Call Stack vs Heap Memory                   │
│                                                             │
│   CALL STACK                             HEAP MEMORY        │
│ ┌─────────────────────────┐             ┌─────────────────┐ │
│ │ innerFunc() Context     │ ──────────> │ Closure Context │ │
│ ├─────────────────────────┤ (Outer Ref) │ { count: 1 }    │ │
│ │ [outerFunc() POPPED 💥] │             └─────────────────┘ │
│ └─────────────────────────┘                      ▲          │
│                                                  │          │
│ innerFunc mempertahankan referensi ke heap memory ──────────┘
└─────────────────────────────────────────────────────────────┘
```

**Closure** adalah kombinasi antara sebuah fungsi dan referensi leksikal tempat fungsi tersebut dideklarasikan. Lazimnya, saat fungsi selesai dieksekusi, stack frame miliknya akan di-*pop* dari Call Stack dan variabel lokalnya dihancurkan. Namun, jika ada *inner function* yang mempertahankan referensi ke variabel leksikal tersebut, engine JavaScript (seperti V8) memindahkan variabel yang bersangkutan dari **Stack** ke **Heap** (dikenal sebagai *Context Allocation*). Akibatnya, data tetap hidup di memori selama fungsi penutup (*closure*) masih dapat dijangkau oleh Garbage Collector.

### 2. Sintaks & Penggunaan Modern
Pemanfaatan closure modern di ES2024 mencakup pembuatan *state factory*, *currying pipeline*, dan enkapsulasi data tanpa class field.

```javascript
// 1. Function Factory & Private State
const createSecureCounter = (initialValue = 0) => {
  let privateCount = initialValue; // Alokasi di heap via closure

  return Object.freeze({
    increment(step = 1) {
      privateCount += step;
      return privateCount;
    },
    decrement(step = 1) {
      privateCount -= step;
      return privateCount;
    },
    getValue() {
      return privateCount;
    }
  });
};

const counterA = createSecureCounter(10);
console.log(counterA.increment(5)); // 15
console.log(counterA.decrement(2)); // 13
console.log(counterA.privateCount);  // undefined (enkapsulasi terproteksi)

// 2. Currying & Partial Application Modern
const createLogger = (environment) => (serviceName) => (severity) => (message) => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${environment.toUpperCase()}] [${serviceName}] [${severity}]: ${message}`;
};

const prodAuthLogger = createLogger("production")("AuthService");
const logProdAuthError = prodAuthLogger("ERROR");

console.log(logProdAuthError("OIDC token verification failed."));
// [2024-05-18T...] [PRODUCTION] [AuthService] [ERROR]: OIDC token verification failed.
```

### 3. Studi Kasus Nyata
Implementasi *Memoization Cache Utility* berperforma tinggi dengan batas waktu kedaluwarsa (*TTL*) dan mekanisme *eviction* menggunakan Closure untuk mengisolasi storage tanpa mencemari global namespace.

```javascript
const createMemoizedResolver = (computeFn, ttlMs = 5000) => {
  // Metadata cache terisolasi dalam lexical scope
  const cache = new Map();

  return async (...args) => {
    const serializedKey = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(serializedKey)) {
      const { timestamp, value } = cache.get(serializedKey);
      if (now - timestamp < ttlMs) {
        return { data: value, fromCache: true };
      }
      cache.delete(serializedKey); // Evict expired key
    }

    const freshResult = await computeFn(...args);
    cache.set(serializedKey, { timestamp: now, value: freshResult });

    return { data: freshResult, fromCache: false };
  };
};

// Simulasi eksekusi I/O intensif
const fetchExchangeRate = async (from, to) => {
  // Simulasi network latency
  return `${from}_${to}: ${(Math.random() * 1.5 + 0.5).toFixed(4)}`;
};

const getCachedRate = createMemoizedResolver(fetchExchangeRate, 1000);

(async () => {
  console.log(await getCachedRate("USD", "IDR")); // { data: 'USD_IDR: ...', fromCache: false }
  console.log(await getCachedRate("USD", "IDR")); // { data: 'USD_IDR: ...', fromCache: true }
  
  // Menunggu hingga TTL berakhir
  await new Promise((resolve) => setTimeout(resolve, 1100));
  console.log(await getCachedRate("USD", "IDR")); // { data: 'USD_IDR: ...', fromCache: false }
})();
```

### 4. Visualisasi & Mental Model
```text
┌────────────────────────────────────────────────────────────────────────┐
│                        Lexical Scope Chain Tree                        │
│                                                                        │
│  [Global Scope]                                                       │
│  ├── const createMemoizedResolver                                      │
│  │                                                                     │
│  └── [createMemoizedResolver Scope: Activation 1]                      │
│      ├── const cache = new Map()          ◄── Context Memory (Heap)   │
│      ├── const ttlMs = 5000                                            │
│      │                                                                 │
│      └── [Anonymous Async Handler Scope]                               │
│          ├── Args: ["USD", "IDR"]                                      │
│          └── Lookup Chain: cache ──> Lookup Resolver Scope (Resolved!) │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan closure untuk enkapsulasi state**: Closure memberikan privatisasi data murni sebelum hadirnya `#privateField` pada class, serta sangat cocok untuk paradigma Functional Programming.
- ✅ **Bersihkan referensi yang tidak lagi dipakai**: Hapus pointer (`cache.clear()` atau set `variable = null`) jika closure mempertahankan objek besar yang tidak lagi relevan agar Garbage Collector dapat mereklamasi heap memory.
- ✅ **Manfaatkan Currying untuk Reusabilitas Konfigurasi**: Buat *specialized functions* dari konfigurasi umum untuk menyederhanakan signature pemanggilan handler.
- ❌ **Hindari Unintentional Retained Memory**: Menyimpan referensi callback closure pada event listener jangka panjang tanpa memanggil `removeEventListener` akan mencegah seluruh scope leksikal dibersihkan oleh V8 Garbage Collector.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, buatlah sebuah function bernama `createRateLimiter(limit, windowMs)`. Fungsi ini harus mengembalikan closure yang menerima argumen `identifier` (string IP/User ID). Jika identifier memanggil closure melebihi `limit` dalam rentang waktu `windowMs`, kembalikan `false`, jika masih dalam limit kembalikan `true`. Pastikan state tersimpan rapi via closure.
2. Pada **Code Editor di bawah**, modifikasi implementasi memoize di atas agar memiliki batasan maksimum kapasitas (*Max Cache Size*). Jika batas tercapai, hapus entri tertua (*FIFO eviction*) langsung dari closure context.

---

## 🔗 Referensi
- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ECMAScript® 2024 Language Specification: Lexical Environments](https://tc39.es/ecma262/#sec-lexical-environments)
- [V8 Dev: Pointer Compression and Context Allocation in Heap](https://v8.dev/blog)