# Pengenalan dan Sejarah JavaScript

**Slug**: `pengenalan-dan-sejarah` · **Level**: Dasar · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Menelusuri sejarah evolusi JavaScript dari Mocha (1995) hingga era modern standarisasi ECMA-262 (ES2024).
- Memahami arsitektur internal JavaScript Engine (V8, SpiderMonkey, JavaScriptCore) dan siklus eksekusi JIT (Just-In-Time) compilation.
- Mengidentifikasi perbedaan peran spesifikasi ECMAScript dan implementasi runtime dalam eksekusi kode modern.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Pada Mei 1995, Brendan Eich menciptakan prototipe bahasa skrip untuk Netscape Navigator hanya dalam waktu 10 hari. Awalnya diberi nama sandi **Mocha**, kemudian diganti menjadi **LiveScript**, dan akhirnya dinamai **JavaScript** sebagai strategi pemasaran untuk mendompleng popularitas bahasa Java pada masa itu—meskipun secara paradigma, JavaScript mengadopsi pewarisan berbasis *prototype* dari Self dan fungsi *first-class* dari Scheme, bukan arsitektur berbasis kelas seperti Java. Guna mencegah fragmentasi ekosistem akibat kemunculan implementasi tandingan seperti JScript dari Microsoft, Netscape menyerahkan standarisasi bahasa ini ke Ecma International pada November 1996, yang melahirkan spesifikasi formal **ECMA-262**.

Evolusi JavaScript mengalami masa stagnasi setelah rilis ES3 (1999) hingga proposal ES4 dibatalkan karena kompleksitas ekstrem. Titik balik modernitas terjadi melalui rilis **ES6 (ECMAScript 2015)**, yang merombak fundamental bahasa dengan memperkenalkan *Block Scoping* (`let`/`const`), *Arrow Functions*, *Classes*, *Promises*, dan sistem modul formal (*ESM*). Pasca-2015, TC39 (*Technical Committee 39*) beralih ke siklus rilis tahunan berbasis *stage process* (Stage 0 hingga Stage 4), menghasilkan inovasi berkelanjutan hingga standar **ES2024** (seperti fitur *Object.groupBy*, *Promise.withResolvers*, dan *ArrayBuffer resizable*).

Di balik layar, JavaScript tidak dieksekusi secara interpretasi murni maupun kompilasi statis tradisional, melainkan melalui **JavaScript Engine** modern seperti Google V8 (Chrome, Node.js), SpiderMonkey (Firefox), dan JavaScriptCore (Safari). Engine memproses kode sumber (*source code*) melalui tahapan leksikal dan sintaksis menjadi *Abstract Syntax Tree* (AST). Pada engine V8, interpreter bernama **Ignition** mengubah AST menjadi *bytecode* untuk eksekusi instan. Selama eksekusi berlangsung, komponen *profiler* memantau kode: fungsi yang sering dipanggil (*hot code*) dikirim ke optimizer compiler bernama **TurboFan** untuk diubah langsung menjadi *Machine Code* teroptimasi melalui teknik Just-In-Time (JIT) Compilation. Jika asumsi tipe data berubah di tengah jalan (*type feedback polymorphism*), TurboFan melakukan *deoptimization* kembali ke *bytecode*.

### 2. Sintaks & Penggunaan Modern
Evolusi spesifikasi ECMAScript memastikan kompatibilitas mundur (*backward compatibility*) sembari menambahkan fitur deklaratif berkinerja tinggi. Berikut adalah representasi struktur fitur bahasa dari basis fondasi hingga fitur standar ES2024:

```javascript
// Memanfaatkan fitur ES2024: Object.groupBy dan Promise.withResolvers
const timelineSejarah = [
  { era: "Klasik", tahun: 1995, nama: "Mocha / LiveScript", inisiator: "Brendan Eich" },
  { era: "Klasik", tahun: 1997, nama: "ECMA-262 Ed. 1", inisiator: "TC39" },
  { era: "Modern", tahun: 2015, nama: "ES6 / ECMAScript 2015", inisiator: "TC39" },
  { era: "Modern", tahun: 2024, nama: "ES2024 (Object.groupBy, Promise.withResolvers)", inisiator: "TC39" }
];

// 1. Pengelompokan data deklaratif menggunakan standar resmi ES2024
const dikelompokkanBerdasarkanEra = Object.groupBy(
  timelineSejarah, 
  (item) => item.era
);

console.log("=== Pembagian Era JavaScript ===");
console.log(dikelompokkanBerdasarkanEra);

// 2. Eksekusi Asinkron menggunakan Promise.withResolvers (ES2024)
const { promise, resolve, reject } = Promise.withResolvers();

promise.then((pesan) => {
  console.log(`Status Engine: ${pesan}`);
});

// Mensimulasikan penyelesaian eksekusi JIT Engine
resolve("Kompilasi Bytecode TurboFan Selesai.");
```

