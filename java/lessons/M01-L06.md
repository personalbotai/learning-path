# Hello World

Selamat! Anda telah memahami instalasi, struktur program, variabel, dan I/O. Saatnya menulis program pertama: **Hello World** — tradisi sejak Kernighan & Ritchie (1978).

## Kode Hello World

Buat file `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Ingat:
- Nama file harus persis `HelloWorld.java` (case-sensitive, sesuai public class).
- Kode berada di `main` — entry point yang dipanggil JVM.
- Setiap statement diakhiri `;`.

## Kompilasi

```bash
javac HelloWorld.java
```

Jika sukses, terbentuk `HelloWorld.class` (bytecode). `javac` adalah compiler, `java` adalah launcher.

## Eksekusi

```bash
java HelloWorld
```

Output:

```
Hello, World!
```

Jangan tulis `java HelloWorld.class` — cukup nama class. Pastikan di direktori yang mengandung `.class`.

## Penjelasan Detail

- `public class HelloWorld` — class publik, dapat diakses JVM.
- `public static void main(String[] args)`:
  - `public`: JVM dapat memanggil dari luar.
  - `static`: tanpa instansiasi.
  - `void`: tidak return value.
  - `String[] args`: argumen command-line (`java HelloWorld arg1 arg2`).
- `System.out.println(...)` — `System.out` adalah `PrintStream`, `println` cetak + newline.

## Variasi — args & printf

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Args count: " + args.length);
        for (int i=0;i<args.length;i++) System.out.printf("args[%d]=%s%n", i, args[i]);
        System.out.println("Hello, World!");
    }
}
```

Jalankan: `java Main Alice Bob` → lihat args tercetak.

## Runnable — Hello World + record (JDK 17)

```java
public record Greeting(String message) {}

public class Main {
    public static void main(String[] args) {
        var g = new Greeting("Hello, World!");
        System.out.println(g.message());
        System.out.println("Record: " + g);
        System.out.printf("Args: %s%n", args.length==0 ? "(none)" : String.join(", ", args));
    }
}
```

Record membuat data greeting immutable tanpa boilerplate. Copy ke editor dan Run (Judge0 JDK 17) — lihat `record` bekerja sebagai data carrier modern.

## Error Umum

- `error: class HelloWorld is public, should be declared in a file named HelloWorld.java` → nama file salah.
- `Error: Could not find or load main class` → salah direktori/classpath.
- Lupa `;` → compile error.
