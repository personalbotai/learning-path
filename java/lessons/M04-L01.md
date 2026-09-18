# Class dan Object Dasar

Java adalah bahasa berorientasi objek (OOP). Dua konsep fundamental: **class** dan .

- **Class**: blueprint yang mendefinisikan atribut (field) dan perilaku (method).

- **Object**: instance dari sebuah class.

## Mendefinisikan Class

```
public class Person {
    // fields (atribut)
    String name;
    int age;

    // method
    void greet() {
        System.out.println("Hello, I'm " + name);
    }
}

```

## Membuat Object (Instance)

```
Person p = new Person(); // instantiation
p.name = "Alice";
p.age = 25;
p.greet(); // output: Hello, I'm Alice

```

## Constructor

Constructor adalah method khusus yang dipanggil saat object dibuat. Nama sama dengan class, tidak ada return type.

```
public class Person {
    String name;
    int age;

    // Constructor default (tanpa parameter)
    public Person() {
        // bisa diisi inisialisasi default
    }

    // Constructor dengan parameter
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

```

Pakai constructor untuk memastikan object terinisialisasi dengan valid.

## Metode Getter dan Setter

Untuk encapsulation, fields biasanya private dengan accessor methods:

```
public class Person {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

```

## Kata kunci `this`

`this` merujuk ke instance saat ini. Digunakan untuk membedakan field dengan parameter nama sama, atau memanggil constructor lain (this(...)).

```
public void setName(String name) {
    this.name = name; // 'this.name' field, 'name' parameter
}

```

## Overloading Constructor

Class dapat memiliki lebih dari satu constructor dengan signature berbeda.

```
public Person() { this("Unknown", 0); } // delegasi
public Person(String name) { this(name, 18); }
public Person(String name, int age) { ... }

```

## Best Practice

- Buat constructor yang menginisialisasi semua field yang diperlukan.

- Gunakan getters/setters, hindari public field jika bisa.

- Perhatikan immutability: class dengan final fields dan tidak ada setter.

## Java Modern: Records (Java 16/21 LTS)

`record` adalah sintaks ringkas untuk mendefinisikan kelas pembawa data (data carrier) yang otomatis immutable — dilengkapi constructor, getter, `equals()`, `hashCode()`, dan `toString()` secara otomatis:

```
public record User(String name, int age) {}

User u = new User("Alex", 25);
System.out.println(u.name()); // akses langsung, bukan u.getName()
```

Gunakan `record` untuk DTO/model tanpa logika kompleks. Gunakan class biasa jika butuh mutability atau inheritance.

Ini adalah dasar untuk semua konsep OOP selanjutnya.