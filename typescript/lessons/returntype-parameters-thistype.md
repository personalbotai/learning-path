# ReturnType, Parameters, ConstructorParameters, dan ThisType

TypeScript menyediakan **utility types** tingkat lanjut untuk bekerja dengan tipe fungsi dan konstruktor. Di lesson ini, kita akan mempelajari `ReturnType<T>`, `Parameters<T>`, `ConstructorParameters<T>`, dan `ThisType<T>` - utility types yang memungkinkan kita mengekstrak dan memanipulasi tipe dari function signatures.

⏱️ 25 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Utility Types

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan lesson ini, kamu akan mampu:

-

Menggunakan `ReturnType<T>` untuk mengambil tipe return dari sebuah fungsi

-

Menerapkan `Parameters<T>` untuk mendapatkan tuple tipe parameter fungsi

-

Menggunakan `ConstructorParameters<T>` untuk konstruktor class

-

Memahami `ThisType<T>` untuk typing this context di object literals

-

Mengintegrasikan utility types ini dalam aplikasi real-world

## 📚 Konsep Inti

### 1. ReturnType<T>

`ReturnType<T>` mengambil tipe return dari sebuah **function type**. Utility type ini sangat berguna ketika kita ingin membuat tipe yang sesuai dengan return value dari fungsi yang sudah ada.

```
// Contoh: Mengambil tipe return dari fungsi
function calculateTotal(price: number, quantity: number): number {
return price * quantity;
}

// ReturnType menghasilkan tipe 'number'
type TotalType = ReturnType<typeof calculateTotal>; // number

const result: TotalType = calculateTotal(100, 3); // OK

// Error: ReturnType hanya bisa digunakan pada function type
interface User { name: string; }
type UserReturnType = ReturnType<User>; // Error: Type 'User' does not satisfy the constraint '(...args: any) => any'
```

### 2. Parameters<T>

`Parameters<T>` menghasilkan **tuple** yang berisi tipe-tipe parameter dari sebuah fungsi. Ini sangat berguna untuk membuat higher-order functions yang perlu merekonstruksi parameter.

```
// Contoh: Mengambil tuple parameter dari fungsi
function createUser(name: string, age: number, email: string): User {
return { name, age, email };
}

// Parameters menghasilkan tuple [string, number, string]
type CreateUserParams = Parameters<typeof createUser>;

// Bisa digunakan untuk memvalidasi argumen
function validateCreateUser(...args: CreateUserParams): boolean {
const [name, age, email] = args;
return name.length > 0 && age > 0 && email.includes('@');
}

// Higher-order function yang meneruskan parameter
function wrapWithLogging(fn: (...args: Parameters<typeof fn>) => ReturnType<typeof fn>) {
return (...args: Parameters<typeof fn>) => {
console.log(`Calling with: `, args);
return fn(...args);
};
}
```

### 3. ConstructorParameters<T>

`ConstructorParameters<T>` bekerja seperti `Parameters<T>` tetapi untuk **constructor** atau class. Ia menghasilkan tuple parameter konstruktor.

```
class Person {
constructor(public name: string, private age: number) {}
}

// ConstructorParameters menghasilkan [string, number]
type PersonConstructorParams = ConstructorParameters<typeof Person>; // [string, number]

// Factory function menggunakan ConstructorParameters
function createInstance<T extends new(...args: any[]) => any>(cls: T, ...args: ConstructorParameters<T>): InstanceType<T> {
return new cls(...args);
}

const person = createInstance(Person, "Budi", 30); // Person
```

### 4. ThisType<T>

`ThisType<T>` adalah utility type khusus untuk mengontrol tipe `this` dalam **object literals**. Ia hanya berfungsi ketika `--noImplicitThis` option diaktifkan di tsconfig.json.

