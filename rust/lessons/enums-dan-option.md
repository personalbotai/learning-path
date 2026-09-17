# Enums & Option di Rust

Rust menggantikan konsep `null` dengan enum standar: **`Option<T>`**:

```rust
enum Option<T> {
    Some(T),
    None,
}
```
