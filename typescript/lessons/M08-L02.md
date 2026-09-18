# Project: Type Definitions & Declaration Files

Belajar membuat dan mempublikasikan TypeScript declaration files (.d.ts) untuk JavaScript libraries. Project ini mencakup writing ambient declarations, module augmentation, dan publishing ke DefinitelyTyped.

⏱️ 3-4 jam
📊 Kesulitan: Project

## 🎯 Tujuan Pembelajaran

-
Memahami struktur .d.ts files (declaration files)

-
Membuat ambient declarations untuk global variables dan libraries

-
Module augmentation untuk extend existing types

-
Publishing type packages ke npm (@types scope)

-
Best practices untuk writing high-quality declaration files

## 📚 Konten Utama

### Project Overview: Create @types for a Library

Kita akan membuat TypeScript declaration package untuk library JavaScript yang belum memiliki types. Contoh: library `simple-color` (hypothetical) yang exposes global function `color()` dan object `Colors`.

### Library API to Type

Asumsi library JavaScript (`simple-color.js`):

// Global function
function color(value) {
return { r: value[0], g: value[1], b: value[2] };
}

// Global object
var Colors = {
red: '#FF0000',
green: '#00FF00',
blue: '#0000FF'
};

### Ambient Declaration File

`index.d.ts`:

/**
* Type definitions for simple-color v1.0.0
* Project: https://github.com/example/simple-color
* Author: Your Name
*/

// Ambient context (no imports/exports)
declare module 'simple-color' {
export interface RGB {
r: number;
g: number;
b: number;
}

export function color(value: number[] | string): RGB;

export const Colors: {
red: string;
green: string;
blue: string;
[key: string]: string;
};
}

// Global declarations (if library adds to global scope)
declare global {
namespace NodeJS {
interface Global {
color: typeof import('simple-color')['color'];
Colors: typeof import('simple-color')['Colors'];
}
}
}

### Package.json for @types Package

`@types/simple-color/package.json`:

{
"_from": "@types/simple-color@1.0.0",
"_id": "@types/simple-color@1.0.0",
"_inBundle": false,
"_integrity": "sha512-...",
"_location": "/@types/simple-color",
"_phantomChildren": {},
"_requested": {
"type": "version",
"registry": true,
"raw": "@types/simple-color@1.0.0",
"rawSpec": "1.0.0",
"saveSpec": null,
"fetchSpec": "1.0.0"
},
"_requiredBy": [],
"_resolved": "https://registry.npmjs.org/@types/simple-color/-/simple-color-1.0.0.tgz",
"_shasum": "...",
"_spec": "@types/simple-color@1.0.0",
"_where": "/path/to/project",
"author": "",
"bugs": { "url": "" },
"description": "TypeScript definitions for simple-color",
"homepage": "https://github.com/DefinitelyTyped/DefinitelyTyped",
"license": "MIT",
"name": "@types/simple-color",
"repository": {
"type": "git",
"url": "https://github.com/DefinitelyTyped/DefinitelyTyped.git"
},
"scripts": {},
"typeScriptVersion": "<4.9.0 || >=4.9.0-dev",
"types": "index.d.ts",
"version": "1.0.0"
}

### Module Augmentation

Kadang kita ingin extend existing types dari library atau Node.js built-in modules:

// Augment Express Response object
import { Response } from 'express';

declare module 'express' {
export interface Response {
success<T>(data: T): Response<T>;
error(message: string, statusCode?: number): Response<null>;
}
}

// Implementation di app.ts
app.get('/api/data', (req, res) => {
res.success({ message: 'OK' });  // TypeScript tahu method ini ada
});

### Publishing to npm (@types scope)

Untuk library populer, types biasanya dikontribusikan ke **DefinitelyTyped** repository. Proses:

- Fork `DefinitelyTyped/DefinitelyTyped` repository

- Buat folder `types/simple-color` dengan `index.d.ts` dan `tests`

- Add `package.json` dengan proper metadata

- Run `npm run lint` dan `npm test`

- Buat Pull Request ke DefinitelyTyped

- Setelah merged, types akan otomatis publish ke `@types/simple-color`

### Local Declaration Files

Untuk private libraries atau quick prototypes, letakkan .d.ts files di proyek Anda:

// Place in src/types/ or a separate folder
// tsconfig.json "include" harus include folder ini

declare module 'my-private-lib' {
export function doThing(x: number): string;
export const VERSION: string;
}

// Gunakan di code
import { doThing } from 'my-private-lib';
// TypeScript akan otomatis menggunakan declaration file

### Best Practices

- Gunakan `declare module 'lib-name'` untuk module-style libraries

- Gunakan `declare global` untuk global variables/functions

- Always include JSDoc comments untuk documented APIs

- Match library API exactly - jangan tambah atau ubah signatures

- Write test files untuk verify types bekerja dengan library

- Use `export =` untuk CommonJS default export

- Handle optional dependencies dengan `declare module 'optional-lib'` tanpa error jika tidak ada

## 💻 Exercises

### Exercise 1: Simple Ambient Declaration

Buat .d.ts untuk library sederhana.

- Pilih library JavaScript yang tidak memiliki types (misal: `chalk` sudah punya, cari yang lain)

- Buat file `my-lib.d.ts` di proyek Anda

- Define module dengan `declare module 'my-lib'`

- Tulis types untuk 3-5 functions/objects yang ada di library

- Import library di TypeScript code dan verify autocomplete bekerja

### Exercise 2: Global Declaration

Buat declaration untuk global variable.

- Buat file `globals.d.ts`

- Gunakan `declare global { var MY_GLOBAL: string; }`

- Pastikan TypeScript tidak error saat mengakses `MY_GLOBAL`

- Add JSDoc comment untuk dokumentasi

### Exercise 3: Module Augmentation

Extend existing library types.

- Pilih library yang sudah punya types (misal: Express)

- Buat `express-augmentation.d.ts`

- Gunakan `declare module 'express' { interface Response { myCustomMethod(): void; } }`

- Implement custom method di code dan verify TypeScript mengenali

← Previous

Take Quiz
