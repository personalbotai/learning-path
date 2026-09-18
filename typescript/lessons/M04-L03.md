# Function Types

Di TypeScript, functions adalah first-class citizens yang bisa diatribusikan tipe. **Function Types** mendefinisikan signature (parameter dan return type) dari sebuah function, memungkinkan type checking untuk function arguments, return values, dan callback.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Functions

##
1
Tujuan Pembelajaran

-
Mendefinisikan function type dengan syntax `(params) => returnType`

-
Menggunakan type alias untuk function signatures

-
Type annotation untuk function expressions dan arrow functions

-
Optional dan default parameters dalam function types

##
2
Penjelasan

Function types mendefinisikan "bentuk" atau signature dari sebuah function: parameter types dan return type. Ini sangat berguna untuk callback, higher-order functions, dan API design.

### Sintaks Dasar

```
// Function type: (number, number) => number
type BinaryOperation = (a: number, b: number) => number;

const add: BinaryOperation = (a, b) => a + b;
const multiply: BinaryOperation = (a, b) => a * b;
```

### Function Type sebagai Parameter

```
type FilterFunction = (value: number) => boolean;

function filterArray(arr: number[], fn: FilterFunction): number[] {
const result: number[] = [];
for (const num of arr) {
if (fn(num)) result.push(num);
}
return result;
}

const isEven: FilterFunction = n => n % 2 === 0;
filterArray([1, 2, 3, 4], isEven);  // [2, 4]
```

### Function Type sebagai Return Type

```
type Multiplier = (x: number) => number;

function createMultiplier(factor: number): Multiplier {
return (x: number) => x * factor;
}

const double = createMultiplier(2);
double(5);  // 10
```

### Optional dan Default Parameters

```
// Optional parameter
type Greet = (name: string, greeting?: string) => string;

const sayHello: Greet = (name, greeting = "Hello") => {
return `${greeting}, ${name}!`;
};
```

### Rest Parameters

```
type Sum = (...nums: number[]) => number;

const total: Sum = (...nums) => nums.reduce((a, b) => a + b, 0);
total(1, 2, 3);  // 6
```

### void Return Type

```
type Logger = (msg: string) => void;

const log: Logger = (msg) => console.log(msg);
// return value diabaikan
```

### this Parameters

```
interface Calculator {
value: number;
add(x: number): void;
}

type AddFunction = (this: Calculator, x: number) => void;

const add: AddFunction = function(x) {
this.value += x;  // OK - this type known
};
```

**💡 Tips:** Function types adalah dasar untuk callback patterns, higher-order functions, dan polymorphism di TypeScript. Gunakan type alias untuk complex function signatures agar lebih readable.

##
3
Latihan

### Latihan 1: Predicate Function Type

Buat type `Predicate` untuk function yang menerima `T` dan mengembalikan `boolean`. Buat function `filterByPredicate` yang menerima array `T[]` dan `Predicate<T>`, mengembalikan filtered array.

Lihat Solusi

```
type Predicate<T> = (value: T) => boolean;

function filterByPredicate<T>(arr: T[], fn: Predicate<T>): T[] {
return arr.filter(fn);
}

// Usage:
const numbers = [1, 2, 3, 4];
const isEven: Predicate<number> = n => n % 2 === 0;
filterByPredicate(numbers, isEven);  // [2, 4]
```

### Latihan 2: Factory Function Type

Buat type `Factory` yang menerima parameter dan mengembalikan instance dari generic `T`. Implementasikan factory untuk membuat object `{ name: string }`.

Lihat Solusi

```
type Factory<T> = (...args: any[]) => T;

function createFactory<T>(fn: Factory<T>): Factory<T> {
return fn;
}

const createPerson = createFactory<{ name: string }>((name: string) => ({ name }));
const person = createPerson("Alice");  // { name: "Alice" }
```

← Sebelumnya

Modul 5 - Lesson 1 dari 5

Selanjutnya →
