# Go Modules dan Dependency Management

**ID**: `module-dan-dependency`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Sejak Go 1.11, manajemen pustaka (dependensi eksternal) ditangani secara rapi oleh **Go Modules** (menggantikan ekosistem GOPATH yang lama). 

Go Modules terdiri dari dua file utama (mirip seperti `package.json` dan `package-lock.json` di ekosistem Node.js):
1. **`go.mod`**: Menyimpan identitas proyek Anda dan daftar pustaka yang Anda butuhkan (beserta standar versinya).
2. **`go.sum`**: Disimpan oleh sistem yang memuat checksum kriptografis dari pustaka yang didownload untuk menjamin kode pustaka pihak ketiga tidak dimodifikasi orang jahat (*supply chain security*).

Perintah esensial di terminal:
- `go mod init <nama-module>`: Inisialisasi awal. (Contoh: `go mod init github.com/user/proyek`)
- `go get <url>`: Mendownload *library* pihak ketiga. (Contoh: `go get github.com/gin-gonic/gin`)
- `go mod tidy`: Perintah sapu jagat. Menghapus library yang tidak lagi di-import, dan mengunduh library yang di-import tapi belum ada. Wajib Anda eksekusi secara rutin!

### Contoh Cara Penggunaan

1. Buka Terminal, buat direktori baru dan inisiasi modul:
```bash
mkdir appku
cd appku
go mod init appku
```

2. Tulis kode Anda (misal `main.go`) lalu sertakan paket eksternal (contoh menggunakan `uuid` dari google):
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	id := uuid.New()
	fmt.Println("ID Anda:", id.String())
}
```

3. Pada tahap ini, terminal akan memberikan peringatan bahwa package eksternal hilang. Rapikan dengan Tidy:
```bash
go mod tidy
```
*(Perintah ini akan secara otomatis mencari ke GitHub, mengunduh, menambahkan ke `go.mod`, dan `go.sum` lalu mempersiapkannya).*

4. Jalankan kode!
```bash
go run main.go
```

## Rangkuman
- Gunakan pola penamaan URL Git (contoh `github.com/akun/repo`) saat melakukan `go mod init` jika Anda berencana meng-open-source kan library Anda di masa depan.
- *Best practice* di perusahaan adalah menjalankan `go mod tidy` sebelum melalukan Commit ke Git.
