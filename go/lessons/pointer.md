# Pointer di Go: Alamat Memori dan Referensi Aman

**ID**: `pointer`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Pointer adalah variabel yang menyimpan alamat memori (*memory address*) dari variabel lain. Go menyediakan pointer yang aman: **tidak ada pointer arithmetic** liar (seperti di C/C++), sehingga mencegah banyak bug memori.

Dua operator utama pointer di Go:
1. **`&` (Address-of Operator)**: Mengambil alamat memori dari sebuah variabel (contoh: `p := &x`).
2. **`*` (Dereference Operator)**: Mengakses atau mengubah nilai aktual yang berada di alamat memori yang ditunjuk (contoh: `*p = 20`).

### Contoh Kode
```go
package main

import "fmt"

// Fungsi yang memodifikasi nilai via pointer
func tambahBonus(gaji *int, bonus int) {
    *gaji = *gaji + bonus // Memutasi nilai di alamat aslinya
}

func main() {
    x := 10
    p := &x // p menyimpan alamat memori x

    fmt.Printf("Nilai x: %d, Alamat &x: %p, Nilai *p: %d\n", x, p, *p)

    *p = 20 // Mengubah nilai x melalui dereferensi pointer p
    fmt.Println("Setelah mutasi *p=20 -> x:", x, "*p:", *p)

    gajiKaryawan := 5000000
    tambahBonus(&gajiKaryawan, 1500000)
    fmt.Printf("Gaji setelah bonus: Rp %d\n", gajiKaryawan)
}
```

### Praktik
- Di Go, compiler melakukan analisis lolos memori (*escape analysis*) otomatis: variabel lokal yang di-return pointernya dari fungsi akan otomatis dialokasikan di *heap*, bukan *stack*, sehingga aman dari *dangling pointers*.

## Rangkuman
- Pointer menyimpan alamat memori objek lain.
- Gunakan `&` untuk membuat pointer dan `*` untuk membaca/menulis isi memorinya.
- Referensi: [A Tour of Go: Pointers](https://go.dev/tour/moretypes/1)
