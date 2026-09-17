import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Classic try-catch-finally (manual close)
        BufferedReader br = null;
        try {
            // Attempt to open a non-existing file to trigger exception
            br = new BufferedReader(new FileReader("nonexistent.txt"));
            String line = br.readLine();
            System.out.println("Read: " + line);
        } catch (FileNotFoundException e) {
            System.out.println("Caught FileNotFoundException: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    System.out.println("Failed to close: " + e.getMessage());
                }
            }
            System.out.println("Finally block executed.");
        }

        // Try-with-resources (auto-close)
        System.out.println("\nTry-with-resources demo:");
        try (BufferedReader r = new BufferedReader(new StringReader("Hello from StringReader"));
             BufferedWriter w = new BufferedWriter(new StringWriter())) {
            String text = r.readLine();
            w.write("Copied: " + text);
            w.flush();
            // w and r closed automatically
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Resources auto-closed.");
    }
}