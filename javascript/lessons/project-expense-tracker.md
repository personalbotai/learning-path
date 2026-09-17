# Project 2: Personal Expense Tracker & Analytics

**Slug**: `project-expense-tracker` · **Level**: Advanced · **Waktu**: 2.5 Jam

## 🎯 Tujuan Pembelajaran
- Mengembangkan engine state management transaksi yang immutable dengan dukungan operasi CRUD, filter multikriteria, dan pagination berbasis slicing memory-efficient.
- Menguasai teknik agregasi data finansial menggunakan `Array.prototype.reduce()` dan `Object.groupBy` (ES2024) dengan mitigasi floating-point precision error (sub-cent arithmetic).
- Membangun pipeline serialisasi/deserialisasi CSV & JSON robust lengkap dengan validasi skema runtime dan error-boundary saat sinkronisasi LocalStorage.
- Menghasilkan visualisasi analitik batang/lingkaran secara terprogram melalui SVG string generator deterministik.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Dalam arsitektur engine finansial berbasis web, integritas data adalah prioritas absolut. JavaScript mengeksekusi semua kalkulasi angka berbasis standar IEEE 754 double-precision floating point (64-bit float). Operasi aritmatika desimal langsung seperti `0.1 + 0.2` menghasilkan `0.30000000000000004`, yang berpotensi menyebabkan ketidaksesuaian saldo pada agregasi data berskala ribuan transaksi. Pola standar pada level *engine design* adalah menyimpan representasi nilai mata uang dalam satuan integer terkecil (misalnya *cents* atau sen) sebelum memformatnya kembali ke unit mata uang target saat presentasi.

Di balik layar, saat aplikasi melakukan sinkronisasi dengan `window.localStorage`, V8 Engine memindahkan struktur objek di memori *Heap* ke *Stack* dalam representasi UTF-16 encoded string secara synchronous (memblokir main thread). Serialisasi payload besar tanpa sanitasi dan validasi skema dapat memicu fatal parsing failure atau *prototype pollution*. Oleh karena itu, kita menerapkan pipeline validasi skema deterministik sebelum mutasi state lokal dan memanfaatkan `structuredClone()` untuk menjamin isolasi mutasi data (*immutability*).

Pipeline analitik mengandalkan kekuatan single-pass processing dengan `Array.prototype.reduce()` dan `Object.groupBy()` (standar ECMAScript 2024). Agregasi satu lintasan (*single-pass loop*) menjaga kompleksitas waktu tetap pada $O(n)$, menghindari overhead translasi multi-loop dari chaining `.filter().map().reduce()` yang boros alokasi array perantara (*garbage collection overhead*).

### 2. Sintaks & Penggunaan Modern
Implementasi modern memanfaatkan fitur ES2024 seperti `Object.groupBy`, default rest parameters, destructuring mendalam, serta class privat `#fields` untuk enkapsulasi state engine.

```javascript
// Validasi Skema & Model Transaksi
class TransactionEngine {
  #transactions = [];

  constructor(initialData = []) {
    this.#transactions = this.#validateAndNormalize(initialData);
  }

  // Sanitasi & Skema Validasi Runtime
  #validateAndNormalize(data) {
    if (!Array.isArray(data)) return [];
    return data.filter(item => {
      const isValidType = item.type === "INCOME" || item.type === "EXPENSE";
      const isValidAmount = typeof item.amount === "number" && Number.isFinite(item.amount) && item.amount > 0;
      const isValidDate = !isNaN(Date.parse(item.date));
      return item.id && item.category && isValidType && isValidAmount && isValidDate;
    }).map(t => ({
      ...t,
      // Normalisasi jumlah menjadi representasi integer (sen) untuk presisi
      amountInCents: Math.round(t.amount * 100)
    }));
  }

  // Mutasi Immutable
  addTransaction(payload) {
    const transaction = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      ...payload
    };
    const validated = this.#validateAndNormalize([transaction]);
    if (validated.length === 0) throw new Error("Format transaksi tidak valid");
    
    this.#transactions = [validated[0], ...this.#transactions];
    return validated[0];
  }

  // Agregasi Kompleks Single-Pass ES2024
  getAnalytics() {
    const summary = this.#transactions.reduce((acc, curr) => {
      if (curr.type === "INCOME") {
        acc.totalIncomeInCents += curr.amountInCents;
      } else {
        acc.totalExpenseInCents += curr.amountInCents;
      }
      return acc;
    }, { totalIncomeInCents: 0, totalExpenseInCents: 0 });

    const balanceInCents = summary.totalIncomeInCents - summary.totalExpenseInCents;

    // Pengelompokan Kategori berbasis ES2024 Object.groupBy
    const groupedByCategory = Object.groupBy(this.#transactions, (t) => t.category);
    
    const categoryBreakdown = Object.entries(groupedByCategory).reduce((acc, [cat, items]) => {
      acc[cat] = items.reduce((sum, item) => sum + item.amountInCents, 0) / 100;
      return acc;
    }, {});

    return {
      totalIncome: summary.totalIncomeInCents / 100,
      totalExpense: summary.totalExpenseInCents / 100,
      netBalance: balanceInCents / 100,
      categoryBreakdown
    };
  }

  // Filter & Pagination Query
  query({ category, type, page = 1, pageSize = 10 } = {}) {
    let filtered = this.#transactions;

    if (category) filtered = filtered.filter(t => t.category === category);
    if (type) filtered = filtered.filter(t => t.type === type);

    const totalRecords = filtered.length;
    const totalPages = Math.ceil(totalRecords / pageSize);
    const offset = (page - 1) * pageSize;
    const records = filtered.slice(offset, offset + pageSize);

    return { page, pageSize, totalRecords, totalPages, data: records };
  }
}

// Uji Coba Eksekusi
const engine = new TransactionEngine();
engine.addTransaction({ category: "Gaji", type: "INCOME", amount: 15000000 });
engine.addTransaction({ category: "Sewa", type: "EXPENSE", amount: 3500000 });
engine.addTransaction({ category: "Makan", type: "EXPENSE", amount: 1200000 });

console.log("Ringkasan Keuangan:", engine.getAnalytics());
console.log("Query Paginated:", engine.query({ page: 1, pageSize: 2 }));
```

