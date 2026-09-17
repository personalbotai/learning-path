# Abstract Classes dan Methods

**Abstract classes** adalah class yang tidak bisa di-instansiasi langsung dan mungkin berisi **abstract methods** (methods tanpa implementation) yang harus diimplementasikan oleh subclass. Abstract classes digunakan sebagai blueprint untuk class lain, memastikan struktur dan kontrak yang konsisten dalam inheritance hierarchy.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami konsep abstract classes

-
Mendeklarasi abstract class dengan keyword `abstract`

-
Membuat abstract methods tanpa implementation

-
Mengimplementasikan abstract methods di subclass

-
Memahami kapan menggunakan abstract classes vs interfaces

## 📚 Abstract Classes Fundamentals

Abstract class adalah class yang dirancang hanya untuk di-extend, tidak untuk di-instansiasi. Abstract class bisa berisi:

- Concrete methods (dengan implementation)

- Abstract methods (tanpa implementation, harus di-override)

- Properties (concrete atau abstract)

- Constructor (untuk subclass `super()`)

### Mendeklarasi Abstract Class

Gunakan keyword `abstract` sebelum `class`.

```
abstract class Animal {
abstract makeSound(): void; // Abstract method - no body

constructor(protected name: string) {}

// Concrete method - with implementation
move(): void {
console.log(`\${this.name} is moving`);
}
}

// Error: Cannot create an instance of an abstract class.
// const animal = new Animal("Generic");

class Dog extends Animal {
constructor(name: string) {
super(name);
}

// Must implement abstract method
makeSound(): void {
console.log("Woof!");
}
}

const dog = new Dog("Buddy");
dog.move();      // Inherited concrete method
dog.makeSound(); // Implemented abstract method
```

### Abstract Methods

Abstract methods dideklarasikan tanpa body (hanya signature). Subclass **wajib** mengimplementasikan semua abstract methods dari parent abstract class.

```
abstract class Shape {
abstract area(): number; // No implementation
abstract perimeter(): number;

// Concrete method (optional)
description(): string {
return `Area: \${this.area()}, Perimeter: \${this.perimeter()}`;
}
}

class Rectangle extends Shape {
constructor(
public width: number,
public height: number
) {
super();
}

// Implement both abstract methods
area(): number {
return this.width * this.height;
}

perimeter(): number {
return 2 * (this.width + this.height);
}
}

const rect = new Rectangle(10, 5);
console.log(rect.description()); // "Area: 50, Perimeter: 30"
```

### Abstract Properties

Abstract properties dideklarasikan tanpa initialization. Subclass harus mendeklarasikan dan menginisialisasi property tersebut.

```
abstract class Database {
abstract connectionString: string; // Abstract property

abstract connect(): boolean;

query(sql: string): any {
if (!this.connect()) {
throw new Error("Not connected");
}
return { rows: [] };
}
}

class PostgresDB extends Database {
// Must implement abstract property
connectionString = "postgresql://localhost/db";

connect(): boolean {
console.log(`Connecting to \${this.connectionString}`);
return true;
}
}
```

### Abstract vs Interface

Abstract classes dan interfaces mirip, tapi ada perbedaan penting:

- **Abstract class**: Bisa memiliki concrete methods, constructor, fields. Hanya bisa extends satu class.

- **Interface**: Hanya deklarasi (no implementation), bisa di-implements oleh banyak class, multiple interfaces.

- Gunakan abstract class saat ingin share code (reusable methods) atau membutuhkan constructor.

- Gunakan interface untuk defining contracts tanpa implementation, atau multiple inheritance.

```
// Abstract class - with shared implementation
abstract class Logger {
abstract log(message: string): void;

// Shared helper method
protected format(timestamp: Date, message: string): string {
return `[\${timestamp.toISOString()}] \${message}`;
}
}

// Interface - pure contract
interface ILogger {
log(message: string): void;
}

class ConsoleLogger extends Logger {
log(message: string): void {
console.log(this.format(new Date(), message));
}
}

class FileLogger implements ILogger {
log(message: string): void {
// Write to file...
}
}
```

### Abstract Classes dengan Generic

Abstract classes bisa menggunakan generic parameters untuk membuat reusable abstraksi.

```
abstract class Repository<T> {
abstract entityName: string;

abstract findById(id: number): T | null;

abstract save(entity: T): void;

// Shared concrete method
protected log(message: string): void {
console.log(`[\${this.entityName}] \${message}`);
}
}

class User {
id = 0;
name = "";
}

class UserRepository extends Repository<User> {
entityName = "User";

findById(id: number): User | null {
return new User();
}

save(entity: User): void {
this.log(`Saving user \${entity.name}`);
}
}
```

### Important Rules

- Abstract classes tidak bisa di-instansiasi langsung (`new AbstractClass()` akan error).

- Subclass dari abstract class harus mengimplementasikan semua abstract methods.

- Abstract methods tidak bisa memiliki `private` modifier (karena subclass perlu mengaksesnya).

- Abstract class bisa memiliki constructor, yang akan dipanggil oleh subclass via `super()`.

## 💻 Exercises

### 1. Shape Hierarchy

Buat abstract class `Shape` dengan abstract methods `area(): number` dan `perimeter(): number`. Buat concrete classes `Circle` dan `Square` yang extends `Shape` dan mengimplementasikan kedua methods tersebut.

### 2. Payment Processor

Buat abstract class `PaymentMethod` dengan abstract method `process(amount: number): boolean` dan concrete method `validate(): boolean` (return true/false based on some logic). Buat subclass `CreditCard` dan `PayPal` yang implement `process()`.

### 3. Template Method Pattern

Buat abstract class `ReportGenerator` dengan template method `generate(): string` (concrete) yang memanggil abstract steps: `fetchData(): any[]`, `format(data: any[]): string`, dan `header(): string`. Buat subclass `JsonReport` dan `HtmlReport` yang mengimplementasikan steps berbeda.

← Sebelumnya

Quiz Module →
