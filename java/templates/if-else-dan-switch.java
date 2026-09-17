import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: implement if-else and switch logic based on input
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number (1-7): ");
        int day = sc.nextInt();
        // Use switch to print day name
        String name = switch (day) {
            case 1 -> "Senin";
            case 2 -> "Selasa";
            case 3 -> "Rabu";
            case 4 -> "Kamis";
            case 5 -> "Jumat";
            case 6 -> "Sabtu";
            case 7 -> "Minggu";
            default -> "Invalid";
        };
        System.out.println(name);
        sc.close();
    }
}