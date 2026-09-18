# Type Inference (Inferensi Tipe)

Java historically memerlukan deklarasi tipe eksplisit untuk setiap variabel. Sejak Java 10 dan Jakarta EE, Java menambahkan dukungan untuk **type inference** dalam konteks tertentu, membuat kode lebih concise sementara tetap type-safe.

## Local Variable Type Inference (`var`)

Dimulai dari Java 10, Anda dapat menggunakan `var` untuk variabel lokal dengan initializer:

```
var list = new ArrayList<String>();  // inferred as ArrayList<String>
var i = 10;         // int
var d = 3.14;       // double
var s = "hello";    // String
var map = Map.of(1, "one", 2, "two"); // inferred as Map<Integer, String>

```

Compiler mengecek initializer untuk menentukan tipe. Setelah terinisiasi, tipe tidak bisa diubah:

```
var x = 10;
x = "text"; // COMPILE ERROR: incompatible types

```

## Batasan `var`

- Hanya untuk **local variables** (di dalam method/block). Tidak untuk fields, method parameters, return types.

- Harus ada initializer pada deklarasi.

- Tidak bisa menggunakan `null` sebagai initializer (tipe tidak bisa diinfer).

- Tidak bisa digunakan dengan lambda expression (tipe lambda ditentukan oleh target type).

```
var empty = null; // ERROR: cannot infer type
var x;           // ERROR: no initializer

```

## Diamond Operator (`<>`)

Java 7 memperkenalkan diamond operator untuk instance creation dengan generic class. Tipe generic disimpulkan dari context:

```
List<String> list = new ArrayList<>();
Map<Integer, String> map = new HashMap<>();

```

Ini mengurangi boilerplate.<>

## Type Inference dalam Lambda

Tipe parameter lambda dapat diinfer dari target type (functional interface). Contoh:

```
Predicate<String> p = s -> s.length() > 5; // s inferred as String
BinaryOperator<Integer> op = (a, b) -> a + b; // a,b inferred as Integer
Runnable r = () -> System.out.println("Run");

```

Jika menggunakan `var` untuk lambda, itu menjadi expression lambda, bukan kata kunci type inference.

## Benefits & Drawbacks

**Keunggulan:**

- Kode lebih ringkas, readability improved untuk tipe yang obvious.

- Mengurangi duplikasi tipe (misal `new ArrayList<String>()` → `new ArrayList<>()` sudah cukup).

**Kekurangan:**

- Bisa mengurangi readability jika tipe tidak jelas dari initializer.

- Hanya untuk lokal, jadi tidak bisa menggantikan semua deklarasi.

- Debugging: error messages terkadang lebih ambigu karena compiler menimbulkan inferred type.

## Best Practices

- Gunakan `var` ketika tipe dapat dipahami dari right-hand side (misal `var list = new ArrayList<String>();`).

- Hindari `var` jika initializer berupa literal sederhana yang tipe ambigu (misal `var i = 1; int or long? int, OK`; `var x = 0;` → int). Sebaiknya explisit jika tipe tidak jelas.

- Jangan gunakan `var` untuk field atau parameter method (tidak diizinkan).

- Diamond operator selalu digunakan pada instance creation generik.

Type inference adalah fitur modern yang membantu developer menulis kode yang lebih bersih tanpa mengorbankan type safety.