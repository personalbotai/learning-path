# Generic Interfaces dan Classes

Generics tidak hanya untuk functions - interfaces dan classes juga bisa memiliki type parameters. Generic interfaces mendefinisikan kontrak yang flexible untuk berbagai tipe, sedangkan generic classes memungkinkan class memiliki properties dan methods yang type-agnostic. Ini esensi reusable, type-safe components.

⏱️ 25 menit
📊 Kesulitan: Lanjutan

## 🎯 Tujuan Pembelajaran

-
Mendeklarasi generic interfaces dengan `<T>`

-
Menerapkan generic interfaces ke classes

-
Membuat generic classes dengan type parameters

-
Generic class methods dan properties

-
Default type parameters untuk interfaces/classes

## 📚 Generic Interfaces

Generic interfaces mendefinisikan kontrak yang bisa digunakan dengan berbagai tipe. Mirip dengan generic functions, tambahkan type parameter setelah nama interface.

### Generic Interface Sederhana

```
// Generic interface untuk key-value stores
interface KeyValuePair<K, V> {
key: K;
value: V;
}

const stringNumberPair: KeyValuePair<string, number> = {
key: "age",
value: 30
};

const numberStringPair: KeyValuePair<number, string> = {
key: 1,
value: "one"
};
```

### Generic Interface untuk Collections

```
interface Repository<T> {
findById(id: number): T | null;
findAll(): T[];
save(entity: T): void;
delete(id: number): boolean;
}

interface User {
id: number;
name: string;
email: string;
}

// UserRepository implements Repository<User>
class UserRepository implements Repository<User> {
private users: User[] = [];

findById(id: number): User | null {
return this.users.find(u => u.id === id) || null;
}

findAll(): User[] {
return this.users;
}

save(entity: User): void {
this.users.push(entity);
}

delete(id: number): boolean {
const index = this.users.findIndex(u => u.id === id);
if (index !== -1) {
this.users.splice(index, 1);
return true;
}
return false;
}
}
```

### Generic Classes

Generic classes memiliki type parameters yang berlaku untuk seluruh class. Properties dan methods bisa menggunakan type parameter tersebut.

```
// Generic class - a simple wrapper
class Box<T> {
constructor(private value: T) {}

getValue(): T {
return this.value;
}

setValue(value: T): void {
this.value = value;
}
}

const stringBox = new Box<string>("hello");
console.log(stringBox.getValue()); // "hello"

const numberBox = new Box(42); // Type inferred
console.log(numberBox.getValue()); // 42
```

### Generic Class dengan Multiple Type Parameters

```
class Pair<T, U> {
constructor(
public first: T,
public second: U
) {}

public toString(): string {
return `(\${this.first}, \${this.second})`;
}

// Generic method within generic class
public static create<V>(first: V, second: V): Pair<V, V> {
return new Pair(first, second);
}
}

const pair1 = new Pair("Alice", 30);
console.log(pair1.toString()); // "(Alice, 30)"

const pair2 = Pair.create(1, 2); // Pair<number, number>
```

### Generic Constraints (Brief Intro)

Generic type parameters bisa dibatasi dengan `extends` ke certain tipe. Ini akan dibahas lebih detail di lesson berikutnya.

```
// Constrain T to have a 'length' property
function logLength<T extends { length: number }>(arg: T): void {
console.log(`Length: \${arg.length}`);
}

logLength("hello");  // OK - string has length
logLength([1, 2]);    // OK - array has length
// logLength(123); // Error - number doesn't have length
```

### Default Type Parameters

Generic type parameters bisa memiliki default values. Berguna ketika kebanyakan penggunaan menggunakan tipe yang sama.

```
interface Config<T = string> {
key: T;
value: T;
}

// T defaults to string
const config1: Config = { key: "host", value: "localhost" }; // Config<string>

// Explicit override
const config2: Config<number> = { key: 1, value: 8080 };
```

### Real-World Example: API Response Wrapper

```
interface ApiResponse<T> {
success: boolean;
data: T | null;
error?: string;
timestamp: Date;
}

function fetchUser(id: number): Promise<ApiResponse<User>> {
return new Promise((resolve) => {
const user: User = { id, name: "Alice", email: "alice@example.com" };
resolve({
success: true,
data: user,
timestamp: new Date()
});
});
}
```

## 💻 Exercises

### 1. Generic Stack

Buat generic class `Stack<T>` dengan methods: `push(item: T)`, `pop(): T | undefined`, `peek(): T | undefined`, `isEmpty(): boolean`. Test dengan tipe berbeda.

### 2. Generic Dictionary

Buat generic interface `Dictionary<T>` yang mirip `Record<string, T>` tapi dengan index signature. Implementasikan class `SimpleDictionary` yang mengimplementasikan interface tersebut.

### 3. Default Generic Parameter

Buat generic interface `Cache` dengan default type `any`. Buat class `MemoryCache` yang mengimplementasikan `Cache` tanpa specifying tipe (harus menggunakan default).

← Sebelumnya

Quiz Module →
