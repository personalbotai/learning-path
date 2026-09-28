const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// Kotlin Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  {
    "id": 1,
    "title": "Fondasi Kotlin Modern dan Tooling",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu membangun, menjalankan, membaca error, dan menulis program Kotlin dasar di browser."
  },
  {
    "id": 2,
    "title": "Nilai, Referensi, dan Abstraksi Data",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami nilai, lifetime, encapsulation, dan pembatasan konstansi."
  },
  {
    "id": 3,
    "title": "Object-Oriented Kotlin dan Polymorphism",
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
    "title": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merancang, menguji, memprofiling, dan menyajikan aplikasi Kotlin modern yang realistis."
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "kotlin-lesson-1",
    "title": "1. Program Pertama dengan Kotlin20 dan Kotlin23",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Pertama dengan Kotlin20 dan Kotlin23\n\n### Materi Inti:\n- Alur compile, link, dan run program Kotlin.\n- Peran header, namespace std, dan flag -std=c++20 atau -std=c++23.\n- Menjalankan kode Kotlin melalui JupyterLite/Xeus-Cling.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Program Pertama dengan Kotlin20 dan Kotlin23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan utama antara variabel `val` dan `var` di Kotlin?",
      "options": [
        "`val` bersifat read-only (nilai tidak dapat di-reassign setelah inisialisasi), sedangkan `var` bersifat mutable.",
        "`val` adalah konstan waktu kompilasi yang nilainya harus diketahui sebelum aplikasi dijalankan.",
        "`var` hanya bisa digunakan di dalam fungsi, sedangkan `val` hanya untuk properti kelas.",
        "`val` otomatis mengalokasikan variabel ke memori heap, sedangkan `var` di stack."
      ],
      "answer": 0,
      "explanation": "`val` mendefinisikan referensi read-only (mirip `final` di Java), sedangkan `var` mengizinkan reassignment nilai baru bertipe data sama."
    }
  },
  {
    "id": 2,
    "slug": "kotlin-lesson-2",
    "title": "2. Tipe Data, Literal, `auto`, dan `constexpr`",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data, Literal, `auto`, dan `constexpr`\n\n### Materi Inti:\n- Tipe fundamental integer, floating-point, char, bool, dan pointer dasar.\n- Signedness, ukuran tipe, suffix literal, dan konversi angka.\n- `auto` untuk deduksi tipe dan `constexpr` untuk nilai compile-time.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"Tipe Data, Literal, `auto`, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana fitur *Null Safety* Kotlin mencegah `NullPointerException` (NPE) saat kompilasi?",
      "options": [
        "Sistem tipe Kotlin membedakan secara eksplisit tipe yang boleh bernilai null (`String?`) dan yang tidak boleh (`String`).",
        "Kotlin otomatis mengubah semua nilai null menjadi string kosong saat runtime.",
        "Semua objek di Kotlin otomatis dibungkus dalam class `Optional` secara implisit.",
        "Compiler Kotlin menghapus semua variabel yang bernilai null dari memori bytecode."
      ],
      "answer": 0,
      "explanation": "Di Kotlin, tipe default bersifat non-nullable. Mengisi null ke tipe non-nullable memicu error saat kompilasi, mengeliminasi NPE sebelum runtime."
    }
  },
  {
    "id": 3,
    "slug": "kotlin-lesson-3",
    "title": "3. Operator, Precedence, dan Short-Circuit",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator, Precedence, dan Short-Circuit\n\n### Materi Inti:\n- Operator arithmetic, comparison, logical, conditional, dan assignment.\n- Precedence, associativity, dan pentingnya parentheses.\n- Short-circuit evaluation pada `&&` dan `||`.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator, Precedence, dan Short-Circuit\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Perhatikan kode: `val name: String? = null; val length = name?.length ?: 0`. Apa peran operator `?:` di sini?",
      "options": [
        "Elvis Operator: mengembalikan nilai default di sebelah kanan (`0`) jika ekspresi di sebelah kiri bernilai `null`.",
        "Operator ternary untuk mengecek kondisi boolean.",
        "Operator type-casting paksa yang melempar exception jika null.",
        "Safe-call operator untuk memanggil properti objek."
      ],
      "answer": 0,
      "explanation": "Elvis operator (`?:`) mengevaluasi operand kiri; jika bukan null, nilainya digunakan; jika null, ia mengevaluasi dan mengembalikan nilai fallback di sebelah kanan."
    }
  },
  {
    "id": 4,
    "slug": "kotlin-lesson-4",
    "title": "4. Kontrol Alur dan Loop",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kontrol Alur dan Loop\n\n### Materi Inti:\n- `if`, `else`, `switch`, dan equality/comparison.\n- For loop, range-based for, break, continue, dan early return.\n- Menulis kondisi yang mudah diuji dan tidak ambigu.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Kontrol Alur dan Loop\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keistimewaan dari fitur *Smart Casts* pada percabangan `if` atau `when` di Kotlin?",
      "options": [
        "Compiler otomatis meng-cast tipe variabel ke subtipe spesifik setelah dilakukan pengecekan tipe (`is Type`) tanpa perlu casting eksplisit (`as`).",
        "Variabel integer otomatis diubah menjadi tipe string tanpa memanggil fungsi `.toString()`.",
        "Mengubah objek biasa menjadi class Singleton saat runtime.",
        "Memaksa garbage collection menghapus instance lama."
      ],
      "answer": 0,
      "explanation": "Jika variabel immutable dicek tipenya dengan `is`, compiler secara otomatis menganggap variabel tersebut sudah bertipe hasil pengecekan dalam scope terkait."
    }
  },
  {
    "id": 5,
    "slug": "kotlin-lesson-5",
    "title": "5. Fungsi, Parameter, Overload, dan `constexpr`",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fungsi, Parameter, Overload, dan `constexpr`\n\n### Materi Inti:\n- Declaration, definition, return type, dan parameter passing.\n- Pass by value, pass by reference, default arguments, dan overload resolution.\n- Fungsi `constexpr` untuk kalkulasi compile-time.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"Fungsi, Parameter, Overload, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa ekspresi `when` di Kotlin harus bersifat *exhaustive* saat menangani enum atau sealed class?",
      "options": [
        "Untuk menjamin saat kompilasi bahwa seluruh kemungkinan cabang nilai telah ditangani tanpa ada skenario yang terlewat.",
        "Karena mesin JVM membatasi percabangan maksimal 5 kondisi.",
        "Agar blok `else` tidak memakan memori cache CPU.",
        "Karena Kotlin tidak mendukung statement default pada switch."
      ],
      "answer": 0,
      "explanation": "Exhaustive check memastikan keandalan kode secara komprehensif; compiler melempar error jika ada case baru yang belum ditangani oleh developer."
    }
  },
  {
    "id": 6,
    "slug": "kotlin-lesson-6",
    "title": "6. Header, Namespace, Debugging, dan Unit Test Mini",
    "module": "Fondasi Kotlin Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Header, Namespace, Debugging, dan Unit Test Mini\n\n### Materi Inti:\n- Pemisahan `.h` dan `.kotlin`, include guard, dan `#pragma once`.\n- Namespace untuk menghindari nama global yang tabrakan.\n- Assertion, breakpoint, dan unit test sederhana.",
    "code": "// Kotlin Kotlin11/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Header, Namespace, Debugging, dan Unit Test Mini\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan menggunakan *Single-Expression Functions* (misal: `fun double(x: Int) = x * 2`)?",
      "options": [
        "Membuat kode lebih ringkas dan compiler dapat melakukan type inference otomatis untuk tipe data return value.",
        "Fungsi tersebut otomatis berjalan di thread terpisah (multi-threading).",
        "Mencegah fungsi tersebut dipanggil lebih dari satu kali.",
        "Menghapus kebutuhan unit test untuk fungsi tersebut."
      ],
      "answer": 0,
      "explanation": "Single-expression function memanfaatkan ekspresi langsung dengan tanda sama dengan (`=`), memungkinkan compiler menebak return type secara aman dan membuat kode idiomatik."
    }
  },
  {
    "id": 7,
    "slug": "kotlin-lesson-7",
    "title": "7. Initialization dan Object Lifetime",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Initialization dan Object Lifetime\n\n### Materi Inti:\n- Automatic, static, thread-local, dan local lifetime.\n- Value initialization, aggregate initialization, dan initializer list.\n- Urutan destruction ketika nested scope berakhir.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Initialization dan Object Lifetime\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Secara default, apakah sebuah `class` di Kotlin bersifat terbuka untuk diwarisi (*inheritable*)?",
      "options": [
        "Tidak, semua class di Kotlin secara default bersifat `final`; wajib menggunakan keyword `open` agar bisa diwarisi.",
        "Ya, semua class di Kotlin bebas diwarisi seperti di Java.",
        "Hanya class yang memiliki primary constructor yang bisa diwarisi.",
        "Class di Kotlin hanya bisa diwarisi jika mengimplementasikan interface."
      ],
      "answer": 0,
      "explanation": "Kotlin menganut filosofi 'Design and document for inheritance or else prohibit it' dari Effective Java, sehingga semua class berstatus final secara default."
    }
  },
  {
    "id": 8,
    "slug": "kotlin-lesson-8",
    "title": "8. Pointer, Reference, dan Address",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pointer, Reference, dan Address\n\n### Materi Inti:\n- Pointer nullable, reference wajib terinisialisasi, dan pointer arithmetic.\n- Lvalue reference versus rvalue reference.\n- Perbedaan address-of, pointer, dan lifetime.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Pointer, Reference, dan Address\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa saja fungsi otomatis yang di-generate oleh compiler Kotlin untuk sebuah `data class`?",
      "options": [
        "`equals()`, `hashCode()`, `toString()`, `componentN()`, dan fungsi `copy()`.",
        "Metode serialize JSON dan HTTP client.",
        "Metode hashing password sha-256 dan database migration.",
        "Hanya konstruktor default tanpa parameter."
      ],
      "answer": 0,
      "explanation": "`data class` mengeliminasi ratusan baris boilerplate POJO Java dengan meng-generate method representasi data standar berdasarkan properti di primary constructor."
    }
  },
  {
    "id": 9,
    "slug": "kotlin-lesson-9",
    "title": "9. Struct, Class, dan Invariant",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struct, Class, dan Invariant\n\n### Materi Inti:\n- Data members, member functions, access control, dan encapsulation.\n- Membangun invariant seperti `balance >= 0`.\n- Memisahkan interface publik dari implementasi internal.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Struct, Class, dan Invariant\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara kerja metode `.copy()` pada `data class` Kotlin?",
      "options": [
        "Membuat salinan objek baru dengan mempertahankan nilai properti asli, sambil mengizinkan modifikasi pada properti tertentu secara selektif.",
        "Menghapus objek lama dari memori dan menggantinya dengan objek baru.",
        "Membuat referensi pointer kedua ke alamat memori yang sama (shallow alias).",
        "Mengklon objek menggunakan mekanisme serialisasi biner Java."
      ],
      "answer": 0,
      "explanation": "Fungsi `copy()` sangat penting dalam arsitektur functional dan state management immutable (seperti Redux/MVI) untuk menghasilkan new state secara deklaratif."
    }
  },
  {
    "id": 10,
    "slug": "kotlin-lesson-10",
    "title": "10. Const Correctness dan Value Semantics",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Correctness dan Value Semantics\n\n### Materi Inti:\n- Const object, const member function, dan pass-by-const-reference.\n- Value semantics versus reference semantics.\n- Kapan `mutable` boleh digunakan dan mengapa harus hati-hati.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Const Correctness dan Value Semantics\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan utama antara `object` deklarasi (Singleton) dan `companion object` di Kotlin?",
      "options": [
        "`companion object` terikat pada kelas induknya dan method-nya bisa dipanggil menggunakan nama kelas (mirip static di Java), sedangkan `object` adalah singleton mandiri.",
        "`companion object` hanya bisa dibuat satu kali di seluruh aplikasi, sedangkan `object` bisa banyak.",
        "`object` tidak bisa mengimplementasikan interface, sedangkan `companion object` bisa.",
        "`companion object` otomatis berjalan di background thread."
      ],
      "answer": 0,
      "explanation": "`companion object` menyediakan fungsi factory method dan konstanta yang terkait langsung dengan namespace kelas tanpa memerlukan kata kunci `static`."
    }
  },
  {
    "id": 11,
    "slug": "kotlin-lesson-11",
    "title": "11. `std::string`, `std::string_view`, dan `std::span`",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::string`, `std::string_view`, dan `std::span`\n\n### Materi Inti:\n- `std::string` memiliki data; `string_view` adalah view non-owning.\n- `std::span` menyediakan view atas contiguous storage.\n- Lifetime hazard, dangling view, dan pemilihan interface yang benar.",
    "code": "// Kotlin Kotlin17/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::string`, `std::string_view`, dan `std::span`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi dari properti dengan *custom getter* tanpa backing field di Kotlin?",
      "options": [
        "Nilai dihitung ulang setiap kali properti diakses tanpa menyimpan state di memori instance.",
        "Menyimpan nilai ke dalam database SQLite lokal secara sinkron.",
        "Mengubah properti menjadi variabel statis thread-safe.",
        "Mengunci properti agar tidak bisa dibaca oleh thread lain."
      ],
      "answer": 0,
      "explanation": "Jika properti memiliki getter seperti `val isAdult get() = age >= 18`, tidak ada field memori yang dialokasikan; ekspresi dievaluasi on-demand saat pemanggilan."
    }
  },
  {
    "id": 12,
    "slug": "kotlin-lesson-12",
    "title": "12. RAII dan Penanganan Exception",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII dan Penanganan Exception\n\n### Materi Inti:\n- Resource Acquisition Is Initialization sebagai pola utama ownership.\n- Stack unwinding dan destruction saat exception dilempar.\n- Menulis destructor yang tidak me-lempar exception.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII dan Penanganan Exception\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan modifier `lateinit` boleh digunakan pada variabel di Kotlin?",
      "options": [
        "Hanya pada variabel mutable `var`, tipe non-primitive, dan harus diinisialisasi sebelum diakses pertama kali.",
        "Pada variabel immutable `val` tipe integer apa saja.",
        "Pada variabel yang nilainya pasti bernilai null selamanya.",
        "Hanya di dalam companion object."
      ],
      "answer": 0,
      "explanation": "`lateinit` menunda inisialisasi properti non-null (misal untuk Dependency Injection di Android lifecycle), dan melempar `UninitializedPropertyAccessException` jika diakses sebelum diisi."
    }
  },
  {
    "id": 13,
    "slug": "kotlin-lesson-13",
    "title": "13. Constructor, Destructor, dan Initializer List",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor, Destructor, dan Initializer List\n\n### Materi Inti:\n- Default, parameterized, copy, dan destructor.\n- Initializer list untuk konstruk anggota.\n- Urutan construction dan destruction.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Constructor, Destructor, dan Initializer List\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan mendasar antara `List<T>` dan `MutableList<T>` di library standar Kotlin?",
      "options": [
        "`List<T>` hanya menyediakan interface read-only tanpa method mutasi (`add`, `remove`), sedangkan `MutableList<T>` mendukung modifikasi elemen.",
        "`List<T>` disimpan di flash memory, sedangkan `MutableList<T>` di RAM.",
        "`List<T>` hanya dapat menampung maksimal 10 elemen.",
        "`MutableList<T>` otomatis thread-safe dan synchronized."
      ],
      "answer": 0,
      "explanation": "Pemisahan interface read-only (`List`) dan mutable (`MutableList`) mencegah efek samping (side effects) yang tidak diinginkan dalam pemrosesan koleksi."
    }
  },
  {
    "id": 14,
    "slug": "kotlin-lesson-14",
    "title": "14. Copy Semantics dan Rule of Three/Five",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Semantics dan Rule of Three/Five\n\n### Materi Inti:\n- Copy constructor, copy assignment, dan self-assignment.\n- Shallow copy versus deep copy.\n- Copy-and-swap serta kapan menerapkan rule of five.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Semantics dan Rule of Three/Five\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa menggunakan `Sequence` (`asSequence()`) lebih efisien daripada operasi rantai `List` biasa untuk koleksi berukuran besar?",
      "options": [
        "Sequence melakukan evaluasi secara *lazy* (elemen diproses satu per satu melewati seluruh pipeline) tanpa membuat alokasi koleksi perantara (intermediate collections).",
        "Sequence menjalankan operasi di GPU multi-core secara otomatis.",
        "Sequence mengompresi data dengan algoritma LZ4 di memori.",
        "Sequence otomatis menghapus elemen duplikat secara background."
      ],
      "answer": 0,
      "explanation": "Rantai operasi pada List biasa (seperti `.map().filter()`) menghasilkan list baru di setiap langkah; Sequence mengevaluasi per-item on-demand saat operasi terminal dipanggil."
    }
  },
  {
    "id": 15,
    "slug": "kotlin-lesson-15",
    "title": "15. Operator Overloading",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Overloading\n\n### Materi Inti:\n- Operator arithmetic, comparison, assignment, dan stream.\n- Member operator versus non-member/friend operator.\n- Implicit conversion dan bahaya operator yang mengejutkan.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator Overloading\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan antara fungsi reduksi `reduce()` dan `fold()` pada koleksi Kotlin?",
      "options": [
        "`fold()` menerima nilai awal (initial accumulator value) eksplisit, sedangkan `reduce()` menggunakan elemen pertama koleksi sebagai nilai awal.",
        "`reduce()` mengembalikan koleksi baru, sedangkan `fold()` mengembalikan boolean.",
        "`fold()` hanya bekerja pada list string, sedangkan `reduce()` pada angka.",
        "`reduce()` melempar exception jika koleksi berisi lebih dari 100 elemen."
      ],
      "answer": 0,
      "explanation": "`fold(initial) { acc, elem -> ... }` aman digunakan pada list kosong karena ada nilai awal, sedangkan `reduce` melempar `UnsupportedOperationException` jika list kosong."
    }
  },
  {
    "id": 16,
    "slug": "kotlin-lesson-16",
    "title": "16. Inheritance dan Virtual Dispatch",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance dan Virtual Dispatch\n\n### Materi Inti:\n- Base/derived relationship dan is-a semantics.\n- Virtual function, override, dan dynamic dispatch.\n- Virtual destructor pada base polymorphic.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Inheritance dan Virtual Dispatch\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa output dari fungsi `.flatMap { ... }` pada list of lists?",
      "options": [
        "Mengubah setiap elemen menjadi koleksi lain lalu menggabungkan (flatten) seluruh sub-koleksi tersebut menjadi satu list tunggal datar.",
        "Menghapus list yang memiliki ukuran kurang dari 2 elemen.",
        "Mengubah list menjadi hash map dua dimensi.",
        "Menyaring elemen yang bernilai ganjil saja."
      ],
      "answer": 0,
      "explanation": "`flatMap` menggabungkan operasi `.map()` dan `.flatten()`, sangat berguna untuk membongkar struktur data bersarang menjadi satu stream linier."
    }
  },
  {
    "id": 17,
    "slug": "kotlin-lesson-17",
    "title": "17. Interface Abstrak dan Polymorphic Design",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface Abstrak dan Polymorphic Design\n\n### Materi Inti:\n- Pure virtual function dan abstract class.\n- Interface sebagai kontrak, bukan implementasi yang bocor.\n- Polymorphic destruction dan prinsip substitusi.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Interface Abstrak dan Polymorphic Design\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara membagi koleksi menjadi dua bagian berdasarkan sebuah predikat kondisi boolean dalam satu langkah?",
      "options": [
        "Menggunakan fungsi `.partition { ... }` yang mengembalikan `Pair<List<T>, List<T>>` (lolos kondisi dan gagal kondisi).",
        "Memanggil fungsi `.filter()` dua kali secara berurutan.",
        "Menggunakan fungsi `.groupBy()` dengan key integer acak.",
        "Mengonversi list menjadi SQL query table."
      ],
      "answer": 0,
      "explanation": "Fungsi `.partition { it.score >= 70 }` membagi list secara optimal dalam satu kali iterasi menjadi pasangan list yang memenuhi dan tidak memenuhi syarat."
    }
  },
  {
    "id": 18,
    "slug": "kotlin-lesson-18",
    "title": "18. Composition, Policy, dan CRTP",
    "module": "Object-Oriented Kotlin dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Composition, Policy, dan CRTP\n\n### Materi Inti:\n- Composition over inheritance dan dependency injection.\n- Policy-based design untuk memilih perilaku compile-time.\n- CRTP sebagai static polymorphism.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"Composition, Policy, dan CRTP\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan menggunakan `IntArray` dibandingkan `Array<Int>` di Kotlin JVM?",
      "options": [
        "`IntArray` direpresentasikan sebagai tipe primitif `int[]` di JVM, menghindari overhead alokasi memori boxing/unboxing objek `java.lang.Integer`.",
        "`Array<Int>` tidak mendukung operasi perulangan for-loop.",
        "`IntArray` otomatis memperbesar ukuran kapasitasnya seperti ArrayList.",
        "Tidak ada perbedaan performa sama sekali di runtime JVM."
      ],
      "answer": 0,
      "explanation": "Array tipe primitif khusus (`IntArray`, `DoubleArray`, dll.) menghemat memori RAM secara signifikan dan meningkatkan performa cache CPU karena data disimpan rapat secara kontigu."
    }
  },
  {
    "id": 19,
    "slug": "kotlin-lesson-19",
    "title": "19. Function Templates dan Template Deduction",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Templates dan Template Deduction\n\n### Materi Inti:\n- Template parameter, deduction, dan explicit template arguments.\n- Overload resolution antara template dan non-template.\n- Pembatasan interface melalui requiremen operasi.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Function Templates dan Template Deduction\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara kerja *Extension Functions* (misal: `fun String.removeSpaces() = ...`) di balik layar?",
      "options": [
        "Dikompilasi sebagai fungsi statis biasa di mana objek penerima (receiver) dikirimkan sebagai argumen parameter pertama.",
        "Menyuntikkan bytecode baru langsung ke dalam kelas `java.lang.String` asli saat runtime.",
        "Mengubah class loader JVM untuk menimpa definisi kelas sistem.",
        "Membuat subclass baru secara tersembunyi yang mewarisi class String."
      ],
      "answer": 0,
      "explanation": "Extension function adalah syntactic sugar murni; compiler membuat static utility method sehingga tidak ada modifikasi class target atau overhead performa runtime."
    }
  },
  {
    "id": 20,
    "slug": "kotlin-lesson-20",
    "title": "20. Class Templates dan Instantiation",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Class Templates dan Instantiation\n\n### Materi Inti:\n- Class template, member definition, dan header placement.\n- Explicit instantiation versus implicit instantiation.\n- Contoh `Box<T>`, `Stack<T>`, dan `Optional<T>`.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Class Templates dan Instantiation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan *Sealed Classes* dan *Sealed Interfaces* dalam pemodelan data domain?",
      "options": [
        "Membatasi hierarki pewarisan hanya pada file/package yang sama, memungkinkan exhaustiveness check pada ekspresi `when` tanpa butuh cabang `else`.",
        "Mencegah pembuatan objek di dalam thread utama.",
        "Memaksa semua data class terenkripsi dengan AES-256.",
        "Hanya bisa digunakan bersama framework Spring Boot."
      ],
      "answer": 0,
      "explanation": "Sealed hierarchy merepresentasikan Algebraic Data Types (ADT), sangat ideal untuk memodelkan Result State (Loading, Success, Error) di aplikasi modern."
    }
  },
  {
    "id": 21,
    "slug": "kotlin-lesson-21",
    "title": "21. Partial Specialization, Full Specialization, dan Traits",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial Specialization, Full Specialization, dan Traits\n\n### Materi Inti:\n- Partial specialization untuk keluarga tipe.\n- Full specialization untuk kasus sangat khusus.\n- Trait pattern dan `std::enable_if`.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"Partial Specialization, Full Specialization, dan Traits\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan menggunakan *Inline Value Classes* (`@JvmInline value class UserId(val value: Long)`)?",
      "options": [
        "Memberikan type-safety domain tanpa overhead alokasi objek runtime di heap (dibongkar menjadi tipe primitif aslinya di bytecode).",
        "Membuat variabel tersebut otomatis terhubung ke database.",
        "Mempercepat proses download dependensi Gradle.",
        "Memungkinkan class memiliki banyak properti tanpa constructor."
      ],
      "answer": 0,
      "explanation": "Value class membungkus nilai dasar untuk mencegah kesalahan tertukar ID (type confusion) dengan biaya performa zero-cost saat runtime."
    }
  },
  {
    "id": 22,
    "slug": "kotlin-lesson-22",
    "title": "22. Variadic Templates dan Fold Expression",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Variadic Templates dan Fold Expression\n\n### Materi Inti:\n- Parameter pack, pack expansion, dan recursion.\n- Fold expression untuk sum, product, dan logical operations.\n- Penggunaan `std::tuple` dan argument forwarding.",
    "code": "// Kotlin Kotlin11/Kotlin17\n#include <iostream>\n\nint main() {\n    std::cout << \"Variadic Templates dan Fold Expression\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara mengimplementasikan *Property Delegation* bawaan `by lazy` di Kotlin?",
      "options": [
        "Properti hanya akan diinisialisasi saat pertama kali diakses, dan secara default thread-safe (synchronized).",
        "Properti akan diinisialisasi di thread terpisah saat aplikasi pertama kali boot.",
        "Properti akan dihapus dari RAM setelah 5 detik tidak digunakan.",
        "Properti hanya bisa diisi dari file konfigurasi YAML."
      ],
      "answer": 0,
      "explanation": "`by lazy` menunda komputasi inisialisasi yang berat hingga benar-benar dibutuhkan oleh kode, menghemat waktu startup aplikasi dan penggunaan resource."
    }
  },
  {
    "id": 23,
    "slug": "kotlin-lesson-23",
    "title": "23. Compile-Time Programming dengan `constexpr` dan `consteval`",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Compile-Time Programming dengan `constexpr` dan `consteval`\n\n### Materi Inti:\n- `constexpr` function, literal type, dan compile-time evaluation.\n- `consteval` untuk强制 calculated at compile-time.\n- `if constexpr` untuk memilih code berdasarkan tipe.",
    "code": "// Kotlin Kotlin14/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Compile-Time Programming dengan `constexpr` dan `consteval`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam Generics Kotlin, apa makna dari modifier varians `out` (Covariance) pada `interface Producer<out T>`?",
      "options": [
        "Tipe `T` hanya boleh dihasilkan sebagai output (return value) dan aman untuk subtyping polimorfik (`Producer<String>` adalah subtipe `Producer<Any>`).",
        "Tipe `T` hanya boleh diterima sebagai input parameter fungsi.",
        "Menonaktifkan generic type erasure di JVM.",
        "Memaksa compiler membuang objek keluar dari memori heap."
      ],
      "answer": 0,
      "explanation": "Prinsip PECS (Producer Extends, Consumer Super): `out` berarti kelas tersebut memproduksi nilai tipe T sehingga aman untuk kovariansi tipe turunan."
    }
  },
  {
    "id": 24,
    "slug": "kotlin-lesson-24",
    "title": "24. SFINAE, `requires`, dan Early Constraint",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# SFINAE, `requires`, dan Early Constraint\n\n### Materi Inti:\n- Substitution failure dan SFINAE.\n- `requires` expression dan constrained template.\n- Overload resolution serta diagnostic yang lebih jelas.",
    "code": "// Kotlin Kotlin11/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"SFINAE, `requires`, dan Early Constraint\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan dari operator overloading fungsi `operator fun plus(...)` di Kotlin?",
      "options": [
        "Mengizinkan penggunaan simbol operator matematika `+` pada objek kustom buatan developer secara elegan.",
        "Menambah kecepatan clock prosesor CPU saat menjumlahkan angka.",
        "Menggabungkan dua tabel database SQL tanpa query join.",
        "Menghapus pembagian dengan angka nol."
      ],
      "answer": 0,
      "explanation": "Operator overloading di Kotlin berbasis konvensi nama metode dengan keyword `operator`, memungkinkan ekspresi matematika intuitif pada objek matriks, vektor, atau uang."
    }
  },
  {
    "id": 25,
    "slug": "kotlin-lesson-25",
    "title": "25. Ownership Model dan Raw Memory",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ownership Model dan Raw Memory\n\n### Materi Inti:\n- Stack ownership versus heap ownership.\n- `new`, `new[]`, `delete`, dan `delete[]`.\n- Double free, leak, mismatched deallocation, dan undefined behavior.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Ownership Model dan Raw Memory\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dimaksud dengan *Higher-Order Function* di Kotlin?",
      "options": [
        "Fungsi yang menerima fungsi lain sebagai parameter, atau mengembalikan sebuah fungsi sebagai return value-nya.",
        "Fungsi yang dieksekusi dengan hak akses root / superuser di Linux.",
        "Fungsi yang memiliki lebih dari 10 parameter argumen.",
        "Fungsi yang ditulis di tingkat paling atas file tanpa class (top-level)."
      ],
      "answer": 0,
      "explanation": "Dalam functional programming, fungsi adalah warga kelas satu (first-class citizens) yang dapat dikirim, disimpan, dan dikembalikan layaknya variabel biasa."
    }
  },
  {
    "id": 26,
    "slug": "kotlin-lesson-26",
    "title": "26. `std::unique_ptr` dan Exclusive Ownership",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::unique_ptr` dan Exclusive Ownership\n\n### Materi Inti:\n- Exclusive ownership dan move-only semantics.\n- Factory function seperti `std::make_unique`.\n- Custom deleter, array support, `reset`, dan `release`.",
    "code": "// Kotlin Kotlin11/Kotlin14\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::unique_ptr` dan Exclusive Ownership\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa kata kunci `inline` sangat penting pada Higher-Order Function yang sering dipanggil?",
      "options": [
        "Menghilangkan alokasi objek objek instance `Function` di heap dan overhead virtual call dengan menyalin isi lambda langsung ke tempat pemanggilannya.",
        "Membuat fungsi tersebut berjalan secara asynchronous di thread terpisah.",
        "Mengompresi ukuran file APK Android.",
        "Menghindari batasan memory limit Android."
      ],
      "answer": 0,
      "explanation": "Keyword `inline` memerintahkan compiler menanamkan bytecode tubuh fungsi dan lambda langsung di call-site, mengeliminasi alokasi closure dan meningkatkan performa."
    }
  },
  {
    "id": 27,
    "slug": "kotlin-lesson-27",
    "title": "27. `std::shared_ptr` dan `std::weak_ptr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::shared_ptr` dan `std::weak_ptr`\n\n### Materi Inti:\n- Shared ownership, control block, dan reference count.\n- `weak_ptr` untuk optional non-owning reference.\n- Cycle ownership dan penggunaan `lock()`.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::shared_ptr` dan `std::weak_ptr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara membedakan penggunaan scope function `let` dan `apply` di Kotlin?",
      "options": [
        "`let` mengembalikan hasil evaluasi lambda dan merujuk objek via `it`, sedangkan `apply` mengembalikan objek penerima konteks itu sendiri dan merujuk objek via `this`.",
        "`apply` hanya bisa digunakan untuk variabel null, sedangkan `let` untuk angka.",
        "`let` otomatis menjalankan operasi di database background thread.",
        "Keduanya identik dan hanya berbeda nama fungsi."
      ],
      "answer": 0,
      "explanation": "`apply` biasanya digunakan untuk konfigurasi inisialisasi builder objek (`button.apply { text = 'OK' }`), sedangkan `let` sering digunakan untuk transformasi atau null-check."
    }
  },
  {
    "id": 28,
    "slug": "kotlin-lesson-28",
    "title": "28. Allocator-Aware Container dan `pmr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Allocator-Aware Container dan `pmr`\n\n### Materi Inti:\n- Allocator-aware container dan custom allocator.\n- `std::pmr::monotonic_buffer_resource` serta pool lifetime.\n- Allocation failure, pool boundary, dan cache locality.",
    "code": "// Kotlin Kotlin17\n#include <iostream>\n\nint main() {\n    std::cout << \"Allocator-Aware Container dan `pmr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa peran modifier `crossinline` pada parameter fungsi lambda di dalam inline function?",
      "options": [
        "Melarang lambda melakukan non-local return yang dapat melompat keluar dari fungsi pelingkup luar secara tak terduga.",
        "Mengizinkan lambda berjalan melintasi batasan thread yang berbeda secara paralel.",
        "Memaksa lambda dijalankan secara sinkron tanpa jeda waktu.",
        "Menghapus parameter argumen dari memori stack."
      ],
      "answer": 0,
      "explanation": "`crossinline` mencegah eksekusi return statement non-lokal di dalam lambda yang diteruskan ke konteks eksekusi lain (seperti objek Runnable atau thread lain)."
    }
  },
  {
    "id": 29,
    "slug": "kotlin-lesson-29",
    "title": "29. RAII Wrapper dan Safe Resource Patterns",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII Wrapper dan Safe Resource Patterns\n\n### Materi Inti:\n- Wrapper untuk file, socket, mutex, dan heap resource.\n- `lock_guard` versus `unique_lock`.\n- Scope guard untuk cleanup lintas jalur exception.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII Wrapper dan Safe Resource Patterns\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana konsep *Type-Safe Builders* di Kotlin diimplementasikan (misal pada Kotlinx.html atau Jetpack Compose)?",
      "options": [
        "Menggabungkan Higher-Order Function dengan *Function Literals with Receiver* (`T.() -> Unit`).",
        "Menggunakan generator kode compiler plugin compiler eksternal tanpa fungsi native.",
        "Menggunakan refleksi dinamis tingkat tinggi untuk membaca variabel.",
        "Menggunakan interpreter skrip Python di dalam runtime JVM."
      ],
      "answer": 0,
      "explanation": "Lambda with receiver memungkinkan tubuh lambda mengakses metode dan properti objek target secara implisit via `this`, menciptakan Domain-Specific Language (DSL) yang elegan."
    }
  },
  {
    "id": 30,
    "slug": "kotlin-lesson-30",
    "title": "30. Mendeteksi Memory Bug dengan Sanitizer",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mendeteksi Memory Bug dengan Sanitizer\n\n### Materi Inti:\n- AddressSanitizer, UndefinedBehaviorSanitizer, dan Valgrind.\n- Dangling reference, use-after-free, overflow, dan out-of-bounds.\n- Menjalankan sanitizer di native dan WebAssembly.",
    "code": "// Kotlin Kotlin11/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Mendeteksi Memory Bug dengan Sanitizer\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa arti dari konsep fungsi *Pure Function* dalam paradigma fungsional Kotlin?",
      "options": [
        "Fungsi yang selalu menghasilkan output identik untuk input yang sama dan tidak memicu efek samping (side effects) ke luar scope-nya.",
        "Fungsi yang tidak menggunakan komentar sama sekali di dalam tubuh kodenya.",
        "Fungsi yang hanya menggunakan tipe data primitif tanpa objek.",
        "Fungsi yang ditulis dalam satu baris kode tanpa titik koma."
      ],
      "answer": 0,
      "explanation": "Pure function bersifat deterministik dan aman terhadap konkurensi karena tidak membaca atau memodifikasi mutable global state."
    }
  },
  {
    "id": 31,
    "slug": "kotlin-lesson-31",
    "title": "31. Value Category: Lvalue, Xvalue, dan Prvalue",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Value Category: Lvalue, Xvalue, dan Prvalue\n\n### Materi Inti:\n- Lvalue, xvalue, prvalue, dan named rvalue reference.\n- `std::move` sebagai cast eksplisit.\n- Decay type dan array-to-pointer decay.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Value Category: Lvalue, Xvalue, dan Prvalue\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa *Coroutines* disebut sebagai 'Lightweight Threads' dibandingkan thread sistem operasi native?",
      "options": [
        "Ribuan coroutine dapat berjalan di atas segelintir thread OS melalui mekanisme suspensi non-blocking tanpa overhead context-switch level kernel.",
        "Coroutine tidak menggunakan memori RAM sama sekali saat berjalan.",
        "Coroutine hanya bisa mengeksekusi operasi matematika sederhana.",
        "Coroutine secara otomatis mematikan thread OS jika kehabisan memori."
      ],
      "answer": 0,
      "explanation": "Satu thread OS membutuhkan ~1MB stack memory, sedangkan coroutine hanya berupa objek kecil di heap yang dapat ditangguhkan (*suspend*) tanpa memblokir thread fisik."
    }
  },
  {
    "id": 32,
    "slug": "kotlin-lesson-32",
    "title": "32. Move Constructor dan Move Assignment",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Move Constructor dan Move Assignment\n\n### Materi Inti:\n- Move operation untuk mengambil resource.\n- Source harus berada dalam valid tetapi unspecified state.\n- Move constructor idealnya `noexcept` agar container dapat memindahkan.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Move Constructor dan Move Assignment\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan mendasar antara coroutine builder `launch` dan `async`?",
      "options": [
        "`launch` mengembalikan `Job` (fire-and-forget tanpa mengembalikan nilai hasil), sedangkan `async` mengembalikan `Deferred<T>` yang hasilnya ditunggu via `.await()`.",
        "`launch` berjalan di background, sedangkan `async` memblokir main thread UI.",
        "`async` tidak dapat menangani exception.",
        "`launch` hanya bisa dijalankan satu kali seumur hidup aplikasi."
      ],
      "answer": 0,
      "explanation": "`async` dirancang khusus untuk komputasi paralel yang memproduksi nilai balikan (`Deferred` adalah representasi promise ringan di Kotlin)."
    }
  },
  {
    "id": 33,
    "slug": "kotlin-lesson-33",
    "title": "33. Perfect Forwarding",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perfect Forwarding\n\n### Materi Inti:\n- Forwarding reference dan `auto&&`.\n- `std::forward<T>` untuk mempertahankan value category.\n- Argument unwrapping dengan `std::unwrap_reference`.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Perfect Forwarding\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dimaksud dengan prinsip *Structured Concurrency* di Kotlin Coroutines?",
      "options": [
        "Coroutine baru hanya bisa diluncurkan di dalam `CoroutineScope` spesifik yang menjamin lifecycle, pembatalan terkoordinasi, dan propagasi error anak ke induk.",
        "Membatasi jumlah coroutine yang berjalan maksimal 4 proses di seluruh aplikasi.",
        "Mengharuskan semua kode asinkron ditulis di dalam satu file tunggal.",
        "Memaksa coroutine menunggu jaringan internet tersambung kembali."
      ],
      "answer": 0,
      "explanation": "Structured Concurrency mencegah kebocoran coroutine (coroutine leaks); jika scope induk dibatalkan, semua child coroutines di dalamnya otomatis ikut dibatalkan."
    }
  },
  {
    "id": 34,
    "slug": "kotlin-lesson-34",
    "title": "34. Copy Elision, NRVO, dan Guaranteed Move",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Elision, NRVO, dan Guaranteed Move\n\n### Materi Inti:\n- Copy elision dan Named Return Value Optimization.\n- Prvalue construction langsung ke result object.\n- `std::move` yang tidak perlu dapat menghambat copy elision.",
    "code": "// Kotlin Kotlin17\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Elision, NRVO, dan Guaranteed Move\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dispatcher manakah yang paling tepat digunakan untuk operasi I/O intensif (pembacaan file disk, query database, atau HTTP request)?",
      "options": [
        "`Dispatchers.IO`",
        "`Dispatchers.Main`",
        "`Dispatchers.Default`",
        "`Dispatchers.Unconfined`"
      ],
      "answer": 0,
      "explanation": "`Dispatchers.IO` didukung oleh pool thread elastis yang dapat berkembang hingga puluhan thread untuk menangani operasi blocking I/O tanpa menghambat komputasi CPU."
    }
  },
  {
    "id": 35,
    "slug": "kotlin-lesson-35",
    "title": "35. STL Container dan Allocation Strategy",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# STL Container dan Allocation Strategy\n\n### Materi Inti:\n- Tradeoff vector, deque, list, map, set, dan unordered_map.\n- Iterator invalidation, reserve, resize, dan shrink-to-fit.\n- Copy versus move behavior pada container.",
    "code": "// Kotlin Kotlin11/Kotlin17\n#include <iostream>\n\nint main() {\n    std::cout << \"STL Container dan Allocation Strategy\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan perilaku penanganan error antara `Job` standar dan `SupervisorJob` dalam CoroutineScope?",
      "options": [
        "Pada `Job` standar, kegagalan satu child coroutine akan membatalkan induk dan semua saudara lainnya; pada `SupervisorJob`, kegagalan anak diisolasi tanpa membatalkan saudara lain.",
        "`SupervisorJob` otomatis me-restart aplikasi jika terjadi error.",
        "`SupervisorJob` mengabaikan semua try-catch block di dalam kode.",
        "`SupervisorJob` tidak dapat dijalankan di perangkat mobile Android."
      ],
      "answer": 0,
      "explanation": "`SupervisorJob` sangat vital untuk arsitektur UI/Server di mana kegagalan satu request (misal gagal ambil avatar) tidak boleh menggugurkan request lain yang sedang berjalan."
    }
  },
  {
    "id": 36,
    "slug": "kotlin-lesson-36",
    "title": "36. In-Place Construction dengan `emplace`, `optional`, dan `variant`",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\n### Materi Inti:\n- `emplace_back` dan konstruksi langsung di dalam container.\n- `std::optional<T>::emplace` untuk optional move-only value.\n- `std::variant` dan pemilihan alternative secara eksplisit.",
    "code": "// Kotlin Kotlin17/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"In-Place Construction dengan `emplace`, `optional`, dan `variant`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana sebuah coroutine yang sedang menjalankan loop komputasi berat dapat merespons pembatalan (*cancellation*) secara kooperatif?",
      "options": [
        "Secara berkala memanggil fungsi `yield()` atau memeriksa properti `isActive` di dalam loop perulangan.",
        "Coroutine otomatis berhenti seketika tanpa perlu penanganan tambahan.",
        "Menutup thread JVM secara paksa dari sistem operasi.",
        "Menghapus variabel iterator di tengah perulangan."
      ],
      "answer": 0,
      "explanation": "Pembatalan coroutine bersifat kooperatif; jika loop CPU tidak memanggil suspending function atau tidak memeriksa `ensureActive()` / `isActive`, pembatalan akan tertunda."
    }
  },
  {
    "id": 37,
    "slug": "kotlin-lesson-37",
    "title": "37. Iterator dan Standard Algorithms",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterator dan Standard Algorithms\n\n### Materi Inti:\n- Iterator categories dan range begin/end.\n- `find`, `sort`, `count`, `transform`, dan algorithm contracts.\n- Lambda expression untuk operasi lokal.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Iterator dan Standard Algorithms\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan mendasar antara *Cold Stream* (`Flow`) dan *Hot Stream* (`StateFlow` / `SharedFlow`)?",
      "options": [
        "Cold Flow hanya mulai memproduksi data saat ada collector yang aktif mendengarkan, sedangkan Hot Flow memproduksi data terlepas dari ada atau tidaknya observer.",
        "Cold Flow disimpan di server cloud, sedangkan Hot Flow disimpan di RAM lokal.",
        "Hot Flow hanya dapat mengirim satu nilai saja seumur hidup aplikasi.",
        "Cold Flow tidak mendukung operator transformasi seperti filter dan map."
      ],
      "answer": 0,
      "explanation": "`Flow` standar bersifat dingin (mirip pemanggilan fungsi yang diulang per collector), sedangkan `StateFlow` selalu menyimpan nilai state terakhir di memori dan menyiarkannya ke banyak collector."
    }
  },
  {
    "id": 38,
    "slug": "kotlin-lesson-38",
    "title": "38. Ranges Views: Lazy dan Non-Owning",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ranges Views: Lazy dan Non-Owning\n\n### Materi Inti:\n- `views::filter`, `transform`, `take`, dan `drop`.\n- View versus owning range.\n- Lazy evaluation dan lifetime adaptor.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Ranges Views: Lazy dan Non-Owning\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa karakteristik utama dari `StateFlow` di arsitektur modern Android/KMP?",
      "options": [
        "Memiliki nilai awal (initial value), mempertahankan state terakhir via properti `.value`, dan hanya mengemisikan nilai baru jika berbeda dari nilai sebelumnya (*conflation*).",
        "Menghapus data state setiap kali aplikasi berpindah layar.",
        "Hanya bisa diakses dari background thread tanpa akses UI.",
        "Otomatis menyimpan data ke disk storage SQLite."
      ],
      "answer": 0,
      "explanation": "`StateFlow` adalah pengganti modern untuk `LiveData`, dirancang khusus untuk memegang observable state pada ViewModel dan terintegrasi mulus dengan UI declarative."
    }
  },
  {
    "id": 39,
    "slug": "kotlin-lesson-39",
    "title": "39. Range Algorithms dan Range Concepts",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Range Algorithms dan Range Concepts\n\n### Materi Inti:\n- `std::ranges::sort`, `find`, dan `for_each`.\n- Input, output, forward, sortable, dan mutable range requirements.\n- Mengurangi manual iterator arithmetic.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Range Algorithms dan Range Concepts\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan operator `flowOn(Dispatchers.IO)` harus disisipkan di dalam rantai pemrosesan Flow?",
      "options": [
        "Untuk mengubah konteks dispatcher pengeksekusi operator-operator aliran data sebelumnya di hulu (upstream) tanpa memengaruhi collector di hilir.",
        "Untuk mengubah thread tempat fungsi `collect()` dipanggil.",
        "Untuk menghentikan aliran flow secara sepihak.",
        "Hanya saat flow memproses data audio."
      ],
      "answer": 0,
      "explanation": "`flowOn` menjaga prinsip *Context Preservation*; ia hanya mengatur thread untuk produser upstream, sementara collector di downstream tetap berjalan di thread asalnya."
    }
  },
  {
    "id": 40,
    "slug": "kotlin-lesson-40",
    "title": "40. Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\n### Materi Inti:\n- `views::zip` untuk beberapa range paralel.\n- `views::chunk`, `slide`, dan `enumerate`.\n- Tuple-like elements, overflow behavior, dan lifetime.",
    "code": "// Kotlin Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi operator `.debounce(300L)` pada aliran data input pencarian pengguna (search query)?",
      "options": [
        "Menunda emisi nilai dan membatalkan emisi sebelumnya jika ada karakter baru yang diketik dalam rentang waktu 300 milidetik, mencegah spam API call.",
        "Mempercepat waktu pengetikan pengguna sebanyak 300%.",
        "Menyaring kata-kata kasar dari input teks pengguna.",
        "Menyimpan teks pencarian ke riwayat browser secara offline."
      ],
      "answer": 0,
      "explanation": "Debounce adalah teknik krusial dalam reactive programming untuk menstabilkan input pengguna yang cepat, hanya memicu request saat pengguna berhenti mengetik sejenak."
    }
  },
  {
    "id": 41,
    "slug": "kotlin-lesson-41",
    "title": "41. Error Value dengan `std::expected` dan `std::optional`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Error Value dengan `std::expected` dan `std::optional`\n\n### Materi Inti:\n- `optional<T>` untuk absence tanpa error detail.\n- `expected<T,E>` untuk success atau error terstruktur.\n- Composing operations dengan `and_then`, `transform`, dan `or_else`.",
    "code": "// Kotlin Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Error Value dengan `std::expected` dan `std::optional`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara menangani *Backpressure* saat produser Flow menghasilkan data lebih cepat daripada kemampuan collector memprosesnya?",
      "options": [
        "Menggunakan strategi buffer seperti `.buffer()`, `.conflate()` (hanya ambil data terbaru), atau `.collectLatest()` (batalkan proses lama saat data baru tiba).",
        "Mematikan koneksi internet pengguna.",
        "Menghentikan aplikasi dengan OutOfMemoryException.",
        "Memaksa produser berhenti selamanya."
      ],
      "answer": 0,
      "explanation": "Kotlin Flow menyediakan operator mitigasi backpressure yang fleksibel, memastikan collector yang lambat tidak menyebabkan tumpukan memori tak terkendali."
    }
  },
  {
    "id": 42,
    "slug": "kotlin-lesson-42",
    "title": "42. API Modern Kotlin20/23: Format, Print, Numbers, dan `mdspan`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# API Modern Kotlin20/23: Format, Print, Numbers, dan `mdspan`\n\n### Materi Inti:\n- `std::format`, `std::print`, dan feature-test macros.\n- `std::numbers` untuk konstanta numerik standar.\n- `std::mdspan` untuk multidimensional view tanpa ownership.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"API Modern Kotlin20/23: Format, Print, Numbers, dan `mdspan`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa pustaka *Turbine* sangat populer digunakan untuk unit testing Kotlin Flow?",
      "options": [
        "Menyediakan API testing terstruktur (`flow.test { awaitItem(); awaitComplete() }`) untuk memverifikasi setiap emisi data reaktif secara deterministik.",
        "Mempercepat kompilasi file Kotlin menjadi WebAssembly.",
        "Menggantikan fungsi MockK di testing database.",
        "Membuat mock server HTTP otomatis."
      ],
      "answer": 0,
      "explanation": "Turbine memungkinkan developer menguji aliran data asinkron secara berurutan dan mengassert event (item, error, complete) tanpa perlu sleep time yang rentan flaky."
    }
  },
  {
    "id": 43,
    "slug": "kotlin-lesson-43",
    "title": "43. Thread Dasar, Join, dan Detach",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Dasar, Join, dan Detach\n\n### Materi Inti:\n- Membuat, menjalankan, `join`, dan `detach` thread.\n- Lifetime thread dan bahaya detach tanpa koordinasi.\n- Data race versus race condition.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Dasar, Join, dan Detach\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana mekanisme deklarasi `expect` dan `actual` bekerja dalam arsitektur Kotlin Multiplatform (KMP)?",
      "options": [
        "`expect` dideklarasikan di modul `commonMain` sebagai kontrak antarmuka bersama, sedangkan `actual` diimplementasikan secara spesifik di modul platform masing-masing (androidMain, iosMain).",
        "`expect` digunakan untuk kode backend, sedangkan `actual` untuk frontend web.",
        "`expect` otomatis diubah menjadi kode bahasa Swift oleh compiler Apple.",
        "`actual` adalah annotation untuk fungsi unit test otomatis."
      ],
      "answer": 0,
      "explanation": "Mekanisme `expect/actual` memungkinkan shared logic di common module memanggil API spesifik platform (seperti Bluetooth atau File System) tanpa kehilangan integritas tipe saat kompilasi."
    }
  },
  {
    "id": 44,
    "slug": "kotlin-lesson-44",
    "title": "44. Mutex, `lock_guard`, dan Condition Variable",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mutex, `lock_guard`, dan Condition Variable\n\n### Materi Inti:\n- Critical section dan mutual exclusion.\n- RAII locking dengan `lock_guard` dan `unique_lock`.\n- Condition variable, predicate loop, notify-one/all.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"Mutex, `lock_guard`, dan Condition Variable\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan menggunakan HTTP client *Ktor Client* dalam project KMP?",
      "options": [
        "Arsitektur engine yang modular dan multiplatform, menggunakan engine native (OkHttp di Android, Darwin di iOS/macOS, Curl di Desktop) dengan API Kotlin bersama.",
        "Ktor tidak memerlukan koneksi internet untuk mengunduh data web.",
        "Ktor secara otomatis membobol autentikasi firewall server.",
        "Ktor hanya mendukung format data XML kuno."
      ],
      "answer": 0,
      "explanation": "Ktor Client menyediakan abstraction layer jaringan asinkron bertenaga Coroutines yang berjalan mulus di seluruh target sistem operasi tanpa duplikasi kode networking."
    }
  },
  {
    "id": 45,
    "slug": "kotlin-lesson-45",
    "title": "45. Atomic dan Memory Ordering",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Atomic dan Memory Ordering\n\n### Materi Inti:\n- Atomic load/store, fetch-add, compare-exchange.\n- Relaxed, acquire, release, dan sequential consistency.\n- Lock-free atomic dan tradeoff performance.",
    "code": "// Kotlin Kotlin11/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Atomic dan Memory Ordering\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana library *SQLDelight* menjamin type-safety pada database di multiplatform?",
      "options": [
        "Membaca skema query SQL murni secara statis dan meng-generate kode Kotlin type-safe yang memetakan kolom database ke model data saat waktu kompilasi.",
        "Mengubah database SQLite menjadi server PostgreSQL di cloud.",
        "Menghapus syntax error di SQL secara otomatis tanpa memberitahu developer.",
        "Hanya mendukung penyimpanan data sementara di cookie browser."
      ],
      "answer": 0,
      "explanation": "SQLDelight membalik paradigma ORM tradisional: SQL adalah single source of truth, dan compiler memverifikasi sintaks query SQL secara ketat saat build time."
    }
  },
  {
    "id": 46,
    "slug": "kotlin-lesson-46",
    "title": "46. `std::async`, Future, dan Task",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::async`, Future, dan Task\n\n### Materi Inti:\n- Launch policy dan asynchronous execution.\n- Future/get, exception propagation, dan timeout.\n- Lifetime task dan bahaya menunggu terlalu lama.",
    "code": "// Kotlin Kotlin11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::async`, Future, dan Task\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa konsep arsitektur di balik *Compose Multiplatform* (Desktop, Android, iOS)?",
      "options": [
        "Rendering UI deklaratif berbasis canvas grafis Skia, mengeksekusi logika UI yang sama persis di seluruh sistem operasi dengan performa 60 FPS native.",
        "Menampilkan halaman web HTML di dalam WebView tersembunyi.",
        "Menerjemahkan kode Kotlin menjadi kode Java Swing di masa lampau.",
        "Memerlukan emulator Android aktif untuk berjalan di iPhone."
      ],
      "answer": 0,
      "explanation": "Compose Multiplatform berbagi pohon logika deklaratif dan engine grafis yang sama, memberikan kebebasan berbagi 100% UI code atau hanya sebagian state presentation."
    }
  },
  {
    "id": 47,
    "slug": "kotlin-lesson-47",
    "title": "47. Thread Pool, Deadlock, dan Concurrency Pitfalls",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pool, Deadlock, dan Concurrency Pitfalls\n\n### Materi Inti:\n- Work queue, worker lifetime, dan task scheduling.\n- Deadlock, starvation, ABA, false sharing, dan lock ordering.\n- Desain bounded concurrency dan backpressure.",
    "code": "// Kotlin Kotlin11/Kotlin17\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Pool, Deadlock, dan Concurrency Pitfalls\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara membagikan View Model / State Management di KMP agar kompatibel dengan SwiftUI di iOS?",
      "options": [
        "Mengekspor StateFlow sebagai shared state yang diobservasi di iOS menggunakan adapter Combine atau Swift async-await sequence.",
        "Mengubah ViewModel menjadi file Storyboard XML Apple.",
        "Memaksa developer iOS menulis ulang seluruh kode di Objective-C.",
        "Mengirimkan state melalui socket UDP lokal."
      ],
      "answer": 0,
      "explanation": "Arsitektur MVI/MVVM modern memusatkan state logic di common Kotlin code, sehingga tim iOS cukup menghubungkan UI SwiftUI murni ke flow state yang dipancarkan."
    }
  },
  {
    "id": 48,
    "slug": "kotlin-lesson-48",
    "title": "48. Pengantar Coroutine: Suspension dan Resumption",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengantar Coroutine: Suspension dan Resumption\n\n### Materi Inti:\n- Coroutine frame, promise object, dan awaiter.\n- `co_await`, `co_yield`, dan `co_return`.\n- Perbedaan blocking thread dengan cooperative suspension.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Pengantar Coroutine: Suspension dan Resumption\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa format output biner yang dihasilkan Kotlin/Native saat menargetkan sistem operasi iOS?",
      "options": [
        "Framework Apple Objective-C / Swift native binary (`.framework` atau `.xcframework`).",
        "File eksekusi biner `.exe` Windows.",
        "File `.jar` yang membutuhkan instalasi JVM di perangkat iPhone.",
        "Skrip JavaScript terkompresi."
      ],
      "answer": 0,
      "explanation": "Kotlin/Native mengompilasi kode Kotlin menggunakan backend LLVM menjadi binary kode mesin asli yang dapat langsung di-link oleh Xcode tanpa overhead virtual machine."
    }
  },
  {
    "id": 49,
    "slug": "kotlin-lesson-49",
    "title": "49. Membangun Coroutine dari Komponen Dasar",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Membangun Coroutine dari Komponen Dasar\n\n### Materi Inti:\n- Promise methods: `return_value`, `yield_value`, `initial_suspend`, dan `final_suspend`.\n- Coroutine return object dan exception propagation.\n- Mengapa coroutine bukan thread.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Membangun Coroutine dari Komponen Dasar\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi anotasi `@JvmStatic` pada fungsi di dalam `companion object`?",
      "options": [
        "Memerintahkan compiler meng-generate metode statis asli di level bytecode kelas Java induk agar dapat dipanggil seperti `Class.method()` dari Java.",
        "Menyimpan nilai variabel di database Redis server.",
        "Mencegah fungsi dipanggil dari bahasa Kotlin.",
        "Membuat fungsi menjadi synchronized thread-safe secara otomatis."
      ],
      "answer": 0,
      "explanation": "Tanpa `@JvmStatic`, pemanggil dari kode Java harus mengakses instance companion secara eksplisit via `Class.Companion.method()`."
    }
  },
  {
    "id": 50,
    "slug": "kotlin-lesson-50",
    "title": "50. Async/Await dengan Executor dan Cancellation",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Async/Await dengan Executor dan Cancellation\n\n### Materi Inti:\n- Custom awaiter dan executor policy.\n- Exception propagation, timeout, dan cancellation token.\n- Composing async operations tanpa nested blocking.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Async/Await dengan Executor dan Cancellation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan anotasi `@JvmOverloads` sangat berguna saat mengekspor class Kotlin ke Java?",
      "options": [
        "Meng-generate overload konstruktor/metode Java ganda secara otomatis untuk setiap parameter yang memiliki nilai default di Kotlin.",
        "Mengizinkan metode memiliki nama yang sama dengan keyword Java.",
        "Menonaktifkan batasan jumlah parameter pada JVM.",
        "Mengubah semua tipe data integer menjadi long di Java."
      ],
      "answer": 0,
      "explanation": "Java tidak mendukung default argument syntax; `@JvmOverloads` menciptakan metode versi 1 parameter, 2 parameter, dst., sehingga class ramah dipanggil dari Java legacy."
    }
  },
  {
    "id": 51,
    "slug": "kotlin-lesson-51",
    "title": "51. Generator dengan `std::generator` Kotlin23",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generator dengan `std::generator` Kotlin23\n\n### Materi Inti:\n- `co_yield` sebagai lazy producer.\n- Backpressure, range protocol, dan lifetime iterator.\n- Menggabungkan generator dengan ranges.",
    "code": "// Kotlin Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Generator dengan `std::generator` Kotlin23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara kerja library *kotlinx.serialization* tanpa overhead Java Reflection?",
      "options": [
        "Menggunakan compiler plugin yang menghasilkan serializer serializer biner type-safe langsung pada saat kompilasi (`@Serializable`).",
        "Membaca file JSON secara manual baris demi baris menggunakan regex.",
        "Mengunggah payload JSON ke server eksternal untuk diproses.",
        "Hanya mendukung serialisasi tipe string primitif."
      ],
      "answer": 0,
      "explanation": "Karena tidak menggunakan runtime reflection, `kotlinx.serialization` sangat cepat, hemat memori, dan sepenuhnya kompatibel dengan Kotlin/Native dan WebAssembly."
    }
  },
  {
    "id": 52,
    "slug": "kotlin-lesson-52",
    "title": "52. Concepts dan Constrained Overload",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Concepts dan Constrained Overload\n\n### Materi Inti:\n- `requires` expression dan named concept.\n- Constraint satisfaction dan overload resolution.\n- Mengganti SFINAE noise dengan diagnostic yang jelas.",
    "code": "// Kotlin Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Concepts dan Constrained Overload\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan utama menggunakan Gradle Kotlin DSL (`build.gradle.kts`) dibanding Groovy tradisional?",
      "options": [
        "Memberikan autocompletion cerdas, refactoring aman, dan validasi tipe compile-time langsung di dalam build script.",
        "Mempercepat download package Maven hingga 10 kali lipat.",
        "Menghapus kebutuhan instalasi Java SDK di komputer.",
        "Menolak build jika proyek memiliki lebih dari 3 library eksternal."
      ],
      "answer": 0,
      "explanation": "Kotlin DSL menghadirkan kenyamanan IDE kelas satu pada konfigurasi build, mengeliminasi kesalahan pengetikan nama dependency atau plugin yang sering terjadi di Groovy."
    }
  },
  {
    "id": 53,
    "slug": "kotlin-lesson-53",
    "title": "53. Custom Range, `view`, dan `borrowed_range`",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Range, `view`, dan `borrowed_range`\n\n### Materi Inti:\n- Range requirements dan `range_reference_t`.\n- View, borrowed range, dan adaptor customization.\n- `views::as_const`, `cache_latest`, `chunk`, `slide`, dan `enumerate`.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Custom Range, `view`, dan `borrowed_range`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi fitur *Version Catalogs* (`libs.versions.toml`) pada proyek multi-modul Gradle modern?",
      "options": [
        "Sentralisasi manajemen versi dependensi dan plugin di satu file terpusat yang dapat diakses secara type-safe di seluruh sub-modul.",
        "Menghitung total ukuran file biner aplikasi sebelum di-compile.",
        "Membatasi hak akses developer junior terhadap file kode sumber.",
        "Menyimpan password database proyek secara publik."
      ],
      "answer": 0,
      "explanation": "Version Catalog adalah best practice resmi Gradle untuk mencegah fragmentasi versi library antar modul dan menyederhanakan update dependency berkala."
    }
  },
  {
    "id": 54,
    "slug": "kotlin-lesson-54",
    "title": "54. Modern Generic Design: Templates + Concepts + Ranges",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modern Generic Design: Templates + Concepts + Ranges\n\n### Materi Inti:\n- Menggabungkan constrained template, range algorithms, dan move-only values.\n- API generik dengan error type dan no unnecessary copy.\n- Menulis benchmark serta test matrix untuk beberapa tipe.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Modern Generic Design: Templates + Concepts + Ranges\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara menangani kata kunci Java yang bertabrakan dengan identifier Kotlin (seperti pemanggilan method `is()` atau `in()`)?",
      "options": [
        "Membungkus nama identifier tersebut dengan tanda backtick (misal: `` `in` `` atau `` `is` ``).",
        "Mengganti nama method tersebut di dalam file jar library Java.",
        "Menggunakan tanda petik dua ganda string.",
        "Kotlin tidak dapat memanggil method Java yang bernama keyword."
      ],
      "answer": 0,
      "explanation": "Tanda backtick (`` ` ``) memungkinkan developer menggunakan identifier apa pun yang bentrok dengan kata kunci resmi bahasa tanpa menimbulkan syntax error."
    }
  },
  {
    "id": 55,
    "slug": "kotlin-lesson-55",
    "title": "55. Migrasi ke Kotlin23 Library",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Migrasi ke Kotlin23 Library\n\n### Materi Inti:\n- `std::expected`, `std::print`, `std::source_location`, dan string `contains`.\n- `std::ranges::to`, `std::mdspan`, dan `std::generator`.\n- Feature-test macros dan strategi fallback compiler.",
    "code": "// Kotlin Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Migrasi ke Kotlin23 Library\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan pustaka *MockK* dibanding Mockito saat melakukan unit testing kode Kotlin idiomatik?",
      "options": [
        "Mendukung mocking native untuk Coroutines suspending functions, extension functions, object singletons, dan private functions tanpa boilerplate.",
        "MockK dapat menjalankan unit test tanpa perlu compiler Kotlin.",
        "MockK secara otomatis membuat aplikasi lolos review Play Store.",
        "MockK hanya bekerja pada file konfigurasi XML."
      ],
      "answer": 0,
      "explanation": "MockK dibangun dari dasar khusus untuk Kotlin, menyediakan sintaks DSL yang ekspresif (`coEvery { ... } returns ...`) yang memahami penuh semantik coroutine dan null safety."
    }
  },
  {
    "id": 56,
    "slug": "kotlin-lesson-56",
    "title": "56. Performance, Profiling, dan Optimization yang Terukur",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Performance, Profiling, dan Optimization yang Terukur\n\n### Materi Inti:\n- Big-O, cache locality, branch prediction, dan allocation cost.\n- Move semantics, emplace, reserve, dan avoiding unnecessary copy.\n- Benchmark, profiler, dan reproducibility.",
    "code": "// Kotlin Kotlin17/Kotlin20\n#include <iostream>\n\nint main() {\n    std::cout << \"Performance, Profiling, dan Optimization yang Terukur\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa peran alat static analysis *Detekt* dalam continuous integration (CI) proyek Kotlin?",
      "options": [
        "Menganalisis code smell, kompleksitas kode, pelanggaran aturan arsitektur, dan potensi bug performa berdasarkan aturan AST statis.",
        "Mengunggah aplikasi ke server produksi secara otomatis.",
        "Membuat tampilan UI aplikasi menjadi dark mode.",
        "Menghitung gaji developer berdasarkan jumlah baris kode."
      ],
      "answer": 0,
      "explanation": "Detekt menegakkan standar kualitas kode tim secara otomatis, menolak Pull Request jika terdapat kompleksitas siklomatis yang terlalu tinggi atau memory leak pattern."
    }
  },
  {
    "id": 57,
    "slug": "kotlin-lesson-57",
    "title": "57. Reliabilitas, Security, dan Test Matrix",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Reliabilitas, Security, dan Test Matrix\n\n### Materi Inti:\n- Sanitizer, invariant test, property test, dan fuzzing ringan.\n- Input validation, ownership contract, dan secure defaults.\n- Testing pada edge case, malformed input, dan concurrent path.",
    "code": "// Kotlin Kotlin11–Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Reliabilitas, Security, dan Test Matrix\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana compiler tool *R8 / ProGuard* mengoptimalkan file biner aplikasi Kotlin untuk production?",
      "options": [
        "Melakukan dead-code elimination (tree shaking), optimasi bytecode, inlining agresif, dan obfuscation nama class/method untuk mengecilkan ukuran dan keamanan.",
        "Mengubah kode Kotlin menjadi bahasa C murni sebelum dipaketkan.",
        "Menghapus seluruh asset gambar dari dalam bundle aplikasi.",
        "Mencegah aplikasi di-uninstall oleh pengguna ponsel."
      ],
      "answer": 0,
      "explanation": "R8 memotong metadata dan fungsi library yang tidak terpakai, secara signifikan mengurangi ukuran APK/AAB dan waktu cold-startup aplikasi di perangkat."
    }
  },
  {
    "id": 58,
    "slug": "kotlin-lesson-58",
    "title": "58. Arsitektur, Kotlin20 Modules, Build, dan CI",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Arsitektur, Kotlin20 Modules, Build, dan CI\n\n### Materi Inti:\n- Layering, interface boundary, dependency inversion, dan module boundary.\n- CMake/compiler flags, WebAssembly build, dan browser execution.\n- CI untuk build, test, sanitizer, dan format/lint.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Arsitektur, Kotlin20 Modules, Build, dan CI\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang menjadi penyebab utama *Coroutine Memory Leak* di aplikasi Android/KMP?",
      "options": [
        "Meluncurkan coroutine menggunakan `GlobalScope` yang tidak terikat pada siklus hidup (lifecycle) layar atau komponen UI.",
        "Menggunakan dispatcher `Dispatchers.IO` untuk mendownload file.",
        "Memanggil fungsi `.cancel()` saat layar aplikasi ditutup.",
        "Menggunakan tipe data String di dalam coroutine."
      ],
      "answer": 0,
      "explanation": "`GlobalScope` membuat coroutine tetap berjalan di latar belakang selamanya meskipun user sudah keluar dari layar, menahan referensi konteks dan menyebabkan memory leak parah."
    }
  },
  {
    "id": 59,
    "slug": "kotlin-lesson-59",
    "title": "59. Capstone Design: Modern Data Pipeline",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Design: Modern Data Pipeline\n\n### Materi Inti:\n- Merancang domain type, ownership, error handling, dan API.\n- Memilih templates, concepts, ranges, smart pointer, dan coroutine secara tepat.\n- Menentukan acceptance criteria, benchmark, dan test cases.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Design: Modern Data Pipeline\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana framework backend *Ktor Server* memanfaatkan Coroutines untuk performa tinggi?",
      "options": [
        "Menggunakan arsitektur I/O non-blocking asynchronous secara menyeluruh, menangani puluhan ribu koneksi request HTTP persisten dengan penggunaan RAM yang minimal.",
        "Memerlukan server Apache Tomcat besar dengan ribuan thread OS aktif.",
        "Menyimpan seluruh database aplikasi di dalam file session cookie.",
        "Menolak koneksi yang tidak menggunakan protokol WebSocket."
      ],
      "answer": 0,
      "explanation": "Ktor Server tidak memblokir thread saat menunggu I/O database atau jaringan, memaksimalkan throughput pada arsitektur microservices dan cloud-native container."
    }
  },
  {
    "id": 60,
    "slug": "kotlin-lesson-60",
    "title": "60. Capstone Implementation, Demo, dan Refleksi",
    "module": "Kotlin23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Implementation, Demo, dan Refleksi\n\n### Materi Inti:\n- Implementasi end-to-end di JupyterLite/WebAssembly.\n- Menjalankan unit test, sanitizer, dan benchmark.\n- Menjelaskan tradeoff, hasil, keterbatasan, dan langkah pengembangan.",
    "code": "// Kotlin Kotlin20/Kotlin23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Implementation, Demo, dan Refleksi\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa mengaktifkan *Strict Explicit API Mode* (`explicitApi()`) sangat direkomendasikan saat membangun library open-source Kotlin?",
      "options": [
        "Memaksa developer mendeklarasikan modifier visibilitas (`public`, `internal`) dan return type eksplisit pada semua API publik, mencegah kebocoran implementasi internal.",
        "Membatasi ukuran library maksimal hanya 500 Kilobyte.",
        "Melarang penggunaan third-party library di dalam proyek.",
        "Otomatis mempublikasikan library ke Maven Central tanpa API key."
      ],
      "answer": 0,
      "explanation": "Explicit API Mode mencegah perubahan yang tidak disengaja merusak binary compatibility (ABI) publik bagi pengguna library di masa mendatang."
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
        localStorage.setItem('kotlin_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('kotlin_progress');
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
    try { localStorage.setItem('kotlin_last_lesson', String(index)); } catch (e) {}
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
    const saved = localStorage.getItem('kotlin_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}


document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('kotlin_last_lesson') || '0', 10);
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
    out.innerHTML = '<span class="text-cyan-400"><i class="fa-solid fa-spinner fa-spin"></i> Menjalankan kode Kotlin...</span>';
    
    // Attempt Judge0 or playground execution if applicable
    try {
        const langIds = { kotlin: 54, rust: 73, go: 60 };
        const langId = langIds['kotlin'] || 73;
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
        '// Eksekusi kode Kotlin lokal (Simulasi):\n\n' + escapeHtml(code) +
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta Kotlin Learning Path';
    
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
    ctx.fillText('Kotlin Learning Path Standar Industri', canvas.width / 2, 400);
    
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/kotlin/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-Kotlin-Learning-Path.png';
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
