# File I/O: Operasi Baca & Tulis File Modern di Go

**ID**: `file-io`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go menyediakan package `os` dan `io` standar yang sangat efisien untuk interaksi dengan sistem berkas (file system).

Pendekatan umum File I/O di Go modern (Go 1.16+):
1. **`os.WriteFile` & `os.ReadFile`**: Cocok untuk file berukuran kecil/menengah secara instan dalam satu baris kode.
2. **`os.Open` / `os.Create` + `bufio.Scanner`**: Digunakan untuk streaming file berukuran besar baris demi baris tanpa menghabiskan RAM.

### Contoh Kode
```go
package main

import (
    "fmt"
    "os"
)

func main() {
    path := "/tmp/demo.txt"
    pesan := "halo go: operasi file I/O berhasil!"

    // 1. Menulis data ke file dengan permission 0644
    err := os.WriteFile(path, []byte(pesan), 0644)
    if err != nil {
        fmt.Println("Gagal menulis file:", err)
        return
    }
    fmt.Println("Berhasil membuat file di", path)

    // 2. Membaca kembali isi file
    data, err := os.ReadFile(path)
    if err != nil {
        fmt.Println("Gagal membaca file:", err)
        return
    }
    fmt.Println("Isi File:", string(data))
}
```

### Praktik & Safety
- Selalu periksa error setiap kali membuka atau menulis berkas.
- Gunakan `defer file.Close()` saat membuka file melalui `os.Open()` agar file descriptor tidak bocor (*descriptor leak*).

## Rangkuman
- Operasi file instan di Go sangat mudah menggunakan `os.ReadFile` dan `os.WriteFile`.
- Untuk file besar atau streaming, gunakan `bufio` dan `io.Reader`.
- Referensi: [Go os Package Documentation](https://pkg.go.dev/os)
