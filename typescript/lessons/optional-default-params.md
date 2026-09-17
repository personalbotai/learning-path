# Optional dan Default Parameters

TypeScript memungkinkan kita mendefinisikan function parameters sebagai **optional** (dengan `?`) atau memberikan **default values**. Keduanya membuat function lebih fleksibel dan mengurangi boilerplate code untuk handling undefined values.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Functions

##
1
Tujuan Pembelajaran

-
Mendefinisikan optional parameters dengan `?`

-
Memberikan default values untuk parameters

-
Memahami urutan parameters (required, optional, rest)

-
Type checking untuk optional dan default parameters

##
2
Penjelasan

Optional parameters memungkinkan function dipanggil tanpa memberikan nilai untuk parameter tersebut. Default parameters memberikan nilai default jika parameter tidak disediakan. Keduanya meningkatkan fleksibilitas function API.

### Optional Parameters (`?`)

```
// Parameter 'greeting' adalah optional
function greet(name: string, greeting?: string): string {
const g = greeting || "Hello";
return `${g}, ${name}!`;
}

greet("Alice");                // "Hello, Alice!"
greet("Bob", "Hi");         // "Hi, Bob!"
```

Parameter optional secara implisit memiliki tipe `T | undefined`. TypeScript akan memaksa kita melakukan check sebelum menggunakan nilai optional.

### Default Parameters

```
// Default value untuk parameter
function connect(url: string, timeout: number = 5000, retries: number = 3) {
console.log(`Connecting to ${url} with timeout ${timeout}, retries ${retries}`);
}

connect("https://api.example.com");  // timeout=5000, retries=3
connect("https://api.example.com", 10000);  // retries=3
connect("https://api.example.com", 10000, 5);  // all specified
```

### Optional vs Default: Perbedaan

- **Optional (`?`)**: Parameter bisa dilewati. Tipe menjadi `T | undefined`. Harus check manual.

- **Default**: Parameter bisa dilewati, tapi nilai default akan digunakan. Tipe tetap `T` (bukan union dengan undefined).

```
// Optional - harus handle undefined
function optExample(x?: number) {
// x: number | undefined
if (x === undefined) { /* handle */ }
}

// Default - tidak perlu handle undefined
function defaultExample(x: number = 0) {
// x: number (selalu ada nilai)
console.log(x);  // OK - tidak perlu check undefined
}
```

### Aturan Urutan Parameters

Dalam function signature, urutan parameters harus: **required → optional → rest**.

**❌ Error:** Optional parameter tidak boleh ada sebelum required parameter.

```
// SALAH: optional sebelum required
// function bad(a?: string, b: number) {}

// BENAR: required dulu, lalu optional
function good(a: string, b?: number) {}
```

### Default Values dengan expressions

```
function createUser(name: string, role: string = "user", active: boolean = true) {
return { name, role, active };
}

// Default bisa berupa expression
function withDefault(x: number = Math.random()) {
return x;
}
```

**💡 Tips:** Gunakan default parameters ketika Anda punya nilai fallback yang masuk akal. Gunakan optional parameters ketika parameter benar-benar opsional dan absence-nya bermakana (nullish). Default parameters lebih aman karena tidak menghasilkan undefined.

##
3
Latihan

### Latihan 1: Optional Parameter dengan Check

Buat function `formatName` dengan parameter `firstName: string` (required) dan `lastName?: string` (optional). Jika lastName diberikan, return "`lastName, firstName`". Jika tidak, return "`firstName`".

Lihat Solusi

```
function formatName(firstName: string, lastName?: string): string {
if (lastName) {
return `${lastName}, ${firstName}`;
}
return firstName;
}

formatName("John", "Doe");  // "Doe, John"
formatName("Jane");        // "Jane"
```

### Latihan 2: Default Parameters untuk Config

Buat function `createServer` dengan parameter `port: number = 3000` dan `host: string = "localhost"`. Function harus return object config.

Lihat Solusi

```
interface ServerConfig {
port: number;
host: string;
}

function createServer(port: number = 3000, host: string = "localhost"): ServerConfig {
return { port, host };
}

createServer();            // { port: 3000, host: "localhost" }
createServer(8080);       // { port: 8080, host: "localhost" }
createServer(8080, "0.0.0.0"); // { port: 8080, host: "0.0.0.0" }
```

← Sebelumnya

Modul 5 - Lesson 3 dari 5

Selanjutnya →
