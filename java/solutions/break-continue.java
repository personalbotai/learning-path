public class Main {
    public static void main(String[] args) {
        // Break example: exit loop when i == 5
        System.out.println("Break demo:");
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // keluar saat 5
            }
            System.out.println(i);
        }

        // Continue example: skip even numbers
        System.out.println("\nContinue demo (skip evens):");
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                continue; // lewati angka genap
            }
            System.out.println(i);
        }

        // Labeled break untuk nested loops
        System.out.println("\nLabeled break:");
        outer: for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i * j == 2) {
                    System.out.println("Break outer at i=" + i + " j=" + j);
                    break outer;
                }
                System.out.println("i=" + i + " j=" + j);
            }
        }
    }
}