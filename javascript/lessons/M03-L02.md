# Constructor dan Methods

**Slug**: `constructor-dan-methods` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami alokasi memori internal JavaScript engine (V8) saat inisialisasi state melalui `constructor` dan prototype method resolution.
- Menganalisis perbedaan mekanis serta komputasi antara *prototype methods* biasa dan *instance field arrow functions*.
- Mengimplementasikan pola *Fluent Interface (Method Chaining)* menggunakan referensi kontekstual `return this`.
- Merancang *Static Factory Methods* untuk abstraksi pembuatan instance yang kompleks dan modular.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik sintaks `class` modern (ES6+ hingga ES2024), JavaScript tetap beroperasi menggunakan *Prototypal Inheritance*. Ketika engine V8 mengeksekusi operator `new ClassName()`, engine membuat objek baru di memori Heap, mengatur internal prototype linkage (`__proto__`) objek tersebut ke `ClassName.prototype`, mengikat konteks eksekusi `this` ke objek baru tersebut, dan memanggil blok fungsi `constructor`.

`constructor` adalah satu-satunya metode internal yang dijalankan otomatis tepat pada fase instansiasi untuk menginisialisasi properti instance. Setiap properti yang dideklarasikan di dalam `constructor` atau sebagai *public/private instance field* (`#field`) akan dialokasikan langsung pada objek instance itu sendiri (*own property*). 

Perbedaan mendasar terjadi saat mendefinisikan perilaku (*methods*). Ketika kita menulis *normal method declaration* (`methodName() {}`), JavaScript menempatkan fungsi tersebut satu kali saja pada objek prototipe (`ClassName.prototype`). Semua instance membagi satu referensi fungsi yang sama di memori. Sebaliknya, ketika kita mendefinisikan method menggunakan sintaks *arrow function field* (`methodName = () => {}`), V8 menciptakan alokasi fungsi baru dan unik di dalam heap untuk **setiap instance baru** yang dibuat, mengikat `this` secara leksikal ke instance spesifik tersebut.

```
Pola Alokasi Memori (V8 Heap):
Instance 1 ────┐
               ▼
Instance 2 ───► [ Prototype: Class.prototype (Normal Method) ]
               ▲
Instance 3 ────┘

VS

Instance 1 ───► [ Arrow Method #1 ] (Alokasi Unik)
Instance 2 ───► [ Arrow Method #2 ] (Alokasi Unik)
Instance 3 ───► [ Arrow Method #3 ] (Alokasi Unik)
```

Selain instansiasi langsung melalui constructor, *Static Factory Methods* menyediakan lapisan abstraksi semantik di level kelas (`ClassName.method()`). Pendekatan ini memungkinkan validasi data *pre-instantiation*, parsing format variatif, atau caching instance tanpa mengekspos kompleksitas kalkulasi langsung di dalam constructor utama.

---

### 2. Sintaks & Penggunaan Modern

Berikut adalah contoh komparasi method prototype, instance field arrow functions, dan implementasi method chaining (fluent interface) pada ES2024:

```javascript
class QueryBuilder {
  #table;
  #conditions = [];
  #limitValue = null;

  constructor(table) {
    if (typeof table !== 'string' || table.trim() === '') {
      throw new TypeError('Nama tabel harus berupa string valid.');
    }
    // State inisialisasi pada objek instance
    this.#table = table;
  }

  // 1. Prototype Method (Efisien Memori, dibagi ke seluruh instance)
  where(field, operator, value) {
    this.#conditions.push({ field, operator, value });
    return this; // Method Chaining: Mengembalikan instance saat ini
  }

  limit(count) {
    this.#limitValue = Number(count);
    return this; // Fluent interface pattern
  }

  // 2. Normal Method untuk eksekusi akhir
  build() {
    let sql = `SELECT * FROM ${this.#table}`;
    if (this.#conditions.length > 0) {
      const clauses = this.#conditions
        .map(c => `${c.field} ${c.operator} '${c.value}'`)
        .join(' AND ');
      sql += ` WHERE ${clauses}`;
    }
    if (this.#limitValue !== null) {
      sql += ` LIMIT ${this.#limitValue}`;
    }
    return sql;
  }

  // 3. Arrow Function Field: Auto-bound `this` (Berguna untuk callbacks/event listener)
  exportMetadata = () => {
    return {
      targetTable: this.#table,
      conditionCount: this.#conditions.length,
      hasLimit: this.#limitValue !== null
    };
  };
}

// Penggunaan Chaining
const query = new QueryBuilder('users')
  .where('status', '=', 'active')
  .where('role', '=', 'admin')
  .limit(10)
  .build();

console.log(query);
// Output: SELECT * FROM users WHERE status = 'active' AND role = 'admin' LIMIT 10

// Demonstrasi deteksi Prototype vs Own Property
const qInstance = new QueryBuilder('logs');
console.log(Object.hasOwn(qInstance, 'where')); // false (ada di Prototype)
console.log(Object.hasOwn(qInstance, 'exportMetadata')); // true (ada di Instance Heap)
```

---

### 3. Studi Kasus Nyata: Domain Financial Transaction & Factory Pattern

Dalam sistem pemrosesan finansial, inisialisasi objek dari payload API atau database eksternal sering kali membutuhkan parsing tipe data yang ketat. Menggunakan *Static Factory Method* memisahkan validasi data kotor dari tanggung jawab inti `constructor`.

```javascript
class Money {
  #cents;
  #currency;

