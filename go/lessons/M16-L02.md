# Membuat REST API

**ID**: `rest-api-project`
**Duration**: 45-60 menit

## Materi

### Penjelasan
Aplikasi *backend* dengan arsitektur RESTful API adalah lingkungan operasi (habitat) asli Go saat ini. Standar fungsional Go untuk perihal *web service* sangatlah kuat, hingga dalam banyak situasi industri nyata, Go dirasa tidak membutuhkan *framework* besar seperti Django/Laravel/Spring, melainkan cukup memanfaatkan `net/http` bawaannya dengan disandingkan bersama pemilah rute (router) tipis.

Dalam membuat HTTP API JSON yang berlandaskan standar modern:
1. Strukturkan format respon JSON (*Response Serialization*).
2. Tentukan jalur rute HTTP dan fungsi penangan (*HTTP Handler*).
3. Jalankan HTTP server terintegrasinya.

Mulai Go versi 1.22, *router* bawaan standar `net/http` mendapatkan perombakan masif. Kini secara alamiah mendukung pencocokan metode HTTP (HTTP Method seperti GET, POST, DELETE) beserta variabel jalur di URL (URL Path wildcard vars), membuatnya nyaris menyaingi fungsionalitas populer seperti _Gin_ atau _Chi_.

### Contoh Kode

Program di bawah ini membuat REST API mini berbasis RAM (In-Memory) untuk manajemen Data Artikel tanpa menggunakan pihak ketiga/framework.

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync"
)

// 1. Mendefinisikan Struktur Data
type Artikel struct {
	ID      string `json:"id"`
	Judul   string `json:"judul"`
	Konten  string `json:"konten"`
}

// Basis data In-Memory yang thread-safe menggunakan Mutex
var (
	artikelDB = make(map[string]Artikel)
	mu        sync.RWMutex
)

// 2. Handler untuk GET Semua Artikel
func dapatkanArtikel(w http.ResponseWriter, r *http.Request) {
	mu.RLock()
	defer mu.RUnlock()

	var daftar []Artikel
	for _, a := range artikelDB {
		daftar = append(daftar, a)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(daftar)
}

// 3. Handler untuk POST Artikel Baru
func buatArtikel(w http.ResponseWriter, r *http.Request) {
	var artikelBaru Artikel
	
	// Dekoding JSON (mengubah Body request JSON menjadi Struct Go)
	if err := json.NewDecoder(r.Body).Decode(&artikelBaru); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Menyimpan ke database in-memory secara asinkron-aman
	mu.Lock()
	artikelDB[artikelBaru.ID] = artikelBaru
	mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated) // HTTP 201
	json.NewEncoder(w).Encode(artikelBaru)
}

func main() {
	// Membuat router standar Go (Multiplexer)
	mux := http.NewServeMux()

	// Mulai Go 1.22+, Router Bawaan mendeteksi Pola Metode (GET/POST) 
	mux.HandleFunc("GET /artikel", dapatkanArtikel)
	mux.HandleFunc("POST /artikel", buatArtikel)

	// Inisialisasi Data Dummy
	artikelDB["1"] = Artikel{ID: "1", Judul: "Go untuk Backend", Konten: "Sangat Cepat."}

	fmt.Println("Server REST API berjalan di http://localhost:8080")
	// Menjalankan HTTP Server, mengikat pada port 8080
	if err := http.ListenAndServe(":8080", mux); err != nil {
		fmt.Printf("Gagal memulai server: %s
", err)
	}
}
```

**Uji melalui Terminal menggunakan cURL:**
```bash
# Menampilkan Artikel (GET)
curl -X GET http://localhost:8080/artikel

# Membuat Artikel Baru (POST)
curl -X POST http://localhost:8080/artikel      -H "Content-Type: application/json"      -d '{"id": "2", "judul": "API itu Mudah", "konten": "Dengan standard library!"}'
```

### Praktik
Kembangkan Endpoint `GET /artikel/{id}` pada router di atas yang dapat digunakan untuk mencari dan mengembalikan JSON dari suatu `Artikel` berdasarkan `ID` tunggal.
_Petunjuk: pada Go 1.22, Anda bisa mengambil parameter Path URL tersebut menggunakan `r.PathValue("id")`_.

## Rangkuman
- *Library* bawaan `net/http` sudah sangat tangguh (kualitas *production* langsung).
- Paket `encoding/json` menangani pende-kode-an (*decoding* request body) maupun pengodean (*encoding* response structure) JSON.
- Sangat penting memikirkan *Thread-Safety* (contoh: `sync.Mutex`) saat melayani memori persisten di *backend* Go karena handler API dieksekusi dalam goroutine berbeda secara serempak/konkuren.
- Referensi: [Routing Enhancements for Go 1.22](https://go.dev/blog/routing-enhancements)
