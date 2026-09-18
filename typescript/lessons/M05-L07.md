# Interface vs Type Alias

Interface dan Type Alias adalah dua cara untuk mendefinisikan tipe di TypeScript. Meski sering digunakan untuk tujuan yang sama (mendefinisikan object shape), mereka memiliki perbedaan penting dalam kemampuan, syntax, dan behavior. Memahami perbedaannya membantu kita memilih alat yang tepat untuk setiap situasi.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Interfaces vs Types

##
1
Tujuan Pembelajaran

-
Memahami perbedaan struktural antara interface dan type alias

-
Mengetahui kemampuan yang unik untuk masing-masing

-
Memahami extendability (interface extends, type intersection)

-
Panduan kapan menggunakan interface vs type alias

##
2
Penjelasan

Baik interface maupun type alias bisa digunakan untuk mendefinisikan object shape. Namun, ada perbedaan penting dalam kemampuan dan bagaimana mereka diperlakukan oleh TypeScript.

### Perbandingan Langsung

Feature
Interface
Type Alias

Object shape
✅
✅

Union types
❌
✅

Intersection types
✅ (via extends)
✅ (via &)

Tuple types
❌
✅

Function types
✅ (call signatures)
✅

Mapped types
✅
✅

Implements (class)
✅
❌

Declaration merging
✅
❌

### Decorrelation: Declaration Merging

Interface mendukung **declaration merging** - beberapa interface dengan nama yang sama akan digabungkan menjadi satu.

```
// Interface can be merged
interface User {
id: number;
}

interface User {
name: string;
email: string;
}

// Merged result: { id: number; name: string; email: string; }
const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
```

Type alias **tidak** mendukung declaration merging. Mencoba mendefinisikan type alias yang sama dua kali akan menyebabkan error.

### Extending

```
// Interface extends interface
interface Animal { name: string; }
interface Mammal extends Animal { hasFur: boolean; }

// Type alias intersection
type Animal = { name: string };
type Mammal = Animal & { hasFur: boolean };
```

### Class Implementation

```
// Class bisa implements interface
interface Person { name: string; greet(): void; }

class Student implements Person {
name: string;
greet() { console.log("Hi", this.name); }
}

// Class tidak bisa implements type alias
// type PersonAlias = { name: string; greet(): void; }
// class Teacher implements PersonAlias { ... } // Error
```

### Kapan Menggunakan Apa?

Gunakan Interface ketika:

- Mendefinisikan kontrak object atau class (bisa di-implements)

- Butuh declaration merging (library augmentasi)

- Mendesain API publik yang akan di-extend oleh pengguna lain

Gunakan Type Alias ketika:

- Membuat union, intersection, tuple, atau function types

- Membuat tipe yang tidak bisa di-express dengan interface

- Butuh tipe sementara atau composition yang kompleks

- Menggunakan mapped types dengan remapping

**⚠️ Catatan:** Sejak TypeScript 2.7, perbedaan semakin tipis. Banyak kasus interface dan type alias bisa digunakan interchangeably. Pilih berdasarkan use case dan preferensi tim. Umumnya, interface untuk object shapes, type alias untuk tipe lainnya.

##
3
Latihan

### Latihan 1: Membandingkan Implementasi

Buat `User` dengan interface (dengan properti `id: number`, `name: string`). Lalu buat versi yang sama dengan type alias. Gunakan keduanya untuk type annotation sebuah variabel.

Lihat Solusi

```
// Interface version
interface UserInterface {
id: number;
name: string;
}

// Type alias version
type UserType = {
id: number;
name: string;
};

const u1: UserInterface = { id: 1, name: "Alice" };
const u2: UserType = { id: 2, name: "Bob" };
```

### Latihan 2: Union Type (Hanya Type Alias)

Buat type alias `Result` yang merupakan union dari `{ ok: true; data: any }` dan `{ ok: false; error: string }`. Coba buat hal yang sama dengan interface (seharusnya tidak mungkin).

Lihat Solusi

```
// Type alias dengan union - interface tidak bisa
type Result =
| { ok: true; data: any }
| { ok: false; error: string };

function process(): Result {
// ...
}

// Interface tidak bisa langsung union - harus discriminated union via extends
```

← Sebelumnya

Modul 4 - Lesson 4 dari 6

Selanjutnya →
