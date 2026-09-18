# ESLint, Prettier & Biome: Code Quality & Formatting

**Slug**: `eslint-dan-prettier` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami perbedaan arsitektur antara *Static Code Analysis* (Linter) dan *Abstract Syntax Tree (AST) Printing* (Formatter).
- Menguasai konfigurasi modern ESLint *Flat Config* (`eslint.config.js`) serta arsitektur terpadu berbasis Rust pada Biome.
- Mengimplementasikan alur otomatisasi *quality gate* menggunakan Git Hooks (*Husky* dan *lint-staged*) untuk mencegah *bad code* masuk ke repository.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Dalam ekosistem JavaScript modern, kualitas kode dijamin melalui dua pilar yang berbeda secara fundamental: **Linting** dan **Formatting**.

**ESLint** bekerja sebagai *static analysis tool*. ESLint membaca kode mentah, lalu *parser* (seperti Espree) mengubah kode tersebut menjadi **Abstract Syntax Tree (AST)** berdasarkan spesifikasi ESTree. Node-node pada AST (seperti `VariableDeclaration`, `BinaryExpression`, `FunctionDeclaration`) kemudian diuji menggunakan pola perancangan *Visitor Pattern*. Rule ESLint memantau tipe node tertentu dan memverifikasi integritas semantik—seperti mendeteksi deklarasi variabel yang tidak pernah digunakan (*dead code*), penanganan *asynchronous* yang berpotensi *race condition*, atau pelanggaran *scope*.

**Prettier** adalah *opinionated code formatter*. Prettier tidak peduli pada validitas semantik logika aplikasi. Prettier membedah kode menjadi AST, menghapus semua format bawaan (spasi, indentasi, *line-breaks*), lalu mencetak ulang (*pretty-printing*) AST tersebut dari awal menggunakan algoritma kalkulasi *line-width* dinamis. Hal ini menjamin bahwa seluruh tim memiliki gaya visual yang 100% konsisten tanpa perdebatan manual.

**Biome** hadir sebagai evolusi toolchain modern yang ditulis dengan bahasa Rust. Jika kombinasi ESLint + Prettier memerlukan eksekusi dua *engine* terpisah di atas Node.js runtime (yang membebani I/O dan alokasi memori heap V8), Biome memproses parsing, linting, dan formatting dalam satu AST tunggal terpadu (*unified architecture*) secara paralel di level native memory. Hasilnya adalah peningkatan kecepatan hingga 25–35x lebih cepat dibanding toolchain berbasis Node.js.

### 2. Sintaks & Penggunaan Modern
Mulai ESLint v9+, sistem konfigurasi beralih penuh ke **Flat Config** (`eslint.config.js`) yang berbasis ES Module standar, menggantikan format lama `.eslintrc.*`.

Berikut adalah representasi programatik bagaimana aturan analisis statis dan mekanisme format AST bekerja di balik layar:

```javascript
// Simulasi Engine Mini-Linter & AST Visitor Pattern (ES2024)
class SimpleCodeAnalyzer {
  #rules = new Map();
  #issues = [];

  registerRule(nodeType, validator) {
    if (!this.#rules.has(nodeType)) {
      this.#rules.set(nodeType, []);
    }
    this.#rules.get(nodeType).push(validator);
  }

  // Meniru traversal AST yang dilakukan ESLint / Biome
  traverse(astNode) {
    const validators = this.#rules.get(astNode.type) ?? [];
    for (const validate of validators) {
      const issue = validate(astNode);
      if (issue) this.#issues.push(issue);
    }

    // Traversal rekursif ke anak node (children)
    for (const key of Object.keys(astNode)) {
      if (astNode[key] && typeof astNode[key] === "object") {
        this.traverse(astNode[key]);
      }
    }
  }

  get report() {
    return Object.freeze([...this.#issues]);
  }
}

// Representasi AST dari: const password = "123";
const mockAst = {
  type: "Program",
  body: [
    {
      type: "VariableDeclaration",
      kind: "const",
      declarations: [
        {
          type: "VariableDeclarator",
          id: { type: "Identifier", name: "password" },
          init: { type: "Literal", value: "123" }
        }
      ]
    }
  ]
};

// Inisialisasi Linter Engine
const linter = new SimpleCodeAnalyzer();

// Daftarkan Rule Kualitas Kode
linter.registerRule("VariableDeclarator", (node) => {
  if (node.id.name.toLowerCase().includes("password") && typeof node.init?.value === "string") {
    return {
      rule: "no-hardcoded-credentials",
      message: `Potensi celah keamanan: Kredensial hardcoded pada identifier '${node.id.name}'.`,
      severity: "ERROR"
    };
  }
  return null;
});

// Jalankan analisis
linter.traverse(mockAst);
console.log("Hasil Analisis Statis AST:", linter.report);
```

Struktur konfigurasi nyata `eslint.config.js` (Flat Config):
```javascript
// eslint.config.js (ESM)
import js from "@eslint/js";

export default [
  js.configs.recommended, // Konfigurasi dasar bawaan ESLint
  {
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "eqeqeq": ["error", "always"] // Melarang penggunaan == dan !=
    }
  }
];
```

Konfigurasi ekuivalen pada `biome.json`:
```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": { "noExplicitAny": "error" }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  }
}
```

