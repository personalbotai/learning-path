# Strategi Migrasi JavaScript ke TypeScript

Memigrasikan codebase JavaScript yang sudah ada ke TypeScript adalah proses yang bisa dilakukan secara bertahap. Panduan ini mencakup strategi, tools, dan best practices untuk migrasi yang aman tanpa mengganggu funkcionalitas existing.

⏱️ 30 menit
📊 Kesulitan: Tinggi

## 🎯 Tujuan Pembelajaran

-
Memahami pendekatan bertahap untuk migrasi JS ke TS

-
Menggunakan `allowJs` dan `checkJs` options di tsconfig.json

-
Menambahkan type annotations secara incremental

-
Mengonversi file .js ke .ts dengan aman

-
Mengelola mixed JS/TS codebase selama transisi

## 📚 Konten Utama

### Migrasi Bertahap (Gradual Migration)

TypeScript mendukung migrasi bertahap dengan mengizinkan JavaScript dan TypeScript files berjalan bersama. Ini memungkinkan Anda menambahkan types secara bertahap tanpa harus rewrite seluruh codebase sekaligus.

### Tsconfig Options untuk Migrasi

Konfigurasi `tsconfig.json` berikut memudahkan migrasi:

{
"compilerOptions": {
"allowJs": true,          // Izinkan import JavaScript files
"checkJs": true,          // Type-check JavaScript files (opsional)
"maxNodeModuleJsDepth": 2,  // Batasi kedalaman checking di node_modules
"strict": false,        // Nonaktifkan strict mode sementara
"noEmit": true,          // Cek type saja, jangan emit JS (opsional)
// ... other options
},
"include": ["src/**/*"],
"exclude": ["node_modules"]
}

### Step-by-Step Migration Process

#### Step 1: Initialize TypeScript

npm install --save-dev typescript
npx tsc --init

#### Step 2: Enable `allowJs`

Edit `tsconfig.json` untuk mengizinkan JavaScript files. TypeScript akan mengimpor dan type-check JS files tanpa error (jika `checkJs` diaktifkan).

#### Step 3: Rename Files ke .ts

Mulai dari file-file yang paling sederhana atau isolated. Gunakan tools seperti `jscodeshift` atau script custom untuk mass rename.

# Contoh: rename batch (Unix/Linux)
find src -name "*.js" -type f -exec bash -c 'mv "$0" "${0%.js}.ts"' {} \;

#### Step 4: Fix Type Errors

Setelah file di-rename ke .ts, TypeScript akan mulai reporting errors. Perbaiki secara bertahap:

- Tambahkan type annotations untuk fungsi parameters dan return values

- Gunakan `any` sementara untuk kompleksitas tinggi

- Definisikan interfaces untuk objects

- Hindari `any` di kode baru

#### Step 5: Enable Strict Mode

Setelah sebagian besar file terkonversi, aktifkan `"strict": true` untuk mendapatkan type safety maksimal.

### Incremental Type Annotations

Untuk file JS yang masih ingin di-keep sebagai .js, tambahkan JSDoc type annotations. TypeScript akan membaca JSDoc dan memberikan type checking:

/**
* @param {string} name
* @param {number} age
* @returns {{greeting: string}}
*/
function createUser(name, age) {
return { greeting: `Hello ${name}` };
}

### Common Migration Challenges

#### Dynamic Properties & `any`

JavaScript sering menggunakan dynamic object properties. Gunakan index signatures atau `Record` untuk sementara.

#### External Libraries Without Types

Gunakan `declare module` di custom .d.ts file atau install @types packages.

#### Implicit Any Parameters

Dengan `"noImplicitAny": false` sementara, lalu perbaiki satu per satu.

### Tools untuk Migrasi

- **ts-migrate**: Airbnb tool untuk mass migration

- **jscodeshift**: Codemod transforms

- **TypeScript ESLint**: Automated fixes dengan `--fix`

- **VS Code**: Quick fixes dan auto-imports

## 💻 Exercises

### Exercise 1: Setup Mixed Project

Buat proyek dengan JS dan TS files berjalan bersama.

- Buat `tsconfig.json` dengan `allowJs: true`

- Tambahkan beberapa .js files yang meng-import module lain

- Run `npx tsc --noEmit` untuk cek types tanpa emit

- Verifikasi tidak ada errors

### Exercise 2: Convert One File

Konversi file .js ke .ts dan tambahkan types.

- Pilih file .js sederhana (misal: utility function)

- Rename ke .ts

- Tambahkan parameter types dan return type

- Fix semua TypeScript errors yang muncul

### Exercise 3: JSDoc Annotations

Tambahkan JSDoc ke file .js yang tidak ingin di-convert.

- Pilih file .js dengan fungsi kompleks

- Tambahkan JSDoc comments untuk parameter dan return types

- Pastikan `checkJs: true` di tsconfig

- Run TypeScript check dan verify types dipahami

← Previous

Take Quiz
