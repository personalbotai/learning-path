# ES6 Modules: import dan export

**ES6 Modules** adalah sistem modular bawaan TypeScript/JavaScript modern yang memungkinkan kita memecah kode menjadi file-file terpisah, mengatur dependencies, dan mengontrol akses ke kode. Module system ini adalah fondasi untuk arsitektur aplikasi yang skalabel dan maintainable.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Konsep Penting

##
Tujuan Pembelajaran

-
Memahami konsep **ES6 Modules** dan mengapa modularization penting

-
Menggunakan `export` untuk mengekspor nilai (variables, functions, classes, types, interfaces) dari module

-
Menggunakan `import` untuk mengimpor nilai dari module lain

-
Membedakan **named exports** vs **default exports**

-
Mengkonfigurasi TypeScript compiler untuk module system yang sesuai (CommonJS vs ES Modules)

-
Memahami **module resolution** dan cara TypeScript menemukan file module

## Apa itu ES6 Modules?

Sebelum ES6 (ECMAScript 2015), JavaScript tidak memiliki sistem modular bawaan. Developer menggunakan pattern seperti **IIFE** (Immediately Invoked Function Expression), **CommonJS** (Node.js), atau **AMD** (Asynchronous Module Definition) untuk mengorganisir kode. ES6 memperkenalkan **Modules** sebagai fitur bawaan bahasa, yang kemudian diadopsi oleh TypeScript sebagai sistem modular utama.

### 🔑 Poin Penting:

**Module** adalah file JavaScript/TypeScript yang berisi kode yang dieksekusi sekali saja saat diimpor pertama kali. Setiap module memiliki **scope sendiri** (variabel di dalam module tidak bocor ke global scope) dan dapat mengekspor nilai tertentu agar bisa digunakan oleh module lain.

### Mengapa Modularization Penting?

- **Encapsulation**: Setiap module memiliki scope sendiri, mencegah naming conflicts

- **Reusability**: Kode bisa digunakan kembali di berbagai tempat

- **Maintainability**: Kode terorganisir menjadi file-file kecil dengan tanggung jawab spesifik

- **Testability**: Module bisa di-test secara terpisah

- **Tree Shaking**: Bundler bisa menghapus kode yang tidak digunakan, mengurangi ukuran bundle

- **Lazy Loading**: Module bisa dimuat hanya ketika dibutuhkan

### Export: Mengekspor Nilai dari Module

TypeScript mendukung dua jenis export: **Named Exports** dan **Default Exports**. Setiap module bisa mengekspor satu atau lebih nilai dengan mendahului deklarasi dengan kata kunci `export`.

#### 1. Named Exports

Named exports memungkinkan kita mengekspor beberapa nilai dari module. Setiap nilai yang diekspor harus diimpor dengan nama yang sama persis (atau dengan alias menggunakan `as`).

// File: math-utils.ts
export const PI = 3.14159;

export function add(a: number, b: number): number {
return a + b;
}

export function multiply(a: number, b: number): number {
return a * b;
}

export class Calculator {
private value: number = 0;

add(num: number): void {
this.value += num;
}

getResult(): number {
return this.value;
}
}

// Type export juga didukung
export interface MathOperation {
(a: number, b: number): number;
}

export type OperationResult = {
success: boolean;
value?: number;
error?: string;
};

#### 2. Default Exports

Setiap module bisa memiliki **satu default export**. Default export diimpor tanpa nama (bisa pakai nama apa saja) dan tidak menggunakan kurung kurawal.

// File: logger.ts
default class Logger {
private prefix: string;

constructor(prefix: string = '') {
this.prefix = prefix;
}

log(message: string): void {
console.log(`[${this.prefix}] ${message}`);
}

error(message: string): void {
console.error(`[ERROR] ${message}`);
}
}

// Atau default export untuk function/value
export default function formatDate(date: Date): string {
return date.toISOString().split('T')[0];
}

### Import: Mengimpor Nilai dari Module

Untuk menggunakan nilai yang diekspor dari module lain, kita menggunakan kata kunci `import`. Cara import bergantung pada jenis export (named vs default).

#### 1. Import Named Exports

Named exports diimpor dengan menggunakan kurung kurawal `{}` dan nama ekspor yang persis sama.

// File: app.ts
import { add, multiply, Calculator, MathOperation, OperationResult } from './math-utils';
import { PI } from './math-utils';

const calc = new Calculator();
calc.add(10);
calc.add(20);
console.log(`Result: ${calc.getResult()}`); // Output: Result: 30

const sum = add(5, 7);
const product = multiply(4, 6);
console.log(`Sum: ${sum}, Product: ${product}`);

#### 2. Import Default Export

Default export diimpor tanpa kurung kurawal. Nama yang digunakan bisa berbeda dari nama asli export (alias).

// File: app.ts (lanjutan)
import Logger from './logger';
import formatDate from './date-utils';

const logger = new Logger('APP');
logger.log('Application started');

const today = formatDate(new Date());
logger.log(`Today is ${today}`);

#### 3. Import dengan Alias (Renaming)

Kita bisa mengganti nama import menggunakan kata kunci `as`. Ini berguna ketika ada naming conflict atau untuk membuat nama yang lebih deskriptif.

// File: app.ts
import { add as sumNumbers, multiply as productNumbers } from './math-utils';

const result1 = sumNumbers(10, 20);  // 30
const result2 = productNumbers(5, 4);  // 20

#### 4. Import Semua (Namespace Import)

Kita bisa mengimpor semua named exports dari module sebagai single object menggunakan `* as`. Ini berguna untuk grouping atau ketika kita butuh akses ke banyak export dari module yang sama.

// File: app.ts
import * as MathUtils from './math-utils';

const sum = MathUtils.add(10, 15);
const product = MathUtils.multiply(5, 3);
const calc = new MathUtils.Calculator();

### ⚠️ Penting:

**Named exports dan default exports TIDAK bisa diimpor bersamaan dalam satu perintah import.** Jika module memiliki default export sekaligus named exports, kita harus melakukan import terpisah atau menggunakan kombinasi:

// module.ts
export default class Service { }
export function helper() { }

// app.ts - CARA 1 (pisah)
import Service from './module';
import { helper } from './module';

// app.ts - CARA 2 (gabung)
import Service, { helper } from './module';

##
💻
Latihan Praktis

### Latihan 1: Membuat Module Utilitas

Buat file `string-utils.ts` yang mengekspor fungsi-fungsi untuk manipulasi string:

- `capitalize(text: string): string` - kapitalkan huruf pertama

- `reverse(text: string): string` - balik urutan string

- `truncate(text: string, maxLength: number): string` - potong string dengan ellipsis

Lalu buat file `app.ts` yang mengimpor dan menggunakan fungsi-fungsi tersebut.

### Latihan 2: Default Export Class

Buat module `UserService.ts` yang berisi class `UserService` sebagai default export. Class ini harus memiliki method:

- `addUser(name: string, email: string): void`

- `getUser(id: number): User | undefined`

- `listUsers(): User[]`

Impor class tersebut di file lain dan gunakan untuk mengelola daftar user.

### Latihan 3: Mixed Exports

Buat module `config.ts` yang mengekspor:

- **Named exports**: constant `API_URL`, `TIMEOUT`

- **Default export**: interface `AppConfig`

- **Named export**: function `validateConfig(config: AppConfig): boolean`

Import semua nilai tersebut di file `main.ts` dengan cara yang efisien.

← Sebelumnya

🔖 Bookmark

✓ Selesai

Selanjutnya: Default vs Named Exports →
