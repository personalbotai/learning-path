# Throw dan Throws

`throw` **melempar** instance exception; `throws` **mendeklarasikan** di signature bahwa method dapat melempar checked exception ke caller. Keduanya adalah kontrak error handling Java.

## Throw — melempar instance

```java
public void setAge(int age) {
    if (age < 0) throw new IllegalArgumentException("Age cannot be negative: " + age);
    this.age = age;
}
// custom exception
class SaldoTidakCukupException extends RuntimeException {
    SaldoTidakCukupException(String msg){ super(msg); }
}
void tarik(double jumlah){
    if (jumlah > saldo) throw new SaldoTidakCukupException("Saldo kurang");
    saldo -= jumlah;
}
```

Selalu `throw new XException(...)` — throw butuh objek, bukan class.

## Throws — deklarasi di method

Jika method melempar checked exception, wajib dideklarasikan:

```java
public String readFile(String path) throws IOException {
    return Files.readString(Path.of(path));
}
// caller harus handle:
try {
    String c = readFile("file.txt");
} catch (IOException e) {
    e.printStackTrace();
}
```

Multiple: `throws IOException, ParseException`. Unchecked (`RuntimeException`) tidak wajib dideklarasikan.

## Checked vs Unchecked — kapan pakai?

- **Checked**: kondisi recoverable (I/O, network, parsing) — caller diharapkan handle.
- **Unchecked**: programming error (illegal argument, null, index) — fail fast.

## Throwable vs Exception — jangan throw Error

`Error` untuk kondisi fatal JVM (OutOfMemoryError). Aplikasi hanya throw `Exception`/`RuntimeException`.

## Chaining — bungkus cause

```java
try {
    risky();
} catch (IOException e) {
    throw new RuntimeException("Gagal proses", e); // sertakan cause
}
```

Gunakan `e.getCause()` untuk root cause.

## Sealed Exception Hierarchy (Java 17+)

Untuk domain error tertutup, sealed memberi exhaustiveness di switch:

```java
public sealed class AppError extends RuntimeException permits ValidationError, NotFoundError {}
public final class ValidationError extends AppError { ValidationError(String m){super(m);} }
public final class NotFoundError extends AppError { NotFoundError(String m){super(m);} }
```

## Runnable — throw/throws + sealed (JDK 17)

```java
import java.io.*;
import java.nio.file.*;

public sealed class AppError extends RuntimeException permits ValidationError, NotFoundError {
    AppError(String m){ super(m); }
}
final class ValidationError extends AppError { ValidationError(String m){ super(m); } }
final class NotFoundError extends AppError { NotFoundError(String m){ super(m); } }

public class Main {
    static void validasiUmur(int umur) {
        if (umur < 18) throw new ValidationError("Umur belum 18: " + umur);
        System.out.println("Akses diterima umur " + umur);
    }
    static String baca(String p) throws IOException {
        return Files.readString(Path.of(p)); // checked — wajib throws
    }
    public static void main(String[] args) {
        try { validasiUmur(15); }
        catch (AppError e) {
            System.out.println("Tertangkap: " + e.getClass().getSimpleName() + " -> " + e.getMessage());
        }
        validasiUmur(20);
        System.out.println("Selesai tanpa error");
    }
}
```

Jalankan di editor — lihat sealed hierarchy + throw/throws bekerja, compiler memverifikasi permits.

## Best Practice

- Beri pesan deskriptif saat `throw new`.
- Sertakan cause saat wrap exception.
- Buat custom exception jika semantik berbeda; pertimbangkan sealed untuk set error tertutup.
