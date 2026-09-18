# this Keyword: Binding dan Context

**Slug**: `this-keyword-binding` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Membedakan lokasi deklarasi (*definition-site*) dan lokasi pemanggilan (*call-site*) dalam menentukan nilai `this`.
- Menguasai 4 aturan preseden `this` binding: *Default*, *Implicit*, *Explicit*, dan *New Binding*.
- Mengimplementasikan teknik *hard binding* dan *context wrapper* untuk mencegah hilangnya konteks (*context loss*) pada pemrosesan asinkron dan *callback*.
- Memahami mekanisme internal V8 Engine terkait *Execution Context*, `EnvironmentRecord`, dan evaluasi *Reference Type*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di dalam JavaScript (V8 Engine), `this` bukanlah referensi leksikal ke fungsi itu sendiri maupun *lexical scope*-nya, melainkan sebuah *binding* dinamis yang dievaluasi saat fungsi dieksekusi (*runtime call-site evaluation*). Ketika sebuah fungsi dipanggil, JavaScript Engine membuat *Execution Context* baru yang disimpan ke dalam *Call Stack*. *Execution Context* ini memiliki *Environment Record* yang memuat informasi parameter, variabel lokal, dan nilai internal `[[ThisValue]]`.

Secara internal, engine mengevaluasi ekspresi pemanggilan fungsi menggunakan tipe data spesifikasi internal yang disebut **Reference Record** (terdiri dari komponen `base value`, `referenced name`, dan flag `strict`). Nilai `base value` inilah yang menentukan apa yang akan diisi ke dalam `[[ThisValue]]`. Jika fungsi dipanggil sebagai properti objek (`obj.method()`), *base value*-nya adalah `obj`. Jika fungsi dipanggil secara terisolasi (`fn()`), *base value*-nya adalah `EnvironmentRecord`, yang memicu *Default Binding*.

Penentuan nilai `this` mengikuti hierarki 4 aturan pengikatan (*binding rules*):
1. **Default Binding**: Pemanggilan fungsi langsung tanpa konteks objek. Pada *non-strict mode*, nilai `this` merujuk ke *Global Object* (`globalThis` / `window`). Pada *strict mode* (`"use strict"`), engine tidak memetakan `this` ke global object, melainkan menetapkannya menjadi `undefined` guna mencegah polusi scope global yang tidak disengaja.
2. **Implicit Binding**: Terjadi ketika fungsi dipanggil melalui referensi objek kepemilikan (`context.fn()`). Objek di depan tanda titik menjadi `this`. Namun, *implicit binding* rentan mengalami *implicit loss* ketika fungsi dioperasikan sebagai *callback* atau dialokasikan ke variabel baru.
3. **Explicit & Hard Binding**: Mengesampingkan konteks objek secara paksa menggunakan `Function.prototype.call()`, `Function.prototype.apply()`, atau `Function.prototype.bind()`. `bind()` menghasilkan fungsi baru (*exotic function object*) yang secara permanen mengunci konteks `[[BoundThis]]` di memori heap.
4. **New Binding**: Terjadi saat fungsi dipanggil dengan operator `new`. Engine membuat objek kosong baru di memori heap, menautkan prototipe objek tersebut (`__proto__`) ke `Constructor.prototype`, mengikat `this` ke objek baru tersebut, dan mengembalikannya secara implisit jika konstruktor tidak mengembalikan objek lain secara eksplisit.

---

### 2. Sintaks & Penggunaan Modern

Hierarki kekuatan (preseden) evaluasi adalah: **`new` Binding > Explicit Binding (`bind`) > Implicit Binding > Default Binding**. 

Perlu dicatat bahwa *Arrow Functions* (ES6+) tidak memiliki *binding* `this` sendiri; engine me-resolve `this` secara leksikal dari *outer enclosing lexical scope* persis seperti pencarian variabel biasa melalui *Scope Chain*.

