# Project 4: E-commerce Product Catalog & Multi-Filter

**Slug**: `project-ecommerce-filter` · **Level**: Advanced · **Waktu**: 2.5 Jam

## 🎯 Tujuan Pembelajaran
- Merancang pipeline pemfilteran multi-kriteria deklaratif berbasis fungsi predikat (*predicate composition*) untuk efisiensi traversal data.
- Mengimplementasikan *instant live search* berbasis teknik *debouncing* dengan pemahaman mendalam terhadap V8 Macrotask Queue dan lifecycle timer.
- Mengelola serialisasi dan deserialisasi state filter dua arah secara sinkron menggunakan API `URLSearchParams`.
- Menerapkan transformasi data non-mutatif modern ES2024 (`Array.prototype.toSorted`, `Object.groupBy`) untuk multi-sorting dan agregasi katalog.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Pembangunan katalog e-commerce skala produksi menuntut pemrosesan dataset katalog secara deterministik pada sisi klien (*client-side filtering/sorting*). Ketika memfilter dataset dengan ribuan item, pemanggilan `.filter()` berantai (`items.filter().filter().filter()`) memicu pembuatan intermediate array baru di memori Heap V8 pada setiap langkahnya, meningkatkan overhead *Garbage Collection* (GC) dan latensi eksekusi.

Pendekatan arsitektur yang optimal adalah **Predicate Composition Pipeline**. Seluruh kriteria (kategori, rentang harga, rating minimum, ketersediaan stok, dan pencarian teks) dikompilasi menjadi sekumpulan fungsi predikat `(item) => boolean`. Evaluasi dilakukan dalam satu putaran iterasi tunggal (*single-pass traversal*), memangkas kompleksitas alokasi memori dari $O(k \cdot N)$ menjadi $O(N)$ terhadap $k$ kriteria filter.

Pada pemrosesan teks pencarian interaktif (*live search*), setiap ketikan pengguna pada elemen input memicu *event listener*. Tanpa mitigasi, eksekusi filter pada dataset besar akan memblokir *Main Thread* (*event loop starvation*). Di sinilah fungsi **Debounce** diterapkan: menunda eksekusi komputasi filter hingga pengguna berhenti mengetik selama durasi jeda tertentu ($\Delta t$). Host API `setTimeout` mendaftarkan callback ke **Macrotask Queue**; setiap keystroke baru sebelum interval selesai akan membatalkan ID timer sebelumnya (`clearTimeout`), mencegah eksekusi berulang yang tidak diperlukan.

Untuk menjamin *shareability* dan *bookmarking*, state katalog harus disinkronkan secara bidireksional dengan URL via Web API `URLSearchParams`. Saat pengguna mengubah filter atau nomor halaman, state diubah menjadi query string terenkapsulasi (`?category=audio&minPrice=500000&sort=price_asc&page=2`). Saat aplikasi diinisialisasi ulang, query parameter diparsing dan divalidasi guna merehidrasi state memori internal.

### 2. Sintaks & Penggunaan Modern

Berikut adalah implementasi modul inti pipeline katalog dengan memanfaatkan fitur ES2024 (`toSorted`, `Object.groupBy`) dan implementasi debounce presisi tinggi:

```javascript
// Utilitas Debounce Asinkron berbasis Timer Macrotask
function debounce(fn, delayMs = 300) {
  let timerId = null;
  return function (...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, delayMs);
  };
}

// Pipeline Predicate Engine
const createFilterPipeline = (criteria) => {
  const predicates = [];

  if (criteria.category && criteria.category !== 'all') {
    predicates.push((p) => p.category === criteria.category);
  }

  if (typeof criteria.minPrice === 'number') {
    predicates.push((p) => p.price >= criteria.minPrice);
  }

  if (typeof criteria.maxPrice === 'number') {
    predicates.push((p) => p.price <= criteria.maxPrice);
  }

  if (typeof criteria.minRating === 'number') {
    predicates.push((p) => p.rating >= criteria.minRating);
  }

  if (criteria.inStockOnly === true) {
    predicates.push((p) => p.stock > 0);
  }

  if (criteria.searchQuery && criteria.searchQuery.trim() !== '') {
    const query = criteria.searchQuery.toLowerCase().trim();
    predicates.push((p) => 
      p.name.toLowerCase().includes(query) || 
      p.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Menyatukan semua predikat ke dalam single composite function
  return (product) => predicates.every((predicate) => predicate(product));
};
```

### 3. Studi Kasus Nyata: Mesin Katalog E-Commerce Terintegrasi

Contoh implementasi mesin katalog lengkap yang mengelola state filter, persistensi URL query, pemilahan non-mutatif ES2024, pagination, dan keranjang belanja:

