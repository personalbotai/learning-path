# Variabel dan Konstanta: Deklarasi dan Mutabilitas

**ID**: `variabel-dan-konstanta`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Go menyediakan cara deklarasi variabel yang ekspresif sekaligus aman:

1. **Deklarasi Standar (`var`)**: Digunakan di tingkat package (luar fungsi) atau jika membutuhkan zero value yang terdefinisi jelas.
2. **Short Declaration (`:=`)**: Sintaks cepat untuk deklarasi sekaligus inisialisasi variabel di dalam fungsi (*type inference otomatis*).
3. **Konstanta (`const`)**: Nilai yang tidak dapat diubah sepanjang program berjalan. Dihitung pada waktu kompilasi dan dapat berupa angka, string, atau boolean.

### Contoh Kode
```go
package main

import "fmt"

// Konstanta global
const (
    Pi       = 3.14159
    AppName  = "Go-LP"
    MaxRetry = 3
)

func main() {
    // 1. Variabel konstan & kalkulasi
    var radius = 7.0
    luas := Pi * radius * radius
    fmt.Printf("Luas lingkaran (r=%.0f): %.2f\n", radius, luas)

    // 2. Mengubah nilai variabel biasa
    radius = 10.0
    fmt.Printf("Radius baru: %.0f, Luas baru: %.2f\n", radius, Pi*radius*radius)

    // 3. Deklarasi multi-variabel sekaligus
    x, y, label := 10, 20, "Titik Koordinat"
    fmt.Println(label, "->", x, y)
}
```

### Praktik & Aturan Kompiler
- **Unused Variables**: Di Go, mendeklarasikan variabel lokal di dalam fungsi tanpa pernah menggunakannya adalah **error kompilasi**. Ini memastikan kode tetap bersih dan bebas *dead code*.

## Rangkuman
- Gunakan `const` untuk nilai statis yang tidak pernah berubah.
- Gunakan short declaration `:=` di dalam fungsi untuk efisiensi penulisan.
- Referensi: [Go Language Specification: Variables](https://go.dev/ref/spec#Variable_declarations)
