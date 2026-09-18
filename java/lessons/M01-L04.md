# Variabel & Tipe Data

Variabel adalah wadah untuk menyimpan data dalam memori. Java memiliki dua kategori tipe data: **primitif** (nilai langsung) dan **reference** (objek).

## Tipe data primitif

Java memiliki 8 tipe primitif:

- `byte` — 1 byte, range -128 sampai 127.

- `short` — 2 byte, -32,768 sampai 32,767.

- `int` — 4 byte, integerbiasanya.

- `long` — 8 byte, tambah akhiran `L` (misal `1234567890123L`).

- `float` — 4 byte, floating-point akhiran `F`.

- `double` — 8 byte, presisi ganda.

- `boolean` — `true` atau `false`.

- `char` — 2 byte, karakter Unicode (misal `'A'`).

## Deklarasi dan Inisialisasi

Sintaks:

```
tipe namaVariabel = nilai;

```

Contoh:

```
int umur = 25;
double harga = 99.99;
boolean aktif = true;
char inisial = 'S';
String nama = "Archon";  // String adalah tipe reference, bukan primitif

```

`String` bukan tipe primitif, tetapi sering diperlakukan seperti primitif. Ia termasuk tipe *reference* yang menunjuk ke objek string di heap.

## Konstanta

Gunakan kata kunci `final` untuk membuat variabel yang nilainya tidak dapat diubah setelah inisialisasi:

```
final double PI = 3.14159;
// PI = 3.14; // ERROR: cannot reassign

```

## Konversi Tipe (Casting)

Java melakukan konversi otomatis untuk widening (tipe kecil ke besar). Untuk narrowing (besar ke kecil), harus explicit casting:

```
int i = 100;
long l = i;           // otomatis (widening)
int j = (int) l;      // manual (narrowing)

```

Untuk tipe primitive ke string atau sebaliknya, gunakan method:

```
String s = Integer.toString(i);
int x = Integer.parseInt("123");
double d = Double.parseDouble("3.14");

```

Untuk tipe reference, ClassCastException dapat terjadi jika casting tidak sah. Gunakan operator `instanceof` untuk cek tipe runtime.

## Scope Variabel

Variabel hanya berlaku di dalam *block* di mana dideklarasikan:

```
if (true) {
    int x = 10;  // x hanya berlaku di dalam block ini
}
// System.out.println(x); // ERROR: x not visible

```

Variabel yang dideklarasikan di dalam method disebut *local variable*. Variabel di dalam class tapi di luar method disebut *field*.

## Best Practice

- Gunakan nama yang deskriptif (hindari single-letter kecuali untuk index loop).

- Inisialisasi variabel saat deklarasi jika memungkinkan.

- Jangan gunakan tipe `float` untuk kalkulasi finansial; pilih `BigDecimal`.

- Utamakan `int` untuk bilangan bulat, `double` untuk pecahan.

Setelah memahami tipe data, Anda siap mengoperasikan mereka dengan operator.