```javascript
class ECommerceCatalogEngine {
  #products;
  #state = {
    category: 'all',
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    inStockOnly: false,
    searchQuery: '',
    sortBy: 'rating_desc',
    page: 1,
    pageSize: 2
  };
  #cart = new Map();

  constructor(products = []) {
    this.#products = Object.freeze([...products]);
  }

  // Sinkronisasi state dari URLSearchParams string
  syncFromQueryString(queryString) {
    const params = new URLSearchParams(queryString);
    this.#state = {
      ...this.#state,
      category: params.get('cat') ?? 'all',
      minPrice: params.has('minP') ? Number(params.get('minP')) : 0,
      maxPrice: params.has('maxP') ? Number(params.get('maxP')) : Infinity,
      minRating: params.has('rate') ? Number(params.get('rate')) : 0,
      inStockOnly: params.get('stock') === 'true',
      searchQuery: params.get('q') ?? '',
      sortBy: params.get('sort') ?? 'rating_desc',
      page: params.has('page') ? Math.max(1, Number(params.get('page'))) : 1
    };
  }

  // Serialisasi state ke format URL query string
  toQueryString() {
    const params = new URLSearchParams();
    if (this.#state.category !== 'all') params.set('cat', this.#state.category);
    if (this.#state.minPrice > 0) params.set('minP', String(this.#state.minPrice));
    if (this.#state.maxPrice !== Infinity) params.set('maxP', String(this.#state.maxPrice));
    if (this.#state.minRating > 0) params.set('rate', String(this.#state.minRating));
    if (this.#state.inStockOnly) params.set('stock', 'true');
    if (this.#state.searchQuery) params.set('q', this.#state.searchQuery);
    if (this.#state.sortBy !== 'rating_desc') params.set('sort', this.#state.sortBy);
    if (this.#state.page > 1) params.set('page', String(this.#state.page));
    return params.toString();
  }

  setFilter(updates) {
    this.#state = { ...this.#state, ...updates, page: 1 };
  }

  setPage(pageNumber) {
    this.#state.page = Math.max(1, pageNumber);
  }

  #getSorter(sortBy) {
    const collator = new Intl.Collator('id', { sensitivity: 'base' });
    switch (sortBy) {
      case 'price_asc': return (a, b) => a.price - b.price;
      case 'price_desc': return (a, b) => b.price - a.price;
      case 'name_asc': return (a, b) => collator.compare(a.name, b.name);
      case 'rating_desc':
      default: return (a, b) => b.rating - a.rating;
    }
  }

  // Eksekusi pipeline komputasi data
  computeView() {
    const isMatching = createFilterPipeline(this.#state);
    
    // Single-pass filter
    const filtered = this.#products.filter(isMatching);

    // ES2024: toSorted menghasilkan array baru tanpa mutasi dataset asli
    const sorted = filtered.toSorted(this.#getSorter(this.#state.sortBy));

    // Pagination slicing
    const totalItems = sorted.length;
    const totalPages = Math.ceil(totalItems / this.#state.pageSize) || 1;
    const currentPage = Math.min(this.#state.page, totalPages);
    const startIndex = (currentPage - 1) * this.#state.pageSize;
    const paginatedItems = sorted.slice(startIndex, startIndex + this.#state.pageSize);

    return {
      items: paginatedItems,
      metadata: {
        totalItems,
        totalPages,
        currentPage,
        pageSize: this.#state.pageSize
      }
    };
  }

  addToCart(productId, quantity = 1) {
    const product = this.#products.find((p) => p.id === productId);
    if (!product || product.stock < quantity) {
      throw new Error(`Stok tidak mencukupi untuk item id: ${productId}`);
    }
    const currentQty = this.#cart.get(productId) ?? 0;
    this.#cart.set(productId, currentQty + quantity);
  }

  getCartSummary() {
    let totalAmount = 0;
    const items = [];

    for (const [id, qty] of this.#cart.entries()) {
      const p = this.#products.find((item) => item.id === id);
      const subtotal = p.price * qty;
      totalAmount += subtotal;
      items.push({ id: p.id, name: p.name, qty, price: p.price, subtotal });
    }

    return { items, totalAmount };
  }
}

// ---------------- EXECUTION DEMO ----------------
const catalogData = [
  { id: 'P01', name: 'Keyboard Mekanikal TKL', category: 'electronics', price: 850000, rating: 4.8, stock: 12, tags: ['pc', 'gaming'] },
  { id: 'P02', name: 'Mouse Nirkabel Ergonomis', category: 'electronics', price: 450000, rating: 4.5, stock: 0, tags: ['office', 'wireless'] },
  { id: 'P03', name: 'Monitor 27 Inch 144Hz', category: 'electronics', price: 3200000, rating: 4.9, stock: 5, tags: ['monitor', 'gaming'] },
  { id: 'P04', name: 'Kopi Arabika Gayo 250g', category: 'food', price: 95000, rating: 4.7, stock: 40, tags: ['coffee', 'beverage'] },
  { id: 'P05', name: 'Botol Minum Termos 1L', category: 'lifestyle', price: 150000, rating: 4.2, stock: 25, tags: ['drinkware'] }
];

const catalog = new ECommerceCatalogEngine(catalogData);

// 1. Uji Sinkronisasi URL
console.log('--- Initial State via URL Query ---');
catalog.syncFromQueryString('cat=electronics&stock=true&sort=price_asc');
console.log('Current URL Query:', catalog.toQueryString());
console.log('Result Page 1:', catalog.computeView());

// 2. Simulasi Debounced Live Search
console.log('\n--- Debounced Search Emulation ---');
const triggerSearch = debounce((query) => {
  catalog.setFilter({ searchQuery: query });
  console.log(`Executed search: "${query}" -> Query String:`, catalog.toQueryString());
  console.log('View Output:', catalog.computeView());
}, 150);

triggerSearch('Mek');
triggerSearch('Mekanikal'); // Membatalkan pencarian 'Mek' sebelumnya

setTimeout(() => {
  // 3. Uji Cart Management
  console.log('\n--- Cart Management ---');
  catalog.addToCart('P01', 2);
  console.log('Cart State:', catalog.getCartSummary());

  // 4. ES2024: Object.groupBy untuk inventaris katalog
  const inventoryByCategory = Object.groupBy(catalogData, (p) => p.category);
  console.log('\n--- Grouped Inventory (ES2024) ---');
  console.log('Electronics count:', inventoryByCategory.electronics.length);
}, 200);
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               EVENT LOOP & MACROTASK QUEUE: DEBOUNCED SEARCH LIFECYCLE                  │
└────────────────────────────────────────────────────────────────────────────────────────┘

 [User Keystrokes]
   │ (t = 0ms)  Keystroke 'M'    ──> clearTimeout(null) ──> setTimeout(cb, 150ms) [Timer #1]
   │ (t = 40ms) Keystroke 'Me'   ──> clearTimeout(#1)   ──> setTimeout(cb, 150ms) [Timer #2]
   ▼ (t = 80ms) Keystroke 'Mek'  ──> clearTimeout(#2)   ──> setTimeout(cb, 150ms) [Timer #3]
 ────────────────────────────────────────────────────────────────────────────────────────
                                     Host Timer Phase
 ────────────────────────────────────────────────────────────────────────────────────────
 [Call Stack]           [Web APIs / Timers]           [Macrotask Queue]
   │                                                         │
   │ (Idle / Event Loop) ──> Timer #3 Expires (t = 230ms) ──> [ Callback(Timer #3) ]
   │                                                         │
   ▼ <─────────────── Event Loop Dequeues Callback <─────────┘
 [Execute Callback]
   │
   ├──> compilePredicates(state)
   ├──> catalogData.filter(compositePredicate)   ──> Single Pass O(N)
   ├──> filteredData.toSorted(comparator)        ──> ES2024 Non-Mutating
   └──> update URLSearchParams & Render View
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Predicate Composition**: Hindari method chaining `.filter()` beruntun pada dataset dinamis untuk mengeliminasi alokasi array perantara di V8 memory heap.
- ✅ **Gunakan `Intl.Collator` untuk Sorting Nama**: Native `Intl.Collator` menghasilkan pengurutan alfabet yang akurat berdasarkan lokalisasi (misal karakter beraksen) dibanding operator relasional `<` atau `>`.
- ✅ **Manfaatkan `toSorted()` ES2024**: Selalu gunakan `.toSorted()` dibanding `.sort()` agar data master produk tidak termutasi secara tidak sengaja (*in-place mutation hazard*).
- ❌ **Hindari Menyimpan Derived Data di State**: Jangan menyimpan `filteredProducts` atau `totalPages` di dalam state global; hitung nilai-nilai tersebut secara murni (*pure derived computation*) saat data dipanggil.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, tambahkan predikat rentang diskon (persentase minimum potongan harga) ke dalam fungsi `createFilterPipeline` dan sinkronkan parameter tersebut ke URL dengan kunci `discMin`.
2. Implementasikan pagination dinamis di **Code Editor di bawah** yang menghitung indeks offset secara akurat ketika ukuran halaman (`pageSize`) diubah oleh pengguna di tengah sesi browsing.

---

## 🔗 Referensi
- [MDN Web Docs: URLSearchParams API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [MDN Web Docs: Array.prototype.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [ECMAScript® 2024 Language Specification: Object.groupBy](https://tc39.es/ecma262/#sec-object.groupby)