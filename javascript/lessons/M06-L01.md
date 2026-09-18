# DOM Manipulation Dasar & Efisien

**Slug**: `dom-manipulation-dasar` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Memahami arsitektur DOM Tree, perbedaan Node vs Element, serta representasi internal objek DOM pada memori engine browser.
- Menguasai metode seleksi dan manipulasi struktural modern (`append`, `prepend`, `replaceWith`, `remove`, `classList`, dan `dataset`) secara deklaratif.
- Mengimplementasikan teknik batching mutasi DOM menggunakan `DocumentFragment` guna mengeliminasi Layout Thrashing dan siklus Reflow/Repaint berulang.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
*Document Object Model* (DOM) adalah antarmuka pemrograman berbasis pohon (*tree representation*) yang merepresentasikan dokumen HTML sebagai simpul (*nodes*). Di balik layar, engine browser (seperti Blink pada Chromium atau WebKit pada Safari) memetakan elemen C++ internal ke dalam *V8 JavaScript Heap* melalui *DOM wrappers*. Setiap kali JavaScript berinteraksi dengan node DOM, engine melakukan *cross-context call* antara V8 VM dan internal layout engine, yang memiliki *overhead* komputasi tersendiri.

Secara struktural, setiap simpul dalam DOM diturunkan dari interface dasar `EventTarget` ➔ `Node` ➔ `Element` ➔ `HTMLElement`. Perbedaan fundamental terletak pada cakupannya: `Node` mencakup elemen HTML, simpul teks (*text nodes*), dan komentar, sedangkan `Element` hanya merepresentasikan tag HTML yang memiliki atribut serta hierarki visual. 

```text
EventTarget
   └── Node (TextNode, Comment, Element)
         └── Element
               └── HTMLElement (HTMLDivElement, HTMLButtonElement, etc.)
```

Saat melakukan seleksi elemen:
- `getElementById` mengembalikan referensi langsung (*live object lookup*) via internal hash table browser, menjadikannya operasi $O(1)$ tercepat.
- `querySelector` dan `querySelectorAll` mem-parsing CSS selector string via selector engine (seperti *lib/selectors* di Blink). `querySelectorAll` menghasilkan `NodeList` bersifat **statis** (*snapshot*), bukan *live collection* seperti `getElementsByClassName` (yang menghasilkan `HTMLCollection`). Snapshot statis lebih aman dari mutasi tak terduga (*side-effects*) selama iterasi loop.

Setiap mutasi pada pohon DOM aktif berpotensi memicu *Critical Rendering Pipeline*:
1. **Recalculate Style**: Menghitung ulang aturan CSS yang terdampak.
2. **Layout (Reflow)**: Menghitung geometri fisik (posisi $X, Y$, lebar, tinggi) setiap elemen.
3. **Paint (Repaint)**: Mengisi piksel warna pada layer raster.
4. **Composite**: Menggabungkan layer visual ke layar melalui GPU.

**Layout Thrashing** terjadi ketika JavaScript membaca properti geometri (misalnya `offsetHeight`, `getBoundingClientRect()`) segera setelah menulis mutasi DOM, memaksa engine melakukan sinkronisasi layout secara instan (*Forced Synchronous Layout*).

### 2. Sintaks & Penggunaan Modern
JavaScript modern menyediakan API manipulasi DOM yang fleksibel, menggantikan metode lama seperti `appendChild` atau `setAttribute('class', ...)` yang kaku.

```javascript
// Simulasi lingkungan DOM modern via standar Web API
const container = document.createElement('section');
container.id = 'app-root';

// 1. Pembuatan dan Konfigurasi Elemen Modern
const card = document.createElement('article');
card.classList.add('card', 'card--highlighted');

// Menggunakan Dataset API (otomatis memetakan atribut data-* ke camelCase)
card.dataset.userId = 'usr_9901';
card.dataset.role = 'admin';
card.dataset.isActive = 'true';

// 2. Manipulasi Isi dan Tree secara Deklaratif
const title = document.createElement('h2');
title.textContent = 'Profil Pengguna';

const description = document.createElement('p');
description.textContent = 'Staff Engineer di Ekosistem JavaScript Modern.';

// Mutasi multi-node sekaligus menggunakan append()
card.append(title, description);
container.append(card);

// 3. Modifikasi Status Kelas melalui classList API
card.classList.toggle('card--active', true); // Memaksa penambahan
const hasHighlight = card.classList.contains('card--highlighted');

// 4. Pembacaan dataset
console.log(`User ID: ${card.dataset.userId}`); // Output: usr_9901
console.log(`Class Active: ${hasHighlight}`);   // Output: true
console.log(`Outer HTML: ${container.outerHTML}`);
```

