# Function Overloads

**Function Overloads** memungkinkan kita mendefinisikan beberapa function signatures untuk satu function implementation. Ini sangat berguna ketika function bisa menerima berbagai kombinasi parameter dan mengembalikan tipe yang berbeda berdasarkan input.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Functions

## 🎯 Tujuan Pembelajaran

-
Memahami konsep function overload dan kapan menggunakannya

-
Mendefinisikan multiple signatures untuk satu function

-
Membedakan overload signatures dengan implementation signature

-
Menulis function dengan overload yang type-safe

## 📘 Apa itu Function Overload?

Function overload adalah kemampuan TypeScript untuk mendefinisikan beberapa **call signatures** untuk satu function. Ini membantu TypeScript memahami berbagai cara function dapat dipanggil dan tipe apa yang dikembalikan berdasarkan argumen yang diberikan.

Overload signatures hanya berisi deklarasi - tanpa implementasi. Implementasi sebenarnya menggunakan `any` atau union types untuk parameter, dan berjalan di background.

**⚠️ Penting:** Overload signatures harus konsisten dengan implementation signature. Implementation signature harus compatible dengan semua overload signatures.

## 💻 Contoh 1: Function dengan Overload Sederhana

Mari kita lihat contoh function yang bisa menerima 1 atau 2 argumen dan mengembalikan tipe yang berbeda:

```
// Overload signatures
function greet(name: string): string;
function greet(name: string, age: number): string;

// Implementation signature (harus comprehensive)
function greet(name: string, age?: number): string {
if (age !== undefined) {
return `Hello ${name}, you are ${age} years old!`;
}
return `Hello ${name}!`;
}

// Penggunaan
const msg1 = greet("Alice");           // string
const msg2 = greet("Bob", 25);      // string
// greet("Charlie", "old"); // ❌ Type error: string bukan number
```

TypeScript akan memilih signature yang paling sesuai berdasarkan argumen yang dipanggil. Di atas, `greet("Alice")` menggunakan signature pertama (return `string`), sedangkan `greet("Bob", 25)` menggunakan signature kedua.

## 💻 Contoh 2: Overload dengan Return Type Berbeda

Overload bisa juga mengembalikan tipe yang berbeda berdasarkan input:

```
// Function yang mengembalikan number atau string
function processInput(input: number): number;
function processInput(input: string): string;
function processInput(input: number | string): number | string {
if (typeof input === "number") {
return input * 2;
}
return input.toUpperCase();
}

const result1 = processInput(42);      // number (type inferred)
const result2 = processInput("hello"); // string (type inferred)
```

TypeScript menggunakan overload signatures untuk menebak return type secara akurat. Tanpa overload, `result1` dan `result2` akan bertipe `number | string`.

## 💻 Contoh 3: Overload dengan Multiple Parameter Types

Overload sangat berguna untuk function yang bisa menerima berbagai kombinasi tipe parameter:

```
function getItem(id: number): { id: number; name: string };
function getItem(name: string): { id: number; name: string };
function getItem(idOrName: number | string): { id: number; name: string } {
if (typeof idOrName === "number") {
return { id: idOrName, name: `Item ${idOrName}` };
}
return { id: 0, name: idOrName };
}

const item1 = getItem(123);     // { id: number; name: string }
const item2 = getItem("Widget"); // { id: number; name: string }
```

## 💡 Best Practices

### 1. Overload signatures harus di atas implementation

TypeScript mengharuskan overload signatures didefinisikan sebelum implementation signature.

### 2. Implementation signature harus comprehensive

Implementation signature harus bisa menangani semua kasus yang didefinisikan di overload signatures. Gunakan union types atau `any` untuk parameter.

### 3. Jangan overload terlalu banyak

Terlalu banyak overload bisa membuat kode sulit dibaca. Pertimbangkan untuk menggunakan union types atau optional parameters jika memungkinkan.

### 4. Overload untuk API compatibility

Overload sangat berguna saat membuat library atau API yang perlu mendukung berbagai cara pemanggilan.

## 🏋️ Latihan

### Latihan 1: Calculator Function

Buat function `calculate` dengan overload:

- `calculate(a: number, b: number): number` - mengembalikan penjumlahan

- `calculate(a: string, b: string): string` - mengembalikan concatenation

### Latihan 2: Array Access dengan Safety

Buat function `getElement` yang:

- Jika dioverload dengan index `number`, return `T | undefined`

- Jika dioverload dengan index `number` dan default value, return `T`

## 📝 Quiz

Setelah mempelajari lesson ini, cobalah quiz untuk menguji pemahaman Anda. Quiz akan otomatis dimuat dari `quizzes/` folder.

**✅ Quiz Tersedia:** Mencakup function overload signatures, implementation rules, dan best practices.

← Sebelumnya

Lesson 4 of 5

Selanjutnya →
