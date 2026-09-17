class Animal {
    String name;

    Animal(String name) { this.name = name; }

    void makeSound() {
        System.out.println(name + " makes a sound");
    }
}

class Dog extends Animal {
    Dog(String name) { super(name); }

    @Override
    void makeSound() {
        super.makeSound();
        System.out.println(name + " says: Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog("Rex");
        a.makeSound(); // calls Dog's override
    }
}