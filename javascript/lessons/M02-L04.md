# Map dan WeakMap

**Slug**: `map-dan-weakmap` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami perbedaan arsitektur internal antara `Object`, `Map`, dan `WeakMap` pada *engine* V8.
- Menguasai implementasi `Map` untuk kebutuhan manipulasi pasangan *key-value* dinamis berfrekuensi tinggi dengan tipe *key* non-string.
- Mengimplementasikan `WeakMap` untuk manajemen memori otomatis, *private state encapsulation*, dan *metadata caching* bebas *memory leak*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama

Pada JavaScript modern, `Object` biasa bukan satu-satunya struktur data *key-value*. V8 Engine mengoptimalkan plain `Object` menggunakan konsep **Hidden Classes (Shapes)** dan **Inline Caches** untuk akses properti yang statis dan terprediksi. Namun, jika Anda sering menambah dan menghapus *key* secara dinamis, objek akan mengalami *dictionary mode* (hash table fallback) yang menurunkan efisiensi optimasi JIT compiler.

`Map` dirancang spesifik sebagai *hash map collection*. Berbeda dari `Object` yang hanya menerima `String` dan `Symbol` sebagai *key* (semua tipe lain di-koersi menjadi string via `.toString()`), `Map` mengizinkan tipe data apa pun sebagai *key*—termasuk objek, fungsi, array, hingga `NaN`. `Map` juga menjamin urutan iterasi sesuai urutan penyisipan elemen (*insertion order*), menyediakan properti eksplisit `.size` dengan kompleksitas $O(1)$, serta memiliki performa mutasi (*insert/delete*) yang jauh lebih tinggi pada volume data besar.

```text
Perbandingan Karakteristik:
┌─────────────────────┬──────────────────┬──────────────────┬──────────────────┐
│ Fitur               │ Object           │ Map              │ WeakMap          │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Tipe Key            │ String, Symbol   │ Tipe apa saja    │ Objek & Symbol*  │
│ Order Guarantee     │ Tidak teratur    │ Sesuai insersi   │ Tidak ada        │
│ Garbage Collection  │ Strong Reference │ Strong Reference │ Weak Reference   │
│ Iterabilitas        │ Object.keys()    │ Iterable (for..of) Tidak bisa       │
│ Akses Ukuran        │ Object.keys().len│ map.size (O(1))  │ Tidak tersedia   │
└─────────────────────┴──────────────────┴──────────────────┴──────────────────┘
*Catatan: ES2023/ES2024 mengizinkan Registered/Unique Symbols sebagai key pada WeakMap.
```

`WeakMap` merupakan varian khusus di mana *key* wajib berupa objek (atau *unique symbol*) dan direferensikan secara **lemah (*weak reference*)**. Pada algoritma **Garbage Collection (GC) Mark-and-Sweep**, jika tidak ada referensi langsung (*strong reference*) lain dari Call Stack atau GC Root yang menuju ke objek *key* tersebut, maka memori objek tersebut beserta *value* yang terikat di dalam `WeakMap` akan otomatis dibersihkan dari *Heap Memory*. Akibat sifat non-deterministik dari siklus pembersihan GC ini, `WeakMap` tidak memiliki metode iterasi (`entries`, `keys`), tidak bisa di-*loop*, dan tidak memiliki properti `.size`.

### 2. Sintaks & Penggunaan Modern

```javascript
// --- 1. Eksplorasi Map Modern (ES2024) ---
const executionMetrics = new Map();

const userSession = { sessionId: 'sess_9981' };
const handleCompute = () => 'computation_result';

// Key berupa Object, Function, dan Primitif
executionMetrics.set(userSession, { durationMs: 142.5, status: 'success' });
executionMetrics.set(handleCompute, { calls: 12 });
executionMetrics.set('environment', 'production');

// Membaca ukuran dan entri
console.log('Map Size:', executionMetrics.size); // 3
console.log('Session Metric:', executionMetrics.get(userSession));

// Iterasi terstruktur dengan Destructuring
for (const [key, meta] of executionMetrics.entries()) {
  const identifier = typeof key === 'function' ? key.name : typeof key === 'object' ? JSON.stringify(key) : key;
  console.log(`Key [${identifier}] =>`, meta);
}

// Map.groupBy (Standar Baru ES2024 untuk pengelompokan langsung ke Map)
const services = [
  { name: 'auth-svc', tier: 'critical' },
  { name: 'log-svc', tier: 'low' },
  { name: 'payment-svc', tier: 'critical' }
];

const groupedByTier = Map.groupBy(services, (service) => service.tier);
console.log('Critical Services:', groupedByTier.get('critical'));


// --- 2. Eksplorasi WeakMap ---
const sessionCache = new WeakMap();

let activeClient = { id: 'client_alpha', role: 'admin' };

// Mengaitkan data cache terisolasi ke objek instance
sessionCache.set(activeClient, { token: 'jwt_secure_xyz', lastPing: Date.now() });

console.log('Cache ada?', sessionCache.has(activeClient)); // true
console.log('Cache payload:', sessionCache.get(activeClient));

// Simulasi dereferensi objek dari root scope
activeClient = null; 
// Pada tahap ini, entri dalam sessionCache otomatis memenuhi syarat untuk di-sweep oleh GC
```

