# Apa Itu Go?

Go (atau sering disebut Golang) adalah bahasa pemrograman *open-source* yang dikembangkan di Google oleh Robert Griesemer, Rob Pike, dan Ken Thompson pada tahun 2007 dan dirilis ke publik pada tahun 2009.

Go didesain dengan tujuan utama: **Kinerja tinggi seperti bahasa C/C++, tetapi dengan produktivitas dan sintaks yang lebih bersahabat layaknya Python atau JavaScript.**

## Kenapa Harus Belajar Go?

Di industri modern (terutama *Cloud Engineering* dan *Microservices*), Go menjadi standar de-facto. Berikut alasannya:

1. **Performa Tinggi (Compiled Language):** Go langsung di-compile menjadi kode mesin (*binary*), sehingga eksekusinya sangat cepat tanpa memerlukan *Virtual Machine* atau *Interpreter* saat *runtime*.
2. **Concurrency Pertama (Goroutines):** Go lahir di era prosesor *multi-core*. Menjalankan ribuan proses secara paralel sangat ringan dan mudah menggunakan *Goroutine* dan *Channel*.
3. **Sederhana & Mudah Dibaca:** Filosofi Go adalah meminimalkan fitur yang tidak perlu. Tidak ada *class inheritance* yang kompleks. Sintaksnya dirancang agar mudah dibaca oleh developer lain.
4. **Library Standar yang Kuat:** Go hadir dengan *standard library* yang sangat lengkap, terutama untuk jaringan (HTTP), kriptografi, dan manipulasi data (JSON).
5. **Garbage Collection:** Meskipun cepat, Go menangani manajemen memori secara otomatis, menghindarkan Anda dari *memory leak* manual (seperti di C/C++).

## Siapa yang Menggunakan Go?
Perusahaan teknologi raksasa mengandalkan Go untuk infrastruktur backend mereka:
- **Google** (Kubernetes, Docker, Terraform banyak ditulis dengan Go)
- **Netflix** (Arsitektur Microservices)
- **Twitch** (Sistem streaming real-time)
- **Uber** (Geofence lookups)
- **Tokopedia & Gojek** di Indonesia (Backend services dengan load tinggi)

---

## Hello World di Go

Mari kita lihat struktur paling dasar dari program Go. Setiap aplikasi Go membutuhkan sebuah `package main` dan sebuah fungsi `main()` sebagai titik awal (*entry point*) eksekusi.

Coba jalankan kode di editor di bawah!
