# Pointer Dasar

**ID**: `pointer-dasar`
**Duration**: 20-30 menit

## Materi

### Penjelasan
*Pointer* adalah variabel yang menyimpan **alamat memori** dari nilai variabel lain, bukan menyimpan nilainya itu sendiri.

Banyak developer (terutama dari JS/Python) merasa takut mendengar kata *pointer* (sebab stigma kerumitan C/C++). Beruntungnya, **Pointer di Go disederhanakan.** Go meniadakan *Pointer Arithmetic* (Anda tidak bisa melakukan memori `pointer++`), sehingga ia 100% aman (memory-safe).

Dua simbol penguasa Pointer:
1. `&` (Ampersand): **Address-of**. Mendapatkan alamat memori dari suatu variabel.
2. `*` (Asterisk): **Dereference**. Mengakses / mengubah nilai asli yang ada di ujung alamat memori tersebut.

Mengapa kita butuh pointer?
- **Pass By Reference**: Mengubah nilai variabel asli dari dalam sebuah fungsi. (Secara default Go mengirim argumen sebagai *Pass by Value* / copy).
- **Efisiensi**: Menghindari proses *copy/paste* data berukuran puluhan Megabyte ke memori saat meneruskannya (*passing*) dari fungsi satu ke fungsi lainnya.

### Contoh Kode
```go
package main

import "fmt"

// Menggunakan Pass by Value (Salinan)
func ubahNamaGagal(nama string) {
	nama = "Alice" 
}

// Menggunakan Pointer (Referensi ke aslinya)
func ubahNamaBerhasil(namaPtr *string) {
	// Dereference untuk mengubah isi alamat memori tersebut
	*namaPtr = "Alice"
}

func main() {
	namaKu := "Budi"
	
	fmt.Println("Awal:", namaKu)
	
	// Tidak akan merubah apa-apa
	ubahNamaGagal(namaKu)
	fmt.Println("Setelah ubahNamaGagal:", namaKu)
	
	// Kita mengirim 'alamat' dari namaKu menggunakan &
	ubahNamaBerhasil(&namaKu)
	fmt.Println("Setelah ubahNamaBerhasil:", namaKu)
}
```

### Praktik
Cobalah untuk me-return sebuah pointer dari dalam fungsi. Misalnya `func BikinUser() *User`. Ini sangat sah di Go, Go secara brilian akan menangani hal ini (*escape analysis*) dan memindahkannya ke *Heap Memory* dengan aman, tidak seperti C++ yang bisa menyebabkan *Dangling Pointer*.

## Rangkuman
- `&x` mencarikan Anda lokasi memori `x`.
- `*x` membiarkan Anda menyentuh apa pun isi lokasi memori yang ditunjuk `x`.
- Gunakan Pointer pada Struct yang besar, atau saat fungsi memang bertugas melakukan mutasi nilai (*mutation*).
