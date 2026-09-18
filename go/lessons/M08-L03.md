# Select dan Pattern Concurrency

**ID**: `select-dan-concurrency`
**Duration**: 25-30 menit

## Materi

### Penjelasan
`select` adalah struktur *control flow* unik milik Go yang eksklusif diciptakan untuk berinteraksi dengan banyak *Channel* secara bersamaan (Multiplexing). 

Pernyataan `select` akan menahan blok eksekusi (*blocking*) sampai salah satu dari klausul `case` *channel* yang dimilikinya siap untuk dieksekusi (entah menerima data, atau siap dikirimi data). Jika beberapa channel siap bersamaan, `select` akan memilih salah satunya secara acak (pseudo-random).

Kekuatan utama `select`:
1. Menggabungkan hasil (Fan-in) dari berbagai Goroutine secara aman.
2. Mengimplementasikan **Non-blocking Channel Operations** menggunakan klausa `default`.
3. Menerapkan skenario **Timeout** mandiri terhadap operasi asinkron yang macet menggunakan `time.After`.

### Contoh Kode
```go
package main

import (
	"fmt"
	"time"
)

func prosesCepat(ch chan string) {
	time.Sleep(1 * time.Second)
	ch <- "Data dari server lokal"
}

func prosesLambat(ch chan string) {
	time.Sleep(4 * time.Second)
	ch <- "Data dari server cloud"
}

func main() {
	ch1 := make(chan string)
	ch2 := make(chan string)

	go prosesCepat(ch1)
	go prosesLambat(ch2)

	// Kita mendengarkan dua channel sekaligus, PLUS channel timer untuk timeout
	// Select akan bereaksi pada siapa pun yang merespons pertama kali!
	for i := 0; i < 2; i++ {
		select {
		case res1 := <-ch1:
			fmt.Println("Selesai duluan:", res1)
		case res2 := <-ch2:
			fmt.Println("Selesai duluan:", res2)
		case <-time.After(2 * time.Second):
			// Timeout terpicu karena prosesLambat butuh 4 detik!
			fmt.Println("WAKTU HABIS! Mengabaikan operasi yang terlalu lambat.")
		}
	}
}
```

### Praktik
Buatlah channel. Di dalam kalang `select`, buat sebuah klausa `default: fmt.Println("Channel belum siap")`. Perhatikan bagaimana aplikasi tidak lagi menunggu (*blocking*), melainkan langsung mencetak baris default tersebut dan selesai. Ini dinamakan instruksi *non-blocking*.

## Rangkuman
- `select` ibarat `switch` tetapi khusus untuk *Channel*.
- Pattern integrasi batas waktu (`case <-time.After()`) adalah rahasia layanan mikro di industri (*microservices*) untuk menghindari *server-hanging* massal akibat pihak eksternal lambat membalas.
