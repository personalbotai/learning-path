# Interface: Kontrak Perilaku di Go

**ID**: `interface`
**Duration**: 30-45 menit

## Materi

### Penjelasan
Berbeda dengan OOP tradisional seperti Java atau C#, antarmuka (Interface) di Go diterapkan secara **implisit** (*duck typing*). Anda tidak perlu menulis kata kunci `implements`. Jika sebuah tipe data (Struct) memiliki metode-metode yang cocok dengan yang dideklarasikan oleh Interface, tipe tersebut secara otomatis mengimplementasikan Interface tersebut.

Filosofi ini dikenal dengan istilah: *"If it walks like a duck and quacks like a duck, it's a duck."*

Fungsi utama Interface:
1. **Dekoupling (Pemisahan Ketergantungan)**: Kode menjadi lebih modular dan mudah dites.
2. **Polimorfisme**: Memungkinkan sebuah fungsi menerima tipe data berbeda asalkan mereka memenuhi "kontrak" *behavior* (perilaku) yang sama.
3. **Empty Interface (`interface{}`)**: Antarmuka kosong (sering ditulis sebagai `any` pada Go 1.18+) yang berarti "tipe data apapun". Sangat berguna untuk menerima argumen bertipe dinamis, seperti pada fungsi `fmt.Println()`.

### Contoh Kode
```go
package main

import (
	"fmt"
	"math"
)

// 1. Mendefinisikan kontrak interface
type Bentuk interface {
	Luas() float64
	Keliling() float64
}

// 2. Struct Lingkaran
type Lingkaran struct {
	Radius float64
}

// Lingkaran secara implisit mengimplementasikan Bentuk
func (l Lingkaran) Luas() float64 {
	return math.Pi * l.Radius * l.Radius
}
func (l Lingkaran) Keliling() float64 {
	return 2 * math.Pi * l.Radius
}

// 3. Struct PersegiPanjang
type PersegiPanjang struct {
	Panjang, Lebar float64
}

// PersegiPanjang secara implisit mengimplementasikan Bentuk
func (p PersegiPanjang) Luas() float64 {
	return p.Panjang * p.Lebar
}
func (p PersegiPanjang) Keliling() float64 {
	return 2 * (p.Panjang + p.Lebar)
}

// 4. Fungsi polimorfik
func cetakInfo(b Bentuk) {
	fmt.Printf("Bentuk bertipe %T
", b)
	fmt.Printf("Luas: %.2f
", b.Luas())
	fmt.Printf("Keliling: %.2f

", b.Keliling())
}

func main() {
	l := Lingkaran{Radius: 5}
	p := PersegiPanjang{Panjang: 10, Lebar: 4}

	// Kedua struct berbeda, tapi fungsi cetakInfo menerimanya
	// karena keduanya memenuhi interface Bentuk
	cetakInfo(l)
	cetakInfo(p)
}
```

### Praktik
Buat struct baru bernama `Segitiga` dan tambahkan fungsionalitas `Luas()` dan `Keliling()`. Lalu coba *pass* / kirim *instance* Segitiga tersebut ke dalam fungsi `cetakInfo()`.

## Rangkuman
- Interface di Go berisi *method signatures* (kontrak fungsi tanpa implementasi).
- Implementasi Interface bersifat implisit.
- Membantu menciptakan arsitektur perangkat lunak yang *loosely coupled* (terpisah) dan sangat mempermudah proses pembuatan *Mock* saat *Unit Testing*.
- Referensi: [A Tour of Go: Interfaces](https://go.dev/tour/methods/9)
