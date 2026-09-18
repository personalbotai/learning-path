# Declaration Merging

**Declaration merging** adalah fitur TypeScript yang memungkinkan beberapa deklarasi dengan nama yang sama digabung menjadi satu deklarasi tunggal. Fitur ini sangat berguna untuk meng-extend types dari library eksternal, interface, namespaces, dan ambient declarations.

⏱️ 20 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Advanced TypeScript

##
Tujuan Pembelajaran

-
Memahami konsep **declaration merging** dan mechanism-nya

-
Meng-extend interface dengan multiple declarations

-
Meng-extend namespace dengan namespace merging

-
Memahami **module augmentation** untuk menambahkan properties ke existing types

-
Meng-extend class dengan mixin pattern via declaration merging

-
Mengetahui use cases dan best practices untuk declaration merging

## Apa itu Declaration Merging?

**Declaration merging** adalah proses di mana TypeScript menggabungkan beberapa deklarasi dengan nama yang sama menjadi satu deklarasi tunggal. Ketika compiler menemukan dua atau lebih deklarasi dengan identifier yang sama, ia akan **merge** anggota (properties, methods, types) dari semua deklarasi tersebut menjadi satu.

### 🔑 Aturan Dasar Merging:

- Hanya certain constructs yang bisa di-merge: **interface**, **namespace**, **type** (sebagian), **enum**, **function** (overload)

- Merging dilakukan pada **compile-time** oleh TypeScript compiler

- Hasil merge adalah union dari semua anggota dari semua deklarasi

- Untuk **non-function members**, jika ada conflict, tipe harus **compatible** (subtype relationship)

- Untuk **functions**, akan menjadi **overload signatures**

## Interface Merging

Interface adalah constructs yang paling sering di-merge. Ketika dua interface dengan nama yang sama didefinisikan, TypeScript akan menggabungkan semua properties dan methods menjadi satu interface.

### Contoh Dasar: Interface Merging

// File: user.base.ts
interface User {
id: number;
name: string;
email: string;
}

// File: user.roles.ts
interface User {
role: string;
permissions: string[];
}

// File: user.profile.ts
interface User {
profile?: {
avatarUrl: string;
bio: string;
};
}

// File: app.ts
const user: User = {
id: 1,
name: 'John Doe',
email: 'john@example.com',
role: 'admin',
permissions: ['read', 'write'],
profile: {
avatarUrl: 'https://...',
bio: 'Developer'
}
};
// TypeScript tahu semua properties dari ketiga interface!

### ✅ Use Case: Plugin/Extension Systems

Declaration merging sangat berguna untuk systems yang memungkinkan multiple parties menambahkan properties ke existing type. Contoh: plugin system di framework, extensible configuration objects, atau library dengan optional addons.

## Namespace Merging

Namespace juga bisa di-merge. Ketika dua namespace dengan nama yang sama didefinisikan, isi mereka digabung menjadi satu namespace. Ini memungkinkan modularisasi namespace across files.

// File: db.connection.ts
namespace Database {
export class Connection {
connect(url: string): void { ... }
disconnect(): void { ... }
}
}

// File: db.query.ts
namespace Database {
export class QueryBuilder {
select(columns: string[]): this { ... }
where(condition: string): this { ... }
}
}

// File: app.ts
import { Database } from './db.connection';  // Import dari salah satu file

const conn = new Database.Connection();
const query = new Database.QueryBuilder();

## Module Augmentation (Extending Existing Modules)

**Module augmentation** adalah bentuk declaration merging yang khusus digunakan untuk **menambahkan** properties atau methods ke module yang sudah ada (terutama module dari DefinitelyTyped atau library). Sintaksnya menggunakan `declare module 'module-name'`.

### Contoh: Extending Express Request

// File: express-augmentation.d.ts
import 'express';

declare module 'express' {
export interface Request {
user?: {
id: number;
email: string;
role: string;
};
requestId?: string;
}
}

// File: app.ts (Express app)
import express from 'express';

const app = express();

app.get('/profile', (req, res) => {
// TypeScript tahu req.user sekarang!
if (req.user) {
res.send(`Hello ${req.user.email}`);
}
});

### Meng-extend Library Types dengan Namespace

// File: lodash-augmentation.d.ts
import 'lodash';

declare module 'lodash' {
export function customMethod(value: any): boolean;
}

// File: app.ts
import { customMethod } from 'lodash';

customMethod('test');  // TypeScript tahu customMethod!

## Function Overload Merging

Function declarations juga bisa di-merge untuk membuat **overload signatures**. Setiap deklarasi function dengan nama yang sama akan menjadi overload signature.

// File: utils.ts
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: any): string {
return String(value);
}

// File: app.ts
format('hello');  // OK, return string
format(123);    // OK, return string
format(true);      // OK, return string

## Pitfalls dan Best Practices

### ⚠️ Pitfalls

- **Implicit any**: Merging bisa menyembunyikan missing types

- **Circular dependencies**: Merging antar files bisa circular

- **Namespace pollution**: Terlalu banyak merging bikin sulit track

- **Non-function conflict**: Property types harus compatible, atau error

- **Order matters**: Implementation harus setelah semua declarations

### ✅ Best Practices

- Gunakan untuk **extending third-party types** (Express, Vue, dll)

- Buat file `.d.ts` terpisah untuk augmentation

- Pastikan **import statements** di augmentation file benar

- Hanya tambah properties yang **optional** untuk compatibility

- Dokumentasikan merged interface dengan comment

- Hindari merging untuk core types yang tidak perlu di-extend

### 💡 When to Use Declaration Merging:

- **Extending framework types** (Express Request/Response, React props, Vue component options)

- **Plugin architectures** di mana plugin bisa menambahkan properties ke core types

- **Global augmentation** untuk adding global variables/functions

- **Monkey-patching** library dengan methods tambahan

**Avoid** declaration merging untuk regular application types - gunakan **interface extension** (`interface A extends B`) atau **type composition** (`type C = A & B`) yang lebih eksplisit.

##
💻
Latihan Praktis

### Latihan 1: Interface Merging untuk Config

Anda memiliki module konfigurasi yang didefinisikan di multiple files:

- `config.database.ts`: interface `AppConfig` dengan `db: { host, port, username, password }`

- `config.server.ts`: interface `AppConfig` dengan `port, host, env`

- `config.cache.ts`: interface `AppConfig` dengan `cache: { enabled, ttl }`

Pastikan semua properties ter-merge dengan benar. Buat object `config: AppConfig` dengan semua fields.

### Latihan 2: Module Augmentation untuk Express

Extend Express `Request` interface dengan property `currentUser` yang berisi:

- `id: number`

- `email: string`

- `roles: string[]`

Buat file `express-augmentation.d.ts` dan gunakan di route handler.

### Latihan 3: Namespace + Interface Merging

Buat namespace `API` dengan interface `Response` di file pertama (properties: `status: number`, `data: any`). Di file kedua, merge interface `Response` dengan tambahan `headers: Record<string, string>`. Di file ketiga, tambah namespace `API.Errors` dengan class `APIError`.

← Sebelumnya: Namespaces

🔖 Bookmark

✓ Selesai

Modul 8 Selesai → Module 9
