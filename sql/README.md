# 🗄️ SQL & Relational Database Learning Path

> **Platform Pembelajaran Interaktif SQL Terstruktur Bahasa Indonesia** — Mulai dari fondasi DDL/DML, Foreign Keys, Multi-Table JOINs, Subqueries, Recursive CTE, Window Functions, B-Tree Indexing, hingga Analisis Performa Query dengan engine **SQLite WebAssembly (WASM)** asli langsung di browser Anda.

[![Live Demo](https://img.shields.io/badge/demo-online-emerald.svg)](https://personalbotai.github.io/sql-learning-path/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success.svg)](https://personalbotai.github.io/sql-learning-path/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-installable-blue.svg)](manifest.json)
[![SQLite WASM](https://img.shields.io/badge/Engine-SQLite%203.44+%20WASM-003B57.svg)](https://sqlite.org/)

---

## 🌟 Fitur Utama

- ⚡ **In-Browser SQLite WASM Execution**: Eksekusi query `SELECT`, `CREATE TABLE`, `INSERT`, `JOIN`, dan transaksi secara instan tanpa backend server (0 ms latency).
- 📊 **Visual Result-Set Table Renderer**: Format output tabel database yang rapi, informatif, dan responsif lengkap dengan metadata waktu eksekusi.
- 🎯 **20 Pelajaran Berbobot**: Disusun secara kurikuler dari konsep dasar hingga optimasi performa skala produksi.
- 🧠 **Deep Technical Quizzes**: 20 kuis pemahaman konsep arsitektur relasional dengan penjelasan (*explanation*) mendalam.
- 🎖️ **Sertifikat Kelulusan Gated 100%**: Generator sertifikat berbasis HTML5 Canvas resolusi tinggi yang hanya terbuka setelah menyelesaikan seluruh materi dan kuis.
- 📱 **PWA & Offline Ready**: Service Worker terintegrasi untuk akses cepat di perangkat desktop dan mobile.
- ⌨️ **Command Palette (⌘K / Ctrl+K)**: Navigasi instan antar pelajaran dan query.

---

## 📚 Kurikulum Pembelajaran (5 Modul • 20 Pelajaran)

| Modul | Pelajaran | Topik Utama |
| :--- | :--- | :--- |
| **Modul 1: Fondasi Relational DB & DDL** | 1. Pengantar RDBMS & SQL | RDBMS vs NoSQL, DDL/DML/DCL/TCL, SQLite WASM |
| | 2. CREATE TABLE, Data Types & Constraints | `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT` |
| | 3. ALTER TABLE & DROP TABLE | Skema evolusi, `ADD COLUMN`, `RENAME`, `DROP TABLE` |
| **Modul 2: Manipulasi Data (DML)** | 4. INSERT, Bulk INSERT & DEFAULT Values | Single & Bulk insert, integritas data |
| | 5. SELECT, WHERE, ORDER BY & LIMIT | Logical query processing, filtering & pagination |
| | 6. UPDATE & DELETE dengan Filter Aman | Manipulasi data aman, WHERE clauses |
| **Modul 3: Relasi & Multi-Table Queries** | 7. Relasi Tabel & Foreign Key Constraints | Referential integrity, `CASCADE`, `SET NULL`, `RESTRICT` |
| | 8. INNER JOIN, LEFT JOIN & CROSS JOIN | Multi-table joins, Venn diagram relasi |
| | 9. Aggregate Functions & GROUP BY | `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, Data Grouping |
| | 10. Filter Agregasi dengan HAVING | Perbedaan mendasar `WHERE` vs `HAVING` |
| **Modul 4: Query Lanjut, Subqueries & CTE** | 11. Subqueries & Operator IN / EXISTS | Scalar & Correlated subqueries, short-circuit eval |
| | 12. Common Table Expressions (CTE) & WITH | Modular query design, temporary result sets |
| | 13. Recursive CTE untuk Data Hierarki | Tree traversal, organizational charts, recursion |
| | 14. CASE WHEN Expressions & Conditional Logic | Percabangan logika kondisional dalam query |
| **Modul 5: Window Functions & Optimasi** | 15. Window Functions: OVER, ROW_NUMBER & RANK | `OVER (PARTITION BY ... ORDER BY ...)`, dense rank |
| | 16. Window Functions: LEAD, LAG & Running Totals | Month-over-month growth, akumulasi saldo |
| | 17. B-Tree Indexing & Query Performance | Full table scan vs B-Tree $O(\log N)$, composite index |
| | 18. Analisis Eksekusi Kueri (EXPLAIN QUERY PLAN) | Membaca cost optimizer, scan vs search |
| | 19. Transaksi Database, ACID & Rollback | `BEGIN`, `COMMIT`, `ROLLBACK`, prinsip ACID |
| | 20. Views, Triggers & Proyek Akhir | Database triggers, automated audit logs, views |

---

## 🌐 Ekosistem Seri Learning Path

Repositori ini adalah bagian dari armada **Interactive Learning Path Series**:

| Bahasa / Topik | Repositori | Engine Interaktif | Live Demo |
| :--- | :--- | :--- | :--- |
| **🐍 Python** | [`python-learning-path`](https://github.com/personalbotai/python-learning-path) | Pyodide WASM Engine | [Kunjungi Demo](https://personalbotai.github.io/python-learning-path/) |
| **🟨 JavaScript** | [`javascript-learning-path`](https://github.com/personalbotai/javascript-learning-path) | In-Browser Sandbox | [Kunjungi Demo](https://personalbotai.github.io/javascript-learning-path/) |
| **🟦 TypeScript** | [`typescript-learning-path`](https://github.com/personalbotai/typescript-learning-path) | In-Browser TS Compiler | [Kunjungi Demo](https://personalbotai.github.io/typescript-learning-path/) |
| **🔷 Go** | [`go-learning-path`](https://github.com/personalbotai/go-learning-path) | Go Playground API | [Kunjungi Demo](https://personalbotai.github.io/go-learning-path/) |
| **☕ Java** | [`java-learning-path`](https://github.com/personalbotai/java-learning-path) | Judge0 CE JDK 17 | [Kunjungi Demo](https://personalbotai.github.io/java-learning-path/) |
| **🦀 Rust** | [`rust-learning-path`](https://github.com/personalbotai/rust-learning-path) | Rust Playground API | [Kunjungi Demo](https://personalbotai.github.io/rust-learning-path/) |
| **⚡ C++** | [`cpp-learning-path`](https://github.com/personalbotai/cpp-learning-path) | Wandbox GCC 13.2 (C++20) | [Kunjungi Demo](https://personalbotai.github.io/cpp-learning-path/) |
| **🗄️ SQL** | [`sql-learning-path`](https://github.com/personalbotai/sql-learning-path) | SQLite 3.44+ WASM | [Kunjungi Demo](https://personalbotai.github.io/sql-learning-path/) |

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat file [`LICENSE`](LICENSE) untuk informasi lebih lanjut.
