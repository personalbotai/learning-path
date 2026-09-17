# Generic Utility Types

TypeScript menyediakan beberapa built-in generic utility types yang sering digunakan untuk type transformations: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`, `Readonly<T>`, dan lainnya. Understanding these utility types membuka kemampuan type manipulation yang powerful.

⏱️ 20 menit
📊 Kesulitan: Lanjutan

## 🎯 Tujuan Pembelajaran

-
Memahami purpose generic utility types

-
Menggunakan `Partial<T>` untuk optional properties

-
Menggunakan `Required<T>` untuk mandatory properties

-
Memilih properties dengan `Pick<T, K>` dan `Omit<T, K>`

-
Membuat dictionary dengan `Record<K, T>`

-
Membuat immutable types dengan `Readonly<T>`

## 📚 Built-in Generic Utilities

Generic utility types adalah type transformers yang mengambil satu atau lebih type parameters dan menghasilkan type baru. Mereka didefinisikan di `lib.d.ts` dan selalu tersedia.

### 1. Partial<T>

Membuat semua properties dari `T` menjadi optional. Berguna untuk update operations, form inputs, atau partial data.

```
interface User {
id: number;
name: string;
email: string;
age: number;
}

// All properties become optional
type PartialUser = Partial<User>;
// Equivalent to:
// { id?: number; name?: string; email?: string; age?: number; }

function updateUser(id: number, updates: PartialUser): User {
// ... update logic
return { id, ...updates } as User;
}

updateUser(1, { name: "Alice" }); // OK - only name provided
updateUser(2, {});                // OK - empty update
```

### 2. Required<T>

Kebalikan dari `Partial` - membuat semua optional properties menjadi required.

```
interface Config {
host?: string;
port?: number;
timeout?: number;
}

// All optional become required
type RequiredConfig = Required<Config>;
// { host: string; port: number; timeout: number; }

function connect(config: RequiredConfig): void {
console.log(`Connecting to \${config.host}:\${config.port}`);
}

// OK - all properties provided
connect({ host: "localhost", port: 5432, timeout: 5000 });
// Error - missing port
// connect({ host: "localhost", timeout: 5000 });
```

### 3. Pick<T, K> dan Omit<T, K>

`Pick` memilih subset properties dari `T`. `Omit` mengabaikan (exclude) properties tertentu.

```
interface User {
id: number;
name: string;
email: string;
password: string;
createdAt: Date;
}

// Pick only specific properties
type UserPublic = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string; }

// Omit sensitive properties
type UserWithoutSensitive = Omit<User, "password" | "createdAt">;
// { id: number; name: string; email: string; }

function toPublic(user: User): UserPublic {
return {
id: user.id,
name: user.name,
email: user.email
};
}

function sanitize(user: User): UserWithoutSensitive {
const { password, createdAt, ...rest } = user;
return rest;
}
```

### 4. Record<K, T>

`Record` membuat object type dengan keys dari union type `K` dan values dari `T`. Ini adalah alternative untuk index signatures.

```
// Dictionary dengan string keys
type StringDict = Record<string, number>;
// Equivalent to: { [key: string]: number; }

const scores: StringDict = {
alice: 95,
bob: 87,
charlie: 92
};

// Specific keys
type Permissions = Record<"read" | "write" | "delete", boolean>;
const perms: Permissions = {
read: true,
write: false,
delete: false
};
```

### 5. Readonly<T>

`Readonly` membuat semua properties dari `T` menjadi readonly. Berguna untuk immutable data structures.

```
interface MutableUser {
id: number;
name: string;
email: string;
}

// All properties become readonly
type ImmutableUser = Readonly<MutableUser>;

const user: ImmutableUser = {
id: 1,
name: "Alice",
email: "alice@example.com"
};

// Error - all properties readonly
// user.name = "Bob";
// user.email = "bob@example.com";
```

### Combining Utility Types

Utility types bisa dikombinasikan untuk type transformations yang kompleks.

```
interface User {
id: number;
name: string;
email: string;
password: string;
}

// Omit password, then make all remaining readonly
type PublicUser = Readonly<Omit<User, "password">>;

const publicUser: PublicUser = {
id: 1,
name: "Alice",
email: "alice@example.com"
};

// Error - readonly
// publicUser.name = "Bob";
```

### Creating Custom Utility Types

Kita bisa membuat custom utility types menggunakan conditional types dan mapped types (akan dibahas di advanced topics).

```
// Simple custom utility: Nullable<T>
type Nullable<T> = T | null | undefined;

function get<T>(key: string): Nullable<T> {
return localStorage.getItem(key) as any;
}
```

### Deep Utility Types: Melampaui Dangkal

`Partial`/`Readonly` bawaan hanya satu level. Untuk nested config/state, buat versi rekursif:

```ts
type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] };

interface AppConfig { api: { url: string; timeout: number }; ui: { theme: { dark: boolean } } }
type Patch = DeepPartial<AppConfig>;
const patch: Patch = { api: { timeout: 5000 } }; // nested parsial OK — Partial dangkal tak bisa

const frozen: DeepReadonly<AppConfig> = { api: { url: "/api", timeout: 3000 }, ui: { theme: { dark: true } } };
// frozen.api.url = "/x"; // Error rekursif
```

### `satisfies` + Utility Types: Config Aman & Presisi

```ts
type Env = "dev" | "staging" | "prod";
type DeployConfig = { env: Env; url: `https://${string}`; replicas: number };

// Partial untuk override + satisfies untuk validasi akhir:
type Override = DeepPartial<DeployConfig>;
function deploy(base: DeployConfig, over: Override): DeployConfig {
  return { ...base, ...over, url: (over.url ?? base.url) } as DeployConfig;
}

const base = { env: "prod", url: "https://api.example.com", replicas: 3 } satisfies DeployConfig;
// base.env literal "prod" — bukan Env lebar; typo url ketangkap di sini, bukan saat deploy
```

### Pick/Omit/Exclude/Extract Composition Cheat-Sheet

```ts
type Evt = "click" | "hover" | "focus" | "blur";
type Mouse = Extract<Evt, "click" | "hover">;   // "click" | "hover"
type NonMouse = Exclude<Evt, Mouse>;            // "focus" | "blur"

interface Full { id: number; name: string; secret: string; ts: Date }
type Safe = Omit<Full, "secret">;               // buang sensitif
type Key = keyof Safe;                          // "id"|"name"|"ts"
type StrKeys = Extract<Key, "name">;            // "name"
type Public = Pick<Safe, StrKeys>;              // { name: string } — alur komposisi penuh
```

## 💻 Exercises

### 1. Partial Form Data

Given interface `FormData` dengan semua required fields, buat type `PartialForm` menggunakan `Partial`. Buat function `mergeForm(base: FormData, updates: PartialForm): FormData`.

### 2. API Response Pick

Given interface `ApiResponse` dengan fields: `data`, `status`, `error`, `timestamp`. Buat type `SuccessResponse` yang hanya include `data` dan `timestamp` menggunakan `Pick`.

### 3. Immutable Collection

Buat generic type `ImmutableArray` menggunakan `Readonly` yang membuat array elements tidak bisa diubah. Test dengan `ImmutableArray<number>` dan coba modify array.

← Sebelumnya

Quiz Module →
