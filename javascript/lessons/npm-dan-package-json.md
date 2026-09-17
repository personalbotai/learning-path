# npm, pnpm, dan Bun: Dependency Management Modern

**Slug**: `npm-dan-package-json` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai anatomi mendalam `package.json` modern (klasifikasi dependencies, `type: "module"`, conditional `exports` map, dan subpath imports `#`).
- Memahami kalkulasi algoritma Semantic Versioning (SemVer) beserta implikasi deterministik lockfile.
- Membedah perbedaan arsitektur internal: Flat/Hoisted tree (npm), Content-Addressable Storage & Symlinks (pnpm), serta Fast System Calls & Binary Resolution (Bun).
- Mengonfigurasi arsitektur Monorepo Workspaces untuk isolasi dan orkestrasi multi-package.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Manajemen dependensi dalam ekosistem JavaScript telah berevolusi dari sekadar pengunduhan arsip tarball menjadi komputasi graf dependensi yang kompleks. Pusat deklarasi dependensi terletak pada file `package.json`. Di balik layar, module loader (seperti Node.js ESM loader atau V8 embedder) membaca metadata file ini untuk menentukan runtime behavior modul melalui key `"type": "module"` dan modern `"exports"` map yang menggantikan legacy field `"main"`.

#### Klasifikasi Dependensi & SemVer
1. **`dependencies`**: Modul esensial untuk eksekusi aplikasi di production runtime.
2. **`devDependencies`**: Modul yang hanya diperlukan saat development, testing, atau build phase (misal: compiler TypeScript, bundler, test runner).
3. **`peerDependencies`**: Modul yang tidak diinstal langsung oleh package bersangkutan, melainkan mewajibkan *host project* untuk menyediakan versi paket yang kompatibel (umum pada plugin atau UI library).

Semantic Versioning (SemVer) diformulasikan sebagai `MAJOR.MINOR.PATCH`:
- **Caret (`^1.2.3`)**: Mengizinkan pembaruan *minor* dan *patch* (`>=1.2.3 <2.0.0`), menjamin tidak ada breaking API changes.
- **Tilde (`~1.2.3`)**: Mengizinkan pembaruan *patch* saja (`>=1.2.3 <1.3.0`), berfokus pada bugfix internal.
- **Exact (`1.2.3`)**: Mengunci versi secara absolut tanpa toleransi perubahan versi.

#### Evolusi Arsitektur Package Manager
- **npm (v3+ / Flat Hoisting)**: Menyelesaikan masalah nested path limit Windows dengan melakukan *hoisting* dependensi ke level root `node_modules`. Konsekuensi negatif: Membuka celah **Phantom Dependencies** (modul dapat me-`import` package yang tidak tercantum di `package.json` karena paket tersebut di-hoist oleh dependensi lain).
- **pnpm (Hard Links & Symlinks)**: Menggunakan pendekatan *Content-Addressable Storage* global (CAS). Semua file dependensi disimpan satu kali di storage global disk (`~/.local/share/pnpm/store`). Proyek menggunakan *hard link* ke storage global dan *symbolic link* nested (`node_modules/.pnpm`) untuk merefleksikan struktur graf yang presisi. Pendekatan ini 100% memitigasi phantom dependencies dan menghemat ruang disk secara signifikan.
- **Bun (Native Zig Architecture)**: Menghilangkan bottleneck Node.js I/O dengan mengimplementasikan native system calls berkecepatan tinggi (`clonefile` pada macOS, `copy_file_range` pada Linux), parser lockfile biner/teks berperforma tinggi, dan memory-mapped files via runtime berbasis Zig.

---

### 2. Sintaks & Penggunaan Modern

Struktur `package.json` modern ES2024 memanfaatkan fitur conditional exports untuk membedakan target environment (Node.js, Browser, Bun) serta subpath imports internal:

