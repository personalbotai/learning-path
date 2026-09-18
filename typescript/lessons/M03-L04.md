# Enum dan Named Constants

Enum (enumeration) adalah fitur TypeScript yang memungkinkan Anda mendefinisikan sekumpulan named constants. Enum membantu membuat kode lebih readable dengan memberikan nama yang bermakna pada nilai numerik atau string. TypeScript supports numeric, string, dan heterogeneous enums.

⏱️ 15 menit
📊 Kesulitan: Pemula-Intermediate
✅ prerequisites: Tipe Primitif, Tuple

## 🎯 Tujuan Pembelajaran

-
Mendeklarasikan numeric enum dan memahami auto-increment behavior

-
Menggunakan string enum untuk nilai yang lebih descriptive

-
Memahami heterogeneous enums (numeric dan string campur)

-
Mengakses enum members dan menggunakan enum dalam fungsi

-
Menggunakan enum sebagai type dan melakukan type checking

## 📚 Konten Materi

### 1. Numeric Enum

Numeric enum adalah jenis enum yang paling umum. Angka dimulai dari 0 secara default, tetapi dapat diatur manual. TypeScript akan otomatis menambahkan 1 untuk setiap anggota berikutnya.

```
// Numeric enum - auto-increment dari 0
enum Direction {
North, // 0
East,  // 1
South, // 2
West   // 3
}

let heading: Direction = Direction.North;
console.log(heading); // 0
console.log(Direction[0]); // "North" (reverse mapping)

// Numeric enum dengan nilai awal manual
enum Status {
Pending = 1,
Approved,
Rejected // 3 (auto-increment dari 2)
}

let s: Status = Status.Approved; // 2
```

### 2. String Enum

String enum memiliki nilai string untuk setiap anggota. Tidak ada auto-increment, setiap anggota harus diinisialisasi dengan string. String enum lebih descriptive dan baik untuk debugging.

```
// String enum - nilai eksplisit, tidak ada auto-increment
enum LogLevel {
Error = "ERROR",
Warn  = "WARN",
Info  = "INFO",
Debug = "DEBUG"
}

let currentLevel: LogLevel = LogLevel.Info;
console.log(currentLevel); // "INFO"

// Tidak ada reverse mapping untuk string enum
// console.log(LogLevel["INFO"]); // undefined
```

### 3. Heterogeneous Enum (Campuran)

Heterogeneous enum mengandung numeric dan string values dalam enum yang sama. Ini jarang digunakan, namun bisa berguna dalam kasus tertentu seperti mapping yang kompleks.

```
// Heterogeneous enum - numeric dan string campur
enum Response {
No = 0,
Yes = "YES"
}

function respond(answer: Response): string {
if (answer === Response.No) {
return "Tidak";
} else {
return "Ya";
}
}

console.log(respond(Response.Yes)); // "Ya"
```

### 4. Enum sebagai Type dan Type Safety

Enum dapat digunakan sebagai type untuk variabel, parameter fungsi, dan return type. TypeScript akan memastikan hanya nilai enum yang valid yang dapat diassign.

```
// Gunakan enum sebagai type
function setStatus(status: Status): void {
console.log(`Status changed to: ${status}`);
}

setStatus(Status.Approved); // OK
// setStatus(2); // Error: number tidak assignable ke type Status
// setStatus("Approved"); // Error: string tidak assignable ke type Status

// Enum dalam object
interface Task {
id: number;
title: string;
priority: LogLevel;
}

let task: Task = {
id: 1,
title: "Fix bug",
priority: LogLevel.Error // OK
};
```

### 5. const enum dan Inlining

`const enum` adalah enum yang akan di-inline oleh TypeScript compiler menjadi nilai aktus di seluruh kode, tanpa menghasilkan object enum di runtime. Ini mengurangi ukuran bundle tetapi tidak memiliki reverse mapping.

```
// const enum - di-inline pada kompilasi
const enum Colors {
Red,
Green,
Blue
}

let color: Colors = Colors.Red;
// Setelah kompilasi, kode menjadi: let color = 0; (inline)

// compiled JS tidak ada object "Colors"
// reverse mapping tidak tersedia
```

#### 💡 Best Practices

- Gunakan string enum untuk nilai yang akan ditampilkan ke user atau logging

- Gunakan numeric enum untuk cases yang butuh reverse mapping atau performa

- Hindari heterogeneous enum kecuali ada kebutuhan spesifik

- Pertimbangkan `const enum` untuk reduce bundle size (tapi hilangkan reverse mapping)

- Gunakan enum sebagai type untuk parameters dan return values untuk type safety

## 💪 Latihan Praktek

### Latihan 1: User Role Enum

Buat enum untuk user roles dan fungsi yang memeriksa permissions.

Enum: `UserRole` dengan nilai: `Admin = "ADMIN"`, `Editor = "EDITOR"`, `Viewer = "VIEWER"`

Fungsi: `canEdit(role: UserRole): boolean` - return true jika role adalah Admin atau Editor.

### Latihan 2: HTTP Status Codes

Buat numeric enum untuk HTTP status codes dan fungsi yang mengembalikan deskripsi.

Enum: `HttpStatus` dengan 200=OK, 201=Created, 400=Bad Request, 404=Not Found, 500=Internal Server Error

Fungsi: `getStatusMessage(code: HttpStatus): string` - return deskripsi sesuai code. Gunakan switch statement.

## 📝 Quiz

Test pengetahuan Anda tentang enum TypeScript, termasuk numeric, string, dan penggunaan sebagai type.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous Lesson

Next Lesson →
