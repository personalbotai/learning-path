# Namespaces untuk Organisasi Kode

**Namespaces** (sebelumnya disebut "internal modules") adalah fitur TypeScript untuk mengelompokkan related code, mencegah naming collisions, dan mengontrol visibility. Namespaces adalah alternatif atau complement untuk ES6 modules, terutama untuk kode yang berjalan di browser atau environments tanpa module system.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Organization Pattern

##
Tujuan Pembelajaran

-
Memahami konsep **namespace** dan use case-nya

-
Membuat namespace dengan `namespace MyNamespace { }`

-
Menggunakan **nested namespaces** untuk hierarki

-
Mengontrol akses dengan `export` dan `import` inside namespace

-
Memahami perbedaan **namespaces** vs **ES6 modules**

-
Mengetahui kapan menggunakan namespaces (dan kapan tidak)

## Apa itu Namespace?

**Namespace** adalah cara TypeScript untuk mengelompokkan related identifiers (variables, functions, classes, interfaces) ke dalam **logical grouping**. Namespace membantu mencegah **global namespace pollution** dan naming conflicts, terutama dalam aplikasi besar atau library yang akan di-consume oleh aplikasi lain.

### 🔑 Karakteristik Namespace:

- Menggunakan kata kunci `namespace`

- Bisa di-nested (namespace dalam namespace)

- Memberikan **scope** untuk identifiers di dalamnya

- Harus di-`export` untuk bisa diakses dari luar

- Compiles ke IIFE (Immediately Invoked Function Expression) dalam JavaScript

- Tidak memerlukan module loader (bisa jalan di browser dengan <script>)

## Membuat Namespace Dasar

// File: math.ts
namespace MathUtils {
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
return a + b;
}

export function multiply(a: number, b: number): number {
return a * b;
}

// Interface juga bisa di-export
export interface Point {
x: number;
y: number;
}
}

// File: app.ts
import { MathUtils } from './math';

console.log(MathUtils.add(5, 3));  // 8
console.log(MathUtils.PI);             // 3.14159

Perlu dicatat: Ketika menggunakan namespaces, kita tetap perlu `export` setiap identifier yang ingin diakses dari luar namespace. Identifier tanpa `export` bersifat **private** ke namespace tersebut.

## Nested Namespaces

Namespaces bisa di-**nest** untuk membuat hierarki organisasi yang lebih kompleks. Ini memungkinkan pengelompokan yang lebih halus dan menghindari naming conflicts pada level yang berbeda.

// File: shapes.ts
namespace Drawing {
export namespace Shapes {
export interface Shape {
area(): number;
perimeter(): number;
}

export class Rectangle implements Shape {
constructor(
public width: number,
public height: number
) {}

area(): number {
return this.width * this.height;
}

perimeter(): number {
return 2 * (this.width + this.height);
}
}

export class Circle implements Shape {
constructor(public radius: number) {}

area(): number {
return Math.PI * this.radius ** 2;
}

perimeter(): number {
return 2 * Math.PI * this.radius;
}
}
}

export namespace Colors {
export const RED = '#FF0000';
export const GREEN = '#00FF00';
export const BLUE = '#0000FF';
}
}

// File: app.ts
import { Drawing } from './shapes';

const rect = new Drawing.Shapes.Rectangle(10, 5);
console.log(rect.area());  // 50

console.log(Drawing.Colors.BLUE);  // '#0000FF'

## Namespaces vs ES6 Modules

Aspek
Namespaces
ES6 Modules

Module System
TypeScript-specific (legacy)
ECMAScript standard

File generation
Compiles to IIFE (single file)
Separate files (or bundled)

Runtime
Tidak butuh loader
Butuh module loader (browser/node)

Tree shaking
Tidak didukung
Didukung penuh

Use case
Global scripts, legacy browser, library untuk browser
Modern apps, bundlers, Node.js

### 💡 Panduan Modern:

**Gunakan ES6 modules (import/export) untuk hampir semua kasus baru.** Namespaces hanya digunakan untuk:

- Library yang harus jalan di **browser lama** tanpa module loader

- Mengelompokkan code dalam **single global script**

- Legacy codebase yang sudah menggunakan namespaces

- Namespace merging dengan declaration files (ambient)

TypeScript documentation merekomendasikan ES6 modules sebagai solusi modularisasi utama. Namespaces dianggap sebagai "legacy feature" untuk compatibility.

### Split Namespace Across Multiple Files

Namespace bisa didefinisikan di multiple files dengan kata kunci `namespace` yang sama. TypeScript akan **merge** semua deklarasi tersebut menjadi satu namespace. Ini memungkinkan organisasi code yang lebih modular.

// File: vector.ts
namespace Geometry {
export class Vector2D {
constructor(
public x: number,
public y: number
) {}

add(other: Vector2D): Vector2D {
return new Vector2D(this.x + other.x, this.y + other.y);
}
}
}

// File: matrix.ts
namespace Geometry {
export class Matrix3x3 {
// ... implementation
}
}

// File: app.ts
import { Geometry } from './vector';  // Import dari salah satu file
// Geometry sekarang memiliki Vector2D dan Matrix3x3

const v1 = new Geometry.Vector2D(1, 2);
const m1 = new Geometry.Matrix3x3();

## Namespace Import Alias

Kita bisa memberikan **alias** pada namespace saat import menggunakan `as`. Ini berguna untuk menghindari naming conflicts atau membuat nama yang lebih pendek.

// File: utils.ts
namespace StringHelpers {
export function capitalize(s: string): string { ... }
}

namespace NumberHelpers {
export function format(n: number): string { ... }
}

// File: app.ts
import { StringHelpers as Str, NumberHelpers as Num } from './utils';

console.log(Str.capitalize('hello'));
console.log(Num.format(1234567));

##
💻
Latihan Praktis

### Latihan 1: Namespace untuk Data Models

Buat namespace `Models` yang berisi:

- Interface `User` (id, name, email)

- Interface `Product` (id, name, price)

- Interface `Order` (id, userId, productIds)

- Type `UserRole` (enum: 'admin', 'user', 'guest')

Pisahkan di file `models.ts` dan gunakan di `app.ts` dengan import namespace.

### Latihan 2: Nested Namespaces

Buat namespace `App.Utils` dan `App.Services`. Di `App.Utils` tambahkan:

- `formatDate(date: Date): string`

- `validateEmail(email: string): boolean`

Di `App.Services` tambahkan class `AuthService` dan `UserService`. Pisahkan di dua file berbeda, lalu import di app.ts.

### Latihan 3: Namespace untuk Configuration

Buat namespace `Config` yang berisi constants untuk API endpoints, timeout values, dan feature flags. Export semua sebagai `const`. Gunakan di seluruh aplikasi dengan import namespace.

← Sebelumnya: Ambient Modules

🔖 Bookmark

✓ Selesai

Selanjutnya: Declaration Merging →
