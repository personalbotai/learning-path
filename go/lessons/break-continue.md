# Kontrol Perulangan: Break dan Continue di Go

**ID**: `break-continue`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Saat menjalankan perulangan dengan `for`, kita sering kali perlu menghentikan iterasi lebih awal atau melewati langkah tertentu:

1. **`break`**: Menghentikan seluruh jalannya loop seketika dan keluar dari blok perulangan terdekat.
2. **`continue`**: Melewati sisa kode pada iterasi saat ini dan langsung melompat ke evaluasi kondisi/post-statement iterasi berikutnya.
3. **Labeled Break/Continue**: Go mendukung label untuk keluar (*break*) dari *nested loop* (loop bersarang) secara langsung ke tingkat luar tanpa perlu bendera (*flag boolean*) manual.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    fmt.Println("=== Contoh Continue & Break Sederhana ===")
    for i := 1; i <= 10; i++ {
        if i%2 == 0 {
            continue // Lewati angka genap
        }
        if i > 7 {
            break // Berhenti jika i sudah melebihi 7
        }
        fmt.Printf("%d ", i)
    }
    fmt.Println()

    fmt.Println("=== Contoh Labeled Break (Outer Loop) ===")
OuterLoop:
    for row := 1; row <= 3; row++ {
        for col := 1; col <= 3; col++ {
            if row == 2 && col == 2 {
                fmt.Printf("Break di row=%d, col=%d\n", row, col)
                break OuterLoop // Keluar dari kedua loop sekaligus
            }
            fmt.Printf("[%d,%d] ", row, col)
        }
        fmt.Println()
    }
}
```

### Praktik & Best Practice
- Gunakan `continue` untuk mengurangi kedalaman indentasi if-else (*guard clause pattern*).
- Gunakan label secara bijak saat memproses matriks atau parsing token agar kode tetap mudah dibaca.

## Rangkuman
- `break` mengakhiri loop, sedangkan `continue` melompat ke putaran berikutnya.
- Go tidak memiliki loop `while` atau `do-while`; semua kontrol loop menggunakan `for` bersama `break` dan `continue`.
- Referensi resmi: [Go Spec - Break & Continue](https://go.dev/ref/spec#Break_statements)
