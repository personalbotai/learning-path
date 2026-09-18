# Performance Optimization: Debounce, Throttle & Memory

**Slug**: `performance-optimization` · **Level**: Intermediate · **Waktu**: 30 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai implementasi dan perbedaan fundamental algoritma *rate-limiting* (*Debounce* vs *Throttle*) pada V8 *Event Loop*.
- Menerapkan teknik *memoization* berkinerja tinggi untuk fungsi komputasi intensif dengan manajemen cache berbasis batas memori.
- Mengidentifikasi, menganalisis, dan memitigasi *Memory Leaks* akibat *closures*, *event listeners*, dan *timers* tidak terkelola menggunakan siklus *Garbage Collection*.
- Menghubungkan optimasi eksekusi JavaScript terhadap metrik *Core Web Vitals* (*Interaction to Next Paint* / INP, LCP, dan CLS).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Eksekusi JavaScript berjalan di *single-threaded main thread*. Ketika beban eksekusi fungsi terlalu berat atau dipicu terlalu sering (seperti *scroll*, *resize*, atau *keystroke*), *Call Stack* akan terblokir (*Long Tasks* > 50ms). Kondisi ini secara langsung menurunkan skor **INP (Interaction to Next Paint)** karena *browser* menunda proses *rendering frame* berikutnya.

Dua teknik utama untuk mengendalikan frekuensi eksekusi adalah:
1. **Debounce**: Menunda eksekusi fungsi hingga periode inaktivitas tertentu tercapai. Jika *trigger* baru masuk sebelum durasi selesai, *timer* di-*reset*. Cocok untuk *autocomplete search input* dan validasi form instan.
2. **Throttle**: Menjamin fungsi dieksekusi paling banyak satu kali dalam jendela waktu (*interval*) yang ditentukan, tanpa mempedulikan seberapa sering *event* dipicu. Sangat ideal untuk *infinite scroll*, *drag-and-drop*, dan kalkulasi *bounding client rect*.

Di balik layar, optimasi memori berkaitan erat dengan **V8 Garbage Collector (Orinoco/Scavenger)** yang menggunakan algoritma *Mark-and-Sweep*. Objek dialokasikan di *Heap Memory*. Jika sebuah objek masih memiliki jalur referensi aktif dari *Root* (misalnya *Global Scope* atau *Closure context* yang masih hidup), GC tidak dapat membebaskan memori tersebut. Retensi memori yang tidak disengaja (*Accidental Retainers*) memicu lonjakan memori progresif (*Memory Leak*), degradasi FPS, hingga *crash* (*Out of Memory*).

### 2. Sintaks & Penggunaan Modern
Berikut adalah implementasi modern ES2024 untuk *Debounce*, *Throttle*, dan *Memoization* murni tanpa dependensi eksternal.

```javascript
// 1. Modern Debounce dengan opsi immediate execution & cleanup
const debounce = (fn, delay = 300, immediate = false) => {
  let timerId = null;

  const debounced = (...args) => {
    const callNow = immediate && !timerId;
    
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      if (!immediate) fn(...args);
    }, delay);

    if (callNow) fn(...args);
  };

  debounced.cancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
};

// 2. Modern Throttle berbasis High-Resolution Timestamp (performance.now)
const throttle = (fn, limit = 200) => {
  let lastRan = 0;
  let timerId = null;

  return (...args) => {
    const now = performance.now();
    const remainingTime = limit - (now - lastRan);

    if (remainingTime <= 0) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      lastRan = now;
      fn(...args);
    } else if (!timerId) {
      // Menjamin pemanggilan terakhir (trailing edge) tetap tereksekusi
      timerId = setTimeout(() => {
        lastRan = performance.now();
        timerId = null;
        fn(...args);
      }, remainingTime);
    }
  };
};

// 3. Memoization dengan Cache Size Limit (LRU-like eviction via Map)
const memoize = (fn, maxCacheSize = 50) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const result = cache.get(key);
      // Refresh urutan Map (kunci terbaru berada di akhir)
      cache.delete(key);
      cache.set(key, result);
      return result;
    }

    const computed = fn(...args);
    if (cache.size >= maxCacheSize) {
      // Hapus entri tertua (iterator pertama)
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    cache.set(key, computed);
    return computed;
  };
};

// Pengujian Memoize
const heavyCalculation = (base, exp) => {
  console.log(`[Compute Engine] Mengkalkulasi ${base}^${exp}...`);
  return base ** exp;
};

const fastCalc = memoize(heavyCalculation, 2);
console.log(fastCalc(2, 10)); // Kalkulasi berjalan
console.log(fastCalc(2, 10)); // Dari cache (instan)
console.log(fastCalc(3, 4));  // Kalkulasi berjalan
console.log(fastCalc(5, 2));  // Kalkulasi berjalan (evict 2, 10)
console.log(fastCalc(2, 10)); // Kalkulasi ulang karena sudah ter-evict
```

