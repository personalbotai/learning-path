# Interfaces Dasar

**Interface** adalah kontrak — mendefinisikan method yang harus diimplementasikan class. Sejak Java 8, interface juga boleh memiliki `default` dan `static` methods; sejak Java 9, `private` methods.

## Definisi

```java
public interface Drawable {
    void draw(); // implisit public abstract
}
public class Circle implements Drawable {
    @Override public void draw(){ System.out.println("Drawing circle"); }
}
```

Class dapat implements multiple interfaces:

```java
class MyClass implements Runnable, AutoCloseable {
    public void run(){}
    public void close(){}
}
```

## Default Methods (Java 8+)

Memberi implementasi default tanpa memaksa semua implementor override:

```java
public interface Logger {
    void log(String msg);
    default void logInfo(String msg){ log("[INFO] " + msg); }
    default void logError(String msg){ log("[ERROR] " + msg); }
}
```

## Static Methods di Interface

```java
public interface MathUtil {
    static int square(int x){ return x*x; }
}
int y = MathUtil.square(5); // 25
```

Dipanggil via `InterfaceName.method()`.

## Constant Fields

```java
public interface Status { int OK = 200; } // public static final implisit
```

## Sealed Interface (Java 17+)

```java
public sealed interface Payment permits QrisPayment, CashPayment {}
public final class QrisPayment implements Payment {}
public final class CashPayment implements Payment {}
```

Compiler memastikan hanya permits yang boleh implement — berguna untuk exhaustive switch.

## Functional Interface

Hanya satu abstract method — target untuk lambda:

```java
@FunctionalInterface interface Operasi { int hitung(int a, int b); }
Operasi tambah = (a,b) -> a+b;
```

## Runnable — interface + records + sealed (JDK 17)

```java
public sealed interface Pembayaran permits QrisPayment, TunaiPayment {
    void bayar(double jumlah);
    default void struk(double jumlah){
        System.out.println("[STRUK] Bayar: Rp " + jumlah);
    }
}
public final class QrisPayment implements Pembayaran {
    public void bayar(double j){ System.out.println("QRIS Rp " + j + " berhasil"); }
}
public final class TunaiPayment implements Pembayaran {
    public void bayar(double j){ System.out.println("Tunai Rp " + j + " diterima"); }
}
public record Transaksi(String id, double jumlah, String metode) {}
public class Main {
    public static void main(String[] args) {
        Pembayaran p1 = new QrisPayment();
        Pembayaran p2 = new TunaiPayment();
        p1.bayar(75000); p1.struk(75000);
        p2.bayar(50000); p2.struk(50000);
        var t = new Transaksi("TX-001", 75000, "QRIS");
        System.out.println("Record transaksi: " + t);
    }
}
```

Sealed interface + records + default method — semua runnable di Judge0 JDK 17 tanpa flag tambahan.

## Best Practice

- Program to interface: `List` bukan `ArrayList` sebagai tipe reference.
- Gunakan default method untuk evolusi API tanpa break implementor lama.
- Untuk hierarki tertutup, prefer `sealed interface` agar switch exhaustive.
