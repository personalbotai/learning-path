# Mutex & Sinkronisasi Concurrency di Go

**ID**: `mutex-sync`
**Duration**: 25-35 menit

## Materi

### Penjelasan
Saat banyak goroutine mengakses dan memodifikasi data yang sama di memori secara bersamaan, akan terjadi kondisi balapan (**Race Condition** / Data Race) yang menyebabkan kerusakan data.

Untuk mencegahnya, Go menyediakan **`sync.Mutex`** (Mutual Exclusion):
1. **`mu.Lock()`**: Mengunci akses. Hanya satu goroutine yang dapat melewati titik ini; goroutine lain yang mencoba mengunci akan ditahan (*blocked*) sampai kunci dilepas.
2. **`mu.Unlock()`**: Melepas kunci agar goroutine lain yang antre dapat melanjutkan eksekusi.
3. **`sync.RWMutex`**: Mengizinkan banyak pembaca (*reader*) bersamaan, namun hanya satu penulis (*writer*) eksklusif.

### Contoh Kode
```go
package main

import (
    "fmt"
    "sync"
)

func main() {
    var mu sync.Mutex
    counter := 0
    var wg sync.WaitGroup

    // Menjalankan 100 goroutine yang masing-masing menambah counter
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()

            mu.Lock()         // Kunci akses eksklusif
            counter++         // Modifikasi data bersama (Critical Section)
            mu.Unlock()       // Lepas kunci
        }()
    }

    wg.Wait()
    fmt.Println("Hasil akhir counter (safe):", counter) // Pasti tepat 100
}
```

### Praktik & Deteksi Race Condition
- Selalu uji kode konkurensi Anda dengan tool pendeteksi bawaan Go:
  `go test -race` atau `go run -race main.go`.

## Rangkuman
- Gunakan `sync.Mutex` untuk melindungi data bersama dari kerusakan data race.
- Pastikan setiap `Lock()` selalu dipasangkan dengan `Unlock()`.
- Referensi: [Go Data Race Detector](https://go.dev/doc/articles/race_detector)
