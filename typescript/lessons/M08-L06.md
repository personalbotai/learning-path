# Rest Parameters dan Spread Syntax

**Rest parameters** (`...`) memungkinkan function menerima unlimited number of arguments sebagai array. **Spread syntax** (`...`) memecah array/object menjadi individual elements. Meski sama-sama menggunakan `...`, mereka digunakan dalam konteks berbeda.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Functions

##
1
Tujuan Pembelajaran

-
Memahami rest parameters dalam function signatures

-
Menggunakan spread syntax untuk arrays dan objects

-
Type annotations untuk rest parameters

-
Kombinasi rest parameters dengan fixed parameters

##
2
Penjelasan

Rest parameters dan spread syntax adalah fitur powerful di TypeScript (dan JavaScript) untuk bekerja dengan multiple arguments atau array elements secara dinamis.

### Rest Parameters dalam Functions

Rest parameters mengumpulkan semua arguments yang tersisa menjadi array. Harus berupa parameter terakhir.

```
// Function dengan rest parameter
function sum(...nums: number[]): number {
return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);  // 6
sum();            // 0
```

### Rest dengan Fixed Parameters

```
function format(prefix: string, ...messages: string[]): string {
return messages.map(msg => `${prefix}: ${msg}`).join(", ");
}

format("INFO", "Server started", "Listening on port 3000");
```

### Rest Parameters Type Inference

```
// TypeScript infers nums as number[]
function multiply(...nums: number[]) {
return nums.reduce((a, b) => a * b, 1);
}
```

### Spread Syntax untuk Arrays

Spread syntax memecah array menjadi individual elements. Digunakan dalam array literals, function calls, dll.

```
const arr1 = [1, 2];
const arr2 = [3, 4];

// Combine arrays
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4]

// Spread dalam function call
function logAll(...nums: number[]) {
console.log(nums);
}
const nums = [1, 2, 3];
logAll(...nums);  // same as logAll(1, 2, 3)
```

### Spread Syntax untuk Objects

```
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge objects
const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const overridden = { ...obj1, a: 10 };  // { a: 10, b: 2 }
```

### Rest dalam Destructuring

```
const [first, ...rest] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4]

const { name, ...others } = { name: "Alice", age: 30, city: "Jakarta" };
console.log(others);  // { age: 30, city: "Jakarta" }
```

**⚠️ Perlu diingat:** Rest parameters harus berupa parameter terakhir dalam function signature. Spread syntax bisa digunakan di banyak tempat (array, object, function calls), tetapi tidak bisa digunakan langsung dalam type position (gunakan tuple/array types sebagai gantinya).

##
3
Latihan

### Latihan 1: Function dengan Rest Parameters

Buat function `concatAll` yang menerima unlimited number of string arguments menggunakan rest parameters. Function harus menggabungkan semua strings dengan spasi.

Lihat Solusi

```
function concatAll(...strings: string[]): string {
return strings.join(" ");
}

concatAll("Hello", "World", "TypeScript");  // "Hello World TypeScript"
```

### Latihan 2: Spread untuk Object Merge

Buat function `mergeConfig` yang menerima dua config objects dan mengembalikan merged config (object kedua override object pertama). Gunakan spread syntax.

Lihat Solusi

```
type Config = Record<string, any>;

function mergeConfig(base: Config, override: Config): Config {
return { ...base, ...override };
}

const defaultConfig = { apiUrl: "/api", timeout: 5000 };
const customConfig = { timeout: 10000 };
const final = mergeConfig(defaultConfig, customConfig);
// { apiUrl: "/api", timeout: 10000 }
```

← Sebelumnya

Modul 5 - Lesson 2 dari 5

Selanjutnya →
