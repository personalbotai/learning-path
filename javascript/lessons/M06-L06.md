# Error Handling: try-catch, Custom Errors & Error Cause

**Slug**: `error-handling-try-catch` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami mekanisme internal *stack unwinding* dan alokasi stack trace pada engine V8 saat eksepsi dilempar.
- Menguasai pembuatan *custom error classes* hierarkis yang mewarisi `Error` bawaan dengan metadata domain yang terstruktur.
- Menerapkan pola *error wrapping* dan *chaining* modern menggunakan opsi ES2022 `{ cause }` untuk mempertahankan konteks audit teknis tanpa merusak abstraksi domain.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik layar JavaScript engine (seperti V8), eksekusi kode berjalan di dalam frame-frame *Call Stack*. Ketika sebuah *statement* mengeksekusi `throw`, engine menghentikan alur eksekusi normal dan memulai proses **Stack Unwinding**. V8 akan memindai frame stack dari yang paling atas (titik eksepsi) ke bawah sampai menemukan blok `try...catch` terdekat. Jika tidak ada blok penangkap yang cocok hingga frame root tercapai, proses akan memicu event `uncaughtException` pada Node.js atau `unhandledrejection` / global error handler di browser, yang berpotensi mematikan thread atau memicu crash runtime.

Ketika objek `Error` diinstansiasi (`new Error()`), engine secara otomatis mengambil snapshot dari stack frame saat itu melalui mekanisme internal (mirip `Error.captureStackTrace`). Objek ini dialokasikan di Heap memory dan mencakup tiga properti utama: `name` (string identitas error), `message` (deskripsi kesalahan), dan `stack` (deretan trace eksekusi). JavaScript menyediakan varian bawaan seperti `TypeError` (kesalahan tipe atau pemanggilan tak valid), `RangeError` (nilai berada di luar batas valid), dan `SyntaxError` (kesalahan parsing token).

```text
┌─────────────────────────────────────────────────────────────┐
│                    Call Stack Unwinding                     │
├─────────────────────────────────────────────────────────────┤
│ [Frame 3: validateInput()]  ──> throw new ValidationError() │
│        │ (Unwinding: Frame 3 dihapus dari stack)            │
│        ▼                                                    │
│ [Frame 2: processOrder()]   ──> (Tidak ada try-catch)       │
│        │ (Unwinding: Frame 2 dihapus dari stack)            │
│        ▼                                                    │
│ [Frame 1: handleCheckout()] ──> catch (err) { ... }         │
│        │ (Eksepsi ditangkap, alur berlanjut ke catch/finally│
└─────────────────────────────────────────────────────────────┘
```

Blok `finally` memiliki jaminan eksekusi yang deterministik. Engine menjamin kode di dalam `finally` akan selalu dieksekusi setelah `try` atau `catch` selesai, terlepas dari apakah blok tersebut selesai secara normal, mengembalikan nilai via `return`, atau melempar eksepsi baru. Hal ini menjadikannya tempat ideal untuk membersihkan sumber daya (*resource cleanup*) seperti melepaskan *lock*, menutup *stream*, atau menghentikan timer.

### 2. Sintaks & Penggunaan Modern
ECMAScript modern (ES2019+) menghadirkan *Optional Catch Binding*, memungkinkan penulisan `catch` tanpa argumen `(error)` jika variabel error tidak diperlukan. Selanjutnya, fitur krusial ES2022 menambahkan parameter kedua pada konstruktor `Error`, yaitu objek opsi `{ cause: originalError }`. Fitur ini memecahkan masalah klasik *error wrapping*: mengganti error infrastruktur (misal `DatabaseConnectionError`) menjadi error domain (misal `OrderProcessingError`) tanpa kehilangan *root cause* asli untuk kebutuhan *debugging*.

```javascript
// 1. Custom Error Hierarchy
class DomainError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
  }
}

class ValidationError extends DomainError {
  constructor(message, field, options) {
    super(message, options);
    this.field = field;
  }
}

class InfrastructureError extends DomainError {
  constructor(message, serviceName, options) {
    super(message, options);
    this.serviceName = serviceName;
  }
}

// 2. Simulasi fungsi dengan Error Chaining & Optional Catch Binding
function parsePayload(rawJson) {
  try {
    return JSON.parse(rawJson);
  } catch (err) {
    // Membungkus SyntaxError internal ke dalam ValidationError domain
    throw new ValidationError("Payload JSON tidak valid", "body", { cause: err });
  }
}

function processTransaction(rawPayload) {
  try {
    const data = parsePayload(rawPayload);
    return data;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`[Domain Handled] Field: ${error.field} | Pesan: ${error.message}`);
      console.log(`[Root Cause Name]: ${error.cause?.name}`);
      console.log(`[Root Cause Message]: ${error.cause?.message}`);
    } else {
      throw error; // Rethrow eksepsi yang tidak dikenali
    }
  } finally {
    console.log("[Cleanup] Audit logging siklus transaksi selesai.");
  }
}

// Eksekusi simulasi error
processTransaction("{ invalid_json_payload }");
```

