# Array dan Slice

**ID**: `array-dan-slice`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Di banyak bahasa, Array dapat membesar dan mengecil secara dinamis. **TIDAK di Go.**
Di Go, **Array** memiliki ukuran yang mutlak (tetap) dan ukurannya adalah bagian dari tipe data tersebut (contoh: `[3]int` dan `[4]int` adalah dua tipe data yang berbeda sepenuhnya).

Oleh karena itu, standar industri jarang menggunakan Array secara langsung. Sebaliknya, Go menyediakan **Slice**.
*Slice* adalah tipe dinamis yang beroperasi di *atas* Array statis. *Slice* bertindak sebagai "jendela" referensi menuju memori Array di baliknya.

Tiga komponen utama sebuah Slice:
1. **Pointer**: Menunjuk ke indeks Array asli di baliknya.
2. **Length** (`len()`): Jumlah elemen yang ada di *Slice* saat ini.
3. **Capacity** (`cap()`): Jumlah ruang memori maksimal yang dialokasikan (kapasitas Array asli).

### Contoh Kode
```go
package main

import "fmt"

func main() {
	// 1. ARRAY (Ukuran Fixed/Kaku)
	var arr [3]string
	arr[0] = "Go"
	arr[1] = "Rust"
	arr[2] = "Zig"
	fmt.Println("Array:", arr)

	// 2. SLICE (Ukuran Dinamis) - Perhatikan tidak ada angka di dalam []
	slice := []string{"Jakarta", "Bandung"}
	fmt.Println("Slice Awal:", slice)
	
	// Menambah data ke Slice (Jika kapasitas penuh, Go akan merealokasi array baru di balik layar)
	slice = append(slice, "Surabaya", "Medan")
	fmt.Println("Slice Setelah Append:", slice)

	// 3. Membuat Slice dengan alokasi (make) untuk optimalisasi performa
	// make([]tipe, length, capacity)
	// Berguna jika kita sudah tahu kira-kira ada 1000 data, agar RAM tidak dialokasi berulang-ulang.
	buffer := make([]int, 0, 5) 
	fmt.Printf("Buffer -> Len: %d, Cap: %d
", len(buffer), cap(buffer))
}
```

### Praktik
Ketiklah operasi `slicing` (memotong). Buat sebuah array berisi 5 angka. Lalu ambil elemen ke-2 hingga ke-4 menggunakan sintaks `sliceBaru := arrayLama[1:4]`. Perhatikan hasilnya!

## Rangkuman
- Di Go production, Anda akan menggunakan **Slice** 99% dari keseluruhan waktu, jarang menggunakan Array secara langsung.
- Gunakan perintah bawaan `append` untuk menambah elemen ke dalam Slice.
- Gunakan `make` untuk membuat *Slice* dengan prapengaturan kapasitas memori guna mempercepat kinerja loop massal.
