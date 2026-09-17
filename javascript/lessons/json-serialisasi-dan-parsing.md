# JSON: Serialisasi, Parsing, dan structuredClone

**Slug**: `json-serialisasi-dan-parsing` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai mekanisme lanjutan `JSON.stringify()` (replacer, indentation) dan `JSON.parse()` (reviver function) untuk serialisasi serta rehidrasi data kustom.
- Mengidentifikasi keterbatasan struktural format JSON standar (penanganan `undefined`, `Symbol`, `BigInt`, `Function`, `Date`, dan *circular reference*) pada V8 engine memory heap.
- Mengimplementasikan `structuredClone()` sebagai standar modern komputasi *deep cloning* graf objek kompleks tanpa kehilangan tipe native JavaScript.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JSON (JavaScript Object Notation, RFC 8259) adalah format pertukaran data berbasis teks murni yang diturunkan dari subset sintaks objek JavaScript. Namun, JSON **bukan** representasi 1:1 dari sistem tipe memori JavaScript modern.

Di balik layar, mesin JavaScript (seperti V8) mengeksekusi `JSON.stringify()` melalui algoritma *depth-first tree traversal* pada *memory heap*. Selama proses traversal ini, *engine* memetakan struktur objek ke dalam buffer teks linear. Keterbatasan struktural JSON muncul karena spesifikasinya hanya mendukung tipe data primitif: `string`, `number`, `boolean`, `null`, serta struktur `object` dan `array`.

Ketika V8 menemukan nilai-nilai yang berada di luar spesifikasi JSON standar:
- Properti bernilai `undefined`, `Function`, atau `Symbol` akan **diabaikan** (dihapus) jika berada di dalam objek, atau dikonversi menjadi `null` jika berada di dalam array.
- Tipe `BigInt` akan melempar `TypeError` eksplisit karena representasi numerik JSON tidak memiliki presisi arbitrary IEEE 754 float64.
- Tipe `Date` dikonversi menjadi string ISO-8601 melalui `Date.prototype.toJSON()`, namun kehilangan status prototipe objeknya saat di-*parse* kembali.
- Objek dengan *circular references* (referensi memori melingkar) akan memicu `TypeError: Converting circular structure to JSON` karena traversal rekursif mendeteksi siklus tanpa jalan keluar (*infinite recursion guard*).

Untuk mengatasi manipulasi data di level memori internal tanpa hambatan serialisasi teks, standar HTML & ECMAScript memperkenalkan algoritma **HTML Structured Clone Algorithm** yang diakses melalui fungsi native `structuredClone()`. Fitur ini menduplikasi graf memori secara langsung di C++ runtime, mendukung *cyclic graphs*, serta mempertahankan tipe-tipe modern seperti `Map`, `Set`, `Date`, `RegExp`, `ArrayBuffer`, dan `BigInt`.

---

### 2. Sintaks & Penggunaan Modern

Parameter lanjutan `JSON.stringify(value, replacer, space)` dan `JSON.parse(text, reviver)` memberikan kontrol granular terhadap siklus hidup serialisasi.

```javascript
// 1. REPLACER: Whitelist Array atau Transformasi Fungsi
const userSession = {
  id: 101,
  username: "alex_dev",
  token: "secret_xyz123",
  role: "admin",
  lastActive: new Date("2025-01-15T08:30:00Z"),
  accountBalance: 5000000000000n // BigInt
};

// Replacer sebagai array (whitelist filter)
const filteredJson = JSON.stringify(userSession, ["id", "username", "role"]);
console.log("Filtered JSON:", filteredJson);
// Output: {"id":101,"username":"alex_dev","role":"admin"}

// Replacer sebagai fungsi (transformasi + penanganan BigInt)
const safeJson = JSON.stringify(userSession, (key, value) => {
  if (key === "token") return undefined; // Sensor token
  if (typeof value === "bigint") return `${value.toString()}n`; // Serialisasi BigInt manual
  return value;
}, 2); // 2 spasi indentation
console.log("Safe Pretty JSON:\n", safeJson);

// 2. REVIVER: Rehidrasi tipe data kustom dari string JSON
const rawPayload = '{"title":"Deployment","timestamp":"2025-01-15T10:00:00.000Z","tags":["prod","v2"]}';

const hydrated = JSON.parse(rawPayload, (key, value) => {
  // Reviver berjalan bottom-up (post-order traversal)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  if (typeof value === "string" && isoDateRegex.test(value)) {
    return new Date(value); // Rehidrasi otomatis ke Date instance
  }
  return value;
});

console.log("Is Date instance?", hydrated.timestamp instanceof Date); // true
console.log("Hydrated Year:", hydrated.timestamp.getUTCFullYear()); // 2025

// 3. structuredClone: Deep cloning tanpa JSON serialize-deserialize hack
const complexState = {
  registry: new Map([["srv-1", { ip: "192.168.1.1" }]]),
  flags: new Set(["AUTH_V2", "METRICS_ENABLED"]),
  createdAt: new Date(),
  configVersion: 42n
};

// Circular reference
complexState.self = complexState;

const deepClonedState = structuredClone(complexState);

console.log("Map cloned properly?", deepClonedState.registry instanceof Map); // true
console.log("Circular reference preserved?", deepClonedState.self === deepClonedState); // true
console.log("Independent memory address?", deepClonedState.registry !== complexState.registry); // true
```

---

### 3. Studi Kasus Nyata