### 3. Studi Kasus Nyata
Mitigasi *Memory Leak* dan isolasi siklus hidup objek berat menggunakan `AbortController` dan pelepasan referensi closure.

```javascript
// Simulasi Data Store Besar
class AnalyticsTracker {
  #heavyMetricsData = new Array(100_000).fill("payload_chunk_log");
  #abortController = new AbortController();

  init(eventEmitterTarget) {
    const { signal } = this.#abortController;

    // Pola Aman: Gunakan AbortSignal untuk pembersihan listener otomatis
    eventEmitterTarget.addEventListener(
      "telemetry",
      (event) => this.#handleEvent(event),
      { signal }
    );
  }

  #handleEvent(event) {
    // Memproses data dengan referensi private state
    console.log(`Log diterima: ${event.type}, data items: ${this.#heavyMetricsData.length}`);
  }

  destroy() {
    // 1. Batalkan semua listener yang terikat ke AbortSignal
    this.#abortController.abort();
    
    // 2. Lepaskan referensi objek berat dari heap agar di-sweep oleh GC
    this.#heavyMetricsData = null;
    console.log("[Destructor] Alokasi memori berhasil dibebaskan.");
  }
}

// Simulasi Event Target sederhana
class MockDOMNode {
  #listeners = new Map();

  addEventListener(type, handler, options = {}) {
    if (!this.#listeners.has(type)) this.#listeners.set(type, []);
    this.#listeners.get(type).push(handler);

    if (options.signal) {
      options.signal.addEventListener("abort", () => {
        this.#listeners.set(type, []);
      });
    }
  }

  dispatch(type) {
    const handlers = this.#listeners.get(type) || [];
    for (const fn of handlers) fn({ type });
  }
}

// Eksekusi
const buttonNode = new MockDOMNode();
let tracker = new AnalyticsTracker();
tracker.init(buttonNode);

buttonNode.dispatch("telemetry");
tracker.destroy(); // Bersihkan referensi & listener
buttonNode.dispatch("telemetry"); // Tidak ada eksekusi (Aman dari memory leak)
tracker = null; // Menghapus Root reference
```

### 4. Visualisasi & Mental Model

```text
── Event Trigger Stream:  |--E--E--E--E--------E--E----------> (Waktu)
                          
── Unthrottled Exec:      |--X--X--X--X--------X--X----------> (CPU Spike / Long Tasks)

── Debounce (delay: T):   |--------------[X]---------[X]-----> (Eksekusi hanya saat jeda)
                             └──T──┘        └──T──┘

── Throttle (limit: T):   |--[X]─────[X]───────[X]───[X]-----> (Eksekusi berkala terukur)
                             └───T───┘└───T───┘└───T───┘

┌────────────────────────────────────────────────────────────┐
│              V8 Engine Event Loop Flow                     │
│                                                            │
│  [Call Stack] ──(setTimeout)──> [Node/Browser Timers API]  │
│        ▲                                    │              │
│        │                               (Timer Selesai)     │
│        │                                    ▼              │
│  [Event Loop Tick] ◀── (Macrotask) ── [Task Queue]         │
└────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `AbortController`** untuk melepas banyak `addEventListener` secara serentak dalam arsitektur komponen.
- ✅ **Manfaatkan `WeakMap` / `WeakRef`** jika mengasosiasikan metadata dengan objek DOM, sehingga GC tetap dapat mereklamasi memori ketika elemen DOM dihapus.
- ✅ **Batasi Ukuran Cache Memoization** dengan strategi LRU (*Least Recently Used*) untuk menghindari pertumbuhan tak terbatas (*unbounded cache*) yang memicu memory leak.
- ❌ **Hindari *Accidental Global Variables***: Deklarasi variabel tanpa `const`, `let`, atau `var` di *non-strict mode* mengikat variabel langsung ke `globalThis`/`window` secara permanen.
- ❌ **Jangan biarkan `setInterval` terbengkalai**: Menyimpan referensi state di dalam callback interval yang tidak di-`clearInterval` akan menahan seluruh scope lexical di Heap.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buat implementasi fungsi `debounceWithPromise(fn, delay)` di mana pemanggilan debounced mengembalikan *Promise* yang menyelesaikan nilai balik (*resolved value*) saat fungsi target akhirnya dieksekusi.
2. Di **Code Editor di bawah**, identifikasi celah kebocoran memori pada *closure factory function* yang menahan buffer data `ArrayBuffer(1024 * 1024)`, lalu buat mekanisme manual pembersihan (`release()`) untuk memutus siklus referensi.

---

## 🔗 Referensi
- [MDN Web Docs: Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [web.dev: Optimize Interaction to Next Paint (INP)](https://web.dev/articles/optimize-inp)
- [ECMAScript Specification: Weak References & FinalizationRegistry](https://tc39.es/ecma262/#sec-weakref-objects)