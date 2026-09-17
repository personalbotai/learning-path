# Object: Properti dan Metode (groupBy, entries)

**Slug**: `object-properti-dan-metode` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai sintaks modern manipulasi objek ES2024: computed property names, shorthand, dan method definitions.
- Memahami mekanisme iterasi dan transformasi data dua arah menggunakan `Object.entries()` dan `Object.fromEntries()`.
- Mengimplementasikan fitur standar ES2024 `Object.groupBy()` dan `Map.groupBy()` untuk klasifikasi data deterministik.
- Menganalisis perbedaan alokasi memori pada shallow copy vs. deep copy menggunakan `structuredClone()` serta limitasi teknisnya di V8 engine.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik layar JavaScript runtime (seperti Google V8), objek dialokasikan di dalam **Heap Memory**. Variabel yang kita deklarasikan tidak menyimpan data objek secara langsung, melainkan menyimpan *memory pointer* (referensi) ke lokasi heap tersebut. Untuk mengoptimalkan pencarian properti dinamis, V8 menggunakan konsep internal bernama *Hidden Classes* (atau *Shapes*). Mutasi struktur objek secara dinamis yang tidak teratur dapat menyebabkan *shape transitions*, yang memicu deoptimisasi performa (bailing out of inline caches).

Dalam manipulasi data tingkat lanjut, developer sering kali perlu mengubah bentuk (*shape-shifting*) struktur data: memecah objek menjadi pasangan kunci-nilai (*key-value pairs*), memfilter atau memodifikasinya, lalu merekonstruksinya kembali. Sebelum ES2024, proses klasifikasi data memerlukan pola manual via `Array.prototype.reduce()` atau library eksternal (seperti Lodash). Standardisasi ES2024 memperkenalkan `Object.groupBy()` dan `Map.groupBy()`, yang bekerja secara native di level runtime engine untuk mengelompokkan koleksi dengan kompleksitas waktu linear $O(n)$.

Tantangan arsitektural lainnya adalah duplikasi objek. Operasi *shallow copy* (seperti *spread operator* `{...obj}` atau `Object.assign()`) hanya menduplikasi referensi level pertama (*depth 1*). Properti bersarang (*nested properties*) tetap menunjuk ke alamat memori yang sama di Heap. Standar modern menyediakan `structuredClone()`, sebuah API global berbasis *HTML Structured Clone Algorithm* yang mampu menyalin seluruh hierarki nested data secara rekursif serta menangani *circular references* secara aman tanpa merusak tipe data bawaan.

### 2. Sintaks & Penggunaan Modern

ES2024 menyempurnakan sintaks literal dan metode statis untuk transformasi objek:

```javascript
// 1. Enhanced Object Literals & Computed Properties
const dynamicPrefix = 'metric';
const timestampKey = Symbol('timestamp');

const telemetryNode = {
  // Computed property name
  [`${dynamicPrefix}_cpu`]: 87.4,
  [timestampKey]: Date.now(),
  
  // Property shorthand
  status: 'HEALTHY',
  
  // Method definition shorthand
  ping(host) {
    return `Pinging ${host} from node... Status: ${this.status}`;
  }
};

console.log(telemetryNode.metric_cpu); // 87.4
console.log(telemetryNode.ping('10.0.0.1')); 

// 2. Transformasi dengan Object.entries() & Object.fromEntries()
const inventory = { apples: 15, oranges: 8, bananas: 24, grapes: 4 };

// Pipeline: Object -> Array [k, v] -> Filter/Map -> Object
const highStockInventory = Object.fromEntries(
  Object.entries(inventory)
    .filter(([_, qty]) => qty >= 10)
    .map(([fruit, qty]) => [fruit.toUpperCase(), qty * 2])
);

console.log('Filtered & Mapped:', highStockInventory); 
// Output: { APPLES: 30, BANANAS: 48 }

// 3. Pengelompokan Data ES2024: Object.groupBy vs Map.groupBy
const servers = [
  { id: 'srv-1', region: 'ap-southeast', load: 45 },
  { id: 'srv-2', region: 'us-east', load: 88 },
  { id: 'srv-3', region: 'ap-southeast', load: 92 },
  { id: 'srv-4', region: 'eu-central', load: 12 }
];

// Object.groupBy mengembalikan null-prototype object dengan string keys
const byRegion = Object.groupBy(servers, (server) => server.region);
console.log('Grouped by Region:', byRegion['ap-southeast']);

// Map.groupBy mendukung arbitrary keys (misal: objek atau boolean)
const loadThreshold = { high: true };
const normalThreshold = { high: false };

const byLoadStatus = Map.groupBy(servers, (server) => {
  return server.load > 80 ? loadThreshold : normalThreshold;
});
console.log('High Load Server Count:', byLoadStatus.get(loadThreshold)?.length); // 2

// 4. Salinan Memori: Shallow vs Deep (structuredClone)
const originalConfig = {
  env: 'production',
  flags: { enableFeatureX: true },
  createdAt: new Date(),
  tags: new Set(['core', 'api'])
};

// Shallow Copy (Spread)
const shallowCopy = { ...originalConfig };
shallowCopy.flags.enableFeatureX = false; // Mutasi nested ikut mengubah original!
console.log('Original terdampak shallow mutation:', originalConfig.flags.enableFeatureX); // false

// Deep Copy (structuredClone)
const deepCopy = structuredClone(originalConfig);
deepCopy.flags.enableFeatureX = true; // Mutasi terisolasi penuh
deepCopy.tags.add('v2');

console.log('Original tetap aman:', originalConfig.flags.enableFeatureX); // false
console.log('Set terisolasi:', originalConfig.tags.has('v2')); // false
```

### 3. Studi Kasus Nyata

