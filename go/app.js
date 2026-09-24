// Go Learning Path — Core Application
const LESSON_FILES = [
  "lessons/M01-L01.md",
  "lessons/M01-L02.md",
  "lessons/M02-L01.md",
  "lessons/M02-L02.md",
  "lessons/M03-L01.md",
  "lessons/M03-L02.md",
  "lessons/M03-L03.md",
  "lessons/M04-L01.md",
  "lessons/M04-L02.md",
  "lessons/M05-L01.md",
  "lessons/M05-L02.md",
  "lessons/M06-L01.md",
  "lessons/M06-L02.md",
  "lessons/M07-L01.md",
  "lessons/M08-L01.md",
  "lessons/M08-L02.md",
  "lessons/M08-L03.md",
  "lessons/M09-L01.md",
  "lessons/M10-L01.md",
  "lessons/M10-L02.md",
  "lessons/M11-L01.md",
  "lessons/M12-L01.md",
  "lessons/M13-L01.md",
  "lessons/M14-L01.md",
  "lessons/M15-L01.md",
  "lessons/M15-L02.md",
  "lessons/M15-L03.md",
  "lessons/M15-L04.md",
  "lessons/M16-L01.md",
  "lessons/M16-L02.md"
];
const MODULES = [
  {
    "id": 1,
    "title": "Modul 1: Pengenalan",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 2,
    "title": "Modul 2: Dasar",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 3,
    "title": "Modul 3: Kontrol",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 4,
    "title": "Modul 4: Fungsi",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 5,
    "title": "Modul 5: Data Structure",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 6,
    "title": "Modul 6: OOP",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 7,
    "title": "Modul 7: Error",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 8,
    "title": "Modul 8: Concurrency",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 9,
    "title": "Modul 9: Memory",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 10,
    "title": "Modul 10: Modul",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 11,
    "title": "Modul 11: File",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 12,
    "title": "Modul 12: Data",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 13,
    "title": "Modul 13: Testing",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 14,
    "title": "Modul 14: Web",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 15,
    "title": "Modul 15: Advanced",
    "desc": "",
    "icon": "fa-solid fa-code"
  },
  {
    "id": 16,
    "title": "Modul 16: Project",
    "desc": "",
    "icon": "fa-solid fa-code"
  }
];
const lessons = [
  {
    "id": 1,
    "slug": "M01-L01",
    "title": "Apa itu Go?",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Apa itu Go? ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Apa itu Go??",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 2,
    "slug": "M01-L02",
    "title": "Instalasi dan Setup Go Environment",
    "moduleId": 1,
    "module": "Modul 1: Pengenalan",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M01-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Instalasi dan Setup Go Environment ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Instalasi dan Setup Go Environment?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 3,
    "slug": "M02-L01",
    "title": "Variabel dan Tipe Data",
    "moduleId": 2,
    "module": "Modul 2: Dasar",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Variabel dan Tipe Data ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Variabel dan Tipe Data?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 4,
    "slug": "M02-L02",
    "title": "Operator dan Ekspresi",
    "moduleId": 2,
    "module": "Modul 2: Dasar",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M02-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Operator dan Ekspresi ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Operator dan Ekspresi?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 5,
    "slug": "M03-L01",
    "title": "Control Flow: If dan Else",
    "moduleId": 3,
    "module": "Modul 3: Kontrol",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Control Flow: If dan Else ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Control Flow: If dan Else?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 6,
    "slug": "M03-L02",
    "title": "Loop dan Iterasi",
    "moduleId": 3,
    "module": "Modul 3: Kontrol",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Loop dan Iterasi ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Loop dan Iterasi?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 7,
    "slug": "M03-L03",
    "title": "Switch dan Select Statement",
    "moduleId": 3,
    "module": "Modul 3: Kontrol",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M03-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Switch dan Select Statement ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Switch dan Select Statement?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 8,
    "slug": "M04-L01",
    "title": "Fungsi Dasar",
    "moduleId": 4,
    "module": "Modul 4: Fungsi",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Fungsi Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Fungsi Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 9,
    "slug": "M04-L02",
    "title": "Closure dan Anonymous Functions",
    "moduleId": 4,
    "module": "Modul 4: Fungsi",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M04-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Closure dan Anonymous Functions ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Closure dan Anonymous Functions?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 10,
    "slug": "M05-L01",
    "title": "Array dan Slice",
    "moduleId": 5,
    "module": "Modul 5: Data Structure",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Array dan Slice ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Array dan Slice?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 11,
    "slug": "M05-L02",
    "title": "Map: Key-Value Data Structure",
    "moduleId": 5,
    "module": "Modul 5: Data Structure",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M05-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Map: Key-Value Data Structure ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Map: Key-Value Data Structure?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 12,
    "slug": "M06-L01",
    "title": "Struct dan Method",
    "moduleId": 6,
    "module": "Modul 6: OOP",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Struct dan Method ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Struct dan Method?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 13,
    "slug": "M06-L02",
    "title": "Interface Dasar",
    "moduleId": 6,
    "module": "Modul 6: OOP",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M06-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Interface Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Interface Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 14,
    "slug": "M07-L01",
    "title": "Error Handling di Go",
    "moduleId": 7,
    "module": "Modul 7: Error",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M07-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Error Handling di Go ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Error Handling di Go?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 15,
    "slug": "M08-L01",
    "title": "Goroutine Dasar",
    "moduleId": 8,
    "module": "Modul 8: Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Goroutine Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Goroutine Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 16,
    "slug": "M08-L02",
    "title": "Channel Dasar",
    "moduleId": 8,
    "module": "Modul 8: Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Channel Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Channel Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 17,
    "slug": "M08-L03",
    "title": "Select dan Pattern Concurrency",
    "moduleId": 8,
    "module": "Modul 8: Concurrency",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M08-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Select dan Pattern Concurrency ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Select dan Pattern Concurrency?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 18,
    "slug": "M09-L01",
    "title": "Pointer Dasar",
    "moduleId": 9,
    "module": "Modul 9: Memory",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M09-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Pointer Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Pointer Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 19,
    "slug": "M10-L01",
    "title": "Package dan Import System",
    "moduleId": 10,
    "module": "Modul 10: Modul",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Package dan Import System ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Package dan Import System?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 20,
    "slug": "M10-L02",
    "title": "Go Modules dan Dependency Management",
    "moduleId": 10,
    "module": "Modul 10: Modul",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M10-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Go Modules dan Dependency Management ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Go Modules dan Dependency Management?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 21,
    "slug": "M11-L01",
    "title": "File I/O Dasar",
    "moduleId": 11,
    "module": "Modul 11: File",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M11-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== File I/O Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari File I/O Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 22,
    "slug": "M12-L01",
    "title": "JSON dan Encoding",
    "moduleId": 12,
    "module": "Modul 12: Data",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M12-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== JSON dan Encoding ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari JSON dan Encoding?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 23,
    "slug": "M13-L01",
    "title": "Testing Dasar",
    "moduleId": 13,
    "module": "Modul 13: Testing",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M13-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Testing Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Testing Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 24,
    "slug": "M14-L01",
    "title": "HTTP Server Dasar",
    "moduleId": 14,
    "module": "Modul 14: Web",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M14-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== HTTP Server Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari HTTP Server Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 25,
    "slug": "M15-L01",
    "title": "Context dan Timeout",
    "moduleId": 15,
    "module": "Modul 15: Advanced",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M15-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Context dan Timeout ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Context dan Timeout?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 26,
    "slug": "M15-L02",
    "title": "Defer, Panic, dan Recover",
    "moduleId": 15,
    "module": "Modul 15: Advanced",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M15-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Defer, Panic, dan Recover ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Defer, Panic, dan Recover?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 27,
    "slug": "M15-L03",
    "title": "Generics Dasar (Go 1.18+)",
    "moduleId": 15,
    "module": "Modul 15: Advanced",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M15-L03.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Generics Dasar (Go 1.18+) ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Generics Dasar (Go 1.18+)?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 28,
    "slug": "M15-L04",
    "title": "Reflection Dasar",
    "moduleId": 15,
    "module": "Modul 15: Advanced",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M15-L04.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Reflection Dasar ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Reflection Dasar?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 29,
    "slug": "M16-L01",
    "title": "Membuat CLI Application",
    "moduleId": 16,
    "module": "Modul 16: Project",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M16-L01.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Membuat CLI Application ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Membuat CLI Application?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
    }
  },
  {
    "id": 30,
    "slug": "M16-L02",
    "title": "Membuat REST API",
    "moduleId": 16,
    "module": "Modul 16: Project",
    "duration": "15 min",
    "level": "Standar Industri",
    "mdFile": "lessons/M16-L02.md",
    "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"=== Membuat REST API ===\")\n}",
    "quiz": {
      "question": "Apa konsep utama dari Membuat REST API?",
      "options": [
        "Memahami sintaks dan idiom standar dalam Go",
        "Mengabaikan error handling bawaan Go",
        "Menghapus fungsi main dalam package",
        "Mengganti garbage collector Go"
      ],
      "answer": 0,
      "explanation": "Go mendesain konsep ini untuk kesederhanaan, konkurensi efisien, dan kejelasan kode."
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
    ctx.fillText('Telah berhasil menyelesaikan seluruh 30 kurikulum pelajaran', canvas.width / 2, 360);
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
