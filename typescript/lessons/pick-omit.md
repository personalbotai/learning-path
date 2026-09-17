# Pick & Omit Utility Types

**Pick<T, K>** dan **Omit<T, K>** adalah utility types untuk membuat subtype dengan memilih atau mengecualikan certain properties dari type asli. Ini sangat berguna untuk data transformation dan API responses.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami fungsi Pick<T, K> untuk memilih subset properties

-
Menggunakan Omit<T, K> untuk mengecualikan certain properties

-
Mengaplikasikan Pick/Omit dalam real-world scenarios (DTOs, API responses)

-
Memahami hubungan Pick dan Omit: Pick[T, Exclude] = Omit[T, K]

## 📚 Konten Utama

### Pick<T, K>

`Pick<T, K>` membuat type baru dengan hanya mengambil properties yang spesifik dari type asli. Parameter `K` harus berupa union of property names (string literals) yang ada di `T`.

interface User {
id: number;
name: string;
email: string;
password: string;
role: string;
createdAt: Date;
}

// Pick hanya mengambil name dan email
type UserPreview = Pick<User, "name" | "email">;

// Equivalent to:
type UserPreview = {
name: string;
email: string;
};

const preview: UserPreview = {
name: "Alice",
email: "alice@example.com"
// ✅ OK - hanya properties yang di-pick
};

### Omit<T, K>

`Omit<T, K>` melakukan sebaliknya: mengambil semua properties KECUALI yang disebutkan dalam `K`.

// Omit exclude password dan createdAt
type PublicUser = Omit<User, "password" | "createdAt">;

// Equivalent to:
type PublicUser = {
id: number;
name: string;
email: string;
role: string;
};

const public: PublicUser = {
id: 1,
name: "Alice",
email: "alice@example.com",
role: "user"
// ✅ password dan createdAt tidak ada
};

### Hubungan Pick dan Omit

`Pick[T, Exclude]` sama dengan `Omit[T, K]`. Artinya Omit adalah Pick dengan semua properties kecuali K.

// Omit = Pick>
type OmitUser = Omit<User, "password">;
type PickUser = Pick<User, Exclude<keyof User, "password">>;

// Keduanya identik

### Use Cases

#### 1. API Response DTOs

Saat membuat API, seringkali response object berbeda dengan database entity (misal: exclude sensitive fields).

interface UserEntity {
id: number;
email: string;
passwordHash: string;
salt: string;
role: string;
}

// API response tidak boleh expose passwordHash dan salt
type UserResponse = Omit<UserEntity, "passwordHash" | "salt">;

function getUser(id: number): UserResponse {
// ... query database
return {
id: user.id,
email: user.email,
role: user.role
// passwordHash dan salt tidak dimasukkan
};
}

#### 2. Form Input Types

Form create/update sering hanya perlu subset properties dari full entity.

interface Product {
id: number;
name: string;
price: number;
category: string;
stock: number;
createdAt: Date;
}

// Form create tidak perlu id dan createdAt
type ProductForm = Omit<Product, "id" | "createdAt">;

// Form update mungkin hanya perlu beberapa field
type ProductUpdate = Partial<Pick<Product, "price" | "stock">>;

#### 3. GraphQL Selections

GraphQL memungkinkan client memilih fields yang diinginkan. Pick bisa merepresentasikan query selections.

### Combining dengan Utility Types Lain

Pick dan Omit sering dikombinasikan dengan Partial, Required, atau utility types lainnya.

// Partial hanya untuk certain fields
type PartialContact = Partial<Pick<User, "email" | "phone">>;

// Required setelah Omit
type RequiredPublicUser = Required<Omit<User, "password">>;

// Nested Pick
interface Company {
id: number;
name: string;
address: {
street: string;
city: string;
country: string;
};
}

// Pick nested properties
type CompanyLocation = Pick<Company, "address">;
// { address: { street, city, country } }

type CompanyLocationSimple = Pick<Company, "address"> & {
address: Pick<Company["address"], "city" | "country">
};

### Performance & Constraints

- Pick dan Omit adalah **compile-time only** - tidak ada runtime cost

- Property names harus known at compile time (string literals atau union of literals)

- Gunakan `keyof T` untuk dynamic property selection

- Hindari deep nesting dengan Pick/Omit - gunakan custom types untuk complex transformations

## 💻 Exercises

### Exercise 1: API Response Types

Buat DTO types untuk API response.

- Buat interface `UserEntity` dengan fields: id, email, passwordHash, salt, role, permissions

- Buat `UserPublic = Omit<UserEntity, "passwordHash" | "salt">`

- Buat function `toPublicUser(entity: UserEntity): UserPublic`

### Exercise 2: Form Types

Gunakan Pick untuk form inputs.

- Buat interface `Product` dengan banyak fields

- Buat `ProductCreate = Omit<Product, "id" | "createdAt">`

- Buat `ProductUpdate = Partial<Pick<Product, "price" | "stock">>`

- Implement functions untuk create dan update

### Exercise 3: Dynamic Pick

Gunakan keyof untuk flexible property selection.

- Buat function `selectFields<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`

- Test dengan various objects dan property arrays

- Pastikan return type tepat sesuai keys yang diminta

← Previous

Take Quiz
