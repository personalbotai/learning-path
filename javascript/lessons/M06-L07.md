# Project 1: Modern To-Do List App (LocalStorage + ESM)

**Slug**: `project-todo-list-app` · **Level**: Intermediate · **Waktu**: 45 Menit

## 🎯 Tujuan Pembelajaran
- Mengimplementasikan pola arsitektur Model-View-Controller (MVC) terpisah menggunakan ES Modules (ESM) dan prinsip *Single Source of Truth* (SSOT).
- Mengoptimalkan performa manipulasi DOM dengan *Event Delegation* memanfaatkan fase *event bubbling* guna menekan alokasi memori pada V8 engine.
- Membangun persistence layer `localStorage` yang aman terhadap *quota limits* dan *parse failure* menggunakan serialisasi data yang terisolasi serta mutasi *immutable* (ES2023/ES2024 array methods).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Arsitektur aplikasi web modern vanilla JavaScript menuntut pemisahan tanggung jawab yang tegas (*separation of concerns*). Dalam To-Do List App tingkat produksi, kita menerapkan variasi MVC: **Model** mengelola *state* dan sinkronisasi storage, **View** menangani *rendering* DOM murni dan mendengarkan interaksi pengguna, sedangkan **Controller** menjadi orkestrator yang mengikat siklus hidup data dan presentasi.

Di balik layar, `localStorage` mengeksekusi operasi I/O secara sinkron pada *main thread*. Setiap data yang disimpan dialokasikan sebagai string UTF-16 pada *V8 heap memory*. Ketika objek JavaScript diserialisasi via `JSON.stringify()`, *engine* memetakan struktur referensi objek menjadi sekuens string. Kegagalan umum terjadi saat serialisasi state berukuran besar atau ketika kuota browser (~5MB) terpenuhi, yang memicu `QuotaExceededError`. Oleh karena itu, persistence layer wajib membungkus operasi baca/tulis dalam blok `try...catch` serta memvalidasi skema data saat deserialisasi (`JSON.parse()`).

```text
[User Interaction] 
       │
       ▼ (Event Bubbling)
[DOM Event Listener (Event Delegation)] ───► [Controller Action]
                                                    │
                                                    ▼
[View Update (Re-render)] ◄─── [State Store] ◄─── [Model (Immutable State Mutation)]
                                    │
                                    ▼ (JSON Serialization)
                             [localStorage (UTF-16)]
```

Dari perspektif performa DOM, menambahkan *event listener* pada setiap elemen list item (`<li>`) secara individual menyebabkan fragmentasi memori dan membebani *Garbage Collector* V8 saat elemen dihapus atau dibuat ulang secara dinamis. Pola **Event Delegation** mengatasi hal ini dengan menempatkan satu *event listener* pada elemen induk (`<ul>`). Dengan memanfaatkan metode `Element.prototype.closest()`, engine melintasi *DOM tree* ke atas dari `event.target` untuk menemukan konteks elemen interaktif target secara presisi.

### 2. Sintaks & Penggunaan Modern
Pengelolaan state modern wajib menerapkan imutabilitas. Standar ECMAScript menyediakan metode manipulasi array non-destruktif seperti `Array.prototype.with()`, `Array.prototype.toSpliced()`, dan `structuredClone()`. Fitur-fitur ini memastikan referensi state lama tidak termutasi langsung di memori, mencegah efek samping (*side-effects*) dan mempermudah pelacakan perubahan.

