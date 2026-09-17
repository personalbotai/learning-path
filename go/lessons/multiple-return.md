# Multiple Return Values: Fungsi Multi-Hasil di Go

**ID**: `multiple-return`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Tidak seperti banyak bahasa yang hanya mengizinkan satu nilai balik atau mewajibkan wrapper objek/tuple, Go mendukung **Multiple Return Values** secara *first-class*.

Fitur ini menjadi fondasi utama penanganan kesalahan (*error handling*) idiomatik di Go: fungsi biasanya mengembalikan sepasang nilai `(result, error)`.

### Contoh Kode
```go
package main

import (
    "fmt"
)

// Fungsi pembagian dengan pengembalian nilai hasil dan error
func bagi(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("pembagi tidak boleh nol")
    }
    return a / b, nil
}

// Named Return Values: nama variabel return ditentukan di signature fungsi
func minMax(nums []int) (min int, max int) {
    if len(nums) == 0 {
        return 0, 0
    }
    min, max = nums[0], nums[0]
    for _, v := range nums {
        if v < min {
            min = v
        }
        if v > max {
            max = v
        }
    }
    return // Naked return
}

func main() {
    // 1. Eksekusi sukses
    if hasil, err := bagi(10, 2); err == nil {
        fmt.Printf("Hasil 10 / 2 = %.2f\n", hasil)
    }

    // 2. Eksekusi gagal
    if _, err := bagi(10, 0); err != nil {
        fmt.Println("Error ditangkap:", err)
    }

    // 3. MinMax multi-return
    angka := []int{12, 5, 89, 3, 44}
    terkecil, terbesar := minMax(angka)
    fmt.Printf("Min: %d, Max: %d\n", terkecil, terbesar)
}
```

### Praktik
- Selalu periksa nilai `err != nil` sebelum menggunakan nilai hasil kalkulasi.
- Gunakan *blank identifier* (`_`) jika ingin mengabaikan salah satu nilai balik.

## Rangkuman
- Fungsi di Go dapat mengembalikan dua atau lebih nilai sekaligus.
- Pola standar Go adalah `(data, error)`.
- Referensi: [Effective Go: Multiple Return Values](https://go.dev/doc/effective_go#multiple-returns)
