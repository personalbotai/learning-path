# Operator Aritmatika, Perbandingan, dan Logika di Go

**ID**: `operator`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Go menyediakan sekumpulan operator standar yang ketat dan aman untuk operasi komputasi data:

1. **Operator Aritmatika**: `+` (tambah), `-` (kurang), `*` (kali), `/` (bagi), `%` (modulus sisa bagi).
2. **Operator Perbandingan**: `==` (sama dengan), `!=` (tidak sama dengan), `<`, `>`, `<=`, `>=`.
3. **Operator Logika Boolean**: `&&` (AND logika), `||` (OR logika), `!` (NOT negasi).
4. **Assignment Operator**: `=`, `+=`, `-=`, `*=`, `/=`.

*Catatan penting*: Go tidak mengizinkan operasi pada tipe data yang berbeda secara implisit (misal menjumlahkan `int` dan `float64` langsung); Anda wajib melakukan konversi tipe eksplisit.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    a, b := 10, 3

    // Operasi Aritmatika
    fmt.Println("a + b =", a+b)
    fmt.Println("a - b =", a-b)
    fmt.Println("a * b =", a*b)
    fmt.Println("a / b =", a/b) // Pembagian integer menghasilkan 3
    fmt.Println("a % b =", a%b) // Modulus menghasilkan 1

    // Operasi Perbandingan
    fmt.Println("a > b? ", a > b)
    fmt.Println("a == b?", a == b)

    // Logika Gabungan
    isValid := (a > 5) && (b < 5)
    fmt.Println("Valid (a>5 AND b<5):", isValid)
}
```

### Praktik
- Di Go, operator increment `i++` dan `i--` adalah sebuah **statement**, bukan ekspresi. Jadi baris seperti `x = i++` adalah error kompilasi ilegal di Go.

## Rangkuman
- Operasi di Go membutuhkan tipe data yang sama persis (eksplisit).
- Operator `++` dan `--` adalah statement mandiri.
- Referensi: [Go Language Specification: Operators](https://go.dev/ref/spec#Operators)
