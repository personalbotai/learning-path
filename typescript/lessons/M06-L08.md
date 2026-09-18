# Parameter Utilities: Partial, Required, Pick, Omit

**Parameter utility types** - `Partial`, `Required`, `Pick`, dan `Omit` - adalah utility types paling sering digunakan dalam everyday TypeScript development. Mereka memungkinkan transformasi tipe dengan cara yang predictable dan composable, terutama untuk DTOs, API contracts, dan function parameters.

⏱️ 25 menit
📊 Kesulitan: Lanjutan

## 🎯 Tujuan Pembelajaran

-
Menggunakan `Partial` untuk optional fields (update operations)

-
Menggunakan `Required` untuk enforce all fields

-
Membuat subset types dengan `Pick`

-
Menghapus properties dengan `Omit`

-
Composing utility types untuk complex transformations

-
Real-world patterns: DTOs, API responses, form handling

## 📚 Deep Dive into Parameter Utilities

Parameter utility types adalah transformation tools yang memodifikasi properties dari sebuah type. Mereka adalah building blocks untuk creating flexible, type-safe APIs.

### Partial<T> - Optional Everything

`Partial` mengubah semua properties menjadi optional. Ini adalah utility type paling sering digunakan, terutama untuk:

- Update/PATCH operations

- Form input models

- Configuration objects

- Optional constructor parameters

```
interface User {
id: number;
name: string;
email: string;
age: number;
}

// Partial makes all properties optional
type UserUpdate = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

function updateUser(id: number, updates: UserUpdate): User {
const existing = getUser(id); // assume exists
return { ...existing, ...updates };
}

// Can update just one field
updateUser(1, { name: "New Name" });

// Or multiple fields
updateUser(2, { email: "new@email.com", age: 25 });
```

### Required<T> - All or Nothing

`Required` adalah kebalikan dari `Partial` - membuat semua optional properties menjadi required. Berguna ketika Anda memiliki interface dengan optional fields tapi perlu enforce completeness di certain context.

```
interface Config {
host?: string;
port?: number;
ssl?: boolean;
}

// All optional become required
type StrictConfig = Required<Config>;
// { host: string; port: number; ssl: boolean; }

function connectStrict(config: StrictConfig): void {
// Must provide all fields
console.log(`\${config.host}:\${config.port} (\${config.ssl ? 'SSL' : 'no SSL'})`);
}

// OK
connectStrict({ host: "localhost", port: 8080, ssl: false });

// Error - missing ssl
// connectStrict({ host: "localhost", port: 8080 });
```

### Pick<T, K> - Select Specific Properties

`Pick` membuat type baru dengan hanya properties yang dipilih dari `T`. Sangat berguna untuk:

- Creating public views of internal types

- API response contracts

- Extracting subsets for specific use cases

```
interface User {
id: number;
name: string;
email: string;
password: string;
salt: string;
}

// Pick only safe-to-expose properties
type UserPublic = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string; }

function toPublicUser(user: User): UserPublic {
return {
id: user.id,
name: user.name,
email: user.email
};
}

const public = toPublicUser({
id: 1,
name: "Alice",
email: "alice@example.com",
password: "secret",
salt: "xyz"
}); // password dan salt tidak termasuk
```

### Omit<T, K> - Exclude Properties

`Omit` adalah kebalikan dari `Pick` - mengambil semua properties kecuali yang disebutkan. Bergitu untuk menghapus fields sensitif atau internal.

```
interface User {
id: number;
name: string;
email: string;
password: string;
createdAt: Date;
}

// Omit sensitive/internal fields
type UserSafe = Omit<User, "password" | "createdAt">;
// { id: number; name: string; email: string; }

function sanitizeUser(user: User): UserSafe {
const { password, createdAt, ...safe } = user;
return safe;
}

const safeUser = sanitizeUser({
id: 1,
name: "Alice",
email: "alice@example.com",
password: "super-secret",
createdAt: new Date()
}); // password dan createdAt di-removed
```

### Composing Utility Types

Utility types bisa dikombinasikan untuk membuat complex transformations. Urutan matters!

```
interface User {
id: number;
name: string;
email: string;
password: string;
role: string;
}

// Omit sensitive, then make all remaining readonly
type PublicUser = Readonly<Omit<User, "password" | "role">>;
// { id: number; name: string; email: string; } - all readonly

const public: PublicUser = {
id: 1,
name: "Alice",
email: "alice@example.com"
};

// Error - readonly
// public.name = "Bob";

// Partial of Pick - only some fields, all optional
type UserPatch = Partial<Pick<User, "name" | "email">>;
// { name?: string; email?: string; }

function patchUser(id: number, patch: UserPatch): void {
// Only name and/or email can be updated
}
```

### Practical Patterns

#### DTO (Data Transfer Object)

```
// API Request DTO
interface CreateUserRequest {
name: string;
email: string;
password: string;
}

// API Response DTO (no password)
type CreateUserResponse = Omit<CreateUserRequest, "password">;

function createUser(req: CreateUserRequest): CreateUserResponse {
const user = saveToDb(req);
const { password, ...response } = user;
return response;
}
```

#### Form Handling

```
interface FormValues {
username: string;
email: string;
password: string;
confirmPassword: string;
}

// Only fields that are filled in (partial form state)
type FormState = Partial<FormValues>;

let state: FormState = {};
state.username = "alice"; // OK
state.email = "alice@example.com"; // OK
// state.password not set yet - no error because optional
```

## 💻 Exercises

### 1. Update DTO

Given interface `Product` dengan fields: `id`, `name`, `price`, `stock`. Buat type `ProductUpdate` menggunakan `Partial`. Implementasikan `updateProduct(id: number, updates: ProductUpdate): Product`.

### 2. Public API Response

Interface `User` memiliki fields: `id`, `username`, `email`, `passwordHash`, `salt`. Buat type `UserPublic` yang exclude `passwordHash` dan `salt` menggunakan `Omit`.

### 3. Readonly Subset

Buat type `ImmutableIdName` dari interface `Entity` yang hanya include `id` dan `name` dan keduanya readonly. Gunakan kombinasi `Pick` dan `Readonly`.

← Sebelumnya

Quiz Module →
