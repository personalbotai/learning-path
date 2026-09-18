# Type Narrowing Techniques

Type narrowing adalah kemampuan TypeScript untuk menganalisis kode dan menentukan tipe yang lebih spesifik dari sebuah variabel dalam suatu blok. Ada beberapa teknik type narrowing yang bisa kita gunakan, selain type guards yang sudah dibahas.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami berbagai teknik type narrowing di TypeScript

-
Menggunakan `switch` statement untuk narrowing

-
Narrowing dengan `truthiness` checks (if, === null/undefined)

-
Menggunakan `discriminated unions` untuk type narrowing otomatis

##
2
Penjelasan

Type narrowing memungkinkan TypeScript untuk mengurangi (narrow) tipe variabel berdasarkan alur kode. Berbeda dengan type guards yang eksplisit, narrowing sering terjadi otomatis berdasarkan kondisi yang dievaluasi TypeScript.

### 1. Switch Statements

```
type Shape = 'circle' | 'square' | 'triangle';

function describe(shape: Shape) {
switch (shape) {
case 'circle':
// shape = 'circle' di sini
return "Lingkaran";
case 'square':
// shape = 'square'
return "Persegi";
case 'triangle':
// shape = 'triangle'
return "Segitiga";
}
}
```

### 2. Truthiness Narrowing

TypeScript memperketat tipe berdasarkan truthiness:

```
function process(input: string | null | undefined) {
if (input) {
// TypeScript tahu input adalah string (bukan null/undefined)
console.log(input.toUpperCase());
} else {
// Di sini input adalah null atau undefined
console.log("No input");
}
}
```

### 3. Equality Narrowing

Menggunakan operator `===`, `!==`, `==`, `!=`:

```
function handle(x: string | number) {
if (x === "hello") {
// x adalah string
} else if (x === 100) {
// x adalah number dengan nilai 100
} else {
// x adalah number (selain 100)
}
}
```

### 4. Discriminated Unions (Tagged Unions)

Teknik paling powerful: membuat union dari object types yang memiliki property "discriminator" (tag) yang unik. TypeScript bisa narrow berdasarkan nilai property tersebut.

```
interface Square { kind: 'square'; size: number; }
interface Rectangle { kind: 'rectangle'; width: number; height: number; }
interface Circle { kind: 'circle'; radius: number; }

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
switch (shape.kind) {
case 'square':
return shape.size * shape.size;
case 'rectangle':
return shape.width * shape.height;
case 'circle':
return Math.PI * shape.radius * shape.radius;
}
}
```

### 5. Narrowing dengan `in` operator

```
function move(pet: { fly(): void } | { swim(): void }) {
if ("fly" in pet) {
// TypeScript tahu pet memiliki method fly()
pet.fly();
} else {
// TypeScript tahu pet memiliki method swim()
pet.swim();
}
}
```

### 6. Type Predicates

Seperti yang dibahas di lesson Type Guards, kita bisa membuat fungsi yang mengembalikan `value is Tipe`. TypeScript menggunakan ini untuk narrowing.

##
3
Latihan

### Latihan 1: Discriminated Union untuk API Response

Buat tipe `ApiResponse` dengan discriminator `status` yang bisa berupa `'success'` atau `'error'`. Buat function `handleResponse` yang menggunakan switch untuk menangani kedua kasus.

Lihat Solusi

```
interface SuccessResponse {
status: 'success';
data: any;
}
interface ErrorResponse {
status: 'error';
message: string;
}
type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(resp: ApiResponse) {
switch (resp.status) {
case 'success':
console.log(resp.data);
break;
case 'error':
console.error(resp.message);
break;
}
}
```

### Latihan 2: Truthiness dengan Nullable

Buat function `greet` yang menerima parameter `name: string | null`. Jika name truthy, tampilkan "Hello, [name]!". Jika falsy, tampilkan "Hello, Guest!".

Lihat Solusi

```
function greet(name: string | null) {
if (name) {
console.log(`Hello, ${name}!`);
} else {
console.log("Hello, Guest!");
}
}
```

← Sebelumnya

Modul 3 - Lesson 4 dari 10

Selanjutnya →
