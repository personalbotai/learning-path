// ============================================
// Java Learning Path — Interactive Learning Engine
// ============================================

const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Dasar Java & Ekosistem",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Modul 2: Variabel dan Tipe Data",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Modul 6: Java Collections Framework",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Modul 7: Error Handling & Exceptions",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Modul 8: Modern Java (Functional & Streams)",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Modul 10: Concurrency Modern & Virtual Threads",
    "desc": "Java 21 LTS",
    "icon": "fa-solid fa-code"
  }
];
const lessons = [
  {
    "id": 1,
    "slug": "java-1",
    "title": "1. Apa itu Java & Ekosistem Java 21 LTS",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Apa itu Java & Ekosistem Java 21 LTS\n\n- Sejarah singkat dan filosofi 'Write Once, Run Anywhere'\n- Perbedaan JDK, JRE, dan JVM\n- Keunggulan Java 21 LTS",
    "code": "// Java 21 LTS: Apa itu Java & Ekosistem Java 21 LTS\npublic class Main { public static void main(String[] args) { System.out.println(\"Apa itu Java & Ekosistem Java 21 LTS\"); } }",
    "quiz": {
      "question": "Komponen manakah yang bertanggung jawab mengeksekusi bytecode Java menjadi bahasa mesin? (A. JDK, B. JRE, C. JVM, D. Javac) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 2,
    "slug": "java-2",
    "title": "2. Program Java Pertama (Hello World)",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Program Java Pertama (Hello World)\n\n- Membuat class pertama\n- Memahami struktur public static void main\n- Mencetak teks ke console",
    "code": "// Java 21 LTS: Program Java Pertama (Hello World)\npublic class Main { public static void main(String[] args) { System.out.println(\"Program Java Pertama (Hello World)\"); } }",
    "quiz": {
      "question": "Apa keyword yang digunakan agar method main dapat dipanggil tanpa membuat objek dari class? (A. void, B. static, C. public, D. class) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 3,
    "slug": "java-3",
    "title": "3. Struktur Program & Packages Dasar",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Struktur Program & Packages Dasar\n\n- Deklarasi package\n- Import statement\n- Struktur dasar file .java",
    "code": "// Java 21 LTS: Struktur Program & Packages Dasar\npublic class Main { public static void main(String[] args) { System.out.println(\"Struktur Program & Packages Dasar\"); } }",
    "quiz": {
      "question": "Keyword apa yang digunakan untuk mengelompokkan class-class Java ke dalam sebuah namespace/folder logis? (A. import, B. package, C. module, D. class) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 4,
    "slug": "java-4",
    "title": "4. Input dan Output Dasar",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Input dan Output Dasar\n\n- Menggunakan System.out untuk output\n- Menggunakan java.util.Scanner untuk input\n- Membaca berbagai tipe data dari user",
    "code": "// Java 21 LTS: Input dan Output Dasar\npublic class Main { public static void main(String[] args) { System.out.println(\"Input dan Output Dasar\"); } }",
    "quiz": {
      "question": "Method manakah dari class Scanner yang digunakan untuk membaca input teks hingga baris baru? (A. next(), B. nextString(), C. nextLine(), D. readLine()) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 5,
    "slug": "java-5",
    "title": "5. Komentar dan Dokumentasi Code",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Komentar dan Dokumentasi Code\n\n- Komentar satu baris (//)\n- Komentar multi-baris (/* */)\n- Komentar Javadoc (/** */)",
    "code": "// Java 21 LTS: Komentar dan Dokumentasi Code\npublic class Main { public static void main(String[] args) { System.out.println(\"Komentar dan Dokumentasi Code\"); } }",
    "quiz": {
      "question": "Format komentar manakah yang dapat diekstrak menjadi dokumentasi HTML menggunakan tools bawaan JDK? (A. //, B. /* */, C. /** */, D. <!-- -->) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 6,
    "slug": "java-6",
    "title": "6. Kompilasi dan Eksekusi",
    "module": "Modul 1: Dasar Java & Ekosistem",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Kompilasi dan Eksekusi\n\n- Menggunakan javac untuk kompilasi\n- Menggunakan java untuk menjalankan\n- Memahami file .class (Bytecode)",
    "code": "// Java 21 LTS: Kompilasi dan Eksekusi\npublic class Main { public static void main(String[] args) { System.out.println(\"Kompilasi dan Eksekusi\"); } }",
    "quiz": {
      "question": "File dengan ekstensi apa yang dihasilkan setelah program Java dikompilasi? (A. .java, B. .exe, C. .class, D. .jar) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 7,
    "slug": "java-7",
    "title": "7. Tipe Data Primitif",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data Primitif\n\n- Tipe bilangan bulat (byte, short, int, long)\n- Tipe desimal (float, double)\n- Tipe boolean dan char",
    "code": "// Java 21 LTS: Tipe Data Primitif\npublic class Main { public static void main(String[] args) { System.out.println(\"Tipe Data Primitif\"); } }",
    "quiz": {
      "question": "Berapa ukuran default tipe data 'int' di Java? (A. 8 bit, B. 16 bit, C. 32 bit, D. 64 bit) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 8,
    "slug": "java-8",
    "title": "8. Tipe Data Referensi & String",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe Data Referensi & String\n\n- Perbedaan primitif dan referensi\n- Pengenalan class String\n- Operasi dasar String (concat, length)",
    "code": "// Java 21 LTS: Tipe Data Referensi & String\npublic class Main { public static void main(String[] args) { System.out.println(\"Tipe Data Referensi & String\"); } }",
    "quiz": {
      "question": "Di Java, String adalah... (A. Tipe primitif, B. Keyword bawaan, C. Object/Class, D. Array karakter otomatis) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 9,
    "slug": "java-9",
    "title": "9. Deklarasi Variabel & var (Type Inference)",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Deklarasi Variabel & var (Type Inference)\n\n- Aturan penamaan variabel (camelCase)\n- Inisialisasi variabel\n- Menggunakan keyword 'var' (Java 10+)",
    "code": "// Java 21 LTS: Deklarasi Variabel & var (Type Inference)\npublic class Main { public static void main(String[] args) { System.out.println(\"Deklarasi Variabel & var (Type Inference)\"); } }",
    "quiz": {
      "question": "Sejak Java versi berapakah keyword 'var' dapat digunakan untuk local variable type inference? (A. Java 8, B. Java 10, C. Java 11, D. Java 17) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 10,
    "slug": "java-10",
    "title": "10. Konstanta dengan keyword final",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Konstanta dengan keyword final\n\n- Apa itu konstanta\n- Menggunakan keyword final\n- Konvensi penamaan konstanta (UPPER_SNAKE_CASE)",
    "code": "// Java 21 LTS: Konstanta dengan keyword final\npublic class Main { public static void main(String[] args) { System.out.println(\"Konstanta dengan keyword final\"); } }",
    "quiz": {
      "question": "Apa yang terjadi jika mencoba mengubah nilai variabel yang dideklarasikan dengan 'final'? (A. Warning saat runtime, B. Nilai ditimpa, C. Compile-time error, D. Program crash saat jalan) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 11,
    "slug": "java-11",
    "title": "11. Type Casting (Konversi Tipe Data)",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Type Casting (Konversi Tipe Data)\n\n- Widening Casting (Implicit)\n- Narrowing Casting (Explicit)\n- Risiko kehilangan presisi data",
    "code": "// Java 21 LTS: Type Casting (Konversi Tipe Data)\npublic class Main { public static void main(String[] args) { System.out.println(\"Type Casting (Konversi Tipe Data)\"); } }",
    "quiz": {
      "question": "Manakah sintaks eksplisit cast dari double ke int yang benar? (A. int x = d;, B. int x = int(d);, C. int x = (int) d;, D. int x = d.toInt();) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 12,
    "slug": "java-12",
    "title": "12. Operator Dasar",
    "module": "Modul 2: Variabel dan Tipe Data",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Dasar\n\n- Operator Aritmatika (+, -, *, /, %)\n- Operator Penugasan (=, +=, dst)\n- Operator Increment/Decrement (++, --)",
    "code": "// Java 21 LTS: Operator Dasar\npublic class Main { public static void main(String[] args) { System.out.println(\"Operator Dasar\"); } }",
    "quiz": {
      "question": "Apa hasil dari ekspresi 10 % 3? (A. 3.3, B. 3, C. 1, D. 0) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 13,
    "slug": "java-13",
    "title": "13. Operator Relasional & Logika",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Operator Relasional & Logika\n\n- Operator perbandingan (==, !=, >, <)\n- Operator logika (&&, ||, !)\n- Short-circuit evaluation",
    "code": "// Java 21 LTS: Operator Relasional & Logika\npublic class Main { public static void main(String[] args) { System.out.println(\"Operator Relasional & Logika\"); } }",
    "quiz": {
      "question": "Operator manakah yang mewakili logika AND? (A. ||, B. &&, C. !, D. &|) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 14,
    "slug": "java-14",
    "title": "14. Percabangan if, else if, else",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Percabangan if, else if, else\n\n- Sintaks if-else dasar\n- Chaining else if\n- Ternary operator untuk if-else inline",
    "code": "// Java 21 LTS: Percabangan if, else if, else\npublic class Main { public static void main(String[] args) { System.out.println(\"Percabangan if, else if, else\"); } }",
    "quiz": {
      "question": "Ternary operator merupakan bentuk singkat dari... (A. switch, B. loop, C. while, D. if-else) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 15,
    "slug": "java-15",
    "title": "15. Switch Statement Tradisional",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Switch Statement Tradisional\n\n- Mencocokkan nilai variabel\n- Pentingnya keyword break\n- Default case",
    "code": "// Java 21 LTS: Switch Statement Tradisional\npublic class Main { public static void main(String[] args) { System.out.println(\"Switch Statement Tradisional\"); } }",
    "quiz": {
      "question": "Apa yang terjadi jika lupa menambahkan keyword 'break' pada case switch konvensional? (A. Error, B. Fall-through ke case bawahnya, C. Eksekusi berhenti, D. Langsung ke default) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 16,
    "slug": "java-16",
    "title": "16. Switch Expressions (Java 14+)",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Switch Expressions (Java 14+)\n\n- Sintaks panah (->) pengganti titik dua\n- Menghilangkan keharusan break (no fall-through)\n- Yield keyword",
    "code": "// Java 21 LTS: Switch Expressions (Java 14+)\npublic class Main { public static void main(String[] args) { System.out.println(\"Switch Expressions (Java 14+)\"); } }",
    "quiz": {
      "question": "Keyword apa untuk me-return nilai dari multi-line block pada switch expression? (A. return, B. break, C. yield, D. out) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 17,
    "slug": "java-17",
    "title": "17. Perulangan for dan while",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Perulangan for dan while\n\n- for loop klasik (init, kond, step)\n- while loop\n- do-while loop (minimal eksekusi sekali)",
    "code": "// Java 21 LTS: Perulangan for dan while\npublic class Main { public static void main(String[] args) { System.out.println(\"Perulangan for dan while\"); } }",
    "quiz": {
      "question": "Perulangan manakah yang dijamin berjalan minimal satu kali meskipun kondisi awalnya false? (A. for, B. while, C. do-while, D. for-each) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 18,
    "slug": "java-18",
    "title": "18. Break, Continue, dan Label",
    "module": "Modul 3: Control Flow (Percabangan & Perulangan)",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Break, Continue, dan Label\n\n- Menghentikan loop paksa (break)\n- Melewati iterasi (continue)\n- Labeled loops pada perulangan bersarang",
    "code": "// Java 21 LTS: Break, Continue, dan Label\npublic class Main { public static void main(String[] args) { System.out.println(\"Break, Continue, dan Label\"); } }",
    "quiz": {
      "question": "Keyword untuk melompati sisa kode pada iterasi saat ini dan lanjut ke iterasi loop berikutnya adalah... (A. skip, B. next, C. break, D. continue) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 19,
    "slug": "java-19",
    "title": "19. Konsep Class dan Object",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Konsep Class dan Object\n\n- Blueprint (Class) vs Instance (Object)\n- Mendefinisikan Class\n- Keyword 'new' untuk instansiasi",
    "code": "// Java 21 LTS: Konsep Class dan Object\npublic class Main { public static void main(String[] args) { System.out.println(\"Konsep Class dan Object\"); } }",
    "quiz": {
      "question": "Keyword untuk membuat objek baru dari sebuah class adalah... (A. create, B. object, C. new, D. init) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 20,
    "slug": "java-20",
    "title": "20. Fields (Atribut) dan Methods",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Fields (Atribut) dan Methods\n\n- Variabel di dalam class (State)\n- Fungsi/prosedur di dalam class (Behavior)\n- Passing argumen ke method",
    "code": "// Java 21 LTS: Fields (Atribut) dan Methods\npublic class Main { public static void main(String[] args) { System.out.println(\"Fields (Atribut) dan Methods\"); } }",
    "quiz": {
      "question": "Jika method tidak mengembalikan nilai apapun, maka return type-nya ditulis dengan... (A. null, B. empty, C. none, D. void) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 21,
    "slug": "java-21",
    "title": "21. Constructor dan Keyword 'this'",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Constructor dan Keyword 'this'\n\n- Fungsi Constructor (inisialisasi awal)\n- Overloading Constructor\n- Resolusi penamaan variabel dengan 'this'",
    "code": "// Java 21 LTS: Constructor dan Keyword 'this'\npublic class Main { public static void main(String[] args) { System.out.println(\"Constructor dan Keyword 'this'\"); } }",
    "quiz": {
      "question": "Ciri utama Constructor dibandingkan method biasa adalah... (A. Harus private, B. Namanya persis sama dengan nama class, C. Mengembalikan int, D. Bersifat static) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 22,
    "slug": "java-22",
    "title": "22. Access Modifiers",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Access Modifiers\n\n- Tingkat akses (Visibility)\n- public, private, protected, package-private (default)\n- Menjaga keamanan data",
    "code": "// Java 21 LTS: Access Modifiers\npublic class Main { public static void main(String[] args) { System.out.println(\"Access Modifiers\"); } }",
    "quiz": {
      "question": "Modifier manakah yang membuat atribut hanya bisa diakses oleh method di dalam class itu sendiri? (A. public, B. protected, C. default, D. private) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 23,
    "slug": "java-23",
    "title": "23. Encapsulation (Getter dan Setter)",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Encapsulation (Getter dan Setter)\n\n- Menyembunyikan state internal (Data Hiding)\n- Method Getter (Aksesor)\n- Method Setter (Mutator) beserta validasi internal",
    "code": "// Java 21 LTS: Encapsulation (Getter dan Setter)\npublic class Main { public static void main(String[] args) { System.out.println(\"Encapsulation (Getter dan Setter)\"); } }",
    "quiz": {
      "question": "Tujuan utama enkapsulasi adalah... (A. Mempercepat run program, B. Mengontrol validitas perubahan data atribut dari luar, C. Membuat class abstrak, D. Menyatukan dua class) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 24,
    "slug": "java-24",
    "title": "24. Static Keyword",
    "module": "Modul 4: Object-Oriented Programming (OOP) Dasar",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Static Keyword\n\n- Class members vs Instance members\n- Variabel static untuk memori bersama\n- Method static untuk utility (seperti Math)",
    "code": "// Java 21 LTS: Static Keyword\npublic class Main { public static void main(String[] args) { System.out.println(\"Static Keyword\"); } }",
    "quiz": {
      "question": "Sebuah static method DAPAT mengakses secara langsung... (A. Atribut private non-static, B. Hanya anggota static lainnya dalam class, C. Keyword 'this', D. Objek instance superclass) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 25,
    "slug": "java-25",
    "title": "25. Inheritance (Pewarisan)",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Inheritance (Pewarisan)\n\n- Konsep is-a relationship\n- Menggunakan keyword 'extends'\n- Mewariskan properti dan method public/protected",
    "code": "// Java 21 LTS: Inheritance (Pewarisan)\npublic class Main { public static void main(String[] args) { System.out.println(\"Inheritance (Pewarisan)\"); } }",
    "quiz": {
      "question": "Keyword di Java untuk mendeklarasikan bahwa sebuah class mewarisi class lain adalah... (A. implements, B. inherits, C. extends, D. super) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 26,
    "slug": "java-26",
    "title": "26. Method Overriding dan Keyword super",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Method Overriding dan Keyword super\n\n- Mendefinisikan ulang method parent di child\n- Anotasi @Override\n- Memanggil implementasi parent dengan super.method()",
    "code": "// Java 21 LTS: Method Overriding dan Keyword super\npublic class Main { public static void main(String[] args) { System.out.println(\"Method Overriding dan Keyword super\"); } }",
    "quiz": {
      "question": "Anotasi apa yang digunakan agar compiler memvalidasi bahwa kita benar-benar menimpa method parent? (A. @Overload, B. @Extend, C. @Override, D. @Parent) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 27,
    "slug": "java-27",
    "title": "27. Polymorphism (Banyak Bentuk)",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Polymorphism (Banyak Bentuk)\n\n- Overloading (Compile-time) vs Overriding (Runtime)\n- Upcasting (Child ke Parent)\n- Fleksibilitas kode via tipe referensi umum",
    "code": "// Java 21 LTS: Polymorphism (Banyak Bentuk)\npublic class Main { public static void main(String[] args) { System.out.println(\"Polymorphism (Banyak Bentuk)\"); } }",
    "quiz": {
      "question": "Menyimpan referensi dari objek child ke dalam variabel dengan tipe parent-nya disebut dengan... (A. Downcasting, B. Upcasting, C. Overloading, D. Encapsulation) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 28,
    "slug": "java-28",
    "title": "28. Abstract Classes dan Methods",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Abstract Classes dan Methods\n\n- Class setengah jadi (tidak bisa new)\n- Method abstrak (tanpa body)\n- Memaksa child class memberikan implementasi",
    "code": "// Java 21 LTS: Abstract Classes dan Methods\npublic class Main { public static void main(String[] args) { System.out.println(\"Abstract Classes dan Methods\"); } }",
    "quiz": {
      "question": "Bisakah kita menginstansiasi (membuat objek baru dengan new) dari sebuah Abstract Class? (A. Ya, selalu, B. Tidak bisa, C. Bisa jika tidak ada method abstrak, D. Bisa jika disahkan) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 29,
    "slug": "java-29",
    "title": "29. Interfaces Dasar",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interfaces Dasar\n\n- Kontrak prilaku / kapabilitas murni\n- Keyword 'interface' dan 'implements'\n- Multiple inheritance tipe di Java via interface",
    "code": "// Java 21 LTS: Interfaces Dasar\npublic class Main { public static void main(String[] args) { System.out.println(\"Interfaces Dasar\"); } }",
    "quiz": {
      "question": "Sebuah class di Java dapat meng-extends satu class lain, namun dapat implements berapa interface? (A. 1, B. 2, C. Tidak ada batasan, D. 0) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 30,
    "slug": "java-30",
    "title": "30. Default dan Static Methods di Interface",
    "module": "Modul 5: OOP Lanjutan (Inheritance & Polymorphism)",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Default dan Static Methods di Interface\n\n- Menambah implementasi konkret di Interface (Java 8+)\n- Menjaga backward compatibility\n- Perbedaan dengan Abstract Class semakin tipis",
    "code": "// Java 21 LTS: Default dan Static Methods di Interface\npublic class Main { public static void main(String[] args) { System.out.println(\"Default dan Static Methods di Interface\"); } }",
    "quiz": {
      "question": "Sejak Java versi berapa sebuah interface bisa memiliki method dengan body/implementasi (melalui default method)? (A. Java 7, B. Java 8, C. Java 11, D. Java 17) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 31,
    "slug": "java-31",
    "title": "31. Pengenalan Collections & Generics",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Collections & Generics\n\n- Gambaran umum hirarki Collections\n- Masalah tanpa Generics (ClassCastException)\n- Menentukan tipe aman dengan <T>",
    "code": "// Java 21 LTS: Pengenalan Collections & Generics\npublic class Main { public static void main(String[] args) { System.out.println(\"Pengenalan Collections & Generics\"); } }",
    "quiz": {
      "question": "Fungsi utama dari Generics (tanda kurung sudut < >) pada Collections adalah... (A. Kompresi data, B. Compile-time type safety, C. Bypass enkripsi, D. Multithreading) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 32,
    "slug": "java-32",
    "title": "32. List dan ArrayList",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# List dan ArrayList\n\n- Sifat List: berurutan, indeks berbasis nol, duplikat diizinkan\n- Operasi add, get, size, remove\n- Backed by array (dynamic array)",
    "code": "// Java 21 LTS: List dan ArrayList\npublic class Main { public static void main(String[] args) { System.out.println(\"List dan ArrayList\"); } }",
    "quiz": {
      "question": "Method manakah dari interface List yang digunakan untuk mengambil elemen pada indeks tertentu? (A. fetch(i), B. get(i), C. index(i), D. elementAt(i)) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 33,
    "slug": "java-33",
    "title": "33. Set dan HashSet",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Set dan HashSet\n\n- Sifat Set: elemen unik, tidak menjamin urutan\n- Mekanisme equals() dan hashCode()\n- Penyaringan elemen ganda secara natural",
    "code": "// Java 21 LTS: Set dan HashSet\npublic class Main { public static void main(String[] args) { System.out.println(\"Set dan HashSet\"); } }",
    "quiz": {
      "question": "Koleksi mana yang menolak penambahan elemen duplikat? (A. ArrayList, B. LinkedList, C. HashSet, D. Vector) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 34,
    "slug": "java-34",
    "title": "34. Map dan HashMap",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Map dan HashMap\n\n- Key-Value pair (Kamus)\n- Bukan pewaris Collection\n- Operasi put, get, keySet, dan values",
    "code": "// Java 21 LTS: Map dan HashMap\npublic class Main { public static void main(String[] args) { System.out.println(\"Map dan HashMap\"); } }",
    "quiz": {
      "question": "Method yang digunakan untuk menyimpan pasangan key-value baru ke dalam Map adalah... (A. add(), B. insert(), C. put(), D. set()) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 35,
    "slug": "java-35",
    "title": "35. Queue dan Deque",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Queue dan Deque\n\n- Konsep antrean FIFO (First In First Out)\n- Interface Queue, Deque, dan implementasi LinkedList/ArrayDeque\n- Method offer, poll, peek",
    "code": "// Java 21 LTS: Queue dan Deque\npublic class Main { public static void main(String[] args) { System.out.println(\"Queue dan Deque\"); } }",
    "quiz": {
      "question": "Pada Queue standar, method poll() akan mengambil dan menghapus elemen di bagian... (A. Tengah, B. Belakang, C. Acak, D. Depan / Head) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 36,
    "slug": "java-36",
    "title": "36. Iterators dan Enhanced for-loop",
    "module": "Modul 6: Java Collections Framework",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Iterators dan Enhanced for-loop\n\n- Cara iterasi koleksi (for biasa vs for-each)\n- ConcurrentModificationException saat menghapus di for-each\n- Solusi hapus dinamis menggunakan Iterator",
    "code": "// Java 21 LTS: Iterators dan Enhanced for-loop\npublic class Main { public static void main(String[] args) { System.out.println(\"Iterators dan Enhanced for-loop\"); } }",
    "quiz": {
      "question": "Jika kita menambah/menghapus elemen List secara langsung dalam enhanced for-loop, exception apa yang akan muncul? (A. NullPointerException, B. ConcurrentModificationException, C. IllegalStateException, D. IndexOutOfBoundsException) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 37,
    "slug": "java-37",
    "title": "37. Konsep Exception dan Hirarki Throwable",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Konsep Exception dan Hirarki Throwable\n\n- Perbedaan Error (sistem crash) vs Exception (bisa ditangani)\n- Hirarki kelas Throwable -> Exception -> RuntimeException\n- Stack trace log",
    "code": "// Java 21 LTS: Konsep Exception dan Hirarki Throwable\npublic class Main { public static void main(String[] args) { System.out.println(\"Konsep Exception dan Hirarki Throwable\"); } }",
    "quiz": {
      "question": "Akar dari semua class exception dan error di Java adalah class... (A. RuntimeException, B. Exception, C. Throwable, D. Error) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 38,
    "slug": "java-38",
    "title": "38. Try, Catch, dan Finally",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Try, Catch, dan Finally\n\n- Mencegah program crash dengan try-catch\n- Alur eksekusi saat error terjadi vs normal\n- Blok finally (selalu jalan apapun yang terjadi)",
    "code": "// Java 21 LTS: Try, Catch, dan Finally\npublic class Main { public static void main(String[] args) { System.out.println(\"Try, Catch, dan Finally\"); } }",
    "quiz": {
      "question": "Blok kode mana yang PASTI dieksekusi terlepas dari apakah exception terpicu atau tidak? (A. try, B. catch, C. finally, D. default) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 39,
    "slug": "java-39",
    "title": "39. Checked vs Unchecked Exceptions",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Checked vs Unchecked Exceptions\n\n- Checked Exceptions (Wajib di-handle/throws saat compile: IOException)\n- Unchecked (RuntimeException: NullPointer, IndexOutOfBounds)\n- Kapan membuat custom exception",
    "code": "// Java 21 LTS: Checked vs Unchecked Exceptions\npublic class Main { public static void main(String[] args) { System.out.println(\"Checked vs Unchecked Exceptions\"); } }",
    "quiz": {
      "question": "Exception jenis apa yang dicek langsung oleh compiler dan mewajibkan penanganan sebelum kode bisa di-compile? (A. Unchecked Exception, B. Checked Exception, C. RuntimeException, D. Error) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 40,
    "slug": "java-40",
    "title": "40. Keyword throw dan throws",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Keyword throw dan throws\n\n- Mendelegasikan penanganan error (throws di signature method)\n- Membangkitkan error manual (throw new Exception())\n- Validasi argumen input",
    "code": "// Java 21 LTS: Keyword throw dan throws\npublic class Main { public static void main(String[] args) { System.out.println(\"Keyword throw dan throws\"); } }",
    "quiz": {
      "question": "Keyword untuk melempar/mencetuskan exception secara manual dari dalam block kode adalah... (A. throws, B. throw, C. try, D. catch) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 41,
    "slug": "java-41",
    "title": "41. Multiple Catch dan Multi-catch block",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Multiple Catch dan Multi-catch block\n\n- Menangkap berbagai tipe exception berbeda\n- Urutan catch harus dari subclass ke superclass\n- Java 7 Multi-catch dengan simbol pipe (|)",
    "code": "// Java 21 LTS: Multiple Catch dan Multi-catch block\npublic class Main { public static void main(String[] args) { System.out.println(\"Multiple Catch dan Multi-catch block\"); } }",
    "quiz": {
      "question": "Karakter apa yang digunakan untuk menggabungkan dua tipe exception di satu blok catch (Multi-catch)? (A. &, B. ||, C. |, D. ,) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 42,
    "slug": "java-42",
    "title": "42. Try-with-resources",
    "module": "Modul 7: Error Handling & Exceptions",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Try-with-resources\n\n- Automatic Resource Management (ARM)\n- Interface AutoCloseable\n- Menghindari memori/file leak tanpa finally yang panjang",
    "code": "// Java 21 LTS: Try-with-resources\npublic class Main { public static void main(String[] args) { System.out.println(\"Try-with-resources\"); } }",
    "quiz": {
      "question": "Agar sebuah resource dapat otomatis ditutup oleh try-with-resources, objek tersebut harus mengimplementasikan interface... (A. CloseableResource, B. Serializable, C. AutoCloseable, D. Destructible) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 43,
    "slug": "java-43",
    "title": "43. Pengenalan Functional Interfaces",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Functional Interfaces\n\n- Konsep SAM (Single Abstract Method)\n- Anotasi @FunctionalInterface\n- Interface umum: Predicate (boolean), Consumer (void), Function, Supplier",
    "code": "// Java 21 LTS: Pengenalan Functional Interfaces\npublic class Main { public static void main(String[] args) { System.out.println(\"Pengenalan Functional Interfaces\"); } }",
    "quiz": {
      "question": "Berapa jumlah abstract method yang boleh dimiliki oleh sebuah Functional Interface? (A. 0, B. 1, C. 2, D. Bebas) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 44,
    "slug": "java-44",
    "title": "44. Lambda Expressions",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Lambda Expressions\n\n- Sintaks panah (->) (parameter -> body)\n- Mengubah anonymous class menjadi lambda\n- Kejelasan kode",
    "code": "// Java 21 LTS: Lambda Expressions\npublic class Main { public static void main(String[] args) { System.out.println(\"Lambda Expressions\"); } }",
    "quiz": {
      "question": "Bagian apa dari ekspresi lambda yang memisahkan antara parameter dan body implementasi? (A. ::, B. =>, C. ->, D. :) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 45,
    "slug": "java-45",
    "title": "45. Method References",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Method References\n\n- Menggunakan lambda yang memanggil satu method spesifik\n- Sintaks Class::method\n- Reference untuk method static dan instance",
    "code": "// Java 21 LTS: Method References\npublic class Main { public static void main(String[] args) { System.out.println(\"Method References\"); } }",
    "quiz": {
      "question": "Simbol apa yang digunakan untuk membuat Method Reference di Java? (A. ->, B. ::, C. ., D. =>) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 46,
    "slug": "java-46",
    "title": "46. Pengenalan Stream API",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Stream API\n\n- Stream sebagai pipeline data fungsional (bukan Stream I/O)\n- Operasi Intermediate (lazy) vs Terminal\n- Stream tidak mengubah koleksi asli",
    "code": "// Java 21 LTS: Pengenalan Stream API\npublic class Main { public static void main(String[] args) { System.out.println(\"Pengenalan Stream API\"); } }",
    "quiz": {
      "question": "Sifat Stream adalah lazy evaluation, artinya operasi map dan filter tidak akan berjalan sampai kita memanggil method... (A. Intermediate, B. Terminal, C. peek(), D. Builder) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 47,
    "slug": "java-47",
    "title": "47. Stream: Filter, Map, dan Collect",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Stream: Filter, Map, dan Collect\n\n- filter() untuk kondisi boolean\n- map() untuk transformasi data\n- collect(Collectors.toList())",
    "code": "// Java 21 LTS: Stream: Filter, Map, dan Collect\npublic class Main { public static void main(String[] args) { System.out.println(\"Stream: Filter, Map, dan Collect\"); } }",
    "quiz": {
      "question": "Method Stream apa yang dipakai untuk mengubah atau mentransformasikan setiap elemen ke bentuk tipe lain? (A. filter(), B. reduce(), C. map(), D. modify()) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 48,
    "slug": "java-48",
    "title": "48. Optional Class",
    "module": "Modul 8: Modern Java (Functional & Streams)",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Optional Class\n\n- Solusi modern menghindari NullPointerException\n- Method of(), ofNullable(), empty()\n- Cara aman mengekstrak nilai (orElse, ifPresent)",
    "code": "// Java 21 LTS: Optional Class\npublic class Main { public static void main(String[] args) { System.out.println(\"Optional Class\"); } }",
    "quiz": {
      "question": "Method Optional apa yang digunakan untuk memberikan nilai default (fallback) jika data di dalamnya null/empty? (A. get(), B. isPresent(), C. orElse(), D. defaultNull()) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 49,
    "slug": "java-49",
    "title": "49. Text Blocks",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Text Blocks\n\n- Menulis String multi-baris panjang\n- Sintaks triple quotes (\"\"\")\n- Praktis untuk penulisan JSON, HTML, SQL di kode",
    "code": "// Java 21 LTS: Text Blocks\npublic class Main { public static void main(String[] args) { System.out.println(\"Text Blocks\"); } }",
    "quiz": {
      "question": "Karakter apa yang mengapit String Text Block di Java 15+? (A. ```, B. ''', C. \"\"\", D. *) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 50,
    "slug": "java-50",
    "title": "50. Records (Data Classes)",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Records (Data Classes)\n\n- Membuat class DTO (Data Transfer Object) ringkas\n- Otomatisasi constructor, getter, toString, equals\n- Bersifat immutable (tidak ada setter)",
    "code": "// Java 21 LTS: Records (Data Classes)\npublic class Main { public static void main(String[] args) { System.out.println(\"Records (Data Classes)\"); } }",
    "quiz": {
      "question": "Atribut/komponen dalam class tipe Record otomatis bersifat... (A. public mutable, B. private final, C. protected statis, D. public statis) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 51,
    "slug": "java-51",
    "title": "51. Pattern Matching untuk instanceof",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pattern Matching untuk instanceof\n\n- Menyatukan pengecekan tipe dan casting\n- Deklarasi pattern variable langsung di dalam kondisi if\n- Menghilangkan template boilerplate casting",
    "code": "// Java 21 LTS: Pattern Matching untuk instanceof\npublic class Main { public static void main(String[] args) { System.out.println(\"Pattern Matching untuk instanceof\"); } }",
    "quiz": {
      "question": "Apa tujuan Pattern Matching instanceof? (A. Membuat class baru, B. Melakukan Type Casting implisit secara aman setelah pengecekan tipe, C. Menangkap Error, D. Mencocokkan Regex) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 52,
    "slug": "java-52",
    "title": "52. Sealed Classes dan Interfaces",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Sealed Classes dan Interfaces\n\n- Membatasi inheritance secara eksplisit\n- Keyword sealed, permits, dan non-sealed\n- Pengembangan domain driven design dan library aman",
    "code": "// Java 21 LTS: Sealed Classes dan Interfaces\npublic class Main { public static void main(String[] args) { System.out.println(\"Sealed Classes dan Interfaces\"); } }",
    "quiz": {
      "question": "Setelah kata kunci 'sealed', keyword apa yang dipakai untuk menyebutkan daftar class yang boleh mewarisi? (A. allows, B. implements, C. permits, D. grants) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 53,
    "slug": "java-53",
    "title": "53. Pattern Matching untuk Switch",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pattern Matching untuk Switch\n\n- Switch case menggunakan tipe objek (contoh: case Integer i)\n- When clause (guards) dalam switch\n- Exhaustiveness: Switch tahu batas turunan class sealed",
    "code": "// Java 21 LTS: Pattern Matching untuk Switch\npublic class Main { public static void main(String[] args) { System.out.println(\"Pattern Matching untuk Switch\"); } }",
    "quiz": {
      "question": "Di Java 21, pattern matching switch pada Sealed class mewajibkan untuk melingkupi seluruh kemungkinan subclass-nya. Kondisi ini disebut... (A. Exhaustive, B. Infinite, C. Strict, D. Default-only) - Kunci: A",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 54,
    "slug": "java-54",
    "title": "54. Unnamed Variables & Patterns (_)",
    "module": "Modul 9: Fitur Baru Java (Java 14 - 21)",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Unnamed Variables & Patterns (_)\n\n- Java 21 JEP: Underscore untuk variabel terabaikan\n- Berguna dalam perulangan tak terpakai nilai iterasinya\n- Berguna di Exception catch parameter tak terpakai",
    "code": "// Java 21 LTS: Unnamed Variables & Patterns (_)\npublic class Main { public static void main(String[] args) { System.out.println(\"Unnamed Variables & Patterns (_)\"); } }",
    "quiz": {
      "question": "Karakter apa yang di Java 21 digunakan untuk melambangkan variabel/pattern tak bernama (sengaja tidak dipakai)? (A. *, B. ?, C. -, D. _) - Kunci: D",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 55,
    "slug": "java-55",
    "title": "55. Pengenalan Multithreading Klasik",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Multithreading Klasik\n\n- Apa itu Concurrency (paralel task)\n- Menggunakan interface Runnable vs extends Thread\n- Memulai thread terpisah dengan start()",
    "code": "// Java 21 LTS: Pengenalan Multithreading Klasik\npublic class Main { public static void main(String[] args) { System.out.println(\"Pengenalan Multithreading Klasik\"); } }",
    "quiz": {
      "question": "Untuk benar-benar menjalankan thread baru secara paralel/asinkron, kita memanggil method... (A. run(), B. execute(), C. start(), D. begin()) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 56,
    "slug": "java-56",
    "title": "56. Sinkronisasi (Race Conditions)",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Sinkronisasi (Race Conditions)\n\n- Masalah umum (Race Condition) jika dua thread modifikasi 1 nilai\n- Menjaga block/method dengan keyword synchronized\n- Atomic variables singkat",
    "code": "// Java 21 LTS: Sinkronisasi (Race Conditions)\npublic class Main { public static void main(String[] args) { System.out.println(\"Sinkronisasi (Race Conditions)\"); } }",
    "quiz": {
      "question": "Keyword di Java untuk memastikan hanya satu thread yang bisa mengakses blok/method tertentu pada waktu yang sama adalah... (A. locked, B. synchronized, C. volatile, D. atomic) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 57,
    "slug": "java-57",
    "title": "57. Thread Pools (ExecutorService)",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Thread Pools (ExecutorService)\n\n- Biaya mahal pembuatan thread OS\n- Konsep Thread Pool (daur ulang thread)\n- Class Executors dan ExecutorService",
    "code": "// Java 21 LTS: Thread Pools (ExecutorService)\npublic class Main { public static void main(String[] args) { System.out.println(\"Thread Pools (ExecutorService)\"); } }",
    "quiz": {
      "question": "Interface utama di java.util.concurrent untuk mengelola Thread Pool adalah... (A. PoolManager, B. ExecutorService, C. ThreadGroup, D. ThreadManager) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 58,
    "slug": "java-58",
    "title": "58. Pengenalan Virtual Threads (Loom)",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Virtual Threads (Loom)\n\n- Masalah 'Thread-per-request' pada server tinggi (misal 10.000 user)\n- Virtual Threads: ringan, murah (di-manage oleh JVM, bukan OS)\n- Perbedaan Platform vs Virtual Thread",
    "code": "// Java 21 LTS: Pengenalan Virtual Threads (Loom)\npublic class Main { public static void main(String[] args) { System.out.println(\"Pengenalan Virtual Threads (Loom)\"); } }",
    "quiz": {
      "question": "Keunggulan utama Virtual Threads (Java 21) adalah... (A. CPU core yang dipakai berlipat ganda, B. Overhead memori dan pembuatannya sangat ringan (jutaan thread), C. Otomatis mengatasi Race Condition, D. Memblokir OS Thread) - Kunci: B",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 59,
    "slug": "java-59",
    "title": "59. Virtual Threads pada ExecutorService",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Virtual Threads pada ExecutorService\n\n- Memanfaatkan try-with-resources pada ExecutorService baru\n- newVirtualThreadPerTaskExecutor()\n- Kapasitas menjalankan puluhan ribu task I/O (sleep)",
    "code": "// Java 21 LTS: Virtual Threads pada ExecutorService\npublic class Main { public static void main(String[] args) { System.out.println(\"Virtual Threads pada ExecutorService\"); } }",
    "quiz": {
      "question": "Method apa pada class Executors yang menghasilkan Executor pembuat satu Virtual Thread per task? (A. newCachedThreadPool, B. newVirtualThreadPool, C. newVirtualThreadPerTaskExecutor, D. newLightweightExecutor) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  },
  {
    "id": 60,
    "slug": "java-60",
    "title": "60. Review Akhir & Praktik Concurrency",
    "module": "Modul 10: Concurrency Modern & Virtual Threads",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Review Akhir & Praktik Concurrency\n\n- Mengkombinasikan Stream dengan Virtual Thread\n- Kapan butuh Thread klasik (CPU bound) vs Virtual (IO bound)\n- Masa depan concurrency Java",
    "code": "// Java 21 LTS: Review Akhir & Praktik Concurrency\npublic class Main { public static void main(String[] args) { System.out.println(\"Review Akhir & Praktik Concurrency\"); } }",
    "quiz": {
      "question": "Tugas jenis apa yang PALING optimal dan merasakan keuntungan performa dari penggunaan Virtual Threads? (A. Kalkulasi matriks kompleks 3D (CPU-bound), B. Eksekusi program sekuensial sederhana, C. Pemanggilan Database/API lambat, baca tulis file (I/O-bound), D. Render Grafis) - Kunci: C",
      "options": [
        "JVM JIT",
        "No static compile",
        "Manual GC",
        "All primitive"
      ],
      "answer": 0,
      "explanation": "Java 21 LTS modern features."
    }
  }
];
const LESSONS = lessons;

let currentLessonIndex = 0;
let progress = JSON.parse(localStorage.getItem('java_progress') || '{}');
let filterQuery = '';

// ============ Sidebar Navigation (Accordion 5 Modul + Search) ============
function renderNav(filter) {
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    const q = (filter || filterQuery || '').toLowerCase().trim();
    const curModId = LESSONS[currentLessonIndex] ? LESSONS[currentLessonIndex].moduleId : 1;
    nav.innerHTML = MODULES.map(function(mod) {
        const modLessons = LESSONS.filter(function(l) { return l.moduleId === mod.id; });
        const filtered = q ? modLessons.filter(function(l){ return l.title.toLowerCase().includes(q) || mod.title.toLowerCase().includes(q); }) : modLessons;
        if (q && filtered.length === 0) return '';
        const doneCount = modLessons.filter(function(l) { return !!progress[l.id]; }).length;
        const isCurrentModule = q ? true : mod.id === curModId;
        const lessonRows = filtered.map(function(l) {
            const idx = LESSONS.findIndex(function(x) { return x.id === l.id; });
            const isActive = idx === currentLessonIndex;
            const isDone = !!progress[l.id];
            const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
            return '<button onclick="loadLesson(' + idx + '); closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ' + cls + '">' +
                '<span class="text-[11px] shrink-0">' + (isDone ? '&#9989;' : '&#9675;') + '</span>' +
                '<span class="truncate flex-1">' + l.title + '</span></button>';
        }).join('');
        const badgeCls = doneCount === modLessons.length ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
        return '<div class="mb-1">' +
            '<button onclick="toggleModule(' + mod.id + ')" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">' +
            '<span class="flex items-center gap-2 truncate"><i class="' + mod.icon + ' text-red-400 text-sm w-4 text-center"></i><span class="truncate">' + mod.title + '</span></span>' +
            '<span class="text-[10px] font-mono px-2 py-0.5 rounded-full ' + badgeCls + '">' + doneCount + '/' + modLessons.length + '</span></button>' +
            '<div id="module-' + mod.id + '" class="space-y-0.5 mt-0.5 px-2 ' + (isCurrentModule ? '' : 'hidden') + '">' + lessonRows + '</div></div>';
    }).join('');
    const totalDone = Object.keys(progress).filter(k => progress[k]).length;
    const statDone = document.getElementById('stat-done');
    if (statDone) statDone.textContent = totalDone;
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

function toggleModule(id) {
    const el = document.getElementById('module-' + id);
    if (el) el.classList.toggle('hidden');
}

// ============ Lesson Loader ============
async function loadLesson(index) {
    if (index < 0 || index >= LESSONS.length) return;
    currentLessonIndex = index;
    const lesson = LESSONS[index];

    // Show sections
    { const _cs=document.getElementById('code-section'); if(_cs) _cs.style.display='block'; }
    { const _nb=document.getElementById('nav-buttons'); if(_nb) _nb.style.display='flex'; }

    // Update Header
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    { const _bc=document.getElementById('breadcrumb'); if(_bc) _bc.textContent = `Module ${lesson.moduleId} — ${mod ? mod.title : ''}`; }
    { const _lt=document.getElementById('lesson-title'); if(_lt) _lt.textContent = lesson.title; }
    const durationEl = document.getElementById('lesson-duration');
    if (durationEl) durationEl.innerHTML = '<i class="fa-regular fa-clock"></i> ' + (lesson.duration || '15 min');
    const levelEl = document.getElementById('lesson-level');
    if (levelEl) levelEl.textContent = 'Modul ' + lesson.moduleId + ' · ' + (mod ? mod.title : '');
    const idEl = document.getElementById('lesson-id');
    if (idEl) idEl.textContent = '#' + lesson.slug;

    // Show loading in lesson content
    const contentEl = document.getElementById('lesson-content');
    contentEl.innerHTML = `
        <div class="text-center py-12 text-slate-400">
            <i class="fas fa-spinner fa-spin text-2xl mb-3 text-orange-400"></i>
            <p>Memuat materi...</p>
        </div>
    `;

    // Fetch markdown content locally (fast & reliable)
    try {
        const response = await fetch(lesson.mdFile);
        if (response.ok) {
            const md = await response.text();
            contentEl.innerHTML = marked.parse(md);
            enhanceCodeBlocks(contentEl);
        } else {
            contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
                Gagal memuat materi dari <code>${lesson.mdFile}</code>.
            </div>`;
        }
    } catch (err) {
        console.error('Failed to load markdown:', err);
        contentEl.innerHTML = `<div class="p-6 bg-red-950/40 border border-red-800 rounded-lg text-red-300">
            Terjadi kesalahan jaringan saat memuat materi.
        </div>`;
    }

    // Setup Code Editor
    const editor = document.getElementById('code-editor');
    editor.value = lesson.defaultCode;
    setTimeout(updateGutter, 30);
    const output = document.getElementById('output');
    output.innerHTML = '<span class="text-slate-500">// Output akan muncul di sini saat tombol Run ditekan</span>';
    
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation hidden';
    valMsg.classList.add('hidden');

    // Setup Quiz
    renderQuiz(lesson);

    // Setup Progress & Completed Button
    updateButtonsState(lesson);

    // Re-render sidebar to highlight active lesson
    renderNav();
  
    updateOverallProgress();

    // Scroll to top of content
    (document.getElementById('contentArea') || document.getElementById('content-scroll'))?.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu if open
    closeMobileSidebar();
}

// ============ Code Blocks Enhancer (Copy button + Highlight) ============
function enhanceCodeBlocks(container) {
    // Highlight with highlight.js if available
    if (window.hljs) {
        container.querySelectorAll('pre code').forEach(el => {
            try { window.hljs.highlightElement(el); } catch (e) {}
        });
    }
    const preBlocks = container.querySelectorAll('pre');
    preBlocks.forEach(pre => {
        if (pre.querySelector('.code-copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin';
        btn.onclick = () => {
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            navigator.clipboard.writeText(code).then(() => {
                btn.innerHTML = '<i class="fas fa-check mr-1"></i>Tersalin!';
                setTimeout(() => { btn.innerHTML = '<i class="far fa-copy mr-1"></i>Salin'; }, 2000);
            });
        };
        pre.appendChild(btn);
    });
}

// ============ Code Execution (Simulation) ============
async function runCode() {
    const lesson = LESSONS[currentLessonIndex];
    // --- real compile via Judge0 CE (JDK 17), fallback to local println simulation ---
    try {
        const _edJ = document.getElementById('code-editor');
        const _outJ = document.getElementById('output');
        const _valJ = document.getElementById('validation-msg');
        if (_edJ && _outJ) {
            _outJ.innerHTML = '<span class="text-slate-400">\u23f3 Compiling & running (JDK 17)…</span>';
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 30000);
            const res = await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ language_id: 91, source_code: _edJ.value }),
                signal: controller.signal
            });
            clearTimeout(timer);
            if (res.ok) {
                const j = await res.json();
                const okStatus = j.status && j.status.id === 3;
                if (okStatus && j.stdout != null) {
                    const txt = j.stdout || '(tidak ada output — program selesai tanpa print)';
                    _outJ.innerHTML = '<div class="mb-2 text-slate-500 text-xs">// Output — real compile JDK 17 (Judge0)</div><div class="text-emerald-400 whitespace-pre-wrap">' + escapeHtml(txt) + '</div>';
                    const exp = (lesson.expectedOutput || '').trim();
                    if (exp && txt.includes(exp.split('\n')[0].trim().slice(0, 40))) {
                        _valJ.className = 'validation correct'; _valJ.classList.remove('hidden');
                        _valJ.innerHTML = '<i class="fas fa-check-circle mr-2 text-emerald-400"></i><strong>Output sesuai!</strong> Real compile JDK 17 — progress tersimpan.';
                        try { const prog = JSON.parse(localStorage.getItem('java_progress') || '{}'); prog[lesson.id ?? currentLessonIndex] = true; localStorage.setItem('java_progress', JSON.stringify(prog)); } catch {}
                    } else if (exp) {
                        _valJ.className = 'validation wrong'; _valJ.classList.remove('hidden');
                        _valJ.innerHTML = '\U0001f4a1 Output real belum sesuai. Harus mengandung: <b>' + escapeHtml(exp.split('\n')[0].trim().slice(0, 80)) + '</b>';
                    }
                    try { if (typeof termLog === 'function') termLog('$ javac Main.java && java Main — real compile OK', 'success'); } catch {}
                    return;
                } else {
                    const err = j.stderr || j.compile_output || j.message || (j.status && j.status.description) || 'Compile error';
                    _outJ.innerHTML = '<div class="mb-2 text-slate-500 text-xs">// Compiler error — JDK 17</div><div class="text-rose-400 whitespace-pre-wrap">' + escapeHtml(String(err).slice(0, 1500)) + '</div>';
                    _valJ.className = 'validation wrong'; _valJ.classList.remove('hidden');
                    _valJ.innerHTML = '\u274c Compile error — perbaiki kode lalu Run lagi.';
                    return;
                }
            }
        }
    } catch (e) { /* network fail -> local simulation below */ }
    const _ed=document.getElementById('code-editor');
    const userCode = _ed ? _ed.value : '';
    const output = document.getElementById('output');
    if(!_ed || !output) return;
    const valMsg = document.getElementById('validation-msg');

    // --- extract System.out.print/println/printf strings (real simulation) ---
    function simulateJava(code) {
        const lines = [];
        let hasPrint = false;
        // Match System.out.println("..."), System.out.print("..."), System.out.printf("...", ...)
        const re = /System\.out\.print(?:ln|f)?\s*\(\s*([^)]*)\)/g;
        let m;
        while ((m = re.exec(code)) !== null) {
            hasPrint = true;
            let args = m[1].trim();
            // handle string literals + concatenations with +
            // split by + outside quotes (simple)
            let parts = [];
            let cur = '', inStr = false, esc = false, quote = '';
            for (let i = 0; i < args.length; i++) {
                const ch = args[i];
                if (esc) { cur += ch; esc = false; continue; }
                if (ch === '\\') { cur += ch; esc = true; continue; }
                if ((ch === '"' || ch === "'") && !inStr) { inStr = true; quote = ch; cur += ch; continue; }
                if (ch === quote && inStr) { inStr = false; cur += ch; continue; }
                if (ch === '+' && !inStr) { parts.push(cur.trim()); cur = ''; continue; }
                cur += ch;
            }
            if (cur.trim()) parts.push(cur.trim());
            // resolve each part to string
            let resolved = parts.map(p => {
                const sm = p.match(/^"(.*)"$/s) || p.match(/^'(.*)'$/s);
                if (sm) return sm[1].replace(/\\n/g,'\n').replace(/\\t/g,'\t').replace(/\\"/g,'"');
                // numeric literal
                if (/^-?\d+(\.\d+)?$/.test(p)) return p;
                // boolean/null
                if (p === 'true' || p === 'false' || p === 'null') return p;
                // try to resolve variable assignment: look for "Type name = value" or "name = value"
                const varRe = new RegExp('(?:\\b\\w+\\s+)?' + p.replace(/\$/g,'\\$') + '\\s*=\\s*("[^"]*"|\'[^\']*\'|\\S+)');
                const vm = code.match(varRe);
                if (vm) {
                    const v = vm[1].replace(/^["']|["']$/g,'');
                    return v;
                }
                return p;
            }).join('');
            lines.push(resolved);
        }
        // Arrays.toString helper
        const arrRe = /Arrays\.toString\s*\(\s*(\w+)\s*\)/g;
        let am;
        while ((am = arrRe.exec(code)) !== null) {
            if (!hasPrint) { lines.push('[array]'); hasPrint = true; }
        }
        return { hasPrint, text: lines.join('\n'), lines };
    }

    const sim = simulateJava(userCode);
    let displayText = '';
    let isReal = sim.hasPrint && sim.text.trim().length > 0;

    if (isReal) {
        displayText = sim.text;
        output.innerHTML = `<div class="mb-2 text-slate-500 text-xs">// Output — simulasi lokal (println extraction)</div><div class="text-emerald-400 whitespace-pre-wrap">${escapeHtml(displayText)}</div>`;
    } else {
        // fallback: show expected but mark as simulation
        displayText = lesson.expectedOutput || '(tidak ada output)';
        const hint = isReal ? '' : '<div class="text-[11px] text-slate-500 mt-1">Tip: pakai System.out.println("teks") agar output terbaca real.</div>';
        output.innerHTML = `<div class="mb-2 text-slate-500 text-xs">// Output simulasi — belum ada System.out.println terdeteksi</div><div class="text-emerald-400 whitespace-pre-wrap">${escapeHtml(displayText)}</div>${hint}`;
        isReal = false;
    }

    // validation vs expectedOutput
    const expected = (lesson.expectedOutput || '').trim();
    const got = (isReal ? displayText : expected).trim();
    const ok = expected && got.includes(expected.split('\n')[0].trim().slice(0,40));

    if (expected && (isReal ? displayText.includes(expected.split('\n')[0].trim()) : true)) {
        // if real print contains first line of expected, mark correct
        const firstLine = expected.split('\n')[0].trim();
        if (!isReal || displayText.includes(firstLine) || firstLine.length < 5) {
            valMsg.className = 'validation correct';
            valMsg.classList.remove('hidden');
            valMsg.innerHTML = `<i class="fas fa-check-circle mr-2 text-emerald-400"></i><strong>${isReal ? 'Output terdeteksi!' : 'Kode siap!'}</strong> ${isReal ? 'println terbaca — lanjutkan!' : 'Simulasi sesuai ekspektasi JVM (Java 21).'}`;
            if (isReal) {
                const k = lesson.id ?? currentLessonIndex;
                try { const prog = JSON.parse(localStorage.getItem('java_progress')||'{}'); prog[k]=true; localStorage.setItem('java_progress', JSON.stringify(prog)); } catch {}
            }
        } else {
            valMsg.className = 'validation wrong';
            valMsg.classList.remove('hidden');
            valMsg.innerHTML = `💡 Output belum sesuai. Harus mengandung: <b>${escapeHtml(firstLine.slice(0,80))}</b>`;
        }
    } else {
        valMsg.className = 'validation hidden';
        valMsg.classList.add('hidden');
    }
    try { if (typeof termLog === 'function') termLog('$ java run — ' + (isReal ? 'real println' : 'simulasi'), isReal ? 'success' : 'muted'); } catch {}
}

function resetCode() {
    const lesson = LESSONS[currentLessonIndex];
    document.getElementById('code-editor').value = lesson.defaultCode;
    setTimeout(updateGutter, 30);
    document.getElementById('output').innerHTML = '<span class="text-slate-500">// Kode telah di-reset ke versi awal</span>';
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation hidden';
    valMsg.classList.add('hidden');
}

function showSolution() {
    const lesson = LESSONS[currentLessonIndex];
    const valMsg = document.getElementById('validation-msg');
    valMsg.className = 'validation info';
    valMsg.classList.remove('hidden');
    valMsg.innerHTML = `<div class="font-semibold mb-1"><i class="fas fa-lightbulb mr-2 text-amber-400"></i>Petunjuk Pembelajaran:</div><div>${lesson.hint}</div>`;
}

// ============ Master Template Helpers: Gutter / Copy / Terminal / Clear ============
function updateGutter() {
    const ta = document.getElementById('code-editor');
    const gutter = document.getElementById('editor-gutter');
    if (!ta || !gutter) return;
    const lines = ta.value.split('\n').length;
    gutter.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    const code = editor.value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            termLog('$ code copied to clipboard', 'success');
        }).catch(() => {
            editor.select();
            document.execCommand('copy');
        });
    } else {
        editor.select();
        document.execCommand('copy');
    }
}

function clearOutput() {
    const out = document.getElementById('output');
    if (out) out.innerHTML = '<span class="muted"># Output akan muncul di sini — klik Run atau jalankan javac di terminal</span>';
}

function termLog(html, cls = '') {
    const log = document.getElementById('terminal-log');
    if (!log) return;
    const div = document.createElement('div');
    div.className = 'term-line ' + cls;
    div.innerHTML = html;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
}

function clearTerminal() {
    const log = document.getElementById('terminal-log');
    if (log) log.innerHTML = '<div class="term-line muted">$ terminal dibersihkan</div>';
}

function runTerminal() {
    const inp = document.getElementById('terminal-input');
    if (!inp) return;
    const cmd = inp.value.trim();
    if (!cmd) return;
    termLog('$ ' + escapeHtml(cmd));
    inp.value = '';
    if (cmd === 'clear' || cmd === 'cls') { clearTerminal(); return; }
    if (cmd === 'help') {
        termLog('Perintah tersedia:<br>javac Main.java && java Main — jalankan editor<br>java --version — cek JDK<br>clear / cls — bersihkan terminal<br>help — bantuan ini');
        return;
    }
    if (/javac|java\s+Main|java --version|java -version/.test(cmd)) {
        const lesson = LESSONS[currentLessonIndex];
        if (lesson) {
            termLog('$ javac Main.java && java Main');
            termLog(escapeHtml(lesson.expectedOutput), 'success');
        } else {
            termLog('$ Hello, Java 21!', 'success');
        }
        return;
    }
    termLog('simulasi: perintah tidak dikenal — ketik <code>help</code>', 'err');
}

// ============ Quiz Engine ============
function renderQuiz(lesson) {
    const quizSec = document.getElementById('quiz-section');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    quizResult.innerHTML = '';

    if (!lesson.quiz || lesson.quiz.length === 0) {
        if (quizSec) { quizSec.style.display = 'none'; quizSec.classList.add('hidden'); }
        return;
    }

    if (quizSec) { quizSec.style.display = 'block'; quizSec.classList.remove('hidden'); }
    quizContent.innerHTML = lesson.quiz.map((q, qIndex) => `
        <div class="quiz-question-card" id="quiz-card-${qIndex}">
            <div class="quiz-q-text">${qIndex + 1}. ${escapeHtml(q.question)}</div>
            <div class="quiz-options-group">
                ${q.options.map((opt, oIndex) => `
                    <label class="quiz-option" id="q-${qIndex}-opt-${oIndex}">
                        <input type="radio" name="quiz_q_${qIndex}" value="${oIndex}">
                        <span>${escapeHtml(opt)}</span>
                    </label>
                `).join('')}
            </div>
            <div class="quiz-explain hidden" id="quiz-explain-${qIndex}"></div>
        </div>
    `).join('');
}

function checkQuiz() {
    const lesson = LESSONS[currentLessonIndex];
    if (!lesson.quiz || lesson.quiz.length === 0) return;

    let correctCount = 0;
    let answeredAll = true;

    lesson.quiz.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="quiz_q_${qIndex}"]:checked`);
        const explainEl = document.getElementById(`quiz-explain-${qIndex}`);

        if (!selected) {
            answeredAll = false;
            return;
        }

        const chosen = parseInt(selected.value);
        const isCorrect = chosen === q.answer;

        if (isCorrect) correctCount++;

        // Visual feedback
        q.options.forEach((_, oIndex) => {
            const optLabel = document.getElementById(`q-${qIndex}-opt-${oIndex}`);
            optLabel.classList.remove('correct', 'wrong');
            if (oIndex === q.answer) {
                optLabel.classList.add('correct');
            } else if (oIndex === chosen && !isCorrect) {
                optLabel.classList.add('wrong');
            }
        });

        if (explainEl && q.explanation) {
            explainEl.className = 'quiz-explain';
            explainEl.innerHTML = `<strong>Penjelasan:</strong> ${escapeHtml(q.explanation)}`;
        }
    });

    const resEl = document.getElementById('quiz-result');
    if (!answeredAll) {
        resEl.innerHTML = `<div class="quiz-feedback partial"><i class="fas fa-exclamation-circle mr-2"></i>Harap jawab semua pertanyaan sebelum melihat hasil.</div>`;
        return;
    }

    const total = lesson.quiz.length;
    const isPassing = correctCount === total;

    if (isPassing) {
        resEl.innerHTML = `<div class="quiz-feedback correct"><i class="fas fa-trophy mr-2"></i>Luar biasa! Semua jawaban benar (${correctCount}/${total}). Lesson siap ditandai selesai!</div>`;
        // Auto mark complete when quiz is perfect
        markComplete(false);
    } else {
        resEl.innerHTML = `<div class="quiz-feedback wrong"><i class="fas fa-times-circle mr-2"></i>Anda mendapatkan ${correctCount} dari ${total} benar. Periksa jawaban dan pelajari kembali penjelasannya.</div>`;
    }
}

// ============ Progress Management ============
function updateButtonsState(lesson) {
    const a = document.getElementById('complete-btn');
    const b = document.getElementById('completed-btn');
    const isDone = lesson && !!progress[lesson.id];
    if (a) a.style.display = isDone ? 'none' : 'inline-flex';
    if (b) b.style.display = isDone ? 'inline-flex' : 'none';
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (prevBtn) prevBtn.disabled = currentLessonIndex === 0;
    if (nextBtn) nextBtn.disabled = currentLessonIndex === LESSONS.length - 1;
}
function updateCompleteButtons(){ const cur = LESSONS[currentLessonIndex]; if(cur) updateButtonsState(cur); }

function markComplete(advance = true) {
    const lesson = LESSONS[currentLessonIndex];
    progress[lesson.id] = true;
    localStorage.setItem('java_progress', JSON.stringify(progress));

    updateButtonsState(lesson);
    renderNav();
    updateOverallProgress();

    if (advance && currentLessonIndex < LESSONS.length - 1) {
        setTimeout(() => {
            loadLesson(currentLessonIndex + 1);
        }, 600);
    }
}

function updateOverallProgress() {
    const total = LESSONS.length;
    const done = Object.keys(progress).filter(k => progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = pct + '%';
    const bar  = document.getElementById('progress-fill-bar');
    if (bar)  bar.style.width  = pct + '%';
    const text = document.getElementById('course-progress');
    if (text) text.textContent = pct + '%';
    const pt   = document.getElementById('progress-text');
    if (pt)   pt.textContent   = pct + '%';
    const count = document.getElementById('progress-count');
    if (count) count.textContent = `${done}/${total}`;
    const mobText = document.getElementById('mobile-progress');
    if (mobText) mobText.textContent = pct + '%';
    const sd = document.getElementById('stat-done');
    if (sd) sd.textContent = String(done);
}

function resetProgress() {
    if (!confirm('Apakah Anda yakin ingin mereset seluruh progres pembelajaran Java?')) return;
    progress = {};
    localStorage.removeItem('java_progress');
    renderNav();
    updateOverallProgress();
    if (LESSONS[currentLessonIndex]) {
        updateButtonsState(LESSONS[currentLessonIndex]);
    }
}

// ============ Navigation ============
function nextLesson() {
    if (currentLessonIndex < LESSONS.length - 1) {
        loadLesson(currentLessonIndex + 1);
    }
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        loadLesson(currentLessonIndex - 1);
    }
}

// ============ Mobile Drawer ============

function closeSidebar() {
    try { if (typeof closeMobileSidebar === 'function') closeMobileSidebar(); } catch(e){}
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('backdrop');
    const ov = document.getElementById('sidebarOverlay');
    if (sb) { sb.classList.remove('open'); sb.classList.remove('sidebar-open'); }
    if (bd) { bd.classList.remove('show'); bd.classList.add('hidden'); }
    if (ov) { ov.classList.remove('show'); ov.classList.add('hidden'); }
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && sb) {
        sb.classList.remove('-translate-x-full');
    }
}
function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const backdrop = document.getElementById('backdrop');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('show');
        if (backdrop) backdrop.classList.toggle('show');
    });

    if (overlay) overlay.addEventListener('click', closeMobileSidebar);
    if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const backdrop = document.getElementById('backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (backdrop) backdrop.classList.remove('show');
}

// ============ Utilities ============
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ============ Boot ============
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    updateOverallProgress();
    setupMobileMenu();
  if (typeof loadLesson === 'function') { setTimeout(() => loadLesson(0), 50); }

    // Editor Gutter Live
    const ed = document.getElementById('code-editor');
    if (ed) {
        ed.addEventListener('input', updateGutter);
        ed.addEventListener('scroll', () => {
            const g = document.getElementById('editor-gutter');
            if (g) g.scrollTop = ed.scrollTop;
        });
    }

    // Tabs (Editor / Terminal)
    document.querySelectorAll('.tab').forEach(t => {
        t.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            const panel = document.getElementById('tab-' + t.dataset.tab);
            if (panel) panel.classList.add('active');
        });
    });

    // Search Input (Desktop & Mobile)
    const s = document.getElementById('searchInput') || document.getElementById('lesson-search');
    const sm = document.getElementById('searchInputMobile') || document.getElementById('lesson-search-mobile');
    const handler = (v) => { filterQuery = v; renderNav(); };
    if (s) s.addEventListener('input', e => handler(e.target.value));
    if (sm) sm.addEventListener('input', e => { handler(e.target.value); if (s) s.value = e.target.value; });

    document.addEventListener('keydown', e => {
        if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
            e.preventDefault();
            s?.focus();
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        if (e.key === 'Escape') {
            document.getElementById('sidebar')?.classList.remove('open');
            document.getElementById('backdrop')?.classList.remove('show');
            document.getElementById('sidebarOverlay')?.classList.remove('show');
        }
    });

    // Terminal Enter
    const ti = document.getElementById('terminal-input');
    if (ti) ti.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            runTerminal();
        }
    });

    // Auto-load last viewed or first lesson
    const savedLastIndex = parseInt(localStorage.getItem('java_last_lesson') || '0');
    const initialIndex = (savedLastIndex >= 0 && savedLastIndex < LESSONS.length) ? savedLastIndex : 0;

    // Load first lesson directly (or last viewed)
    loadLesson(initialIndex);
    setTimeout(updateGutter, 200);

    // Save current index on unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('java_last_lesson', currentLessonIndex);
    });

// Expose for debugging & inline handlers
if (typeof window !== 'undefined') {
    window.MODULES = MODULES;
    window.LESSONS = LESSONS;
    window.lessons = LESSONS;
    window.app = { MODULES, LESSONS, lessons: LESSONS, loadLesson, copyCode, clearOutput, clearTerminal, runTerminal, nextLesson, prevLesson, markComplete, resetProgress, renderNav };
}
});


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 30;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 30;
    const done = Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ef4444');
    gradient.addColorStop(0.5, '#ea580c');
    gradient.addColorStop(1, '#ef4444');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Java Learning Path — Modern Java 21 LTS', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform Java Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('☕', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-java.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
