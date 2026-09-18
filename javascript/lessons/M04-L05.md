# Prototype dan Prototype Chain

**Slug**: `prototype-dan-prototype-chain` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Membedakan secara presisi antara slot internal `[[Prototype]]`, accessor `__proto__`, method standard `Object.getPrototypeOf()`, dan properti `.prototype` pada constructor function.
- Menganalisis mekanisme resolusi properti (*prototype chain lookup*) dan fenomena *property shadowing* pada engine V8.
- Mengimplementasikan kamus data (*clean dictionary*) bebas polusi menggunakan `Object.create(null)` serta memanfaatkan `Object.hasOwn()` untuk evaluasi kepemilikan properti secara aman.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript tidak mengadopsi model *class-based inheritance* klasik seperti Java atau C++, melainkan mengimplementasikan *prototypal delegation*. Pada tingkat arsitektur engine (seperti V8), setiap objek dialokasikan di *Heap Memory* dengan membawa pointer tersembunyi ke slot internal bernama `[[Prototype]]`. Ketika sebuah properti atau method diakses pada suatu objek, engine memeriksa apakah properti tersebut eksis secara langsung pada objek target (*own property*). Jika tidak ditemukan, engine melakukan *traversal* naik menyusuri rantai pointer `[[Prototype]]` ini hingga mencapai ujung rantai, yaitu `Object.prototype`, yang menunjuk ke `null`.

Terdapat distingsi krusial antara properti `.prototype` milik fungsi dengan `[[Prototype]]` milik *instance*:
1. **`Function.prototype`**: Properti biasa yang otomatis dimiliki oleh fungsi reguler atau konstruktor. Properti ini berfungsi sebagai *blueprint* objek yang akan dijadikan `[[Prototype]]` bagi setiap *instance* baru saat fungsi dieksekusi dengan operator `new`.
2. **`[[Prototype]]` (diakses via `Object.getPrototypeOf(obj)`)**: Pointer aktual yang dimiliki oleh setiap instansiasi objek untuk mendelegasikan pencarian properti ke atas rantai pewarisan.

Ketika kita menulis nilai ke sebuah properti (`obj.prop = value`), engine secara default **tidak** menimpa properti di prototipenya, melainkan menciptakan *own property* baru pada objek target. Fenomena ini disebut **Property Shadowing**, di mana properti lokal menutupi properti berjenjang lebih tinggi tanpa mengubah *state* pada prototipe bersama. Di balik layar, engine mengoptimalkan lookup ini menggunakan representasi internal *Shapes* (atau *Hidden Classes*) dan *Inline Caches (IC)*. Mengubah prototype secara dinamis pada *runtime* via `Object.setPrototypeOf()` merupakan operasi berbiaya tinggi (*deoptimization*) karena merusak struktur Shape internal objek tersebut.

### 2. Sintaks & Penggunaan Modern
Dalam standar ECMAScript modern (ES2022–ES2024), manipulasi direct via `__proto__` telah berstatus *deprecated*. Kita diwajibkan menggunakan `Object.getPrototypeOf()`, `Object.create()`, dan `Object.hasOwn()`.

```javascript
// 1. Mendefinisikan prototipe dasar (delegation base)
const baseMetrics = {
  calculateThroughput(ops, durationMs) {
    return (ops / (durationMs / 1000)).toFixed(2);
  },
  systemId: 'DEFAULT_CORE'
};

// 2. Membuat objek baru dengan delegasi eksplisit
const nodeWorker = Object.create(baseMetrics);
nodeWorker.systemId = 'WORKER_NODE_01'; // Property Shadowing

// 3. Verifikasi Chain dan Kepemilikan Properti (ES2022+ Object.hasOwn)
console.log(nodeWorker.calculateThroughput(1500, 2000)); // "750.00" (Delegasi)
console.log(nodeWorker.systemId); // "WORKER_NODE_01" (Shadowed own property)
console.log(Object.hasOwn(nodeWorker, 'systemId')); // true
console.log(Object.hasOwn(nodeWorker, 'calculateThroughput')); // false

// 4. Memeriksa relasi prototype chain secara native
const prototypeRef = Object.getPrototypeOf(nodeWorker);
console.log(prototypeRef === baseMetrics); // true
console.log(Object.getPrototypeOf(prototypeRef) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (Ujung rantai)

// 5. Clean Dictionary (Bebas dari Object.prototype & Prototype Pollution)
const secureConfig = Object.create(null);
secureConfig['apiKey'] = 'secret_token_123';

console.log(secureConfig.toString); // undefined (Bukan inherited function)
console.log(Object.getPrototypeOf(secureConfig)); // null
```

