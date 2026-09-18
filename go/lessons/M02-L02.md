# Operator dan Ekspresi

**ID**: `operator-dan-ekspresi`
**Duration**: 10-15 menit

## Materi

### Penjelasan
Go menyediakan operator standar seperti bahasa pemrograman turunan C lainnya. 

Kategori utama meliputi:
1. **Aritmatika**: `+`, `-`, `*`, `/`, `%` (Modulus/sisa bagi).
2. **Perbandingan**: `==` (Sama dengan), `!=` (Tidak sama), `<`, `>`, `<=`, `>=`.
3. **Logika**: `&&` (AND), `||` (OR), `!` (NOT).
4. **Bitwise**: `&`, `|`, `^`, `<<`, `>>` (Biasa digunakan pada optimasi *low-level*).

**Penting:** Tidak seperti JavaScript, Go **TIDAK** memiliki fitur *type coercion* (konversi tipe implisit). Anda tidak bisa membandingkan atau menjumlahkan tipe `int` dan `float64` tanpa melakukan konversi secara eksplisit (misal: `float64(variabelInt)`).

### Contoh Kode
```go
package main

import "fmt"

func main() {
	a := 10
	b := 3

	// Aritmatika
	fmt.Println("Penjumlahan:", a + b)
	fmt.Println("Modulus:", a % b)

	// Perbandingan
	fmt.Println("Apakah a lebih besar dari b?", a > b)

	// Logika (Short-circuit)
	isValid := true
	hasAccess := false
	fmt.Println("Bisa login?", isValid && hasAccess)

	// Konversi Eksplisit (Strongly Typed)
	var pi float64 = 3.14
	var radius int = 5
	
	// Error jika: pi * radius
	// Benar:
	luas := pi * float64(radius*radius)
	fmt.Println("Luas:", luas)
}
```

### Praktik
Buatlah kalkulator diskon sederhana. Harga barang adalah tipe `int` (misal 50000), dan persentase diskon adalah `float64` (misal 0.15). Hitung dan cetak harga akhir!

## Rangkuman
- Go itu *Strongly Typed*, konversi tipe harus eksplisit.
- Tidak ada operator *ternary* (seperti `kondisi ? a : b`) di Go. Anda harus menggunakan `if-else`.
