# Hello World: TypeScript Pertama

Selamat! Anda telah mempelajari dasar-dasar TypeScript. Di lesson ini, kita akan membuat program "Hello World" pertama, mengkompilasi, dan menjalankannya. Ini adalah langkah pertama Anda dalam perjalanan mastering TypeScript.

⏱️ 10 menit
📊 Kesulitan: Pemula
✅ prerequisites: TypeScript terinstall, project setup selesai

##
Tujuan Pembelajaran

-
Menulis program "Hello World" pertama dalam TypeScript

-
Mengkompilasi file .ts menjadi .js menggunakan tsc

-
Menjalankan output JavaScript di terminal (Node.js)

-
Memahami output JavaScript yang dihasilkan TypeScript

-
Debugging error umum pada tahap pertama

## Program Hello World

Mari kita mulai dengan program paling sederhana. Buat file `hello.ts` di dalam folder `src/` project Anda:

```
// hello.ts - TypeScript Hello World
const message: string = "Hello, TypeScript World!";
console.log(message);
```

Mari kita breakdown kode di atas:

- `const message: string = ...` - kita mendeklarasikan variabel `message` dengan explicit type `string`. Ini adalah TypeScript type annotation.

- `console.log(message)` - sama seperti JavaScript, kita menggunakan `console.log` untuk output ke console.

### Kompilasi ke JavaScript

Kompilasi file `hello.ts` menjadi JavaScript:

```
# Kompilasi single file
tsc src/hello.ts

# Atau jika menggunakan tsconfig.json
npm run build
```

File `hello.js` yang dihasilkan akan terletak di `dist/src/hello.js` (jika menggunakan outDir `./dist`). Kontennya:

```
var message = "Hello, TypeScript World!";
console.log(message);
```

### ✅ Type Erasure Berhasil

Perhatikan bahwa type annotation `: string` sudah tidak ada di output JavaScript. TypeScript menghapus semua type information saat kompilasi. Ini adalah **type erasure**.

## Menjalankan Program

Sekarang kita memiliki file JavaScript di `dist/`, jalankan dengan Node.js:

```
# Navigate ke direktori project
cd my-typescript-project

# Jalankan file JavaScript yang dihasilkan
node dist/src/hello.js

# Output:
Hello, TypeScript World!
```

### Full Workflow dengan npm Scripts

Jika Anda sudah setup npm scripts seperti di lesson sebelumnya:

```
# Build dan run dalam satu perintah
npm run dev

# Atau build dulu, lalu run terpisah
npm run build
npm run start
```

## Debugging Error Umum

###
ERROR
Cannot find name 'console'

Error ini terjadi jika `tsconfig.json` tidak include DOM library. TypeScript tidak tahu apa itu `console`.

Solusi: Pastikan `tsconfig.json` memiliki:

```
"lib": ["ES2020", "DOM"]
```

###
ERROR
File '.../hello.js' not found

File JavaScript tidak ditemukan. Mungkin kompilasi belum dijalankan atau path salah.

Solusi:

- Jalankan `tsc src/hello.ts` atau `npm run build`

- Cek `outDir` di tsconfig.json

- Pastikan file `hello.js` ada di `dist/src/`

###
ERROR
'tsc' is not recognized as an internal or external command

TypeScript compiler tidak ada di PATH.

Solusi:

- Jika install global: pastikan npm global bin di PATH

- Jika per-project: gunakan `npx tsc` atau `npm run build`

- Cek instalasi: `npx tsc --version`

## Apa Selanjutnya?

Anda telah berhasil menulis, mengkompilasi, dan menjalankan program TypeScript pertama! Ini adalah fondasi yang solid. Di module selanjutnya, kita akan mendalami:

- **Module 2:** Tipe data dasar (primitif, array, tuple, enum)

- **Module 3:** Advanced types (union, intersection, type guards)

- **Module 4:** Interfaces dan type aliases

- Dan masih banyak lagi...

### 🎉 Selamat! Module 1 Selesai

Anda sekarang memahami dasar-dasar TypeScript: apa itu TypeScript, cara instalasi, compiler, project setup, dan menulis program pertama. Mari lanjutkan ke Module 2 untuk mendalami tipe data!

##
📝
Quiz - Hello World & Final

Quiz ini menguji pemahaman Anda tentang module 1 secara keseluruhan.

Loading quiz questions...

← Sebelumnya: Project Setup dengan TypeScript

Lesson 6 of 6 • Module 1 Complete

Lanjut ke Module 2: Tipe Primitif →
