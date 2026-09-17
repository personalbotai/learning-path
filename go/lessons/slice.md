# Slice: Dynamic Array Idiomatik di Go

**ID**: `slice`
**Duration**: 20-30 menit

## Materi

### Penjelasan
**Slice** adalah abstraksi fleksibel dan dinamis di atas array. Hampir semua manipulasi koleksi sekuensial di Go menggunakan slice.

Struktur internal Slice terdiri dari 3 komponen (24 bytes pada arsitektur 64-bit):
1. **Pointer**: Alamat memori ke elemen pertama di *backing array*.
2. **Length (`len`)**: Jumlah elemen yang saat ini ada di dalam slice.
3. **Capacity (`cap`)**: Jumlah maksimum elemen yang dapat ditampung backing array mulai dari indeks pointer slice.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    // Membuat slice dengan literal
    s := []int{1, 2}
    fmt.Printf("Awal: %v (len=%d, cap=%d)\n", s, len(s), cap(s))

    // Menambah elemen dengan built-in append
    s = append(s, 3, 4)
    fmt.Printf("Setelah append: %v (len=%d, cap=%d)\n", s, len(s), cap(s))

    // Mengiris slice [start:end]
    sub := s[1:3] // Mengambil index 1 sampai 2 (exclusive end)
    fmt.Printf("Sub-slice [1:3]: %v (len=%d, cap=%d)\n", sub, len(sub), cap(sub))

    // Alokasi memori efisien dengan make([]T, len, cap)
    buffer := make([]string, 0, 10)
    buffer = append(buffer, "Alpha", "Beta")
    fmt.Printf("Buffer: %v (len=%d, cap=%d)\n", buffer, len(buffer), cap(buffer))
}
```

### Praktik & Tips Performa
- Ketika kapasitas habis, fungsi `append` akan mengalokasikan backing array baru berukuran dua kali lipat dan menyalin isinya.
- Jika Anda sudah mengetahui perkiraan jumlah data, selalu gunakan `make([]T, 0, expectedCap)` untuk menghindari alokasi ulang berulang (*zero-allocation*).

## Rangkuman
- Slice bersifat dinamis dan bertindak sebagai *view window* ke backing array.
- Gunakan `len()` untuk panjang, `cap()` untuk kapasitas, dan `append()` untuk menambahkan elemen.
- Referensi: [Go Slices: usage and internals](https://go.dev/blog/slices-intro)
