# Instalasi dan Setup Lingkungan Go

Meskipun Anda bisa mempelajari dan menjalankan Go langsung melalui editor di website ini, untuk membangun proyek dunia nyata, Anda perlu menginstal Go di komputer Anda sendiri.

## 1. Instalasi Go

Go mendukung berbagai sistem operasi. Berikut cara instalasinya:

**Untuk Windows & macOS:**
Cara termudah adalah mengunduh *installer* resmi dari situs [go.dev/dl/](https://go.dev/dl/) dan ikuti panduan instalasi Next-Next-Finish.

**Untuk Linux (Debian/Ubuntu):**
Anda bisa menggunakan *package manager* atau mengunduh *tarball*-nya:
```bash
# Menghapus instalasi lama dan ekstrak yang baru
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.xx.x.linux-amd64.tar.gz

# Tambahkan Go ke PATH (bisa ditaruh di ~/.bashrc atau ~/.zshrc)
export PATH=$PATH:/usr/local/go/bin
```

## 2. Verifikasi Instalasi

Buka terminal atau Command Prompt dan ketikkan perintah berikut untuk memastikan Go terinstal dengan benar:

```bash
go version
```
*Output yang diharapkan: `go version go1.22.0 linux/amd64` (versi akan bervariasi).*

## 3. Struktur Direktori Go (Go Modules)

Sebelum Go versi 1.11, developer harus menaruh semua kode di dalam direktori `GOPATH`. Namun sekarang, di standar industri modern, kita menggunakan **Go Modules**. Anda bisa membuat proyek Go di folder mana saja.

Langkah membuat proyek baru:
1. Buat folder baru: `mkdir proyek-pertama && cd proyek-pertama`
2. Inisialisasi module: `go mod init github.com/username/proyek-pertama`
*(Perintah ini akan membuat file `go.mod` yang berfungsi untuk melacak *dependencies* seperti package.json di Node.js).*

## 4. Text Editor / IDE

Untuk menulis Go secara profesional, dua *editor* ini menjadi standar industri:
1. **VS Code (Visual Studio Code):** Gratis, ringan. Sangat disarankan untuk menginstal ekstensi resmi **"Go" (oleh Go Team at Google)**.
2. **GoLand (oleh JetBrains):** Berbayar, tapi sangat kuat (IDE *full-featured* khusus untuk Go).

---

## Editor Online Interaktif

Di modul pembelajaran ini, kami menyediakan *editor online* dengan lingkungan eksekusi Go (*WebAssembly* atau *Remote Execution*). 

Lihat kode di bawah, ini adalah contoh memeriksa versi Go dan lingkungan sistem menggunakan *standard library* Go `runtime`.
