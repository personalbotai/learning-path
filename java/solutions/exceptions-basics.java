import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Unchecked exceptions examples and catching
        try {
            int[] arr = {1, 2, 3};
            System.out.println("Accessing arr[5]...");
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + e.getMessage());
        }

        try {
            Integer i = null;
            System.out.println("Calling method on null...");
            System.out.println(i.intValue());
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException: " + e.getMessage());
        }

        // Checked IOException must be caught or declared
        try {
            readFile("nonexistent.txt");
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        }
    }

    // Method that throws a checked exception
    static void readFile(String path) throws IOException {
        // Simulate file not found
        throw new FileNotFoundException("File not found: " + path);
    }
}