### 3. Studi Kasus Nyata: Metadata Isolation & Memoization Bebas Memory Leak

Dalam arsitektur *frontend state management* atau *server-side plugin engine*, melampirkan metadata langsung ke objek target (misalnya menambahkan properti `obj._customMetadata = ...`) menyebabkan polusi skema objek, potensi tabrakan nama properti, dan rusaknya optimasi *V8 Hidden Classes*. 

`WeakMap` menyelesaikan masalah ini dengan mekanisme *side-table storage*:

```javascript
// Infrastruktur Caching & Private State untuk Node / Instance
class RequestPipeline {
  // Private container menggunakan WeakMap
  #costCalculationCache = new WeakMap();

  process(payloadNode) {
    if (!payloadNode || typeof payloadNode !== 'object') {
      throw new TypeError('Payload harus berupa objek valid.');
    }

    // Cek apakah hasil komputasi berat sudah pernah di-cache
    if (this.#costCalculationCache.has(payloadNode)) {
      return { data: this.#costCalculationCache.get(payloadNode), cached: true };
    }

    // Simulasi komputasi intensif berbasis objek
    const computedScore = Object.keys(payloadNode).length * 42.85;
    
    // Simpan ke WeakMap (Aman dari memory leak saat payloadNode di-destroy)
    this.#costCalculationCache.set(payloadNode, computedScore);

    return { data: computedScore, cached: false };
  }
}

// Simulasi Runtime
const pipeline = new RequestPipeline();

let transactionRequest = { id: 'tx_801', amount: 5000, currency: 'USD' };

console.log(pipeline.process(transactionRequest)); // cached: false
console.log(pipeline.process(transactionRequest)); // cached: true

// Saat request lifecycle selesai di event loop:
transactionRequest = null; 
// Memory Heap bersih: Tidak ada reference leak tertahan di instance pipeline
```

### 4. Visualisasi & Mental Model

```text
GARBAGE COLLECTION: STRONG vs WEAK REFERENCE DI HEAP MEMORY

[ Call Stack / GC Root ]
      │             │
      │ (Strong)    │ (Strong: 'activeClient')
      ▼             ▼
┌───────────┐ ┌──────────────┐
│    Map    │ │ Objek Target │ <───┐
└─────┬─────┘ └──────────────┘     │
      │ (Strong)                   │ (Weak Reference)
      ▼                            │
┌───────────────────────────┐      │
│  Entry Key di Map         ├──────┘
└───────────────────────────┘
 * Objek Target TIDAK BISA dibersihkan GC karena Map menahannya secara kuat.

─────────────────────────────────────────────────────────────────────────

[ Call Stack / GC Root ]
                    │ (Strong: 'activeClient' = null) -> DIPUTUS!
                    x
              ┌──────────────┐
              │ Objek Target │ <·········· (Weak Reference)
              └──────────────┘           │
                                   ┌─────┴─────┐
                                   │  WeakMap  │
                                   └───────────┘
 * Objek Target langsung dibersihkan oleh Garbage Collector saat Sweep Phase.
```

---

## 💡 Best Practices & Tips

- ✅ Gunakan `Map` ketika Anda membutuhkan struktur data yang sering mengalami operasi penambahan dan penghapusan pasangan *key-value* secara masif.
- ✅ Gunakan `WeakMap` untuk melampirkan metadata atau *computed cache* pada objek eksternal (seperti DOM Elements, Library Instances, atau Request Contexts) tanpa mengganggu siklus hidup objek tersebut.
- ✅ Gunakan `Object` biasa jika Anda membutuhkan struktur data statis representasional murni yang perlu di-*serialize* secara langsung ke format JSON melalui `JSON.stringify()`.
- ❌ **Anti-Pattern**: Menyimpan *metadata context* sementara di dalam `Map` global menggunakan objek sebagai *key* tanpa pernah menghapusnya secara manual (`map.delete(key)`), yang mengakibatkan **Severe Memory Leak**.
- ❌ **Anti-Pattern**: Menggunakan `WeakMap` untuk data yang membutuhkan inspeksi ukuran (`.length` / `.size`) atau iterasi berkala (`forEach` / `for..of`).

---

## ✍️ Latihan Mandiri

1. **Implementasi Rate Limiter dengan `Map`**:
   Buka **Code Editor di bawah**, buat kelas `RateLimiter` yang menggunakan `Map` untuk melacak jumlah request per IP address (tipe string). Tambahkan metode `hit(ip)` yang menambah hit counter dan membatasi maksimal 5 panggilan, serta metode `reset(ip)` untuk menghapus IP tersebut dari `Map`.

2. **DOM / Object Tracker dengan `WeakMap`**:
   Buka **Code Editor di bawah**, buat fungsi `trackMutation(targetObj, metadata)` yang menyimpan status modifikasi objek ke dalam sebuah `WeakMap`. Buktikan bahwa modifikasi metadata tidak mengubah struktur properti asli dari `targetObj` (gunakan `Object.keys(targetObj)` untuk membuktikannya).

---

## 🔗 Referensi
- [MDN Web Docs: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Web Docs: WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [ECMAScript 2024 Language Specification: Map.groupBy](https://tc39.es/ecma262/#sec-map.groupby)