Skenario: Pemrosesan payload transaksi payment gateway. Kita perlu mengelompokkan transaksi berdasarkan status, membersihkan metadata privat menggunakan transformasi entri, dan membuat snapshot *deep copy* yang aman dari mutasi lanjutan.

```javascript
const rawTransactions = [
  { id: 'tx-101', user: { id: 'u-1', tier: 'gold' }, amount: 450, status: 'SUCCESS', meta: { ip: '1.1.1.1' } },
  { id: 'tx-102', user: { id: 'u-2', tier: 'silver' }, amount: 120, status: 'PENDING', meta: { ip: '2.2.2.2' } },
  { id: 'tx-103', user: { id: 'u-3', tier: 'gold' }, amount: 980, status: 'SUCCESS', meta: { ip: '3.3.3.3' } },
  { id: 'tx-104', user: { id: 'u-4', tier: 'bronze' }, amount: 50, status: 'FAILED', meta: { ip: '4.4.4.4' } }
];

// Langkah 1: Isolasi data transaksional menggunakan structuredClone
const secureTransactions = structuredClone(rawTransactions);

// Langkah 2: Sanitasi data per record (Menghapus properti 'meta' sensitif via entries)
const sanitizedTransactions = secureTransactions.map(tx => {
  const allowedEntries = Object.entries(tx).filter(([key]) => key !== 'meta');
  return Object.fromEntries(allowedEntries);
});

// Langkah 3: Pengelompokan deterministik berdasarkan status (ES2024)
const groupedByStatus = Object.groupBy(sanitizedTransactions, (tx) => tx.status);

// Langkah 4: Kalkulasi agregat total nominal per grup
const statusSummary = Object.fromEntries(
  Object.entries(groupedByStatus).map(([status, list]) => [
    status,
    {
      totalTransactions: list.length,
      totalVolume: list.reduce((acc, curr) => acc + curr.amount, 0)
    }
  ])
);

console.log('Agregasi Transaksi:', statusSummary);
/*
Output:
{
  SUCCESS: { totalTransactions: 2, totalVolume: 1430 },
  PENDING: { totalTransactions: 1, totalVolume: 120 },
  FAILED: { totalTransactions: 1, totalVolume: 50 }
}
*/
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   TRANSFORMASI & MEMORY HEAP VISUALIZER                │
└────────────────────────────────────────────────────────────────────────┘

1. OBJECT PIPELINE TRANSFORMATION:
  Object { a: 1, b: 2 } 
    ──(Object.entries)────> [ ['a', 1], ['b', 2] ]
    ──(Array Methods)─────> [ ['a', 2], ['b', 4] ]
    ──(Object.fromEntries)> Object { a: 2, b: 4 }

2. GROUPING MECHANISM (ES2024):
  Array of Entities ──[ Object.groupBy(fn) ]──> Object (null prototype)
                                                ├── "SUCCESS" ──> [ {...}, {...} ]
                                                └── "FAILED"  ──> [ {...} ]

3. MEMORY ALLOCATION (SHALLOW vs DEEP):
  Stack Memory          Heap Memory
  ┌──────────┐          ┌──────────────────────────────────────────────┐
  │ original ├─────────>│ Record A { nested: Pointer -> [Nested Object]│
  └──────────┘          └──────────────────────────────────────┬───────┘
                                                               │ (sama)
  ┌──────────┐ (Spread) ┌──────────────────────────────────────▼───────┐
  │ shallow  ├─────────>│ Record B { nested: Pointer ──────────────────┤
  └──────────┘          └──────────────────────────────────────────────┘
  
  ┌──────────┐ (Clone)  ┌──────────────────────────────────────────────┐
  │ deepCopy ├─────────>│ Record C { nested: Pointer -> [Cloned Object]│
  └──────────┘          └──────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ Gunakan `Object.groupBy()` saat kunci partisi bertipe String atau Symbol, dan gunakan `Map.groupBy()` jika memerlukan kunci kompleks (misal objek konfigurasi atau tipe primitif non-string).
- ✅ Gunakan `structuredClone()` untuk kebutuhan deep copying modern. Hindari `JSON.parse(JSON.stringify(obj))` karena pendekatan JSON akan membuang tipe `Date` (diubah ke string ISO), menghilangkan `Map`/`Set`/`BigInt`, dan melempar *TypeError* jika terdapat *circular references*.
- ✅ Selalu ingat bahwa hasil kembalian dari `Object.groupBy()` adalah objek dengan prototipe `null` (`Object.create(null)`), sehingga tidak mewarisi metode `hasOwnProperty` pada instansinya secara langsung.
- ❌ **Anti-pattern**: Jangan menggunakan `structuredClone()` pada objek yang mengandung fungsi, metode class, atau node DOM karena algoritma *Structured Clone* akan melempar `DataCloneError`.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**. Diberikan array daftar karyawan: `[{ name: 'A', dept: 'IT', salary: 8000 }, { name: 'B', dept: 'HR', salary: 5000 }, { name: 'C', dept: 'IT', salary: 9000 }]`. Gunakan `Object.groupBy()` untuk mengelompokkan karyawan berdasarkan `dept`, kemudian gunakan `Object.entries()` dan `Object.fromEntries()` untuk menghitung rata-rata gaji per departemen.
2. Buat sebuah nested object konfigurasi yang memiliki tipe `Date` dan `Set`. Lakukan *deep copy* menggunakan `structuredClone()`, lakukan mutasi pada nested property di objek salinan, dan buktikan melalui `console.log` bahwa objek asli tidak terpengaruh sama sekali.

---

## 🔗 Referensi
- [MDN Web Docs: Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [MDN Web Docs: Map.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)
- [MDN Web Docs: structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
- [ECMAScript 2024 Language Specification](https://tc39.es/ecma262/2024/)