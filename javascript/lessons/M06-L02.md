# Events: Handling dan Delegasi

**Slug**: `events-handling-delegasi` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Memahami siklus hidup dan 3 fase propagasi event DOM (*Capturing*, *Target*, *Bubbling*) serta mekanisme kontrol eksekusinya.
- Menguasai parameter `AddEventListenerOptions` modern (`capture`, `once`, `passive`, `signal`) untuk optimasi performa *rendering engine* dan manajemen memori.
- Mengimplementasikan pola arsitektur *Event Delegation* menggunakan `Element.prototype.closest()` untuk menangani ribuan elemen dinamis secara efisien tanpa *memory leak*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Sistem event pada browser bekerja sebagai jembatan asinkron antara antarmuka pengguna (C++ rendering engine) dan V8 JavaScript runtime. Ketika interaksi fisik (seperti klik mouse) terjadi di tingkat sistem operasi, browser *browser kernel* membuat instance objek `UIEvent` dan mengirimkannya ke pohon DOM melalui siklus propagasi 3 fase terstruktur:

1. **Capturing Phase (`eventPhase: 1`)**: Event ditransmisikan dari root teratas (`Window` -> `Document` -> `<html>` -> `<body>`) turun menyusuri hierarki DOM menuju *target node*.
2. **Target Phase (`eventPhase: 2`)**: Event mencapai elemen persis tempat interaksi terjadi (`event.target`).
3. **Bubbling Phase (`eventPhase: 3`)**: Event memantul kembali ke atas dari *target node* menuju ancestor tertinggi (`Window`).

Secara default, `addEventListener` mendaftarkan *handler* pada *bubbling phase*. Jika kita mengikat ribuan listener langsung ke ribuan node anak (misalnya 10.000 baris tabel), V8 engine terpaksa mengalokasikan 10.000 closure function references pada V8 Heap Memory, sekaligus mendaftarkan C++ DOM wrappers yang besar. Ini memicu lonjakan konsumsi RAM dan memperlambat *Garbage Collection* (GC).

Solusi arsitekturalnya adalah **Event Delegation**: memasang satu listener tunggal pada elemen *ancestor* (parent) dan membaca `event.target` saat event menggelembung (*bubbles up*).

```text
[Window] ──────── (1. Capturing Phase) ────────> [Parent] ──> [Target Element]
   │                                                                 │
   └──────────── <─── (3. Bubbling Phase) ─────── [Parent] <─────────┘
                                                (2. Target Phase)
```

Untuk mengontrol alur ini, JavaScript menyediakan tiga metode krusial:
- `event.stopPropagation()`: Menghentikan perambatan event ke node berikutnya (baik saat capture maupun bubble), namun listener lain pada node yang sama tetap dieksekusi.
- `event.stopImmediatePropagation()`: Menghentikan perambatan dan langsung memblokir eksekusi listener lain yang terdaftar pada elemen yang sama.
- `event.preventDefault()`: Membatalkan perilaku default browser (seperti navigasi tautan `<a>` atau submit `<form>`) tanpa menghentikan propagasi event.

### 2. Sintaks & Penggunaan Modern
ECMAScript dan DOM Standard modern menyediakan opsi konfigurasi tingkat lanjut melalui parameter ketiga `addEventListener(type, listener, options)`:

- `passive: true`: Memberi tahu browser bahwa handler **tidak akan** memanggil `preventDefault()`. Ini memungkinkan *Compositor Thread* langsung memproses *scrolling* atau *touch gesture* secara instan tanpa menunggu V8 mengeksekusi JavaScript (mencegah *jank* UI).
- `once: true`: Otomatis mencopot (*clean up*) listener setelah dieksekusi 1 kali, mencegah kebocoran memori.
- `signal: AbortSignal`: Mengintegrasikan pembatalan listener secara deklaratif via `AbortController`.

```javascript
// Demonstrasi Propagasi dan Penggunaan Event Target Natively
// (Dapat dijalankan langsung di Node.js runtime ES2024 / Browser)

const targetEmitter = new EventTarget();

// 1. Controller untuk membersihkan listener secara global
const controller = new AbortController();
const { signal } = controller;

// 2. Registrasi listener dengan options modern
targetEmitter.addEventListener('data-sync', (event) => {
  console.log(`[Handler 1] Event diterima:`, event.detail);
}, { signal });

targetEmitter.addEventListener('data-sync', (event) => {
  console.log(`[Handler 2 - Immediate Stop] Menghentikan handler berikutnya`);
  event.stopImmediatePropagation();
}, { signal });

// Handler ini tidak akan dieksekusi karena stopImmediatePropagation
targetEmitter.addEventListener('data-sync', () => {
  console.log(`[Handler 3] Handler ini dilewati.`);
}, { signal });

// Eksekusi CustomEvent
const syncEvent = new CustomEvent('data-sync', {
  detail: { timestamp: Date.now(), status: 'SUCCESS' },
  bubbles: true,
  cancelable: true
});

targetEmitter.dispatchEvent(syncEvent);

// Bersihkan semua event listener terdaftar via AbortController
controller.abort();
console.log('Semua listener dengan signal berhasil di-detach.');
```

