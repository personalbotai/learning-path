# Switch Statement Modern di Go

**ID**: `switch`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Konstruksi **`switch`** di Go jauh lebih fleksibel dan bersih dibandingkan bahasa turunan C tradisional:

1. **Auto Break**: Di Go, setiap `case` otomatis berhenti (*break*) tanpa perlu menulis kata kunci `break` secara manual di akhir blok.
2. **Multiple Values**: Satu baris `case` dapat mencocokkan beberapa nilai sekaligus dipisahkan koma (contoh: `case "senin", "selasa":`).
3. **Conditionless Switch**: `switch` tanpa ekspresi dapat berfungsi sebagai pengganti rantai `if-else if-else` yang panjang dan mudah dibaca.
4. **Type Switch**: Digunakan untuk mengidentifikasi tipe konkret dari sebuah `interface{}`.

### Contoh Kode
```go
package main

import "fmt"

func main() {
    hari := "senin"

    // 1. Value Switch
    switch hari {
    case "senin":
        fmt.Println("Hari kerja dimulai: Semangat!")
    case "jumat":
        fmt.Println("Hampir weekend!")
    case "sabtu", "minggu":
        fmt.Println("Waktu libur akhir pekan.")
    default:
        fmt.Println("Hari kerja reguler.")
    }

    // 2. Conditionless Switch (Clean logic branching)
    nilai := 88
    switch {
    case nilai >= 90:
        fmt.Println("Predikat: Cumlaude")
    case nilai >= 80:
        fmt.Println("Predikat: Sangat Memuaskan")
    default:
        fmt.Println("Predikat: Memuaskan")
    }
}
```

### Praktik
- Jika Anda benar-benar membutuhkan eksekusi berlanjut ke case berikutnya, gunakan kata kunci `fallthrough` secara eksplisit.

## Rangkuman
- `switch` di Go otomatis break per case.
- Conditionless switch membuat evaluasi banyak kondisi logis menjadi sangat rapi.
- Referensi: [Effective Go: Switch](https://go.dev/doc/effective_go#switch)
