import java.util.*;

abstract class Animal {
    abstract void speak();
}

class Dog extends Animal {
    @Override void speak() { System.out.println("Woof"); }
}
class Cat extends Animal {
    @Override void speak() { System.out.println("Meow"); }
}

public class Main {
    static void makeAllSpeak(List<? extends Animal> animals) {
        for (Animal a : animals) {
            a.speak();
        }
    }

    public static void main(String[] args) {
        List<Animal> zoo = new ArrayList<>();
        zoo.add(new Dog());
        zoo.add(new Cat());

        makeAllSpeak(zoo); // Polymorphic calls

        // Overloading example
        Calculator calc = new Calculator();
        System.out.println("int sum: " + calc.add(1,2));
        System.out.println("double sum: " + calc.add(1.5,2.5));
    }
}

class Calculator {
    int add(int a, int b) { return a+b; }
    double add(double a, double b) { return a+b; }
}