# Variadic Functions: Fungsi Berparameter Fleksibel

**ID**: `variadic-fungsi`
**Duration**: 15-20 menit

## Materi

### Penjelasan
**Variadic function** adalah fungsi yang dapat menerima nol atau lebih argumen dari tipe data yang sama. Di dalam tubuh fungsi, parameter variadik diperlakukan sebagai sebuah **Slice (`[]T`)**.

Sintaks penandaan variadik di Go adalah dengan menyematkan tiga titik (`...`) sebelum tipe data parameter, misalnya `nums ...int`.

### Contoh Kode
```go
package main

import "fmt"

// Fungsi yang menjumlahkan sejumlah angka tak terhingga
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// Fungsi dengan parameter wajib dan parameter variadik tambahan
func logActivity(level string, messages ...string) {
    fmt.Printf("[%s] ", level)
    for _, msg := range messages {
        fmt.Printf("%s ", msg)
    }
    fmt.Println()
}

func main() {
    // Pemanggilan dengan variasi jumlah argumen
    fmt.Println("Sum 0 argumen :", sum())
    fmt.Println("Sum 2 argumen :", sum(10, 20))
    fmt.Println("Sum 4 argumen :", sum(1, 2, 3, 4))

    // Membentangkan (unpacking/spreading) slice yang sudah ada dengan ...
    daftarAngka := []int{5, 15, 25}
    fmt.Println("Sum dari slice:", sum(daftarAngka...))

    logActivity("INFO", "Server", "mulai", "di port 8080")
}
```

### Praktik & Best Practice
- Parameter variadik harus selalu berada di **posisi terakhir** pada daftar parameter fungsi.
- Fungsi standar seperti `fmt.Println` dan `append` adalah contoh variadic function paling sering digunakan.

## Rangkuman
- Tanda `...T` memungkinkan fungsi menerima jumlah argumen dinamis sebagai slice.
- Gunakan `slice...` untuk mengoper slice ke fungsi variadik.
- Referensi: [A Tour of Go: Variadic functions](https://go.dev/doc/effective_go)
