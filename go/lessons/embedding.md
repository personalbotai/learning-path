# Struct Embedding: Komposisi Idiomatik di Go

**ID**: `embedding`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Go **tidak memiliki sistem inheritance (pewarisan kelas `extends`)**. Sebagai penggantinya, Go menggunakan konsep **Struct Embedding** (komposisi bertingkat) yang jauh lebih fleksibel dan modular.

Ketika sebuah struct di-embed ke dalam struct lain tanpa nama field:
1. Seluruh field dan method dari inner struct secara otomatis **terangkat (promoted)** ke outer struct.
2. Outer struct dapat langsung memanggil method atau field inner struct secara langsung seolah miliknya sendiri.
3. Outer struct dapat melakukan *override* (menimpa) method jika dibutuhkan.

### Contoh Kode
```go
package main

import "fmt"

type Animal struct {
    Name string
}

func (a Animal) Speak() {
    fmt.Println(a.Name, "bersuara...")
}

// Dog meng-embed Animal (komposisi, bukan inheritance)
type Dog struct {
    Animal // Embedded anonymous field
    Breed  string
}

func main() {
    // Inisialisasi
    d := Dog{
        Animal: Animal{Name: "Bruno"},
        Breed:  "Bulldog",
    }

    // Method Speak() dipromosikan otomatis ke d
    d.Speak() // Memanggil Animal.Speak() secara langsung

    // Akses field langsung
    fmt.Printf("Nama Anjing: %s, Ras: %s\n", d.Name, d.Breed)
}
```

### Praktik & Keunggulan Desain
- Embedding memungkinkan pembuatan struktur hierarkis tanpa *tight-coupling* yang sering kali menjadi masalah dalam inheritance tradisional.

## Rangkuman
- Go mengadopsi prinsip *composition over inheritance*.
- Struct Embedding mempromosikan seluruh properti dan method inner struct ke wrapper struct.
- Referensi: [Effective Go: Embedding](https://go.dev/doc/effective_go#embedding)
