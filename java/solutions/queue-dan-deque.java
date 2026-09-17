import java.util.*;

public class Main {
    public static void main(String[] args) {
        Deque<String> queue = new ArrayDeque<>();

        // Queue operations (FIFO)
        queue.offer("first");
        queue.offer("second");
        queue.offer("third");

        System.out.println("Head (peek): " + queue.peek()); // first
        System.out.println("Polled: " + queue.poll()); // first
        System.out.println("Next peek: " + queue.peek()); // second

        // Deque operations (both ends)
        queue.addFirst("new first");
        queue.addLast("new last");
        System.out.println("First: " + queue.removeFirst()); // new first
        System.out.println("Last: " + queue.removeLast()); // new last

        // iterate remaining
        System.out.print("Remaining: ");
        for (String s : queue) {
            System.out.print(s + " ");
        }
        System.out.println();
    }
}