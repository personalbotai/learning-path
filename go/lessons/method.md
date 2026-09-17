# Method: Receiver Function pada Struct

**ID**: `method`
**Duration**: 20-25 menit

## Materi

### Penjelasan
**Method** di Go adalah fungsi biasa yang memiliki parameter khusus yang disebut **Receiver**. Receiver mengikat fungsi tersebut ke tipe data tertentu (biasanya struct).

Dua tipe Receiver di Go:
1. **Value Receiver `(t Type)`**: Method menerima salinan dari struct. Perubahan nilai field di dalam method **tidak mengubah** nilai variabel asli pemanggil.
2. **Pointer Receiver `(t *Type)`**: Method menerima pointer referensi ke struct asli. Perubahan field akan langsung **mengubah nilai variabel asli**, dan menghindari alokasi copy struct besar di memori.

### Contoh Kode
```go
package main

import "fmt"

type Counter struct {
    count int
}

// Value Receiver: Hanya membaca nilai
func (c Counter) Get() int {
    return c.count
}

// Pointer Receiver: Memutasi state objek asli
func (c *Counter) Inc() {
    c.count++
}

func (c *Counter) Reset() {
    c.count = 0
}

func main() {
    c := &Counter{}
    c.Inc()
    c.Inc()
    fmt.Println("Counter saat ini:", c.Get()) // Output: 2

    c.Reset()
    fmt.Println("Counter setelah reset:", c.Get()) // Output: 0
}
```

### Praktik & Best Practice
- **Konsistensi**: Jika salah satu method pada sebuah struct membutuhkan *pointer receiver*, jadikan semua method pada tipe tersebut memakai *pointer receiver*.
- Gunakan pointer receiver jika struct berukuran besar untuk performa yang optimal.

## Rangkuman
- Method adalah fungsi ber-receiver yang menempel pada tipe struct.
- Gunakan `(r *T)` untuk memodifikasi struct atau menghindari penyalinan memori yang boros.
- Referensi: [Effective Go: Methods](https://go.dev/doc/effective_go#methods)
