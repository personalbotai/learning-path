# Path Mapping dan Module Resolution

**Path mapping** di TypeScript memungkinkan Anda membuat alias untuk import paths, sehingga tidak perlu menggunakan relative paths yang panjang. Fitur ini dikombinasikan dengan **module resolution** strategy yang menentukan bagaimana TypeScript menemukan file module.

⏱️ 20 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Configuration

##
Tujuan Pembelajaran

-
Memahami **module resolution** strategies (Classic vs Node)

-
Menggunakan `baseUrl` untuk absolute imports

-
Membuat **path aliases** dengan `paths` option

-
Mengonfigurasi **rootDirs** untuk virtual directories

-
Memahami compatibility dengan bundlers (Webpack, Vite, dll)

-
Mengatasi masalah common pitfalls dengan path mapping

## Module Resolution Strategy

**Module resolution** adalah proses di mana TypeScript menemukan file yang sesuai dengan import statement. Ada dua strategies utama:

### 🔍 Classic (Default untuk non-Node)

- Mencari Relative paths terlebih dahulu

- Kemudian mencari di `node_modules`

- Tidak memahami Node.js module resolution algorithm

- Untuk browser scripts atau non-Node environments

### 📦 Node (Default untuk Node.js)

- Mengikuti Node.js module resolution

- Support `package.json` `types` field

- Support `exports` field di package.json

- Ideal untuk Node.js dan bundlers

{
"compilerOptions": {
"moduleResolution": "node"  // atau "classic"
}
}

### 💡 Rekomendasi:

Gunakan `"moduleResolution": "node"` untuk hampir semua project modern (Node.js, bundlers, React, Vue). Hanya gunakan `"classic"` untuk legacy browser scripts tanpa module system.

## BaseUrl: Absolute Imports

Opsi `baseUrl` memungkinkan Anda menggunakan **absolute paths** (bukan relative) untuk import statements. Ketika di-set, import paths yang tidak dimulai dengan `.` atau `/` akan di-resolve relatif terhadap `baseUrl`.

### Tanpa baseUrl (relative paths):

src/
├── components/
│   ├── Button.tsx
│   └── Modal.tsx
└── pages/
└── Home.tsx

// Home.tsx
import Button from '../components/Button';  // Relative path - bisa confusing

### Dengan baseUrl (absolute paths):

{
"compilerOptions": {
"baseUrl": "./src",  // src adalah root untuk absolute imports
"paths": {
"@components/*": ["components/*"]
}
}
}

// Home.tsx
import Button from '@components/Button';  // Clean dan clear!
import { helper } from 'utils';         // Absolute: src/utils

## Paths: Alias Configuration

Opsi `paths` digunakan bersama `baseUrl` untuk membuat **path aliases**. Ini memungkinkan Anda membuat custom alias untuk folders atau module patterns.

{
"compilerOptions": {
"baseUrl": "./src",
"paths": {
// Alias untuk folders
"@components/*": ["components/*"],
"@utils/*": ["utils/*"],
"@services/*": ["services/*"],

// Alias untuk specific module
"@config": ["config/index"],

// Multiple path mappings (fallbacks)
"@lib/*": [
"libs/*",
"node_modules/@company/*"
]
}
}
}

### Contoh Penggunaan:

// src/pages/Home.tsx
import Button from '@components/Button';      // resolves to src/components/Button
import { formatDate } from '@utils/date';    // resolves to src/utils/date
import config from '@config';               // resolves to src/config/index
import Logger from '@lib/logger';           // tries src/libs/logger, then node_modules/@company/logger

## Module Resolution di Bundlers

Path mapping di tsconfig.json hanya mempengaruhi **TypeScript type checking**. Untuk membuat path aliases bekerja di runtime, Anda perlu mengonfigurasi bundler (Webpack, Vite, Rollup) dengan routes yang sama.

### ⚠️ Synchronization Needed:

