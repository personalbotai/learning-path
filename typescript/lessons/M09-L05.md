# Type Aliases

**Type Aliases** (alias tipe) memungkinkan kita membuat nama baru untuk tipe yang sudah ada dengan keyword `type`. Berbeda dengan interface, type alias bisa digunakan untuk membuat tipe untuk primitive, union, intersection, dan banyak lagi.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Type Aliases

##
1
Tujuan Pembelajaran

-
Mendefinisikan type alias dengan `type`

-
Membuat alias untuk tipe primitive, object, union, dan intersection

-
Memahami perbedaan antara type alias dan interface

-
Menggunakan type alias dalam function signatures dan variables

##
2
Penjelasan

Type Alias adalah cara untuk memberikan nama pada tipe apa pun. Unlike interface, type alias tidak membuat tipe baru - hanya memberikan alias (nama alternatif) untuk tipe yang sudah ada. Type alias sangat fleksibel karena bisa digunakan untuk primitive types, union types, intersection types, tuple, function types, dan object types.

### Sintaks Dasar

```
// Alias untuk primitive type
type UserId = number;
type Username = string;

let id: UserId = 123;
let name: Username = "alice";
```

### Type Alias untuk Object

```
// Object type alias
type User = {
id: number;
name: string;
email: string;
};

const user: User = {
id: 1,
name: "Alice",
email: "alice@example.com"
};
```

### Type Alias untuk Union dan Intersection

```
// Union type alias
type StringOrNumber = string | number;

// Intersection type alias
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
```

### Type Alias untuk Function

```
type Greet = (name: string) => string;

const hello: Greet = (name) => `Hello, ${name}!`;

// Atau dengan arrow function
type Calculator = (x: number, y: number) => number;
const add: Calculator = (a, b) => a + b;
```

### Tuple dengan Type Alias

```
type StringNumberPair = [string, number];

const pair: StringNumberPair = ["age", 30];
```

### Readonly dengan Type Alias

```
type ReadonlyUser = {
readonly id: number;
readonly name: string;
};

const user: ReadonlyUser = { id: 1, name: "Bob" };
// user.name = "Alice"; // Error
```

### Mapped Types dengan Type Alias

```
type PartialUser = {
[P in keyof User]?: User[P];
};
```

### Type Alias + `satisfies` (TS 4.9+): Validasi Tanpa Widening

Operator `satisfies` memvalidasi bahwa value cocok dengan type alias tanpa melebarkan (widen) tipe literal — beda dengan `as` yang memaksa.

```ts
type Route = `/api/${string}`;
type Color = "red" | "blue" | "green";
type Hex = `#${string}`;

type Theme = {
  primary: Hex;
  accent: Hex;
  brand: Color;
};

// ✅ satisfies: cek shape, tapi literal tetap terjaga (autocomplete & narrowing jalan)
const theme = {
  primary: "#3b82f6",
  accent: "#60a5fa",
  brand: "blue",
} satisfies Theme;

// theme.primary masih "#3b82f6" (literal), bukan string lebar
// theme.brand masih "blue" — autocomplete tetap presisi

// ❌ ini error di satisfies, tapi lolos jika pakai `as` (berbahaya)
 // const bad = { primary: "blue", accent: "#fff", brand: "blue" } satisfies Theme; // Error: "blue" bukan Hex

// Bandingkan dengan `as` — widen, kehilangan safety:
const loose = { primary: "#3b82f6", accent: "#60a5fa", brand: "blue" } as Theme;
// loose.primary bertipe Hex (string lebar), bukan literal "#3b82f6"
```

**Kapan pakai `satisfies` dengan type alias?** Untuk config objek, route map, design tokens — validasi ketat tapi inferensi literal tetap tajam. Praktik terbaik TS 5.x: `satisfies` > `as` untuk config.

### Utility Types + Type Alias (Real-World Composition)

```ts
type User = { id: number; name: string; email: string; password: string; role: "admin" | "user" };

// Kombinasi utility types via type alias:
type PublicUser = Omit<User, "password">;                 // buang sensitif
type UpdatePayload = Partial<Pick<User, "name" | "email">>; // update parsial hanya field aman
type ImmutableUser = Readonly<PublicUser>;                // immutable setelah fetch
type UserMap = Record<User["id"], PublicUser>;            // Record dengan key dari User

// DeepReadonly custom (rekursif) — melampaui Readonly dangkal:
type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };

type Config = { api: { url: string; timeout: number } };
type FrozenConfig = DeepReadonly<Config>;
const cfg: FrozenConfig = { api: { url: "/api", timeout: 3000 } };
// cfg.api.url = "/other"; // Error readonly rekursif

// `satisfies` + `Record` untuk route table yang type-safe:
type Routes = Record<string, `/${string}`>;
const routes = {
  home: "/",
  profile: "/profile",
  settings: "/settings",
} satisfies Routes;
```

### `const` Type Parameters (TS 5.0+) Sekilas dengan Alias

```ts
// Tanpa `const`: string[] melebar, kehilangan literal
declare function get<T>(x: T): T;
const r1 = get(["a", "b"]); // string[]

// Dengan `const T`: inferensi literal tuple readonly terjaga
declare function getConst<const T>(x: T): T;
const r2 = getConst(["a", "b"]); // readonly ["a", "b"] — tuple presisi, bisa untuk route/key union
type Keys = typeof r2[number]; // "a" | "b"
```

**💡 Tips:** Gunakan type alias ketika membuat tipe yang bukan object shape (union, intersection, function, primitive) atau ketika Anda ingin membuat tipe yang lebih fleksibel. Untuk config/route/token objects, validasi dengan `satisfies` agar literal tidak melebar. Gunakan `const` type params ketika butuh inferensi tuple/literal paling tajam. Interface tetap unggul untuk kontrak object/class yang akan di-`extends`/`implements`.

##
3
Latihan

### Latihan 1: Union Type untuk Status

Buat type alias `OrderStatus` yang bisa berupa `"pending"`, `"processing"`, `"shipped"`, atau `"delivered"`. Buat function `updateStatus` yang menerima parameter bertipe `OrderStatus`.

Lihat Solusi

```
type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

function updateStatus(status: OrderStatus) {
console.log("Status updated to:", status);
}

updateStatus("shipped");  // OK
// updateStatus("cancelled"); // Error - not in union
```

### Latihan 2: Function Type untuk Validator

Buat type alias `Validator` untuk function yang menerima `string` dan mengembalikan `boolean`. Buat function `isEmail` dan `isPhone` yang sesuai dengan type `Validator`.

Lihat Solusi

```
type Validator = (input: string) => boolean;

const isEmail: Validator = (input) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
};

const isPhone: Validator = (input) => {
return /^[0-9]+$/.test(input);
};
```

← Sebelumnya

Modul 4 - Lesson 3 dari 6

Selanjutnya →
