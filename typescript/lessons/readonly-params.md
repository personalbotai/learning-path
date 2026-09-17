# Readonly dan Static Properties

**Readonly** modifier mencegah reassignment setelah initial assignment, sedangkan **static** modifier membuat property atau method menjadi milik class itu sendiri (bukan instance). Keduanya penting untuk immutability dan utility functions yang terkait dengan class.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami modifier `readonly`

-
Menggunakan `readonly` pada properties dan array

-
Memahami modifier `static`

-
Membuat static methods dan properties

-
Kombinasi `static readonly`

## 📚 Readonly Properties

`readonly` modifier mencegah reassignment property setelah initial assignment (di declaration atau constructor). Readonly properties ideal untuk constants, configuration values, atau identifier yang tidak seharusnya berubah.

### Basic Readonly Usage

```
class User {
readonly id: number;
name: string;

constructor(id: number, name: string) {
this.id = id;   // OK - first assignment
this.name = name;
}
}

const user = new User(1, "Alice");
console.log(user.id);   // 1
// user.id = 2;      // Error - readonly, cannot reassign
user.name = "Bob";   // OK - not readonly
```

### Readonly dengan Parameter Properties

Kombinasikan `readonly` dengan parameter properties untuk immutable properties yang diassign via constructor.

```
class Config {
constructor(
public readonly apiKey: string,
public readonly endpoint: string,
public timeout: number // not readonly
) {}
}

const config = new Config("sk-123", "https://api.example.com", 5000);
console.log(config.apiKey);    // "sk-123"
// config.apiKey = "sk-456";  // Error - readonly
config.timeout = 10000;      // OK - mutable
```

### Readonly Arrays dan Tuples

`readonly` juga bisa diterapkan pada array dan tuple types. Readonly array tidak bisa di-modify (push, pop, dll).

```
class ShoppingCart {
readonly items: readonly string[] = [];

addItem(item: string): void {
// Error: Property 'push' does not exist on type 'readonly string[]'
// this.items.push(item);

// Workaround: create new array
this.items = [...this.items, item];
}
}

const cart = new ShoppingCart();
cart.addItem("Book");
console.log(cart.items); // ["Book"]
// cart.items.push("Pen"); // Error - readonly array
```

### Static Properties dan Methods

`static` member dimiliki oleh class itu sendiri, bukan instance. Static members diakses langsung dari class: `ClassName.member`. Static tidak bisa diakses via instance.

```
class MathUtils {
static readonly PI = 3.14159265359;

static circleArea(radius: number): number {
return this.PI * radius * radius;
}

static circleCircumference(radius: number): number {
return 2 * this.PI * radius;
}
}

console.log(MathUtils.PI); // 3.14159265359
console.log(MathUtils.circleArea(5)); // 78.539816339745
console.log(MathUtils.circleCircumference(5)); // 31.4159265359

// Cannot access via instance
const utils = new MathUtils();
// console.log(utils.PI); // Error - static only
```

### Static Initialization Order

Static properties di-initialize dalam urutan deklarasi di class. Static fields bisa memiliki initializer expression.

```
class AppConfig {
static VERSION = "1.0.0";
static ENV = process.env.NODE_ENV || "development";
static API_URL = `https://api.\${AppConfig.ENV}.example.com`;
static readonly FEATURES = ["auth", "logging", "metrics"];
}

console.log(AppConfig.VERSION); // "1.0.0"
console.log(AppConfig.API_URL);  // depends on ENV
```

### Static Blocks (ES2022)

TypeScript support `static` blocks untuk inisialisasi static properties yang memerlukan logika lebih dari simple expression. Static block berjalan sekali saat class didefinisikan.

```
class Database {
static connectionCount = 0;

static {
// Complex initialization logic
try {
const config = loadConfig();
Database.config = config;
console.log("Database config loaded");
} catch (error) {
console.error("Failed to load config", error);
}
}

static config: any;
static connect(): boolean {
Database.connectionCount++;
return true;
}
}
```

### Use Cases untuk Static

- **Constants**: `Math.PI`, configuration values

- **Utility functions**: `String.fromCharCode()`, factory methods

- **Counters/Registry**: tracking instances, global state untuk class

- **Singleton pattern**: static instance property

```
// Factory method static
class HttpRequest {
method: string;
url: string;

private constructor(method: string, url: string) {
this.method = method;
this.url = url;
}

static get(url: string): HttpRequest {
return new HttpRequest("GET", url);
}

static post(url: string, body: any): HttpRequest {
const req = new HttpRequest("POST", url);
req.body = body;
return req;
}
}

const req1 = HttpRequest.get("/api/users");
const req2 = HttpRequest.post("/api/users", { name: "Alice" });
```

### Kombinasi Readonly + Static

Static properties juga bisa readonly, biasanya untuk constants yang bersifat global untuk class.

```
class HttpStatus {
static readonly OK = 200;
static readonly NOT_FOUND = 404;
static readonly SERVER_ERROR = 500;

static isSuccess(code: number): boolean {
return code >= 200 && code < 300;
}
}

console.log(HttpStatus.OK);           // 200
console.log(HttpStatus.NOT_FOUND);    // 404
console.log(HttpStatus.isSuccess(200)); // true
// HttpStatus.OK = 201; // Error - readonly
```

## 💻 Exercises

### 1. Immutable Point

Buat class `Point` dengan readonly properties `x: number` dan `y: number`. Tambahkan method `distanceTo(other: Point): number` yang menghitung jarak Euclidean. Pastikan points tidak bisa diubah setelah dibuat.

### 2. Math Constants

Buat class `MathConstants` dengan static readonly properties untuk pi, e, dan golden ratio. Tambahkan static method `circleArea(radius: number): number`. Akses semua melalui class name.

### 3. Counter dengan Static

Buat class `Counter` dengan static property `totalCount: number` yang di-increment setiap instance dibuat. Tambahkan static readonly `DEFAULT_START: number` dan static method `getTotal(): number`.

← Sebelumnya

Quiz Module →
