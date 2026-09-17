# Class Dasar

**Class** adalah blueprint untuk membuat objects yang memiliki properties dan methods. TypeScript menambahkan **type annotations** ke class members, memungkinkan type checking yang ketat pada constructors, properties, dan methods. Classes di TypeScript kompatibel dengan JavaScript ES6+ dan mendukung fitur seperti modifiers, inheritance, dan abstract classes.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami konsep class dan object di TypeScript

-
Mendefinisikan class dengan properties bertipe

-
Menggunakan constructor dengan parameter properties

-
Memahami access modifiers (public, private, protected)

-
Membuat dan menginisialisasi object instances

## 📚 Pengenalan Class

Class di TypeScript adalah turunan dari class JavaScript ES6 dengan tambahan **static typing**. Class berisi:

- **Properties** - variabel yang menyimpan data

- **Constructor** - method khusus yang dipanggil saat instance dibuat

- **Methods** - fungsi yang beroperasi pada class data

- **Access Modifiers** - mengontrol visibilitas (public, private, protected)

### Class Sederhana

```
class Person {
// Properties dengan type annotations
public name: string;
public age: number;
private id: number;

// Constructor untuk inisialisasi
constructor(name: string, age: number, id: number) {
this.name = name;
this.age = age;
this.id = id;
}

// Method
public greet(): void {
console.log(`Hello, I'm ${this.name}`);
}
}

// Membuat instance
const person = new Person("Alice", 30, 1001);
person.greet(); // Output: Hello, I'm Alice
console.log(person.name); // OK - public
// console.log(person.id); // Error - private
```

### Parameter Properties

TypeScript menyediakan shortcut called **parameter properties** yang otomatis membuat dan mengassign properties dari constructor parameters. Ini mengurangi boilerplate code secara signifikan.

```
class Product {
// Parameter properties - otomatis create & assign
constructor(
public readonly name: string,
private price: number,
protected stock: number
) {}

public getPriceWithTax(taxRate: number): number {
return this.price * (1 + taxRate);
}
}

const laptop = new Product("Laptop", 15000000, 50);
console.log(laptop.name); // OK - public & readonly
// console.log(laptop.price); // Error - private
// console.log(laptop.stock); // Error - protected (hanya bisa diakses di subclass)
```

### Readonly Properties

Gunakan modifier `readonly` untuk properties yang hanya dapat diassign di declaration atau di constructor. Setelah initialization, nilai tidak bisa diubah.

```
class User {
readonly id: number;
name: string;

constructor(id: number, name: string) {
this.id = id; // OK
this.id = id + 1; // Error - readonly
this.name = name;
}
}
```

### Static Properties dan Methods

`static` modifier membuat property atau method milik class itu sendiri, bukan instance. Static members diakses langsung dari class.

```
class MathUtils {
static readonly PI = 3.14159;

static circleArea(radius: number): number {
return this.PI * radius * radius;
}
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.circleArea(5)); // 78.53975
```

### Class Expressions

Seperti function expressions, class juga bisa didefinisikan sebagai expression, bahkan dengan type annotation.

```
// Class expression tanpa nama
const Animal = class {
constructor(public name: string) {}
makeSound(): void {
console.log("Generic sound");
}
};

const dog = new Animal("Doggo");
dog.makeSound();

// Class expression dengan type annotation
type AnimalClass = new (name: string) => void;
const Cat: AnimalClass = class {
constructor(public name: string) {}
makeSound(): void {
console.log("Meow!");
}
};
```

### Type Annotations pada Class

TypeScript akan meninfer tipe untuk class properties dan method returns jika tidak diannotasi, tetapi explicit type annotations sangat dianjurkan untuk readability dan safety.

```
class BankAccount {
// Explicit type annotations
owner: string;
balance: number;
transactions: Array<Date>;

constructor(owner: string, initialBalance: number) {
this.owner = owner;
this.balance = initialBalance;
this.transactions = [];
}

deposit(amount: number): void {
this.balance += amount;
this.transactions.push(new Date());
}

getBalance(): number {
return this.balance;
}
}
```

## 💻 Exercises

### 1. Student Class

Buat class `Student` dengan properties: `id: number`, `name: string`, `grades: number[]`. Tambahkan method `addGrade(grade: number)` dan `getAverage(): number`.

### 2. Readonly Product

Buat class `Product` dengan `readonly` properties `sku: string` dan `name: string`. Coba ubah nilai di constructor setelah assignment - observasi error.

### 3. Static Counter

Buat class `Order` dengan static property `orderCount: number` yang di-increment setiap kali instance baru dibuat. Tambahkan static method `getTotalOrders(): number`.

← Sebelumnya

Quiz Module →
