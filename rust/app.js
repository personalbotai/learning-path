// Rust Learning Path — Core Application & Interactive Engine 🦀

const MODULES = [
  {
    "id": 1,
    "title": "Pengenalan & Dasar-dasar Rust",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust pengenalan & dasar-dasar rust"
  },
  {
    "id": 2,
    "title": "Ownership & Borrowing",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust ownership & borrowing"
  },
  {
    "id": 3,
    "title": "Structs, Enums, & Pattern Matching",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust structs, enums, & pattern matching"
  },
  {
    "id": 4,
    "title": "Collections & Error Handling",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust collections & error handling"
  },
  {
    "id": 5,
    "title": "Generics, Traits, & Lifetimes",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust generics, traits, & lifetimes"
  },
  {
    "id": 6,
    "title": "Functional Features & Smart Pointers",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust functional features & smart pointers"
  },
  {
    "id": 7,
    "title": "Fearless Concurrency",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust fearless concurrency"
  },
  {
    "id": 8,
    "title": "Async/Await & Ekosistem Tokio",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust async/await & ekosistem tokio"
  },
  {
    "id": 9,
    "title": "Advanced Rust (Macros, Unsafe, FFI)",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust advanced rust (macros, unsafe, ffi)"
  },
  {
    "id": 10,
    "title": "Ekosistem, Testing, & WebAssembly (WASM)",
    "icon": "fa-solid fa-code",
    "desc": "Materi inti Rust ekosistem, testing, & webassembly (wasm)"
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "rust-1-1",
    "title": "1.1 Hello World & Struktur Program",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.1 Hello World & Struktur Program\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.1 Hello World & Struktur Program\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 1\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.1 Hello World & Struktur Program?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 2,
    "slug": "rust-1-2",
    "title": "1.2 Variabel & Mutabilitas",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.2 Variabel & Mutabilitas\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.2 Variabel & Mutabilitas\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 2\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.2 Variabel & Mutabilitas?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 3,
    "slug": "rust-1-3",
    "title": "1.3 Tipe Data Skalar & Kompon",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.3 Tipe Data Skalar & Kompon\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.3 Tipe Data Skalar & Kompon\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 3\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.3 Tipe Data Skalar & Kompon?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 4,
    "slug": "rust-1-4",
    "title": "1.4 Fungsi & Return Values",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.4 Fungsi & Return Values\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.4 Fungsi & Return Values\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 4\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.4 Fungsi & Return Values?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 5,
    "slug": "rust-1-5",
    "title": "1.5 Control Flow: if, else, & if let",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.5 Control Flow: if, else, & if let\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.5 Control Flow: if, else, & if let\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 5\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.5 Control Flow: if, else, & if let?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 6,
    "slug": "rust-1-6",
    "title": "1.6 Control Flow: loop, while, & for",
    "module": "Modul 1: Pengenalan & Dasar-dasar Rust",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 1.6 Control Flow: loop, while, & for\n\nMateri detail Rust Pengenalan & Dasar-dasar Rust.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 1.6 Control Flow: loop, while, & for\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 6\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 1.6 Control Flow: loop, while, & for?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 7,
    "slug": "rust-2-1",
    "title": "2.1 Konsep Dasar Ownership",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.1 Konsep Dasar Ownership\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.1 Konsep Dasar Ownership\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 7\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.1 Konsep Dasar Ownership?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 8,
    "slug": "rust-2-2",
    "title": "2.2 Interaksi Data: Move & Clone",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.2 Interaksi Data: Move & Clone\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.2 Interaksi Data: Move & Clone\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 8\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.2 Interaksi Data: Move & Clone?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 9,
    "slug": "rust-2-3",
    "title": "2.3 References & Borrowing",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.3 References & Borrowing\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.3 References & Borrowing\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 9\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.3 References & Borrowing?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 10,
    "slug": "rust-2-4",
    "title": "2.4 Mutable References",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.4 Mutable References\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.4 Mutable References\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 10\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.4 Mutable References?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 11,
    "slug": "rust-2-5",
    "title": "2.5 Dangling References & Lifetimes Dasar",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.5 Dangling References & Lifetimes Dasar\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.5 Dangling References & Lifetimes Dasar\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 11\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.5 Dangling References & Lifetimes Dasar?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 12,
    "slug": "rust-2-6",
    "title": "2.6 Tipe Data Slice",
    "module": "Modul 2: Ownership & Borrowing",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 2.6 Tipe Data Slice\n\nMateri detail Rust Ownership & Borrowing.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 2.6 Tipe Data Slice\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 12\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 2.6 Tipe Data Slice?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 13,
    "slug": "rust-3-1",
    "title": "3.1 Mendefinisikan & Menggunakan Structs",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.1 Mendefinisikan & Menggunakan Structs\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.1 Mendefinisikan & Menggunakan Structs\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 13\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.1 Mendefinisikan & Menggunakan Structs?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 14,
    "slug": "rust-3-2",
    "title": "3.2 Method & Associated Functions",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.2 Method & Associated Functions\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.2 Method & Associated Functions\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 14\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.2 Method & Associated Functions?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 15,
    "slug": "rust-3-3",
    "title": "3.3 Mendefinisikan Enums",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.3 Mendefinisikan Enums\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.3 Mendefinisikan Enums\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 15\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.3 Mendefinisikan Enums?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 16,
    "slug": "rust-3-4",
    "title": "3.4 Pattern Matching dengan `match`",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.4 Pattern Matching dengan `match`\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.4 Pattern Matching dengan `match`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 16\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.4 Pattern Matching dengan `match`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 17,
    "slug": "rust-3-5",
    "title": "3.5 Tipe `Option<T>`",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.5 Tipe `Option<T>`\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.5 Tipe `Option<T>`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 17\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.5 Tipe `Option<T>`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 18,
    "slug": "rust-3-6",
    "title": "3.6 Ekspresi `if let`",
    "module": "Modul 3: Structs, Enums, & Pattern Matching",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 3.6 Ekspresi `if let`\n\nMateri detail Rust Structs, Enums, & Pattern Matching.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 3.6 Ekspresi `if let`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 18\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 3.6 Ekspresi `if let`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 19,
    "slug": "rust-4-1",
    "title": "4.1 Vectors (`Vec<T>`)",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.1 Vectors (`Vec<T>`)\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.1 Vectors (`Vec<T>`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 19\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.1 Vectors (`Vec<T>`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 20,
    "slug": "rust-4-2",
    "title": "4.2 Strings yang Dinamis (`String`)",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.2 Strings yang Dinamis (`String`)\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.2 Strings yang Dinamis (`String`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 20\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.2 Strings yang Dinamis (`String`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 21,
    "slug": "rust-4-3",
    "title": "4.3 HashMaps",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.3 HashMaps\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.3 HashMaps\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 21\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.3 HashMaps?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 22,
    "slug": "rust-4-4",
    "title": "4.4 Unrecoverable Errors (`panic!`)",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.4 Unrecoverable Errors (`panic!`)\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.4 Unrecoverable Errors (`panic!`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 22\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.4 Unrecoverable Errors (`panic!`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 23,
    "slug": "rust-4-5",
    "title": "4.5 Recoverable Errors (`Result<T, E>`)",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.5 Recoverable Errors (`Result<T, E>`)\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.5 Recoverable Errors (`Result<T, E>`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 23\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.5 Recoverable Errors (`Result<T, E>`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 24,
    "slug": "rust-4-6",
    "title": "4.6 Error Propagation dengan Operator `?`",
    "module": "Modul 4: Collections & Error Handling",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 4.6 Error Propagation dengan Operator `?`\n\nMateri detail Rust Collections & Error Handling.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 4.6 Error Propagation dengan Operator `?`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 24\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 4.6 Error Propagation dengan Operator `?`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 25,
    "slug": "rust-5-1",
    "title": "5.1 Generics pada Tipe Data & Fungsi",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.1 Generics pada Tipe Data & Fungsi\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.1 Generics pada Tipe Data & Fungsi\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 25\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.1 Generics pada Tipe Data & Fungsi?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 26,
    "slug": "rust-5-2",
    "title": "5.2 Mendefinisikan & Mengimplementasi Traits",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.2 Mendefinisikan & Mengimplementasi Traits\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.2 Mendefinisikan & Mengimplementasi Traits\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 26\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.2 Mendefinisikan & Mengimplementasi Traits?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 27,
    "slug": "rust-5-3",
    "title": "5.3 Trait Bounds & `impl Trait`",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.3 Trait Bounds & `impl Trait`\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.3 Trait Bounds & `impl Trait`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 27\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.3 Trait Bounds & `impl Trait`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 28,
    "slug": "rust-5-4",
    "title": "5.4 Validasi Referensi dengan Lifetimes",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.4 Validasi Referensi dengan Lifetimes\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.4 Validasi Referensi dengan Lifetimes\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 28\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.4 Validasi Referensi dengan Lifetimes?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 29,
    "slug": "rust-5-5",
    "title": "5.5 Lifetime Annotations pada Structs",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.5 Lifetime Annotations pada Structs\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.5 Lifetime Annotations pada Structs\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 29\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.5 Lifetime Annotations pada Structs?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 30,
    "slug": "rust-5-6",
    "title": "5.6 Lifetime Elision Rules & `'static`",
    "module": "Modul 5: Generics, Traits, & Lifetimes",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 5.6 Lifetime Elision Rules & `'static`\n\nMateri detail Rust Generics, Traits, & Lifetimes.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 5.6 Lifetime Elision Rules & `'static`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 30\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 5.6 Lifetime Elision Rules & `'static`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 31,
    "slug": "rust-6-1",
    "title": "6.1 Closures: Anonymous Functions",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.1 Closures: Anonymous Functions\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.1 Closures: Anonymous Functions\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 31\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.1 Closures: Anonymous Functions?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 32,
    "slug": "rust-6-2",
    "title": "6.2 Closures: Capturing Environment",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.2 Closures: Capturing Environment\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.2 Closures: Capturing Environment\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 32\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.2 Closures: Capturing Environment?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 33,
    "slug": "rust-6-3",
    "title": "6.3 Iterators",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.3 Iterators\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.3 Iterators\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 33\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.3 Iterators?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 34,
    "slug": "rust-6-4",
    "title": "6.4 Smart Pointers: `Box<T>`",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.4 Smart Pointers: `Box<T>`\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.4 Smart Pointers: `Box<T>`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 34\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.4 Smart Pointers: `Box<T>`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 35,
    "slug": "rust-6-5",
    "title": "6.5 Smart Pointers: `Rc<T>` (Reference Counting)",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.5 Smart Pointers: `Rc<T>` (Reference Counting)\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.5 Smart Pointers: `Rc<T>` (Reference Counting)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 35\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.5 Smart Pointers: `Rc<T>` (Reference Counting)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 36,
    "slug": "rust-6-6",
    "title": "6.6 Interior Mutability: `RefCell<T>`",
    "module": "Modul 6: Functional Features & Smart Pointers",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 6.6 Interior Mutability: `RefCell<T>`\n\nMateri detail Rust Functional Features & Smart Pointers.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 6.6 Interior Mutability: `RefCell<T>`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 36\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 6.6 Interior Mutability: `RefCell<T>`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 37,
    "slug": "rust-7-1",
    "title": "7.1 Pengenalan Threads",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.1 Pengenalan Threads\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.1 Pengenalan Threads\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 37\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.1 Pengenalan Threads?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 38,
    "slug": "rust-7-2",
    "title": "7.2 Menggunakan `move` dengan Threads",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.2 Menggunakan `move` dengan Threads\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.2 Menggunakan `move` dengan Threads\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 38\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.2 Menggunakan `move` dengan Threads?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 39,
    "slug": "rust-7-3",
    "title": "7.3 Message Passing (Channels `mpsc`)",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.3 Message Passing (Channels `mpsc`)\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.3 Message Passing (Channels `mpsc`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 39\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.3 Message Passing (Channels `mpsc`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 40,
    "slug": "rust-7-4",
    "title": "7.4 Shared-State Concurrency (`Mutex<T>`)",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.4 Shared-State Concurrency (`Mutex<T>`)\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.4 Shared-State Concurrency (`Mutex<T>`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 40\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.4 Shared-State Concurrency (`Mutex<T>`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 41,
    "slug": "rust-7-5",
    "title": "7.5 Sharing Status Multi-Thread (`Arc<T>`)",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.5 Sharing Status Multi-Thread (`Arc<T>`)\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.5 Sharing Status Multi-Thread (`Arc<T>`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 41\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.5 Sharing Status Multi-Thread (`Arc<T>`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 42,
    "slug": "rust-7-6",
    "title": "7.6 Trait `Send` dan `Sync`",
    "module": "Modul 7: Fearless Concurrency",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 7.6 Trait `Send` dan `Sync`\n\nMateri detail Rust Fearless Concurrency.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 7.6 Trait `Send` dan `Sync`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 42\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 7.6 Trait `Send` dan `Sync`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 43,
    "slug": "rust-8-1",
    "title": "8.1 Pengenalan Asynchronous Programming & Futures",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.1 Pengenalan Asynchronous Programming & Futures\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.1 Pengenalan Asynchronous Programming & Futures\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 43\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.1 Pengenalan Asynchronous Programming & Futures?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 44,
    "slug": "rust-8-2",
    "title": "8.2 Sintaks `async` / `await`",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.2 Sintaks `async` / `await`\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.2 Sintaks `async` / `await`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 44\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.2 Sintaks `async` / `await`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 45,
    "slug": "rust-8-3",
    "title": "8.3 Pengenalan Runtime Tokio & `#[tokio::main]`",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.3 Pengenalan Runtime Tokio & `#[tokio::main]`\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.3 Pengenalan Runtime Tokio & `#[tokio::main]`\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 45\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.3 Pengenalan Runtime Tokio & `#[tokio::main]`?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 46,
    "slug": "rust-8-4",
    "title": "8.4 Spawning Tokio Tasks",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.4 Spawning Tokio Tasks\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.4 Spawning Tokio Tasks\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 46\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.4 Spawning Tokio Tasks?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 47,
    "slug": "rust-8-5",
    "title": "8.5 Async Channels (Tokio `mpsc`)",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.5 Async Channels (Tokio `mpsc`)\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.5 Async Channels (Tokio `mpsc`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 47\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.5 Async Channels (Tokio `mpsc`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 48,
    "slug": "rust-8-6",
    "title": "8.6 `select!` Macro & Task Cancellation",
    "module": "Modul 8: Async/Await & Ekosistem Tokio",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 8.6 `select!` Macro & Task Cancellation\n\nMateri detail Rust Async/Await & Ekosistem Tokio.\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 8.6 `select!` Macro & Task Cancellation\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 48\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 8.6 `select!` Macro & Task Cancellation?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 49,
    "slug": "rust-9-1",
    "title": "9.1 Unsafe Rust: Dereferencing Raw Pointers",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.1 Unsafe Rust: Dereferencing Raw Pointers\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.1 Unsafe Rust: Dereferencing Raw Pointers\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 49\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.1 Unsafe Rust: Dereferencing Raw Pointers?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 50,
    "slug": "rust-9-2",
    "title": "9.2 Unsafe Rust: Eksternal FFI (Foreign Function Interface)",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.2 Unsafe Rust: Eksternal FFI (Foreign Function Interface)\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.2 Unsafe Rust: Eksternal FFI (Foreign Function Interface)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 50\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.2 Unsafe Rust: Eksternal FFI (Foreign Function Interface)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 51,
    "slug": "rust-9-3",
    "title": "9.3 Advanced Traits (Associated Types)",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.3 Advanced Traits (Associated Types)\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.3 Advanced Traits (Associated Types)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 51\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.3 Advanced Traits (Associated Types)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 52,
    "slug": "rust-9-4",
    "title": "9.4 Advanced Types (Newtype Pattern)",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.4 Advanced Types (Newtype Pattern)\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.4 Advanced Types (Newtype Pattern)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 52\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.4 Advanced Types (Newtype Pattern)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 53,
    "slug": "rust-9-5",
    "title": "9.5 Declarative Macros (`macro_rules!`)",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.5 Declarative Macros (`macro_rules!`)\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.5 Declarative Macros (`macro_rules!`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 53\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.5 Declarative Macros (`macro_rules!`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 54,
    "slug": "rust-9-6",
    "title": "9.6 Procedural Macros",
    "module": "Modul 9: Advanced Rust (Macros, Unsafe, FFI)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 9.6 Procedural Macros\n\nMateri detail Rust Advanced Rust (Macros, Unsafe, FFI).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 9.6 Procedural Macros\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 54\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 9.6 Procedural Macros?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 55,
    "slug": "rust-10-1",
    "title": "10.1 Menulis dan Menjalankan Unit Tests",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.1 Menulis dan Menjalankan Unit Tests\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.1 Menulis dan Menjalankan Unit Tests\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 55\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.1 Menulis dan Menjalankan Unit Tests?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 56,
    "slug": "rust-10-2",
    "title": "10.2 Integration Tests & Konfigurasi",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.2 Integration Tests & Konfigurasi\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.2 Integration Tests & Konfigurasi\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 56\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.2 Integration Tests & Konfigurasi?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 57,
    "slug": "rust-10-3",
    "title": "10.3 Manajemen Cargo Workspaces",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.3 Manajemen Cargo Workspaces\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.3 Manajemen Cargo Workspaces\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 57\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.3 Manajemen Cargo Workspaces?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 0,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 58,
    "slug": "rust-10-4",
    "title": "10.4 Pengenalan WebAssembly (WASM) & Rust",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.4 Pengenalan WebAssembly (WASM) & Rust\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.4 Pengenalan WebAssembly (WASM) & Rust\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 58\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.4 Pengenalan WebAssembly (WASM) & Rust?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 1,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 59,
    "slug": "rust-10-5",
    "title": "10.5 Integrasi Rust & JS (`wasm-bindgen`)",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.5 Integrasi Rust & JS (`wasm-bindgen`)\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.5 Integrasi Rust & JS (`wasm-bindgen`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 59\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.5 Integrasi Rust & JS (`wasm-bindgen`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 2,
      "explanation": "Penjelasan dari konsep tersebut."
    }
  },
  {
    "id": 60,
    "slug": "rust-10-6",
    "title": "10.6 Manipulasi DOM dengan WASM (`web-sys`)",
    "module": "Modul 10: Ekosistem, Testing, & WebAssembly (WASM)",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# 10.6 Manipulasi DOM dengan WASM (`web-sys`)\n\nMateri detail Rust Ekosistem, Testing, & WebAssembly (WASM).\n\n- Poin utama 1\n- Poin utama 2\n",
    "code": "// Rust 10.6 Manipulasi DOM dengan WASM (`web-sys`)\nfn main() {\n    println!(\"Hello Rust {}\", \"lesson 60\");\n}",
    "quiz": {
      "question": "Apa konsep utama pada 10.6 Manipulasi DOM dengan WASM (`web-sys`)?",
      "options": [
        "Opsi A",
        "Opsi B",
        "Opsi C",
        "Opsi D"
      ],
      "answer": 3,
      "explanation": "Penjelasan dari konsep tersebut."
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
        // If content exists in the lesson object, use it directly (no fetch needed)
        if (lesson.content && typeof lesson.content === 'string') {
            if (typeof marked !== 'undefined') {
                if (typeof marked.setOptions === 'function') marked.setOptions({gfm: true, breaks: true});
                html = typeof marked === 'function' ? marked(lesson.content) : (typeof marked.parse === 'function' ? marked.parse(lesson.content) : '<pre>'+escapeHtml(lesson.content)+'</pre>');
            } else {
                html = `<pre>${escapeHtml(lesson.content)}</pre>`;
            }
        } else {
            // Fallback: generate simple content
            html = `<h2>${escapeHtml(lesson.title)}</h2>
                   <p>Materi Python modern yang menarik. Mulai menulis kode di editor di bawah.</p>`;
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
