import java.util.*;

public class Main {
    public static void main(String[] args) {
        // var example
        var list = new ArrayList<String>();
        list.add("A");
        list.add("B");
        System.out.println("List: " + list);

        // diamond operator
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "one");
        map.put(2, "two");
        System.out.println("Map: " + map);

        // lambda target type inference
        Predicate<String> isEmpty = s -> s.isEmpty();
        System.out.println("Empty? " + isEmpty.test(""));
    }
}