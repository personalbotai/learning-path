# Optional dan Readonly Properties

TypeScript memungkinkan kita menandai properti dalam interface sebagai **optional** (tidak wajib) atau **readonly** (tidak dapat diubah). Modifier-modifier ini membantu mengekspresikan niat (intent) dan memberikan type safety yang lebih baik.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Interfaces

##
1
Tujuan Pembelajaran

-
Mendefinisikan properti optional dengan `?`

-
Mendefinisikan properti readonly dengan `readonly`

-
Memahami implikasi optional properties pada type checking

-
Menggunakan optional chaining dengan optional properties

##
2
Penjelasan

Interface menyediakan modifier untuk mengontrol apakah properti wajib diisi atau tidak, dan apakah properti tersebut dapat diubah setelah inisialisasi.

### Optional Properties (`?`)

Tambahkan `?` setelah nama properti untuk membuatnya opsional. Object yang mengimplementasikan interface tidak perlu menyertakan properti tersebut.

```
interface User {
id: number;
name: string;
email?: string;  // opsional
}

// OK - email tidak harus ada
const user1: User = { id: 1, name: "Alice" };

// OK - email juga bisa ada
const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };
```

### Type System dan Optional Properties

Ketika mengakses properti optional, TypeScript mempertimbangkan bahwa properti tersebut bisa `undefined`. Jadi tipe akses menjadi `T | undefined`.

```
function getEmail(user: User): string | undefined {
return user.email;  // Type: string | undefined
}

const user: User = { id: 1, name: "Alice" };
const email = user.email;  // email: string | undefined

// Perlu check sebelum menggunakan
if (user.email) {
console.log(user.email.toUpperCase());  // OK - email adalah string
}
```

### Readonly Properties (`readonly`)

Properti `readonly` tidak dapat diubah (re-assign) setelah inisialisasi pertama.

```
interface Point {
x: number;
readonly y: number;
}

const p: Point = { x: 10, y: 20 };
p.x = 15;  // OK - x mutable
// p.y = 25; // Error: y is readonly
```

### Readonly untuk Array dan Object

```
// Readonly array - tidak bisa push/pop/splice
interface Config {
readonly tags: string[];
}

const cfg: Config = { tags: ["dev", "test"] };
// cfg.tags.push("prod"); // Error - readonly array
// cfg.tags = ["new"]; // Error - readonly property

// Readonly nested object
interface Settings {
readonly theme: {
primary: string;
secondary: string;
};
}
```

### Optional + Readonly

```
interface User {
id: number;
name: string;
readonly email?: string;  // opsional dan readonly
}

const user: User = { id: 1, name: "Alice" };
// user.email = "new@example.com"; // Error - readonly
// user.email!.toUpperCase(); // Error - possible undefined (need check)
```

### Kapan Menggunakan?

- **Optional (`?`)**: Untuk properti yang mungkin tidak ada (data dari API, form dengan field opsional, dll)

- **Readonly**: Untuk nilai konstan, ID, timestamp, configuration values yang tidak boleh diubah

- **Readonly + Optional**: Untuk properti yang opsional dan jika ada tidak boleh diubah

**⚠️ Perlu diingat:** `readonly` hanya berlaku pada compile-time. Di runtime, nilai masih bisa diubah jika menggunakan type assertion atau manipulasi langsung.

##
3
Latihan

### Latihan 1: Optional Properties untuk Form

Buat interface `RegistrationForm` dengan properti wajib `email: string` dan `password: string`, serta properti optional `phone?: string` dan `referralCode?: string`. Buat dua objek: satu dengan semua field, satu hanya wajib.

Lihat Solusi

```
interface RegistrationForm {
email: string;
password: string;
phone?: string;
referralCode?: string;
}

const fullForm: RegistrationForm = {
email: "user@example.com",
password: "secret123",
phone: "+628123456789",
referralCode: "REF2024"
};

const minimalForm: RegistrationForm = {
email: "minimal@example.com",
password: "pass123"
};  // OK - phone dan referralCode optional
```

### Latihan 2: Readonly untuk Config

Buat interface `AppConfig` dengan properti `apiUrl: string` dan `maxRetries: number` yang keduanya readonly. Coba ubah nilai setelah inisialisasi, observe error.

Lihat Solusi

```
interface AppConfig {
readonly apiUrl: string;
readonly maxRetries: number;
}

const config: AppConfig = {
apiUrl: "https://api.example.com",
maxRetries: 3
};

// config.apiUrl = "https://new.api.com"; // Error: readonly
// config.maxRetries = 5; // Error: readonly
```

← Sebelumnya

Modul 4 - Lesson 2 dari 6

Selanjutnya →
