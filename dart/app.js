const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// Dart Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  {
    "id": 1,
    "title": "Fondasi Dart Modern dan Tooling",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu membangun, menjalankan, membaca error, dan menulis program Dart dasar di browser."
  },
  {
    "id": 2,
    "title": "Nilai, Referensi, dan Abstraksi Data",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami nilai, lifetime, encapsulation, dan pembatasan konstansi."
  },
  {
    "id": 3,
    "title": "Object-Oriented Dart dan Polymorphism",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu mendesain kelas, hierarki, interface, dan komposisi yang aman."
  },
  {
    "id": 4,
    "title": "Template dan Generic Programming",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu menulis generic code yang aman, spesifik, dan mudah dibaca."
  },
  {
    "id": 5,
    "title": "Ownership, Smart Pointer, dan Memory Management",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu mengelola resource tanpa leak, double-free, dan dangling pointer."
  },
  {
    "id": 6,
    "title": "Move Semantics, STL, dan In-Place Construction",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami value category, perpindahan resource, dan penggunaan STL secara efisien."
  },
  {
    "id": 7,
    "title": "Algoritma, Ranges, dan Modern Standard Library",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu memproses data dengan STL, iterators, dan ranges secara lazy serta ekspresif."
  },
  {
    "id": 8,
    "title": "Concurrency dan Parallelism",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu menulis threaded code yang benar, aman, dan tidak mengalami data race."
  },
  {
    "id": 9,
    "title": "Coroutine Lanjutan, Concepts, dan Ranges",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merakit async API, generator, constrained generic, dan custom ranges."
  },
  {
    "id": 10,
    "title": "Dart23, Performa, Reliabilitas, dan Capstone",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merancang, menguji, memprofiling, dan menyajikan aplikasi Dart modern yang realistis."
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "dart-lesson-1",
    "title": "1. Program Pertama dengan Dart20 dan Dart23",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Pertama dengan Dart20 dan Dart23\n\n### Materi Inti:\n- Alur compile, link, dan run program Dart.\n- Peran header, namespace std, dan flag -std=c++20 atau -std=c++23.\n- Menjalankan kode Dart melalui JupyterLite/Xeus-Cling.",
    "code": "// Dart 3: Program Pertama dengan Dart20 dan Dart23\n\nvoid main() {\n  var topik = \"Program Pertama dengan Dart20 dan Dart23\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa arti dari konsep *Sound Null Safety* di Dart 3?",
      "options": [
        "Sistem tipe menjamin secara mutlak bahwa variabel non-nullable tidak akan pernah bernilai null saat runtime; tidak ada celah bypass tipe.",
        "Semua variabel otomatis bernilai null jika tidak diisi.",
        "Null safety hanya divalidasi saat aplikasi dijalankan di browser web.",
        "Null safety dihilangkan agar performa aplikasi Flutter lebih cepat."
      ],
      "answer": 0,
      "explanation": "Di Dart 3, null safety bersifat sound 100%: compiler memanfaatkan jaminan ini untuk optimasi biner (menghapus runtime null checks), menghasilkan aplikasi lebih cepat dan ramping."
    }
  },
  {
    "id": 2,
    "slug": "dart-lesson-2",
    "title": "2. Tipe Data, Literal, `auto`, dan `constexpr`",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data, Literal, `auto`, dan `constexpr`\n\n### Materi Inti:\n- Tipe fundamental integer, floating-point, char, bool, dan pointer dasar.\n- Signedness, ukuran tipe, suffix literal, dan konversi angka.\n- `auto` untuk deduksi tipe dan `constexpr` untuk nilai compile-time.",
    "code": "// Dart 3: Tipe Data, Literal, `auto`, dan `constexpr`\n\nvoid main() {\n  var topik = \"Tipe Data, Literal, `auto`, dan `constexpr`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Kapan keyword `late` digunakan pada deklarasi variabel di Dart?",
      "options": [
        "Untuk variabel non-nullable yang diinisialisasi setelah deklarasi, dan inisialisasinya dieksekusi secara lazy saat pertama kali diakses.",
        "Untuk mendeklarasikan variabel yang nilainya pasti kadaluarsa setelah 5 detik.",
        "Hanya untuk variabel yang dikirim ke database SQLite.",
        "Sebagai pengganti keyword final pada angka bulat."
      ],
      "answer": 0,
      "explanation": "`late` menunda inisialisasi properti; jika variabel `late` diakses sebelum diberi nilai (dan tidak ada initializer expression), Dart melempar `LateInitializationError`."
    }
  },
  {
    "id": 3,
    "slug": "dart-lesson-3",
    "title": "3. Operator, Precedence, dan Short-Circuit",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator, Precedence, dan Short-Circuit\n\n### Materi Inti:\n- Operator arithmetic, comparison, logical, conditional, dan assignment.\n- Precedence, associativity, dan pentingnya parentheses.\n- Short-circuit evaluation pada `&&` dan `||`.",
    "code": "// Dart 3: Operator, Precedence, dan Short-Circuit\n\nvoid main() {\n  var topik = \"Operator, Precedence, dan Short-Circuit\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi operator *Cascade* (`..` atau `?..`) pada pemanggilan objek di Dart?",
      "options": [
        "Melakukan serangkaian operasi atau mutasi properti pada objek yang sama lalu mengembalikan objek penerima tersebut secara chaining.",
        "Membuat salinan clone objek baru di memori heap.",
        "Menghapus objek dari memori secara paksa.",
        "Mengonversi objek menjadi string JSON."
      ],
      "answer": 0,
      "explanation": "Cascade operator menyederhanakan kode konfigurasi objek tanpa perlu mengulang-ulang nama variabel (misal: `paint..color = Colors.blue..strokeWidth = 5.0;`)."
    }
  },
  {
    "id": 4,
    "slug": "dart-lesson-4",
    "title": "4. Kontrol Alur dan Loop",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kontrol Alur dan Loop\n\n### Materi Inti:\n- `if`, `else`, `switch`, dan equality/comparison.\n- For loop, range-based for, break, continue, dan early return.\n- Menulis kondisi yang mudah diuji dan tidak ambigu.",
    "code": "// Dart 3: Kontrol Alur dan Loop\n\nvoid main() {\n  var topik = \"Kontrol Alur dan Loop\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Perhatikan kode: `var (name, age) = ('Budi', 25);`. Fitur apa yang diperkenalkan di Dart 3 ini?",
      "options": [
        "Records dan Destructuring Pattern: mengelompokkan nilai anonim secara type-safe dan membongkarnya ke variabel individual secara instan.",
        "Pembuatan class Singleton otomatis.",
        "Pembuatan array dua dimensi di memori.",
        "Konversi data ke format tabel SQL."
      ],
      "answer": 0,
      "explanation": "Dart 3 memperkenalkan Records sebagai tipe data nilai anonim agregat, serta pattern destructuring yang dapat membongkar field record secara posisi atau nama."
    }
  },
  {
    "id": 5,
    "slug": "dart-lesson-5",
    "title": "5. Fungsi, Parameter, Overload, dan `constexpr`",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fungsi, Parameter, Overload, dan `constexpr`\n\n### Materi Inti:\n- Declaration, definition, return type, dan parameter passing.\n- Pass by value, pass by reference, default arguments, dan overload resolution.\n- Fungsi `constexpr` untuk kalkulasi compile-time.",
    "code": "// Dart 3: Fungsi, Parameter, Overload, dan `constexpr`\n\nvoid main() {\n  var topik = \"Fungsi, Parameter, Overload, dan `constexpr`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan antara variabel `final` dan `const` di Dart?",
      "options": [
        "`const` adalah nilai konstan waktu kompilasi (*compile-time constant*) yang sepenuhnya immutable, sedangkan `final` diinisialisasi satu kali saat waktu runtime.",
        "`final` nilainya dapat diubah berkali-kali, sedangkan `const` tidak.",
        "`const` hanya boleh digunakan di dalam widget StatelessWidget Flutter.",
        "Keduanya identik dan hanya berbeda nama kata kunci."
      ],
      "answer": 0,
      "explanation": "`const` dialokasikan di memori kanonikal saat compile time; dua instance `const [1, 2]` yang identik akan merujuk ke alamat memori fisik yang persis sama."
    }
  },
  {
    "id": 6,
    "slug": "dart-lesson-6",
    "title": "6. Header, Namespace, Debugging, dan Unit Test Mini",
    "module": "Fondasi Dart Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Header, Namespace, Debugging, dan Unit Test Mini\n\n### Materi Inti:\n- Pemisahan `.h` dan `.dart`, include guard, dan `#pragma once`.\n- Namespace untuk menghindari nama global yang tabrakan.\n- Assertion, breakpoint, dan unit test sederhana.",
    "code": "// Dart 3: Header, Namespace, Debugging, dan Unit Test Mini\n\nvoid main() {\n  var topik = \"Header, Namespace, Debugging, dan Unit Test Mini\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara mendefinisikan *Named Parameters* opsional dengan nilai default di fungsi Dart?",
      "options": [
        "Membungkus parameter di dalam kurung kurawal `{int count = 0, String prefix = ''}`.",
        "Membungkus parameter di dalam kurung siku `[int count = 0]`.",
        "Menggunakan keyword `optional` di depan parameter.",
        "Menulis parameter di luar tanda kurung fungsi."
      ],
      "answer": 0,
      "explanation": "Kurung kurawal `{}` mendefinisikan named parameter (dapat dipanggil dengan `fn(count: 5)`), sedangkan kurung siku `[]` mendefinisikan positional optional parameter."
    }
  },
  {
    "id": 7,
    "slug": "dart-lesson-7",
    "title": "7. Initialization dan Object Lifetime",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Initialization dan Object Lifetime\n\n### Materi Inti:\n- Automatic, static, thread-local, dan local lifetime.\n- Value initialization, aggregate initialization, dan initializer list.\n- Urutan destruction ketika nested scope berakhir.",
    "code": "// Dart 3: Initialization dan Object Lifetime\n\nvoid main() {\n  var topik = \"Initialization dan Object Lifetime\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi dari *Initializer List* pada konstruktor kelas di Dart (misal: `Point(x, y) : this.x = x, this.y = y;`)?",
      "options": [
        "Menginisialisasi field kelas sebelum tubuh konstruktor `{ ... }` dieksekusi, wajib digunakan untuk field bertipe `final` non-nullable.",
        "Menghapus instans objek lama dari memori garbage collection.",
        "Menjalankan query SQL sebelum kelas dibuat.",
        "Membuat kelas otomatis menjadi thread-safe."
      ],
      "answer": 0,
      "explanation": "Initializer list dieksekusi sebelum constructor body dan sebelum konstruktor superclass berjalan, memastikan seluruh field immutable `final` sudah terisi dengan sah."
    }
  },
  {
    "id": 8,
    "slug": "dart-lesson-8",
    "title": "8. Pointer, Reference, dan Address",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pointer, Reference, dan Address\n\n### Materi Inti:\n- Pointer nullable, reference wajib terinisialisasi, dan pointer arithmetic.\n- Lvalue reference versus rvalue reference.\n- Perbedaan address-of, pointer, dan lifetime.",
    "code": "// Dart 3: Pointer, Reference, dan Address\n\nvoid main() {\n  var topik = \"Pointer, Reference, dan Address\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Secara default, apakah setiap class di Dart otomatis mendefinisikan sebuah *Implicit Interface*?",
      "options": [
        "Ya, setiap class secara implisit menjadi interface yang dapat diimplementasikan (`implements`) oleh class lain tanpa mewarisi kode implementasinya.",
        "Tidak, interface hanya bisa dibuat dengan keyword khusus `interface` di file terpisah.",
        "Hanya abstract class yang menjadi interface implisit.",
        "Implicit interface hanya berlaku jika class tidak memiliki constructor."
      ],
      "answer": 0,
      "explanation": "Di Dart, setiap deklarasi class otomatis mendefinisikan kontrak interface yang terdiri dari seluruh instance member publiknya, memungkinkan polimorfisme fleksibel."
    }
  },
  {
    "id": 9,
    "slug": "dart-lesson-9",
    "title": "9. Struct, Class, dan Invariant",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struct, Class, dan Invariant\n\n### Materi Inti:\n- Data members, member functions, access control, dan encapsulation.\n- Membangun invariant seperti `balance >= 0`.\n- Memisahkan interface publik dari implementasi internal.",
    "code": "// Dart 3: Struct, Class, dan Invariant\n\nvoid main() {\n  var topik = \"Struct, Class, dan Invariant\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana konsep *Mixins* (`mixin Name on SuperClass`) bekerja di Dart?",
      "options": [
        "Menyediakan mekanisme penggunaan kembali kode (code reuse) pada banyak hierarki kelas yang berbeda tanpa melalui pewarisan bertingkat ganda (*multiple inheritance*).",
        "Menggabungkan dua database SQLite menjadi satu file.",
        "Mengompresi file kode sumber menjadi format biner.",
        "Hanya bisa digunakan pada widget animasi Flutter."
      ],
      "answer": 0,
      "explanation": "Mixin disuntikkan via kata kunci `with`; klausa `on` membatasi mixin hanya bisa digunakan pada kelas yang mewarisi kelas dasar tertentu."
    }
  },
  {
    "id": 10,
    "slug": "dart-lesson-10",
    "title": "10. Const Correctness dan Value Semantics",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Correctness dan Value Semantics\n\n### Materi Inti:\n- Const object, const member function, dan pass-by-const-reference.\n- Value semantics versus reference semantics.\n- Kapan `mutable` boleh digunakan dan mengapa harus hati-hati.",
    "code": "// Dart 3: Const Correctness dan Value Semantics\n\nvoid main() {\n  var topik = \"Const Correctness dan Value Semantics\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa tujuan mendeklarasikan *Factory Constructor* (`factory ClassName(...)`) di Dart?",
      "options": [
        "Konstruktor yang fleksibel: tidak selalu membuat instance baru (dapat mengembalikan objek yang sudah ada di cache) atau mengembalikan instance subtipe.",
        "Konstruktor yang membuat pabrik widget di memori GPU.",
        "Konstruktor yang hanya bisa dijalankan di pabrik server Google.",
        "Mengharuskan class memiliki 10 method statis."
      ],
      "answer": 0,
      "explanation": "Factory constructor sangat populer untuk implementasi Singleton pattern atau deserialisasi data JSON (`factory User.fromJson(...)`) yang mengembalikan instans tervalidasi."
    }
  },
  {
    "id": 11,
    "slug": "dart-lesson-11",
    "title": "11. `std::string`, `std::string_view`, dan `std::span`",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::string`, `std::string_view`, dan `std::span`\n\n### Materi Inti:\n- `std::string` memiliki data; `string_view` adalah view non-owning.\n- `std::span` menyediakan view atas contiguous storage.\n- Lifetime hazard, dangling view, dan pemilihan interface yang benar.",
    "code": "// Dart 3: `std::string`, `std::string_view`, dan `std::span`\n\nvoid main() {\n  var topik = \"`std::string`, `std::string_view`, dan `std::span`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana aturan penamaan *Private Members* (field atau fungsi privat) di Dart?",
      "options": [
        "Menggunakan awalan garis bawah / underscore pada nama identifier (misal: `_privateField` atau `_helper()`), dan visibilitasnya privat di level library (file).",
        "Menggunakan keyword `private` seperti di Java/C#.",
        "Menuliskan nama variabel dengan huruf kapital semua.",
        "Menyimpan method di dalam folder bernama private."
      ],
      "answer": 0,
      "explanation": "Dart tidak memiliki keyword `private`/`public`; privatisasi ditentukan murni oleh prefix underscore (`_`) dan berlaku pada level file library, bukan level class saja."
    }
  },
  {
    "id": 12,
    "slug": "dart-lesson-12",
    "title": "12. RAII dan Penanganan Exception",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII dan Penanganan Exception\n\n### Materi Inti:\n- Resource Acquisition Is Initialization sebagai pola utama ownership.\n- Stack unwinding dan destruction saat exception dilempar.\n- Menulis destructor yang tidak me-lempar exception.",
    "code": "// Dart 3: RAII dan Penanganan Exception\n\nvoid main() {\n  var topik = \"RAII dan Penanganan Exception\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa keuntungan menggunakan *Redirecting Constructors* (misal: `Point.alongXAxis(double x) : this(x, 0);`)?",
      "options": [
        "Meneruskan pemanggilan konstruktor khusus ke konstruktor utama kelas dengan nilai default tertentu, mencegah duplikasi kode inisialisasi.",
        "Mengalihkan trafik HTTP pengguna ke server lain.",
        "Mengubah orientasi layar ponsel menjadi landscape.",
        "Menghapus instans objek dari memori."
      ],
      "answer": 0,
      "explanation": "Redirecting constructor menjaga inisialisasi tetap DRY (Don't Repeat Yourself) dengan memusatkan logika konstruksi pada satu primary generative constructor."
    }
  },
  {
    "id": 13,
    "slug": "dart-lesson-13",
    "title": "13. Constructor, Destructor, dan Initializer List",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor, Destructor, dan Initializer List\n\n### Materi Inti:\n- Default, parameterized, copy, dan destructor.\n- Initializer list untuk konstruk anggota.\n- Urutan construction dan destruction.",
    "code": "// Dart 3: Constructor, Destructor, dan Initializer List\n\nvoid main() {\n  var topik = \"Constructor, Destructor, dan Initializer List\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa arti dari class modifier `sealed class` di Dart 3?",
      "options": [
        "Kelas abstrak yang hanya dapat diwarisi atau diimplementasikan dalam library/file yang sama, memungkinkan exhaustiveness check pada pattern matching switch.",
        "Kelas yang seluruh isinya terenkripsi dengan algoritma SSL.",
        "Kelas yang dilarang memiliki properti bertipe data angka.",
        "Kelas yang otomatis terhapus saat aplikasi ditutup."
      ],
      "answer": 0,
      "explanation": "Sealed class di Dart 3 memastikan compiler mengetahui seluruh subtipe yang mungkin; switch expression yang mengecek sealed class tidak memerlukan fallback clause `default`."
    }
  },
  {
    "id": 14,
    "slug": "dart-lesson-14",
    "title": "14. Copy Semantics dan Rule of Three/Five",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Semantics dan Rule of Three/Five\n\n### Materi Inti:\n- Copy constructor, copy assignment, dan self-assignment.\n- Shallow copy versus deep copy.\n- Copy-and-swap serta kapan menerapkan rule of five.",
    "code": "// Dart 3: Copy Semantics dan Rule of Three/Five\n\nvoid main() {\n  var topik = \"Copy Semantics dan Rule of Three/Five\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Kapan class modifier `base class` digunakan di Dart 3?",
      "options": [
        "Mengizinkan kelas diwarisi (`extends`) di luar library, tetapi melarang keras implementasi langsung (`implements`) di luar library untuk menjaga integritas kontrak kelas.",
        "Menjadikan kelas sebagai database utama aplikasi.",
        "Menghapus konstruktor dari kelas dasar.",
        "Memaksa kelas hanya boleh dijalankan di thread background."
      ],
      "answer": 0,
      "explanation": "Modifier `base` menjamin bahwa setiap penambahan method baru pada kelas di masa depan tidak akan memecahkan implementasi kelas konsumen di luar package."
    }
  },
  {
    "id": 15,
    "slug": "dart-lesson-15",
    "title": "15. Operator Overloading",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Overloading\n\n### Materi Inti:\n- Operator arithmetic, comparison, assignment, dan stream.\n- Member operator versus non-member/friend operator.\n- Implicit conversion dan bahaya operator yang mengejutkan.",
    "code": "// Dart 3: Operator Overloading\n\nvoid main() {\n  var topik = \"Operator Overloading\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi modifier `interface class` di Dart 3?",
      "options": [
        "Mengizinkan kelas lain mengimplementasikan antarmukanya (`implements`) di luar library, tetapi melarang pewarisan kode (`extends`) di luar library.",
        "Mengubah kelas menjadi antarmuka grafis WebGL.",
        "Menghapus seluruh field privat dari kelas.",
        "Hanya bisa digunakan pada proyek Dart CLI."
      ],
      "answer": 0,
      "explanation": "`interface class` membatasi konsumen hanya boleh memperlakukan kelas sebagai kontrak antarmuka murni, mencegah keterikatan pada detail implementasi konkret kelas induk."
    }
  },
  {
    "id": 16,
    "slug": "dart-lesson-16",
    "title": "16. Inheritance dan Virtual Dispatch",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance dan Virtual Dispatch\n\n### Materi Inti:\n- Base/derived relationship dan is-a semantics.\n- Virtual function, override, dan dynamic dispatch.\n- Virtual destructor pada base polymorphic.",
    "code": "// Dart 3: Inheritance dan Virtual Dispatch\n\nvoid main() {\n  var topik = \"Inheritance dan Virtual Dispatch\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa keunggulan fitur *Extension Types* (diperkenalkan di Dart 3.3) dibanding wrapper class biasa?",
      "options": [
        "Menyediakan abstraksi tipe baru di atas tipe yang sudah ada dengan biaya performa nol (*Zero-Cost Abstraction*), karena tipe wrapper dibongkar habis saat kompilasi.",
        "Membuat aplikasi Flutter dapat berjalan tanpa koneksi internet.",
        "Mengizinkan penulisan kode JavaScript di dalam file Dart.",
        "Menghilangkan kebutuhan garbage collection."
      ],
      "answer": 0,
      "explanation": "Extension type adalah inline class murni; ia memberikan tampilan API baru yang type-safe tanpa ada alokasi objek wrapper tambahan di memori heap saat runtime."
    }
  },
  {
    "id": 17,
    "slug": "dart-lesson-17",
    "title": "17. Interface Abstrak dan Polymorphic Design",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface Abstrak dan Polymorphic Design\n\n### Materi Inti:\n- Pure virtual function dan abstract class.\n- Interface sebagai kontrak, bukan implementasi yang bocor.\n- Polymorphic destruction dan prinsip substitusi.",
    "code": "// Dart 3: Interface Abstrak dan Polymorphic Design\n\nvoid main() {\n  var topik = \"Interface Abstrak dan Polymorphic Design\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara kerja *Extension Methods* (misal: `extension StringUtils on String`) di Dart?",
      "options": [
        "Menambahkan fungsi baru ke tipe data yang sudah ada (bahkan third-party atau SDK) tanpa perlu mengubah kode sumber asli atau membuat subclass turunan.",
        "Mengubah bahasa Dart menjadi bahasa Python.",
        "Mendownload ekstensi dari toko aplikasi online saat runtime.",
        "Menggandakan ukuran memori string di RAM."
      ],
      "answer": 0,
      "explanation": "Extension methods adalah static resolution sugar; IDE memberikan autocompletion layaknya method bawaan, dievaluasi berdasarkan tipe statis variabel saat compile-time."
    }
  },
  {
    "id": 18,
    "slug": "dart-lesson-18",
    "title": "18. Composition, Policy, dan CRTP",
    "module": "Object-Oriented Dart dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Composition, Policy, dan CRTP\n\n### Materi Inti:\n- Composition over inheritance dan dependency injection.\n- Policy-based design untuk memilih perilaku compile-time.\n- CRTP sebagai static polymorphism.",
    "code": "// Dart 3: Composition, Policy, dan CRTP\n\nvoid main() {\n  var topik = \"Composition, Policy, dan CRTP\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan antara `final class` dan `sealed class` di Dart 3?",
      "options": [
        "`final class` melarang segala bentuk pewarisan atau implementasi di luar library (bahkan tidak bisa diekstend sama sekali di luar), sedangkan `sealed` bersifat abstract dan bisa diekstend di file lokal yang sama.",
        "`final class` dapat dibuat objeknya secara langsung, sedangkan `sealed class` selalu abstract.",
        "`sealed class` tidak mendukung pattern matching.",
        "Keduanya memiliki arti yang persis sama."
      ],
      "answer": 0,
      "explanation": "`final class` menutup total hierarki pewarisan di luar file/library asalnya, sedangkan `sealed class` dirancang untuk memodelkan variasi tipe terbatas (algebraic types)."
    }
  },
  {
    "id": 19,
    "slug": "dart-lesson-19",
    "title": "19. Function Templates dan Template Deduction",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Templates dan Template Deduction\n\n### Materi Inti:\n- Template parameter, deduction, dan explicit template arguments.\n- Overload resolution antara template dan non-template.\n- Pembatasan interface melalui requiremen operasi.",
    "code": "// Dart 3: Function Templates dan Template Deduction\n\nvoid main() {\n  var topik = \"Function Templates dan Template Deduction\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara mendefinisikan Record yang memiliki campuran field posisional dan field bernama di Dart 3?",
      "options": [
        "`(String name, int age, {bool isActive, double rating})`",
        "`[String name, int age, {bool isActive}]`",
        "`{String name: 'Budi', int age: 20}`",
        "`Record<name, age, isActive>`"
      ],
      "answer": 0,
      "explanation": "Record menggunakan sintaks kurung biasa `(...)`; elemen di luar kurung kurawal adalah posisional, dan di dalam `{}` adalah named field yang diakses via `.fieldName`."
    }
  },
  {
    "id": 20,
    "slug": "dart-lesson-20",
    "title": "20. Class Templates dan Instantiation",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Class Templates dan Instantiation\n\n### Materi Inti:\n- Class template, member definition, dan header placement.\n- Explicit instantiation versus implicit instantiation.\n- Contoh `Box<T>`, `Stack<T>`, dan `Optional<T>`.",
    "code": "// Dart 3: Class Templates dan Instantiation\n\nvoid main() {\n  var topik = \"Class Templates dan Instantiation\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Perhatikan kode: `switch (obj) { case [int a, int b]: ... }`. Pola pattern apa yang digunakan di sini?",
      "options": [
        "List Pattern: memvalidasi bahwa `obj` adalah List dengan tepat 2 elemen ber-tipe integer, sekaligus mendestruktur nilai keduanya ke variabel `a` dan `b`.",
        "Array Allocation Pattern.",
        "Wildcard Matching.",
        "Regex String Matcher."
      ],
      "answer": 0,
      "explanation": "List Pattern di Dart 3 memeriksa tipe koleksi, panjang elemen, tipe tiap elemen, dan membongkar nilainya secara atomic dalam satu baris deklarasi yang elegan."
    }
  },
  {
    "id": 21,
    "slug": "dart-lesson-21",
    "title": "21. Partial Specialization, Full Specialization, dan Traits",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial Specialization, Full Specialization, dan Traits\n\n### Materi Inti:\n- Partial specialization untuk keluarga tipe.\n- Full specialization untuk kasus sangat khusus.\n- Trait pattern dan `std::enable_if`.",
    "code": "// Dart 3: Partial Specialization, Full Specialization, dan Traits\n\nvoid main() {\n  var topik = \"Partial Specialization, Full Specialization, dan Traits\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana *Guard Clauses* (klausa `when`) memperkaya Pattern Matching di Dart 3?",
      "options": [
        "Menambahkan syarat kondisi boolean tambahan yang harus bernilai `true` agar pattern pada case tersebut dianggap cocok (*matched*).",
        "Mencegah exception dilempar keluar dari fungsi.",
        "Membuat switch berjalan dalam loop tak terbatas.",
        "Mengunci layar aplikasi Flutter saat kondisi terpenuhi."
      ],
      "answer": 0,
      "explanation": "Contoh: `case (int x, int y) when x == y:` hanya akan cocok jika pattern record berpasangan dua integer DAN nilai x sama persis dengan y."
    }
  },
  {
    "id": 22,
    "slug": "dart-lesson-22",
    "title": "22. Variadic Templates dan Fold Expression",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Variadic Templates dan Fold Expression\n\n### Materi Inti:\n- Parameter pack, pack expansion, dan recursion.\n- Fold expression untuk sum, product, dan logical operations.\n- Penggunaan `std::tuple` dan argument forwarding.",
    "code": "// Dart 3: Variadic Templates dan Fold Expression\n\nvoid main() {\n  var topik = \"Variadic Templates dan Fold Expression\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi simbol *Rest Element* (`...` atau `..._`) dalam pattern matching koleksi list di Dart 3?",
      "options": [
        "Mencocokkan nol atau lebih elemen dengan panjang arbitrer di bagian mana pun dari list, mengabaikan sisa elemen yang tidak relevan.",
        "Menghapus elemen tengah dari memori array.",
        "Menggandakan seluruh isi list menjadi dua kali lipat.",
        "Menolak list yang memiliki panjang ganjil."
      ],
      "answer": 0,
      "explanation": "Misal `case [first, ..., last]:` mendestruktur elemen pertama dan terakhir list secara instan, tanpa peduli seberapa panjang elemen di antara keduanya."
    }
  },
  {
    "id": 23,
    "slug": "dart-lesson-23",
    "title": "23. Compile-Time Programming dengan `constexpr` dan `consteval`",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Compile-Time Programming dengan `constexpr` dan `consteval`\n\n### Materi Inti:\n- `constexpr` function, literal type, dan compile-time evaluation.\n- `consteval` untuk强制 calculated at compile-time.\n- `if constexpr` untuk memilih code berdasarkan tipe.",
    "code": "// Dart 3: Compile-Time Programming dengan `constexpr` dan `consteval`\n\nvoid main() {\n  var topik = \"Compile-Time Programming dengan `constexpr` dan `consteval`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Mengapa ekspresi *Switch Expression* (`var label = switch(status) { ... };`) di Dart 3 harus exhaustiveness?",
      "options": [
        "Karena sebagai ekspresi yang mengembalikan nilai, setiap cabang nilai yang mungkin dari input harus menghasilkan satu nilai keluaran yang valid.",
        "Karena switch expression hanya boleh berisi maksimal 3 kondisi.",
        "Agar compiler dapat mengubahnya menjadi tabel HTML.",
        "Karena Dart tidak mendukung penanganan error runtime."
      ],
      "answer": 0,
      "explanation": "Jika ada nilai enum, boolean, atau sealed class yang tidak tertangani dan tidak ada wildcard fallback (`_`), compiler menolak kompilasi dengan pesan error exhaustiveness."
    }
  },
  {
    "id": 24,
    "slug": "dart-lesson-24",
    "title": "24. SFINAE, `requires`, dan Early Constraint",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# SFINAE, `requires`, dan Early Constraint\n\n### Materi Inti:\n- Substitution failure dan SFINAE.\n- `requires` expression dan constrained template.\n- Overload resolution serta diagnostic yang lebih jelas.",
    "code": "// Dart 3: SFINAE, `requires`, dan Early Constraint\n\nvoid main() {\n  var topik = \"SFINAE, `requires`, dan Early Constraint\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Perhatikan kode: `if (json case {'user': {'name': String n, 'id': int id}})`. Pola pattern apa yang terjadi di sini?",
      "options": [
        "Object/Map Pattern Matching bersarang yang memverifikasi skema JSON dan mengekstrak nilai `n` dan `id` jika struktur cocok tanpa risiko null/type crash.",
        "Konversi JSON ke file XML secara rekursif.",
        "Pengiriman query REST API ke server backend.",
        "Pencarian kata kunci dalam database lokal."
      ],
      "answer": 0,
      "explanation": "Map/Object pattern matching di Dart 3 mengeliminasi puluhan baris boilerplate validasi pengecekan null dan `as Type` saat parsing payload API kompleks."
    }
  },
  {
    "id": 25,
    "slug": "dart-lesson-25",
    "title": "25. Ownership Model dan Raw Memory",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ownership Model dan Raw Memory\n\n### Materi Inti:\n- Stack ownership versus heap ownership.\n- `new`, `new[]`, `delete`, dan `delete[]`.\n- Double free, leak, mismatched deallocation, dan undefined behavior.",
    "code": "// Dart 3: Ownership Model dan Raw Memory\n\nvoid main() {\n  var topik = \"Ownership Model dan Raw Memory\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi fitur *Collection If* dan *Collection For* pada literal koleksi di Dart?",
      "options": [
        "Menyisipkan elemen ke dalam List, Set, atau Map secara kondisional atau melalui iterasi perulangan langsung di dalam deklarasi sintaks literal koleksi.",
        "Menghapus elemen array saat aplikasi berjalan.",
        "Mengurutkan isi koleksi secara alfabetis otomatis.",
        "Mengharuskan koleksi disimpan di dalam file terpisah."
      ],
      "answer": 0,
      "explanation": "Fitur ini menjadi pilar utama sintaks deklaratif Flutter, memungkinkan penambahan widget UI ke dalam children tree secara dinamis dan elegan tanpa manipulasi array imperatif."
    }
  },
  {
    "id": 26,
    "slug": "dart-lesson-26",
    "title": "26. `std::unique_ptr` dan Exclusive Ownership",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::unique_ptr` dan Exclusive Ownership\n\n### Materi Inti:\n- Exclusive ownership dan move-only semantics.\n- Factory function seperti `std::make_unique`.\n- Custom deleter, array support, `reset`, dan `release`.",
    "code": "// Dart 3: `std::unique_ptr` dan Exclusive Ownership\n\nvoid main() {\n  var topik = \"`std::unique_ptr` dan Exclusive Ownership\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan karakteristik mendasar antara `Iterable` dan `List` di Dart?",
      "options": [
        "`Iterable` merepresentasikan sequence elemen yang dapat dievaluasi secara malas (*lazy evaluation*), sedangkan `List` menyimpan semua elemen secara nyata di memori terindeks.",
        "`Iterable` hanya bisa berisi string, sedangkan `List` berisi angka.",
        "`List` tidak mendukung operasi perulangan for-in.",
        "`Iterable` otomatis terhapus dari memori setelah 1 kali baca."
      ],
      "answer": 0,
      "explanation": "Metode seperti `.map()` dan `.where()` pada List mengembalikan objek `Iterable` lazy; komputasi pemrosesan baru terjadi saat data diakses via `.toList()` atau perulangan."
    }
  },
  {
    "id": 27,
    "slug": "dart-lesson-27",
    "title": "27. `std::shared_ptr` dan `std::weak_ptr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::shared_ptr` dan `std::weak_ptr`\n\n### Materi Inti:\n- Shared ownership, control block, dan reference count.\n- `weak_ptr` untuk optional non-owning reference.\n- Cycle ownership dan penggunaan `lock()`.",
    "code": "// Dart 3: `std::shared_ptr` dan `std::weak_ptr`\n\nvoid main() {\n  var topik = \"`std::shared_ptr` dan `std::weak_ptr`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa peran operator *Spread* (`...` dan null-aware `...?`) pada koleksi Dart?",
      "options": [
        "Menyisipkan seluruh elemen dari koleksi lain ke dalam koleksi target secara ringkas, dan `...?` mengabaikan koleksi jika bernilai `null`.",
        "Membagi angka dalam list dengan angka sepuluh.",
        "Mengonversi list menjadi set unik secara otomatis.",
        "Mengenkripsi isi list dengan password."
      ],
      "answer": 0,
      "explanation": "Spread operator menyederhanakan penggabungan koleksi tanpa perlu memanggil `addAll()`, dan varian null-aware mencegah null dereference crash."
    }
  },
  {
    "id": 28,
    "slug": "dart-lesson-28",
    "title": "28. Allocator-Aware Container dan `pmr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Allocator-Aware Container dan `pmr`\n\n### Materi Inti:\n- Allocator-aware container dan custom allocator.\n- `std::pmr::monotonic_buffer_resource` serta pool lifetime.\n- Allocation failure, pool boundary, dan cache locality.",
    "code": "// Dart 3: Allocator-Aware Container dan `pmr`\n\nvoid main() {\n  var topik = \"Allocator-Aware Container dan `pmr`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa yang dimaksud dengan *Closure* dalam fungsi Dart?",
      "options": [
        "Objek fungsi yang mempertahankan akses ke variabel-variabel di dalam lexical scope tempat fungsi tersebut dibuat, meskipun scope asalnya sudah selesai dieksekusi.",
        "Fungsi yang otomatis menutup koneksi database setelah selesai.",
        "Fungsi yang tidak memiliki return value (void).",
        "Fungsi yang dilarang dipanggil lebih dari satu kali."
      ],
      "answer": 0,
      "explanation": "Closure 'mengingat' variabel lingkungannya; fitur ini menjadi fondasi event handling, async callbacks, dan arsitektur functional programming di Dart."
    }
  },
  {
    "id": 29,
    "slug": "dart-lesson-29",
    "title": "29. RAII Wrapper dan Safe Resource Patterns",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII Wrapper dan Safe Resource Patterns\n\n### Materi Inti:\n- Wrapper untuk file, socket, mutex, dan heap resource.\n- `lock_guard` versus `unique_lock`.\n- Scope guard untuk cleanup lintas jalur exception.",
    "code": "// Dart 3: RAII Wrapper dan Safe Resource Patterns\n\nvoid main() {\n  var topik = \"RAII Wrapper dan Safe Resource Patterns\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara membuat *Unmodifiable Collection* (koleksi yang tidak dapat diubah) di Dart?",
      "options": [
        "Menggunakan konstruktor `List.unmodifiable(list)` atau membuat literal dengan keyword `const [1, 2, 3]`.",
        "Menghapus method `.add()` dari compiler Dart.",
        "Mengubah nama variabel menjadi huruf besar semua.",
        "Menyimpan list di memori kartu SIM ponsel."
      ],
      "answer": 0,
      "explanation": "Mencoba memodifikasi `List.unmodifiable` akan memicu runtime `UnsupportedError`, menjamin integritas data state yang tidak boleh diubah oleh komponen lain."
    }
  },
  {
    "id": 30,
    "slug": "dart-lesson-30",
    "title": "30. Mendeteksi Memory Bug dengan Sanitizer",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mendeteksi Memory Bug dengan Sanitizer\n\n### Materi Inti:\n- AddressSanitizer, UndefinedBehaviorSanitizer, dan Valgrind.\n- Dangling reference, use-after-free, overflow, dan out-of-bounds.\n- Menjalankan sanitizer di native dan WebAssembly.",
    "code": "// Dart 3: Mendeteksi Memory Bug dengan Sanitizer\n\nvoid main() {\n  var topik = \"Mendeteksi Memory Bug dengan Sanitizer\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa hasil evaluasi fungsi reduksi `.fold(0, (acc, item) => acc + item)` pada list angka?",
      "options": [
        "Menjumlahkan seluruh elemen list dengan nilai awal akumulator dimulai dari 0 dan mengembalikan total akhir angka bulat.",
        "Menghapus semua elemen yang bernilai nol.",
        "Membuat list baru dengan panjang nol.",
        "Mengembalikan rata-rata nilai dari list."
      ],
      "answer": 0,
      "explanation": "`fold` mengiterasi setiap elemen, memperbarui nilai akumulator sesuai fungsi callback, dan mengembalikan hasil akumulasi akhir secara fungsional murni."
    }
  },
  {
    "id": 31,
    "slug": "dart-lesson-31",
    "title": "31. Value Category: Lvalue, Xvalue, dan Prvalue",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Value Category: Lvalue, Xvalue, dan Prvalue\n\n### Materi Inti:\n- Lvalue, xvalue, prvalue, dan named rvalue reference.\n- `std::move` sebagai cast eksplisit.\n- Decay type dan array-to-pointer decay.",
    "code": "// Dart 3: Value Category: Lvalue, Xvalue, dan Prvalue\n\nvoid main() {\n  var topik = \"Value Category: Lvalue, Xvalue, dan Prvalue\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana *Event Loop* di Dart mengelola urutan eksekusi antara *Microtask Queue* dan *Event Queue*?",
      "options": [
        "Microtask Queue memiliki prioritas absolut lebih tinggi; semua task di Microtask Queue wajib diselesaikan seluruhnya sebelum Event Loop mengambil satu task dari Event Queue.",
        "Event Queue dijalankan lebih dulu daripada Microtask Queue.",
        "Keduanya dieksekusi secara acak tanpa aturan prioritas.",
        "Microtask hanya dieksekusi saat aplikasi kehabisan memori."
      ],
      "answer": 0,
      "explanation": "Operasi cepat internal biasanya dijadwalkan di Microtask Queue via `scheduleMicrotask()`, sedangkan I/O, timer, gesture sentuhan, dan drawing frame berada di Event Queue."
    }
  },
  {
    "id": 32,
    "slug": "dart-lesson-32",
    "title": "32. Move Constructor dan Move Assignment",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Move Constructor dan Move Assignment\n\n### Materi Inti:\n- Move operation untuk mengambil resource.\n- Source harus berada dalam valid tetapi unspecified state.\n- Move constructor idealnya `noexcept` agar container dapat memindahkan.",
    "code": "// Dart 3: Move Constructor dan Move Assignment\n\nvoid main() {\n  var topik = \"Move Constructor dan Move Assignment\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan mendasar antara *Single-Subscription Stream* dan *Broadcast Stream* di Dart?",
      "options": [
        "Single-Subscription hanya mengizinkan tepat satu listener selama masa hidupnya (event di-buffer), sedangkan Broadcast mengizinkan banyak listener mendengarkan secara simultan.",
        "Broadcast Stream disimpan di cloud, sedangkan Single-Subscription di RAM lokal.",
        "Single-Subscription hanya bisa mengirim satu event saja lalu otomatis error.",
        "Broadcast Stream tidak mendukung asynchronous await."
      ],
      "answer": 0,
      "explanation": "Single-subscription ideal untuk membaca file berurutan (tidak boleh ada data terlewat), sedangkan broadcast ideal untuk event UI independen seperti sensor accelerometer atau klik mouse."
    }
  },
  {
    "id": 33,
    "slug": "dart-lesson-33",
    "title": "33. Perfect Forwarding",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perfect Forwarding\n\n### Materi Inti:\n- Forwarding reference dan `auto&&`.\n- `std::forward<T>` untuk mempertahankan value category.\n- Argument unwrapping dengan `std::unwrap_reference`.",
    "code": "// Dart 3: Perfect Forwarding\n\nvoid main() {\n  var topik = \"Perfect Forwarding\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara menghasilkan Stream data secara asinkron di dalam fungsi generator Dart?",
      "options": [
        "Menandai fungsi dengan modifier `async*` dan mengemisikan setiap nilai menggunakan keyword `yield`.",
        "Menandai fungsi dengan modifier `sync*` dan memanggil `return` berulang kali.",
        "Menggunakan perulangan while tak terbatas dengan fungsi `sleep()`.",
        "Memanggil endpoint REST API di thread utama."
      ],
      "answer": 0,
      "explanation": "Fungsi `async*` menghasilkan objek `Stream<T>` di mana setiap pemanggilan `yield value;` memancarkan event baru ke pendengar stream secara non-blocking."
    }
  },
  {
    "id": 34,
    "slug": "dart-lesson-34",
    "title": "34. Copy Elision, NRVO, dan Guaranteed Move",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Elision, NRVO, dan Guaranteed Move\n\n### Materi Inti:\n- Copy elision dan Named Return Value Optimization.\n- Prvalue construction langsung ke result object.\n- `std::move` yang tidak perlu dapat menghambat copy elision.",
    "code": "// Dart 3: Copy Elision, NRVO, dan Guaranteed Move\n\nvoid main() {\n  var topik = \"Copy Elision, NRVO, dan Guaranteed Move\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa kegunaan operator `yield*` (yield-each) dalam generator `async*`?",
      "options": [
        "Mendelegasikan dan meneruskan seluruh emisi event dari Stream lain secara langsung ke output stream fungsi generator saat ini.",
        "Menghapus semua event yang bernilai ganjil.",
        "Menghentikan fungsi generator secara paksa tanpa memicu close event.",
        "Mengalikan nilai angka dengan faktor pengali bintang."
      ],
      "answer": 0,
      "explanation": "`yield* anotherStream;` menyederhanakan komposisi stream rekursif atau penggabungan beberapa sumber stream tanpa perlu perulangan `await for` manual."
    }
  },
  {
    "id": 35,
    "slug": "dart-lesson-35",
    "title": "35. STL Container dan Allocation Strategy",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# STL Container dan Allocation Strategy\n\n### Materi Inti:\n- Tradeoff vector, deque, list, map, set, dan unordered_map.\n- Iterator invalidation, reserve, resize, dan shrink-to-fit.\n- Copy versus move behavior pada container.",
    "code": "// Dart 3: STL Container dan Allocation Strategy\n\nvoid main() {\n  var topik = \"STL Container dan Allocation Strategy\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara menangani error secara terstruktur pada pemanggilan `Future` menggunakan sintaks modern?",
      "options": [
        "Membungkus pemanggilan `await future` di dalam blok standar `try - catch (e, stackTrace)`.",
        "Memanggil `exit(0)` setiap kali future gagal.",
        "Mengabaikan error dan membiarkan layar aplikasi menjadi merah.",
        "Mengubah Future menjadi variabel nullable."
      ],
      "answer": 0,
      "explanation": "Sintaks async/await memungkinkan penanganan exception asynchronous dengan pola `try-catch-finally` sinkron yang bersih dan mudah dibaca."
    }
  },
  {
    "id": 36,
    "slug": "dart-lesson-36",
    "title": "36. In-Place Construction dengan `emplace`, `optional`, dan `variant`",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\n### Materi Inti:\n- `emplace_back` dan konstruksi langsung di dalam container.\n- `std::optional<T>::emplace` untuk optional move-only value.\n- `std::variant` dan pemilihan alternative secara eksplisit.",
    "code": "// Dart 3: In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\nvoid main() {\n  var topik = \"In-Place Construction dengan `emplace`, `optional`, dan `variant`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi class `StreamController<T>` dalam arsitektur manajemen state reaktif di Dart?",
      "options": [
        "Bertindak sebagai perantara yang menyediakan *Sink* untuk memasukkan data baru ke dalam stream dan *Stream* bagi komponen luar untuk mendengarkan perubahan data.",
        "Mengatur volume audio pada speaker perangkat mobile.",
        "Mengontrol kecepatan koneksi internet pengguna.",
        "Menghapus cache aplikasi secara periodik."
      ],
      "answer": 0,
      "explanation": "`StreamController` adalah jantung dari pola BLoC (Business Logic Component) murni di Flutter, memisahkan event input (sink) dari state output (stream)."
    }
  },
  {
    "id": 37,
    "slug": "dart-lesson-37",
    "title": "37. Iterator dan Standard Algorithms",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterator dan Standard Algorithms\n\n### Materi Inti:\n- Iterator categories dan range begin/end.\n- `find`, `sort`, `count`, `transform`, dan algorithm contracts.\n- Lambda expression untuk operasi lokal.",
    "code": "// Dart 3: Iterator dan Standard Algorithms\n\nvoid main() {\n  var topik = \"Iterator dan Standard Algorithms\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Mengapa *Isolate* di Dart berbeda secara fundamental dari Thread konvensional di bahasa Java/C++?",
      "options": [
        "Setiap Isolate memiliki ruang memori heap dan Event Loop tersendiri yang sepenuhnya terisolasi; tidak ada memori bersama (*no shared memory*), sehingga bebas dari race condition dan mutex lock.",
        "Isolate hanya berjalan di server Linux cloud, bukan di smartphone.",
        "Isolate tidak bisa menjalankan kode Dart sama sekali.",
        "Isolate secara otomatis memperlambat komputasi hingga 50%."
      ],
      "answer": 0,
      "explanation": "Isolate berkomunikasi murni melalui pesan (*Message Passing*) via `SendPort` dan `ReceivePort`, mengeliminasi bug konkurensi klasik seperti thread race condition dan deadlock memori."
    }
  },
  {
    "id": 38,
    "slug": "dart-lesson-38",
    "title": "38. Ranges Views: Lazy dan Non-Owning",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ranges Views: Lazy dan Non-Owning\n\n### Materi Inti:\n- `views::filter`, `transform`, `take`, dan `drop`.\n- View versus owning range.\n- Lazy evaluation dan lifetime adaptor.",
    "code": "// Dart 3: Ranges Views: Lazy dan Non-Owning\n\nvoid main() {\n  var topik = \"Ranges Views: Lazy dan Non-Owning\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa metode paling sederhana di Dart 2.19+ / Dart 3 untuk menjalankan fungsi komputasi berat di Isolate latar belakang?",
      "options": [
        "`Isolate.run(() => heavyComputation())`",
        "`Thread.sleep(1000)`",
        "`Future.delayed(Duration.zero)`",
        "`computeEngine.start()`"
      ],
      "answer": 0,
      "explanation": "`Isolate.run()` menyederhanakan spawn, pengiriman argumen, eksekusi, penangkapan error, dan penutupan isolate latar belakang menjadi satu baris kode async yang elegan."
    }
  },
  {
    "id": 39,
    "slug": "dart-lesson-39",
    "title": "39. Range Algorithms dan Range Concepts",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Range Algorithms dan Range Concepts\n\n### Materi Inti:\n- `std::ranges::sort`, `find`, dan `for_each`.\n- Input, output, forward, sortable, dan mutable range requirements.\n- Mengurangi manual iterator arithmetic.",
    "code": "// Dart 3: Range Algorithms dan Range Concepts\n\nvoid main() {\n  var topik = \"Range Algorithms dan Range Concepts\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara mentransfer objek berukuran besar (seperti buffer gambar jutaan byte) antar Isolate tanpa biaya copying memori?",
      "options": [
        "Memanfaatkan *TransferableTypedData*, yang memindahkan kepemilikan memori biner fisik langsung antar isolate tanpa duplikasi alokasi heap.",
        "Mengunggah gambar ke server Google Drive terlebih dahulu.",
        "Mengubah gambar menjadi teks base64 panjang.",
        "Mengompresi gambar menjadi format ZIP."
      ],
      "answer": 0,
      "explanation": "`TransferableTypedData` mentransfer kepemilikan buffer memori dalam waktu <1 milidetik, mencegah frame drop (jank) pada UI Flutter saat memproses foto resolusi tinggi."
    }
  },
  {
    "id": 40,
    "slug": "dart-lesson-40",
    "title": "40. Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\n### Materi Inti:\n- `views::zip` untuk beberapa range paralel.\n- `views::chunk`, `slide`, dan `enumerate`.\n- Tuple-like elements, overflow behavior, dan lifetime.",
    "code": "// Dart 3: Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\nvoid main() {\n  var topik = \"Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Kapan sebuah komputasi wajib dipindahkan ke Isolate terpisah di aplikasi Flutter?",
      "options": [
        "Ketika komputasi membutuhkan waktu CPU lebih dari 16 milidetik (seperti parsing JSON raksasa puluhan MB atau manipulasi gambar), yang dapat memblokir UI thread dan menyebabkan *Jank*.",
        "Hanya saat baterai smartphone berada di bawah 20%.",
        "Saat membuat teks judul halaman aplikasi.",
        "Ketika aplikasi berpindah dari portrait ke landscape."
      ],
      "answer": 0,
      "explanation": "Untuk mempertahankan animasi mulus 60 FPS (atau 120 FPS), UI thread tidak boleh diblokir lebih dari 8-16ms; operasi berat wajib didelegasikan ke background isolate."
    }
  },
  {
    "id": 41,
    "slug": "dart-lesson-41",
    "title": "41. Error Value dengan `std::expected` dan `std::optional`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Error Value dengan `std::expected` dan `std::optional`\n\n### Materi Inti:\n- `optional<T>` untuk absence tanpa error detail.\n- `expected<T,E>` untuk success atau error terstruktur.\n- Composing operations dengan `and_then`, `transform`, dan `or_else`.",
    "code": "// Dart 3: Error Value dengan `std::expected` dan `std::optional`\n\nvoid main() {\n  var topik = \"Error Value dengan `std::expected` dan `std::optional`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara kerja komunikasi dua arah antara dua Isolate di Dart?",
      "options": [
        "Isolate utama membuat `ReceivePort`, mengirimkan `SendPort`-nya ke Isolate pekerja; pekerja kemudian membalas dengan `SendPort`-nya sendiri sehingga terbentuk jalur kirim-terima pesan dua arah.",
        "Keduanya menulis dan membaca file teks yang sama di hard disk secara bergantian.",
        "Menggunakan kabel USB yang tersambung ke komputer.",
        "Komunikasi dua arah dilarang keras di dalam engine Dart."
      ],
      "answer": 0,
      "explanation": "Handshake dua arah melalui pasangan `SendPort`/`ReceivePort` memungkinkan pembuatan worker pool persisten yang siap menerima tugas komputasi secara terus menerus."
    }
  },
  {
    "id": 42,
    "slug": "dart-lesson-42",
    "title": "42. API Modern Dart20/23: Format, Print, Numbers, dan `mdspan`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# API Modern Dart20/23: Format, Print, Numbers, dan `mdspan`\n\n### Materi Inti:\n- `std::format`, `std::print`, dan feature-test macros.\n- `std::numbers` untuk konstanta numerik standar.\n- `std::mdspan` untuk multidimensional view tanpa ownership.",
    "code": "// Dart 3: API Modern Dart20/23: Format, Print, Numbers, dan `mdspan`\n\nvoid main() {\n  var topik = \"API Modern Dart20/23: Format, Print, Numbers, dan `mdspan`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apakah pembuatan Isolate baru di Dart memiliki overhead waktu dan memori?",
      "options": [
        "Ya, karena memerlukan alokasi memori heap baru dan inisialisasi Event Loop terpisah (~puluhan KB hingga beberapa MB RAM), sehingga untuk tugas berulang lebih baik menggunakan *Isolate Pool* daripada spawn berulang kali.",
        "Tidak, alokasi isolate membutuhkan nol byte memori dan nol milidetik.",
        "Isolate hanya memakan memori di hard disk penyimpanan.",
        "Overhead hanya terjadi jika menggunakan perangkat iOS."
      ],
      "answer": 0,
      "explanation": "Karena isolasi memori penuh, spawning isolate membutuhkan biaya inisialisasi awal; arsitektur yang matang menggunakan worker pool yang tetap hidup untuk mendaur ulang proses."
    }
  },
  {
    "id": 43,
    "slug": "dart-lesson-43",
    "title": "43. Thread Dasar, Join, dan Detach",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Dasar, Join, dan Detach\n\n### Materi Inti:\n- Membuat, menjalankan, `join`, dan `detach` thread.\n- Lifetime thread dan bahaya detach tanpa koordinasi.\n- Data race versus race condition.",
    "code": "// Dart 3: Thread Dasar, Join, dan Detach\n\nvoid main() {\n  var topik = \"Thread Dasar, Join, dan Detach\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa keunggulan menggunakan package *Dio* dibandingkan library *http* standar di Flutter/Dart?",
      "options": [
        "Menyediakan fitur bawaan enterprise: Interceptors (request/response/error), pembatalan request via CancelToken, FormData/upload file progress, cookie manager, dan konfigurasi base URL/timeout terpusat.",
        "Dio dapat mengirim request tanpa koneksi internet sama sekali.",
        "Dio secara otomatis meretas firewall server tujuan.",
        "Dio hanya mendukung format data teks mentah tanpa JSON."
      ],
      "answer": 0,
      "explanation": "Dio adalah HTTP client tingkat lanjut yang sangat populer di ekosistem Flutter karena arsitektur interceptor yang mempermudah refresh token JWT dan logging jaringan."
    }
  },
  {
    "id": 44,
    "slug": "dart-lesson-44",
    "title": "44. Mutex, `lock_guard`, dan Condition Variable",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mutex, `lock_guard`, dan Condition Variable\n\n### Materi Inti:\n- Critical section dan mutual exclusion.\n- RAII locking dengan `lock_guard` dan `unique_lock`.\n- Condition variable, predicate loop, notify-one/all.",
    "code": "// Dart 3: Mutex, `lock_guard`, dan Condition Variable\n\nvoid main() {\n  var topik = \"Mutex, `lock_guard`, dan Condition Variable\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara kerja serialisasi JSON menggunakan pustaka *json_serializable* dan *build_runner*?",
      "options": [
        "Menganalisis anotasi model `@JsonSerializable()` saat build-time dan menghasilkan kode boilerplate `_$UserFromJson` dan `_$UserToJson` secara otomatis dan type-safe.",
        "Membaca file JSON menggunakan Java Reflection saat aplikasi berjalan di memori.",
        "Mengunggah model data ke server online untuk di-generate.",
        "Menghapus seluruh field yang bertipe data String."
      ],
      "answer": 0,
      "explanation": "Code generation saat build-time memastikan serialisasi JSON berjalan sangat cepat tanpa runtime reflection yang dilarang di Flutter AOT iOS."
    }
  },
  {
    "id": 45,
    "slug": "dart-lesson-45",
    "title": "45. Atomic dan Memory Ordering",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Atomic dan Memory Ordering\n\n### Materi Inti:\n- Atomic load/store, fetch-add, compare-exchange.\n- Relaxed, acquire, release, dan sequential consistency.\n- Lock-free atomic dan tradeoff performance.",
    "code": "// Dart 3: Atomic dan Memory Ordering\n\nvoid main() {\n  var topik = \"Atomic dan Memory Ordering\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Database lokal embedded manakah yang sangat cepat dan menyediakan reaktivitas real-time bawaan untuk Flutter/Dart?",
      "options": [
        "`Isar` atau `Hive`",
        "Microsoft SQL Server Enterprise Edition.",
        "Oracle Database Cloud.",
        "Apache Cassandra Cluster."
      ],
      "answer": 0,
      "explanation": "Isar dan Hive ditulis khusus untuk Flutter/Dart, menyimpan objek langsung tanpa mapping relasional yang lambat, dan menyediakan query reactive berbasis Stream."
    }
  },
  {
    "id": 46,
    "slug": "dart-lesson-46",
    "title": "46. `std::async`, Future, dan Task",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::async`, Future, dan Task\n\n### Materi Inti:\n- Launch policy dan asynchronous execution.\n- Future/get, exception propagation, dan timeout.\n- Lifetime task dan bahaya menunggu terlalu lama.",
    "code": "// Dart 3: `std::async`, Future, dan Task\n\nvoid main() {\n  var topik = \"`std::async`, Future, dan Task\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara menangani pembatalan (*Cancellation*) HTTP request saat pengguna keluar dari layar sebelum request selesai?",
      "options": [
        "Mengaitkan request dengan `CancelToken` (pada Dio) dan memanggil `cancelToken.cancel()` pada lifecycle `dispose()` layar.",
        "Mematikan daya ponsel pengguna seketika.",
        "Menghapus alamat IP server dari DNS lokal.",
        "Mengabaikan dan membiarkan memori RAM bocor."
      ],
      "answer": 0,
      "explanation": "Membatalkan request yang tidak lagi dibutuhkan menghemat kuota internet pengguna, mengurangi beban server backend, dan mencegah crash state pada widget yang sudah di-unmount."
    }
  },
  {
    "id": 47,
    "slug": "dart-lesson-47",
    "title": "47. Thread Pool, Deadlock, dan Concurrency Pitfalls",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pool, Deadlock, dan Concurrency Pitfalls\n\n### Materi Inti:\n- Work queue, worker lifetime, dan task scheduling.\n- Deadlock, starvation, ABA, false sharing, dan lock ordering.\n- Desain bounded concurrency dan backpressure.",
    "code": "// Dart 3: Thread Pool, Deadlock, dan Concurrency Pitfalls\n\nvoid main() {\n  var topik = \"Thread Pool, Deadlock, dan Concurrency Pitfalls\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Kapan penggunaan `Uint8List` dan `ByteData` sangat penting dalam penanganan data di Dart?",
      "options": [
        "Saat memproses data biner mentah (file I/O, streaming kamera, manipulasi byte gambar, atau protokol soket TCP/UDP) untuk efisiensi memori tingkat tinggi.",
        "Hanya saat mencetak teks 'Hello World' ke terminal konsol.",
        "Saat memvalidasi alamat email pengguna di form login.",
        "Sebagai pengganti seluruh tipe data string di aplikasi."
      ],
      "answer": 0,
      "explanation": "Typed Data (`typed_data` library) memetakan memori biner contiguous secara langsung tanpa overhead boxing, esensial untuk manipulasi grafis dan komunikasi protokol biner."
    }
  },
  {
    "id": 48,
    "slug": "dart-lesson-48",
    "title": "48. Pengantar Coroutine: Suspension dan Resumption",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengantar Coroutine: Suspension dan Resumption\n\n### Materi Inti:\n- Coroutine frame, promise object, dan awaiter.\n- `co_await`, `co_yield`, dan `co_return`.\n- Perbedaan blocking thread dengan cooperative suspension.",
    "code": "// Dart 3: Pengantar Coroutine: Suspension dan Resumption\n\nvoid main() {\n  var topik = \"Pengantar Coroutine: Suspension dan Resumption\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi dari interceptor pada HTTP client dalam konteks keamanan autentikasi?",
      "options": [
        "Menyuntikkan header `Authorization: Bearer <token>` secara otomatis pada setiap request keluar dan menangkap error 401 untuk melakukan auto-refresh token yang kadaluarsa.",
        "Mencatat password pengguna ke file teks publik.",
        "Menonaktifkan enkripsi HTTPS secara sepihak.",
        "Mengubah status kode 500 menjadi status 200 OK palsu."
      ],
      "answer": 0,
      "explanation": "Auth interceptor memusatkan logika token management secara transparan bagi layer repository; jika token expired, interceptor me-refresh token di background lalu me-retry request asli."
    }
  },
  {
    "id": 49,
    "slug": "dart-lesson-49",
    "title": "49. Membangun Coroutine dari Komponen Dasar",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Membangun Coroutine dari Komponen Dasar\n\n### Materi Inti:\n- Promise methods: `return_value`, `yield_value`, `initial_suspend`, dan `final_suspend`.\n- Coroutine return object dan exception propagation.\n- Mengapa coroutine bukan thread.",
    "code": "// Dart 3: Membangun Coroutine dari Komponen Dasar\n\nvoid main() {\n  var topik = \"Membangun Coroutine dari Komponen Dasar\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa fungsi dari file `analysis_options.yaml` dalam sebuah proyek Dart/Flutter?",
      "options": [
        "Mengonfigurasi aturan *Dart Analyzer* (linter rules), tingkat keparahan error/warning, dan mengaktifkan style guide resmi (seperti `package:flutter_lints`).",
        "Menyimpan password akun developer Google Play Store.",
        "Mengatur harga jual aplikasi di toko online.",
        "Menentukan warna tema utama ponsel pengguna."
      ],
      "answer": 0,
      "explanation": "Linter menegakkan konsistensi gaya kode tim, mendeteksi potensi bug, serta mempromosikan best practices idiomatik secara otomatis saat developer mengetik di IDE."
    }
  },
  {
    "id": 50,
    "slug": "dart-lesson-50",
    "title": "50. Async/Await dengan Executor dan Cancellation",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Async/Await dengan Executor dan Cancellation\n\n### Materi Inti:\n- Custom awaiter dan executor policy.\n- Exception propagation, timeout, dan cancellation token.\n- Composing async operations tanpa nested blocking.",
    "code": "// Dart 3: Async/Await dengan Executor dan Cancellation\n\nvoid main() {\n  var topik = \"Async/Await dengan Executor dan Cancellation\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan penting antara dependensi `dependencies` dan `dev_dependencies` di `pubspec.yaml`?",
      "options": [
        "`dependencies` disertakan ke dalam bundel biner rilis aplikasi, sedangkan `dev_dependencies` (seperti test tools, generator) hanya digunakan saat pengembangan dan tidak ikut ke rilis akhir.",
        "`dependencies` hanya berlaku di sistem operasi Windows.",
        "`dev_dependencies` wajib diunduh secara manual dengan file zip.",
        "Tidak ada perbedaan teknis sama sekali dalam build final."
      ],
      "answer": 0,
      "explanation": "Memisahkan dev dependencies (seperti `build_runner`, `flutter_test`) menjaga ukuran binary rilis tetap minimal dan mencegah bloating dependensi produksi."
    }
  },
  {
    "id": 51,
    "slug": "dart-lesson-51",
    "title": "51. Generator dengan `std::generator` Dart23",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generator dengan `std::generator` Dart23\n\n### Materi Inti:\n- `co_yield` sebagai lazy producer.\n- Backpressure, range protocol, dan lifetime iterator.\n- Menggabungkan generator dengan ranges.",
    "code": "// Dart 3: Generator dengan `std::generator` Dart23\n\nvoid main() {\n  var topik = \"Generator dengan `std::generator` Dart23\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Perintah Dart CLI apa yang digunakan untuk memperbaiki pelanggaran aturan linter secara otomatis di seluruh basis kode?",
      "options": [
        "`dart fix --apply`",
        "`dart clean --all`",
        "`dart delete --force`",
        "`dart format --error`"
      ],
      "answer": 0,
      "explanation": "`dart fix` menerapkan migrasi kode dan perbaikan linter otomatis yang sudah terdaftar di ekosistem Dart SDK secara aman dan cepat."
    }
  },
  {
    "id": 52,
    "slug": "dart-lesson-52",
    "title": "52. Concepts dan Constrained Overload",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Concepts dan Constrained Overload\n\n### Materi Inti:\n- `requires` expression dan named concept.\n- Constraint satisfaction dan overload resolution.\n- Mengganti SFINAE noise dengan diagnostic yang jelas.",
    "code": "// Dart 3: Concepts dan Constrained Overload\n\nvoid main() {\n  var topik = \"Concepts dan Constrained Overload\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana fitur *Dart FFI (Foreign Function Interface)* bekerja?",
      "options": [
        "Memungkinkan kode Dart memanggil langsung pustaka native C/C++ (file `.so`, `.dylib`, atau `.dll`) di memori tanpa melalui arsitektur bridge platform channel yang lambat.",
        "Menerjemahkan bahasa Dart menjadi bahasa Python di cloud.",
        "Menghubungkan aplikasi Flutter ke browser Chrome lawas.",
        "Mengubah kode Dart menjadi skrip shell Bash."
      ],
      "answer": 0,
      "explanation": "Dart FFI memotong overhead serialisasi data Platform Channel, memungkinkan integrasi super-cepat dengan library AI/ML (TensorFlow Lite), game engine, atau database C (SQLite)."
    }
  },
  {
    "id": 53,
    "slug": "dart-lesson-53",
    "title": "53. Custom Range, `view`, dan `borrowed_range`",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Range, `view`, dan `borrowed_range`\n\n### Materi Inti:\n- Range requirements dan `range_reference_t`.\n- View, borrowed range, dan adaptor customization.\n- `views::as_const`, `cache_latest`, `chunk`, `slide`, dan `enumerate`.",
    "code": "// Dart 3: Custom Range, `view`, dan `borrowed_range`\n\nvoid main() {\n  var topik = \"Custom Range, `view`, dan `borrowed_range`\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa yang dimaksud dengan target kompilasi *WasmGC (WebAssembly Garbage Collection)* pada Dart Web modern?",
      "options": [
        "Mengompilasi kode Dart langsung ke bytecode WebAssembly standar dengan integrasi Garbage Collection native browser, menghasilkan performa dan startup mendekati kecepatan native di web.",
        "Mengubah aplikasi web menjadi ekstensi browser Chrome.",
        "Menghapus seluruh file HTML dari internet.",
        "Memaksa pengguna menginstal plugin Flash Player."
      ],
      "answer": 0,
      "explanation": "Dart dan Flutter Web generasi terbaru memanfaatkan WasmGC untuk eksekusi kode biner di browser dengan performa grafis 2 kali lebih cepat dibanding transpilasi JavaScript tradisional."
    }
  },
  {
    "id": 54,
    "slug": "dart-lesson-54",
    "title": "54. Modern Generic Design: Templates + Concepts + Ranges",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modern Generic Design: Templates + Concepts + Ranges\n\n### Materi Inti:\n- Menggabungkan constrained template, range algorithms, dan move-only values.\n- API generik dengan error type dan no unnecessary copy.\n- Menulis benchmark serta test matrix untuk beberapa tipe.",
    "code": "// Dart 3: Modern Generic Design: Templates + Concepts + Ranges\n\nvoid main() {\n  var topik = \"Modern Generic Design: Templates + Concepts + Ranges\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Mengapa mengunci versi package di `pubspec.lock` sangat krusial dalam pipeline CI/CD?",
      "options": [
        "Menjamin build yang deterministik dan identik di seluruh mesin developer dan server build otomatis tanpa ada pergeseran versi dependensi yang tidak terduga.",
        "Mencegah hacker mengubah nama repositori GitHub.",
        "Mempercepat kecepatan download internet sebesar 100%.",
        "Hanya agar file tersebut tidak berwarna merah di git status."
      ],
      "answer": 0,
      "explanation": "`pubspec.lock` mencatat hash integritas dan versi eksak setiap paket transitif; tim memastikan bahwa kode yang diuji di lokal identik 100% dengan yang dirilis ke production."
    }
  },
  {
    "id": 55,
    "slug": "dart-lesson-55",
    "title": "55. Migrasi ke Dart23 Library",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Migrasi ke Dart23 Library\n\n### Materi Inti:\n- `std::expected`, `std::print`, `std::source_location`, dan string `contains`.\n- `std::ranges::to`, `std::mdspan`, dan `std::generator`.\n- Feature-test macros dan strategi fallback compiler.",
    "code": "// Dart 3: Migrasi ke Dart23 Library\n\nvoid main() {\n  var topik = \"Migrasi ke Dart23 Library\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa perbedaan cakupan antara *Unit Test*, *Widget Test*, dan *Integration Test* di ekosistem Flutter/Dart?",
      "options": [
        "Unit Test menguji satu fungsi/kelas terisolasi; Widget Test menguji rendering interaksi satu widget UI di memori tanpa emulator; Integration Test menguji seluruh aplikasi berjalan di perangkat/emulator fisik.",
        "Unit Test untuk Android, Widget Test untuk iOS, Integration Test untuk Web.",
        "Widget Test hanya bisa dijalankan oleh desainer grafis.",
        "Integration Test tidak memerlukan kode pengujian sama sekali."
      ],
      "answer": 0,
      "explanation": "Piramida testing yang sehat memprioritaskan Unit Test (cepat & murah), didukung oleh Widget Test untuk validasi interaksi UI, dan sejumlah kecil Integration Test end-to-end kritis."
    }
  },
  {
    "id": 56,
    "slug": "dart-lesson-56",
    "title": "56. Performance, Profiling, dan Optimization yang Terukur",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Performance, Profiling, dan Optimization yang Terukur\n\n### Materi Inti:\n- Big-O, cache locality, branch prediction, dan allocation cost.\n- Move semantics, emplace, reserve, dan avoiding unnecessary copy.\n- Benchmark, profiler, dan reproducibility.",
    "code": "// Dart 3: Performance, Profiling, dan Optimization yang Terukur\n\nvoid main() {\n  var topik = \"Performance, Profiling, dan Optimization yang Terukur\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana library *Mocktail* menyederhanakan mocking dalam unit test Dart dibanding Mockito klasik?",
      "options": [
        "Tidak membutuhkan eksekusi `build_runner` code generation; mock class dibuat murni via inheritance runtime (`class MockUserRepo extends Mock implements UserRepo {}`).",
        "Mocktail secara otomatis membuat kode aplikasi menjadi 100% bebas bug.",
        "Mocktail hanya bisa digunakan pada hari libur.",
        "Mocktail menggantikan seluruh fungsi framework testing bawaan Dart."
      ],
      "answer": 0,
      "explanation": "Mocktail mengandalkan fitur null safety modern Dart untuk menyediakan API stubbing (`when(() => ...).thenReturn(...)`) tanpa perlu menjalankan generator build yang memakan waktu."
    }
  },
  {
    "id": 57,
    "slug": "dart-lesson-57",
    "title": "57. Reliabilitas, Security, dan Test Matrix",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Reliabilitas, Security, dan Test Matrix\n\n### Materi Inti:\n- Sanitizer, invariant test, property test, dan fuzzing ringan.\n- Input validation, ownership contract, dan secure defaults.\n- Testing pada edge case, malformed input, dan concurrent path.",
    "code": "// Dart 3: Reliabilitas, Security, dan Test Matrix\n\nvoid main() {\n  var topik = \"Reliabilitas, Security, dan Test Matrix\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa inti dari arsitektur *Clean Architecture* dalam aplikasi mobile Dart/Flutter?",
      "options": [
        "Memisahkan kode menjadi lapisan Domain (Entities/UseCases), Data (Repositories/DataSources), dan Presentation (UI/BLoC); dependensi hanya boleh mengarah ke dalam menuju aturan bisnis inti.",
        "Menghapus semua file yang memiliki lebih dari 50 baris kode.",
        "Menyimpan seluruh logika aplikasi di dalam satu file `main.dart`.",
        "Menolak penggunaan package eksternal dari pub.dev."
      ],
      "answer": 0,
      "explanation": "Clean Architecture membuat domain logic independen dari framework Flutter, UI, atau vendor database, memungkinkan penggantian teknologi UI atau database tanpa menyentuh core rules."
    }
  },
  {
    "id": 58,
    "slug": "dart-lesson-58",
    "title": "58. Arsitektur, Dart20 Modules, Build, dan CI",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Arsitektur, Dart20 Modules, Build, dan CI\n\n### Materi Inti:\n- Layering, interface boundary, dependency inversion, dan module boundary.\n- CMake/compiler flags, WebAssembly build, dan browser execution.\n- CI untuk build, test, sanitizer, dan format/lint.",
    "code": "// Dart 3: Arsitektur, Dart20 Modules, Build, dan CI\n\nvoid main() {\n  var topik = \"Arsitektur, Dart20 Modules, Build, dan CI\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Bagaimana cara menguji fungsi asinkron berbasis waktu (seperti timer atau stream debounce) tanpa membuat test menunggu secara fisik?",
      "options": [
        "Menggunakan utilitas `fakeAsync` dari `package:fake_async`, yang memungkinkan manipulasi waktu simulasi secara instan via `async.elapse(Duration(seconds: 10))`.",
        "Menggunakan fungsi `sleep()` selama 10 detik di dalam unit test.",
        "Mempercepat jam sistem operasi laptop secara manual.",
        "Menghapus timer dari kode sebelum pengujian dijalankan."
      ],
      "answer": 0,
      "explanation": "`fakeAsync` membekukan waktu fisik dan menyimulasikan laju clock microtask, memungkinkan pengujian delay berjam-jam selesai dalam hitungan milidetik secara deterministik."
    }
  },
  {
    "id": 59,
    "slug": "dart-lesson-59",
    "title": "59. Capstone Design: Modern Data Pipeline",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Design: Modern Data Pipeline\n\n### Materi Inti:\n- Merancang domain type, ownership, error handling, dan API.\n- Memilih templates, concepts, ranges, smart pointer, dan coroutine secara tepat.\n- Menentukan acceptance criteria, benchmark, dan test cases.",
    "code": "// Dart 3: Capstone Design: Modern Data Pipeline\n\nvoid main() {\n  var topik = \"Capstone Design: Modern Data Pipeline\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa prinsip kerja dari pola manajemen state *BLoC (Business Logic Component)*?",
      "options": [
        "Memisahkan presentasi UI murni dari logika bisnis; UI mengirimkan *Event* ke BLoC, BLoC memproses logika, lalu memancarkan *State* baru kembali ke UI melalui reactive streams.",
        "Menyimpan seluruh data aplikasi di dalam variabel global statis.",
        "Mengubah setiap tombol di aplikasi menjadi widget StatefulWidget.",
        "Menolak penggunaan Stream dan hanya menggunakan callback biasa."
      ],
      "answer": 0,
      "explanation": "BLoC menyediakan alur data satu arah (*unidirectional data flow*) yang dapat diprediksi, sangat terstruktur untuk aplikasi enterprise berskala besar, dan sangat mudah di-unit test."
    }
  },
  {
    "id": 60,
    "slug": "dart-lesson-60",
    "title": "60. Capstone Implementation, Demo, dan Refleksi",
    "module": "Dart23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Implementation, Demo, dan Refleksi\n\n### Materi Inti:\n- Implementasi end-to-end di JupyterLite/WebAssembly.\n- Menjalankan unit test, sanitizer, dan benchmark.\n- Menjelaskan tradeoff, hasil, keterbatasan, dan langkah pengembangan.",
    "code": "// Dart 3: Capstone Implementation, Demo, dan Refleksi\n\nvoid main() {\n  var topik = \"Capstone Implementation, Demo, dan Refleksi\";\n  print(\"Menjalankan studi kasus: $topik\");\n\n  final status = \"Sukses\";\n  final code = 200;\n  print(\"Status: \" + status + \" (Kode: \" + code.toString() + \")\");\n}\n",
    "quiz": {
      "question": "Apa manfaat utama mengonfigurasi *GitHub Actions CI Pipeline* untuk memvalidasi setiap Pull Request pada proyek Dart?",
      "options": [
        "Menjalankan `dart analyze` (linter) dan `dart test` secara otomatis pada environment bersih sebelum kode di-merge, mencegah regresi bug dan menjaga kualitas codebase bersama.",
        "Membuat aplikasi langsung populer di mesin pencari Google.",
        "Secara otomatis menuliskan deskripsi PR untuk developer.",
        "Menghapus akun kontributor yang membuat kode error."
      ],
      "answer": 0,
      "explanation": "Continuous Integration adalah pintu gerbang kualitas tim modern, memastikan tidak ada kode yang melanggar aturan arsitektur, syntax error, atau memecahkan unit test yang lolos ke branch utama."
    }
  }
];

window.MODULES = MODULES;
window.lessons = lessons;
window.LESSONS = lessons;


// ======== Fix for missing renderNav, loadLesson, etc. ========

// Global state
let currentLesson = 0;
let filterQuery = '';
let progress = {};  // {lessonId: true} map

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function closeSidebar() {
    try {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.remove('translate-x-0');
        if (overlay) overlay.classList.add('hidden');
    } catch (e) {}
}

function toggleModule(id) {
    const el = document.getElementById('module-' + id);
    if (el) el.classList.toggle('hidden');
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressBar = document.getElementById('progress-fill-bar');
    const progressText = document.getElementById('course-progress');
    const mobileProgress = document.getElementById('mobile-progress');
    const statDone = document.getElementById('stat-done');
    const totalLessons = lessons ? lessons.length : 0;
    const doneLessons = Object.keys(progress).filter(k => !!progress[k]).length;
    const percent = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;
    
    if (progressFill) progressFill.style.width = percent + '%';
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressText) progressText.textContent = percent + '%';
    if (mobileProgress) mobileProgress.textContent = percent + '%';
    if (statDone) statDone.textContent = doneLessons + '/' + totalLessons;
}

function updateCompleteButtons() {
    const lesson = lessons[currentLesson];
    if (!lesson) return;
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        if (completeBtn) completeBtn.style.display = 'none';
        if (completedBtn) completedBtn.style.display = 'flex';
    } else {
        if (completeBtn) completeBtn.style.display = 'flex';
        if (completedBtn) completedBtn.style.display = 'none';
    }
}

function markComplete() {
    const lesson = lessons[currentLesson];
    if (!lesson) return;
    progress[lesson.id] = true;
    try {
        localStorage.setItem('dart_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('dart_progress');
    } catch (e) {}
    updateProgress();
    renderNav();
    updateCompleteButtons();
}

function renderNav(filter) {
    if (typeof filter === 'string') filterQuery = filter;
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    const q = (filterQuery || '').toLowerCase().trim();
    const curModId = lessons[currentLesson] ? lessons[currentLesson].moduleId : 1;
    
    const html = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const filtered = q ? modLessons.filter(l => 
            l.title.toLowerCase().includes(q) || 
            (mod.title && mod.title.toLowerCase().includes(q)) || 
            (l.slug || '').includes(q)
        ) : modLessons;
        if (q && filtered.length === 0) return '';
        
        const doneCount = modLessons.filter(l => !!progress[l.id]).length;
        const isCurrentModule = q ? true : mod.id === curModId;
        const lessonRows = filtered.map(l => {
            const idx = lessons.findIndex(x => x.id === l.id);
            const isActive = idx === currentLesson;
            const isDone = !!progress[l.id];
            const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
            return `<button onclick="loadLesson(${idx}); if(typeof closeSidebar==='function')closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ${cls}">
                <span class="text-[11px] shrink-0">${isDone ? '✅' : '○'}</span>
                <span class="truncate flex-1">${escapeHtml(l.title)}</span>
            </button>`;
        }).join('');
        
        const badgeCls = doneCount === modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
        return `<div class="mb-1">
            <button onclick="toggleModule(${mod.id})" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">
                <span class="flex items-center gap-2 truncate">
                    ${mod.icon ? `<i class="${mod.icon} text-cyan-400 text-sm w-4 text-center"></i>` : ''}
                    <span class="truncate">${escapeHtml(mod.title)}</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${badgeCls}">${doneCount}/${modLessons.length}</span>
            </button>
            <div id="module-${mod.id}" class="space-y-0.5 mt-0.5 px-2 ${isCurrentModule ? '' : 'hidden'}">${lessonRows}</div>
        </div>`;
    }).join('');
    
    nav.innerHTML = html;
    updateProgress();
}

async function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    try { localStorage.setItem('dart_last_lesson', String(index)); } catch (e) {}
    currentLesson = index;
    const lesson = lessons[index];
    
    // Close sidebar on mobile
    if (typeof closeSidebar === 'function') closeSidebar();
    
    // Update header
    const bc = document.getElementById('breadcrumb');
    const lt = document.getElementById('lesson-title');
    const ld = document.getElementById('lesson-duration');
    const ll = document.getElementById('lesson-level');
    const li = document.getElementById('lesson-id');
    if (bc) bc.textContent = lesson.module + ' • ' + lesson.duration;
    if (lt) lt.textContent = lesson.title.replace(/^\d+\.\s*/, '');
    if (ld) {
        ld.innerHTML = `<i class="fa-regular fa-clock"></i> ${lesson.duration}`;
        ld.classList.remove('hidden');
    }
    if (ll) {
        ll.textContent = lesson.level;
        ll.classList.remove('hidden');
    }
    if (li) {
        li.textContent = lesson.slug;
        li.classList.remove('hidden');
    }
    
    // Set content
    const contentEl = document.getElementById('lesson-content');
    if (contentEl) {
        contentEl.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)"><i class="fa-solid fa-spinner fa-spin"></i> Memuat materi…</div>';
    }
    
    let html = '';
    try {
        let md = '';
        const mdCandidate = (typeof LESSON_FILES !== 'undefined' && LESSON_FILES[index]) ? LESSON_FILES[index] : (lesson.mdFile || ('lessons/' + (lesson.slug || '') + '.md'));
        try {
            const res = await fetch(mdCandidate);
            if (res.ok) md = await res.text();
        } catch (err) {}
        
        if (!md && lesson.mdFile) {
            try {
                const res = await fetch(lesson.mdFile);
                if (res.ok) md = await res.text();
            } catch (err) {}
        }
        
        if (!md && lesson.slug) {
            try {
                const res = await fetch('lessons/' + lesson.slug + '.md');
                if (res.ok) md = await res.text();
            } catch (err) {}
        }
        
        const rawContent = lesson.content || lesson.content_md || lesson.description || '';
        if (!md && rawContent) {
            md = rawContent;
        }
        
        if (md) {
            if (typeof marked !== 'undefined') {
                marked.setOptions({gfm: true, breaks: true});
                html = marked.parse(md);
            } else {
                html = '<pre>' + escapeHtml(md) + '</pre>';
            }
        } else {
            html = '<h2>' + escapeHtml(lesson.title) + '</h2><p>Materi sedang diperbarui. Silakan gunakan editor di bawah.</p>';
        }
    } catch (e) {
        html = `<div style="color:var(--text-muted);font-size:.8rem;margin-top:8px">Gagal memuat materi: ${escapeHtml(e.message)}</div>`;
    }
    
    if (contentEl) contentEl.innerHTML = '<div class="prose max-w-none">' + html + '</div>';
    
    // Update code editor if exists
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor && lesson.code) {
        codeEditor.value = lesson.code.replace(/\\n/g, '\n');
    }
    
    // Quiz
    const quizSection = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    if (lesson.quiz && quizContent && quizSection) {
        quizSection.classList.remove('hidden');
        quizContent.innerHTML = 
            `<p class="text-slate-200 text-sm font-medium mb-3">${escapeHtml(lesson.quiz.question)}</p>
             <div class="space-y-2">${lesson.quiz.options.map((opt, i) => 
                `<label class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-white/5 border border-white/5 cursor-pointer transition text-xs sm:text-sm text-slate-300">
                    <input type="radio" name="quiz-opt" value="${i}" class="accent-cyan-500">
                    <span>${escapeHtml(opt)}</span>
                </label>`
             ).join('')}</div>`;
    } else if (quizSection) {
        quizSection.classList.add('hidden');
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === lessons.length - 1;
    
    updateCompleteButtons();
    renderNav();
    
    // Scroll to top
    const contentScroll = document.getElementById('content-scroll');
    if (contentScroll) contentScroll.scrollTo({top: 0, behavior: 'smooth'});
}

// Initialize progress from localStorage
try {
    const saved = localStorage.getItem('dart_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}


document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('dart_last_lesson') || '0', 10);
    loadLesson(!isNaN(savedLast) && savedLast >= 0 && savedLast < lessons.length ? savedLast : 0);
    updateProgress();
});

// ================= Interactive Handlers (CPP) =================
function nextLesson() {
    if (typeof currentLesson !== 'undefined' && typeof lessons !== 'undefined' && currentLesson < lessons.length - 1) {
        loadLesson(currentLesson + 1);
    }
}

function prevLesson() {
    if (typeof currentLesson !== 'undefined' && currentLesson > 0) {
        loadLesson(currentLesson - 1);
    }
}

function checkQuiz() {
    const lesson = lessons[currentLesson];
    if (!lesson || !lesson.quiz) return;
    const selected = document.querySelector('input[name="quiz_option"]:checked') || document.querySelector('input[name="quiz-opt"]:checked');
    const resultEl = document.getElementById('quiz-result');
    if (!resultEl) return;
    if (!selected) {
        resultEl.innerHTML = '<span class="text-amber-400 text-xs">Pilih salah satu jawaban terlebih dahulu.</span>';
        return;
    }
    const val = parseInt(selected.value, 10);
    const correctVal = lesson.quiz.answer !== undefined ? lesson.quiz.answer : (lesson.quiz.correct !== undefined ? lesson.quiz.correct : 0);
    if (val === correctVal) {
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">' +
            '<i class="fas fa-check-circle mr-1"></i> Benar! ' + escapeHtml(lesson.quiz.explanation || '') +
        '</div>';
        markComplete();
    } else {
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">' +
            '<i class="fas fa-times-circle mr-1"></i> Kurang tepat. ' + escapeHtml(lesson.quiz.explanation || 'Silakan tinjau kembali materi.') +
        '</div>';
    }
}

async function runCode() {
    const editor = document.getElementById('code-editor');
    const out = document.getElementById('output');
    if (!editor || !out) return;
    const code = editor.value;
    out.innerHTML = '<span class="text-cyan-400"><i class="fa-solid fa-spinner fa-spin"></i> Menjalankan kode Dart...</span>';
    
    // Attempt Judge0 or playground execution if applicable
    try {
        const langId = 90; // DART Judge0 CE language_id
        const res = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source_code: code,
                language_id: langId
            })
        });
        if (res.ok) {
            const data = await res.json();
            const stdout = data.stdout || '';
            const stderr = data.stderr || data.compile_output || '';
            if (stderr) {
                out.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs whitespace-pre-wrap">' + escapeHtml(stderr) + '</div>';
            } else if (stdout) {
                out.innerHTML = '<pre class="text-xs text-cyan-300 font-mono whitespace-pre-wrap">' + escapeHtml(stdout) + '</pre>';
            } else {
                out.innerHTML = '<pre class="text-xs text-slate-400 font-mono">// Program sukses dieksekusi tanpa output.</pre>';
            }
            return;
        }
    } catch (e) {}
    
    // Fallback simulation
    out.innerHTML = '<div class="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">' +
        '// Eksekusi kode Dart lokal (Simulasi):\n\n' + escapeHtml(code) +
    '</div>';
}

function resetCode() {
    if (typeof lessons !== 'undefined' && lessons[currentLesson]) {
        const editor = document.getElementById('code-editor');
        if (editor) editor.value = (lessons[currentLesson].code || '').replace(/\\n/g, '\n');
        const out = document.getElementById('output');
        if (out) out.innerHTML = '<span class="text-slate-500">// Editor di-reset ke kode awal materi.</span>';
    }
}

function clearOutput() {
    const out = document.getElementById('output');
    if (out) out.innerHTML = '<span class="text-slate-500">// Output dibersihkan.</span>';
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (editor && navigator.clipboard) {
        navigator.clipboard.writeText(editor.value).then(() => {
            alert('Kode berhasil disalin!');
        });
    }
}

// Certificate helpers
function openCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const tot = typeof lessons !== 'undefined' ? lessons.length : 60;
    const done = Object.keys(progress).filter(k => !!progress[k]).length;
    const isCompleted = done >= tot;
    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');
    if (isCompleted) {
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');
        drawCertificate();
    } else {
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');
        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const pRem = document.getElementById('cert-locked-remaining-text');
        const pct = Math.round((done / tot) * 100);
        if (pText) pText.textContent = pct + '%';
        if (pBar) pBar.style.width = pct + '%';
        if (pRem) pRem.textContent = 'Tersisa ' + (tot - done) + ' pelajaran lagi.';
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function drawCertificate() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const nameInput = document.getElementById('cert-name-input');
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta Dart Learning Path';
    
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SERTIFIKAT KELULUSAN RESMI', canvas.width / 2, 120);
    
    ctx.fillStyle = '#94a3b8';
    ctx.font = '18px sans-serif';
    ctx.fillText('Diberikan kepada:', canvas.width / 2, 200);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText(studentName, canvas.width / 2, 280);
    
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '18px sans-serif';
    ctx.fillText('Telah berhasil menyelesaikan seluruh 60 kurikulum pelajaran', canvas.width / 2, 360);
    ctx.fillText('Dart Learning Path Standar Industri', canvas.width / 2, 400);
    
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/dart/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-Dart-Learning-Path.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function printCertificate() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const w = window.open('', '_blank');
    w.document.write('<html><head><title>Cetak Sertifikat</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#000;"><img src="' + dataUrl + '" style="max-width:95vw;max-height:95vh;border-radius:12px;" /><script>window.onload = () => { window.print(); };<\/script></body></html>');
}

// Window global exports
window.nextLesson = nextLesson;
window.prevLesson = prevLesson;
window.checkQuiz = checkQuiz;
window.runCode = runCode;
window.resetCode = resetCode;
window.clearOutput = clearOutput;
window.copyCode = copyCode;
window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;
window.drawCertificate = drawCertificate;
window.downloadCertificatePNG = downloadCertificatePNG;
window.printCertificate = printCertificate;
