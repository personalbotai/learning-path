import java.util.*;

public class Main {
    public static void main(String[] args) {
        List&lt;String&gt; fruits = new ArrayList&lt;&gt;();
        fruits.add("apple");
        fruits.add("banana");
        fruits.add(0, "cherry"); // insert at index 0

        // 1. for with index
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println("Index " + i + ": " + fruits.get(i));
        }

        // 2. enhanced for-each
        for (String f : fruits) {
            System.out.println("Fruit: " + f);
        }

        // 3. iterator
        Iterator&lt;String&gt; it = fruits.iterator();
        while (it.hasNext()) {
            System.out.println("Iterator: " + it.next());
        }

        // Convert to array
        String[] arr = fruits.toArray(new String[0]);
        System.out.println("Array length: " + arr.length);
    }
}