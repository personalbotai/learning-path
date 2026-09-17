# Type Inference

**Type Inference** adalah kemampuan TypeScript untuk menebak (infer) tipe data berdasarkan nilai yang diberikan, tanpa perlu explicit type annotation. Memahami cara TypeScript melakukan inference membantu kita menulis kode yang lebih concise sekaligus type-safe.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami bagaimana TypeScript melakukan type inference

-
Mengenali konteks di mana inference bekerja otomatis

-
Mengetahui kapan perlu explicit type annotation

-
Menggunakan `const` vs `let` untuk inference

##
2
Penjelasan

TypeScript memiliki sistem type inference yang canggih. Sistem ini dapat menentukan tipe variabel berdasarkan nilai yang di-assign, tanpa perlu kita sebutkan tipe secara eksplisit. Namun, ada kalimatnya kita perlu memberikan type annotation agar TypeScript bisa memahami maksud kita dengan lebih baik.

### Inference pada Variable Declaration

```
// TypeScript inference menebak tipe dari nilai
let message = "hello";     // inferred: string
let count = 42;           // inferred: number
let isDone = true;      // inferred: boolean

// const memberikan inference yang lebih ketat
const PI = 3.14;       // inferred: 3.14 (literal type, bukan number)
const names = ["Alice", "Bob"]; // inferred: string[]
```

### Contextual Typing (Inference dari Context)

TypeScript bisa menebak tipe berdasarkan konteks di mana variabel digunakan, seperti parameter function atau return type.

```
// Function tanpa explicit return type - TypeScript infers dari return
function add(x: number, y: number) {
return x + y;  // inferred: number
}

// Arrow function dengan implicit return
const multiply = (a: number, b: number) => a * b;  // inferred: number

// Array methods - callback parameter inferred
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);  // n inferred as number
```

### Best Practices: Kapan Perlu Explicit Annotation?

Gunakan explicit type annotation ketika:

- Function public API (untuk dokumentasi yang jelas)

- Return type function yang kompleks

- Object literals agar shape tetap konsisten

- Menghindari implicit `any`

```
// ✅ Explicit annotation untuk API function
function processUser(user: User): ProcessResult {
// ... implementation
}

// ❌ Inference bisa menghasilkan any jika tidak jelas
function badExample(data) {  // data: any (implicit any - error strict mode)
return data.map(x => x * 2);
}
```

### Literal Types vs Wider Types

```
const status = "success";  // inferred type: "success" (string literal)
let mutableStatus = "success";  // inferred type: string

const answer = 42;  // inferred: 42 (numeric literal)
let mutableAnswer = 42;  // inferred: number

// Untuk memberi wider type pada const, gunakan type assertion atau assignment ke let
const flexible: number = 42;  // explicit: number
```

### Inference pada Arrays dan Objects

```
// Array - TypeScript determines element type
const fruits = ["apple", "banana"];  // inferred: string[]

// Object - inferred dari properties
const point = { x: 10, y: 20 };  // inferred: { x: number; y: number; }

// Empty array - inferred as any[] (avoid!)
const empty = [];  // any[]
// Better: provide explicit type
const numbers: number[] = [];
```

### Inference dalam Generic Functions

```
// Generic identity function - T inferred dari argument
function identity<T>(arg: T): T {
return arg;
}

identity("hello");  // T inferred as string
identity(42);     // T inferred as number
```

**⚠️ Perhatian:** Inference sangat membantu, tapi kadang bisa menghasilkan tipe yang lebih ketat (literal types) atau lebih longgar (any) dari yang kita harapkan. Selalu pahami hasil inference dan berikan explicit annotation ketika needed untuk clarity.

##
3
Latihan

### Latihan 1: Inference pada Function

Buat function `createUser` yang menerima `name: string` dan `age: number`, mengembalikan object user. Cek tipe return yang di-infer TypeScript. Tambahkan explicit return type annotation untuk memastikan shape yang konsisten.

Lihat Solusi

```
// Tanpa explicit type - inferred dari return object
function createUser(name: string, age: number) {
return { name, age, id: Date.now() };
// inferred: { name: string; age: number; id: number; }
}

// Dengan explicit annotation (recommended untuk public API)
interface User {
name: string;
age: number;
id: number;
}

function createUserExplicit(name: string, age: number): User {
return { name, age, id: Date.now() };
}
```

### Latihan 2: Const vs Let Inference

Buat dua variabel: `const status = "active"` dan `let mutableStatus = "active"`. Cek tipe yang di-infer untuk masing-masing. Coba assignment `status = "inactive"` (error) vs `mutableStatus = "inactive"` (OK).

Lihat Solusi

```
const status = "active";   // inferred: "active" (literal type)
let mutableStatus = "active";  // inferred: string

// status = "inactive"; // Error! "active" != "inactive"
mutableStatus = "inactive";  // OK - mutableStatus adalah string

// Untuk memberikan const wider type:
const flexibleStatus: string = "active";  // explicit: string
```

← Sebelumnya

Modul 3 - Lesson 6 dari 10

Selanjutnya →
