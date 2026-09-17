# Array dan Tuple

TypeScript memberikan kontrol tipe yang ketat untuk array dan tuple. Array adalah kumpulan elemen dengan tipe yang sama, sedangkan tuple memungkinkan kombinasi tipe berbeda dalam jumlah tetap. Memahami kedua struktur data ini esensial untuk menangani koleksi data dengan aman.

⏱️ 20 menit
📊 Kesulitan: Pemula-Intermediate
✅ prerequisites: Tipe Primitif

## 🎯 Tujuan Pembelajaran

-
Mendeklarasikan array dengan tipe spesifik menggunakan `Type[]` syntax

-
Memahami generic array type `Array<Type>`

-
Menggunakan tuple untuk fixed-length, fixed-type sequences

-
Operasi array dengan type safety (push, pop, map, filter)

-
Tuple operations dan destructuring

## 📚 Konten Materi

### 1. Array dengan Tipe Spesifik

Di TypeScript, array dapat dideklarasikan dengan menentukan tipe elemennya. Ada dua sintaks yang umum digunakan: `Type[]` dan generic `Array<Type>`. Keduanya setara, pilih sesuai preferensi.

```
// Array dengan tipe spesifik
let names: string[] = ["Budi", "Ani", "Siti"];
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, false, true];

// Generic syntax (setara dengan di atas)
let names2: Array<string> = ["Ali", "Bina"];
let numbers2: Array<number> = [10, 20, 30];

// Type inference untuk array
let inferredStrings = ["a", "b"]; // inferred as string[]
let inferredNumbers = [1, 2, 3]; // inferred as number[]

// Readonly array (tidak bisa diubah)
let readonlyNames: readonly string[] = ["Budi", "Ani"];
// readonlyNames.push("Siti"); // Error: readonly array
```

### 2. Tuple - Fixed-Type Sequences

Tuple adalah array dengan **fixed number of elements** dan **known types at specific positions**. Berguna untuk mengembalikan multiple values dari fungsi atau menyimpan data dengan struktur tetap seperti koordinat [x, y].

```
// Tuple: fixed length dan fixed types per position
let coordinate: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Budi", 25, true];

// Akses elemen tuple dengan type safety
const x = coordinate[0]; // number
const name = person[0]; // string
const age = person[1]; // number

// Tuple bisa diubah (mutated) tetapi harus sesuai tipe
coordinate[0] = 30; // OK
// coordinate[0] = "string"; // Error: number expected
// coordinate.push(40); // OK: menambah elemen, tapi type safety hilang setelah push

// Tuple dengan optional elements
let optionalTuple: [string, number?, boolean?] = ["test"];
optionalTuple[1] = 42; // OK: second element optional

// Tuple dengan rest elements
let stringList: [string, ...string[]] = ["first", "second", "third"];
```

### 3. Array Operations dengan Type Safety

TypeScript memastikan semua operasi array aman secara tipe. Metode seperti `push`, `pop`, `map`, `filter` akan mempertahankan tipe array asli atau mengembalikan tipe yang sesuai.

```
// Array methods preserve type
let nums: number[] = [1, 2, 3, 4];

// push: menambah elemen, tipe tetap number[]
nums.push(5); // OK
// nums.push("string"); // Error: string not assignable to number

// pop: mengembalikan number | undefined
const last = nums.pop(); // number | undefined

// map: mengembalikan array baru dengan tipe sesuai callback
const doubled = nums.map(n => n * 2); // number[]
const strings = nums.map(n => `Number: ${n}`); // string[]

// filter: tetap number[]
const evens = nums.filter(n => n % 2 === 0); // number[]

// forEach: tidak mengembalikan nilai
nums.forEach(n => console.log(n));
```

### 4. Tuple Destructuring

Tuple dapat di-destructure seperti array, tetapi TypeScript akan mempertahankan tipe untuk setiap elemen yang diekstrak. Ini membuat kode lebih readable dan type-safe.

```
// Destructuring tuple
const point: [number, number] = [100, 200];
const [x, y] = point; // x: number, y: number

// Destructuring dengan rest
const rgb: [number, number, number, number?] = [255, 0, 0];
const [r, g, b, a] = rgb; // a: number | undefined

// Swap values menggunakan tuple destructuring
let a = 1;
let b = 2;
[a, b] = [b, a]; // swap: a=2, b=1

// Function yang mengembalikan tuple
function getMinMax(arr: number[]): [number, number] {
return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = getMinMax([1, 5, 3, 9, 2]);
```

#### ⚠️ Important Notes

- Tuple memiliki panjang tetap - menambah elemen di luar indeks yang dideklarasikan mengubahnya menjadi `any[]`

- Gunakan tuple untuk fungsi yang mengembalikan multiple values

- Untuk array dengan mixed types, gunakan union type: `(string | number)[]`

- Readonly tuple: `readonly [number, string]`

## 💪 Latihan Praktek

### Latihan 1: Student Data Array

Buat array of objects yang merepresentasikan students dengan tipe yang ketat.

Definisikan interface `Student` dengan properti: `id: number`, `name: string`, `grades: number[]`. Buat array `students: Student[]` dengan 3 data.

Gunakan `map` untuk menghitung rata-rata grades setiap student.

### Latihan 2: Tuple untuk Coordinate System

Buat fungsi yang menggunakan tuple untuk 3D coordinate dan menghitung distance.

Fungsi: `distance3D(p1: [number, number, number], p2: [number, number, number]): number`

Implementasikan Euclidean distance: √((x2-x1)² + (y2-y1)² + (z2-z1)²). Gunakan destructuring untuk readability.

## 📝 Quiz

Quiz ini akan menguji pemahaman Anda tentang array types, tuple, dan operasi array yang type-safe.

📌 Module 2 Quiz
•
10 questions
•
Passing score: 70%

← Previous Lesson

Next Lesson →
