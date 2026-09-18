# Slices di Rust

*Slice* adalah referensi ke rangkaian elemen berurutan dalam koleksi tanpa menyalin datanya.

```rust
let s = String::from("hello world");
let hello: &str = &s[0..5];
```
