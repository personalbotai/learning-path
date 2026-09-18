# Array di Java

Array adalah struktur data yang menampung **elemen bertipe sama** dalam jumlah tetap. Array adalah object di Java; panjang (length) tetap setelah dibuat.

## Deklarasi dan Inisialisasi

### Sintaks Dasar

```
int[] numbers = new int[5]; // array of 5 ints, default 0
String[] names = new String[3]; // default null
int[] arr = {1, 2, 3, 4, 5}; // array literal

```

## Mengakses Elemen

Gunakan indeks mulai dari 0:

```
int[] arr = {10, 20, 30};
System.out.println(arr[0]); // 10
arr[1] = 25; // modify

```

Mengakses di luar batas (out-of-bounds) akan melempar `ArrayIndexOutOfBoundsException`.

## Array Multidimensi

Array of arrays (matriks):

```
int[][] matrix = new int[3][3]; // 3x3 matrix (default 0)
int[][] predefined = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(predefined[1][2]); // 6

```

Jumlah baris dan kolom bisa berbeda (jagged arrays).

## Properti length

Array memiliki field `length` (bukan method):

```
int[] a = new int[10];
System.out.println(a.length); // 10

```

## Iterasi Array

Gunakan `for` loop biasa atau enhanced for-loop:

```
String[] names = {"Alice", "Bob", "Charlie"};
// Traditional
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}

// Enhanced for
for (String name : names) {
    System.out.println(name);
}

```

## Arrays Utility Class

Package `java.util.Arrays` menyediakan methods berguna:

```
int[] nums = {5, 2, 9, 1};
Arrays.sort(nums);               // sort
Arrays.fill(nums, 0);            // fill dengan 0
int[] copy = Arrays.copyOf(nums, 5);
boolean equal = Arrays.equals(nums, copy);
int idx = Arrays.binarySearch(nums, 9); // butuh sorted
String str = Arrays.toString(nums);

```

## Array of Objects

Array bisa menyimpan objek (reference):

```
Person[] people = new Person[3];
people[0] = new Person("Alice", 25);
people[1] = new Person("Bob", 30);
people[2] = new Person("Charlie", 28);

```

Array itu sendiri adalah object yangPerlu diperhatikan length tidak bisa diubah setelah creation.

## Kesalahan Umum

- Lupa menginisialisasi elemen sebelum digunakan.

- Mengakses indeks di luar `length`.

- Membandingkan array dengan `==` (hanya membandingkan referensi). Gunakan `Arrays.equals()`.

## Kapan Menggunakan Array?

Ukuran tetap, akses cepat (O(1)), cocok untuk data statis. Untuk ukuran dinamis, gunakan `ArrayList` (akan dibahas di modul collections).