# Generics Dasar (Go 1.18+)

**ID**: `generics-dasar`
**Duration**: 25-30 menit

## Materi

### Penjelasan
Go versi 1.18 membawa pembaruan terbesar dalam sejarah bahasa Go dengan diperkenalkannya **Type Parameters** (dikenal sebagai **Generics**). Generics memungkinkan Anda untuk menulis sebuah fungsi atau tipe data independen dari tipe data tertentu (dinamis secara statis).

Sebelum adanya Generics, jika Anda butuh fungsi yang menjumlahkan tipe `int` dan tipe `float64`, Anda harus menulis dua fungsi terpisah (`JumlahkanInt` dan `JumlahkanFloat`). Jika Anda menggunakan `interface{}`, Anda kehilangan keamanan tipe saat masa kompilasi (tipe *safety* hilang) dan program akan lebih lambat akibat proses refleksi.

Dengan Generics, Anda mendefinisikan *Constraint* (Batasan) menggunakan tanda kurung siku `[ ]`. Tipe-tipe generik biasanya dideklarasikan dengan penamaan tunggal `T` (singkatan dari *Type*). Go 1.18 juga memperkenalkan kata kunci *built-in* baru `any` sebagai alias (nama lain) untuk antarmuka kosong `interface{}`.

**Konstraint Kunci yang Tersedia:**
- `any`: Bisa tipe apa saja (alias dari `interface{}`).
- `comparable`: Tipe yang mendukung operator persamaan `==` dan `!=` (penting jika Anda membuat generik *Map* di mana *key*-nya wajib setara).

### Contoh Kode

```go
package main

import "fmt"

// Number adalah custom constraint yang memungkinkan tipe int ATAU float64
type Number interface {
	int | float64
}

// Fungsi Generic (Type Parameter dideklarasikan di dalam tanda kurung siku [])
func Jumlahkan[T Number](a, b T) T {
	return a + b
}

// Fungsi Generic untuk mengekstrak keys dari Map apa pun.
// K (Key) dibatasi harus `comparable` agar bisa menjadi kunci Map.
// V (Value) dibatasi `any` karena valuenya bisa apapun.
func AmbilKunci[K comparable, V any](m map[K]V) []K {
	var keys []K
	for key := range m {
		keys = append(keys, key)
	}
	return keys
}

func main() {
	// Memanggil fungsi generik dengan tipe integer
	hasilInt := Jumlahkan(5, 10)
	fmt.Printf("Int   : 5 + 10 = %v
", hasilInt)

	// Memanggil fungsi generik dengan tipe float64
	hasilFloat := Jumlahkan(3.5, 4.2)
	fmt.Printf("Float : 3.5 + 4.2 = %v
", hasilFloat)

	// Mendemonstrasikan AmbilKunci dengan map ber-key string
	mString := map[string]int{"Alice": 25, "Bob": 30}
	fmt.Println("Keys (String) :", AmbilKunci(mString))

	// Mendemonstrasikan AmbilKunci dengan map ber-key integer
	mInt := map[int]string{1: "Senin", 2: "Selasa"}
	fmt.Println("Keys (Integer):", AmbilKunci(mInt))
}
```

### Praktik
Buatlah sebuah *generic slice function* bernama `Contains` yang menerima sebuah `[]T` dan elemen pencarian bertipe `T`. Fungsi harus mengembalikan nilai boolean `true` jika elemen tersebut ada di dalam slice. 
*Petunjuk: Batasi tipe `T` dengan konstrain `comparable` agar Anda bisa menggunakan operator `==`.*

## Rangkuman
- Gunakan tanda `[ ]` untuk mendefinisikan paramater tipe generik.
- `any` adalah ekuivalen yang modern dan ringkas dari `interface{}`.
- Generics menghasilkan performa kompilasi yang kuat dan tingkat tinggi (tidak mengandalkan refleksi).
- Jangan gunakan Generics di semua hal. Cukup pada fungsi yang memang sangat memanipulasi algoritme dasar atau struktur koleksi (slices/maps) untuk beragam tipe.
- Referensi: [Tutorial: Getting started with generics - go.dev](https://go.dev/doc/tutorial/generics)
