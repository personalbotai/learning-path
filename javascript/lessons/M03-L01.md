# Class dan Object (private #fields)

**Slug**: `class-dan-object` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Membedah mekanika internal ES6 Class sebagai *syntactic sugar* di atas *prototypal inheritance* dan memahami alokasi memori instance pada V8 Engine.
- Menguasai implementasi enkapsulasi *hard-private* menggunakan `#fields`, private methods, dan private accessors yang ditegakkan pada level runtime/engine.
- Mengimplementasikan *static methods* dan *Static Initialization Blocks* (`static {}`) untuk konfigurasi state global class yang terisolasi dan aman.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Secara historis, JavaScript adalah bahasa berbasis prototipe murni (*prototypal inheritance*). Saat sintaks `class` diperkenalkan pada ES2015 (ES6), mesin JavaScript seperti V8 (Chrome/Node.js) atau SpiderMonkey (Firefox) tidak mengganti fondasi tersebut dengan model *class-based* klasik seperti Java atau C++. Deklarasi `class` hanyalah sebuah konstruksi sintaksis yang membungkus fungsi konstruktor (*constructor function*) dan memetakan method ke dalam rantai `prototype` objek secara otomatis.

Ketika sebuah instance dibuat menggunakan operator `new`, V8 mengalokasikan memori baru di *heap space*. Objek instance tersebut menerima referensi internal `[[Prototype]]` (dapat diakses via `__proto__`) yang menunjuk langsung ke `ClassName.prototype`. Method publik instance tidak diduplikasi pada setiap instansiasi objek; method tersebut tetap berada di dalam objek prototipe tunggal. Sebaliknya, properti publik yang dideklarasikan langsung pada body class atau di dalam `constructor` akan dilekatkan langsung pada *own properties* instance objek bersangkutan.

Revolusi sesungguhnya terjadi pada standardisasi Private Class Fields (`#fieldName`). Berbeda dengan konvensi lawas seperti prefix garis bawah (`_secret`), penutupan leksikal (*closures*), atau `WeakMap`, field dengan awalan `#` diberlakukan secara tegas oleh V8 Engine melalui mekanisme internal *Private Names*. Private field bukan merupakan properti reguler objek dan tidak terdaftar di dalam struktur *Shape/HiddenClass* standar. Properti ini tidak dapat diakses melalui evaluasi dinamis (`instance['#field']`), tidak dapat diiterasi melalui `Object.keys()`, dan tidak dapat diekstrak menggunakan `Object.getOwnPropertySymbols()`. Jika ada kode di luar deklarasi class yang mencoba mengakses `#field`, engine akan melempar `SyntaxError` saat tahapan *parsing* atau `TypeError` saat runtime execution.

### 2. Sintaks & Penggunaan Modern
JavaScript modern (ES2022–ES2024) memungkinkan deklarasi public field, private field, private method, getter/setter privat, serta *Static Initialization Blocks* untuk logika bootstrapping statis yang kompleks.

```javascript
class DatabaseConnection {
  // 1. Public Field (dilekatkan langsung pada tiap instance)
  connectionTimeout = 5000;

  // 2. Private Field (hard-private, enforced by engine)
  #connectionString;
  #retryCount = 0;

  // 3. Static Private Field & Static Public Field
  static #maxPoolSize = 10;
  static activeConnections = 0;

  // 4. Static Initialization Block (Evaluasi saat class di-load)
  static {
    try {
      // Setup logic statis / validasi environment
      const envPool = 20; // simulasi process.env.POOL_SIZE
      if (envPool > DatabaseConnection.#maxPoolSize) {
        DatabaseConnection.#maxPoolSize = envPool;
      }
    } catch {
      DatabaseConnection.#maxPoolSize = 5;
    }
  }

  constructor(host, port, database) {
    this.host = host; // Public own-property
    this.port = port;
    this.#connectionString = `protocol://${host}:${port}/${database}`;
    DatabaseConnection.activeConnections++;
  }

  // 5. Private Method
  #sanitizeString(str) {
    return str.trim().toLowerCase();
  }

  // 6. Public Method (Disimpan di DatabaseConnection.prototype)
  connect() {
    this.#retryCount++;
    return `Connected to ${this.#maskCredentials()} (Attempt: ${this.#retryCount})`;
  }

  // 7. Private Getter
  get #isOverCapacity() {
    return DatabaseConnection.activeConnections > DatabaseConnection.#maxPoolSize;
  }

  #maskCredentials() {
    return this.#connectionString.replace(/:(\d+)\//, ':******/');
  }

  // Helper method untuk validasi private field via 'in' operator
  static isInstanceWithAuth(obj) {
    return #connectionString in obj;
  }
}

// Runtime Execution Demonstration
const db = new DatabaseConnection('localhost', 5432, 'production_db');

console.log('Public field host:', db.host);
console.log('Method prototype execution:', db.connect());

// Inspeksi Properti Publik & Prototypal Chain
console.log('Keys publik:', Object.keys(db)); // ['connectionTimeout', 'host', 'port']
console.log('db.prototype reference check:', Object.getPrototypeOf(db) === DatabaseConnection.prototype); // true

// Membuktikan Enkapsulasi Engine
console.log('Akses undefined biasa:', db.connectionString); // undefined
try {
  // console.log(db.#connectionString); // SyntaxError jika uncommented
  eval('db.#connectionString');
} catch (err) {
  console.log('Private field interception caught:', err.name); // SyntaxError
}

