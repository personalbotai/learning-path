# Channels: Komunikasi Antar Goroutine

**ID**: `channel`
**Duration**: 30-45 menit

## Materi

### Penjelasan
*"Do not communicate by sharing memory; instead, share memory by communicating."* - (Rob Pike, Co-creator Go)

Filosofi di atas adalah jantung dari konkurensi di Go. Daripada menggunakan struktur data yang di-*lock* secara rumit (menggunakan Mutex) untuk diakses oleh banyak thread secara bersamaan, Go memperkenalkan **Channel**.

**Channel** ibarat pipa tempat Anda mengirim dan menerima data dari sebuah Goroutine ke Goroutine lainnya. 
1. **Thread-Safe**: Channel menjamin data yang dikirim dan diterima aman dari *Race Condition*.
2. **Blocking Nature**: Secara default, pengiriman (`ch <- data`) dan penerimaan (`data := <-ch`) bersifat *blocking* sampai pihak lainnya (pengirim/penerima) siap. Ini bertindak sebagai mekanisme sinkronisasi otomatis.

Ada dua jenis Channel:
1. **Unbuffered Channel**: Tidak memiliki kapasitas. Pengirim akan berhenti bekerja (*block*) sampai penerima mengambil nilainya.
2. **Buffered Channel**: Memiliki antrean kapasitas (contoh: kapasitas 5). Pengirim bisa terus mengirim tanpa harus menunggu penerima, *kecuali* kapasitas tersebut sudah penuh.

### Contoh Kode
```go
package main

import (
	"fmt"
	"time"
)

// Fungsi pekerja menerima data melalui channel
func worker(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Printf("Worker %d mulai memproses job %d
", id, j)
		time.Sleep(time.Second) // Simulasi kerja lambat
		fmt.Printf("Worker %d selesai memproses job %d
", id, j)
		results <- j * 2 // Kirim hasil kembali
	}
}

func main() {
	// Membuat buffered channel dengan kapasitas 100
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	// Mulai 3 pekerja (goroutine pool)
	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	// Kirim 5 job ke pekerja
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs) // Tutup channel jobs karena tidak ada pengiriman lagi

	// Ambil semua hasil dari channel results
	for a := 1; a <= 5; a++ {
		<-results 
	}
	
	fmt.Println("Semua antrean pekerjaan selesai!")
}
```

### Praktik
1. Jalankan kode di atas. Anda akan melihat 3 pekerja saling berebut pekerjaan (*load balancing* sederhana) dari channel `jobs`.
2. Ubah `go worker` menjadi dipanggil 10 kali (membuat 10 pekerja). Lihat betapa cepatnya program selesai karena pekerja paralel meningkat.

## Rangkuman
- Channel digunakan untuk mengirim data antar Goroutine secara aman.
- Gunakan operator `<-` untuk mengirim (`ch <- v`) atau menerima (`v := <-ch`).
- `close(ch)` digunakan oleh *sender* (pengirim) untuk memberi tahu *receiver* (penerima) bahwa tidak ada lagi data yang akan dikirim.
- Referensi: [A Tour of Go: Channels](https://go.dev/tour/concurrency/2)