TypeScript path mapping TIDAK otomatis dikenali oleh bundler. Anda harus:

- **Webpack**: Configure `resolve.alias`

- **Vite**: Configure `resolve.alias` di vite.config.ts

- **Rollup**: Use `@rollup/plugin-alias`

- **ts-node**: Use `tsconfig-paths` package

### Webpack Alias Example:

// webpack.config.js
module.exports = {
resolve: {
alias: {
'@components': path.resolve(__dirname, 'src/components'),
'@utils': path.resolve(__dirname, 'src/utils')
},
extensions: ['.ts', '.tsx', '.js']
}
};

### Vite Alias Example:

// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
resolve: {
alias: {
'@': path.resolve(__dirname, 'src'),
'@components': path.resolve(__dirname, 'src/components')
}
}
});

## RootDirs: Virtual Directories

Opsi `rootDirs` memungkinkan Anda menentukan daftar folder yang secara logis dianggap sebagai **satu root**. Berguna untuk monorepos atau ketika file-file tersebar di multiple locations tapi seharusnya bisa saling import.

{
"compilerOptions": {
"rootDirs": [
"src",
"libs/shared/src",
"generated"
]
}
}
// Dengan rootDirs, Anda bisa:
// src/components/Button.tsx bisa import 'libs/shared/src/utils'
// Karena keduanya dianggap di root yang sama

## Complete Example: Modern React App

{
"compilerOptions": {
"target": "ES2020",
"module": "ESNext",
"moduleResolution": "node",
"baseUrl": "./src",
"paths": {
"@/*": ["*"],
"@components/*": ["components/*"],
"@hooks/*": ["hooks/*"],
"@utils/*": ["utils/*"],
"@services/*": ["services/*"],
"@assets/*": ["assets/*"]
},
"jsx": "react-jsx",
"strict": true,
"esModuleInterop": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}

### ✅ Common Alias Patterns:

- `"@/*": ["*"]` - `@/component` → `src/component`

- `"@components/*": ["components/*"]` - for components folder

- `"#/*": ["*"]` - absolute from project root (alternative to @)

## Troubleshooting

#### Problem: "Cannot find module" meski path benar

**Solution:** Pastikan `baseUrl` di-set sebelum `paths`. Path mapping hanya bekerja jika `baseUrl` ada.

#### Problem: Path works di IDE tapi error saat build

**Solution:** Bundler (Webpack/Vite) tidak tahu path mapping dari tsconfig. Tambahkan alias configuration di bundler config agar match.

#### Problem: Import resolution lambat

**Solution:** Terlalu banyak path mappings atau complex glob patterns. Simplify paths dan pastikan `exclude` include `node_modules`.

##
💻
Latihan Praktis

### Latihan 1: Setup Path Aliases

Project structure:

src/
├── components/
│   ├── Button/
│   └── Modal/
├── hooks/
├── utils/
├── services/
└── pages/

Buat tsconfig dengan:

- `baseUrl: "./src"`

- Aliases: `@components/*`, `@hooks/*`, `@utils/*`, `@services/*`

### Latihan 2: Monorepo Path Mapping

Monorepo dengan packages:

packages/
├── ui/
│   └── src/
├── api/
│   └── src/
└── shared/
└── src/

Configure tsconfig agar:

- Set baseUrl ke root project

- Aliases: `"@ui/*"` → `"packages/ui/src/*"`

- Aliases: `"@api/*"` → `"packages/api/src/*"`

- Aliases: `"@shared/*"` → `"packages/shared/src/*"`

### Latihan 3: Configure Webpack Alias

Setelah setup tsconfig dengan path aliases di Latihan 1, buat webpack.config.js yang match:

- Configure resolve.alias untuk @components, @hooks, @utils, @services

- Pastikan path.resolve ke absolute paths

- Test dengan import menggunakan aliases

← Sebelumnya: Include, Exclude, dan Files

🔖 Bookmark

✓ Selesai

Selanjutnya: Build Tools →
