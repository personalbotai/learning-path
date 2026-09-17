# Apa itu Java?

Java adalah bahasa pemrograman berorientasi objek (OOP) yang pertama kali dirilis oleh Sun Microsystems pada tahun 1995. Dikembangkan oleh James Gosling dan tim, Java didesain dengan prinsip **“Write Once, Run Anywhere”** (WORA). Prinsip ini berarti program Java dapat dijalankan di berbagai platform tanpa perlu dimodifikasi ulang, asalkan sistem tersebut memiliki Java Virtual Machine (JVM).

Java bersifat *statically typed*, yaitu tipe data variabel harus dinyatakan secara eksplisit saat deklarasi. Kode sumber Java (berekstensi `.java`) dikompilasi menjadi *bytecode* (berekstensi `.class`) yang kemudian dijalankan oleh JVM. Proses ini memberikan keunggulan dalam keamanan dan portabilitas karena bytecode tidak bergantung pada sistem operasi tertentu.

Meskipun awalnya dikenal untuk aplikasi desktop dan applet, Java kini memiliki ekosistem yang sangat luas. Bahasa ini banyak digunakan dalam pengembangan **enterprise** (Spring, Jakarta EE), **Android apps**, **backend server** (dengan servlet dan framework seperti Quarkus, Micronaut), serta **big data** (Apache Hadoop, Spark).

Keunggulan utama Java antara lain:

- **Portabilitas**: Bytecode berjalan di mana saja dengan JVM.

- **Keselamatan memori (memory safety)**: Manajemen memori otomatis dengan garbage collector.

- **Komunitas besar**: Banyak library, framework, dan dokumentasi.

- **Maturitas**: Java telah digunakan dalam sistem besar selama puluhan tahun, dengan dukungan jangka panjang (LTS).

Java terus berkembang melalui rilis reguler berjangka. Versi LTS terkini (**Java 21 LTS**) memperkenalkan pembaruan revolusioner bagi ekosistem modern:
- **Records**: Sintaks deklaratif untuk immutable data carrier tanpa boilerplate getter/equals/hashCode.
- **Sealed Classes**: Kontrol penuh hierarki pewarisan menggunakan kata kunci `sealed` dan `permits`.
- **Pattern Matching**: Pengecekan tipe dan dekonstruksi yang ekspresif pada `instanceof` serta `switch`.
- **Virtual Threads (Project Loom)**: Thread ringan (lightweight) berbasis JVM yang memungkinkan jutaan thread konkuren tanpa membebani thread sistem operasi (OS threads).

Untuk pemula, Java adalah bahasa yang sangat baik untuk memahami konsep pemrograman berorientasi objek dan dasar-dasar software engineering. Sintaks Java yang eksplisit memaksa programmer memahami tipe data, alur kontrol, dan struktur program dengan baik.

Di modul selanjutnya, Anda akan belajar cara menginstal Java, menulis program pertama, dan memahami elemen-elemen dasar bahasa ini.