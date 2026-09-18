# Inheritance dengan extends & super

**Slug**: `inheritance-dengan-extends` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami mekanisme internal V8 engine saat memproses kata kunci `extends`, termasuk pembentukan rantai prototipe ganda (instance dan statis).
- Menguasai siklus inisialisasi binding `this` melalui pemanggilan `super()` pada derived class constructor.
- Mengimplementasikan `super.method()` untuk method delegation dengan pemahaman internal slot `[[HomeObject]]`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik sintaks class modern JavaScript (ES2024), pewarisan berbasis prototipe tetap menjadi fondasi eksekusi. Ketika kata kunci `extends` dideklarasikan, engine JavaScript (seperti V8) tidak sekadar mengaitkan prototipe instance, melainkan membangun **dua rantai prototipe terpisah secara simultan**:

1. **Rantai Instance Prototype**: Menghubungkan `Child.prototype` ke `Parent.prototype` melalui internal pointer `[[Prototype]]` (ekivalen dengan `Object.setPrototypeOf(Child.prototype, Parent.prototype)`). Ini memungkinkan method instance diwariskan.
2. **Rantai Static Prototype**: Menghubungkan constructor function `Child` langsung ke `Parent` (`Object.setPrototypeOf(Child, Parent)`). Hal ini memungkinkan static method dan static properties diwariskan secara langsung antar-class tanpa instansiasi.

Perbedaan paling fundamental antara *Base Class* dan *Derived Class* (class turunan) terletak pada internal slot `[[ConstructorKind]]`. Pada Base Class, nilainya adalah `"base"`, di mana alokasi memori heap untuk objek `this` dibuat secara otomatis saat eksekusi constructor dimulai. Sebaliknya, Derived Class memiliki `[[ConstructorKind]]: "derived"`.

Pada Derived Class, engine V8 **tidak mengalokasikan memori untuk `this` di awal eksekusi constructor**. Keyword `this` berada dalam status *Uninitialized Temporal Dead Zone (TDZ)*. Objek `this` baru tercipta ketika constructor parent selesai dieksekusi melalui pemanggilan `super()`. Constructor parent mengalokasikan objek, mengikat `new.target` ke class pemanggil awal, lalu mengembalikan referensi memori tersebut ke derived class. Mengakses `this` sebelum baris `super()` dieksekusi akan memicu `ReferenceError`.

Pemanggilan method parent melalui `super.method()` bekerja via slot internal `[[HomeObject]]`. Setiap method yang didefinisikan dalam class memiliki referensi statis ke class tempat method tersebut ditulis. Saat `super.method()` dipanggil, engine mengevaluasi `Object.getPrototypeOf([[HomeObject]]).method.call(this)`, memastikan method parent dieksekusi dalam konteks instance saat ini tanpa terdistorsi oleh re-binding dinamis.

### 2. Sintaks & Penggunaan Modern
Dalam ES2024, pewarisan mendukung private field (`#`), field declaration, dan static inheritance secara elegan:

```javascript
class BaseEntity {
  #id;
  static #entityCount = 0;

  constructor(id) {
    if (!id) throw new Error("Entity ID wajib diisi");
    this.#id = id;
    this.createdAt = new Date();
    BaseEntity.#entityCount++;
  }

  get id() {
    return this.#id;
  }

  static getCount() {
    return this.#entityCount;
  }

  toJSON() {
    return {
      id: this.#id,
      createdAt: this.createdAt.toISOString()
    };
  }
}

class UserAccount extends BaseEntity {
  #email;

  constructor(id, email, role = "user") {
    // ATURAN: super() HARUS dipanggil sebelum mengakses 'this'
    super(id); 
    this.#email = email;
    this.role = role;
  }

  get email() {
    return this.#email;
  }

  // Override method toJSON dengan delegation via super
  toJSON() {
    const baseData = super.toJSON();
    return {
      ...baseData,
      email: this.#email,
      role: this.role
    };
  }
}

// Eksekusi Runnable
const admin = new UserAccount("usr_001", "admin@domain.id", "superadmin");

console.log(admin.id);           // Output: usr_001 (dari BaseEntity)
console.log(admin.toJSON());      // Output: { id: 'usr_001', createdAt: '...', email: 'admin@domain.id', role: 'superadmin' }
console.log(UserAccount.getCount()); // Output: 1 (Static method diwariskan)
console.log(admin instanceof BaseEntity); // Output: true
```

