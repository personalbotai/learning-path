# Encapsulation: getter/setter & #private

**Slug**: `encapsulation-getter-setter` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai implementasi hard-privacy menggunakan `#private` fields untuk mencegah mutasi state ilegal dari luar ekosistem class.
- Mengimplementasikan Accessor Properties (`get` dan `set`) untuk validasi runtime defensif serta komputasi nilai dinamis tanpa menduplikasi alokasi memori.
- Memahami mekanisme internal V8 engine dalam resolusi *Private Names*, proteksi *Brand Checking*, dan perbedaannya dengan konvensi legacy underscore (`_`).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Enkapsulasi adalah pilar arsitektur perangkat lunak yang memisahkan antarmuka publik (*public interface*) dari implementasi internal dan penyimpanan state (*internal state representation*). Sebelum standarisasi ES2022/ES2024, JavaScript tidak memiliki mekanisme hak akses privat pada level bahasa. Komunitas mengandalkan konvensi visual seperti prefix `_underscore` (*soft privacy*) atau *lexical scoping* via *Closure*. Namun, konvensi `_` tidak memberikan perlindungan struktural; properti tersebut tetap dapat diakses dan dimutasi secara langsung, serta bocor saat dilakukan iterasi melalui `Object.keys()` atau `Reflect.ownKeys()`.

Di balik layar, V8 engine memperlakukan `#privateField` menggunakan mekanisme **Private Names** (simbol internal yang tidak terindeks dalam daftar properti standar objek). Ketika class diinstansiasi di *Heap Memory*, engine mengikat setiap private identifier ke slot internal instance melalui proses yang disebut *Brand Checking*. Upaya mengakses `#field` di luar deklarasi lexical class akan langsung memicu `SyntaxError` pada tahap parsing (bukan `undefined` pada tahap runtime), sehingga menjamin *hard encapsulation*.

Accessor properties—melalui keyword `get` dan `set`—berfungsi sebagai jembatan kontrol akses antara dunia luar dan internal `#private` state. Sebuah `setter` mengintersepsi operasi penulisan (*assignment*), bertindak sebagai gerbang validasi untuk memastikan invarian data tidak pernah rusak (mencegah *corrupted state*). Sebaliknya, sebuah `getter` mengintersepsi operasi pembacaan untuk menyajikan data terderivasi (*derived state*) secara *on-the-fly*, menghindari redundansi penyimpanan memori di Heap.

### 2. Sintaks & Penggunaan Modern
Pada JavaScript modern ES2024, private field dideklarasikan di tingkat paling atas badan class dengan awalan `#`. Private field tidak dapat dideklarasikan secara dinamis di dalam constructor. Kombinasi `#field` dengan accessor methods memberikan kontrol mutasi deterministik.

```javascript
class BankAccount {
  // 1. Private Fields (Hard Encapsulation)
  #balance = 0;
  #currency;
  #auditLog = [];

  constructor(initialBalance, currency = 'IDR') {
    this.#currency = currency;
    // Panggil setter internal untuk validasi saat inisialisasi
    this.balance = initialBalance;
  }

  // 2. Getter: Komputasi dinamis & Derived State
  get balance() {
    return this.#balance;
  }

  get formattedBalance() {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: this.#currency
    }).format(this.#balance);
  }

  get transactionCount() {
    return this.#auditLog.length;
  }

  // 3. Setter: Validasi ketat (Invariants Guard)
  set balance(amount) {
    if (typeof amount !== 'number' || Number.isNaN(amount)) {
      throw new TypeError('Balance harus berupa angka yang valid.');
    }
    if (amount < 0) {
      throw new RangeError('Balance tidak boleh bernilai negatif.');
    }

    const previousBalance = this.#balance;
    this.#balance = amount;
    this.#recordAudit(previousBalance, amount);
  }

  // 4. Private Method
  #recordAudit(from, to) {
    this.#auditLog.push({
      timestamp: Date.now(),
      from,
      to,
      delta: to - from
    });
  }
}

// Eksekusi dan Verifikasi
const myAccount = new BankAccount(500_000);
console.log(myAccount.formattedBalance); // Output: Rp 500.000,00

myAccount.balance = 750_000;
console.log(myAccount.formattedBalance); // Output: Rp 750.000,00
console.log(`Total Transaksi: ${myAccount.transactionCount}`); // Output: Total Transaksi: 2

// Verifikasi Hard Privacy
console.log(Object.keys(myAccount)); // Output: [] (Tidak membocorkan private state)
console.log(myAccount.balance); // Output: 750000 (Melalui Getter)
```

### 3. Studi Kasus Nyata
Implementasi sistem token otentikasi berbasis waktu (*Time-sensitive Authentication Payload*). State internal seperti *secret hash* dan *timestamp* harus dilindungi dari modifikasi langsung, sementara status kedaluwarsa dievaluasi secara dinamis setiap kali diakses.

