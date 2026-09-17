import java.io.*;

public class Main {
    public static void main(String[] args) {
        // TODO: demonstrate try-catch-finally and try-with-resources
        BufferedReader br = null;
        try {
            // Simulate I/O error: open non-existent file
            br = new BufferedReader(new FileReader("missing.txt"));
            String line = br.readLine();
            System.out.println(line);
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO error: " + e.getMessage());
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    // ignore
                }
            }
            System.out.println("Finally block executed.");
        }

        // Try-with-resources (auto-close)
        try (BufferedReader r = new BufferedReader(new StringReader("Hello from StringReader"))) {
            System.out.println(r.readLine());
        } catch (IOException e) {
            e.printStackTrace();
        }
        // No need explicit finally
    }
}