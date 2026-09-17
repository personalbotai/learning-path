import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // TODO: trigger various exceptions and catch them
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught: " + e);
        }

        try {
            Integer i = null;
            System.out.println(i.intValue()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Caught NPE: " + e);
        }

        // IOException (checked) propagation
        readFile("nonexistent.txt");
    }

    // throws IOException (checked)
    static void readFile(String path) throws IOException {
        throw new IOException("File not found: " + path);
    }
}