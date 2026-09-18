# Code Review Checklist & Static Analysis

**Slug**: `code-review-checklist` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Mengidentifikasi potensi *runtime error*, penanganan *edge-cases* (*nullish values*, mutasi array tak terduga), dan *memory leaks* pada kode JavaScript modern.
- Menerapkan metodologi audit berbasis eksekusi V8 engine: pencegahan *deoptimization* akibat alterasi *hidden classes* (*Shape*) dan penanganan asinkronitas menggunakan `AbortController`.
- Menyusun alur review kode yang membedakan otomatisasi *static analysis* (AST/Linter) dengan analisis semantik serta memberikan *actionable feedback* yang konstruktif.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Code review level intermediate hingga senior tidak lagi berfokus pada gaya penulisan (*code styling*) atau indentasi. Hal-hal mekanis tersebut telah sepenuhnya didelegasikan ke perkakas *Static Analysis* berbasis *Abstract Syntax Tree* (AST) seperti ESLint, Biome, atau TypeScript compiler. Titik berat peninjauan kode oleh engineer adalah memastikan *correctness*, *architectural fitness*, keamanan data, serta implikasi eksekusi kode pada engine JavaScript (seperti V8).

Secara internal pada V8 Engine, representasi objek dioptimalkan melalui sistem *Hidden Class* (sering disebut *Shape* atau *Map*). Ketika sebuah kode melakukan mutasi struktur objek secara dinamis—misalnya menggunakan operator `delete` atau menambahkan properti secara acak di luar *constructor*—V8 akan membatalkan optimasi (*deoptimize*) fungsi tersebut dan beralih ke *slow dictionary mode*. Seorang code reviewer wajib mengenali pola-pola anti-performa ini dan mengarahkan author kode untuk menggunakan struktur data `Map` atau selalu menginisialisasi properti dengan nilai awal (`null`/`undefined`).

Selain performa V8, aspek krusial berikutnya adalah *resilience* pada penanganan operasi asinkron dan batasan memori (*heap*). Kode asinkron tanpa mekanisme terminasi yang jelas (seperti ketiadaan `AbortSignal.timeout()`) berpotensi menyebabkan microtask tersangkut di *Microtask Queue* atau *callback* tetap hidup di *Memory Heap*, memicu kebocoran memori (*memory leak*). Reviewer harus memastikan penanganan *edge-cases* mencakup kegagalan jaringan, struktur payload kosong, dan perlindungan dari *Prototype Pollution*.

```text
┌────────────────────────────────────────────────────────────────────────┐
│               PIPELINE AUDIT: STATIC ANALYSIS VS PEER REVIEW          │
│                                                                        │
│ [ Source Code ] ──> [ AST Linter / Type Checker ]                      │
│                            │                                           │
│                            ├─> Parsing Syntax, Unused Vars, Formatter  │
│                            ▼                                           │
│                     [ Human Code Review ]                              │
│                            │                                           │
│                            ├─> Edge-Cases (Nullish, Boundary Check)    │
│                            ├─> V8 Shape Consistency (Deopt Prevention)│
│                            ├─> Async Hygiene (AbortSignal, Microtask)  │
│                            └─> Security (Prototype Pollution, Sanitasi)│
└────────────────────────────────────────────────────────────────────────┘
```

### 2. Sintaks & Penggunaan Modern
Dalam standar ES2024, tinjauan kode harus mendorong penggunaan *immutable array methods* (`toSorted`, `toSpliced`, `with`) untuk mencegah efek samping mutasi referensi di *Memory Heap*, serta memanfaatkan `Object.groupBy` dan *nullish coalescing assignment* (`??=`) untuk kode yang ringkas dan defensif.

Berikut adalah simulasi audit kode: Mengubah kode bermasalah (*antipattern*) menjadi implementasi produksi yang aman dan teruji:

```javascript
// ==========================================
// ❌ CONTOH KODE RAWAN SEBELUM DI-REVIEW
// ==========================================
function unsafeProcessUsers(users, filterRole) {
  // Masalah 1: Mutasi array asli via .sort()
  // Masalah 2: Menggunakan || alih-alih ?? menyebabkan string kosong dianggap falsy
  // Masalah 3: delete memicu Shape transition di V8
  const sorted = users.sort((a, b) => a.id - b.id);
  
  for (const user of sorted) {
    if (user.role === filterRole) {
      user.displayName = user.name || "Anonymous";
      delete user.temporarySessionId; // Memicu V8 deoptimization
    }
  }
  return sorted;
}

// ==========================================
// ✅ CONTOH KODE REKOMENDASI HASIL REVIEW (ES2024)
// ==========================================
function safeProcessUsers(users, filterRole) {
  // Defensive check terhadap edge case non-iterable
  if (!Array.isArray(users) || users.length === 0) {
    return [];
  }

  // 1. Imutabilitas: toSorted() membuat salinan baru tanpa mutasi sumber
  const sortedUsers = users.toSorted((a, b) => (a.id ?? 0) - (b.id ?? 0));

  // 2. Transformasi murni: Mencegah delete dan menjaga konsistensi Hidden Class
  return sortedUsers
    .filter(user => user?.role === filterRole)
    .map(user => {
      // Destrukturisasi untuk membuang session id tanpa operator `delete`
      const { temporarySessionId, ...cleanUser } = user;
      
      return {
        ...cleanUser,
        // Gunakan ?? agar string kosong "" tetap valid jika memang diinginkan
        displayName: cleanUser.name ?? "Anonymous",
        isProcessed: true
      };
    });
}

// Eksekusi Runnable
const rawData = [
  { id: 2, name: "", role: "admin", temporarySessionId: "sess_99" },
  { id: 1, name: "Budi", role: "admin", temporarySessionId: "sess_88" },
  { id: 3, name: null, role: "member", temporarySessionId: "sess_77" }
];

const result = safeProcessUsers(rawData, "admin");
console.log("Original data tetap utuh:", rawData[0].id === 2);
console.log("Processed data (ES2024):", result);
```