```
// Contoh: ThisType untuk mengontrol 'this' di object literal
interface Calculator {
(value: number): number;
currentValue: number;
reset(): void;
}

function createCalculator(initialValue: number = 0): Calculator {
let current = initialValue;

// Gunakan ThisType untuk memberi tahu TypeScript
// bahwa 'this' di object literal memiliki tipe Calculator
const calc: ThisType<Calculator> = {
currentValue: current,
reset: function() {
this.currentValue = 0; // OK: 'this' memiliki tipe Calculator
},
[Symbol.toPrimitive]: function() {
return this.currentValue; // OK
}
};

// Tambahkan method callable
(calc as any).apply = function(value: number) {
this.currentValue += value;
return this.currentValue;
};

return calc as Calculator;
}

const calc = createCalculator(10);
console.log(calc(5)); // 15
calc.reset();
console.log(calc.currentValue); // 0
```

#### 💡 When to Use These Utility Types

- **ReturnType**: Saat membuat wrapper functions atau ingin mengetahuai return type dari existing function tanpa manual define ulang.

- **Parameters**: Untuk higher-order functions, middleware, atau decorator yang perlu mempertahankan signature asli.

- **ConstructorParameters**: Factory functions, dependency injection containers, atau reflection utilities.

- **ThisType**: Saat membuat object literals dengan methods yang menggunakan `this`, seperti builder pattern atau configuration objects.

### 5. Real-World Application: API Client Wrapper

Mari lihat contoh praktis menggabungkan utility types ini untuk membuat type-safe API client wrapper.

```
// API function definitions
interface ApiMethods {
getUser(id: number): Promise<User>;
createUser(data: CreateUserDto): Promise<User>;
updateUser(id: number, data: UpdateUserDto): Promise<User>;
deleteUser(id: number): Promise<void>;
}

const api: ApiMethods = {
// implementation...
};

// Type-safe wrapper dengan logging
function withLogging<T extends keyof ApiMethods>(methodName: T): ReturnType<ApiMethods[T]> {
return async (...args: Parameters<ApiMethods[T]>): Promise<ReturnType<ApiMethods[T]>> => {
console.log(`Calling ${String(methodName)} with: `, args);
const result = await api[methodName](...args);
console.log(`Result: `, result);
return result;
};
}

// Penggunaan: Type tetap terjaga!
const loggedGetUser = withLogging("getUser");
// loggedGetUser(id: number): Promise<User> - type aman!
const user = await loggedGetUser(123);
```

#### ⚠️ Common Pitfalls

- `ReturnType` dan `Parameters` hanya bisa digunakan pada **function types**, bukan pada interface atau type lain.

- Hasil dari `Parameters` adalah **readonly tuple** - tidak bisa di-modify.

- `ThisType` tidak berfungsi pada regular functions, hanya object literals dengan contextual typing.

- Hindari nested utility types yang terlalu dalam - bisa menyebabkan performance issues pada type checking.

## 💪 Latihan Praktek

### Latihan 1: Event Handler Type

Buat utility type `EventHandler` menggunakan `Parameters` dan `ReturnType` yang mengekstrak signature dari event handler function dan menghasilkan type yang sesuai untuk addEventListener.

Petunjuk: Gunakan `Parameters<T>[0]` untuk mengambil tipe event object.

### Latihan 2: Constructor Factory

Buat generic factory function `createInstance` yang menerima class constructor dan argument, menggunakan `ConstructorParameters` untuk type safety.

### Latihan 3: Builder Pattern dengan ThisType

Implementasikan builder pattern untuk membuat object complex menggunakan `ThisType` agar method chaining memiliki type inference yang benar.

## 📝 Quiz: Utility Types Lanjutan

Jawab pertanyaan berikut untuk menguji pemahaman kamu tentang ReturnType, Parameters, ConstructorParameters, dan ThisType.

Quiz akan dimuat setelah semua lesson diselesaikan. Pastikan kamu telah menyelesaikan semua materi di lesson ini.

← Lesson Sebelumnya

Lesson Berikutnya →
