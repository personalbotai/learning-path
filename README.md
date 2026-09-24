# 🎓 Interactive Sovereign Learning Paths

> **Kurikulum pemrograman interaktif, modern, dan hands-on langsung di browser — tanpa instalasi lokal, didukung runtime WebAssembly & Sandbox engine.**

[![Live Catalog](https://img.shields.io/badge/🌐_Catalog-learning--path.syamsulbahri.dev-3b82f6?style=for-the-badge)](https://learning-path.syamsulbahri.dev/)
[![Hub Portal](https://img.shields.io/badge/🚀_Hub_Portal-hub.syamsulbahri.dev-10b981?style=for-the-badge)](https://hub.syamsulbahri.dev)
[![PWA Ready](https://img.shields.io/badge/📱_PWA-Installable-purple?style=for-the-badge)](https://learning-path.syamsulbahri.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🚀 Live Hub & Monorepo Catalog

- **Catalog Portal:** [https://learning-path.syamsulbahri.dev/](https://learning-path.syamsulbahri.dev/)
- **Infrastructure Hub:** [https://hub.syamsulbahri.dev](https://hub.syamsulbahri.dev)
- **GitHub Monorepo:** [https://github.com/personalbotai/learning-path](https://github.com/personalbotai/learning-path)

---

## ✨ Fitur & Keunggulan Platform

- 💻 **In-Browser Execution Engine:** Eksekusi kode secara real-time langsung di peramban menggunakan Pyodide WASM, SQLite WASM, TypeScript transpiler, dan compiler sandbox API (Wandbox/Judge0/Go Playground).
- 📚 **Kurikulum Terstruktur & Komprehensif:** Modul berurutan dari dasar sintaksis hingga topik lanjutan arsitektur produksi (OOP, Concurrency, Type Systems, Memory Safety).
- 🎯 **Kuis Teknis Interaktif:** Evaluasi pemahaman di setiap modul dengan kuis pilihan ganda yang dirancang mendalam disertai penjelasan konsep.
- 🎖️ **Canvas Certificate Generator:** Unduh sertifikat kelulusan resolusi tinggi (PNG/PDF) yang otomatis terbuka setelah menyelesaikan 100% materi.
- 📱 **Progressive Web App (PWA):** Akses offline berkat Service Worker caching dan dukungan install ke layar utama perangkat (Home Screen).
- 💾 **State Persistence & Auto-Resume:** Menyimpan kemajuan belajar, progres centang materi, dan skor kuis secara otomatis di `localStorage`.
- 🌓 **Desain Responsif & Dual Theme:** Dukungan penuh Dark Mode / Light Mode yang nyaman untuk membaca materi jangka panjang di desktop maupun ponsel.

---

## 🌐 Daftar Jalur Belajar (8 Bahasa & Teknologi)

| Track | Bahasa | Materi & Cakupan | Runtime Engine | Link Akses |
|---|---|---|---|---|
| 🐍 | **Python** | 55 Materi Lengkap | Pyodide WASM (Lazy-Loaded) | [Mulai Belajar Python](/python/) |
| ⚡ | **JavaScript** | 10 Modul Interaktif | In-Browser JS Sandbox | [Mulai Belajar JavaScript](/javascript/) |
| 📘 | **TypeScript** | 77 Type-Level Lessons | In-Browser TS Compiler & Transpiler | [Mulai Belajar TypeScript](/typescript/) |
| 🐹 | **Go (Golang)** | 53 Materi Idiomatik | Go Playground API & Sandbox | [Mulai Belajar Go](/go/) |
| ☕ | **Java** | 30 Materi Modern Java 21 | Judge0 CE JDK 17 Compiler | [Mulai Belajar Java](/java/) |
| 🦀 | **Rust** | 15 Materi Systems Programming | Rust Playground API & Sandbox | [Mulai Belajar Rust](/rust/) |
| 🚀 | **C++** | 20 Materi Modern C++20 | Wandbox GCC 13 C++20 Runner | [Mulai Belajar C++](/cpp/) |
| 🗄️ | **SQL** | 20 Materi Relational Database | SQLite 3.44+ WASM Engine | [Mulai Belajar SQL](/sql/) |

---

## 🛠️ Menjalankan Secara Lokal

Repositori ini berupa monorepo statis. Anda dapat menjalankannya langsung menggunakan web server lokal:

```bash
# Clone monorepo
git clone https://github.com/personalbotai/learning-path.git
cd learning-path

# Jalankan HTTP server lokal (misalnya dengan Python)
python3 -m http.server 8080
```

Buka `http://localhost:8080/` di browser untuk mengakses katalog utama, atau buka folder masing-masing bahasa (misal `http://localhost:8080/python/`).

---

## 📄 Lisensi

Didistribusikan di bawah lisensi [MIT License](LICENSE). Dikelola oleh [PersonalBot AI](https://github.com/personalbotai).
