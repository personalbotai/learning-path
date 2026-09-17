# Intersection Types

**Intersection Types** adalah kebalikan dari Union Types. Intersection menggabungkan beberapa tipe menjadi satu tipe baru yang memiliki semua properties dan methods dari setiap tipe yang digabungkan. Ini sangat berguna untuk compose tipe dari beberapa interface atau type.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Advanced Types

##
1
Tujuan Pembelajaran

-
Memahami konsep Intersection Types dan perbedaannya dengan Union Types

-
Menggabungkan beberapa interface atau type dengan operator `&`

-
Menerapkan Intersection Types untuk compose object tipe

-
Menggunakan Intersection dengan function types

##
2
Penjelasan

Intersection Types menggabungkan beberapa tipe menjadi satu tipe yang memiliki semua anggota dari setiap tipe yang digabungkan. Operator yang digunakan adalah `&` (bitwise AND). Jika Union adalah "OR" (satu dari beberapa tipe), maka Intersection adalah "AND" (harus memiliki semua tipe).

### Sintaks Dasar

```
// Intersection dari dua interface
interface Named {
name: string;
}

interface  Aged {
age: number;
}

// Person memiliki properti dari Named & Aged
type Person = Named & Aged;

let user: Person = {
name: "Alice",
age: 30
// OK - memiliki kedua properti
};
```

### Intersection dengan Lebih dari Dua Tipe

```
interface HasId {
id: number;
}

interface HasName {
name: string;
}

interface HasEmail {
email: string;
}

type User = HasId & HasName & HasEmail;

let user: User = {
id: 1,
name: "Bob",
email: "bob@example.com"
};
```

### Intersection dengan Object Literals

```
type Admin = {
role: string;
permissions: string[];
};

type Employee = {
name: string;
employeeId: number;
};

type AdminEmployee = Admin & Employee;

let adminEmp: AdminEmployee = {
role: "admin",
permissions: ["read", "write"],
name: "Charlie",
employeeId: 123
};
```

### Intersection dengan Function Types

Intersection juga bisa digunakan untuk menggabungkan beberapa function types menjadi satu function yang memiliki parameter dan return dari semua function yang digabungkan.

```
type LoggingFunction = (msg: string) => void;
type FormattingFunction = (msg: string) => string;

// Function yang bisa logging dan formatting
type LoggerFormatter = LoggingFunction & FormattingFunction;

let loggerFormatter: LoggerFormatter;
loggerFormatter = (msg: string) => {
console.log(msg);
return msg.toUpperCase();
};
```

### Menggabungkan Class dengan Interface

```
interface Timestamped {
timestamp: Date;
}

class Event {
constructor(public name: string) {}
}

// Event dengan tambahan timestamp
type TimedEvent = Event & Timestamped;

let timedEvent = new Event("click");
timedEvent.timestamp = new Date();  // OK - ditambahkan via intersection
```

### Perbandingan: Union vs Intersection

Union (`|`)
Intersection (`&`)

"Satu dari beberapa tipe"
"Memiliki semua tipe"

A = T1 | T2
A = T1 & T2

Harus type narrowing untuk akses properti spesifik
Semua properti dari semua tipe tersedia

##
3
Latihan

### Latihan 1: Buat Tipe Komposit

Buat tipe `Contact` yang menggabungkan `HasName` (name: string) dan `HasEmail` (email: string). Buat variabel yang memenuhi tipe tersebut.

Lihat Solusi

```
interface HasName {
name: string;
}

interface HasEmail {
email: string;
}

type Contact = HasName & HasEmail;

let contact: Contact = {
name: "Diana",
email: "diana@example.com"
};
```

### Latihan 2: Function Composition

Buat dua function types: `Validator` (input: any) => boolean dan `Transformer` (input: any) => any. Gabungkan menjadi `ValidatingTransformer` yang melakukan keduanya.

Lihat Solusi

```
type Validator = (data: any) => boolean;
type Transformer = (data: any) => any;

type ValidatingTransformer = Validator & Transformer;

let process: ValidatingTransformer;
process = (data) => {
if (data <  0) return false;
return data * 2;
};
```

← Sebelumnya

Modul 3 - Lesson 2 dari 10

Selanjutnya →
