# Generic Functions Dasar

**Generics** memungkinkan membuat komponen yang bekerja dengan berbagai tipe tanpa loss type safety. Generic functions menggunakan type parameters (dilambangkan dengan `<T>`) untuk menghasilkan code yang reusable namun tetap type-checked. Ini adalah salah satu fitur paling powerful di TypeScript.

⏱️ 25 menit
📊 Kesulitan: Lanjutan

## 🎯 Tujuan Pembelajaran

-
Memahami konsep generic dan type parameters

-
Mendeklarasi generic functions dengan `<T>`

-
Type inference pada generic functions

-
Generic constraints dengan `extends`

-
Multiple type parameters (`<T, U>`)

## 📚 Apa itu Generics?

Tanpa generics, kita harus membuat multiple functions untuk berbagai tipe, atau menggunakan `any` yang mengorbankan type safety. Generics memungkinkan kita menulis **type-safe reusable code**.

### The Problem: Without Generics

```
// Without generics - using any (unsafe)
function identity(arg: any): any {
return arg;
}

const result1 = identity("hello"); // any - no type checking
const result2 = identity(100);     // any - no type checking

// Or multiple overloads (tedious)
function identityString(arg: string): string;
function identityNumber(arg: number): number;
// ... more overloads for each type
```

### Generic Function Sederhana

Gunakan type parameter `<T>` (T adalah conventional name, bisa apa saja) untuk mewakili tipe yang akan ditekan/diambil.

```
// Generic function - type-safe dan reusable
function identity<T>(arg: T): T {
return arg;
}

// Type inference - TypeScript figures out T automatically
const str = identity("hello"); // T inferred as string
const num = identity(100);     // T inferred as number

// Explicit type argument (optional)
const explicit = identity<boolean>(true);
```

### Generic Functions dengan Multiple Parameters

Generic functions bisa memiliki multiple type parameters, dipisahkan dengan comma.

```
function createPair<T, U>(first: T, second: U): [T, U] {
return [first, second];
}

const pair1 = createPair("name", 30);     // [string, number]
const pair2 = createPair(1, "value");   // [number, string]
const pair3 = createPair<number, number>(1, 2); // explicit
```

### Generic Arrow Functions

```
const getFirst = <T>(arr: T[]): T | undefined => {
return arr[0];
};

const firstNum = getFirst([1, 2, 3]);      // number | undefined
const firstStr = getFirst(["a", "b"]);   // string | undefined
```

### Working with Generic Arrays

Generic functions sering digunakan untuk array manipulation dengan type safety.

```
function reverse<T>(arr: T[]): T[] {
return arr.slice().reverse();
}

function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4];
const evens = filter(numbers, n => n % 2 === 0); // number[]

const strings = ["a", "bb", "ccc"];
const long = filter(strings, s => s.length > 1); // string[]
```

### Generic Functions dalam Collections

```
interface User {
id: number;
name: string;
}

function findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
return arr.find(item => item.id === id);
}

const users: User[] = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" }
];

const user = findById(users, 1); // User | undefined
console.log(user?.name); // "Alice"
```

### `const` Type Parameters (TS 5.0+): Inferensi Literal Paling Tajam

Tanpa `const`, array/string argumen melebar (widen) ke `string[]`/`string`. Dengan `const T`, TypeScript menginferensikan literal + readonly tuple — setara `as const` tapi otomatis di call-site.

```ts
// ❌ melebar: kehilangan literal
function getIds<T>(ids: T[]): T[] { return ids; }
const a = getIds(["admin", "user"]); // string[] — "admin"|"user" hilang

// ✅ const type param: literal terjaga sebagai readonly tuple
function getIdsConst<const T extends readonly string[]>(...ids: T): T {
  return ids;
}
const b = getIdsConst("admin", "user"); // readonly ["admin","user"]
type Role = typeof b[number]; // "admin" | "user" — siap jadi union!

// Kasus route path: presisi penuh
function makeRoutes<const T extends string[]>(...paths: T): { [K in T[number]]: `/${K}` } {
  return Object.fromEntries(paths.map(p => [p, `/${p}`])) as any;
}
const routes = makeRoutes("home", "profile", "settings");
// routes.profile bertipe "/profile" literal — autocomplete & cek typo jalan

// Bandingkan: `as const` manual vs `const` param
const manual = ["a", "b"] as const;        // readonly ["a","b"] — di tiap call-site
function auto<const T>(x: T): T { return x; }
const inferred = auto(["a", "b"]);          // readonly ["a","b"] — otomatis, tanpa as const
```

**Kapan pakai `const` type params?** Factory key/route/event-name, i18n keys, design tokens, state machine transitions — di mana typo string harus ketangkap compile-time dan autocomplete harus presisi. Batasan: hanya untuk inferensi literal/readonly; jangan pakai jika memang butuh mutable array lebar.

## 💻 Exercises

### 1. Identity Function

Implementasikan generic function `identity<T>(arg: T): T` yang mengembalikan argumen yang sama. Test dengan tipe: string, number, boolean, array.

### 2. First Element

Buat generic function `first<T>(arr: T[]): T | undefined` yang mengembalikan elemen pertama array. Pastikan type terpreserve.

### 3. Merge Objects

Buat generic function `merge<T, U>(obj1: T, obj2: U): T & U` yang menggabungkan dua objects dan mengembalikan intersection type. Test dengan objects yang memiliki properties berbeda.

← Sebelumnya

Quiz Module →
