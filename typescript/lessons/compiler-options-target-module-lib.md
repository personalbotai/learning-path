# Compiler Options: target, module, lib

Tiga compiler options paling fundamental dalam TypeScript adalah `target`, `module`, dan `lib`. Opsi-opsi ini menentukan JavaScript version output, module system, dan library type definitions yang tersedia.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Configuration Deep Dive

##
Tujuan Pembelajaran

-
Memahami **target** option dan ECMAScript versions mapping

-
Membedakan berbagai **module formats** (CommonJS, ESNext, dll)

-
Memahami **lib** option dan built-in type definitions

-
Mengetahui kombinasi optimal `target` + `module` untuk berbagai environments

-
Mengonfigurasi untuk **Node.js**, **Browser**, **React**, **Library**

-
Memahami impact pada **polyfills** dan browser compatibility

## Target Option: JavaScript Version Output

Opsi `target` menentukan versi ECMAScript (ES3, ES5, ES2015, ES2020, dll) yang akan di-generate oleh TypeScript compiler. TypeScript akan **downlevel transform** syntax yang tidak didukung oleh target version.

### 🔑 Dasar Target:

- **ES3**: Browser lama (IE8-) - hampir tidak digunakan lagi

- **ES5**: Browser modern (IE9+), Node.js 0.12+ - masih umum

- **ES2015 (ES6)**: Browser modern 2015+, Node.js 6+

- **ES2020+**: Node.js 14+, modern browsers (Chrome 80+, Firefox 75+)

- **ESNext**: Latest ECMAScript features - untuk cutting-edge environments

### Pertimbangan Pilihan Target

Target
Browser Support
Node.js
Use Case

ES5
IE9+, all modern
0.12+
Maximum compatibility

ES2015
Chrome 49+, Firefox 45+
6+
Modern apps (good balance)

ES2020
Chrome 80+, Firefox 75+
14+
Current standard

ESNext
Latest browsers
Latest
Cutting-edge, experimental

{
"compilerOptions": {
"target": "ES2020"  // Output ES2020-compatible JavaScript
}
}

## Module Option: Module System

Opsi `module` menentukan format module system yang digunakan dalam output JavaScript. Pilihan ini harus sesuai dengan environment runtime dan bundler.

### 📦 Module Formats:

- `commonjs`: Node.js classic (require/module.exports)

- `es2020`, `es2022`: ES Modules untuk respective targets

- `esnext`: Latest ES module syntax (import/export)

- `amd`: Asynchronous Module Definition (browser, RequireJS)

- `system`: SystemJS loader

- `none`: No module system (IIFE, concatenated)

### Kombinasi Target & Module untuk Berbagai Environments

Environment
Target
Module
Notes

Node.js (modern)
ES2020/ES2022
NodeNext
ESM dengan Node resolution

Node.js (legacy)
ES5
CommonJS
Maximum compatibility

React (Create React App)
ES5
ESNext
Bundler handles transpilation

Library (npm)
ES5/ES2015
ESNext
Let bundler tree-shake

Browser (script tag)
ES5
None/System
No module loader

{
"compilerOptions": {
"target": "ES2020",
"module": "NodeNext"  // Node.js 12+ dengan ESM
}
}

## Lib Option: Type Definitions

Opsi `lib` menentukan built-in type definitions yang di-include (DOM, ES APIs, WebWorker, dll). Jika tidak ditentukan, TypeScript akan include default library sesuai dengan `target`.

### Common Lib Values

{
"compilerOptions": {
"lib": [
"ES2020",           // ES2020 built-ins (Promise, Map, Set, dll)
"DOM",              // Browser DOM APIs (document, window, dll)
"DOM.Iterable",     // Iterable support for DOM (NodeList, dll)
"WebWorker",        // Web Worker APIs
"ES2021.String"    // Specific ES2021 features only
]
}
}

### ⚠️ Penting:

Jika `target` adalah `ES5` tapi `lib` include `"ES2020"`, TypeScript akan **error** karena ES5 tidak tahu ES2020 APIs. Pastikan `lib` compatible dengan `target`.

### Contoh: Browser vs Node.js

// Browser application (React, Vue, etc)
{
"compilerOptions": {
"target": "ES2015",
"module": "ESNext",
"lib": ["ES2015", "DOM", "DOM.Iterable"]
}
}

// Node.js backend application
{
"compilerOptions": {
"target": "ES2020",
"module": "NodeNext",
"lib": ["ES2020"]  // No DOM types needed
}
}

## Impact pada Polyfills

Ketika `target` adalah ES5, TypeScript akan **downlevel transform** ES6+ syntax ke ES5 (misal: arrow functions → regular functions, const → var). Namun, **built-in APIs** seperti `Promise`, `Map`, `Set` tidak di-transform. Anda harus menyertakan **polyfills** di aplikasi jika ingin support browser yang tidak memiliki APIs tersebut.

### 📌 Example:

Jika `target: ES5`, kode berikut:

const map = new Map([['a', 1]]);

Akan di-transform ke ES5 syntax (const → var), tapi `Map` tetap ada. Di browser IE yang tidak support Map, code akan error. Solusi: tambahkan polyfill untuk Map atau naikkan `target` ke ES2015+.

## Best Practices

### ✅ Recommended Settings

- **Modern Node.js**: target ES2020+, module NodeNext

- **React/Vue apps**: target ES5 (for compatibility), module ESNext (for bundlers)

- **Libraries**: target ES5/ES2015, module ESNext (let bundler decide)

- Always specify `lib` for browser apps (include DOM)

- Use `"skipLibCheck": true` untuk mempercepat compilation

### ⚠️ Avoid

- `target: ES3` - obsolete, hampir tidak perlu

- `module: AMD/System` - kecuali legacy system

- `module: None` dengan ES6 imports - akan error

- Mismatch `lib` dan `target` (version conflict)

##
💻
Latihan Praktis

### Latihan 1: Config untuk Node.js API Server

Buat tsconfig untuk Node.js Express API server:

- Target: ES2022 (Node.js 16+)

- Module: NodeNext (ES Modules)

- Include ES2020 lib only (no DOM)

- OutDir: ./dist

- Strict mode

### Latihan 2: Config untuk React App

Buat tsconfig untuk React 18 aplikasi:

- Target: ES5 (maximum browser compatibility)

- Module: ESNext (Webpack/Babel akan handle)

- JSX: react-jsx (React 17+)

- Lib: ES2015 + DOM + DOM.Iterable

- Include src folder

### Latihan 3: Library Config untuk npm Package

Anda membuat TypeScript library yang akan dipublish. Buat config yang:

- Target: ES2015 (balance compatibility vs modern features)

- Module: ESNext (tree-shakable untuk bundlers)

- Generate declaration files (.d.ts)

- Include src, exclude tests/docs

- No DOM libs (pure logic library)

← Sebelumnya: tsconfig.json Struktur

🔖 Bookmark

✓ Selesai

Selanjutnya: Strict Mode Options →
