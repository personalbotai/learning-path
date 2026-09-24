// TypeScript Learning Path — Core Application (Pedagogical 0 to Advanced)
const LESSON_FILES = [
  "lessons/M01-L05.md",
  "lessons/M10-L04.md",
  "lessons/M05-L05.md",
  "lessons/M10-L03.md",
  "lessons/M04-L08.md",
  "lessons/M08-L01.md",
  "lessons/M09-L04.md",
  "lessons/M09-L01.md",
  "lessons/M09-L03.md",
  "lessons/M10-L01.md",
  "lessons/M01-L04.md",
  "lessons/M10-L07.md",
  "lessons/M01-L06.md",
  "lessons/M03-L04.md",
  "lessons/M06-L04.md",
  "lessons/M09-L06.md",
  "lessons/M04-L03.md",
  "lessons/M01-L07.md",
  "lessons/M06-L06.md",
  "lessons/M08-L06.md",
  "lessons/M04-L02.md",
  "lessons/M06-L05.md",
  "lessons/M07-L01.md",
  "lessons/M10-L05.md",
  "lessons/M05-L08.md",
  "lessons/M09-L05.md",
  "lessons/M09-L07.md",
  "lessons/M10-L02.md",
  "lessons/M06-L07.md",
  "lessons/M05-L02.md",
  "lessons/M05-L06.md",
  "lessons/M05-L07.md",
  "lessons/M03-L08.md",
  "lessons/M02-L07.md",
  "lessons/M08-L03.md",
  "lessons/M05-L03.md",
  "lessons/M08-L05.md",
  "lessons/M02-L02.md",
  "lessons/M01-L02.md",
  "lessons/M02-L05.md",
  "lessons/M05-L04.md",
  "lessons/M01-L01.md",
  "lessons/M04-L05.md",
  "lessons/M04-L04.md",
  "lessons/M04-L06.md",
  "lessons/M02-L08.md",
  "lessons/M04-L07.md",
  "lessons/M02-L04.md",
  "lessons/M06-L01.md",
  "lessons/M09-L02.md",
  "lessons/M07-L02.md",
  "lessons/M07-L04.md",
  "lessons/M03-L07.md",
  "lessons/M08-L04.md",
  "lessons/M08-L07.md",
  "lessons/M06-L08.md",
  "lessons/M03-L05.md",
  "lessons/M03-L01.md",
  "lessons/M01-L08.md",
  "lessons/M03-L03.md",
  "lessons/M06-L03.md",
  "lessons/M02-L03.md",
  "lessons/M05-L01.md",
  "lessons/M07-L03.md",
  "lessons/M01-L03.md",
  "lessons/M02-L06.md",
  "lessons/M03-L02.md",
  "lessons/M10-L06.md",
  "lessons/M02-L01.md",
  "lessons/M03-L06.md",
  "lessons/M07-L05.md",
  "lessons/M06-L02.md",
  "lessons/M08-L02.md",
  "lessons/M07-L06.md",
  "lessons/M07-L08.md",
  "lessons/M07-L07.md",
  "lessons/M04-L01.md"
];
const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Pengenalan & Fondasi TypeScript",
    "desc": "Konsep dasar, perbedaan dengan JS, instalasi, dan compiler setup",
    "icon": "fa-solid fa-graduation-cap"
  },
  {
    "id": 2,
    "title": "Modul 2: Tipe Data Dasar & Primitif",
    "desc": "Sistem tipe dasar, inferensi tipe, any vs unknown, array, dan tuple",
    "icon": "fa-solid fa-shapes"
  },
  {
    "id": 3,
    "title": "Modul 3: Fungsi & Anotasi Parameter",
    "desc": "Anotasi fungsi, parameter opsional, default, rest, dan overloads",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Union, Intersection & Type Narrowing",
    "desc": "Komposisi tipe data, type aliases, type guards, dan narrowing",
    "icon": "fa-solid fa-filter"
  },
  {
    "id": 5,
    "title": "Modul 5: Interface & Objek Terstruktur",
    "desc": "Definisi kontrak data, extends interface, dan declaration merging",
    "icon": "fa-solid fa-layer-group"
  },
  {
    "id": 6,
    "title": "Modul 6: Object-Oriented Programming (OOP)",
    "desc": "Class, constructor, inheritance, access modifiers, dan abstract class",
    "icon": "fa-solid fa-cube"
  },
  {
    "id": 7,
    "title": "Modul 7: Generics Mendalam",
    "desc": "Pemrograman generik yang fleksibel dan reusable dengan constraints",
    "icon": "fa-solid fa-dna"
  },
  {
    "id": 8,
    "title": "Modul 8: Advanced Types & Type Manipulation",
    "desc": "Mapped types, conditional types, template literals, dan utility types",
    "icon": "fa-solid fa-wand-magic-sparkles"
  },
  {
    "id": 9,
    "title": "Modul 9: Modularitas, Tooling & Ekosistem",
    "desc": "ES6 Modules, namespaces, build tools, declaration files, dan library JS",
    "icon": "fa-solid fa-cubes"
  },
  {
    "id": 10,
    "title": "Modul 10: Proyek Nyata & Aplikasi Industri",
    "desc": "Penerapan TypeScript pada CLI, REST API Express, React, dan Fullstack",
    "icon": "fa-solid fa-rocket"
  }
];
const lessons = [
  {
    "id": 1,
    "lesson": 1,
    "title": "1. Apa itu TypeScript?",
    "rawTitle": "Apa itu TypeScript?",
    "slug": "M01-L05",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L05.md",
    "code": "// TypeScript: Apa itu TypeScript?\nconst lessonTopic: string = \"Apa itu TypeScript?\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Apa itu TypeScript??",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 2,
    "lesson": 2,
    "title": "2. TypeScript vs JavaScript",
    "rawTitle": "TypeScript vs JavaScript",
    "slug": "M10-L04",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L04.md",
    "code": "// TypeScript: TypeScript vs JavaScript\nconst lessonTopic: string = \"TypeScript vs JavaScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari TypeScript vs JavaScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 3,
    "lesson": 3,
    "title": "3. Instalasi TypeScript",
    "rawTitle": "Instalasi TypeScript",
    "slug": "M05-L05",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L05.md",
    "code": "// TypeScript: Instalasi TypeScript\nconst lessonTopic: string = \"Instalasi TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Instalasi TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 4,
    "lesson": 4,
    "title": "4. TypeScript Compiler (tsc)",
    "rawTitle": "TypeScript Compiler (tsc)",
    "slug": "M10-L03",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L03.md",
    "code": "// TypeScript: TypeScript Compiler (tsc)\nconst lessonTopic: string = \"TypeScript Compiler (tsc)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari TypeScript Compiler (tsc)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 5,
    "lesson": 5,
    "title": "5. Hello World: Program Pertama",
    "rawTitle": "Hello World: Program Pertama",
    "slug": "M04-L08",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L08.md",
    "code": "// TypeScript: Hello World: Program Pertama\nconst lessonTopic: string = \"Hello World: Program Pertama\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Hello World: Program Pertama?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 6,
    "lesson": 6,
    "title": "6. Project Setup & Lingkungan Kerja",
    "rawTitle": "Project Setup & Lingkungan Kerja",
    "slug": "M08-L01",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L01.md",
    "code": "// TypeScript: Project Setup & Lingkungan Kerja\nconst lessonTopic: string = \"Project Setup & Lingkungan Kerja\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Project Setup & Lingkungan Kerja?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 7,
    "lesson": 7,
    "title": "7. tsconfig.json: Struktur dan Opsi",
    "rawTitle": "tsconfig.json: Struktur dan Opsi",
    "slug": "M09-L04",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L04.md",
    "code": "// TypeScript: tsconfig.json: Struktur dan Opsi\nconst lessonTopic: string = \"tsconfig.json: Struktur dan Opsi\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari tsconfig.json: Struktur dan Opsi?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 8,
    "lesson": 8,
    "title": "8. Strict Mode Options",
    "rawTitle": "Strict Mode Options",
    "slug": "M09-L01",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Fondasi TypeScript",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L01.md",
    "code": "// TypeScript: Strict Mode Options\nconst lessonTopic: string = \"Strict Mode Options\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Strict Mode Options?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 9,
    "lesson": 1,
    "title": "1. Tipe Primitif: string, number, boolean",
    "rawTitle": "Tipe Primitif: string, number, boolean",
    "slug": "M09-L03",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L03.md",
    "code": "// TypeScript: Tipe Primitif: string, number, boolean\nconst lessonTopic: string = \"Tipe Primitif: string, number, boolean\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Tipe Primitif: string, number, boolean?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 10,
    "lesson": 2,
    "title": "2. Type Inference (Inferensi Tipe)",
    "rawTitle": "Type Inference (Inferensi Tipe)",
    "slug": "M10-L01",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L01.md",
    "code": "// TypeScript: Type Inference (Inferensi Tipe)\nconst lessonTopic: string = \"Type Inference (Inferensi Tipe)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Type Inference (Inferensi Tipe)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 11,
    "lesson": 3,
    "title": "3. Tipe any vs unknown",
    "rawTitle": "Tipe any vs unknown",
    "slug": "M01-L04",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L04.md",
    "code": "// TypeScript: Tipe any vs unknown\nconst lessonTopic: string = \"Tipe any vs unknown\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Tipe any vs unknown?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 12,
    "lesson": 4,
    "title": "4. Tipe Khusus: void, never, null, undefined",
    "rawTitle": "Tipe Khusus: void, never, null, undefined",
    "slug": "M10-L07",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L07.md",
    "code": "// TypeScript: Tipe Khusus: void, never, null, undefined\nconst lessonTopic: string = \"Tipe Khusus: void, never, null, undefined\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Tipe Khusus: void, never, null, undefined?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 13,
    "lesson": 5,
    "title": "5. Array dan Tuple",
    "rawTitle": "Array dan Tuple",
    "slug": "M01-L06",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L06.md",
    "code": "// TypeScript: Array dan Tuple\nconst lessonTopic: string = \"Array dan Tuple\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Array dan Tuple?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 14,
    "lesson": 6,
    "title": "6. Enum dan Named Constants",
    "rawTitle": "Enum dan Named Constants",
    "slug": "M03-L04",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L04.md",
    "code": "// TypeScript: Enum dan Named Constants\nconst lessonTopic: string = \"Enum dan Named Constants\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Enum dan Named Constants?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 15,
    "lesson": 7,
    "title": "7. Nullable Types & Optional Chaining",
    "rawTitle": "Nullable Types & Optional Chaining",
    "slug": "M06-L04",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L04.md",
    "code": "// TypeScript: Nullable Types & Optional Chaining\nconst lessonTopic: string = \"Nullable Types & Optional Chaining\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Nullable Types & Optional Chaining?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 16,
    "lesson": 8,
    "title": "8. Type Assertions (Type Casting)",
    "rawTitle": "Type Assertions (Type Casting)",
    "slug": "M09-L06",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Dasar & Primitif",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L06.md",
    "code": "// TypeScript: Type Assertions (Type Casting)\nconst lessonTopic: string = \"Type Assertions (Type Casting)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Type Assertions (Type Casting)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 17,
    "lesson": 1,
    "title": "1. Function Types & Anotasi",
    "rawTitle": "Function Types & Anotasi",
    "slug": "M04-L03",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L03.md",
    "code": "// TypeScript: Function Types & Anotasi\nconst lessonTopic: string = \"Function Types & Anotasi\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Function Types & Anotasi?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 18,
    "lesson": 2,
    "title": "2. Arrow Functions & Return Types",
    "rawTitle": "Arrow Functions & Return Types",
    "slug": "M01-L07",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L07.md",
    "code": "// TypeScript: Arrow Functions & Return Types\nconst lessonTopic: string = \"Arrow Functions & Return Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Arrow Functions & Return Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 19,
    "lesson": 3,
    "title": "3. Optional dan Default Parameters",
    "rawTitle": "Optional dan Default Parameters",
    "slug": "M06-L06",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L06.md",
    "code": "// TypeScript: Optional dan Default Parameters\nconst lessonTopic: string = \"Optional dan Default Parameters\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Optional dan Default Parameters?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 20,
    "lesson": 4,
    "title": "4. Rest Parameters dan Spread Syntax",
    "rawTitle": "Rest Parameters dan Spread Syntax",
    "slug": "M08-L06",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L06.md",
    "code": "// TypeScript: Rest Parameters dan Spread Syntax\nconst lessonTopic: string = \"Rest Parameters dan Spread Syntax\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Rest Parameters dan Spread Syntax?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 21,
    "lesson": 5,
    "title": "5. Function Overloads",
    "rawTitle": "Function Overloads",
    "slug": "M04-L02",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L02.md",
    "code": "// TypeScript: Function Overloads\nconst lessonTopic: string = \"Function Overloads\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Function Overloads?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 22,
    "lesson": 6,
    "title": "6. OmitThisParameter & Parameter Utilities",
    "rawTitle": "OmitThisParameter & Parameter Utilities",
    "slug": "M06-L05",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L05.md",
    "code": "// TypeScript: OmitThisParameter & Parameter Utilities\nconst lessonTopic: string = \"OmitThisParameter & Parameter Utilities\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari OmitThisParameter & Parameter Utilities?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 23,
    "lesson": 7,
    "title": "7. Parameters & ConstructorParameters Types",
    "rawTitle": "Parameters & ConstructorParameters Types",
    "slug": "M07-L01",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L01.md",
    "code": "// TypeScript: Parameters & ConstructorParameters Types\nconst lessonTopic: string = \"Parameters & ConstructorParameters Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Parameters & ConstructorParameters Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 24,
    "lesson": 1,
    "title": "1. Union Types (|)",
    "rawTitle": "Union Types (|)",
    "slug": "M10-L05",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L05.md",
    "code": "// TypeScript: Union Types (|)\nconst lessonTopic: string = \"Union Types (|)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Union Types (|)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 25,
    "lesson": 2,
    "title": "2. Intersection Types (&)",
    "rawTitle": "Intersection Types (&)",
    "slug": "M05-L08",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L08.md",
    "code": "// TypeScript: Intersection Types (&)\nconst lessonTopic: string = \"Intersection Types (&)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Intersection Types (&)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 26,
    "lesson": 3,
    "title": "3. Type Aliases (type keyword)",
    "rawTitle": "Type Aliases (type keyword)",
    "slug": "M09-L05",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L05.md",
    "code": "// TypeScript: Type Aliases (type keyword)\nconst lessonTopic: string = \"Type Aliases (type keyword)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Type Aliases (type keyword)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 27,
    "lesson": 4,
    "title": "4. Type Guards dan Type Narrowing",
    "rawTitle": "Type Guards dan Type Narrowing",
    "slug": "M09-L07",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L07.md",
    "code": "// TypeScript: Type Guards dan Type Narrowing\nconst lessonTopic: string = \"Type Guards dan Type Narrowing\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Type Guards dan Type Narrowing?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 28,
    "lesson": 5,
    "title": "5. Discriminated Unions & Advanced Narrowing",
    "rawTitle": "Discriminated Unions & Advanced Narrowing",
    "slug": "M10-L02",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L02.md",
    "code": "// TypeScript: Discriminated Unions & Advanced Narrowing\nconst lessonTopic: string = \"Discriminated Unions & Advanced Narrowing\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Discriminated Unions & Advanced Narrowing?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 29,
    "lesson": 6,
    "title": "6. Optional dan Readonly Properties",
    "rawTitle": "Optional dan Readonly Properties",
    "slug": "M06-L07",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L07.md",
    "code": "// TypeScript: Optional dan Readonly Properties\nconst lessonTopic: string = \"Optional dan Readonly Properties\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Optional dan Readonly Properties?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 30,
    "lesson": 7,
    "title": "7. Index Signatures pada Object",
    "rawTitle": "Index Signatures pada Object",
    "slug": "M05-L02",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L02.md",
    "code": "// TypeScript: Index Signatures pada Object\nconst lessonTopic: string = \"Index Signatures pada Object\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Index Signatures pada Object?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 31,
    "lesson": 1,
    "title": "1. Interface Dasar",
    "rawTitle": "Interface Dasar",
    "slug": "M05-L06",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L06.md",
    "code": "// TypeScript: Interface Dasar\nconst lessonTopic: string = \"Interface Dasar\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Interface Dasar?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 32,
    "lesson": 2,
    "title": "2. Interface vs Type Alias",
    "rawTitle": "Interface vs Type Alias",
    "slug": "M05-L07",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L07.md",
    "code": "// TypeScript: Interface vs Type Alias\nconst lessonTopic: string = \"Interface vs Type Alias\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Interface vs Type Alias?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 33,
    "lesson": 3,
    "title": "3. Extending Interfaces dan Types",
    "rawTitle": "Extending Interfaces dan Types",
    "slug": "M03-L08",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L08.md",
    "code": "// TypeScript: Extending Interfaces dan Types\nconst lessonTopic: string = \"Extending Interfaces dan Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Extending Interfaces dan Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 34,
    "lesson": 4,
    "title": "4. Declaration Merging pada Interface",
    "rawTitle": "Declaration Merging pada Interface",
    "slug": "M02-L07",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L07.md",
    "code": "// TypeScript: Declaration Merging pada Interface\nconst lessonTopic: string = \"Declaration Merging pada Interface\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Declaration Merging pada Interface?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 35,
    "lesson": 5,
    "title": "5. Readonly dan Static Properties",
    "rawTitle": "Readonly dan Static Properties",
    "slug": "M08-L03",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L03.md",
    "code": "// TypeScript: Readonly dan Static Properties\nconst lessonTopic: string = \"Readonly dan Static Properties\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Readonly dan Static Properties?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 36,
    "lesson": 6,
    "title": "6. Indexed Access Types",
    "rawTitle": "Indexed Access Types",
    "slug": "M05-L03",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L03.md",
    "code": "// TypeScript: Indexed Access Types\nconst lessonTopic: string = \"Indexed Access Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Indexed Access Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 37,
    "lesson": 7,
    "title": "7. Record, Tuple & Readonly Tuple",
    "rawTitle": "Record, Tuple & Readonly Tuple",
    "slug": "M08-L05",
    "moduleId": 5,
    "module": "Modul 5: Interface & Objek Terstruktur",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L05.md",
    "code": "// TypeScript: Record, Tuple & Readonly Tuple\nconst lessonTopic: string = \"Record, Tuple & Readonly Tuple\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Record, Tuple & Readonly Tuple?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 38,
    "lesson": 1,
    "title": "1. Class Dasar & Instansiasi",
    "rawTitle": "Class Dasar & Instansiasi",
    "slug": "M02-L02",
    "moduleId": 6,
    "module": "Modul 6: Object-Oriented Programming (OOP)",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L02.md",
    "code": "// TypeScript: Class Dasar & Instansiasi\nconst lessonTopic: string = \"Class Dasar & Instansiasi\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Class Dasar & Instansiasi?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 39,
    "lesson": 2,
    "title": "2. Access Modifiers: public, private, protected",
    "rawTitle": "Access Modifiers: public, private, protected",
    "slug": "M01-L02",
    "moduleId": 6,
    "module": "Modul 6: Object-Oriented Programming (OOP)",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L02.md",
    "code": "// TypeScript: Access Modifiers: public, private, protected\nconst lessonTopic: string = \"Access Modifiers: public, private, protected\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Access Modifiers: public, private, protected?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 40,
    "lesson": 3,
    "title": "3. Constructor Parameter Properties",
    "rawTitle": "Constructor Parameter Properties",
    "slug": "M02-L05",
    "moduleId": 6,
    "module": "Modul 6: Object-Oriented Programming (OOP)",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L05.md",
    "code": "// TypeScript: Constructor Parameter Properties\nconst lessonTopic: string = \"Constructor Parameter Properties\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Constructor Parameter Properties?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 41,
    "lesson": 4,
    "title": "4. Inheritance dengan extends dan super",
    "rawTitle": "Inheritance dengan extends dan super",
    "slug": "M05-L04",
    "moduleId": 6,
    "module": "Modul 6: Object-Oriented Programming (OOP)",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L04.md",
    "code": "// TypeScript: Inheritance dengan extends dan super\nconst lessonTopic: string = \"Inheritance dengan extends dan super\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Inheritance dengan extends dan super?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 42,
    "lesson": 5,
    "title": "5. Abstract Classes dan Methods",
    "rawTitle": "Abstract Classes dan Methods",
    "slug": "M01-L01",
    "moduleId": 6,
    "module": "Modul 6: Object-Oriented Programming (OOP)",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L01.md",
    "code": "// TypeScript: Abstract Classes dan Methods\nconst lessonTopic: string = \"Abstract Classes dan Methods\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Abstract Classes dan Methods?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 43,
    "lesson": 1,
    "title": "1. Generic Functions Dasar",
    "rawTitle": "Generic Functions Dasar",
    "slug": "M04-L05",
    "moduleId": 7,
    "module": "Modul 7: Generics Mendalam",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L05.md",
    "code": "// TypeScript: Generic Functions Dasar\nconst lessonTopic: string = \"Generic Functions Dasar\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Functions Dasar?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 44,
    "lesson": 2,
    "title": "2. Generic Constraints (extends)",
    "rawTitle": "Generic Constraints (extends)",
    "slug": "M04-L04",
    "moduleId": 7,
    "module": "Modul 7: Generics Mendalam",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L04.md",
    "code": "// TypeScript: Generic Constraints (extends)\nconst lessonTopic: string = \"Generic Constraints (extends)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Constraints (extends)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 45,
    "lesson": 3,
    "title": "3. Generic Interfaces dan Classes",
    "rawTitle": "Generic Interfaces dan Classes",
    "slug": "M04-L06",
    "moduleId": 7,
    "module": "Modul 7: Generics Mendalam",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L06.md",
    "code": "// TypeScript: Generic Interfaces dan Classes\nconst lessonTopic: string = \"Generic Interfaces dan Classes\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Interfaces dan Classes?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 46,
    "lesson": 4,
    "title": "4. Default Type Parameters",
    "rawTitle": "Default Type Parameters",
    "slug": "M02-L08",
    "moduleId": 7,
    "module": "Modul 7: Generics Mendalam",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L08.md",
    "code": "// TypeScript: Default Type Parameters\nconst lessonTopic: string = \"Default Type Parameters\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Default Type Parameters?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 47,
    "lesson": 5,
    "title": "5. Generic Utility Types",
    "rawTitle": "Generic Utility Types",
    "slug": "M04-L07",
    "moduleId": 7,
    "module": "Modul 7: Generics Mendalam",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L07.md",
    "code": "// TypeScript: Generic Utility Types\nconst lessonTopic: string = \"Generic Utility Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Utility Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 48,
    "lesson": 1,
    "title": "1. Conditional Types (T extends U ? X : Y)",
    "rawTitle": "Conditional Types (T extends U ? X : Y)",
    "slug": "M02-L04",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L04.md",
    "code": "// TypeScript: Conditional Types (T extends U ? X : Y)\nconst lessonTopic: string = \"Conditional Types (T extends U ? X : Y)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Conditional Types (T extends U ? X : Y)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 49,
    "lesson": 2,
    "title": "2. Mapped Types ([K in keyof T])",
    "rawTitle": "Mapped Types ([K in keyof T])",
    "slug": "M06-L01",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L01.md",
    "code": "// TypeScript: Mapped Types ([K in keyof T])\nconst lessonTopic: string = \"Mapped Types ([K in keyof T])\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Mapped Types ([K in keyof T])?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 50,
    "lesson": 3,
    "title": "3. Template Literal Types",
    "rawTitle": "Template Literal Types",
    "slug": "M09-L02",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L02.md",
    "code": "// TypeScript: Template Literal Types\nconst lessonTopic: string = \"Template Literal Types\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Template Literal Types?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 51,
    "lesson": 4,
    "title": "4. Utility Types: Partial & Required",
    "rawTitle": "Utility Types: Partial & Required",
    "slug": "M07-L02",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L02.md",
    "code": "// TypeScript: Utility Types: Partial & Required\nconst lessonTopic: string = \"Utility Types: Partial & Required\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Utility Types: Partial & Required?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 52,
    "lesson": 5,
    "title": "5. Utility Types: Pick & Omit",
    "rawTitle": "Utility Types: Pick & Omit",
    "slug": "M07-L04",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L04.md",
    "code": "// TypeScript: Utility Types: Pick & Omit\nconst lessonTopic: string = \"Utility Types: Pick & Omit\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Utility Types: Pick & Omit?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 53,
    "lesson": 6,
    "title": "6. Utility Types: Exclude, Extract, NonNullable",
    "rawTitle": "Utility Types: Exclude, Extract, NonNullable",
    "slug": "M03-L07",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L07.md",
    "code": "// TypeScript: Utility Types: Exclude, Extract, NonNullable\nconst lessonTopic: string = \"Utility Types: Exclude, Extract, NonNullable\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Utility Types: Exclude, Extract, NonNullable?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 54,
    "lesson": 7,
    "title": "7. ReadonlyRecord & Utility Khusus",
    "rawTitle": "ReadonlyRecord & Utility Khusus",
    "slug": "M08-L04",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L04.md",
    "code": "// TypeScript: ReadonlyRecord & Utility Khusus\nconst lessonTopic: string = \"ReadonlyRecord & Utility Khusus\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari ReadonlyRecord & Utility Khusus?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 55,
    "lesson": 8,
    "title": "8. ReturnType, Parameters, ConstructorParameters, ThisType",
    "rawTitle": "ReturnType, Parameters, ConstructorParameters, ThisType",
    "slug": "M08-L07",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L07.md",
    "code": "// TypeScript: ReturnType, Parameters, ConstructorParameters, ThisType\nconst lessonTopic: string = \"ReturnType, Parameters, ConstructorParameters, ThisType\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari ReturnType, Parameters, ConstructorParameters, ThisType?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 56,
    "lesson": 9,
    "title": "9. Parameter Utilities Lanjutan",
    "rawTitle": "Parameter Utilities Lanjutan",
    "slug": "M06-L08",
    "moduleId": 8,
    "module": "Modul 8: Advanced Types & Type Manipulation",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L08.md",
    "code": "// TypeScript: Parameter Utilities Lanjutan\nconst lessonTopic: string = \"Parameter Utilities Lanjutan\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Parameter Utilities Lanjutan?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 57,
    "lesson": 1,
    "title": "1. ES6 Modules: import dan export",
    "rawTitle": "ES6 Modules: import dan export",
    "slug": "M03-L05",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L05.md",
    "code": "// TypeScript: ES6 Modules: import dan export\nconst lessonTopic: string = \"ES6 Modules: import dan export\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari ES6 Modules: import dan export?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 58,
    "lesson": 2,
    "title": "2. Default vs Named Exports",
    "rawTitle": "Default vs Named Exports",
    "slug": "M03-L01",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L01.md",
    "code": "// TypeScript: Default vs Named Exports\nconst lessonTopic: string = \"Default vs Named Exports\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Default vs Named Exports?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 59,
    "lesson": 3,
    "title": "3. Barrel Files dan Re-export",
    "rawTitle": "Barrel Files dan Re-export",
    "slug": "M01-L08",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L08.md",
    "code": "// TypeScript: Barrel Files dan Re-export\nconst lessonTopic: string = \"Barrel Files dan Re-export\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Barrel Files dan Re-export?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 60,
    "lesson": 4,
    "title": "4. Dynamic Import dan Code Splitting",
    "rawTitle": "Dynamic Import dan Code Splitting",
    "slug": "M03-L03",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L03.md",
    "code": "// TypeScript: Dynamic Import dan Code Splitting\nconst lessonTopic: string = \"Dynamic Import dan Code Splitting\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Dynamic Import dan Code Splitting?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 61,
    "lesson": 5,
    "title": "5. Namespaces untuk Organisasi Kode",
    "rawTitle": "Namespaces untuk Organisasi Kode",
    "slug": "M06-L03",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L03.md",
    "code": "// TypeScript: Namespaces untuk Organisasi Kode\nconst lessonTopic: string = \"Namespaces untuk Organisasi Kode\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Namespaces untuk Organisasi Kode?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 62,
    "lesson": 6,
    "title": "6. Compiler Options: target, module, lib",
    "rawTitle": "Compiler Options: target, module, lib",
    "slug": "M02-L03",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L03.md",
    "code": "// TypeScript: Compiler Options: target, module, lib\nconst lessonTopic: string = \"Compiler Options: target, module, lib\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Compiler Options: target, module, lib?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 63,
    "lesson": 7,
    "title": "7. tsconfig include, exclude, files",
    "rawTitle": "tsconfig include, exclude, files",
    "slug": "M05-L01",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L01.md",
    "code": "// TypeScript: tsconfig include, exclude, files\nconst lessonTopic: string = \"tsconfig include, exclude, files\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari tsconfig include, exclude, files?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 64,
    "lesson": 8,
    "title": "8. Path Mapping & Module Resolution",
    "rawTitle": "Path Mapping & Module Resolution",
    "slug": "M07-L03",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L03.md",
    "code": "// TypeScript: Path Mapping & Module Resolution\nconst lessonTopic: string = \"Path Mapping & Module Resolution\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Path Mapping & Module Resolution?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 65,
    "lesson": 9,
    "title": "9. Ambient Modules dan declare",
    "rawTitle": "Ambient Modules dan declare",
    "slug": "M01-L03",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L03.md",
    "code": "// TypeScript: Ambient Modules dan declare\nconst lessonTopic: string = \"Ambient Modules dan declare\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Ambient Modules dan declare?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 66,
    "lesson": 10,
    "title": "10. Declaration Files (.d.ts)",
    "rawTitle": "Declaration Files (.d.ts)",
    "slug": "M02-L06",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L06.md",
    "code": "// TypeScript: Declaration Files (.d.ts)\nconst lessonTopic: string = \"Declaration Files (.d.ts)\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Declaration Files (.d.ts)?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 67,
    "lesson": 11,
    "title": "11. DefinitelyTyped: Type Definitions Repository",
    "rawTitle": "DefinitelyTyped: Type Definitions Repository",
    "slug": "M03-L02",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L02.md",
    "code": "// TypeScript: DefinitelyTyped: Type Definitions Repository\nconst lessonTopic: string = \"DefinitelyTyped: Type Definitions Repository\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari DefinitelyTyped: Type Definitions Repository?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 68,
    "lesson": 12,
    "title": "12. Menggunakan JavaScript Libraries di TypeScript",
    "rawTitle": "Menggunakan JavaScript Libraries di TypeScript",
    "slug": "M10-L06",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L06.md",
    "code": "// TypeScript: Menggunakan JavaScript Libraries di TypeScript\nconst lessonTopic: string = \"Menggunakan JavaScript Libraries di TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Menggunakan JavaScript Libraries di TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 69,
    "lesson": 13,
    "title": "13. Build Tools: Webpack, Babel, esbuild",
    "rawTitle": "Build Tools: Webpack, Babel, esbuild",
    "slug": "M02-L01",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L01.md",
    "code": "// TypeScript: Build Tools: Webpack, Babel, esbuild\nconst lessonTopic: string = \"Build Tools: Webpack, Babel, esbuild\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Build Tools: Webpack, Babel, esbuild?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 70,
    "lesson": 14,
    "title": "14. ESLint untuk TypeScript",
    "rawTitle": "ESLint untuk TypeScript",
    "slug": "M03-L06",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L06.md",
    "code": "// TypeScript: ESLint untuk TypeScript\nconst lessonTopic: string = \"ESLint untuk TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari ESLint untuk TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 71,
    "lesson": 15,
    "title": "15. Prettier Integration dengan TypeScript",
    "rawTitle": "Prettier Integration dengan TypeScript",
    "slug": "M07-L05",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L05.md",
    "code": "// TypeScript: Prettier Integration dengan TypeScript\nconst lessonTopic: string = \"Prettier Integration dengan TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Prettier Integration dengan TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 72,
    "lesson": 16,
    "title": "16. Strategi Migrasi JavaScript ke TypeScript",
    "rawTitle": "Strategi Migrasi JavaScript ke TypeScript",
    "slug": "M06-L02",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L02.md",
    "code": "// TypeScript: Strategi Migrasi JavaScript ke TypeScript\nconst lessonTopic: string = \"Strategi Migrasi JavaScript ke TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Strategi Migrasi JavaScript ke TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 73,
    "lesson": 17,
    "title": "17. Project Type Definitions & Declaration Files",
    "rawTitle": "Project Type Definitions & Declaration Files",
    "slug": "M08-L02",
    "moduleId": 9,
    "module": "Modul 9: Modularitas, Tooling & Ekosistem",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L02.md",
    "code": "// TypeScript: Project Type Definitions & Declaration Files\nconst lessonTopic: string = \"Project Type Definitions & Declaration Files\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Project Type Definitions & Declaration Files?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 74,
    "lesson": 1,
    "title": "1. Project 1: CLI Tool Interaktif",
    "rawTitle": "Project 1: CLI Tool Interaktif",
    "slug": "M07-L06",
    "moduleId": 10,
    "module": "Modul 10: Proyek Nyata & Aplikasi Industri",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L06.md",
    "code": "// TypeScript: Project 1: CLI Tool Interaktif\nconst lessonTopic: string = \"Project 1: CLI Tool Interaktif\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Project 1: CLI Tool Interaktif?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 75,
    "lesson": 2,
    "title": "2. Project 2: REST API dengan Express.js",
    "rawTitle": "Project 2: REST API dengan Express.js",
    "slug": "M07-L08",
    "moduleId": 10,
    "module": "Modul 10: Proyek Nyata & Aplikasi Industri",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L08.md",
    "code": "// TypeScript: Project 2: REST API dengan Express.js\nconst lessonTopic: string = \"Project 2: REST API dengan Express.js\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Project 2: REST API dengan Express.js?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 76,
    "lesson": 3,
    "title": "3. Project 3: React Application dengan TypeScript",
    "rawTitle": "Project 3: React Application dengan TypeScript",
    "slug": "M07-L07",
    "moduleId": 10,
    "module": "Modul 10: Proyek Nyata & Aplikasi Industri",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L07.md",
    "code": "// TypeScript: Project 3: React Application dengan TypeScript\nconst lessonTopic: string = \"Project 3: React Application dengan TypeScript\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Project 3: React Application dengan TypeScript?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
    }
  },
  {
    "id": 77,
    "lesson": 4,
    "title": "4. Capstone Project: Full-Stack TypeScript Application",
    "rawTitle": "Capstone Project: Full-Stack TypeScript Application",
    "slug": "M04-L01",
    "moduleId": 10,
    "module": "Modul 10: Proyek Nyata & Aplikasi Industri",
    "duration": "20 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L01.md",
    "code": "// TypeScript: Capstone Project: Full-Stack TypeScript Application\nconst lessonTopic: string = \"Capstone Project: Full-Stack TypeScript Application\";\nconsole.log(\"Topik: \" + lessonTopic);",
    "quiz": {
      "question": "Apa konsep utama dari Capstone Project: Full-Stack TypeScript Application?",
      "options": [
        "Memastikan type safety dan arsitektur kode yang terstruktur",
        "Menghapus pemeriksaan tipe pada saat compile time",
        "Mengganti runtime JavaScript secara keseluruhan",
        "Menonaktifkan fitur modern ECMAScript"
      ],
      "answer": 0,
      "explanation": "TypeScript menyediakan fitur ini untuk memperkuat keandalan tipe dan memudahkan pemeliharaan kode skala besar."
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
    const saved = localStorage.getItem('ts_progress') || localStorage.getItem('typescript_progress');
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
        localStorage.setItem('ts_progress', JSON.stringify(progress));
        localStorage.setItem('typescript_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
    renderNav();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('ts_progress');
        localStorage.removeItem('typescript_progress');
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
                    (mod.icon ? '<i class="' + mod.icon + ' text-blue-400 text-sm w-4 text-center"></i>' : '') +
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
    try { 
        localStorage.setItem('ts_last_lesson', String(index));
        localStorage.setItem('typescript_last_lesson', String(index));
    } catch (e) {}
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
                '<input type="radio" name="quiz_option" value="' + oIdx + '" class="mt-1 text-blue-500 focus:ring-blue-500">' +
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
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs">' +
            '<i class="fas fa-check-circle mr-1"></i> Benar! ' + escapeHtml(lesson.quiz.explanation || '') +
        '</div>';
        markComplete();
    } else {
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">' +
            '<i class="fas fa-times-circle mr-1"></i> Kurang tepat. ' + escapeHtml(lesson.quiz.explanation || 'Silakan tinjau kembali materi.') +
        '</div>';
    }
}

function runCode() {
    const editor = document.getElementById('code-editor');
    const out = document.getElementById('output');
    if (!editor || !out) return;
    const code = editor.value;
    try {
        let logs = [];
        const customConsole = {
            log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
            error: (...args) => logs.push('[ERROR] ' + args.join(' ')),
            warn: (...args) => logs.push('[WARN] ' + args.join(' '))
        };
        let jsCode = code;
        if (typeof ts !== 'undefined' && typeof ts.transpile === 'function') {
            jsCode = ts.transpile(code);
        }
        const fn = new Function('console', jsCode);
        fn(customConsole);
        out.innerHTML = '<pre class="text-xs text-blue-300 font-mono">' + escapeHtml(logs.join('\n') || '// Kode berhasil dijalankan (tanpa output console)') + '</pre>';
    } catch(err) {
        out.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs">' + escapeHtml(err.message) + '</div>';
    }
}

function resetCode() {
    if (lessons[currentLesson]) {
        const editor = document.getElementById('code-editor');
        if (editor) editor.value = lessons[currentLesson].code;
        const out = document.getElementById('output');
        if (out) out.innerHTML = '<span class="text-slate-500">// Editor di-reset. Klik Run untuk mengeksekusi kode TypeScript.</span>';
    }
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (editor && navigator.clipboard) {
        navigator.clipboard.writeText(editor.value).then(() => {
            alert('Kode TypeScript disalin!');
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta TypeScript Learning Path';
    
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    ctx.fillStyle = '#3b82f6';
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
    ctx.fillText('Telah berhasil menyelesaikan seluruh 77 kurikulum pelajaran', canvas.width / 2, 360);
    ctx.fillText('TypeScript Learning Path Modern & Industry Standard', canvas.width / 2, 400);
    
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/typescript/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-TypeScript-Learning-Path.png';
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
        const saved = localStorage.getItem('ts_last_lesson') || localStorage.getItem('typescript_last_lesson');
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
