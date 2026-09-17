# Type Guards dan Type Narrowing

**Type Guards** adalah teknik untuk mengecek tipe suatu nilai pada runtime, memungkinkan TypeScript untuk "narrow" tipe tersebut ke tipe yang lebih spesifik. Type guards sangat penting saat bekerja dengan union types, any, atau unknown, agar kita bisa mengakses properties dan methods dengan aman.

⏱️ 25 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami apa itu type guards dan mengapa diperlukan

-
Menggunakan built-in type guards: `typeof`, `instanceof`, `in`

-
Membuat custom type guard functions

-
Menerapkan type narrowing dalam fungsi dan conditional logic

##
2
Penjelasan

Ketika variabel memiliki tipe union atau `any`/`unknown`, TypeScript tidak tahu tipe spesifik apa yang ada di suatu blok kode. **Type narrowing** adalah proses dimana TypeScript mengevaluasi kondisi (seperti `if`, `switch`, atau pengecekan tipe) dan mempersempat (narrow) tipe variabel ke tipe yang lebih spesifik dalam blok tersebut.

**Type guard** adalah ekspresi yang melakukan pengecekan pada runtime dan mengembalikan boolean. TypeScript menggunakan type guard untuk melakukan type narrowing.

### Built-in Type Guards

#### `typeof`

Mengecek tipe primitif pada runtime:

```
function printValue(value: string | number) {
if (typeof value === "string") {
// TypeScript窄化 value menjadi string di sini
console.log(value.toUpperCase());  // OK
} else {
// Di sini value adalah number
console.log(value.toFixed(2));  // OK
}
}
```

#### `instanceof`

Mengecek apakah object adalah instance dari class tertentu:

```
class Dog { bark() {} }
class Cat { meow() {} }

function makeSound(animal: Dog | Cat) {
if (animal instanceof Dog) {
animal.bark();  // OK - TypeScript tahu ini Dog
} else {
animal.meow();  // OK - ini Cat
}
}
```

#### `in`

Mengecek apakah property ada dalam object (untuk narrowing interface):

```
interface Car { drive(): void; }
interface Boat { sail(): void; }

function operate(vehicle: Car | Boat) {
if ("drive" in vehicle) {
vehicle.drive();  // OK - TypeScript tahu ini Car
} else {
vehicle.sail();  // OK - ini Boat
}
}
```

### Custom Type Guard Functions

Kita bisa membuat fungsi khusus yang berfungsi sebagai type guard. Fungsi ini mengembalikan `value is Tipe` (return type predicate).

```
// Custom type guard untuk Fish
interface Fish { swim(): void; }
interface Bird { fly(): void; }

function isFish(pet: Fish | Bird): pet is Fish {
return (pet as Fish).swim !== undefined;
}

function getPet(pet: Fish | Bird) {
if (isFish(pet)) {
// TypeScript tahu pet adalah Fish di sini
pet.swim();
} else {
// TypeScript tahu pet adalah Bird
pet.fly();
}
}
```

### Type Narrowing dengan Equality Checks

```
function handle(x: string | number | boolean) {
if (x === "hello") {
// x adalah string
} else if (x === 42) {
// x adalah number
} else {
// x adalah boolean
}
}
```

### Narrowing dengan `unknown` dan `any`

With `unknown`, TypeScript memaksa kita melakukan type checking sebelum menggunakan nilai. With `any`, type checking tidak terjadi (bypass type system).

**⚠️ Tips:** Gunakan `unknown` ketika Anda tidak tahu tipe data (misal: data dari API eksternal). TypeScript akan memaksa Anda melakukan type guard sebelum menggunakan nilai tersebut. Ini lebih aman dari `any`.

##
3
Latihan

### Latihan 1: Custom Type Guard untuk Shape

Buat interface `Square` (side: number) dan `Rectangle` (width: number, height: number). Buat function `isSquare` sebagai type guard, lalu function `calculateArea` yang menerima `Square | Rectangle` dan menghitung luas dengan type guard.

Lihat Solusi

```
interface Square { side: number; }
interface Rectangle { width: number; height: number; }

function isSquare(shape: Square | Rectangle): shape is Square {
return (shape as Square).side !== undefined;
}

function calculateArea(shape: Square | Rectangle): number {
if (isSquare(shape)) {
return shape.side * shape.side;
} else {
return shape.width * shape.height;
}
}
```

### Latihan 2: Instanceof Guard

Buat dua class: `AdminUser` (dengan properti `role`) dan `RegularUser`. Buat function `printUserInfo` yang menerima parameter `AdminUser | RegularUser` dan menampilkan info berbeda untuk masing-masing menggunakan `instanceof`.

Lihat Solusi

```
class AdminUser {
constructor(public name: string, public role: string) {}
}
class RegularUser {
constructor(public name: string) {}
}

function printUserInfo(user: AdminUser | RegularUser) {
if (user instanceof AdminUser) {
console.log(`Admin: ${user.name}, Role: ${user.role}`);
} else {
console.log(`User: ${user.name}`);
}
}
```

← Sebelumnya

Modul 3 - Lesson 3 dari 10

Selanjutnya →
