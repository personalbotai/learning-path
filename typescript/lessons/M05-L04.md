# Inheritance dengan extends dan super

**Inheritance** memungkinkan class mengextend class lain, mewariskan properties dan methods. TypeScript menggunakan kata kunci `extends` untuk inheritance dan `super` untuk mengakses parent class. Inheritance membantu membuat code yang reusable dan organized dengan hirarki yang jelas.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami konsep inheritance dan class hierarchy

-
Menggunakan `extends` untuk membuat subclass

-
Memanggil parent constructor dengan `super()`

-
Override methods dari parent class

-
Memahami aturan tipe untuk inheritance

## 📚 Inheritance Basics

Class anak (subclass) mewarisi semua properties dan methods dari class orang tua (parent). Dengan `extends`, kita bisa membuat class hierarchy yang logis.

### Contoh Sederhana Inheritance

```
class Animal {
constructor(protected name: string) {}
move(distance: number = 0): void {
console.log(`\${this.name} moved \${distance}m`);
}
}

class Dog extends Animal {
bark(): void {
console.log("Woof! Woof!");
}
}

const dog = new Dog("Buddy");
dog.move(10); // Inherited from Animal
dog.bark(); // Dog's own method
```

### Constructor dengan super()

Ketika subclass memiliki constructor, kita harus memanggil `super()` terlebih dahulu sebelum mengakses `this`. `super()` memanggil constructor parent.

```
class Person {
constructor(public name: string, public age: number) {}
}

class Employee extends Person {
public employeeId: number;

constructor(name: string, age: number, id: number) {
super(name, age); // Must call super() first
this.employeeId = id;
}
}

const emp = new Employee("Alice", 30, 1001);
console.log(emp.name); // "Alice" - inherited
console.log(emp.employeeId); // 1001 - own property
```

### Method Overriding

Subclass bisa mengganti (override) method dari parent dengan method yang sama. Gunakan `super.methodName()` untuk memanggil implementation parent.

```
class Shape {
area(): number {
return 0;
}
description(): string {
return "Generic shape";
}
}

class Rectangle extends Shape {
constructor(public width: number, public height: number) {
super();
}

// Override area
area(): number {
return this.width * this.height;
}

// Override description, calling parent version
description(): string {
const parentDesc = super.description();
return \`\${parentDesc} - Rectangle (\${this.width}x\${this.height})\`;
}
}

const rect = new Rectangle(10, 5);
console.log(rect.area()); // 50
console.log(rect.description()); // "Generic shape - Rectangle (10x5)"
```

### Type Checking untuk Inheritance

TypeScript mencek bahwa subclass mematuhi kontrak parent class. Properties dan methods yang diwarisi harus memiliki tipe yang sesuai atau lebih spesifik (Liskov Substitution Principle).

```
class Animal {
name: string;
constructor(name: string) { this.name = name; }
speak(): string { return ""; }
}

class Cat extends Animal {
// Override speak dengan return type yang lebih spesifik (string) - OK
speak(): string {
return "Meow!";
}
}

class Dog extends Animal {
// Error: return type number tidak compatible dengan parent's string
// speak(): number { return 42; }
}
```

### Inheritance dan Access Modifiers

Inheritance mematuhi access modifiers:

- `public` - bisa diakses di mana saja

- `protected` - bisa diakses di class dan subclass

- `private` - hanya di class itu sendiri

```
class Parent {
public pub = "public";
protected prot = "protected";
private priv = "private";
}

class Child extends Parent {
access(): void {
console.log(this.pub);  // OK - public
console.log(this.prot); // OK - protected
// console.log(this.priv); // Error - private
}
}
```

### Multiple Inheritance & Mixins

TypeScript (seperti JavaScript) tidak support multiple inheritance (class hanya bisa extends satu class). Namun, kita bisa mencapai code reuse dengan **mixins** atau composition.

```
// Mixin pattern
type Constructor = new (...args: any[]) => {};

function Timestamped(Base: Constructor) {
return class extends Base {
timestamp = new Date();
getTimestamp(): Date { return this.timestamp; }
};
}

class User {
constructor(public name: string) {}
}

const TimestampedUser = Timestamped(User);
const user = new TimestampedUser("Alice");
console.log(user.name); // "Alice"
console.log(user.getTimestamp()); // Date object
```

## 💻 Exercises

### 1. Vehicle Hierarchy

Buat class `Vehicle` dengan properties `brand: string` dan method `start(): void`. Buat subclass `Car` dan `Motorcycle` yang override method `start()` dengan output berbeda.

### 2. Employee Hierarchy

Buat class `Person` dengan `name: string`. Buat `Employee` yang extends `Person` menambahkan `employeeId: number` dan `department: string`. Pastikan constructor menggunakan `super()` dengan benar.

### 3. Polymorphic Method

Buat class hierarchy: `Shape` (parent) dengan method `area(): number` yang return 0. Buat `Circle` dan `Square` yang extends `Shape` dan override `area()`. Buat array `Shape[]` yang berisi mixed instances, lalu hitung total area.

← Sebelumnya

Quiz Module →
