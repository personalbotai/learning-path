# Instalasi Java & IDE

Sebelum menulis kode, instal **Java Development Kit (JDK)** — berisi compiler `javac`, runtime `java`, dan library standar. Rekomendasi LTS: **Java 21** (atau minimal 17 untuk Judge0).

## Langkah 1: Unduh JDK

- **Adoptium Temurin** (https://adoptium.net) — open-source, LTS.
- **Oracle JDK** atau **OpenJDK** dari jdk.java.net.
- Linux: `apt install openjdk-21-jdk` (Debian/Ubuntu) atau `pkg install openjdk-21` di Termux.
- Windows/macOS: installer dari Adoptium — ikuti wizard.

Pilih versi 21 untuk virtual threads & pattern matching terbaru; 17 tetap kompatibel untuk Judge0.

## Langkah 2: Variabel Lingkungan

```bash
# Linux/macOS ~/.bashrc atau ~/.zshrc
export JAVA_HOME=$HOME/opt/jdk-21
export PATH=$JAVA_HOME/bin:$PATH
# Windows: set JAVA_HOME di System Properties -> Environment Variables
```

Restart terminal setelahnya. `JAVA_HOME` digunakan Maven/Gradle/Tomcat.

## Langkah 3: Verifikasi

```bash
java -version
javac -version
# output: openjdk 21.0.x atau 17.0.x
```

Keduanya harus menampilkan versi. Jika tidak, cek PATH.

## Langkah 4: IDE

- **IntelliJ IDEA** (Community/Ultimate) — paling powerful untuk Java.
- **Visual Studio Code** + Extension Pack for Java — ringan.
- **Eclipse** — klasik, gratis.

Untuk learning path ini, cukup browser — editor & Judge0 sudah terintegrasi, tanpa instalasi lokal.

## Langkah 5: Build Tools (opsional)

- **Maven**: `mvn -version`
- **Gradle**: `gradle -version`

Keduanya mengelola dependency dan build lifecycle; tidak wajib untuk 30 pelajaran awal.

## Runnable — cek versi (JDK 17, Judge0)

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("java.version: " + System.getProperty("java.version"));
        System.out.println("java.vendor : " + System.getProperty("java.vendor"));
        System.out.println("JAVA_HOME  : " + System.getenv("JAVA_HOME"));
        // records & sealed — bukti JDK modern
        record Info(String jdk, String status){}
        var info = new Info(System.getProperty("java.version"), "Setup OK");
        System.out.println("Record cek: " + info);
    }
}
```

Copy ke editor dan Run — Judge0 akan mencetak versi JDK 17 yang sebenarnya, membuktikan toolchain hidup.

## Troubleshooting

- `javac: command not found` → PATH belum benar atau hanya JRE terinstal (butuh JDK).
- `UnsupportedClassVersionError` → compile dengan JDK lebih baru dari runtime; samakan versi.
- Di Termux, pastikan `pkg update && pkg install openjdk-17` lalu `java -version`.
