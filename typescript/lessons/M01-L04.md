# Type any dan unknown

TypeScript memiliki dua tipe khusus yang mirip namun berbeda secara signifikan: `any` dan `unknown`. Keduanya digunakan untuk menangani nilai dengan tipe yang tidak diketahui, tetapi `unknown` jauh lebih aman secara type-safe. Memahami perbedaannya penting untuk menulis kode TypeScript yang aman.

⏱️ 15 menit
📊 Kesulitan: Pemula-Intermediate
✅ prerequisites: Tipe Primitif

## 🎯 Tujuan Pembelajaran

-
Memahami perbedaan `any` dan `unknown`

-
Mengetahui kapan menggunakan masing-masing tipe

-
Menggunakan type guards untuk `unknown`

-
Menghindari pitfalls dari `any`

## 📚 Konten Materi

### 1. Tipe any - "Type Escape"

Tipe `any` adalah tipe yang menonaktifkan type checking sepenuhnya. Variabel dengan tipe `any` dapat diassign dengan nilai apa saja, dan Anda dapat melakukan operasi apa pun padanya tanpa error. Ini seperti "mematikan" TypeScript untuk variabel tersebut.

```
// any: type checking dimatikan
let value: any = "teks";
value = 123; // OK
value = true; // OK
value.toFixed(2); // OK (tidak error meski value sekarang boolean)

// any dari external sources (misal: API response)
const response: any = fetch('/api/data');
console.log(response.data.id); // Tidak ada error, tapi berisiko runtime error

// any dalam array
let mixedArray: any[] = ["string", 123, true, { id: 1 }];
```

### 2. Tipe unknown - "Type-Safe Any"

Tipe `unknown` juga bisa menampung nilai apa saja, tetapi lebih aman karena Anda tidak dapat melakukan operasi pada `unknown` tanpa melakukan type assertion atau type checking terlebih dahulu. Ini memaksa Anda untuk memastikan tipe sebelum menggunakan nilai.

```
// unknown: aman, perlu type checking sebelum use
let data: unknown = "hello";
data = 42;
data = { name: "Budi" };

// ERROR: Tidak bisa langsung akses properti atau method
// console.log(data.length); // Error: 'data' is of type 'unknown'

// Harus menggunakan type guards atau assertions
if (typeof data === "string") {
// TypeScript tahu data adalah string di dalam block ini
console.log(data.toUpperCase());
}

if (typeof data === "number") {
console.log(data.toFixed(2));
}

// Type assertion (gunakan dengan hati-hati)
const strData = data as string;
console.log(strData.length); // Bisa杭 error di runtime jika data bukan string!
```

### 3. Perbandingan any vs unknown

Perbedaan utama terletak pada **type safety**. `any` mengabaikan type checking sepenuhnya, sementara `unknown` memerlukan pemeriksaan tipe sebelum operasi. Gunakan `unknown` untuk data eksternal yang tipe tidak pasti, dan hindari `any` kecuali benar-benar diperlukan.

```
// Assignment: any bisa assignment ke tipe lain
let anyVal: any = "test";
let str1: string = anyVal; // OK (any → string)

// unknown: harus melalui type checking atau assertion
let unknownVal: unknown = "test";
// let str2: string = unknownVal; // Error: 'unknown' is not assignable to 'string'

// Harus explicit assertion atau check
let str2: string = unknownVal as string; // assertion
if (typeof unknownVal === "string") {
let str3: string = unknownVal; // OK setelah check
}

// unknown lebih aman: mencegah kesalahan type secara otomatis
// any membuka kemungkinan runtime error tanpa peringatan
```

#### ⚠️ Hindari any sepanjang mungkin

Tipe `any` adalah **"type escape hatch"** yang membatalkan keuntungan utama TypeScript: type safety. Gunakan hanya dalam kondisi khusus:

- Migrasi dari JavaScript ke TypeScript secara bertahap

- Data dari eksternal API yang benar-benar tidak memiliki type definition

- Library lama tanpa type definitions (use `// @ts-ignore` sebagai alternative)

### 4. Kapan Menggunakan unknown?

Gunakan `unknown` ketika Anda memiliki nilai yang tipe tidak dapat dipastikan pada waktu compile, tetapi Anda ingin memaksa type checking sebelum digunakan. Ini adalah pendekatan yang lebih aman daripada `any`.

```
// Contoh: parsing JSON dari API
function parseJSON(jsonString: string): unknown {
return JSON.parse(jsonString);
}

const result = parseJSON('{"name":"Budi","age":25}');

// Harus check tipe sebelum menggunakan
if (typeof result === "object" && result !== null) {
// Type assertion ke specific type
const user = result as { name: string; age: number };
console.log(user.name, user.age);
}

// unknown dengan generic functions
function processValue<T>(value: unknown): T {
return value as T;
}

const num = processValue<number>("123"); // assertion manual
```

### 5. Best Practices

-
•
**Hindari any** - gunakan `unknown` atau tipe spesifik

-
•
**Type guards** - selalu cek tipe sebelum menggunakan `unknown`

-
•
**Limitasi any** - jika harus pakai any, batasi scope dengan function/local variable

-
•
**Strict mode** - aktifkan `"strict": true` di tsconfig untuk mencegah implicit any

## 💪 Latihan Praktek

### Latihan 1: Safe Data Processor

Buat fungsi yang menerima input `unknown` dan mengembalikan string berdasarkan tipe sebenarnya.

Fungsi: `describeValue(value: unknown): string`

Jika string: return "String: [nilai]". Jika number: "Number: [nilai]". Jika boolean: "Boolean: [nilai]". Jika object: "Object dengan [key] properti". Jika lainnya: "Tipe: [typeof]"

### Latihan 2: API Response Handler

Buat fungsi yang menangani response API dengan tipe `unknown` dan melakukan type narrowing.

Fungsi: `extractUserData(response: unknown): {id: number, name: string} | null`

Cek apakah response adalah object dengan properti id (number) dan name (string). Return null jika tidak valid.

## 📝 Quiz

Test pemahaman Anda tentang perbedaan any dan unknown, serta cara menggunakan type guards.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous Lesson

Next Lesson →
