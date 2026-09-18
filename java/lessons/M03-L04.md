# Exceptions Dasar

Exception adalah kondisi error yang terjadi saat runtime. Java menggunakan model unchecked exceptions (subclass `RuntimeException`) dan checked exceptions (subclass `Exception`).

## Hierarki

```
Throwable
 ├─ Error (unchecked, serious)
 └─ Exception
      ├─ RuntimeException (unchecked)
      └─ checked exceptions (seperti IOException)

```

**Error** biasanya tidak ditangani (OutOfMemoryError, StackOverflowError).

## Unchecked vs Checked

- **Unchecked** (RuntimeException dan Error): tidak wajib ditangani; muncul karena programming error (null pointer, index out of bounds, illegal argument).

- **Checked**: compiler memaksa penanganan atau deklarasi throws. Contoh: `IOException`, `ClassNotFoundException`.

## Throw Exception

Gunakan `throw` untuk melemparkan exception:

```
if (age < 0) {
    throw new IllegalArgumentException("Age cannot be negative");
}

```

Bisa juga membuat custom exception dengan extends `Exception` (checked) atau `RuntimeException` (unchecked).

## Catching dengan try-catch

```
try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Division by zero!");
}

```

Multiple catch blocks (dari spesifik ke umum):

```
try {
    // code
} catch (FileNotFoundException e) {
    // handle
} catch (IOException e) {
    // broader
} catch (Exception e) {
    // general
}

```

## Multi-catch (Java 7+)

```
catch (IOException | SQLException e) {
    e.printStackTrace();
}

```

## Finally

Blok `finally` selalu dieksekusi setelah try/catch, biasanya untuk cleanup:

```
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("file.txt"));
    // read
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (br != null) try { br.close(); } catch (IOException ignored) {}
}

```

## Try-with-resources (Java 7+)

Resource yang implements `AutoCloseable` akan ditutup otomatis:

```
try (BufferedReader br = Files.newBufferedReader(Path.of("file.txt"));
     BufferedWriter bw = Files.newBufferedWriter(Path.of("out.txt"))) {
    // use resources
} catch (IOException e) {
    e.printStackTrace();
}
// resources closed automatically

```

## Best Practice

- Gunakan unchecked exceptions untuk programming errors (IllegalArgumentException, IllegalStateException).

- Untuk recoverable conditions, gunakan checked exceptions.

- Jangan menangkap `Throwable` atau `Exception` secara universal tanpa alasan.

- Log exception dengan stack trace atau re-throw.

- Prefer try-with-resources untuk I/O streams.