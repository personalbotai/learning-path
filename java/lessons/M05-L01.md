# Pengantar Collections Framework

Java Collections Framework (JCF) adalah arsitektur terpadu untuk merepresentasikan & memanipulasi kelompok objek — interface, implementasi, dan algoritma (sorting, searching).

## Core Interfaces

| Interface | Deskripsi |
|---|---|
| `Collection<E>` | Root untuk koleksi elemen (bukan Map) |
| `List<E>` | Terurut, boleh duplikat, akses by index |
| `Set<E>` | Unik (equals/hashCode), tanpa index |
| `Queue<E>` | Antrian FIFO/LIFO |
| `Deque<E>` | Double-ended queue |
| `Map<K,V>` | Pasangan key-value, bukan Collection |

`Iterable` adalah supertype dari `Collection` — memungkinkan for-each.

## Implementasi Utama

- `ArrayList` — array dinamis, get O(1), insert tengah O(n).
- `LinkedList` — doubly-linked, insert/remove tengah O(1) jika via iterator.
- `HashSet` — hash table, tidak terurut, O(1) rata-rata.
- `TreeSet` — sorted, O(log n).
- `HashMap` — hash table untuk Map.
- `TreeMap` — sorted by key.

## Memilih Implementasi

- Akses index cepat? → `ArrayList`.
- Banyak insert/remove awal/tengah? → `LinkedList`/`ArrayDeque`.
- Unik & tidak peduli urutan? → `HashSet`.
- Butuh sorted? → `TreeSet`/`TreeMap`.
- Pencarian by key cepat? → `HashMap`.

## Generics — type safety

```java
List<String> names = new ArrayList<>();
Set<Integer> numbers = new HashSet<>();
Map<String, Integer> score = new HashMap<>();
// compile-time check, tanpa cast manual
```

Diamond operator `<>` (Java 7) + `var` (Java 10) mengurangi boilerplate.

## Common Operations

```java
list.add("a"); list.get(0); list.remove("a");
set.add(1); set.contains(1);
map.put("key", 100); int v = map.get("key");
```

## Runnable — koleksi + records (JDK 17)

```java
import java.util.*;

public record Mahasiswa(String nim, String nama) {}

public class Main {
    public static void main(String[] args) {
        List<Mahasiswa> list = new ArrayList<>(List.of(
            new Mahasiswa("001","Andi"),
            new Mahasiswa("002","Budi")
        ));
        list.add(new Mahasiswa("003","Cici"));
        System.out.println("Jumlah: " + list.size());
        list.forEach(m -> System.out.println(m.nim() + " " + m.nama()));
        Set<String> unik = new HashSet<>(List.of("a","b","a"));
        System.out.println("Set unik: " + unik + " size=" + unik.size());
        Map<String, Integer> map = Map.of("Andi",90,"Budi",85);
        System.out.println("Map: " + map);
    }
}
```

Records sebagai elemen koleksi otomatis memberi equals/hashCode yang benar — hemat boilerplate. Jalankan via Run.

## Best Practice

- Program to interface: `List`/`Set`/`Map` sebagai tipe reference.
- Selalu pakai generics; hindari raw types.
- Untuk immutable, gunakan `List.of`/`Set.of`/`Map.of` (Java 9+).
