# Nullable Types dan Optional Chaining

Di TypeScript, hampir semua tipe bisa bernilai `null` atau `undefined` dengan menambahkan union. TypeScript juga menyediakan operator optional chaining (`?.`) yang memudahkan akses properti nested tanpa perlu explicit null checks.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami nullable types dengan `null` dan `undefined`

-
Menggunakan optional properties dengan `?`

-
Menggunakan optional chaining (`?.`) untuk safe property access

-
Menggunakan nullish coalescing (`??`) untuk default values

##
2
Penjelasan

Nullable types memungkinkan sebuah variabel memiliki nilai `null` atau `undefined` selain tipe utamanya. Ini sangat umum ketika berhadapan dengan data eksternal (API, user input) yang mungkin tidak selalu terisi.

### Union dengan null/undefined

```
// string bisa berupa string atau null
let name: string | null;
name = "Alice";
name = null;

// number bisa berupa number atau undefined
let age: number | undefined;
age = 25;
age = undefined;

// Gabungkan keduanya
let email: string | null | undefined;
```

### Optional Properties dalam Interface

Gunakan `?` untuk menandakan properti opsional:

```
interface User {
id: number;
name: string;
email?: string;  // opsional
}

let user1: User = { id: 1, name: "Alice" };  // OK - email tidak wajib
let user2: User = { id: 2, name: "Bob", email: "bob@example.com" };  // OK

// Akses properti opsional perlu check
if (user1.email) {
console.log(user1.email.toUpperCase());  // OK - email ada
}
```

### Optional Chaining (`?.`)

Optional chaining memungkinkan kita mengakses nested properties tanpa perlu explicit null check. Jika bagian manapun dari chain adalah `null` atau `undefined`, expression akan short-circuit dan mengembalikan `undefined`.

```
interface Address {
city?: string;
}

interface User {
name: string;
address?: Address;
}

let user: User = { name: "Alice" };

// Optional chaining - aman
let city = user.address?.city;  // undefined (tidak error)

// Tanpa optional chaining - error jika address undefined
// let city = user.address.city; // Error!

// Bisa dengan nested optional
let street = user.address?.location?.street;  // undefined
```

### Optional Chaining dengan Function Calls

```
interface Logger {
log?: (msg: string) => void;
}

let logger: Logger = {};

// Optional call - aman
logger.log?.("Hello");  // Tidak error, tidak dipanggil

// Tanpa optional - error jika log undefined
// logger.log("Hello"); // Error!
```

### Nullish Coalescing (`??`)

Operator `??` (nullish coalescing) mengembalikan nilai kanan jika nilai kiri adalah `null` atau `undefined`. Berbeda dengan `||` yang mengecek falsy values (termasuk `0`, `""`, `false`).

```
let name: string | null = null;

// ?? hanya mengecek null/undefined
let displayName = name ?? "Guest";  // "Guest"

// || mengecek semua falsy values
let count: number = 0;
let result = count || 10;  // 10 (karena 0 falsy)
let result2 = count ?? 10; // 0 (karena 0 bukan nullish)
```

### Kombinasi Optional Chaining + Nullish Coalescing

```
interface Config {
timeout?: number;
retries?: number;
}

function getConfig(config: Config) {
let timeout = config.timeout ?? 5000;   // default 5000
let retries = config.retries ?? 3;       // default 3
return { timeout, retries };
}
```

**💡 Tips:** Gunakan optional chaining (`?.`) ketika Anda ingin mengakses property yang mungkin tidak ada. Gunakan nullish coalescing (`??`) untuk provide default values hanya ketika value adalah `null` atau `undefined`.

##
3
Latihan

### Latihan 1: Optional Chaining pada Nested Object

Buat interface `Company` dengan nested object `address` yang memiliki properti `city` (opsional). Buat function `getCity` yang menggunakan optional chaining untuk mendapatkan city dari company.

Lihat Solusi

```
interface Address {
city?: string;
}
interface Company {
name: string;
address?: Address;
}

function getCity(company: Company): string | undefined {
return company.address?.city;
}
```

### Latihan 2: Nullish Coalescing untuk Default Values

Buat function `connect` yang menerima parameter `options: { timeout?: number, retries?: number }`. Gunakan nullish coalescing untuk memberikan default values (timeout: 3000, retries: 1) jika tidak disediakan.

Lihat Solusi

```
function connect(options: { timeout?: number; retries?: number }) {
const timeout = options.timeout ?? 3000;
const retries = options.retries ?? 1;
console.log(`Timeout: ${timeout}, Retries: ${retries}`);
}
```

← Sebelumnya

Modul 3 - Lesson 5 dari 10

Selanjutnya →
