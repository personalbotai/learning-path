# Conditional Types

**Conditional Types** memungkinkan kita memilih tipe berdasarkan kondisi type-level, mirip seperti ternary operator di JavaScript. Fitur ini sangat powerful untuk membuat tipe yang dipilih secara dinamis berdasarkan tipe input.

⏱️ 25 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami sintaks conditional types (`T extends U ? X : Y`)

-
Membuat type yang dipilih berdasarkan kondisi type-level

-
Menggunakan conditional types dalam utility types

-
Memahami distributive conditional types

##
2
Penjelasan

Conditional types menggunakan sintaks ternary: `T extends U ? X : Y`. TypeScript akan mengevaluasi apakah tipe `T` bisa ditetapkan ke tipe `U`. Jika ya, hasilnya adalah `X`, jika tidak, `Y`.

### Sintaks Dasar

```
// Conditional type sederhana
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;   // true
type B = IsString<number>;   // false
type C = IsString<boolean>; // false
```

### Conditional Types dengan Union

Ketika conditional type diterapkan pada union types, TypeScript akan menerapkannya ke setiap anggota union secara terpisah (distributive).

```
// Distributive: diterapkan ke setiap anggota union
type ToArray<T> = T extends any ? T[] : never;

type StrOrNum = string | number;
type Arr = ToArray<StrOrNum>;  // string[] | number[]

// Tanpa distribusi (pakai tuple)
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type Arr2 = ToArrayNonDist<StrOrNum>;  // (string | number)[]
```

### Conditional Types untuk Filtering Union

```
// Filter union untuk mendapatkan hanya tipe tertentu
type NonNullable<T> = T extends null | undefined ? never : T;

type T1 = NonNullable<string | null | undefined>;  // string
type T2 = NonNullable<number | null>;            // number
```

### Conditional Types dalam Function Return

```
function createId<T extends number | string>(id: T): T {
return id;
}

// T di-infer dari argument, return type sama dengan input type
const numId = createId(123);    // number
const strId = createId("abc");  // string
```

### Complex Conditional: Memeriksa Tipe Objek

```
// Cek apakah T adalah object (bukan primitif)
type IsObject<T> = T extends object ? true : false;

type O1 = IsObject<string>;; // false
type O2 = IsObject<{ x: number }>; // true
type O3 = IsObject<null>;     // false
```

### Conditional Types dalam Utility Types

Banyak utility types bawaan TypeScript menggunakan conditional types, seperti `Partial<T>`, `Readonly<T>`, `Pick<T, K>`, dll.

```
// Contoh sederhana Partial (membuat semua properti optional)
type MyPartial<T> = {
[P in keyof T]?: T[P];
};

interface User {
name: string;
age: number;
}

type PartialUser = MyPartial<User>;
// { name?: string; age?: number; }
```

**⚠️ Tip:** Conditional types bisa menjadi kompleks. Mulailah dengan conditional sederhana, lalu kombinasikan untuk logic yang lebih rumit. Gunakan them untuk membuat type transformations yang aman dan reusable.

### Distributive Conditional Types & `never` Filtering

Ketika tipe generic berupa naked type parameter (seperti `T`) dan argumennya adalah union, conditional type mendistribusikan operasi ke setiap anggota union secara otomatis:

```ts
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArray<string | number>; // string[] | number[] (bukan (string | number)[])

// Pola filter union dengan `never`:
type NonEmpty<T> = T extends "" | null | undefined ? never : T;
type Clean = NonEmpty<"hello" | "" | null | 42>; // "hello" | 42

// Cegah distribusi dengan tuple wrap `[T]`:
type IsUnion<T, U = T> = T extends any ? ([U] extends [T] ? false : true) : never;
```

### Infer Keyword (`infer`) dalam Conditional Types

Keyword `infer` mendeklarasikan variabel tipe baru yang diekstrak langsung dari pola:

```ts
// Ekstrak ReturnType secara manual:
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type F = () => { id: number; token: string };
type Out = MyReturnType<F>; // { id: number; token: string }

// Ekstrak elemen dari Array:
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type N = Flatten<number[]>; // number
type S = Flatten<string>;   // string (bukan array, lolos apa adanya)

// Ekstrak tipe resolved dari Promise (mirip Awaited<T>):
type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T;
type P = MyAwaited<Promise<Promise<string>>>; // string (unwrapped rekursif)
```

### Conditional Types + `satisfies` & Utility Real-World

```ts
type Action = 
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: { id: number; title: string } }
  | { type: "FETCH_ERROR"; error: string };

// Ekstrak payload dari Action tertentu:
type ExtractPayload<A, T> = A extends { type: T; payload: infer P } ? P : never;
type SuccessData = ExtractPayload<Action, "FETCH_SUCCESS">; // { id: number; title: string }

// Handler map type-safe dengan satisfies:
type ActionHandlers = {
  [A in Action as A["type"]]?: (action: A) => void;
};

const handlers = {
  FETCH_START: () => console.log("Loading..."),
  FETCH_SUCCESS: (a) => console.log("Done:", a.payload.title),
} satisfies ActionHandlers;
```

##
3
Latihan

### Latihan 1: Filter Array Elements

Buat conditional type `FilterByType` yang mengambil array tipe `T[]` dan tipe `U`, lalu mengembalikan array hanya berisi elemen yang bisa ditetapkan ke `U`. Gunakan distribusi.

Lihat Solusi

```
type FilterByType<T, U> = T extends U ? T : never;

// Contoh penggunaan:
type Mixed = [string, number, boolean, string];
type OnlyStrings = FilterByType<Mixed, string>; // string | string
```

### Latihan 2: Conditional Return Type

Buat function `wrap` yang menerima value `T`. Jika `T` adalah array, return `T` (sama). Jika bukan array, return `T[]`. Gunakan conditional type.

Lihat Solusi

```
type Wrap<T> = T extends any[] ? T : T[];

function wrap<T>(value: T): Wrap<T> {
return (Array.isArray(value) ? value : [value]) as any;
}

// Penggunaan:
const a = wrap([1, 2]);  // number[]
const b = wrap(42);    // number[]
```

← Sebelumnya

Modul 3 - Lesson 8 dari 10

Selanjutnya →
