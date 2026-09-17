# Testing: Vitest, Jest & Node.js Native Test Runner

**Slug**: `jest-testing-framework` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Memahami strategi pengujian perangkat lunak berbasis *Testing Pyramid* (Unit, Integration, E2E) pada ekosistem JavaScript modern.
- Menguasai anatomi pengujian: struktur test suite (`describe`, `test`/`it`), lifecycle hooks, serta semantic assertions (`toBe`, `toEqual`, `toThrow`).
- Mengimplementasikan teknik *Test Doubles* (Mocks, Spies, Stubs) untuk mengisolasi dependensi eksternal dan memverifikasi interaksi sistem.
- Menjalankan test suite modern menggunakan Node.js Built-in Test Runner (`node:test` dan `node:assert/strict`) tanpa dependensi eksternal.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Pengujian otomatis pada JavaScript berakar pada *Testing Pyramid*, yang membagi pengujian menjadi tiga lapisan utama: **Unit Tests** (menguji fungsi individual terisolasi di memori), **Integration Tests** (menguji interaksi antar-modul, misalnya service layer dengan database), dan **End-to-End (E2E) Tests** (menguji alur sistem utuh dari sudut pandang pengguna).

Di balik layar, assertion engine seperti Jest, Vitest, atau `node:assert` bekerja dengan membandingkan nilai aktual (*actual*) dengan nilai yang diharapkan (*expected*). Perbedaan mendasar terletak pada perbandingan referensial vs struktural:
1. **Referential Equality (`toBe` / `assert.strictEqual`)**: Mengevaluasi identitas memori menggunakan algoritma `Object.is()`. Jika dua objek memiliki properti identik namun berada pada alamat heap memory yang berbeda, assertion akan menghasilkan `false`.
2. **Structural / Deep Equality (`toEqual` / `assert.deepStrictEqual`)**: Melakukan penelusuran rekursif (*graph traversal*) terhadap seluruh enumerable properties, tipe data prototype, `Map`, `Set`, serta `ArrayBuffer` untuk memastikan kesetaraan nilai terlepas dari referensi memorinya.

Evolusi test runner JavaScript bermula dari **Jest** yang mengisolasi konteks eksekusi menggunakan lingkungan virtual `vm` Node.js (cenderung lambat karena overhead serialisasi context), beralih ke **Vitest** yang memanfaatkan pipeline modul instan berbasis Vite dan ESM worker threads, hingga **Node.js Native Test Runner** (`node:test` yang diperkenalkan stabil pada Node.js v20+) yang tertanam langsung pada C++ core runtime tanpa instalasi package eksternal.

Ketika menguji fungsi asinkron (`async`/`await`), assertion engine akan menahan lifecycle eksekusi test runner hingga *Microtask Queue* menyelesaikan resolusi *Promise*. Jika Promise mengalami rejection tanpa ditangkap oleh `assert.rejects` atau `expect().rejects`, engine akan menangkap *unhandled rejection* dan langsung menandai test case sebagai gagal.

### 2. Sintaks & Penggunaan Modern
Node.js 20+ menyediakan modul bawaan `node:test` dan `node:assert/strict` yang mengadopsi sintaks standar industri (serupa dengan Jest dan Vitest).

```javascript
import { describe, it, mock, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

// Unit yang diuji: Domain Entity & Service
class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    if (initialBalance < 0) throw new RangeError('Saldo awal tidak boleh negatif.');
    this.#balance = initialBalance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new TypeError('Nominal deposit harus berupa angka positif.');
    }
    this.#balance += amount;
    return this.#balance;
  }
}

// Test Suite Anatomy
describe('BankAccount Domain Unit Tests', () => {
  let account;

  beforeEach(() => {
    // Reset state sebelum setiap test dijalankan (Mencegah state leakage)
    account = new BankAccount(100_000);
  });

  it('harus menginisialisasi saldo dengan benar (Referential Equality)', () => {
    assert.strictEqual(account.balance, 100_000);
  });

  it('harus menambah saldo saat deposit valid dilakukan', () => {
    const newBalance = account.deposit(50_000);
    assert.strictEqual(newBalance, 150_000);
    assert.strictEqual(account.balance, 150_000);
  });

  it('harus melempar TypeError saat deposit berupa nilai invalid (Error Assertion)', () => {
    assert.throws(
      () => account.deposit(-1000),
      {
        name: 'TypeError',
        message: 'Nominal deposit harus berupa angka positif.'
      }
    );
  });

  it('harus mendukung Deep Equality pada objek metadata audit', () => {
    const snapshotA = { id: 1, meta: { active: true, tags: ['vip', 'payroll'] } };
    const snapshotB = { id: 1, meta: { active: true, tags: ['vip', 'payroll'] } };

    // assert.strictEqual akan gagal karena referensi heap berbeda
    assert.deepStrictEqual(snapshotA, snapshotB);
  });
});
```

