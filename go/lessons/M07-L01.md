# Error Handling di Go

**ID**: `error-handling`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go terkenal dengan pendekatannya yang lugas, *verbose*, dan eksplisit terhadap penanganan *error*. Go tidak memiliki `try/catch/finally`. 

Di Go, *error* adalah sekadar **nilai (value)** biasa yang mengimplementasikan antarmuka (*interface*) bawaan bernama `error`.
Oleh sebab itu, pengecekan `if err != nil` adalah frasa paling sering Anda temui dalam kode Go. Ini memaksa developer (secara arsitektural) untuk mengatasi setiap potensi kegagalan tepat pada baris kode terjadinya, bukannya melempar exception sejauh mungkin.

Mulai Go versi 1.13, Go menghadirkan fitur *Error Wrapping* menggunakan fungsi `errors.Is` dan `errors.As` yang mempermudah pelacakan rantai error (*stack chain*).

### Contoh Kode
```go
package main

import (
	"errors"
	"fmt"
)

// Membuat custom error global (Sentinel Error)
var ErrSaldoTidakCukup = errors.New("transaksi gagal: saldo tidak mencukupi")
var ErrAkunDiblokir = errors.New("transaksi gagal: akun telah diblokir")

func TarikTunai(saldo int, jumlah int, isBlokir bool) (int, error) {
	if isBlokir {
		// Mengembalikan error yang sudah didefinisikan
		return saldo, ErrAkunDiblokir
	}
	
	if saldo < jumlah {
		// Mengembalikan error dinamis dengan formatting menggunakan fmt.Errorf
		// "%w" digunakan untuk ME-WRAP (membungkus) error aslinya!
		return saldo, fmt.Errorf("anda minta %d: %w", jumlah, ErrSaldoTidakCukup)
	}

	return saldo - jumlah, nil
}

func main() {
	sisa, err := TarikTunai(50000, 100000, false)
	
	if err != nil {
		// Menggunakan errors.Is untuk mengecek apakah di dalam rantai error ini 
		// terdapat tipe ErrSaldoTidakCukup (Sangat bermanfaat dalam production!)
		if errors.Is(err, ErrSaldoTidakCukup) {
			fmt.Println("SISTEM: Mohon top-up saldo Anda segera.")
		}
		fmt.Printf("Log Error Sistem: %v
", err)
	} else {
		fmt.Printf("Tarik tunai sukses, sisa saldo: %d
", sisa)
	}
}
```

### Praktik
Ketik program sederhana yang membaca nilai pembagian (pembilang dan penyebut). Cek jika penyebutnya bernilai `0`. Buat fungsi mengembalikan *error* custom menggunakan `errors.New()`. 

## Rangkuman
- Di Go, *Errors are values*.
- Sering-sering gunakan `fmt.Errorf("gagal ambil data db: %w", err)` untuk memberikan konteks yang jelas pada error tanpa merusak tipe aslinya.
- Tangani error sesegera mungkin di setiap fungsi, jangan diabaikan (menggunakan `_`).
