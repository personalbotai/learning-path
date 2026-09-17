import java.util.*;
import java.util.stream.*;

public class Main {
    static class Person {
        String name; int age;
        Person(String n, int a) { name=n; age=a; }
        Optional&lt;String&gt; getName() { return Optional.ofNullable(name); }
    }

    public static void main(String[] args) {
        // Optional
        Person p = new Person(null, 25);
        p.getName().ifPresent(n -> System.out.println("Name: "+n));
        String nameOrDefault = p.getName().orElse("Anonymous");
        System.out.println("Name: "+nameOrDefault);

        Optional&lt;Integer&gt; opt = Optional.of(5);
        int doubled = opt.map(x -> x*2).orElse(0);
        System.out.println("Doubled: "+doubled);

        // Stream
        List&lt;Integer&gt; numbers = List.of(1,2,3,4,5,6,7,8,9,10);

        List&lt;Integer&gt; evensTimesTwo = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 2)
            .collect(Collectors.toList());
        System.out.println("Even*2: "+evensTimesTwo);

        long count = numbers.stream().filter(n -> n > 5).count();
        System.out.println("Count >5: "+count);

        OptionalInt max = numbers.stream().mapToInt(Integer::intValue).max();
        System.out.println("Max: "+max.orElse(0));
    }
}