  // Constructor ketat: hanya menerima nilai terstandarisasi (integer terkecil/cents)
  constructor(cents, currency = 'IDR') {
    if (!Number.isSafeInteger(cents)) {
      throw new TypeError('Representasi nilai moneter harus berupa safe integer (cents/satuan terkecil).');
    }
    this.#cents = cents;
    this.#currency = currency.toUpperCase();
    Object.freeze(this); // Immutability
  }

  // Static Factory Method 1: Membuat dari representasi desimal (e.g., Rupiah/Dollar utuh)
  static fromDecimal(amount, currency = 'IDR') {
    const parsedCents = Math.round(Number(amount) * 100);
    return new Money(parsedCents, currency);
  }

  // Static Factory Method 2: Membuat dari payload JSON string/format API
  static fromJSON(jsonPayload) {
    const { amountInCents, currencyCode } = JSON.parse(jsonPayload);
    return new Money(amountInCents, currencyCode);
  }

  // Business Logic Methods
  add(otherMoney) {
    if (this.#currency !== otherMoney.currency) {
      throw new Error(`Mismatched currencies: ${this.#currency} vs ${otherMoney.currency}`);
    }
    return new Money(this.#cents + otherMoney.cents, this.#currency);
  }

  format() {
    const formatted = (this.#cents / 100).toLocaleString('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `${this.#currency} ${formatted}`;
  }

  get cents() {
    return this.#cents;
  }

  get currency() {
    return this.#currency;
  }
}

// Inisialisasi melalui Static Factory Methods yang berbeda
const walletA = Money.fromDecimal(150000.50, 'IDR');
const walletB = Money.fromJSON('{"amountInCents": 5000000, "currencyCode": "IDR"}');

const total = walletA.add(walletB);

console.log(walletA.format()); // IDR 150.000,50
console.log(walletB.format()); // IDR 50.000,00
console.log(total.format());   // IDR 200.000,50
```

---

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│               ARSITEKTUR MEMORI CLASS & STATIC METHOD                  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   [ Class Constructor / Function Object ] ───► [ Static Methods ]      │
│            │                                   (e.g., fromDecimal())   │
│   .prototype Property                                                  │
│            │                                                           │
│            ▼                                                           │
│   [ Prototype Memory Block ] ─────────────────► [ Prototype Methods ]  │
│            ▲                                   (e.g., add(), format()) │
│            │ [[Prototype]] Link (__proto__)                            │
│   ┌────────┴──────────────────────────┐                                │
│   │                                   │                                │
│ [ Instance Object 1 ]            [ Instance Object 2 ]                 │
│ ├─ #cents: 15000050              ├─ #cents: 5000000                    │
│ ├─ #currency: 'IDR'              ├─ #currency: 'IDR'                   │
│ └─ [Arrow Function Field]        └─ [Arrow Function Field]             │
│    (Unik di Heap per Instance)      (Unik di Heap per Instance)        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Prototype Methods sebagai Default**: Tulis method menggunakan sintaks reguler (`methodName() {}`) guna menghemat konsumsi memori dan mengoptimalkan *hidden classes* pada V8.
- ✅ **Batasi Arrow Function Properties**: Gunakan arrow function pada class fields hanya untuk method callback yang akan dilepas dari konteksnya (misalnya, event listener DOM atau `setTimeout`) agar binding `this` tidak hilang.
- ✅ **Terapkan Fluent Interfaces (`return this`)**: Desain method mutasi konfigurasi agar mengembalikan `this`, membuat kode pemanggilan lebih deklaratif dan ekspresif.
- ✅ **Gunakan Static Factory Methods untuk Validasi Kompleks**: Buat `constructor` tetap ramping dan deterministik, lalu alihkan logika pemrosesan format data yang dinamis ke static method.
- ❌ **Hindari Asynchronous Constructor**: `constructor` tidak bisa bernilai `async`. Jangan memaksakan async calls di dalamnya; gunakan `static async create()` pattern untuk resource yang butuh I/O sebelum instansiasi.

---

## ✍️ Latihan Mandiri
1. **Implementasi HTTP Request Builder**:
   Gunakan **Code Editor di bawah** untuk membuat class `RequestBuilder` yang mendukung chaining method: `.setBaseUrl(url)`, `.setMethod(method)`, `.addHeader(key, val)`, dan `.setBody(payload)`. Akhiri dengan method `.build()` yang mengembalikan objek konfigurasi *fetch* siap pakai.
2. **Static Parser Refactoring**:
   Pada **Code Editor di bawah**, buat class `GeoPoint` dengan private field `#lat` dan `#lng`. Buat dua static factory method: `GeoPoint.fromDegrees(lat, lng)` dan `GeoPoint.fromString("lat,lng")` yang memvalidasi rentang latitude (-90 hingga 90) dan longitude (-180 hingga 180).

---

## 🔗 Referensi
- [MDN Web Docs: Classes - Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [MDN Web Docs: Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [ECMAScript Language Specification: Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)