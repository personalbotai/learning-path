# Enum dan Constants

Enumeration (`enum`) adalah tipe khusus yang mewakili **kumpulan nilai konstanta**. Enum lebih type-safe dan expressive daripada using integer constants.

## Mengapa Enum?

Sebelum enum, developer menggunakan integer constants:

```
public static final int RED = 1;
public static final int GREEN = 2;
public static final int BLUE = 3;

```

Masalah: tidak ada type safety, mudah melakukan assignment nilai yang tidak valid (misal red = 5).

## Mendefinisikan Enum

```
enum Color {
    RED,
    GREEN,
    BLUE
}

```

Setiap nilai (RED, GREEN, BLUE) adalah instance dari class `Color`.

## Menggunakan Enum

```
Color c = Color.RED;
if (c == Color.RED) {
    System.out.println("Merah");
}

```

Enum bisa digunakan dalam switch:

```
switch (c) {
    case RED:
        System.out.println("Stop");
        break;
    case GREEN:
        System.out.println("Go");
        break;
    case BLUE:
        System.out.println("Blue");
        break;
}

```

## Enum dengan Fields dan Methods

Enum dapat memiliki attributes dan behavior:

```
enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6);

    private final double mass;   // in kilograms
    private final double radius; // in meters

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double mass() { return mass; }
    public double radius() { return radius; }

    // Contoh method
    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}

```

## Enum Methods

- `values()`: mengembalikan array semua constants (urutan deklarasi).

- `valueOf(String name)`: mengembalikan enum instance sesuai nama.

- `name()`: mengembalikan nama constant (String).

- `ordinal()`: posisi ordinal (0-based).

```
Color[] all = Color.values();
Color green = Color.valueOf("GREEN");

```

## Constants Lainnya

Static final fields digunakan untuk nilai konstanta yang tidak perlu enum (misalnyamatematika constants):

```
public class MathConst {
    public static final double PI = 3.141592653589793;
    public static final double E = 2.718281828459045;
}

```

Enum lebih disarankan untuk kumpulan nilai yang finite dan operasional (seperti status, tipe, negara).

## Best Practice

- Gunakan enum untuk mewakili fixed set of constants (seperti hari dalam seminggu, status, mode).

- Hindari menyimpan state mutable dalam enum; atribut biasanya final.

- Enum bisa implements interface, namun tidak bisa extends class (karena sudah extends java.lang.Enum).