# Menggunakan JavaScript Libraries di TypeScript

Sebagian besar library JavaScript dapat digunakan langsung di TypeScript melalui **type declarations**. Panduan ini menjelaskan cara mengintegrasikan library JavaScript populer ke proyek TypeScript, baik dengan built-in types maupun custom declaration files.

⏱️ 25 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami cara TypeScript berinteraksi dengan JavaScript libraries

-
Menggunakan library dengan built-in type support

-
Bekerja dengan library tanpa type definitions menggunakan `any` atau `declare module`

-
Menginstall dan mengimpor library JavaScript dengan benar

-
Menangani interop antara CommonJS dan ES Modules

## 📚 Konten Utama

### Type Definitions di TypeScript

Library JavaScript tidak memiliki type information asli. TypeScript membutuhkan **type declaration files** (.d.ts) untuk memahami API library tersebut. Type definitions bisa:

- **Built-in**: Beberapa library modern (seperti React, Express) sudah menyertakan types di package mereka

- **DefinitelyTyped**: Repository komunitas (@types/) untuk ribuan library

- **Custom**: Buat sendiri `.d.ts` file jika tidak tersedia

### Installing Libraries dengan Types

Untuk library yang memiliki built-in types atau @types package:

# Install library (contoh: lodash)
npm install lodash

# Install type definitions (jika terpisah)
npm install --save-dev @types/lodash

# Types akan otomatis dimuat oleh TypeScript

### Importing JavaScript Libraries

Cara import tergantung pada module system yang digunakan library:

#### ES Modules (default import)

import _ from 'lodash';

// TypeScript tahu bahwa _ bertipe Library dari lodash types
const result = _.camelCase('hello world');

#### CommonJS (require)

import * as moment from 'moment';

// Atau menggunakan require (jika "esModuleInterop": false)
const moment = require('moment');

### Library Tanpa Type Definitions

Jika library tidak memiliki type definitions, ada beberapa opsi:

#### 1. Use `any` temporarily

import someLib from 'some-untyped-lib';

// TypeScript akan memberi warning jika "noImplicitAny": true
// Bisa di-suppress dengan: // @ts-ignore

#### 2. Create custom declaration file

Buat file `src/types/some-untyped-lib.d.ts`:

declare module 'some-untyped-lib' {
export default function(input: string): string;
export function helper(x: number): number;
}

### Common Issues & Solutions

#### Issue: "Cannot find module 'xyz'"

Pastikan package terinstall dan type definitions tersedia. Jika tidak, buat custom declaration file.

#### Issue: "Property 'xxx' does not exist on type"

Type definitions mungkin outdated. Gunakan type assertion atau extend interface library.

#### Issue: Module resolution errors

Check `tsconfig.json` `"moduleResolution"` dan `"module"` settings.

## 💻 Exercises

### Exercise 1: Integrasi Lodash

Gunakan library lodash di TypeScript dengan type safety.

- Install lodash dan @types/lodash

- Buat fungsi yang menggunakan `_.debounce`, `_.cloneDeep`, dan `_.orderBy`

- Pastikan TypeScript memberikan autocomplete dan type checking yang tepat

### Exercise 2: Library Tanpa Types

Buat declaration file untuk library yang tidak memiliki types.

- Pilih library JavaScript sederhana tanpa types (misal: `chalk` atau `ora`)

- Buat file `.d.ts` dengan API minimal yang dibutuhkan

- Gunakan library di TypeScript code dan verifikasi type checking bekerja

### Exercise 3: Interop Test

Test import/export antara TS dan JS.

- Buat file JavaScript yang export function

- Import di TypeScript file dan panggil function

- Pastikan types terdeteksi dengan benar

- Ubah function signature di JS, observe TypeScript errors

← Previous

Take Quiz
