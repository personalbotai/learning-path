# Percabangan If-Else dan Short Statement di Go

**ID**: `if-else`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Percabangan logika kondisional di Go menggunakan **`if`**, **`else if`**, dan **`else`**. 

Keunikan dan keunggulan sintaks If di Go:
1. **Tanpa Tanda Kurung**: Kondisi tidak membutuhkan tanda kurung `()` seperti bahasa C/Java, namun kurung kurawal `{}` wajib digunakan.
2. **If with a Short Statement**: Go mengizinkan deklarasi dan inisialisasi variabel lokal sebelum evaluasi kondisi (contoh: `if val, err := ambilData(); err != nil`). Variabel tersebut hanya hidup di dalam cakupan (*scope*) blok `if-else` tersebut.

### Contoh Kode
```go
package main

import "fmt"

func hitungGrade(nilai int) string {
    if nilai >= 90 {
        return "A — Luar Biasa"
    } else if nilai >= 75 {
        return "B — Lulus"
    } else {
        return "C — Remidi"
    }
}

func main() {
    nilaiUjian := 85
    hasil := hitungGrade(nilaiUjian)
    fmt.Printf("Nilai: %d -> %s\n", nilaiUjian, hasil)

    // Contoh If dengan Short Statement (Local Scope Initialization)
    if batas := 100; nilaiUjian < batas {
        fmt.Printf("Nilai berada di bawah batas maksimal %d\n", batas)
    }
}
```

### Praktik & Clean Code
- Terapkan pola **"Happy Path to the Left"**: selesaikan kondisi error atau kegagalan lebih awal (*early return*) agar kode utama tidak bertingkat-tingkat ke dalam (*nested*).

## Rangkuman
- `if` di Go tidak memerlukan tanda kurung `()`.
- Short statement `if init; condition {}` sangat berguna untuk isolasi scope variabel hasil fungsi.
- Referensi: [A Tour of Go: If Statements](https://go.dev/tour/flowcontrol/5)
