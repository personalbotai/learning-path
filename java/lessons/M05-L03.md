# Set dan HashSet

`Set<E>` adalah koleksi yang **tidak mengizinkan duplikat** (berdasarkan `equals`/`hashCode`). Implementasi utama: `HashSet` (hash table), `LinkedHashSet` (urutan insertion), `TreeSet` (terurut).

## HashSet — dasar

Tidak mempertahankan urutan. Operasi add/contains/remove rata-rata O(1).

```java
Set<String> set = new HashSet<>();
set.add("apple");
set.add("orange");
set.add("apple"); // diabaikan (duplikat)
System.out.println(set.size()); // 2
System.out.println(set.contains("banana")); // false
set.remove("orange");
```

## Iterasi

```java
for (String fruit : set) {
    System.out.println(fruit);
}
// atau
set.forEach(System.out::println);
```

## LinkedHashSet vs TreeSet

- `LinkedHashSet`: mempertahankan urutan insertion (predictable iteration).
- `TreeSet`: urutan natural atau `Comparator` (sorted set).

```java
Set<Integer> sorted = new TreeSet<>(List.of(3,1,2));
System.out.println(sorted); // [1, 2, 3]

Set<String> linked = new LinkedHashSet<>(List.of("c","a","b","a"));
System.out.println(linked); // [c, a, b]
```

## equals() dan hashCode — wajib untuk custom object

Tanpa override yang konsisten, dua objek dengan nilai sama dianggap berbeda.

```java
public record Person(String name, int age) {}
// record otomatis generate equals/hashCode berdasarkan komponen — ideal untuk Set key
```

Jika pakai class biasa:

```java
class Person {
    String name; int age;
    Person(String n, int a){ name=n; age=a; }
    @Override public boolean equals(Object o){
        if(!(o instanceof Person p)) return false;
        return age==p.age && Objects.equals(name,p.name);
    }
    @Override public int hashCode(){ return Objects.hash(name, age); }
}
```

## Operasi Himpunan

- `addAll(c)` — union, `retainAll(c)` — intersection, `removeAll(c)` — difference.
- `Set.of("a","b","c")` — immutable set (Java 9+, null tidak diizinkan).

## Runnable — records + Set (JDK 17, Judge0 language_id 91)

```java
import java.util.*;

public record Person(String name, int age) {}

public class Main {
    public static void main(String[] args) {
        Set<Person> team = new HashSet<>();
        team.add(new Person("Andi", 25));
        team.add(new Person("Budi", 25));
        team.add(new Person("Andi", 25)); // duplikat — ditolak
        System.out.println("Ukuran team: " + team.size()); // 2
        team.forEach(p -> System.out.println("- " + p.name() + " " + p.age()));
        System.out.println("Immutable: " + Set.of("Admin","User"));
    }
}
```

Copy-paste ke editor dan Run — lihat record menangani equals/hashCode otomatis tanpa boilerplate.

## Best Practice

- Gunakan `Set` ketika duplikat harus dicegah; pilih `HashSet` default.
- Selalu override `equals`/`hashCode` untuk custom objects, atau gunakan `record`.
- Untuk urutan, pilih `LinkedHashSet`/`TreeSet` secara eksplisit.
