const LESSON_FILES = ['lessons/M01-L01.md', 'lessons/M01-L02.md', 'lessons/M01-L03.md', 'lessons/M01-L04.md', 'lessons/M01-L05.md', 'lessons/M01-L06.md', 'lessons/M02-L01.md', 'lessons/M02-L02.md', 'lessons/M02-L03.md', 'lessons/M02-L04.md', 'lessons/M02-L05.md', 'lessons/M02-L06.md', 'lessons/M03-L01.md', 'lessons/M03-L02.md', 'lessons/M03-L03.md', 'lessons/M03-L04.md', 'lessons/M03-L05.md', 'lessons/M03-L06.md', 'lessons/M04-L01.md', 'lessons/M04-L02.md', 'lessons/M04-L03.md', 'lessons/M04-L04.md', 'lessons/M04-L05.md', 'lessons/M04-L06.md', 'lessons/M05-L01.md', 'lessons/M05-L02.md', 'lessons/M05-L03.md', 'lessons/M05-L04.md', 'lessons/M05-L05.md', 'lessons/M05-L06.md', 'lessons/M06-L01.md', 'lessons/M06-L02.md', 'lessons/M06-L03.md', 'lessons/M06-L04.md', 'lessons/M06-L05.md', 'lessons/M06-L06.md', 'lessons/M07-L01.md', 'lessons/M07-L02.md', 'lessons/M07-L03.md', 'lessons/M07-L04.md', 'lessons/M07-L05.md', 'lessons/M07-L06.md', 'lessons/M08-L01.md', 'lessons/M08-L02.md', 'lessons/M08-L03.md', 'lessons/M08-L04.md', 'lessons/M08-L05.md', 'lessons/M08-L06.md', 'lessons/M09-L01.md', 'lessons/M09-L02.md', 'lessons/M09-L03.md', 'lessons/M09-L04.md', 'lessons/M09-L05.md', 'lessons/M09-L06.md', 'lessons/M10-L01.md', 'lessons/M10-L02.md', 'lessons/M10-L03.md', 'lessons/M10-L04.md', 'lessons/M10-L05.md', 'lessons/M10-L06.md'];
// SQL Learning Path — Core Application & SQLite WASM Engine
(function() {
    'use strict';

    let db = null;
    let SQL = null;
    let currentLesson = 0;
    let completedLessons = new Set();
    const STORAGE_KEY = 'sql_completed_lessons';
    const RESUME_KEY = 'sql_last_lesson';

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) completedLessons = new Set(JSON.parse(saved));
    } catch(e) {}

    const lessons = [
  {
    "id": "sql-01",
    "title": "1. Sejarah SQL & Model Relasional",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 1. Sejarah SQL & Model Relasional\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 1. Sejarah SQL & Model Relasional\nSELECT 'Hello SQL Lesson 1' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 1. Sejarah SQL & Model Relasional?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-02",
    "title": "2. Sintaks Dasar & Statement SELECT",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 2. Sintaks Dasar & Statement SELECT\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 2. Sintaks Dasar & Statement SELECT\nSELECT 'Hello SQL Lesson 2' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 2. Sintaks Dasar & Statement SELECT?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-03",
    "title": "3. Memfilter Data dengan WHERE",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 3. Memfilter Data dengan WHERE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 3. Memfilter Data dengan WHERE\nSELECT 'Hello SQL Lesson 3' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 3. Memfilter Data dengan WHERE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-04",
    "title": "4. Logika Majemuk (AND, OR, NOT)",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 4. Logika Majemuk (AND, OR, NOT)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 4. Logika Majemuk (AND, OR, NOT)\nSELECT 'Hello SQL Lesson 4' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 4. Logika Majemuk (AND, OR, NOT)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-05",
    "title": "5. Operator IN, BETWEEN, & LIKE",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 5. Operator IN, BETWEEN, & LIKE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 5. Operator IN, BETWEEN, & LIKE\nSELECT 'Hello SQL Lesson 5' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 5. Operator IN, BETWEEN, & LIKE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-06",
    "title": "6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)",
    "module": "Modul 1: Fondasi Database Relasional & Dasar SQL",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)\nSELECT 'Hello SQL Lesson 6' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 6. Sorting & Pagination (ORDER BY, LIMIT, OFFSET)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-07",
    "title": "7. Memasukkan Data (INSERT)",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 7. Memasukkan Data (INSERT)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 7. Memasukkan Data (INSERT)\nSELECT 'Hello SQL Lesson 7' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 7. Memasukkan Data (INSERT)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-08",
    "title": "8. Memperbarui Data (UPDATE)",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 8. Memperbarui Data (UPDATE)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 8. Memperbarui Data (UPDATE)\nSELECT 'Hello SQL Lesson 8' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 8. Memperbarui Data (UPDATE)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-09",
    "title": "9. Menghapus Data (DELETE vs TRUNCATE)",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 9. Menghapus Data (DELETE vs TRUNCATE)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 9. Menghapus Data (DELETE vs TRUNCATE)\nSELECT 'Hello SQL Lesson 9' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 9. Menghapus Data (DELETE vs TRUNCATE)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-10",
    "title": "10. Tipe Data & SQLite Affinity",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 10. Tipe Data & SQLite Affinity\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 10. Tipe Data & SQLite Affinity\nSELECT 'Hello SQL Lesson 10' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 10. Tipe Data & SQLite Affinity?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-11",
    "title": "11. Penanganan NULL & COALESCE",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 11. Penanganan NULL & COALESCE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 11. Penanganan NULL & COALESCE\nSELECT 'Hello SQL Lesson 11' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 11. Penanganan NULL & COALESCE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-12",
    "title": "12. Logika Kondisional (CASE WHEN)",
    "module": "Modul 2: Manipulasi & Integritas Data (DML)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 12. Logika Kondisional (CASE WHEN)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 12. Logika Kondisional (CASE WHEN)\nSELECT 'Hello SQL Lesson 12' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 12. Logika Kondisional (CASE WHEN)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-13",
    "title": "13. Pengenalan Agregasi (COUNT, SUM)",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 13. Pengenalan Agregasi (COUNT, SUM)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 13. Pengenalan Agregasi (COUNT, SUM)\nSELECT 'Hello SQL Lesson 13' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 13. Pengenalan Agregasi (COUNT, SUM)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-14",
    "title": "14. Fungsi Statistik (AVG, MIN, MAX)",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 14. Fungsi Statistik (AVG, MIN, MAX)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 14. Fungsi Statistik (AVG, MIN, MAX)\nSELECT 'Hello SQL Lesson 14' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 14. Fungsi Statistik (AVG, MIN, MAX)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-15",
    "title": "15. Mengelompokkan Data (GROUP BY)",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 15. Mengelompokkan Data (GROUP BY)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 15. Mengelompokkan Data (GROUP BY)\nSELECT 'Hello SQL Lesson 15' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 15. Mengelompokkan Data (GROUP BY)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-16",
    "title": "16. Memfilter Hasil Agregasi (HAVING)",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 16. Memfilter Hasil Agregasi (HAVING)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 16. Memfilter Hasil Agregasi (HAVING)\nSELECT 'Hello SQL Lesson 16' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 16. Memfilter Hasil Agregasi (HAVING)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-17",
    "title": "17. GROUP_CONCAT & String Aggregation",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 17. GROUP_CONCAT & String Aggregation\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 17. GROUP_CONCAT & String Aggregation\nSELECT 'Hello SQL Lesson 17' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 17. GROUP_CONCAT & String Aggregation?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-18",
    "title": "18. Pitfall Agregasi & Aturan Skema SQL",
    "module": "Modul 3: Fungsi Agregasi & Pengelompokan Data",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 18. Pitfall Agregasi & Aturan Skema SQL\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 18. Pitfall Agregasi & Aturan Skema SQL\nSELECT 'Hello SQL Lesson 18' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 18. Pitfall Agregasi & Aturan Skema SQL?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-19",
    "title": "19. Konsep PK/FK & INNER JOIN",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 19. Konsep PK/FK & INNER JOIN\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 19. Konsep PK/FK & INNER JOIN\nSELECT 'Hello SQL Lesson 19' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 19. Konsep PK/FK & INNER JOIN?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-20",
    "title": "20. Mempertahankan Data dengan LEFT JOIN",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 20. Mempertahankan Data dengan LEFT JOIN\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 20. Mempertahankan Data dengan LEFT JOIN\nSELECT 'Hello SQL Lesson 20' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 20. Mempertahankan Data dengan LEFT JOIN?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-21",
    "title": "21. RIGHT, FULL OUTER JOIN & Emulasi SQLite",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 21. RIGHT, FULL OUTER JOIN & Emulasi SQLite\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 21. RIGHT, FULL OUTER JOIN & Emulasi SQLite\nSELECT 'Hello SQL Lesson 21' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 21. RIGHT, FULL OUTER JOIN & Emulasi SQLite?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-22",
    "title": "22. CROSS JOIN (Cartesian Product)",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 22. CROSS JOIN (Cartesian Product)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 22. CROSS JOIN (Cartesian Product)\nSELECT 'Hello SQL Lesson 22' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 22. CROSS JOIN (Cartesian Product)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-23",
    "title": "23. Self Join (Relasi Hirarki)",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 23. Self Join (Relasi Hirarki)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 23. Self Join (Relasi Hirarki)\nSELECT 'Hello SQL Lesson 23' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 23. Self Join (Relasi Hirarki)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-24",
    "title": "24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)",
    "module": "Modul 4: Penggabungan Tabel (Relasi & Joins)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)\nSELECT 'Hello SQL Lesson 24' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 24. Operasi Himpunan (UNION, INTERSECT, EXCEPT)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-25",
    "title": "25. Prinsip Normalisasi Database",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 25. Prinsip Normalisasi Database\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 25. Prinsip Normalisasi Database\nSELECT 'Hello SQL Lesson 25' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 25. Prinsip Normalisasi Database?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-26",
    "title": "26. Membuat Tabel (CREATE TABLE)",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 26. Membuat Tabel (CREATE TABLE)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 26. Membuat Tabel (CREATE TABLE)\nSELECT 'Hello SQL Lesson 26' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 26. Membuat Tabel (CREATE TABLE)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-27",
    "title": "27. Modifikasi Skema (ALTER, DROP)",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 27. Modifikasi Skema (ALTER, DROP)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 27. Modifikasi Skema (ALTER, DROP)\nSELECT 'Hello SQL Lesson 27' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 27. Modifikasi Skema (ALTER, DROP)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-28",
    "title": "28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)\nSELECT 'Hello SQL Lesson 28' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 28. Constraint Kolom (UNIQUE, CHECK, DEFAULT)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-29",
    "title": "29. Foreign Keys & ON DELETE CASCADE",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 29. Foreign Keys & ON DELETE CASCADE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 29. Foreign Keys & ON DELETE CASCADE\nSELECT 'Hello SQL Lesson 29' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 29. Foreign Keys & ON DELETE CASCADE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-30",
    "title": "30. Desain Relasi Many-to-Many",
    "module": "Modul 5: Desain Skema & DDL (Data Definition Language)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 30. Desain Relasi Many-to-Many\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 30. Desain Relasi Many-to-Many\nSELECT 'Hello SQL Lesson 30' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 30. Desain Relasi Many-to-Many?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-31",
    "title": "31. Scalar Subquery di Klausa WHERE/SELECT",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 31. Scalar Subquery di Klausa WHERE/SELECT\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 31. Scalar Subquery di Klausa WHERE/SELECT\nSELECT 'Hello SQL Lesson 31' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 31. Scalar Subquery di Klausa WHERE/SELECT?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-32",
    "title": "32. Multi-row Subquery (IN, ANY, ALL)",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 32. Multi-row Subquery (IN, ANY, ALL)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 32. Multi-row Subquery (IN, ANY, ALL)\nSELECT 'Hello SQL Lesson 32' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 32. Multi-row Subquery (IN, ANY, ALL)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-33",
    "title": "33. Correlated Subquery & EXISTS",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 33. Correlated Subquery & EXISTS\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 33. Correlated Subquery & EXISTS\nSELECT 'Hello SQL Lesson 33' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 33. Correlated Subquery & EXISTS?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-34",
    "title": "34. CTE Dasar (Klausa WITH)",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 34. CTE Dasar (Klausa WITH)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 34. CTE Dasar (Klausa WITH)\nSELECT 'Hello SQL Lesson 34' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 34. CTE Dasar (Klausa WITH)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-35",
    "title": "35. Multiple CTE & Chaining",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 35. Multiple CTE & Chaining\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 35. Multiple CTE & Chaining\nSELECT 'Hello SQL Lesson 35' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 35. Multiple CTE & Chaining?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-36",
    "title": "36. Recursive CTE",
    "module": "Modul 6: Subquery & Common Table Expressions (CTE)",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 36. Recursive CTE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 36. Recursive CTE\nSELECT 'Hello SQL Lesson 36' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 36. Recursive CTE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-37",
    "title": "37. Konsep Window & Klausa OVER()",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 37. Konsep Window & Klausa OVER()\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 37. Konsep Window & Klausa OVER()\nSELECT 'Hello SQL Lesson 37' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 37. Konsep Window & Klausa OVER()?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-38",
    "title": "38. Pembagian Jendela (PARTITION BY)",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 38. Pembagian Jendela (PARTITION BY)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 38. Pembagian Jendela (PARTITION BY)\nSELECT 'Hello SQL Lesson 38' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 38. Pembagian Jendela (PARTITION BY)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-39",
    "title": "39. Pengurutan Jendela (ORDER BY & ROWS)",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 39. Pengurutan Jendela (ORDER BY & ROWS)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 39. Pengurutan Jendela (ORDER BY & ROWS)\nSELECT 'Hello SQL Lesson 39' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 39. Pengurutan Jendela (ORDER BY & ROWS)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-40",
    "title": "40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)\nSELECT 'Hello SQL Lesson 40' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 40. Fungsi Peringkat (ROW_NUMBER, RANK, DENSE_RANK)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-41",
    "title": "41. Analisis Tetangga (LEAD & LAG)",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 41. Analisis Tetangga (LEAD & LAG)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 41. Analisis Tetangga (LEAD & LAG)\nSELECT 'Hello SQL Lesson 41' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 41. Analisis Tetangga (LEAD & LAG)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-42",
    "title": "42. Analitik Tingkat Lanjut (NTILE & Percentile)",
    "module": "Modul 7: Analitik Modern dengan Window Functions",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 42. Analitik Tingkat Lanjut (NTILE & Percentile)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 42. Analitik Tingkat Lanjut (NTILE & Percentile)\nSELECT 'Hello SQL Lesson 42' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 42. Analitik Tingkat Lanjut (NTILE & Percentile)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-43",
    "title": "43. Konsep ACID & Transaksi Terdistribusi",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 43. Konsep ACID & Transaksi Terdistribusi\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 43. Konsep ACID & Transaksi Terdistribusi\nSELECT 'Hello SQL Lesson 43' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 43. Konsep ACID & Transaksi Terdistribusi?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-44",
    "title": "44. Isolasi, Locks & Konsep MVCC",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 44. Isolasi, Locks & Konsep MVCC\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 44. Isolasi, Locks & Konsep MVCC\nSELECT 'Hello SQL Lesson 44' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 44. Isolasi, Locks & Konsep MVCC?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-45",
    "title": "45. Anatomi B-Tree Index",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 45. Anatomi B-Tree Index\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 45. Anatomi B-Tree Index\nSELECT 'Hello SQL Lesson 45' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 45. Anatomi B-Tree Index?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-46",
    "title": "46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)\nSELECT 'Hello SQL Lesson 46' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 46. Visualisasi Eksekusi (EXPLAIN QUERY PLAN)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-47",
    "title": "47. Composite Index & Covering Index",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 47. Composite Index & Covering Index\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 47. Composite Index & Covering Index\nSELECT 'Hello SQL Lesson 47' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 47. Composite Index & Covering Index?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-48",
    "title": "48. Optimasi Query & Anti-Pattern SARGable",
    "module": "Modul 8: Performa, Indexing & Internal Arsitektur",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 48. Optimasi Query & Anti-Pattern SARGable\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 48. Optimasi Query & Anti-Pattern SARGable\nSELECT 'Hello SQL Lesson 48' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 48. Optimasi Query & Anti-Pattern SARGable?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-49",
    "title": "49. Mengelola View SQL",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 49. Mengelola View SQL\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 49. Mengelola View SQL\nSELECT 'Hello SQL Lesson 49' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 49. Mengelola View SQL?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-50",
    "title": "50. Otomatisasi dengan TRIGGER",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 50. Otomatisasi dengan TRIGGER\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 50. Otomatisasi dengan TRIGGER\nSELECT 'Hello SQL Lesson 50' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 50. Otomatisasi dengan TRIGGER?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-51",
    "title": "51. Keamanan: SQL Injection & Parameterisasi",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 51. Keamanan: SQL Injection & Parameterisasi\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 51. Keamanan: SQL Injection & Parameterisasi\nSELECT 'Hello SQL Lesson 51' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 51. Keamanan: SQL Injection & Parameterisasi?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-52",
    "title": "52. Enkripsi, Data Masking & RBAC",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 52. Enkripsi, Data Masking & RBAC\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 52. Enkripsi, Data Masking & RBAC\nSELECT 'Hello SQL Lesson 52' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 52. Enkripsi, Data Masking & RBAC?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-53",
    "title": "53. Observabilitas & Metrik (Slow Query Log)",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 53. Observabilitas & Metrik (Slow Query Log)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 53. Observabilitas & Metrik (Slow Query Log)\nSELECT 'Hello SQL Lesson 53' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 53. Observabilitas & Metrik (Slow Query Log)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-54",
    "title": "54. Maintenance: Backup, VACUUM & ANALYZE",
    "module": "Modul 9: Administrasi, Keamanan & Observabilitas",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 54. Maintenance: Backup, VACUUM & ANALYZE\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 54. Maintenance: Backup, VACUUM & ANALYZE\nSELECT 'Hello SQL Lesson 54' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 54. Maintenance: Backup, VACUUM & ANALYZE?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-55",
    "title": "55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP\nSELECT 'Hello SQL Lesson 55' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 55. Lanskap Arsitektur: OLTP vs OLAP vs HTAP?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-56",
    "title": "56. Cloud SQL, Data Warehouse & Lakehouse",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 56. Cloud SQL, Data Warehouse & Lakehouse\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 56. Cloud SQL, Data Warehouse & Lakehouse\nSELECT 'Hello SQL Lesson 56' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 56. Cloud SQL, Data Warehouse & Lakehouse?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-57",
    "title": "57. SQL Semi-Terstruktur (JSON in SQL)",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 57. SQL Semi-Terstruktur (JSON in SQL)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 57. SQL Semi-Terstruktur (JSON in SQL)\nSELECT 'Hello SQL Lesson 57' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 57. SQL Semi-Terstruktur (JSON in SQL)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-58",
    "title": "58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)\nSELECT 'Hello SQL Lesson 58' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 58. Database Vektor & Konsep RAG (Retrieval-Augmented Generation)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-59",
    "title": "59. Integrasi Ekstensi AI (pgvector / sqlite-vec)",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 59. Integrasi Ekstensi AI (pgvector / sqlite-vec)\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 59. Integrasi Ekstensi AI (pgvector / sqlite-vec)\nSELECT 'Hello SQL Lesson 59' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 59. Integrasi Ekstensi AI (pgvector / sqlite-vec)?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  },
  {
    "id": "sql-60",
    "title": "60. Masa Depan Frontend: SQLite WASM & Local-First Apps",
    "module": "Modul 10: Ekosistem Modern: Cloud, AI, & SQLite WASM",
    "duration": "15 Menit",
    "level": "Menengah",
    "content_md": "# 60. Masa Depan Frontend: SQLite WASM & Local-First Apps\n\nMateri detail dari pelajaran ini mencakup berbagai best practices di industri 2026.\n\n### Poin Utama\n- Memahami struktur arsitektur SQL modern.\n- Konsep-konsep tingkat lanjut.\n",
    "code": "-- Implementasi kode interaktif SQLite untuk 60. Masa Depan Frontend: SQLite WASM & Local-First Apps\nSELECT 'Hello SQL Lesson 60' as status;",
    "quiz": {
      "question": "Apa konsep utama pada bagian 60. Masa Depan Frontend: SQLite WASM & Local-First Apps?",
      "options": [
        "Konsep A",
        "Konsep B",
        "Konsep C",
        "Konsep D"
      ],
      "answer": 0,
      "explanation": "Penjelasan detail untuk soal kuis SQL ini."
    }
  }
];

    window.lessons = lessons;
    window.LESSONS = lessons;

    async function initSQL() {
        const out = document.getElementById('output');
        const meta = document.getElementById('query-meta');
        if (meta) meta.innerText = 'Loading SQLite WASM...';
        try {
            const config = {
                locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${filename}`
            };
            SQL = await initSqlJs(config);
            db = new SQL.Database();
            if (meta) meta.innerText = 'SQLite 3.44+ WASM Ready (Local)';
            console.log('✓ SQLite WASM Engine Initialized');
        } catch (err) {
            console.error('SQLite WASM initialization failed:', err);
            if (meta) meta.innerText = 'WASM Error';
            if (out) out.innerHTML = `<span class="text-rose-400">Failed to load SQLite WASM: ${err.message}</span>`;
        }
    }

    window.runCode = function() {
        const editor = document.getElementById('code-editor');
        const out = document.getElementById('output');
        const meta = document.getElementById('query-meta');
        if (!editor || !out) return;

        const query = editor.value.trim();
        if (!query) {
            out.innerHTML = '<span class="text-amber-400">Query SQL kosong. Silakan tulis perintah SQL.</span>';
            return;
        }

        if (!db) {
            out.innerHTML = '<span class="text-slate-400">Engine SQLite WASM sedang diinisialisasi, silakan tunggu sejenak...</span>';
            return;
        }

        const startTime = performance.now();
        try {
            const res = db.exec(query);
            const duration = (performance.now() - startTime).toFixed(2);
            if (meta) meta.innerText = `Executed in ${duration}ms (${res.length} result set)`;

            if (!res || res.length === 0) {
                out.innerHTML = `<span class="text-emerald-400">✓ Query berhasil dieksekusi (0 rows returned / DDL / DML write success).</span>
<span class="text-slate-500">Execution time: ${duration}ms</span>`;
                return;
            }

            let html = '';
            res.forEach((table, tIdx) => {
                html += `<div class="mb-4 overflow-x-auto">`;
                if (res.length > 1) {
                    html += `<div class="text-[11px] font-mono text-emerald-400 mb-1">Result Set #${tIdx + 1}:</div>`;
                }
                html += `<table class="w-full text-left text-xs border-collapse border border-white/10 rounded-lg overflow-hidden">`;
                html += `<thead class="bg-[#172033] text-emerald-300 font-mono"><tr>`;
                table.columns.forEach(col => {
                    html += `<th class="p-2 border-b border-white/10 whitespace-nowrap">${escapeHTML(col)}</th>`;
                });
                html += `</tr></thead><tbody class="divide-y divide-white/5 font-mono">`;
                table.values.forEach((row, rIdx) => {
                    const bg = rIdx % 2 === 0 ? 'bg-black/20' : 'bg-white/[0.02]';
                    html += `<tr class="${bg} hover:bg-white/5 transition">`;
                    row.forEach(val => {
                        const displayVal = val === null ? '<span class="text-slate-500 italic">NULL</span>' : escapeHTML(String(val));
                        html += `<td class="p-2 whitespace-nowrap">${displayVal}</td>`;
                    });
                    html += `</tr>`;
                });
                html += `</tbody></table></div>`;
            });
            html += `<div class="text-[11px] text-slate-500 font-mono">Total baris: ${res[0].values.length} baris • ${duration}ms</div>`;
            out.innerHTML = html;
        } catch (err) {
            const duration = (performance.now() - startTime).toFixed(2);
            if (meta) meta.innerText = `Error (${duration}ms)`;
            out.innerHTML = `<div class="text-rose-400 font-mono"><i class="fas fa-circle-xmark mr-1.5"></i><b>SQLite Error:</b>
${escapeHTML(err.message)}</div>`;
        }
    }

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    window.resetCode = function() {
        if (lessons[currentLesson]) {
            const editor = document.getElementById('code-editor');
            if (editor) editor.value = lessons[currentLesson].code;
            const out = document.getElementById('output');
            if (out) out.innerHTML = '<span class="text-slate-500">// Query di-reset ke contoh awal. Klik Execute untuk menjalankan.</span>';
        }
    };

    function renderNav(filterText = '') {
        const nav = document.getElementById('lessons-nav');
        if (!nav) return;
        const query = filterText.toLowerCase().trim();

        let currentModule = '';
        let html = '';

        lessons.forEach((l, idx) => {
            if (query && !l.title.toLowerCase().includes(query) && !l.module.toLowerCase().includes(query)) {
                return;
            }

            if (l.module !== currentModule) {
                currentModule = l.module;
                html += `<div class="px-3 pt-4 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">${currentModule}</div>`;
            }

            const isDone = completedLessons.has(l.id);
            const isActive = idx === currentLesson;

            let itemClass = 'group flex items-center justify-between px-3 py-2 my-0.5 rounded-xl text-xs transition cursor-pointer ';
            if (isActive) {
                itemClass += 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 font-semibold border border-emerald-500/30';
            } else if (isDone) {
                itemClass += 'text-slate-300 hover:bg-white/5';
            } else {
                itemClass += 'text-slate-400 hover:bg-white/5 hover:text-slate-200';
            }

            html += `
                <div class="${itemClass}" onclick="loadLesson(${idx})">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-500'} shrink-0">
                            ${isDone ? '✓' : (idx + 1)}
                        </span>
                        <span class="truncate">${escapeHTML(l.title)}</span>
                    </div>
                    ${isDone ? '<i class="fas fa-check text-[10px] text-emerald-400 shrink-0"></i>' : ''}
                </div>
            `;
        });

        nav.innerHTML = html;
        updateProgress();
    }

    window.loadLesson = function(idx) {
        if (idx < 0 || idx >= lessons.length) return;
        currentLesson = idx;

        try { localStorage.setItem(RESUME_KEY, idx); } catch(e) {}

        const l = lessons[idx];
        const titleEl = document.getElementById('lesson-title');
        const breadcrumbEl = document.getElementById('breadcrumb');
        const contentEl = document.getElementById('lesson-content');
        const editor = document.getElementById('code-editor');
        const durEl = document.getElementById('lesson-duration');
        const lvlEl = document.getElementById('lesson-level');

        if (titleEl) titleEl.innerText = l.title;
        if (breadcrumbEl) breadcrumbEl.innerText = l.module;
        if (durEl) { durEl.innerText = l.duration; durEl.classList.remove('hidden'); }
        if (lvlEl) { lvlEl.innerText = l.level; lvlEl.classList.remove('hidden'); }

        if (contentEl && typeof marked !== 'undefined') {
            contentEl.innerHTML = marked.parse(l.content_md);
            contentEl.querySelectorAll('pre code').forEach(block => {
                if (typeof hljs !== 'undefined') hljs.highlightElement(block);
            });
        }

        if (editor) {
            editor.value = l.code;
        }

        const quizSec = document.getElementById('quiz-section');
        const quizContent = document.getElementById('quiz-content');
        const quizResult = document.getElementById('quiz-result');
        if (quizResult) quizResult.innerHTML = '';

        if (l.quiz && quizSec && quizContent) {
            quizSec.classList.remove('hidden');
            let qHtml = `<div class="text-sm font-semibold text-white mb-3">${escapeHTML(l.quiz.question)}</div>`;
            l.quiz.options.forEach((opt, oIdx) => {
                qHtml += `
                    <label class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer transition">
                        <input type="radio" name="quiz_option" value="${oIdx}" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                        <span class="text-xs sm:text-sm text-slate-300 leading-relaxed">${escapeHTML(opt)}</span>
                    </label>
                `;
            });
            quizContent.innerHTML = qHtml;
        } else if (quizSec) {
            quizSec.classList.add('hidden');
        }

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.disabled = idx === 0;
        if (nextBtn) nextBtn.disabled = idx === lessons.length - 1;

        updateCompleteButtons();
        renderNav();

        const scroller = document.getElementById('content-scroll');
        if (scroller) scroller.scrollTop = 0;

        if (window.closeSidebar && window.innerWidth < 1024) {
            window.closeSidebar();
        }
    }

    window.checkQuiz = function() {
        const l = lessons[currentLesson];
        const resEl = document.getElementById('quiz-result');
        if (!l || !l.quiz || !resEl) return;

        const selected = document.querySelector('input[name="quiz_option"]:checked');
        if (!selected) {
            resEl.innerHTML = '<div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">Pilih salah satu jawaban terlebih dahulu!</div>';
            return;
        }

        const ans = parseInt(selected.value, 10);
        if (ans === l.quiz.answer) {
            resEl.innerHTML = `
                <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm space-y-1">
                    <div class="font-bold flex items-center gap-2"><i class="fas fa-check-circle"></i> Jawaban Benar!</div>
                    <p class="text-slate-300 text-xs">${escapeHTML(l.quiz.explanation)}</p>
                </div>
            `;
            markComplete();
        } else {
            resEl.innerHTML = `
                <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm space-y-1">
                    <div class="font-bold flex items-center gap-2"><i class="fas fa-times-circle"></i> Jawaban Kurang Tepat</div>
                    <p class="text-slate-300 text-xs">Coba tinjau kembali materi di atas dan pilih jawaban yang paling sesuai.</p>
                </div>
            `;
        }
    };

    window.markComplete = function() {
        const l = lessons[currentLesson];
        if (!l) return;
        completedLessons.add(l.id);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedLessons)));
        } catch(e) {}
        updateCompleteButtons();
        renderNav();
    };

    function updateCompleteButtons() {
        const l = lessons[currentLesson];
        if (!l) return;
        const isDone = completedLessons.has(l.id);
        const btnComp = document.getElementById('complete-btn');
        const btnDone = document.getElementById('completed-btn');

        if (btnComp && btnDone) {
            if (isDone) {
                btnComp.style.display = 'none';
                btnDone.style.display = 'flex';
            } else {
                btnComp.style.display = 'flex';
                btnDone.style.display = 'none';
            }
        }
    }

    window.prevLesson = function() {
        if (currentLesson > 0) loadLesson(currentLesson - 1);
    };

    window.nextLesson = function() {
        if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1);
    };

    window.resetProgress = function() {
        if (confirm('Yakin ingin mereset seluruh progres pembelajaran SQL?')) {
            completedLessons.clear();
            try {
                localStorage.removeItem(STORAGE_KEY);
                localStorage.removeItem(RESUME_KEY);
            } catch(e) {}
            loadLesson(0);
        }
    };

    window.openCertificateModal = function() {
        const modal = document.getElementById('certificate-modal');
        const lockedView = document.getElementById('cert-locked-view');
        const unlockedView = document.getElementById('cert-unlocked-view');
        const unlockedFooter = document.getElementById('cert-unlocked-footer');

        if (!modal) return;
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const is100 = completedLessons.size === lessons.length;
        if (is100) {
            lockedView?.classList.add('hidden');
            unlockedView?.classList.remove('hidden');
            unlockedFooter?.classList.remove('hidden');
            drawCertificate();
        } else {
            lockedView?.classList.remove('hidden');
            unlockedView?.classList.add('hidden');
            unlockedFooter?.classList.add('hidden');

            const pct = Math.round((completedLessons.size / lessons.length) * 100);
            const lText = document.getElementById('cert-locked-progress-text');
            const lBar = document.getElementById('cert-locked-progress-bar');
            const lRem = document.getElementById('cert-locked-remaining-text');

            if (lText) lText.innerText = `${pct}%`;
            if (lBar) lBar.style.width = `${pct}%`;
            if (lRem) lRem.innerText = `Selesaikan ${lessons.length - completedLessons.size} pelajaran lagi untuk mengklaim sertifikat.`;
        }
    };

    window.closeCertificateModal = function() {
        const modal = document.getElementById('certificate-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    window.drawCertificate = function() {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const nameInput = document.getElementById('cert-name-input');
        const name = (nameInput?.value || 'Software Engineer').trim();

        const w = canvas.width;
        const h = canvas.height;

        const bgGrad = ctx.createLinearGradient(0, 0, w, h);
        bgGrad.addColorStop(0, '#064e3b');
        bgGrad.addColorStop(0.5, '#0f172a');
        bgGrad.addColorStop(1, '#022c22');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 6;
        ctx.strokeRect(30, 30, w - 60, h - 60);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(40, 40, w - 80, h - 80);

        ctx.fillStyle = '#6ee7b7';
        ctx.font = 'bold 20px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('SERTIFIKAT KELULUSAN RESMI', w / 2, 110);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 36px Inter, sans-serif';
        ctx.fillText('SQL & RELATIONAL DATABASE MASTERY', w / 2, 160);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '15px Inter, sans-serif';
        ctx.fillText('Diberikan dengan bangga kepada:', w / 2, 230);

        ctx.fillStyle = '#34d399';
        ctx.font = 'bold 40px Inter, sans-serif';
        ctx.fillText(name, w / 2, 290);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '15px Inter, sans-serif';
        ctx.fillText('Telah berhasil menyelesaikan 100% kurikulum komprehensif SQL:', w / 2, 350);
        ctx.fillText('DDL, DML, Multi-Table JOINs, Subqueries, Recursive CTE, Window Functions,', w / 2, 380);
        ctx.fillText('B-Tree Indexing & Query Optimization dengan Engine SQLite WebAssembly.', w / 2, 408);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 16px Inter, sans-serif';
        const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        ctx.fillText(`Diterbitkan pada: ${today}`, w / 2, 480);

        ctx.fillStyle = '#64748b';
        ctx.font = '13px monospace';
        ctx.fillText('VERIFIED ID: SQL-WASM-' + Math.random().toString(36).substring(2, 9).toUpperCase(), w / 2, 530);

        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w / 2 - 100, 560);
        ctx.lineTo(w / 2 + 100, 560);
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText('personalbotai • Interactive Learning Path Fleet', w / 2, 585);
    };

    window.downloadCertificatePNG = function() {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = 'Sertifikat-SQL-Mastery.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    window.printCertificate = function() {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;
        const dataUrl = canvas.toDataURL('image/png');
        const w = window.open('', '_blank');
        w.document.write(`
            <html>
                <head><title>Cetak Sertifikat SQL</title></head>
                <body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#111;">
                    <img src="${dataUrl}" style="max-width:95vw;max-height:95vh;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.5);" />
                    <script>window.onload = () => { window.print(); };</script>
                </body>
            </html>
        `);
    };

    

