# Fungsi Dasar

**ID**: `fungsi-dasar`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Fungsi adalah blok bangunan (*building block*) utama dalam bahasa Go. Go mendukung beberapa fitur fungsi yang sangat disukai oleh *engineer* sistem, yaitu **Multiple Return Values**.

Sebuah fungsi di Go dapat mengembalikan lebih dari satu nilai. Ini adalah fondasi dari pola *error handling* di Go, di mana sebuah fungsi biasanya mengembalikan `(hasil, error)`.

Anda juga dapat menggunakan **Named Return Values** (Nilai kembalian bernama). Jika digunakan, Anda cukup memanggil kata kunci `return` tanpa menyertakan variabelnya, yang disebut sebagai *Naked Return*.

### Contoh Kode
```go
package main

import (
	"errors"
	"fmt"
)

// 1. Fungsi biasa
func Tambah(a int, b int) int {
	return a + b
}

// 2. Fungsi dengan Multiple Return Values (Nilai & Error)
func Bagi(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("tidak bisa dibagi dengan nol")
	}
	return a / b, nil
}

// 3. Fungsi dengan Named Return Values
func KalkulasiPersegi(sisi float64) (luas float64, keliling float64) {
	luas = sisi * sisi
	keliling = 4 * sisi
	// Naked return: otomatis mengembalikan variabel luas dan keliling
	return 
}

func main() {
	// Menangkap multiple return
	hasil, err := Bagi(10, 2)
	if err != nil {
		fmt.Println("Gagal:", err)
	} else {
		fmt.Println("Hasil Pembagian:", hasil)
	}

	luas, keliling := KalkulasiPersegi(5)
	fmt.Printf("Luas: %.0f, Keliling: %.0f
", luas, keliling)
}
```

### Praktik
Ubah fungsi `Tambah` di atas agar menerima tipe parameter sekaligus, misal `func Tambah(a, b int)`. Go mengizinkan penyederhanaan jika beberapa parameter berurutan memiliki tipe yang sama.

## Rangkuman
- Go sangat mengandalkan *Multiple Return Values* untuk manajemen status dan error.
- Gunakan *Named Return Values* hanya pada fungsi pendek, karena pada fungsi panjang (lebih dari 20 baris), hal ini dapat mengurangi *readability* (keterbacaan).
