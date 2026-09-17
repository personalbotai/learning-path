# Abstract Classes dan Methods

**Abstract class** tidak dapat diinstansiasi dan mungkin berisi **abstract methods** (tanpa implementasi) yang harus diimplementasikan oleh subclass konkret.

## Abstract Class

```
public abstract class Shape {
    String color;

    // concrete method
    void setColor(String color) {
        this.color = color;
    }

    // abstract method (no body)
    abstract double area();
}

```

Tidak bisa `new Shape()`. Subclass harus mengimplementasikan semua abstract methods, atau dideklarasikan abstract pula.

```
public class Circle extends Shape {
    double radius;

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

```

## Abstract Method

hanya deklarasi, tanpa body. Harus berada dalam abstract class.

```
abstract void draw();

```

## When to Use

- Bila ingin memberikan template yang memaksa subclass untuk mengimplementasikan certain behavior.

- Mau memiliki common code di superclass tapi juga require specific methods.

-  abstract class dapat memiliki fields, constructors, concrete methods.

## Difference vs Interface

- Abstract class bisa memiliki state (fields), interface hanya static final fields (sebelum Java 8).

- Interface bisa memiliki default methods (Java 8) dan static methods.

- Class dapat extends hanya satu abstract class, namun dapat implements banyak interface.

## Example: Template Method Pattern

```
abstract class DataProcessor {
    // Template method (final to prevent override)
    final void process() {
        read();
        parse();
        transform();
        save();
    }

    abstract void read();
    abstract void parse();
    void transform() { /* default no-op */ }
    abstract void save();
}

```

## Best Practice

- Gunakan abstract class ketika ada code reuse penting di antara subclasses.

- Else, gunakan interface untuk maximum flexibility.

- Tandai class abstract jika memiliki abstract method.

- Jangan membuat abstract class tanpa abstract methods? Bisa (misal untuk utility).

## Java Modern: Sealed Classes (Java 17/21 LTS)

`sealed class` membatasi subclass mana saja yang boleh meng-extend sebuah class menggunakan kata kunci `permits`:

```
public sealed abstract class Bentuk permits Lingkaran, Persegi {}

public final class Lingkaran extends Bentuk {}
public final class Persegi extends Bentuk {}
```

Sealed classes cocok untuk domain tertutup (payment status, AST node, hasil validasi) — compiler bisa memverifikasi exhaustiveness pada `switch` pattern matching.