console.log('Static method brand checking:', DatabaseConnection.isInstanceWithAuth(db)); // true
console.log('Brand check dummy object:', DatabaseConnection.isInstanceWithAuth({})); // false
```

### 3. Studi Kasus Nyata
Implementasi State Machine untuk Token Manager pada integrasi API modern. State token autentikasi harus bersifat immutable dari luar scope, anti-tampering, dan hanya dapat diperbarui melalui mutasi terenkapsulasi.

```javascript
class SecureTokenVault {
  #rawToken;
  #issuedAt;
  #ttlMilliseconds;
  #rotationLog = [];

  constructor(initialToken, ttlSeconds = 3600) {
    this.#rawToken = initialToken;
    this.#issuedAt = Date.now();
    this.#ttlMilliseconds = ttlSeconds * 1000;
  }

  #isExpired() {
    return Date.now() - this.#issuedAt > this.#ttlMilliseconds;
  }

  #auditRotation(reason) {
    this.#rotationLog.push({
      timestamp: new Date().toISOString(),
      reason: reason
    });
  }

  // Public Interface aman
  getAuthorizationHeader() {
    if (this.#isExpired()) {
      throw new Error('AUTH_EXPIRED: Token sudah kedaluwarsa, lakukan refresh.');
    }
    return `Bearer ${this.#rawToken}`;
  }

  refreshToken(newToken, reason = 'routine_rotation') {
    if (typeof newToken !== 'string' || newToken.length < 16) {
      throw new TypeError('INVALID_TOKEN: Format token tidak aman.');
    }
    this.#rawToken = newToken;
    this.#issuedAt = Date.now();
    this.#auditRotation(reason);
    return true;
  }

  getAuditTrail() {
    // Return shallow-copy / structuredClone agar array internal tidak termutasi via referensi
    return structuredClone(this.#rotationLog);
  }
}

// Eksekusi Kasus Nyata
const vault = new SecureTokenVault('initial_alpha_secret_token_12345', 2);

console.log('Initial Header:', vault.getAuthorizationHeader());

// Mutasi aman melalui interface
vault.refreshToken('new_updated_production_token_99999', 'manual_refresh');
console.log('Updated Header:', vault.getAuthorizationHeader());

// Verifikasi isolasi data
const logs = vault.getAuditTrail();
logs.push({ malicious: 'injection' }); // Coba lakukan mutasi eksternal

console.log('Eksternal array termutasi:', logs.length === 2); // true
console.log('Internal audit vault tetap murni:', vault.getAuditTrail().length === 1); // true
console.log('Cek kepemilikan token:', Object.prototype.hasOwnProperty.call(vault, '#rawToken')); // false
```

### 4. Visualisasi & Mental Model
```text
┌────────────────────────────────────────────────────────────────────────────┐
│                    V8 MEMORY HEAP: INSTANCE VS PROTOTYPE                   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   [Instance Object (db)]                   [DatabaseConnection.prototype]  │
│   ┌───────────────────────────────┐        ┌────────────────────────────┐  │
│   │ connectionTimeout: 5000       │        │ connect()                  │  │
│   │ host: "localhost"             │        │ constructor()              │  │
│   │ port: 5432                    │   ┌───>│ [[Prototype]]: Object      │  │
│   │ [[Prototype]] ────────────────┼───┘    └────────────────────────────┘  │
│   ├───────────────────────────────┤                                        │
│   │ [[PrivateFieldValues]] (Slots)│                                        │
│   │  ├─ #connectionString: "..."  │                                        │
│   │  ├─ #retryCount: 0            │   * Private Identifiers di-resolve     │
│   │  └─ #sanitizeString: [Code]   │     melalui V8 lexical scope context   │
│   └───────────────────────────────┘     bukan hash-table lookup biasa.     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `#field` dibanding `WeakMap`:** `#fields` memberikan performa optimasi hidden-class yang lebih baik pada runtime V8 modern dan sintaksis yang jauh lebih bersih.
- ✅ **Gunakan Brand Checking (`#field in object`):** Manfaatkan operator `in` pada private fields untuk memvalidasi apakah sebuah objek benar-benar merupakan instance sah tanpa terkena resiko prototype tampering.
- ✅ **Gunakan Static Block untuk Inisialisasi Statis:** Hindari mengeksekusi logika inisialisasi di luar class; gabungkan logika konfigurasi dan registrasi statis di dalam blok `static {}`.
- ❌ **Jangan menganggap Private Field identik dengan TypeScript `private`:** Modifier `private` TypeScript hanya berlaku saat kompilasi (hilang saat jadi JS biasa), sedangkan `#fields` JavaScript diisolasi secara native pada level engine runtime.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah class bernama `BankAccount` yang memiliki private field `#balance` dan `#transactionHistory`. Buat method publik `deposit(amount)` dan `withdraw(amount)` yang memvalidasi bahwa nilai mutasi tidak boleh negatif atau melebihi saldo yang ada.
2. Tambahkan private method `#recordTransaction(type, amount)` yang secara otomatis mencatat setiap mutasi ke `#transactionHistory`. Tambahkan method publik `getBalance()` dan `getStatement()` yang mengembalikan data tanpa mengekspos array referensi asli.

---

## 🔗 Referensi
- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Web Docs: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [ECMAScript® 2024 Language Specification - Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)