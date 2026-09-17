# Extending Interfaces dan Types

**Extending** memungkinkan kita membuat tipe baru berdasarkan tipe yang sudah ada, dengan menambahkan atau mengubah properti. Interface menggunakan keyword `extends`, sedangkan type alias menggunakan operator intersection (`&`).

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Inheritance

##
1
Tujuan Pembelajaran

-
Meng-extend interface dengan `extends`

-
Meng-combine type alias dengan intersection (`&`)

-
Memahami multiple extends dan complex composition

-
Menggunakan extending untuk membuat tipe hierarki

##
2
Penjelasan

Extending memungkinkan kita membuat tipe baru yang mewarisi (inherits) properti dari tipe lain, lalu menambahkan atau meng-override properti tertentu. Ini sangat berguna untuk membuat tipe hierarki atau reuse tipe yang sudah ada.

### Interface Extends Interface

```
interface Animal {
name: string;
age: number;
}

interface Mammal extends Animal {
hasFur: boolean;
giveBirth(): void;
}

// Mammal memiliki semua properti dari Animal + properti tambahan
const dog: Mammal = {
name: "Rex",
age: 3,
hasFur: true,
giveBirth: () => console.log("puppy")
};
```

### Multiple Extends

```
interface A { a: string; }
interface B { b: number; }
interface C { c: boolean; }

interface ABC extends A, B, C {
// Tambah properti sendiri
d: string;
}

// ABC memiliki properti a, b, c, d
```

### Type Alias Extending dengan Intersection

```
type Animal = {
name: string;
age: number;
};

type Bird = Animal & {
canFly: boolean;
fly(): void;
};
```

### Extending dengan Generic

```
interface Repository<T> {
findById(id: number): T;
save(entity: T): void;
}

interface UserRepository extends Repository<User> {
// Tambah method spesifik untuk User
findByEmail(email: string): User;
}
```

### Overriding Properties

```
interface Base {
name: string;
id: number;
}

interface Derived extends Base {
// Override tipe properti 'id' dari number ke string
id: string;
extra: boolean;
}
```

### Extending Class (Interface bisa extends class)

```
class BaseClass {
constructor(public name: string) {}
}

interface Extended extends BaseClass {
age: number;
}

// Class instance harus memenuhi interface
const obj = new BaseClass("test");
// const e: Extended = obj; // Error - tidak punya age
```

### Extends + Utility Types: API Modeling Real-World

```ts
interface BaseEntity { id: number; createdAt: Date; }
interface User extends BaseEntity { name: string; email: string; password: string; }

// Turunan publik: extends + Omit agar password tak bocor
type PublicUser = Omit<User, "password">;
// Versi update parsial: extends implisit via Partial<Pick<...>>
type UserUpdate = Partial<Pick<User, "name" | "email">>;

// Repository generik yang di-extends per entitas:
interface Repository<T extends BaseEntity> {
  findById(id: number): T | undefined;
  save(e: T): void;
  list(): T[];
}
interface UserRepository extends Repository<User> {
  findByEmail(email: string): User | undefined;
}
```

### `satisfies` untuk Hierarki Config (TS 4.9+)

```ts
type Size = "sm" | "md" | "lg";
type Variant = "primary" | "secondary" | "danger";

interface ButtonTheme { size: Size; variant: Variant; rounded: boolean; }

// satisfies validasi tiap tema tanpa widen — autocomplete size/variant tetap literal
const themes = {
  submit: { size: "md", variant: "primary", rounded: true },
  cancel: { size: "sm", variant: "secondary", rounded: false },
  hapus:  { size: "md", variant: "danger", rounded: true },
} satisfies Record<string, ButtonTheme>;

// themes.submit.size bertipe "md" literal — bukan Size lebar
type SubmitSize = typeof themes.submit.size; // "md"
```

### `const` Type Params dengan Extended Keys (TS 5.0+)

```ts
// Tangkap literal keys tanpa `as const`:
declare function pickKeys<const K extends string>(...keys: K[]): K[];
const ks = pickKeys("name", "email", "role"); // ["name","email","role"] tuple literal
type K = typeof ks[number]; // "name" | "email" | "role"

interface User { name: string; email: string; role: string; age: number; }
declare function pick<T, const K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
declare const user: User;
const sub = pick(user, "name", "email"); // Pick<User,"name"|"email"> — presisi
```

**💡 Tips:** Gunakan extending ketika ingin membuat tipe yang lebih spesifik dari tipe yang sudah ada. Interface `extends` lebih cocok untuk hierarki class/object. Type alias intersection lebih fleksibel untuk compose tipe heterogeneous. Validasi object hierarki dengan `satisfies`, dan gunakan `const` type params saat butuh literal keys presisi.

##
3
Latihan

### Latihan 1: Interface Hierarchy

Buat interface `Person` dengan properti `name: string`. Lalu buat interface `Employee` yang extends `Person` dengan tambahan `employeeId: number` dan `department: string`. Buat object yang memenuhi `Employee`.

Lihat Solusi

```
interface Person {
name: string;
}

interface Employee extends Person {
employeeId: number;
department: string;
}

const emp: Employee = {
name: "Alice",
employeeId: 1001,
department: "Engineering"
};
```

### Latihan 2: Type Composition dengan Intersection

Buat type alias `HasName` (`{ name: string }`) dan `HasId` (`{ id: number }`). Gabungkan dengan intersection untuk membuat `Entity` yang memiliki kedua properti tersebut.

Lihat Solusi

```
type HasName = { name: string };
type HasId = { id: number };

type Entity = HasName & HasId;

const e: Entity = { name: "Bob", id: 42 };
```

← Sebelumnya

Modul 4 - Lesson 5 dari 6

Selanjutnya →
