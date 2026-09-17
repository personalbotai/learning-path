import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Masukkan nama: ");
        String nama = sc.nextLine();
        System.out.print("Masukkan umur: ");
        int umur = sc.nextInt();
        System.out.println("Halo " + nama + ", umur " + umur);
        sc.close();
    }
}