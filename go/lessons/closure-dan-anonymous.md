# Closure dan Anonymous Functions

**ID**: `closure-dan-anonymous`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Di Go, fungsi berstatus sebagai *First-Class Citizen*. Artinya, fungsi dapat diperlakukan selayaknya variabel biasa: dapat dioper oper sebagai parameter, di-*return* oleh fungsi lain, atau dideklarasikan secara *inline* tanpa nama (*Anonymous Function*).

**Closure** adalah sifat sebuah fungsi *anonymous* yang secara referensial mengingat, menangkap (capture), atau mengikat (bind) variabel yang berada di luar ruang lingkup (scope) aslinya. 

Konsep ini sangat krusial saat Anda membuat *Middleware* HTTP, atau mendelegasikan tugas ke Goroutine dengan parameter dinamis.

### Contoh Kode
```go
package main

import "fmt"

// Fungsi ini mengembalikan fungsi (Closure)
func pengali(faktor int) func(int) int {
	// Anonymous function ini 'menangkap' variabel faktor dari fungsi luarnya
	return func(angka int) int {
		return angka * faktor
	}
}

func main() {
	// 1. Anonymous Function langsung dijalankan (IIFE)
	func(pesan string) {
		fmt.Println("Pesan Rahasia:", pesan)
	}("Go is Awesome!")

	// 2. Assign function ke variabel
	sapa := func(nama string) {
		fmt.Println("Halo,", nama)
	}
	sapa("Budi")

	// 3. Menggunakan Closure
	kaliDua := pengali(2)
	kaliTiga := pengali(3)

	fmt.Println("5 x 2 =", kaliDua(5))
	fmt.Println("5 x 3 =", kaliTiga(5))
}
```

### Praktik
Buatlah sebuah fungsi *closure* pembuat *counter*. Fungsi induk bernama `BikinCounter() func() int`. Setiap kali fungsi *anonymous* panggilannya dieksekusi, nilai angkanya terus bertambah satu.

## Rangkuman
- Fungsi anonim (tanpa nama) sangat berguna untuk perintah `defer` dan peluncuran `goroutine`.
- *Closure* memungkinkan sebuah fungsi anonim mengingat dan mengubah variabel di lingkungan *parent*-nya (*lexical scope*).