```javascript
// Simulasi konfigurasi package.json modern yang direpresentasikan sebagai objek JS
const modernPackageJson = {
  name: "@enterprise/core-kernel",
  version: "2.4.0",
  type: "module",
  exports: {
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./security": {
      import: "./dist/security/index.js"
    },
    "./package.json": "./package.json"
  },
  imports: {
    "#utils/*": "./src/utils/*.js",
    "#config": {
      production: "./src/config/prod.js",
      default: "./src/config/dev.js"
    }
  },
  dependencies: {
    "zod": "^3.22.4"
  },
  devDependencies: {
    "esbuild": "~0.20.0"
  },
  peerDependencies: {
    "react": ">=18.0.0 <19.0.0"
  },
  workspaces: [
    "packages/*",
    "apps/*"
  ]
};

// Validasi dan Resolusi Subpath Imports secara programmatic
function resolveInternalSubpath(importPath, env = "development") {
  if (!importPath.startsWith("#")) {
    throw new Error("Invalid subpath import: Harus diawali '#' sesuai spesifikasi Node.js ESM");
  }

  if (importPath.startsWith("#utils/")) {
    const file = importPath.replace("#utils/", "");
    const pattern = modernPackageJson.imports["#utils/*"];
    return pattern.replace("*", file);
  }

  if (importPath === "#config") {
    const configTarget = modernPackageJson.imports["#config"];
    return env === "production" ? configTarget.production : configTarget.default;
  }

  throw new Error(`Module '${importPath}' tidak didefinisikan dalam imports map.`);
}

console.log("Resolved Helper Module:", resolveInternalSubpath("#utils/string-formatter"));
console.log("Resolved Config (Prod):", resolveInternalSubpath("#config", "production"));
console.log("Resolved Config (Dev):", resolveInternalSubpath("#config", "development"));
```

---

### 3. Studi Kasus Nyata: Engine Evaluator SemVer & Resolusi Konflik Graf Dependensi

Berikut adalah simulasi engine resolusi dependensi yang memvalidasi rentang SemVer serta mendeteksi potensi *Phantom Dependency* dan *Peer Dependency Mismatch*:

```javascript
class DependencyResolverEngine {
  #manifest;
  #installedModules = new Map();

  constructor(manifest) {
    this.#manifest = manifest;
  }

  // Parse semver sederhana: [Major, Minor, Patch]
  #parseVersion(versionStr) {
    const clean = versionStr.replace(/[\^~>=<]/g, "").trim();
    return clean.split(".").map(Number);
  }

  // Cek apakah versi aktual memenuhi operator SemVer (^, ~, exact)
  isSatisfied(targetRange, actualVersion) {
    const [tMajor, tMinor, tPatch] = this.#parseVersion(targetRange);
    const [aMajor, aMinor, aPatch] = this.#parseVersion(actualVersion);

    if (targetRange.startsWith("^")) {
      // Caret: Major harus identik, Minor/Patch aktual >= target
      return aMajor === tMajor && (aMinor > tMinor || (aMinor === tMinor && aPatch >= tPatch));
    }
    
    if (targetRange.startsWith("~")) {
      // Tilde: Major & Minor harus identik, Patch aktual >= target
      return aMajor === tMajor && aMinor === tMinor && aPatch >= tPatch;
    }

    // Exact match
    return aMajor === tMajor && aMinor === tMinor && aPatch === tPatch;
  }

  // Registrasi paket yang terpasang fisik di disk
  registerInstalled(pkgName, version, isDirectDependency = false) {
    this.#installedModules.set(pkgName, { version, isDirectDependency });
  }

  // Simulasi pemanggilan require/import modul
  resolveModule(moduleName, callerContext = "root") {
    const declaredInDeps = this.#manifest.dependencies?.[moduleName] || 
                           this.#manifest.devDependencies?.[moduleName];

    const installed = this.#installedModules.get(moduleName);

    if (!installed) {
      throw new Error(`[ModuleNotFound] Paket '${moduleName}' belum terpasang.`);
    }

    // Deteksi Phantom Dependency (diakses langsung tapi tidak ada di manifest root)
    if (!declaredInDeps && callerContext === "root") {
      console.warn(`⚠️ [PHANTOM DEPENDENCY DETECTED]: Root mencoba mengimpor '${moduleName}'. Paket ini ada di node_modules (hoisted), tetapi TIDAK dideklarasikan di package.json!`);
    }

    // Validasi kesesuaian SemVer
    if (declaredInDeps) {
      const satisfied = this.isSatisfied(declaredInDeps, installed.version);
      if (!satisfied) {
        throw new Error(`[SemVerMismatch] Versi '${installed.version}' tidak memenuhi range '${declaredInDeps}'`);
      }
    }

    return {
      status: "RESOLVED",
      module: moduleName,
      version: installed.version,
      isStrictlyIsolated: !declaredInDeps ? "FAILED (Phantom)" : "PASSED"
    };
  }
}

// Inisialisasi Project Manifest
const projectManifest = {
  dependencies: {
    "fastify": "^4.20.0",
    "pino": "~8.14.0"
  },
  devDependencies: {
    "typescript": "5.3.3"
  }
};

const resolver = new DependencyResolverEngine(projectManifest);

// Simulasi Tree Node Modules
resolver.registerInstalled("fastify", "4.26.1", true);
resolver.registerInstalled("pino", "8.14.2", true);
resolver.registerInstalled("typescript", "5.3.3", true);
// 'split2' adalah transitive dependency milik 'pino', ter-hoist di flat node_modules
resolver.registerInstalled("split2", "4.2.0", false);

// 1. Resolusi Valid Dependensi Langsung
console.log("Fastify Resolution:", resolver.resolveModule("fastify"));
console.log("Pino Resolution:", resolver.resolveModule("pino"));

// 2. Simulasi Bahaya Phantom Dependency pada NPM Hoisting
console.log("Split2 Resolution:", resolver.resolveModule("split2"));
```

