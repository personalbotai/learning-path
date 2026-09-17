# Struct: Definisi Tipe Kustom & Entitas di Go

**ID**: `struct`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go bukan bahasa OOP berbasis kelas murni; sebagai gantinya, Go menggunakan **`struct`** untuk mengelompokkan sekumpulan atribut/field ke dalam satu tipe data komposit.

Keunggulan struct di Go:
1. **Memory Compact**: Field dalam struct dialokasikan secara berurutan dalam memori fisik tanpa pointer overhead yang tidak perlu.
2. **Anonymous Fields & Embedding**: Go mendukung komposisi daripada *inheritance* (pewarisan).
3. **Struct Tags**: Field dapat diberi anotasi tag seperti `json:"name"` atau `db:"id"` untuk integrasi serialisasi.

### Contoh Kode
```go
package main

import "fmt"

// Definisi Struct User
type User struct {
    ID       int
    Name     string
    Email    string
    IsActive bool
}

func main() {
    // Inisialisasi struct dengan field names (direkomendasikan)
    u1 := User{
        ID:       1,
        Name:     "Budi",
        Email:    "budi@example.com",
        IsActive: true,
    }

    // Print struct dengan format %+v untuk melihat nama field
    fmt.Printf("User Detail: %+v\n", u1)
    fmt.Printf("Nama: %s, Email: %s\n", u1.Name, u1.Email)

    // Anonymous Struct untuk data sementara / payload lokal
    point := struct {
        X, Y int
    }{X: 10, Y: 20}
    fmt.Printf("Koordinat: (%d, %d)\n", point.X, point.Y)
}
```

### Praktik
- Selalu gunakan format `%+v` pada `fmt.Printf` saat men-debug isi struct untuk menampilkan label field secara jelas.

## Rangkuman
- Struct adalah fondasi pemodelan domain objek di Go.
- Go mengutamakan *composition over inheritance*.
- Referensi: [A Tour of Go: Structs](https://go.dev/tour/moretypes/2)
