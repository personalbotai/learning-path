# Arrow Functions: Perilaku this Lexical

**Slug**: `arrow-functions-perilaku-this` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami mekanisme internal resolving identifier `this`, `arguments`, `super`, dan `new.target` via Lexical Environment Record pada Arrow Function.
- Mengidentifikasi batasan arsitektur Arrow Function (tidak memiliki internal method `[[Construct]]` dan tidak membentuk dynamic binding).
- Menentukan secara presisi kapan harus mengimplementasikan Arrow Function (higher-order functions, class field callbacks, timer encapsulation) dan kapan mutlak dilarang (object literal methods, prototype methods, dynamic DOM event dispatchers).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Secara arsitektur di dalam JavaScript engine (seperti Google V8), eksekusi fungsi standar (`function` keyword) akan mengalokasikan **Function Execution Context** baru yang menyertakan **Function Environment Record**. Environment record standar ini memiliki slot internal `[[ThisValue]]` yang di-bind secara dinamis saat runtime bergantung pada *Call-Site* (bagaimana fungsi dipanggil: direct invocation, method invocation, explicit call via `apply`/`call`/`bind`, atau `new` instantiation).

Arrow Function (`() => {}`) diintroduksi pada ES6 bukan sekadar syntactic sugar pemendek kode, melainkan membawa modifikasi fundamental pada representasi internal engine. Arrow Function menghasilkan Environment Record dengan field internal `[[ThisBindingStatus]]` bernilai `"lexical"`. Artinya, Arrow Function **tidak memiliki binding `this`, `arguments`, `super`, maupun `new.target` sendiri**. 

Ketika engine mengevaluasi identifier `this` di dalam Arrow Function, engine melakukan lookup identifier secara berjenjang ke outer Lexical Scope (mirip proses resolving variabel via scope chain biasa), hingga menemukan enclosing context yang memiliki dynamic `this`. Selain itu, Arrow Function tidak memiliki slot internal `[[Construct]]` maupun property `.prototype`, sehingga alokasi memori untuk instansiasi objek menjadi mustahil dan pemanggilan menggunakan keyword `new` akan langsung melempar runtime `TypeError`.

### 2. Sintaks & Penggunaan Modern
Arrow functions menyediakan concise body dengan implicit return untuk ekspresi tunggal, serta block body untuk logika multi-baris. Pada ES2024, fitur ini sangat krusial dipadukan dengan asynchronous pipelining dan functional array utilities.

```javascript
// 1. Sintaks Ringkas & Implicit Return
const calculateTax = (amount, rate = 0.11) => amount * rate;
console.log('Implicit Return:', calculateTax(100_000)); // 11000

// Implicit return untuk Object Literal membutuhkan tanda kurung ()
const createSession = (userId, role) => ({ userId, role, createdAt: Date.now() });
console.log('Session Object:', createSession('USR-902', 'ADMIN'));

// 2. Ketiadaan 'arguments' object (menggunakan ES6 Rest Parameter)
const sumDynamic = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum via Rest Params:', sumDynamic(10, 20, 30, 40)); // 100

// 3. Arrow Function TIDAK BISA dipaksa menggunakan call, apply, atau bind
const contextA = { label: 'Context A' };
const contextB = { label: 'Context B' };

function standardFn() {
  return this.label;
}

const arrowFn = () => this?.label ?? 'Enclosing/Global Scope';

console.log('Standard + call:', standardFn.call(contextA)); // Context A
console.log('Arrow + call (ignored):', arrowFn.call(contextB)); // Enclosing/Global Scope
```

### 3. Studi Kasus Nyata
Dalam pengembangan sistem pemrosesan event asinkron atau state manager, kehilangan konteks `this` adalah isu klasik (dikenal sebagai *this-leak* atau *unbound method*). Arrow Function menyelesaikan masalah ini secara elegan pada *Class Fields* dan *Macrotask Timers*.

```javascript
class PaymentBatchProcessor {
  #merchantId = 'MCH-8821';
  #queue = [150_000, 450_000, 75_000];

  processTransactions() {
    console.log(`[START] Memproses antrean untuk: ${this.#merchantId}`);

    // Kasus Callback Array Method & Timer Macrotask
    // Arrow function menangkap 'this' dari method processTransactions
    this.#queue.forEach((amount, index) => {
      setTimeout(() => {
        const fee = this.#calculateFee(amount);
        console.log(
          `[PROCESSED] Index ${index} | Merchant: ${this.#merchantId} | Total: ${amount + fee}`
        );
      }, 100 * (index + 1));
    });
  }

  // Private helper
  #calculateFee = (amount) => amount * 0.015;
}

