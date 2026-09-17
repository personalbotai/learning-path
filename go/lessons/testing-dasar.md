# Unit Testing di Go

**ID**: `testing-dasar`
**Duration**: 25-35 menit

## Materi

### Penjelasan
Go menganggap proses pengujian (*testing*) sebagai warga negara kelas satu (*first-class citizen*). Alih-alih harus menginstal *framework* pengujian yang kompleks seperti Jest (JS) atau JUnit (Java), Go menyediakan *package* standar `testing` dan perintah `go test` yang sudah sangat mumpuni.

Aturan Dasar Testing di Go:
1. File test harus selalu diakhiri dengan **`_test.go`** (misal: `math_test.go`).
2. Fungsi *test* harus diawali dengan kata **`Test`** dengan awalan huruf kapital setelahnya (misal: `TestHitungLuas`).
3. Fungsi *test* menerima parameter *pointer* ke objek testing: `(t *testing.T)`.

Metode penting dari `*testing.T`:
- `t.Errorf()`: Melaporkan bahwa *test* gagal tetapi tetap melanjutkan eksekusi ke *test case* berikutnya.
- `t.Fatalf()`: Melaporkan bahwa *test* gagal dan **langsung menghentikan** eksekusi *test* saat itu juga.

*Table-Driven Tests* adalah *best practice* (standar industri) di Go. Teknik ini menggunakan sebuah himpunan (*slice of struct*) yang mendefinisikan *input* dan *output* yang diharapkan, lalu menjalankannya dalam sebuah kalang (*loop*).

### Contoh Kode

Misalkan Anda memiliki sebuah file logika bisnis `kalkulator.go`:
```go
package main

// Tambah mengembalikan hasil jumlahan a dan b
func Tambah(a, b int) int {
	return a + b
}
```

Maka file *test*-nya, `kalkulator_test.go`, akan tampak seperti ini:
```go
package main

import "testing"

// Standard testing
func TestTambah(t *testing.T) {
	hasil := Tambah(2, 3)
	ekspektasi := 5

	if hasil != ekspektasi {
		t.Errorf("Tambah(2, 3) salah, mendapat %d, seharusnya %d", hasil, ekspektasi)
	}
}

// Standar Industri: Table-Driven Testing
func TestTambahTableDriven(t *testing.T) {
	// Definisikan struktur tabel kasus uji
	testCases := []struct {
		name     string
		inputA   int
		inputB   int
		expected int
	}{
		{"Positif ditambah Positif", 2, 3, 5},
		{"Negatif ditambah Positif", -1, 5, 4},
		{"Nol ditambah Nol", 0, 0, 0},
		{"Negatif ditambah Negatif", -5, -5, -10},
	}

	// Jalankan setiap kasus secara terpisah
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			hasil := Tambah(tc.inputA, tc.inputB)
			if hasil != tc.expected {
				t.Errorf("Test %s gagal: mendapat %d, seharusnya %d", tc.name, hasil, tc.expected)
			}
		})
	}
}
```

**Di Terminal:**
Jalankan perintah ini di dalam direktori proyek Anda:
```bash
go test -v ./...
```
Bendera (flag) `-v` akan memberikan output *verbose* (detail).

### Praktik
1. Buat fungsi baru `Kurang(a, b int)` dan tulis *Table-Driven Test*-nya.
2. Buat satu *test case* di mana hasil ekspektasinya sengaja Anda salahkan, jalankan `go test`, dan lihat bagaimana output *error*-nya ditampilkan.

## Rangkuman
- *Testing* terintegrasi secara mendalam pada ekosistem Go tanpa pihak ketiga.
- Penamaan file harus `_test.go` dan penamaan fungsi dimulai dengan `TestXxx(t *testing.T)`.
- Selalu gunakan *Table-Driven Testing* untuk kasus yang menguji banyak skenario input/output dari sebuah fungsi.
- Referensi: [Package testing - go.dev](https://pkg.go.dev/testing)
