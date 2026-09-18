# Struktur Program Java

Program Java memiliki struktur ketat: minimal satu *class* berisi `main`. Memahami struktur ini kunci sebelum menulis kode kompleks dan memanfaatkan fitur modern Java 21.

## Komponen Dasar

### 1. Package (opsional)

Package mengorganisir kelas terkait. Tanpa deklarasi, class di *default package*.

```java
package com.example.app; // baris pertama file
```

Package memengaruhi akses default dan struktur direktori (`com/example/app/Main.java`).

### 2. Class

Semua kode harus dalam class/interface/enum/record.

```java
public class HelloWorld {
    // isi class
}
```

Nama class CamelCase dan jika `public`, harus sama dengan nama file.

### 3. Main Method — entry point JVM

```java
public static void main(String[] args)
```

- `public`: JVM dapat akses.
- `static`: tanpa instansiasi.
- `void`: tidak return.
- `String[] args`: argumen CLI.

Sejak Java 21, ada *unnamed class* preview untuk Hello World lebih ringkas, namun untuk pembelajaran tetap gunakan struktur lengkap.

## Contoh Lengkap

```java
// Package declaration (optional)
package myapp;

import java.util.Scanner;

public class MyApp {
    public static void main(String[] args) {
        System.out.println("Selamat datang di Java!");
        Scanner sc = new Scanner(System.in);
        System.out.print("Nama: ");
        System.out.println("Halo " + sc.nextLine());
        sc.close();
    }
}
```

## Kompilasi & Eksekusi

```bash
javac -d out src/myapp/MyApp.java
java -cp out myapp.MyApp
```

`-d` menentukan output directory, `-cp` classpath.

## Struktur Modern — records & sealed

Di Java 21, struktur program tidak hanya class biasa:

```java
public record Point(int x, int y) {}
public sealed interface Shape permits Circle, Rectangle {}
public final class Circle implements Shape { double r; Circle(double r){this.r=r;} }
public final class Rectangle implements Shape { double w,h; }
```

Records untuk data, sealed untuk hierarki tertutup — keduanya tetap mengikuti aturan file/class yang sama.

## Runnable — struktur + records (JDK 17)

```java
public record AppInfo(String name, String version) {}

public class Main {
    public static void main(String[] args) {
        var info = new AppInfo("Java Learning Path", "21 LTS");
        System.out.println("App: " + info.name() + " v" + info.version());
        System.out.println("Args: " + (args.length==0?"(none)":String.join(", ", args)));
        System.out.println("Struktur: package -> class/record -> main");
    }
}
```

Jalankan via Run — lihat record sebagai bagian struktur program modern yang tetap runnable di Judge0 JDK 17.

## Best Practice

- Satu public class per file, nama file = nama class.
- Package selalu lowercase (`com.company.project`).
- Untuk DTO, prefer `record` daripada class dengan getter/setter manual.
