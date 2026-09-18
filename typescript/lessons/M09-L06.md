# Type Assertions

Type assertions adalah cara untuk memberitahu TypeScript bahwa Anda tahu tipe suatu nilai lebih baik daripada TypeScript. Ini seperti type casting di bahasa lain, tetapi tidak mengubah runtime behavior - hanya mengubah cara TypeScript memandang tipe tersebut. Gunakan dengan hati-hati karena dapat menonaktifkan type safety.

⏱️ 15 menit
📊 Kesulitan: Intermediate
✅ prerequisites: Tipe Primitif, any/unknown

## 🎯 Tujuan Pembelajaran

-
Memahami dua sintaks type assertion: `as` dan angle-bracket

-
Mengetahui kapan menggunakan type assertion

-
Membedakan type assertion dengan type casting

-
Menghindari pitfalls dan unsafe assertions

## 📚 Konten Materi

### 1. Sintaks Type Assertion

TypeScript menyediakan dua cara untuk melakukan type assertion: menggunakan kata kunci `as` (rekomendasi) atau angle-bracket syntax `<Type>value`. Keduanya setara, tetapi `as` lebih disukai karena lebih jelas dan tidak bentrok dengan JSX.

```
// Dua sintaks type assertion (setara)
let someValue: unknown = "hello";

// Sintaks 1: "as" (rekomendasi)
let strLength1: number = (someValue as string).length;

// Sintaks 2: angle-bracket (hindari jika pakai JSX)
let strLength2: number = (<string>someValue).length;

// Keduanya sama - pilih salah satu konsisten
console.log(strLength1, strLength2); // 5, 5

// Type assertion tidak mengubah nilai runtime
let mixed: unknown = 123;
let asString: string = mixed as string;
// Runtime: asString adalah number 123, tapi TypeScript anggap string
// asString.length akan error di runtime! (123 tidak punya length)
```

### 2. Kapan Menggunakan Type Assertion?

Gunakan type assertion ketika Anda lebih tahu tentang tipe suatu nilai daripada TypeScript. Ini umum dalam situasi:

- DOM manipulation (element yang dikembalikan `as HTMLElement`)

- Data dari eksternal API dengan tipe `any` atau `unknown`

- Migrasi dari JavaScript ke TypeScript

- Interoperabilitas dengan library tanpa type definitions

```
// Contoh: DOM manipulation
const button = document.getElementById("myBtn") as HTMLButtonElement;
button.disabled = true; // TypeScript tahu button memiliki properti disabled

// Contoh: Data API dengan any
const response: any = fetch('/api/user').then(r => r.json());
const userName: string = response.data.name as string;

// Contoh: Union type narrowing
function process(value: string | number) {
if (typeof value === "string") {
console.log(value.length);
} else {
// Di sini TypeScript tahu value adalah number
console.log((value as number).toFixed(2));
}
}
```

### 3. Type Assertion vs Type Casting

Type assertion **bukan** type casting. Type casting mengubah nilai dari satu tipe ke tipe lain pada runtime (seperti `Number("123")`). Type assertion hanya memberi tahu TypeScript untuk memperlakukan nilai sebagai tipe tertentu - tidak ada konversi runtime, tidak ada overhead.

```
// Type assertion: HANYA compile-time, tidak mengubah nilai
let someValue: unknown = "123";
let str1: string = someValue as string;

// Type casting: MELAKUKAN konversi nilai pada runtime
let num: number = Number(someValue); // converts "123" ke 123

// Perbandingan:
let val1 = "123" as number; // compile OK, tapi val1 masih string "123"
let val2 = Number("123"); // runtime: 123 (number)
console.log(typeof val1, typeof val2); // "string", "number"
```

### 4. Double Assertion (Assertion berturut-turut)

Anda bisa melakukan multiple assertions berturut-turut untuk mengubah tipe ke tipe yang lebih spesifik. Ini berguna ketika Anda memiliki union type kompleks.

```
// Double assertion dari union ke specific type
let value: string | number = "hello";

// Assertion ke any dulu, lalu ke specific type
let asNumber: number = (value as any) as number;
// TIDAK DISARANKAN - ini memaksa TypeScript menerima apapun

// Cara yang lebih aman: gunakan type guards terlebih dahulu
if (typeof value === "number") {
let num: number = value; // OK setelah check
}
```

#### ⚠️ DANGER: Unsafe Assertions

Type assertion **tidak melakukan** runtime checking. Jika Anda salah assertion, error akan terjadi saat runtime, bukan compile time.

```
// UNSAFE - akan crash di runtime!
let x: unknown = 123;
let str: string = x as string;
console.log(str.length); // Runtime Error: 123.length is undefined
```

Selalu pastikan Anda benar-benar tahu tipe nilai sebelum melakukan assertion. Gunakan type guards (`typeof`, `instanceof`) untuk aman.

### 5. Best Practices

-
•
**Hindari assertion jika memungkinkan** - gunakan type guards atau type narrowing

-
•
**Gunakan `as` syntax** - lebih jelas, kompatibel dengan JSX

-
•
**Jangan assertion dari `any` ke tipe spesifik** - gunakan any hanya sebagai last resort

-
•
**Double assertion berisiko** - hindari assertion ke `any` lalu ke tipe lain

-
•
**Prefer type guards** - `typeof`, `instanceof`, custom type guards

## 💪 Latihan Praktek

### Latihan 1: Safe DOM Access

Gunakan type assertion untuk mengakses DOM element dengan tipe yang tepat.

Buat fungsi `getInputValue(id: string): string` yang mengambil input element dan mengembalikan `value`-nya.

Gunakan `document.getElementById(id) as HTMLInputElement` untuk type assertion.

### Latihan 2: API Response Parser

Buat fungsi yang parse JSON response dengan properti kompleks menggunakan type assertion.

Interface `ApiResponse`: `{ status: number, data: { users: {id: number, name: string}[] } }`

Fungsi `parseResponse(json: unknown): ApiResponse` - gunakan `as` assertion untuk mengubah `unknown` ke `ApiResponse`.

## 📝 Quiz

Quiz ini akan menguji pemahaman Anda tentang type assertion, perbedaan dengan type casting, dan penggunaan yang aman.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous Lesson

Complete Module →
