# Strict Mode Options

**Strict mode** adalah sekumpulan compiler options yang membuat TypeScript melakukan type-checking yang lebih ketat dan mencegah potensi bugs. Memahami setiap strict option memungkinkan Anda menyesuaikan tingkat strictness sesuai kebutuhan project.

⏱️ 20 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Type Safety

##
Tujuan Pembelajaran

-
Memahami arti `"strict": true` dan semua opsi yang di-enable

-
Mengenal `noImplicitAny` - mencegah implicit any types

-
Memahami `strictNullChecks` - null dan undefined handling

-
Mengenal `strictFunctionTypes`, `strictPropertyInitialization`

-
Mengetahui kapan **disable** certain strict options (trade-offs)

-
Mengonfigurasi strictness level untuk project yang berbeda

## Apa itu Strict Mode?

**Strict mode** adalah koleksi compiler options yang mengaktifkan checking yang lebih ketat. Opsi ini membantu menangkap bugs pada waktu development, meningkatkan code quality, dan memastikan type safety maksimal. Ketika `"strict": true` di-set, TypeScript akan enable:

### 🚨 Strict Mode Flags (All Enabled):

- `noImplicitAny`

- `strictNullChecks`

- `strictFunctionTypes`

- `strictBindCallApply`

- `strictPropertyInitialization`

- `noImplicitThis`

- `alwaysStrict`

- `useUnknownInCatchVariables`

Mari kita bahas setiap flag satu per satu untuk memahami impact-nya.

## 1. noImplicitAny

`noImplicitAny: true` memaksa Anda untuk memberikan **explicit type annotations** untuk parameters, return types, dan variables yang tidak bisa di-infer oleh TypeScript. Tanpa flag ini, TypeScript akan silently assign `any` type, yang menonaktifkan type checking.

// ❌ noImplicitAny: false (default)
function bad(param) {  // param implicitly has type 'any'
return param.toUpperCase();  // No error! (dangerous)
}

// ✅ noImplicitAny: true
// Error: Parameter 'param' implicitly has an 'any' type.
function good(param) {
return param.toUpperCase();
}

// ✅ Fix: Add explicit type
function fixed(param: string): string {
return param.toUpperCase();
}

### ✅ Best Practice:

Selamainya enable `noImplicitAny`. Ini mencegah "implicit any" bugs dan memastikan semua types explicit atau ter-infer dengan baik.

## 2. strictNullChecks

`strictNullChecks: true` adalah salah satu flag paling penting. Ketika disabled, `null` dan `undefined` dianggap sebagai subtype dari **semua types**. Ketika enabled, `null` dan `undefined` hanya bisa ditugaskan ke:

- Nilai themselves (`null`, `undefined`)

- Type `any` (jika any ada)

- Type yang explicitly include them: `string | null`, `number | undefined`

// ❌ strictNullChecks: false (default)
let name: string = null;  // OK! (dangerous)
name = undefined;           // OK!

// ✅ strictNullChecks: true
// Error: Type 'null' is not assignable to type 'string'.
let name: string = null;

// ✅ Correct: Explicit union type
let name: string | null = null;  // OK
name = undefined;  // Error! undefined not assignable ke string | null

// ✅ Use optional chaining & nullish coalescing
const length = name?.length ?? 0;

### ⚠️ Common Issues:

Dengan `strictNullChecks`, Anda harus:

- Gunakan `!` (non-null assertion) saat yakin value tidak null: `value!`

- Gunakan `if (value !== null)` checks sebelum menggunakan

- Gunakan `?` (optional chaining): `obj?.prop`

- Gunakan `??` (nullish coalescing): `value ?? default`

## 3. strictFunctionTypes

`strictFunctionTypes: true` mengaktifkan **contravariance checking** untuk function parameters. Tanpa flag ini, TypeScript menggunakan **bivariance** (lebih permisif) untuk function types, yang bisa menyebabkan runtime errors.

// ❌ strictFunctionTypes: false
interface Processor {
process(input: string): void;
}

