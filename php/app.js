const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// PHP Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  {
    "id": 1,
    "title": "Fondasi PHP Modern dan Tooling",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu membangun, menjalankan, membaca error, dan menulis program PHP dasar di browser."
  },
  {
    "id": 2,
    "title": "Nilai, Referensi, dan Abstraksi Data",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami nilai, lifetime, encapsulation, dan pembatasan konstansi."
  },
  {
    "id": 3,
    "title": "Object-Oriented PHP dan Polymorphism",
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
    "title": "PHP23, Performa, Reliabilitas, dan Capstone",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merancang, menguji, memprofiling, dan menyajikan aplikasi PHP modern yang realistis."
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "php-lesson-1",
    "title": "1. Program Pertama dengan PHP20 dan PHP23",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Pertama dengan PHP20 dan PHP23\n\n### Materi Inti:\n- Alur compile, link, dan run program PHP.\n- Peran header, namespace std, dan flag -std=c++20 atau -std=c++23.\n- Menjalankan kode PHP melalui JupyterLite/Xeus-Cling.",
    "code": "<?php\n// PHP 8.3 Modern: Program Pertama dengan PHP20 dan PHP23\ndeclare(strict_types=1);\n\n$topik = 'Program Pertama dengan PHP20 dan PHP23';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa yang membedakan mode `declare(strict_types=1);` dengan default type coercion di PHP 8.3?",
      "options": [
        "Memaksa pengecekan tipe skalar secara ketat pada pemanggilan fungsi/metode dalam file yang mendeklarasikannya.",
        "Mengubah semua tipe data runtime menjadi string otomatis.",
        "Hanya berlaku untuk tipe return value dan mengabaikan tipe parameter argumen.",
        "Menonaktifkan garbage collection untuk meningkatkan kecepatan eksekusi skrip."
      ],
      "answer": 0,
      "explanation": "`declare(strict_types=1)` bersifat per-file dan memaksa PHP melempar `TypeError` jika argumen skalar tidak persis sesuai deklarasi tipe parameter fungsi."
    }
  },
  {
    "id": 2,
    "slug": "php-lesson-2",
    "title": "2. Tipe Data, Literal, `auto`, dan `constexpr`",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data, Literal, `auto`, dan `constexpr`\n\n### Materi Inti:\n- Tipe fundamental integer, floating-point, char, bool, dan pointer dasar.\n- Signedness, ukuran tipe, suffix literal, dan konversi angka.\n- `auto` untuk deduksi tipe dan `constexpr` untuk nilai compile-time.",
    "code": "<?php\n// PHP 8.3 Modern: Tipe Data, Literal, `auto`, dan `constexpr`\ndeclare(strict_types=1);\n\n$topik = 'Tipe Data, Literal, `auto`, dan `constexpr`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Perhatikan kode: `echo 0 == '0a' ? 'true' : 'false';`. Apa output di PHP 8.0+ dan mengapa?",
      "options": [
        "'false', karena perbandingan string non-numerik dengan integer tidak lagi mengkonversi string menjadi 0.",
        "'true', karena string '0a' di-cast menjadi integer 0 secara implisit.",
        "Melemparkan fatal error karena tipe data berbeda.",
        "'false', karena operator == otomatis berubah menjadi === di PHP 8."
      ],
      "answer": 0,
      "explanation": "Sejak PHP 8.0, perbandingan angka vs non-numeric string menghasilkan false, berbeda dengan PHP 7 yang meng-cast string menjadi 0."
    }
  },
  {
    "id": 3,
    "slug": "php-lesson-3",
    "title": "3. Operator, Precedence, dan Short-Circuit",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator, Precedence, dan Short-Circuit\n\n### Materi Inti:\n- Operator arithmetic, comparison, logical, conditional, dan assignment.\n- Precedence, associativity, dan pentingnya parentheses.\n- Short-circuit evaluation pada `&&` dan `||`.",
    "code": "<?php\n// PHP 8.3 Modern: Operator, Precedence, dan Short-Circuit\ndeclare(strict_types=1);\n\n$topik = 'Operator, Precedence, dan Short-Circuit';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keunggulan ekspresi `match` dibandingkan dengan pernyataan `switch` tradisional di PHP 8?",
      "options": [
        "`match` mengembalikan nilai (expression), menggunakan perbandingan identik (`===`), dan tidak memerlukan `break`.",
        "`match` hanya dapat membandingkan integer dan tidak mendukung banyak kondisi.",
        "`match` mengevaluasi semua cabang kondisi secara bersamaan (parallel).",
        "`match` menggunakan type coercion longgar (`==`) dan otomatis jatuh ke case berikutnya jika tidak ada `break`."
      ],
      "answer": 0,
      "explanation": "`match` adalah expression (mengembalikan nilai), menggunakan strict equality (`===`), tidak melakukan fallthrough sehingga tidak butuh `break`, dan melempar `UnhandledMatchError` jika tidak ada kondisi yang cocok."
    }
  },
  {
    "id": 4,
    "slug": "php-lesson-4",
    "title": "4. Kontrol Alur dan Loop",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kontrol Alur dan Loop\n\n### Materi Inti:\n- `if`, `else`, `switch`, dan equality/comparison.\n- For loop, range-based for, break, continue, dan early return.\n- Menulis kondisi yang mudah diuji dan tidak ambigu.",
    "code": "<?php\n// PHP 8.3 Modern: Kontrol Alur dan Loop\ndeclare(strict_types=1);\n\n$topik = 'Kontrol Alur dan Loop';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa yang terjadi jika variabel bernilai `null` dipanggil dengan nullsafe operator `$user?->profile?->getAddress()`?",
      "options": [
        "Eksekusi rantai langsung berhenti dan mengembalikan `null` tanpa memicu error.",
        "Memicu warning 'Attempt to read property on null'.",
        "Melemparkan `NullPointerException` runtime.",
        "Mengembalikan string kosong `\"\"`."
      ],
      "answer": 0,
      "explanation": "Nullsafe operator (`?->`) mengevaluasi apakah sisi kiri bernilai null; jika ya, seluruh rantai pemanggilan langsung berhenti dan menghasilkan `null` dengan aman."
    }
  },
  {
    "id": 5,
    "slug": "php-lesson-5",
    "title": "5. Fungsi, Parameter, Overload, dan `constexpr`",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fungsi, Parameter, Overload, dan `constexpr`\n\n### Materi Inti:\n- Declaration, definition, return type, dan parameter passing.\n- Pass by value, pass by reference, default arguments, dan overload resolution.\n- Fungsi `constexpr` untuk kalkulasi compile-time.",
    "code": "<?php\n// PHP 8.3 Modern: Fungsi, Parameter, Overload, dan `constexpr`\ndeclare(strict_types=1);\n\n$topik = 'Fungsi, Parameter, Overload, dan `constexpr`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana sintaks *named arguments* memengaruhi pemanggilan fungsi di PHP 8?",
      "options": [
        "Memungkinkan pengiriman argumen berdasarkan nama parameter, sehingga urutan posisi argumen dapat diabaikan.",
        "Memaksa semua parameter default harus ditulis ulang saat pemanggilan.",
        "Mengharuskan nama argumen dibungkus dalam tanda petik string.",
        "Mengganti parameter menjadi array asosiatif di dalam tubuh fungsi."
      ],
      "answer": 0,
      "explanation": "Named arguments memungkinkan pemanggilan `fungsi(paramB: 10, paramA: 5)` sehingga tidak bergantung pada posisi indeks dan parameter opsional di tengah bisa dilewati."
    }
  },
  {
    "id": 6,
    "slug": "php-lesson-6",
    "title": "6. Header, Namespace, Debugging, dan Unit Test Mini",
    "module": "Fondasi PHP Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Header, Namespace, Debugging, dan Unit Test Mini\n\n### Materi Inti:\n- Pemisahan `.h` dan `.php`, include guard, dan `#pragma once`.\n- Namespace untuk menghindari nama global yang tabrakan.\n- Assertion, breakpoint, dan unit test sederhana.",
    "code": "<?php\n// PHP 8.3 Modern: Header, Namespace, Debugging, dan Unit Test Mini\ndeclare(strict_types=1);\n\n$topik = 'Header, Namespace, Debugging, dan Unit Test Mini';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa hasil dari array unpacking pada array dengan key string di PHP 8.1+ `[...$arr1, ...$arr2]`?",
      "options": [
        "Key string yang sama akan saling menimpa (overwrite) oleh array yang terletak di belakang.",
        "Melemparkan `Fatal Error: Cannot unpack string keys`.",
        "Key string otomatis diubah menjadi indeks integer numerik mulai dari 0.",
        "Kedua array digabungkan menjadi multidimensional array."
      ],
      "answer": 0,
      "explanation": "PHP 8.1+ mendukung unpacking array dengan key string; perilakunya identik dengan `array_merge()` di mana key string duplikat ditimpa oleh array sebelah kanan."
    }
  },
  {
    "id": 7,
    "slug": "php-lesson-7",
    "title": "7. Initialization dan Object Lifetime",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Initialization dan Object Lifetime\n\n### Materi Inti:\n- Automatic, static, thread-local, dan local lifetime.\n- Value initialization, aggregate initialization, dan initializer list.\n- Urutan destruction ketika nested scope berakhir.",
    "code": "<?php\n// PHP 8.3 Modern: Initialization dan Object Lifetime\ndeclare(strict_types=1);\n\n$topik = 'Initialization dan Object Lifetime';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara kerja *Constructor Property Promotion* di PHP 8?",
      "options": [
        "Mendeklarasikan visibility (public/protected/private) langsung di parameter `__construct` sehingga otomatis membuat dan mengisi properti kelas.",
        "Membuat properti menjadi statis di memori global.",
        "Mengubah parameter konstruktor menjadi instance Singleton otomatis.",
        "Hanya berfungsi jika kelas mewarisi kelas lain (extends)."
      ],
      "answer": 0,
      "explanation": "Constructor Property Promotion menyederhanakan boilerplate deklarasi properti kelas dan assignment di constructor menjadi satu baris deklarasi di signature constructor."
    }
  },
  {
    "id": 8,
    "slug": "php-lesson-8",
    "title": "8. Pointer, Reference, dan Address",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pointer, Reference, dan Address\n\n### Materi Inti:\n- Pointer nullable, reference wajib terinisialisasi, dan pointer arithmetic.\n- Lvalue reference versus rvalue reference.\n- Perbedaan address-of, pointer, dan lifetime.",
    "code": "<?php\n// PHP 8.3 Modern: Pointer, Reference, dan Address\ndeclare(strict_types=1);\n\n$topik = 'Pointer, Reference, dan Address';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Manakah pernyataan yang benar mengenai *Readonly Classes* di PHP 8.2+?",
      "options": [
        "Semua properti di dalam kelas secara otomatis bertipe readonly dan harus memiliki type declaration eksplisit.",
        "Kelas readonly dapat memiliki properti untyped atau dinamis.",
        "Kelas readonly dapat diekstend oleh kelas biasa yang tidak berstatus readonly.",
        "Nilai properti dapat diubah kembali menggunakan refleksi runtime."
      ],
      "answer": 0,
      "explanation": "Readonly class di PHP 8.2 mensyaratkan semua properti memiliki tipe data eksplisit dan mencegah penambahan dynamic properties, memastikan objek benar-benar immutable setelah inisialisasi."
    }
  },
  {
    "id": 9,
    "slug": "php-lesson-9",
    "title": "9. Struct, Class, dan Invariant",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struct, Class, dan Invariant\n\n### Materi Inti:\n- Data members, member functions, access control, dan encapsulation.\n- Membangun invariant seperti `balance >= 0`.\n- Memisahkan interface publik dari implementasi internal.",
    "code": "<?php\n// PHP 8.3 Modern: Struct, Class, dan Invariant\ndeclare(strict_types=1);\n\n$topik = 'Struct, Class, dan Invariant';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa perbedaan mendasar antara *Pure Enum* dan *Backed Enum* di PHP 8.1+?",
      "options": [
        "Backed Enum memiliki representasi nilai skalar (string atau int) via properti `value` dan metode `from()` / `tryFrom()`.",
        "Pure Enum hanya bisa digunakan di dalam database PDO.",
        "Backed Enum tidak dapat mengimplementasikan interface.",
        "Pure Enum otomatis memiliki nilai integer 0, 1, 2 secara default."
      ],
      "answer": 0,
      "explanation": "Pure Enum hanya berupa case konseptual tanpa skalar primitif, sedangkan Backed Enum terikat pada skalar (`enum Status: string`) dan menyediakan deserialisasi otomatis via `tryFrom()`."
    }
  },
  {
    "id": 10,
    "slug": "php-lesson-10",
    "title": "10. Const Correctness dan Value Semantics",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Correctness dan Value Semantics\n\n### Materi Inti:\n- Const object, const member function, dan pass-by-const-reference.\n- Value semantics versus reference semantics.\n- Kapan `mutable` boleh digunakan dan mengapa harus hati-hati.",
    "code": "<?php\n// PHP 8.3 Modern: Const Correctness dan Value Semantics\ndeclare(strict_types=1);\n\n$topik = 'Const Correctness dan Value Semantics';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara mengatasi konflik nama metode yang sama dari dua Trait yang digunakan dalam satu class?",
      "options": [
        "Menggunakan keyword `insteadof` untuk menentukan prioritas trait, dan `as` untuk membuat alias.",
        "Menghapus salah satu trait dari vendor folder.",
        "Mengubah nama metode di salah satu trait menjadi private secara otomatis.",
        "PHP tidak mengizinkan dua trait dengan nama metode sama dipakai bersamaan."
      ],
      "answer": 0,
      "explanation": "Konflik antar-trait diselesaikan dengan operator `insteadof` (misal: `TraitA::method insteadof TraitB`) dan operator `as` untuk alias metode yang digantikan."
    }
  },
  {
    "id": 11,
    "slug": "php-lesson-11",
    "title": "11. `std::string`, `std::string_view`, dan `std::span`",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::string`, `std::string_view`, dan `std::span`\n\n### Materi Inti:\n- `std::string` memiliki data; `string_view` adalah view non-owning.\n- `std::span` menyediakan view atas contiguous storage.\n- Lifetime hazard, dangling view, dan pemilihan interface yang benar.",
    "code": "<?php\n// PHP 8.3 Modern: `std::string`, `std::string_view`, dan `std::span`\ndeclare(strict_types=1);\n\n$topik = '`std::string`, `std::string_view`, dan `std::span`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa fungsi dari metode `__invoke()` pada sebuah Class PHP?",
      "options": [
        "Memungkinkan instance objek dipanggil langsung layaknya sebuah fungsi: `$obj()`.",
        "Metode yang otomatis dijalankan saat objek dihapus dari memori.",
        "Metode untuk mengklon data objek secara deep copy.",
        "Metode untuk memvalidasi skema JSON objek."
      ],
      "answer": 0,
      "explanation": "Jika sebuah class memiliki magic method `__invoke()`, objek tersebut dapat dieksekusi sebagai callable seperti `$response = $action($request);`."
    }
  },
  {
    "id": 12,
    "slug": "php-lesson-12",
    "title": "12. RAII dan Penanganan Exception",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII dan Penanganan Exception\n\n### Materi Inti:\n- Resource Acquisition Is Initialization sebagai pola utama ownership.\n- Stack unwinding dan destruction saat exception dilempar.\n- Menulis destructor yang tidak me-lempar exception.",
    "code": "<?php\n// PHP 8.3 Modern: RAII dan Penanganan Exception\ndeclare(strict_types=1);\n\n$topik = 'RAII dan Penanganan Exception';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa interface segregation principle (ISP) menyarankan interface kecil dan spesifik?",
      "options": [
        "Agar kelas pengimplementasi tidak dipaksa mengimplementasikan metode yang tidak diperlukannya.",
        "Agar memori PHP tidak kehabisan RAM saat melakukan autoloading.",
        "Karena PHP membatasi maksimum 3 metode per interface.",
        "Agar file class interface dapat dikompilasi oleh JIT compiler."
      ],
      "answer": 0,
      "explanation": "Interface yang ramping dan fokus mencegah kelas terikat pada dependensi atau metode kosong yang melanggar kontrak semantik."
    }
  },
  {
    "id": 13,
    "slug": "php-lesson-13",
    "title": "13. Constructor, Destructor, dan Initializer List",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor, Destructor, dan Initializer List\n\n### Materi Inti:\n- Default, parameterized, copy, dan destructor.\n- Initializer list untuk konstruk anggota.\n- Urutan construction dan destruction.",
    "code": "<?php\n// PHP 8.3 Modern: Constructor, Destructor, dan Initializer List\ndeclare(strict_types=1);\n\n$topik = 'Constructor, Destructor, dan Initializer List';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keunggulan utama PHP *Attributes* dibanding PHPDoc annotations tradisional?",
      "options": [
        "Attributes adalah fitur native bahasa yang divalidasi saat kompilasi dan dapat dibaca via Reflection API secara terstruktur.",
        "Attributes hanya disimpan sebagai komentar teks biasa dan di-parse via regex.",
        "Attributes otomatis menghentikan eksekusi script jika ada peringatan deprecated.",
        "Attributes hanya bisa digunakan pada framework Symfony."
      ],
      "answer": 0,
      "explanation": "Attributes (`#[Route('/api')]`) adalah sintaks resmi AST PHP yang type-safe, cepat diakses lewat Reflection, dan terhindar dari overhead parsing string PHPDoc komentar."
    }
  },
  {
    "id": 14,
    "slug": "php-lesson-14",
    "title": "14. Copy Semantics dan Rule of Three/Five",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Semantics dan Rule of Three/Five\n\n### Materi Inti:\n- Copy constructor, copy assignment, dan self-assignment.\n- Shallow copy versus deep copy.\n- Copy-and-swap serta kapan menerapkan rule of five.",
    "code": "<?php\n// PHP 8.3 Modern: Copy Semantics dan Rule of Three/Five\ndeclare(strict_types=1);\n\n$topik = 'Copy Semantics dan Rule of Three/Five';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa yang dimaksud dengan *Fibers* yang diperkenalkan di PHP 8.1?",
      "options": [
        "Mekanisme coroutine berbobot ringan untuk manajemen concurrency kooperatif tanpa multi-threading OS.",
        "Thread worker yang berjalan di kernel Linux secara paralel penuh.",
        "Ekstensi untuk menghubungkan PHP ke kabel fiber optik jaringan.",
        "Compiler optimasi pengganti OPcache."
      ],
      "answer": 0,
      "explanation": "Fibers adalah coroutine full-stack yang dapat di-suspend dan di-resume dari mana saja dalam call stack, menjadi fondasi async framework modern seperti Revolt dan Amp."
    }
  },
  {
    "id": 15,
    "slug": "php-lesson-15",
    "title": "15. Operator Overloading",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Overloading\n\n### Materi Inti:\n- Operator arithmetic, comparison, assignment, dan stream.\n- Member operator versus non-member/friend operator.\n- Implicit conversion dan bahaya operator yang mengejutkan.",
    "code": "<?php\n// PHP 8.3 Modern: Operator Overloading\ndeclare(strict_types=1);\n\n$topik = 'Operator Overloading';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana *Generators* (`yield`) membantu efisiensi penggunaan memori saat memproses dataset besar?",
      "options": [
        "Menghasilkan nilai satu per satu sesuai permintaan (lazy iteration) tanpa memuat seluruh array ke dalam memori RAM.",
        "Menyimpan seluruh data ke dalam file swap disk secara otomatis.",
        "Mengkompresi array menggunakan algoritma GZIP sebelum iterasi.",
        "Menghapus variabel global di setiap perulangan."
      ],
      "answer": 0,
      "explanation": "Generators menghasilkan objek `Generator` yang hanya mengkalkulasi dan mengembalikan satu elemen pada saat `yield` dipanggil, menjaga memory footprint tetap konstan."
    }
  },
  {
    "id": 16,
    "slug": "php-lesson-16",
    "title": "16. Inheritance dan Virtual Dispatch",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance dan Virtual Dispatch\n\n### Materi Inti:\n- Base/derived relationship dan is-a semantics.\n- Virtual function, override, dan dynamic dispatch.\n- Virtual destructor pada base polymorphic.",
    "code": "<?php\n// PHP 8.3 Modern: Inheritance dan Virtual Dispatch\ndeclare(strict_types=1);\n\n$topik = 'Inheritance dan Virtual Dispatch';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa hasil dari First-Class Callable Syntax `strlen(...)` di PHP 8.1?",
      "options": [
        "Mengembalikan instance objek `Closure` dari fungsi tersebut tanpa overhead string callable.",
        "Mengeksekusi fungsi strlen dengan parameter null.",
        "Memicu syntax error karena elipsis (...) tidak valid.",
        "Mengubah fungsi menjadi macro preprocessor."
      ],
      "answer": 0,
      "explanation": "Sintaks `strlen(...)` atau `$obj->method(...)` menghasilkan objek `Closure` secara bersih, type-safe, dan mendukung analisa statis."
    }
  },
  {
    "id": 17,
    "slug": "php-lesson-17",
    "title": "17. Interface Abstrak dan Polymorphic Design",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface Abstrak dan Polymorphic Design\n\n### Materi Inti:\n- Pure virtual function dan abstract class.\n- Interface sebagai kontrak, bukan implementasi yang bocor.\n- Polymorphic destruction dan prinsip substitusi.",
    "code": "<?php\n// PHP 8.3 Modern: Interface Abstrak dan Polymorphic Design\ndeclare(strict_types=1);\n\n$topik = 'Interface Abstrak dan Polymorphic Design';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa fungsi dari koleksi `WeakMap` di PHP 8.0?",
      "options": [
        "Menyimpan relasi objek sebagai key tanpa mencegah garbage collector menghapus objek tersebut jika referensi utamanya hilang.",
        "Membuat hash map yang otomatis terenkripsi di memori.",
        "Menyimpan array dengan batas waktu kadaluarsa (TTL) layaknya Redis.",
        "Menghindari penggunaan memori heap PHP."
      ],
      "answer": 0,
      "explanation": "WeakMap memegang referensi lemah terhadap objek; ketika objek key dihancurkan oleh garbage collection, entri di WeakMap ikut terhapus otomatis, mencegah memory leak."
    }
  },
  {
    "id": 18,
    "slug": "php-lesson-18",
    "title": "18. Composition, Policy, dan CRTP",
    "module": "Object-Oriented PHP dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Composition, Policy, dan CRTP\n\n### Materi Inti:\n- Composition over inheritance dan dependency injection.\n- Policy-based design untuk memilih perilaku compile-time.\n- CRTP sebagai static polymorphism.",
    "code": "<?php\n// PHP 8.3 Modern: Composition, Policy, dan CRTP\ndeclare(strict_types=1);\n\n$topik = 'Composition, Policy, dan CRTP';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Kapan sebuah Class Constant Type `public const string API_URL = '...';` diperiksa oleh PHP 8.3?",
      "options": [
        "Saat kompilasi dan saat kelas atau subclass di-load, memastikan tipe konstan tidak dilanggar oleh override.",
        "Hanya saat konstan tersebut dicetak dengan `echo`.",
        "Tidak diperiksa sama sekali karena konstan bersifat loose typing.",
        "Hanya saat unit test dijalankan."
      ],
      "answer": 0,
      "explanation": "PHP 8.3 menambahkan typed class constants sehingga tipe nilai konstan divalidasi secara ketat dan child class tidak dapat mengubah tipenya ke tipe yang tidak kompatibel."
    }
  },
  {
    "id": 19,
    "slug": "php-lesson-19",
    "title": "19. Function Templates dan Template Deduction",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Templates dan Template Deduction\n\n### Materi Inti:\n- Template parameter, deduction, dan explicit template arguments.\n- Overload resolution antara template dan non-template.\n- Pembatasan interface melalui requiremen operasi.",
    "code": "<?php\n// PHP 8.3 Modern: Function Templates dan Template Deduction\ndeclare(strict_types=1);\n\n$topik = 'Function Templates dan Template Deduction';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Manakah hierarki yang benar untuk penanganan error/exception fatal di PHP 7 dan PHP 8?",
      "options": [
        "`Throwable` sebagai root interface yang diimplementasikan oleh `Exception` dan `Error`.",
        "`Exception` sebagai root class yang membawahi `Throwable` dan `Error`.",
        "`FatalError` berdiri sendiri tanpa hubungan hierarki dengan `Exception`.",
        "`StandardException` yang hanya bisa ditangkap oleh handler `try-catch` khusus."
      ],
      "answer": 0,
      "explanation": "Semua error fatal engine (seperti `TypeError`, `ParseError`) mewarisi `Error`, sedangkan kesalahan aplikasi mewarisi `Exception`. Keduanya mengimplementasikan interface `Throwable`."
    }
  },
  {
    "id": 20,
    "slug": "php-lesson-20",
    "title": "20. Class Templates dan Instantiation",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Class Templates dan Instantiation\n\n### Materi Inti:\n- Class template, member definition, dan header placement.\n- Explicit instantiation versus implicit instantiation.\n- Contoh `Box<T>`, `Stack<T>`, dan `Optional<T>`.",
    "code": "<?php\n// PHP 8.3 Modern: Class Templates dan Instantiation\ndeclare(strict_types=1);\n\n$topik = 'Class Templates dan Instantiation';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Kapan blok `finally` dieksekusi dalam struktur `try - catch - finally`?",
      "options": [
        "Selalu dieksekusi, baik ketika exception terjadi, tidak terjadi, bahkan jika blok try/catch melakukan `return`.",
        "Hanya dieksekusi jika exception tidak tertangkap oleh blok catch.",
        "Hanya dieksekusi jika tidak ada return statement di blok try.",
        "Dieksekusi sebelum blok try dimulai."
      ],
      "answer": 0,
      "explanation": "Blok `finally` dijamin selalu berjalan di akhir untuk keperluan cleanup resource (menutup koneksi database, stream file, atau lock)."
    }
  },
  {
    "id": 21,
    "slug": "php-lesson-21",
    "title": "21. Partial Specialization, Full Specialization, dan Traits",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial Specialization, Full Specialization, dan Traits\n\n### Materi Inti:\n- Partial specialization untuk keluarga tipe.\n- Full specialization untuk kasus sangat khusus.\n- Trait pattern dan `std::enable_if`.",
    "code": "<?php\n// PHP 8.3 Modern: Partial Specialization, Full Specialization, dan Traits\ndeclare(strict_types=1);\n\n$topik = 'Partial Specialization, Full Specialization, dan Traits';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keuntungan menggunakan *Exception Chaining* (`new CustomException('Gagal', 0, $previousException)`)?",
      "options": [
        "Menjaga jejak stack trace asli dari akar penyebab masalah (root cause) saat membungkus exception ke layer yang lebih tinggi.",
        "Mencegah exception ditangkap oleh global exception handler.",
        "Mengurangi ukuran memori exception log.",
        "Menonaktifkan pengiriman log ke error monitoring tools."
      ],
      "answer": 0,
      "explanation": "Parameter ketiga pada `Exception` (`$previous`) memungkinkan developer merunut riwayat error asli dari layer internal (misal PDOException) hingga ke error level domain aplikasi."
    }
  },
  {
    "id": 22,
    "slug": "php-lesson-22",
    "title": "22. Variadic Templates dan Fold Expression",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Variadic Templates dan Fold Expression\n\n### Materi Inti:\n- Parameter pack, pack expansion, dan recursion.\n- Fold expression untuk sum, product, dan logical operations.\n- Penggunaan `std::tuple` dan argument forwarding.",
    "code": "<?php\n// PHP 8.3 Modern: Variadic Templates dan Fold Expression\ndeclare(strict_types=1);\n\n$topik = 'Variadic Templates dan Fold Expression';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa tingkatan log terendah (paling detail) menurut standar PSR-3 Logging Standard?",
      "options": [
        "DEBUG",
        "INFO",
        "NOTICE",
        "EMERGENCY"
      ],
      "answer": 0,
      "explanation": "Berdasarkan RFC 5424 / PSR-3, urutan log dari paling rendah ke paling kritis adalah: DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY."
    }
  },
  {
    "id": 23,
    "slug": "php-lesson-23",
    "title": "23. Compile-Time Programming dengan `constexpr` dan `consteval`",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Compile-Time Programming dengan `constexpr` dan `consteval`\n\n### Materi Inti:\n- `constexpr` function, literal type, dan compile-time evaluation.\n- `consteval` untuk强制 calculated at compile-time.\n- `if constexpr` untuk memilih code berdasarkan tipe.",
    "code": "<?php\n// PHP 8.3 Modern: Compile-Time Programming dengan `constexpr` dan `consteval`\ndeclare(strict_types=1);\n\n$topik = 'Compile-Time Programming dengan `constexpr` dan `consteval`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa risiko membiarkan `display_errors = On` di lingkungan produksi (production)?",
      "options": [
        "Informasi sensitif (kredensial DB, path server, struktur query SQL) bisa terekspos ke publik saat terjadi kegagalan sistem.",
        "Server otomatis merestart PHP-FPM setiap kali terjadi notice.",
        "Aplikasi akan berjalan 50% lebih lambat secara konstan.",
        "File upload otomatis ditolak oleh web server."
      ],
      "answer": 0,
      "explanation": "Di production, `display_errors` wajib dimatikan (Off) dan `log_errors` diaktifkan (On) untuk mencegah Information Disclosure vulnerability."
    }
  },
  {
    "id": 24,
    "slug": "php-lesson-24",
    "title": "24. SFINAE, `requires`, dan Early Constraint",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# SFINAE, `requires`, dan Early Constraint\n\n### Materi Inti:\n- Substitution failure dan SFINAE.\n- `requires` expression dan constrained template.\n- Overload resolution serta diagnostic yang lebih jelas.",
    "code": "<?php\n// PHP 8.3 Modern: SFINAE, `requires`, dan Early Constraint\ndeclare(strict_types=1);\n\n$topik = 'SFINAE, `requires`, dan Early Constraint';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara menangani E_DEPRECATED warning di PHP 8.3 agar tidak merusak response JSON API?",
      "options": [
        "Mengonfigurasi `error_reporting` dan custom error handler untuk mencatat deprecation ke log tanpa mencetaknya ke output stream.",
        "Menghapus semua komentar di dalam kode.",
        "Menggunakan tanda `@` di depan setiap baris kode aplikasi.",
        "Menonaktifkan OPcache di php.ini."
      ],
      "answer": 0,
      "explanation": "Output warning ke stdout merusak struktur payload JSON. Solusinya adalah memisahkan error stream ke file log melalui error handler terpusat."
    }
  },
  {
    "id": 25,
    "slug": "php-lesson-25",
    "title": "25. Ownership Model dan Raw Memory",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ownership Model dan Raw Memory\n\n### Materi Inti:\n- Stack ownership versus heap ownership.\n- `new`, `new[]`, `delete`, dan `delete[]`.\n- Double free, leak, mismatched deallocation, dan undefined behavior.",
    "code": "<?php\n// PHP 8.3 Modern: Ownership Model dan Raw Memory\ndeclare(strict_types=1);\n\n$topik = 'Ownership Model dan Raw Memory';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa *Prepared Statements* pada PDO sangat efektif mencegah SQL Injection?",
      "options": [
        "Memisahkan query SQL dengan data parameter di level protokol database, sehingga input pengguna tidak pernah dieksekusi sebagai perintah SQL.",
        "Mengubah semua karakter huruf kecil menjadi huruf besar di dalam query.",
        "Melakukan enkripsi SHA-256 pada seluruh isi database secara instan.",
        "Menolak query yang memiliki panjang lebih dari 255 karakter."
      ],
      "answer": 0,
      "explanation": "Prepared statements mengirimkan struktur query terlebih dahulu ke engine database untuk di-compile, lalu parameter dikirim terpisah sebagai data murni, bukan kode executable."
    }
  },
  {
    "id": 26,
    "slug": "php-lesson-26",
    "title": "26. `std::unique_ptr` dan Exclusive Ownership",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::unique_ptr` dan Exclusive Ownership\n\n### Materi Inti:\n- Exclusive ownership dan move-only semantics.\n- Factory function seperti `std::make_unique`.\n- Custom deleter, array support, `reset`, dan `release`.",
    "code": "<?php\n// PHP 8.3 Modern: `std::unique_ptr` dan Exclusive Ownership\ndeclare(strict_types=1);\n\n$topik = '`std::unique_ptr` dan Exclusive Ownership';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Opsi konfigurasi PDO apa yang wajib dipasang agar query error melempar exception alih-alih silent fail?",
      "options": [
        "`PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION`",
        "`PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC`",
        "`PDO::ATTR_AUTOCOMMIT => false`",
        "`PDO::ATTR_TIMEOUT => 30`"
      ],
      "answer": 0,
      "explanation": "`PDO::ERRMODE_EXCEPTION` memastikan bahwa kesalahan SQL (syntax error, constraint violation) langsung melempar `PDOException` yang bisa ditangani dengan `try-catch`."
    }
  },
  {
    "id": 27,
    "slug": "php-lesson-27",
    "title": "27. `std::shared_ptr` dan `std::weak_ptr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::shared_ptr` dan `std::weak_ptr`\n\n### Materi Inti:\n- Shared ownership, control block, dan reference count.\n- `weak_ptr` untuk optional non-owning reference.\n- Cycle ownership dan penggunaan `lock()`.",
    "code": "<?php\n// PHP 8.3 Modern: `std::shared_ptr` dan `std::weak_ptr`\ndeclare(strict_types=1);\n\n$topik = '`std::shared_ptr` dan `std::weak_ptr`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa opsi `PDO::ATTR_EMULATE_PREPARES => false` sangat direkomendasikan?",
      "options": [
        "Memaksa PDO menggunakan prepared statement native bawaan server database dan mengembalikan tipe data kolom numerik yang sebenarnya (bukan string).",
        "Membuat database MySQL bekerja dalam mode NoSQL.",
        "Mematikan fitur transaksi database untuk mempercepat penulisan.",
        "Mengizinkan banyak query dieksekusi dalam satu string query."
      ],
      "answer": 0,
      "explanation": "Ketika emulasi dinonaktifkan, database server sendiri yang mem-parsing statement secara native, meningkatkan keamanan dan menjaga integer/float tetap bertipe asli di PHP."
    }
  },
  {
    "id": 28,
    "slug": "php-lesson-28",
    "title": "28. Allocator-Aware Container dan `pmr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Allocator-Aware Container dan `pmr`\n\n### Materi Inti:\n- Allocator-aware container dan custom allocator.\n- `std::pmr::monotonic_buffer_resource` serta pool lifetime.\n- Allocation failure, pool boundary, dan cache locality.",
    "code": "<?php\n// PHP 8.3 Modern: Allocator-Aware Container dan `pmr`\ndeclare(strict_types=1);\n\n$topik = 'Allocator-Aware Container dan `pmr`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Dalam pola transaksi database ACID, apa tujuan pemanggilan `$pdo->rollBack()`?",
      "options": [
        "Membatalkan seluruh perubahan data yang dibuat sejak `beginTransaction()` jika terjadi error di tengah proses.",
        "Menghapus database dan membuatnya kembali dari awal.",
        "Menyimpan data secara permanen ke hard disk storage.",
        "Mengunci tabel agar tidak bisa dibaca oleh koneksi lain."
      ],
      "answer": 0,
      "explanation": "Rollback mengembalikan kondisi data ke titik sebelum transaksi dimulai, menjamin prinsip *Atomicity* (semua berhasil atau tidak ada sama sekali)."
    }
  },
  {
    "id": 29,
    "slug": "php-lesson-29",
    "title": "29. RAII Wrapper dan Safe Resource Patterns",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII Wrapper dan Safe Resource Patterns\n\n### Materi Inti:\n- Wrapper untuk file, socket, mutex, dan heap resource.\n- `lock_guard` versus `unique_lock`.\n- Scope guard untuk cleanup lintas jalur exception.",
    "code": "<?php\n// PHP 8.3 Modern: RAII Wrapper dan Safe Resource Patterns\ndeclare(strict_types=1);\n\n$topik = 'RAII Wrapper dan Safe Resource Patterns';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa peran arsitektur *Repository Pattern* dalam pengelolaan data di PHP?",
      "options": [
        "Memisahkan logika bisnis (domain) dari mekanisme akses data spesifik (ORM/SQL query), membuat kode mudah diuji dengan mock repository.",
        "Menggantikan fungsi database MySQL dengan file JSON lokal.",
        "Mengkompilasi query SQL menjadi file biner C++.",
        "Memastikan tabel selalu memiliki foreign key otomatis."
      ],
      "answer": 0,
      "explanation": "Repository bertindak seperti koleksi objek di memori, mengisolasi query database dari business logic sehingga aplikasi fleksibel terhadap perubahan storage."
    }
  },
  {
    "id": 30,
    "slug": "php-lesson-30",
    "title": "30. Mendeteksi Memory Bug dengan Sanitizer",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mendeteksi Memory Bug dengan Sanitizer\n\n### Materi Inti:\n- AddressSanitizer, UndefinedBehaviorSanitizer, dan Valgrind.\n- Dangling reference, use-after-free, overflow, dan out-of-bounds.\n- Menjalankan sanitizer di native dan WebAssembly.",
    "code": "<?php\n// PHP 8.3 Modern: Mendeteksi Memory Bug dengan Sanitizer\ndeclare(strict_types=1);\n\n$topik = 'Mendeteksi Memory Bug dengan Sanitizer';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara mencegah race condition saat mengupdate saldo user di database relational?",
      "options": [
        "Menggunakan transaksi database dipadukan dengan klausa `SELECT ... FOR UPDATE` (pessimistic locking) atau atomic update query.",
        "Menggunakan perulangan `while(true)` di level PHP sampai berhasil.",
        "Menyimpan saldo di session cookie browser klien.",
        "Menggunakan tipe data VARCHAR untuk menyimpan angka saldo."
      ],
      "answer": 0,
      "explanation": "`SELECT ... FOR UPDATE` mengunci baris terkait hingga transaksi selesai, mencegah transaksi lain membaca atau mengubah saldo secara bersamaan."
    }
  },
  {
    "id": 31,
    "slug": "php-lesson-31",
    "title": "31. Value Category: Lvalue, Xvalue, dan Prvalue",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Value Category: Lvalue, Xvalue, dan Prvalue\n\n### Materi Inti:\n- Lvalue, xvalue, prvalue, dan named rvalue reference.\n- `std::move` sebagai cast eksplisit.\n- Decay type dan array-to-pointer decay.",
    "code": "<?php\n// PHP 8.3 Modern: Value Category: Lvalue, Xvalue, dan Prvalue\ndeclare(strict_types=1);\n\n$topik = 'Value Category: Lvalue, Xvalue, dan Prvalue';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Algoritma hashing password apa yang menjadi standar rekomendasi tertinggi di PHP saat ini?",
      "options": [
        "`PASSWORD_ARGON2ID` atau `PASSWORD_BCRYPT` via fungsi `password_hash()`.",
        "`md5()` dengan salt statis.",
        "`sha1(sha1($password))` berganda.",
        "AES-256-CBC dua arah."
      ],
      "answer": 0,
      "explanation": "Argon2id (pemenang Password Hashing Competition) dan bcrypt tahan terhadap serangan GPU cracking berkat konfigurasi memory cost dan time cost yang fleksibel."
    }
  },
  {
    "id": 32,
    "slug": "php-lesson-32",
    "title": "32. Move Constructor dan Move Assignment",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Move Constructor dan Move Assignment\n\n### Materi Inti:\n- Move operation untuk mengambil resource.\n- Source harus berada dalam valid tetapi unspecified state.\n- Move constructor idealnya `noexcept` agar container dapat memindahkan.",
    "code": "<?php\n// PHP 8.3 Modern: Move Constructor dan Move Assignment\ndeclare(strict_types=1);\n\n$topik = 'Move Constructor dan Move Assignment';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara kerja serangan *Cross-Site Request Forgery (CSRF)* dan bagaimana pencegahannya di PHP?",
      "options": [
        "Memanipulasi browser korban yang sudah login untuk mengirim request berbahaya; dicegah dengan validasi CSRF token acak per sesi/request.",
        "Menyuntikkan script JavaScript ke form komentar; dicegah dengan `addslashes()`.",
        "Menebak password akun admin dengan brute-force; dicegah dengan captcha.",
        "Mencuri file database via FTP; dicegah dengan mengganti port."
      ],
      "answer": 0,
      "explanation": "CSRF menunggangi autentikasi cookie korban. Mitigasi utamanya adalah menyertakan token kriptografis acak yang unik per sesi pada setiap request state-changing (POST/PUT/DELETE)."
    }
  },
  {
    "id": 33,
    "slug": "php-lesson-33",
    "title": "33. Perfect Forwarding",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perfect Forwarding\n\n### Materi Inti:\n- Forwarding reference dan `auto&&`.\n- `std::forward<T>` untuk mempertahankan value category.\n- Argument unwrapping dengan `std::unwrap_reference`.",
    "code": "<?php\n// PHP 8.3 Modern: Perfect Forwarding\ndeclare(strict_types=1);\n\n$topik = 'Perfect Forwarding';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa fungsi atribut cookie `HttpOnly` dan `SameSite=Lax/Strict` pada session PHP?",
      "options": [
        "`HttpOnly` mencegah script JavaScript mengakses cookie (mitigasi XSS session theft), sedangkan `SameSite` membatasi pengiriman cookie pada cross-site request (mitigasi CSRF).",
        "Mempercepat waktu transfer cookie melalui protokol HTTP/3.",
        "Mengenkripsi isi cookie dengan algoritma RSA publik-privat.",
        "Membuat cookie hanya berlaku jika pengguna menggunakan browser Google Chrome."
      ],
      "answer": 0,
      "explanation": "`HttpOnly` memblokir pencurian `PHPSESSID` melalui `document.cookie` saat terjadi celah XSS, sementara `SameSite` melindungi dari pengiriman cookie otomatis di cross-origin context."
    }
  },
  {
    "id": 34,
    "slug": "php-lesson-34",
    "title": "34. Copy Elision, NRVO, dan Guaranteed Move",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Elision, NRVO, dan Guaranteed Move\n\n### Materi Inti:\n- Copy elision dan Named Return Value Optimization.\n- Prvalue construction langsung ke result object.\n- `std::move` yang tidak perlu dapat menghambat copy elision.",
    "code": "<?php\n// PHP 8.3 Modern: Copy Elision, NRVO, dan Guaranteed Move\ndeclare(strict_types=1);\n\n$topik = 'Copy Elision, NRVO, dan Guaranteed Move';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Fungsi sanitasi output apa yang tepat digunakan untuk mencegah celah *Cross-Site Scripting (XSS)* saat mencetak string ke template HTML?",
      "options": [
        "`htmlspecialchars($str, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')`",
        "`strip_tags()` tanpa parameter tambahan.",
        "`urlencode()`",
        "`addslashes()`"
      ],
      "answer": 0,
      "explanation": "`htmlspecialchars` mengonversi karakter berbahaya seperti `<`, `>`, `&`, `\"`, dan `'` menjadi entitas HTML aman, mencegah browser mengeksekusi tag `<script>`."
    }
  },
  {
    "id": 35,
    "slug": "php-lesson-35",
    "title": "35. STL Container dan Allocation Strategy",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# STL Container dan Allocation Strategy\n\n### Materi Inti:\n- Tradeoff vector, deque, list, map, set, dan unordered_map.\n- Iterator invalidation, reserve, resize, dan shrink-to-fit.\n- Copy versus move behavior pada container.",
    "code": "<?php\n// PHP 8.3 Modern: STL Container dan Allocation Strategy\ndeclare(strict_types=1);\n\n$topik = 'STL Container dan Allocation Strategy';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa hanya memeriksa ekstensi nama file (misal `.jpg`) tidak cukup untuk keamanan file upload di PHP?",
      "options": [
        "Penyerang dapat mengunggah file executable (seperti `shell.php.jpg`) dengan MIME-type palsu; sistem wajib memvalidasi MIME type isi file (magic bytes via finfo) dan me-rename file.",
        "Karena ekstensi file otomatis dihapus oleh web server.",
        "Karena PHP tidak bisa membaca file berukuran lebih dari 1MB.",
        "Ekstensi file hanya berlaku di sistem operasi Windows."
      ],
      "answer": 0,
      "explanation": "Validasi upload yang aman wajib memeriksa byte signature asli via `finfo_file()`, membuat nama acak baru, menyimpan di luar public web root, dan menonaktifkan eksekusi skrip di folder upload."
    }
  },
  {
    "id": 36,
    "slug": "php-lesson-36",
    "title": "36. In-Place Construction dengan `emplace`, `optional`, dan `variant`",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\n### Materi Inti:\n- `emplace_back` dan konstruksi langsung di dalam container.\n- `std::optional<T>::emplace` untuk optional move-only value.\n- `std::variant` dan pemilihan alternative secara eksplisit.",
    "code": "<?php\n// PHP 8.3 Modern: In-Place Construction dengan `emplace`, `optional`, dan `variant`\ndeclare(strict_types=1);\n\n$topik = 'In-Place Construction dengan `emplace`, `optional`, dan `variant`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa fungsi header keamanan HTTP `Content-Security-Policy (CSP)`?",
      "options": [
        "Mendefinisikan sumber daya (script, style, gambar) yang sah dan boleh dimuat atau dieksekusi oleh browser web klien.",
        "Menolak koneksi internet dari negara tertentu.",
        "Mengompresi response halaman HTML dengan Brotli.",
        "Mengalihkan request HTTP ke HTTPS secara paksa."
      ],
      "answer": 0,
      "explanation": "CSP bertindak sebagai layer pertahanan kedua terhadap XSS dengan membatasi eksekusi inline script dan hanya mengizinkan resource dari domain yang telah disetujui (whitelist/nonce)."
    }
  },
  {
    "id": 37,
    "slug": "php-lesson-37",
    "title": "37. Iterator dan Standard Algorithms",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterator dan Standard Algorithms\n\n### Materi Inti:\n- Iterator categories dan range begin/end.\n- `find`, `sort`, `count`, `transform`, dan algorithm contracts.\n- Lambda expression untuk operasi lokal.",
    "code": "<?php\n// PHP 8.3 Modern: Iterator dan Standard Algorithms\ndeclare(strict_types=1);\n\n$topik = 'Iterator dan Standard Algorithms';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa perbedaan mendasar antara file `composer.json` dan `composer.lock`?",
      "options": [
        "`composer.json` mendefinisikan aturan dependensi dan constraint versi, sedangkan `composer.lock` mengunci versi pasti setiap package yang terpasang.",
        "`composer.lock` hanya digunakan di Windows, sedangkan `composer.json` di Linux.",
        "`composer.json` otomatis terhapus saat perintah `composer install` selesai.",
        "Keduanya memiliki fungsi identik dan salah satunya dapat dihapus tanpa dampak."
      ],
      "answer": 0,
      "explanation": "`composer.lock` menjamin seluruh anggota tim dan server produksi menginstal versi package yang 100% identik (deterministic build)."
    }
  },
  {
    "id": 38,
    "slug": "php-lesson-38",
    "title": "38. Ranges Views: Lazy dan Non-Owning",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ranges Views: Lazy dan Non-Owning\n\n### Materi Inti:\n- `views::filter`, `transform`, `take`, dan `drop`.\n- View versus owning range.\n- Lazy evaluation dan lifetime adaptor.",
    "code": "<?php\n// PHP 8.3 Modern: Ranges Views: Lazy dan Non-Owning\ndeclare(strict_types=1);\n\n$topik = 'Ranges Views: Lazy dan Non-Owning';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Kapan sebaiknya perintah `composer update` dijalankan dibandingkan `composer install`?",
      "options": [
        "`composer update` dijalankan di development saat sengaja ingin memperbarui versi package sesuai aturan constraint, sedangkan `composer install` membaca lockfile di production.",
        "`composer update` harus selalu dijalankan di server production setiap kali deploy.",
        "`composer install` menghapus folder `vendor` lalu mengunduh ulang tanpa aturan versi.",
        "Tidak ada perbedaan, keduanya menghasilkan hash lockfile yang sama."
      ],
      "answer": 0,
      "explanation": "Di server produksi atau CI/CD, selalu jalankan `composer install` agar tidak terjadi pergeseran versi tak terduga yang dapat merusak aplikasi."
    }
  },
  {
    "id": 39,
    "slug": "php-lesson-39",
    "title": "39. Range Algorithms dan Range Concepts",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Range Algorithms dan Range Concepts\n\n### Materi Inti:\n- `std::ranges::sort`, `find`, dan `for_each`.\n- Input, output, forward, sortable, dan mutable range requirements.\n- Mengurangi manual iterator arithmetic.",
    "code": "<?php\n// PHP 8.3 Modern: Range Algorithms dan Range Concepts\ndeclare(strict_types=1);\n\n$topik = 'Range Algorithms dan Range Concepts';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana standar autoloading PSR-4 memetakan namespace ke struktur direktori?",
      "options": [
        "Prefix namespace dipetakan ke root direktori tertentu, dan sub-namespace berikutnya mewakili subfolder yang persis sama dengan nama file class.",
        "Semua file class harus diletakkan dalam satu folder tunggal tanpa subfolder.",
        "Nama class harus ditulis dengan huruf kapital semua agar terbaca oleh autoloader.",
        "Autoloading memerlukan file XML terpisah untuk setiap class baru."
      ],
      "answer": 0,
      "explanation": "Di PSR-4, misalnya `\"App\\\\\": \"src/\"`, maka class `App\\Services\\PaymentService` akan otomatis dicari di file `src/Services/PaymentService.php`."
    }
  },
  {
    "id": 40,
    "slug": "php-lesson-40",
    "title": "40. Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\n### Materi Inti:\n- `views::zip` untuk beberapa range paralel.\n- `views::chunk`, `slide`, dan `enumerate`.\n- Tuple-like elements, overflow behavior, dan lifetime.",
    "code": "<?php\n// PHP 8.3 Modern: Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\ndeclare(strict_types=1);\n\n$topik = 'Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa tujuan menjalankan perintah `composer dump-autoload -o` (optimize autoloader)?",
      "options": [
        "Mengubah aturan pemetaan direktori PSR-4/0 menjadi classmap array flat satu per satu, mempercepat resolusi class secara drastis di production.",
        "Menghapus dependensi development (`require-dev`) dari disk.",
        "Membersihkan cache sistem operasi dan me-reboot web server.",
        "Mengkompilasi file PHP menjadi bytecode C++."
      ],
      "answer": 0,
      "explanation": "Option `-o` atau `--optimize` menghasilkan classmap lengkap di memori, menghilangkan kebutuhan pengecekan filesystem (`file_exists`) berulang kali saat me-load class."
    }
  },
  {
    "id": 41,
    "slug": "php-lesson-41",
    "title": "41. Error Value dengan `std::expected` dan `std::optional`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Error Value dengan `std::expected` dan `std::optional`\n\n### Materi Inti:\n- `optional<T>` untuk absence tanpa error detail.\n- `expected<T,E>` untuk success atau error terstruktur.\n- Composing operations dengan `and_then`, `transform`, dan `or_else`.",
    "code": "<?php\n// PHP 8.3 Modern: Error Value dengan `std::expected` dan `std::optional`\ndeclare(strict_types=1);\n\n$topik = 'Error Value dengan `std::expected` dan `std::optional`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa kegunaan alat static analysis seperti *PHPStan* atau *Psalm* dalam siklus pengembangan modern?",
      "options": [
        "Mendeteksi bug logika, kesalahan type hint, dead code, dan potensi null pointer sebelum kode dieksekusi tanpa perlu menjalankan aplikasi.",
        "Memformat spasi dan indentasi kode secara otomatis.",
        "Menghitung biaya hosting server bulanan.",
        "Menjalankan penetration test terhadap server API."
      ],
      "answer": 0,
      "explanation": "Static analysis membaca AST kode sumber dan menganalisis aliran tipe data secara matematis, menangkap bug kritis pada compile/CI time."
    }
  },
  {
    "id": 42,
    "slug": "php-lesson-42",
    "title": "42. API Modern PHP20/23: Format, Print, Numbers, dan `mdspan`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# API Modern PHP20/23: Format, Print, Numbers, dan `mdspan`\n\n### Materi Inti:\n- `std::format`, `std::print`, dan feature-test macros.\n- `std::numbers` untuk konstanta numerik standar.\n- `std::mdspan` untuk multidimensional view tanpa ownership.",
    "code": "<?php\n// PHP 8.3 Modern: API Modern PHP20/23: Format, Print, Numbers, dan `mdspan`\ndeclare(strict_types=1);\n\n$topik = 'API Modern PHP20/23: Format, Print, Numbers, dan `mdspan`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Arti dari constraint versi `^8.3.0` pada composer.json adalah?",
      "options": [
        "Mengizinkan pembaruan versi minor dan patch (>=8.3.0 dan <9.0.0), tetapi melarang pembaruan major yang berpotensi breaking change.",
        "Hanya mengizinkan versi patch (>=8.3.0 dan <8.4.0).",
        "Harus persis versi 8.3.0 tanpa perubahan sama sekali.",
        "Boleh menginstal versi 9.0 atau 10.0 jika sudah tersedia."
      ],
      "answer": 0,
      "explanation": "Caret operator (`^`) mengikuti konvensi Semantic Versioning, mengizinkan update non-breaking hingga versi di bawah angka major berikutnya."
    }
  },
  {
    "id": 43,
    "slug": "php-lesson-43",
    "title": "43. Thread Dasar, Join, dan Detach",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Dasar, Join, dan Detach\n\n### Materi Inti:\n- Membuat, menjalankan, `join`, dan `detach` thread.\n- Lifetime thread dan bahaya detach tanpa koordinasi.\n- Data race versus race condition.",
    "code": "<?php\n// PHP 8.3 Modern: Thread Dasar, Join, dan Detach\ndeclare(strict_types=1);\n\n$topik = 'Thread Dasar, Join, dan Detach';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa perbedaan mendasar antara *Unit Testing* dan *Integration Testing*?",
      "options": [
        "Unit test menguji fungsi/class secara terisolasi dengan mengabaikan dependensi luar (via mock), sedangkan integration test menguji kerja sama beberapa modul dengan database/service nyata.",
        "Unit test dijalankan manual oleh user, integration test dijalankan otomatis oleh robot.",
        "Unit test hanya untuk kode frontend JavaScript, integration test untuk backend PHP.",
        "Unit test tidak memerlukan assertion atau kriteria kelulusan."
      ],
      "answer": 0,
      "explanation": "Unit test fokus pada satu unit logika murni dengan isolasi ketat (cepat dan ringan), sedangkan integration test memvalidasi interaksi antar-komponen nyata seperti query database dan panggilan API."
    }
  },
  {
    "id": 44,
    "slug": "php-lesson-44",
    "title": "44. Mutex, `lock_guard`, dan Condition Variable",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mutex, `lock_guard`, dan Condition Variable\n\n### Materi Inti:\n- Critical section dan mutual exclusion.\n- RAII locking dengan `lock_guard` dan `unique_lock`.\n- Condition variable, predicate loop, notify-one/all.",
    "code": "<?php\n// PHP 8.3 Modern: Mutex, `lock_guard`, dan Condition Variable\ndeclare(strict_types=1);\n\n$topik = 'Mutex, `lock_guard`, dan Condition Variable';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa peran *Mock Object* dalam pengujian kode yang memanggil external payment gateway API?",
      "options": [
        "Menyimulasikan perilaku dan response gateway pembayaran tanpa melakukan panggilan jaringan HTTP sungguhan dan tanpa biaya transaksi.",
        "Menguji kecepatan transfer kabel internet server.",
        "Mencuri token rahasia dari akun merchant payment gateway.",
        "Membuat database tiruan di memori kartu grafis."
      ],
      "answer": 0,
      "explanation": "Mocking menggantikan komponen eksternal yang tidak deterministik atau lambat, memungkinkan test berjalan cepat, andal, dan dapat menguji skenario error yang sulit direproduksi di API nyata."
    }
  },
  {
    "id": 45,
    "slug": "php-lesson-45",
    "title": "45. Atomic dan Memory Ordering",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Atomic dan Memory Ordering\n\n### Materi Inti:\n- Atomic load/store, fetch-add, compare-exchange.\n- Relaxed, acquire, release, dan sequential consistency.\n- Lock-free atomic dan tradeoff performance.",
    "code": "<?php\n// PHP 8.3 Modern: Atomic dan Memory Ordering\ndeclare(strict_types=1);\n\n$topik = 'Atomic dan Memory Ordering';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keunggulan framework testing *Pest PHP* dibanding PHPUnit standar?",
      "options": [
        "Sintaks yang elegan, ekspresif, dan minimalis berbasis closure (`it('can calculate total', function() { ... })`) yang tetap kompatibel penuh di atas engine PHPUnit.",
        "Pest tidak membutuhkan interpreter PHP untuk menjalankan test.",
        "Pest secara otomatis menulis test case sendiri menggunakan kecerdasan buatan.",
        "Pest hanya bisa digunakan untuk aplikasi mobile Laravel."
      ],
      "answer": 0,
      "explanation": "Pest menghadirkan Developer Experience (DX) modern dengan syntax declarative/BDD yang bersih tanpa boilerplate class panjang, sambil mempertahankan ekosistem PHPUnit."
    }
  },
  {
    "id": 46,
    "slug": "php-lesson-46",
    "title": "46. `std::async`, Future, dan Task",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::async`, Future, dan Task\n\n### Materi Inti:\n- Launch policy dan asynchronous execution.\n- Future/get, exception propagation, dan timeout.\n- Lifetime task dan bahaya menunggu terlalu lama.",
    "code": "<?php\n// PHP 8.3 Modern: `std::async`, Future, dan Task\ndeclare(strict_types=1);\n\n$topik = '`std::async`, Future, dan Task';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa konsep dasar siklus *Test-Driven Development (TDD)*?",
      "options": [
        "Red (tulis test yang gagal) -> Green (tulis kode minimal agar test lulus) -> Refactor (rapikan kode tanpa merusak test).",
        "Tulis semua kode aplikasi -> Deploy ke server -> Tulis test jika ada keluhan pengguna.",
        "Deploy -> Monitor log -> Buat unit test untuk bug yang muncul di production.",
        "Tulis dokumentasi -> Uji manual via browser -> Tulis unit test."
      ],
      "answer": 0,
      "explanation": "Siklus Red-Green-Refactor memaksa arsitektur kode menjadi modular, testable, dan memastikan setiap baris kode yang ditulis memiliki spesifikasi pengujian yang jelas."
    }
  },
  {
    "id": 47,
    "slug": "php-lesson-47",
    "title": "47. Thread Pool, Deadlock, dan Concurrency Pitfalls",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pool, Deadlock, dan Concurrency Pitfalls\n\n### Materi Inti:\n- Work queue, worker lifetime, dan task scheduling.\n- Deadlock, starvation, ABA, false sharing, dan lock ordering.\n- Desain bounded concurrency dan backpressure.",
    "code": "<?php\n// PHP 8.3 Modern: Thread Pool, Deadlock, dan Concurrency Pitfalls\ndeclare(strict_types=1);\n\n$topik = 'Thread Pool, Deadlock, dan Concurrency Pitfalls';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa yang diukur oleh metrik *Code Coverage* dalam testing suite?",
      "options": [
        "Persentase baris kode atau branch yang berhasil dieksekusi selama proses automated test dijalankan.",
        "Kecepatan kompilasi kode saat diunggah ke GitHub.",
        "Jumlah komentar dokumentasi yang ada di dalam repository.",
        "Jumlah baris kode yang ditulis oleh AI."
      ],
      "answer": 0,
      "explanation": "Code coverage memberikan visibilitas terhadap bagian kode mana yang belum tersentuh oleh unit test, meskipun 100% coverage tidak selalu menjamin ketiadaan bug logika."
    }
  },
  {
    "id": 48,
    "slug": "php-lesson-48",
    "title": "48. Pengantar Coroutine: Suspension dan Resumption",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengantar Coroutine: Suspension dan Resumption\n\n### Materi Inti:\n- Coroutine frame, promise object, dan awaiter.\n- `co_await`, `co_yield`, dan `co_return`.\n- Perbedaan blocking thread dengan cooperative suspension.",
    "code": "<?php\n// PHP 8.3 Modern: Pengantar Coroutine: Suspension dan Resumption\ndeclare(strict_types=1);\n\n$topik = 'Pengantar Coroutine: Suspension dan Resumption';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa tujuan dari *Mutation Testing* (misalnya menggunakan tool Infection PHP)?",
      "options": [
        "Menguji kualitas test itu sendiri dengan menyuntikkan perubahan kecil (mutasi) pada kode sumber dan memastikan test suite mendeteksi kegagalan tersebut.",
        "Mengubah kode PHP menjadi bahasa pemrograman lain secara otomatis.",
        "Menghapus database testing setelah pengujian selesai.",
        "Menjalankan load test dengan ribuan virtual user."
      ],
      "answer": 0,
      "explanation": "Mutation testing memastikan test suite benar-benar menguji logika (memiliki assertion yang bermakna), bukan sekadar mengeksekusi baris kode demi angka coverage semu."
    }
  },
  {
    "id": 49,
    "slug": "php-lesson-49",
    "title": "49. Membangun Coroutine dari Komponen Dasar",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Membangun Coroutine dari Komponen Dasar\n\n### Materi Inti:\n- Promise methods: `return_value`, `yield_value`, `initial_suspend`, dan `final_suspend`.\n- Coroutine return object dan exception propagation.\n- Mengapa coroutine bukan thread.",
    "code": "<?php\n// PHP 8.3 Modern: Membangun Coroutine dari Komponen Dasar\ndeclare(strict_types=1);\n\n$topik = 'Membangun Coroutine dari Komponen Dasar';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa standar PSR-7 memodelkan HTTP Request dan Response sebagai objek yang *Immutable*?",
      "options": [
        "Mencegah perubahan state secara tidak sengaja oleh middleware lain dalam pipeline pemrosesan HTTP.",
        "Agar response dapat disimpan di memori RAM tanpa batas waktu.",
        "Karena standar web browser melarang modifikasi header HTTP.",
        "Untuk menghemat penggunaan string di dalam kernel PHP."
      ],
      "answer": 0,
      "explanation": "Objek PSR-7 yang immutable (`withHeader()`, `withStatus()`) mengembalikan clone instance baru, menjaga integritas pesan HTTP saat melewati rantai middleware yang panjang."
    }
  },
  {
    "id": 50,
    "slug": "php-lesson-50",
    "title": "50. Async/Await dengan Executor dan Cancellation",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Async/Await dengan Executor dan Cancellation\n\n### Materi Inti:\n- Custom awaiter dan executor policy.\n- Exception propagation, timeout, dan cancellation token.\n- Composing async operations tanpa nested blocking.",
    "code": "<?php\n// PHP 8.3 Modern: Async/Await dengan Executor dan Cancellation\ndeclare(strict_types=1);\n\n$topik = 'Async/Await dengan Executor dan Cancellation';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana alur kerja *Pipeline Middleware* berbasis standar PSR-15?",
      "options": [
        "Setiap middleware menerima `$request` dan `$handler`, dapat memodifikasi request, meneruskan ke handler berikutnya, atau langsung mengembalikan response (short-circuit).",
        "Middleware dieksekusi secara acak tanpa urutan tertentu.",
        "Middleware hanya dieksekusi ketika request menghasilkan HTTP status 500.",
        "Middleware bertugas mengubah kode PHP menjadi format JSON murni."
      ],
      "answer": 0,
      "explanation": "PSR-15 mendefinisikan kontrak middleware standar industri (`process(ServerRequestInterface $request, RequestHandlerInterface $handler)`), mempermudah integrasi lintas framework."
    }
  },
  {
    "id": 51,
    "slug": "php-lesson-51",
    "title": "51. Generator dengan `std::generator` PHP23",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generator dengan `std::generator` PHP23\n\n### Materi Inti:\n- `co_yield` sebagai lazy producer.\n- Backpressure, range protocol, dan lifetime iterator.\n- Menggabungkan generator dengan ranges.",
    "code": "<?php\n// PHP 8.3 Modern: Generator dengan `std::generator` PHP23\ndeclare(strict_types=1);\n\n$topik = 'Generator dengan `std::generator` PHP23';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keuntungan menggunakan *JSON Web Token (JWT)* untuk autentikasi stateless API?",
      "options": [
        "Server tidak perlu menyimpan sesi login di database/cache memori; verifikasi user dilakukan dengan memvalidasi tanda tangan kriptografis pada token.",
        "JWT otomatis memperbarui token kadaluarsa tanpa campur tangan klien.",
        "JWT mengenkripsi seluruh isi database server secara publik.",
        "Token JWT tidak memiliki batas ukuran dan bisa menyimpan file gambar."
      ],
      "answer": 0,
      "explanation": "JWT memuat klaim data pengguna dan tanda tangan digital, memungkinkan server memvalidasi identitas secara mandiri (stateless) yang ideal untuk arsitektur microservices dan horizontal scaling."
    }
  },
  {
    "id": 52,
    "slug": "php-lesson-52",
    "title": "52. Concepts dan Constrained Overload",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Concepts dan Constrained Overload\n\n### Materi Inti:\n- `requires` expression dan named concept.\n- Constraint satisfaction dan overload resolution.\n- Mengganti SFINAE noise dengan diagnostic yang jelas.",
    "code": "<?php\n// PHP 8.3 Modern: Concepts dan Constrained Overload\ndeclare(strict_types=1);\n\n$topik = 'Concepts dan Constrained Overload';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa status code HTTP yang paling tepat dikembalikan saat klien berhasil membuat data resource baru di server REST API?",
      "options": [
        "`201 Created` disertai header `Location` atau payload data yang baru dibuat.",
        "`200 OK` tanpa payload.",
        "`204 No Content`",
        "`301 Moved Permanently`"
      ],
      "answer": 0,
      "explanation": "Status `201 Created` adalah standar semantik HTTP untuk mengindikasikan bahwa request berhasil dan menghasilkan satu atau lebih resource baru di server."
    }
  },
  {
    "id": 53,
    "slug": "php-lesson-53",
    "title": "53. Custom Range, `view`, dan `borrowed_range`",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Range, `view`, dan `borrowed_range`\n\n### Materi Inti:\n- Range requirements dan `range_reference_t`.\n- View, borrowed range, dan adaptor customization.\n- `views::as_const`, `cache_latest`, `chunk`, `slide`, dan `enumerate`.",
    "code": "<?php\n// PHP 8.3 Modern: Custom Range, `view`, dan `borrowed_range`\ndeclare(strict_types=1);\n\n$topik = 'Custom Range, `view`, dan `borrowed_range`';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana cara mengimplementasikan *Rate Limiting* berbasis algoritma Token Bucket menggunakan Redis di PHP?",
      "options": [
        "Menyimpan jumlah hit dan timestamp per user/IP di Redis key dengan operasi atomic (INCR & EXPIRE) untuk menolak request berlebih dengan status 429 Too Many Requests.",
        "Membuat user menunggu 10 detik di setiap query database.",
        "Memblokir alamat IP user secara permanen dari server firewall.",
        "Menghapus akun pengguna yang mengirim request lebih dari 5 kali."
      ],
      "answer": 0,
      "explanation": "Rate limiter melindungi API dari abuse dan serangan DDoS dengan membatasi jumlah request dalam jendela waktu tertentu dan mengembalikan header status `429 Too Many Requests`."
    }
  },
  {
    "id": 54,
    "slug": "php-lesson-54",
    "title": "54. Modern Generic Design: Templates + Concepts + Ranges",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modern Generic Design: Templates + Concepts + Ranges\n\n### Materi Inti:\n- Menggabungkan constrained template, range algorithms, dan move-only values.\n- API generik dengan error type dan no unnecessary copy.\n- Menulis benchmark serta test matrix untuk beberapa tipe.",
    "code": "<?php\n// PHP 8.3 Modern: Modern Generic Design: Templates + Concepts + Ranges\ndeclare(strict_types=1);\n\n$topik = 'Modern Generic Design: Templates + Concepts + Ranges';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa perbedaan mendasar antara representasi API *RESTful* dan *GraphQL*?",
      "options": [
        "REST menggunakan endpoint spesifik dengan struktur response tetap per URL, sedangkan GraphQL menggunakan satu endpoint di mana klien menentukan field data persis yang dibutuhkan.",
        "GraphQL hanya dapat digunakan pada database MongoDB.",
        "REST API tidak mendukung metode POST dan DELETE.",
        "GraphQL mengharuskan server menggunakan bahasa pemrograman Python."
      ],
      "answer": 0,
      "explanation": "GraphQL mengatasi masalah *over-fetching* dan *under-fetching* pada REST tradisional dengan memberikan kendali query schema kepada aplikasi klien."
    }
  },
  {
    "id": 55,
    "slug": "php-lesson-55",
    "title": "55. Migrasi ke PHP23 Library",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Migrasi ke PHP23 Library\n\n### Materi Inti:\n- `std::expected`, `std::print`, `std::source_location`, dan string `contains`.\n- `std::ranges::to`, `std::mdspan`, dan `std::generator`.\n- Feature-test macros dan strategi fallback compiler.",
    "code": "<?php\n// PHP 8.3 Modern: Migrasi ke PHP23 Library\ndeclare(strict_types=1);\n\n$topik = 'Migrasi ke PHP23 Library';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa peran prinsip *Dependency Inversion* dalam arsitektur Clean Architecture / Hexagonal Architecture?",
      "options": [
        "Modul tingkat tinggi (business logic/domain) tidak boleh bergantung pada modul tingkat rendah (database, framework); keduanya harus bergantung pada abstraksi (interface).",
        "Membalik urutan penulisan kode dari bawah ke atas.",
        "Menolak penggunaan class dan hanya menggunakan fungsi prosedural murni.",
        "Mengharuskan semua database diakses secara langsung tanpa ORM."
      ],
      "answer": 0,
      "explanation": "Prinsip ini menjaga core business logic tetap murni, independen dari framework, dan mudah diganti driver databasenya tanpa merusak aturan bisnis utama."
    }
  },
  {
    "id": 56,
    "slug": "php-lesson-56",
    "title": "56. Performance, Profiling, dan Optimization yang Terukur",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Performance, Profiling, dan Optimization yang Terukur\n\n### Materi Inti:\n- Big-O, cache locality, branch prediction, dan allocation cost.\n- Move semantics, emplace, reserve, dan avoiding unnecessary copy.\n- Benchmark, profiler, dan reproducibility.",
    "code": "<?php\n// PHP 8.3 Modern: Performance, Profiling, dan Optimization yang Terukur\ndeclare(strict_types=1);\n\n$topik = 'Performance, Profiling, dan Optimization yang Terukur';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Mengapa server runtime seperti *FrankenPHP* atau *RoadRunner* jauh lebih cepat dibandingkan arsitektur tradisional PHP-FPM?",
      "options": [
        "Menggunakan model *Worker Mode* yang menyimpan aplikasi tetap hidup di memori RAM setelah bootstrap pertama, menghilangkan overhead inisialisasi framework per request.",
        "Menonaktifkan sistem keamanan PHP untuk mempercepat respon.",
        "Mengubah kode PHP menjadi assembly biner x86_64 sebelum dijalankan.",
        "Menolak semua request yang tidak menggunakan caching browser."
      ],
      "answer": 0,
      "explanation": "Dalam worker mode, framework (seperti Laravel atau Symfony) hanya di-boot satu kali saat server start; setiap request HTTP yang masuk langsung dieksekusi tanpa proses load file dan autoloader berulang."
    }
  },
  {
    "id": 57,
    "slug": "php-lesson-57",
    "title": "57. Reliabilitas, Security, dan Test Matrix",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Reliabilitas, Security, dan Test Matrix\n\n### Materi Inti:\n- Sanitizer, invariant test, property test, dan fuzzing ringan.\n- Input validation, ownership contract, dan secure defaults.\n- Testing pada edge case, malformed input, dan concurrent path.",
    "code": "<?php\n// PHP 8.3 Modern: Reliabilitas, Security, dan Test Matrix\ndeclare(strict_types=1);\n\n$topik = 'Reliabilitas, Security, dan Test Matrix';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa fungsi dari ekstensi *OPcache* dan bagaimana JIT (Just-In-Time) compiler meningkatkan performa di PHP 8?",
      "options": [
        "OPcache menyimpan precompiled bytecode di shared memory, sedangkan JIT mengompilasi bagian bytecode yang sering dieksekusi menjadi instruksi mesin asli (machine code).",
        "OPcache menghapus database sementara saat RAM penuh.",
        "JIT bertugas menerjemahkan syntax PHP menjadi syntax JavaScript di browser.",
        "Keduanya hanya berfungsi jika PHP dijalankan di sistem operasi Windows Server."
      ],
      "answer": 0,
      "explanation": "OPcache menghilangkan tahap parsing dan compiling script ke bytecode, sementara JIT membawa optimasi lebih lanjut untuk beban komputasi CPU-intensive dengan mengeksekusi instruksi mesin langsung."
    }
  },
  {
    "id": 58,
    "slug": "php-lesson-58",
    "title": "58. Arsitektur, PHP20 Modules, Build, dan CI",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Arsitektur, PHP20 Modules, Build, dan CI\n\n### Materi Inti:\n- Layering, interface boundary, dependency inversion, dan module boundary.\n- CMake/compiler flags, WebAssembly build, dan browser execution.\n- CI untuk build, test, sanitizer, dan format/lint.",
    "code": "<?php\n// PHP 8.3 Modern: Arsitektur, PHP20 Modules, Build, dan CI\ndeclare(strict_types=1);\n\n$topik = 'Arsitektur, PHP20 Modules, Build, dan CI';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Dalam arsitektur microservices berbasis pesan (Message Queue), apa tujuan memisahkan task berat (seperti kirim email atau render video) ke background worker?",
      "options": [
        "Membuat response HTTP API tetap cepat (sub-100ms) bagi pengguna dengan mendelegasikan pemrosesan berat ke antrean asynchronous (RabbitMQ / Redis).",
        "Menghemat kuota internet server production.",
        "Menghindari penggunaan database relasional di server.",
        "Mencegah hacker mengetahui alamat IP asli pengirim email."
      ],
      "answer": 0,
      "explanation": "Asynchronous processing mencegah timeout pada request HTTP klien dan mendistribusikan beban kerja secara merata di antara worker pool yang dapat di-scale secara horizontal."
    }
  },
  {
    "id": 59,
    "slug": "php-lesson-59",
    "title": "59. Capstone Design: Modern Data Pipeline",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Design: Modern Data Pipeline\n\n### Materi Inti:\n- Merancang domain type, ownership, error handling, dan API.\n- Memilih templates, concepts, ranges, smart pointer, dan coroutine secara tepat.\n- Menentukan acceptance criteria, benchmark, dan test cases.",
    "code": "<?php\n// PHP 8.3 Modern: Capstone Design: Modern Data Pipeline\ndeclare(strict_types=1);\n\n$topik = 'Capstone Design: Modern Data Pipeline';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Apa keuntungan menggunakan *Multi-Stage Build* pada Dockerfile untuk aplikasi PHP production?",
      "options": [
        "Menghasilkan ukuran image container yang jauh lebih kecil dan aman dengan memisahkan tahap build dependensi (Composer, Node.js) dari runtime image akhir.",
        "Memungkinkan satu container menjalankan 5 sistem operasi berbeda secara bersamaan.",
        "Menghilangkan kebutuhan konfigurasi Nginx dan reverse proxy.",
        "Membuat container kebal terhadap serangan brute-force SSH."
      ],
      "answer": 0,
      "explanation": "Multi-stage build hanya menyalin artifact hasil build (kode yang teroptimasi dan vendor folder tanpa tools dev), menghasilkan container yang ramping, cepat di-deploy, dan memiliki attack surface minimal."
    }
  },
  {
    "id": 60,
    "slug": "php-lesson-60",
    "title": "60. Capstone Implementation, Demo, dan Refleksi",
    "module": "PHP23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Implementation, Demo, dan Refleksi\n\n### Materi Inti:\n- Implementasi end-to-end di JupyterLite/WebAssembly.\n- Menjalankan unit test, sanitizer, dan benchmark.\n- Menjelaskan tradeoff, hasil, keterbatasan, dan langkah pengembangan.",
    "code": "<?php\n// PHP 8.3 Modern: Capstone Implementation, Demo, dan Refleksi\ndeclare(strict_types=1);\n\n$topik = 'Capstone Implementation, Demo, dan Refleksi';\necho 'Menjalankan studi kasus: ' . $topik . PHP_EOL;\n\nfunction jalankanDemo(string $nama): string {\n    return 'Hasil eksekusi sukses untuk: ' . $nama;\n}\n\necho jalankanDemo($topik) . PHP_EOL;\n",
    "quiz": {
      "question": "Bagaimana strategi *Blue-Green Deployment* atau *Canary Release* menjamin ketersediaan tinggi (Zero-Downtime Deployment)?",
      "options": [
        "Menyiapkan lingkungan baru yang identik, memvalidasi kesehatan aplikasi, lalu mengalihkan trafik router secara mulus tanpa memutus koneksi pengguna aktif.",
        "Mematikan server selama 1 jam di tengah malam saat trafik rendah.",
        "Mengunggah file kode satu per satu via FTP langsung ke folder live.",
        "Menonaktifkan sertifikat SSL saat proses pembaruan sistem."
      ],
      "answer": 0,
      "explanation": "Dengan mengalihkan routing trafik di layer load balancer ke versi baru yang sudah terbukti sehat, downtime dieliminasi dan rollback dapat dilakukan instan jika terdeteksi anomali."
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
        localStorage.setItem('php_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('php_progress');
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
    try { localStorage.setItem('php_last_lesson', String(index)); } catch (e) {}
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
    const saved = localStorage.getItem('php_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}


document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('php_last_lesson') || '0', 10);
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
    out.innerHTML = '<span class="text-cyan-400"><i class="fa-solid fa-spinner fa-spin"></i> Menjalankan kode PHP...</span>';
    
    // Attempt Judge0 or playground execution if applicable
    try {
        const langId = 98; // PHP Judge0 CE language_id
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
        '// Eksekusi kode PHP lokal (Simulasi):\n\n' + escapeHtml(code) +
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta PHP Learning Path';
    
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
    ctx.fillText('PHP Learning Path Standar Industri', canvas.width / 2, 400);
    
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/php/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-PHP-Learning-Path.png';
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
