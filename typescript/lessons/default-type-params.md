# Default Type Parameters

**Default type parameters** memungkinkan memberikan nilai default untuk generic type parameters. Fitur ini mengurangi boilerplate saat tipe yang umum digunakan tidak perlu ditentukan secara eksplisit. Default parameters didefinisikan setelah nama parameter dengan syntax `= DefaultType`.

⏱️ 15 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami syntax default type parameters

-
Mengurangi explicit type annotations dengan defaults

-
Default parameters pada functions, interfaces, dan classes

-
Memahami type inference dengan defaults

-
Kapan menggunakan default type parameters

## 📚 Syntax dan Penggunaan

Default type parameters ditentukan setelah nama type parameter menggunakan `=`. Ketika generic digunakan tanpa explicit type argument, TypeScript akan menggunakan default.

### Generic Function dengan Default

```
// Default T = string
function create<T = string>(value: T): T {
return value;
}

// T inferred as string (default)
const a = create("hello"); // string

// T inferred as number (from argument)
const b = create(42);     // number

// Explicit override
const c = create<boolean>(true); // boolean
```

### Interface dengan Default Type

Default parameters sangat berguna untuk interface yang biasanya digunakan dengan tipe tertentu.

```
interface Config<T = string> {
key: T;
value: T;
}

// Uses default: Config<string>
const config1: Config = {
key: "host",
value: "localhost"
};

// Explicit: Config<number>
const config2: Config<number> = {
key: 1,
value: 8080;
};
```

### Generic Class dengan Default

```
class Wrapper<T = any> {
constructor(private value: T) {}

get(): T {
return this.value;
}

set(value: T): void {
this.value = value;
}
}

// Default any
const w1 = new Wrapper("hello");  // Wrapper<string>
const w2 = new Wrapper(123);     // Wrapper<number>

// Explicit
const w3 = new Wrapper<boolean>(true);
```

### Multiple Parameters dengan Default

Beberapa type parameters bisa memiliki default masing-masing. Default berlaku dari kiri ke kanan - type parameter kanan bisa merefer default dari kiri.

```
// Two type parameters with defaults
function createTuple<
T = string,
U = number
>(first: T, second: U): [T, U] {
return [first, second];
}

// Both defaults
const t1 = createTuple("a", 1); // [string, number]

// Override first, default second
const t2 = createTuple<boolean>(true); // [boolean, number]

// Override both
const t3 = createTuple<number, string>(42, "answer"); // [number, string]
```

### Real-World Use Case: HTTP Client

```
interface HttpResponse<T = any> {
status: number;
data: T;
headers: Record<string, string>;
}

function fetch<T = any>(url: string): Promise<HttpResponse<T>> {
return fetch(url).then(res => res.json()) as any;
}

// Without specifying T - defaults to any
const response1 = await fetch("/api/data");
console.log(response1.data); // any

// With explicit T for type safety
interface UserData {
id: number;
name: string;
}
const response2 = await fetch<UserData>("/api/user/1");
console.log(response2.data.name); // string - type safe!
```

### When to Use Default Type Parameters

- Ketika generic biasanya digunakan dengan tipe tertentu (misal: `any` atau `unknown`)

- Untuk mengurangi explicit type annotations di code yang call generic

- Ketika backward compatibility diperlukan untuk existing code

- Untuk providing sensible defaults yang bisa di-override

### Limitations

Default type parameters hanya bisa menggunakan tipe yang sudah terdefinisi atau type parameter sebelumnya. Tidak bisa menggunakan typeof atau query types dalam default (karena akan circular).

## 💻 Exercises

### 1. Default to void

Buat generic function `callback<T = void>(value: T, cb: (val: T) => void): void` dengan default `T = void`. Test dengan dan tanpa explicit type.

### 2. Mutable vs Readonly

Buat generic interface `Container` dengan default `T` mutable. Tambahkan generic version `ReadonlyContainer` yang extends `Container` dengan `T` readonly.

### 3. Pair dengan Default

Buat generic class `Pair` dengan dua type parameters `T` dan `U`, default both to `unknown`. Buat instance tanpa specifying types dan observe inferred types.

← Sebelumnya

Quiz Module →
