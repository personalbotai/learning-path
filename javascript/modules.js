const MODULES = [
  {
    "id": 1,
    "title": "Dasar-Dasar JavaScript",
    "description": "Pelajari fundamental JavaScript modern: variabel, tipe data, operator, dan kontrol alur dengan ES2024.",
    "icon": "fas fa-play-circle",
    "lessons": [
      {
        "id": 1,
        "title": "Pengenalan dan Sejarah JavaScript",
        "slug": "M01-L01",
        "duration": "15 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 2,
        "title": "Setup Environment: Browser vs Node.js vs Bun/Deno",
        "slug": "M01-L02",
        "duration": "15 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 3,
        "title": "Variabel dan Tipe Data (let/const, BigInt, ??, ?.)",
        "slug": "M01-L03",
        "duration": "20 min",
        "color": "green",
        "lesson": 3
      },
      {
        "id": 4,
        "title": "Operator dan Ekspresi Modern (??, ??=, ||=",
        "slug": "M01-L04",
        "duration": "15 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 5,
        "title": "Kontrol Alur: if/else dan switch",
        "slug": "M01-L05",
        "duration": "20 min",
        "color": "green",
        "lesson": 5
      },
      {
        "id": 6,
        "title": "Perulangan: for, while, for...of, for await...of",
        "slug": "M01-L06",
        "duration": "20 min",
        "color": "green",
        "lesson": 6
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 1
  },
  {
    "id": 2,
    "title": "Struktur Data",
    "description": "Array, object, set, map, JSON \u2014 dengan API modern (at, findLast, groupBy, structuredClone).",
    "icon": "fas fa-database",
    "lessons": [
      {
        "id": 7,
        "title": "Array: Dasar dan Metode Modern (at, findLast, toSorted)",
        "slug": "M02-L01",
        "duration": "20 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 8,
        "title": "Object: Properti dan Metode (groupBy, entries)",
        "slug": "M02-L02",
        "duration": "20 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 9,
        "title": "Set dan WeakSet",
        "slug": "M02-L03",
        "duration": "15 min",
        "color": "blue",
        "lesson": 3
      },
      {
        "id": 10,
        "title": "Map dan WeakMap",
        "slug": "M02-L04",
        "duration": "15 min",
        "color": "blue",
        "lesson": 4
      },
      {
        "id": 11,
        "title": "JSON: Serialisasi dan structuredClone",
        "slug": "M02-L05",
        "duration": "15 min",
        "color": "blue",
        "lesson": 5
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 2
  },
  {
    "id": 3,
    "title": "Object-Oriented Programming",
    "description": "Konsep OOP di JavaScript: class, private fields (#), inheritance, encapsulation.",
    "icon": "fas fa-object-group",
    "lessons": [
      {
        "id": 12,
        "title": "Class dan Object (private #fields)",
        "slug": "M03-L01",
        "duration": "20 min",
        "color": "green",
        "lesson": 1
      },
      {
        "id": 13,
        "title": "Constructor dan Methods",
        "slug": "M03-L02",
        "duration": "15 min",
        "color": "green",
        "lesson": 2
      },
      {
        "id": 14,
        "title": "Inheritance dengan extends",
        "slug": "M03-L03",
        "duration": "20 min",
        "color": "green",
        "lesson": 3
      },
      {
        "id": 15,
        "title": "Encapsulation: getter/setter & #private",
        "slug": "M03-L04",
        "duration": "15 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 16,
        "title": "Polymorphism dan Method Overriding",
        "slug": "M03-L05",
        "duration": "20 min",
        "color": "green",
        "lesson": 5
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 3
  },
  {
    "id": 4,
    "title": "Fungsi dan Scope",
    "description": "Arrow functions, closures, this, IIFE \u2192 ESM, prototype chain.",
    "icon": "fas fa-code",
    "lessons": [
      {
        "id": 17,
        "title": "Closure dan Lexical Scoping",
        "slug": "M04-L01",
        "duration": "25 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 18,
        "title": "this Keyword: Binding dan Context",
        "slug": "M04-L02",
        "duration": "20 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 19,
        "title": "Arrow Functions: Perilaku this",
        "slug": "M04-L03",
        "duration": "15 min",
        "color": "blue",
        "lesson": 3
      },
      {
        "id": 20,
        "title": "IIFE dan Module Pattern \u2192 ESM & Top-Level Await",
        "slug": "M04-L04",
        "duration": "20 min",
        "color": "blue",
        "lesson": 4
      },
      {
        "id": 21,
        "title": "Prototype dan Prototype Chain",
        "slug": "M04-L05",
        "duration": "20 min",
        "color": "green",
        "lesson": 5
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 4
  },
  {
    "id": 5,
    "title": "Standard Library & Built-in Objects",
    "description": "Math, Date/Temporal, String, Array, Number/BigInt, RegExp modern.",
    "icon": "fas fa-cube",
    "lessons": [
      {
        "id": 22,
        "title": "Math Object: Operasi Matematika",
        "slug": "M05-L01",
        "duration": "15 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 23,
        "title": "Date dan Temporal API",
        "slug": "M05-L02",
        "duration": "20 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 24,
        "title": "String Methods (replaceAll, at)",
        "slug": "M05-L03",
        "duration": "20 min",
        "color": "blue",
        "lesson": 3
      },
      {
        "id": 25,
        "title": "Array Higher-Order Functions",
        "slug": "M05-L04",
        "duration": "25 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 26,
        "title": "Number dan BigInt",
        "slug": "M05-L05",
        "duration": "15 min",
        "color": "green",
        "lesson": 5
      },
      {
        "id": 27,
        "title": "RegExp: Named Groups, matchAll, Lookbehind",
        "slug": "M05-L06",
        "duration": "25 min",
        "color": "green",
        "lesson": 6
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 5
  },
  {
    "id": 6,
    "title": "Web Development Fundamentals",
    "description": "DOM, events, fetch + AbortController, async/await, debugging, error handling.",
    "icon": "fas fa-globe",
    "lessons": [
      {
        "id": 28,
        "title": "DOM Manipulation Dasar",
        "slug": "M06-L01",
        "duration": "25 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 29,
        "title": "Events: Handling dan Delegasi",
        "slug": "M06-L02",
        "duration": "25 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 30,
        "title": "Fetch API: HTTP Requests + AbortController",
        "slug": "M06-L03",
        "duration": "20 min",
        "color": "blue",
        "lesson": 3
      },
      {
        "id": 31,
        "title": "Async/Await: Promise.allSettled, any",
        "slug": "M06-L04",
        "duration": "30 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 32,
        "title": "Debugging: Chrome DevTools",
        "slug": "M06-L05",
        "duration": "25 min",
        "color": "green",
        "lesson": 5
      },
      {
        "id": 33,
        "title": "Error Handling: Try-Catch + Cause",
        "slug": "M06-L06",
        "duration": "20 min",
        "color": "green",
        "lesson": 6
      },
      {
        "id": 34,
        "title": "Project: To-Do List App",
        "slug": "M06-L07",
        "duration": "45 min",
        "color": "purple",
        "project": true,
        "lesson": 7
      },
      {
        "id": 35,
        "title": "Project: Weather Dashboard",
        "slug": "M06-L08",
        "duration": "45 min",
        "color": "purple",
        "project": true,
        "lesson": 8
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 6
  },
  {
    "id": 7,
    "title": "Tooling & Ecosystem",
    "description": "npm/pnpm/bun, ESM, Babel/SWC, Vite/esbuild, ESLint, Vitest + Node test runner.",
    "icon": "fas fa-tools",
    "lessons": [
      {
        "id": 36,
        "title": "npm, pnpm, dan Bun",
        "slug": "M07-L01",
        "duration": "20 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 37,
        "title": "ES Modules: import/export + Top-Level Await",
        "slug": "M07-L02",
        "duration": "15 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 38,
        "title": "Babel, SWC, dan esbuild",
        "slug": "M07-L03",
        "duration": "20 min",
        "color": "blue",
        "lesson": 3
      },
      {
        "id": 39,
        "title": "Vite, Webpack & Turbopack",
        "slug": "M07-L04",
        "duration": "30 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 40,
        "title": "ESLint, Prettier & Biome",
        "slug": "M07-L05",
        "duration": "20 min",
        "color": "green",
        "lesson": 5
      },
      {
        "id": 41,
        "title": "Testing: Vitest, Jest & Node Test Runner",
        "slug": "M07-L06",
        "duration": "25 min",
        "color": "green",
        "lesson": 6
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 7
  },
  {
    "id": 8,
    "title": "Best Practices & Performance",
    "description": "Coding standards, performance, security, code review, Web Workers.",
    "icon": "fas fa-star",
    "lessons": [
      {
        "id": 42,
        "title": "Clean Code Principles",
        "slug": "M08-L01",
        "duration": "25 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 43,
        "title": "Performance Optimization",
        "slug": "M08-L02",
        "duration": "30 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 44,
        "title": "JavaScript Security Best Practices",
        "slug": "M08-L03",
        "duration": "25 min",
        "color": "green",
        "lesson": 3
      },
      {
        "id": 45,
        "title": "Code Review Checklist",
        "slug": "M08-L04",
        "duration": "20 min",
        "color": "green",
        "lesson": 4
      },
      {
        "id": 46,
        "title": "Web Workers: Multi-threading",
        "slug": "M08-L05",
        "duration": "30 min",
        "color": "purple",
        "lesson": 5
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 8
  },
  {
    "id": 9,
    "title": "Advanced Topics",
    "description": "Generators, proxies, reflection, design patterns \u2014 modern ES2024+.",
    "icon": "fas fa-rocket",
    "lessons": [
      {
        "id": 47,
        "title": "Generators dan Iterators",
        "slug": "M09-L01",
        "duration": "25 min",
        "color": "blue",
        "lesson": 1
      },
      {
        "id": 48,
        "title": "Proxy dan Reflection API",
        "slug": "M09-L02",
        "duration": "25 min",
        "color": "blue",
        "lesson": 2
      },
      {
        "id": 49,
        "title": "Design Patterns di JavaScript",
        "slug": "M09-L03",
        "duration": "35 min",
        "color": "green",
        "lesson": 3
      }
    ],
    "quiz": {
      "questionCount": 10,
      "passingScore": 70
    },
    "module": 9
  },
  {
    "id": 10,
    "title": "Real-World Projects",
    "description": "5 proyek lengkap untuk portofolio.",
    "icon": "fas fa-laptop-code",
    "lessons": [
      {
        "id": 50,
        "title": "Project 1: Interactive Quiz App",
        "slug": "M10-L01",
        "duration": "2 jam",
        "color": "purple",
        "project": true,
        "lesson": 1
      },
      {
        "id": 51,
        "title": "Project 2: Expense Tracker",
        "slug": "M10-L02",
        "duration": "2.5 jam",
        "color": "purple",
        "project": true,
        "lesson": 2
      },
      {
        "id": 52,
        "title": "Project 3: Real-time Chat App",
        "slug": "M10-L03",
        "duration": "3 jam",
        "color": "purple",
        "project": true,
        "lesson": 3
      },
      {
        "id": 53,
        "title": "Project 4: E-commerce Product Filter",
        "slug": "M10-L04",
        "duration": "2.5 jam",
        "color": "purple",
        "project": true,
        "lesson": 4
      },
      {
        "id": 54,
        "title": "Final Project: Full-Stack JavaScript App",
        "slug": "M10-L05",
        "duration": "4 jam",
        "color": "purple",
        "project": true,
        "final": true,
        "lesson": 5
      }
    ],
    "quiz": {
      "questionCount": 0,
      "passingScore": 0
    },
    "module": 10
  }
];

if (typeof window !== 'undefined') {
  window.MODULES = MODULES;
}
if (typeof module !== 'undefined') {
  module.exports = MODULES;
}
