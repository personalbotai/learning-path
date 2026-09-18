# References & Borrowing

Meminjam (*borrow*) nilai menggunakan referensi (`&`).

## Aturan Borrowing:
1. Boleh memiliki banyak referensi immutable (`&T`), ATAU
2. Tepat satu referensi mutable (`&mut T`) pada satu waktu.
3. Referensi harus selalu valid (tidak boleh dangling).