```javascript
"use strict";

// 1. Explicit & Hard Binding Utility
class ExecutionContextManager {
  static createSafeRunner(fn, context) {
    // Menghasilkan wrapper yang mengunci konteks
    return (...args) => Reflect.apply(fn, context, args);
  }
}

// Objek Domain Layanan
const paymentGateway = {
  provider: "Stripe-Core",
  process(amount, currency) {
    return `[${this?.provider ?? "UNKNOWN"}] Transaksi diproses: ${amount} ${currency}`;
  }
};

const foreignService = {
  provider: "Adyen-Direct"
};

// 2. Evaluasi 4 Aturan Binding
const rawProcess = paymentGateway.process;

// A. Default Binding (Strict Mode -> this = undefined)
try {
  rawProcess(100, "USD");
} catch (error) {
  console.log("Default Binding Error:", error.message); 
  // TypeError: Cannot read properties of undefined
}

// B. Implicit Binding
console.log(paymentGateway.process(250, "IDR"));
// Output: [Stripe-Core] Transaksi diproses: 250 IDR

// C. Explicit Binding via call/apply & Hard Binding via bind
console.log(rawProcess.call(foreignService, 500, "EUR"));
// Output: [Adyen-Direct] Transaksi diproses: 500 EUR

const hardBoundProcess = rawProcess.bind(paymentGateway);
console.log(hardBoundProcess(750, "GBP"));
// Output: [Stripe-Core] Transaksi diproses: 750 GBP

// D. Preseden: New Binding mengesampingkan Bound Context
function TransactionConstructor(currency) {
  this.currency = currency;
  this.summary = function() {
    return `Currency instance: ${this.currency}`;
  };
}

const BoundConstructor = TransactionConstructor.bind({ currency: "MOCK" });
const newInstance = new BoundConstructor("JPY"); // 'new' mengabaikan mock context dari .bind()

console.log(newInstance.summary());
// Output: Currency instance: JPY
```

---

### 3. Studi Kasus Nyata: Context-Bound Query Pipeline

Dalam perancangan framework backend atau ORM modern, sering kali diperlukan eksekusi *unit-of-work* berbasis transaksi database di mana fungsi repositori harus terikat secara aman pada *Database Transaction Context* tertentu tanpa mencemari instance singleton repositori.

```javascript
"use strict";

// Simulasi Database Transaction Context
class DatabaseTransaction {
  constructor(txId) {
    this.txId = txId;
    this.status = "ACTIVE";
  }

  commit() {
    this.status = "COMMITTED";
    return `Transaction ${this.txId} berhasil di-commit.`;
  }
}

// Repository dengan dependensi implisit pada 'this.txId'
const UserRepository = {
  tableName: "users",
  
  async saveUser(user) {
    if (!this || !this.txId) {
      throw new Error("Operasi database ditolak: Memerlukan konteks transaksi aktif!");
    }
    return `Menyimpan user ${user.name} ke tabel ${this.tableName} [TxID: ${this.txId}]`;
  }
};

// Reusable Unit of Work Runner (Context Wrapper)
class UnitOfWork {
  static async runInTransaction(tx, operation) {
    // Meminjam method repository dan mengikatnya ke konteks transaksi secara eksplisit
    const boundOperation = operation.bind(tx);
    
    try {
      console.log(`Memulai transaksi [${tx.txId}]...`);
      const result = await boundOperation();
      console.log(result);
      console.log(tx.commit());
    } catch (err) {
      console.error(`Transaksi [${tx.txId}] dibatalkan:`, err.message);
    }
  }
}

// Eksekusi Kasus
const activeTx = new DatabaseTransaction("TX-99082");

// Skenario 1: Callback tanpa explicit binding (Context Loss)
setTimeout(() => {
  UnitOfWork.runInTransaction(activeTx, () => {
    // UserRepository.saveUser dipanggil langsung tanpa mengikat konteks 'activeTx'
    return UserRepository.saveUser({ name: "Rian" });
  });
}, 100);

// Skenario 2: Menggunakan call() untuk meminjam method dengan konteks transaksi
setTimeout(() => {
  UnitOfWork.runInTransaction(activeTx, function() {
    // this di sini merujuk ke activeTx karena sudah di-bind oleh UnitOfWork
    return UserRepository.saveUser.call(this, { name: "Budi" });
  });
}, 200);
```

