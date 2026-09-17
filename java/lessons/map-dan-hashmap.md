# Map dan HashMap

`Map<K,V>` menyimpan pasangan **key-value**. Tidak extends `Collection`. Implementasi utama: `HashMap` (hash table), `LinkedHashMap` (urutan insertion), `TreeMap` (terurut by key).

## Operasi Dasar

```java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
map.put("Alice", 26); // replace value untuk key Alice
System.out.println(map.get("Alice")); // 26
System.out.println(map.getOrDefault("Charlie", -1)); // -1 jika tidak ada
System.out.println(map.containsKey("Bob")); // true
map.remove("Bob");
```

## Iterasi — tiga cara

```java
// Entry set (paling efisien)
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " -> " + e.getValue());
}
// Key set
for (String key : map.keySet()) {
    System.out.println(key + " -> " + map.get(key));
}
// Values
for (Integer v : map.values()) System.out.println(v);
// forEach + lambda (Java 8+)
map.forEach((k,v) -> System.out.println(k + ":" + v));
```

## Hashtable vs HashMap

- `Hashtable` synchronized, tidak boleh null key/value (legacy).
- `HashMap` tidak synchronized, boleh satu null key & multiple null values — prefer `HashMap` atau `ConcurrentHashMap`.

## Sorted Map: TreeMap

```java
Map<String, Integer> sorted = new TreeMap<>(Map.of("b",2,"a",1,"c",3));
System.out.println(sorted); // {a=1, b=2, c=3}
```

## Immutable Map (Java 9+)

```java
Map<String, Integer> immutable = Map.of("x",1, "y",2);
// immutable.put("z",3); // UnsupportedOperationException
Map<String, Integer> copy = Map.copyOf(map);
```

## hashCode/equals untuk Key

Key harus immutable dan implement `hashCode`/`equals` konsisten. `String`, `Integer`, dan `record` ideal.

## Runnable — Map + record sebagai key (JDK 17)

```java
import java.util.*;

public record Siswa(String nis, String nama) {}

public class Main {
    public static void main(String[] args) {
        Map<Siswa, Integer> nilai = new HashMap<>();
        var s1 = new Siswa("001", "Andi");
        var s2 = new Siswa("002", "Budi");
        nilai.put(s1, 85);
        nilai.put(s2, 92);
        nilai.put(new Siswa("001", "Andi"), 90); // replace karena equals record
        System.out.println("Jumlah entri: " + nilai.size()); // 2
        nilai.forEach((k,v) -> System.out.println(k.nis() + " " + k.nama() + " -> " + v));
        System.out.println("Nilai Andi: " + nilai.get(new Siswa("001","Andi")));
        System.out.println("computeIfAbsent: " + nilai.computeIfAbsent(new Siswa("003","Cici"), k -> 88));
    }
}
```

Record otomatis menangani equality — tidak perlu tulis equals/hashCode manual. Jalankan via Run (Judge0 JDK 17).

## Best Practice

- Deklarasi sebagai `Map<K,V>`, instansiasi `new HashMap<>()`.
- Butuh urutan insertion? `LinkedHashMap`. Butuh sorted? `TreeMap`.
- Hindari null key; gunakan `getOrDefault`/`computeIfAbsent`.
