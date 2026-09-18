# Generic Constraints

**Generic constraints** membatasi type parameters ke tipe yang memenuhi kondisi tertentu, menggunakan keyword `extends`. Constraints memastikan generic code memiliki akses ke properties dan methods yang dibutuhkan, memberikan type safety tanpa loss flexibility.

⏱️ 20 menit
📊 Kesulitan: Lanjutan

## 🎯 Tujuan Pembelajaran

-
Memahami kebutuhan generic constraints

-
Menggunakan `extends` untuk membatasi type parameter

-
Constrain ke specific tipe, interface, atau class

-
Keyof constraint untuk membatasi ke property names

-
Multiple constraints dengan intersection types

## 📚 Why Constraints?

Tanpa constraints, generic code hanya bisa menggunakan methods yang tersedia di semua tipe (seperti `any`). Constraints memungkinkan kita mengatakan "T harus memiliki property X" atau "T harus extends interface Y".

### The Problem: Unconstrained Generic

```
// Error: Property 'length' does not exist on type 'T'
// because T could be anything (number, boolean, etc.)
function logLength<T>(arg: T) {
// console.log(arg.length); // Compile error!
}
```

### Constraint dengan extends

Gunakan `extends` untuk menargetkan tipe yang memiliki property tertentu.

```
// Constrain T to types that have a 'length' property
function logLength<T extends { length: number }>(arg: T): void {
console.log(`Length: \${arg.length}`);
}

// OK - string has length
logLength("hello");

// OK - array has length
logLength([1, 2, 3]);

// Error - number doesn't have length property
// logLength(123);
```

### Constrain ke Interface atau Class

```
interface Named {
name: string;
}

function greet<T extends Named>(entity: T): string {
return `Hello, \${entity.name}!`;
}

class Person implements Named {
constructor(public name: string) {}
}

interface Animal {
species: string;
}

// OK - Person has 'name'
greet(new Person("Alice"));

// Error - Animal doesn't have 'name'
// greet({ species: "cat" });
```

### Constrain Multiple Type Parameters

Setiap type parameter bisa memiliki constraintnya sendiri.

```
function merge<
T extends { id: number },
U extends { name: string }
>(obj1: T, obj2: U): T & U {
return { ...obj1, ...obj2 };
}

const result = merge(
{ id: 1, age: 30 },      // T has 'id'
{ name: "Alice", city: "NY" } // U has 'name'
);
console.log(result.id, result.name); // OK
```

### keyof Constraint

`keyof` constraint membatasi type parameter ke property names dari sebuah tipe. Berguna untuk functions yang mengambil property name sebagai parameter.

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

interface User {
id: number;
name: string;
email: string;
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" };

// OK - "name" is a key of User
const name = getProperty(user, "name"); // string

// Error - "age" is not a key of User
// getProperty(user, "age");
```

### Class Constraints

Generic class juga bisa memiliki constraints. Properties dan methods akan memiliki akses ke members dari constrained tipe.

```
class Repository<T extends { id: number }> {
private items: T[] = [];

add(item: T): void {
this.items.push(item);
}

findById(id: number): T | undefined {
return this.items.find(item => item.id === id);
}
}

interface Product {
id: number;
name: string;
}

const productRepo = new Repository<Product>();
productRepo.add({ id: 1, name: "Laptop" });
console.log(productRepo.findById(1));
```

## 💻 Exercises

### 1. Property Getter

Buat generic function `get<T, K extends keyof T>(obj: T, key: K): T[K]` yang mengembalikan nilai property. Test dengan object yang memiliki properties various tipe.

### 2. Filter by Property

Buat function `filterByProperty<T>(arr: T[], prop: keyof T, value: T[typeof prop]): T[]` yang filter array of objects berdasarkan property tertentu.

### 3. Callable with Specific Methods

Buat function `callMethod<T extends { execute(): void }>(obj: T): void` yang memanggil method `execute()` pada objek. Buat dua classes dengan method `execute()` dan test function tersebut.

← Sebelumnya

Quiz Module →
