import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Demonstrate unchecked exception via throw
        int age = -5;
        try {
            validateAge(age);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught unchecked: " + e.getMessage());
        }

        // Demonstrate checked exception that must be caught or declared
        try {
            readConfig("missing.txt");
        } catch (IOException e) {
            System.out.println("Caught checked: " + e);
        }

        // Custom checked exception example
        try {
            processOrder(-1);
        } catch (InvalidOrderException e) {
            System.out.println("Order error: " + e.getMessage());
        }
    }

    // Throws unchecked exception (no 'throws' needed)
    static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }

    // Throws a checked exception (must declare)
    static void readConfig(String path) throws IOException {
        throw new FileNotFoundException("File not found: " + path);
    }

    // Custom checked exception
    static void processOrder(int amount) throws InvalidOrderException {
        if (amount <= 0) {
            throw new InvalidOrderException("Order amount must be positive");
        }
        System.out.println("Processing order...");
    }
}

// Custom checked exception
class InvalidOrderException extends Exception {
    public InvalidOrderException(String message) {
        super(message);
    }
}