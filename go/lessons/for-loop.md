# For Loop: Kontrol Perulangan Komprehensif di Go

**ID**: `for-loop`
**Duration**: 15-20 menit

## Materi

### Penjelasan
Di Go, **`for`** adalah satu-satunya konstruksi perulangan. Go secara sengaja tidak menyertakan kata kunci `while` atau `do-while` untuk menjaga kesederhanaan sintaksis.

Empat bentuk variasi `for` di Go:
1. **Three-Component Loop**: Bentuk standar C-style: `for init; condition; post {}`.
2. **While-style Loop**: Hanya memeriksa kondisi: `for condition {}`.
3. **Infinite Loop**: Perulangan tanpa henti: `for {}` (berhenti via `break` atau `return`).
4. **Range Loop (Go 1.22+)**: Mengiterasi slice, map, string, atau langsung range integer (`for i := range 5`).

### Contoh Kode
```go
package main

import "fmt"

func main() {
    // 1. Standard Three-component for loop
    fmt.Print("Standard loop: ")
    for i := 1; i <= 5; i++ {
        fmt.Printf("%d ", i)
    }
    fmt.Println()

    // 2. While-style loop
    count := 3
    fmt.Print("While-style loop: ")
    for count > 0 {
        fmt.Printf("%d ", count)
        count--
    }
    fmt.Println()

    // 3. Go 1.22+ Range-over-integer feature
    fmt.Print("Go 1.22 range integer: ")
    for n := range 4 { // Iterasi dari 0 sampai 3
        fmt.Printf("%d ", n)
    }
    fmt.Println()
}
```

### Praktik
- Sejak Go 1.22, variabel loop pada setiap iterasi dibuat terisolasi per iterasi, memecahkan bug klasik goroutine di dalam loop closure.

## Rangkuman
- Semua pola perulangan di Go diselesaikan dengan kata kunci `for`.
- Go 1.22 memperkenalkan iterasi langsung pada angka integer (`for i := range N`).
- Referensi: [Effective Go: For loop](https://go.dev/doc/effective_go#for)
