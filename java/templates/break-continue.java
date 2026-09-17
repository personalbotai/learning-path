public class Main {
    public static void main(String[] args) {
        // TODO: use break to exit early, continue to skip iterations
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                // TODO: break when i == 5
            }
            // TODO: skip even numbers using continue
            if (i % 2 == 0) {
                // skip
            }
            System.out.println(i);
        }

        // Labeled break example (outer loop)
        // outer: for (int i=0; i<3; i++) {
        //     for (int j=0; j<3; j++) {
        //         if (i*j == 4) break outer;
        //     }
        // }
    }
}