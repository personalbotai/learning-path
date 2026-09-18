# Defer, Panic, dan Recover

**ID**: `defer-panic-recover`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Meskipun Go menggunakan nilai kembalian (return values) untuk manajemen *error* utama yang diharapkan (seperti file tidak ditemukan, dll), Go juga memiliki mekanisme penanganan kondisi darurat (*exceptional condition*). Kombinasi ketiga perintah khusus ini mengatur kontrol aliran darurat tersebut:

1. **Defer**
   - Menunda eksekusi dari fungsi yang dipanggil sampai fungsi di sekitarnya selesai (baik karena `return` normal maupun karena `panic`).
   - Sering digunakan sebagai *clean-up tool* yang dijamin aman untuk dieksekusi, misalnya menutup file (*file.Close()*), menutup koneksi database, atau melepaskan kuncian (*mutex.Unlock()*).
   - *Defer* dieksekusi dengan urutan LIFO (*Last In, First Out*).

2. **Panic**
   - Menyebabkan program masuk ke fase "darurat" dan akan segera berhenti (crash) bila tidak di-*recover*.
   - Saat *panic* terjadi, eksekusi biasa dihentikan seketika, tetapi semua fungsi yang sudah tertunda oleh perintah `defer` akan dieksekusi secara terbalik sebelum program benar-benar mati.
   - Idealnya *panic* HANYA digunakan saat status sistem tidak dapat dipulihkan atau terjadi bug yang kritis (contoh: mencoba mengakses indeks *array* secara tidak sah (out of bound) atau gagal meload file konfigurasi utama saat aplikasi di-*start*).

3. **Recover**
   - Fungsi bawaan yang digunakan untuk mendapatkan kembali kontrol dari kondisi *panic*. 
   - `recover()` hanya berfungsi dan valid bila dipanggil **di dalam fungsi `defer`**.

### Contoh Kode

```go
package main

import "fmt"

func operasiBerbahaya() {
	// Recover harus berada di dalam fungsi defer agar bisa menangkap Panic
	defer func() {
		// Menangkap nilai panic
		if r := recover(); r != nil {
			fmt.Printf("Telah terjadi panic, tapi kita recover: '%v'
", r)
			fmt.Println("Memulihkan state dan melanjutkan eksekusi ke luar fungsi ini...")
		}
	}()

	fmt.Println("Langkah 1: Operasi dimulai...")
	
	// Defer lainnya akan dipanggil dari bawah ke atas sebelum program crash/direcover
	defer fmt.Println("Defer: Selalu dieksekusi (Membersihkan sesuatu)")

	fmt.Println("Langkah 2: Menghadapi kondisi fatal...")
	
	// Sengaja memicu error kritis
	panic("Sistem kekurangan memori kritis!")

	// Baris di bawah ini TIDAK akan pernah dieksekusi
	fmt.Println("Langkah 3: Sukses (ini tak akan tercetak)")
}

func main() {
	fmt.Println("Aplikasi dimulai.")
	
	// Menjalankan fungsi yang bisa memicu crash
	operasiBerbahaya()
	
	// Karena kita menggunakan recover(), eksekusi main() tetap berjalan normal
	fmt.Println("Aplikasi berakhir dengan aman tanpa crash.")
}
```

### Praktik
1. Hapus atau komentar blok kode `defer func() { ... recover() ... }()` dari fungsi `operasiBerbahaya` di atas. Jalankan program dan perhatikan outputnya! Apa yang terjadi dengan string *"Aplikasi berakhir dengan aman tanpa crash"*?
2. Kembalikan kodenya seperti semula. Tulis fungsi baru, buka sebuah `*os.File`, dan jadikan `defer file.Close()` sebagai kebiasaan utama dalam penulisan blok kode file I/O Anda.

## Rangkuman
- Gunakan `defer` untuk menjamin proses "pembersihan" (*cleanup*) diletakkan saling berdekatan dengan baris tempat Anda membuat *resource* (alokasi instansi/koneksi).
- Go merekomendasikan: *Return an `error` if it's expected, `panic` only if it's exceptionally fatal.* (Penting: Jangan gunakan *panic* untuk validasi *input/output* normal layaknya *exceptions* di bahasa lain).
- Referensi: [Defer, Panic, and Recover - The Go Blog](https://go.dev/blog/defer-panic-and-recover)
