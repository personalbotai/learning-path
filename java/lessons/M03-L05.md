# Try-Catch-Finally dan Try-with-Resources

Struktur penanganan exception di Java menggunakan `try`, `catch`, `finally`, dan `try-with-resources`.

## Struktur Dasar

```
try {
    // kode yang mungkin melempar exception
    int result = divide(10, 0);
    System.out.println(result);
} catch (ArithmeticException e) {
    // menangani exception tertentu
    System.out.println("Pembagian dengan nol!");
} finally {
    // selalu dieksekusi, baik exception tertangkap atau tidak
    System.out.println("Selesai");
}

```

## Multiple Catch

Anda bisa menangkap lebih dari satu tipe exception:

```
try {
    readFile("data.txt");
} catch (FileNotFoundException e) {
    System.out.println("File tidak ditemukan");
} catch (IOException e) {
    System.out.println("I/O error");
} finally {
    System.out.println("Cleanup");
}

```

Urutan catch harus dari spesifik ke umum, karena sebaliknya akan unreachable (compile error).

## Try-with-Resources

Memungkinkan manajemen resource otomatis (ditutup ketika try selesai). Resource harus implements `AutoCloseable`.

```
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"));
     PrintWriter out = new PrintWriter(new FileWriter("out.txt"))) {
    String line = br.readLine();
    out.println(line);
} catch (IOException e) {
    e.printStackTrace();
}
// br dan out sudah ditutup otomatis

```

Dengan try-with-resources, Anda tidak perlu `finally` untuk menutup resource.

## Suppressed Exceptions

Jika baik try block dan resource close melempar exception, exception dari close ditambahkan sebagai *suppressed*. Dapat diakses lewat `e.getSuppressed()`.

## Throw dari finally

Menambahkan `throw` di finally dapat menyembunyikan exception dari try. Gunakan dengan hati-hati.

## Nested Try

Try dapat ditumpuk:

```
try {
    // outer
    try {
        // inner
    } catch (Exception e) {
        // handle inner
    }
} catch (Exception e) {
    // handle outer
}

```

## Kesalahan Umum

- Menangkap exception yang terlalu luas (catch (Exception e)) — bisa menutupi bug.

- Kosongkan catch block — just white-box testing suppressed exception.

- Lupa menutup resource jika tidak pakai try-with-resources.

## Best Practice

- Gunakan try-with-resources untuk semua I/O resources.

- Tangani hanya exception yang dapat Anda lakukan recovery.

- Untuk exception yang tidak dapat dipulihkan, propagasikan (throws) ke caller.

- Log stack trace atau wrapped exception (throw new ...(cause)).