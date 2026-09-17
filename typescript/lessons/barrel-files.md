# Barrel Files dan Re-export

**Barrel files** adalah pattern di mana kita membuat file `index.ts` yang mengekspor ulang (re-export) semua public API dari module tertentu. Pattern ini menyederhanakan import paths dan memberikan single entry point untuk consuming code.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Best Practice

##
Tujuan Pembelajaran

-
Memahami konsep **barrel file** (index.ts) dan tujuannya

-
Menggunakan `export * from './module'` untuk re-export semua named exports

-
Menggunakan `export { default } from './module'` untuk re-export default

-
Menggunakan `export { name1, name2 } from './module'` untuk re-export selektif

-
Mengenal manfaat barrel files: **cleaner imports**, **easier refactoring**, **public API definition**

-
Memahami trade-offs: **tree shaking** vs **convenience**

## Apa itu Barrel File?

**Barrel file** (biasanya bernama `index.ts`) adalah file yang berfungsi sebagai **aggregator** atau **public API surface** untuk sekelompok module. Alih-alih import langsung dari file-file spesifik, consuming code mengimpor dari barrel file yang kemudian re-export semua yang diperlukan.

### 🔑 Karakteristik Barrel File:

- Biasanya berada di folder yang mengelompokkan module terkait

- Nama file: `index.ts` (bisa juga nama lain)

- Hanya berisi perintah `export` (re-export), tidak ada logic

- Mendefinisikan **public API** dari package/folder

- Memungkinkan import path yang lebih pendek dan stabil

### Struktur Folder dengan Barrel

src/
├── utils/
│   ├── string-utils.ts
│   ├── number-utils.ts
│   ├── date-utils.ts
│   └── index.ts          ← Barrel file
├── services/
│   ├── user-service.ts
│   ├── auth-service.ts
│   └── index.ts          ← Barrel file
└── app.ts

### Re-export Patterns

#### 1. Re-export Semua Named Exports

Gunakan `export * from './module'` untuk re-export semua named exports dari module. Default export TIDAK termasuk.

// File: src/utils/index.ts (barrel)
export * from './string-utils';
export * from './number-utils';
export * from './date-utils';

// File: src/utils/string-utils.ts
export function capitalize(text: string): string { ... }
export function reverse(text: string): string { ... }
export const MAX_LENGTH = 100;

// File: src/app.ts
import { capitalize, reverse, MAX_LENGTH } from './utils';  // Import dari barrel, bukan langsung ke file!

#### 2. Re-export Default Export

Untuk re-export default export, gunakan sintaks `export { default } from './module'` atau `export { default as alias } from './module'`.

// File: src/services/auth-service.ts
default class AuthService { ... }
export interface User { ... }

// File: src/services/index.ts
export * from './auth-service';  // Named exports (User)
export { default as AuthService } from './auth-service';  // Default export di-rename

// File: src/app.ts
import { AuthService, User } from './services';

#### 3. Re-export Selektif

Kita bisa memilih hanya beberapa export yang ingin di-expose ke public API dengan re-export selektif.

// File: src/utils/index.ts
export * from './string-utils';  // Semua string utils
export * from './number-utils';  // Semua number utils
export { formatDate, parseDate } from './date-utils';  // Hanya 2 fungsi dari date-utils
// (formatTime dan parseTime TIDAK di-export, jadi private)

## Manfaat Barrel Files

### ✅ Keuntungan

- **Import paths lebih pendek**: `from './utils'` vs `from './utils/string-utils'`

- **Single source of truth**: public API didefinisikan di satu tempat

- **Refactoring mudah**: ubah struktur file internal tanpa ubah import di consuming code

- **Organisasi yang jelas**: barrel menjadi entry point untuk package/folder

- **Mengurangi import spaghetti**: konsumen tidak perlu tahu struktur internal

### ⚠️ Trade-offs

- **Tree shaking kurang optimal**: `export *` bisa menarik semua module walau cuma butuh satu fungsi

- **Incremental compilation slower**: TypeScript harus traverse barrel chain

- **Circular dependency risk**: lebih mudah terjadi circular import dengan barrel

- **Extra file**: tambahan `index.ts` maintenance overhead

### 💡 Tips:

Gunakan barrel files untuk **public API packages** (seperti library yang akan dipublish) atau **domain grouping** (utils, services, components). Untuk aplikasi besar dengan bundle size concern, pertimbangkan **selective re-export** atau hindari barrel untuk hot paths. Bundler modern (Webpack 5, Rollup, esbuild) sudah cukup smart untuk tree shaking meski ada barrel.

### Contoh Lengkap: Barrel File untuk Utilitas

// File: src/utils/string-utils.ts
export function capitalize(text: string): string {
return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverse(text: string): string {
return text.split('').reverse().join('');
}

export function truncate(text: string, max: number): string {
return text.length > max ? text.substring(0, max) + '...' : text;
}

// File: src/utils/number-utils.ts
export function formatNumber(num: number): string {
return num.toLocaleString('id-ID');
}

export function round(num: number, decimals: number): number {
return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// File: src/utils/index.ts (BARREL)
export * from './string-utils';
export * from './number-utils';

// File: src/app.ts
import { capitalize, truncate, formatNumber, round } from './utils';

console.log(capitalize('hello world'));  // "Hello world"
console.log(formatNumber(1234567));     // "1.234.567"

##
💻
Latihan Praktis

### Latihan 1: Buat Barrel untuk Components

Dalam folder `src/components/` Anda punya:

- `button.tsx` (export default Button component)

- `input.tsx` (export default Input component)

- `modal.tsx` (export default Modal component)

- `types.ts` (named exports: ButtonProps, InputProps, ModalProps)

Buat `src/components/index.ts` yang:

- Re-export semua named exports dari `types.ts`

- Re-export default components dengan alias yang jelas (Button, Input, Modal)

### Latihan 2: Selective Re-export

Anda memiliki module `validation.ts` dengan 10 fungsi validasi. Hanya 3 fungsi yang umum digunakan (`isEmail`, `isPhone`, `isStrongPassword`). Buat barrel file yang hanya expose 3 fungsi tersebut (bukan semua 10).

### Latihan 3: Nested Barrel Files

Struktur folder:

src/
├── ui/
│   ├── buttons/
│   │   ├── primary-button.ts
│   │   ├── secondary-button.ts
│   │   └── index.ts
│   ├── inputs/
│   │   ├── text-input.ts
│   │   ├── number-input.ts
│   │   └── index.ts
│   └── index.ts
└── app.ts

Buat barrel files di setiap subfolder (`buttons/index.ts`, `inputs/index.ts`, `ui/index.ts`) sehingga di `app.ts` bisa import dengan path `from './ui'` saja.

← Sebelumnya: Default vs Named Exports

🔖 Bookmark

✓ Selesai

Selanjutnya: Dynamic Import dan Code Splitting →
