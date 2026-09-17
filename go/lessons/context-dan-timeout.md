# Context dan Timeout

**ID**: `context-dan-timeout`
**Duration**: 30-40 menit

## Materi

### Penjelasan
`context` adalah *package* standar di Go yang sangat krusial dalam ekosistem pengembangan sistem terdistribusi, *microservices*, dan *backend*. Context membawa *deadlines*, sinyal pembatalan (*cancellation signals*), dan nilai yang spesifik terhadap *request* melintasi batasan-batasan API maupun *goroutine*.

Tanpa *context*, jika klien membatalkan HTTP *request* secara prematur (misal: karena koneksi putus atau menekan tombol stop), *server* Anda mungkin masih akan terus memproses *query database* berat di latar belakang, membuang sumber daya dengan percuma (*resource leak*).

**Pattern Utama `context`:**
1. `context.Background()`: Akar dari *context*. Digunakan di `main`, *init*, atau *tests*.
2. `context.TODO()`: Sama seperti `Background`, digunakan jika Anda belum yakin *context* apa yang harus dipakai.
3. `context.WithCancel(parent)`: Menghasilkan *context* anak dan fungsi `cancel()`. Fungsi pembatal dapat dipanggil secara manual untuk membatalkan seluruh *goroutine* yang menerimanya.
4. `context.WithTimeout(parent, duration)`: Sama dengan `WithCancel`, namun pembatalan akan terpicu secara otomatis setelah durasi waktu (*timeout*) berlalu. Sangat vital untuk membatasi durasi panggilan *database* atau API eksternal.

### Contoh Kode (Dengan Timeout)

```go
package main

import (
	"context"
	"fmt"
	"time"
)

// Fungsi yang menyimulasikan panggilan database yang lambat
func panggilDatabase(ctx context.Context) (string, error) {
	// Membuat channel untuk menerima hasil dari goroutine
	hasil := make(chan string)

	go func() {
		// Simulasi proses yang memakan waktu 3 detik
		time.Sleep(3 * time.Second)
		hasil <- "Data berhasil diambil!"
	}()

	// Select memblokir sampai salah satu kondisi terjadi:
	// 1. ctx.Done() - Context dibatalkan atau timeout (dari fungsi utama)
	// 2. hasil - Data selesai diproses oleh goroutine
	select {
	case <-ctx.Done():
		return "", fmt.Errorf("operasi dibatalkan: %v", ctx.Err())
	case data := <-hasil:
		return data, nil
	}
}

func main() {
	// Kita membuat context dengan batas waktu 2 detik.
	// Padahal, fungsi panggilDatabase membutuhkan 3 detik.
	// Kita juga menggunakan defer cancel() untuk mencegah memory leak.
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	fmt.Println("Memulai query ke database...")
	data, err := panggilDatabase(ctx)

	if err != nil {
		fmt.Printf("Error: %s
", err.Error())
	} else {
		fmt.Printf("Sukses: %s
", data)
	}
}
```

### Praktik
1. Jalankan kode di atas. Program akan memunculkan *error: context deadline exceeded* karena batas waktunya (2 detik) sudah habis sebelum operasi selesai (3 detik).
2. Ubah `time.Sleep(3 * time.Second)` menjadi `1 * time.Second`. Jalankan ulang. Sekarang seharusnya mencetak pesan Sukses, karena eksekusi selesai lebih cepat dari batas *timeout*.

## Rangkuman
- *Context* wajib diluluskan (*passed*) sebagai parameter pertama dalam setiap fungsi yang melakukan operasi I/O atau yang memanggil fungsi lambat lainnya.
- Gunakan `context.WithTimeout` untuk mencegah *server* Anda macet tanpa batas (*hanging indefinitely*).
- Gunakan konstruksi `select` dengan `<-ctx.Done()` untuk mendengarkan sinyal pembatalan dari fungsi-fungsi induk.
- Referensi: [Package context - go.dev](https://pkg.go.dev/context)
