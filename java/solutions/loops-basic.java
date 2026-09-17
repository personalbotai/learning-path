import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Demonstrasi berbagai jenis loop
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();

        System.out.println("For loop (1 to N):");
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.println("While loop (N down to 1):");
        int j = n;
        while (j >= 1) {
            System.out.print(j + " ");
            j--;
        }
        System.out.println();

        System.out.println("Do-while (repeat until x becomes negative):");
        int x = n;
        do {
            System.out.print(x + " ");
            x--;
        } while (x >= 0);
        System.out.println();

        System.out.println("For-each over array:");
        String[] colors = {"Red", "Green", "Blue"};
        for (String c : colors) {
            System.out.println(c);
        }

        sc.close();
    }
}