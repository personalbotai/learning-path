class Person {
    private String name;
    private int age;

    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    void greet() {
        System.out.println("Hello, I'm " + name + ", age " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.greet();

        Person p2 = new Person("Alice", 25);
        p2.greet();
    }
}