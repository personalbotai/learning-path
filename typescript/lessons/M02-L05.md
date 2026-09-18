# Constructor Parameter Properties

**Parameter properties** adalah fitur TypeScript yang mengurangi boilerplate code dengan otomatis membuat dan mengassign class properties langsung dari constructor parameters. Dengan menambahkan modifier (`public`, `private`, `protected`, `readonly`) pada constructor parameter, TypeScript akan otomatis membuat property dengan modifier tersebut.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami konsep parameter properties

-
Mengurangi boilerplate code dengan parameter properties

-
Menggunakan modifiers pada constructor parameters

-
Memahami aturan dan batasan parameter properties

-
Menerapkan parameter properties dengan access modifiers

## 📚 Parameter Properties Explained

Tanpa parameter properties, kita harus mendeklarasikan properties dan mengassignnya di constructor secara manual. Parameter properties menggabungkan deklarasi property dan assignment dalam satu langkah.

### Traditional Approach (Tanpa Parameter Properties)

```
class Person {
public name: string;
public age: number;

constructor(name: string, age: number) {
this.name = name;  // Manual assignment
this.age = age;    // Manual assignment
}
}
```

### With Parameter Properties

Tambahkan modifier pada constructor parameter, dan TypeScript otomatis membuat property dengan modifier tersebut dan mengassign nilai.

```
class Person {
// Parameter properties - properties auto-created
constructor(
public name: string,
public age: number
) {} // No body needed for assignment
}

const person = new Person("Alice", 30);
console.log(person.name); // "Alice" - property exists!
console.log(person.age);  // 30
```

### Modifiers on Parameter Properties

Parameter properties bisa menggunakan **semua access modifiers**: `public`, `private`, `protected`, `readonly`, atau kombinasi seperti `public readonly`.

```
class User {
constructor(
public readonly id: number,
private email: string,
protected role: string
) {}

public getInfo(): string {
return `ID: \${this.id}, Role: \${this.role}`;
}
}

const user = new User(1, "alice@example.com", "admin");
console.log(user.id);      // OK - public & readonly
console.log(user.getInfo()); // "ID: 1, Role: admin"
// console.log(user.email);  // Error - private
// user.id = 2;             // Error - readonly
```

### Real-World Example: Service Class

```
class DatabaseService {
constructor(
private connectionString: string,
public readonly serviceName: string,
protected timeout: number = 5000
) {}

private connect(): boolean {
console.log(`Connecting to \${this.connectionString}`);
return true;
}

public query(sql: string): any {
if (!this.connect()) {
throw new Error("Connection failed");
}
return { data: [], rows: 0 };
}
}

const db = new DatabaseService("postgresql://localhost/db", "UserService");
console.log(db.serviceName); // "UserService" - public readonly
// console.log(db.connectionString); // Error - private
db.query("SELECT * FROM users");
```

### When to Use Parameter Properties

Parameter properties sangat berguna ketika:

- Class properties hanya perlu diassign dari constructor

- Tidak ada logika khusus di constructor

- Ingin mengurangi boilerplate code

- Properties memiliki modifier yang jelas

Namun, jika constructor memerlukan logika bisnis (validasi, transformasi, side effects), maka assignment manual lebih tepat.

```
// Bukan parameter properties - manual assignment with logic
class Order {
private _total: number;

constructor(items: OrderItem[], taxRate: number) {
const subtotal = items.reduce((sum, item) => sum + item.price, 0);
this._total = subtotal * (1 + taxRate); // Calculate with logic
}

get total(): number {
return this._total;
}
}
```

### Combining with Getter/Setter

Parameter properties bisa digunakan bersama getters dan setters untuk encapsulation yang lebih baik.

```
class Product {
constructor(
public readonly sku: string,
private _price: number
) {}

// Getter for computed property
get priceWithTax(taxRate: number): number {
return this._price * (1 + taxRate);
}
}

const product = new Product("SKU-001", 100);
console.log(product.sku); // "SKU-001" - readonly
console.log(product.priceWithTax(0.1)); // 110
// product.sku = "SKU-002"; // Error - readonly
```

## 💻 Exercises

### 1. Simple User

Buat class `User` menggunakan parameter properties dengan `public readonly id: number` dan `public name: string`. Coba ubah `id` setelah instance dibuat - observasi error.

### 2. Service dengan Private Config

Buat class `ApiService` dengan parameter properties: `private apiKey: string`, `public baseUrl: string`. Tambahkan method `get(endpoint: string)` yang mengembalikan full URL. Pastikan apiKey tidak bisa diakses dari luar.

### 3. Refactor Traditional to Parameter Properties

Berikut class tradisional:

```
class Rectangle {
width: number;
height: number;

constructor(width: number, height: number) {
this.width = width;
this.height = height;
}

area(): number { return this.width * this.height; }
}
```

Refactor menjadi menggunakan parameter properties. Tambahkan modifier `readonly` jika appropriate.

← Sebelumnya

Quiz Module →
