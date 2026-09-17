import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set&lt;String&gt; set = new HashSet&lt;&gt;();
        set.add("apple");
        set.add("orange");
        set.add("apple"); // duplicate ignored
        System.out.println("HashSet: " + set); // order unpredictable

        Set&lt;String&gt; linked = new LinkedHashSet&lt;&gt;();
        linked.add("a"); linked.add("b"); linked.add("c");
        System.out.println("LinkedHashSet (insertion order): " + linked);

        Set&lt;Integer&gt; sorted = new TreeSet&lt;&gt;(List.of(3,1,2,3));
        System.out.println("TreeSet (sorted, unique): " + sorted);
    }
}