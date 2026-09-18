# If-Else dan Switch

Kontrol alur menentukan urutan eksekusi kode. Dua struktur pemilihan utama di Java: `if-else` dan `switch`.

## If-Else

Menjalankan blok kode berdasarkan kondisi boolean.

```
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("D");
}

```

Kondisi harus bertipe `boolean`. Tidak perlu kurung kurawal jika hanya satu statement (tapi disarankan selalu pakai braces).

## Switch Expression (Java 12+) atau Switch Statement

Switch memilih ekspresi berdasarkan nilai suatu variabel.

```
int day = 3;
String type;
switch (day) {
    case 1:
        type = "Senin";
        break;
    case 2:
        type = "Selasa";
        break;
    case 3:
        type = "Rabu";
        break;
    default:
        type = "Lainnya";
}
System.out.println(type);

```

Setiap `case` harus diakhiri `break` untuk menghindari fall-through. Jika tidak ada break, eksekusi akan "jatuh" ke case berikutnya.

## Switch dengan Arrow (Java 14+)

Sintaks modern (arrow) tidak memerlukan break, karena setiap case adalah ekspresisendiri:

```
String dayName = switch (day) {
    case 1 -> "Senin";
    case 2 -> "Selasa";
    case 3 -> "Rabu";
    default -> "Lainnya";
};
System.out.println(dayName);

```

Arrow switch juga bisa multi-case:

```
int n = 2;
String desc = switch (n) {
    case 1, 2 -> "Murah";
    case 3, 4, 5 -> "Sedang";
    default -> "Mahal";
};

```

## Switch pada String dan Enum

Switch juga bisa digunakan pada `String` dan `enum`:

```
String status = "ACTIVE";
switch (status) {
    case "ACTIVE": ... break;
    case "INACTIVE": ... break;
}

```

Untuk enum:

```
enum Size { SMALL, MEDIUM, LARGE }
Size s = Size.MEDIUM;
switch (s) {
    case SMALL -> System.out.println("Kecil");
    case MEDIUM -> System.out.println("Sedang");
    case LARGE -> System.out.println("Besar");
}

```

## Kesalahan Umum

- Lupa `break` pada switch statement (fall-through bisa disengaja tapi sering bug).

- Gunakan switch untuk tipe yang tidak compatibility (char, byte, short, int, String, enum). Dari Java 7 String didukung.

- Perbandingan dengan `==` pada String; switch menggunakan `.equals()` secara internal, jadi aman.

If-else lebih fleksibel untuk kondisi kompleks (range, multiple conditions). Gunakan switch untukEkuitas value-based.

## Java Modern: Pattern Matching untuk Switch (Java 21 LTS)

Java 21 LTS menyempurnakan switch dengan *pattern matching* untuk memeriksa tipe objek secara langsung tanpa `instanceof` manual:

```
static String formatObjek(Object obj) {
    return switch (obj) {
        case Integer i -> String.format("Angka bulat: %d", i);
        case String s  -> String.format("Teks panjang: %d", s.length());
        case null      -> "Objek bernilai null";
        default        -> obj.toString();
    };
}
```

Digabungkan dengan `sealed class`, compiler dapat memverifikasi bahwa semua kemungkinan subclass telah ditangani (exhaustiveness) tanpa perlu default branch.