### 3. Studi Kasus Nyata
Pola hierarki kelas terapan standar industri: Arsitektur *Custom Domain Error Handling* untuk infrastruktur backend/API.

```javascript
class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();

    // Mempertahankan stack trace V8 yang bersih tanpa frame constructor ini
    Error.captureStackTrace?.(this, this.constructor);
  }

  serialize() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
        timestamp: this.timestamp
      }
    };
  }
}

class ValidationError extends AppError {
  constructor(message, validationDetails = []) {
    super(message, 422);
    this.details = validationDetails;
  }

  // Overriding dengan integrasi data spesifik
  serialize() {
    const baseOutput = super.serialize();
    return {
      error: {
        ...baseOutput.error,
        details: this.details
      }
    };
  }
}

// Simulasi handler error
try {
  throw new ValidationError("Input payload tidak valid", [
    { field: "email", reason: "Format domain email salah" },
    { field: "age", reason: "Usia minimum adalah 18 tahun" }
  ]);
} catch (err) {
  if (err instanceof AppError) {
    console.log(`[Status ${err.statusCode}] Penanganan Error Terpusat:`);
    console.log(JSON.stringify(err.serialize(), null, 2));
  }
}
```

### 4. Visualisasi & Mental Model

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                   DUAL PROTOTYPE CHAIN & "THIS" LIFECYCLE                   │
└─────────────────────────────────────────────────────────────────────────────┘

  [Static Chain]                              [Instance Prototype Chain]
 ┌──────────────┐                            ┌──────────────────────────┐
 │  BaseEntity  │                            │   BaseEntity.prototype   │
 └──────▲───────┘                            └────────────▲─────────────┘
        │ [[Prototype]]                                   │ [[Prototype]]
 ┌──────┴───────┐                            ┌────────────┴─────────────┐
 │ UserAccount  │                            │  UserAccount.prototype   │
 └──────────────┘                            └────────────▲─────────────┘
                                                          │ [[Prototype]]
                                             ┌────────────┴─────────────┐
                                             │      admin (Instance)    │
                                             └──────────────────────────┘

  [Alur Alokasi Memori `this` saat: new UserAccount("usr_001", ...)]
  
  1. UserAccount Constructor dipanggil
     │  (TDZ: Variabel `this` BELUM dialokasikan di Call Stack)
     ▼
  2. super("usr_001") dieksekusi ──> BaseEntity Constructor dijalankan
     │  (BaseEntity membuat instance objek baru di Heap Memory via new.target)
     ▼
  3. BaseEntity mengembalikan referensi objek ke UserAccount
     │  (`this` kini terikat secara resmi & valid di eksekusi UserAccount)
     ▼
  4. Inisialisasi properti UserAccount (this.#email, this.role) selesai
```

---

## 💡 Best Practices & Tips
- ✅ **Panggil `super()` di Baris Pertama**: Hindari meletakkan logika komputasi sebelum `super()` dalam derived constructor kecuali benar-benar diperlukan untuk menyiapkan argumen bagi parent.
- ✅ **Gunakan `new.target`**: Manfaatkan `new.target` pada constructor parent jika ingin membuat *abstract base class* yang melarang instansiasi langsung tanpa `extends`.
- ✅ **Kombinasikan dengan `super.method()`**: Saat melakukan overriding, evaluasi apakah fungsionalitas parent perlu diperkaya (bukan ditimpa total) dengan mendelegasikan pemanggilan awal ke `super.method()`.
- ❌ **Anti-Pattern: Deep Hierarchy (> 3 Level)**: Jangan membuat inheritance bertingkat terlalu dalam (`A extends B extends C extends D...`). Ini memicu *Fragile Base Class Problem*. Gunakan komposisi (*object composition*) jika relasi antar-entitas bukan murni *"is-a"*.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buat class `Repository` yang memiliki method `find(id)` dan field `#connectionString`. Buat subclass `CachedRepository` yang meng-override method `find(id)` untuk memeriksa objek cache lokal sebelum memanggil `super.find(id)`.
2. Di **Code Editor di bawah**, buktikan aturan TDZ pada derived class dengan mencoba mengakses `console.log(this)` satu baris sebelum pemanggilan `super()`. Analisis pesan error yang dihasilkan oleh JavaScript engine.

---

## 🔗 Referensi
- [MDN Web Docs: Classes extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN Web Docs: super keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [ECMAScript Language Specification: Runtime Semantics ClassDefinitionEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-classdefinitionevaluation)