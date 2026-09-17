# Partial & Required Utility Types

**Partial<T>** dan **Required<T>** adalah utility types yang membalikkan optionality properties dari interface atau type. Partial membuat semua properties optional, sedangkan Required membuat semua properties required.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami fungsi Partial<T> untuk membuat semua properties optional

-
Menggunakan Required<T> untuk memaksa semua properties menjadi required

-
Menerapkan Partial dalam function parameters (update operations)

-
Memahami bagaimana utility types bekerja dengan mapped types

## 📚 Konten Utama

### Partial<T>

`Partial<T>` membuat semua properties dari type `T` menjadi optional. Berguna untuk operations seperti **update** atau **patch** di mana tidak semua field perlu dikirim.

#### Contoh Sederhana

interface User {
id: number;
name: string;
email: string;
age?: number;
}

// Partial membuat semua properties optional
type PartialUser = Partial<User>;

// Setara dengan:
type PartialUser = {
id?: number;
name?: string;
email?: string;
age?: number;
};

const updateData: PartialUser = {
name: "Alice Updated"  // ✅ OK - hanya name, lain optional
};

### Required<T>

`Required<T>` melakukan sebaliknya: membuat semua optional properties menjadi required. Berguna ketika Anda ingin memastikan semua fields terisi setelah某些 operations.

interface Config {
host?: string;
port?: number;
timeout?: number;
}

// Required membuat semua required
type StrictConfig = Required<Config>;

// Setara dengan:
type StrictConfig = {
host: string;
port: number;
timeout: number;
};

function validateConfig(config: StrictConfig) {
// TypeScript memastikan host, port, timeout semua ada
}

### Use Case: Update Function dengan Partial

Pola umum: fungsi update yang menerima partial object dan mengembalikan full object.

interface Product {
id: number;
name: string;
price: number;
stock: number;
}

function updateProduct(
id: number,
updates: Partial<Product>  // Hanya fields yang ingin diupdate
): Product {
const product = getProductById(id);
return { ...product, ...updates };
}

// Usage:
updateProduct(1, { price: 199000 });  // ✅ OK
updateProduct(2, {});                    // ✅ OK - empty update
updateProduct(3, { id: 5 });     // ❌ Error: id readonly? (see Readonly later)

### Menggabungkan dengan Omit & Pick

Partial sering dikombinasikan dengan utility types lain untuk presisi:

// Partial hanya untuk certain properties
type PartialNameAndEmail = Partial<Pick<User, "name" | "email">>;

// Atau exclude某些 properties dari Partial
type PartialWithoutId = Partial<Omit<User, "id">>;

### Implementation Insight

`Partial` dan `Required` menggunakan mapped types di balik layar:

// Sebenarnya TypeScript built-in definitions:
type Partial<T> = {
[P in keyof T]?: T[P];
};

type Required<T> = {
[P in keyof T]-?: T[P];
};

Operator `-?` menghapus optional modifier, sedangkan `?` menambahkannya.

### Pitfalls & Considerations

- `Partial<T>` tidak mengubah existing optional properties (tetap optional)

- Hati-hati dengan `Required<T>` pada deeply nested objects - hanya bekerja di level pertama

- Gunakan `-?` dan `+?` modifiers untuk control optionality pada custom mapped types

## 💻 Exercises

### Exercise 1: API Response Handler

Buat function yang menerima partial user data dan mengembalikan complete User.

- Define interface User dengan 5 properties (some optional)

- Buat function `mergeUser(base: User, patch: Partial<User>): User`

- Test dengan berbagai partial inputs

### Exercise 2: Config Validation

Gunakan Required untuk enforce config completeness.

- Buat interface Config dengan beberapa optional properties

- Buat function yang accept Partial<Config> tapi return Required<Config>

- Implement logic untuk fill default values untuk properties yang missing

### Exercise 3: Advanced Combination

Kombinasikan Partial dengan Pick/Omit.

- Buat type `PartialContactInfo = Partial<Pick<User, "email" | "phone">>`

- Buat function updateContact yang hanya menerima email/phone updates

- Pastikan type safety memblokir properties lain

← Previous

Take Quiz
