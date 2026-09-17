# Project Setup dengan TypeScript

Setup project TypeScript yang benar adalah langkah penting untuk development yang produktif. Panduan ini akan membahas struktur folder yang disarankan, konfigurasi `tsconfig.json`, dan npm scripts untuk build, watch, dan development workflow.

⏱️ 15 menit
📊 Kesulitan: Pemula
📝 prerequisites: Node.js, TypeScript terinstall

##
Tujuan Pembelajaran

-
Mengerti struktur folder yang optimal untuk TypeScript project

-
Membuat dan mengkonfigurasi tsconfig.json untuk project

-
Mendefinisikan npm scripts untuk build, development, dan watch

-
Menggunakan path mapping dan module resolution

-
Mengintegrasikan TypeScript dengan tooling seperti ESLint dan Prettier (pratinjau)

## Struktur Folder yang Disarankan

Struktur yang rapi memudahkan maintenance dan scalabilitas. Berikut adalah contoh struktur untuk TypeScript project:

```
my-typescript-project/
├── src/                    # Source code TypeScript
│   ├── index.ts           # Entry point
│   ├── utils/
│   │   └── helper.ts
│   └── types/
│       └── index.ts
├── dist/                   # Output JavaScript (dihasilkan oleh tsc)
│   ├── index.js
│   ├── utils/
│   └── types/
├── tests/                  # Unit tests (jika ada)
│   └── helper.test.ts
├── node_modules/           # Dependencies (di-ignore di git)
├── package.json           # NPM manifest
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

### 📌 Prinsip: src/ vs dist/

**src/** berisi kode sumber TypeScript yang Anda edit. **dist/** berisi JavaScript yang dihasilkan oleh compiler, siap untuk dijalankan atau di-deploy. Jangan mengedit file di `dist/` secara manual.

## Step-by-Step Project Setup

### 1. Inisialisasi Project

Buat direktori project dan inisialisasi `package.json`:

```
# Buat direktori
mkdir my-typescript-project
cd my-typescript-project

# Inisialisasi package.json dengan default values
npm init -y
```

### 2. Install TypeScript

Install TypeScript sebagai devDependency:

```
npm install --save-dev typescript
```

### 3. Buat Struktur Folder

```
mkdir -p src/utils src/types tests
mkdir -p dist
```

### 4. Buat tsconfig.json

Buat file `tsconfig.json` di root project dengan konfigurasi dasar:

```
{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"lib": ["ES2020"],
"outDir": "./dist",
"rootDir": "./src",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true,
"sourceMap": true,
"moduleResolution": "node"
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}
```

### 5. Buat Entry Point

Buat file `src/index.ts` dengan kode sederhana:

```
import { greet } from './utils/helper';

const message = greet('TypeScript');
console.log(message);
```

Dan `src/utils/helper.ts`:

```
export function greet(name: string): string {
return `Hello, ${name}!`;
}
```

## npm Scripts untuk Development Workflow

Tambahkan scripts di `package.json` untuk memudahkan eksekusi perintah tsc:

```
{
"name": "my-typescript-project",
"version": "1.0.0",
"scripts": {
"build": "tsc",
"build:watch": "tsc --watch",
"clean": "rm -rf dist",
"start": "node dist/index.js",
"dev": "npm run build && npm run start"
},
"devDependencies": {
"typescript": "^5.2.0"
}
}
```

### Cara Penggunaan

1

#### Build Project

Kompilasi semua file .ts di src/ menjadi dist/

```
npm run build
```

2

#### Watch Mode

Auto-recompile saat file berubah

```
npm run build:watch
```

3

#### Run Project

Jalankan output JavaScript dari dist/

```
npm run start
```

4

#### Development Loop

Build + Run dalam satu perintah

```
npm run dev
```

## Konfigurasi Lanjutan

### Path Mapping

TypeScript memungkinkan alias untuk path import, membuat import statements lebih rapi:

```
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/*": ["src/*"],
"@utils/*": ["src/utils/*"]
}
}
}
```

Dengan konfigurasi di atas, Anda bisa import dengan:

```
import { helper } from '@utils/helper';  // instead of '../utils/helper'
```

#### ⚠️ Catatan

Path mapping hanya berfungsi untuk TypeScript type checking. Untuk runtime (Node.js), Anda perlu tool tambahan seperti `tsconfig-paths` atau module-alias.

##
💻
Latihan Praktik

### Latihan 1: Setup Project dari Nol

Buat project baru dengan langkah-langkah di atas. Pastikan struktur folder sesuai, tsconfig.json terbuat, dan `npm run build` berhasil menghasilkan file di `dist/`.

### Latihan 2: Watch Mode Workflow

Jalankan `npm run build:watch`. Ubah file `src/index.ts` (misalnya tambah console.log baru). Amati file di `dist/` otomatis ter-update.

### Latihan 3: Path Mapping

Tambahkan path mapping `"@/*": ["src/*"]` di tsconfig.json. Ubah import di `src/index.ts` menjadi `import ... from '@utils/helper'`. Verifikasi tsc tidak error.

### Latihan 4: Strict Mode Testing

Pastikan `"strict": true` di tsconfig. Coba tulis kode dengan error类型 (misalnya assign string ke number). Pastikan tsc menangkap error.

##
📝
Quiz - Project Setup

Test pemahaman Anda tentang project setup dan konfigurasi TypeScript.

Loading quiz questions...

← Sebelumnya: TypeScript Compiler (tsc)

Lesson 5 of 6

Selanjutnya: Hello World: TypeScript Pertama →
