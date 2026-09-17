interface Greetable {
    void greet();
    default void greetTwice() {
        greet();
        greet();
    }
}

class Person implements Greetable {
    private String name;
    Person(String name) { this.name = name; }

    @Override
    public void greet() {
        System.out.println("Hello, I'm " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Greetable p = new Person("Alice");
        p.greet();       // Hello, I'm Alice
        p.greetTwice(); // Hello, I'm Alice (twice)
    }
}