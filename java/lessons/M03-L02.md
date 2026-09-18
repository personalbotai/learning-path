# Loop Dasar (for, while, do-while)

Loop mengulang blok kode — fondasi iterasi koleksi, retry, dan stream pipeline. Pilih loop sesuai kapan kondisi diketahui.

## For Loop — jumlah iterasi diketahui

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i); // 0..4
}
// multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + "-" + j);
}
```

## For-Each Loop — koleksi/array tanpa index

```java
int[] numbers = {1,2,3,4,5};
for (int n : numbers) System.out.println(n);

List<String> list = List.of("a","b","c");
for (String s : list) System.out.println(s);
```

## While Loop — kondisi di awal

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
// infinite? while (true) { ... } — pastikan ada break
```

## Do-While — minimal sekali

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

Cocok untuk menu/input yang harus tampil minimal sekali.

## Iterasi dengan Index vs For-Each

Butuh index? pakai `for (int i=0; ...)`. Tidak butuh? `for-each` lebih bersih dan menghindari off-by-one.

## Pitfall

- Infinite loop jika variabel tidak berubah.
- Modifikasi koleksi saat for-each → `ConcurrentModificationException`; gunakan `Iterator.remove()` atau `removeIf`.
- Do-while jarang; prefer while/for untuk kejelasan.

## Runnable — semua loop + records (JDK 17)

```java
import java.util.*;

public record Siswa(String nama, int nilai) {}

public class Main {
    public static void main(String[] args) {
        // for
        System.out.print("for 1..3: ");
        for (int i = 1; i <= 3; i++) System.out.print(i + " ");
        System.out.println();
        // while
        int w = 3;
        System.out.print("while countdown: ");
        while (w > 0) { System.out.print(w + " "); w--; }
        System.out.println();
        // do-while
        int d = 0;
        System.out.print("do-while: ");
        do { System.out.print(d + " "); d++; } while (d < 2);
        System.out.println();
        // for-each dengan record
        var list = List.of(new Siswa("Andi",90), new Siswa("Budi",85));
        for (Siswa s : list) System.out.println(s.nama() + " -> " + s.nilai());
    }
}
```

Jalankan di editor — lihat tiap loop mencetak urutan yang benar. Modern: `record` membuat data loop tetap immutable.
