# Inheritance (Pewarisan)

Inheritance memungkinkan *subclass* mewarisi field & method dari *superclass* — hubungan "is-a". Fondasi OOP bersama polymorphism dan encapsulation.

## Syntax Dasar

```java
class Animal {
    String name;
    void eat() { System.out.println(name + " is eating"); }
}
class Dog extends Animal {
    void bark() { System.out.println(name + " says: Woof!"); }
}
Dog d = new Dog(); d.name="Buddy"; d.eat(); d.bark();
```

`Dog` mewarisi `name` dan `eat()` dari `Animal`. Java hanya single class inheritance (multiple via interface).

## Upcast — reference superclass

```java
Animal a = new Dog(); // upcast implisit
 a.eat(); // dynamic dispatch: Dog jika override, else Animal
// a.bark(); // ERROR: Animal tidak punya bark()
if (a instanceof Dog dog) dog.bark(); // pattern matching Java 16+
```

## Method Overriding

```java
class Animal { void makeSound(){ System.out.println("Animal sound"); } }
class Dog extends Animal {
    @Override void makeSound(){ System.out.println("Woof!"); }
}
Animal a1 = new Dog(); a1.makeSound(); // Woof — runtime pilih Dog
```

`@Override` membantu compiler deteksi salah signature.

## Kata Kunci `super`

```java
class Dog extends Animal {
    Dog(String name){ super.name=name; } // akses field superclass
    @Override void makeSound(){
        super.makeSound(); // panggil versi superclass
        System.out.println("Woof!");
    }
}
```

`super()` memanggil constructor superclass — harus baris pertama constructor.

```java
class Animal { Animal(String n){ this.name=n; } }
class Dog extends Animal { Dog(String n){ super(n); } }
```

## Sealed Inheritance (Java 17+) — hierarki terkontrol

```java
public sealed class Hewan permits Kucing, Anjing {}
public final class Kucing extends Hewan {}
public final class Anjing extends Hewan {}
// compiler jamin hanya Kucing/Anjing yang boleh extend Hewan
```

Cocok untuk domain tertutup (payment, AST, state machine) — exhaustiveness di switch pattern matching.

## Runnable — inheritance + sealed + records (JDK 17)

```java
public sealed class Hewan permits Kucing, Anjing {
    String nama; Hewan(String n){ nama=n; }
    void bersuara(){ System.out.println(nama + " bersuara"); }
}
public final class Kucing extends Hewan {
    Kucing(String n){ super(n); }
    @Override void bersuara(){ System.out.println(nama + ": Meow!"); }
}
public final class Anjing extends Hewan {
    Anjing(String n){ super(n); }
    @Override void bersuara(){ System.out.println(nama + ": Guk!"); }
}
public record Info(String jenis, String nama) {}
public class Main {
    public static void main(String[] args) {
        Hewan h1 = new Kucing("Mimi");
        Hewan h2 = new Anjing("Bruno");
        h1.bersuara(); h2.bersuara();
        // pattern matching instanceof (Java 16+)
        if (h1 instanceof Kucing k) System.out.println("Ditemukan kucing: " + k.nama);
        var info = new Info(h1.getClass().getSimpleName(), h1.nama);
        System.out.println("Record info: " + info);
    }
}
```

Sealed membatasi pewarisan, record menyimpan info immutable. Jalankan via Run (Judge0 JDK 17) — keduanya runnable tanpa preview flag.

## Best Practice

- Favor composition over inheritance jika bukan hubungan is-a murni.
- Gunakan `sealed` untuk hierarki yang harus tertutup dan verifiable.
- Selalu annotasi `@Override` dan panggil `super` hanya jika perlu perilaku induk.