### 3. Studi Kasus Nyata
Dalam sistem *in-memory cache* performa tinggi atau parser payload JSON mentah, penggunaan object literal biasa `{}` rentan terhadap *Prototype Pollution* dan *overhead* pengecekan properti bawaan (`toString`, `valueOf`, `constructor`). Menggunakan `Object.create(null)` memastikan struktur murni *key-value map* tanpa interferensi prototipe.

```javascript
class SecureInMemoryStore {
  #store;

  constructor() {
    // Menghasilkan objek tanpa prototype (Dictionary murni)
    this.#store = Object.create(null);
  }

  set(key, value) {
    // Aman dari injeksi key proto seperti "__proto__" atau "constructor"
    this.#store[key] = value;
  }

  get(key) {
    // Lookup langsung pada Own Property tanpa traversal prototype chain
    return this.#store[key];
  }

  has(key) {
    // Operasi 'in' aman digunakan karena tidak ada inherited prototype
    return key in this.#store;
  }

  dump() {
    return { ...this.#store };
  }
}

const cache = new SecureInMemoryStore();
cache.set('session:usr_99', { roles: ['admin'] });
cache.set('toString', 'custom_string_override'); // Tidak merusak method global

console.log(cache.get('session:usr_99')); // { roles: [ 'admin' ] }
console.log(cache.has('toString')); // true (Data valid, bukan method Object)
console.log(typeof cache.get('toString')); // "string"
console.log(cache.has('valueOf')); // false (Bersih dari inheritansi)
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        PROTOTYPE CHAIN LOOKUP                          │
│                                                                        │
│  nodeWorker (Instance)                                                 │
│  ┌──────────────────────────────┐                                      │
│  │ systemId: 'WORKER_NODE_01'   │                                      │
│  │ [[Prototype]] ───────────────┼────────┐                             │
│  └──────────────────────────────┘        │                             │
│                                          ▼                             │
│                          baseMetrics (Parent Prototype)                │
│                          ┌────────────────────────────────┐            │
│                          │ systemId: 'DEFAULT_CORE'       │ (Shadowed) │
│                          │ calculateThroughput: f()       │            │
│                          │ [[Prototype]] ─────────────────┼──────┐     │
│                          └────────────────────────────────┘      │     │
│                                                                  ▼     │
│                                          Object.prototype              │
│                                          ┌────────────────────────┐    │
│                                          │ hasOwnProperty: f()    │    │
│                                          │ toString: f()          │    │
│                                          │ [[Prototype]] ─────────┼──┐ │
│                                          └────────────────────────┘  │ │
│                                                                      ▼ │
│                                                                     null
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `Object.hasOwn(obj, prop)`**: Menggantikan `obj.hasOwnProperty(prop)` legacy karena `hasOwn` aman dari *shadowing* method lokal dan tetap bekerja pada objek hasil `Object.create(null)`.
- ✅ **Gunakan `Object.create(null)` untuk Hash Maps/Lookups**: Mencegah kerentanan keamanan *Prototype Pollution* saat mengolah *untrusted external keys*.
- ✅ **Definisikan method bersama pada `.prototype` atau via `class`**: Menghemat alokasi memori heap dengan mereferensikan satu definisi fungsi tunggal ke seluruh instansiasi.
- ❌ **Hindari `Object.setPrototypeOf()` pada hot-path**: Mengubah prototipe objek setelah diinisialisasi akan merusak optimasi *hidden class (Shape)* pada V8 engine dan menyebabkan performa komputasi menurun drastis.

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, buatlah sebuah hierarki delegasi menggunakan `Object.create()`. Buat `deviceBase` yang memiliki method `ping()`, lalu buat `serverInstance` yang mewarisi `deviceBase`. Buktikan bahwa memanggil `serverInstance.ping()` menggunakan delegasi prototipe, kemudian lakukan *property shadowing* pada properti `status`.
2. Tulis sebuah fungsi verifikator keamanan pada **Code Editor di bawah** yang menerima objek konfigurasi acak, lalu kembalikan salinan kamus bersih (*clean dictionary*) menggunakan `Object.create(null)` sehingga semua properti warisan dari `Object.prototype` tereliminasi sepenuhnya.

---

## 🔗 Referensi
- [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [ECMAScript 2024 Language Specification: Ordinary and Exotic Objects Behaviors](https://tc39.es/ecma262/#sec-ordinary-and-exotic-objects-behaviours)