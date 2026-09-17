# Struct dan Method

**ID**: `struct-dan-method`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go **bukan** bahasa *Object Oriented Programming* (OOP) konvensional. Go tidak memiliki *Class*, *Inheritance* (pewarisan), atau kata kunci `this` dan `super`. 

Alih-alih *Class*, Go menggunakan **Struct** (kumpulan field ber-tipe data). 
Dan Anda bisa menempelkan "Method" pada *Struct* tersebut menggunakan konsep **Receiver Function**.

Ada dua jenis *Receiver*:
1. **Value Receiver** `(s Struct)`: Beroperasi pada *salinan* (copy) dari struct tersebut. Modifikasi pada *field* tidak akan mengubah objek aslinya.
2. **Pointer Receiver** `(s *Struct)`: Beroperasi pada memori aslinya. **Wajib** digunakan jika *method* tersebut bertugas mengubah nilai internal *Struct*, atau jika struktur datanya sangat besar untuk menghindari beban menyalin memori. 

*(Aturan umum industri: Gunakan Pointer Receiver untuk sebagian besar method agar konsisten).*

### Contoh Kode
```go
package main

import "fmt"

// 1. Deklarasi Struct
type Pengguna struct {
	ID    int
	Nama  string
	Email string
}

// 2. Method dengan Value Receiver (Hanya untuk read/cetak)
// (p Pengguna) di antara func dan nama fungsi adalah deklarasi receiver.
func (p Pengguna) TampilkanProfil() {
	fmt.Printf("[%d] %s (%s)
", p.ID, p.Nama, p.Email)
}

// 3. Method dengan Pointer Receiver (Bisa memodifikasi data asli)
func (p *Pengguna) GantiEmail(emailBaru string) {
	p.Email = emailBaru
}

func main() {
	// Inisialisasi struct
	user1 := Pengguna{
		ID:    1,
		Nama:  "Gopher",
		Email: "gopher@golang.org",
	}

	user1.TampilkanProfil()

	// Memanggil pointer receiver
	user1.GantiEmail("super.gopher@google.com")
	
	fmt.Println("Setelah diubah:")
	user1.TampilkanProfil()
}
```

### Praktik
Buat struct `Keranjang` yang memiliki *slice* of `string` (daftar belanja). Buat *Pointer Receiver Method* `TambahBarang(nama string)` untuk meng-`append` barang ke keranjang tersebut.

## Rangkuman
- Struct di Go adalah komposit (*composite*) data untuk merepresentasikan entitas.
- Tidak ada kata sandi `this`. Anda memberi nama variabel bebas di bagian *receiver* (biasanya disingkat dengan 1 atau 2 huruf depan, misal `(p *Pengguna)`).
- Mayoritas *method* di aplikasi tingkat korporat akan menggunakan *Pointer Receiver* `(*Struct)` demi performa dan kemampuan merubah nilai (mutabilitas).