```javascript
// Demonstrasi Immutability Core Engine & Event Hub (ES2024)
class TodoModel {
  #todos = [];
  #storageKey = 'todos_v1_store';

  constructor() {
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.#storageKey);
      this.#todos = raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Storage Read Error, fallback to memory:', err);
      this.#todos = [];
    }
  }

  #saveToStorage() {
    try {
      localStorage.setItem(this.#storageKey, JSON.stringify(this.#todos));
    } catch (err) {
      console.error('Storage Quota Exceeded or Serialization Error:', err);
    }
  }

  getTodos(filter = 'all') {
    const list = structuredClone(this.#todos);
    return list.filter(item => {
      if (filter === 'active') return !item.completed;
      if (filter === 'completed') return item.completed;
      return true;
    });
  }

  addTodo(title) {
    if (!title?.trim()) return false;
    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: Date.now()
    };
    this.#todos = [...this.#todos, newTodo];
    this.#saveToStorage();
    return newTodo;
  }

  toggleTodo(id) {
    const index = this.#todos.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    // ES2023 Array.prototype.with untuk mutasi immutable spesifik index
    const target = this.#todos[index];
    this.#todos = this.#todos.with(index, { ...target, completed: !target.completed });
    this.#saveToStorage();
    return true;
  }

  deleteTodo(id) {
    const nextTodos = this.#todos.filter(t => t.id !== id);
    if (nextTodos.length === this.#todos.length) return false;
    this.#todos = nextTodos;
    this.#saveToStorage();
    return true;
  }
}

// Simulasi Environment Browser Storage untuk Validasi Run-time
const storageMock = new Map();
globalThis.localStorage = {
  getItem: (key) => storageMock.get(key) || null,
  setItem: (key, val) => storageMock.set(key, String(val)),
  removeItem: (key) => storageMock.delete(key)
};

const store = new TodoModel();
const item1 = store.addTodo('Implementasi ESM Architecture');
const item2 = store.addTodo('Tulis Unit Test State');
console.log('Semua Todos:', store.getTodos('all'));

store.toggleTodo(item1.id);
console.log('Active Filter:', store.getTodos('active'));
console.log('Completed Filter:', store.getTodos('completed'));
```

### 3. Studi Kasus Nyata
Berikut implementasi lengkap arsitektur View & Controller dengan *Event Delegation*, filter interaktif, serta manajemen atribut Accessibility (`aria-label`, `aria-checked`, `role="listitem"`).

