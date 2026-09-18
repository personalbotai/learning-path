# Goroutine: Concurrency Ringan di Go

**ID**: `goroutine`
**Duration**: 30-45 menit

## Materi

### Penjelasan
Salah satu fitur paling revolusioner di Go adalah **Goroutine**. Goroutine adalah fungsi atau metode yang dieksekusi secara konkuren (bersamaan) dengan Goroutine lainnya dalam ruang alamat (address space) yang sama.

Mengapa Goroutine begitu spesial?
1. **Sangat Ringan (Ultra-Lightweight)**: Tidak seperti OS Threads biasa (seperti di Java atau C++) yang memakan memori ~1MB - 2MB per thread, Goroutine hanya berukuran ~2KB saat awal dibuat.
2. **Skalabilitas Masif**: Karena ukurannya yang kecil, Anda bisa menjalankan ratusan ribu bahkan jutaan Goroutine secara bersamaan tanpa membuat mesin Anda kehabisan memori (OOM).
3. **Go Runtime Scheduler**: Go memiliki *scheduler* bawaan yang secara otomatis memetakan (multiplexing) ribuan Goroutine ke dalam beberapa OS Threads yang tersedia di CPU secara efisien.

Cara menggunakan Goroutine sangat sederhana: cukup tambahkan *keyword* **`go`** di depan pemanggilan fungsi.

Namun hati-hati, karena fungsi `main` juga berjalan sebagai Goroutine utama, jika fungsi `main` selesai, maka seluruh Goroutine yang sedang berjalan akan langsung dihentikan secara paksa (*terminated*). Oleh karena itu, kita sering butuh mekanisme sinkronisasi seperti `sync.WaitGroup` untuk menunggu mereka selesai.

### Contoh Kode
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// Fungsi yang akan dieksekusi sebagai goroutine
func prosesData(id int, wg *sync.WaitGroup) {
	// Pastikan Done() dipanggil saat fungsi selesai
	defer wg.Done()
	
	fmt.Printf("Pekerja %d: Mulai memproses...
", id)
	time.Sleep(1 * time.Second) // Simulasi kerja I/O lambat (DB, Network)
	fmt.Printf("Pekerja %d: Selesai!
", id)
}

func main() {
	start := time.Now()
	var wg sync.WaitGroup // Sinkronisasi

	// Kita meluncurkan 5 Goroutine secara paralel
	for i := 1; i <= 5; i++ {
		wg.Add(1) // Menambah counter goroutine yang ditunggu
		go prosesData(i, &wg) // Eksekusi konkuren!
	}

	fmt.Println("Main: Menunggu semua pekerja selesai...")
	wg.Wait() // Blokir eksekusi di baris ini sampai counter menjadi 0
	
	fmt.Printf("Selesai total dalam %v
", time.Since(start))
}
```

### Praktik
1. Jalankan kode di atas. Waktu eksekusi total harusnya hanya sekitar ~1 detik, padahal ada 5 pekerja yang masing-masing tertidur 1 detik. Inilah kekuatan konkurensi!
2. Coba hilangkan perintah `go` di depan pemanggilan `prosesData`. Jalankan lagi, dan perhatikan bahwa waktu eksekusinya menjadi 5 detik berurutan (sekuensial).

## Rangkuman
- Goroutine adalah *lightweight thread* yang dikelola oleh Go runtime.
- Dibuat hanya dengan menambahkan kata kunci `go`.
- Dibutuhkan mekanisme seperti `sync.WaitGroup` atau `Channel` untuk mensinkronkan Goroutine agar fungsi utama tidak keluar lebih dulu.
- Referensi: [A Tour of Go: Goroutines](https://go.dev/tour/concurrency/1)
