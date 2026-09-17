# Parameters & ConstructorParameters Utility Types

**Parameters<T>** dan **ConstructorParameters<T>** adalah utility types untuk mengekstrak tuple types dari function signatures dan class constructors. Sangat berguna untuk higher-order functions dan type inference.

⏱️ 20 menit
📊 Kesulitan: Tinggi

## 🎯 Tujuan Pembelajaran

-
Memahami Parameters<T> untuk mengekstrak function parameter types sebagai tuple

-
Menggunakan ConstructorParameters<T> untuk class constructor parameters

-
Mengaplikasikan utility types dalam higher-order functions (compose, curry)

-
Memahami batasan dan edge cases

## 📚 Konten Utama

### Parameters<T>

`Parameters<T>` menghasilkan tuple type yang merepresentasikan parameter types dari function type `T`. Ini adalah conditional type yang mengekstrak signature.

// Function dengan beberapa parameters
function greet(name: string, age: number, isAdmin: boolean): void {
console.log(`Hello ${name}`);
}

// Extract parameters sebagai tuple
type GreetParams = Parameters<typeof greet>;
// Equivalent to: [string, number, boolean]

function callGreet(...args: GreetParams) {
greet(...args);
}

callGreet("Alice", 30, true);  // ✅ OK

### ConstructorParameters<T>

`ConstructorParameters<T>` mengekstrak parameter types dari class constructor atau constructor function.

class User {
constructor(
public id: number,
public name: string,
public email: string
) {}
}

// Extract constructor parameters
type UserCtorParams = ConstructorParameters<typeof User>;
// Equivalent to: [number, string, string]

function createUser(...args: UserCtorParams) {
return new User(...args);
}

const user = createUser(1, "Alice", "alice@example.com");

### Use Cases

#### 1. Higher-Order Functions

Membuat wrapper functions yang preserve original signature:

function log<T extends (...args: any[]) => any>(fn: T) {
return function(...args: Parameters<T>): ReturnType<T> {
console.log(`Calling ${fn.name} with`, args);
return fn(...args);
};
}

function add(a: number, b: number): number {
return a + b;
}

const loggedAdd = log(add);
loggedAdd(2, 3);  // Type-safe, parameters inferred as [number, number]

#### 2. Currying

function curry<T extends (...args: any[]) => any>(fn: T) {
return function(first: Parameters<T>[0]) {
return function(...rest: Parameters<T>) {
return fn(first, ...rest);
};
};
}

function multiply(a: number, b: number): number {
return a * b;
}

const curriedMultiply = curry(multiply);
const double = curriedMultiply(2);
double(5);  // 10

#### 3. Factory Functions

Mempertahankan constructor signature saat membuat factory:

function createInstance<T>(Ctor: new (...args: ConstructorParameters<T>) => T, ...args: ConstructorParameters<T>) {
return new Ctor(...args);
}

class Person {
constructor(public name: string, public age: number) {}
}

const p = createInstance(Person, "Bob", 25);  // Type-safe

### Edge Cases & Limitations

#### Functions with Rest Parameters

`Parameters` menangani rest parameters sebagai array.

function foo(...args: string[]) {}
type FooParams = Parameters<typeof foo>;  // [args: string[]]

#### Overloaded Functions

`Parameters` menggunakan signature terakhir (last overload).

function bar(x: string): void;
function bar(x: number): void;
function bar(x: any) {}
type BarParams = Parameters<typeof bar>;  // [x: any] (last signature)

#### Methods vs Functions

Untuk class methods, gunakan `ThisParameterType` atau explicit `this` parameter.

### Related Utility Types

TypeScript juga menyediakan:

- `ReturnType<T>` - Extract return type dari function

- `ThisParameterType<T>` - Extract `this` parameter type

- `OmitThisParameter<T>` - Remove `this` parameter

- `InstanceType<T>` - Get instance type dari constructor function

## 💻 Exercises

### Exercise 1: Parameter Extraction

Gunakan Parameters untuk type inference.

- Buat function `sendRequest(url: string, method: string, body?: object)`

- Extract parameters dengan `type RequestParams = Parameters<typeof sendRequest>`

- Buat wrapper function yang accept `...args: RequestParams`

- Verify type safety maintained

### Exercise 2: Constructor Wrapper

Gunakan ConstructorParameters untuk factory.

- Buat class `Logger` dengan constructor(prefix: string, level: number)

- Buat `type LoggerParams = ConstructorParameters<typeof Logger>`

- Buat function `createLogger(...args: LoggerParams)` yang return new Logger(...args)

- Test dengan various arguments

### Exercise 3: Compose Functions

Buat generic compose function menggunakan Parameters.

- Buat `function compose<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C`

- Gunakan Parameters dan ReturnType untuk membuat generic version

- Test compose dengan functions yang berbeda signatures

- Pastikan type inference bekerja dengan baik

← Previous

Take Quiz
