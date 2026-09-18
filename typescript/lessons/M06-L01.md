# Mapped Types

**Mapped Types** memungkinkan kita membuat tipe baru dengan mengubah setiap properti dari tipe yang ada. Mirip seperti `Array.map()` tetapi untuk type-level. Sangat berguna untuk membuat utility types seperti `Partial`, `Readonly`, `Pick`, dll.

⏱️ 25 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami sintaks mapped types (`[P in keyof T]: ...`)

-
Membuat tipe dengan semua properti diubah (optional, readonly, dll)

-
Menggunakan modifiers: `?`, `readonly`, `-`

-
Membuat custom utility types dengan mapped types

##
2
Penjelasan

Mapped types menggunakan sintaks `[P in keyof T]: ...` untuk membuat tipe baru dengan iterasi setiap properti dari tipe asli. Kita bisa mengubah modifiers (optional, readonly) atau bahkan tipe properti itu sendiri.

### Sintaks Dasar

```
interface Person {
name: string;
age: number;
}

// Mapped type: semua properti menjadi optional
type PartialPerson = {
[P in keyof Person]?: Person[P];
};
// Result: { name?: string; age?: number; }
```

### Buat Semua Properti Readonly

```
type ReadonlyPerson = {
readonly [P in keyof Person]: Person[P];
};
// Result: { readonly name: string; readonly age: number; }
```

### Mengubah Tipe Properti

```
// Ubah semua properti menjadi nullable
type NullablePerson = {
[P in keyof Person]: Person[P] | null;
};
// Result: { name: string | null; age: number | null; }

// Atau ubah ke string (type erasure)
type Stringified = {
[P in keyof Person]: string;
};
// Result: { name: string; age: string; }
```

### Mapped Types dengan Modifiers

Kita bisa menggunakan `-` prefix untuk menghapus modifier (membuat required dari optional, atau mutable dari readonly).

```
interface User {
id: number;
name: string;
email?: string;
}

// Buat semua properti required (hapus optional)
type RequiredUser = {
[P in keyof User]-?: User[P];
};
// Result: { id: number; name: string; email: string; }

// Hanya properti tertentu (dengan keyof)
type PickUser = {
[P in typeof keyof User as P extends 'id' | 'name' ? P : never]: User[P];
};
// Result: { id: number; name: string; }
```

### Mapped Types dengan `as` clause

Kita bisa remap key names menggunakan `as` clause untuk membuat property baru dengan nama yang berbeda.

```
interface User {
firstName: string;
lastName: string;
}

// Remap keys to uppercase
type UppercaseKeys = {
[P in keyof User as Uppercase<P & string>]: User[P];
};
// Result: { FIRSTNAME: string; LASTNAME: string; }
```

### Built-in Utility Types (Implemented dengan Mapped Types)

- `Partial<T>`: semua properti optional

- `Required<T>`: semua properti required

- `Readonly<T>`: semua properti readonly

- `Pick<T, K>`: pilih subset properti

- `Record<K, T>`: buat object dengan keys K dan values T

**💡 Tips:** Mapped types adalah dasar dari banyak utility types di TypeScript. Pahami konsep ini untuk bisa membuat tipe transformations yang powerful dan reusable.

##
3
Latihan

### Latihan 1: Custom Partial

Buat mapped type `MyPartial` yang membuat semua properti dari interface `T` menjadi optional. Bandingkan dengan built-in `Partial<T>`.

Lihat Solusi

```
type MyPartial<T> = {
[P in keyof T]?: T[P];
};

// Contoh:
interface Todo {
title: string;
description: string;
completed: boolean;
}

type PartialTodo = MyPartial<Todo>;
// { title?: string; description?: string; completed?: boolean; }
```

### Latihan 2: Nullable Type

Buat mapped type `Nullable` yang membuat semua properti bisa bernilai `null`.

Lihat Solusi

```
type Nullable<T> = {
[P in keyof T]: T[P] | null;
};

interface Config {
timeout: number;
retries: number;
}

type NullableConfig = Nullable<Config>;
// { timeout: number | null; retries: number | null; }
```

← Sebelumnya

Modul 3 - Lesson 9 dari 10

Selanjutnya →