---

### 4. Visualisasi & Mental Model

Hierarki algoritma engine dalam me-resolve nilai `this` saat fungsi dipanggil:

```text
               [Pemanggilan Fungsi: fn(...args)]
                                │
                                ▼
                   Apakah dipanggil dengan 'new'?
                  ┌─────────────┴─────────────┐
               (Ya)                          (Tidak)
                  │                             │
                  ▼                             ▼
       [Buat objek baru]              Apakah menggunakan .bind(),
    [Set this = objek baru]               .call(), atau .apply()?
                                      ┌─────────┴─────────┐
                                   (Ya)                  (Tidak)
                                      │                     │
                                      ▼                     ▼
                             [Set this = konteks    Apakah dipanggil via objek?
                              yang diberikan]          (e.g., obj.fn())
                                                    ┌───────┴───────┐
                                                 (Ya)              (Tidak)
                                                    │                 │
                                                    ▼                 ▼
                                            [Set this = obj]    Apakah "use strict"?
                                                                ┌─────┴─────┐
                                                             (Ya)          (Tidak)
                                                                │             │
                                                                ▼             ▼
                                                        [this = undefined] [this = globalThis]
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Arrow Functions untuk Callback Asinkron**: Karena arrow functions mengadopsi nilai `this` dari scope leksikal tempat ia dideklarasikan, masalah *implicit loss* pada timer (`setTimeout`) atau *event loop promises* dapat dihindari sepenuhnya.
- ✅ **Manfaatkan `Reflect.apply` untuk Dynamic Invocation**: Saat merancang pustaka atau *interceptor*, gunakan `Reflect.apply(target, thisArgument, argumentsList)` daripada `Function.prototype.apply` demi kode yang lebih clean dan terstandarisasi.
- ✅ **Ekstraksi Method dengan `.bind()`**: Jika method kelas harus di-pass sebagai referensi *first-class function* (seperti ke *router handler* Express atau event dispatcher), lakukan *binding* secara eksplisit pada constructor atau gunakan *class field arrow function*.
- ❌ **Hindari Arrow Function pada Object Literals untuk Method**: Mendefinisikan method objek menggunakan arrow function (`const obj = { run: () => this.val }`) menyebabkan `this` mengarah ke scope terluar (modul/global), bukan objek tersebut.

---

## ✍️ Latihan Mandiri

1. **Memperbaiki Implicit Loss**:
   Tulis kode di **Code Editor di bawah** yang mendefinisikan objek `Timer` dengan properti `seconds: 0` dan method `start()`. Di dalam method `start()`, gunakan `setInterval` untuk menambah `seconds` setiap 100ms. Selesaikan masalah *context loss* yang muncul dengan dua pendekatan berbeda: (a) menggunakan `.bind(this)` dan (b) menggunakan arrow function.

2. **Custom Function Wrapper (Polyfill Mini `.bind`)**:
   Implementasikan fungsi modular `customBind(fn, context, ...fixedArgs)` di **Code Editor di bawah** tanpa menggunakan method bawaan `Function.prototype.bind`. Gunakan *closure* dan `Function.prototype.apply` atau operator `spread` untuk mengembalikan fungsi baru yang secara permanen mengikat konteks dan mendukung *partial argument application* (*currying*).

---

## 🔗 Referensi
- [MDN Web Docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN Web Docs: Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [ECMAScript® 2024 Language Specification: Evaluation of Member Expressions & This Binding](https://tc39.es/ecma262/)