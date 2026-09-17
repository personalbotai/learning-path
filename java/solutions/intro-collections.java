import java.util.*;

public class Main {
    public static void main(String[] args) {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add("a"); list.add("b"); list.add("a"); // duplicates allowed, insertion order
        System.out.println("List: " + list + ", size: " + list.size());

        Set&lt;String&gt; set = new HashSet&lt;&gt;();
        set.add("a"); set.add("b"); set.add("a"); // duplicate ignored
        System.out.println("Set: " + set + ", size: " + set.size());

        Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
        map.put("a", 1);
        map.put("b", 2);
        map.put("a", 3); // replaces
        System.out.println("Map: " + map);
    }
}