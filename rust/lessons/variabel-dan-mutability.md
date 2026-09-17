# Variabel dan Mutability

Di Rust, **semua variabel secara default bersifat immutable (tidak bisa diubah)**.

```rust
let x = 5; // Immutable
// x = 6;  // ERROR! compiler menolak ini
```

Untuk membuat variabel yang bisa diubah nilainya, tambahkan kata kunci `mut`:

```rust
let mut counter = 10;
counter += 1; // Berhasil!
```
