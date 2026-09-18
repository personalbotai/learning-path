# Reflection Dasar

**ID**: `reflection-dasar`
**Duration**: 20-30 menit

## Materi

### Penjelasan
*Reflection* (Refleksi) adalah kemampuan suatu program untuk memeriksa, membongkar struktur, tipe variabel (type-checking di runtime), maupun memodifikasi keadaan objek *saat program sedang berjalan* secara dinamis, menggunakan paket standar `reflect`.

Kemampuan ini umum digunakan untuk membuat fungsi yang melayani beragam input misterius. Contoh konkret di dunia nyata adalah paket `encoding/json` atau kerangka kerja Basis Data (*ORM Database* seperti GORM). Mereka menggunakan fitur *reflection* untuk "melihat" struktur bidang (*struct fields*) Anda, membaca *Struct Tags* nya, lantas menghubungkannya dengan entitas Tabel *Database* secara dinamis.

Terdapat tiga tiang utama paket *reflect*:
1. `reflect.TypeOf(val)`: Mencari tahu Tipe data (Name, Kind, detail struct).
2. `reflect.ValueOf(val)`: Mengambil nilai operasional (Mengizinkan pembaruan nilai variabel jika ia berupa Pointer).
3. **Peringatan Industri:** Operasi dengan refleksi secara signifikan **berjalan lebih lambat (slow overhead)** daripada perulangan kode statis biasa karena lolos dari optimasi masa kompilasi (*compile-time optmizations*). Hanya gunakan pada skenario abstraksi (seperti membuat *library*/framework) dan kurangi di alur bisnis Anda sehari-hari (*business logic flow*).

### Contoh Kode
Berikut ini adalah ilustrasi di mana *Reflection* digunakan untuk mendeteksi *Struct Tag* yang Tuan miliki dan mencetaknya.

```go
package main

import (
	"fmt"
	"reflect"
)

type Konfigurasi struct {
	// Bayangkan validasi otomatis dari sebuah web framework
	ServerURL string `validasi:"wajib" format:"url"`
	BatasWkt  int    `validasi:"opsional" max:"60"`
}

func main() {
	cfg := Konfigurasi{ServerURL: "http://localhost", BatasWkt: 30}

	// 1. Dapatkan Representasi Tipe 
	tipeStruktur := reflect.TypeOf(cfg)
	nilaiStruktur := reflect.ValueOf(cfg)

	fmt.Printf("Menganalisis Tipe Data: %s
", tipeStruktur.Name())
	fmt.Println("-------------------------------")

	// 2. Iterasi / Membedah semua field dalam Struct
	for i := 0; i < tipeStruktur.NumField(); i++ {
		field := tipeStruktur.Field(i)
		isiNilai := nilaiStruktur.Field(i)

		// 3. Mengambil Nilai Tag Kustom
		tagValidasi := field.Tag.Get("validasi")

		fmt.Printf("Nama Field : %s
", field.Name)
		fmt.Printf("Tipe Asli  : %s
", field.Type)
		fmt.Printf("Isi Value  : %v
", isiNilai.Interface())
		fmt.Printf("Aturan Tag : %s
", tagValidasi)
		fmt.Println("-------------------------------")
	}
}
```

### Praktik
Gunakan `reflect.ValueOf()` pada sebuah variabel berjenis Integer (misal `x := 10`). Untuk memodifikasi nilainya dari paket `reflect`, Anda wajib meng-oper *Pointer* (`reflect.ValueOf(&x).Elem()`) dan menggunakan `.SetInt(99)`. Coba terapkan hal yang lumayan rumit namun memukau ini.

## Rangkuman
- *Reflection* menembus pertahanan ketat bahasa *Static Typed*, memberi daya dinamis layaknya skrip (scripting language).
- `reflect.TypeOf` memberi Anda Meta-Data.
- `reflect.ValueOf` memberi Anda akses baca/tulis terhadap data.
- Refleksi rentan *panic* (kesalahan tipe, tidak *pointer*) dan cukup lambat. Gunakan dengan bijaksana.