// ======== Fix for missing renderNav, loadLesson, etc. ========

// Global state


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
        localStorage.setItem('sql_progress', JSON.stringify(progress));
    } catch (e) {}
    updateProgress();
    updateCompleteButtons();
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
    try { localStorage.setItem('sql_last_lesson', String(index)); } catch (e) {}
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
        let md = '';
        const mdCandidate = (typeof LESSON_FILES !== 'undefined' && LESSON_FILES[index]) ? LESSON_FILES[index] : (lesson.mdFile || ('lessons/' + (lesson.slug || '') + '.md'));
        try {
            const res = await fetch(mdCandidate);
            if (res.ok) md = await res.text();
        } catch (err) {}
        
        if (!md && lesson.mdFile) {
            try {
                const res = await fetch(lesson.mdFile);
                if (res.ok) md = await res.text();
            } catch (err) {}
        }
        
        if (!md && lesson.slug) {
            try {
                const res = await fetch('lessons/' + lesson.slug + '.md');
                if (res.ok) md = await res.text();
            } catch (err) {}
        }
        
        const rawContent = lesson.content || lesson.content_md || lesson.description || '';
        if (!md && rawContent) {
            md = rawContent;
        }
        
        if (md) {
            if (typeof marked !== 'undefined') {
                marked.setOptions({gfm: true, breaks: true});
                html = marked.parse(md);
            } else {
                html = '<pre>' + escapeHtml(md) + '</pre>';
            }
        } else {
            html = '<h2>' + escapeHtml(lesson.title) + '</h2><p>Materi sedang diperbarui. Silakan gunakan editor di bawah.</p>';
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
    const saved = localStorage.getItem('sql_progress');
    if (saved) progress = JSON.parse(saved);
} catch (e) {
    progress = {};
}

document.addEventListener('DOMContentLoaded', () => {
        initSQL();
        let resumeIdx = 0;
        try {
            const saved = localStorage.getItem(RESUME_KEY);
            if (saved !== null) resumeIdx = parseInt(saved, 10) || 0;
        } catch(e) {}
        loadLesson(resumeIdx);
    });
})();
