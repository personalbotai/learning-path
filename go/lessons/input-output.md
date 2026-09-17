# Input & Output (I/O) Dasar dengan Package fmt

**ID**: `input-output`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Package **`fmt`** (Format) adalah package pustaka standar Go yang mengimplementasikan I/O terformat analog dengan keluarga `printf` dan `scanf` di bahasa C.

Fungsi utama yang sering digunakan:
1. **`fmt.Println` / `fmt.Print`**: Mencetak teks standar dengan pemisah spasi dan baris baru.
2. **`fmt.Printf`**: Mencetak teks berdasarkan format verb khusus.
3. **`fmt.Sprintf`**: Menghasilkan string terformat tanpa mencetaknya ke konsol (berguna untuk merangkai string).

Format Verb Penting di Go:
- `%v`: Mencetak nilai dalam format default (*value*).
- `%+v`: Mencetak struct dengan nama-nama field-nya.
- `%T`: Mencetak tipe data dari variabel.
- `%s`, `%d`, `%f`: String, integer, dan floating-point.
- `%t`: Boolean (`true` / `false`).

### Contoh Kode
```go
package main

import "fmt"

func main() {
    name := "Gopher"
    age := 7
    rate := 98.75

    // Printf dengan berbagai format verb
    fmt.Printf("Halo %s, umur %d tahun\n", name, age)
    fmt.Printf("Skor kepuasan: %.1f%% (Tipe data: %T)\n", rate, rate)

    // Sprintf untuk membuat string baru
    pesan := fmt.Sprintf("User: %s | Status: Aktif", name)
    fmt.Println(pesan)
}
```

### Praktik
- Gunakan verb `%#v` ketika ingin mencetak representasi sintaks Go lengkap dari sebuah variabel untuk keperluan debugging.

## Rangkuman
- Package `fmt` adalah fondasi cetak dan format teks di Go.
- Kuasai format verbs `%v`, `%+v`, `%T`, dan `%s`/`%d`.
- Referensi: [Package fmt Documentation](https://pkg.go.dev/fmt)
