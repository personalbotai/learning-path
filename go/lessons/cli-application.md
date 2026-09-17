# Membuat Aplikasi Command Line (CLI)

**ID**: `cli-application`
**Duration**: 30-40 menit

## Materi

### Penjelasan
Go sangat populer untuk mengembangkan utilitas Command Line Interface (CLI) modern dengan performa tinggi. Aplikasi-aplikasi *ops* skala dunia seperti Docker, Terraform, dan Kubernetes semuanya mengandalkan Go. Go mudah dirangkum (dikompilasi) ke dalam satu file biner tunggal (*single binary executables*) tanpa memerlukan dependensi *runtime* pada komputer penggunanya.

Ada dua pendekatan utama untuk membaca parameter/argumen (*flags*) di CLI:
1. **Menggunakan Standar Library `flag`**: Ini adalah fitur bawaan standar dari Go, dan cukup mumpuni untuk pembuatan CLI dasar dengan parameter baris perintah pendek (contoh: `-v`, `-port=8080`).
2. **Menggunakan Pihak Ketiga (seperti `Cobra` dari spf13)**: Cobra adalah *library* industri yang digunakan di Hugo, GitHub CLI (`gh`), maupun Kubernetes. Dirancang sangat baik bagi aplikasi CLI yang memiliki fitur sub-command (seperti `git clone` atau `git commit`).

Dalam materi ini, kita akan membahas fundamental menggunakan *standard library* bawaan untuk menjaga aplikasi kita seminimal mungkin.

### Contoh Kode

Berikut adalah program CLI port scanner sederhana yang mendemonstrasikan pembacaan parameter terminal menggunakan package `flag`.

```go
package main

import (
	"flag"
	"fmt"
	"net"
	"time"
)

func main() {
	// 1. Mendefinisikan flag CLI
	// Format: flag.String("nama_flag", "default_value", "deskripsi")
	hostPtr := flag.String("host", "scanme.nmap.org", "Alamat domain atau IP target")
	portPtr := flag.Int("port", 80, "Nomor port yang akan dicek")
	timeoutPtr := flag.Int("timeout", 2, "Durasi timeout koneksi dalam satuan detik")

	// 2. Wajib memanggil fungsi Parse setelah mendefinisikan flag
	flag.Parse()

	// 3. Mengeksekusi Logika CLI
	target := fmt.Sprintf("%s:%d", *hostPtr, *portPtr)
	timeout := time.Duration(*timeoutPtr) * time.Second

	fmt.Printf("Mengecek port %d pada host %s dengan timeout %s...
", *portPtr, *hostPtr, timeout)

	// Mencoba melakukan koneksi TCP untuk melihat apakah port terbuka
	conn, err := net.DialTimeout("tcp", target, timeout)
	if err != nil {
		fmt.Printf("[❌] Port %d TERTUTUP (Atau tidak bisa dihubungi)
", *portPtr)
		return
	}
	
	// Menutup koneksi jika berhasil terbuka
	conn.Close()
	fmt.Printf("[✅] Port %d TERBUKA
", *portPtr)
}
```

**Di Terminal:**
Untuk mengujinya, jalankan di terminal Anda dengan memberikan argumen:
```bash
# Menampilkan bantuan CLI yang otomatis di-generate oleh package flag
go run main.go -help

# Mengeksekusi dengan menggunakan nilai default (scanme.nmap.org port 80)
go run main.go

# Mengubah parameter melalui flag
go run main.go -host=golang.org -port=443 -timeout=5
```

### Praktik
Kembangkan program di atas untuk membaca *multiple port*. Daripada menerima `-port=80`, terima masukan *string* berformat daftar angka seperti `-ports="80,443,8080"`. Gunakan `strings.Split` untuk memisahkannya lalu iterasi dan *scan* semua *port* tersebut secara bersamaan di dalam kalang *for* menggunakan Goroutine!

## Rangkuman
- *Library* bawaan `flag` sudah sangat mumpuni dalam membuat utilitas CLI berfitur argumen dan nilai bawaan *default*.
- Jangan lupa memanggil `flag.Parse()` sebelum Anda mencoba mengakses nilai *pointers* dari *flag* terkait.
- Hasil kembalian dari pendefinisian flag (seperti `flag.String()`) adalah sebuah *pointer* (`*string`).
- Referensi: [Package flag - go.dev](https://pkg.go.dev/flag)
