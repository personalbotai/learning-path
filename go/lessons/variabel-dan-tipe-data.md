# Variabel dan Tipe Data

**ID**: `variabel-dan-tipe-data`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Go adalah bahasa yang **statically typed**. Artinya, setiap variabel harus diketahui tipe datanya pada saat kompilasi (compile-time). Hal ini mengurangi *runtime error* secara drastis dibandingkan JavaScript atau Python.

Namun, Go dirancang agar terasa seperti bahasa dinamis melalui fitur **Type Inference**. Anda tidak perlu menuliskan tipe data secara eksplisit jika Go bisa menebaknya dari nilai yang Anda berikan.

Go memiliki 3 cara utama mendeklarasikan variabel:
1. `var` dengan deklarasi eksplisit: `var umur int = 25`
2. `var` dengan type inference: `var nama = "Gopher"`
3. **Short Variable Declaration** (`:=`): `pekerjaan := "Engineer"` (Sangat umum digunakan di dalam sebuah fungsi).

**Konstanta**
Gunakan `const` untuk nilai yang tidak akan pernah berubah (immutable). Contoh: `const Pi = 3.14`.

### Contoh Kode
```go
package main

import "fmt"

func main() {
	// 1. Deklarasi eksplisit
	var bahasa string = "Go"
	
	// 2. Short declaration (Type Inference)
	versi := 1.22
	
	// 3. Deklarasi multiple
	var (
		isAwesome bool = true
		creator   string = "Google"
	)
	
	// 4. Konstanta
	const timeout = 30 // detik

	fmt.Printf("Belajar %s versi %.2f (Dibuat oleh %s)
", bahasa, versi, creator)
	fmt.Printf("Keren? %v. Batas waktu default: %d detik
", isAwesome, timeout)
}
```

### Praktik
Cobalah menggunakan `:=` untuk mendeklarasikan umur Anda, lalu coba ubah nilainya (re-assign) menggunakan `=` (tanpa titik dua). Ingat, `:=` hanya digunakan untuk *deklarasi pertama kali*.

## Rangkuman
- Gunakan `:=` di dalam fungsi untuk kode yang lebih ringkas.
- Gunakan `var` untuk variabel tingkat *package* (di luar fungsi).
- Tipe data primitif di Go meliputi: `int`, `float64`, `string`, dan `bool`.
