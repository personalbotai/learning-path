const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// Rust Learning Path — Core Application & Interactive Engine 🦀

const MODULES = [
  {
    "id": 1,
    "title": "Pengenalan & Dasar Rust",
    "desc": "Kurikulum komprehensif Modul 1 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Ownership & Borrowing System",
    "desc": "Kurikulum komprehensif Modul 2 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Structs, Enums, & Pattern Matching",
    "desc": "Kurikulum komprehensif Modul 3 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Collections & Error Handling",
    "desc": "Kurikulum komprehensif Modul 4 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Generics, Traits, & Lifetimes",
    "desc": "Kurikulum komprehensif Modul 5 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Functional Features & Smart Pointers",
    "desc": "Kurikulum komprehensif Modul 6 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Fearless Concurrency",
    "desc": "Kurikulum komprehensif Modul 7 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Async/Await & Ekosistem Tokio",
    "desc": "Kurikulum komprehensif Modul 8 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Advanced Rust (Macros, Unsafe, FFI)",
    "desc": "Kurikulum komprehensif Modul 9 Standar Industri.",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Ekosistem, Testing, & Capstone Project",
    "desc": "Kurikulum komprehensif Modul 10 Standar Industri.",
    "icon": "fa-solid fa-code"
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "M01-L01",
    "title": "Pengenalan Rust, Filosofi & Toolchain",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L01.md",
    "code": "// M01-L01 - Pengenalan Rust, Filosofi & Toolchain\nfn main() {\n    println!(\"=== Pengenalan Rust, Filosofi & Toolchain ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Pengenalan Rust, Filosofi & Toolchain?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 2,
    "slug": "M01-L02",
    "title": "Variabel, Mutability & Shadowing",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L02.md",
    "code": "// M01-L02 - Variabel, Mutability & Shadowing\nfn main() {\n    println!(\"=== Variabel, Mutability & Shadowing ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Variabel, Mutability & Shadowing?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 3,
    "slug": "M01-L03",
    "title": "Tipe Data Primitif: Skalar & Majemuk",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L03.md",
    "code": "// M01-L03 - Tipe Data Primitif: Skalar & Majemuk\nfn main() {\n    println!(\"=== Tipe Data Primitif: Skalar & Majemuk ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Tipe Data Primitif: Skalar & Majemuk?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 4,
    "slug": "M01-L04",
    "title": "Fungsi, Parameter & Expression Return",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L04.md",
    "code": "// M01-L04 - Fungsi, Parameter & Expression Return\nfn main() {\n    println!(\"=== Fungsi, Parameter & Expression Return ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Fungsi, Parameter & Expression Return?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 5,
    "slug": "M01-L05",
    "title": "Alur Kendali: If/Else & Perulangan",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L05.md",
    "code": "// M01-L05 - Alur Kendali: If/Else & Perulangan\nfn main() {\n    println!(\"=== Alur Kendali: If/Else & Perulangan ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Alur Kendali: If/Else & Perulangan?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 6,
    "slug": "M01-L06",
    "title": "Manajemen Proyek dengan Cargo & Testing",
    "module": "Modul 1: Pengenalan & Dasar Rust",
    "moduleId": 1,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L06.md",
    "code": "// M01-L06 - Manajemen Proyek dengan Cargo & Testing\nfn main() {\n    println!(\"=== Manajemen Proyek dengan Cargo & Testing ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Manajemen Proyek dengan Cargo & Testing?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 7,
    "slug": "M02-L01",
    "title": "Konsep Ownership: Aturan Memori, Stack & Heap",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L01.md",
    "code": "// M02-L01 - Konsep Ownership: Aturan Memori, Stack & Heap\nfn main() {\n    println!(\"=== Konsep Ownership: Aturan Memori, Stack & Heap ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Konsep Ownership: Aturan Memori, Stack & Heap?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 8,
    "slug": "M02-L02",
    "title": "Move Semantics & Copy Trait",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L02.md",
    "code": "// M02-L02 - Move Semantics & Copy Trait\nfn main() {\n    println!(\"=== Move Semantics & Copy Trait ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Move Semantics & Copy Trait?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 9,
    "slug": "M02-L03",
    "title": "Borrowing: Referensi Immutable (&T)",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L03.md",
    "code": "// M02-L03 - Borrowing: Referensi Immutable (&T)\nfn main() {\n    println!(\"=== Borrowing: Referensi Immutable (&T) ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Borrowing: Referensi Immutable (&T)?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 10,
    "slug": "M02-L04",
    "title": "Referensi Mutable (&mut T) & Aturan Peminjaman",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L04.md",
    "code": "// M02-L04 - Referensi Mutable (&mut T) & Aturan Peminjaman\nfn main() {\n    println!(\"=== Referensi Mutable (&mut T) & Aturan Peminjaman ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Referensi Mutable (&mut T) & Aturan Peminjaman?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 11,
    "slug": "M02-L05",
    "title": "Pencegahan Dangling References",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L05.md",
    "code": "// M02-L05 - Pencegahan Dangling References\nfn main() {\n    println!(\"=== Pencegahan Dangling References ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Pencegahan Dangling References?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 12,
    "slug": "M02-L06",
    "title": "Tipe Slice: String Slice & Array Slice",
    "module": "Modul 2: Ownership & Borrowing System",
    "moduleId": 2,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L06.md",
    "code": "// M02-L06 - Tipe Slice: String Slice & Array Slice\nfn main() {\n    println!(\"=== Tipe Slice: String Slice & Array Slice ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Tipe Slice: String Slice & Array Slice?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 13,
    "slug": "M03-L01",
    "title": "Mendefinisikan & Menginstansiasi Struct",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L01.md",
    "code": "// M03-L01 - Mendefinisikan & Menginstansiasi Struct\nfn main() {\n    println!(\"=== Mendefinisikan & Menginstansiasi Struct ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Mendefinisikan & Menginstansiasi Struct?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 14,
    "slug": "M03-L02",
    "title": "Tuple Structs & Unit-Like Structs",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L02.md",
    "code": "// M03-L02 - Tuple Structs & Unit-Like Structs\nfn main() {\n    println!(\"=== Tuple Structs & Unit-Like Structs ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Tuple Structs & Unit-Like Structs?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 15,
    "slug": "M03-L03",
    "title": "Method Syntax & Associated Functions (impl)",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L03.md",
    "code": "// M03-L03 - Method Syntax & Associated Functions (impl)\nfn main() {\n    println!(\"=== Method Syntax & Associated Functions (impl) ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Method Syntax & Associated Functions (impl)?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 16,
    "slug": "M03-L04",
    "title": "Rich Enums: Membawa Data di Tiap Varian",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L04.md",
    "code": "// M03-L04 - Rich Enums: Membawa Data di Tiap Varian\nfn main() {\n    println!(\"=== Rich Enums: Membawa Data di Tiap Varian ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Rich Enums: Membawa Data di Tiap Varian?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 17,
    "slug": "M03-L05",
    "title": "Option<T>: Pengganti Aman untuk Null",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L05.md",
    "code": "// M03-L05 - Option<T>: Pengganti Aman untuk Null\nfn main() {\n    println!(\"=== Option<T>: Pengganti Aman untuk Null ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Option<T>: Pengganti Aman untuk Null?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 18,
    "slug": "M03-L06",
    "title": "Pattern Matching: match Exhaustive & if let",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L06.md",
    "code": "// M03-L06 - Pattern Matching: match Exhaustive & if let\nfn main() {\n    println!(\"=== Pattern Matching: match Exhaustive & if let ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Pattern Matching: match Exhaustive & if let?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 19,
    "slug": "M04-L01",
    "title": "Vector (Vec<T>): List Dinamis di Heap",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L01.md",
    "code": "// M04-L01 - Vector (Vec<T>): List Dinamis di Heap\nfn main() {\n    println!(\"=== Vector (Vec<T>): List Dinamis di Heap ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Vector (Vec<T>): List Dinamis di Heap?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 20,
    "slug": "M04-L02",
    "title": "String & &str: Manipulasi Teks UTF-8",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L02.md",
    "code": "// M04-L02 - String & &str: Manipulasi Teks UTF-8\nfn main() {\n    println!(\"=== String & &str: Manipulasi Teks UTF-8 ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada String & &str: Manipulasi Teks UTF-8?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 21,
    "slug": "M04-L03",
    "title": "HashMap<K, V>: Koleksi Key-Value Asosiatif",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L03.md",
    "code": "// M04-L03 - HashMap<K, V>: Koleksi Key-Value Asosiatif\nfn main() {\n    println!(\"=== HashMap<K, V>: Koleksi Key-Value Asosiatif ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada HashMap<K, V>: Koleksi Key-Value Asosiatif?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 22,
    "slug": "M04-L04",
    "title": "Unrecoverable Errors dengan panic!",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L04.md",
    "code": "// M04-L04 - Unrecoverable Errors dengan panic!\nfn main() {\n    println!(\"=== Unrecoverable Errors dengan panic! ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Unrecoverable Errors dengan panic!?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 23,
    "slug": "M04-L05",
    "title": "Result<T, E>: Penanganan Recoverable Error",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L05.md",
    "code": "// M04-L05 - Result<T, E>: Penanganan Recoverable Error\nfn main() {\n    println!(\"=== Result<T, E>: Penanganan Recoverable Error ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Result<T, E>: Penanganan Recoverable Error?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 24,
    "slug": "M04-L06",
    "title": "Error Propagation & Operator Tanda Tanya (?)",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L06.md",
    "code": "// M04-L06 - Error Propagation & Operator Tanda Tanya (?)\nfn main() {\n    println!(\"=== Error Propagation & Operator Tanda Tanya (?) ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Error Propagation & Operator Tanda Tanya (?)?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 25,
    "slug": "M05-L01",
    "title": "Generic Data Types pada Fungsi & Struct",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L01.md",
    "code": "// M05-L01 - Generic Data Types pada Fungsi & Struct\nfn main() {\n    println!(\"=== Generic Data Types pada Fungsi & Struct ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Generic Data Types pada Fungsi & Struct?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 26,
    "slug": "M05-L02",
    "title": "Traits: Mendefinisikan Shared Behavior",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L02.md",
    "code": "// M05-L02 - Traits: Mendefinisikan Shared Behavior\nfn main() {\n    println!(\"=== Traits: Mendefinisikan Shared Behavior ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Traits: Mendefinisikan Shared Behavior?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 27,
    "slug": "M05-L03",
    "title": "Trait Bounds & Klausa where",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L03.md",
    "code": "// M05-L03 - Trait Bounds & Klausa where\nfn main() {\n    println!(\"=== Trait Bounds & Klausa where ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Trait Bounds & Klausa where?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 28,
    "slug": "M05-L04",
    "title": "Traits Standar: Debug, Clone, Copy, Display",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L04.md",
    "code": "// M05-L04 - Traits Standar: Debug, Clone, Copy, Display\nfn main() {\n    println!(\"=== Traits Standar: Debug, Clone, Copy, Display ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Traits Standar: Debug, Clone, Copy, Display?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 29,
    "slug": "M05-L05",
    "title": "Lifetime Annotations ('a) & Validasi Referensi",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L05.md",
    "code": "// M05-L05 - Lifetime Annotations ('a) & Validasi Referensi\nfn main() {\n    println!(\"=== Lifetime Annotations ('a) & Validasi Referensi ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Lifetime Annotations ('a) & Validasi Referensi?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 30,
    "slug": "M05-L06",
    "title": "Lifetime Elision Rules & 'static Lifetime",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L06.md",
    "code": "// M05-L06 - Lifetime Elision Rules & 'static Lifetime\nfn main() {\n    println!(\"=== Lifetime Elision Rules & 'static Lifetime ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Lifetime Elision Rules & 'static Lifetime?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 31,
    "slug": "M06-L01",
    "title": "Closures: Anonymous Functions & Scope Capture",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L01.md",
    "code": "// M06-L01 - Closures: Anonymous Functions & Scope Capture\nfn main() {\n    println!(\"=== Closures: Anonymous Functions & Scope Capture ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Closures: Anonymous Functions & Scope Capture?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 32,
    "slug": "M06-L02",
    "title": "Iterators & Zero-Cost Pipeline Adapters",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L02.md",
    "code": "// M06-L02 - Iterators & Zero-Cost Pipeline Adapters\nfn main() {\n    println!(\"=== Iterators & Zero-Cost Pipeline Adapters ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Iterators & Zero-Cost Pipeline Adapters?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 33,
    "slug": "M06-L03",
    "title": "Box<T>: Smart Pointer untuk Alokasi Heap",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L03.md",
    "code": "// M06-L03 - Box<T>: Smart Pointer untuk Alokasi Heap\nfn main() {\n    println!(\"=== Box<T>: Smart Pointer untuk Alokasi Heap ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Box<T>: Smart Pointer untuk Alokasi Heap?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 34,
    "slug": "M06-L04",
    "title": "Deref Coercion & Drop Trait",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L04.md",
    "code": "// M06-L04 - Deref Coercion & Drop Trait\nfn main() {\n    println!(\"=== Deref Coercion & Drop Trait ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Deref Coercion & Drop Trait?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 35,
    "slug": "M06-L05",
    "title": "Rc<T>: Reference Counting Single-Threaded",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L05.md",
    "code": "// M06-L05 - Rc<T>: Reference Counting Single-Threaded\nfn main() {\n    println!(\"=== Rc<T>: Reference Counting Single-Threaded ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Rc<T>: Reference Counting Single-Threaded?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 36,
    "slug": "M06-L06",
    "title": "RefCell<T> & Pola Interior Mutability",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L06.md",
    "code": "// M06-L06 - RefCell<T> & Pola Interior Mutability\nfn main() {\n    println!(\"=== RefCell<T> & Pola Interior Mutability ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada RefCell<T> & Pola Interior Mutability?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 37,
    "slug": "M07-L01",
    "title": "Native OS Threads dengan thread::spawn",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L01.md",
    "code": "// M07-L01 - Native OS Threads dengan thread::spawn\nfn main() {\n    println!(\"=== Native OS Threads dengan thread::spawn ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Native OS Threads dengan thread::spawn?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 38,
    "slug": "M07-L02",
    "title": "Transfer Kepemilikan Data dengan Closure move",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L02.md",
    "code": "// M07-L02 - Transfer Kepemilikan Data dengan Closure move\nfn main() {\n    println!(\"=== Transfer Kepemilikan Data dengan Closure move ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Transfer Kepemilikan Data dengan Closure move?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 39,
    "slug": "M07-L03",
    "title": "Message Passing: Komunikasi via mpsc Channel",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L03.md",
    "code": "// M07-L03 - Message Passing: Komunikasi via mpsc Channel\nfn main() {\n    println!(\"=== Message Passing: Komunikasi via mpsc Channel ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Message Passing: Komunikasi via mpsc Channel?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 40,
    "slug": "M07-L04",
    "title": "Shared State Concurrency: Mutex<T> & Arc<T>",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L04.md",
    "code": "// M07-L04 - Shared State Concurrency: Mutex<T> & Arc<T>\nfn main() {\n    println!(\"=== Shared State Concurrency: Mutex<T> & Arc<T> ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Shared State Concurrency: Mutex<T> & Arc<T>?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 41,
    "slug": "M07-L05",
    "title": "Pencegahan Deadlock & Sinkronisasi Aman",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L05.md",
    "code": "// M07-L05 - Pencegahan Deadlock & Sinkronisasi Aman\nfn main() {\n    println!(\"=== Pencegahan Deadlock & Sinkronisasi Aman ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Pencegahan Deadlock & Sinkronisasi Aman?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 42,
    "slug": "M07-L06",
    "title": "Extensible Concurrency: Trait Send & Sync",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L06.md",
    "code": "// M07-L06 - Extensible Concurrency: Trait Send & Sync\nfn main() {\n    println!(\"=== Extensible Concurrency: Trait Send & Sync ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Extensible Concurrency: Trait Send & Sync?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 43,
    "slug": "M08-L01",
    "title": "Pengenalan Asynchronous Rust: Future & Polling",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L01.md",
    "code": "// M08-L01 - Pengenalan Asynchronous Rust: Future & Polling\nfn main() {\n    println!(\"=== Pengenalan Asynchronous Rust: Future & Polling ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Pengenalan Asynchronous Rust: Future & Polling?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 44,
    "slug": "M08-L02",
    "title": "Runtime Tokio: Setup, #[tokio::main] & Executor",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L02.md",
    "code": "// M08-L02 - Runtime Tokio: Setup, #[tokio::main] & Executor\nfn main() {\n    println!(\"=== Runtime Tokio: Setup, #[tokio::main] & Executor ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Runtime Tokio: Setup, #[tokio::main] & Executor?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 45,
    "slug": "M08-L03",
    "title": "Async/Await Syntax & Eksekusi Non-blocking",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L03.md",
    "code": "// M08-L03 - Async/Await Syntax & Eksekusi Non-blocking\nfn main() {\n    println!(\"=== Async/Await Syntax & Eksekusi Non-blocking ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Async/Await Syntax & Eksekusi Non-blocking?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 46,
    "slug": "M08-L04",
    "title": "Concurrent Tasks dengan tokio::spawn",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L04.md",
    "code": "// M08-L04 - Concurrent Tasks dengan tokio::spawn\nfn main() {\n    println!(\"=== Concurrent Tasks dengan tokio::spawn ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Concurrent Tasks dengan tokio::spawn?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 47,
    "slug": "M08-L05",
    "title": "Tokio Async Channels & Primitif Sinkronisasi",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L05.md",
    "code": "// M08-L05 - Tokio Async Channels & Primitif Sinkronisasi\nfn main() {\n    println!(\"=== Tokio Async Channels & Primitif Sinkronisasi ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Tokio Async Channels & Primitif Sinkronisasi?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 48,
    "slug": "M08-L06",
    "title": "Membangun REST API Asynchronous Cepat dengan Axum",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "30 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L06.md",
    "code": "// M08-L06 - Membangun REST API Asynchronous Cepat dengan Axum\nfn main() {\n    println!(\"=== Membangun REST API Asynchronous Cepat dengan Axum ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Membangun REST API Asynchronous Cepat dengan Axum?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 49,
    "slug": "M09-L01",
    "title": "Declarative Macros dengan macro_rules!",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L01.md",
    "code": "// M09-L01 - Declarative Macros dengan macro_rules!\nfn main() {\n    println!(\"=== Declarative Macros dengan macro_rules! ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Declarative Macros dengan macro_rules!?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 50,
    "slug": "M09-L02",
    "title": "Procedural Macros (Derive, Attribute, Function)",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L02.md",
    "code": "// M09-L02 - Procedural Macros (Derive, Attribute, Function)\nfn main() {\n    println!(\"=== Procedural Macros (Derive, Attribute, Function) ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Procedural Macros (Derive, Attribute, Function)?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 51,
    "slug": "M09-L03",
    "title": "Unsafe Rust: Batasan, Kekuatan & Safety Invariants",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L03.md",
    "code": "// M09-L03 - Unsafe Rust: Batasan, Kekuatan & Safety Invariants\nfn main() {\n    println!(\"=== Unsafe Rust: Batasan, Kekuatan & Safety Invariants ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Unsafe Rust: Batasan, Kekuatan & Safety Invariants?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 52,
    "slug": "M09-L04",
    "title": "Raw Pointers (*const T, *mut T) & Manual Dereference",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L04.md",
    "code": "// M09-L04 - Raw Pointers (*const T, *mut T) & Manual Dereference\nfn main() {\n    println!(\"=== Raw Pointers (*const T, *mut T) & Manual Dereference ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Raw Pointers (*const T, *mut T) & Manual Dereference?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 53,
    "slug": "M09-L05",
    "title": "FFI (Foreign Function Interface): Interop C",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L05.md",
    "code": "// M09-L05 - FFI (Foreign Function Interface): Interop C\nfn main() {\n    println!(\"=== FFI (Foreign Function Interface): Interop C ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada FFI (Foreign Function Interface): Interop C?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 54,
    "slug": "M09-L06",
    "title": "Advanced Traits: Associated Types & Syntax",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L06.md",
    "code": "// M09-L06 - Advanced Traits: Associated Types & Syntax\nfn main() {\n    println!(\"=== Advanced Traits: Associated Types & Syntax ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Advanced Traits: Associated Types & Syntax?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 55,
    "slug": "M10-L01",
    "title": "Testing Komprehensif: Unit, Integrasi, & Doc-Tests",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L01.md",
    "code": "// M10-L01 - Testing Komprehensif: Unit, Integrasi, & Doc-Tests\nfn main() {\n    println!(\"=== Testing Komprehensif: Unit, Integrasi, & Doc-Tests ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Testing Komprehensif: Unit, Integrasi, & Doc-Tests?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 56,
    "slug": "M10-L02",
    "title": "Benchmarking Performa dengan Criterion.rs",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L02.md",
    "code": "// M10-L02 - Benchmarking Performa dengan Criterion.rs\nfn main() {\n    println!(\"=== Benchmarking Performa dengan Criterion.rs ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Benchmarking Performa dengan Criterion.rs?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 57,
    "slug": "M10-L03",
    "title": "WebAssembly (WASM): Kompilasi Rust ke Browser",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L03.md",
    "code": "// M10-L03 - WebAssembly (WASM): Kompilasi Rust ke Browser\nfn main() {\n    println!(\"=== WebAssembly (WASM): Kompilasi Rust ke Browser ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada WebAssembly (WASM): Kompilasi Rust ke Browser?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 58,
    "slug": "M10-L04",
    "title": "Membangun Tool CLI Profesional dengan Clap",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "25 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L04.md",
    "code": "// M10-L04 - Membangun Tool CLI Profesional dengan Clap\nfn main() {\n    println!(\"=== Membangun Tool CLI Profesional dengan Clap ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Membangun Tool CLI Profesional dengan Clap?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 59,
    "slug": "M10-L05",
    "title": "CI/CD GitHub Actions & Publikasi ke Crates.io",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L05.md",
    "code": "// M10-L05 - CI/CD GitHub Actions & Publikasi ke Crates.io\nfn main() {\n    println!(\"=== CI/CD GitHub Actions & Publikasi ke Crates.io ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada CI/CD GitHub Actions & Publikasi ke Crates.io?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
    }
  },
  {
    "id": 60,
    "slug": "M10-L06",
    "title": "Capstone: In-Memory Key-Value Store",
    "module": "Modul 10: Ekosistem, Testing, & Capstone Project",
    "moduleId": 10,
    "duration": "35 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L06.md",
    "code": "// M10-L06 - Capstone: In-Memory Key-Value Store\nfn main() {\n    println!(\"=== Capstone: In-Memory Key-Value Store ===\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada Capstone: In-Memory Key-Value Store?",
      "options": [
        "Menjamin performa dan keamanan memori",
        "Memperlambat kompilasi",
        "Mengabaikan type-check",
        "Memerlukan runtime garbage collector"
      ],
      "correct": 0,
      "explanation": "Rust mendesain fitur ini untuk menjamin memory safety dan performa tinggi tanpa garbage collector."
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
        localStorage.setItem('rust_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('rust_progress');
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
    try { localStorage.setItem('rust_last_lesson', String(index)); } catch (e) {}
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
        const basePath = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/';
        const candidates = [
            (typeof LESSON_FILES !== 'undefined' && LESSON_FILES[index]) ? LESSON_FILES[index] : null,
            lesson.mdFile,
            'lessons/' + lesson.slug + '.md',
            './lessons/' + lesson.slug + '.md',
            basePath + 'lessons/' + lesson.slug + '.md'
        ].filter(Boolean);
        for (const c of candidates) {
            try {
                const res = await fetch(c);
                if (res.ok) {
                    md = await res.text();
                    if (md && md.trim().length > 0) break;
                }
            } catch(e) {}
        }
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
    if (contentScroll && typeof contentScroll.scrollTo === 'function') contentScroll.scrollTo({top: 0, behavior: 'smooth'});
}

// Initialize progress from localStorage
try {
    const saved = localStorage.getItem('rust_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}


document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    const savedLast = parseInt(localStorage.getItem('rust_last_lesson') || '0', 10);
    loadLesson(!isNaN(savedLast) && savedLast >= 0 && savedLast < lessons.length ? savedLast : 0);
    updateProgress();
});
