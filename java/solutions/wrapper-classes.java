import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Demonstrasi wrapper classes, autoboxing, unboxing, parsing
        Integer iObj = Integer.valueOf(100);
        int iPrim = iObj; // unboxing
        Double dObj = 99.99; // autoboxing
        double dPrim = dObj; // unboxing

        System.out.println("Integer: " + iObj);
        System.out.println("Double: " + dObj);
        System.out.println("Parsed int: " + Integer.parseInt("123"));
        System.out.println("Sum: " + (iPrim + dPrim));
    }
}