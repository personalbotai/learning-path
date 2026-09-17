# JSON dan Encoding

**ID**: `json-dan-encoding`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Aplikasi modern "bernapas" melalui JSON. API, konfigurasi, komunikasi layanan mikro, semuanya bergantung pada format ini. Package `encoding/json` di Go menyediakan transisi yang sangat mulus antara teks JSON (Byte Slice) ke struktur data asli Go (*Structs*) atau sebaliknya.

- **Marshal** (Encode): Mengubah Struct (atau objek Map) Go menjadi string JSON.
- **Unmarshal** (Decode): Mem-parsing JSON menjadi data Struct Go.

**Struct Tags**
Satu fitur unik Go adalah *Struct Tags*. Ini adalah metadata *string* literal di bagian belakang pendefinisian field di Struct, contohnya `` `json:"nama_field"` ``. Ini memberitahu Go nama spesifik *key* JSON-nya saat terjadi proses (mapping).

### Contoh Kode
```go
package main

import (
	"encoding/json"
	"fmt"
)

// Gunakan huruf kapital agar field-nya bisa di-Export/diakses oleh package json
type Pegawai struct {
	// JSON tag mengatur tampilan nama field ketika dikonversi ke format JSON
	ID       int      `json:"id_pegawai"`
	Nama     string   `json:"nama_lengkap"`
	// omitempty berguna untuk menghilangkan key ini di JSON jika nilainya kosong (0/""/false)
	Gaji     float64  `json:"gaji,omitempty"` 
	Password string   `json:"-"` // "-" mencegah field ini diekspor (disembunyikan)
}

func main() {
	pegawai1 := Pegawai{
		ID:       1001,
		Nama:     "John Gopher",
		Password: "rahasia_super", 
	}

	// 1. MARSHALING (Struct -> JSON Bytes)
	jsonData, err := json.MarshalIndent(pegawai1, "", "  ") // Indentasi agar rapi
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Hasil JSON:")
	fmt.Println(string(jsonData)) // Password menghilang karena disembunyikan tag "-"

	// 2. UNMARSHALING (JSON Bytes -> Struct)
	jsonRaw := []byte(`{"id_pegawai": 2002, "nama_lengkap": "Budi System"}`)
	var pegawaiBaru Pegawai
	
	// Menggunakan pointer untuk menyuntikkan data
	if err := json.Unmarshal(jsonRaw, &pegawaiBaru); err != nil {
		fmt.Println("Error Unmarshal:", err)
	}
	
	fmt.Printf("
Data Terserap - ID: %d, Nama: %s
", pegawaiBaru.ID, pegawaiBaru.Nama)
}
```

### Praktik
Coba buat JSON berisi Array bersarang (misal, setiap Pegawai memiliki `"skills": ["Go", "Docker"]`). Update Struct `Pegawai` Tuan dan lihat betapa pintarnya *Unmarshal* memetakan data bertingkat (Nested) tersebut secara otomatis.

## Rangkuman
- Huruf awal field dari Struct harus Besar (Public/Exported). Jika huruf kecil (private), maka tidak akan pernah tercetak (hilang) dalam JSON.
- Manfaatkan Tag `` `json:"-"` `` untuk merahasiakan field rawan dari pemaparan JSON (*exposure*).