### 3. Studi Kasus Nyata
Skenario: Membangun pipeline validasi *Quality Gate* berbasis aturan Git Pre-Commit Hook (*lint-staged* simulation) untuk memeriksa kebocoran `console.log` dan memastikan integritas *immutability*.

```javascript
// Pipeline Evaluasi Kualitas Kode Sebelum Commit
const stagedFiles = [
  {
    filename: "src/auth/session.js",
    content: `export function createSession(user) {
  let token = crypto.randomUUID();
  console.log("User token created:", token);
  return { user, token };
}`
  },
  {
    filename: "src/utils/math.js",
    content: `export const add = (a, b) => a + b;`
  }
];

class PreCommitGatekeeper {
  #checks = [];

  addCheck(name, validatorFn) {
    this.#checks.push({ name, validatorFn });
  }

  evaluate(files) {
    const results = { passed: true, errors: [] };

    for (const file of files) {
      for (const check of this.#checks) {
        const error = check.validatorFn(file);
        if (error) {
          results.passed = false;
          results.errors.push(`[${check.name}] pada ${file.filename}: ${error}`);
        }
      }
    }

    return results;
  }
}

const gatekeeper = new PreCommitGatekeeper();

// Rule 1: No debug logging di production files
gatekeeper.addCheck("NO-CONSOLE-LOG", (file) => {
  if (/console\.log\(/.test(file.content)) {
    return "Ditemukan pemanggilan console.log(). Hapus sebelum commit.";
  }
  return null;
});

// Rule 2: Wajib menggunakan const jika tidak ada re-assignment (Prefer-Const)
gatekeeper.addCheck("PREFER-CONST", (file) => {
  if (/let\s+[a-zA-Z0-9_]+\s*=\s*[^;]+;/.test(file.content) && !/token\s*=/.test(file.content.slice(file.content.indexOf("token") + 5))) {
    return "Variabel dideklarasikan dengan 'let' tetapi tidak pernah di-reassign. Gunakan 'const'.";
  }
  return null;
});

const execution = gatekeeper.evaluate(stagedFiles);

console.log("Status Pre-Commit Gatekeeper:", execution.passed ? "PASSED" : "FAILED");
console.log("Detail Pelanggaran:", execution.errors);
```

### 4. Visualisasi & Mental Model
Perbedaan alur pemrosesan kode antara toolchain Node.js tradisional vs Toolchain Native Rust:

```text
┌────────────────────────────────────────────────────────────────────────┐
│             TRADISIONAL (ESLint + Prettier via Node.js V8)             │
│                                                                        │
│ Source ──> [Espree Parser] ──> AST 1 ──> [ESLint Rules] (Semantics)    │
│   Code ──> [Babel/Prettier]──> AST 2 ──> [Doc IR Printer] (Formatting) │
│            (Duplikasi parsing AST & Overhead I/O Memori V8 Engine)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   MODERN UNIFIED TOOLCHAIN (Biome Rust)                │
│                                                                        │
│ Source ──> [Native Rust Lexer/Parser] ──> Single Unified CST/AST       │
│                                                   │                    │
│            ┌──────────────────────────────────────┴──────────┐         │
│            ▼                                                 ▼         │
│   [Parallel Linter Pass]                         [Parallel Formatter]  │
│   (Zero GC Overhead, CPU SIMD Optimization, Instant Execution)         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Pemisahan Peran Tegas**: Gunakan ESLint/Linter hanya untuk aturan *code quality* dan *bug prevention* (seperti `no-floating-promises`, `eqeqeq`). Nonaktifkan semua aturan format visual di ESLint (gunakan `eslint-config-prettier`) agar tidak konflik dengan Formatter.
- ✅ **Optimasi CI/CD dengan Cache**: Selalu aktifkan opsi `--cache` pada ESLint (`eslint . --cache`) guna menghindari parsing ulang file yang tidak mengalami perubahan.
- ✅ **Gunakan Git Hooks Ringan**: Kombinasikan `husky` dengan `lint-staged` agar linter hanya memeriksa file yang masuk status *staged* (git add), bukan seluruh *codebase*, sehingga proses commit tetap instan.
- ❌ **Anti-Pattern**: Menjalankan *auto-fix formatting* langsung di dalam pipeline CI utama tanpa verifikasi lokal. Hal ini memicu *merge conflicts* tersembunyi dan komputasi *build* yang redundan.

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, modifikasi kelas `SimpleCodeAnalyzer` agar dapat mendeteksi penggunaan operator perbandingan longgar `==` atau `!=` pada sebuah AST tiruan bertipe `BinaryExpression`. Kembalikan pesan eror yang merekomendasikan penggunaan strict equality `===` atau `!==`.
2. Buat simulasi validator aturan *floating promise* di **Code Editor di bawah**: Deteksi ekspresi pemanggilan fungsi `async` yang tidak diawali oleh kata kunci `await` atau tidak memiliki method `.catch()`.

---

## 🔗 Referensi
- [ESLint Official Documentation: Flat Config Guide](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Biome Documentation: Architecture & Migration](https://biomejs.dev/)
- [ECMAScript Language Specification: Lexical Grammar](https://tc39.es/ecma262/)