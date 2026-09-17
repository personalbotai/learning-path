# Switch dan Select Statement

**ID**: `switch-dan-select`
**Duration**: 15-20 menit

## Materi

### Penjelasan
**1. Switch**
Pengkondisian menggunakan `switch` di Go jauh lebih aman dan bersih dibandingkan di C atau Java. Mengapa? 
- **Tidak butuh `break`**: Di Go, eksekusi akan otomatis berhenti setelah sebuah *case* terpenuhi. Anda tidak akan pernah mengalami bug *fall-through* karena lupa menulis `break`.
- **Kondisi Dinamis**: Anda bisa menggunakan `switch` tanpa variabel awal, membuatnya berfungsi seperti deretan `if-else` yang rapi.

**2. Select**
Go memiliki sepupu *switch* bernama `select`. Jika *switch* digunakan untuk menguji nilai variabel, **`select` khusus digunakan untuk operasi channel dan concurrency**.

### Contoh Kode
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	// 1. Switch biasa (Otomatis break)
	sistem := "macOS"
	switch sistem {
	case "windows":
		fmt.Println("Pakai `.exe`")
	case "macOS", "linux": // Bisa menumpuk beberapa kondisi
		fmt.Println("Berbasis Unix")
	default:
		fmt.Println("OS tidak dikenal")
	}

	// 2. Switch tanpa variabel (Pengganti if-else panjang)
	jam := time.Now().Hour()
	switch { // Mirip 'switch true'
	case jam < 12:
		fmt.Println("Selamat Pagi")
	case jam < 18:
		fmt.Println("Selamat Siang")
	default:
		fmt.Println("Selamat Malam")
	}
}
```

### Praktik
Jika Anda secara spesifik *ingin* eksekusi turun ke *case* di bawahnya meskipun *case* saat ini sudah terpenuhi, cobalah letakkan *keyword* `fallthrough` di akhir salah satu blok `case`. Lihat apa yang terjadi!

## Rangkuman
- `switch` di Go secara otomatis `break`.
- Beberapa *case* dapat digabungkan dengan koma.
- Gunakan `switch {}` tanpa ekspresi sebagai alternatif yang lebih bersih dari `if-else if-else`.