### 3. Studi Kasus Nyata: Async Payment Gateway dengan Mocking
Kasus integrasi layanan *Checkout* yang bergantung pada payment gateway pihak ketiga dan notification service. Kita menggunakan `mock.fn()` bawaan Node.js untuk membuat *Spies* dan *Stubs*.

```javascript
import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';

// Service Implementation
class OrderService {
  constructor(paymentGateway, notifier) {
    this.paymentGateway = paymentGateway;
    this.notifier = notifier;
  }

  async processOrder(orderId, amount, customerEmail) {
    // 1. Eksekusi Pembayaran Asinkron
    const paymentResult = await this.paymentGateway.charge(orderId, amount);

    if (!paymentResult.success) {
      throw new Error(`Pembayaran gagal: ${paymentResult.reason}`);
    }

    // 2. Kirim Notifikasi Asinkron
    await this.notifier.sendReceipt(customerEmail, paymentResult.transactionId);

    return {
      orderId,
      status: 'COMPLETED',
      transactionId: paymentResult.transactionId
    };
  }
}

// Integration Test Suite
describe('OrderService - Checkout Pipeline', () => {
  it('berhasil memproses pesanan dan memanggil dependencies dengan parameter yang tepat', async () => {
    // Arrange (Persiapan Test Doubles: Stub & Spy)
    const mockPaymentGateway = {
      charge: mock.fn(async (orderId, amount) => {
        return { success: true, transactionId: 'TX-998822' };
      })
    };

    const mockNotifier = {
      sendReceipt: mock.fn(async (email, txId) => true)
    };

    const service = new OrderService(mockPaymentGateway, mockNotifier);

    // Act
    const result = await service.processOrder('ORD-001', 500_000, 'budi@example.com');

    // Assert (State & Behavior Verification)
    assert.deepStrictEqual(result, {
      orderId: 'ORD-001',
      status: 'COMPLETED',
      transactionId: 'TX-998822'
    });

    // Verifikasi Interaksi Mock (Call Count & Arguments)
    assert.strictEqual(mockPaymentGateway.charge.mock.callCount(), 1);
    const chargeArgs = mockPaymentGateway.charge.mock.calls[0].arguments;
    assert.deepStrictEqual(chargeArgs, ['ORD-001', 500_000]);

    assert.strictEqual(mockNotifier.sendReceipt.mock.callCount(), 1);
    const notifyArgs = mockNotifier.sendReceipt.mock.calls[0].arguments;
    assert.deepStrictEqual(notifyArgs, ['budi@example.com', 'TX-998822']);
  });

  it('harus menghentikan pipeline dan melempar error jika payment gateway gagal', async () => {
    // Arrange: Stub payment failure
    const mockPaymentGateway = {
      charge: mock.fn(async () => ({ success: false, reason: 'INSUFFICIENT_FUNDS' }))
    };
    const mockNotifier = {
      sendReceipt: mock.fn(async () => true)
    };

    const service = new OrderService(mockPaymentGateway, mockNotifier);

    // Act & Assert (Async Error Assertion)
    await assert.rejects(
      async () => {
        await service.processOrder('ORD-002', 1_000_000, 'ani@example.com');
      },
      {
        name: 'Error',
        message: 'Pembayaran gagal: INSUFFICIENT_FUNDS'
      }
    );

    // Notifier TIDAK BOLEH dipanggil jika payment gagal
    assert.strictEqual(mockNotifier.sendReceipt.mock.callCount(), 0);
  });
});
```

