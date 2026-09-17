public class Main {
    public static void main(String[] args) {
        // Demonstrates basic class structure
        Greeting g = new Greeting();
        g.sayHello();
    }
}

class Greeting {
    void sayHello() {
        System.out.println("Hello from a second class!");
    }
}