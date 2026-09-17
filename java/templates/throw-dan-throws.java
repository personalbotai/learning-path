public class Main {
    public static void main(String[] args) throws Exception {
        // TODO: demonstrate throw, throws, custom exception
        // Example: validate age
        int age = -5;
        try {
            validateAge(age);
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid age: " + e.getMessage());
        }

        // Call method that throws checked exception
        readConfig("config.txt");
    }

    // Unchecked exception (no throws declaration needed)
    static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age must be non-negative");
        }
    }

    // Checked exception must be declared or caught
    static void readConfig(String path) throws IOException {
        // Simulate
        throw new FileNotFoundException("Config file not found: " + path);
    }
}