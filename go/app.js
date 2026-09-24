// Go Learning Path — Core Application (60 Industry Standard Lessons)
const LESSON_FILES = [
  "lessons/M01-L01.md",
  "lessons/M01-L02.md",
  "lessons/M01-L03.md",
  "lessons/M01-L04.md",
  "lessons/M01-L05.md",
  "lessons/M01-L06.md",
  "lessons/M02-L01.md",
  "lessons/M02-L02.md",
  "lessons/M02-L03.md",
  "lessons/M02-L04.md",
  "lessons/M02-L05.md",
  "lessons/M02-L06.md",
  "lessons/M03-L01.md",
  "lessons/M03-L02.md",
  "lessons/M03-L03.md",
  "lessons/M03-L04.md",
  "lessons/M03-L05.md",
  "lessons/M03-L06.md",
  "lessons/M04-L01.md",
  "lessons/M04-L02.md",
  "lessons/M04-L03.md",
  "lessons/M04-L04.md",
  "lessons/M04-L05.md",
  "lessons/M04-L06.md",
  "lessons/M05-L01.md",
  "lessons/M05-L02.md",
  "lessons/M05-L03.md",
  "lessons/M05-L04.md",
  "lessons/M05-L05.md",
  "lessons/M05-L06.md",
  "lessons/M06-L01.md",
  "lessons/M06-L02.md",
  "lessons/M06-L03.md",
  "lessons/M06-L04.md",
  "lessons/M06-L05.md",
  "lessons/M06-L06.md",
  "lessons/M07-L01.md",
  "lessons/M07-L02.md",
  "lessons/M07-L03.md",
  "lessons/M07-L04.md",
  "lessons/M07-L05.md",
  "lessons/M07-L06.md",
  "lessons/M08-L01.md",
  "lessons/M08-L02.md",
  "lessons/M08-L03.md",
  "lessons/M08-L04.md",
  "lessons/M08-L05.md",
  "lessons/M08-L06.md",
  "lessons/M09-L01.md",
  "lessons/M09-L02.md",
  "lessons/M09-L03.md",
  "lessons/M09-L04.md",
  "lessons/M09-L05.md",
  "lessons/M09-L06.md",
  "lessons/M10-L01.md",
  "lessons/M10-L02.md",
  "lessons/M10-L03.md",
  "lessons/M10-L04.md",
  "lessons/M10-L05.md",
  "lessons/M10-L06.md"
];
const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "desc": "Kurikulum standar industri Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Modul 2: Struktur Kontrol & Alur Program",
    "desc": "Kurikulum standar industri Modul 2: Struktur Kontrol & Alur Program",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Modul 3: Fungsi, Closures & Method",
    "desc": "Kurikulum standar industri Modul 3: Fungsi, Closures & Method",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "desc": "Kurikulum standar industri Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Modul 5: Goroutines, Channels & Concurrency",
    "desc": "Kurikulum standar industri Modul 5: Goroutines, Channels & Concurrency",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Modul 6: Context & Error Handling",
    "desc": "Kurikulum standar industri Modul 6: Context & Error Handling",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Modul 7: Generics, Koleksi & Pipeline",
    "desc": "Kurikulum standar industri Modul 7: Generics, Koleksi & Pipeline",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Modul 8: Paket, Modul & Dependency Management",
    "desc": "Kurikulum standar industri Modul 8: Paket, Modul & Dependency Management",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Modul 9: Testing, Benchmarking & Quality",
    "desc": "Kurikulum standar industri Modul 9: Testing, Benchmarking & Quality",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Modul 10: Proyek Akhir & Best Practices Industri",
    "desc": "Kurikulum standar industri Modul 10: Proyek Akhir & Best Practices Industri",
    "icon": "fa-solid fa-code"
  }
];
const lessons = [
  {
    "id": 1,
    "slug": "M01-L01",
    "title": "1. Sejarah Go dan Filosofi Desain Bahasa",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Sejarah Go dan Filosofi Desain Bahasa ===\")\n}",
    "quiz": {
      "question": "Apa perbedaan antara `go run`, `go build`, dan `go install`? Sebutkan 3 filosofi desain inti Go.",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 2,
    "slug": "M01-L02",
    "title": "2. Workspace, Module, dan Struktur Proyek",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Workspace, Module, dan Struktur Proyek ===\")\n}",
    "quiz": {
      "question": "Apa fungsi file `go.sum`? Apa perbedaan antara paket `internal` dan `pkg`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 3,
    "slug": "M01-L03",
    "title": "3. Variabel, Konstanta, dan Tipe Dasar",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Variabel, Konstanta, dan Tipe Dasar ===\")\n}",
    "quiz": {
      "question": "Apa bedanya `var x = 5` dan `x := 5`? Apa tipe default untuk literal integer tanpa spesifikasi?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 4,
    "slug": "M01-L04",
    "title": "4. Operator dan Ekspresi",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Operator dan Ekspresi ===\")\n}",
    "quiz": {
      "question": "Apa hasil dari `3 << 2`? Apa perbedaan `==` dan `:=`? Apa output dari `!true && (2+2 == 4)`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 5,
    "slug": "M01-L05",
    "title": "5. Input/Output Sederhana dan Formatting",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Input/Output Sederhana dan Formatting ===\")\n}",
    "quiz": {
      "question": "Apa bedanya `%v` dan `%+v` dalam `fmt.Printf`? Verb format apa yang digunakan untuk membaca input integer?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 6,
    "slug": "M01-L06",
    "title": "6. Comments, Dokumentasi, dan Code Style",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Bahasa Go (Bahasa & Ekosistem)",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Comments, Dokumentasi, dan Code Style ===\")\n}",
    "quiz": {
      "question": "Apa itu \"effective Go\"? Apa tujuan utama `go vet`? Bagaimana cara menghasilkan dokumentasi dari kode Go?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 7,
    "slug": "M02-L01",
    "title": "1. If, Else If, Else",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== If, Else If, Else ===\")\n}",
    "quiz": {
      "question": "Apa output dari `if x := 10; x > 5 { fmt.Println(\"Besar\") } else { fmt.Println(\"Kecil\") }`? Bisakah `if x > 5` di Go tanpa tipe eksplisit?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 8,
    "slug": "M02-L02",
    "title": "2. Switch Statement",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Switch Statement ===\")\n}",
    "quiz": {
      "question": "Apa bedanya `break` dalam switch Go vs C? Apa itu type switch dan kapan digunakan?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 9,
    "slug": "M02-L03",
    "title": "3. For Loop (Satu-satunya Loop)",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== For Loop (Satu-satunya Loop) ===\")\n}",
    "quiz": {
      "question": "Apa output dari `for i := 0; i < 3; i++ { fmt.Print(i) }`? Apakah Go memiliki `while` keyword?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 10,
    "slug": "M02-L04",
    "title": "4. Range dan Iterasi Koleksi",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Range dan Iterasi Koleksi ===\")\n}",
    "quiz": {
      "question": "Apa yang dikembalikan `range` pada string secara default (byte atau rune)? Bagaimana cara mengabaikan index saat range?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 11,
    "slug": "M02-L05",
    "title": "5. Defer, Panic, dan Recover",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Defer, Panic, dan Recover ===\")\n}",
    "quiz": {
      "question": "Dalam urutan apa defer dieksekusi? Apa perbedaan panic dan error dalam Go? Bisakah recover menangkap panic di fungsi lain?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 12,
    "slug": "M02-L06",
    "title": "6. Pattern Matching dengan Select",
    "moduleId": 2,
    "module": "Modul 2: Struktur Kontrol & Alur Program",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Pattern Matching dengan Select ===\")\n}",
    "quiz": {
      "question": "Apa yang terjadi jika beberapa channel siap dalam select? Bagaimana cara membuat channel operation non-blocking?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 13,
    "slug": "M03-L01",
    "title": "1. Deklarasi dan Pemanggilan Fungsi",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Deklarasi dan Pemanggilan Fungsi ===\")\n}",
    "quiz": {
      "question": "Apa itu variadic function? Bagaimana cara mendefinisikan named return values? Apa sintaks untuk fungsi dengan 3 nilai kembalian?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 14,
    "slug": "M03-L02",
    "title": "2. Fungsi sebagai First-Class Citizen",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Fungsi sebagai First-Class Citizen ===\")\n}",
    "quiz": {
      "question": "Apa tipe dari variabel `f := func(x int) int { return x * 2 }`? Bagaimana cara melewatkan fungsi sebagai parameter?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 15,
    "slug": "M03-L03",
    "title": "3. Closures dan Scope",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Closures dan Scope ===\")\n}",
    "quiz": {
      "question": "Apa itu closure? Apakah variabel yang di-capture disalin atau direferensikan? Apa bug umum closure dalam loop?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 16,
    "slug": "M03-L04",
    "title": "4. Recursion dan Factorial/Fibonacci",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Recursion dan Factorial/Fibonacci ===\")\n}",
    "quiz": {
      "question": "Apa itu base case? Mengapa rekursi Fibonacci tanpa memoisasi sangat lambat untuk n>40?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 17,
    "slug": "M03-L05",
    "title": "5. Method pada Tipe",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Method pada Tipe ===\")\n}",
    "quiz": {
      "question": "Apa perbedaan value receiver dan pointer receiver? Method mana yang dimiliki oleh `*T` vs `T`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 18,
    "slug": "M03-L06",
    "title": "6. Receivers, Embedded Types & Method Chaining",
    "moduleId": 3,
    "module": "Modul 3: Fungsi, Closures & Method",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Receivers, Embedded Types & Method Chaining ===\")\n}",
    "quiz": {
      "question": "Apa itu method promotion? Bagaimana method chaining bekerja di Go?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 19,
    "slug": "M04-L01",
    "title": "1. Struct Deklarasi dan Inisialisasi",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Struct Deklarasi dan Inisialisasi ===\")\n}",
    "quiz": {
      "question": "Apa zero value untuk struct? Bagaimana cara membuat pointer ke struct literal?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 20,
    "slug": "M04-L02",
    "title": "2. Field Tags, Embedding, dan Komposisi",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Field Tags, Embedding, dan Komposisi ===\")\n}",
    "quiz": {
      "question": "Apa itu struct embedding? Apa bedanya dengan inheritance? Bagaimana tag struct digunakan?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 21,
    "slug": "M04-L03",
    "title": "3. Interface Dasar",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Interface Dasar ===\")\n}",
    "quiz": {
      "question": "Apa itu empty interface? Apa itu type assertion dan syntax-nya? Bagaimana Go menangkap implementasi interface?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 22,
    "slug": "M04-L04",
    "title": "4. Interface Lanjutan dan Polymorphism",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Interface Lanjutan dan Polymorphism ===\")\n}",
    "quiz": {
      "question": "Apa itu interface composition? Bagaimana Go menggunakan interface untuk decoupling kode?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 23,
    "slug": "M04-L05",
    "title": "5. Type Switch dan Type Assertion Lanjutan",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Type Switch dan Type Assertion Lanjutan ===\")\n}",
    "quiz": {
      "question": "Apa bedanya type assertion `v.(Tipe)` dan `v.(Tipe)` dengan comma-ok? Apa fungsi `reflect.TypeOf`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 24,
    "slug": "M04-L06",
    "title": "6. Generics: Introduction (Go 1.18+)",
    "moduleId": 4,
    "module": "Modul 4: Struct, Interface & Pemrograman Berorientasi Objek Go",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Generics: Introduction (Go 1.18+) ===\")\n}",
    "quiz": {
      "question": "Apa itu type parameter? Apa batasan constraint `comparable`? Kapan Go 1.18 memperkenalkan generics?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 25,
    "slug": "M05-L01",
    "title": "1. Goroutines: Dasar",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Goroutines: Dasar ===\")\n}",
    "quiz": {
      "question": "Apa keyword untuk memulai goroutine? Apa perbedaan goroutine dan thread OS?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 26,
    "slug": "M05-L02",
    "title": "2. Channels: Buffered dan Unbuffered",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Channels: Buffered dan Unbuffered ===\")\n}",
    "quiz": {
      "question": "Apa bedanya buffered dan unbuffered channel? Apa yang terjadi mengirim ke channel full?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 27,
    "slug": "M05-L03",
    "title": "3. Channel Direction dan Safety",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Channel Direction dan Safety ===\")\n}",
    "quiz": {
      "question": "Apa sintaks channel send-only? Apa yang terjadi saat range channel yang sudah di-close?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 28,
    "slug": "M05-L04",
    "title": "4. Select: Multiplexing Channel",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Select: Multiplexing Channel ===\")\n}",
    "quiz": {
      "question": "Apa yang terjadi jika dua channel siap dalam select? Bagaimana default case mengubah blocking behavior?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 29,
    "slug": "M05-L05",
    "title": "5. WaitGroup dan Sync Primitives",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== WaitGroup dan Sync Primitives ===\")\n}",
    "quiz": {
      "question": "Apa fungsi `WaitGroup.Add(0)` vs `WaitGroup.Add(1)`? Kapan harus menggunakan `sync.Map` daripada `map` biasa?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 30,
    "slug": "M05-L06",
    "title": "6. Race Condition dan Detect",
    "moduleId": 5,
    "module": "Modul 5: Goroutines, Channels & Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Race Condition dan Detect ===\")\n}",
    "quiz": {
      "question": "Apa itu race condition? Bagaimana cara mendeteksinya? Apa prinsip Go tentang sharing memory?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 31,
    "slug": "M06-L01",
    "title": "1. Error Handling Fundamentals",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Error Handling Fundamentals ===\")\n}",
    "quiz": {
      "question": "Apa itu `error` interface? Apa bedanya `errors.New` dan `fmt.Errorf` dengan `%w`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 32,
    "slug": "M06-L02",
    "title": "2. Custom Error dan Errors As/Is",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Custom Error dan Errors As/Is ===\")\n}",
    "quiz": {
      "question": "Apa fungsi `errors.As`? Bagaimana membedakan error jenis tertentu dari wrapped error?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 33,
    "slug": "M06-L03",
    "title": "3. Context Dasar (context.Context)",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Context Dasar (context.Context) ===\")\n}",
    "quiz": {
      "question": "Apa itu `context.Context`? Apa perbedaan `WithCancel` dan `WithTimeout`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 34,
    "slug": "M06-L04",
    "title": "4. Context untuk Cancellation Propagation",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Context untuk Cancellation Propagation ===\")\n}",
    "quiz": {
      "question": "Apa yang terjadi ketika context di-cancel? Apa itu `defer cancel()` pattern?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 35,
    "slug": "M06-L05",
    "title": "5. Context Values dan Middleware Pattern",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Context Values dan Middleware Pattern ===\")\n}",
    "quiz": {
      "question": "Mengapa disarankan menggunakan custom key type daripada string untuk `WithValue`? Apa itu middleware pattern dalam konteks Go?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 36,
    "slug": "M06-L06",
    "title": "6. Error Handling Strategy & Best Practices",
    "moduleId": 6,
    "module": "Modul 6: Context & Error Handling",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Error Handling Strategy & Best Practices ===\")\n}",
    "quiz": {
      "question": "Kapan seharusnya menggunakan panic dalam Go? Apa perbedaan sentinel error dan wrapped error?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 37,
    "slug": "M07-L01",
    "title": "1. Generics: Constraints dan Comparable",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Generics: Constraints dan Comparable ===\")\n}",
    "quiz": {
      "question": "Apa itu union type dalam constraint? Menggunakan `comparable` vs `comparable`? Apa itu `ordered` constraint?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 38,
    "slug": "M07-L02",
    "title": "2. Generic Data Structures",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Generic Data Structures ===\")\n}",
    "quiz": {
      "question": "Apakah constraint tipe untuk Set? Mengapa `any` dan `interface{}` setara?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 39,
    "slug": "M07-L03",
    "title": "3. Slice Lanjutan",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Slice Lanjutan ===\")\n}",
    "quiz": {
      "question": "Apa bedanya `copy()` dan assignment slice? Apa itu backing array?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 40,
    "slug": "M07-L04",
    "title": "4. Map Lanjutan dan Iterasi",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Map Lanjutan dan Iterasi ===\")\n}",
    "quiz": {
      "question": "Kapan `sync.Map` lebih baik daripada `map`+`Mutex`? Apa kompleksitas time map access?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 41,
    "slug": "M07-L05",
    "title": "5. Pipeline Pattern dengan Channel",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Pipeline Pattern dengan Channel ===\")\n}",
    "quiz": {
      "question": "Apa itu fan-out pattern? Bagaimana pipeline pattern menggunakan channels?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 42,
    "slug": "M07-L06",
    "title": "6. Pooling dan Resource Management",
    "moduleId": 7,
    "module": "Modul 7: Generics, Koleksi & Pipeline",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Pooling dan Resource Management ===\")\n}",
    "quiz": {
      "question": "Apa tujuan `sync.Pool`? Kapan `sync.Once` lebih baik daripada inisialisasi di main?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 43,
    "slug": "M08-L01",
    "title": "1. Package Design dan Konvensi",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Package Design dan Konvensi ===\")\n}",
    "quiz": {
      "question": "Apa aturan naming untuk exported identifier? Apa perbedaan `package main` dan library package?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 44,
    "slug": "M08-L02",
    "title": "2. Import Management dan Aliasing",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Import Management dan Aliasing ===\")\n}",
    "quiz": {
      "question": "Apa itu blank import dan kapan digunakan? Apa masalah circular import?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 45,
    "slug": "M08-L03",
    "title": "3. Modul Proxy dan Go Proxy Protocol",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Modul Proxy dan Go Proxy Protocol ===\")\n}",
    "quiz": {
      "question": "Apa itu `proxy.golang.org`? Bagaimana cara mengakses private module di Go?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 46,
    "slug": "M08-L04",
    "title": "4. Minimal Version Selection (MVS)",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Minimal Version Selection (MVS) ===\")\n}",
    "quiz": {
      "question": "Apa itu MVS? Bagaimana `go get` tanpa version bekerja di bawah MVS?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 47,
    "slug": "M08-L05",
    "title": "5. Vendor Directory dan Offline Build",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Vendor Directory dan Offline Build ===\")\n}",
    "quiz": {
      "question": "Apa fungsi vendor directory? Kapan sebaiknya menggunakan vendor?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 48,
    "slug": "M08-L06",
    "title": "6. Monorepo dan Workspace (Go 1.18+)",
    "moduleId": 8,
    "module": "Modul 8: Paket, Modul & Dependency Management",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Monorepo dan Workspace (Go 1.18+) ===\")\n}",
    "quiz": {
      "question": "Apa itu `go.work` file? Kapan harus menggunakan workspace?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 49,
    "slug": "M09-L01",
    "title": "1. Unit Testing Dasar",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Unit Testing Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konvensi penamaan file test? Bedanya `t.Errorf` dan `t.Fatalf`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 50,
    "slug": "M09-L02",
    "title": "2. Benchmarking dan Profiling",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Benchmarking dan Profiling ===\")\n}",
    "quiz": {
      "question": "Apa output `go test -bench` (N dan ns/op)? Bagaimana mengaktifkan memory reporting?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 51,
    "slug": "M09-L03",
    "title": "3. Mocking dan Dependency Injection",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Mocking dan Dependency Injection ===\")\n}",
    "quiz": {
      "question": "Mengapa interface memudahkan testing? Apa itu dependency injection?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 52,
    "slug": "M09-L04",
    "title": "4. Integration Testing dan httptest",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Integration Testing dan httptest ===\")\n}",
    "quiz": {
      "question": "Apa fungsi `httptest.NewRecorder`? Bedanya unit test dan integration test?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 53,
    "slug": "M09-L05",
    "title": "5. Race Detection dan Linting",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Race Detection dan Linting ===\")\n}",
    "quiz": {
      "question": "Apa perbedaan `go vet` dan `go test -race`? Apa itu `golangci-lint`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 54,
    "slug": "M09-L06",
    "title": "6. Continuous Integration untuk Go",
    "moduleId": 9,
    "module": "Modul 9: Testing, Benchmarking & Quality",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Continuous Integration untuk Go ===\")\n}",
    "quiz": {
      "question": "Apa itu matrix strategy di GitHub Actions? Bagaimana cara generate coverage report?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 55,
    "slug": "M10-L01",
    "title": "1. REST API dengan Standard Library",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== REST API dengan Standard Library ===\")\n}",
    "quiz": {
      "question": "Apa keuntungan mengakan stdlib untuk REST API? Bagaimana middleware bekerja di `net/http`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 56,
    "slug": "M10-L02",
    "title": "2. HTTP Client dan Eksternal API",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== HTTP Client dan Eksternal API ===\")\n}",
    "quiz": {
      "question": "Mengapa harus menggunakan `http.Client` singleton daripada `http.Get`? Bagaimana context digunakan dalam HTTP request?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 57,
    "slug": "M10-L03",
    "title": "3. Database dengan Database/sql",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Database dengan Database/sql ===\")\n}",
    "quiz": {
      "question": "Apa itu connection pool? Apa fungsi `db.Close()` dan kapan harus dipanggil?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 58,
    "slug": "M10-L04",
    "title": "4. Konfigurasi dan Environment Management",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Konfigurasi dan Environment Management ===\")\n}",
    "quiz": {
      "question": "Apa itu 12-factor app? Bagaimana cara aman membaca sensitive env vars?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 59,
    "slug": "M10-L05",
    "title": "5. Logging dan Observability",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L05.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Logging dan Observability ===\")\n}",
    "quiz": {
      "question": "Apa itu structured logging? Mengapa `slog` lebih baik dari `log`?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  },
  {
    "id": 60,
    "slug": "M10-L06",
    "title": "6. Deployment dan Final Best Practices",
    "moduleId": 10,
    "module": "Modul 10: Proyek Akhir & Best Practices Industri",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L06.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Deployment dan Final Best Practices ===\")\n}",
    "quiz": {
      "question": "Apa keuntungan multi-stage Docker build untuk Go? Apa perintah cross-compile untuk Linux ARM64?",
      "options": [
        "Memahami sintaks dan idiom standar dalam ekosistem Go",
        "Mengabaikan error handling bawaan runtime Go",
        "Menghapus deklarasi fungsi main dalam package",
        "Mengganti mekanisme garbage collector bawaan"
      ],
      "answer": 0,
      "explanation": "Go mendesain fitur ini untuk kesederhanaan, kinerja konkurensi efisien, dan keterbacaan kode."
    }
  }
];
const LESSONS = lessons;

window.MODULES = MODULES;
window.lessons = lessons;
window.LESSONS = lessons;

let currentLesson = 0;
let filterQuery = '';
let progress = {};

try {
    const saved = localStorage.getItem('go_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function closeSidebar() {
    try {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const backdrop = document.getElementById('backdrop');
        if (sidebar) sidebar.classList.remove('translate-x-0');
        if (overlay) overlay.classList.add('hidden');
        if (backdrop) backdrop.classList.add('hidden');
    } catch (e) {}
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.toggle('translate-x-0');
    if (overlay) overlay.classList.toggle('hidden');
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
    if (statDone) statDone.textContent = doneLessons;
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
        localStorage.setItem('go_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
    renderNav();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('go_progress');
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
            (l.slug || '').toLowerCase().includes(q)
        ) : modLessons;
        if (q && filtered.length === 0) return '';
        
        const doneCount = modLessons.filter(l => !!progress[l.id]).length;
        const isCurrentModule = q ? true : mod.id === curModId;
        const lessonRows = filtered.map(l => {
            const idx = lessons.findIndex(x => x.id === l.id);
            const isActive = idx === currentLesson;
            const isDone = !!progress[l.id];
            const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
            return '<button onclick="loadLesson(' + idx + '); if(typeof closeSidebar===\'function\')closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ' + cls + '">' +
                '<span class="text-[11px] shrink-0">' + (isDone ? '✅' : '○') + '</span>' +
                '<span class="truncate flex-1">' + escapeHtml(l.title) + '</span>' +
            '</button>';
        }).join('');
        
        const badgeCls = doneCount === modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
        return '<div class="mb-1">' +
            '<button onclick="toggleModule(' + mod.id + ')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
                '<span class="flex items-center gap-2 truncate">' +
                    '<i class="fa-solid fa-code text-cyan-400 text-sm w-4 text-center"></i>' +
                    '<span class="truncate">' + escapeHtml(mod.title) + '</span>' +
                '</span>' +
                '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full ' + badgeCls + '">' + doneCount + '/' + modLessons.length + '</span>' +
            '</button>' +
            '<div id="module-' + mod.id + '" class="space-y-0.5 mt-0.5 px-2 ' + (isCurrentModule ? '' : 'hidden') + '">' + lessonRows + '</div>' +
        '</div>';
    }).join('');
    
    nav.innerHTML = html;
    updateProgress();
}

async function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;
    try { localStorage.setItem('go_last_lesson', String(index)); } catch (e) {}
    currentLesson = index;
    const lesson = lessons[index];
    
    if (typeof closeSidebar === 'function') closeSidebar();
    
    const bc = document.getElementById('breadcrumb');
    const lt = document.getElementById('lesson-title');
    const ld = document.getElementById('lesson-duration');
    const ll = document.getElementById('lesson-level');
    const li = document.getElementById('lesson-id');
    if (bc) bc.textContent = lesson.module + ' • ' + lesson.duration;
    if (lt) lt.textContent = lesson.title.replace(/^\d+\.\s*/, '');
    if (ld) {
        ld.innerHTML = '<i class="fa-regular fa-clock"></i> ' + lesson.duration;
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
            } catch (err) {}
        }
        
        const rawContent = lesson.content || lesson.content_md || lesson.description || '';
        if (!md && rawContent) {
            md = rawContent;
        }
        
        if (md) {
            if (typeof marked !== 'undefined') {
                if (typeof marked.setOptions === 'function') marked.setOptions({gfm: true, breaks: true});
                html = typeof marked.parse === 'function' ? marked.parse(md) : (typeof marked === 'function' ? marked(md) : md);
            } else {
                html = '<pre>' + escapeHtml(md) + '</pre>';
            }
        } else {
            html = '<h2>' + escapeHtml(lesson.title) + '</h2><p>Materi sedang disiapkan. Gunakan editor di bawah.</p>';
        }
    } catch (e) {
        html = '<div style="color:var(--text-muted);font-size:.8rem;margin-top:8px">Gagal memuat materi: ' + escapeHtml(e.message) + '</div>';
    }
    
    if (contentEl) {
        contentEl.innerHTML = '<div class="prose max-w-none">' + html + '</div>';
        contentEl.querySelectorAll('pre code').forEach(block => {
            if (typeof hljs !== 'undefined') hljs.highlightElement(block);
        });
    }
    
    const codeEditor = document.getElementById('code-editor');
    if (codeEditor && lesson.code) {
        codeEditor.value = lesson.code.replace(/\\n/g, '\n');
    }
    
    const quizSection = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    if (quizResult) quizResult.innerHTML = '';
    
    if (lesson.quiz && quizContent && quizSection) {
        quizSection.classList.remove('hidden');
        let qHtml = '<div class="text-sm font-semibold text-white mb-3">' + escapeHtml(lesson.quiz.question) + '</div>';
        lesson.quiz.options.forEach((opt, oIdx) => {
            qHtml += '<label class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer transition">' +
                '<input type="radio" name="quiz_option" value="' + oIdx + '" class="mt-1 text-cyan-500 focus:ring-cyan-500">' +
                '<span class="text-xs sm:text-sm text-slate-300 leading-relaxed">' + escapeHtml(opt) + '</span>' +
            '</label>';
        });
        quizContent.innerHTML = qHtml;
    } else if (quizSection) {
        quizSection.classList.add('hidden');
    }
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === lessons.length - 1;
    
    updateCompleteButtons();
    renderNav();
    
    const contentScroll = document.getElementById('content-scroll') || document.getElementById('contentArea');
    if (contentScroll && typeof contentScroll.scrollTo === 'function') contentScroll.scrollTo({top: 0, behavior: 'smooth'});
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1);
}

function prevLesson() {
    if (currentLesson > 0) loadLesson(currentLesson - 1);
}

function checkQuiz() {
    const lesson = lessons[currentLesson];
    if (!lesson || !lesson.quiz) return;
    const selected = document.querySelector('input[name="quiz_option"]:checked');
    const resultEl = document.getElementById('quiz-result');
    if (!resultEl) return;
    if (!selected) {
        resultEl.innerHTML = '<span class="text-amber-400 text-xs">Pilih salah satu jawaban terlebih dahulu.</span>';
        return;
    }
    const val = parseInt(selected.value, 10);
    const correctVal = lesson.quiz.answer !== undefined ? lesson.quiz.answer : lesson.quiz.correct;
    if (val === correctVal) {
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs">' +
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
    out.innerHTML = '<span class="text-cyan-400"><i class="fa-solid fa-spinner fa-spin"></i> Menjalankan kode Go di Go Playground...</span>';
    try {
        const res = await fetch('https://play.golang.org/compile?output=json', {
            method: 'POST',
            body: new URLSearchParams({ version: '2', body: code })
        });
        if (res.ok) {
            const data = await res.json();
            if (data.Errors) {
                out.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs whitespace-pre-wrap">' + escapeHtml(data.Errors) + '</div>';
            } else if (data.Events && data.Events.length > 0) {
                const logs = data.Events.map(e => e.Message).join('');
                out.innerHTML = '<pre class="text-xs text-cyan-300 font-mono whitespace-pre-wrap">' + escapeHtml(logs) + '</pre>';
            } else {
                out.innerHTML = '<pre class="text-xs text-cyan-300 font-mono">// Program sukses dieksekusi tanpa output.</pre>';
            }
        } else {
            out.innerHTML = '<div class="p-3 rounded-lg bg-cyan-500/10 text-cyan-300 font-mono text-xs">// Eksekusi lokal (Simulasi):\n\n' + escapeHtml(code) + '</div>';
        }
    } catch(err) {
        out.innerHTML = '<div class="p-3 rounded-lg bg-cyan-500/10 text-cyan-300 font-mono text-xs">// Program siap dijalankan via `go run main.go`:\n\n' + escapeHtml(code) + '</div>';
    }
}

function resetCode() {
    if (lessons[currentLesson]) {
        const editor = document.getElementById('code-editor');
        if (editor) editor.value = lessons[currentLesson].code;
        const out = document.getElementById('output');
        if (out) out.innerHTML = '<span class="text-slate-500">// Editor di-reset. Klik Run untuk mengeksekusi kode Go.</span>';
    }
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (editor && navigator.clipboard) {
        navigator.clipboard.writeText(editor.value).then(() => {
            alert('Kode Go disalin!');
        });
    }
}

// Certificate helpers
function openCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const totalLessons = lessons.length;
    const doneLessons = Object.keys(progress).filter(k => !!progress[k]).length;
    const isCompleted = doneLessons >= totalLessons;
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
        const pct = Math.round((doneLessons / totalLessons) * 100);
        if (pText) pText.textContent = pct + '%';
        if (pBar) pBar.style.width = pct + '%';
        if (pRem) pRem.textContent = 'Tersisa ' + (totalLessons - doneLessons) + ' pelajaran lagi.';
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta Go Learning Path';
    
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    ctx.fillStyle = '#06b6d4';
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
    ctx.fillText('Go (Golang) Learning Path Standar Industri', canvas.width / 2, 400);
    
    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/go/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-Go-Learning-Path.png';
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

// Window exports
window.loadLesson = loadLesson;
window.nextLesson = nextLesson;
window.prevLesson = prevLesson;
window.markComplete = markComplete;
window.resetProgress = resetProgress;
window.checkQuiz = checkQuiz;
window.runCode = runCode;
window.resetCode = resetCode;
window.copyCode = copyCode;
window.closeSidebar = closeSidebar;
window.toggleSidebar = toggleSidebar;
window.toggleModule = toggleModule;
window.renderNav = renderNav;
window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;
window.drawCertificate = drawCertificate;
window.downloadCertificatePNG = downloadCertificatePNG;
window.printCertificate = printCertificate;

document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    let resumeIdx = 0;
    try {
        const saved = localStorage.getItem('go_last_lesson');
        if (saved !== null) resumeIdx = parseInt(saved, 10) || 0;
    } catch(e) {}
    loadLesson(resumeIdx >= 0 && resumeIdx < lessons.length ? resumeIdx : 0);
    updateProgress();
    
    const search = document.getElementById('lesson-search');
    if (search) {
        search.addEventListener('input', (e) => {
            renderNav(e.target.value);
        });
    }
    const mobileSearch = document.getElementById('lesson-search-mobile');
    if (mobileSearch) {
        mobileSearch.addEventListener('input', (e) => {
            renderNav(e.target.value);
        });
    }
    const mobileRowSearch = document.getElementById('lesson-search-mobile-row');
    if (mobileRowSearch) {
        mobileRowSearch.addEventListener('input', (e) => {
            renderNav(e.target.value);
        });
    }
});
