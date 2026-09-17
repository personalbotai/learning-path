# File I/O Dasar

**ID**: `file-io-dasar`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go memberikan *package* OS (*Operating System*) `os` dan manipulasi *stream* dari paket `io` / `bufio` untuk urusan baca/tulis (*read/write*) file.

Dalam pengolahan I/O, hal yang paling ditekankan di Go adalah: **Tutup Kembali File Anda!** Membuka banyak file tanpa memanggil fungsional penutup (`.Close()`) pada akhirnya akan menyebabkan *File Descriptor Leak* yang membunuh server Anda. Di sinilah fungsi `defer` menunjukkan tajinya.

Mulai versi Go 1.16, rutinitas pembacaan/penulisan dasar bisa dengan mudah diselesaikan menggunakan fungsi utilitas seperti `os.ReadFile` dan `os.WriteFile`.

### Contoh Kode
```go
package main

import (
	"fmt"
	"os"
)

func main() {
	namaFile := "rahasia.txt"
	teks := "Ini adalah baris rahasia di sistem operasi Anda."

	// 1. MENULIS FILE (Secara keseluruhan, langsung selesai)
	// 0644 adalah perizinan Unix (File Permission: Read/Write untuk owner)
	err := os.WriteFile(namaFile, []byte(teks), 0644)
	if err != nil {
		fmt.Println("Gagal menulis file:", err)
		return
	}
	fmt.Println("File berhasil ditulis!")

	// 2. MEMBACA FILE (Secara keseluruhan)
	dataByte, err := os.ReadFile(namaFile)
	if err != nil {
		fmt.Println("Gagal membaca file:", err)
		return
	}
	// Mengkonversi byte array ke string untuk dicetak
	fmt.Println("Isi File:", string(dataByte))

	// 3. MEMBACA FILE MANUAL SECARA TINGKAT RENDAH (Untuk file besar)
	fileObj, err := os.Open(namaFile)
	if err != nil {
		fmt.Println("Gagal buka file:", err)
		return
	}
	// SELALU PASTIKAN DEFER FILE CLOSE
	defer fileObj.Close()

	info, _ := fileObj.Stat()
	fmt.Printf("Ukuran file: %d byte
", info.Size())
}
```

### Praktik
Eksplorasi utilitas dari *package* `bufio`. Gunakan `bufio.NewScanner(fileObj)` untuk membaca file per baris (berlapis). Teknik ini wajib jika Anda membaca file Log (misal CSV) yang ukurannya mencapai Gigabytes untuk menghemat penggunaan RAM *Memory*.

## Rangkuman
- Gunakan `os.WriteFile` dan `os.ReadFile` untuk skenario file kecil / konfigurasi (semua diload ke dalam RAM sekaligus).
- Gunakan pemrosesan blok dengan `bufio` & `os.Open` + `defer file.Close()` untuk file besar tingkat industri.
