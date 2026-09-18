# Default vs Named Exports

Pemahaman mendalam tentang perbedaan antara **default export** dan **named export** sangat penting untuk desain module yang baik. Masing-masing memiliki use case spesifik, trade-offs, dan implicasi pada konsumsi API module.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Konsep Penting

##
Tujuan Pembelajaran

-
Memahami sintaks dan aturan **default export**

-
Memahami sintaks dan aturan **named export**

-
Membandingkan kelebihan dan kekurangan kedua pendekatan

-
Mengetahui kapan menggunakan default vs named exports

-
Memahami implikasi pada **tree shaking** dan bundle size

-
Mengenal best practices dari komunitas TypeScript/JavaScript

## Default Export: Satu per Module

**Default export** memungkinkan module mengekspor **satu nilai** (bisa class, function, object, primitive, dll) yang dianggap sebagai "nilai utama" dari module. Ketika diimpor, nama yang digunakan bisa bebas (tidak harus sama dengan nama asli).

### 🔑 Aturan Default Export:

- Setiap module boleh memiliki **maksimal satu default export**

- Nilai apa pun bisa di-default-export (class, function, interface, type, constant, object)

- Sintaks: `export default <value>`

- Import tanpa kurung kurawal, nama bebas: `import Alias from './module'`

### Contoh Default Export

// File: database-connection.ts
class DatabaseConnection {
private connectionString: string;

constructor(connStr: string) {
this.connectionString = connStr;
}

connect(): Promise<void> {
// ... connection logic
return Promise.resolve();
}
}

export default DatabaseConnection;

// File: app.ts
// Import dengan nama apa pun (biasanya sama dengan class name)
import Database from './database-connection';

const db = new Database('postgresql://...');

## Named Exports: Multiple Exports

**Named exports** memungkinkan module mengekspor **multiple nilai** dengan nama eksplisit. Setiap nilai yang diekspor harus diimpor dengan nama yang persis sama (kecuali menggunakan alias).

### 🔑 Aturan Named Export:

- Tidak ada batasan jumlah named export per module

- Setiap export harus memiliki nama unik dalam module

- Sintaks: `export <declaration>` atau `export { name1, name2 }`

- Import harus menggunakan kurung kurawal dengan nama yang sama: `import { name } from './module'`

### Contoh Named Exports

// File: math.ts
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
return a + b;
}

export function subtract(a: number, b: number): number {
return a - b;
}

export interface Point {
x: number;
y: number;
}

export type Distance = (p1: Point, p2: Point) => number;

// File: app.ts
import { add, subtract, PI, Point, Distance } from './math';

const distance: Distance = (p1, p2) => {
return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

const p1: Point = { x: 0, y: 0 };
const p2: Point = { x: 3, y: 4 };
console.log(`Distance: ${distance(p1, p2)}`); // 5

## Perbandingan: Default vs Named Exports

Aspek
Default Export
Named Export

Jumlah per module
Maksimal 1
Unlimited

Sintaks export
`export default X`
`export { X, Y }` atau `export function X()`

Sintaks import
`import X from './module'` (tanpa {})
`import { X, Y } from './module'` (dengan {})

Nama import
Bebas (alias)
Harus sama (kecuali pakai `as`)

Tree Shaking
Kurang efektif (selalu dimuat)
Sangat efektif (hanya yang di-import)

Use case
Single responsibility, main functionality
Utility functions, constants, types, multiple exports

## Kapan Menggunakan yang Mana?

###
🚫 Default Export - Kurang Disarankan

- Menghambat **tree shaking** - seluruh module di-load walau hanya butuh satu bagian

- Membuat **import name inconsistent** - dev bisa mengimpor dengan nama apa saja, bingung

- Beralih dari satu default export ke default export lain sulit (harus ganti semua import)

- Menyembunyikan struktur module - tidak jelas apa saja yang tersedia tanpa buka file

###
✅ Named Exports - Disarankan

- Mendukung **tree shaking optimal** - bundler bisa hapus kode tidak terpakai

- **Explicit API** - jelas apa yang diekspor, self-documenting

- **Consistent naming** - import harus pakai nama yang sama, mencegah kebingungan

- **Refactoring friendly** - IDE bisa track dan rename dengan mudah

- Kompatibel dengan **barrel files** (re-export pattern)

### 💡 Best Practice Komunitas:

Gunakan **named exports** untuk hampir semua kasus. Gunakan **default export** hanya untuk:

- **Framework-style components** (React component utama, Vue component)

- **Main class atau function** dari library yang jelas fungsinya tunggal (contoh: `React`, `Vue`, `express`)

- **Configuration objects** yang utama (contoh: default config)

### Mixed Exports: Default + Named

Module boleh memiliki **satu default export** sekaligus **multiple named exports**. Ini berguna ketika ada "main functionality" sekaligus helper/utilitas tambahan.

// File: auth-service.ts
interface User {
id: number;
email: string;
}

export interface AuthTokens {
accessToken: string;
refreshToken: string;
}

export function validateEmail(email: string): boolean {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

default class AuthService {
private users: User[] = [];

login(email: string, password: string): AuthTokens {
// ... login logic
return { accessToken: '...', refreshToken: '...' };
}

logout(): void {
// ... logout logic
}
}

// Di file lain:
// import AuthService, { User, AuthTokens, validateEmail } from './auth-service';

##
💻
Latihan Praktis

### Latihan 1: Convert Default to Named

Anda memiliki module berikut dengan default export:

// calculator.ts
default class Calculator {
add(a: number, b: number): number { return a + b; }
multiply(a: number, b: number): number { return a * b; }
}
export default Calculator;

Ubah menjadi named export untuk `Calculator` class, lalu update import di file yang menggunakannya.

### Latihan 2: Mixed Export Design

Desain module `payment-gateway.ts` dengan:

- **Default export**: class `PaymentGateway` (main functionality)

- **Named exports**: interface `PaymentRequest`, interface `PaymentResponse`, enum `PaymentStatus`, function `validateAmount`

Tulis module lengkap dengan 5 method utama di class, lalu buat file `demo.ts` yang mengimpor semua nilai tersebut.

### Latihan 3: Re-export Pattern

Buat module `constants.ts` yang mengekspor multiple constants (API endpoints, error messages, config values). Lalu buat `index.ts` (barrel file) yang re-export semua constants dari `constants.ts`. Import semua constants di `app.ts` melalui barrel file.

← Sebelumnya: ES6 Modules

🔖 Bookmark

✓ Selesai

Selanjutnya: Barrel Files →
