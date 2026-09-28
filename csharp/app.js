const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// C# Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  {
    "id": 1,
    "title": "Fondasi C# Modern dan Tooling",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu membangun, menjalankan, membaca error, dan menulis program C# dasar di browser."
  },
  {
    "id": 2,
    "title": "Nilai, Referensi, dan Abstraksi Data",
    "icon": "fa-solid fa-code",
    "desc": "Peserta memahami nilai, lifetime, encapsulation, dan pembatasan konstansi."
  },
  {
    "id": 3,
    "title": "Object-Oriented C# dan Polymorphism",
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
    "title": "C#23, Performa, Reliabilitas, dan Capstone",
    "icon": "fa-solid fa-code",
    "desc": "Peserta mampu merancang, menguji, memprofiling, dan menyajikan aplikasi C# modern yang realistis."
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "csharp-lesson-1",
    "title": "1. Program Pertama dengan C#20 dan C#23",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Pertama dengan C#20 dan C#23\n\n### Materi Inti:\n- Alur compile, link, dan run program C#.\n- Peran header, namespace std, dan flag -std=c++20 atau -std=c++23.\n- Menjalankan kode C# melalui JupyterLite/Xeus-Cling.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Program Pertama dengan C#20 dan C#23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan fundamental antara *Value Types* dan *Reference Types* di memori CLR .NET?",
      "options": [
        "Value Types (struct, int) dialokasikan langsung di stack atau inline dalam objek penampung, sedangkan Reference Types (class, string) dialokasikan di heap dengan pointer di stack.",
        "Value Types selalu disimpan di SSD, sedangkan Reference Types di RAM.",
        "Reference Types tidak pernah dibersihkan oleh Garbage Collector.",
        "Value Types hanya boleh digunakan dalam metode statis."
      ],
      "answer": 0,
      "explanation": "Value type memegang nilainya secara langsung; ketika di-copy, seluruh datanya diduplikasi. Reference type memegang alamat referensi ke lokasi objek di memory heap."
    }
  },
  {
    "id": 2,
    "slug": "csharp-lesson-2",
    "title": "2. Tipe Data, Literal, `auto`, dan `constexpr`",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data, Literal, `auto`, dan `constexpr`\n\n### Materi Inti:\n- Tipe fundamental integer, floating-point, char, bool, dan pointer dasar.\n- Signedness, ukuran tipe, suffix literal, dan konversi angka.\n- `auto` untuk deduksi tipe dan `constexpr` untuk nilai compile-time.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"Tipe Data, Literal, `auto`, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana fitur *Nullable Reference Types* (NRT) di C# 8+ membantu mencegah `NullReferenceException`?",
      "options": [
        "Compiler memberikan peringatan statis saat waktu kompilasi jika variabel yang tidak dideklarasikan sebagai nullable (`string?`) berpotensi berisi `null`.",
        "CLR otomatis membuang semua objek yang bernilai null dari memori RAM.",
        "Mengubah runtime .NET agar tidak lagi mengenal konsep pointer null.",
        "Mengharuskan setiap variabel class diinisialisasi dengan angka nol."
      ],
      "answer": 0,
      "explanation": "NRT adalah analisis statis compile-time; tipe tanpa tanda tanya (`string`) dianggap non-null, memaksa developer menangani kemungkinan null secara sadar."
    }
  },
  {
    "id": 3,
    "slug": "csharp-lesson-3",
    "title": "3. Operator, Precedence, dan Short-Circuit",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator, Precedence, dan Short-Circuit\n\n### Materi Inti:\n- Operator arithmetic, comparison, logical, conditional, dan assignment.\n- Precedence, associativity, dan pentingnya parentheses.\n- Short-circuit evaluation pada `&&` dan `||`.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator, Precedence, dan Short-Circuit\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi operator *Null-Coalescing Assignment* `??=` di C#?",
      "options": [
        "Hanya meng-assign nilai di sisi kanan ke variabel sisi kiri jika variabel sisi kiri saat ini bernilai `null`.",
        "Membandingkan apakah dua objek memiliki referensi alamat memori yang sama.",
        "Mengonversi tipe data nullable menjadi non-nullable secara paksa.",
        "Menghapus nilai variabel dan mengembalikannya ke default factory."
      ],
      "answer": 0,
      "explanation": "Sintaks `x ??= y;` mengevaluasi `x`; jika `x` bernilai null, maka nilai `y` diisikan ke `x`. Jika tidak null, nilai `x` tetap dipertahankan."
    }
  },
  {
    "id": 4,
    "slug": "csharp-lesson-4",
    "title": "4. Kontrol Alur dan Loop",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kontrol Alur dan Loop\n\n### Materi Inti:\n- `if`, `else`, `switch`, dan equality/comparison.\n- For loop, range-based for, break, continue, dan early return.\n- Menulis kondisi yang mudah diuji dan tidak ambigu.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Kontrol Alur dan Loop\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan menggunakan *Switch Expressions* modern (misal: `state switch { ... }`) dibanding statement switch klasik?",
      "options": [
        "Merupakan sebuah ekspresi yang mengembalikan nilai, mendukung pattern matching ekspresif, dan memaksa exhaustiveness checking.",
        "Otomatis mengeksekusi semua case secara paralel di background thread.",
        "Hanya bisa digunakan untuk membandingkan angka integer ganjil.",
        "Menghilangkan kebutuhan keyword default dengan mengabaikan nilai tak dikenal."
      ],
      "answer": 0,
      "explanation": "Switch expression lebih ringkas, aman dari bug fallthrough tanpa `break`, dan memicu compiler warning jika ada kemungkinan kasus nilai yang belum ditangani."
    }
  },
  {
    "id": 5,
    "slug": "csharp-lesson-5",
    "title": "5. Fungsi, Parameter, Overload, dan `constexpr`",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fungsi, Parameter, Overload, dan `constexpr`\n\n### Materi Inti:\n- Declaration, definition, return type, dan parameter passing.\n- Pass by value, pass by reference, default arguments, dan overload resolution.\n- Fungsi `constexpr` untuk kalkulasi compile-time.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"Fungsi, Parameter, Overload, dan `constexpr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa manfaat utama tipe struktur data `Span<T>` dan `ReadOnlySpan<T>` di .NET modern?",
      "options": [
        "Menyediakan representasi memori kontigu tipe-aman (stack, heap, atau native) tanpa alokasi memori heap baru dan tanpa overhead copying (*Zero-Allocation*).",
        "Membuat array menjadi elastis dinamis seperti `List<T>` tanpa batas kapasitas.",
        "Menyimpan data string terenkripsi di dalam register CPU.",
        "Mengizinkan akses multithreading tanpa mekanisme locking."
      ],
      "answer": 0,
      "explanation": "`Span<T>` adalah ref struct berbasis stack yang merepresentasikan window view langsung ke array atau memori native, merevolusi performa string parsing dan I/O di .NET Core/8."
    }
  },
  {
    "id": 6,
    "slug": "csharp-lesson-6",
    "title": "6. Header, Namespace, Debugging, dan Unit Test Mini",
    "module": "Fondasi C# Modern dan Tooling",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Header, Namespace, Debugging, dan Unit Test Mini\n\n### Materi Inti:\n- Pemisahan `.h` dan `.csharp`, include guard, dan `#pragma once`.\n- Namespace untuk menghindari nama global yang tabrakan.\n- Assertion, breakpoint, dan unit test sederhana.",
    "code": "// C# C#11/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Header, Namespace, Debugging, dan Unit Test Mini\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan keyword `ref readonly` pada parameter fungsi bermanfaat di C# 12?",
      "options": [
        "Meneruskan struct berukuran besar via referensi (menghindari biaya copying memori) sambil menjamin metode pemanggil tidak dapat memodifikasi isi struct tersebut.",
        "Memaksa struct dialokasikan di thread pool secara global.",
        "Mengubah nilai parameter menjadi immutable selamanya di seluruh aplikasi.",
        "Hanya berfungsi jika struct mengimplementasikan interface IDisposable."
      ],
      "answer": 0,
      "explanation": "`ref readonly` (atau `in`) mengombinasikan efisiensi performa passing-by-reference dengan keamanan immutability pada tipe data nilai (value types)."
    }
  },
  {
    "id": 7,
    "slug": "csharp-lesson-7",
    "title": "7. Initialization dan Object Lifetime",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Initialization dan Object Lifetime\n\n### Materi Inti:\n- Automatic, static, thread-local, dan local lifetime.\n- Value initialization, aggregate initialization, dan initializer list.\n- Urutan destruction ketika nested scope berakhir.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Initialization dan Object Lifetime\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana fitur *Primary Constructors* pada Class biasa di C# 12 bekerja?",
      "options": [
        "Mendeklarasikan parameter konstruktor langsung di samping nama class, dan parameter tersebut tersedia di seluruh tubuh class sebagai field penampung.",
        "Membuat class otomatis menjadi abstract singleton.",
        "Mengharuskan class memiliki minimal dua konstruktor tambahan.",
        "Membatasi class agar tidak dapat diwarisi oleh class lain."
      ],
      "answer": 0,
      "explanation": "C# 12 memperluas primary constructor dari record ke class dan struct biasa, menyederhanakan dependency injection boilerplate tanpa perlu mendeklarasikan constructor terpisah."
    }
  },
  {
    "id": 8,
    "slug": "csharp-lesson-8",
    "title": "8. Pointer, Reference, dan Address",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pointer, Reference, dan Address\n\n### Materi Inti:\n- Pointer nullable, reference wajib terinisialisasi, dan pointer arithmetic.\n- Lvalue reference versus rvalue reference.\n- Perbedaan address-of, pointer, dan lifetime.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Pointer, Reference, dan Address\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan karakteristik mendasar antara `record` dan `class` biasa di C#?",
      "options": [
        "`record` mengimplementasikan kesetaraan berbasis nilai (*Value-based Equality*) dan sintaks mutasi non-destruktif (`with`), sedangkan `class` menggunakan kesetaraan referensi.",
        "`record` tidak dapat memiliki metode atau fungsi di dalamnya.",
        "`record` dialokasikan di stack, sedangkan `class` di heap.",
        "`record` hanya bisa dibuat jika terkoneksi ke database Entity Framework."
      ],
      "answer": 0,
      "explanation": "Dua instance `record` dengan isi data properti yang identik dianggap sama (`==` menghasilkan true), sangat ideal untuk Data Transfer Objects (DTO) dan Immutable Domain Models."
    }
  },
  {
    "id": 9,
    "slug": "csharp-lesson-9",
    "title": "9. Struct, Class, dan Invariant",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struct, Class, dan Invariant\n\n### Materi Inti:\n- Data members, member functions, access control, dan encapsulation.\n- Membangun invariant seperti `balance >= 0`.\n- Memisahkan interface publik dari implementasi internal.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Struct, Class, dan Invariant\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan modifier `init` pada deklarasi properti C# (misal: `public string Name { get; init; }`)?",
      "options": [
        "Mengizinkan nilai properti diisi saat konstruksi/object initializer, tetapi setelah itu properti menjadi read-only (immutable).",
        "Mengisi nilai properti dengan string acak saat aplikasi pertama kali boot.",
        "Mengharuskan properti diisi melalui query database SQL.",
        "Membuat properti hanya dapat dibaca oleh unit test."
      ],
      "answer": 0,
      "explanation": "`init-only setters` memberikan fleksibilitas object initializer (`new Person { Name = 'Budi' }`) tanpa mengorbankan keamanan immutability setelah objek terbentuk."
    }
  },
  {
    "id": 10,
    "slug": "csharp-lesson-10",
    "title": "10. Const Correctness dan Value Semantics",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Correctness dan Value Semantics\n\n### Materi Inti:\n- Const object, const member function, dan pass-by-const-reference.\n- Value semantics versus reference semantics.\n- Kapan `mutable` boleh digunakan dan mengapa harus hati-hati.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Const Correctness dan Value Semantics\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan keyword `required` pada properti class wajib dipenuhi oleh pemanggil?",
      "options": [
        "Wajib diisi saat inisialisasi objek (via constructor atau object initializer), diverifikasi ketat oleh compiler saat build time.",
        "Wajib diisi melalui dependency injection container ASP.NET Core saja.",
        "Wajib berupa tipe data yang bukan string atau integer.",
        "Hanya berlaku jika class didekorasi dengan atribut `[Serializable]`."
      ],
      "answer": 0,
      "explanation": "Modifier `required` (diperkenalkan di C# 11) memastikan properti tidak boleh terlewat saat pembuatan instance, mencegah objek berada dalam status tidak lengkap."
    }
  },
  {
    "id": 11,
    "slug": "csharp-lesson-11",
    "title": "11. `std::string`, `std::string_view`, dan `std::span`",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::string`, `std::string_view`, dan `std::span`\n\n### Materi Inti:\n- `std::string` memiliki data; `string_view` adalah view non-owning.\n- `std::span` menyediakan view atas contiguous storage.\n- Lifetime hazard, dangling view, dan pemilihan interface yang benar.",
    "code": "// C# C#17/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::string`, `std::string_view`, dan `std::span`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa arti dari *Static Virtual Members in Interfaces* yang diperkenalkan pada .NET 7 / C# 11?",
      "options": [
        "Memungkinkan interface mendefinisikan operator matematika statis atau factory method yang harus diimplementasikan oleh kelas turunan (fondasi Generic Math).",
        "Membuat semua variabel statis otomatis menjadi thread-safe.",
        "Menghapus kebutuhan pembuatan instance class di memori heap.",
        "Hanya bisa digunakan pada antarmuka komunikasi Bluetooth."
      ],
      "answer": 0,
      "explanation": "Fitur ini memungkinkan penulisan algoritma generik terhadap operator numerik (`where T : INumber<T>`), menyatukan operasi penambahan/pengurangan lintas semua tipe numerik."
    }
  },
  {
    "id": 12,
    "slug": "csharp-lesson-12",
    "title": "12. RAII dan Penanganan Exception",
    "module": "Nilai, Referensi, dan Abstraksi Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII dan Penanganan Exception\n\n### Materi Inti:\n- Resource Acquisition Is Initialization sebagai pola utama ownership.\n- Stack unwinding dan destruction saat exception dilempar.\n- Menulis destructor yang tidak me-lempar exception.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII dan Penanganan Exception\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa batasan kritis dari tipe data `ref struct` di C#?",
      "options": [
        "Hanya boleh dialokasikan di call stack; tidak boleh di-box, tidak boleh menjadi field di class biasa, dan tidak boleh digunakan di dalam async method.",
        "Tidak boleh memiliki fungsi atau properti.",
        "Hanya bisa menampung maksimal 4 byte data.",
        "Tidak bisa dikompilasi pada sistem operasi Linux 64-bit."
      ],
      "answer": 0,
      "explanation": "Aturan ketat stack-only pada `ref struct` menjamin masa hidupnya tidak melampaui stack frame fungsi pemanggil, menjadi pondasi keamanan memori `Span<T>`."
    }
  },
  {
    "id": 13,
    "slug": "csharp-lesson-13",
    "title": "13. Constructor, Destructor, dan Initializer List",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor, Destructor, dan Initializer List\n\n### Materi Inti:\n- Default, parameterized, copy, dan destructor.\n- Initializer list untuk konstruk anggota.\n- Urutan construction dan destruction.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Constructor, Destructor, dan Initializer List\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara kerja sintaks *Collection Expressions* di C# 12 (misal: `int[] a = [1, 2, 3];`)?",
      "options": [
        "Menyediakan sintaks tanda kurung siku terpadu `[...]` yang bekerja seragam untuk array, `List<T>`, `Span<T>`, dan mendukung spread operator `[..items]`.",
        "Mengonversi semua data array menjadi file JSON secara otomatis.",
        "Membuat koleksi data otomatis terurut secara ascending di latar belakang.",
        "Hanya berlaku untuk koleksi bertipe data dynamic."
      ],
      "answer": 0,
      "explanation": "Collection expressions di C# 12 menyatukan cara penulisan koleksi yang sebelumnya terpecah-pecah, serta compiler mengoptimalkan alokasi memori secara otomatis."
    }
  },
  {
    "id": 14,
    "slug": "csharp-lesson-14",
    "title": "14. Copy Semantics dan Rule of Three/Five",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Semantics dan Rule of Three/Five\n\n### Materi Inti:\n- Copy constructor, copy assignment, dan self-assignment.\n- Shallow copy versus deep copy.\n- Copy-and-swap serta kapan menerapkan rule of five.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Semantics dan Rule of Three/Five\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan penting antara keyword `yield return` dan mengembalikan `List<T>` biasa dalam fungsi?",
      "options": [
        "`yield return` menghasilkan data secara *lazy* (satu per satu saat konsumen meminta elemen), sedangkan list mengalokasikan dan mengisi seluruh data di muka (*eager*).",
        "`yield return` menghapus data dari RAM segera setelah dibaca.",
        "`yield return` hanya bisa digunakan untuk koleksi berisi kurang dari 10 elemen.",
        "`yield return` otomatis mengeksekusi query database di thread lain."
      ],
      "answer": 0,
      "explanation": "State machine compiler mengubah fungsi `yield return` menjadi enumerator on-demand, menghemat alokasi memori drastis saat streaming dataset berukuran gigabyte."
    }
  },
  {
    "id": 15,
    "slug": "csharp-lesson-15",
    "title": "15. Operator Overloading",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Overloading\n\n### Materi Inti:\n- Operator arithmetic, comparison, assignment, dan stream.\n- Member operator versus non-member/friend operator.\n- Implicit conversion dan bahaya operator yang mengejutkan.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Operator Overloading\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa makna constraint generik `where T : class, new()` pada definisi kelas C#?",
      "options": [
        "Tipe `T` harus berupa reference type (class) dan wajib memiliki parameterless constructor publik.",
        "Tipe `T` harus berupa value type struct yang tidak boleh kosong.",
        "Tipe `T` harus mewarisi interface IDisposable.",
        "Tipe `T` hanya boleh digunakan dalam proyek web minimal API."
      ],
      "answer": 0,
      "explanation": "Constraint generik memvalidasi tipe argumen saat kompilasi dan mengizinkan pemanggilan `new T()` di dalam tubuh class generik secara aman."
    }
  },
  {
    "id": 16,
    "slug": "csharp-lesson-16",
    "title": "16. Inheritance dan Virtual Dispatch",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance dan Virtual Dispatch\n\n### Materi Inti:\n- Base/derived relationship dan is-a semantics.\n- Virtual function, override, dan dynamic dispatch.\n- Virtual destructor pada base polymorphic.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Inheritance dan Virtual Dispatch\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Koleksi konkuren manakah yang paling tepat digunakan untuk skenario antrean multi-thread Producer-Consumer berkecepatan tinggi?",
      "options": [
        "`System.Collections.Concurrent.BlockingCollection<T>` atau `Channel<T>`",
        "`System.Collections.ArrayList` klasik.",
        "`System.Collections.Generic.List<T>` biasa tanpa lock.",
        "`System.Array`"
      ],
      "answer": 0,
      "explanation": "`Channel<T>` dan `BlockingCollection<T>` dirancang khusus untuk koordinasi producer-consumer thread-safe tanpa overhead locking manual yang rawan deadlock."
    }
  },
  {
    "id": 17,
    "slug": "csharp-lesson-17",
    "title": "17. Interface Abstrak dan Polymorphic Design",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface Abstrak dan Polymorphic Design\n\n### Materi Inti:\n- Pure virtual function dan abstract class.\n- Interface sebagai kontrak, bukan implementasi yang bocor.\n- Polymorphic destruction dan prinsip substitusi.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Interface Abstrak dan Polymorphic Design\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam Generics, apa peran keyword `in` (Contravariance) pada interface `IReceiver<in T>`?",
      "options": [
        "Mengizinkan parameter tipe digunakan sebagai argumen input fungsi dan mendukung penugasan tipe yang lebih umum (misal: `IReceiver<object>` ke `IReceiver<string>`).",
        "Mencegah interface diwarisi oleh kelas lain.",
        "Memaksa tipe data hanya boleh berupa integer.",
        "Menghapus validasi type safety saat runtime."
      ],
      "answer": 0,
      "explanation": "Kontravariansi (`in`) membalik relasi subtyping generik untuk tipe data yang dikonsumsi, berlawanan dengan kovariansi (`out`) yang menghasilkan data."
    }
  },
  {
    "id": 18,
    "slug": "csharp-lesson-18",
    "title": "18. Composition, Policy, dan CRTP",
    "module": "Object-Oriented C# dan Polymorphism",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Composition, Policy, dan CRTP\n\n### Materi Inti:\n- Composition over inheritance dan dependency injection.\n- Policy-based design untuk memilih perilaku compile-time.\n- CRTP sebagai static polymorphism.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"Composition, Policy, dan CRTP\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa `Dictionary<TKey, TValue>` membutuhkan implementasi `GetHashCode()` dan `Equals()` yang konsisten pada key kustom?",
      "options": [
        "Untuk menentukan bucket array penyimpanan hash dan memverifikasi kesetaraan nilai saat terjadi tabrakan hash (hash collision).",
        "Untuk mengurutkan key secara alfabetis di layar terminal.",
        "Agar data dictionary dapat dikompresi oleh IIS web server.",
        "Karena tanpa metode tersebut memory RAM akan bocor seketika."
      ],
      "answer": 0,
      "explanation": "Jika dua objek sama menurut `Equals()`, keduanya wajib menghasilkan `GetHashCode()` yang identik; ketidakkonsistenan akan membuat dictionary gagal menemukan key yang tersimpan."
    }
  },
  {
    "id": 19,
    "slug": "csharp-lesson-19",
    "title": "19. Function Templates dan Template Deduction",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Templates dan Template Deduction\n\n### Materi Inti:\n- Template parameter, deduction, dan explicit template arguments.\n- Overload resolution antara template dan non-template.\n- Pembatasan interface melalui requiremen operasi.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Function Templates dan Template Deduction\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang dimaksud dengan *Deferred Execution* (eksekusi tertunda) pada query LINQ?",
      "options": [
        "Query LINQ tidak dieksekusi saat dideklarasikan, melainkan baru dievaluasi saat data diiterasi (misal via `foreach`, `.ToList()`, atau `.Count()`).",
        "Eksekusi query ditunda selama 5 detik oleh runtime .NET.",
        "Query dikirim ke server cloud untuk diproses di latar belakang.",
        "Query hanya berjalan saat memori RAM komputer di bawah 50%."
      ],
      "answer": 0,
      "explanation": "Deferred execution memungkinkan komposisi rantai query yang fleksibel dan modular; data hanya dihitung pada saat konsumen benar-benar mulai membaca hasilnya."
    }
  },
  {
    "id": 20,
    "slug": "csharp-lesson-20",
    "title": "20. Class Templates dan Instantiation",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Class Templates dan Instantiation\n\n### Materi Inti:\n- Class template, member definition, dan header placement.\n- Explicit instantiation versus implicit instantiation.\n- Contoh `Box<T>`, `Stack<T>`, dan `Optional<T>`.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Class Templates dan Instantiation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa bahaya laten dari *Multiple Enumeration* pada variabel `IEnumerable<T>` hasil query LINQ?",
      "options": [
        "Dapat memicu eksekusi ulang operasi komputasi berat atau pengiriman query berulang kali ke database setiap kali variabel tersebut di-enumerate.",
        "Menyebabkan bluescreen pada sistem operasi Windows Server.",
        "Menghapus data di dalam database secara tidak sengaja.",
        "Membuat kode tidak bisa dikompilasi oleh Roslyn compiler."
      ],
      "answer": 0,
      "explanation": "Jika `IEnumerable` bersumber dari I/O atau query database, mengiterasinya lebih dari sekali akan menduplikasi beban I/O. Solusinya adalah memanggil `.ToList()` jika ingin di-cache."
    }
  },
  {
    "id": 21,
    "slug": "csharp-lesson-21",
    "title": "21. Partial Specialization, Full Specialization, dan Traits",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial Specialization, Full Specialization, dan Traits\n\n### Materi Inti:\n- Partial specialization untuk keluarga tipe.\n- Full specialization untuk kasus sangat khusus.\n- Trait pattern dan `std::enable_if`.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"Partial Specialization, Full Specialization, dan Traits\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan arsitektur mendasar antara `IEnumerable<T>` dan `IQueryable<T>` dalam eksekusi LINQ?",
      "options": [
        "`IEnumerable` mengevaluasi logika filter di memori aplikasi klien (in-memory LINQ to Objects), sedangkan `IQueryable` menerjemahkan Expression Tree menjadi dialek query native (SQL) di server database.",
        "`IQueryable` hanya bekerja pada file Excel lokal.",
        "`IEnumerable` tidak mendukung metode `.Where()` dan `.Select()`.",
        "Keduanya identik dan hanya berbeda nama namespace."
      ],
      "answer": 0,
      "explanation": "`IQueryable` membawa struktur AST Expression Tree ke database provider (seperti EF Core), sehingga filter `Where` dieksekusi efisien di level mesin database SQL."
    }
  },
  {
    "id": 22,
    "slug": "csharp-lesson-22",
    "title": "22. Variadic Templates dan Fold Expression",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Variadic Templates dan Fold Expression\n\n### Materi Inti:\n- Parameter pack, pack expansion, dan recursion.\n- Fold expression untuk sum, product, dan logical operations.\n- Penggunaan `std::tuple` dan argument forwarding.",
    "code": "// C# C#11/C#17\n#include <iostream>\n\nint main() {\n    std::cout << \"Variadic Templates dan Fold Expression\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan metode agregasi `.SelectMany()` digunakan dalam query LINQ?",
      "options": [
        "Saat ingin meratakan (flatten) kumpulan sub-koleksi bersarang dari setiap elemen menjadi satu sequence output tunggal linier.",
        "Saat ingin memilih kolom database dengan tipe data ganda.",
        "Saat ingin menggabungkan dua tabel SQL dengan relasi Full Outer Join.",
        "Saat ingin memilih hanya elemen yang bernilai unik."
      ],
      "answer": 0,
      "explanation": "Misalnya memiliki daftar `Order` yang masing-masing punya `Items`; `.SelectMany(o => o.Items)` menghasilkan daftar semua item dari seluruh order dalam satu stream."
    }
  },
  {
    "id": 23,
    "slug": "csharp-lesson-23",
    "title": "23. Compile-Time Programming dengan `constexpr` dan `consteval`",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Compile-Time Programming dengan `constexpr` dan `consteval`\n\n### Materi Inti:\n- `constexpr` function, literal type, dan compile-time evaluation.\n- `consteval` untuk强制 calculated at compile-time.\n- `if constexpr` untuk memilih code berdasarkan tipe.",
    "code": "// C# C#14/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Compile-Time Programming dengan `constexpr` dan `consteval`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Manakah metode LINQ yang paling efisien untuk mengecek apakah setidaknya ada satu elemen yang memenuhi syarat tanpa menghitung seluruh total data?",
      "options": [
        "`.Any(predicate)`",
        "`.Count(predicate) > 0`",
        "`.Where(predicate).ToList().Count > 0`",
        "`.All(predicate)`"
      ],
      "answer": 0,
      "explanation": "`.Any()` langsung berhenti (short-circuit) begitu menemukan elemen pertama yang cocok, sedangkan `.Count()` terpaksa menghitung dan mengiterasi seluruh elemen hingga akhir."
    }
  },
  {
    "id": 24,
    "slug": "csharp-lesson-24",
    "title": "24. SFINAE, `requires`, dan Early Constraint",
    "module": "Template dan Generic Programming",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# SFINAE, `requires`, dan Early Constraint\n\n### Materi Inti:\n- Substitution failure dan SFINAE.\n- `requires` expression dan constrained template.\n- Overload resolution serta diagnostic yang lebih jelas.",
    "code": "// C# C#11/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"SFINAE, `requires`, dan Early Constraint\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara membedakan operasi `.First()` dan `.FirstOrDefault()` saat elemen yang dicari tidak ditemukan?",
      "options": [
        "`.First()` melempar `InvalidOperationException`, sedangkan `.FirstOrDefault()` mengembalikan nilai default tipe data (misal `null` untuk reference type atau `0` untuk int).",
        "`.FirstOrDefault()` selalu melempar null pointer exception.",
        "`.First()` otomatis membuat data baru di database jika tidak ada.",
        "Tidak ada perbedaan perilaku di .NET 8."
      ],
      "answer": 0,
      "explanation": "`FirstOrDefault` aman digunakan ketika data opsional; di .NET 6+ juga mendukung default kustom via parameter overload `FirstOrDefault(predicate, defaultValue)`."
    }
  },
  {
    "id": 25,
    "slug": "csharp-lesson-25",
    "title": "25. Ownership Model dan Raw Memory",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ownership Model dan Raw Memory\n\n### Materi Inti:\n- Stack ownership versus heap ownership.\n- `new`, `new[]`, `delete`, dan `delete[]`.\n- Double free, leak, mismatched deallocation, dan undefined behavior.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Ownership Model dan Raw Memory\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa yang sebenarnya terjadi di balik layar saat thread mencapai keyword `await` pada async method di C#?",
      "options": [
        "Thread saat ini dibebaskan kembali ke thread pool; compiler membangkitkan State Machine yang menjadwalkan kelanjutan eksekusi method saat Task selesai.",
        "Thread diblokir secara pasif (Thread.Sleep) hingga Task selesai merespons.",
        "Aplikasi membuat proses OS baru untuk menjalankan sisa kode.",
        "Metode langsung dibatalkan jika melebihi waktu 100 milidetik."
      ],
      "answer": 0,
      "explanation": "`await` bersifat non-blocking murni; thread tidak menganggur menunggu I/O, melainkan bebas melayani request HTTP lain, memaksimalkan skalabilitas server."
    }
  },
  {
    "id": 26,
    "slug": "csharp-lesson-26",
    "title": "26. `std::unique_ptr` dan Exclusive Ownership",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::unique_ptr` dan Exclusive Ownership\n\n### Materi Inti:\n- Exclusive ownership dan move-only semantics.\n- Factory function seperti `std::make_unique`.\n- Custom deleter, array support, `reset`, dan `release`.",
    "code": "// C# C#11/C#14\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::unique_ptr` dan Exclusive Ownership\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan penggunaan `ValueTask<T>` lebih dianjurkan daripada `Task<T>` standar?",
      "options": [
        "Pada operasi method berfrekuensi tinggi (high-throughput) yang sebagian besar pemanggilannya selesai secara sinkron (misal membaca data dari buffer/cache memori).",
        "Hanya saat mengakses file di hard disk mekanik.",
        "Ketika operasi async membutuhkan waktu lebih dari 1 jam untuk selesai.",
        "Sebagai pengganti seluruh void return type."
      ],
      "answer": 0,
      "explanation": "`ValueTask<T>` adalah struct yang mengeliminasi alokasi objek heap `Task` jika hasilnya sudah tersedia secara instan (cache-hit), menghemat GC pressure secara masif."
    }
  },
  {
    "id": 27,
    "slug": "csharp-lesson-27",
    "title": "27. `std::shared_ptr` dan `std::weak_ptr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::shared_ptr` dan `std::weak_ptr`\n\n### Materi Inti:\n- Shared ownership, control block, dan reference count.\n- `weak_ptr` untuk optional non-owning reference.\n- Cycle ownership dan penggunaan `lock()`.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::shared_ptr` dan `std::weak_ptr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa bahaya memanggil properti `.Result` atau method `.Wait()` pada `Task` di lingkungan sinkron?",
      "options": [
        "Dapat memicu *Deadlock* (terutama di thread dengan SynchronizationContext seperti GUI/legacy ASP.NET) dan menyamarkan exception ke dalam `AggregateException`.",
        "Menghapus hasil kembalian dari memori RAM sebelum dibaca.",
        "Mematikan koneksi internet socket secara paksa.",
        "Otomatis me-restart server cloud Azure."
      ],
      "answer": 0,
      "explanation": "Pola 'sync-over-async' memblokir thread yang seharusnya digunakan untuk memproses completion callback, penyebab nomor satu hang aplikasi enterprise."
    }
  },
  {
    "id": 28,
    "slug": "csharp-lesson-28",
    "title": "28. Allocator-Aware Container dan `pmr`",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Allocator-Aware Container dan `pmr`\n\n### Materi Inti:\n- Allocator-aware container dan custom allocator.\n- `std::pmr::monotonic_buffer_resource` serta pool lifetime.\n- Allocation failure, pool boundary, dan cache locality.",
    "code": "// C# C#17\n#include <iostream>\n\nint main() {\n    std::cout << \"Allocator-Aware Container dan `pmr`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara mengimplementasikan pembatalan operasi asinkron yang benar menggunakan `CancellationToken`?",
      "options": [
        "Meneruskan token ke API asinkron internal dan memanggil `cancellationToken.ThrowIfCancellationRequested()` di dalam loop pemrosesan.",
        "Menghentikan thread secara paksa dengan `Thread.Abort()`.",
        "Mengubah nilai boolean global menjadi false di kelas singleton.",
        "Menghapus token dari memori heap."
      ],
      "answer": 0,
      "explanation": "Pembatalan di .NET bersifat kooperatif; konsumen mengirim sinyal via `CancellationTokenSource.Cancel()`, dan penerima merespons dengan membatalkan task via exception `OperationCanceledException`."
    }
  },
  {
    "id": 29,
    "slug": "csharp-lesson-29",
    "title": "29. RAII Wrapper dan Safe Resource Patterns",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# RAII Wrapper dan Safe Resource Patterns\n\n### Materi Inti:\n- Wrapper untuk file, socket, mutex, dan heap resource.\n- `lock_guard` versus `unique_lock`.\n- Scope guard untuk cleanup lintas jalur exception.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"RAII Wrapper dan Safe Resource Patterns\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan menggunakan `IAsyncEnumerable<T>` yang diperkenalkan di C# 8 / .NET Core 3?",
      "options": [
        "Memungkinkan streaming data asinkron berbasis `await foreach`, di mana setiap elemen di-fetch secara non-blocking satu per satu saat siap.",
        "Membuat query SQL otomatis berjalan 2 kali lebih cepat.",
        "Menyimpan data streaming ke dalam file zip terenkripsi.",
        "Hanya bisa digunakan pada arsitektur WebSockets."
      ],
      "answer": 0,
      "explanation": "`IAsyncEnumerable<T>` menyatukan konsep async dan iterator, sangat ideal untuk streaming data realtime dari database (gRPC, SSE, atau chunked HTTP API)."
    }
  },
  {
    "id": 30,
    "slug": "csharp-lesson-30",
    "title": "30. Mendeteksi Memory Bug dengan Sanitizer",
    "module": "Ownership, Smart Pointer, dan Memory Management",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mendeteksi Memory Bug dengan Sanitizer\n\n### Materi Inti:\n- AddressSanitizer, UndefinedBehaviorSanitizer, dan Valgrind.\n- Dangling reference, use-after-free, overflow, dan out-of-bounds.\n- Menjalankan sanitizer di native dan WebAssembly.",
    "code": "// C# C#11/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Mendeteksi Memory Bug dengan Sanitizer\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan menyematkan `.ConfigureAwait(false)` pada pemanggilan Task di library atau backend code?",
      "options": [
        "Mencegah kelanjutan eksekusi (continuation) dipaksa kembali ke SynchronizationContext awal, mengurangi context-switch overhead dan mencegah potensi deadlock.",
        "Menghapus token autentikasi pengguna dari thread request.",
        "Memaksa task berjalan di browser WebAssembly.",
        "Menonaktifkan logging error pada library."
      ],
      "answer": 0,
      "explanation": "Pada backend services dan class libraries yang tidak membutuhkan sinkronisasi thread UI, `ConfigureAwait(false)` meningkatkan throughput dan keandalan threading."
    }
  },
  {
    "id": 31,
    "slug": "csharp-lesson-31",
    "title": "31. Value Category: Lvalue, Xvalue, dan Prvalue",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Value Category: Lvalue, Xvalue, dan Prvalue\n\n### Materi Inti:\n- Lvalue, xvalue, prvalue, dan named rvalue reference.\n- `std::move` sebagai cast eksplisit.\n- Decay type dan array-to-pointer decay.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Value Category: Lvalue, Xvalue, dan Prvalue\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana siklus Generasi (Gen 0, Gen 1, Gen 2) pada .NET Garbage Collector bekerja?",
      "options": [
        "Objek baru dialokasikan di Gen 0 (ephemeral); objek yang bertahan hidup dari siklus sweep GC dipromosikan ke Gen 1 dan akhirnya Gen 2 untuk objek berumur panjang.",
        "Gen 0 disimpan di flash disk, Gen 1 di RAM, dan Gen 2 di server cloud.",
        "Semua objek langsung dialokasikan di Gen 2 secara acak.",
        "Garbage Collector hanya membersihkan Gen 2 saat server dimatikan."
      ],
      "answer": 0,
      "explanation": "Generational GC berlandaskan fakta empiris bahwa mayoritas objek berumur sangat pendek; membersihkan Gen 0 sangat cepat (<1ms) tanpa perlu menyisir seluruh heap memori."
    }
  },
  {
    "id": 32,
    "slug": "csharp-lesson-32",
    "title": "32. Move Constructor dan Move Assignment",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Move Constructor dan Move Assignment\n\n### Materi Inti:\n- Move operation untuk mengambil resource.\n- Source harus berada dalam valid tetapi unspecified state.\n- Move constructor idealnya `noexcept` agar container dapat memindahkan.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Move Constructor dan Move Assignment\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa kriteria sebuah objek dialokasikan di *Large Object Heap (LOH)* di .NET?",
      "options": [
        "Objek berukuran 85.000 byte (sekitar 85 KB) atau lebih, diperlakukan khusus dan tidak dipadatkan secara default untuk menghindari biaya relokasi data besar.",
        "Objek yang memiliki lebih dari 1.000 method di dalam kelasnya.",
        "Semua objek bertipe string apa pun ukurannya.",
        "Objek yang dialokasikan oleh background worker."
      ],
      "answer": 0,
      "explanation": "LOH dikhususkan untuk array dan buffer data raksasa; di .NET modern, LOH dapat dipadatkan secara selektif atau dialokasikan di POH (Pinned Object Heap)."
    }
  },
  {
    "id": 33,
    "slug": "csharp-lesson-33",
    "title": "33. Perfect Forwarding",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perfect Forwarding\n\n### Materi Inti:\n- Forwarding reference dan `auto&&`.\n- `std::forward<T>` untuk mempertahankan value category.\n- Argument unwrapping dengan `std::unwrap_reference`.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Perfect Forwarding\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa mengimplementasikan interface `IDisposable` dengan statement `using` sangat esensial untuk resource unmanaged?",
      "options": [
        "Menjamin pelepasan resource tak terkelola (file handle, socket koneksi, pointer OS) segera setelah selesai digunakan, tanpa menunggu siklus Garbage Collection.",
        "Mengubah memori unmanaged menjadi memori managed secara otomatis.",
        "Mencegah class diwarisi oleh class turunan lain.",
        "Membuat query database di dalam class otomatis commit."
      ],
      "answer": 0,
      "explanation": "Statement `using` meng-generate blok `try-finally` secara otomatis, memastikan metode `.Dispose()` terpanggil bahkan jika terjadi exception di tengah eksekusi."
    }
  },
  {
    "id": 34,
    "slug": "csharp-lesson-34",
    "title": "34. Copy Elision, NRVO, dan Guaranteed Move",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Copy Elision, NRVO, dan Guaranteed Move\n\n### Materi Inti:\n- Copy elision dan Named Return Value Optimization.\n- Prvalue construction langsung ke result object.\n- `std::move` yang tidak perlu dapat menghambat copy elision.",
    "code": "// C# C#17\n#include <iostream>\n\nint main() {\n    std::cout << \"Copy Elision, NRVO, dan Guaranteed Move\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi dari `ArrayPool<T>.Shared` dalam aplikasi berkinerja tinggi?",
      "options": [
        "Menyediakan mekanisme penyewaan (*rent*) dan pengembalian (*return*) buffer array memori yang dapat digunakan kembali, memotong alokasi heap dan GC pause hingga 0%.",
        "Menghapus batas ukuran array di sistem 32-bit.",
        "Membagikan data array ke seluruh komputer lain di jaringan LAN.",
        "Mengenkripsi isi array secara real-time di memori RAM."
      ],
      "answer": 0,
      "explanation": "Alih-alih mengalokasikan byte array baru di setiap request web lalu membuangnya ke GC, `ArrayPool` mendaur ulang array yang sudah ada layaknya connection pool."
    }
  },
  {
    "id": 35,
    "slug": "csharp-lesson-35",
    "title": "35. STL Container dan Allocation Strategy",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# STL Container dan Allocation Strategy\n\n### Materi Inti:\n- Tradeoff vector, deque, list, map, set, dan unordered_map.\n- Iterator invalidation, reserve, resize, dan shrink-to-fit.\n- Copy versus move behavior pada container.",
    "code": "// C# C#11/C#17\n#include <iostream>\n\nint main() {\n    std::cout << \"STL Container dan Allocation Strategy\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa pustaka *BenchmarkDotNet* menjadi standar de facto untuk micro-benchmarking kode C#?",
      "options": [
        "Menangani otomatis warmup phase, isolasi proses, mitigasi JIT inlining artifacts, pengukuran alokasi memori GC, dan analisis statistik ilmiah.",
        "Menggantikan stopwatch manual dengan animasi antarmuka grafis 3D.",
        "Secara otomatis menulis ulang kode yang lambat menjadi cepat.",
        "Hanya bisa dijalankan pada mesin server superkomputer."
      ],
      "answer": 0,
      "explanation": "Pengukuran performa akurat di runtime modern sangat kompleks karena JIT tiering dan OS noise; BenchmarkDotNet mengotomatisasi metodologi benchmarking kelas dunia."
    }
  },
  {
    "id": 36,
    "slug": "csharp-lesson-36",
    "title": "36. In-Place Construction dengan `emplace`, `optional`, dan `variant`",
    "module": "Move Semantics, STL, dan In-Place Construction",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# In-Place Construction dengan `emplace`, `optional`, dan `variant`\n\n### Materi Inti:\n- `emplace_back` dan konstruksi langsung di dalam container.\n- `std::optional<T>::emplace` untuk optional move-only value.\n- `std::variant` dan pemilihan alternative secara eksplisit.",
    "code": "// C# C#17/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"In-Place Construction dengan `emplace`, `optional`, dan `variant`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan modifier `unsafe` dan manipulasi pointer langsung diperbolehkan di C#?",
      "options": [
        "Saat melakukan interop native (P/Invoke) berkecepatan tinggi atau komputasi grafis intensif di mana pemeriksaan boundary check runtime perlu di-bypass.",
        "Di setiap baris kode backend untuk meningkatkan kecepatan internet.",
        "Hanya diizinkan di sistem operasi DOS kuno.",
        "Saat membuat antarmuka halaman web ASP.NET."
      ],
      "answer": 0,
      "explanation": "Blok `unsafe` mengizinkan pointer arithmetic (`*`, `&`, `->`) langsung ke alamat memori fisik, memerlukan flag kompilasi khusus dan kehati-hatian penuh dari developer."
    }
  },
  {
    "id": 37,
    "slug": "csharp-lesson-37",
    "title": "37. Iterator dan Standard Algorithms",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterator dan Standard Algorithms\n\n### Materi Inti:\n- Iterator categories dan range begin/end.\n- `find`, `sort`, `count`, `transform`, dan algorithm contracts.\n- Lambda expression untuk operasi lokal.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Iterator dan Standard Algorithms\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan arsitektur *Minimal APIs* dibanding arsitektur Controller klasik di ASP.NET Core 8?",
      "options": [
        "Mengurangi boilerplate file secara drastis dengan route handler berbasis lambda, cold start lebih cepat, memory footprint rendah, dan throughput performa lebih tinggi.",
        "Minimal APIs tidak mendukung autentikasi dan middleware.",
        "Minimal APIs hanya bisa mengembalikan response berformat teks biasa (tanpa JSON).",
        "Hanya dapat digunakan untuk aplikasi console tanpa koneksi HTTP."
      ],
      "answer": 0,
      "explanation": "Minimal APIs memanfaatkan Source Generators dan ekspresi lambda langsung, memotong overhead refleksi MVC controller dan ideal untuk arsitektur microservices modern."
    }
  },
  {
    "id": 38,
    "slug": "csharp-lesson-38",
    "title": "38. Ranges Views: Lazy dan Non-Owning",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Ranges Views: Lazy dan Non-Owning\n\n### Materi Inti:\n- `views::filter`, `transform`, `take`, dan `drop`.\n- View versus owning range.\n- Lazy evaluation dan lifetime adaptor.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Ranges Views: Lazy dan Non-Owning\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana perbedaan masa hidup (lifetime) service *Scoped* dan *Transient* di container Dependency Injection ASP.NET Core?",
      "options": [
        "*Transient* membuat instance baru setiap kali service di-resolve, sedangkan *Scoped* membuat satu instance tunggal yang dipakai bersama selama satu siklus request HTTP.",
        "*Scoped* hidup selamanya selama aplikasi menyala (Singleton).",
        "*Transient* hanya boleh digunakan untuk service koneksi database.",
        "Keduanya memiliki perilaku yang sama persis tanpa perbedaan."
      ],
      "answer": 0,
      "explanation": "Layanan per-request (seperti `DbContext` Entity Framework) wajib didaftarkan sebagai `Scoped` agar transaksi dan state entity konsisten dalam satu HTTP request."
    }
  },
  {
    "id": 39,
    "slug": "csharp-lesson-39",
    "title": "39. Range Algorithms dan Range Concepts",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Range Algorithms dan Range Concepts\n\n### Materi Inti:\n- `std::ranges::sort`, `find`, dan `for_each`.\n- Input, output, forward, sortable, dan mutable range requirements.\n- Mengurangi manual iterator arithmetic.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Range Algorithms dan Range Concepts\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa risiko fatal dari anti-pattern *Captive Dependency* pada konfigurasi DI container?",
      "options": [
        "Service berumur panjang (misal Singleton) menampung dependensi service berumur pendek (misal Scoped), menahan service scoped tersebut tidak pernah terbuang dan memicu bug state/leak.",
        "Membuat server database SQL crash seketika.",
        "Mencegah proyek dikompilasi oleh compiler.",
        "Menggandakan jumlah memori CPU dua kali lipat."
      ],
      "answer": 0,
      "explanation": "Jika Singleton menahan Scoped service (seperti DbContext), koneksi database akan ditahan selamanya melintasi banyak user request berbeda, menimbulkan race condition data parah."
    }
  },
  {
    "id": 40,
    "slug": "csharp-lesson-40",
    "title": "40. Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\n\n### Materi Inti:\n- `views::zip` untuk beberapa range paralel.\n- `views::chunk`, `slide`, dan `enumerate`.\n- Tuple-like elements, overflow behavior, dan lifetime.",
    "code": "// C# C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Mengomposisikan Ranges: `zip`, `chunk`, `slide`, dan `enumerate`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana alur eksekusi *Middleware Pipeline* di ASP.NET Core?",
      "options": [
        "Request melewati setiap middleware secara berurutan dalam pipa dua arah; middleware dapat memproses sebelum delegasi `next()`, dan memproses kembali response setelahnya.",
        "Middleware dieksekusi secara acak tanpa aturan urutan registrasi.",
        "Hanya middleware terakhir yang memiliki akses membaca header request.",
        "Middleware hanya berjalan saat aplikasi menerima error HTTP 500."
      ],
      "answer": 0,
      "explanation": "Arsitektur pipa (Russian-doll model) memungkinkan middleware menangani cross-cutting concerns (autentikasi, CORS, logging, exception handler) secara modular."
    }
  },
  {
    "id": 41,
    "slug": "csharp-lesson-41",
    "title": "41. Error Value dengan `std::expected` dan `std::optional`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Error Value dengan `std::expected` dan `std::optional`\n\n### Materi Inti:\n- `optional<T>` untuk absence tanpa error detail.\n- `expected<T,E>` untuk success atau error terstruktur.\n- Composing operations dengan `and_then`, `transform`, dan `or_else`.",
    "code": "// C# C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Error Value dengan `std::expected` dan `std::optional`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara memvalidasi request DTO secara elegan menggunakan library *FluentValidation* di ASP.NET Core?",
      "options": [
        "Mendefinisikan aturan validasi di class terpisah yang mewarisi `AbstractValidator<T>`, memisahkan aturan validasi bersih dari model data domain.",
        "Menulis puluhan if-else di dalam database SQL trigger.",
        "Memvalidasi data di browser klien saja tanpa validasi di server backend.",
        "Menggunakan regex manual di setiap route endpoint handler."
      ],
      "answer": 0,
      "explanation": "FluentValidation menyediakan DSL fluent yang ekspresif, mudah di-unit test, dan terintegrasi mulus dengan filter validasi endpoint ASP.NET Core."
    }
  },
  {
    "id": 42,
    "slug": "csharp-lesson-42",
    "title": "42. API Modern C#20/23: Format, Print, Numbers, dan `mdspan`",
    "module": "Algoritma, Ranges, dan Modern Standard Library",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# API Modern C#20/23: Format, Print, Numbers, dan `mdspan`\n\n### Materi Inti:\n- `std::format`, `std::print`, dan feature-test macros.\n- `std::numbers` untuk konstanta numerik standar.\n- `std::mdspan` untuk multidimensional view tanpa ownership.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"API Modern C#20/23: Format, Print, Numbers, dan `mdspan`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Status HTTP apa yang direkomendasikan RFC 7807 / 9457 untuk response error API terstruktur di ASP.NET Core 8?",
      "options": [
        "`ProblemDetails` payload dengan format standar (type, title, status, detail, instance).",
        "String kosong tanpa status code.",
        "Halaman HTML 404 Apache default.",
        "File XML dump memory."
      ],
      "answer": 0,
      "explanation": "ProblemDetails adalah standar IETF resmi untuk mengomunikasikan detail kesalahan mesin-ke-mesin di REST API modern, didukung native via `Results.Problem()`."
    }
  },
  {
    "id": 43,
    "slug": "csharp-lesson-43",
    "title": "43. Thread Dasar, Join, dan Detach",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Dasar, Join, dan Detach\n\n### Materi Inti:\n- Membuat, menjalankan, `join`, dan `detach` thread.\n- Lifetime thread dan bahaya detach tanpa koordinasi.\n- Data race versus race condition.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Dasar, Join, dan Detach\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan menggunakan opsi query `.AsNoTracking()` pada query pembacaan data di EF Core?",
      "options": [
        "Menginstruksikan Change Tracker untuk tidak memantau perubahan entity di memori, mempercepat eksekusi query drastis dan menghemat penggunaan RAM pada operasi read-only.",
        "Menghapus data hasil query dari tabel database secara permanen.",
        "Mencegah hacker melacak alamat IP query SQL.",
        "Menonaktifkan indeks primary key pada tabel database."
      ],
      "answer": 0,
      "explanation": "Change tracking membutuhkan alokasi snapshot memori dan overhead hashing; jika data hanya untuk dibaca (GET API), `AsNoTracking()` memotong beban memori secara masif."
    }
  },
  {
    "id": 44,
    "slug": "csharp-lesson-44",
    "title": "44. Mutex, `lock_guard`, dan Condition Variable",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mutex, `lock_guard`, dan Condition Variable\n\n### Materi Inti:\n- Critical section dan mutual exclusion.\n- RAII locking dengan `lock_guard` dan `unique_lock`.\n- Condition variable, predicate loop, notify-one/all.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"Mutex, `lock_guard`, dan Condition Variable\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa perbedaan mekanisme loading antara *Eager Loading* (`.Include()`) dan *Lazy Loading* di EF Core?",
      "options": [
        "Eager loading memuat entitas relasi di awal via SQL JOIN dalam satu kali query, sedangkan Lazy loading memuat relasi on-demand saat properti navigasi diakses (rawan masalah N+1).",
        "Lazy loading memuat seluruh database ke RAM saat server pertama kali start.",
        "Eager loading hanya bekerja pada database NoSQL CosmosDB.",
        "Keduanya mengirimkan jumlah query yang sama persis ke server database."
      ],
      "answer": 0,
      "explanation": "Lazy loading sering memicu masalah performa *N+1 Queries* di mana satu query utama diikuti oleh puluhan query tambahan di dalam loop; Eager loading mengeksekusi join di hulu."
    }
  },
  {
    "id": 45,
    "slug": "csharp-lesson-45",
    "title": "45. Atomic dan Memory Ordering",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Atomic dan Memory Ordering\n\n### Materi Inti:\n- Atomic load/store, fetch-add, compare-exchange.\n- Relaxed, acquire, release, dan sequential consistency.\n- Lock-free atomic dan tradeoff performance.",
    "code": "// C# C#11/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Atomic dan Memory Ordering\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana cara menangani *Concurrency Conflicts* berbasis Optimistic Concurrency di EF Core?",
      "options": [
        "Menambahkan kolom RowVersion / ConcurrencyCheck token; saat update, EF Core memverifikasi token belum berubah dan melempar `DbUpdateConcurrencyException` jika data telah ditimpa pihak lain.",
        "Mengunci seluruh server database selama 10 menit saat update berlangsung.",
        "Membiarkan transaksi terakhir menimpa data transaksi pertama tanpa peringatan.",
        "Menghapus tabel database dan membuat ulang baris baru."
      ],
      "answer": 0,
      "explanation": "Optimistic concurrency mengasumsikan tabrakan jarang terjadi; alih-alih locking berat di DB, sistem memvalidasi versi baris saat commit dan menangani kegagalan secara anggun di aplikasi."
    }
  },
  {
    "id": 46,
    "slug": "csharp-lesson-46",
    "title": "46. `std::async`, Future, dan Task",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# `std::async`, Future, dan Task\n\n### Materi Inti:\n- Launch policy dan asynchronous execution.\n- Future/get, exception propagation, dan timeout.\n- Lifetime task dan bahaya menunggu terlalu lama.",
    "code": "// C# C#11\n#include <iostream>\n\nint main() {\n    std::cout << \"`std::async`, Future, dan Task\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan metode eksekusi massal `.ExecuteUpdateAsync()` dan `.ExecuteDeleteAsync()` di EF Core 7/8?",
      "options": [
        "Mengeksekusi perintah UPDATE/DELETE langsung di server database SQL dalam satu query tanpa perlu me-load entitas ke memori aplikasi terlebih dahulu.",
        "Menghapus database secara instan tanpa validasi password.",
        "Mengubah query SQL menjadi prosedur JavaScript di browser.",
        "Hanya bisa dijalankan pada hari libur server."
      ],
      "answer": 0,
      "explanation": "Fitur bulk updates ini mengeliminasi kebutuhan me-load ratusan ribu baris ke Change Tracker hanya untuk mengubah satu kolom status, meningkatkan performa ribuan kali lipat."
    }
  },
  {
    "id": 47,
    "slug": "csharp-lesson-47",
    "title": "47. Thread Pool, Deadlock, dan Concurrency Pitfalls",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pool, Deadlock, dan Concurrency Pitfalls\n\n### Materi Inti:\n- Work queue, worker lifetime, dan task scheduling.\n- Deadlock, starvation, ABA, false sharing, dan lock ordering.\n- Desain bounded concurrency dan backpressure.",
    "code": "// C# C#11/C#17\n#include <iostream>\n\nint main() {\n    std::cout << \"Thread Pool, Deadlock, dan Concurrency Pitfalls\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi fitur *Shadow Properties* pada model Entity Framework Core?",
      "options": [
        "Properti yang didefinisikan dalam model metadata EF Core dan ada di tabel database, namun tidak dideklarasikan secara eksplisit di dalam class C#.",
        "Properti yang disembunyikan dari penglihatan administrator database.",
        "Properti yang nilainya dienkripsi dengan algoritma RSA publik-privat.",
        "Properti yang otomatis terhapus saat tengah malam."
      ],
      "answer": 0,
      "explanation": "Shadow properties sangat berguna untuk audit trail metadata (seperti `LastModified`, `CreatedBy`, `IsDeleted`) tanpa mengotori domain class entitas murni."
    }
  },
  {
    "id": 48,
    "slug": "csharp-lesson-48",
    "title": "48. Pengantar Coroutine: Suspension dan Resumption",
    "module": "Concurrency dan Parallelism",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengantar Coroutine: Suspension dan Resumption\n\n### Materi Inti:\n- Coroutine frame, promise object, dan awaiter.\n- `co_await`, `co_yield`, dan `co_return`.\n- Perbedaan blocking thread dengan cooperative suspension.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Pengantar Coroutine: Suspension dan Resumption\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Kapan perintah `dotnet ef migrations add` dan `dotnet ef database update` digunakan?",
      "options": [
        "Saat ada perubahan struktur class model C#, untuk menghasilkan file migrasi skema incremental dan menerapkannya secara terkelola ke skema database fisik.",
        "Hanya saat pertama kali menginstal software Visual Studio.",
        "Untuk memperbarui lisensi Windows Server di cloud.",
        "Untuk merestart server database MySQL."
      ],
      "answer": 0,
      "explanation": "Code-First Migrations melacak evolusi skema database dalam riwayat version control, memungkinkan rollback dan deployment skema yang aman di lingkungan production."
    }
  },
  {
    "id": 49,
    "slug": "csharp-lesson-49",
    "title": "49. Membangun Coroutine dari Komponen Dasar",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Membangun Coroutine dari Komponen Dasar\n\n### Materi Inti:\n- Promise methods: `return_value`, `yield_value`, `initial_suspend`, dan `final_suspend`.\n- Coroutine return object dan exception propagation.\n- Mengapa coroutine bukan thread.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Membangun Coroutine dari Komponen Dasar\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam prinsip SOLID, apa inti dari *Dependency Inversion Principle (DIP)*?",
      "options": [
        "Modul tingkat tinggi (domain business logic) tidak boleh bergantung pada modul tingkat rendah (infrastructure, DB, web framework); keduanya harus bergantung pada abstraksi interface.",
        "Membalik urutan pemanggilan method dari bawah ke atas.",
        "Menolak penggunaan class dan hanya menggunakan struct murni.",
        "Mengharuskan database diakses secara manual tanpa interface."
      ],
      "answer": 0,
      "explanation": "DIP membebaskan inti bisnis dari detail teknologi luar, sehingga penggantian database atau third-party vendor tidak akan mengubah satu baris pun logika domain inti."
    }
  },
  {
    "id": 50,
    "slug": "csharp-lesson-50",
    "title": "50. Async/Await dengan Executor dan Cancellation",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Async/Await dengan Executor dan Cancellation\n\n### Materi Inti:\n- Custom awaiter dan executor policy.\n- Exception propagation, timeout, dan cancellation token.\n- Composing async operations tanpa nested blocking.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Async/Await dengan Executor dan Cancellation\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa tujuan utama pemisahan perintah dan query dalam pola arsitektur *CQRS* (Command Query Responsibility Segregation)?",
      "options": [
        "Memisahkan model penulisan modifikasi data (*Commands*) dari model pembacaan data (*Queries*), memungkinkan optimasi performa dan skalabilitas independen di kedua sisi.",
        "Menolak penggunaan database relational dan menggantinya dengan file teks.",
        "Membagi tim developer menjadi dua kantor yang terpisah.",
        "Mengharuskan query dijalankan via browser dan command via command line."
      ],
      "answer": 0,
      "explanation": "Operasi read (baca) sering membutuhkan query denormalisasi yang cepat, sedangkan write (tulis) membutuhkan validasi bisnis dan transaksi yang ketat; CQRS mengoptimasi keduanya secara terpisah."
    }
  },
  {
    "id": 51,
    "slug": "csharp-lesson-51",
    "title": "51. Generator dengan `std::generator` C#23",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generator dengan `std::generator` C#23\n\n### Materi Inti:\n- `co_yield` sebagai lazy producer.\n- Backpressure, range protocol, dan lifetime iterator.\n- Menggabungkan generator dengan ranges.",
    "code": "// C# C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Generator dengan `std::generator` C#23\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam Domain-Driven Design (DDD), apa perbedaan antara *Entity* dan *Value Object*?",
      "options": [
        "Entity memiliki identitas unik (ID) yang persisten sepanjang waktu terlepas dari perubahan atributnya, sedangkan Value Object ditentukan murni oleh nilai atributnya dan bersifat immutable.",
        "Entity disimpan di cloud, Value Object di memori lokal.",
        "Value Object dapat diubah-ubah nilainya setiap saat tanpa aturan.",
        "Entity tidak boleh memiliki metode logika di dalamnya."
      ],
      "answer": 0,
      "explanation": "Contoh: `User` adalah Entity (memiliki UserId unik); `Money` (Amount, Currency) atau `Address` adalah Value Object (dua nilai Rp10.000 adalah identik dan dapat saling menggantikan)."
    }
  },
  {
    "id": 52,
    "slug": "csharp-lesson-52",
    "title": "52. Concepts dan Constrained Overload",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Concepts dan Constrained Overload\n\n### Materi Inti:\n- `requires` expression dan named concept.\n- Constraint satisfaction dan overload resolution.\n- Mengganti SFINAE noise dengan diagnostic yang jelas.",
    "code": "// C# C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Concepts dan Constrained Overload\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana library *MediatR* memfasilitasi implementasi pola Mediator di aplikasi .NET?",
      "options": [
        "Menghilangkan kopling langsung antar kelas dengan mengirimkan pesan (Request/Command/Notification) melalui satu mediator terpusat ke handler masing-masing.",
        "Menghubungkan aplikasi C# ke sistem operasi Android secara nirkabel.",
        "Secara otomatis menerjemahkan bahasa Inggris ke bahasa Indonesia.",
        "Menggantikan seluruh fungsi web server IIS."
      ],
      "answer": 0,
      "explanation": "MediatR memangkas dependensi langsung pada controller; controller cukup melempar `mediator.Send(new CreateOrderCommand())`, meningkatkan testability dan modularitas pipeline."
    }
  },
  {
    "id": 53,
    "slug": "csharp-lesson-53",
    "title": "53. Custom Range, `view`, dan `borrowed_range`",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Range, `view`, dan `borrowed_range`\n\n### Materi Inti:\n- Range requirements dan `range_reference_t`.\n- View, borrowed range, dan adaptor customization.\n- `views::as_const`, `cache_latest`, `chunk`, `slide`, dan `enumerate`.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Custom Range, `view`, dan `borrowed_range`\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam Event-Driven Architecture, apa peran *Outbox Pattern* dalam menjamin keandalan pengiriman pesan?",
      "options": [
        "Menyimpan event pesan ke dalam tabel database yang sama dengan data bisnis dalam satu transaksi database lokal sebelum dipublikasikan ke message broker (RabbitMQ/Kafka).",
        "Menghapus pesan email yang gagal terkirim ke pelanggan.",
        "Mengompresi data antrean menjadi file arsip zip.",
        "Mematikan broker pesan jika server kehabisan kuota."
      ],
      "answer": 0,
      "explanation": "Transactional Outbox Pattern menyelesaikan masalah dual-write; menjamin bahwa jika transaksi database berhasil commit, pesan integrasi pasti akan terkirim (At-Least-Once Delivery)."
    }
  },
  {
    "id": 54,
    "slug": "csharp-lesson-54",
    "title": "54. Modern Generic Design: Templates + Concepts + Ranges",
    "module": "Coroutine Lanjutan, Concepts, dan Ranges",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modern Generic Design: Templates + Concepts + Ranges\n\n### Materi Inti:\n- Menggabungkan constrained template, range algorithms, dan move-only values.\n- API generik dengan error type dan no unnecessary copy.\n- Menulis benchmark serta test matrix untuk beberapa tipe.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Modern Generic Design: Templates + Concepts + Ranges\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Mengapa *Repository Pattern* sering dikombinasikan dengan *Unit of Work Pattern*?",
      "options": [
        "Unit of Work mengoordinasikan pekerjaan beberapa repository berbeda dalam satu transaksi bisnis tunggal, memastikan integritas perubahan commit bersama.",
        "Untuk memperlambat akses query database.",
        "Karena Entity Framework melarang pemanggilan query secara langsung.",
        "Agar kode hanya bisa berjalan di satu core CPU saja."
      ],
      "answer": 0,
      "explanation": "Di .NET, `DbContext` bawaan EF Core sendiri sudah mengimplementasikan kombinasi Repository dan Unit of Work via `DbSet<T>` dan metode `.SaveChangesAsync()`."
    }
  },
  {
    "id": 55,
    "slug": "csharp-lesson-55",
    "title": "55. Migrasi ke C#23 Library",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Migrasi ke C#23 Library\n\n### Materi Inti:\n- `std::expected`, `std::print`, `std::source_location`, dan string `contains`.\n- `std::ranges::to`, `std::mdspan`, dan `std::generator`.\n- Feature-test macros dan strategi fallback compiler.",
    "code": "// C# C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Migrasi ke C#23 Library\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keunggulan class `WebApplicationFactory<TEntryPoint>` dalam integration testing ASP.NET Core?",
      "options": [
        "Mem-bootstrap seluruh aplikasi web lengkap dengan dependensi, middleware pipeline, dan test server in-memory, memungkinkan pengujian HTTP end-to-end tanpa membuka port jaringan nyata.",
        "Menguji kecepatan kipas pendingin hardware server.",
        "Secara otomatis membuat laporan keuangan perusahaan.",
        "Hanya bisa dijalankan pada browser Internet Explorer."
      ],
      "answer": 0,
      "explanation": "`WebApplicationFactory` menyediakan lingkungan pengetesan integrasi API yang sangat cepat, realistis, dan memungkinkan penggantian service database asli dengan container Testcontainers."
    }
  },
  {
    "id": 56,
    "slug": "csharp-lesson-56",
    "title": "56. Performance, Profiling, dan Optimization yang Terukur",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Performance, Profiling, dan Optimization yang Terukur\n\n### Materi Inti:\n- Big-O, cache locality, branch prediction, dan allocation cost.\n- Move semantics, emplace, reserve, dan avoiding unnecessary copy.\n- Benchmark, profiler, dan reproducibility.",
    "code": "// C# C#17/C#20\n#include <iostream>\n\nint main() {\n    std::cout << \"Performance, Profiling, dan Optimization yang Terukur\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa keuntungan utama menggunakan *Native AOT (Ahead-of-Time) Compilation* di .NET 8?",
      "options": [
        "Menghasilkan binary mesin mandiri tanpa dependensi runtime .NET terinstal, startup instan (<10ms), dan konsumsi memori RAM yang sangat kecil untuk serverless container.",
        "Membuat kode C# dapat berjalan di browser tanpa JavaScript.",
        "Menghapus kebutuhan pengujian unit test aplikasi.",
        "Otomatis mengoreksi bug logika secara runtime."
      ],
      "answer": 0,
      "explanation": "Native AOT mengompilasi kode C# langsung ke instruksi mesin x64/ARM64 saat build time, memotong kebutuhan JIT compiler dan sangat cocok untuk cold-start AWS Lambda atau Kubernetes pods."
    }
  },
  {
    "id": 57,
    "slug": "csharp-lesson-57",
    "title": "57. Reliabilitas, Security, dan Test Matrix",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Reliabilitas, Security, dan Test Matrix\n\n### Materi Inti:\n- Sanitizer, invariant test, property test, dan fuzzing ringan.\n- Input validation, ownership contract, dan secure defaults.\n- Testing pada edge case, malformed input, dan concurrent path.",
    "code": "// C# C#11–C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Reliabilitas, Security, dan Test Matrix\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Dalam standar OpenTelemetry, apa perbedaan antara *Traces*, *Metrics*, dan *Logs* (tiga pilar observability)?",
      "options": [
        "Logs adalah catatan teks peristiwa ber-timestamp; Metrics adalah agregasi data numerik terukur (seperti CPU usage/request rate); Traces melacak jalur permintaan end-to-end lintas service.",
        "Traces hanya untuk database SQL, Metrics untuk UI, Logs untuk error saja.",
        "Semuanya memiliki fungsi yang sama dan hanya berbeda nama vendor software.",
        "Metrics otomatis dihapus setiap kali aplikasi restart."
      ],
      "answer": 0,
      "explanation": "Tiga pilar ini saling melengkapi: Metrik mendeteksi adanya anomali sistem, Trace mengisolasi di service mana masalah terjadi, dan Log memberikan konteks detail penyebab insiden."
    }
  },
  {
    "id": 58,
    "slug": "csharp-lesson-58",
    "title": "58. Arsitektur, C#20 Modules, Build, dan CI",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Arsitektur, C#20 Modules, Build, dan CI\n\n### Materi Inti:\n- Layering, interface boundary, dependency inversion, dan module boundary.\n- CMake/compiler flags, WebAssembly build, dan browser execution.\n- CI untuk build, test, sanitizer, dan format/lint.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Arsitektur, C#20 Modules, Build, dan CI\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa manfaat menggunakan image container *Chiseled Ubuntu* untuk aplikasi .NET di Docker?",
      "options": [
        "Image container ultra-ramping tanpa shell bash, tanpa package manager, dan tanpa root user, memotong ukuran image hingga <50MB dan memaksimalkan keamanan enterprise.",
        "Memungkinkan container menjalankan sistem operasi Windows dan Linux bersamaan.",
        "Menggandakan kecepatan transfer kabel LAN data center.",
        "Menyimpan password root di dalam repositori publik."
      ],
      "answer": 0,
      "explanation": "Chiseled container mengurangi attack surface secara drastis karena penyerang tidak memiliki shell terminal atau utilitas OS untuk dieksploitasi jika aplikasi terkompromi."
    }
  },
  {
    "id": 59,
    "slug": "csharp-lesson-59",
    "title": "59. Capstone Design: Modern Data Pipeline",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Design: Modern Data Pipeline\n\n### Materi Inti:\n- Merancang domain type, ownership, error handling, dan API.\n- Memilih templates, concepts, ranges, smart pointer, dan coroutine secara tepat.\n- Menentukan acceptance criteria, benchmark, dan test cases.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Design: Modern Data Pipeline\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Apa fungsi pustaka *NSubstitute* atau *Moq* saat menulis unit test class service di C#?",
      "options": [
        "Membuat implementasi tiruan (mock/stub) dari interface dependensi secara dinamis dan memvalidasi apakah metode tertentu dipanggil dengan argumen yang benar.",
        "Menjalankan query SQL ke database production secara rahasia.",
        "Mempercepat kompilasi file C# menjadi file ZIP.",
        "Mengubah unit test menjadi antarmuka GUI."
      ],
      "answer": 0,
      "explanation": "Mocking memisahkan unit logika yang sedang diuji dari sistem eksternal, memastikan test berjalan deterministik, cepat, dan terisolasi dari kegagalan jaringan luar."
    }
  },
  {
    "id": 60,
    "slug": "csharp-lesson-60",
    "title": "60. Capstone Implementation, Demo, dan Refleksi",
    "module": "C#23, Performa, Reliabilitas, dan Capstone",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Capstone Implementation, Demo, dan Refleksi\n\n### Materi Inti:\n- Implementasi end-to-end di JupyterLite/WebAssembly.\n- Menjalankan unit test, sanitizer, dan benchmark.\n- Menjelaskan tradeoff, hasil, keterbatasan, dan langkah pengembangan.",
    "code": "// C# C#20/C#23\n#include <iostream>\n\nint main() {\n    std::cout << \"Capstone Implementation, Demo, dan Refleksi\" << std::endl;\n    return 0;\n}",
    "quiz": {
      "question": "Bagaimana endpoint `/health` (ASP.NET Core Health Checks) dimanfaatkan oleh Kubernetes orchestrator?",
      "options": [
        "Kubernetes memanggil liveness dan readiness probes secara berkala; jika endpoint gagal merespons sehat, pod akan di-restart atau dikeluarkan dari rotasi load balancer.",
        "Untuk mengunduh file update aplikasi secara otomatis dari internet.",
        "Untuk mengukur suhu baterai perangkat server.",
        "Untuk mencetak laporan gaji karyawan setiap bulan."
      ],
      "answer": 0,
      "explanation": "Health checks memantau kesiapan aplikasi dan dependensi eksternal (database, cache, broker), memastikan trafik pengguna tidak pernah diarahkan ke instans yang sedang bermasalah."
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
        localStorage.setItem('csharp_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('csharp_progress');
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
    try { localStorage.setItem('csharp_last_lesson', String(index)); } catch (e) {}
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
    const saved = localStorage.getItem('csharp_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}


document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('csharp_last_lesson') || '0', 10);
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
    out.innerHTML = '<span class="text-cyan-400"><i class="fa-solid fa-spinner fa-spin"></i> Menjalankan kode C#...</span>';
    
    // Attempt Judge0 or playground execution if applicable
    try {
        const langIds = { csharp: 54, rust: 73, go: 60 };
        const langId = langIds['csharp'] || 73;
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
        '// Eksekusi kode C# lokal (Simulasi):\n\n' + escapeHtml(code) +
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta C# Learning Path';
    
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
    ctx.fillText('C# Learning Path Standar Industri', canvas.width / 2, 400);
    
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/csharp/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-C#-Learning-Path.png';
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
