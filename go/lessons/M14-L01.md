# HTTP Server Dasar

**ID**: `http-server-dasar`
**Duration**: 25-30 menit

## Materi

### Penjelasan
Paket `net/http` adalah fitur unggulan mengapa Go dipuja oleh komunitas komputasi awan. Lewat modul ini, Anda dapat merakit peladen Web (Web Server) berkonkurensi tinggi dan siap-produksi (*production-ready*) tanpa memerlukan instalasi Nginx, Apache, atau paket semacam Express.js.

Setiap HTTP Request ke *server* ditangani oleh Go di sebuah **Goroutine yang terpisah** secara paralel secara otomatis! Itulah sebabnya server Go sangat menakjubkan dalam menangani antrean volume lalu lintas web (high throughput).

Dua instrumen utama `net/http` pada sisi peladen (server-side):
1. `http.ResponseWriter`: Objek di mana kita merakit dan menulis jawaban (Body HTML/JSON dan Status HTTP 200/404) untuk dikirim ke *browser* atau aplikasi klien.
2. `*http.Request`: Struct yang menyimpan seluruh informasi dari klien masuk (URL, Body, Header, Parameter).

### Contoh Kode
```go
package main

import (
	"fmt"
	"net/http"
)

// Handler fungsi untuk root (Beranda)
func berandaHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		// Mengembalikan error HTTP Not Found jika diakses di url aneh
		http.NotFound(w, r)
		return
	}
	fmt.Fprintln(w, "Selamat Datang di Server Web Go Tingkat Rendah!")
}

// Handler fungsi untuk endpoint /api/ping
func pingHandler(w http.ResponseWriter, r *http.Request) {
	// Membatasi agar hanya melayani Method GET (Bukan POST/PUT)
	if r.Method != http.MethodGet {
		http.Error(w, "Metode Tidak Diizinkan", http.StatusMethodNotAllowed)
		return
	}
	
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status": "OK", "layanan": "Aktif"}`))
}

func main() {
	// Routing Dasar (Mengikat jalur URL ke sebuah fungsi)
	http.HandleFunc("/", berandaHandler)
	http.HandleFunc("/api/ping", pingHandler)

	fmt.Println("Server mengudara! Buka http://localhost:8080 di browser...")
	
	// Menahan eksekusi (Memblok) dan melayani permintaan masuk di port 8080
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Gagal memulai server web: %v
", err)
	}
}
```

### Praktik
Jika Anda mengakses kode di atas, Anda akan melihat Server menyala. Hentikan (Ctrl+C). Tantang diri Anda: buatlah *Handler* baru bernama `htmlHandler` yang merespons ke alamat `/web`, di mana kembalian data stringnya (`fmt.Fprintln(w, "<h1>Bisa pakai HTML lho</h1>")`) dirender menjadi cetak tebal (Header 1) oleh peramban (*browser*).

## Rangkuman
- Modul `net/http` pada dasarnya adalah *"batteries included"* di ekosistem Backend Go.
- `http.ListenAndServe` adalah perintah kunci (blocking operation) untuk memutar mesin server asinkron Anda.
- Selalu patuhi validasi *Method* dan penyesuaian Header seperti penentuan konten (Content-Type) demi standar API tingkat lanjut.
