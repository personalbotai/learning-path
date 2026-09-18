# ReadonlyRecord Utility Type

**ReadonlyRecord<T>** adalah utility type yang menggabungkan `Readonly<T>` dengan `Record<string, T>` untuk membuat immutable object dengan arbitrary string keys. Sangat berguna untuk constant maps dan configuration objects.

⏱️ 15 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami kombinasi Readonly + Record untuk immutable maps

-
Menggunakan ReadonlyRecord untuk constant configuration

-
Membedakan ReadonlyRecord dengan Record<string, Readonly<T>>

-
Implementasi custom ReadonlyRecord type

## 📚 Konten Utama

### Apa itu ReadonlyRecord?

`ReadonlyRecord<T>` adalah type yang menyediakan object dengan arbitrary string keys di mana setiap value memiliki type `T` DAN entire object tersebut readonly (immutable). Ini adalah kombinasi dari:

- `Record<string, T>` - object dengan string keys dan T values

- `Readonly<T>` - semua properties readonly

### Implementasi Manual

TypeScript tidak memiliki built-in `ReadonlyRecord`, tetapi mudah dibuat:

// Custom ReadonlyRecord type
type ReadonlyRecord<T> = Readonly<Record<string, T>>;

// Atau lebih eksplisit:
type ReadonlyRecord<T> = {
readonly [key: string]: T;
};

// Contoh penggunaan:
type ThemeColors = ReadonlyRecord<string>;

const colors: ThemeColors = {
primary: "#3b82f6",
secondary: "#8b5cf6",
accent: "#06b6d4"
};

colors.primary = "#ff0000";  // ❌ Error: Cannot assign to 'primary' because it is a read-only property
colors.newColor = "#00ff00";  // ❌ Error: Index signature in type 'ReadonlyRecord<string>' only permits reading

### Use Cases

#### 1. Constant Configuration Maps

Saat Anda memiliki map yang tidak akan diubah setelah initialization:

type HttpStatusMessages = ReadonlyRecord<string>;

const STATUS_MESSAGES: HttpStatusMessages = {
"200": "OK",
"404": "Not Found",
"500": "Internal Server Error"
};

// Tidak bisa diubah - memastikan constants tetap constant

#### 2. Feature Flag Maps

type FeatureFlags = ReadonlyRecord<boolean>;

const FLAGS: FeatureFlags = {
darkMode: true,
beta: false,
analytics: true
};

// FLAGS.darkMode = false; // ❌ Error - immutable

#### 3. Translation Dictionaries

type Translations = ReadonlyRecord<string>;

const ID_TRANSLATIONS: Translations = {
welcome: "Selamat datang",
goodbye: "Sampai jumpa",
error: "Terjadi kesalahan"
};

### Perbedaan dengan Variasi Lain

Penting untuk memahami perbedaan antara beberapa pendekatan:

Type
Keys
Values
Mutability

`Record<string, T>`
string
T
Mutable

`Readonly<Record<string, T>>`
string
T
Immutable

`Record<string, Readonly<T>>`
string
Readonly T
Mutable keys, readonly values

`ReadonlyRecord<T>`
string
T
Immutable

### Advanced: Generic ReadonlyRecord

Anda bisa membuat generic ReadonlyRecord yang lebih fleksibel dengan constrained keys:

// ReadonlyRecord dengan specific key union
type ReadonlyRecordByKeys<K extends string, T> = Readonly<Record<K, T>>;

type HttpStatusMap = ReadonlyRecordByKeys<
"200" | "404" | "500",
string
>;

const status: HttpStatusMap = {
"200": "OK",
"404": "Not Found",
"500": "Server Error"
// Tidak bisa tambah key lain karena type terbatas
};

### Best Practices

- Gunakan `ReadonlyRecord` untuk constants yang di-load dari file atau environment

- Jangan gunakan untuk data yang perlu di-update - gunakan `Record` biasa atau state management

- Kombinasikan dengan `as const` assertion untuk literal types

- Perhatikan bahwa `Readonly` adalah shallow - nested objects masih mutable

## 💻 Exercises

### Exercise 1: Define ReadonlyRecord

Buat custom ReadonlyRecord type dan gunakan.

- Define `type ReadonlyRecord<T> = Readonly<Record<string, T>>`

- Buat `const COLORS: ReadonlyRecord<string>` dengan minimal 5 warna hex

- Coba modifikasi salah satu property - seharusnya error

- Coba tambah property baru - seharusnya error

### Exercise 2: Const Status Codes

Gunakan ReadonlyRecord untuk HTTP status messages.

- Buat union type `Status = 200 | 404 | 500 | 403`

- Buat `type StatusMap = ReadonlyRecordByKeys<Status, string>`

- Isi dengan messages untuk setiap status code

- Buat function `getStatusMessage(code: Status): string` yang return dari map

### Exercise 3: Compare Mutability

Bandingkan Record vs ReadonlyRecord.

- Buat dua variables: `mutableMap: Record<string, number>` dan `immutableMap: ReadonlyRecord<number>`

- Assign values ke keduanya

- Coba modify property, tambah property baru, dan delete property

- Catat mana yang diizinkan dan mana yang diblokir TypeScript

← Previous

Take Quiz