### 3. Studi Kasus Nyata
Implementasi layer service pembayaran yang menangani kegagalan jaringan eksternal, membungkusnya ke dalam konteks transaksi perbankan, dan melakukan audit logging menyeluruh dari rantai `cause`.

```javascript
class PaymentGatewayError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "PaymentGatewayError";
  }
}

class OrderCheckoutError extends Error {
  constructor(orderId, message, options) {
    super(`Checkout gagal untuk pesanan ${orderId}: ${message}`, options);
    this.name = "OrderCheckoutError";
    this.orderId = orderId;
  }
}

// Mock simulasi network failure
function chargeCreditCard(amount) {
  if (amount > 1000) {
    throw new PaymentGatewayError("Koneksi timeout ke server payment gateway (HTTP 504)");
  }
  return { status: "SUCCESS", transactionId: "TXN_9921" };
}

function checkoutOrder(orderId, totalAmount) {
  try {
    return chargeCreditCard(totalAmount);
  } catch (error) {
    // Membungkus error payment gateway ke dalam OrderCheckoutError
    throw new OrderCheckoutError(orderId, "Gagal memproses pembayaran via gateway", {
      cause: error,
    });
  }
}

// Driver Code
try {
  checkoutOrder("ORD-88219", 2500);
} catch (err) {
  if (err instanceof OrderCheckoutError) {
    console.log(`❌ High-level Error: ${err.message}`);
    console.log(`🔍 Order ID: ${err.orderId}`);
    
    // Traversal chain error cause
    let currentError = err;
    let depth = 0;
    while (currentError.cause) {
      depth++;
      currentError = currentError.cause;
      console.log(`   └── Cause Level ${depth}: [${currentError.name}] ${currentError.message}`);
    }
  }
}
```

### 4. Visualisasi & Mental Model
```text
┌────────────────────────────────────────────────────────────────────────┐
│                        Error Chaining Hierarchy                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Top-Level Domain Exception:                                           │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ OrderCheckoutError                                               │  │
│  │ - message: "Checkout gagal untuk pesanan ORD-88219..."           │  │
│  │ - orderId: "ORD-88219"                                           │  │
│  │ - cause ────────────────────────────────────────────────┐        │  │
│  └─────────────────────────────────────────────────────────┼────────┘  │
│                                                            │           │
│  Low-Level Root Cause Exception:                           ▼           │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ PaymentGatewayError (Original Root Cause)                        │  │
│  │ - message: "Koneksi timeout ke server payment gateway (HTTP 504)"│  │
│  │ - stack: Trace ke modul network / http client                    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Selalu Lempar Objek Turunan `Error`**: Jangan pernah mengeksekusi `throw "pesan error"` atau `throw { code: 400 }` karena tipe primitif/objek polos tidak menghasilkan Call Stack trace pada engine.
- ✅ **Gunakan `Error.cause` untuk Context Wrapping**: Bungkus error berlevel rendah (misal dari driver database atau parser) dengan custom domain error sembari menyematkan error asal via `{ cause }`.
- ✅ **Manfaatkan `instanceof` untuk Granular Handling**: Buat error hierarchy yang terdefinisi sehingga layer atas dapat membedakan penanganan antara `ValidationError` (kembalikan HTTP 400) dan `InfrastructureError` (kembalikan HTTP 500).
- ❌ **Hindari "Error Swallowing"**: Jangan menangkap error di blok `catch` lalu membiarkannya kosong tanpa rethrow atau logging, karena akan memutus visibilitas atas kegagalan sistem fatal.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah class `HttpError` yang mewarisi `Error` dengan properti `statusCode`. Turunkan class tersebut menjadi `NotFoundError` (status 404) dan `UnauthorizedError` (status 401).
2. Tulis sebuah fungsi `fetchUserProfile(userId)` di **Code Editor di bawah** yang melempar `UnauthorizedError` jika `userId === null`, tangkap error tersebut di pemanggil terluar, dan bungkus ke dalam `ApplicationInitError` menggunakan properti `{ cause }`.

---

## 🔗 Referensi
- [MDN Web Docs: Error.prototype.cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
- [MDN Web Docs: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [ECMAScript® 2024 Language Specification: Error Objects](https://tc39.es/ecma262/#sec-error-objects)