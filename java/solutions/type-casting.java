public class Main {
    public static void main(String[] args) {
        // Primitive narrowing
        double d = 99.99;
        int i = (int) d; // truncation
        System.out.println("double to int: " + i);

        // Widening
        int small = 200;
        long big = small; // implicit
        System.out.println("int to long: " + big);

        // Object up/down casting
        Object o = "hello"; // upcast (String -> Object)
        String s = (String) o; // downcast (safe because o actually a String)
        System.out.println("Object to String: " + s);

        // Checking instance
        if (o instanceof String) {
            System.out.println("o is a String: " + ((String) o).toUpperCase());
        }
    }
}