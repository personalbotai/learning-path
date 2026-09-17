# Tools dan Editor dalam Ekosistem Go

**ID**: `tools-dan-editor`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Go dirancang untuk menjadi bahasa yang sangat produktif. Produktivitas ini sangat didukung oleh ekosistem perkakas (tools) bawaan yang luar biasa kuat dan *standardized*. Anda tidak perlu berdebat tentang *linter*, *formatter*, atau *test runner* karena Go sudah menyediakannya langsung (out-of-the-box) melalui command `go`.

Beberapa *tools* esensial yang wajib dikuasai:
1. **`go fmt`**: Memformat kode Go agar sesuai dengan standar konvensi gaya penulisan Go secara otomatis. Mengakhiri perdebatan "tabs vs spaces".
2. **`go vet`**: Linter statis bawaan untuk mendeteksi *bug* atau kode mencurigakan yang mungkin terlewat oleh kompiler (misalnya: format Printf yang salah).
3. **`go build` & `go run`**: Mengkompilasi kode menjadi binari (*build*) atau langsung mengeksekusi file Go tanpa output binari permanen (*run*).
4. **`go test`**: *Test runner* bawaan yang ringan dan cepat.

Untuk **Editor/IDE**, standar industri saat ini adalah:
- **VS Code** (dengan ekstensi `golang.go`) - Pilihan terpopuler, ringan, dan integrasinya dengan `gopls` (Go language server) sangat baik.
- **GoLand** (dari JetBrains) - IDE berbayar yang sangat *powerful* dengan fitur *refactoring* dan navigasi tingkat lanjut, biasa digunakan di *enterprise level*.

### Contoh Kode (Penggunaan Tools)

*File ini menunjukkan kode yang sengaja belum diformat dengan baik.*
```go
package main

import "fmt"

func main() {
// Kode ini belum rapi
nama:="Gopher"
fmt.Printf("Halo %s, mari belajar tools Go!
",nama)
}
```

**Di Terminal:**
```bash
# 1. Rapikan kode
go fmt main.go

# 2. Cek potensi bug
go vet main.go

# 3. Jalankan
go run main.go
```

### Praktik
1. Buat sebuah file bernama `main.go`.
2. Tulis kode dengan indentasi yang berantakan dengan sengaja.
3. Buka terminal Anda, jalankan perintah `go fmt main.go` dan perhatikan bagaimana file Anda otomatis dirapikan.

## Rangkuman
- Ekosistem Go mengedepankan keseragaman (*uniformity*) melalui *tools* bawaan.
- `go fmt` dan `go vet` adalah perintah wajib sebelum melakukan *commit* kode ke repositori.
- VS Code (dengan ekstensi Go) dan GoLand adalah pilihan utama untuk menulis Go secara profesional.
- Referensi: [Command go - go.dev](https://pkg.go.dev/cmd/go)
