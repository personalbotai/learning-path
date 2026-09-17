# Tipe Data Dasar & Zero Values di Go

**ID**: `tipe-data-dasar`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Go adalah bahasa yang **statically typed** (tipe data diperiksa pada saat kompilasi) dan **strongly typed** (tidak ada konversi tipe otomatis).

Kategori Tipe Data Primitif di Go:
1. **Boolean**: `bool` (`true`, `false`).
2. **String**: `string` (kumpulan byte UTF-8 immutable yang diapit tanda kutip ganda `"..."` atau backtick ``...``).
3. **Numeric Integer**:
   - Berdasarkan ukuran: `int8`, `int16`, `int32`, `int64`, `uint8` (alias `byte`), `uint16`, `uint32`, `uint64`.
   - Platform-dependent: `int` dan `uint` (32-bit atau 64-bit sesuai arsitektur mesin).
4. **Numeric Floating Point & Complex**: `float32`, `float64`, `complex64`, `complex128`.

### Zero Values (Nilai Bawaan)
Di Go, variabel yang dideklarasikan tanpa inisialisasi awal dijamin aman dan memiliki **Zero Value**:
- `0` untuk semua tipe numerik integer & float.
- `false` untuk tipe boolean.
- `""` (string kosong) untuk tipe string.
- `nil` untuk pointer, slice, map, channel, dan interface.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    var s string = "Go"
    var i int = 42
    var f float64 = 3.14159
    var b bool = true

    // Format %T mencetak tipe data, %v mencetak nilai
    fmt.Printf("%T: %v\n", s, s)
    fmt.Printf("%T: %v\n", i, i)
    fmt.Printf("%T: %v\n", f, f)
    fmt.Printf("%T: %v\n", b, b)

    // Demonstrasi zero values
    var defaultInt int
    var defaultStr string
    var defaultBool bool
    fmt.Printf("Zero Values -> int:[%d] string:[%s] bool:[%t]\n", defaultInt, defaultStr, defaultBool)
}
```

### Praktik
- Selalu gunakan `int` untuk integer umum dan `float64` untuk bilangan berkoma kecuali jika memori sangat dibatasi (misal format binary wire protocol).

## Rangkuman
- Tipe data di Go ditentukan dan diperiksa secara ketat saat kompilasi.
- Variabel selalu diinisialisasi ke zero value yang aman.
- Referensi: [A Tour of Go: Basic types](https://go.dev/tour/basics/11)
