# Tipe Khusus: void, never, null, undefined

TypeScript memiliki beberapa tipe khusus yang digunakan dalam konteks spesifik: `void` untuk fungsi tanpa return value, `never` untuk fungsi yang selalu throws atau infinite loop, serta `null` dan `undefined` untuk ketiadaan nilai.

⏱️ 15 menit
📊 Kesulitan: Intermediate
✅ prerequisites: Tipe Primitif

## 🎯 Tujuan Pembelajaran

-
Memahami tipe `void` untuk fungsi tanpa return

-
Menggunakan tipe `never` untuk unreachable code

-
Memahami perbedaan `null` dan `undefined`

-
Menggunakan strict null checking dengan `strictNullChecks`

-
Menghindari common pitfalls dengan tipe khusus ini

## 📚 Konten Materi

### 1. Tipe void - No Return Value

Tipe `void` digunakan untuk fungsi yang tidak mengembalikan nilai apapun. Void berarti "tidak ada tipe" - variabel dengan tipe void hanya bisa diassign dengan `undefined` atau `null` (jika strictNullChecks nonaktif).

```
// void untuk fungsi tanpa return
function logMessage(msg: string): void {
console.log(msg);
// tidak ada return statement
}

logMessage("Hello"); // OK

// return expression dalam fungsi void tidak diizinkan
// function badLog(msg: string): void { return msg; } // Error

// Variabel void hanya bisa diassign dengan undefined atau null
let v: void;
v = undefined; // OK
// v = null; // Error jika strictNullChecks aktif
// v = 5; // Error: number tidak bisa diassign ke void

// Callback functions sering menggunakan void
function processItems(items: string[], callback: (item: string) => void) {
items.forEach(callback);
}
```

### 2. Tipe never - Unreachable Code

Tipe `never` merepresentasikan nilai yang tidak pernah ada. Fungsi dengan tipe `never` selalu throwing exception, infinite loop, atau unreachable. Ini berguna untuk type narrowing dan exhaustive checks.

```
// never untuk fungsi yang selalu throw error
function throwError(message: string): never {
throw new Error(message);
}

// never untuk infinite loop
function infiniteLoop(): never {
while (true) {
// loop selamanya, tidak pernah return
}
}

// never untuk exhaustive checks (type narrowing)
function assertNever(x: never): never {
throw new Error(`Unexpected value: ${x}`);
}

enum Shape {
Circle,
Square
}

function handleShape(shape: Shape) {
switch (shape) {
case Shape.Circle:
console.log("Circle");
break;
case Shape.Square:
console.log("Square");
break;
default:
assertNever(shape); // TypeScript pastikan semua cases covered
}
}
```

### 3. null dan undefined

`null` dan `undefined` adalah tipe khusus yang merepresentasikan ketiadaan nilai. Dengan `strictNullChecks` aktif (default dalam strict mode), mereka tidak dapat diassign ke tipe lain tanpa explicit union.

```
// null dan undefined sebagai tipe
let u: undefined = undefined;
let n: null = null;

// Dengan strictNullChecks, number tidak bisa diassign null/undefined
let num: number = 42;
// num = null; // Error
// num = undefined; // Error

// Gunakan union untuk mengizinkan null/undefined
let maybeNum: number | null | undefined;
maybeNum = 42; // OK
maybeNum = null; // OK
maybeNum = undefined; // OK

// Optional parameters dan properties secara implisit union dengan undefined
function greet(name?: string): void {
// name adalah string | undefined
console.log(`Hello, ${name ?? "Guest"}`);
}

interface Config {
apiUrl: string;
timeout?: number; // optional, jadi number | undefined
}
```

### 4. Strict Null Checking

Fitur `strictNullChecks` di tsconfig.json membuat `null` dan `undefined tidak dapat diassign ke tipe lain kecuali dengan explicit union. Ini mencegah banyak runtime errors.

```
// tsconfig.json
{
"compilerOptions": {
"strict": true, // includes strictNullChecks
// atau "strictNullChecks": true
}
}

// Contoh dengan strictNullChecks aktif
function findUser(id: number): User | null {
const user = getUserFromDB(id);
return user ?? null;
}

const result = findUser(1);

// Harus check null sebelum menggunakan
if (result !== null) {
console.log(result.name);
} else {
console.log("User tidak ditemukan");
}

// Optional chaining (ES2020+) membantu null check
console.log(result?.name); // safe access
console.log(result?.address?.city); // nested safe access
```

### 5. Perbedaan void, never, undefined, null

Memahami perbedaan keempat tipe ini penting untuk type system yang akurat. `void` untuk fungsi tanpa return, `never` untuk unreachable code, `undefined` untuk variabel yang belum diinisialisasi, dan `null` untuk nilai null eksplisit.

```
// void vs never
function voidFunc(): void {
console.log("done");
// return diizinkan tapi tidak mengembalikan nilai
return;
}

function neverFunc(): never {
throw new Error("error"); // never reaches end
}

// void bisa diassign ke undefined (dengan strictNullChecks nonaktif)
let v: void = undefined;
// never tidak bisa diassign ke apapun (karena tidak ada nilai)
// let n: never = something; // impossible

// undefined dan null sebagai tipe
let undef: undefined = undefined;
let nullVal: null = null;

// Union dengan null/undefined untuk nullable types
let nullableString: string | null | undefined = null;
```

#### ⚠️ Common Pitfalls

- Jangan gunakan `any` untuk menggantikan `void` atau `never`

- Dengan `strictNullChecks`, variabel tidak bisa langsung diassign `null` atau `undefined` tanpa explicit union

- `never` hanya untuk fungsi yang benar-benar tidak mengembalikan nilai (throw/infinite)

- Jangan return value dari fungsi `void`

## 💪 Latihan Praktek

### Latihan 1: Validation Function dengan never

Buat fungsi validasi yang throw error jika input tidak valid, dengan return type never.

Fungsi: `validateAge(age: number): never` untuk throw "Usia harus >= 0" jika age < 0.

Buat juga fungsi `validateEmail(email: string): never` yang throw jika email tidak mengandung "@".

### Latihan 2: Nullable Configuration

Buat interface untuk config dengan optional properties dan null handling.

Interface `AppConfig`: `apiUrl: string`, `timeout?: number`, `debugMode: boolean | null`

Fungsi `getConfigValue(config: AppConfig, key: string): string | null` yang mengembalikan nilai config berdasarkan key, dengan null jika tidak ada.

## 📝 Quiz

Quiz ini menguji pemahaman tentang tipe khusus void, never, null, dan undefined dalam TypeScript.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous Lesson

Next Lesson →
