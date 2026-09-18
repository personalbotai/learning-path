# TypeScript Compiler (tsc)

`tsc` (TypeScript Compiler) adalah heart dari TypeScript ecosystem. Compiler ini mengubah kode TypeScript (.ts) menjadi JavaScript (.js) yang dapat dijalankan di browser atau Node.js. Memahami cara kerja dan opsi-opsi `tsc` sangat penting untuk mengoptimalkan workflow development.

⏱️ 15 menit
📊 Kesulitan: Pemula
📝 prerequisites: TypeScript terinstall

##
Tujuan Pembelajaran

-
Memahami peran dan alur kerja TypeScript compiler (tsc)

-
Menggunakan perintah dasar tsc: kompilasi single file dan watch mode

-
Mengenal compiler options utama yang sering digunakan

-
Mengkonfigurasi TypeScript melalui tsconfig.json

-
Memahami Type Erasure dan output JavaScript yang dihasilkan

## Cara Penggunaan Dasar

### Kompilasi File Tunggal

Cara paling sederhana: jalankan `tsc` diikuti nama file TypeScript Anda.

```
# File: hello.ts
tsc hello.ts

# Akan menghasilkan hello.js di direktori yang sama
```

Contoh isi `hello.ts`:

```
let message: string = "Hello, TypeScript!";
console.log(message);
```

Output `hello.js` (TypeScript type annotations di-**erase**):

```
var message = "Hello, TypeScript!";
console.log(message);
```

### Watch Mode

Saat development, gunakan `--watch` agar `tsc` otomatis recompile ketika file berubah:

```
tsc --watch hello.ts
```

## Compiler Options Penting

`tsc` mendukung banyak opsi. Berikut adalah yang paling sering digunakan:

Opsi
Deskripsi
Contoh

`--target`
Target ECMAScript version (ES5, ES6/ES2015, ES2020, dll)
`tsc --target ES2020`

`--module`
Module system (CommonJS, ES6, AMD, System, dll)
`tsc --module commonjs`

`--outDir`
Output directory untuk file .js yang dihasilkan
`tsc --outDir ./dist`

`--rootDir`
Root directory untuk input file .ts
`tsc --rootDir ./src`

`--strict`
Enable所有 strict type-checking options
`tsc --strict`

`--noEmit`
Hanya cek error, tidak generate file .js
`tsc --noEmit`

`--sourceMap`
Generate source map untuk debugging
`tsc --sourceMap`

### Multiple Options

Anda bisa menggabungkan beberapa opsi sekaligus:

```
tsc --target ES2020 --module commonjs --outDir ./dist --strict --sourceMap
```

## Konfigurasi dengan tsconfig.json

Untuk menghindari mengetik opsi-opsi berulang, buat file `tsconfig.json` di root project. File ini berisi konfigurasi compiler yang akan digunakan secara otomatis ketika `tsc` dijalankan tanpa argumen.

### Contoh tsconfig.json Minimal

```
{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"strict": true,
"outDir": "./dist",
"rootDir": "./src",
"sourceMap": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}
```

Setelah `tsconfig.json` dibuat, cukup jalankan:

```
tsc  # Akan menggunakan konfigurasi dari tsconfig.json
```

### 💡 Tips: Generate tsconfig.json

Anda bisa generatesample `tsconfig.json` dengan menjalankan:

```
tsc --init
```

Perintah ini akan membuat file `tsconfig.json` dengan banyak opsi yang didokumentasikan.

## Type Erasure: Apa yang Terjadi?

Penting untuk dipahami: **TypeScript tipe system tidak ada di runtime**. Semua type annotations dihapus (erased) saat kompilasi. Ini berarti:

- JavaScript output lebih kecil dan tidak ada overhead type checking di runtime

- TypeScript memberikan safety hanya saat development, bukan saat eksekusi

- Anda tetap bisa menulis kode JavaScript biasa di file .ts

```
// Input (hello.ts)
function greet(name: string): string {
return "Hello, " + name;
}

const result = greet("World");
console.log(result);

// Output (hello.js) - semua type hilang
function greet(name) {
return "Hello, " + name;
}
var result = greet("World");
console.log(result);
```

##
💻
Latihan Praktik

### Latihan 1: Kompilasi Manual

Buat file `math.ts` dengan fungsi tambah yang menggunakan type annotations. Kompilasi dengan `tsc math.ts` dan periksa file `math.js` yang dihasilkan.

```
// math.ts
function tambah(a: number, b: number): number {
return a + b;
}
```

### Latihan 2: Watch Mode

Jalankan `tsc --watch` pada file `math.ts`. Ubah kode, dan amati file `math.js` otomatis ter-update.

### Latihan 3: tsconfig.json

Buat `tsconfig.json` dengan target ES2020, module commonjs, strict true, outDir ./dist. Pindahkan `math.ts` ke folder `src/`. Jalankan hanya `tsc` dan lihat output di `dist/`.

### Latihan 4: Compiler Options

Coba kompilasi dengan `--noEmit`. Perhatikan bahwa error tetap terdeteksi meski tidak ada file .js yang dibuat. Ini berguna untuk CI/CD pipeline.

##
📝
Quiz - TypeScript Compiler (tsc)

Uji pengetahuan Anda tentang TypeScript compiler dan konfigurasinya.

Loading quiz questions...

← Sebelumnya: Instalasi TypeScript

Lesson 4 of 6

Selanjutnya: Project Setup dengan TypeScript →
