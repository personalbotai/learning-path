# Template Literal Types

**Template Literal Types** memungkinkan kita membuat tipe string berdasarkan template literal, mirip seperti template literal di JavaScript. Fitur ini sangat berguna untuk membuat tipe yang aman untuk string yang memiliki format tertentu, seperti URL, CSS class names, atau API endpoints.

⏱️ 20 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami sintaks template literal types

-
Menggabungkan string literal types

-
Membuat tipe untuk string dengan format tertentu (URL, CSS, dll)

-
Menggunakan conditional types dengan template literals

##
2
Penjelasan

Template literal types menggunakan backtick syntax (seperti template literal di JavaScript) untuk membuat tipe string yang spesifik. Kita bisa menggabungkan literal strings, variabel tipe, dan conditional types untuk membuat tipe yang sangat ekspresif.

### Sintaks Dasar

```
// Gabungkan dua string literal types
type Greeting = "Hello";
type Welcome = Greeting | "Welcome";

type HelloWorld = "Hello" " " "World";
// Result: "Hello World"

type UpperHello = typeof "Hello".toUpperCase();
// Result: "HELLO"
```

### Interpolation dengan `${}`

Kita bisa menyisipkan tipe lain ke dalam template literal menggunakan `${}`.

```
type Prefix = "get" | "set";

// Buat tipe method names yang diawali dengan get/set
type Method = `${Prefix}Value`;
// Result: "getValue" | "setValue"

type EventName = `on${string}`;
// Result: string (karena string bisa apa saja)
```

### Template Literals untuk URLs

```
type Protocol = "http" | "https";
type Domain = "example.com" | "google.com";

type Url = `${Protocol}://${Domain}`;
// Result: "http://example.com" | "http://google.com" |
//        "https://example.com" | "https://google.com"
```

### Membuat CSS Class Names

```
type Color = "red" | "blue" | "green";
type Size = "sm" | "md" | "lg";

type ButtonClass = "btn-${Color}-${Size}";
// Result: "btn-red-sm" | "btn-red-md" | "btn-red-lg" |
//        "btn-blue-sm" | ...
```

### Conditional dengan Template Literals

```
type MaybeArray<T> = T extends any[] ? `${T & string}[]` : T;

type Test1 = MaybeArray<number>;  // number
type Test2 = MaybeArray<string[]>; // "string[]"
```

### Use Cases

- **API endpoints**: Type-safe URL construction

- **CSS class names**: Utility-first class composition (Tailwind, etc)

- **Event types**: `onClick`, `onChange`, dll

- **Internationalization**: Message keys dengan prefix tertentu

- **GraphQL operations**: Query/mutation/fragment names

**💡 Tips:** Template literal types adalah salah satu fitur paling powerful di TypeScript untuk membuat tipe string yang aman. Gunakan untuk membuat DSL (Domain Specific Language) dalam type system.

### Template Literals + Pattern Matching via `infer`

Kita bisa mem-parse string pada type-level menggunakan `infer` di dalam template literal:

```ts
// Ekstrak parameter URL `:param`
type ExtractRouteParam<Path extends string> = 
  Path extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParam<`/${Rest}`>
    : Path extends `${string}:${infer Param}`
    ? Param
    : never;

type Params = ExtractRouteParam<"/users/:userId/posts/:postId">; // "userId" | "postId"

// Tipe request params otomatis sesuai pola path:
type RouteRequest<Path extends string> = {
  [K in ExtractRouteParam<Path>]: string;
};
type UserPostReq = RouteRequest<"/users/:userId/posts/:postId">;
// { userId: string; postId: string; }
```

### Event Names, CSS Tokens & `satisfies`

```ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = `/api/v1/${string}`;
type RouteKey = `${HttpMethod} ${Endpoint}`;

// Template literal validation with satisfies
const apiEndpoints = {
  getUser: "GET /api/v1/users",
  createPost: "POST /api/v1/posts",
  deleteUser: "DELETE /api/v1/users/:id",
} satisfies Record<string, RouteKey>;

// apiEndpoints.getUser tetap literal "GET /api/v1/users"
// Jika salah tulis "FETCH /api/v1/x" -> TS error compile-time
```

##
3
Latihan

### Latihan 1: Event Handler Names

Buat tipe `EventHandlerName` yang mengubah prefix `"on"` menjadi uppercase dan menambahkan suffix `"Handler"`. Contoh: `"click"` → `"onClickHandler"`.

Lihat Solusi

```
type EventHandlerName<T extends string> = `on${Uppercase<T>}Handler`;

// Contoh:
type ClickHandler = EventHandlerName<"click">;   // "onClickHandler"
type MouseOverHandler = EventHandlerName<"mouseover">; // "onMouseOverHandler"
```

### Latihan 2: API Path Builder

Buat tipe `ApiPath` yang menggabungkan base path `"/api/v1"` dengan endpoint. Endpoint bisa `"users"`, `"posts"`, atau `"comments"`. Hasil: `"/api/v1/users"`, dll.

Lihat Solusi

```
type Endpoint = "users" | "posts" | "comments";

type ApiPath = `/api/v1/${Endpoint}`;

// Result: "/api/v1/users" | "/api/v1/posts" | "/api/v1/comments"
```

← Sebelumnya

Modul 3 - Lesson 10 dari 10 (Modul 3 Complete!)

Selanjutnya →