### 4. Visualisasi & Mental Model

#### Siklus Hidup Test Runner & Microtask Asinkron
```text
┌─────────────────────────────────────────────────────────────────────────┐
│                      Test Runner Lifecycle Execution                    │
└─────────────────────────────────────────────────────────────────────────┘
   │
   ▼
[ describe() Scope ]
   │
   ├──▶ [ beforeEach Hook ] ──> Reset Mocks & Instantiate Fresh State
   │
   ├──▶ [ it('test name', async () => {}) ]
   │       │
   │       ├── 1. Call Stack: Eksekusi kode synchronous
   │       │
   │       ├── 2. Web API / Node C++ APIs: Menjadwalkan network/file I/O
   │       │
   │       ├── 3. Microtask Queue: [ Promise Resolution ]
   │       │       └── Test Runner menahan resolusi test via `await`
   │       │
   │       └── 4. Assertion Evaluation (assert / expect)
   │               ├── PASS ──▶ Catat metrics coverage
   │               └── FAIL ──▶ Tangkap Call Site Stack Trace
   │
   └──▶ [ afterEach Hook ] ──> Cleanup resources / mock.restoreAll()
```

#### Memori: Referential (`toBe`) vs Deep Structural (`toEqual`)
```text
Stack Memory (Variables)            Heap Memory (Object Storage)
┌───────────────────────┐           ┌────────────────────────────────┐
│ refA: 0x001           │ ────────> │ 0x001: { id: 1, role: 'USER' } │
├───────────────────────┤           ├────────────────────────────────┤
│ refB: 0x001           │ ────────> │ (Menunjuk ke memori yang sama) │
├───────────────────────┤           ├────────────────────────────────┤
│ refC: 0x002           │ ────────> │ 0x002: { id: 1, role: 'USER' } │
└───────────────────────┘           └────────────────────────────────┘

1. strictEqual(refA, refB) ──> TRUE  (Pointer 0x001 === 0x001)
2. strictEqual(refA, refC) ──> FALSE (Pointer 0x001 !== 0x002)
3. deepStrictEqual(refA, refC) ──> TRUE (Traversing: keys & values identik)
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Pola AAA (Arrange, Act, Assert)**: Pisahkan blok persiapan data, pemanggilan fungsi yang diuji, dan evaluasi hasil secara terstruktur dan terbaca.
- ✅ **Isolasi State Antar Pengujian**: Hindari berbagi instance objek mutable antar test case. Selalu instansiasi ulang dependencies di dalam hook `beforeEach` untuk mencegah *flaky tests*.
- ✅ **Pilih Matcher yang Tepat**: Gunakan referential assertion (`toBe` / `strictEqual`) untuk nilai primitif (`number`, `string`, `boolean`), dan structural assertion (`toEqual` / `deepStrictEqual`) untuk objek, array, atau instances kelas.
- ❌ **Anti-Pattern (Testing Implementation Details)**: Jangan menguji *private variables* atau method internal yang tidak terekspos. Uji kontrak publik (*public contract*) berupa input parameter dan output/side-effects.

---

## ✍️ Latihan Mandiri
1. **Validasi Keranjang Belanja**: Buat kelas `CartService` dengan method `addItem(item, quantity)` dan `calculateTotal(discountCode)`. Di Code Editor di bawah, tulis test suite menggunakan `node:test` dan `node:assert/strict` untuk memverifikasi kalkulasi diskon, handling input kuantitas negatif, dan struktur breakdown harga akhir.
2. **Mocking External API Authentication**: Buat fungsi `authenticateUser(authProvider, token)` yang memanggil `authProvider.verify(token)`. Di Code Editor di bawah, buat unit test menggunakan `mock.fn()` untuk menyimulasikan dua kondisi: autentikasi berhasil (mengembalikan user payload) dan autentikasi kadaluwarsa (melempar unauthorized error).

---

## 🔗 Referensi
- [Node.js Official Documentation: Test Runner API](https://nodejs.org/api/test.html)
- [Node.js Official Documentation: Assert Module](https://nodejs.org/api/assert.html)
- [ECMAScript® 2024 Language Specification: Equality Operators](https://tc39.es/ecma262/)