# Break dan Continue

Dua statement untuk mengendalikan alur loop: `break` (hentikan) dan `continue` (lewati iterasi). Keduanya membuat logika pencarian dan filter menjadi ekspresif.

## Break — hentikan loop/switch

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // keluar saat i == 5
    System.out.println(i); // 0-4
}
```

Dalam nested loop, `break` hanya keluar dari loop terdalam. Untuk keluar dari keduanya, gunakan *labeled break*:

```java
outer:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 6) break outer; // keluar kedua loop
        System.out.println(i + "," + j);
    }
}
```

## Continue — lompat ke iterasi berikutnya

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // skip genap
    System.out.println(i); // hanya ganjil: 1,3,5,7,9
}
```

Labeled continue juga tersedia untuk loop luar.

## Break dalam Switch

Tanpa `break`, eksekusi fall-through ke case berikutnya — sumber bug klasik. Switch expression (`->`, Java 14+) menghindari ini.

```java
String grade = switch (score) {
    case 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 -> "A";
    case 80 -> "B";
    default -> "C";
};
```

## Kapan Digunakan?

- `break`: ketemu target, validasi gagal, atau kondisi akhir.
- `continue`: filter elemen yang tidak perlu diproses tanpa nesting dalam.

## Pitfall

- Hanya berlaku di loop/switch — di luar itu compile error.
- Labeled break/continue mengurangi readability; prefer extract-method jika logika rumit.
- Pastikan kondisi `break` pasti tercapai agar tidak infinite loop.

## Runnable — filter dengan continue (Judge0 JDK 17)

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(1,2,3,4,5,6,7,8,9,10);
        System.out.print("Ganjil: ");
        for (int n : nums) {
            if (n % 2 == 0) continue;
            System.out.print(n + " ");
        }
        System.out.println();
        System.out.print("Cari 7 lalu break: ");
        for (int n : nums) {
            System.out.print(n + " ");
            if (n == 7) { System.out.print("(ketemu!)"); break; }
        }
        System.out.println();
    }
}
```

## Alternatif Modern — Streams

Untuk filter, `Stream.filter` sering lebih deklaratif dari `continue`; pilih sesuai konteks readability.
