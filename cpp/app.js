// C++ Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  {
    "id": 1,
    "title": "Fondasi C++ Modern dan Tooling",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu membangun, menjalankan, membaca error, dan menulis program C++ dasar di browser."
  },
  {
    "id": 2,
    "title": "Nilai, Referensi, dan Abstraksi Data",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami nilai, lifetime, encapsulation, dan pembatasan konstansi."
  },
  {
    "id": 3,
    "title": "Object-Oriented C++ dan Polymorphism",
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
    "title": "C++23, Performa, Reliabilitas, dan Capstone",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merancang, menguji, memprofiling, dan menyajikan aplikasi C++ modern yang realistis."
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "cpp-lesson-1",
    "title": "1. Program Pertama dengan C++20 dan C++23",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Pertama dengan C++20 dan C++23\n\n### Materi Inti:\n- Alur compile, link, dan run program C++.\n- Peran header, namespace std, dan flag -std=c++20 atau -std=c++23.\n- Menjalankan kode C++ melalui JupyterLite/Xeus-Cling.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Program Pertama dengan C++20 dan C++23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa efek flag `-std=c++23`?",
      "options": [
        "Memilih standar C++23 untuk kompilasi, jika didukung compiler.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Flag standar memengaruhi\u8bed\u6cd5 dan library yang boleh digunakan, tetapi dukungan implementasi tetap bergantung pada compiler."
    }
  },
  {
    "id": 2,
    "slug": "cpp-lesson-2",
    "title": "2. Tipe Data, Literal, `auto`, dan `constexpr`",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data, Literal, `auto`, dan `constexpr`\n\n### Materi Inti:\n- Tipe fundamental integer, floating-point, char, bool, dan pointer dasar.\n- Signedness, ukuran tipe, suffix literal, dan konversi angka.\n- `auto` untuk deduksi tipe dan `constexpr` untuk nilai compile-time.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"Tipe Data, Literal, `auto`, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tipe dari `auto x = 42LL;`?",
      "options": [
        "`long long`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Suffix `LL` memaksa literal integer menjadi long long."
    }
  },
  {
    "id": 3,
    "slug": "cpp-lesson-3",
    "title": "3. Operator, Precedence, dan Short-Circuit",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator, Precedence, dan Short-Circuit\n\n### Materi Inti:\n- Operator arithmetic, comparison, logical, conditional, dan assignment.\n- Precedence, associativity, dan pentingnya parentheses.\n- Short-circuit evaluation pada `&&` dan `||`.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator, Precedence, dan Short-Circuit\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa hasil `false && (1 / 0)` dan mengapa?",
      "options": [
        "`false`; operand kanan tidak dieksekusi karena short-circuit.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`&&` berhenti setelah operand pertama diketahui false."
    }
  },
  {
    "id": 4,
    "slug": "cpp-lesson-4",
    "title": "4. Kontrol Alur dan Loop",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kontrol Alur dan Loop\n\n### Materi Inti:\n- `if`, `else`, `switch`, dan equality/comparison.\n- For loop, range-based for, break, continue, dan early return.\n- Menulis kondisi yang mudah diuji dan tidak ambigu.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Kontrol Alur dan Loop\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Pada `for (int x : v)`, apakah mengubah `x` mengubah elemen `v`?",
      "options": [
        "Tidak; `x` adalah salinan elemen.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Range-based for dengan tipe biasa membuat salinan nilai."
    }
  },
  {
    "id": 5,
    "slug": "cpp-lesson-5",
    "title": "5. Fungsi, Parameter, Overload, dan `constexpr`",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fungsi, Parameter, Overload, dan `constexpr`\n\n### Materi Inti:\n- Declaration, definition, return type, dan parameter passing.\n- Pass by value, pass by reference, default arguments, dan overload resolution.\n- Fungsi `constexpr` untuk kalkulasi compile-time.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"Fungsi, Parameter, Overload, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan parameter `const T&` untuk objek besar?",
      "options": [
        "Menghindari salinan dan menjamin fungsi tidak mengubah objek.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Reference menghindari copy, sedangkan `const` mengekspresikan tidak adanya modifikasi."
    }
  },
  {
    "id": 6,
    "slug": "cpp-lesson-6",
    "title": "6. Header, Namespace, Debugging, dan Unit Test Mini",
    "module": "Fondasi C++ Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Header, Namespace, Debugging, dan Unit Test Mini\n\n### Materi Inti:\n- Pemisahan `.h` dan `.cpp`, include guard, dan `#pragma once`.\n- Namespace untuk menghindari nama global yang tabrakan.\n- Assertion, breakpoint, dan unit test sederhana.",
    "code": "// C++ C++11/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Header, Namespace, Debugging, dan Unit Test Mini\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa definisi fungsi non-inline sebaiknya tidak diletakkan di header?",
      "options": [
        "Dapat menyebabkan multiple definition saat linking.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Header biasanya hanya berisi declaration; definisi ditempatkan di satu translation unit."
    }
  },
  {
    "id": 7,
    "slug": "cpp-lesson-7",
    "title": "7. Initialization dan Object Lifetime",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Initialization dan Object Lifetime\n\n### Materi Inti:\n- Automatic, static, thread-local, dan local lifetime.\n- Value initialization, aggregate initialization, dan initializer list.\n- Urutan destruction ketika nested scope berakhir.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Initialization dan Object Lifetime\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan objek automatic lokal dihancurkan?",
      "options": [
        "Ketika keluar dari scope-nya.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Destruction terjadi secara reverse order terhadap construction di scope yang sama."
    }
  },
  {
    "id": 8,
    "slug": "cpp-lesson-8",
    "title": "8. Pointer, Reference, dan Address",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pointer, Reference, dan Address\n\n### Materi Inti:\n- Pointer nullable, reference wajib terinisialisasi, dan pointer arithmetic.\n- Lvalue reference versus rvalue reference.\n- Perbedaan address-of, pointer, dan lifetime.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Pointer, Reference, dan Address\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah reference dapat di-reseat setelah inisialisasi?",
      "options": [
        "Tidak.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Reference adalah alias sejak dibuat dan tidak dapat diarahkan ke objek lain."
    }
  },
  {
    "id": 9,
    "slug": "cpp-lesson-9",
    "title": "9. Struct, Class, dan Invariant",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struct, Class, dan Invariant\n\n### Materi Inti:\n- Data members, member functions, access control, dan encapsulation.\n- Membangun invariant seperti `balance >= 0`.\n- Memisahkan interface publik dari implementasi internal.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Struct, Class, dan Invariant\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa access default untuk anggota `class`?",
      "options": [
        "`private`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`struct` menggunakan `public` sebagai default, sedangkan `class` menggunakan `private`."
    }
  },
  {
    "id": 10,
    "slug": "cpp-lesson-10",
    "title": "10. Const Correctness dan Value Semantics",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Correctness dan Value Semantics\n\n### Materi Inti:\n- Const object, const member function, dan pass-by-const-reference.\n- Value semantics versus reference semantics.\n- Kapan `mutable` boleh digunakan dan mengapa harus hati-hati.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Const Correctness dan Value Semantics\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bisakah non-const member function dipanggil pada const object?",
      "options": [
        "Tidak, kecuali member tersebut dinyatakan `mutable`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`const` member function menjamin objek tidak dimodifikasi secara logis."
    }
  },
  {
    "id": 11,
    "slug": "cpp-lesson-11",
    "title": "11. `std::string`, `std::string_view`, dan `std::span`",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::string`, `std::string_view`, dan `std::span`\n\n### Materi Inti:\n- `std::string` memiliki data; `string_view` adalah view non-owning.\n- `std::span` menyediakan view atas contiguous storage.\n- Lifetime hazard, dangling view, dan pemilihan interface yang benar.",
    "code": "// C++ C++17/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::string`, `std::string_view`, dan `std::span`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa risiko `string_view` yang menunjuk temporary string?",
      "options": [
        "Dangling pointer dan undefined behavior setelah temporary hancur.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`string_view` tidak meningkatkan reference count atau memiliki data."
    }
  },
  {
    "id": 12,
    "slug": "cpp-lesson-12",
    "title": "12. RAII dan Penanganan Exception",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII dan Penanganan Exception\n\n### Materi Inti:\n- Resource Acquisition Is Initialization sebagai pola utama ownership.\n- Stack unwinding dan destruction saat exception dilempar.\n- Menulis destructor yang tidak me-lempar exception.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII dan Penanganan Exception\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa peran RAII?",
      "options": [
        "Mengikat kepemilikan resource dengan lifetime objek.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Resource dibebaskan otomatis ketika objek RAII keluar dari scope."
    }
  },
  {
    "id": 13,
    "slug": "cpp-lesson-13",
    "title": "13. Constructor, Destructor, dan Initializer List",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor, Destructor, dan Initializer List\n\n### Materi Inti:\n- Default, parameterized, copy, dan destructor.\n- Initializer list untuk konstruk anggota.\n- Urutan construction dan destruction.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Constructor, Destructor, dan Initializer List\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa initializer list lebih disukai untuk menginisialisasi anggota?",
      "options": [
        "Menghindari default construction lalu assignment.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Anggota langsung dibentuk dengan nilai akhir sejak awal."
    }
  },
  {
    "id": 14,
    "slug": "cpp-lesson-14",
    "title": "14. Copy Semantics dan Rule of Three/Five",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Semantics dan Rule of Three/Five\n\n### Materi Inti:\n- Copy constructor, copy assignment, dan self-assignment.\n- Shallow copy versus deep copy.\n- Copy-and-swap serta kapan menerapkan rule of five.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Semantics dan Rule of Three/Five\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan copy constructor dan copy assignment?",
      "options": [
        "Copy constructor membentuk objek baru; assignment mengganti\u72b6\u6001 objek yang sudah ada.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Keduanya perlu ditangani jika kelas memiliki resource yang harus dimiliki."
    }
  },
  {
    "id": 15,
    "slug": "cpp-lesson-15",
    "title": "15. Operator Overloading",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Overloading\n\n### Materi Inti:\n- Operator arithmetic, comparison, assignment, dan stream.\n- Member operator versus non-member/friend operator.\n- Implicit conversion dan bahaya operator yang mengejutkan.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator Overloading\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Operator mana yang secara umum lebih tepat menjadi non-member?",
      "options": [
        "Operator simetris seperti `+`, `==`, dan `<<`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Non-member memungkinkan implicit conversion pada operand kiri."
    }
  },
  {
    "id": 16,
    "slug": "cpp-lesson-16",
    "title": "16. Inheritance dan Virtual Dispatch",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance dan Virtual Dispatch\n\n### Materi Inti:\n- Base/derived relationship dan is-a semantics.\n- Virtual function, override, dan dynamic dispatch.\n- Virtual destructor pada base polymorphic.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Inheritance dan Virtual Dispatch\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang terjadi jika base pointer memanggil virtual function overridden di derived?",
      "options": [
        "Dynamic dispatch memilih override derived.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Virtual dispatch dipilih berdasarkan tipe objektif pada runtime."
    }
  },
  {
    "id": 17,
    "slug": "cpp-lesson-17",
    "title": "17. Interface Abstrak dan Polymorphic Design",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface Abstrak dan Polymorphic Design\n\n### Materi Inti:\n- Pure virtual function dan abstract class.\n- Interface sebagai kontrak, bukan implementasi yang bocor.\n- Polymorphic destruction dan prinsip substitusi.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Interface Abstrak dan Polymorphic Design\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa arti pure virtual function `virtual void draw() = 0;`?",
      "options": [
        "Class abstrak mewajibkan derived class menyediakan implementasi.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Function murni tidak memiliki body pada base class."
    }
  },
  {
    "id": 18,
    "slug": "cpp-lesson-18",
    "title": "18. Composition, Policy, dan CRTP",
    "module": "Object-Oriented C++ dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Composition, Policy, dan CRTP\n\n### Materi Inti:\n- Composition over inheritance dan dependency injection.\n- Policy-based design untuk memilih perilaku compile-time.\n- CRTP sebagai static polymorphism.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"Composition, Policy, dan CRTP\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan polymorphism CRTP diselesaikan?",
      "options": [
        "Pada compile-time.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "CRTP menggunakan static dispatch dan tipe derived diketahui saat kompilasi."
    }
  },
  {
    "id": 19,
    "slug": "cpp-lesson-19",
    "title": "19. Function Templates dan Template Deduction",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Templates dan Template Deduction\n\n### Materi Inti:\n- Template parameter, deduction, dan explicit template arguments.\n- Overload resolution antara template dan non-template.\n- Pembatasan interface melalui requiremen operasi.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Function Templates dan Template Deduction\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa arti template sebagai family of functions?",
      "options": [
        "Compiler membuat instantiation khusus untuk setiap tipe yang digunakan.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Template bukan function runtime generik tunggal."
    }
  },
  {
    "id": 20,
    "slug": "cpp-lesson-20",
    "title": "20. Class Templates dan Instantiation",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Class Templates dan Instantiation\n\n### Materi Inti:\n- Class template, member definition, dan header placement.\n- Explicit instantiation versus implicit instantiation.\n- Contoh `Box<T>`, `Stack<T>`, dan `Optional<T>`.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Class Templates dan Instantiation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah `Box<int>` dan `Box<double>` merupakan tipe yang sama?",
      "options": [
        "Tidak; keduanya instantiation berbeda.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Tipe template di-instantiation dengan argument tipe yang berbeda."
    }
  },
  {
    "id": 21,
    "slug": "cpp-lesson-21",
    "title": "21. Partial Specialization, Full Specialization, dan Traits",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial Specialization, Full Specialization, dan Traits\n\n### Materi Inti:\n- Partial specialization untuk keluarga tipe.\n- Full specialization untuk kasus sangat khusus.\n- Trait pattern dan `std::enable_if`.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"Partial Specialization, Full Specialization, dan Traits\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Partial specialization lebih sering digunakan pada jenis template apa?",
      "options": [
        "Class template.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Function template biasanya diselesaikan dengan overload; class template dapat memiliki partial specialization."
    }
  },
  {
    "id": 22,
    "slug": "cpp-lesson-22",
    "title": "22. Variadic Templates dan Fold Expression",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Variadic Templates dan Fold Expression\n\n### Materi Inti:\n- Parameter pack, pack expansion, dan recursion.\n- Fold expression untuk sum, product, dan logical operations.\n- Penggunaan `std::tuple` dan argument forwarding.",
    "code": "// C++ C++11/C++17\n#include <iostream>\n\nint main() {\n    std::cout << \"Variadic Templates dan Fold Expression\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi `sizeof...(Ts)`?",
      "options": [
        "Mengembalikan jumlah elemen parameter pack.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Operator ellipsis pada ukuran menghitung jumlah template arguments."
    }
  },
  {
    "id": 23,
    "slug": "cpp-lesson-23",
    "title": "23. Compile-Time Programming dengan `constexpr` dan `consteval`",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Compile-Time Programming dengan `constexpr` dan `consteval`\n\n### Materi Inti:\n- `constexpr` function, literal type, dan compile-time evaluation.\n- `consteval` untuk\u5f3a\u5236 calculated at compile-time.\n- `if constexpr` untuk memilih code berdasarkan tipe.",
    "code": "// C++ C++14/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Compile-Time Programming dengan `constexpr` dan `consteval`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan `constexpr` dan `consteval`?",
      "options": [
        "`constexpr` boleh dieksekusi compile-time atau runtime; `consteval` harus compile-time.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`consteval` memaksa evaluasi immediate function call."
    }
  },
  {
    "id": 24,
    "slug": "cpp-lesson-24",
    "title": "24. SFINAE, `requires`, dan Early Constraint",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# SFINAE, `requires`, dan Early Constraint\n\n### Materi Inti:\n- Substitution failure dan SFINAE.\n- `requires` expression dan constrained template.\n- Overload resolution serta diagnostic yang lebih jelas.",
    "code": "// C++ C++11/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"SFINAE, `requires`, dan Early Constraint\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang terjadi pada candidate template yang gagal substitution?",
      "options": [
        "Candidate dihapus dari overload resolution.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Itu adalah prinsip SFINAE: failure during substitution is not a hard error."
    }
  },
  {
    "id": 25,
    "slug": "cpp-lesson-25",
    "title": "25. Ownership Model dan Raw Memory",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ownership Model dan Raw Memory\n\n### Materi Inti:\n- Stack ownership versus heap ownership.\n- `new`, `new[]`, `delete`, dan `delete[]`.\n- Double free, leak, mismatched deallocation, dan undefined behavior.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Ownership Model dan Raw Memory\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Alokasi `new int[10]` harus dibebaskan dengan apa?",
      "options": [
        "`delete[]`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Array dan non-array allocation memiliki mekanisme deallocation berbeda."
    }
  },
  {
    "id": 26,
    "slug": "cpp-lesson-26",
    "title": "26. `std::unique_ptr` dan Exclusive Ownership",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::unique_ptr` dan Exclusive Ownership\n\n### Materi Inti:\n- Exclusive ownership dan move-only semantics.\n- Factory function seperti `std::make_unique`.\n- Custom deleter, array support, `reset`, dan `release`.",
    "code": "// C++ C++11/C++14\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::unique_ptr` dan Exclusive Ownership\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa hasil menyalin `unique_ptr`?",
      "options": [
        "Compile-time error.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`unique_ptr` tidak memiliki copy operation untuk menjaga exclusive ownership."
    }
  },
  {
    "id": 27,
    "slug": "cpp-lesson-27",
    "title": "27. `std::shared_ptr` dan `std::weak_ptr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::shared_ptr` dan `std::weak_ptr`\n\n### Materi Inti:\n- Shared ownership, control block, dan reference count.\n- `weak_ptr` untuk optional non-owning reference.\n- Cycle ownership dan penggunaan `lock()`.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::shared_ptr` dan `std::weak_ptr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa hasil `weak_ptr::lock()` jika owner terakhir sudah hancur?",
      "options": [
        "Mengembalikan `shared_ptr` kosong.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`weak_ptr` tidak mempertahankan lifetime object."
    }
  },
  {
    "id": 28,
    "slug": "cpp-lesson-28",
    "title": "28. Allocator-Aware Container dan `pmr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Allocator-Aware Container dan `pmr`\n\n### Materi Inti:\n- Allocator-aware container dan custom allocator.\n- `std::pmr::monotonic_buffer_resource` serta pool lifetime.\n- Allocation failure, pool boundary, dan cache locality.",
    "code": "// C++ C++17\n#include <iostream>\n\nint main() {\n    std::cout << \"Allocator-Aware Container dan `pmr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa memory resource harus hidup lebih lama dari container yang menggunakannya?",
      "options": [
        "Container dapat melakukan allocation/deallocation selama lifetime-nya.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Menghancurkan resource lebih dulu menyebabkan dangling allocator."
    }
  },
  {
    "id": 29,
    "slug": "cpp-lesson-29",
    "title": "29. RAII Wrapper dan Safe Resource Patterns",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII Wrapper dan Safe Resource Patterns\n\n### Materi Inti:\n- Wrapper untuk file, socket, mutex, dan heap resource.\n- `lock_guard` versus `unique_lock`.\n- Scope guard untuk cleanup lintas jalur exception.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII Wrapper dan Safe Resource Patterns\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan `std::lock_guard` melepaskan mutex?",
      "options": [
        "Ketika lock guard keluar dari scope.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Destruction lock guard memanggil unlock secara otomatis."
    }
  },
  {
    "id": 30,
    "slug": "cpp-lesson-30",
    "title": "30. Mendeteksi Memory Bug dengan Sanitizer",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mendeteksi Memory Bug dengan Sanitizer\n\n### Materi Inti:\n- AddressSanitizer, UndefinedBehaviorSanitizer, dan Valgrind.\n- Dangling reference, use-after-free, overflow, dan out-of-bounds.\n- Menjalankan sanitizer di native dan WebAssembly.",
    "code": "// C++ C++11/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Mendeteksi Memory Bug dengan Sanitizer\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mana yang melakukan bounds checking: `operator[]` atau `at()`?",
      "options": [
        "`at()`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`operator[]` tidak melakukan bounds check dan dapat menyebabkan undefined behavior."
    }
  },
  {
    "id": 31,
    "slug": "cpp-lesson-31",
    "title": "31. Value Category: Lvalue, Xvalue, dan Prvalue",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Value Category: Lvalue, Xvalue, dan Prvalue\n\n### Materi Inti:\n- Lvalue, xvalue, prvalue, dan named rvalue reference.\n- `std::move` sebagai cast eksplisit.\n- Decay type dan array-to-pointer decay.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Value Category: Lvalue, Xvalue, dan Prvalue\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah named rvalue reference selalu berupa rvalue saat digunakan?",
      "options": [
        "Tidak; named rvalue reference adalah lvalue.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Nama objek tetap memiliki lvalue category meskipun tipe referensinya rvalue."
    }
  },
  {
    "id": 32,
    "slug": "cpp-lesson-32",
    "title": "32. Move Constructor dan Move Assignment",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Move Constructor dan Move Assignment\n\n### Materi Inti:\n- Move operation untuk mengambil resource.\n- Source harus berada dalam valid tetapi unspecified state.\n- Move constructor idealnya `noexcept` agar container dapat memindahkan.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Move Constructor dan Move Assignment\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah move constructor selalu menghindari salinan?",
      "options": [
        "Tidak; dapat fallback ke copy atau melakukan salinan.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Move operation hanya memberi kesempatan untuk perpindahan; implementasinya tetap menentukan."
    }
  },
  {
    "id": 33,
    "slug": "cpp-lesson-33",
    "title": "33. Perfect Forwarding",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perfect Forwarding\n\n### Materi Inti:\n- Forwarding reference dan `auto&&`.\n- `std::forward<T>` untuk mempertahankan value category.\n- Argument unwrapping dengan `std::unwrap_reference`.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Perfect Forwarding\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan `std::forward<T>(t)`?",
      "options": [
        "Mempertahankan value category saat meneruskan argument.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Tanpa forward, argument dapat berubah menjadi lvalue."
    }
  },
  {
    "id": 34,
    "slug": "cpp-lesson-34",
    "title": "34. Copy Elision, NRVO, dan Guaranteed Move",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Elision, NRVO, dan Guaranteed Move\n\n### Materi Inti:\n- Copy elision dan Named Return Value Optimization.\n- Prvalue construction langsung ke result object.\n- `std::move` yang tidak perlu dapat menghambat copy elision.",
    "code": "// C++ C++17\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Elision, NRVO, dan Guaranteed Move\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dapat dilakukan compiler pada `return Vec{};`?",
      "options": [
        "Membentuk result object langsung tanpa move.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Prvalue dapat di-elide secara dijamin pada banyak kondisi C++17."
    }
  },
  {
    "id": 35,
    "slug": "cpp-lesson-35",
    "title": "35. STL Container dan Allocation Strategy",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# STL Container dan Allocation Strategy\n\n### Materi Inti:\n- Tradeoff vector, deque, list, map, set, dan unordered_map.\n- Iterator invalidation, reserve, resize, dan shrink-to-fit.\n- Copy versus move behavior pada container.",
    "code": "// C++ C++11/C++17\n#include <iostream>\n\nint main() {\n    std::cout << \"STL Container dan Allocation Strategy\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan `reserve(n)` dan `resize(n)` pada vector?",
      "options": [
        "`reserve` mengubah capacity; `resize` mengubah size.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Capacity menyediakan ruang alokasi, sedangkan size menentukan jumlah elemen aktif."
    }
  },
  {
    "id": 36,
    "slug": "cpp-lesson-36",
    "title": "36. In-Place Construction dengan `emplace`, `optional`, dan `variant`",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\n### Materi Inti:\n- `emplace_back` dan konstruksi langsung di dalam container.\n- `std::optional<T>::emplace` untuk optional move-only value.\n- `std::variant` dan pemilihan alternative secara eksplisit.",
    "code": "// C++ C++17/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"In-Place Construction dengan `emplace`, `optional`, dan `variant`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan `emplace`?",
      "options": [
        "Membentuk objek langsung di lokasi penyimpanan.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Ini mengurangi temporary dan penting untuk move-only types."
    }
  },
  {
    "id": 37,
    "slug": "cpp-lesson-37",
    "title": "37. Iterator dan Standard Algorithms",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterator dan Standard Algorithms\n\n### Materi Inti:\n- Iterator categories dan range begin/end.\n- `find`, `sort`, `count`, `transform`, dan algorithm contracts.\n- Lambda expression untuk operasi lokal.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Iterator dan Standard Algorithms\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Alasan apa yang dibutuhkan `std::sort` pada seluruh range?",
      "options": [
        "Random-access iterator.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`std::sort` memerlukan kemampuan akses acak untuk strategi sorting-nya."
    }
  },
  {
    "id": 38,
    "slug": "cpp-lesson-38",
    "title": "38. Ranges Views: Lazy dan Non-Owning",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ranges Views: Lazy dan Non-Owning\n\n### Materi Inti:\n- `views::filter`, `transform`, `take`, dan `drop`.\n- View versus owning range.\n- Lazy evaluation dan lifetime adaptor.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Ranges Views: Lazy dan Non-Owning\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan view ranges biasanya dieksekusi?",
      "options": [
        "Ketika range di-iterate atau dikonsumsi.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Views memisahkan deklarasi transformasi dari eksekusi."
    }
  },
  {
    "id": 39,
    "slug": "cpp-lesson-39",
    "title": "39. Range Algorithms dan Range Concepts",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Range Algorithms dan Range Concepts\n\n### Materi Inti:\n- `std::ranges::sort`, `find`, dan `for_each`.\n- Input, output, forward, sortable, dan mutable range requirements.\n- Mengurangi manual iterator arithmetic.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Range Algorithms dan Range Concepts\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana range algorithms menemukan awal dan akhir range?",
      "options": [
        "Melalui range protocol begin/end.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Ranges mengurangi ketergantungan pada iterator manual yang tidak konsisten."
    }
  },
  {
    "id": 40,
    "slug": "cpp-lesson-40",
    "title": "40. Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\n### Materi Inti:\n- `views::zip` untuk beberapa range paralel.\n- `views::chunk`, `slide`, dan `enumerate`.\n- Tuple-like elements, overflow behavior, dan lifetime.",
    "code": "// C++ C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa hasil `views::chunk(3)`?",
      "options": [
        "Membagi range menjadi sub-range berisi maksimal tiga elemen.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Chunk memperlakukan elemen sebagai kelompok kecil."
    }
  },
  {
    "id": 41,
    "slug": "cpp-lesson-41",
    "title": "41. Error Value dengan `std::expected` dan `std::optional`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Error Value dengan `std::expected` dan `std::optional`\n\n### Materi Inti:\n- `optional<T>` untuk absence tanpa error detail.\n- `expected<T,E>` untuk success atau error terstruktur.\n- Composing operations dengan `and_then`, `transform`, dan `or_else`.",
    "code": "// C++ C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Error Value dengan `std::expected` dan `std::optional`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa representasi utama `std::expected<T, E>`?",
      "options": [
        "Satu dari dua state: value `T` atau error `E`.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Expected lebih informatif daripada optional ketika operasi dapat gagal dengan alasan."
    }
  },
  {
    "id": 42,
    "slug": "cpp-lesson-42",
    "title": "42. API Modern C++20/23: Format, Print, Numbers, dan `mdspan`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# API Modern C++20/23: Format, Print, Numbers, dan `mdspan`\n\n### Materi Inti:\n- `std::format`, `std::print`, dan feature-test macros.\n- `std::numbers` untuk konstanta numerik standar.\n- `std::mdspan` untuk multidimensional view tanpa ownership.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"API Modern C++20/23: Format, Print, Numbers, dan `mdspan`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi `std::print` dalam C++23?",
      "options": [
        "Menulis formatted text langsung ke stdout.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "`print` mengurangi kebutuhan membuat intermediate string."
    }
  },
  {
    "id": 43,
    "slug": "cpp-lesson-43",
    "title": "43. Thread Dasar, Join, dan Detach",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Dasar, Join, dan Detach\n\n### Materi Inti:\n- Membuat, menjalankan, `join`, dan `detach` thread.\n- Lifetime thread dan bahaya detach tanpa koordinasi.\n- Data race versus race condition.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Dasar, Join, dan Detach\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi `std::thread::join()`?",
      "options": [
        "Menunggu thread selesai sebelum melanjutkan.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Join memastikan lifetime dan hasil thread selesai sebelum scope berlanjut."
    }
  },
  {
    "id": 44,
    "slug": "cpp-lesson-44",
    "title": "44. Mutex, `lock_guard`, dan Condition Variable",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mutex, `lock_guard`, dan Condition Variable\n\n### Materi Inti:\n- Critical section dan mutual exclusion.\n- RAII locking dengan `lock_guard` dan `unique_lock`.\n- Condition variable, predicate loop, notify-one/all.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"Mutex, `lock_guard`, dan Condition Variable\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa condition variable harus digunakan dalam loop predicate?",
      "options": [
        "Untuk menangani spurious wakeup dan kondisi yang berubah.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Notify tidak membuktikan kondisi yang diinginkan sudah terpenuhi."
    }
  },
  {
    "id": 45,
    "slug": "cpp-lesson-45",
    "title": "45. Atomic dan Memory Ordering",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Atomic dan Memory Ordering\n\n### Materi Inti:\n- Atomic load/store, fetch-add, compare-exchange.\n- Relaxed, acquire, release, dan sequential consistency.\n- Lock-free atomic dan tradeoff performance.",
    "code": "// C++ C++11/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Atomic dan Memory Ordering\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dijamin atomic relaxed?",
      "options": [
        "Atomicity operation, tetapi tidak memberi global ordering antar thread.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Relaxed cocok untuk counter murni, bukan untuk melindungi data kompleks."
    }
  },
  {
    "id": 46,
    "slug": "cpp-lesson-46",
    "title": "46. `std::async`, Future, dan Task",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::async`, Future, dan Task\n\n### Materi Inti:\n- Launch policy dan asynchronous execution.\n- Future/get, exception propagation, dan timeout.\n- Lifetime task dan bahaya menunggu terlalu lama.",
    "code": "// C++ C++11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::async`, Future, dan Task\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dilakukan `future::get()`?",
      "options": [
        "Memblokir sampai result tersedia, lalu mengembalikan value atau melempar exception.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Future menyalin exception task ke pemanggil get."
    }
  },
  {
    "id": 47,
    "slug": "cpp-lesson-47",
    "title": "47. Thread Pool, Deadlock, dan Concurrency Pitfalls",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pool, Deadlock, dan Concurrency Pitfalls\n\n### Materi Inti:\n- Work queue, worker lifetime, dan task scheduling.\n- Deadlock, starvation, ABA, false sharing, dan lock ordering.\n- Desain bounded concurrency dan backpressure.",
    "code": "// C++ C++11/C++17\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Pool, Deadlock, dan Concurrency Pitfalls\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Prinsip apa yang mencegah banyak deadlock sederhana?",
      "options": [
        "Jangan memegang mutex sambil menunggu resource milik thread lain.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Gunakan lock ordering tetap atau release lock sebelum menunggu."
    }
  },
  {
    "id": 48,
    "slug": "cpp-lesson-48",
    "title": "48. Pengantar Coroutine: Suspension dan Resumption",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengantar Coroutine: Suspension dan Resumption\n\n### Materi Inti:\n- Coroutine frame, promise object, dan awaiter.\n- `co_await`, `co_yield`, dan `co_return`.\n- Perbedaan blocking thread dengan cooperative suspension.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Pengantar Coroutine: Suspension dan Resumption\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa syarat utama ekspresi pada `co_await`?",
      "options": [
        "Harus merupakan awaitable yang dapat diterima awaiter.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Compiler membutuhkan operasi await_ready, await_suspend, dan await_resume."
    }
  },
  {
    "id": 49,
    "slug": "cpp-lesson-49",
    "title": "49. Membangun Coroutine dari Komponen Dasar",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Membangun Coroutine dari Komponen Dasar\n\n### Materi Inti:\n- Promise methods: `return_value`, `yield_value`, `initial_suspend`, dan `final_suspend`.\n- Coroutine return object dan exception propagation.\n- Mengapa coroutine bukan thread.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Membangun Coroutine dari Komponen Dasar\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa peran `promise_type`?",
      "options": [
        "Mendefinisikan interface dan state khusus coroutine.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Compiler menggunakan promise type untuk membangun coroutine frame dan return object."
    }
  },
  {
    "id": 50,
    "slug": "cpp-lesson-50",
    "title": "50. Async/Await dengan Executor dan Cancellation",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Async/Await dengan Executor dan Cancellation\n\n### Materi Inti:\n- Custom awaiter dan executor policy.\n- Exception propagation, timeout, dan cancellation token.\n- Composing async operations tanpa nested blocking.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Async/Await dengan Executor dan Cancellation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah `std::async` memiliki cancellation token standar?",
      "options": [
        "Tidak.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Cancellation harus dirancang secara kooperatif atau menggunakan abstraction lain."
    }
  },
  {
    "id": 51,
    "slug": "cpp-lesson-51",
    "title": "51. Generator dengan `std::generator` C++23",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generator dengan `std::generator` C++23\n\n### Materi Inti:\n- `co_yield` sebagai lazy producer.\n- Backpressure, range protocol, dan lifetime iterator.\n- Menggabungkan generator dengan ranges.",
    "code": "// C++ C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Generator dengan `std::generator` C++23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Berapa banyak nilai yang dihasilkan generator per resume?",
      "options": [
        "Satu nilai per `co_yield` yang dicapai.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Generator menghentikan eksekusi setiap kaliyield dan melanjutkan saat iterator maju."
    }
  },
  {
    "id": 52,
    "slug": "cpp-lesson-52",
    "title": "52. Concepts dan Constrained Overload",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Concepts dan Constrained Overload\n\n### Materi Inti:\n- `requires` expression dan named concept.\n- Constraint satisfaction dan overload resolution.\n- Mengganti SFINAE noise dengan diagnostic yang jelas.",
    "code": "// C++ C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Concepts dan Constrained Overload\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan concept dievaluasi?",
      "options": [
        "Selama constraint satisfaction pada kompilasi.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Concept membatasi kandidat yang dapat dipilih compiler."
    }
  },
  {
    "id": 53,
    "slug": "cpp-lesson-53",
    "title": "53. Custom Range, `view`, dan `borrowed_range`",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Range, `view`, dan `borrowed_range`\n\n### Materi Inti:\n- Range requirements dan `range_reference_t`.\n- View, borrowed range, dan adaptor customization.\n- `views::as_const`, `cache_latest`, `chunk`, `slide`, dan `enumerate`.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Custom Range, `view`, dan `borrowed_range`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa arti `borrowed_range`?",
      "options": [
        "Iterator tetap valid setelah range temporary dihancurkan.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Requirement ini mencegah dangling iterator pada adaptor ranges."
    }
  },
  {
    "id": 54,
    "slug": "cpp-lesson-54",
    "title": "54. Modern Generic Design: Templates + Concepts + Ranges",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modern Generic Design: Templates + Concepts + Ranges\n\n### Materi Inti:\n- Menggabungkan constrained template, range algorithms, dan move-only values.\n- API generik dengan error type dan no unnecessary copy.\n- Menulis benchmark serta test matrix untuk beberapa tipe.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Modern Generic Design: Templates + Concepts + Ranges\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Requirement apa yang diperlukan `std::ranges::sort`?",
      "options": [
        "Range harus sortable dan mutable.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Sorting membutuhkan kemampuan membaca dan menulis elemen."
    }
  },
  {
    "id": 55,
    "slug": "cpp-lesson-55",
    "title": "55. Migrasi ke C++23 Library",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Migrasi ke C++23 Library\n\n### Materi Inti:\n- `std::expected`, `std::print`, `std::source_location`, dan string `contains`.\n- `std::ranges::to`, `std::mdspan`, dan `std::generator`.\n- Feature-test macros dan strategi fallback compiler.",
    "code": "// C++ C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Migrasi ke C++23 Library\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi utama `std::expected<T, E>`?",
      "options": [
        "Mewakili value sukses atau error terstruktur.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Expected membantu.error handling tanpa menggunakan exception untuk alur normal."
    }
  },
  {
    "id": 56,
    "slug": "cpp-lesson-56",
    "title": "56. Performance, Profiling, dan Optimization yang Terukur",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Performance, Profiling, dan Optimization yang Terukur\n\n### Materi Inti:\n- Big-O, cache locality, branch prediction, dan allocation cost.\n- Move semantics, emplace, reserve, dan avoiding unnecessary copy.\n- Benchmark, profiler, dan reproducibility.",
    "code": "// C++ C++17/C++20\n#include <iostream>\n\nint main() {\n    std::cout << \"Performance, Profiling, dan Optimization yang Terukur\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apakah `reserve` mengubah size vector?",
      "options": [
        "Tidak; reserve hanya mengubah capacity.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Elemen baru tetap harus ditambahkan dengan resize/emplace/push."
    }
  },
  {
    "id": 57,
    "slug": "cpp-lesson-57",
    "title": "57. Reliabilitas, Security, dan Test Matrix",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Reliabilitas, Security, dan Test Matrix\n\n### Materi Inti:\n- Sanitizer, invariant test, property test, dan fuzzing ringan.\n- Input validation, ownership contract, dan secure defaults.\n- Testing pada edge case, malformed input, dan concurrent path.",
    "code": "// C++ C++11\u2013C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Reliabilitas, Security, dan Test Matrix\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana mendokumentasikan raw pointer non-owning?",
      "options": [
        "Jelaskan bahwa pointer tidak memiliki ownership dan lifetime harus dijaga caller.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Tanpa kontrak lifetime, raw pointer mudah menjadi dangling."
    }
  },
  {
    "id": 58,
    "slug": "cpp-lesson-58",
    "title": "58. Arsitektur, C++20 Modules, Build, dan CI",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Arsitektur, C++20 Modules, Build, dan CI\n\n### Materi Inti:\n- Layering, interface boundary, dependency inversion, dan module boundary.\n- CMake/compiler flags, WebAssembly build, dan browser execution.\n- CI untuk build, test, sanitizer, dan format/lint.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Arsitektur, C++20 Modules, Build, dan CI\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan interface boundary dalam arsitektur C++?",
      "options": [
        "Mengurangi coupling dan menyembunyikan implementasi.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Client bergantung pada kontrak stabil, bukan detail internal."
    }
  },
  {
    "id": 59,
    "slug": "cpp-lesson-59",
    "title": "59. Capstone Design: Modern Data Pipeline",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Design: Modern Data Pipeline\n\n### Materi Inti:\n- Merancang domain type, ownership, error handling, dan API.\n- Memilih templates, concepts, ranges, smart pointer, dan coroutine secara tepat.\n- Menentukan acceptance criteria, benchmark, dan test cases.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Design: Modern Data Pipeline\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Sebelum coding, aspek ownership dan async apa yang harus ditentukan?",
      "options": [
        "Siapa pemilik resource, kapan resource mati, siapa menjalankan operasi async, dan bagaimana exception/cancellation ditangani.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Keputusan ini menentukan smart pointer, coroutine awaiter, dan synchronization."
    }
  },
  {
    "id": 60,
    "slug": "cpp-lesson-60",
    "title": "60. Capstone Implementation, Demo, dan Refleksi",
    "module": "C++23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Implementation, Demo, dan Refleksi\n\n### Materi Inti:\n- Implementasi end-to-end di JupyterLite/WebAssembly.\n- Menjalankan unit test, sanitizer, dan benchmark.\n- Menjelaskan tradeoff, hasil, keterbatasan, dan langkah pengembangan.",
    "code": "// C++ C++20/C++23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Implementation, Demo, dan Refleksi\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan memilih `unique_ptr` daripada `shared_ptr` dalam capstone?",
      "options": [
        "Ketika ownership eksklusif dan cycle risk tidak ada.",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Unique_ptr lebih sederhana, lebih murah, dan membuat ownership lebih jelas."
    }
  }
];

window.MODULES = MODULES;
window.lessons = lessons;
window.LESSONS = lessons;
