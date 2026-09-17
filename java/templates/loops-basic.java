import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: implement loops: for, while, do-while
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();

        System.out.println("For loop 1..N:");
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.println("While loop N..1:");
        int i = n;
        while (i >= 1) {
            System.out.print(i + " ");
            i--;
        }
        System.out.println();

        System.out.println("Do-while example (repeat until 0):");
        int x = n;
        do {
            System.out.print(x + " ");
            x--;
        } while (x >= 0);
        System.out.println();

        sc.close();
    }
}