function handler(input: string | number): void {
console.log(input);
}

const p: Processor = { process: handler };  // OK! (bivariant)
p.process("hello");  // OK
p.process(123);    // OK di compile, RUNTIME ERROR! handler expects string

// ✅ strictFunctionTypes: true
// Error: Type '(input: string | number) => void' is not assignable to type 'Processor'.
//   Types of parameters 'input' and 'input' are incompatible.

## 4. strictPropertyInitialization

`strictPropertyInitialization: true` memastikan bahwa semua **instance properties** class di-initialize di constructor atau dengan default value. Ini mencegah bugs di mana properties di-access sebelum di-assign.

// ❌ strictPropertyInitialization: false
class User {
public name: string;  // Not initialized!
public age: number;

// No error, but name and age are undefined at runtime!
}

// ✅ strictPropertyInitialization: true
// Error: Property 'name' has no initializer and is not definitely assigned
class User {
public name: string;
public age: number;

constructor() {
// Must initialize:
this.name = '';
this.age = 0;
}
}

// ✅ Use definite assignment assertion (!) jika yakin di-initialize di tempat lain
class User {
public name!: string;  // "!" tells TS: I'll assign later
}

// ✅ Or use default value
class User {
public name = '';  // Default initializer
}

## 5. Other Strict Flags

Flag
Deskripsi
Contoh Error

`strictBindCallApply`
Enable strict checking untuk Function.prototype.bind/call/apply
Mencegah passing wrong argument types ke bound functions

`noImplicitThis`
Error jika `this` memiliki type `any`
`this` dalam callback function tanpa explicit this type

`alwaysStrict`
Parse dalam **strict mode** ECMAScript (selalu emit `"use strict"`)
Ensures JS output strict mode compliant

`useUnknownInCatchVariables`
Catch clause variables typed as `unknown` instead of `any`
Prevents assuming caught error type

## Configuring Strictness Level

Tidak semua project memerlukan **full strict mode**. Berikut adalah panduan untuk menyesuaikan strictness:

### 🟢 Maximum (Production)

Untuk library, open-source, atau production apps yang butuh highest type safety.

`
{
"strict": true,
"noUncheckedIndexedAccess": true
}`

### 🟡 Balanced (Most Apps)

Default choice untuk sebagian besar aplikasi. Strict tapi tidak terlalu rigid.

`
{
"strict": true
}`

### 🔴 Relaxed (Legacy/Migration)

Untuk codebase legacy yang masih dalam migrasi ke TypeScript.

`
{
"strict": false,
"noImplicitAny": true
}`

### 💡 Migration Strategy:

Jika Anda memiliki codebase JavaScript yang lama yang sedang dimigrasi ke TypeScript, mulai dengan `"strict": false` dan aktifkan satu per satu: `noImplicitAny` → `strictNullChecks` → lainnya. Gunakan `// @ts-ignore` sparingly untuk menyesuaikan bertahap.

##
💻
Latihan Praktis

### Latihan 1: Identify Strict Mode Errors

Berikut kode dengan `strict: true`. Identifikasi dan perbaiki error:

function process(data) {  // implicit any
return data.map(x => x * 2);
}

class Config {
apiKey: string;  // not initialized
timeout = 5000;
}

const getData = (cb: (err: Error, data?: any) => void) => { ... };

### Latihan 2: Configure Strictness

Buat `tsconfig.json` untuk:

- **React component library**: strict mode, JSX support, ESNext module

- **Node.js microservice**: strict mode except `strictPropertyInitialization` (dinonaktifkan)

### Latihan 3: Debug strictNullChecks

Kode berikut error dengan `strictNullChecks: true`. Perbaiki dengan null-safe patterns:

function getLength(str: string): number {
return str.length;
}

const input: string | null = getUserInput();
const len = getLength(input);  // Error!

← Sebelumnya: Compiler Options

🔖 Bookmark

✓ Selesai

Selanjutnya: Include, Exclude, dan Files →
