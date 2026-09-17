# Hello World: Anatomi Program Pertama Go

**ID**: `hello-world`
**Duration**: 10-15 menit

## Materi

### Penjelasan
Setiap program aplikasi mandiri (executable) di Go dimulai dari package utama yang bernama **`package main`** dengan fungsi titik masuk **`func main()`**.

Anatomi struktur dasar program Go:
1. **`package main`**: Mendeklarasikan bahwa berkas ini adalah program mandiri yang akan dikompilasi menjadi binary executable, bukan library pendukung.
2. **`import "fmt"`**: Mengimpor package standar formatting untuk operasi output teks ke layar konsol (*stdout*).
3. **`func main()`**: Fungsi utama yang dieksekusi pertama kali saat program dijalankan oleh sistem operasi.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    // Mencetak teks ke konsol dengan baris baru
    fmt.Println("Hello, Go!")
    fmt.Println("Selamat datang di dunia pemrograman Go modern!")
}
```

### Praktik & Perintah CLI
Jalankan perintah berikut di terminal komputer Anda:
- `go run main.go`: Mengompilasi kode ke memori sementara dan langsung menjalankannya.
- `go build -o app main.go`: Menghasilkan binary mandiri tanpa ketergantungan runtime eksternal.

## Rangkuman
- Program executable Go wajib memiliki `package main` dan fungsi `main()`.
- Package standar `fmt` digunakan untuk formatting dan cetak output.
- Referensi: [A Tour of Go: Hello World](https://go.dev/tour/welcome/1)