### 3. Studi Kasus Nyata
**Kasus**: Merender daftar transaksi berjumlah 1.000 item secara dinamis tanpa membekukan thread antarmuka (*UI jank*). Jika kita melakukan `container.appendChild()` sebanyak 1.000 kali di dalam perulangan, browser akan memicu 1.000 kali pemeriksaan layout parsial.

Solusi: Menggunakan `DocumentFragment`. Objek ini adalah simpul DOM minimal tanpa *parent* yang hidup murni di memori (*in-memory DOM*). Menyisipkan *fragment* ke pohon DOM aktif hanya memicu **1 kali siklus Reflow/Paint**.

```javascript
// Dataset simulasi
const transactions = Array.from({ length: 5 }, (_, i) => ({
  id: `tx_${i + 1}`,
  amount: (i + 1) * 150000,
  type: i % 2 === 0 ? 'credit' : 'debit',
  description: `Transaksi Komputasi #${i + 1}`
}));

function renderTransactionList(rootElement, items) {
  // Buat DocumentFragment virtual di memori
  const fragment = document.createDocumentFragment();

  for (const item of items) {
    const row = document.createElement('div');
    row.classList.add('tx-item', `tx-item--${item.type}`);
    row.dataset.txId = item.id;

    const label = document.createElement('span');
    label.classList.add('tx-label');
    label.textContent = item.description;

    const value = document.createElement('span');
    value.classList.add('tx-amount');
    // Format mata uang lokal Indonesia
    value.textContent = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(item.amount);

    row.append(label, value);
    fragment.append(row); // Mutasi terjadi murni di memori, zero Reflow cost
  }

  // 1 kali reflow & repaint ke active tree
  rootElement.replaceChildren(fragment);
}

// Inisialisasi
const listContainer = document.createElement('div');
listContainer.id = 'transaction-feed';
renderTransactionList(listContainer, transactions);

console.log(`Jumlah node terpasang: ${listContainer.children.length}`);
console.log(`Item Pertama: ${listContainer.firstElementChild.outerHTML}`);
```

### 4. Visualisasi & Mental Model

Perbandingan Pipeline Mutasi DOM Naif vs In-Memory Fragment Batching:

```text
Mutasi Naif (Looping append langsung ke DOM Tree):
┌────────────────┐      ┌─────────────────────────┐      ┌────────┐
│ DOM Mutation 1 │ ───> │ Recalc Style ──> Layout │ ───> │ Paint  │
└────────────────┘      └─────────────────────────┘      └────────┘
┌────────────────┐      ┌─────────────────────────┐      ┌────────┐
│ DOM Mutation 2 │ ───> │ Recalc Style ──> Layout │ ───> │ Paint  │ (Thrashing!)
└────────────────┘      └─────────────────────────┘      └────────┘
                                   ...
                                   
Optimasi DocumentFragment (In-Memory Batching):
┌──────────────────────────────┐
│ [In-Memory Heap V8]          │
│ Element 1 ─┐                 │
│ Element 2 ─┼─> Fragment Node │
│ Element N ─┘                 │
└──────────────┬───────────────┘
               │ 1x Single Append
               ▼
┌─────────────────────────────────────────────────────────────────┐
│ Active DOM Tree: [Recalculate Style] ──> [Layout] ──> [Paint]   │ (1x Reflow)
└─────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `DocumentFragment` atau `replaceChildren()`**: Kelompokkan mutasi besar ke dalam satu operasi atomik untuk meminimalkan beban komputasi rendering engine.
- ✅ **Manfaatkan `dataset` untuk State Metadata**: Hindari modifikasi properti non-standar langsung pada objek instance DOM; gunakan atribut standar `data-*` yang diakses via `element.dataset`.
- ✅ **Prioritaskan `element.classList` dibanding `className`**: Metode `add`, `remove`, `toggle`, dan `contains` memanipulasi token kelas secara presisi tanpa risiko *string concatenation bug*.
- ❌ **Hindari Forced Synchronous Layout**: Jangan membaca properti geometri (`offsetHeight`, `clientWidth`, `scrollTop`) tepat setelah melakukan penulisan DOM dalam loop yang sama. Pisahkan fase *read* dan *write*.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buat sebuah fungsi `generateProductCards(products)` yang menerima array objek produk `{ id, name, price, inStock }`. Render daftar tersebut menggunakan `DocumentFragment`, sematkan `data-product-id`, serta terapkan kelas visual `.out-of-stock` secara kondisional menggunakan `classList.toggle()`.
2. Lakukan eksperimen di **Code Editor di bawah**: Bandingkan pembersihan elemen kontainer antara menetapkan `container.innerHTML = ''` dengan metode modern `container.replaceChildren()`, kemudian amati struktur DOM node yang dihasilkan.

---

## 🔗 Referensi
- [MDN Web Docs: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [WHATWG DOM Living Standard: Interface DocumentFragment](https://dom.spec.whatwg.org/#interface-documentfragment)
- [Google Web Fundamentals: Avoid Large, Complex Layouts and Layout Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)