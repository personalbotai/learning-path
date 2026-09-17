# Include, Exclude, dan Files

Opsi `include`, `exclude`, dan `files` di tsconfig.json mengontrol file mana yang diproses oleh TypeScript compiler. Memahami cara kerja ketiganya sangat penting untuk project structure yang bersih dan performa compilation yang optimal.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Configuration

##
Tujuan Pembelajaran

-
Memahami perbedaan `include`, `exclude`, dan `files`

-
Mengetahui **default behavior** jika tidak ditentukan

-
Menggunakan glob patterns (`**/*.ts`, `!pattern`)

-
Memahami precedence: `files` > `include` > `exclude`

-
Mengonfigurasi untuk monorepos, tests, dan build artifacts

-
Menghindari pitfalls umum seperti exclude yang tidak bekerja

## Default Behavior

Jika `include` dan `exclude` tidak ditentukan, TypeScript akan:

- Include semua file `.ts` di folder tsconfig.json dan subfolders

- Exclude otomatis `node_modules`, `bower_components`, `jspm_packages`

- Include `.tsx` files jika `jsx` option di-set

### 🔑 Rule of Thumb:

Jika project structure standar (source di `src/`, dependencies di `node_modules/`), Anda mungkin tidak perlu specify `include`/`exclude` sama sekali. Tapi untuk kontrol yang lebih ketat, selalu specify explicitly.

## Include Option

`include` adalah array of **glob patterns** yang menentukan file mana yang akan disertakan dalam compilation. Jika `include` ditentukan, hanya file yang match pattern yang di-process.

{
"include": [
"src/**/*",           // All .ts/.tsx files di src dan subfolders
"tests/**/*.ts",      // Test files
"scripts/*.ts",       // Build scripts di root scripts/
"**/*.d.ts"          // Declaration files
]
}

### Glob Patterns

- `**/` - Match any subdirectory

- `*` - Match any file/directory name (tidak rekursif)

- `?` - Match single character

- `!` di awal pattern - Negasi (exclude pattern)

{
"include": [
"src/**/*.ts",     // All .ts files recursively di src
"src/**/*.tsx",    // All .tsx files (React)
"!src/**/*.test.ts" // Exclude test files (negation)
]
}

## Exclude Option

`exclude` menentukan file/folder yang **tidak termasuk** meski match dengan `include`. Berguna untuk mengecualikan build artifacts, test files, atau dependencies.

{
"include": ["src/**/*"],
"exclude": [
"node_modules",    // Always exclude
"dist",            // Build output
"build",           // Another build folder
"**/*.test.ts",   // Test files
"**/__tests__/*"  // Test directories
]
}

### ⚠️ Important:

`exclude` hanya berlaku untuk files yang sudah di-include oleh `include` atau default. Jika file tidak match `include`, dia tidak akan diproses meski tidak di-`exclude`.

## Files Option

`files` adalah array of **specific file paths**. Ketika `files` ditentukan, HANYA file-file yang tercantum yang di-process. Ini meng-override `include` dan `exclude`.

{
"files": [
"src/index.ts",
"src/main.ts",
"src/utils.ts"
]
// include dan exclude di-ignore!
}

### 🚨 Use files sparingly:

Opsi `files` biasanya hanya digunakan untuk **small projects** atau **specific entry points**. Untuk project yang lebih besar, gunakan `include` dengan glob patterns yang lebih fleksibel.

## Precedence dan Interaction

Ketika `files` ditentukan, `include` dan `exclude` diabaikan. Jika tidak, `include` menentukan file mana yang masuk, lalu `exclude` menghapus beberapa dari include.

Config
Files Included

No include/exclude/files
All `.ts` di folder tsconfig + subfolders (except `node_modules`)

`"include": ["src/**/*"]`
Hanya files di src/

`"exclude": ["tests"]`
All `.ts` kecuali di tests/ folder

`"files": ["index.ts"]`
Hanya index.ts (ignore include/exclude)

## Common Configurations

### 1. Standard Project (src folder)

{
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}

### 2. Monorepo (multiple packages)

{
"include": [
"packages/*/src/**/*",
"apps/*/src/**/*"
],
"exclude": [
"node_modules",
"**/node_modules/*",
"**/dist/*"
]
}

### 3. Include Tests tapi Exclude dari Build

{
"include": [
"src/**/*",
"tests/**/*.ts"
],
"exclude": ["node_modules", "dist"]
// Tests included for type-checking tapi tidak di-emit jika outDir hanya src
}

### ✅ Best Practices:

- Always explicitly specify `include` dan `exclude` untuk clarity

- Exclude `node_modules`, `dist`, `build` selalu

- Gunakan glob patterns yang spesifik, jangan terlalu broad

- Untuk tests, consider separate tsconfig (tsconfig.test.json) jika config berbeda

- Pastikan `include` match file extensions yang benar (`.ts`, `.tsx`, `.d.ts`)

##
💻
Latihan Praktis

### Latihan 1: Config untuk TypeScript Library

Buat tsconfig untuk library dengan struktur:

project/
├── src/
│   ├── index.ts
│   ├── utils/
│   └── components/
├── tests/
│   └── unit/
├── dist/
├── node_modules/
└── docs/

Requirements:

- Include: src/**/*.ts, src/**/*.tsx

- Exclude: node_modules, dist, tests, docs

### Latihan 2: Include Tests tapi Exclude dari Build

Anda ingin type-check test files tapi tidak include mereka di build output. Structure:

src/
├── index.ts
├── utils.ts
└── __tests__/
└── utils.test.ts

Buat config yang include tests untuk type-checking tapi outDir hanya emit src files.

### Latihan 3: Monorepo Config

Monorepo dengan struktur:

packages/
├── package-a/
│   ├── src/
│   └── dist/
├── package-b/
│   ├── src/
│   └── dist/
└── shared/
├── src/
└── dist/

Buat tsconfig yang include semua src folders dari packages tapi exclude semua dist folders dan node_modules di setiap package.

← Sebelumnya: Strict Mode Options

🔖 Bookmark

✓ Selesai

Selanjutnya: Path Mapping dan Module Resolution →
