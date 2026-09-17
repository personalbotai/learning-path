# Polymorphism (Polimorfisme)

Polymorphism memungkinkan sebuah entity (seperti method atau object) memiliki banyak bentuk. Dalam Java, polymorphism muncul melalui:

- **Method overriding** (runtime polymorphism).

- **Method overloading** (compile-time polymorphism).

- Reference type vs. actual object type.

## Method Overriding

Subclass memberikan implementasi spesifik untuk method yang sudah didefinisikan di superclass. Dipanggil berdasarkan actual object type (dynamic dispatch).

```
class Animal {
    void speak() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof"); }
}
class Cat extends Animal {
    @Override
    void speak() { System.out.println("Meow"); }
}

Animal a1 = new Dog();
Animal a2 = new Cat();
a1.speak(); // Woof (actual objectDog)
a2.speak(); // Meow

```

## Method Overloading

Multiple methods dengan nama sama tapi parameter list berbeda (tipe/quantity). Overloading terjadi di dalam satu class.

```
class Calculator {
    int add(int a, int b) { return a+b; }
    double add(double a, double b) { return a+b; }
    int add(int a, int b, int c) { return a+b+c; }
}

```

Compiler memilih method berdasarkan compile-time tipe argumen.

## Reference Type vs Object Type

Sebuah reference dinyatakan dengan tipe tertentu, namun dapat menunjuk ke instance subclass.

```
List list = new ArrayList<>(); // List (interface) reference, ArrayList object.

```

Method calls (instance methods) menggunakan actual object type. Fields tidak polymorphic (field access bersifat compile-time).

## Polymorphic Parameters

Method dapat menerima parameter supertype, lalu menggunakan polymorphism di dalamnya:

```
void paintAll(List shapes) {
    for (Shape s : shapes) {
        s.draw(); // draw sesuai actual shape (Circle, Rect, ...)
    }
}

```

## Polimorfisme: Abstract Class dan Interface

Anda dapat menggunakan abstract class atau interface sebagai reference type:

```
Runnable r = new MyTask(); // interface
Object obj = new String("hi"); // Object is superclass of all

```

## Best Practice

- Favor polymorphism dengan menggunakan supertype reference (contoh: `List list = new ArrayList()`).

- Override annotation wajib untuk method overriding.

- Hindari polymorphic field access; gunakan getters.

- Design abstraksi yang sesuai agar fleksibel.