```javascript
// Controller & View Architecture Layer
class TodoView {
  #listElement;
  #inputElement;
  #filterButtons;

  constructor(rootContainer) {
    this.root = rootContainer;
    this.#renderLayout();
    this.#listElement = this.root.querySelector('#todo-list');
    this.#inputElement = this.root.querySelector('#todo-input');
    this.#filterButtons = this.root.querySelectorAll('[data-filter]');
  }

  #renderLayout() {
    this.root.innerHTML = `
      <section class="todo-app" aria-label="Todo List Application">
        <header>
          <form id="todo-form">
            <input type="text" id="todo-input" placeholder="Tulis task baru..." aria-label="Input todo baru" required />
            <button type="submit" aria-label="Tambahkan todo">Tambah</button>
          </form>
        </header>
        <nav class="filters" aria-label="Filter status task">
          <button data-filter="all" class="active">Semua</button>
          <button data-filter="active">Aktif</button>
          <button data-filter="completed">Selesai</button>
        </nav>
        <ul id="todo-list" role="list" aria-live="polite"></ul>
      </section>
    `;
  }

  renderList(todos) {
    if (todos.length === 0) {
      this.#listElement.innerHTML = `<li class="empty-state">Tidak ada task untuk ditampilkan.</li>`;
      return;
    }

    // Sanitasi sederhana dan konstruksi HTML string terkompilasi
    this.#listElement.innerHTML = todos.map(todo => `
      <li data-id="${todo.id}" role="listitem" class="${todo.completed ? 'completed' : ''}">
        <input 
          type="checkbox" 
          class="toggle-action" 
          ${todo.completed ? 'checked' : ''} 
          aria-label="Tandai status ${todo.title}"
        />
        <span class="todo-title">${this.#escapeHTML(todo.title)}</span>
        <button class="delete-action" aria-label="Hapus ${todo.title}">✕</button>
      </li>
    `).join('');
  }

  #escapeHTML(str) {
    return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  }

  bindSubmit(handler) {
    this.root.querySelector('#todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const val = this.#inputElement.value;
      if (handler(val)) this.#inputElement.value = '';
    });
  }

  // Event Delegation Terpusat
  bindItemEvents(onToggle, onDelete) {
    this.#listElement.addEventListener('click', (e) => {
      const itemEl = e.target.closest('li[data-id]');
      if (!itemEl) return;
      const { id } = itemEl.dataset;

      if (e.target.matches('.toggle-action')) {
        onToggle(id);
      } else if (e.target.matches('.delete-action')) {
        onDelete(id);
      }
    });
  }

  bindFilter(handler) {
    this.root.querySelector('.filters').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      this.#filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      handler(btn.dataset.filter);
    });
  }
}

// Orchestrator (Controller)
class TodoController {
  #model;
  #view;
  #currentFilter = 'all';

  constructor(model, view) {
    this.#model = model;
    this.#view = view;

    this.#view.bindSubmit((title) => this.#handleAdd(title));
    this.#view.bindItemEvents(
      (id) => this.#handleToggle(id),
      (id) => this.#handleDelete(id)
    );
    this.#view.bindFilter((filter) => this.#handleFilter(filter));

    this.#syncView();
  }

  #syncView() {
    const data = this.#model.getTodos(this.#currentFilter);
    this.#view.renderList(data);
  }

  #handleAdd(title) {
    const success = this.#model.addTodo(title);
    if (success) this.#syncView();
    return Boolean(success);
  }

  #handleToggle(id) {
    if (this.#model.toggleTodo(id)) this.#syncView();
  }

  #handleDelete(id) {
    if (this.#model.deleteTodo(id)) this.#syncView();
  }

  #handleFilter(filter) {
    this.#currentFilter = filter;
    this.#syncView();
  }
}

console.log('Arsitektur MVC To-Do List siap diinisialisasi pada DOM Container.');
```

### 4. Visualisasi & Mental Model
```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           EVENT DELEGATION PATTERN                          │
│                                                                             │
│  [ DOM: <ul id="todo-list"> ]  ◄── [ 1 Event Listener Terpusat ]           │
│           │                                                                 │
│           ├── <li data-id="1"> ──► [ Event Bubble UP ]                      │
│           │      ├── <input type="checkbox" class="toggle-action" />        │
│           │      └── <button class="delete-action">✕</button>               │
│           └── <li data-id="2"> ──► [ Event Bubble UP ]                      │
│                  └── ...                                                    │
│                                                                             │
│  e.target.closest('li[data-id]') ──► Resolusi Node & Ekstraksi Data ID      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `crypto.randomUUID()`**: Hindari penggunaan `Date.now()` atau `Math.random()` murni sebagai generator primary key ID karena risiko kolisi data pada eksekusi konkuren dalam milidetik yang sama.
- ✅ **Defensif terhadap State Deserialization**: Selalu validasi kembalian `JSON.parse()` dengan fallback array kosong (`[]`) guna mencegah *type error* (seperti `TypeError: todos.filter is not a function`) jika storage termutasi oleh script eksternal.
- ✅ **Aksesibilitas Semantik (a11y)**: Gunakan `aria-live="polite"` pada container list dinamis agar screen reader otomatis mengumumkan penambahan atau penghapusan task tanpa memotong interaksi pengguna yang sedang berjalan.
- ❌ **Anti-Pattern (Direct In-Memory Mutation)**: Melakukan modifikasi array langsung via `todos[index].completed = !todos[index].completed` tanpa cloning. Hal ini merusak prediktabilitas state dan menyulitkan implementasi fitur lanjutan seperti *Undo/Redo History Stack*.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, modifikasi kelas `TodoModel` untuk menambahkan metode `clearCompleted()` yang menghapus seluruh task berstatus selesai secara sekaligus menggunakan immutable filtering.
2. Pada **Code Editor di bawah**, tambahkan fitur *Keyboard Accessibility*: dengarkan event `keydown` (tombol `Escape`) saat pengguna sedang mengedit task untuk membatalkan proses input secara instan.

---

## 🔗 Referensi
- [MDN Web Docs: Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [MDN Web Docs: Web Storage API & Storage Quota](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [ECMAScript 2024: Change Array by Copy Specification](https://tc39.es/ecma262/#sec-array.prototype.with)