---

### 4. Visualisasi & Mental Model

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PERBANDINGAN ARSITEKTUR FISIK DISK                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. npm (Hoisting Model)                                                     │
│    node_modules/                                                            │
│    ├── fastify/                                                             │
│    ├── pino/                                                                │
│    └── split2/ (Transitive dep diangkat ke root -> Rawan Phantom Dep)       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. pnpm (Content-Addressable Storage + Symlinks)                            │
│    Global CAS Store: ~/.local/share/pnpm/store/files/ab/c128...             │
│    Project: node_modules/                                                   │
│    ├── fastify/ (Symlink ke .pnpm)                                          │
│    ├── pino/    (Symlink ke .pnpm)                                          │
│    └── .pnpm/                                                               │
│        ├── pino@8.14.2/node_modules/ (Hard Link ke CAS global)              │
│        │   └── split2/ (Hanya dapat diakses pino -> Strict Isolation)       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. Bun (Native Binary & Kernel Fast Path)                                   │
│    Lockfile: bun.lockb (Binary AST parsed langsung ke C++/Zig memory)        │
│    Syscalls: copy_file_range (Linux) / clonefile (macOS) -> I/O Zero-Cost   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `exports` map dan hindari mengekspos internal path modul**: Selalu definisikan entry point eksplisit melalui `"exports"` pada `package.json` untuk mengenkapsulasi file internal library.
- ✅ **Gunakan `pnpm` atau `bun` pada CI/CD Pipeline**: Menghemat bandwidth dan memory runner secara signifikan berkat deduplikasi storage global dan immutable hard links.
- ✅ **Gunakan `npm ci` atau `pnpm install --frozen-lockfile` di CI**: Jangan gunakan plain `install` pada pipeline otomatis guna mencegah mutasi tak terduga pada lockfile.
- ❌ **Hindari Phantom Dependencies**: Mengimpor modul pihak ketiga tanpa mendaftarkannya di `package.json` dapat menyebabkan runtime crash mendadak saat dependency tree berubah susunan hoisting-nya.

---

## ✍️ Latihan Mandiri
1. Modifikasi method `isSatisfied` pada class `DependencyResolverEngine` di Code Editor di bawah untuk mendukung evaluasi exact version matching (`=1.0.0` atau `1.0.0`) dan rentang operator ganda (misal: `>=18.0.0 <19.0.0`).
2. Buat simulasi konfigurasi Workspace Monorepo di Code Editor di bawah yang menghubungkan modul internal `@app/ui` dengan `@app/backend` melalui referensi `workspace:*`.

---

## 🔗 Referensi
- [Node.js Package Entry Points & Exports Documentation](https://nodejs.org/api/packages.html#package-entry-points)
- [Semantic Versioning 2.0.0 Specification](https://semver.org/)
- [pnpm Symlinked `node_modules` Architecture](https://pnpm.io/symlinked-node-modules-structure)