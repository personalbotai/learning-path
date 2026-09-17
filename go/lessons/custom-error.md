# Custom Error: Penanganan Error Terstruktur di Go

**ID**: `custom-error`
**Duration**: 20-30 menit

## Materi

### Penjelasan
Di Go, error hanyalah sebuah nilai (*error is just a value*) yang mengimplementasikan interface standar bawaan:
```go
type error interface {
    Error() string
}
```

Untuk aplikasi berskala enterprise, string error sederhana (`fmt.Errorf`) sering kali tidak cukup karena kita membutuhkan *metadata* tambahan seperti HTTP status code, kode error spesifik, atau field validasi. Kita dapat membuat struct kustom yang mengimplementasikan method `Error() string`.

### Contoh Kode
```go
package main

import (
    "errors"
    "fmt"
)

// AppError adalah Custom Error struct
type AppError struct {
    Code    int
    Message string
    Detail  string
}

// Implementasi interface error
func (e *AppError) Error() string {
    return fmt.Sprintf("code %d: %s (detail: %s)", e.Code, e.Message, e.Detail)
}

func findUser(id int) (string, error) {
    if id != 1 {
        return "", &AppError{Code: 404, Message: "not found", Detail: "User ID tidak terdaftar"}
    }
    return "Budi Santoso", nil
}

func main() {
    _, err := findUser(99)
    if err != nil {
        fmt.Println("Standard Error Output:", err.Error())

        // Memeriksa tipe kustom error menggunakan errors.As (Go 1.13+)
        var appErr *AppError
        if errors.As(err, &appErr) {
            fmt.Printf("Terdeteksi AppError -> HTTP Code: %d, Pesan: %s\n", appErr.Code, appErr.Message)
        }
    }
}
```

### Praktik & Best Practice
- Gunakan `errors.As()` dan `errors.Is()` modern untuk membongkar dan memeriksa hierarki error yang dibungkus (*wrapped errors*).

## Rangkuman
- Tipe data apa pun yang memiliki method `Error() string` otomatis merupakan `error`.
- Custom error memberikan kebebasan menyematkan informasi diagnostik terstruktur.
- Referensi: [Working with Errors in Go 1.13](https://go.dev/blog/go1.13-errors)
