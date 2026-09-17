import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map&lt;String, Integer&gt; scores = new HashMap&lt;&gt;();
        scores.put("Alice", 90);
        scores.put("Bob", 85);
        scores.put("Alice", 92); // replace

        System.out.println("Alice score: " + scores.get("Alice"));
        System.out.println("Contains Bob? " + scores.containsKey("Bob"));
        System.out.println("Size: " + scores.size());

        // EntrySet iteration
        for (Map.Entry&lt;String, Integer&gt; e : scores.entrySet()) {
            System.out.println(e.getKey() + " -> " + e.getValue());
        }

        // keys and values only
        for (String k : scores.keySet()) {
            System.out.println("Key: " + k);
        }
        for (int v : scores.values()) {
            System.out.println("Value: " + v);
        }

        scores.remove("Bob");
        System.out.println("After remove Bob: " + scores);
    }
}