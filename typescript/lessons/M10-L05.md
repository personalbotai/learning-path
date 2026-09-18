# Union Types

**Union Types** memungkinkan kita mendefinisikan sebuah variabel yang dapat memiliki beberapa tipe data. Dengan union types, kita dapat membuat tipe yang fleksibel namun tetap type-safe, sangat berguna ketika bekerja dengan data yang bisa berupa beberapa jenis tipe.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami konsep Union Types dan kapan menggunakannya

-
Membuat tipe gabungan dengan operator `|`

-
Menggunakan Union Types dengan type guards untuk type narrowing

-
Menerapkan Union Types dalam function parameters dan return types

##
2
Penjelasan

Union Types adalah salah satu fitur powerful di TypeScript yang memungkinkan sebuah variabel, parameter, atau return value memiliki beberapa tipe data yang mungkin. Ini dicapai dengan menggunakan operator pipe `|` (bitwise OR) untuk menggabungkan beberapa tipe menjadi satu.

### Sintaks Dasar

```
// Union type dengan dua tipe
let value: string | number;
value = "hello";  // OK
value = 42;       // OK
value = true;      // Error: boolean tidak termasuk dalam union
```

### Union Types dengan Lebih dari Dua Tipe

```
// Bisa menggabungkan banyak tipe
type StringNumberBoolean = string | number | boolean;

let data: StringNumberBoolean;
data = "text";
data = 100;
data = false;
```

### Kapan Menggunakan Union Types?

- **Data dari API**: Respons API bisa berupa tipe yang berbeda (string, number, null, object)

- **Form inputs**: Input pengguna bisa berupa teks, angka, atau pilihan

- **Optional properties**: Properti yang mungkin tidak ada (union dengan `undefined`)

- **Function parameters**: Function yang menerima beberapa tipe input

### Union Types dalam Function

```
// Function yang menerima string atau number
function printId(id: string | number): void {
if (typeof id === "string") {
console.log("ID (string):", id.toUpperCase());
} else {
console.log("ID (number):", id);
}
}

printId("abc123");  // OK
printId(123);       // OK
```

### Type Narrowing dengan Union Types

Ketika menggunakan union types, TypeScript tidak tahu tipe spesifik mana yang aktif di suatu konteks. Untuk bisa menggunakan method atau property yang spesifik, kita perlu melakukan **type narrowing** - yaitu cara untuk memberitahu TypeScript tipe mana yang sedang digunakan.

```
function handleValue(value: string | number | boolean) {
// Type narrowing menggunakan typeof
if (typeof value === "string") {
// Di sini TypeScript tahu value adalah string
console.log(value.toUpperCase());  // OK
}

if (typeof value === "number") {
// Di sini value adalah number
console.log(value.toFixed(2));  // OK
}

if (typeof value === "boolean") {
// Di sini value adalah boolean
console.log(value);  // OK
}
}
```

### Union Types dengan Array

```
// Array yang bisa berisi string atau number
let mixedArray: (string | number)[] = ["hello", 42, "world", 100];

// Atau menggunakan sintaks generic
let anotherArray: Array<string | number> = [1, "a", 2, "b"];
```

### Penting! Type Safety dengan Union

**⚠️ Perlu diingat:** Ketika variabel memiliki union type, Anda hanya bisa mengakses properties atau methods yang ada di SEMUA tipe dalam union. TypeScript akan memblokir akses ke property yang hanya ada di satu tipe tertentu.

```
interface Bird {
fly(): void;
}

interface Fish {
swim(): void;
}

function move(pet: Bird | Fish) {
// Error: Property 'fly' tidak ada di semua tipe
// pet.fly();

// Harus type narrowing dulu
if ("fly" in pet) {
pet.fly();  // OK - TypeScript tahu ini Bird
}
}
```

##
3
Latihan

### Latihan 1: Union Type untuk Form Input

Buat tipe `FormInput` yang bisa berupa `string` atau `number`. Gunakan dalam function `processInput` yang menangani kedua tipe tersebut.

Lihat Solusi

```
// Solusi
type FormInput = string | number;

function processInput(input: FormInput): string {
if (typeof input === "string") {
return "Input adalah string: " + input.toUpperCase();
} else {
return "Input adalah number: " + (input * 2);
}
}
```

### Latihan 2: API Response Type

Buat tipe `ApiResponse` yang bisa berupa object data atau string error. Function `handleResponse` harus mengecek tipe dan menampilkan sesuai kondisi.

Lihat Solusi

```
type ApiResponse = { success: true; data: any } | { success: false; error: string };

function handleResponse(response: ApiResponse) {
if (response.success) {
console.log("Data:", response.data);
} else {
console.error("Error:", response.error);
}
}
```

← Sebelumnya

Modul 3 - Lesson 1 dari 10

Selanjutnya →
