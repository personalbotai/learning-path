// Module definitions for Java Learning Path
const MODULES = [
    {
        id: 1,
        title: "Dasar-Dasar Java",
        description: "Pengenalan Java, instalasi JDK dan IDE, struktur program, variabel, tipe data, serta input/output dasar.",
        lessons: [
            { id: 1, title: "Apa itu Java?", slug: "apa-itu-java", duration: "15 min" },
            { id: 2, title: "Instalasi Java & IDE", slug: "instalasi-java", duration: "20 min" },
            { id: 3, title: "Struktur Program Java", slug: "struktur-program", duration: "15 min" },
            { id: 4, title: "Variabel & Tipe Data", slug: "variabel-tipe-data", duration: "20 min" },
            { id: 5, title: "Input & Output", slug: "input-output", duration: "15 min" },
            { id: 6, title: "Hello World", slug: "hello-world", duration: "10 min" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 2,
        title: "Tipe Data & Operators",
        description: "Eksplorasi tipe data primitif, wrapper classes, array, enum, casting, dan type inference.",
        lessons: [
            { id: 1, title: "Wrapper Classes", slug: "wrapper-classes", duration: "15 min" },
            { id: 2, title: "Array", slug: "arrays", duration: "20 min" },
            { id: 3, title: "Enum dan Constants", slug: "enum-dan-constants", duration: "15 min" },
            { id: 4, title: "Void & Special Types", slug: "void-dan-special-types", duration: "15 min" },
            { id: 5, title: "Type Casting", slug: "type-casting", duration: "20 min" },
            { id: 6, title: "Type Inference", slug: "type-inference", duration: "15 min" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 3,
        title: "Kontrol Alur",
        description: "Kontrol alur program: if-else, switch, loops (for, while, do-while), break, continue, exceptions, dan try-catch.",
        lessons: [
            { id: 1, title: "If-Else dan Switch", slug: "if-else-dan-switch", duration: "20 min" },
            { id: 2, title: "Loop Dasar", slug: "loops-basic", duration: "20 min" },
            { id: 3, title: "Break & Continue", slug: "break-continue", duration: "15 min" },
            { id: 4, title: "Exceptions Basics", slug: "exceptions-basics", duration: "20 min" },
            { id: 5, title: "Try-Catch-Finally", slug: "try-catch-finally", duration: "20 min" },
            { id: 6, title: "Throw & Throws", slug: "throw-dan-throws", duration: "15 min" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 4,
        title: "Object-OrientedProgramming",
        description: "Konsep OOP: class, object, access modifiers, inheritance, abstract classes, interfaces, polymorphism.",
        lessons: [
            { id: 1, title: "Class Dasar", slug: "class-dasar", duration: "20 min" },
            { id: 2, title: "Access Modifiers", slug: "access-modifiers", duration: "15 min" },
            { id: 3, title: "Inheritance & Super", slug: "inheritance-extends-super", duration: "20 min" },
            { id: 4, title: "Abstract Classes", slug: "abstract-classes", duration: "15 min" },
            { id: 5, title: "Interfaces", slug: "interfaces-basic", duration: "20 min" },
            { id: 6, title: "Polymorphism", slug: "polymorphism", duration: "15 min" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 5,
        title: "Collections Framework",
        description: "Pengenalan Collections, List, Set, Map, Queue, dan Stream API dasar.",
        lessons: [
            { id: 1, title: "Intro to Collections", slug: "intro-collections", duration: "20 min" },
            { id: 2, title: "List & ArrayList", slug: "list-dan-arraylist", duration: "20 min" },
            { id: 3, title: "Set & HashSet", slug: "set-dan-hashset", duration: "15 min" },
            { id: 4, title: "Map & HashMap", slug: "map-dan-hashmap", duration: "20 min" },
            { id: 5, title: "Queue & Deque", slug: "queue-dan-deque", duration: "15 min" },
            { id: 6, title: "Optional & Streams", slug: "optional-dan-streams-dasar", duration: "25 min" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    }
];

// Expose globally for app.js
window.MODULES = MODULES;
