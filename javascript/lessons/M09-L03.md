# Design Patterns di JavaScript Modern

**Slug**: `design-patterns-javascript` · **Level**: Advanced · **Waktu**: 35 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai implementasi *Creational*, *Structural*, dan *Behavioral Patterns* secara idiomatik menggunakan kapabilitas ECMAScript modern (ES2024).
- Menganalisis *trade-off* performa, alokasi memori heap, dan optimasi V8 engine (*hidden classes* / *shapes*) antara pendekatan *Class-based* vs *Functional Closure*.
- Merancang arsitektur aplikasi *decoupled* berbasis *Event-driven* dan *Strategy Pattern* dengan integrasi microtask queue asinkron.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Dalam ekosistem JavaScript modern, *Gang of Four* (GoF) *Design Patterns* mengalami evolusi fundamental. Karena JavaScript memperlakukan fungsi sebagai *first-class citizens* dan mengadopsi pewarisan prototipikal dinamis, banyak pola klasik yang membutuhkan abstraksi kelas berlapis (seperti *Abstract Factory* atau *Command*) dapat direduksi secara elegan menggunakan *closures*, *higher-order functions*, dan objek literal.

Secara arsitektur memori di dalam engine V8, pemilihan antara *Class-based pattern* dan *Closure-based pattern* memiliki dampak langsung terhadap *heap allocation* dan *garbage collection*:
1. **Class-based Patterns**: Metode didefinisikan pada objek `prototype`. Setiap *instance* hanya menyimpan *property slots* dan referensi `__proto__`, memungkinkan V8 membuat *Shape* (*Hidden Class*) yang konsisten untuk optimasi *Inline Caching* (IC).
2. **Closure-based Patterns**: Setiap pemanggilan fungsi menghasilkan *lexical environment record* baru di memory heap. Variabel privat dipertahankan melalui referensi scope tertutup, yang memberikan enkapsulasi murni tanpa modifikasi prototipe, namun dengan sedikit *overhead footprint* memori per instansiasi.

Pada ES2024, fitur seperti *private class fields* (`#field`), *static initialization blocks*, `Proxy`, dan `Reflect` API memberikan kontrol meta-programming tingkat tinggi untuk menerapkan *Proxy Pattern*, *Decorator*, dan *Singleton* tanpa merusak integritas objek.

### 2. Sintaks & Penggunaan Modern
Berikut adalah implementasi komparatif pola *Structural (Proxy/Decorator)* dan *Creational (Builder)* menggunakan sintaks ES2024.

```javascript
// 1. CREATIONAL: Fluent Builder Pattern dengan Private Fields & Static Block
class QueryBuilder {
  #collection = '';
  #filters = new Map();
  #limit = 10;

  static #DEFAULT_LIMIT = 20;

  setCollection(collection) {
    this.#collection = collection;
    return this; // Method chaining
  }

  where(key, value) {
    this.#filters.set(key, value);
    return this;
  }

  setLimit(limit) {
    this.#limit = Number.isInteger(limit) && limit > 0 ? limit : QueryBuilder.#DEFAULT_LIMIT;
    return this;
  }

  build() {
    if (!this.#collection) throw new Error("Collection wajib ditentukan!");
    return Object.freeze({
      collection: this.#collection,
      filters: Object.fromEntries(this.#filters),
      limit: this.#limit,
      executedAt: new Date().toISOString()
    });
  }
}

// 2. STRUCTURAL: Proxy Pattern untuk Reactive State Validation & Observability
const createObservableRepository = (targetState) => {
  return new Proxy(targetState, {
    set(target, property, value, receiver) {
      if (property === 'version' && typeof value !== 'number') {
        throw new TypeError('Property "version" harus berupa numeric!');
      }
      console.log(`[Audit Log] Mutasi properti "${String(property)}":`, { dari: target[property], menjadi: value });
      return Reflect.set(target, property, value, receiver);
    }
  });
};

// Eksekusi Builder
const query = new QueryBuilder()
  .setCollection('transactions')
  .where('status', 'PAID')
  .where('currency', 'IDR')
  .setLimit(5)
  .build();

console.log('Query Payload:', query);

// Eksekusi Proxy State
const state = createObservableRepository({ version: 1, status: 'DRAFT' });
state.version = 2;
state.status = 'PUBLISHED';
```

### 3. Studi Kasus Nyata: Async Event Bus & Strategy Execution Pipeline
Skenario sistem pemrosesan pembayaran terdistribusi: Menggabungkan *Behavioral Observer (PubSub)* asinkron dengan *Strategy Pattern* untuk menghitung biaya transaksi secara dinamis dan non-blocking.

