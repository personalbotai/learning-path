# Proxy dan Reflection API: Metaprogramming

**Slug**: `proxy-dan-reflection-api` · **Level**: Advanced · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai konsep Metaprogramming (Intercession & Reflection) menggunakan `Proxy` dan `Reflect` API pada spesifikasi ECMAScript modern.
- Memahami arsitektur internal runtime V8 terkait *internal methods* (`[[Get]]`, `[[Set]]`, dll.) dan bagaimana trap mengintersepsi alur eksekusi engine.
- Menerapkan pasangan `Proxy` + `Reflect` untuk membangun arsitektur reaktif (*reactivity system* ala Vue 3) dan validasi skema runtime tanpa merusak *prototype chain* serta binding konteks `this`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Metaprogramming adalah paradigma di mana kode program memiliki kemampuan untuk membaca, menginspeksi, memodifikasi, atau mengubah perilakunya sendiri saat runtime. JavaScript mengimplementasikan metaprogramming tingkat rendah melalui dua objek global standar: **`Proxy`** (untuk *intercession* / intersepsi operasi) dan **`Reflect`** (untuk *reflection* / pemanggilan operasi internal default).

Di balik layar, setiap objek JavaScript di level V8 engine dikendalikan oleh serangkaian *internal methods* standar ECMA-262 (seperti `[[Get]]`, `[[Set]]`, `[[Delete]]`, `[[Call]]`, `[[Construct]]`). Operasi biasa seperti `obj.prop` memicu internal method `[[Get]]()`. Saat kita membungkus target dengan `new Proxy(target, handler)`, kita menyuntikkan *trap layer* tepat di antara *call site* dan *internal method* objek target. Jika handler mendefinisikan trap (misal `get`), V8 mengalihkan eksekusi ke trap tersebut alih-alih mengeksekusi algoritma default `OrdinaryGet`.

```text
Eksekusi Kode: obj.nama
   │
   ▼
[Proxy Handler] ── Trap `get()` ditemukan? ──► [Handler Logic] ──► Reflect.get() ──► [[Get]] Target
   │ (Tidak ada trap)
   ▼
[Default Engine [[Get]]] ──► Akses Target Memory Heap Langsung
```

Mengapa **`Reflect`** wajib dipasangkan dengan `Proxy`? 
`Reflect` mengekspos semua *internal methods* JavaScript sebagai fungsi statis dengan parameter yang konsisten. Yang paling krusial adalah argumen **`receiver`**. Ketika objek target memiliki getter (`get prop() { return this.other; }`) dan objek tersebut diwariskan ke prototipe lain, pemanggilan `target[prop]` langsung akan mengikat `this` ke target asli, bukan objek pewaris (*prototype context loss*). Menggunakan `Reflect.get(target, prop, receiver)` menjamin `this` diteruskan secara presisi ke `receiver` yang memicu pemanggilan awal.

---

### 2. Sintaks & Penggunaan Modern

Objek `Proxy` menerima dua argumen: `target` (objek/fungsi yang dibungkus) dan `handler` (objek konfigurasi trap). ES2024 menyempurnakan ergonomi pengelolaan objek dengan integrasi `Reflect` method yang selalu mengembalikan boolean (misal `Reflect.set` mengembalikan `false` jika gagal, bukan melempar `TypeError` mode strict).

```javascript
// Struktur fundamental Proxy + Reflect dengan Receiver Binding
const userSchema = {
  name: "Staff Engineer",
  _role: "System Architect",
  get role() {
    return this._role;
  }
};

const handler = {
  // Trap untuk operasi membaca properti: target[prop], target.prop
  get(target, property, receiver) {
    console.log(`[AUDIT] Akses pembacaan properti: "${String(property)}"`);
    
    // Virtual / Computed Property Fallback
    if (property === "identity") {
      return `${target.name} as ${target.role}`;
    }

    // Teruskan ke target asli dengan receiver yang mempertahankan context 'this'
    return Reflect.get(target, property, receiver);
  },

  // Trap untuk operasi penulisan: target[prop] = value
  set(target, property, value, receiver) {
    if (property.startsWith("_") && !receiver.allowPrivateMutation) {
      console.warn(`[SECURITY] Mutasi properti privat ${property} ditolak!`);
      return false; // Mengindikasikan kegagalan mutasi
    }

    console.log(`[AUDIT] Modifikasi properti: "${property}" = "${value}"`);
    return Reflect.set(target, property, value, receiver);
  },

  // Trap untuk operator 'in': "prop" in target
  has(target, property) {
    if (property.startsWith("_")) {
      return false; // Sembunyikan properti internal dari pengecekan eksternal
    }
    return Reflect.has(target, property);
  },

  // Trap untuk operator 'delete': delete target[prop]
  deleteProperty(target, property) {
    console.log(`[AUDIT] Properti dihapus: "${property}"`);
    return Reflect.deleteProperty(target, property);
  }
};

const proxyUser = new Proxy(userSchema, handler);

// Uji Coba Traps
console.log("Nama:", proxyUser.name);
console.log("Virtual Identity:", proxyUser.identity);

proxyUser.name = "Principal Engineer";
console.log("Nama Baru:", proxyUser.name);

// Uji Proteksi Private Property & Has Trap
proxyUser._role = "Hacker"; // Mutasi ditolak
console.log("Apakah '_role' terlihat?", "_role" in proxyUser); // false
console.log("Apakah 'name' terlihat?", "name" in proxyUser);   // true
```