```javascript
class SecureSessionToken {
  #rawToken;
  #createdAt;
  #ttlMilliseconds;
  #revoked = false;

  constructor(rawToken, ttlMinutes = 15) {
    if (!rawToken || typeof rawToken !== 'string') {
      throw new Error('Token string tidak valid.');
    }
    this.#rawToken = rawToken;
    this.#createdAt = Date.now();
    this.#ttlMilliseconds = ttlMinutes * 60 * 1000;
  }

  // Dynamic Getter: Evaluasi status tanpa menyimpan boolean basi (stale state)
  get isExpired() {
    if (this.#revoked) return true;
    return Date.now() > (this.#createdAt + this.#ttlMilliseconds);
  }

  get tokenValue() {
    if (this.isExpired) {
      throw new Error('Akses ditolak: Token telah kedaluwarsa atau dicabut.');
    }
    return `Bearer ${this.#rawToken}`;
  }

  // Setter untuk mengubah status pembatalan secara aman
  set isRevoked(status) {
    if (typeof status !== 'boolean') {
      throw new TypeError('Status pembatalan harus bertipe boolean.');
    }
    this.#revoked = status;
  }

  get remainingSeconds() {
    if (this.isExpired) return 0;
    const timeLeft = (this.#createdAt + this.#ttlMilliseconds) - Date.now();
    return Math.max(0, Math.floor(timeLeft / 1000));
  }
}

// Simulasi Penggunaan
const session = new SecureSessionToken('x98a-secret-jwt-payload', 30);

console.log(`Token Valid? ${!session.isExpired}`); // Output: Token Valid? true
console.log(`Sisa Waktu: ${session.remainingSeconds}s`); // Output: Sisa Waktu: ~1800s
console.log(session.tokenValue); // Output: Bearer x98a-secret-jwt-payload

// Mencabut izin secara defensif
session.isRevoked = true;
console.log(`Token Valid setelah dicabut? ${!session.isExpired}`); // Output: false

try {
  console.log(session.tokenValue);
} catch (err) {
  console.log(`Security Alert: ${err.message}`); 
  // Output: Security Alert: Akses ditolak: Token telah kedaluwarsa atau dicabut.
}
```

### 4. Visualisasi & Mental Model
```text
┌───────────────────────────────────────────────────────────────────────┐
│                    STRUKTUR MEMORI & BOUNDARY CLASS                   │
│                                                                       │
│  CONSUMER EXTERNAL                                                    │
│    │                                                                  │
│    ├──> instance.balance = 500  ───( Intercept )──┐                   │
│    │                                              ▼                   │
│    │                                    ┌──────────────────┐          │
│    │                                    │  set balance(v)  │          │
│    │                                    │  [Validation OK] │          │
│    │                                    └─────────┬────────┘          │
│    │                                              │ Mutasi            │
│    │                                              ▼                   │
│    │    ┌────────────────────────────────────────────────────────┐    │
│    │    │ PRIVATE SCOPE (Hidden from Object.keys / Reflection)   │    │
│    │    │                                                        │    │
│    │    │  #balance: 500 <─────── Slot Internal Engine           │    │
│    │    │  #auditLog: [...]                                      │    │
│    │    └────────────────────────────────────────────────────────┘    │
│    │                                              ▲                   │
│    │                                              │ Baca / Hitung     │
│    │                                    ┌─────────┴────────┐          │
│    │                                    │  get balance()   │          │
│    └──> read instance.balance  <────────┤  get formatted() │          │
│                                         └──────────────────┘          │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `#private` untuk True Privacy**: Jangan lagi menggunakan `_prop` jika tujuannya adalah menyembunyikan implementasi internal. `#private` mencegah akses langsung secara native di level compiler/engine.
- ✅ **Pertahankan Getter Bersifat Murni (*Pure*)**: Hindari mutasi state internal di dalam `getter`. Getter harus berupa operasi baca atau transformasi tanpa efek samping (*side effects*).
- ✅ **Terapkan *Defensive Copying* pada Getter**: Jika mengembalikan array atau object dari private field, kembalikan salinan (*shallow/deep clone*) atau gunakan `Object.freeze()` agar consumer luar tidak dapat memutasi struktur aslinya secara referensial.
- ❌ **Hindari Asynchronous Logic dalam Accessor**: `getter` dan `setter` harus bersifat sinkron. Jangan menjalankan Promise atau I/O berat di dalamnya. Gunakan method biasa bertipe `async` jika operasi memerlukan asynchronous lifecycle.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah** dan buat class `ProductInventory`. Gunakan `#stock` dan `#price` sebagai private field. Tambahkan getter `totalValue` yang mengalikan stok dengan harga secara dinamis, serta setter `stock` yang melempar error jika nilai baru bukan bilangan bulat (*integer*) atau bernilai negatif.
2. Di **Code Editor di bawah**, buat class `SecureStorage` yang memiliki `#dataStore` (berupa Map). Buat setter `item` yang menerima object `{ key, value, ttl }`, serta getter yang hanya mengembalikan daftar kunci yang belum kedaluwarsa.

---

## 🔗 Referensi
- [MDN Web Docs: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [MDN Web Docs: Getter & Setter Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [ECMAScript Specification: Private Names & Field Definitions](https://tc39.es/ecma262/#sec-private-names)