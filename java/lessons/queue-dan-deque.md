# Queue dan Deque

`Queue<E>` mengantri elemen **FIFO** (first-in-first-out). `Deque<E>` (double-ended queue) mendukung operasi di kedua ujung — bisa sebagai queue, stack, atau sliding window.

## Implementasi

- `ArrayDeque` — array sirkular, cepat, tidak terbatas kapasitas (prefer default).
- `LinkedList` — juga `Deque`, tapi lebih lambat & overhead node.
- `PriorityQueue` — urutan by natural order/Comparator, bukan FIFO.

## Operasi Queue

```java
Queue<String> q = new ArrayDeque<>();
q.offer("task1"); // offer: false jika penuh (tidak throw)
q.add("task2");   // add: throw jika penuh
System.out.println(q.peek()); // lihat kepala (null jika kosong)
System.out.println(q.poll()); // ambil & hapus (null jika kosong)
// vs element()/remove() yang throw NoSuchElementException
```

Pilih `offer`/`poll`/`peek` untuk null-safe.

## Operasi Deque (kedua ujung)

```java
Deque<String> deque = new ArrayDeque<>();
deque.addFirst("a"); deque.addLast("b");
deque.offerFirst("x"); deque.offerLast("y");
System.out.println(deque.peekFirst()); // x
System.out.println(deque.peekLast());  // y
System.out.println(deque.pollFirst()); // x
System.out.println(deque.pollLast());  // y
// sebagai stack LIFO:
deque.push("top"); String top = deque.pop();
```

## PriorityQueue — bukan FIFO

```java
Queue<Integer> pq = new PriorityQueue<>();
pq.add(3); pq.add(1); pq.add(2);
System.out.println(pq.poll()); // 1 (terkecil)
System.out.println(pq.poll()); // 2
```

Custom comparator: `new PriorityQueue<>(Comparator.reverseOrder())` untuk max-heap.

## Use Cases

- `Queue`: antrian tugas, BFS graph, buffer.
- `Deque`: stack, undo, sliding window maximum.
- `PriorityQueue`: scheduling, Dijkstra.

## Runnable — Queue FIFO + Deque (JDK 17)

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Queue<String> antrian = new ArrayDeque<>();
        antrian.offer("Nasabah 1"); antrian.offer("Nasabah 2"); antrian.offer("Nasabah 3");
        System.out.println("Dilayani: " + antrian.poll()); // Nasabah 1
        System.out.println("Sisa: " + antrian);
        System.out.println("peek: " + antrian.peek()); // Nasabah 2
        Deque<String> deque = new ArrayDeque<>();
        deque.offerFirst("awal"); deque.offerLast("akhir");
        System.out.println("Deque: " + deque); // [awal, akhir]
        // Simulasi virtual-thread friendly: queue untuk task I/O
        Queue<Runnable> tasks = new ArrayDeque<>();
        tasks.offer(() -> System.out.println("task-1 via virtual thread style"));
        tasks.poll().run();
    }
}
```

Copy-paste dan Run (Judge0 JDK 17). Untuk I/O-bound skala besar, pertimbangkan Virtual Threads (lihat modul Optional & Streams).

## Best Practice

- Default pilih `ArrayDeque` untuk Queue/Deque.
- Gunakan `offer`/`poll`/`peek` agar tidak throw saat kosong/penuh.
- Jangan gunakan `Stack` legacy; pakai `Deque` sebagai stack.
