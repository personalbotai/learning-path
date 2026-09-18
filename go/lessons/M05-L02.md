# Map: Key-Value Data Structure

**ID**: `map-dan-key-value`
**Duration**: 15-20 menit

## Materi

### Penjelasan
`map` adalah struktur data *hash table* (atau *dictionary* di Python, *object* di JS) bawaan bahasa Go. *Map* digunakan untuk menyimpan sekumpulan nilai yang dipetakan oleh *key* (kunci) yang unik.

Karakteristik penting Map di Go:
1. **Unordered**: Jika Anda melakukan iterasi/loop menggunakan `range` pada sebuah *map*, urutan datanya akan **diacak** secara otomatis oleh Go. Jangan pernah bergantung pada urutan input saat memproses *map*.
2. **Comparable Keys**: Kunci (*key*) haruslah tipe data yang bisa dibandingkan menggunakan `==` (seperti string, int). Slice dan fungsi *tidak bisa* menjadi *key*.
3. **Pointers**: Sama seperti *Slice*, *Map* secara fundamental bertindak sebagai referensi (*reference type*). Jika Anda mem-*pass* map ke dalam sebuah fungsi, perubahannya akan berdampak pada map aslinya.

### Contoh Kode
```go
package main

import "fmt"

func main() {
	// 1. Membuat map (key: string, value: int) menggunakan make()
	gaji := make(map[string]int)
	gaji["Budi"] = 5000000
	gaji["Andi"] = 4000000

	// 2. Deklarasi literal
	status := map[string]bool{
		"server_1": true,
		"server_2": false,
	}

	fmt.Println("Gaji Budi:", gaji["Budi"])

	// 3. Menghapus elemen
	delete(gaji, "Andi")

	// 4. MENGUJI keberadaan KEY (Idiom Penting!)
	// Jika kita mengakses key yang tidak ada, Go mengembalikan zero value (0, false, "").
	// Untuk membedakannya, kita tangkap nilai ok (boolean).
	val, ok := status["server_3"]
	if ok {
		fmt.Println("Server 3 statusnya:", val)
	} else {
		fmt.Println("Server 3 tidak ditemukan di map!")
	}
}
```

### Praktik
Cobalah iterasi nilai variabel `status` di atas menggunakan perulangan `for key, val := range status`. Jalankan berkali-kali dan perhatikan apakah urutan cetaknya selalu konsisten.

## Rangkuman
- Gunakan idiom `value, ok := map[key]` untuk memvalidasi secara aman apakah sebuah elemen eksis di dalam *Map*.
- *Map* di Go tidak *thread-safe*. Jika beberapa *goroutine* membaca dan memodifikasi *Map* yang sama bersamaan, program akan *panic* (*concurrent map writes*). Gunakan `sync.Mutex` atau `sync.Map` di level produksi.
