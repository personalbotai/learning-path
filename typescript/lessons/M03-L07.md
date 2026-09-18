# Exclude, Extract, dan NonNullable Utility Types

**Exclude<T, U>**, **Extract<T, U>**, dan **NonNullable<T>** adalah utility types untuk manipulating union types. Mereka memungkinkan Anda membuat subtype dengan exclude atau extract certain members dari union.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami Exclude<T, U> untuk menghapus members dari union

-
Menggunakan Extract<T, U> untuk mengambil overlapping members

-
Menerapkan NonNullable<T> untuk menghilangkan null dan undefined

-
Mengombinasikan utility types untuk complex type transformations

## 📚 Konten Utama

### Exclude<T, U>

`Exclude<T, U>` membuat union type baru dengan exclude semua members dari `U` yang ada di `T`. Hasilnya adalah type yang terdiri dari `T` kecuali overlapping dengan `U`.

type Status = "idle" | "loading" | "success" | "error";

// Exclude "loading" dan "error"
type NonLoadingStatus = Exclude<Status, "loading" | "error">;

// Equivalent to: "idle" | "success"
let current: NonLoadingStatus = "success";

// Exclude dengan another union
type All = "a" | "b" | "c" | "d";
type Remove = Exclude<All, "b" | "d">;  // "a" | "c"

### Extract<T, U>

`Extract<T, U>` melakukan sebaliknya: mengambil hanya members yang ada di kedua union. Ini adalah intersection untuk union types.

type Events = "click" | "mouseover" | "keydown" | "submit";
type FormEvents = "submit" | "change" | "focus";

// Extract hanya events yang ada di keduanya
type CommonEvents = Extract<Events, FormEvents>;  // "submit"

// Extract dengan another union
type StringUnion = "x" | "y";
type NumberUnion = 1 | 2 | 3;
type Mixed = "x" | 2;

// Extract numeric members
type Numbers = Extract<Mixed, number>;  // 2

### NonNullable<T>

`NonNullable<T>` exclude `null` dan `undefined` dari type `T`. Berguna untuk memastikan value tidak nullable.

function process(input: string | null | undefined) {
// Pastikan input tidak null/undefined
const value: NonNullable<typeof input> = input!;
// value adalah string (bukan string | null | undefined)
}

// Equivalent to: Exclude<T, null | undefined>
type StrictString = NonNullable<string | null>;  // string

### Practical Examples

#### Filtering Union Types

type Props = "id" | "name" | "email" | "password" | "role";

// Public fields (exclude sensitive)
type PublicProps = Exclude<Props, "password">;  // "id" | "name" | "email" | "role"

// Sensitive fields only
type SensitiveProps = Extract<Props, "password">;  // "password"

#### Removing null/undefined

function getValue(obj: { [key: string]: string | null }, key: string) {
const val = obj[key];
if (val === null || val === undefined) {
throw new Error("Value is null");
}
return val as NonNullable<typeof val>;  // TypeScript knows it's string now
}

### Combining Utility Types

Anda bisa menggabungkan Exclude/Extract dengan utility types lain:

// Exclude then make optional
type OptionalPublic = Partial<Exclude<Props, "password">>;

// Extract then make readonly
type ReadonlySensitive = Readonly<Extract<Props, "password" | "role">>;

// Chain: Exclude null/undefined, then Pick
type NonNullableString = NonNullable<string | null>;  // string
type StrictProps = Pick<NonNullableString, "toString">;

### Implementation Details

Di balik layar, utility types ini menggunakan conditional types:

type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
type NonNullable<T> = T extends null | undefined ? never : T;

Ketika `never` muncul di union, TypeScript otomatis menghapusnya (distributive conditional types).

### Common Pitfalls

- Exclude dan Extract hanya bekerja pada **union types** - tidak ada efek pada non-unions

- `Exclude<T, T>` menghasilkan `never`

- `Extract<T, never>` menghasilkan `never`

- NonNullable tidak recursively removes null dari nested objects - hanya top-level

## 💻 Exercises

### Exercise 1: Filter Union Types

Gunakan Exclude dan Extract.

- Buat union `type AllStatus = "pending" | "approved" | "rejected" | "cancelled"`

- Buat `type ActiveStatus = Exclude<AllStatus, "cancelled">`

- Buat `type TerminalStatus = Extract<AllStatus, "rejected" | "cancelled">`

- Verify dengan assignments

### Exercise 2: NonNullable Practice

Hilangkan null dan undefined dari union.

- Buat `type MaybeNumber = number | null | undefined`

- Buat `type StrictNumber = NonNullable<MaybeNumber>`

- Buat function yang accept MaybeNumber dan return StrictNumber dengan non-null assertion

- Test dengan null dan undefined inputs

### Exercise 3: Complex Combination

Kombinasikan Exclude dengan Partial.

- Buat interface `User` dengan fields: id, name, email, password, role

- Buat `type Updateable = Partial<Exclude<keyof User, "id">>`

- Buat function `updateUser(id: number, updates: Updateable)`

- Verify tidak bisa update `id` property

← Previous

Take Quiz
