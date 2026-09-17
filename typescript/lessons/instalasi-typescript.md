# Instalasi TypeScript

TypeScript adalah tools yang berjalan di **Node.js environment**. Untuk mulai menggunakan TypeScript, kita perlu menginstall TypeScript compiler (`tsc`) melalui package manager. Panduan ini akan membimbing Anda melalui berbagai cara instalasi TypeScript di sistem Anda.

⏱️ 10 menit
📊 Kesulitan: Pemula
📝 prerequisites: Node.js (v14+) terinstall

##
Tujuan Pembelajaran

-
Memahami prasyarat instalasi TypeScript (Node.js & npm)

-
Menginstall TypeScript secara global menggunakan npm

-
Menginstall TypeScript per-project menggunakan npm/yarn

-
Memverifikasi instalasi dengan cara yang benar

-
Memahami perbedaan instalasi global vs local

## Prasyarat: Node.js dan npm

TypeScript compiler (`tsc`) adalah package Node.js. Oleh karena itu, Anda harus memiliki Node.js dan npm (Node Package Manager) terinstall di sistem Anda.

### Cek Instalasi Node.js dan npm

Buka terminal atau command prompt, lalu jalankan perintah berikut untuk memverifikasi Node.js dan npm sudah terinstall:

```
# Cek versi Node.js
node --version

# Cek versi npm
npm --version
```

Anda devrait melihat output seperti:

```
v18.17.0
9.6.7
```

#### ⚠️ Catatan Penting

TypeScript membutuhkan Node.js versi 14 atau lebih baru. Jika Anda belum memiliki Node.js, download dari nodejs.org (disarankan LTS version).

## Metode Instalasi TypeScript

### 1. Instalasi Global (Recommended untuk Pemula)

Instalasi global membuat `tsc` tersedia di seluruh sistem, allowing Anda menjalankan TypeScript compiler dari mana saja.

```
# Install TypeScript secara global menggunakan npm
npm install -g typescript

# Verifikasi instalasi
tsc --version
```

Jika berhasil, Anda akan melihat output seperti:

```
Version 5.2.2
```

### 2. Instalasi Per-Project (Recommended untuk Production)

Instalasi per-project memastikan setiap project menggunakan versi TypeScript yang spesifik, menghindari conflict antar-projects.

```
# Navigate ke direktori project Anda
cd my-typescript-project

# Inisialisasi package.json (jika belum ada)
npm init -y

# Install TypeScript sebagai devDependency
npm install --save-dev typescript
```

TypeScript akan terinstall di `node_modules/.bin/tsc`. Anda bisa menjalankannya via:

```
# Cara 1: langsung via npx
npx tsc --version

# Cara 2: via npm script (ditambahkan di package.json)
"scripts": { "build": "tsc" }
npm run build
```

### 3. Menggunakan Yarn

Jika Anda prefer Yarn sebagai package manager:

```
# Global installation dengan Yarn
yarn global add typescript

# Per-project installation
yarn add --dev typescript
```

## Instalasi Berdasarkan Platform

### macOS

Di macOS, Anda bisa menggunakan Homebrew untuk instalasi global:

```
# Install TypeScript via Homebrew
brew install typescript

# Verifikasi
tsc --version
```

### Linux (Debian/Ubuntu)

Meskipun TypeScript biasanya diinstall via npm, Anda juga bisa menggunakan apt dengan NodeSource repository:

```
# Setup NodeSource repository (if Node.js not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Kemudian install TypeScript via npm
sudo npm install -g typescript
```

## Verifikasi Instalasi

Setelah instalasi, penting untuk memverifikasi bahwa `tsc` berhasil terinstall dan dapat diakses:

### Cek Versi TypeScript

```
tsc --version
```

### Lihat Daftar Perintah Tersedia

```
tsc --help
```

Jika Anda mendapatkan error seperti `"command not found: tsc"`, kemungkinan:

- Node.js/npm tidak terinstall dengan benar

- Global npm bin directory tidak ada di PATH environment variable

- Instalasi TypeScript gagal (periksa koneksi internet atau permission)

##
💻
Latihan Praktik

### Latihan 1: Instalasi TypeScript Global

Lakukan instalasi TypeScript secara global di sistem Anda. Verifikasi dengan mengecek versi.

Expected output: "Version 5.x.x"

### Latihan 2: Instalasi Per-Project

Buat direktori baru `ts-practice`, inisialisasi npm project, dan install TypeScript sebagai devDependency. Jalankan `npx tsc --version` untuk memverifikasi.

### Latihan 3: PATH Troubleshooting

Jika `tsc` tidak ditemukan setelah instalasi global, cek npm global bin directory:

```
npm config get prefix
# Typically: /usr/local (macOS/Linux) atau %APPDATA%\npm (Windows)
# Pastikan directory tersebut ada di PATH environment variable
```

##
📝
Quiz - Instalasi TypeScript

Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang instalasi TypeScript.

Loading quiz questions...

← Sebelumnya

Lesson 3 of 6

Selanjutnya: TypeScript vs JavaScript →
