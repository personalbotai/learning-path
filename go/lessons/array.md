# Array di Go: Karakteristik dan Penggunaan

**ID**: `array`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Array di Go adalah kumpulan elemen bertipe data sama dengan **panjang tetap (fixed-length)** yang ditentukan pada saat deklarasi. 

Karakteristik penting array di Go:
1. **Ukuran adalah bagian dari tipe**: `[3]int` dan `[5]int` adalah tipe data yang sama sekali berbeda dan tidak bisa saling ditugaskan.
2. **Value Type**: Ketika sebuah array di-assign ke variabel baru atau dioper ke fungsi, Go melakukan **salinan penuh (copy by value)**, bukan referensi pointer.
3. **Zero Value**: Jika tidak diinisialisasi, seluruh elemen array akan bernilai default (*zero value*) dari tipe tersebut (misal `0` untuk int, `""` untuk string).

### Contoh Kode
```go
package main

import "fmt"

func main() {
    // Deklarasi eksplisit dengan inisialisasi
    var a [3]int = [3]int{1, 2, 3}
    fmt.Println("Array a:", a, "Panjang:", len(a))

    // Inisialisasi dengan penghitungan otomatis oleh compiler (...)
    names := [...]string{"Go", "Rust", "TypeScript"}
    fmt.Println("Bahasa:", names, "Jumlah:", len(names))

    // Iterasi array menggunakan for range
    for idx, val := range names {
        fmt.Printf("Index %d -> %s\n", idx, val)
    }
}
```

### Praktik
- Di Go modern, Slice (`[]T`) lebih sering digunakan daripada Array mentah karena fleksibilitas ukuran. Namun memahami Array penting karena Slice dibangun di atas backing array.

## Rangkuman
- Array memiliki ukuran statis tetap yang dihitung saat kompilasi.
- Operasi passing array menduplikasi memori; gunakan pointer atau slice jika ingin efisiensi memori.
- Referensi: [Effective Go: Arrays](https://go.dev/doc/effective_go#arrays)
