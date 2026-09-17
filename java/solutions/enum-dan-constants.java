public class Main {
    enum Color {
        RED, GREEN, BLUE
    }

    public static void main(String[] args) {
        Color fav = Color.BLUE;
        System.out.println("Favorite color: " + fav);
        System.out.println("Ordinal: " + fav.ordinal());

        // Loop all
        for (Color c : Color.values()) {
            System.out.println(c);
        }
    }
}