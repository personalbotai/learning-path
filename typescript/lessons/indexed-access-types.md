# Indexed Access Types

**Indexed Access Types** memungkinkan kita mengambil tipe dari properti sebuah object type menggunakan sintaks array-like indexing. Ini sangat berguna ketika kita ingin membuat tipe yang dinamis berdasarkan struktur object lain.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami sintaks indexed access types (`Type['property']`)

-
Mengambil tipe properti dari interface atau type object

-
Menggunakan indexed access dengan keyof untuk dinamis property access

-
Menerapkan indexed access dalam generic constraints

##
2
Penjelasan

Indexed access types mirip seperti accessing properti object, tetapi di type level. Kita bisa mengambil tipe dari sebuah properti dengan menulis `SomeType['propertyName']`. Hasilnya adalah tipe dari nilai properti tersebut.

### Sintaks Dasar

```
interface Person {
name: string;
age: number;
isActive: boolean;
}

// Ambil tipe dari properti 'name'
type NameType = Person['name'];  // string

// Ambil tipe dari properti 'age'
type AgeType = Person['age'];   // number

// Bisa juga dengan variabel string (jika known at compile time)
type Prop = Person['isActive'];  // boolean
```

### Menggunakan dengan `keyof`

Kombinasi `keyof` dengan indexed access sangat powerful. `keyof Person` memberikan union dari semua key names (`'name' | 'age' | 'isActive'`). Kita bisa gunakan itu untuk mengambil tipe dari semua properti.

```
// Union of all property types
type PersonProperties = Person[keyof Person];
// Result: string | number | boolean

// Generic function untuk mengambil value dari object
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

let person: Person = { name: "Alice", age: 30, isActive: true };
let name = getProperty(person, "name");  // inferred: string
let age = getProperty(person, "age");   // inferred: number
```

### Indexed Access dengan Array/Index Signatures

```
interface Dictionary {
[key: string]: number;
}

// Ambil tipe dari value
type DictValue = Dictionary[string];  // number

// Atau dengan keyof (mengembalikan index signature key type)
type DictKey = keyof Dictionary;  // string (selalu string untuk index signature)
```

### Nested Indexed Access

```
interface Company {
name: string;
address: {
street: string;
city: string;
};
}

// Ambil tipe dari nested properti
type CityType = Company['address']['city'];  // string
```

### Error Handling: Invalid Property Access

```
interface Config {
timeout: number;
retries: number;
}

// Error: 'invalid' tidak ada di Config
// type Invalid = Config['invalid'];
//              ~~~~~~~~~~~ Property 'invalid' doesn't exist
```

### Use Cases Utama

- **Generic getter functions**: Membuat function yang mengambil properti dari object dengan tipe yang aman

- **Compose types**: Membuat tipe baru berdasarkan properti dari tipe lain

- **Utility types**: Seperti `Partial<T>`, `Pick<T, K>` yang menggunakan indexed access di dalamnya

- **Dynamic property access**: Saat property name diketahui di runtime tapi harus type-checked

##
3
Latihan

### Latihan 1: Generic Getter dengan Indexed Access

Buat generic function `getValue` yang menerima object `obj: T` dan key `key: K` (di mana `K extends keyof T`). Function harus return `T[K]`. Test dengan object `{ id: 1, name: "test" }`.

Lihat Solusi

```
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const item = { id: 1, name: "test" };
const id = getValue(item, "id");   // number
const name = getValue(item, "name"); // string
```

### Latihan 2: Union of Property Types

Given interface `Settings` dengan properti `theme: string`, `fontSize: number`, `darkMode: boolean`. Buat type `SettingValue` yang merupakan union dari semua tipe properti.

Lihat Solusi

```
interface Settings {
theme: string;
fontSize: number;
darkMode: boolean;
}

type SettingValue = Settings[keyof Settings];
// Result: string | number | boolean
```

← Sebelumnya

Modul 3 - Lesson 7 dari 10

Selanjutnya →
