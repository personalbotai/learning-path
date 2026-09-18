# Polymorphism dan Method Overriding

**Slug**: `polymorphism-dan-method-overriding` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami implementasi *Polymorphism* (polimorfisme) berbasis *Subtyping* dan *Method Overriding* menggunakan hierarki *Prototype Chain* ES2024.
- Menguasai konsep *Duck Typing* (*Dynamic Polymorphism*) di mana kapabilitas objek ditentukan oleh keberadaan kontrak runtime tanpa memerlukan deklarasi *Interface* formal.
- Menerapkan arsitektur polimorfisme berbasis *Composition over Inheritance* dan delegasi objek menggunakan teknik *Object Assign* atau *Factory Functions*.
- Memahami optimasi engine V8 terkait *Inline Caching* (IC) dan *Hidden Classes* (*Shapes*) saat menangani pemanggilan metode polimorfik.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Polimorfisme dalam rekayasa perangkat lunak adalah kapabilitas entitas berbeda untuk merespons pemanggilan interface atau metode yang sama dengan perilaku yang spesifik. Di lingkungan JavaScript (khususnya engine V8), polimorfisme beroperasi secara fundamental berbeda dibandingkan bahasa *statically typed* berbasis *nominal typing* seperti Java atau C++. JavaScript tidak mengevaluasi tipe data berdasarkan nama hierarki kelasnya, melainkan secara struktural melalui *Dynamic Dispatch* dan penelusuran *Prototype Chain*.

Ketika sub-class melakukan *Method Overriding*, engine V8 menempatkan metode baru tersebut langsung pada objek prototipe sub-class (`SubClass.prototype`). Saat pemanggilan metode terjadi pada instance, engine melakukan resolusi properti mulai dari instance itu sendiri (pada memory Heap), lalu naik ke `__proto__` sub-class. Jika ditemukan, penelusuran berhenti (*property shadowing*), mencegah evaluasi metode dengan nama identik pada `SuperClass.prototype`. Pemanggilan `super.methodName()` secara eksplisit menginstruksikan engine untuk melewati prototipe terdekat dan mengevaluasi metode milik super-prototipe dengan binding konteks `this` saat ini.

Lebih jauh lagi, sifat *dynamically typed* JavaScript memungkinkan adopsi penuh prinsip *Duck Typing*: *"If it walks like a duck and quacks like a duck, it is a duck"*. Sebuah fungsi dapat mengeksekusi metode `.execute()` pada objek apa pun selama properti fungsional tersebut terdefinisi, tanpa peduli apakah objek tersebut mewarisi *base class* yang sama atau sekadar objek literal biasa. 

Namun, dari sudut pandang performa V8, *call site* pemanggilan polimorfik akan mengalami transisi status *Inline Cache* (IC):
1. **Monomorphic**: Pemanggilan selalu menerima objek dengan *Shape* (struktur internal memori) yang persis sama (eksekusi sangat cepat, *inlined*).
2. **Polymorphic**: Menerima 2 hingga 4 *Shapes* berbeda (eksekusi memeriksa *table lookup* internal).
3. **Megamorphic**: Menerima lebih dari 4 *Shapes* berbeda (engine beralih ke pencarian lambat / *de-optimization*).

### 2. Sintaks & Penggunaan Modern
Berikut adalah demonstrasi *Method Overriding* formal berbasis `class` dan *Duck Typing* polimorfik murni pada JavaScript modern:

```javascript
// Base Class / Abstract Intent
class PaymentProcessor {
  #currency;

  constructor(currency = 'IDR') {
    this.#currency = currency;
  }

  get currency() {
    return this.#currency;
  }

  process(amount) {
    throw new Error(`Method 'process()' harus diimplementasikan pada class turunan.`);
  }
}

// Sub-class 1: Method Overriding + super call
class CreditCardProcessor extends PaymentProcessor {
  #taxRate = 0.03;

  process(amount) {
    const total = amount + (amount * this.#taxRate);
    return `[CreditCard] Memproses tagihan: ${this.currency} ${total.toLocaleString('id-ID')} (Termasuk Tax 3%)`;
  }
}

// Sub-class 2: Method Overriding
class CryptoProcessor extends PaymentProcessor {
  #networkFee = 15000;

  process(amount) {
    const total = amount + this.#networkFee;
    return `[Crypto] Memverifikasi transaksi On-Chain: ${this.currency} ${total.toLocaleString('id-ID')} (Fee: ${this.#networkFee})`;
  }
}

// Duck Typing: Plain Object yang memenuhi kontrak struktural tanpa inheritance
const legacyGateway = {
  currency: 'IDR',
  process(amount) {
    return `[Legacy Gateway] Memproses tiket invoice manual: ${this.currency} ${amount.toLocaleString('id-ID')}`;
  }
};

// Polymorphic Dispatcher (Dynamic Polymorphism)
function checkout(processor, amount) {
  // Validasi defensif kontrak sebelum eksekusi
  if (typeof processor?.process !== 'function') {
    throw new TypeError('Parameter processor harus memiliki method .process()');
  }
  
  console.log(processor.process(amount));
}

const cc = new CreditCardProcessor('IDR');
const crypto = new CryptoProcessor('IDR');

