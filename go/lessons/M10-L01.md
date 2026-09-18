# Package dan Import System

**ID**: `package-dan-import`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Go dikonstruksi secara *modular* menggunakan **Package**. Setiap file `.go` di baris pertamanya wajib mendeklarasikan bahwa ia termasuk ke dalam *package* apa (contoh: `package main`, `package models`).

Aturan penting dari sistem Package di Go adalah **Visibility (Hak Akses/Export):**
Di bahasa lain kita memiliki kata kunci `public`, `private`, atau `protected`. Go menghapusnya.
Sistem akses di Go ditentukan sepenuhnya oleh **Huruf Kapital**:
- Jika nama fungsi, struct, atau variabel diawali dengan **Huruf Besar** (contoh: `Config`), maka ia bersifat **Public (Exported)** dan bisa dipanggil oleh *package* lain.
- Jika diawali dengan **huruf kecil** (contoh: `dbConn`), maka ia **Private (Unexported)**, tersembunyi dan hanya bisa diakses dari dalam folder *package* yang sama.

Khusus untuk nama `package main`:
Itu adalah *package* khusus yang akan dikompilasi oleh sistem menjadi file biner yang dapat dijalankan (executable file).

### Contoh Kode
Misalkan Anda memiliki susunan folder seperti ini:
```
proyek-saya/
  ├── main.go
  └── utils/
      └── hitung.go
```

**Di `utils/hitung.go`:**
```go
package utils

// Public (Bisa diimpor) karena huruf awalan besar
func Tambah(a, b int) int {
	return a + b
}

// Private (Hanya bisa digunakan di dalam folder utils)
func kurangi(a, b int) int {
	return a - b
}
```

**Di `main.go`:**
```go
package main

import (
	"fmt"
	"proyek-saya/utils" // Mengimpor package utils
)

func main() {
	// Sukses karena Tambah diawali huruf kapital
	hasil := utils.Tambah(5, 5)
	fmt.Println(hasil)
	
	// utils.kurangi(5, 5) -> AKAN ERROR! Unexported name.
}
```

### Praktik
Ketik program yang menggunakan paket standar Go seperti `fmt`, `strings`, dan `math`. Perhatikan bahwa semua fungsi di paket standar (`Println`, `ToUpper`, `Max`) diawali dengan huruf besar agar bisa Anda akses!

## Rangkuman
- Gunakan `import` untuk memasukkan kode modular.
- Penamaan huruf pertama (Kapital = Public, Kecil = Private) mengatur ekspor modul. Singkat, ketat, dan taktis.
