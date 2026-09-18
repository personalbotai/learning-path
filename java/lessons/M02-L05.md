# Type Casting

Type casting adalah konversi nilai dari satu tipe data ke tipe lainnya. Ada dua jenis:

- Widening (implicit) — aman, dilakukan otomatis.

- Narrowing (explicit) — berisiko kehilangan data, perlu cast eksplisit.

## Widening (Implicit)

Konversi dari tipe lebih kecil ke tipe lebih besar secara otomatis:

```
int i = 100;
long l = i;          // int → long (implicit)
float f = i;         // int → float
double d = f;        // float → double
char c = 'A';
int code = c;        // char → int

```

Tipe primitif dapat widening tanpaKehilangan data signifikan (kecuali dari long ke int, yang narrowing).

## Narrowing (Explicit Cast)

Konversi dari tipe lebih besar ke lebih kecil memerlukan cast eksplisit:

```
double d = 99.99;
int i = (int) d;  // hasil 99 (potongan desimal)
long l = 100L;
int j = (int) l;  // aman jika nilai dalam range int

```

Jika nilai melebihi capacity tipe target, hasilnya dapat terpotong (overflow) tanpa exception.

## Cast pada Reference Types

Class hierarchy juga mendukung upcasting dan downcasting:

```
class Animal {}
class Dog extends Animal {}

Animal a = new Dog(); // upcast (implicit)
Dog d = (Dog) a;      // downcast (explicit)

```

Jika nilai reference tidak sejenis, maka akan dilemparkan `ClassCastException` saat runtime.

## instanceof Operator

Untuk menghindari `ClassCastException`, gunakan `instanceof`:

```
if (a instanceof Dog) {
    Dog d = (Dog) a; // safe
}

```

Sejak Java 16, Anda bisa menggunakan *pattern matching*:

```
if (a instanceof Dog d) {
    System.out.println("Breed: " + d.getBreed());
}

```

## Primitif ↔ Wrapper Casting

Autoboxing/unboxing menghindari cast manual:

```
int i = 10;
Integer iObj = i; // autobox
int j = iObj; // unbox

```

Namun, cast eksplisit bisa diperlukan di beberapa situasi:

```
Object o = Integer.valueOf(10);
int x = (Integer) o; // downcast dari Object ke Integer lalu unbox ke int

```

## Casting pada void && null

`null` dapat di-cast ke tipe reference apa pun:

```
String s = (String) null; // legal, s = null

```

Tidak ada cast untuk tipe primitif dari `null` (sebab `null` bukan primitif).

## Pitfalls & Best Practices

- Hindari narrowing cast pada tipe floating-point ke integer jika nilai desimal penting.

- Gunakan `Math.round()`, `ceil()`, atau `floor()` jika ingin membulatkan.

- Jangan lakukan downcast tanpa cek `instanceof`.

- Widening aman, tetapi bisa mengubah nilai (misal int→double mengubah 10 menjadi 10.0).

- Untuk konversi String ke tipe lain, gunakan wrapper methods (misal `Integer.parseInt()`) bukan casting.