checkout(cc, 1_000_000);
checkout(crypto, 1_000_000);
checkout(legacyGateway, 1_000_000);
```

### 3. Studi Kasus Nyata: Pipeline Notifikasi & Delegasi Objek
Pola polimorfisme berbasis komposisi (*Object Composition & Delegation*) sering digunakan untuk menghindari masalah *Fragile Base Class*. Di bawah ini adalah sistem pengiriman notifikasi terdistribusi:

```javascript
// Composition Behaviors (Mixins / Functional Strategy)
const createEmailStrategy = (senderAddress) => ({
  type: 'EMAIL',
  send({ to, message }) {
    return `[EMAIL OUTBOUND] To: ${to} from <${senderAddress}> | Content: "${message}"`;
  }
});

const createSmsStrategy = (providerId) => ({
  type: 'SMS',
  send({ to, message }) {
    // SMS Payload truncating logic
    const sanitizedMsg = message.length > 30 ? `${message.slice(0, 27)}...` : message;
    return `[SMS GATEWAY - ${providerId}] To: ${to} | Content: "${sanitizedMsg}"`;
  }
});

const createPushStrategy = (appId) => ({
  type: 'PUSH',
  send({ to, message }) {
    return `[APNS/FCM App: ${appId}] Device Token: ${to} | Payload: { alert: "${message}" }`;
  }
});

// Notification Service yang mendelegasikan tugas pengiriman secara polimorfik
class NotificationService {
  #transporters = new Map();

  registerTransporter(name, strategy) {
    if (typeof strategy?.send !== 'function') {
      throw new Error(`Strategy '${name}' tidak valid: method send(payload) wajib ada.`);
    }
    this.#transporters.set(name, strategy);
  }

  broadcast(notificationChannels, payload) {
    const results = [];
    
    for (const channel of notificationChannels) {
      const transporter = this.#transporters.get(channel);
      if (!transporter) {
        console.warn(`Peringatan: Channel ${channel} tidak terdaftar.`);
        continue;
      }
      
      // Dynamic Dispatch tanpa if/else panjang
      results.push(transporter.send(payload));
    }
    
    return results;
  }
}

// Inisialisasi dan Eksekusi
const service = new NotificationService();
service.registerTransporter('email_corp', createEmailStrategy('noreply@enterprise.com'));
service.registerTransporter('sms_otp', createSmsStrategy('TWILIO_PROD'));
service.registerTransporter('push_mobile', createPushStrategy('com.company.app'));

const broadcastResults = service.broadcast(
  ['email_corp', 'sms_otp', 'push_mobile'],
  { to: 'user_target_99', message: 'Kode OTP Anda adalah 849201. Berlaku 5 menit.' }
);

broadcastResults.forEach(res => console.log(res));
```

### 4. Visualisasi & Mental Model

```text
┌─────────────────────────────────────────────────────────────────────────┐
│              V8 Engine: Polymorphic Property Lookup                     │
│                                                                         │
│   Call Site: receiver.process()                                         │
│                                                                         │
│   [Instance: cc] ───────────┐                                           │
│   Shape: { privateFields }  │ Prototype Lookup                          │
│   __proto__ ────────────────┼──> [CreditCardProcessor.prototype]        │
│                             │    Method: process() -> Shadowing Base!   │
│                                                                         │
│   [Instance: crypto] ───────┤                                           │
│   Shape: { privateFields }  │ Prototype Lookup                          │
│   __proto__ ────────────────┼──> [CryptoProcessor.prototype]            │
│                             │    Method: process() -> Shadowing Base!   │
│                                                                         │
│   [Object: legacyGateway] ──┘ Direct Property                           │
│   Shape: { currency, process } ─> Evaluated immediately (Duck Typing)   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Validasi Kontrak Sederhana**: Ketika mengandalkan *Duck Typing*, gunakan *defensive check* (`typeof target.method === 'function'`) atau *TypeScript interfaces* saat fase *build-time* untuk mencegah `TypeError: target.method is not a function`.
- ✅ **Favor Komposisi daripada Pewarisan**: Gunakan delegasi objek (*Strategy Pattern*) dibanding inheritance hierarki pohon yang dalam (`Deep Inheritance Tree`).
- ✅ **Panggil `super.method()` secara Eksplisit saat Ekstensi**: Jika method overriding bertujuan menambahkan perilaku (bukan mengganti total), pastikan memanggil `super.method(...args)` agar *state* super-class tetap konsisten.
- ❌ **Hindari Shape Mutation Dinamis**: Jangan menambah atau menghapus method secara runtime langsung ke instance (`instance.process = fn`). Hal ini merusak optimasi *Shape* engine V8 dan mengubah *call site* menjadi status *Megamorphic*.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buat class `DataExporter` dengan method `export(data)` yang melempar error. Buat sub-class `JsonExporter` dan `CsvExporter` yang meng-override method tersebut untuk memformat array of objects `[{id: 1, name: 'Alpha'}, {id: 2, name: 'Beta'}]` masing-masing ke format JSON string dan CSV string murni.
2. Buat sebuah factory function `createXmlExporter()` yang menghasilkan plain object (tanpa `class`) dengan method `export(data)` yang kompatibel secara *Duck Typing* untuk dikonsumsi oleh fungsi dispatching yang sama.

---

## 🔗 Referensi
- [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN Web Docs: Classes - super keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [ECMAScript Language Specification: Ordinary and Exotic Objects Behaviours](https://tc39.es/ecma262/)