### 3. Studi Kasus Nyata
Dalam sistem *enterprise*, pemahaman evolusi engine memandu kita menulis kode yang *monomorphic* (memiliki bentuk tipe data yang konsisten) agar memudahkan optimasi JIT Compiler V8, serta memanfaatkan struktur data modern tanpa *overhead* librari eksternal.

```javascript
// Simulasi Pipeline Pemrosesan Profil Engine & Evaluasi Rilis Standar
class EngineProfiler {
  #namaEngine;
  #arsitektur;

  constructor(namaEngine, arsitektur) {
    this.#namaEngine = namaEngine;
    this.#arsitektur = arsitektur;
  }

  evaluasiFitur(rilisFitur) {
    const hasilMetrik = rilisFitur.map((fitur) => {
      // Struktur objek monomorphic untuk optimalisasi Hidden Class pada V8
      return {
        engine: this.#namaEngine,
        arsitektur: this.#arsitektur,
        fiturTarget: fitur.nama,
        kompatibel: fitur.tersedia
      };
    });

    return hasilMetrik;
  }
}

const daftarFiturES2024 = [
  { nama: "RegExp v flag", tersedia: true },
  { nama: "ArrayBuffer.prototype.resize", tersedia: true },
  { nama: "Promise.withResolvers", tersedia: true }
];

const v8Instance = new EngineProfiler("V8", "Ignition + TurboFan");
const laporanOptimasi = v8Instance.evaluasiFitur(daftarFiturES2024);

console.log("=== Hasil Profiling Engine ===");
console.log(laporanOptimasi);
```

### 4. Visualisasi & Mental Model
```text
┌────────────────────────────────────────────────────────────────────────┐
│             PIPELINE EKSEKUSI JAVASCRIPT ENGINE (CONTOH: V8)           │
└────────────────────────────────────────────────────────────────────────┘
  JavaScript Source Code
           │
           ▼
     [ Parser ] ──────────> [ Abstract Syntax Tree (AST) ]
                                         │
                                         ▼
                             [ Ignition Interpreter ]
                                         │
                         ┌───────────────┴───────────────┐
                         ▼                               ▼
                 [ Bytecode Stream ]             [ Type Feedback ]
                         │                               │
                         │   ┌───────────────────────────┘
                         ▼   ▼
                     [ Profiler ]
                         │
              (Hot Code? Sering Dipanggil?)
                     ├── Ya ──> [ TurboFan Optimizer ] ──> [ Optimized Machine Code ]
                     │                                             │
                     └── Tidak                                     │ (Tipe berubah / Bailout)
                         │                                         ▼
                         └───────────────────────────────> [ Deoptimization ]
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan fitur standar ECMAScript terbaru:** Manfaatkan rilis ES modern (seperti `Object.groupBy` atau sintaks *private field* `#`) untuk mengurangi dependensi pada pustaka utilitas pihak ketiga (*third-party utility*).
- ✅ **Pertahankan konsistensi tipe data (*Monomorphic*):** Tulis kode dengan bentuk objek yang seragam agar TurboFan dapat mengoptimalkan eksekusi tanpa sering memicu *deoptimization*.
- ✅ **Pahami peran runtime vs engine:** Ingat bahwa JavaScript Engine (V8/SpiderMonkey) hanya menangani parsing dan kompilasi, sedangkan API seperti `fetch`, `setTimeout`, atau DOM disediakan oleh lingkungan *Runtime* (Browser / Node.js).
- ❌ **Hindari modifikasi *Prototype* bawaan (*Monkey Patching*):** Memodifikasi `Array.prototype` atau `Object.prototype` merusak kemampuan engine dalam melakukan optimasi internal dan dapat memicu *bug* kompatibilitas antar-versi ECMA-262.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah array berisi objek rilis JavaScript (ES3, ES5, ES6, ES2024), lalu kelompokkan data tersebut menggunakan metode bawaan ES2024 `Object.groupBy()` berdasarkan kategori abad rilis (misal: "Abad 20" dan "Abad 21").
2. Gunakan metode `Promise.withResolvers()` di **Code Editor di bawah** untuk membuat skenario penundaan eksekusi (*deferred execution*) yang meniru transisi tahapan dari *AST Parsing* menuju *Bytecode Generation*, kemudian cetak hasilnya ke konsol.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Technologies Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMA-262 Language Specification](https://tc39.es/ecma262/)
- [V8 JavaScript Engine Architecture Guide](https://v8.dev)