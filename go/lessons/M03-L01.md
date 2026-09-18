# Control Flow: If dan Else

**ID**: `control-flow-if-else`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Struktur kondisional di Go sangat mirip dengan C, Java, atau JavaScript, tetapi dengan satu perbedaan sintaks yang menonjol: **Tanda kurung `()` tidak diperlukan di sekitar kondisi, tetapi kurung kurawal `{}` WAJIB ada.**

Fitur paling *powerful* dari `if` di Go adalah **Initial Statement**.
Anda dapat mengeksekusi sebuah perintah singkat (biasanya inisialisasi variabel) tepat sebelum kondisi dievaluasi. Variabel yang dibuat dalam *initial statement* ini scope-nya (ruang lingkupnya) hanya sebatas blok `if-else` tersebut, sehingga mencegah "sampah" variabel di fungsi Anda.

Fitur ini adalah tulang punggung idiom *error handling* di Go.

### Contoh Kode
```go
package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	
	// 1. If-Else biasa
	umur := 18
	if umur >= 17 {
		fmt.Println("Bisa membuat KTP")
	} else {
		fmt.Println("Belum cukup umur")
	}

	// 2. If dengan Initial Statement (Sangat Idiomatik)
	// Kita membuat variabel 'skor' dan langsung mengeceknya dalam satu baris.
	if skor := rand.Intn(100); skor >= 80 {
		fmt.Printf("Skor %d: Lulus dengan pujian!
", skor)
	} else if skor >= 60 {
		fmt.Printf("Skor %d: Lulus
", skor)
	} else {
		fmt.Printf("Skor %d: Tidak Lulus
", skor)
	}
	// Variabel 'skor' sudah tidak ada (undefined) di baris ini.
}
```

### Praktik
Uji logika inisialisasi `if err := doSomething(); err != nil { ... }`. Coba buat sebuah fungsi fiktif yang mereturn nilai dan error, lalu tangkap dan periksa nilai error tersebut dalam satu baris `if`.

## Rangkuman
- Kurung `()` opsional, Kurawal `{}` wajib.
- Maksimalkan penggunaan *If Initial Statement* untuk membatasi *scope* variabel sementara (terutama saat mengecek kembalian *error*).
