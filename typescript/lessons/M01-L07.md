# Arrow Functions & Types

**Arrow Functions** adalah sintaks alternatif untuk function expressions yang lebih ringkas. Di TypeScript, arrow functions memiliki **lexical scoping** untuk `this`, `arguments`, `super`, dan `new.target`. Memahami arrow functions dan typing-nya penting untuk modern TypeScript development.

⏱️ 15 menit
📊 Kesulitan: Mudah
📚 Tipe: Functions

## 🎯 Tujuan Pembelajaran

-
Memahami sintaks arrow function dan perbandingan dengan regular functions

-
Mengetik arrow functions dengan parameter dan return types

-
Memahami lexical scoping dan perilaku `this` di arrow functions

-
Menggunakan arrow functions sebagai callbacks dan higher-order functions

## 📘 Arrow Function Syntax

Arrow functions menggunakan sintaks `=>` untuk mendefinisikan function body. Ada beberapa bentuk syntax tergantung jumlah parameter dan explicit return.

**🔑 Key Difference:** Arrow functions tidak memiliki own `this`. Mereka mengambil `this` dari enclosing lexical scope. Ini membuat them ideal untuk callbacks di mana regular functions akan memiliki `this` yang berbeda.

## 💻 Contoh 1: Basic Arrow Function

Berikut perbandingan regular function dan arrow function:

```
// Regular function
function add(a: number, b: number): number {
return a + b;
}

// Arrow function (explicit return)
const addArrow = (a: number, b: number): number => {
return a + b;
};

// Arrow function (implicit return, single expression)
const addShort = (a: number, b: number): number => a + b;

// Single parameter bisa tanpa parentheses
const square = (x: number): number => x * x;
```

Arrow functions dengan implicit return (tanpa kurung kurawal) hanya bisa digunakan jika body adalah single expression. TypeScript akan menebak return type otomatis, atau kita bisa specify explicit return type seperti contoh di atas.

## 💻 Contoh 2: Arrow Functions dengan Callbacks

Arrow functions sangat umum digunakan sebagai callbacks karena lexical `this`:

```
class Counter {
private count = 0;

increment(): void {
const numbers = [1, 2, 3, 4, 5];

// Arrow function: 'this' dari Counter class
numbers.forEach((num) => {
this.count += num;  // ✅ this adalah Counter instance
});

// Regular function: 'this' undefined atau global
// numbers.forEach(function(num) { this.count += num; }); // ❌ Error
}

getCount(): number {
return this.count;
}
}
```

Di dalam arrow function, `this` mengacu pada `Counter` instance (lexical scope). Regular function di callback akan memiliki `this` sendiri (undefined di strict mode).

## 💻 Contoh 3: Typing Arrow Functions dengan Interfaces

Kita bisa assign type ke arrow function menggunakan type annotations atau interfaces:

```
// Define a function type
type MathOperation = (x: number, y: number) => number;

// Arrow function with explicit type
const multiply: MathOperation = (x: number, y: number): number => x * y;

// TypeScript bisa infer type dari context
const divide: MathOperation = (x, y) => x / y; // Parameters的类型被推断为 any，需要显式注解或开启 noImplicitAny

// Better with explicit parameter types
const divideSafe = (x: number, y: number): number => x / y;

// Arrow function dengan rest parameters
const sumAll = (...nums: number[]): number => nums.reduce((a, b) => a + b, 0);
```

Ketika assign arrow function ke typed variable, TypeScript akan check bahwa function signature sesuai. Jika kita assign `(x, y) => x + y` ke variable bertipe `(a: string, b: string) => string`, TypeScript akan memberikan error karena tipe parameter tidak match.

## 💻 Contoh 4: Arrow Functions dalam Higher-Order Functions

Arrow functions sering digunakan dengan array methods (`map`, `filter`, `reduce`) dan other higher-order functions:

```
interface User {
id: number;
name: string;
age: number;
}

const users: User[] = [
{ id: 1, name: "Alice", age: 25 },
{ id: 2, name: "Bob", age: 30 },
{ id: 3, name: "Charlie", age: 35 }
];

// Arrow function dengan explicit typing di map
const names: string[] = users.map((user: User): string => user.name);

// TypeScript bisa infer parameter type dari array context
const adults = users.filter(user => user.age >= 18); // user bertipe User

// Complex transformation
const nameLengths = users
.map(user => ({ ...user, nameLength: user.name.length }))
.filter(u => u.nameLength > 4)
.map(u => u.nameLength);
```

## 💡 Best Practices

### 1. Gunakan arrow functions untuk callbacks

Arrow functions menjaga `this` lexical context, sangat berguna sebagai callbacks di object methods atau event handlers.

### 2. Explicit types untuk public APIs

Untuk function yang diekspos sebagai public API, selalu specify parameter dan return types secara eksplisit.

### 3. Implicit return untuk simple expressions

Gunakan implicit return (tanpa kurung kurawal) untuk single-expression functions seperti callbacks `map`, `filter`.

### 4. Jangan gunakan arrow functions sebagai constructors

Arrow functions tidak bisa digunakan dengan `new` keyword. Mereka tidak memiliki `[[Construct]]` internal method.

### 5. Gunakan regular functions untuk method yang butuh `this`

Jika method perlu akses ke object's `this` (bukan lexical), gunakan regular function, bukan arrow.

## ⚠️ Common Pitfalls

### 1. Arrow functions tidak bisa dipakai sebagai methods

Jika kita assign arrow function sebagai object property, `this` tidak akan mengacu ke object tersebut:

```
const obj = {
value: 42,
// Arrow function - this lexical, bukan obj
getValue: () => this.value  // this mungkin window atau undefined
};
console.log(obj.getValue()); // undefined atau error
```

### 2. Arrow functions tidak memiliki `arguments` object

Arrow functions tidak memiliki `arguments` binding. Gunakan rest parameters untuk menangkap semua arguments:

```
function regular() {
console.log(arguments); // ArgumentsObject [1, 2, 3]
}
regular(1, 2, 3);

const arrow = () => {
console.log(arguments); // ReferenceError: arguments is not defined
};
arrow(1, 2, 3);

// Gunakan rest parameters:
const arrowWithRest = (...args: any[]) => {
console.log(args); // [1, 2, 3]
};
```

## 🏋️ Latihan

### Latihan 1: Transformasi Array

Buat arrow function yang mengubah array of numbers menjadi array of strings yang representasi currency:

- Input: `[100, 200, 300]`

- Output: `["Rp 100", "Rp 200", "Rp 300"]`

- Gunakan `map` dengan arrow function

### Latihan 2: Event Handler dengan `this`

Buat class `Timer` yang menggunakan arrow function sebagai event handler agar `this` tetap merujuk ke instance:

- Property `seconds: number`

- Method `start()` yang menggunakan `setInterval` dengan arrow function

- Arrow function increment `this.seconds` setiap detik

## 📝 Quiz

Setelah mempelajari lesson ini, cobalah quiz untuk menguji pemahaman Anda. Quiz akan otomatis dimuat dari `quizzes/` folder.

**✅ Quiz Tersedia:** Mencakup arrow function syntax, lexical this, typing, dan penggunaan sebagai callbacks.

← Sebelumnya

Lesson 5 of 5

Selanjutnya →
