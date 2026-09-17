// TypeScript Learning Path - Main Application
// 12 Modules, 77 Lessons
'use strict';

const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Pengenalan & Dasar TypeScript",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Modul 2: Tipe Data Kompleks & Objek",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Modul 3: Fungsi & Anotasi Parameter",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Union, Intersection & Type Narrowing",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Modul 5: Interface & Type Alias Mendalam",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Modul 6: Generics",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Modul 8: Utility Types Bawaan",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Modul 9: OOP & Class di TypeScript",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "desc": "Materi TypeScript",
    "icon": "fa-solid fa-code"
  }
];

const lessons = [
  {
    "id": 1,
    "slug": "ts-1",
    "title": "1. Apa itu TypeScript?",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Apa itu TypeScript?\n\n- Perbedaan TS vs JS\n- Konsep Static Typing vs Dynamic Typing",
    "code": "// TypeScript Apa itu TypeScript?\nconst lessonTitle: string = 'Apa itu TypeScript?';",
    "quiz": {
      "question": "Apa keuntungan utama TypeScript dibandingkan JavaScript pada aplikasi skala besar?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 2,
    "slug": "ts-2",
    "title": "2. Setup & Kompilasi Dasar",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Setup & Kompilasi Dasar\n\n- Peran file tsconfig.json\n- Penggunaan compiler tsc",
    "code": "// TypeScript Setup & Kompilasi Dasar\nconst lessonTitle: string = 'Setup & Kompilasi Dasar';",
    "quiz": {
      "question": "File apa yang digunakan untuk mengatur konfigurasi compiler pada TypeScript?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 3,
    "slug": "ts-3",
    "title": "3. Type Inference",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Type Inference\n\n- Bagaimana TS menebak tipe secara otomatis\n- Kapan tipe eksplisit tidak diperlukan",
    "code": "// TypeScript Type Inference\nconst lessonTitle: string = 'Type Inference';",
    "quiz": {
      "question": "Apa istilah untuk kemampuan TypeScript dalam menebak tipe data tanpa anotasi tertulis?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 4,
    "slug": "ts-4",
    "title": "4. Type Annotation (Anotasi Tipe)",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Type Annotation (Anotasi Tipe)\n\n- Sintaks let x: tipe\n- Tipe primitif: string, number, boolean",
    "code": "// TypeScript Type Annotation (Anotasi Tipe)\nconst lessonTitle: string = 'Type Annotation (Anotasi Tipe)';",
    "quiz": {
      "question": "Bagaimana sintaks yang benar untuk mendeklarasikan variabel bertipe angka di TypeScript?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 5,
    "slug": "ts-5",
    "title": "5. Tipe any vs unknown",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Tipe any vs unknown\n\n- Bahaya menggunakan any\n- Mengapa unknown lebih aman untuk tipe tidak tertebak",
    "code": "// TypeScript Tipe any vs unknown\nconst lessonTitle: string = 'Tipe any vs unknown';",
    "quiz": {
      "question": "Mengapa disarankan untuk menggunakan tipe 'unknown' daripada 'any'?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 6,
    "slug": "ts-6",
    "title": "6. Array & Tuple",
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "moduleId": 1,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Array & Tuple\n\n- Sintaks Array T[] vs Array<T>\n- Tuple untuk array dengan tipe dan panjang tetap",
    "code": "// TypeScript Array & Tuple\nconst lessonTitle: string = 'Array & Tuple';",
    "quiz": {
      "question": "Apa perbedaan paling mendasar antara tipe Array biasa dan Tuple di TypeScript?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 7,
    "slug": "ts-7",
    "title": "7. Object Types Dasar",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Object Types Dasar\n\n- Menentukan tipe/bentuk sebuah objek (inline type)\n- Properti wajib dalam objek",
    "code": "// TypeScript Object Types Dasar\nconst lessonTitle: string = 'Object Types Dasar';",
    "quiz": {
      "question": "Simbol apa yang memisahkan nama properti dan tipenya di dalam definisi tipe objek?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 8,
    "slug": "ts-8",
    "title": "8. Optional Properties",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Optional Properties\n\n- Penggunaan modifier tanda tanya (?)\n- Menghindari error saat properti tidak tersedia",
    "code": "// TypeScript Optional Properties\nconst lessonTitle: string = 'Optional Properties';",
    "quiz": {
      "question": "Karakter apa yang digunakan untuk membuat sebuah properti menjadi tidak wajib (opsional)?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 9,
    "slug": "ts-9",
    "title": "9. Readonly Properties",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Readonly Properties\n\n- Mencegah mutasi data menggunakan modifier readonly\n- Perbedaan readonly dengan const",
    "code": "// TypeScript Readonly Properties\nconst lessonTitle: string = 'Readonly Properties';",
    "quiz": {
      "question": "Modifier apa yang mencegah suatu properti objek diubah nilainya setelah diinisialisasi?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 10,
    "slug": "ts-10",
    "title": "10. Index Signatures",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Index Signatures\n\n- Membuat objek dinamis sebagai kamus/dictionary\n- Batasan tipe pada key index",
    "code": "// TypeScript Index Signatures\nconst lessonTitle: string = 'Index Signatures';",
    "quiz": {
      "question": "Kapan penggunaan index signature direkomendasikan?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 11,
    "slug": "ts-11",
    "title": "11. Enum (Numeric & String)",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Enum (Numeric & String)\n\n- Mendefinisikan himpunan konstanta terstruktur\n- Auto-increment pada numeric enum",
    "code": "// TypeScript Enum (Numeric & String)\nconst lessonTitle: string = 'Enum (Numeric & String)';",
    "quiz": {
      "question": "Secara default, nilai numerik apa yang diberikan ke anggota pertama dari sebuah Enum?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 12,
    "slug": "ts-12",
    "title": "12. Enum vs Const Assertions (as const)",
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "moduleId": 2,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Enum vs Const Assertions (as const)\n\n- Literal inference dengan 'as const'\n- Kelebihan 'as const' untuk performa bundler",
    "code": "// TypeScript Enum vs Const Assertions (as const)\nconst lessonTitle: string = 'Enum vs Const Assertions (as const)';",
    "quiz": {
      "question": "Apa keuntungan menggunakan 'as const' dibandingkan dengan enum?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 13,
    "slug": "ts-13",
    "title": "13. Parameter & Return Type",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Parameter & Return Type\n\n- Mengetik input fungsi\n- Menentukan nilai kembalian (return type) fungsi",
    "code": "// TypeScript Parameter & Return Type\nconst lessonTitle: string = 'Parameter & Return Type';",
    "quiz": {
      "question": "Jika sebuah fungsi tidak secara eksplisit didefinisikan return type-nya, apa yang dilakukan TypeScript?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 14,
    "slug": "ts-14",
    "title": "14. Optional & Default Parameters",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Optional & Default Parameters\n\n- Parameter fungsi yang tidak wajib (?)\n- Memberikan nilai bawaan (default value)",
    "code": "// TypeScript Optional & Default Parameters\nconst lessonTitle: string = 'Optional & Default Parameters';",
    "quiz": {
      "question": "Di mana posisi parameter opsional harus ditempatkan dalam argumen fungsi?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 15,
    "slug": "ts-15",
    "title": "15. Rest Parameters",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Rest Parameters\n\n- Menangani jumlah argumen tak terhingga dengan ...args\n- Mengetik rest parameters sebagai Array",
    "code": "// TypeScript Rest Parameters\nconst lessonTitle: string = 'Rest Parameters';",
    "quiz": {
      "question": "Tipe data struktur apa yang selalu digunakan untuk merepresentasikan rest parameter?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 16,
    "slug": "ts-16",
    "title": "16. Function Types",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Types\n\n- Menyimpan signature/bentuk fungsi ke dalam tipe\n- Sintaks panah (=>) pada tipe fungsi",
    "code": "// TypeScript Function Types\nconst lessonTitle: string = 'Function Types';",
    "quiz": {
      "question": "Simbol apa yang digunakan untuk memisahkan parameter dan return type dalam penulisan tipe fungsi?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 17,
    "slug": "ts-17",
    "title": "17. Void & Never",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Void & Never\n\n- Perbedaan void (selesai tanpa return) vs never (tidak pernah selesai)\n- Kasus penggunaan throw error dan infinite loops",
    "code": "// TypeScript Void & Never\nconst lessonTitle: string = 'Void & Never';",
    "quiz": {
      "question": "Tipe apa yang direpresentasikan oleh fungsi yang memiliki infinite loop (perulangan tiada henti)?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 18,
    "slug": "ts-18",
    "title": "18. Function Overloading",
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "moduleId": 3,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Function Overloading\n\n- Satu fungsi dengan berbagai bentuk input/output\n- Implementasi signature overload",
    "code": "// TypeScript Function Overloading\nconst lessonTitle: string = 'Function Overloading';",
    "quiz": {
      "question": "Apakah implementasi utama dari function overload di TS harus mencakup atau mengakomodasi semua bentuk signature yang didefinisikan?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 19,
    "slug": "ts-19",
    "title": "19. Union Types (|)",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Union Types (|)\n\n- Mendeklarasikan tipe fleksibel (A atau B)\n- Penggunaan tipe union pada variabel dan fungsi",
    "code": "// TypeScript Union Types (|)\nconst lessonTitle: string = 'Union Types (|)';",
    "quiz": {
      "question": "Karakter apa yang digunakan untuk memisahkan antar tipe pada Union Types?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 20,
    "slug": "ts-20",
    "title": "20. Intersection Types (&)",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Intersection Types (&)\n\n- Menggabungkan beberapa tipe menjadi satu bentuk utuh\n- Kasus penggunaan pada tipe objek majemuk",
    "code": "// TypeScript Intersection Types (&)\nconst lessonTitle: string = 'Intersection Types (&)';",
    "quiz": {
      "question": "Apa hasil dari Intersection Type (&) antara string dan number?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 21,
    "slug": "ts-21",
    "title": "21. Literal Types",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Literal Types\n\n- Menentukan tipe menggunakan nilai presisi\n- Kombinasi Literal Types dan Union Types",
    "code": "// TypeScript Literal Types\nconst lessonTitle: string = 'Literal Types';",
    "quiz": {
      "question": "Apa keuntungan utama menggunakan Literal Types yang dikombinasikan dengan Union?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 22,
    "slug": "ts-22",
    "title": "22. Type Guards (typeof & instanceof)",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Type Guards (typeof & instanceof)\n\n- Mengecilkan (narrowing) tipe berdasarkan kondisi runtime\n- Penggunaan typeof untuk primitif dan instanceof untuk class",
    "code": "// TypeScript Type Guards (typeof & instanceof)\nconst lessonTitle: string = 'Type Guards (typeof & instanceof)';",
    "quiz": {
      "question": "Keyword apa yang bisa mengecek apakah variabel adalah instance dari class tertentu di runtime?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 23,
    "slug": "ts-23",
    "title": "23. Discriminated Unions",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Discriminated Unions\n\n- Properti penanda (discriminant) dalam objek\n- Pola switch-case yang aman secara tipe",
    "code": "// TypeScript Discriminated Unions\nconst lessonTitle: string = 'Discriminated Unions';",
    "quiz": {
      "question": "Apa peran dari field (properti) khusus pada sebuah Discriminated Union?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 24,
    "slug": "ts-24",
    "title": "24. Custom Type Predicates (is)",
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "moduleId": 4,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Custom Type Predicates (is)\n\n- Membuat fungsi khusus penentu tipe\n- Return type boolean berformat 'arg is Type'",
    "code": "// TypeScript Custom Type Predicates (is)\nconst lessonTitle: string = 'Custom Type Predicates (is)';",
    "quiz": {
      "question": "Keyword apa yang digunakan di akhir fungsi predicate agar TypeScript tahu operasi narrowing sukses?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 25,
    "slug": "ts-25",
    "title": "25. Type Aliases (type keyword)",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Type Aliases (type keyword)\n\n- Memberi nama custom pada tipe data\n- Fleksibilitas tipe untuk union atau primitif",
    "code": "// TypeScript Type Aliases (type keyword)\nconst lessonTitle: string = 'Type Aliases (type keyword)';",
    "quiz": {
      "question": "Apakah Type Alias bisa digunakan untuk menamai tipe Union dan Literal sekaligus?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 26,
    "slug": "ts-26",
    "title": "26. Interfaces Dasar",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interfaces Dasar\n\n- Mendefinisikan blueprint dari objek atau kelas\n- Menyatakan kontrak untuk properti dan method",
    "code": "// TypeScript Interfaces Dasar\nconst lessonTitle: string = 'Interfaces Dasar';",
    "quiz": {
      "question": "Berbeda dengan Type Alias, Interface hanya dapat digunakan untuk merepresentasikan apa?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 27,
    "slug": "ts-27",
    "title": "27. Interface vs Type (Perbedaan)",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Interface vs Type (Perbedaan)\n\n- Declaration Merging (hanya Interface)\n- Intersection pada Type",
    "code": "// TypeScript Interface vs Type (Perbedaan)\nconst lessonTitle: string = 'Interface vs Type (Perbedaan)';",
    "quiz": {
      "question": "Fitur apa yang memungkinkan Anda mendeklarasikan interface berulang kali agar tergabung menjadi satu?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 28,
    "slug": "ts-28",
    "title": "28. Extending Interfaces",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Extending Interfaces\n\n- Pewarisan sifat dari interface lain (extends)\n- Meng-extend tipe lebih dari satu",
    "code": "// TypeScript Extending Interfaces\nconst lessonTitle: string = 'Extending Interfaces';",
    "quiz": {
      "question": "Keyword apa yang digunakan oleh Interface untuk mewarisi sifat dari Interface lainnya?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 29,
    "slug": "ts-29",
    "title": "29. Implements pada Class",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Implements pada Class\n\n- Memaksa class memenuhi struktur Interface\n- Pemakaian ganda multiple interface",
    "code": "// TypeScript Implements pada Class\nconst lessonTitle: string = 'Implements pada Class';",
    "quiz": {
      "question": "Keyword apa yang menghubungkan sebuah Class sehingga wajib mematuhi aturan sebuah Interface?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 30,
    "slug": "ts-30",
    "title": "30. Recursive Types",
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "moduleId": 5,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Recursive Types\n\n- Tipe data yang mereferensikan dirinya sendiri\n- Pola Tree, JSON, dan Data bersarang",
    "code": "// TypeScript Recursive Types\nconst lessonTitle: string = 'Recursive Types';",
    "quiz": {
      "question": "Struktur data seperti apa yang sangat bergantung pada pembuatan Recursive Type?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 31,
    "slug": "ts-31",
    "title": "31. Pengenalan Generics",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pengenalan Generics\n\n- Konsep parameter untuk tipe data\n- Menghindari repetisi fungsi identikal beda tipe",
    "code": "// TypeScript Pengenalan Generics\nconst lessonTitle: string = 'Pengenalan Generics';",
    "quiz": {
      "question": "Simbol konvensi apa yang paling umum dipakai (satu huruf kapital) untuk merepresentasikan tipe Generic?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 32,
    "slug": "ts-32",
    "title": "32. Generic Interfaces & Types",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generic Interfaces & Types\n\n- Interface yang menerima argumen tipe\n- Membangun struktur wrapper universal",
    "code": "// TypeScript Generic Interfaces & Types\nconst lessonTitle: string = 'Generic Interfaces & Types';",
    "quiz": {
      "question": "Bagaimana cara membaca secara konsep dari definisi APIResponse<string>?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 33,
    "slug": "ts-33",
    "title": "33. Generic Classes",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generic Classes\n\n- Class yang mengadopsi fleksibilitas generic type\n- Mendefinisikan method yang spesifik pada generic class",
    "code": "// TypeScript Generic Classes\nconst lessonTitle: string = 'Generic Classes';",
    "quiz": {
      "question": "Kapan penentuan tipe pasti (konkret) terjadi pada Generic Class?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 34,
    "slug": "ts-34",
    "title": "34. Generic Constraints (extends)",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generic Constraints (extends)\n\n- Membatasi tipe generic agar punya properti spesifik\n- Menjamin keamanan akses properti dalam generic",
    "code": "// TypeScript Generic Constraints (extends)\nconst lessonTitle: string = 'Generic Constraints (extends)';",
    "quiz": {
      "question": "Keyword apa yang dipakai untuk memaksa Generic parameter agar memenuhi kondisi tertentu?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 35,
    "slug": "ts-35",
    "title": "35. Multiple Generic Parameters",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Multiple Generic Parameters\n\n- Menggunakan lebih dari satu tipe (T, U, V)\n- Menggabungkan dua data dengan tipe tidak diketahui",
    "code": "// TypeScript Multiple Generic Parameters\nconst lessonTitle: string = 'Multiple Generic Parameters';",
    "quiz": {
      "question": "Karakter apa yang digunakan untuk memisahkan parameter generik pada kurung sudut <T, U>?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 36,
    "slug": "ts-36",
    "title": "36. Generics dengan Default Types",
    "module": "Modul 6: Generics",
    "moduleId": 6,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Generics dengan Default Types\n\n- Nilai bawaan pada generik layaknya default parameter\n- Sintaks <T = DefaultType>",
    "code": "// TypeScript Generics dengan Default Types\nconst lessonTitle: string = 'Generics dengan Default Types';",
    "quiz": {
      "question": "Simbol apa yang memberi nilai otomatis/default jika user lupa atau tidak memberikan spesifikasi tipe generik?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 37,
    "slug": "ts-37",
    "title": "37. Conditional Types Dasar",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Conditional Types Dasar\n\n- Logika if/else pada sistem tipe\n- Sintaks T extends U ? X : Y",
    "code": "// TypeScript Conditional Types Dasar\nconst lessonTitle: string = 'Conditional Types Dasar';",
    "quiz": {
      "question": "Sintaks operator JavaScript apa yang diadaptasi pada penulisan Conditional Types di TypeScript?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 38,
    "slug": "ts-38",
    "title": "38. Infer dalam Conditional Types",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Infer dalam Conditional Types\n\n- Menangkap (extracting) tipe secara dinamis\n- Keyword infer",
    "code": "// TypeScript Infer dalam Conditional Types\nconst lessonTitle: string = 'Infer dalam Conditional Types';",
    "quiz": {
      "question": "Keyword apa yang digunakan di dalam klausa extends untuk menampung tipe inferensi dan digunakan di true-branch?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 39,
    "slug": "ts-39",
    "title": "39. Mapped Types Dasar",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mapped Types Dasar\n\n- Transformasi iteratif tipe objek per properti\n- Sintaks [K in keyof T]",
    "code": "// TypeScript Mapped Types Dasar\nconst lessonTitle: string = 'Mapped Types Dasar';",
    "quiz": {
      "question": "Keyword gabungan apa yang dipakai untuk mendapatkan seluruh kumpulan key dari sebuah objek T?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 40,
    "slug": "ts-40",
    "title": "40. Mapped Types dengan Modifiers (+ dan -)",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Mapped Types dengan Modifiers (+ dan -)\n\n- Menambah/Mencabut sifat readonly atau opsional\n- Modifikasi mapping -? dan -readonly",
    "code": "// TypeScript Mapped Types dengan Modifiers (+ dan -)\nconst lessonTitle: string = 'Mapped Types dengan Modifiers (+ dan -)';",
    "quiz": {
      "question": "Apa efek yang akan dihasilkan dari operator modifier '-readonly' pada mapped type?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 41,
    "slug": "ts-41",
    "title": "41. Key Remapping (as)",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Key Remapping (as)\n\n- Mengganti/merekonstruksi nama kunci saat mapping\n- Sintaks keyof T as NewKey",
    "code": "// TypeScript Key Remapping (as)\nconst lessonTitle: string = 'Key Remapping (as)';",
    "quiz": {
      "question": "Keyword apa yang dapat kita tempelkan pada pemetaan kunci untuk mengubah nama aslinya menjadi baru?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 42,
    "slug": "ts-42",
    "title": "42. Template Literal Types",
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "moduleId": 7,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Template Literal Types\n\n- Manipulasi literal string tingkat-tipe\n- Pembuatan union dinamis dari kombinasi string",
    "code": "// TypeScript Template Literal Types\nconst lessonTitle: string = 'Template Literal Types';",
    "quiz": {
      "question": "Selain template string, fitur apa yang biasa dikombinasikan secara elegan dengan Template Literal Types untuk utilitas string?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 43,
    "slug": "ts-43",
    "title": "43. Partial<T> & Required<T>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Partial<T> & Required<T>\n\n- Mengubah semua field menjadi opsional atau wajib\n- Kasus penggunaan form dan update state",
    "code": "// TypeScript Partial<T> & Required<T>\nconst lessonTitle: string = 'Partial<T> & Required<T>';",
    "quiz": {
      "question": "Apa utilitas (utility type) yang berfungsi terbalik dari fungsi Partial<T>?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 44,
    "slug": "ts-44",
    "title": "44. Readonly<T>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Readonly<T>\n\n- Pembuatan versi tidak-dapat-dimutasi dari suatu objek\n- Perbedaan strictness antar nested object",
    "code": "// TypeScript Readonly<T>\nconst lessonTitle: string = 'Readonly<T>';",
    "quiz": {
      "question": "Apakah utility Readonly<T> otomatis menyegel / mengunci mutasi di level objek yang bersarang (nested)?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 45,
    "slug": "ts-45",
    "title": "45. Record<K, T>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Record<K, T>\n\n- Struktur dictionary/Map cepat\n- Mendefinisikan Map Object dengan spesifik key union",
    "code": "// TypeScript Record<K, T>\nconst lessonTitle: string = 'Record<K, T>';",
    "quiz": {
      "question": "Pada sintaks Record<K, T>, argument tipe T mewakili apa?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 46,
    "slug": "ts-46",
    "title": "46. Pick<T, K> & Omit<T, K>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Pick<T, K> & Omit<T, K>\n\n- Menyaring atau membuang key tertentu dari tipe utuh\n- Pembentukan DTO (Data Transfer Object) UI",
    "code": "// TypeScript Pick<T, K> & Omit<T, K>\nconst lessonTitle: string = 'Pick<T, K> & Omit<T, K>';",
    "quiz": {
      "question": "Jika kita hanya menginginkan 2 properti saja dari total 20 properti, utility apa yang lebih tepat: Pick atau Omit?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 47,
    "slug": "ts-47",
    "title": "47. Exclude<T, U> & Extract<T, U>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Exclude<T, U> & Extract<T, U>\n\n- Modifikasi dan pemilihan dari kumpulan Union Types\n- Filter tingkat tipe logis",
    "code": "// TypeScript Exclude<T, U> & Extract<T, U>\nconst lessonTitle: string = 'Exclude<T, U> & Extract<T, U>';",
    "quiz": {
      "question": "Apakah Exclude/Extract ditujukan untuk memfilter properti objek atau Union Types?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 48,
    "slug": "ts-48",
    "title": "48. ReturnType<T> & Parameters<T>",
    "module": "Modul 8: Utility Types Bawaan",
    "moduleId": 8,
    "duration": "15 m",
    "level": "Semua",
    "content": "# ReturnType<T> & Parameters<T>\n\n- Ekstraksi input-output pada fungsi eksternal\n- Mengakses tipe ketika library hanya export fungsinya saja",
    "code": "// TypeScript ReturnType<T> & Parameters<T>\nconst lessonTitle: string = 'ReturnType<T> & Parameters<T>';",
    "quiz": {
      "question": "Parameter T macam apa yang harus disuplai kepada ReturnType<T>?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 49,
    "slug": "ts-49",
    "title": "49. Modifiers: Public, Private, Protected",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modifiers: Public, Private, Protected\n\n- Konsep enkapsulasi variabel instance class\n- Menjaga akses data state pada OOP",
    "code": "// TypeScript Modifiers: Public, Private, Protected\nconst lessonTitle: string = 'Modifiers: Public, Private, Protected';",
    "quiz": {
      "question": "Access modifier apa yang memberikan izin ke internal kelas induk dan anak turunannya (extends) saja?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 50,
    "slug": "ts-50",
    "title": "50. Parameter Properties",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Parameter Properties\n\n- Cara elegan mengurangi boilerplate constructor\n- Sintaks instansiasi on-the-fly",
    "code": "// TypeScript Parameter Properties\nconst lessonTitle: string = 'Parameter Properties';",
    "quiz": {
      "question": "Bagaimana TypeScript mengetahui bahwa argumen constructor harus dijadikan properti instansi class otomatis?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 51,
    "slug": "ts-51",
    "title": "51. Getters & Setters",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Getters & Setters\n\n- Metode accessor properti pseudo\n- Menambah logika pembatasan pada modifikasi assignment",
    "code": "// TypeScript Getters & Setters\nconst lessonTitle: string = 'Getters & Setters';",
    "quiz": {
      "question": "Keyword apa yang wajib disematkan sebelum nama method untuk mendeklarasikannya sebagai Getter di TS/JS?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 52,
    "slug": "ts-52",
    "title": "52. Static Properties & Methods",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Static Properties & Methods\n\n- Properti yang terhubung secara global ke class dan bukan ke object instansi\n- Pembuatan Utility Class",
    "code": "// TypeScript Static Properties & Methods\nconst lessonTitle: string = 'Static Properties & Methods';",
    "quiz": {
      "question": "Apakah properti bertipe Static bisa diakses via instance dari class bersangkutan melalui sintaks obj.propName?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 53,
    "slug": "ts-53",
    "title": "53. Abstract Classes",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Abstract Classes\n\n- Class kerangka (blueprint) yang tidak bisa di instansiasi dengan 'new'\n- Abstrak method kontrak untuk anak (child class)",
    "code": "// TypeScript Abstract Classes\nconst lessonTitle: string = 'Abstract Classes';",
    "quiz": {
      "question": "Sebutkan keyword esensial yang membuat sebuah class menjadi kerangka murni dan tidak bisa dibangun via (new)?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 54,
    "slug": "ts-54",
    "title": "54. This Type (Polymorphic this)",
    "module": "Modul 9: OOP & Class di TypeScript",
    "moduleId": 9,
    "duration": "15 m",
    "level": "Semua",
    "content": "# This Type (Polymorphic this)\n\n- Mereturn tipe this untuk Method Chaining\n- Beradaptasi secara dinamis ke subclass",
    "code": "// TypeScript This Type (Polymorphic this)\nconst lessonTitle: string = 'This Type (Polymorphic this)';",
    "quiz": {
      "question": "Pola rekayasa perangkat lunak apa yang sangat diuntungkan oleh return bertipe 'this'?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 55,
    "slug": "ts-55",
    "title": "55. Decorators (Standar TS 5.0)",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Decorators (Standar TS 5.0)\n\n- Evolusi metadata standard class dan method ECMAScript\n- Tidak perlu lagi flag experimental",
    "code": "// TypeScript Decorators (Standar TS 5.0)\nconst lessonTitle: string = 'Decorators (Standar TS 5.0)';",
    "quiz": {
      "question": "Apakah di TypeScript 5.0 dan versi terbaru, flag kompilasi 'experimentalDecorators' masih wajib diaktifkan?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 56,
    "slug": "ts-56",
    "title": "56. Const Type Parameters (TS 5.0)",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Const Type Parameters (TS 5.0)\n\n- Memaksa generic inferensi tipe literal\n- Sintaks <const T>",
    "code": "// TypeScript Const Type Parameters (TS 5.0)\nconst lessonTitle: string = 'Const Type Parameters (TS 5.0)';",
    "quiz": {
      "question": "Di mana letak penempatan keyword 'const' agar inference generiknya menghasilkan readonly tuple/literal?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 57,
    "slug": "ts-57",
    "title": "57. Satisfies Operator (TS 4.9/5.0)",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Satisfies Operator (TS 4.9/5.0)\n\n- Memvalidasi bentuk tipe tetapi menjaga ketepatan tipe asli inferensi\n- Mengatasi batas luas dari type annotation dan as",
    "code": "// TypeScript Satisfies Operator (TS 4.9/5.0)\nconst lessonTitle: string = 'Satisfies Operator (TS 4.9/5.0)';",
    "quiz": {
      "question": "Apa keuntungan sentral dari keyword 'satisfies' dibandingkan memberikan type annotation/type casting ('as') eksplisit?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 58,
    "slug": "ts-58",
    "title": "58. Modul Node16/NodeNext (Resolusi)",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Modul Node16/NodeNext (Resolusi)\n\n- Dukungan dual module ESM & CommonJS native di TS modern\n- Penyesuaian import .js file",
    "code": "// TypeScript Modul Node16/NodeNext (Resolusi)\nconst lessonTitle: string = 'Modul Node16/NodeNext (Resolusi)';",
    "quiz": {
      "question": "Selain 'Node16' dan 'NodeNext', setting 'moduleResolution' baru apa di TS 5 yang difokuskan pada pemakaian bundler eksternal seperti Vite/Webpack?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 59,
    "slug": "ts-59",
    "title": "59. Menulis Tipe Declarations (.d.ts)",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Menulis Tipe Declarations (.d.ts)\n\n- Sistem pengetikan pada file JavaScript yang tidak memiliki TypeScript (Legacy lib)\n- Global augmentation",
    "code": "// TypeScript Menulis Tipe Declarations (.d.ts)\nconst lessonTitle: string = 'Menulis Tipe Declarations (.d.ts)';",
    "quiz": {
      "question": "Ekstensi apa yang harus dipasang untuk merepresentasikan bahwa ini hanya file berisi 'definisi tipe' murni tanpa eksekusi logika kode?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  },
  {
    "id": 60,
    "slug": "ts-60",
    "title": "60. Strict Mode & Project References",
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "moduleId": 10,
    "duration": "15 m",
    "level": "Semua",
    "content": "# Strict Mode & Project References\n\n- Setelan best practice strictness kompilasi untuk enterprise\n- Scale codebase dengan Project References di monorepo",
    "code": "// TypeScript Strict Mode & Project References\nconst lessonTitle: string = 'Strict Mode & Project References';",
    "quiz": {
      "question": "Pengaturan flag tsconfig.json mana yang paling signifikan dalam memberikan tingkat keamanan statis tipe (strictness) yang absolut?",
      "options": [
        "Static typing",
        "Dynamic eval",
        "No compiler",
        "Bypass types"
      ],
      "answer": 0,
      "explanation": "TS static type safety."
    }
  }
];
