# Wrapper Classes

Di Java, tipe data primitif (int, double, boolean, char, dll.) bukan berasal dari class. Namun, banyak fitur Java (seperti generics, collections, dan reflection) hanya bekerja dengan objek (reference types). Untuk itulah Java menyediakan **wrapper classes** — class yang mewakili tipe primitif masing-masing.

## Daftar Wrapper Classes

PrimitifWrapper Class
byteByte
shortShort
intInteger
longLong
floatFloat
doubleDouble
booleanBoolean
charCharacter

## Autoboxing dan Unboxing

Sejak Java 5, pengkonversian antara primitif dan wrapper terjadi otomatis:

```
int i = 10;          // primitif
Integer iObj = i;    // autoboxing: int → Integer

int j = iObj;        // unboxing: Integer → int
Double d = 3.14;     // autoboxing literal ke Double
boolean flag = Boolean.TRUE; // unboxing

```

Autoboxing membuat kode lebih bersih, namun berhati-hatilah karena bisa menyebabkan `NullPointerException` jika wrapper null di-unbox:

```
Integer x = null;
int y = x; // NullPointerException!

```

## Mengapa Wrapper Diperlukan?

- **Collections**: `List<Integer>` tidak bisa menggunakan `int`.

- **Generics**: Parameter type harus reference type.

- **Reflection**: Class objects seperti `Integer.class`.

- **Utility methods**: `Integer.parseInt("123")`, `Double.valueOf("3.14")`, `Character.isLetter('a')`.

## Parsing dan Konversi

Wrapper menyediakan static methods untuk mengubah String ke tipe primitif:

```
int a = Integer.parseInt("100");
double b = Double.parseDouble("99.99");
boolean c = Boolean.parseBoolean("true");
char ch = "A".charAt(0);

```

Untuk konversi dari primitif ke String, gunakan `String.valueOf()` atau konkatenasi.

## Object vs. Primitive

- Primitif disimpan di *stack* (jika local), wrapper di *heap*.

- Wrapper memiliki `null` default, primitif memiliki nilai default (0, false, etc.).

- Wrapper mensupport methods (contoh `Integer.compare()`), primitif tidak.

## Best Practice

- Gunakan primitif kecuali diperlukan (seperti ketika bekerja dengan collections).

- Hindari membandingkan wrapper dengan `==`, karena itu membandingkan referensi; gunakan `.equals()` atau `compareTo()`.

- Jangan biarkan wrapper bernull jika akan di-unbox.

- Manfaatkan autoboxing untuk kode yang lebih readable, tapi pahami implikasi performa (boxing/unboxing overhead).