```javascript
// STRATEGY PATTERN: Algoritma Kalkulasi Biaya Transaksi
const PaymentStrategies = {
  CREDIT_CARD: (amount) => amount * 0.029 + 2000,
  E_WALLET: (amount) => amount * 0.015,
  BANK_TRANSFER: () => 4500
};

// BEHAVIORAL PATTERN: Asynchronous Event Bus (PubSub)
class AsyncEventBus {
  #subscribers = new Map();

  subscribe(event, handler) {
    if (!this.#subscribers.has(event)) {
      this.#subscribers.set(event, new Set());
    }
    this.#subscribers.get(event).add(handler);

    // Return unsubscription function
    return () => this.#subscribers.get(event)?.delete(handler);
  }

  publish(event, payload) {
    const handlers = this.#subscribers.get(event);
    if (!handlers || handlers.size === 0) return;

    // Menjadwalkan dispatch ke Microtask Queue agar non-blocking
    for (const handler of handlers) {
      queueMicrotask(async () => {
        try {
          await handler(payload);
        } catch (err) {
          console.error(`[Error Handler Event ${event}]:`, err.message);
        }
      });
    }
  }
}

// PIPELINE IMPLEMENTATION
class CheckoutService {
  #bus;

  constructor(eventBus) {
    this.#bus = eventBus;
  }

  processOrder(orderId, amount, method) {
    const strategy = PaymentStrategies[method];
    if (!strategy) throw new Error(`Metode ${method} tidak didukung.`);

    const fee = strategy(amount);
    const total = amount + fee;

    const transaction = { orderId, amount, fee, total, method, timestamp: Date.now() };

    console.log(`[Sync] Transaksi ${orderId} dihitung: Total = ${total}`);
    this.#bus.publish('ORDER_COMPLETED', transaction);
  }
}

// Runtime Execution
const bus = new AsyncEventBus();

// Subscriptions
const unsubscribeAudit = bus.subscribe('ORDER_COMPLETED', (tx) => {
  console.log(`[Microtask 1 - Audit Service] Mencatat transaksi:`, tx.orderId);
});

bus.subscribe('ORDER_COMPLETED', (tx) => {
  console.log(`[Microtask 2 - Notification] Mengirim struk untuk: ${tx.orderId} senilai Rp${tx.total}`);
});

const checkout = new CheckoutService(bus);
checkout.processOrder('INV-2024-001', 150000, 'CREDIT_CARD');
checkout.processOrder('INV-2024-002', 50000, 'E_WALLET');

console.log('[Sync] Alur Checkout Utama Selesai (Menunggu Microtask Queue)...');
```

### 4. Visualisasi & Mental Model

Berikut adalah alur eksekusi Event Loop saat memproses *Behavioral Event Bus* dengan pemisahan fase *Synchronous Call Stack* dan *Asynchronous Microtask Queue*:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                             CALL STACK (V8)                              │
│  1. checkout.processOrder() ──> Hitung Strategy (Sync)                   │
│  2. bus.publish()           ──> Mendaftarkan handler ke microtask queue  │
│  3. console.log('Alur Selesai') ──> Stack Bersih / Empty                │
└─────────────────────────────────────┬────────────────────────────────────┘
                                      │ Enqueue Microtasks
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                           MICROTASK QUEUE                                │
│  [Microtask 1: Audit Log Handler] ──> [Microtask 2: Notification Service]│
└─────────────────────────────────────┬────────────────────────────────────┘
                                      │ Event Loop Dequeue
                                      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                            EXECUTION RUNTIME                             │
│  Output Asinkron dieksekusi sebelum rendering/macrotask berikutnya.     │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan ES Modules (ESM) untuk Singleton**: Caching internal modul Node.js/Browser secara native menjamin *singleton instance* tanpa perlu logika boilerplate class manual.
- ✅ **Manfaatkan `Proxy` dan `Reflect` secara simetris**: Selalu gunakan metode `Reflect.*` di dalam *trap proxy* untuk mempertahankan perilaku internal dan penanganan parameter *receiver* yang tepat.
- ✅ **Optimasi V8 Shapes**: Hindari mengubah struktur objek (menghapus/menambah properti secara dinamis) pasca-instansiasi. Buat semua *properties* pada *constructor* untuk mencegah *de-optimization* menjadi mode kamus (*dictionary mode*).
- ❌ **Anti-pattern: God-Object Service Locator**: Menghindari pembuatan satu objek registry global besar yang menyimpan seluruh *state* dan dependensi aplikasi karena merusak *tree-shaking* dan memicu *memory leak*.

---

## ✍️ Latihan Mandiri
1. Modifikasi kelas `AsyncEventBus` di **Code Editor di bawah** untuk menambahkan fitur *Middleware* (mirip *Chain of Responsibility Pattern*) sehingga payload dapat divalidasi dan ditransformasi sebelum mencapai *subscribers*.
2. Implementasikan *Adapter Pattern* di **Code Editor di bawah** yang mengonversi interface dari API *Legacy Payment Gateway* (berbasis callback dan payload XML-like string) menjadi interface modern berbasis *Promise* dengan return payload JSON.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [ECMAScript Specification: Private Class Elements](https://tc39.es/ecma262/#sec-private-names)