# Apa itu TypeScript?

TypeScript adalah **superset JavaScript** yang menambahkan **type system statis** ke bahasa JavaScript. Dikembangkan oleh Microsoft, TypeScript membantu developer menulis kode yang lebih aman, mudah dipahami, dan scalable dengan menambahkan type checking pada waktu development.

⏱️ 15 menit
📊 Kesulitan: Pemula
💻 Tipe: Teori

##

Tujuan Pembelajaran

-

Memahami definisi TypeScript dan hubungannya dengan JavaScript

-

Mengenal keuntungan menggunakan TypeScript dalam pengembangan software

-

Menyadari perbedaan utama antara type system statis dan dinamis

-

Mengerti bagaimana TypeScript dikompilasi ke JavaScript

## Pengertian TypeScript

TypeScript adalah bahasa pemrograman yang dikembangkan oleh **Microsoft** pada tahun 2012. Ia adalah superset dari JavaScript, artinya semua kode JavaScript yang valid juga merupakan kode TypeScript yang valid. Perbedaannya, TypeScript menambahkan **type system statis** yang memungkinkan developer mendefinisikan tipe data untuk variabel, parameter fungsi, properti objek, dan lainnya.

### Konsep Kunci: Superset

Sebagai superset, TypeScript memperluas JavaScript dengan fitur-fitur tambahan (terutama type system). Kode TypeScript kemudian dikompilasi (transpile) menjadi JavaScript yang bisa dijalankan di browser atau runtime seperti Node.js.

### Type System Statis vs Dinamis

####

TypeScript (Statis)

- • Tipe dicek pada **compile time**

- • Error type terdeteksi sebelum runtime

- • Types eksplisit atau inferensi otomatis

- • IDE support yang excellent (autocomplete, refactoring)

- • Lebih aman untuk proyek besar

####

JavaScript (Dinamis)

- • Tipe dicek pada **runtime**

- • Error type muncul saat eksekusi

- • Typing fleksibel tanpa deklarasi eksplisit

- • Cepat untuk prototyping

- • Cocok untuk skrip kecil atau proyek sederhana

### Contoh Perbandingan

Mari lihat contoh sederhana yang menunjukkan perbedaan antara JavaScript dan TypeScript:

```
// JavaScript - Tidak ada type checking
function tambah(a, b) {
return a + b;
}

const hasil = tambah("5", 10); // "510" (string concatenation)
// Tidak ada error, meski mungkin bukan yang diharapkan
```

```
// TypeScript - Type checking pada compile time
function tambah(a: number, b: number): number {
return a + b;
}

const hasil = tambah("5", 10);
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// Error terdeteksi saat kompilasi, mencegah bug di runtime.
```

### Arsitektur TypeScript

Alur kerja TypeScript terdiri dari tiga tahap utama:

-
**Penulisan Kode (.ts)**: Developer menulis kode dengan type annotations dan type checking oleh TypeScript compiler.

-
**Kompilasi (tsc)**: TypeScript compiler (tsc) mengubah kode .ts menjadi JavaScript (.js) dengan mempertahankan type safety melalui erasure (tipe dihapus di hasil akhir).

-
**Eksekusi**: Kode JavaScript yang dihasilkan dijalankan di browser, Node.js, atau environment JavaScript lainnya.

### Catatan Penting: Type Erasure

TypeScript **tidak** mengubah JavaScript eksekusi dengan menambahkan runtime type checking. Semua type checking dilakukan pada waktu kompilasi. Di hasil JavaScript akhir, semua type annotations dihilangkan (erased). Ini berarti TypeScript memberikan keamanan tanpa overhead runtime.

### Keuntungan Menggunakan TypeScript

1

#### Deteksi Error Awal

Banyak bug (terkait tipe) terdeteksi saat development, bukan saat production.

2

#### Better Developer Experience

Autocomplete, intellisense, go-to-definition, refactoring tools yang lebih akurat di IDE (VS Code, WebStorm).

3

#### Self-Documenting Code

Type definitions berfungsi sebagai dokumentasi yang selalu terkini dan terpercaya.

4

#### Scalability

Sangat cocok untuk codebase besar dan tim besar, karena type system membantu menjaga konsistensi dan减少 bug saat refactor.

5

#### Ekosistem Modern

Framework populer seperti React, Angular, Vue, Express, NestJS memiliki dukungan TypeScript kelas satu (first-class).

##

Latihan Praktik

Coba buat file TypeScript sederhana untuk merasakan pengalaman type checking:

### Langkah-langkah:

- Install TypeScript: `npm install -g typescript`

- Buat file `hello.ts`

- Tulis kode dengan type annotations

- Kompilasi: `tsc hello.ts`

- Jalankan hasil `node hello.js`

```
// hello.ts
let pesan: string = "Hello, TypeScript!";
let umur: number = 25;
let aktif: boolean = true;

console.log(pesan);
console.log(`Umur: ${umur}`);

// Coba ubah: pesan = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
```

Previous

Selesai & Lanjutkan

Next

### Quiz Modul 1

Setelah menyelesaikan semua lesson di Modul 1, kamu akan mengakses quiz dengan 10 pertanyaan untuk menguji pemahamanmu.

Quiz akan tersedia setelah semua lesson selesai
