# tsconfig.json: Struktur dan Opsi

**tsconfig.json** adalah file konfigurasi utama TypeScript compiler. File ini menentukan compiler options, file inclusion/exclusion, dan perilaku TypeScript project. Memahami tsconfig.json adalah kunci untuk mengoptimalkan TypeScript development workflow.

⏱️ 25 menit
📊 Kesulitan: Menengah
📚 Tipe: Configuration

##
Tujuan Pembelajaran

-
Memahami tujuan dan keberadaan **tsconfig.json**

-
Mengetahui struktur dasar JSON configuration

-
Mengidentifikasi **compiler options** utama yang sering digunakan

-
Mengonfigurasi **include/exclude** untuk file selection

-
Memahami **extends** untuk konfigurasi reusable

-
Mengetahui **type acquisition** dan `types` option

## Apa itu tsconfig.json?

**tsconfig.json** adalah file JSON yang berisi opsi-opsi untuk **TypeScript compiler (tsc)**. Ketika perintah `tsc` dijalankan di direktori yang mengandung tsconfig.json, compiler akan membaca konfigurasi ini dan menerapkannya pada seluruh project. Tanpa tsconfig.json, TypeScript menggunakan default settings.

### 🔑 Manfaat tsconfig.json:

- **Consistency**: Semua developer menggunakan compiler settings yang sama

- **Optimization**: Enable strict checking, optimize output format

- **Project Structure**: Define mana file yang termasuk dalam project

- **Integration**: Compatible dengan build tools, bundlers, IDE

- **Inheritance**: Bisa extend dari config lain (contoh: @tsconfig/recommended)

## Struktur Dasar tsconfig.json

{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"strict": true,
"outDir": "./dist",
"rootDir": "./src",
"esModuleInterop": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}

## Compiler Options Utama

Bagian `compilerOptions` adalah hati dari tsconfig.json. Berikut adalah opsi-opsi paling penting:

### 1. Target dan Module

Option
Deskripsi
Nilai Umum

`target`
ECMAScript version untuk output JavaScript
ES2020, ES2015, ES5

`module`
Module system untuk output
commonjs, es2020, esnext

`lib`
Library types yang disertakan
["ES2020", "DOM"]

{
"compilerOptions": {
"target": "ES2022",      // Output JS dengan ES2022 features
"module": "NodeNext",  // ES Modules dengan Node.js resolution
"lib": ["ES2022", "DOM", "DOM.Iterable"]
}
}

### 2. Strictness Options

### 🚨 Strict Mode:

Opsi `"strict": true` mengaktifkan **ALL** strict type-checking options. Sangat disarankan untuk production projects.

Strict mode include: `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `alwaysStrict`.

{
"compilerOptions": {
"strict": true,  // Enable all strict options

// Atau enable satu per-satu:
"noImplicitAny": true,     // Error jika type any tidak explicit
"strictNullChecks": true,  // null dan undefined bukan subtype dari semua type
"strictFunctionTypes": true
}
}

### 3. Output Directory Options

{
"compilerOptions": {
"outDir": "./dist",        // Output compiled JS ke folder dist
"rootDir": "./src",        // Source files berada di src
"declaration": true,      // Generate .d.ts files
"declarationMap": true,  // Source map untuk .d.ts
"sourceMap": true,        // Generate .js.map files
"removeComments": false
}
}

### 4. Interop Options

{
"compilerOptions": {
"esModuleInterop": true,   // Enable default import dari CommonJS
"allowSyntheticDefaultImports": true,
"resolveJsonModule": true,    // Bisa import .json files
"isolatedModules": true,     // Each file transpile independently
"noEmit": false             // Set true untuk type-checking only
}
}

## Include dan Exclude

Opsi `include` dan `exclude` mengontrol file mana yang diproses oleh TypeScript compiler. Jika tidak ditentukan, TypeScript akan include semua `.ts` files di folder tsconfig.json dan subfolders, kecuali `node_modules`.

{
"include": [
"src/**/*",           // Semua .ts files di src dan subfolders
"tests/**/*.ts",      // Test files
"scripts/*.ts"        // Build scripts
],
"exclude": [
"node_modules",       // Always exclude node_modules
"dist",               // Build output
"**/*.test.ts"       // Test files (jika tidak include)
]
}

### ⚠️ Catatan:

`exclude` hanya berlaku untuk files yang sudah include oleh `include` atau default. Jika file tidak match `include`, dia tidak akan diproses meski tidak di-`exclude`.

## Extending Config

TypeScript mendukung **config inheritance** melalui `extends`. Ini memungkinkan Anda membuat base config dan reuse di multiple projects.

{
"extends": "@tsconfig/recommended",  // Base config dari community
"compilerOptions": {
"target": "ES2022",
"module": "NodeNext"
// Opsi lain override atau tambah
}
}

### ✅ Popular Base Configs:

- `@tsconfig/recommended` - Strict settings (disarankan)

- `@tsconfig/node16` - Untuk Node.js 16+

- `@tsconfig/strictest` - Maximum strictness

## Type Acquisition (types option)

Opsi `types` mengontrol mana `@types` packages yang di-load secara otomatis. Jika tidak ditentukan, semua packages di `node_modules/@types` akan di-include.

{
"compilerOptions": {
// Hanya include types yang spesifik
"types": ["node", "jest", "express"]
}
}

{
"compilerOptions": {
// Disable auto-inclusion semua @types (manual import only)
"types": []
}
}

## Contoh Lengkap: Production tsconfig.json

{
"extends": "@tsconfig/recommended",
"compilerOptions": {
"target": "ES2022",
"module": "NodeNext",
"lib": ["ES2022"],
"outDir": "./dist",
"rootDir": "./src",
"declaration": true,
"sourceMap": true,
"esModuleInterop": true,
"resolveJsonModule": true,
"skipLibCheck": true,      // Skip type checking di @types
"forceConsistentCasingInFileNames": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist", "**/*.test.ts"]
}

### 💡 Tips:

- Gunakan `tsc --init` untuk generate tsconfig.json template

- Mulai dengan `"strict": true` dan adjust sesuai kebutuhan

- Simpan tsconfig.json di root project

- Gunakan `"skipLibCheck": true` untuk mempercepat compilation (hanya type-check own code)

##
💻
Latihan Praktis

### Latihan 1: Buat tsconfig untuk Library

Buat `tsconfig.json` untuk TypeScript library yang akan dipublish ke npm:

- Target: ES2020

- Module: ESNext (untuk bundlers)

- Generate declaration files (.d.ts)

- Include src folder saja

- Strict mode on

- OutDir: dist

### Latihan 2: React App Config

Buat tsconfig untuk React application dengan:

- JSX support (`"jsx": "react-jsx"`)

- Target ES2020, module ESNext

- Include src folder

- Strict mode

- ES Module interop

### Latihan 3: Config Inheritance

Buat `tsconfig.base.json` dengan strict settings dan common options. Lalu buat `tsconfig.json` yang extends base dan override:

- target: ES2022

- outDir: ./build

- include src dan tests

← Sebelumnya

🔖 Bookmark

✓ Selesai

Selanjutnya: Compiler Options →