Skenario: Membangun pipeline *State Hydration & Sanitization* untuk sistem analitik backend. Pipeline harus mengekspor data yang aman untuk transmisi wire JSON (eksternal) sekaligus menyediakan fungsionalitas pembuatan snapshot memori yang identik untuk *cache/worker thread* (internal).

```javascript
class StateManager {
  #internalState;

  constructor(initialData) {
    this.#internalState = {
      ...initialData,
      cacheStore: new Map(),
      activeSessions: new Set(),
      updatedAt: new Date(),
      auditTrail: []
    };
  }

  // Snapshot memori internal untuk Thread Worker / State History (Deep Copy)
  createSnapshot() {
    return structuredClone(this.#internalState);
  }

  // Serialisasi data untuk dikirim ke API Gateway via HTTP JSON
  serializeForWireTransport() {
    return JSON.stringify(this.#internalState, (key, value) => {
      // 1. Tangani Set -> Array
      if (value instanceof Set) {
        return Array.from(value);
      }
      // 2. Tangani Map -> Plain Object
      if (value instanceof Map) {
        return Object.fromEntries(value);
      }
      // 3. Sensor properti sensitif
      if (key === "credentialHash" || key.startsWith("_")) {
        return undefined;
      }
      return value;
    });
  }

  // Rehidrasi payload JSON yang masuk dari HTTP Request
  static deserializeFromWire(jsonString) {
    return JSON.parse(jsonString, (key, value) => {
      // Rehidrasi field ISO Date yang dikenal
      if (key === "updatedAt" && typeof value === "string") {
        return new Date(value);
      }
      return value;
    });
  }
}

// Uji Implementasi
const manager = new StateManager({
  tenantId: "t-9081",
  _privateKey: "0xdeadbeef",
  credentialHash: "argon2$secret"
});

// Snapshot internal
const localSnapshot = manager.createSnapshot();
console.log("Internal Snapshot Cache is Map?", localSnapshot.cacheStore instanceof Map); // true

// Serialisasi wire (JSON string)
const wireData = manager.serializeForWireTransport();
console.log("Wire JSON Output:", wireData);
// Output: {"tenantId":"t-9081","updatedAt":"2025-...","auditTrail":[],"cacheStore":{},"activeSessions":[]}
// _privateKey dan credentialHash berhasil disensor

// Deserialisasi dari wire
const restored = StateManager.deserializeFromWire(wireData);
console.log("Restored Date Type:", restored.updatedAt instanceof Date); // true
```

---

### 4. Visualisasi & Mental Model

Perbandingan jalur eksekusi memori antara JSON Serialization vs `structuredClone`:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        JALUR SERIALISASI: JSON vs structuredClone                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  1. JSON.stringify() + JSON.parse() Hack (Teks Intermediari)                           │
│  [Object in Heap] ──(DFS Traversal)──> [JSON String Buffer] ──> [New Object in Heap]   │
│         │                                      │                                       │
│         ├── Map / Set / RegExp ──────────────> [ Hilang / Berubah Format ]             │
│         ├── undefined / Function ─────────────> [ Dihapus / Menjadi null ]             │
│         └── Circular Ref (A -> B -> A) ───────> ❌ TypeError: Converting circular...   │
│                                                                                        │
│  2. structuredClone() (HTML Structured Clone Algorithm di level C++)                   │
│  [Object in Heap] ──────────────(Binary / C++ Graph Copy)─────────> [Identical Heap]  │
│         │                                                                  │           │
│         ├── Map, Set, Date, BigInt, TypedArray ──────────────────────────> ✅ Terjaga  │
│         └── Circular Ref Cycle Table (Pencatatan Pointer Siklus) ────────> ✅ Utuh     │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `structuredClone()` untuk deep copy memori**: Jangan pernah lagi menggunakan trik `JSON.parse(JSON.stringify(obj))` yang lambat dan merusak tipe data (`Date` menjadi `string`, `Map/Set` hilang).
- ✅ **Gunakan replacer function untuk sanitasi data (PII)**: Hindari kebocoran data sensitif (password hash, secret key) sebelum payload keluar dari boundary aplikasi dengan menyensor nilai menjadi `undefined`.
- ✅ **Gunakan reviver untuk validasi skema dasar**: Rehidrasi nilai waktu ISO langsung menjadi instance `Date` pada *boundary parsing* agar domain logic aplikasi selalu menerima objek `Date` murni.
- ❌ **Hindari mem-patch `BigInt.prototype.toJSON` secara global**: Monkey-patching prototipe bawaan dapat memicu efek samping yang tidak terduga pada library eksternal. Gunakan replacer function eksplisit saat memanggil `JSON.stringify`.

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, buatlah sebuah fungsi `serializeCustomMap(data)` menggunakan `JSON.stringify` dengan replacer yang mampu mengubah instance `Map` bersarang (*nested Map*) menjadi struktur array pasangan `[key, value]`, serta tangani nilai `BigInt` agar tidak melempar error.
2. Buatlah fungsi pasangan `deserializeCustomMap(jsonStr)` menggunakan `JSON.parse` dengan reviver function untuk merehidrasi array pasangan tersebut kembali menjadi instance `Map` murni secara rekursif.

---

## 🔗 Referensi
- [MDN Web Docs: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN Web Docs: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN Web Docs: structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/structuredClone)
- [ECMAScript® 2024 Language Specification: The JSON Object](https://tc39.es/ecma262/#sec-json-object)