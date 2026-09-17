# Babel, SWC, dan esbuild: Compilers & Transpilers

**Slug**: `babel-transpiling` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami arsitektur internal compiler JavaScript: siklus parsing source code menjadi Abstract Syntax Tree (AST), manipulasi node via visitor pattern, dan code generation.
- Membedakan peran transpilasi sintaksis versus injeksi runtime polyfill (`core-js`) serta integrasi penargetan runtime menggunakan konfigurasi Browserslist.
- Menganalisis perbedaan performa dan trade-off arsitektural antara compiler berbasis Node.js/JavaScript (Babel) dengan engine native multi-threaded generasi baru seperti SWC (Rust) dan esbuild (Go).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
JavaScript berjalan di atas berbagai engine (V8 pada Chrome/Node.js, JavaScriptCore pada Safari, SpiderMonkey pada Firefox). Spesifikasi ECMAScript merilis fitur baru setiap tahun (seperti Optional Chaining, Nullish Coalescing, hingga decorator ES2024), namun adopsi engine di browser lawas atau perangkat legacy tertinggal. Di sinilah peran compiler atau transpiler (Source-to-Source compiler) menjadi krusial: mengubah kode JavaScript modern menjadi format JavaScript yang kompatibel ke belakang (misalnya ES5/ES6) tanpa mengubah fungsionalitas aslinya.

Secara arsitektural, proses kompilasi JavaScript terbagi menjadi 3 fase utama:
1. **Parsing**: Engine pengolah (Lexer/Tokenizer) memecah string kode mentah menjadi tokens, lalu Parser menyusunnya menjadi representasi pohon terstruktur bernama **Abstract Syntax Tree (AST)**.
2. **Transformation**: Pipeline traversal membaca AST menggunakan *Visitor Pattern*. Plugin memeriksa node spesifik (misalnya node `OptionalMemberExpression`) dan memutasinya atau menggantinya dengan node AST baru yang merepresentasikan sintaks ekuivalen yang kompatibel.
3. **Code Generation**: Generator membaca AST yang telah dimutasi dan mencetaknya kembali menjadi string kode JavaScript baru beserta source maps.

Penting untuk membedakan antara **Syntax Transpilation** dan **Polyfilling**. Transpiler hanya mengubah struktur sintaks (misalnya `a?.b` diubah menjadi `a == null ? void 0 : a.b`). Namun, jika kode menggunakan global object atau API baru (misalnya `Promise`, `Array.prototype.groupBy`, atau `StructuredClone`), struktur sintaksisnya tidak bermasalah bagi parser engine, melainkan ketiadaan memori definisi API tersebut pada runtime global environment. Untuk kasus ini, injeksi *polyfill* seperti `core-js` diperlukan guna menambal objek global sebelum kode dieksekusi.

Evolusi toolchain membawa pergeseran performa yang signifikan. **Babel** ditulis dalam JavaScript dan berjalan di atas runtime Node.js single-threaded; proses traversal AST pada proyek berskala besar menimbulkan overhead V8 engine (garbage collection dan dynamic typing). **esbuild** (ditulis dalam Go) dan **SWC** (ditulis dalam Rust) memanfaatkan kompilasi native ke machine code, eksekusi paralel pada level CPU thread, dan alokasi memori yang sangat efisien tanpa jeda Garbage Collector JavaScript, menghasilkan kecepatan 10x hingga 100x lebih cepat dibanding Babel.

### 2. Sintaks & Penggunaan Modern
Untuk memahami bagaimana compiler memanipulasi kode, kita dapat mengimplementasikan representasi miniatur dari siklus kerja Transpiler: Tokenizer -> Parser AST sederhana -> Transformer (Visitor) -> Code Generator.

```javascript
// Simulasi Compiler Pipeline: Mengubah sintaks modern ke ES5-compatible

// 1. AST Transformer sederhana yang meniru Babel Visitor Pattern
class MiniTranspiler {
  // Parsing sederhana untuk demonstrasi: Mendeteksi Optional Chaining & Nullish Coalescing
  static transpile(codeString) {
    console.log("[Compiler] Input Code:\n", codeString);

    // Langkah Transformasi 1: Nullish Coalescing (a ?? b) -> ternary check
    let transformed = codeString.replace(/(\w+)\s*\?\?\s*(\w+)/g, (_, left, right) => {
      return `(${left} !== null && ${left} !== void 0 ? ${left} : ${right})`;
    });

    // Langkah Transformasi 2: Private field access simulation (#field -> WeakMap getter)
    transformed = transformed.replace(/this\.#(\w+)/g, (_, fieldName) => {
      return `_privateFields.get(this).${fieldName}`;
    });

    return transformed;
  }
}

// 2. Simulasi Runtime Polyfill Injection (core-js behavior)
const runtimeEnvironment = {};

function applyPolyfills(env) {
  if (!env.ObjectGroupBy) {
    console.log("[Polyfill Engine] Injeksi core-js: Object.groupBy didaftarkan ke global memory.");
    env.ObjectGroupBy = function (items, callbackFn) {
      return items.reduce((accumulator, item, index) => {
        const key = callbackFn(item, index);
        if (!accumulator[key]) {
          accumulator[key] = [];
        }
        accumulator[key].push(item);
        return accumulator;
      }, {});
    };
  }
}

// Eksekusi simulasi
const modernSnippet = "const result = valA ?? valB;";
const transpiledCode = MiniTranspiler.transpile(modernSnippet);

console.log("[Compiler] Transpiled Code:\n", transpiledCode);

// Menjalankan polyfill
applyPolyfills(runtimeEnvironment);

const inventory = [
  { name: "Server A", type: "production" },
  { name: "Server B", type: "staging" },
  { name: "Server C", type: "production" }
];

const grouped = runtimeEnvironment.ObjectGroupBy(inventory, (item) => item.type);
console.log("[Runtime Execution] Grouped Inventory:", grouped);
```

