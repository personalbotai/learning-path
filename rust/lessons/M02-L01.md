# Sistem Ownership di Rust

Ownership menjamin keamanan memori tanpa garbage collector.

## Tiga Aturan Emas Ownership:
1. Setiap nilai di Rust memiliki satu pemilik (*owner*).
2. Hanya boleh ada satu owner pada satu waktu.
3. Ketika owner keluar dari scope (`}`), nilai tersebut otomatis dibersihkan (*dropped*).
