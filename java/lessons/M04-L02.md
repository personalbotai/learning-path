# Access Modifiers

Access modifiers mengendalikan visibilitas class, field, dan method di Java. Ada empat tingkat akses — pemilihan yang tepat adalah kunci enkapsulasi dan desain API yang premium.

| Modifier | Dalam class | Package | Subclass (luar package) | Luar package |
|---|---|---|---|---|
| `private` | Ya | Tidak | Tidak | Tidak |
| *default* (no modifier) | Ya | Ya | Tidak | Tidak |
| `protected` | Ya | Ya | Ya | Tidak |
| `public` | Ya | Ya | Ya | Ya |

## Private — enkapsulasi inti

Hanya bisa diakses di dalam class yang sama. Ideal untuk field yang harus dijaga invariannya.

```java
public class BankAccount {
    private double balance;
    private final String owner;

    public BankAccount(String owner, double initial) {
        this.owner = owner;
        this.balance = initial;
    }
    public double getBalance() { return balance; }
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Jumlah harus positif");
        balance += amount;
    }
    public boolean withdraw(double amount) {
        if (amount > balance) return false;
        balance -= amount;
        return true;
    }
}
```

## Default (Package-Private)

Jika tanpa modifier, anggota hanya可见 di package yang sama. Cocok untuk helper internal.

```java
class Helper { // package-private class
    void assist() { System.out.println("Helper internal package"); }
}
```

## Protected

Visible di package sama + subclass di package lain — untuk extension point framework.

```java
public class Animal {
    protected String name;
    protected void speak() { System.out.println(name + " bersuara"); }
}
public class Dog extends Animal {
    void print() { System.out.println(name); } // OK: protected lewat inheritance
}
```

## Public

Terbuka untuk semua. Gunakan hemat — setiap public adalah komitmen API.

## Class-Level Access

Top-level class hanya boleh `public` (nama file harus sama) atau package-private. Tidak bisa `private`/`protected`.

## Interface Members

Di interface, method otomatis `public abstract` (pre-Java 8) dan field `public static final`.

## Runnable: enkapsulasi + record (Java 16+)

```java
public record Akun(String owner, double saldo) {}

public class Main {
    public static void main(String[] args) {
        var a = new BankAccount("Budi", 500_000);
        a.deposit(150_000);
        System.out.println("Saldo: Rp " + a.getBalance());
        var r = new Akun("Budi", a.getBalance());
        System.out.println("Record akun: " + r);
    }
}
```

Jalankan di editor (Run → Judge0 JDK 17) untuk melihat encapsulation bekerja + record sebagai immutable DTO.

## Best Practice

- Field selalu `private`, akses via getter/setter yang validasi.
- `public` hanya untuk API yang benar-benar diekspos.
- Hindari `protected` field; prefer `protected` method untuk hook.
- Dalam Java 21, pertimbangkan `record` untuk data carrier — field final otomatis private.
