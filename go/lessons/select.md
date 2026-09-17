# Select Statement: Multiplexing Channel di Go

**ID**: `select`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Kata kunci **`select`** di Go memungkinkan sebuah goroutine menunggu (*multiplexing*) operasi komunikasi pada beberapa channel secara bersamaan.

Karakteristik `select`:
1. **Non-blocking Wait**: `select` akan menahan eksekusi sampai salah satu `case` channel siap mengirim atau menerima data.
2. **Pemilihan Acak (Pseudo-random)**: Jika beberapa channel siap bersamaan, `select` akan memilih salah satu secara acak (*fairness*).
3. **Timeout Handling**: Menggabungkan `select` dengan `time.After()` adalah pola standar industri untuk mencegah goroutine hang selamanya.

### Contoh Kode
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    // Goroutine pengirim sinyal
    go func() {
        time.Sleep(50 * time.Millisecond)
        ch1 <- "Pesan dari Channel 1"
    }()

    // Menunggu sinyal tercepat atau batas waktu timeout
    select {
    case msg1 := <-ch1:
        fmt.Println("Menerima:", msg1)
    case msg2 := <-ch2:
        fmt.Println("Menerima:", msg2)
    case <-time.After(100 * time.Millisecond):
        fmt.Println("Waktu tunggu habis (Timeout)!")
    }
}
```

### Praktik & Default Case
- Menambahkan `default:` pada `select` menjadikannya operasi *non-blocking*: jika tidak ada channel yang siap seketika, blok `default` akan langsung dieksekusi.

## Rangkuman
- `select` adalah pengendali lalu lintas channel di Go.
- Pola `case <-time.After()` mencegah kebocoran goroutine akibat deadlock komunikasi.
- Referensi: [A Tour of Go: Select](https://go.dev/tour/concurrency/5)