### 3. Studi Kasus Nyata
Sistem analitik keuangan personal memerlukan modul lengkap: sinkronisasi Storage, Parsing/Export CSV deterministik, dan Generator Grafik Batang SVG murni tanpa library eksternal.

```javascript
// Storage & Visualization Service
class ExpenseAnalyticsService {
  #storageKey = "EXPENSE_TRACKER_STORE_V1";

  // Mock Adapter LocalStorage untuk Lingkungan Node/Browser
  #storage = globalThis.localStorage ?? {
    #mockMap: new Map(),
    getItem(key) { return this.#mockMap.get(key) || null; },
    setItem(key, val) { this.#mockMap.set(key, String(val)); }
  };

  save(transactions) {
    try {
      const serialized = JSON.stringify(transactions);
      this.#storage.setItem(this.#storageKey, serialized);
      return true;
    } catch (err) {
      console.error("Gagal menyimpan ke LocalStorage:", err);
      return false;
    }
  }

  load() {
    try {
      const raw = this.#storage.getItem(this.#storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  // Export CSV dengan RFC 4180 Escaping
  exportToCSV(transactions) {
    const headers = ["ID", "Category", "Type", "Amount", "Date"];
    const rows = transactions.map(t => [
      `"${t.id}"`,
      `"${t.category.replace(/"/g, '""')}"`,
      t.type,
      (t.amountInCents / 100).toFixed(2),
      `"${t.date}"`
    ]);

    return [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  }

  // Deserialisasi CSV Robust
  importFromCSV(csvString) {
    const lines = csvString.trim().split("\n");
    if (lines.length <= 1) return [];

    const [, ...dataRows] = lines;
    return dataRows.map(row => {
      // Regex parsing CSV dengan flag ES2024
      const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      const clean = cols.map(c => c.replace(/^"|"$/g, "").replace(/""/g, '"'));
      
      return {
        id: clean[0],
        category: clean[1],
        type: clean[2],
        amount: parseFloat(clean[3]),
        date: clean[4]
      };
    });
  }

  // Generator Grafik Batang SVG Deklaratif
  generateBarChartSVG(categoryBreakdown, width = 500, height = 200) {
    const entries = Object.entries(categoryBreakdown);
    if (entries.length === 0) return `<svg width="${width}" height="${height}"></svg>`;

    const maxVal = Math.max(...entries.map(([, val]) => val), 1);
    const barWidth = Math.floor((width - 40) / entries.length) - 10;
    const chartHeight = height - 40;

    const barsSVG = entries.map(([category, value], idx) => {
      const barH = Math.round((value / maxVal) * chartHeight);
      const x = 30 + idx * (barWidth + 10);
      const y = height - barH - 20;

      return `
        <g class="bar-group" data-category="${category}">
          <rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" fill="#3b82f6" rx="4"/>
          <text x="${x + barWidth / 2}" y="${height - 5}" text-anchor="middle" font-size="10">${category}</text>
          <text x="${x + barWidth / 2}" y="${y - 5}" text-anchor="middle" font-size="10">${value}</text>
        </g>
      `;
    }).join("");

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <style>text { font-family: sans-serif; fill: #475569; }</style>
        <line x1="20" y1="${height - 20}" x2="${width - 10}" y2="${height - 20}" stroke="#cbd5e1" stroke-width="1"/>
        ${barsSVG}
      </svg>
    `.trim();
  }
}

// Uji Alur Pipeline Komplit
const service = new ExpenseAnalyticsService();
const sampleData = [
  { id: "tx-1", category: "Investasi", type: "EXPENSE", amount: 2000000, date: "2024-03-01T00:00:00.000Z", amountInCents: 200000000 },
  { id: "tx-2", category: "Belanja", type: "EXPENSE", amount: 750000, date: "2024-03-02T00:00:00.000Z", amountInCents: 75000000 },
  { id: "tx-3", category: "Freelance", type: "INCOME", amount: 5000000, date: "2024-03-03T00:00:00.000Z", amountInCents: 500000000 }
];

service.save(sampleData);
const loadedData = service.load();
console.log("Data Berhasil Dimuat dari Storage:", loadedData.length, "item.");

const csvExported = service.exportToCSV(loadedData);
console.log("--- HASIL EKSPOR CSV ---");
console.log(csvExported);

const importedTransactions = service.importFromCSV(csvExported);
console.log("Hasil Parsing CSV:", importedTransactions);

const chartSVG = service.generateBarChartSVG({ Investasi: 2000000, Belanja: 750000 });
console.log("--- GENERATED SVG STRING ---");
console.log(chartSVG);
```

### 4. Visualisasi & Mental Model

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                   ARSITEKTUR PIPELINE DATA EXPENSE TRACKER                      │
└──────────────────────────────────────────────────────────────────────────────────┘
                                                                                    
   [ Input Data / Form / CSV ]                                                      
                │                                                                   
                ▼                                                                   
   ┌────────────────────────┐                                                       
   │ Runtime Schema Parsing │ ─── (Invalid) ───> [ Fallback / Error Boundary ]      
   └────────────────────────┘                                                       
                │ (Valid Object)                                                    
                ▼                                                                   
   ┌────────────────────────────────────────┐                                       
   │ Integer Unit Conversion (Sub-cents)    │ ───> Menghindari IEEE 754 precision loss
   └────────────────────────────────────────┘                                       
                │                                                                   
                ├───────────────────────────────────────┐                           
                ▼                                       ▼                           
   ┌────────────────────────┐             ┌───────────────────────────┐             
   │ LocalStorage Engine    │             │ Aggregate Analytics Engine│             
   │ (JSON.stringify sync)  │             │ (Single-pass reduce &     │             
   └────────────────────────┘             │  Object.groupBy)          │             
                │                         └───────────────────────────┘             
                ▼                                       │                           
   [ Storage Persistence ]                              ▼                           
                                          ┌───────────────────────────┐             
                                          │ Deterministic SVG Projector│            
                                          └───────────────────────────┘             
                                                        │                           
                                                        ▼                           
                                                [ Chart Viewport ]                  
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Format Integer terkecil (Sub-Cents)**: Hitung nominal mata uang selalu dalam bentuk sen (`amount * 100`) saat proses kalkulasi di `reduce()` untuk mencegah akumulasi deviasi desimal floating-point.
- ✅ **Single-Pass Aggregation**: Hindari chaining filter bertingkat (`array.filter().filter().map().reduce()`) untuk dataset analitik besar. Satukan akumulasi metrik finansial dalam satu pemanggilan `.reduce()`.
- ✅ **Sanitasi CSV Escaping**: Bungkus selalu data kategori dan ID dengan double quotes serta lakukan sanitasi escape quotes (`" -> ""`) sesuai standar RFC 4180 untuk mencegah CSV Injection.
- ❌ **Hindari Mutasi State Asli Secara Langsung**: Mengubah properti objek transaksi di dalam array tanpa membuat salinan baru akan merusak pelacakan perubahan referensi state dan menimbulkan *side-effects* yang sulit didebug.

---

## ✍️ Latihan Mandiri
1. Modifikasi class `TransactionEngine` pada **Code Editor di bawah** untuk menambahkan metode `exportMonthlyReport(year, month)` yang memanfaatkan `Object.groupBy` guna mengelompokkan transaksi harian dan menghitung saldo *running-balance* dari hari ke hari secara kumulatif.
2. Tambahkan parser validasi skema berbasis skema tipe ketat pada **Code Editor di bawah** untuk mendeteksi transaksi duplikat saat mengimpor CSV berdasarkan kombinasi unik: `hash(category + date + amount)`.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN Web Docs: Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
- [ECMAScript 2024 Language Specification](https://tc39.es/ecma262/2024/)