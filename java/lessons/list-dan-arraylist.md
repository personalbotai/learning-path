# List dan ArrayList

`List<E>` adalah urutan terurut yang boleh duplikat dan akses by index. Implementasi default: `ArrayList` (array dinamis). Alternatif: `LinkedList` (linked nodes).

## ArrayList — array yang tumbuh otomatis

```java
List<String> list = new ArrayList<>();
list.add("Alice"); list.add("Bob");
list.add(0, "Before"); // insert di 0
String first = list.get(0); // "Before"
list.remove("Bob"); // by object
list.remove(1); // by index
System.out.println(list.size()); // 2
System.out.println(list.contains("Alice")); // true
```

## Iterasi — empat gaya

```java
// index
for (int i = 0; i < list.size(); i++) System.out.println(list.get(i));
// for-each
for (String s : list) System.out.println(s);
// iterator (aman untuk remove saat iterasi)
Iterator<String> it = list.iterator();
while (it.hasNext()) { String s = it.next(); if (s.equals("x")) it.remove(); }
// forEach + lambda (Java 8+)
list.forEach(s -> System.out.println(s));
```

## Immutable List (Java 9+)

```java
List<String> immutable = List.of("a","b","c");
// immutable.add("d"); // UnsupportedOperationException
List<String> copy = List.copyOf(list); // defensive copy immutable
```

## Array ↔ List

```java
String[] arr = {"a","b","c"};
List<String> fixed = Arrays.asList(arr); // fixed-size, backed by array
List<String> mutable = new ArrayList<>(Arrays.asList(arr));
String[] back = mutable.toArray(new String[0]);
```

## Performance

- `get(i)` O(1), `add` di akhir amortized O(1) (resize jarang).
- `add(0, e)` / `remove(0)` O(n) karena geser elemen — hindari di loop besar; pertimbangkan `ArrayDeque` atau `LinkedList`.

## Runnable — List + records + streams (JDK 17)

```java
import java.util.*;
import java.util.stream.*;

public record Produk(String nama, int harga) {}

public class Main {
    public static void main(String[] args) {
        List<Produk> katalog = new ArrayList<>(List.of(
            new Produk("Laptop", 15_000_000),
            new Produk("Mouse", 250_000),
            new Produk("Keyboard", 750_000)
        ));
        katalog.add(new Produk("Monitor", 2_000_000));
        System.out.println("Jumlah: " + katalog.size());
        // filter + map via streams
        var mahal = katalog.stream()
            .filter(p -> p.harga() > 500_000)
            .map(Produk::nama)
            .toList();
        System.out.println("Harga >500rb: " + mahal);
        // akses index
        System.out.println("Pertama: " + katalog.get(0).nama());
    }
}
```

Records membuat elemen List ringkas tanpa getter/equals manual. Streams memberi filter deklaratif. Jalankan via Run (Judge0 JDK 17).

## Best Practice

- Deklarasi sebagai `List<E>`, instansiasi `new ArrayList<>()`.
- Jangan modifikasi list saat for-each; pakai `Iterator.remove()` atau `removeIf`.
- Jika ukuran awal diketahui, `new ArrayList<>(expectedSize)` untuk hindari resize berulang.