### 3. Studi Kasus Nyata
Dalam skenario enterprise, konfigurasi target deployment ditentukan menggunakan standar **Browserslist**. Compiler membaca query seperti `"> 0.25%, not dead"` untuk menentukan plugin AST apa saja yang harus aktif.

Berikut simulasi engine target resolution yang menentukan transpilasi sintaks dan injeksi polyfill berdasarkan target platform browser:

```javascript
// Simulasi Target Environment Resolver (Babel Preset-Env / SWC Env Matrix)

class BuildPipeline {
  constructor(browserTargets) {
    this.targets = browserTargets;
  }

  resolveRequirements() {
    const isLegacy = this.targets.some((t) => t.name === "ie" || (t.name === "chrome" && t.version < 80));
    return {
      needsOptionalChainingTranspile: isLegacy,
      needsPromisePolyfill: this.targets.some((t) => t.name === "ie" && t.version <= 11)
    };
  }

  compile(sourceCode) {
    const requirements = this.resolveRequirements();
    console.log(`[Build Engine] Mengompilasi untuk target: ${JSON.stringify(this.targets)}`);
    console.log(`[Build Engine] Directives:`, requirements);

    let output = sourceCode;

    // Transpilasi AST jika target adalah legacy
    if (requirements.needsOptionalChainingTranspile) {
      output = output.replace(/(\w+)\?\./g, "($1 === null || $1 === void 0 ? void 0 : $1.");
    }

    // Injeksi Polyfill jika dibutuhkan
    if (requirements.needsPromisePolyfill) {
      output = `import "core-js/modules/es.promise.js";\n` + output;
    }

    return output;
  }
}

// Simulasi Target 1: Modern Cloud/Edge Runtime (Node.js 20 / Chrome 120)
const modernPipeline = new BuildPipeline([{ name: "chrome", version: 120 }]);
const modernOutput = modernPipeline.compile("const name = user?.profile?.name;");
console.log("Modern Output:\n", modernOutput, "\n");

// Simulasi Target 2: Legacy Browser Support (IE 11 / Chrome 60)
const legacyPipeline = new BuildPipeline([{ name: "ie", version: 11 }]);
const legacyOutput = legacyPipeline.compile("const name = user?.profile?.name;");
console.log("Legacy Output:\n", legacyOutput);
```

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          COMPILATION & TRANSPILATION PIPELINE                          │
│                                                                                        │
│  [Source Code]                                                                         │
│         │                                                                              │
│         ▼                                                                              │
│  ┌──────────────┐      ┌─────────────────┐      ┌─────────────────┐                    │
│  │ Lexer/Parser │ ───> │  AST (Original) │ ───> │ Visitor/Plugins │ (Transform Phase)  │
│  └──────────────┘      └─────────────────┘      └────────┬────────┘                    │
│                                                          │                             │
│                                                          ▼                             │
│  [Polyfills]           ┌─────────────────┐      ┌─────────────────┐                    │
│  (core-js)    ───────> │  Target Output  │ <─── │ AST (Transformed│ (CodeGen Phase)    │
│  (Browserslist)        └─────────────────┘      └─────────────────┘                    │
└────────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                COMPILER PERFORMANCE MATRIX                            │
│                                                                                        │
│  Tool     Engine / Lang       Thread Model         GC Overhead    Relative Speed       │
│  ───────  ─────────────────   ──────────────────   ───────────    ──────────────────   │
│  Babel    Node.js (V8 / JS)   Single Threaded      Tinggi (GC)    1x (Baseline)        │
│  SWC      Rust (Native Binary)Multi-Threaded (CPU) Zero GC        ~20x - 50x           │
│  esbuild  Go (Native Binary)  Parallel Goroutines  Minimal GC     ~50x - 100x          │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `core-js` dengan opsi `useBuiltIns: "usage"`**: Jangan pernah mengimpor keseluruhan `core-js` secara manual di entry file karena akan meningkatkan bundle size secara drastis; biarkan compiler mendeteksi API spesifik yang digunakan.
- ✅ **Manfaatkan esbuild/SWC untuk fase Development**: Gunakan SWC atau esbuild untuk kompilasi lokal (`dev-server`) dan bundler modern (seperti Vite/Turbopack) untuk turnaround hot-module replacement (HMR) berkecepatan sub-milidetik.
- ✅ **Sinkronisasi Browserslist across Tools**: Tempatkan konfigurasi target browser pada file `.browserslistrc` atau field `package.json` agar Autoprefixer, Babel/SWC, dan ESLint menggunakan acuan target yang seragam.
- ❌ **Hindari asumsi bahwa Transpiler menyediakan API baru**: Menghidupkan Babel/SWC tanpa polyfill runtime akan meloloskan fungsi seperti `structuredClone` atau `Array.prototype.flat` ke browser lawas dan memicu runtime error `TypeError: ... is not a function`.

---

## ✍️ Latihan Mandiri
1. Modifikasi compiler mock pada **Code Editor di bawah** untuk menambahkan transformer yang mengubah *Arrow Functions* (`(a, b) => a + b`) menjadi fungsi standar ES5 (`function(a, b) { return a + b; }`).
2. Buat simulasi validator yang membaca target *Browserslist* string dan memberikan error jika target browser tidak mendukung fitur native *WeakMap* tanpa tersedianya polyfill eksplisit.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Technologies Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [Babel Architecture & AST Specification](https://babeljs.io/docs/en/index.html)
- [SWC Documentation](https://swc.rs/docs/getting-started)
- [esbuild Architecture Concepts](https://esbuild.github.io/faq/)