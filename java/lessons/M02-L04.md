# Void dan Special Types

Java memiliki beberapa tipe khusus yang tidak umum digunakan sebagai tipe variabel, namun penting untuk dipahami.

## Tipe void

`void` menandakan bahwa sebuah method **tidak mengembalikan nilai**.void adalah bukan tipe data yang bisa digunakan untuk deklarasi variabel (kecuali sebagai parameter generik atau reflection). Contoh:

```
public void greet() {
    System.out.println("Hello");
}

```

Anda tidak bisa menulis `void x = null;` (invalid).void hanya valid sebagai return type dari method.

## Type null

`null` adalah literal yang merepresentasikan **tidak ada objek**.null adalah jenis `null type`; variabel dengan tipe reference dapat di-assign `null`:

```
String s = null;
Integer i = null;
Object o = null;

```

Attempting to dereference a `null` (mengakses method/field) will result in `NullPointerException` (NPE).

## Type Nothing (bukan tipeJika Anda ingin mengekspresikan “tipe apapun” atau “kosong”, gunakan:

- `void` untuk method yang tidak mengembalikan apapun.

- `null` untuk reference yang tidak menunjuk ke objek.

- `Void` (parameterized) untuk reflection: `Class<Void>`.

## Special Primitive Values

Setiap tipe primitif memiliki nilai default dan some special values:

- `boolean`: default `false`; hanya `true` atau `false`.

- `char`: default `\u0000` (null character).

- `integral types`: default `0`.

- `float/double`: default `0.0`, also `NaN` (not a number) dan `Infinity` dari operasi tertentu (contoh 1.0/0.0 = Infinity).

```
double d = 0.0 / 0.0; // NaN
double inf = 1.0 / 0.0; // Infinity

```

## Check for NaN

Nilai `NaN` tidak sama dengan apa pun, bahkan dengan dirinya sendiri. Gunakan `Double.isNaN()` atau `Float.isNaN()`.

```
if (Double.isNaN(d)) {
    System.out.println("Not a number");
}

```

## Void dalam Generics (Void Class)

Kelas `java.lang.Void` adalahmewakili the `void` type when used as a generic parameter. Tidak dapat diinstansiasi. Sering digunakan dalam `Future<Void>` atau `Callable<Void>` ketika tugas tidak mengembalikan hasil.

## Tips & Pitfall

- Jangan comparing `null` dengan `==` ketika memeriksa apakah sebuah reference adalah null? Justru `== null` itu valid untuk memeriksa null.

- `null` tidak dapat dipanggil method (NPE).

- `void` bukan tipe data untuk variabel; hanya untuk return type method.

- `NaN` tidak bisa dibandingkan dengan `==`, gunakan `isNaN()`.