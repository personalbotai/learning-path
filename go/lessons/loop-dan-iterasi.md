# Loop dan Iterasi

**ID**: `loop-dan-iterasi`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Demi menjaga kesederhanaan, Go mengambil keputusan arsitektur yang radikal: **Hanya ada satu kata kunci untuk perulangan, yaitu `for`.** 

Go tidak memiliki `while`, `do-while`, atau `forEach`. Namun, `for` di Go sangat fleksibel dan dapat mensimulasikan semua jenis perulangan tersebut.

**4 Cara Menggunakan `for` di Go:**
1. **Three-component loop** (Gaya C klasik): `for init; condition; post {}`
2. **Condition-only loop** (Pengganti `while`): `for condition {}`
3. **Infinite loop** (Sering digunakan dengan *goroutine/channel*): `for {}`
4. **For-Range** (Digunakan untuk iterasi Array, Slice, Map, dan String).

### Contoh Kode
```go
package main

import "fmt"

func main() {
	// 1. For klasik
	fmt.Print("Klasik: ")
	for i := 1; i <= 3; i++ {
		fmt.Print(i, " ")
	}
	fmt.Println()

	// 2. For sebagai while
	fmt.Print("While: ")
	n := 1
	for n <= 3 {
		fmt.Print(n, " ")
		n++
	}
	fmt.Println()

	// 3. For Range (Sangat sering digunakan!)
	fmt.Println("Range:")
	buah := []string{"Apel", "Mangga", "Pisang"}
	
	for index, nama := range buah {
		fmt.Printf("- Index %d: %s
", index, nama)
	}

	// Jika Anda hanya butuh value tanpa index, gunakan Blank Identifier (_)
	for _, nama := range buah {
		fmt.Printf("Makan %s
", nama)
	}
}
```

### Praktik
Buat perulangan tak terbatas (`for {}`) dan gunakan fungsi kondisional `if` serta kata kunci `break` untuk keluar dari loop tersebut ketika sebuah variabel *counter* mencapai angka 5.

## Rangkuman
- `for` adalah satu-satunya loop di Go.
- Gunakan `for index, value := range collection` untuk iterasi yang elegan pada *data structures*.
- Gunakan `_` (Blank Identifier) jika Anda tidak berniat menggunakan suatu nilai yang dikembalikan oleh `range` atau fungsi.
