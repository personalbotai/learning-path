# Tipe Primitif: string, number, boolean

TypeScript memiliki tipe primitif yang mirip dengan JavaScript. Memahami tipe primitif adalah langkah pertama untuk mastering type system TypeScript. Di lesson ini, kita akan belajar tentang tipe **string**, **number**, dan **boolean** - tiga tipe dasar yang paling sering digunakan dalam programming.

⏱️ 20 menit
📊 Kesulitan: Pemula
✅ prerequisites: Module 1

## 🎯 Tujuan Pembelajaran

-
Memahami tipe primitif `string`, `number`, dan `boolean`

-
Mendeklarasikan variabel dengan explicit type annotations

-
Menggunakan type inference untuk type safety otomatis

-
Menghindari common pitfalls dengan tipe primitif

## 📚 Konten Materi

### 1. Tipe String

Tipe `string` merepresentasikan teks atau urutan karakter. Di TypeScript, string dapat dideklarasikan dengan tanda kutip ganda ("), tanda kutip tunggal ('), atau backtick (`) untuk template literals.

```
// Deklarasi string dengan explicit type
let nama: string = "Budi";
let pesan: string = 'Hello, World!';
let template: string = `Nama: ${nama}, Usia: 25`;

// Type inference - TypeScript otomatis menebak tipe
let kota = "Jakarta"; // inferred as string
let deskripsi = `Kota ${kota} adalah ibu kota Indonesia`;

// Operasi string umum
let panjang: number = nama.length;
let hurufPertama: string = nama[0];
let upper: string = nama.toUpperCase();
let lower: string = nama.toLowerCase();
```

### 2. Tipe Number

Tipe `number` merepresentasikan nilai numerik, termasuk integer, floating-point, dan special values seperti `NaN` dan `Infinity`. TypeScript menggunakan floating-point representation seperti JavaScript (IEEE 754).

```
// Number dengan explicit type
let umur: number = 25;
let harga: number = 1999.99;
let scientific: number = 1.23e4; // 12300

// Type inference
let quantity = 10; // inferred as number
let pi = 3.14159;

// Special number values
let notNumber: number = NaN;
let positiveInf: number = Infinity;
let negativeInf: number = -Infinity;

// Operasi matematika
let hasil: number = (umur * 2) + harga;
let pembulatan: number = Math.round(harga);
let max: number = Math.max(umur, quantity);
```

### 3. Tipe Boolean

Tipe `boolean` hanya memiliki dua nilai: `true` atau `false`. Boolean digunakan untuk merepresentasikan nilai logika, sering digunakan dalam kondisi (if/else) dan perbandingan.

```
// Boolean dengan explicit type
let isActive: boolean = true;
let isLoggedIn: boolean = false;

// Type inference
let isAdult = umur >= 18; // inferred as boolean
let isEmpty = nama === "";

// Boolean dalam kondisi
if (isActive) {
console.log("User aktif");
} else {
console.log("User tidak aktif");
}

// Logical operators
let combined: boolean = isActive && isLoggedIn;
let either: boolean = isActive || isLoggedIn;
let negated: boolean = !isActive;
```

### 4. Type Inference (Inferensi Tipe)

TypeScript memiliki kemampuan **type inference** - kemampuan menebak tipe variabel berdasarkan nilai yang diberikan. Ketika Anda menginisialisasi variabel dengan nilai, TypeScript otomatis menentukan tipenya tanpa perlu explicit type annotation.

```
// Type inference bekerja otomatis
let message = "Hello"; // string
let count = 42; // number
let flag = true; // boolean

// Ketika variabel dideklarasikan tanpa inisialisasi, tipe adalah any
let uninitialized; // any (hindari ini!)
uninitialized = "teks";
uninitialized = 100;

// Best practice: Gunakan explicit type jika tidak ada inisialisasi
let status: string | number;
status = "pending";
status = 200;
```

#### ⚠️ Common Pitfalls

- Jangan gunakan `any` untuk tipe primitif - ini menonaktifkan type checking

- Hindari variabel tanpa inisialisasi (default ke any)

- Number dan string bisa saling bertransisi - berhati-hati dengan operasi matematika pada string

- Boolean bisa dikonversi ke number (true = 1, false = 0) - hindari implicit conversion

### 5. Practical Examples

Mari kita lihat contoh praktis penggunaan tipe primitif dalam fungsi dan objek.

```
// Contoh fungsi dengan tipe primitif
function greetUser(name: string, age: number, isMember: boolean): string {
let title: string = isMember ? "Member" : "Guest";
return `Selamat datang, ${title} ${name}! Usia: ${age} tahun.`;
}

// Pemanggilan fungsi
const pesan = greetUser("Ani", 25, true);
console.log(pesan); // "Selamat datang, Member Ani! Usia: 25 tahun."

// Objek dengan tipe primitif
interface User {
id: number;
name: string;
email: string;
isActive: boolean;
}

function createUser(id: number, name: string, email: string): User {
return { id, name, email, isActive: true };
}
```

## 💪 Latihan Praktek

### Latihan 1: Kalkulator Sederhana

Buat fungsi calculator yang menerima dua number dan mengembalikan hasil operasi aritmatika dalam string.

Petunjuk: Buat fungsi `calculate(a: number, b: number, operation: string): string`

Expected output: `"Hasil penjumlahan: 15"`

### Latihan 2: Validasi Form

Buat fungsi yang memvalidasi input form dengan tipe string dan boolean.

Buat fungsi `validateForm(username: string, age: number, agreeTerms: boolean): {valid: boolean, message: string}`

Username minimal 3 karakter, age minimal 18, agreeTerms harus true

## 📝 Quiz

Setelah memahami materi ini, coba kerjakan quiz di akhir modul untuk menguji pemahaman Anda tentang tipe primitif TypeScript.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous

Next Lesson →