### 3. Studi Kasus Nyata
Implementasi *Data Table* berkinerja tinggi dengan 10.000 item. Kita menggunakan teknik **Event Delegation** dipadukan dengan method `Element.prototype.closest()` untuk menangani aksi *nested icons* di dalam tombol secara presisi tanpa membebani heap allocation.

```javascript
// Simulasi Lingkungan DOM untuk Demonstrasi
class MockElement {
  constructor(tagName, dataset = {}, parent = null) {
    this.tagName = tagName;
    this.dataset = dataset;
    this.parentElement = parent;
  }
  closest(selector) {
    let current = this;
    while (current) {
      if (selector.startsWith('button') && current.tagName === 'BUTTON') return current;
      if (selector.startsWith('[data-action]') && current.dataset.action) return current;
      current = current.parentElement;
    }
    return null;
  }
}

// Simulasi Event Delegation Table Handler
const handleTableAction = (simulatedEvent) => {
  const { target } = simulatedEvent;
  
  // Mencari tombol aksi terdekat dari target klik (meskipun user mengklik icon <i> di dalam tombol)
  const actionButton = target.closest('button[data-action]');
  
  if (!actionButton) return; // Klik terjadi di luar tombol aksi yang valid
  
  const { action, id } = actionButton.dataset;
  
  switch (action) {
    case 'delete':
      console.log(`[ACTION] Menghapus data ID: ${id}`);
      break;
    case 'edit':
      console.log(`[ACTION] Mengedit data ID: ${id}`);
      break;
    default:
      console.warn(`[ACTION] Aksi tidak dikenal: ${action}`);
  }
};

// Simulasi UI: User mengklik icon <i> yang berada di dalam <button data-action="delete" data-id="982">
const tableBody = new MockElement('TBODY');
const buttonDelete = new MockElement('BUTTON', { action: 'delete', id: '982' }, tableBody);
const iconInsideButton = new MockElement('I', {}, buttonDelete);

console.log('--- Simulasi Klik Pengguna (Nested Icon) ---');
handleTableAction({ target: iconInsideButton });

console.log('--- Simulasi Klik Diluar Tombol ---');
handleTableAction({ target: tableBody });
```

### 4. Diagram Alur & Visualisasi Event Loop
Berikut adalah visualisasi bagaimana Browser Hardware Event dijadwalkan dari C++ Engine ke Call Stack JavaScript:

```text
┌─────────────────────────┐
│   Hardware/User Event   │ (Klik Mouse / Touch / Keyboard)
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Browser Compositor/DOM  │ (Hit testing & Propagation Phase: Capture -> Target -> Bubble)
└────────────┬────────────┘
             │
             ▼ (Enqueue Event Callback)
┌─────────────────────────┐      Event Loop Tick      ┌─────────────────────────┐
│     Macrotask Queue     │ ────────────────────────> │       Call Stack        │
│ (DOM Event Callbacks)   │                           │ (V8 Execution Context)  │
└─────────────────────────┘                           └────────────┬────────────┘
             ▲                                                     │
             │                                                     ▼
┌─────────────────────────┐      Resolved Tasks       ┌─────────────────────────┐
│     Microtask Queue     │ <──────────────────────── │ MutationObserver /      │
│ (Promise / queueMicro)  │                           │ Promise inside Handlers │
└─────────────────────────┘                           └─────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `event.target.closest(selector)`** dalam Event Delegation untuk memastikan elemen terdeteksi secara akurat meskipun pengguna mengklik elemen turunan (*child element*) seperti `<span>` atau `<i>` di dalam tombol.
- ✅ **Gunakan `{ passive: true }`** pada event frekuensi tinggi seperti `touchstart`, `touchmove`, dan `wheel` agar *scrolling performance* tetap berada di target 60/120 FPS tanpa terhambat oleh proses *main thread*.
- ✅ **Manfaatkan `AbortController`** untuk melepas banyak listener sekaligus dalam siklus hidup komponen (*lifecycle cleanup*), menghindari potensi *memory leak* dari listener yatim piatu (*dangling listener*).
- ❌ **Hindari menambahkan listener di dalam perulangan (*loop*) render**. Mengikat ratusan anonymous function handler langsung ke list node menyebabkan alokasi memori berlebih dan membebani V8 Garbage Collector.

---

## ✍️ Latihan Mandiri
1. Buat sistem navigasi menu bersarang (*nested dropdown*) di **Code Editor di bawah** menggunakan pola *Event Delegation* pada tag `<nav>`, dan gunakan `event.stopPropagation()` untuk mencegah penutupan menu saat dropdown aktif diklik.
2. Implementasikan *event listener* satu kali jalan menggunakan opsi `{ once: true }` dan bandingkan perilakunya dengan pelepasan event listener deklaratif menggunakan `AbortController` di **Code Editor di bawah**.

---

## 🔗 Referensi
- [MDN Web Docs: Event Propagation & Bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)
- [MDN Web Docs: EventTarget.addEventListener() Options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [ECMAScript DOM Living Standard: Events Model](https://dom.spec.whatwg.org/#events)