### 3. Studi Kasus Nyata
Dalam sistem *data ingestion* berbasis REST API, kode rentan terhadap *network hang*, *prototype pollution* dari *untrusted JSON*, dan kesalahan pengelompokan state. Reviewer harus memastikan terdapat *abort timeout*, *prototype-safe storage*, dan *structured grouping*.

```javascript
// Standar Produksi: Service Ingestion Data Tangguh
async function fetchAndGroupMetrics(endpoint, options = {}) {
  const { timeoutMs = 3000, fallbackCategory = "uncategorized" } = options;
  
  // 1. Penanganan Lifecycle Async: Timeout preventif
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Simulasi respons API aman menggunakan mock
    const mockApiResponse = [
      { metric: "cpu_load", value: 82, cluster: "asia-east" },
      { metric: "mem_free", value: 12, cluster: "asia-east" },
      { metric: "disk_io", value: 45, cluster: null },
      { metric: "__proto__", value: 0, cluster: "malicious" } // Upaya Prototype Pollution
    ];

    // 2. Pembersihan & Sanitasi Data
    const sanitizedData = mockApiResponse.filter(item => {
      // Tolak data yang mencoba merusak object prototype
      return item.metric !== "__proto__" && item.metric !== "constructor";
    });

    // 3. Kategorisasi Menggunakan ES2024 Object.groupBy
    // Membuat kamus yang aman dengan Object.create(null) sebagai container
    const grouped = Object.groupBy(sanitizedData, (item) => {
      return item.cluster ?? fallbackCategory;
    });

    return {
      success: true,
      data: grouped,
      totalGroups: Object.keys(grouped).length
    };
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("[Review Guard] Request aborted due to timeout");
    }
    return { success: false, data: Object.create(null), error: error.message };
  } finally {
    clearTimeout(timeoutId); // Cegah timer leak di Macrotask Queue
  }
}

// Simulasi Konsumsi
fetchAndGroupMetrics("https://api.internal/metrics").then(report => {
  console.log("Status Ingestion:", report.success);
  console.log("Metrik Asia East:", report.data["asia-east"]);
  console.log("Metrik Fallback:", report.data["uncategorized"]);
});
```

### 4. Visualisasi & Mental Model
Visualisasi siklus hidup peninjauan kode asinkron dan manajemen antrean eksekusi JavaScript:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        EVENT LOOP & ASYNC REVIEW AUDIT                 │
└────────────────────────────────────────────────────────────────────────┘

  [ Call Stack ]               [ Microtask Queue ]        [ Macrotask Queue ]
  ┌────────────────────────┐   ┌───────────────────────┐  ┌─────────────────┐
  │ fetchAndGroupMetrics() │   │ Promise.then() /      │  │ setTimeout()    │
  │ Object.groupBy()       │──>│ queueMicrotask()      │  │ (Abort Timer)   │
  │ clearTimeout()         │   │ (State Resolution)    │  │ (I/O Callback)  │
  └────────────────────────┘   └───────────────────────┘  └─────────────────┘
              │                            │                       │
              ▼                            ▼                       ▼
    [ Memory Sanitization ]      [ Defensive Assertions ]  [ Resource Disposal ]
    Pastikan Shape Konsisten     Nullish checks (??)       Clear Timer / Abort
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Conventional Comments dalam Review**: Gunakan label terstandar saat memberi komentar, misalnya `blocking:`, `nitpick:`, atau `question:` untuk memisahkan antara *bug* fatal dan preferensi minor.
- ✅ **Cegah Mutasi Implisit**: Wajibkan penggunaan `Array.prototype.toSorted()`, `toReversed()`, dan `toSpliced()` daripada metode mutatif klasik.
- ✅ **Gunakan Nullish Coalescing (`??`) Secara Sadar**: Jangan gunakan logical OR (`||`) untuk *default values* kecuali nilai `0`, `false`, dan `""` memang sengaja ingin dianggap invalid.
- ✅ **Defensive Terhadap Objek Polos**: Hindari `for...in` tanpa proteksi atau mutasi langsung struktur objek runtime yang menyebabkan V8 memicu *deoptimization* Hidden Class.
- ❌ **Jangan Review Hal yang Bisa Dilinter**: Jangan buang waktu engineer untuk mendiskusikan *semicolon*, *spacing*, atau urutan import. Otomatisasikan pada pipeline CI/CD via static analysis AST.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, identifikasi celah pada fungsi kalkulasi keranjang belanja yang memutasi array parameter input, dan ubah kodenya menggunakan metode imutabel ES2024.
2. Tambahkan proteksi *nullish handling* dan *AbortController timeout* pada fungsi *data fetching* asinkron buatan Anda di **Code Editor di bawah** untuk mencegah kebocoran *microtask*.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [MDN Web Docs: Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [V8 Dev: Fast Properties in V8 (Hidden Classes)](https://v8.dev/blog/fast-properties)
- [ECMAScript 2024 Language Specification](https://tc39.es/ecma262/2024/)