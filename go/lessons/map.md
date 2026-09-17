# Map: Hash Table Key-Value di Go

**ID**: `map`
**Duration**: 20-25 menit

## Materi

### Penjelasan
`map` adalah struktur data bawaan Go untuk menyimpan pasangan *key-value* dengan performa lookup rata-rata $O(1)$.

Karakteristik penting `map`:
1. **Reference Type**: Map adalah pointer ke struktur *hmap* internal di Go runtime. Mengoper map ke fungsi akan memodifikasi map asli.
2. **Comma-ok Idiom**: Saat membaca key yang mungkin tidak ada, Go mengembalikan *zero value*. Gunakan pola `val, ok := m[key]` untuk memastikan keberadaan key.
3. **Unordered Iteration**: Urutan iterasi `for k, v := range m` sengaja diacak oleh Go runtime untuk mencegah ketergantungan urutan (*non-deterministic*).

### Contoh Kode
```go
package main

import "fmt"

func main() {
    // Inisialisasi map
    m := map[string]int{"apel": 5, "jeruk": 3}
    fmt.Println("Map awal:", m)

    // Menambah dan mengubah data
    m["mangga"] = 7
    m["apel"] = 10
    fmt.Println("Setelah update:", m)

    // Cek keberadaan key dengan comma-ok idiom
    if val, ok := m["pisang"]; ok {
        fmt.Println("Pisang ada:", val)
    } else {
        fmt.Println("Pisang tidak ditemukan dalam keranjang.")
    }

    // Menghapus key
    delete(m, "jeruk")
    fmt.Println("Setelah delete jeruk:", m)
}
```

### Praktik & Concurrency Safety
- Map bawaan Go **TIDAK thread-safe** untuk penulisan paralel. Jika diakses dari banyak goroutine secara simultan, gunakan `sync.Mutex` atau `sync.Map`.

## Rangkuman
- Deklarasi map menggunakan `map[KeyType]ValueType` atau `make(map[K]V)`.
- Selalu gunakan idiom `val, ok := map[key]` untuk memeriksa ada tidaknya data.
- Referensi: [Go maps in action](https://go.dev/blog/maps)