const processor = new PaymentBatchProcessor();
processor.processTransactions();
```

### 4. Visualisasi & Mental Model

```text
======================= ALUR RESOLUSI THIS SECARA LEXICAL =======================

  Global Scope / Enclosing Execution Context (Memiliki [[ThisValue]] -> Object A)
  ┌───────────────────────────────────────────────────────────────────────────┐
  │  Class/Object: Object A                                                   │
  │                                                                           │
  │  Method: processTransactions()                                            │
  │  ┌─────────────────────────────────────────────────────────────────────┐  │
  │  │ Call Stack / Execution Context                                      │  │
  │  │ 'this' bound dynamically to Object A                                │  │
  │  │                                                                     │  │
  │  │  Macrotask Queue (setTimeout)                                       │  │
  │  │  ┌───────────────────────────────────────────────────────────────┐  │  │
  │  │  │ Arrow Callback: () => { ... this.#merchantId ... }            │  │  │
  │  │  │ 1. Engine memeriksa Environment Record Arrow Callback.       │  │  │
  │  │  │    Result: [[ThisBindingStatus]] == "lexical" (TIDAK ADA)    │  │  │
  │  │  │ 2. Engine melakukan scope lookup ke Enclosing Context.       │  │  │
  │  │  │ 3. Menemukan 'this' milik processTransactions -> [Object A]   │  │  │
  │  │  │ 4. Identifier di-resolve aman tanpa manual .bind(this)        │  │  │
  │  │  └───────────────────────────────────────────────────────────────┘  │  │
  │  └─────────────────────────────────────────────────────────────────────┘  │
  └───────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Arrow Function untuk Functional Iterators**: `map`, `filter`, `reduce`, `flatMap`, dan asynchronous pipelines.
- ✅ **Gunakan Auto-bound Class Methods**: Definisikan method sebagai class field arrow (`handleClick = () => {}`) jika method tersebut sering di-pass sebagai callback event listener untuk mencegah hilangnya reference instance.
- ❌ **DILARANG pada Object Literal Methods**: Menulis `{ count: 0, increment: () => { this.count++; } }` akan mereferensikan lexical scope luar (`window` / global module `undefined`), bukan object itu sendiri. Gunakan method shorthand ES6 `{ increment() { this.count++; } }`.
- ❌ **DILARANG pada Dynamic DOM Event Listeners**: Hindari `button.addEventListener('click', () => { this.classList.toggle('active'); })` jika mengandalkan `this` sebagai elemen target. Pada Arrow Function, `this` tidak akan merujuk ke elemen DOM penembak event. Gunakan parameter `(event) => event.currentTarget` atau gunakan regular function.
- ❌ **DILARANG pada Prototype Methods**: Mendefinisikan method pada `MyConstructor.prototype.doSomething = () => {}` merusak pewarisan OOP karena `this` tidak akan menunjuk ke instance yang memanggilnya.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, perbaiki bug context-loss pada object `userProfile` berikut yang menggunakan arrow function pada method-nya sehingga `this.name` bernilai `undefined`:
   ```javascript
   const userProfile = {
     name: 'Sonia Wijaya',
     tags: ['engineering', 'javascript'],
     printTags: () => {
       // Perbaiki struktur method & iterator di bawah ini
       this.tags.forEach((tag) => {
         console.log(`${this.name} menguasai ${tag}`);
       });
     }
   };
   userProfile.printTags();
   ```
2. Tulis sebuah class `Timer` di **Code Editor di bawah** yang memiliki property `seconds` dan method `start()`. Di dalam `start()`, gunakan `setInterval` berbasis arrow function untuk menaikkan nilai `seconds` dan cetak outputnya ke console setiap 500ms, lalu hentikan setelah hitungan ke-3 via `clearInterval`.

---

## 🔗 Referensi
- [MDN Web Docs: Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ECMAScript Specification: Lexical Environments & Arrow Function Definitions](https://tc39.es/ecma262/#sec-arrow-function-definitions)