public class Main {
    static void greet() {
        System.out.println("Hello from void method");
    }

    public static void main(String[] args) {
        greet(); // call void method

        Double d = 0.0 / 0.0;
        System.out.println("d is NaN? " + Double.isNaN(d));

        Double inf = 1.0 / 0.0;
        System.out.println("Infinity: " + inf);

        String s = null;
        System.out.println("String s is null: " + (s == null));
    }
}