---

### 3. Studi Kasus Nyata: Reactive Engine Minimalis (Vue 3 Core Concept)

Mekanisme reactivity pada modern frontend framework (seperti Vue 3 Reactivity Core) dibangun murni di atas `Proxy`, `Reflect`, `WeakMap`, dan `Set`. Berikut adalah implementasi sistem reaktif modern yang mencatat *dependency* dan memicu *effects* secara deterministik:

```javascript
// Registry Dependency: Target -> Property Key -> Set of Effects
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  
  dep.add(activeEffect);
}

function trigger(target, key, newValue, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;

  const dep = depsMap.get(key);
  if (dep) {
    console.log(`[REACTIVE ENGINE] Triggering effects for key: "${key}" (${oldValue} -> ${newValue})`);
    dep.forEach((effect) => effect());
  }
}

function reactive(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }

  return new Proxy(target, {
    get(obj, key, receiver) {
      const result = Reflect.get(obj, key, receiver);
      track(obj, key); // Kumpulkan dependency jika sedang di dalam effect
      return typeof result === "object" && result !== null ? reactive(result) : result;
    },
    set(obj, key, value, receiver) {
      const oldValue = obj[key];
      const hadKey = Object.prototype.hasOwnProperty.call(obj, key);
      const success = Reflect.set(obj, key, value, receiver);
      
      if (!hadKey || oldValue !== value) {
        trigger(obj, key, value, oldValue);
      }
      return success;
    }
  });
}

function effect(fn) {
  const effectRunner = () => {
    activeEffect = effectRunner;
    try {
      fn();
    } finally {
      activeEffect = null;
    }
  };
  effectRunner(); // Jalankan sekali di awal untuk registrasi initial dependencies
}

// === Uji Skenario State Management ===
const state = reactive({
  cluster: {
    nodes: 3,
    status: "HEALTHY"
  }
});

// UI / Subscriber Listener
effect(() => {
  console.log(`[DOM RENDER] Cluster Status: ${state.cluster.status}, Total Nodes: ${state.cluster.nodes}`);
});

// Mutasi state memicu trigger reactive otomatis
state.cluster.nodes = 5;
state.cluster.status = "SCALING";
```

---

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────┐
│               ALUR INTERSEPSI PROXY DAN FORWARDING REFLECT             │
│                                                                        │
│   Aplikasi (Consumer)                                                  │
│         │                                                              │
│         ▼  Akses: proxyState.count = 10                                │
│   ┌─────────────┐                                                      │
│   │ Proxy Trap  │  Intersepsi operasi [[Set]]                          │
│   │  set(...)   │  Validasi / Tracking / Mutasi                        │
│   └──────┬──────┘                                                      │
│          │                                                             │
│          ▼  Reflect.set(target, 'count', 10, receiver)                 │
│   ┌─────────────┐                                                      │
│   │ Reflect API │  Menjamin binding 'this' tetap menunjuk ke receiver  │
│   └──────┬──────┘                                                      │
│          │                                                             │
│          ▼  Menjalankan aksi mutasi langsung pada memory target        │
│   ┌─────────────┐                                                      │
│   │ Heap Target │  [[Set]] internal method bawaan dieksekusi           │
│   │  {count:10} │                                                      │
│   └─────────────┘                                                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips

- ✅ **Selalu Teruskan `receiver` ke `Reflect`**: Saat mengimplementasikan trap `get` dan `set`, jangan pernah memanggil `target[prop]`. Selalu gunakan `Reflect.get(target, prop, receiver)` agar getter/setter yang mengandalkan konteks inheritance prototipe tidak mengalami *broken context*.
- ✅ **Patuhi Invariant Objek (Proxy Invariants)**: Trap Proxy tidak boleh melanggar invariant internal engine. Misalnya, jika properti target dikonfigurasi sebagai *non-configurable* dan *non-writable*, trap `get` wajib mengembalikan nilai yang sama dengan target asli; melanggar aturan ini menghasilkan runtime `TypeError`.
- ✅ **Gunakan `WeakMap` untuk Caching Proxy**: Jangan membuat wrapper `new Proxy` berulang kali pada target yang sama untuk menghindari overhead alokasi memory heap berlebih.
- ❌ **Anti-Pattern: Memodifikasi Objek Target Langsung di Dalam Trap**: Jangan lakukan `target[prop] = value` di dalam trap `set`. Selain mengabaikan kembalian boolean yang diwajibkan strict-mode, hal ini menghilangkan interoperabilitas prototype receiver.

---

## ✍️ Latihan Mandiri

1. **Schema Validation Proxy**: Buat fungsi `createStrictSchema(target, schema)` di **Code Editor di bawah** yang memvalidasi tipe data saat penulisan properti. Jika sebuah properti didefinisikan bertipe `number`, pelemparan error harus terjadi jika pengguna mencoba memasukkan string atau boolean.
2. **Revocable Proxy for Temporary Access**: Gunakan `Proxy.revocable()` di **Code Editor di bawah** untuk membuat sesi token otorisasi sementara yang dapat dinonaktifkan (`revoke()`) setelah operasi tertentu selesai, sehingga akses lanjutan memicu exception.

---

## 🔗 Referensi
- [MDN Web Docs: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN Web Docs: Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [ECMAScript Specification: Proxy Object Internal Methods](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)