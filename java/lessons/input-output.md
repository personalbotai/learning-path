# Input & Output

Input dan output (I/O) adalah cara program berinteraksi dengan pengguna atau environment. Java menyediakan several cara sederhana untuk I/O tekstual melalui package `java.io` dan `java.util`.

## Output ke Console

`System.out` adalah `PrintStream` yang digunakan untuk menampilkan teks ke console:

```
System.out.println("Hello World"); // plus newline
System.out.print("Tanpa newline");
System.out.printf("Nilai: %.2f%n", 3.14159); // formatted

```

Method `printf` memformat string dengan pola seperti `%d` (integer), `%f` (float), `%s` (string), dan `%n` untuk newline (portabel).

## Input dari Keyboard

Gunakan class `Scanner` dari package `java.util`:

```
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Masukkan nama: ");
        String nama = scanner.nextLine();
        System.out.print("Masukkan umur: ");
        int umur = scanner.nextInt();
        System.out.println("Halo " + nama + ", umur " + umur);
        scanner.close(); // always close when done
    }
}

```

## Parsing Tipe Data

`Scanner` memiliki method untuk membaca berbagai tipe:

- `nextInt()`, `nextDouble()`, `nextLong()`, `nextBoolean()`

- `nextLine()` — membaca sisa baris (perlu hati-hati setelah `nextInt()` karena newline tertinggal).

- `next()` — membaca token berikutnya (delimited by whitespace).

Jika input tidak sesuai tipe, akan terjadi `InputMismatchException`. Selalu validasi dan tangani exception.

## Contoh Sederhana Interaktif

```
import java.util.Scanner;

public class KalkulatorSederhana {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Masukkan angka pertama: ");
        double a = sc.nextDouble();
        System.out.print("Masukkan operator (+ - * /): ");
        char op = sc.next().charAt(0);
        System.out.print("Masukkan angka kedua: ");
        double b = sc.nextDouble();
        double hasil = 0;
        switch (op) {
            case '+': hasil = a + b; break;
            case '-': hasil = a - b; break;
            case '*': hasil = a * b; break;
            case '/': hasil = a / b; break;
            default: System.out.println("Operator tidak dikenal"); return;
        }
        System.out.printf("Hasil: %.2f%n", hasil);
        sc.close();
    }
}

```

## IO File Dasar (Preview)

Untuk file, gunakan `java.io.File`, `FileReader`, `FileWriter`, atau `Files` dari Java NIO. Contoh nanti akan dibahas di modul File I/O.

## Tips:

- Selalu tutup `Scanner` atau resource lain dengan `close()` atau gunakan try-with-resources (Java 7+).

- Gunakan `System.err.println()` untuk output error.

- Hindari `Scanner` untuk high-performance I/O; gunakan `BufferedReader` di modus lanjutan.