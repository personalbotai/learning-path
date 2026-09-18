# Interface Dasar

**Interface** adalah salah satu cara utama untuk mendefinisikan kontrak (contract) atau blueprint untuk object di TypeScript. Interface mendefinisikan properti-properti dan methods yang harus dimiliki oleh object yang mengimplementasikannya.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Interfaces

##
1
Tujuan Pembelajaran

-
Memahami apa itu interface dan kapan menggunakannya

-
Mendefinisikan interface dengan properti dan methods

-
Menggunakan interface untuk type annotation pada variables, parameters, dan return types

-
Memahami structural typing (duck typing) di TypeScript

##
2
Penjelasan

Interface adalah cara untuk mendefinisikan "bentuk" object. Interface mendeklarasikan properti-properti dan methods yang harus ada. Object yang memiliki bentuk yang sama (memiliki semua properti dan methods yang dideklarasikan) dianggap mengimplementasikan interface tersebut, tanpa perlu explicit `implements` keyword (structural typing).

### Mendefinisikan Interface Dasar

```
// Interface untuk User
interface User {
id: number;
name: string;
email: string;
isActive: boolean;
}

// Object yang sesuai dengan interface User
const user: User = {
id: 1,
name: "Alice",
email: "alice@example.com",
isActive: true
};  // OK

// Object tanpa properti 'email' akan error
// const badUser: User = { id: 2, name: "Bob", isActive: false }; // Error
```

### Interface dengan Methods

```
interface Calculator {
add(a: number, b: number): number;
subtract(a: number, b: number): number;
}

const calc: Calculator = {
add: (a, b) => a + b,
subtract: (a, b) => a - b
};  // OK
```

### Structural Typing (Duck Typing)

TypeScript menggunakan structural typing: jika object memiliki semua properti yang dideklarasikan dalam interface, maka object tersebut dianggap compatible dengan interface tersebut, bahkan tanpa explicit `implements`.

```
interface Point {
x: number;
y: number;
}

function distance(p: Point): number {
return Math.sqrt(p.x * p.x + p.y * p.y);
}

// Object literal dengan properti x dan y compatible dengan Point
const p = { x: 3, y: 4 };
distance(p);  // OK - structural compatibility
```

### Explicit Implementation dengan `implements`

```
interface Animal {
name: string;
speak(): void;
}

// Class mengimplementasikan interface
class Dog implements Animal {
name: string;

constructor(name: string) {
this.name = name;
}

speak() {
console.log("Woof! I'm", this.name);
}
}
```

### Readonly Properties dalam Interface

```
interface Config {
readonly apiKey: string;
readonly timeout: number;
retries: number;  // mutable
}

const config: Config = {
apiKey: "abc123",
timeout: 5000,
retries: 3
};

config.retries = 5;  // OK
// config.apiKey = "new"; // Error: apiKey is readonly
```

### Function Properties dalam Interface

```
interface Logger {
log(message: string): void;
error(message: string): void;
}

const logger: Logger = {
log: (msg) => console.log(msg),
error: (msg) => console.error(msg)
};
```

### Index Signatures (Dynamic Properties)

```
// Interface dengan dynamic property names (string index signature)
interface Dictionary {
[key: string]: number;
}

const dict: Dictionary = {
one: 1,
two: 2,
"three": 3  // string key juga OK
};
```

**💡 Tips:** Interface adalah alat utama untuk mendefinisikan kontrak object di TypeScript. Gunakan interface ketika ingin mendefinisikan bentuk object, class contracts, atau function parameter shapes. Interface bisa di-extend (akan dibahas di lesson berikutnya).

##
3
Latihan

### Latihan 1: Interface untuk Product

Buat interface `Product` dengan properti: `id: number`, `name: string`, `price: number`, dan method `getPrice(): number`. Buat object yang mengimplementasikan interface ini.

Lihat Solusi

```
interface Product {
id: number;
name: string;
price: number;
getPrice(): number;
}

const product: Product = {
id: 1,
name: "Laptop",
price: 1000000,
getPrice: () => product.price
};
```

### Latihan 2: Structural Typing

Buat interface `HasId` dengan properti `id: number`. Buat function `printId` yang menerima parameter `item: HasId`. Panggil function dengan object literal yang memiliki properti `id` tanpa explicitly declare interface.

Lihat Solusi

```
interface HasId {
id: number;
}

function printId(item: HasId) {
console.log("ID:", item.id);
}

// Structural typing - object dengan id compatible
printId({ id: 123, name: "test" });  // OK
```

← Sebelumnya

Modul 4 - Lesson 1 dari 6

Selanjutnya →
