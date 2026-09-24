// TypeScript Learning Path — Core Application
const LESSON_FILES = [
  "lessons/M01-L01.md",
  "lessons/M01-L02.md",
  "lessons/M01-L03.md",
  "lessons/M01-L04.md",
  "lessons/M01-L05.md",
  "lessons/M01-L06.md",
  "lessons/M01-L07.md",
  "lessons/M01-L08.md",
  "lessons/M02-L01.md",
  "lessons/M02-L02.md",
  "lessons/M02-L03.md",
  "lessons/M02-L04.md",
  "lessons/M02-L05.md",
  "lessons/M02-L06.md",
  "lessons/M02-L07.md",
  "lessons/M02-L08.md",
  "lessons/M03-L01.md",
  "lessons/M03-L02.md",
  "lessons/M03-L03.md",
  "lessons/M03-L04.md",
  "lessons/M03-L05.md",
  "lessons/M03-L06.md",
  "lessons/M03-L07.md",
  "lessons/M03-L08.md",
  "lessons/M04-L01.md",
  "lessons/M04-L02.md",
  "lessons/M04-L03.md",
  "lessons/M04-L04.md",
  "lessons/M04-L05.md",
  "lessons/M04-L06.md",
  "lessons/M04-L07.md",
  "lessons/M04-L08.md",
  "lessons/M05-L01.md",
  "lessons/M05-L02.md",
  "lessons/M05-L03.md",
  "lessons/M05-L04.md",
  "lessons/M05-L05.md",
  "lessons/M05-L06.md",
  "lessons/M05-L07.md",
  "lessons/M05-L08.md",
  "lessons/M06-L01.md",
  "lessons/M06-L02.md",
  "lessons/M06-L03.md",
  "lessons/M06-L04.md",
  "lessons/M06-L05.md",
  "lessons/M06-L06.md",
  "lessons/M06-L07.md",
  "lessons/M06-L08.md",
  "lessons/M07-L01.md",
  "lessons/M07-L02.md",
  "lessons/M07-L03.md",
  "lessons/M07-L04.md",
  "lessons/M07-L05.md",
  "lessons/M07-L06.md",
  "lessons/M07-L07.md",
  "lessons/M07-L08.md",
  "lessons/M08-L01.md",
  "lessons/M08-L02.md",
  "lessons/M08-L03.md",
  "lessons/M08-L04.md",
  "lessons/M08-L05.md",
  "lessons/M08-L06.md",
  "lessons/M08-L07.md",
  "lessons/M09-L01.md",
  "lessons/M09-L02.md",
  "lessons/M09-L03.md",
  "lessons/M09-L04.md",
  "lessons/M09-L05.md",
  "lessons/M09-L06.md",
  "lessons/M09-L07.md",
  "lessons/M10-L01.md",
  "lessons/M10-L02.md",
  "lessons/M10-L03.md",
  "lessons/M10-L04.md",
  "lessons/M10-L05.md",
  "lessons/M10-L06.md",
  "lessons/M10-L07.md"
];
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
    "slug": "M01-L01",
    "title": "Abstract Classes",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L01.md",
    "code": "// TypeScript: Abstract Classes\nconst topicName: string = \"Abstract Classes\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Abstract Classes?",
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
    "slug": "M01-L02",
    "title": "Access Modifiers",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L02.md",
    "code": "// TypeScript: Access Modifiers\nconst topicName: string = \"Access Modifiers\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Access Modifiers?",
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
    "slug": "M01-L03",
    "title": "Ambient Modules",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L03.md",
    "code": "// TypeScript: Ambient Modules\nconst topicName: string = \"Ambient Modules\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Ambient Modules?",
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
    "slug": "M01-L04",
    "title": "Any Dan Unknown",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L04.md",
    "code": "// TypeScript: Any Dan Unknown\nconst topicName: string = \"Any Dan Unknown\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Any Dan Unknown?",
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
    "slug": "M01-L05",
    "title": "Apa Itu Typescript",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L05.md",
    "code": "// TypeScript: Apa Itu Typescript\nconst topicName: string = \"Apa Itu Typescript\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Apa Itu Typescript?",
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
    "slug": "M01-L06",
    "title": "Array Dan Tuple",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L06.md",
    "code": "// TypeScript: Array Dan Tuple\nconst topicName: string = \"Array Dan Tuple\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Array Dan Tuple?",
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
    "slug": "M01-L07",
    "title": "Arrow Functions Types",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L07.md",
    "code": "// TypeScript: Arrow Functions Types\nconst topicName: string = \"Arrow Functions Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Arrow Functions Types?",
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
    "slug": "M01-L08",
    "title": "Barrel Files",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan & Dasar TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M01-L08.md",
    "code": "// TypeScript: Barrel Files\nconst topicName: string = \"Barrel Files\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Barrel Files?",
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
    "slug": "M02-L01",
    "title": "Build Tools Webpack Babel",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L01.md",
    "code": "// TypeScript: Build Tools Webpack Babel\nconst topicName: string = \"Build Tools Webpack Babel\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Build Tools Webpack Babel?",
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
    "slug": "M02-L02",
    "title": "Class Dasar",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L02.md",
    "code": "// TypeScript: Class Dasar\nconst topicName: string = \"Class Dasar\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Class Dasar?",
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
    "slug": "M02-L03",
    "title": "Compiler Options Target Module Lib",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L03.md",
    "code": "// TypeScript: Compiler Options Target Module Lib\nconst topicName: string = \"Compiler Options Target Module Lib\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Compiler Options Target Module Lib?",
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
    "slug": "M02-L04",
    "title": "Conditional Types",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L04.md",
    "code": "// TypeScript: Conditional Types\nconst topicName: string = \"Conditional Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Conditional Types?",
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
    "slug": "M02-L05",
    "title": "Constructor Parameter Properties",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L05.md",
    "code": "// TypeScript: Constructor Parameter Properties\nconst topicName: string = \"Constructor Parameter Properties\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 14,
    "slug": "M02-L06",
    "title": "Declaration Files D Ts",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L06.md",
    "code": "// TypeScript: Declaration Files D Ts\nconst topicName: string = \"Declaration Files D Ts\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Declaration Files D Ts?",
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
    "slug": "M02-L07",
    "title": "Declaration Merging",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L07.md",
    "code": "// TypeScript: Declaration Merging\nconst topicName: string = \"Declaration Merging\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Declaration Merging?",
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
    "slug": "M02-L08",
    "title": "Default Type Params",
    "moduleId": 2,
    "module": "Modul 2: Tipe Data Kompleks & Objek",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M02-L08.md",
    "code": "// TypeScript: Default Type Params\nconst topicName: string = \"Default Type Params\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Default Type Params?",
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
    "slug": "M03-L01",
    "title": "Default Vs Named Export",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L01.md",
    "code": "// TypeScript: Default Vs Named Export\nconst topicName: string = \"Default Vs Named Export\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Default Vs Named Export?",
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
    "slug": "M03-L02",
    "title": "Definitelytyped",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L02.md",
    "code": "// TypeScript: Definitelytyped\nconst topicName: string = \"Definitelytyped\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Definitelytyped?",
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
    "slug": "M03-L03",
    "title": "Dynamic Import Code Splitting",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L03.md",
    "code": "// TypeScript: Dynamic Import Code Splitting\nconst topicName: string = \"Dynamic Import Code Splitting\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Dynamic Import Code Splitting?",
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
    "slug": "M03-L04",
    "title": "Enum Named Constants",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L04.md",
    "code": "// TypeScript: Enum Named Constants\nconst topicName: string = \"Enum Named Constants\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Enum Named Constants?",
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
    "slug": "M03-L05",
    "title": "Es6 Modules Import Export",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L05.md",
    "code": "// TypeScript: Es6 Modules Import Export\nconst topicName: string = \"Es6 Modules Import Export\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Es6 Modules Import Export?",
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
    "slug": "M03-L06",
    "title": "Eslint Typescript",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L06.md",
    "code": "// TypeScript: Eslint Typescript\nconst topicName: string = \"Eslint Typescript\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Eslint Typescript?",
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
    "slug": "M03-L07",
    "title": "Exclude Extract Nonnullable",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L07.md",
    "code": "// TypeScript: Exclude Extract Nonnullable\nconst topicName: string = \"Exclude Extract Nonnullable\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Exclude Extract Nonnullable?",
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
    "slug": "M03-L08",
    "title": "Extending Interfaces Types",
    "moduleId": 3,
    "module": "Modul 3: Fungsi & Anotasi Parameter",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M03-L08.md",
    "code": "// TypeScript: Extending Interfaces Types\nconst topicName: string = \"Extending Interfaces Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Extending Interfaces Types?",
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
    "slug": "M04-L01",
    "title": "Final Project Fullstack",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L01.md",
    "code": "// TypeScript: Final Project Fullstack\nconst topicName: string = \"Final Project Fullstack\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Final Project Fullstack?",
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
    "slug": "M04-L02",
    "title": "Function Overloads",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L02.md",
    "code": "// TypeScript: Function Overloads\nconst topicName: string = \"Function Overloads\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 27,
    "slug": "M04-L03",
    "title": "Function Types",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L03.md",
    "code": "// TypeScript: Function Types\nconst topicName: string = \"Function Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Function Types?",
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
    "slug": "M04-L04",
    "title": "Generic Constraints",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L04.md",
    "code": "// TypeScript: Generic Constraints\nconst topicName: string = \"Generic Constraints\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Constraints?",
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
    "slug": "M04-L05",
    "title": "Generic Functions Dasar",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L05.md",
    "code": "// TypeScript: Generic Functions Dasar\nconst topicName: string = \"Generic Functions Dasar\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 30,
    "slug": "M04-L06",
    "title": "Generic Interfaces Classes",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L06.md",
    "code": "// TypeScript: Generic Interfaces Classes\nconst topicName: string = \"Generic Interfaces Classes\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Generic Interfaces Classes?",
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
    "slug": "M04-L07",
    "title": "Generic Utility Types",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L07.md",
    "code": "// TypeScript: Generic Utility Types\nconst topicName: string = \"Generic Utility Types\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 32,
    "slug": "M04-L08",
    "title": "Hello World",
    "moduleId": 4,
    "module": "Modul 4: Union, Intersection & Type Narrowing",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M04-L08.md",
    "code": "// TypeScript: Hello World\nconst topicName: string = \"Hello World\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Hello World?",
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
    "slug": "M05-L01",
    "title": "Include Exclude Files",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L01.md",
    "code": "// TypeScript: Include Exclude Files\nconst topicName: string = \"Include Exclude Files\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Include Exclude Files?",
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
    "slug": "M05-L02",
    "title": "Index Signatures",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L02.md",
    "code": "// TypeScript: Index Signatures\nconst topicName: string = \"Index Signatures\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Index Signatures?",
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
    "slug": "M05-L03",
    "title": "Indexed Access Types",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L03.md",
    "code": "// TypeScript: Indexed Access Types\nconst topicName: string = \"Indexed Access Types\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 36,
    "slug": "M05-L04",
    "title": "Inheritance Extends Super",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L04.md",
    "code": "// TypeScript: Inheritance Extends Super\nconst topicName: string = \"Inheritance Extends Super\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Inheritance Extends Super?",
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
    "slug": "M05-L05",
    "title": "Instalasi Typescript",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L05.md",
    "code": "// TypeScript: Instalasi Typescript\nconst topicName: string = \"Instalasi Typescript\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Instalasi Typescript?",
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
    "slug": "M05-L06",
    "title": "Interface Dasar",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L06.md",
    "code": "// TypeScript: Interface Dasar\nconst topicName: string = \"Interface Dasar\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 39,
    "slug": "M05-L07",
    "title": "Interface Vs Type Alias",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L07.md",
    "code": "// TypeScript: Interface Vs Type Alias\nconst topicName: string = \"Interface Vs Type Alias\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Interface Vs Type Alias?",
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
    "slug": "M05-L08",
    "title": "Intersection Types",
    "moduleId": 5,
    "module": "Modul 5: Interface & Type Alias Mendalam",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M05-L08.md",
    "code": "// TypeScript: Intersection Types\nconst topicName: string = \"Intersection Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Intersection Types?",
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
    "slug": "M06-L01",
    "title": "Mapped Types",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L01.md",
    "code": "// TypeScript: Mapped Types\nconst topicName: string = \"Mapped Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Mapped Types?",
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
    "slug": "M06-L02",
    "title": "Migrasi Js Ke Ts",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L02.md",
    "code": "// TypeScript: Migrasi Js Ke Ts\nconst topicName: string = \"Migrasi Js Ke Ts\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Migrasi Js Ke Ts?",
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
    "slug": "M06-L03",
    "title": "Namespaces Organisasi Kode",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L03.md",
    "code": "// TypeScript: Namespaces Organisasi Kode\nconst topicName: string = \"Namespaces Organisasi Kode\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Namespaces Organisasi Kode?",
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
    "slug": "M06-L04",
    "title": "Nullable Types",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L04.md",
    "code": "// TypeScript: Nullable Types\nconst topicName: string = \"Nullable Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Nullable Types?",
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
    "slug": "M06-L05",
    "title": "Omit Thisparameter",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L05.md",
    "code": "// TypeScript: Omit Thisparameter\nconst topicName: string = \"Omit Thisparameter\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Omit Thisparameter?",
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
    "slug": "M06-L06",
    "title": "Optional Default Params",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L06.md",
    "code": "// TypeScript: Optional Default Params\nconst topicName: string = \"Optional Default Params\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Optional Default Params?",
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
    "slug": "M06-L07",
    "title": "Optional Readonly Properties",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L07.md",
    "code": "// TypeScript: Optional Readonly Properties\nconst topicName: string = \"Optional Readonly Properties\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Optional Readonly Properties?",
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
    "slug": "M06-L08",
    "title": "Parameter Utilities",
    "moduleId": 6,
    "module": "Modul 6: Generics",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M06-L08.md",
    "code": "// TypeScript: Parameter Utilities\nconst topicName: string = \"Parameter Utilities\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Parameter Utilities?",
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
    "slug": "M07-L01",
    "title": "Parameters Constructorparameters",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L01.md",
    "code": "// TypeScript: Parameters Constructorparameters\nconst topicName: string = \"Parameters Constructorparameters\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Parameters Constructorparameters?",
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
    "slug": "M07-L02",
    "title": "Partial Required",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L02.md",
    "code": "// TypeScript: Partial Required\nconst topicName: string = \"Partial Required\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Partial Required?",
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
    "slug": "M07-L03",
    "title": "Path Mapping Module Resolution",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L03.md",
    "code": "// TypeScript: Path Mapping Module Resolution\nconst topicName: string = \"Path Mapping Module Resolution\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Path Mapping Module Resolution?",
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
    "slug": "M07-L04",
    "title": "Pick Omit",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L04.md",
    "code": "// TypeScript: Pick Omit\nconst topicName: string = \"Pick Omit\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Pick Omit?",
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
    "slug": "M07-L05",
    "title": "Prettier Integration",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L05.md",
    "code": "// TypeScript: Prettier Integration\nconst topicName: string = \"Prettier Integration\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Prettier Integration?",
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
    "slug": "M07-L06",
    "title": "Project Cli Tool",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L06.md",
    "code": "// TypeScript: Project Cli Tool\nconst topicName: string = \"Project Cli Tool\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Project Cli Tool?",
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
    "slug": "M07-L07",
    "title": "Project React Ts",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L07.md",
    "code": "// TypeScript: Project React Ts\nconst topicName: string = \"Project React Ts\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Project React Ts?",
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
    "slug": "M07-L08",
    "title": "Project Rest Api",
    "moduleId": 7,
    "module": "Modul 7: Advanced Types: Mapped & Conditional Types",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M07-L08.md",
    "code": "// TypeScript: Project Rest Api\nconst topicName: string = \"Project Rest Api\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Project Rest Api?",
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
    "slug": "M08-L01",
    "title": "Project Setup Typescript",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L01.md",
    "code": "// TypeScript: Project Setup Typescript\nconst topicName: string = \"Project Setup Typescript\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Project Setup Typescript?",
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
    "slug": "M08-L02",
    "title": "Project Type Definitions",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L02.md",
    "code": "// TypeScript: Project Type Definitions\nconst topicName: string = \"Project Type Definitions\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Project Type Definitions?",
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
    "slug": "M08-L03",
    "title": "Readonly Params",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L03.md",
    "code": "// TypeScript: Readonly Params\nconst topicName: string = \"Readonly Params\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Readonly Params?",
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
    "slug": "M08-L04",
    "title": "Readonly Record",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L04.md",
    "code": "// TypeScript: Readonly Record\nconst topicName: string = \"Readonly Record\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Readonly Record?",
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
    "slug": "M08-L05",
    "title": "Record Tuple",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L05.md",
    "code": "// TypeScript: Record Tuple\nconst topicName: string = \"Record Tuple\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Record Tuple?",
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
    "slug": "M08-L06",
    "title": "Rest Spread",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L06.md",
    "code": "// TypeScript: Rest Spread\nconst topicName: string = \"Rest Spread\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Rest Spread?",
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
    "slug": "M08-L07",
    "title": "Returntype Parameters Thistype",
    "moduleId": 8,
    "module": "Modul 8: Utility Types Bawaan",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M08-L07.md",
    "code": "// TypeScript: Returntype Parameters Thistype\nconst topicName: string = \"Returntype Parameters Thistype\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Returntype Parameters Thistype?",
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
    "slug": "M09-L01",
    "title": "Strict Mode Options",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L01.md",
    "code": "// TypeScript: Strict Mode Options\nconst topicName: string = \"Strict Mode Options\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 65,
    "slug": "M09-L02",
    "title": "Template Literal Types",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L02.md",
    "code": "// TypeScript: Template Literal Types\nconst topicName: string = \"Template Literal Types\";\nconsole.log(\"Belajar: \" + topicName);",
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
    "id": 66,
    "slug": "M09-L03",
    "title": "Tipe Primitif",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L03.md",
    "code": "// TypeScript: Tipe Primitif\nconst topicName: string = \"Tipe Primitif\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Tipe Primitif?",
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
    "slug": "M09-L04",
    "title": "Tsconfig Json Struktur",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L04.md",
    "code": "// TypeScript: Tsconfig Json Struktur\nconst topicName: string = \"Tsconfig Json Struktur\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Tsconfig Json Struktur?",
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
    "slug": "M09-L05",
    "title": "Type Aliases",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L05.md",
    "code": "// TypeScript: Type Aliases\nconst topicName: string = \"Type Aliases\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Type Aliases?",
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
    "slug": "M09-L06",
    "title": "Type Assertions",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L06.md",
    "code": "// TypeScript: Type Assertions\nconst topicName: string = \"Type Assertions\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Type Assertions?",
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
    "slug": "M09-L07",
    "title": "Type Guards",
    "moduleId": 9,
    "module": "Modul 9: OOP & Class di TypeScript",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M09-L07.md",
    "code": "// TypeScript: Type Guards\nconst topicName: string = \"Type Guards\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Type Guards?",
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
    "slug": "M10-L01",
    "title": "Type Inference",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L01.md",
    "code": "// TypeScript: Type Inference\nconst topicName: string = \"Type Inference\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Type Inference?",
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
    "slug": "M10-L02",
    "title": "Type Narrowing",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L02.md",
    "code": "// TypeScript: Type Narrowing\nconst topicName: string = \"Type Narrowing\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Type Narrowing?",
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
    "slug": "M10-L03",
    "title": "Typescript Compiler Tsc",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L03.md",
    "code": "// TypeScript: Typescript Compiler Tsc\nconst topicName: string = \"Typescript Compiler Tsc\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Typescript Compiler Tsc?",
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
    "slug": "M10-L04",
    "title": "Typescript Vs Javascript",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L04.md",
    "code": "// TypeScript: Typescript Vs Javascript\nconst topicName: string = \"Typescript Vs Javascript\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Typescript Vs Javascript?",
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
    "slug": "M10-L05",
    "title": "Union Types",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L05.md",
    "code": "// TypeScript: Union Types\nconst topicName: string = \"Union Types\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Union Types?",
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
    "slug": "M10-L06",
    "title": "Using Js Libraries",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L06.md",
    "code": "// TypeScript: Using Js Libraries\nconst topicName: string = \"Using Js Libraries\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Using Js Libraries?",
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
    "slug": "M10-L07",
    "title": "Void Never Dan Tipe Khusus",
    "moduleId": 10,
    "module": "Modul 10: Fitur Terbaru (TS 5+), Ekosistem & Best Practices",
    "duration": "20 min",
    "level": "Menengah",
    "mdFile": "lessons/M10-L07.md",
    "code": "// TypeScript: Void Never Dan Tipe Khusus\nconst topicName: string = \"Void Never Dan Tipe Khusus\";\nconsole.log(\"Belajar: \" + topicName);",
    "quiz": {
      "question": "Apa konsep utama dari Void Never Dan Tipe Khusus?",
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
        // Compile typescript if ts library exists
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
