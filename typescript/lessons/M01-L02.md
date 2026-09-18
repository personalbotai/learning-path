# Access Modifiers: public, private, protected

**Access modifiers** mengontrol visibility dan akses ke class members (properties dan methods). TypeScript menyediakan tiga modifiers: `public` (default), `private`, dan `protected`. Memahami modifiers penting untuk encapsulation dan data protection.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami tiga access modifiers: public, private, protected

-
Menerapkan encapsulation dengan private properties

-
Menggunakan protected untuk subclass akses

-
Memahami default modifier (public)

-
Menggunakan getters/setters untuk controlled access

## 📚 Access Modifiers Overview

Access modifiers menentukan di mana class member bisa diakses. TypeScript menggunakan structural type system, tapi modifiers memberikan runtime-level encapsulation (meski di-compile ke JavaScript, modifiers hanya ada di type-checking phase).

### 1. Public (Default)

Semua class members secara default `public`. Artinya bisa diakses dari mana saja: di dalam class, subclass, atau external code.

```
class User {
// Implicitly public
name: string;
public age: number;

constructor(name: string, age: number) {
this.name = name;
this.age = age;
}

greet(): void {
console.log(`Hello, I'm \${this.name}`);
}
}

const user = new User("Alice", 30);
console.log(user.name); // OK - public
console.log(user.age);  // OK - public
user.greet();          // OK - public
```

### 2. Private

`private` member hanya bisa diakses di dalam class yang mendeklarasikannya. Tidak bisa diakses dari subclass atau external code. Cocok untuk encapsulation dan menyembunyikan implementation details.

```
class BankAccount {
private balance: number;

constructor(initialBalance: number) {
this.balance = initialBalance;
}

deposit(amount: number): void {
if (amount > 0) {
this.balance += amount;
}
}

getBalance(): number {
return this.balance;
}
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500 - OK via public method
// console.log(account.balance); // Error - private
// account.balance = 9999;     // Error - cannot assign
```

### 3. Protected

`protected` member bisa diakses di dalam class **dan subclass-nya**, tapi tidak dari external code. Berguna ketika subclass perlu mengakses parent properties.

```
class Person {
protected ssn: string;

constructor(ssn: string) {
this.ssn = ssn;
}

getSsn(): string {
return this.ssn;
}
}

class Employee extends Person {
employeeId: number;

constructor(ssn: string, id: number) {
super(ssn);
this.employeeId = id;
}

// Can access protected property from parent
identify(): string {
return `Employee \${this.employeeId}, SSN: \${this.ssn}`;
}
}

const emp = new Employee("123-45-6789", 1001);
console.log(emp.identify()); // OK - uses protected ssn
// console.log(emp.ssn);     // Error - protected, external access denied
console.log(emp.getSsn());  // OK - via public getter
```

### Comparison Table

Modifier
Class
Subclass
External

public
✅
✅
✅

protected
✅
✅
❌

private
✅
❌
❌

### Getters dan Setters

TypeScript support getters dan setters untuk controlled access ke properties. Cocok untuk encapsulation sambil menjaga API yang familiar seperti property access.

```
class Temperature {
private _celsius: number;

constructor(celsius: number) {
this._celsius = celsius;
}

// Getter
get celsius(): number {
return this._celsius;
}

// Setter dengan validation
set celsius(value: number) {
if (value < -273.15) {
throw new Error("Temperature below absolute zero!");
}
this._celsius = value;
}

// Computed property
get fahrenheit(): number {
return (this._celsius * 9 / 5) + 32;
}
}

const temp = new Temperature(25);
console.log(temp.celsius);    // 25 - getter
temp.celsius = 30;        // setter
console.log(temp.fahrenheit); // 86 - computed getter
// temp._celsius = -300; // Error - private
```

### Parameter Properties dan Modifiers

Parameter properties bisa dikombinasikan dengan modifiers. Ini otomatis membuat property dengan modifier yang sesuai.

```
class User {
constructor(
public id: number,
private email: string,
protected role: string
) {}

public getInfo(): string {
return `ID: \${this.id}, Role: \${this.role}`;
}
}

const user = new User(1, "alice@example.com", "admin");
console.log(user.id);      // OK - public
// console.log(user.email);  // Error - private
// console.log(user.role);   // Error - protected
console.log(user.getInfo()); // "ID: 1, Role: admin"
```

## 💻 Exercises

### 1. Encapsulated Counter

Buat class `Counter` dengan private property `count: number`. Tambahkan public methods: `increment()`, `decrement()`, dan `getCount(): number`. Pastikan count tidak bisa di-modify langsung dari luar.

### 2. Inheritance dengan Protected

Buat class `Animal` dengan protected property `age: number`. Buat subclass `Dog` yang bisa mengakses `age` di method-nya, tapi external code tidak bisa.

### 3. Temperature dengan Getters/Setters

Buat class `Temperature` dengan private property `_fahrenheit: number`. Buat getter dan setter untuk `celsius` yang otomatis convert ke/dari fahrenheit. Setter celsius harus validate (-273.15 minimum).

← Sebelumnya

Quiz Module →
