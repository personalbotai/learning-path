// SQL Learning Path — Core Application & SQLite WASM Engine
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
    "title": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 1: Fondasi Database Relasional & Dasar SQL",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 2,
    "title": "Modul 2: Manipulasi & Integritas Data (DML)",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 2: Manipulasi & Integritas Data (DML)",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 3,
    "title": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 4,
    "title": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 5,
    "title": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 5: Desain Skema & DDL (Data Definition Language)",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 6,
    "title": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 6: Subquery & Common Table Expressions (CTE)",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 7,
    "title": "Modul 7: Analitik Modern dengan Window Functions",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 7: Analitik Modern dengan Window Functions",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 8,
    "title": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 8: Performa, Indexing & Internal Arsitektur",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 9,
    "title": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 9: Administrasi, Keamanan & Observabilitas",
    "icon": "fa-solid fa-database"
  },
  {
    "id": 10,
    "title": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "desc": "Kurikulum intensif SQL & database relasional untuk Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "icon": "fa-solid fa-database"
  }
];
const lessons = [
  {
    "id": 1,
    "slug": "M01-L01",
    "title": "1. Sejarah SQL & Model Relasional",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L01.md",
    "code": "-- SQL Query untuk: 1. Sejarah SQL & Model Relasional\nSELECT '1. Sejarah SQL & Model Relasional' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 1. Sejarah SQL & Model Relasional?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 2,
    "slug": "M01-L02",
    "title": "2. Sintaks Dasar & Statement SELECT",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L02.md",
    "code": "-- SQL Query untuk: 2. Sintaks Dasar & Statement SELECT\nSELECT '2. Sintaks Dasar & Statement SELECT' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 2. Sintaks Dasar & Statement SELECT?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 3,
    "slug": "M01-L03",
    "title": "3. Memfilter Data dengan WHERE",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L03.md",
    "code": "-- SQL Query untuk: 3. Memfilter Data dengan WHERE\nSELECT '3. Memfilter Data dengan WHERE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 3. Memfilter Data dengan WHERE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 4,
    "slug": "M01-L04",
    "title": "4. Logika Majemuk (AND, OR, NOT)",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L04.md",
    "code": "-- SQL Query untuk: 4. Logika Majemuk (AND, OR, NOT)\nSELECT '4. Logika Majemuk (AND, OR, NOT)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 4. Logika Majemuk (AND, OR, NOT)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 5,
    "slug": "M01-L05",
    "title": "5. Operator IN, BETWEEN, & LIKE",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L05.md",
    "code": "-- SQL Query untuk: 5. Operator IN, BETWEEN, & LIKE\nSELECT '5. Operator IN, BETWEEN, & LIKE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 5. Operator IN, BETWEEN, & LIKE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 6,
    "slug": "M01-L06",
    "title": "6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)",
    "moduleId": 1,
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M01-L06.md",
    "code": "-- SQL Query untuk: 6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)\nSELECT '6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 7,
    "slug": "M02-L01",
    "title": "7. Memasukkan Data (INSERT)",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L01.md",
    "code": "-- SQL Query untuk: 7. Memasukkan Data (INSERT)\nSELECT '7. Memasukkan Data (INSERT)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 7. Memasukkan Data (INSERT)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 8,
    "slug": "M02-L02",
    "title": "8. Memperbarui Data (UPDATE)",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L02.md",
    "code": "-- SQL Query untuk: 8. Memperbarui Data (UPDATE)\nSELECT '8. Memperbarui Data (UPDATE)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 8. Memperbarui Data (UPDATE)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 9,
    "slug": "M02-L03",
    "title": "9. Menghapus Data (DELETE vs TRUNCATE)",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L03.md",
    "code": "-- SQL Query untuk: 9. Menghapus Data (DELETE vs TRUNCATE)\nSELECT '9. Menghapus Data (DELETE vs TRUNCATE)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 9. Menghapus Data (DELETE vs TRUNCATE)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 10,
    "slug": "M02-L04",
    "title": "10. Tipe Data & SQLite Affinity",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L04.md",
    "code": "-- SQL Query untuk: 10. Tipe Data & SQLite Affinity\nSELECT '10. Tipe Data & SQLite Affinity' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 10. Tipe Data & SQLite Affinity?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 11,
    "slug": "M02-L05",
    "title": "11. Penanganan NULL & COALESCE",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L05.md",
    "code": "-- SQL Query untuk: 11. Penanganan NULL & COALESCE\nSELECT '11. Penanganan NULL & COALESCE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 11. Penanganan NULL & COALESCE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 12,
    "slug": "M02-L06",
    "title": "12. Logika Kondisional (CASE WHEN)",
    "moduleId": 2,
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M02-L06.md",
    "code": "-- SQL Query untuk: 12. Logika Kondisional (CASE WHEN)\nSELECT '12. Logika Kondisional (CASE WHEN)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 12. Logika Kondisional (CASE WHEN)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 13,
    "slug": "M03-L01",
    "title": "13. Pengenalan Agregasi (COUNT, SUM)",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L01.md",
    "code": "-- SQL Query untuk: 13. Pengenalan Agregasi (COUNT, SUM)\nSELECT '13. Pengenalan Agregasi (COUNT, SUM)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 13. Pengenalan Agregasi (COUNT, SUM)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 14,
    "slug": "M03-L02",
    "title": "14. Fungsi Statistik (AVG, MIN, MAX)",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L02.md",
    "code": "-- SQL Query untuk: 14. Fungsi Statistik (AVG, MIN, MAX)\nSELECT '14. Fungsi Statistik (AVG, MIN, MAX)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 14. Fungsi Statistik (AVG, MIN, MAX)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 15,
    "slug": "M03-L03",
    "title": "15. Mengelompokkan Data (GROUP BY)",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L03.md",
    "code": "-- SQL Query untuk: 15. Mengelompokkan Data (GROUP BY)\nSELECT '15. Mengelompokkan Data (GROUP BY)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 15. Mengelompokkan Data (GROUP BY)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 16,
    "slug": "M03-L04",
    "title": "16. Memfilter Hasil Agregasi (HAVING)",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L04.md",
    "code": "-- SQL Query untuk: 16. Memfilter Hasil Agregasi (HAVING)\nSELECT '16. Memfilter Hasil Agregasi (HAVING)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 16. Memfilter Hasil Agregasi (HAVING)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 17,
    "slug": "M03-L05",
    "title": "17. GROUP_CONCAT & String Aggregation",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L05.md",
    "code": "-- SQL Query untuk: 17. GROUP_CONCAT & String Aggregation\nSELECT '17. GROUP_CONCAT & String Aggregation' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 17. GROUP_CONCAT & String Aggregation?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 18,
    "slug": "M03-L06",
    "title": "18. Pitfall Agregasi & Aturan Skema SQL",
    "moduleId": 3,
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M03-L06.md",
    "code": "-- SQL Query untuk: 18. Pitfall Agregasi & Aturan Skema SQL\nSELECT '18. Pitfall Agregasi & Aturan Skema SQL' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 18. Pitfall Agregasi & Aturan Skema SQL?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 19,
    "slug": "M04-L01",
    "title": "19. Konsep PK/FK & INNER JOIN",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L01.md",
    "code": "-- SQL Query untuk: 19. Konsep PK/FK & INNER JOIN\nSELECT '19. Konsep PK/FK & INNER JOIN' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 19. Konsep PK/FK & INNER JOIN?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 20,
    "slug": "M04-L02",
    "title": "20. Mempertahankan Data dengan LEFT JOIN",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L02.md",
    "code": "-- SQL Query untuk: 20. Mempertahankan Data dengan LEFT JOIN\nSELECT '20. Mempertahankan Data dengan LEFT JOIN' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 20. Mempertahankan Data dengan LEFT JOIN?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 21,
    "slug": "M04-L03",
    "title": "21. RIGHT, FULL OUTER JOIN & Emulasi SQLite",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L03.md",
    "code": "-- SQL Query untuk: 21. RIGHT, FULL OUTER JOIN & Emulasi SQLite\nSELECT '21. RIGHT, FULL OUTER JOIN & Emulasi SQLite' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 21. RIGHT, FULL OUTER JOIN & Emulasi SQLite?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 22,
    "slug": "M04-L04",
    "title": "22. CROSS JOIN (Cartesian Product)",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L04.md",
    "code": "-- SQL Query untuk: 22. CROSS JOIN (Cartesian Product)\nSELECT '22. CROSS JOIN (Cartesian Product)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 22. CROSS JOIN (Cartesian Product)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 23,
    "slug": "M04-L05",
    "title": "23. Self Join (Relasi Hirarki)",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L05.md",
    "code": "-- SQL Query untuk: 23. Self Join (Relasi Hirarki)\nSELECT '23. Self Join (Relasi Hirarki)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 23. Self Join (Relasi Hirarki)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 24,
    "slug": "M04-L06",
    "title": "24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)",
    "moduleId": 4,
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M04-L06.md",
    "code": "-- SQL Query untuk: 24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)\nSELECT '24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 25,
    "slug": "M05-L01",
    "title": "25. Prinsip Normalisasi Database",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L01.md",
    "code": "-- SQL Query untuk: 25. Prinsip Normalisasi Database\nSELECT '25. Prinsip Normalisasi Database' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 25. Prinsip Normalisasi Database?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 26,
    "slug": "M05-L02",
    "title": "26. Membuat Tabel (CREATE TABLE)",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L02.md",
    "code": "-- SQL Query untuk: 26. Membuat Tabel (CREATE TABLE)\nSELECT '26. Membuat Tabel (CREATE TABLE)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 26. Membuat Tabel (CREATE TABLE)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 27,
    "slug": "M05-L03",
    "title": "27. Modifikasi Skema (ALTER, DROP)",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L03.md",
    "code": "-- SQL Query untuk: 27. Modifikasi Skema (ALTER, DROP)\nSELECT '27. Modifikasi Skema (ALTER, DROP)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 27. Modifikasi Skema (ALTER, DROP)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 28,
    "slug": "M05-L04",
    "title": "28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L04.md",
    "code": "-- SQL Query untuk: 28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)\nSELECT '28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 29,
    "slug": "M05-L05",
    "title": "29. Foreign Keys & ON DELETE CASCADE",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L05.md",
    "code": "-- SQL Query untuk: 29. Foreign Keys & ON DELETE CASCADE\nSELECT '29. Foreign Keys & ON DELETE CASCADE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 29. Foreign Keys & ON DELETE CASCADE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 30,
    "slug": "M05-L06",
    "title": "30. Desain Relasi Many-to-Many",
    "moduleId": 5,
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M05-L06.md",
    "code": "-- SQL Query untuk: 30. Desain Relasi Many-to-Many\nSELECT '30. Desain Relasi Many-to-Many' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 30. Desain Relasi Many-to-Many?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 31,
    "slug": "M06-L01",
    "title": "31. Scalar Subquery di Klausa WHERE/SELECT",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L01.md",
    "code": "-- SQL Query untuk: 31. Scalar Subquery di Klausa WHERE/SELECT\nSELECT '31. Scalar Subquery di Klausa WHERE/SELECT' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 31. Scalar Subquery di Klausa WHERE/SELECT?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 32,
    "slug": "M06-L02",
    "title": "32. Multi-row Subquery (IN, ANY, ALL)",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L02.md",
    "code": "-- SQL Query untuk: 32. Multi-row Subquery (IN, ANY, ALL)\nSELECT '32. Multi-row Subquery (IN, ANY, ALL)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 32. Multi-row Subquery (IN, ANY, ALL)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 33,
    "slug": "M06-L03",
    "title": "33. Correlated Subquery & EXISTS",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L03.md",
    "code": "-- SQL Query untuk: 33. Correlated Subquery & EXISTS\nSELECT '33. Correlated Subquery & EXISTS' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 33. Correlated Subquery & EXISTS?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 34,
    "slug": "M06-L04",
    "title": "34. CTE Dasar (Klausa WITH)",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L04.md",
    "code": "-- SQL Query untuk: 34. CTE Dasar (Klausa WITH)\nSELECT '34. CTE Dasar (Klausa WITH)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 34. CTE Dasar (Klausa WITH)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 35,
    "slug": "M06-L05",
    "title": "35. Multiple CTE & Chaining",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L05.md",
    "code": "-- SQL Query untuk: 35. Multiple CTE & Chaining\nSELECT '35. Multiple CTE & Chaining' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 35. Multiple CTE & Chaining?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 36,
    "slug": "M06-L06",
    "title": "36. Recursive CTE",
    "moduleId": 6,
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M06-L06.md",
    "code": "-- SQL Query untuk: 36. Recursive CTE\nSELECT '36. Recursive CTE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 36. Recursive CTE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 37,
    "slug": "M07-L01",
    "title": "37. Konsep Window & Klausa OVER()",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L01.md",
    "code": "-- SQL Query untuk: 37. Konsep Window & Klausa OVER()\nSELECT '37. Konsep Window & Klausa OVER()' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 37. Konsep Window & Klausa OVER()?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 38,
    "slug": "M07-L02",
    "title": "38. Pembagian Jendela (PARTITION BY)",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L02.md",
    "code": "-- SQL Query untuk: 38. Pembagian Jendela (PARTITION BY)\nSELECT '38. Pembagian Jendela (PARTITION BY)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 38. Pembagian Jendela (PARTITION BY)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 39,
    "slug": "M07-L03",
    "title": "39. Pengurutan Jendela (ORDER BY & ROWS)",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L03.md",
    "code": "-- SQL Query untuk: 39. Pengurutan Jendela (ORDER BY & ROWS)\nSELECT '39. Pengurutan Jendela (ORDER BY & ROWS)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 39. Pengurutan Jendela (ORDER BY & ROWS)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 40,
    "slug": "M07-L04",
    "title": "40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L04.md",
    "code": "-- SQL Query untuk: 40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)\nSELECT '40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 41,
    "slug": "M07-L05",
    "title": "41. Analisis Tetangga (LEAD & LAG)",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L05.md",
    "code": "-- SQL Query untuk: 41. Analisis Tetangga (LEAD & LAG)\nSELECT '41. Analisis Tetangga (LEAD & LAG)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 41. Analisis Tetangga (LEAD & LAG)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 42,
    "slug": "M07-L06",
    "title": "42. Analitik Tingkat Lanjut (NTILE & Percentile)",
    "moduleId": 7,
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M07-L06.md",
    "code": "-- SQL Query untuk: 42. Analitik Tingkat Lanjut (NTILE & Percentile)\nSELECT '42. Analitik Tingkat Lanjut (NTILE & Percentile)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 42. Analitik Tingkat Lanjut (NTILE & Percentile)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 43,
    "slug": "M08-L01",
    "title": "43. Konsep ACID & Transaksi Terdistribusi",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L01.md",
    "code": "-- SQL Query untuk: 43. Konsep ACID & Transaksi Terdistribusi\nSELECT '43. Konsep ACID & Transaksi Terdistribusi' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 43. Konsep ACID & Transaksi Terdistribusi?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 44,
    "slug": "M08-L02",
    "title": "44. Isolasi, Locks & Konsep MVCC",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L02.md",
    "code": "-- SQL Query untuk: 44. Isolasi, Locks & Konsep MVCC\nSELECT '44. Isolasi, Locks & Konsep MVCC' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 44. Isolasi, Locks & Konsep MVCC?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 45,
    "slug": "M08-L03",
    "title": "45. Anatomi B-Tree Index",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L03.md",
    "code": "-- SQL Query untuk: 45. Anatomi B-Tree Index\nSELECT '45. Anatomi B-Tree Index' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 45. Anatomi B-Tree Index?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 46,
    "slug": "M08-L04",
    "title": "46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L04.md",
    "code": "-- SQL Query untuk: 46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)\nSELECT '46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 47,
    "slug": "M08-L05",
    "title": "47. Composite Index & Covering Index",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L05.md",
    "code": "-- SQL Query untuk: 47. Composite Index & Covering Index\nSELECT '47. Composite Index & Covering Index' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 47. Composite Index & Covering Index?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 48,
    "slug": "M08-L06",
    "title": "48. Optimasi Query & Anti-Pattern SARGable",
    "moduleId": 8,
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M08-L06.md",
    "code": "-- SQL Query untuk: 48. Optimasi Query & Anti-Pattern SARGable\nSELECT '48. Optimasi Query & Anti-Pattern SARGable' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 48. Optimasi Query & Anti-Pattern SARGable?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 49,
    "slug": "M09-L01",
    "title": "49. Mengelola View SQL",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L01.md",
    "code": "-- SQL Query untuk: 49. Mengelola View SQL\nSELECT '49. Mengelola View SQL' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 49. Mengelola View SQL?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 50,
    "slug": "M09-L02",
    "title": "50. Otomatisasi dengan TRIGGER",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L02.md",
    "code": "-- SQL Query untuk: 50. Otomatisasi dengan TRIGGER\nSELECT '50. Otomatisasi dengan TRIGGER' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 50. Otomatisasi dengan TRIGGER?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 51,
    "slug": "M09-L03",
    "title": "51. Keamanan: SQL Injection & Parameterisasi",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L03.md",
    "code": "-- SQL Query untuk: 51. Keamanan: SQL Injection & Parameterisasi\nSELECT '51. Keamanan: SQL Injection & Parameterisasi' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 51. Keamanan: SQL Injection & Parameterisasi?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 52,
    "slug": "M09-L04",
    "title": "52. Enkripsi, Data Masking & RBAC",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L04.md",
    "code": "-- SQL Query untuk: 52. Enkripsi, Data Masking & RBAC\nSELECT '52. Enkripsi, Data Masking & RBAC' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 52. Enkripsi, Data Masking & RBAC?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 53,
    "slug": "M09-L05",
    "title": "53. Observabilitas & Metrik (Slow Query Log)",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L05.md",
    "code": "-- SQL Query untuk: 53. Observabilitas & Metrik (Slow Query Log)\nSELECT '53. Observabilitas & Metrik (Slow Query Log)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 53. Observabilitas & Metrik (Slow Query Log)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 54,
    "slug": "M09-L06",
    "title": "54. Maintenance: Backup, VACUUM & ANALYZE",
    "moduleId": 9,
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M09-L06.md",
    "code": "-- SQL Query untuk: 54. Maintenance: Backup, VACUUM & ANALYZE\nSELECT '54. Maintenance: Backup, VACUUM & ANALYZE' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 54. Maintenance: Backup, VACUUM & ANALYZE?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 55,
    "slug": "M10-L01",
    "title": "55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L01.md",
    "code": "-- SQL Query untuk: 55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP\nSELECT '55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 56,
    "slug": "M10-L02",
    "title": "56. Cloud SQL, Data Warehouse & Lakehouse",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L02.md",
    "code": "-- SQL Query untuk: 56. Cloud SQL, Data Warehouse & Lakehouse\nSELECT '56. Cloud SQL, Data Warehouse & Lakehouse' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 56. Cloud SQL, Data Warehouse & Lakehouse?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 57,
    "slug": "M10-L03",
    "title": "57. SQL Semi-Terstruktur (JSON in SQL)",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L03.md",
    "code": "-- SQL Query untuk: 57. SQL Semi-Terstruktur (JSON in SQL)\nSELECT '57. SQL Semi-Terstruktur (JSON in SQL)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 57. SQL Semi-Terstruktur (JSON in SQL)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 58,
    "slug": "M10-L04",
    "title": "58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L04.md",
    "code": "-- SQL Query untuk: 58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)\nSELECT '58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 59,
    "slug": "M10-L05",
    "title": "59. Integrasi Ekstensi AI (pgvector / sqlite-vec)",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L05.md",
    "code": "-- SQL Query untuk: 59. Integrasi Ekstensi AI (pgvector / sqlite-vec)\nSELECT '59. Integrasi Ekstensi AI (pgvector / sqlite-vec)' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 59. Integrasi Ekstensi AI (pgvector / sqlite-vec)?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  },
  {
    "id": 60,
    "slug": "M10-L06",
    "title": "60. Masa Depan Frontend: SQLite WASM & Local-First Apps",
    "moduleId": 10,
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "mdFile": "lessons/M10-L06.md",
    "code": "-- SQL Query untuk: 60. Masa Depan Frontend: SQLite WASM & Local-First Apps\nSELECT '60. Masa Depan Frontend: SQLite WASM & Local-First Apps' AS status;",
    "quiz": {
      "question": "Apa konsep utama pada 60. Masa Depan Frontend: SQLite WASM & Local-First Apps?",
      "options": [
        "Memahami sintaks dan struktur relasional data secara akurat",
        "Mengabaikan constraint tabel",
        "Menghapus indeks tanpa evaluasi",
        "Menonaktifkan transaksi ACID"
      ],
      "answer": 0,
      "explanation": "SQL relasional menjamin integritas data dan efisiensi query tingkat tinggi."
    }
  }
];
const LESSONS = lessons;

window.MODULES = MODULES;
window.lessons = lessons;
window.LESSONS = lessons;

let db = null;
let SQL = null;
let currentLesson = 0;
let filterQuery = '';
let progress = {};

try {
    const saved = localStorage.getItem('sql_progress');
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
        localStorage.setItem('sql_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
    renderNav();
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    try {
        localStorage.removeItem('sql_progress');
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
                    (mod.icon ? '<i class="' + mod.icon + ' text-emerald-400 text-sm w-4 text-center"></i>' : '') +
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
    try { localStorage.setItem('sql_last_lesson', String(index)); } catch (e) {}
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
                '<input type="radio" name="quiz_option" value="' + oIdx + '" class="mt-1 text-emerald-500 focus:ring-emerald-500">' +
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
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">' +
            '<i class="fas fa-check-circle mr-1"></i> Benar! ' + escapeHtml(lesson.quiz.explanation || '') +
        '</div>';
        markComplete();
    } else {
        resultEl.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">' +
            '<i class="fas fa-times-circle mr-1"></i> Kurang tepat. ' + escapeHtml(lesson.quiz.explanation || 'Silakan tinjau kembali materi.') +
        '</div>';
    }
}

async function initSQL() {
    try {
        if (typeof initSqlJs !== 'undefined') {
            SQL = await initSqlJs({
                locateFile: file => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/' + file
            });
            resetDatabase();
        }
    } catch(e) {
        console.warn('SQLite WASM initialization note:', e.message);
    }
}

function resetDatabase() {
    if (!SQL) return;
    try {
        db = new SQL.Database();
        db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, role TEXT, salary REAL, created_at DATE);');
        db.run("INSERT INTO users VALUES (1, 'Budi Santoso', 'budi@example.com', 'Admin', 12500000, '2023-01-15');");
        db.run("INSERT INTO users VALUES (2, 'Siti Rahma', 'siti@example.com', 'Developer', 9800000, '2023-03-20');");
        db.run("INSERT INTO users VALUES (3, 'Ahmad Fauzi', 'ahmad@example.com', 'Designer', 8500000, '2023-05-10');");
        db.run("INSERT INTO users VALUES (4, 'Dewi Lestari', 'dewi@example.com', 'Developer', 10500000, '2023-06-01');");
        db.run("INSERT INTO users VALUES (5, 'Eko Prasetyo', 'eko@example.com', 'Manager', 18000000, '2022-11-01');");
    } catch(e) {}
}

function runSQL() {
    const editor = document.getElementById('code-editor');
    const out = document.getElementById('output');
    if (!editor || !out) return;
    const query = editor.value.trim();
    if (!query) {
        out.innerHTML = '<span class="text-slate-500">// Masukkan query SQL terlebih dahulu.</span>';
        return;
    }
    if (!db) {
        out.innerHTML = '<div class="p-3 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-mono">Query executed (Simulasi):\n\n' + escapeHtml(query) + '</div>';
        return;
    }
    try {
        const results = db.exec(query);
        if (!results || results.length === 0) {
            out.innerHTML = '<div class="text-xs text-slate-400 p-2">Query berhasil dieksekusi. Tidak ada baris data yang dikembalikan.</div>';
            return;
        }
        let tbl = '';
        results.forEach(res => {
            tbl += '<div class="overflow-x-auto my-2"><table class="min-w-full text-xs text-left border-collapse border border-white/10"><thead><tr class="bg-white/5">';
            res.columns.forEach(col => {
                tbl += '<th class="p-2 border-b border-white/10 font-mono text-slate-300">' + escapeHtml(col) + '</th>';
            });
            tbl += '</tr></thead><tbody>';
            res.values.forEach(row => {
                tbl += '<tr class="border-b border-white/5 hover:bg-white/[0.02]">';
                row.forEach(cell => {
                    tbl += '<td class="p-2 font-mono text-slate-400">' + (cell === null ? '<span class="text-slate-600">NULL</span>' : escapeHtml(String(cell))) + '</td>';
                });
                tbl += '</tr>';
            });
            tbl += '</tbody></table></div>';
        });
        out.innerHTML = tbl;
    } catch (err) {
        out.innerHTML = '<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs">' + escapeHtml(err.message) + '</div>';
    }
}

function resetCode() {
    if (lessons[currentLesson]) {
        const editor = document.getElementById('code-editor');
        if (editor) editor.value = lessons[currentLesson].code;
        const out = document.getElementById('output');
        if (out) out.innerHTML = '<span class="text-slate-500">// Query di-reset ke contoh awal. Klik Execute untuk menjalankan.</span>';
    }
}

function copyCode() {
    const editor = document.getElementById('code-editor');
    if (editor && navigator.clipboard) {
        navigator.clipboard.writeText(editor.value).then(() => {
            alert('Kode query disalin!');
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
    const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Peserta SQL Learning Path';
    
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    ctx.fillStyle = '#10b981';
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
    ctx.fillText('SQL Learning Path & SQLite WASM Interactive Platform', canvas.width / 2, 400);
    
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('STATUS: VERIFIED & COMPLETED (100%)', canvas.width / 2, 480);
    
    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('Verifikasi: https://learning-path.syamsulbahri.dev/sql/', canvas.width / 2, 570);
}

function downloadCertificatePNG() {
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'Sertifikat-SQL-Learning-Path.png';
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
window.runSQL = runSQL;
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
    initSQL();
    renderNav();
    let resumeIdx = 0;
    try {
        const saved = localStorage.getItem('sql_last_lesson');
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
