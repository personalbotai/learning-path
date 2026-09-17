# Error Handling

Recoverable errors ditangani dengan enum **`Result<T, E>`**:

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Operator `?` meneruskan error secara otomatis jika bernilai `Err`.
