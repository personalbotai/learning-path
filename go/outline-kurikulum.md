# Outline Kurikulum Go Learning Path — 60 Pelajaran (10 Modul × 6 Pelajaran)

> Siap diubah ke JSON. Setiap pelajaran: Judul | Materi Inti (2-3 poin) | Snippet Go Interaktif | Quiz Teknis.

---

## MODUL 1: Fondasi Bahasa Go (Bahasa & Ekosistem)

### Pelajaran 1.1 — Sejarah Go dan Filosofi Desain Bahasa
- **Materi Inti:**
  1. Asal mula Go (2009, Robert Griesemer, Rob Pike, Ken Thompson) dan masalah yang diatasi (kompleksitas C++, lambat build)
  2. Filosofi desain: kesederhanaan, keterbacaan, konvensi > konfigurasi
  3. Ekosistem Go saat ini: Go 1.22+, tooling (go vet, go fmt, gopls), dan komunitas
- **Snippet Interaktif:** Jalankan `go version`, `go env`, dan `gofmt -d` pada file dengan indentasi campuran untuk merasakan tooling bawaan
- **Quiz Teknis:** Apa perbedaan antara `go run`, `go build`, dan `go install`? Sebutkan 3 filosofi desain inti Go.

### Pelajaran 1.2 — Workspace, Module, dan Struktur Proyek
- **Materi Inti:**
  1. GOPATH vs modul: penjelasan `go.mod`, `go.sum`, dan semantic import versioning
  2. Struktur folder standar: `cmd/`, `internal/`, `pkg/`, `api/`, `web/`
  3. Inisialisasi modul: `go mod init`, `go mod tidy`, dan mengelola dependensi
- **Snippet Interaktif:** Buat modul baru `hello-go`, tambahkan fungsi `main()` yang print "Hello, Go!", lalu build dan jalankan
- **Quiz Teknis:** Apa fungsi file `go.sum`? Apa perbedaan antara paket `internal` dan `pkg`?

### Pelajaran 1.3 — Variabel, Konstanta, dan Tipe Dasar
- **Materi Inti:**
  1. Deklarasi variabel: `var`, inferensi tipe (`:=`), dan short declaration
  2. Tipe dasar: `int`, `float64`, `string`, `bool`, `byte`, `rune`
  3. Konstanta: `const`, `iota` (enumerasi), dan untyped constants
- **Snippet Interaktif:** Deklarasikan variabel dengan berbagai tipe, gunakan `iota` untuk membuat konstanta bulan (Januari=1...Desember=12), print semuanya
- **Quiz Teknis:** Apa bedanya `var x = 5` dan `x := 5`? Apa tipe default untuk literal integer tanpa spesifikasi?

### Pelajaran 1.4 — Operator dan Ekspresi
- **Materi Inti:**
  1. Operator aritmatika, relasional, dan logika
  2. Operator bitwise: `&`, `|`, `^`, `<<`, `>>`
  3. Operator assignment majemuk (`+=`, `&=`, dll.) dan precedence
- **Snippet Interaktif:** Tulis kalkulator sederhana yang menerima 2 angka dan operator, gunakan switch pada operator untuk menghitung hasil
- **Quiz Teknis:** Apa hasil dari `3 << 2`? Apa perbedaan `==` dan `:=`? Apa output dari `!true && (2+2 == 4)`?

### Pelajaran 1.5 — Input/Output Sederhana dan Formatting
- **Materi Inti:**
  1. `fmt.Print`, `fmt.Println`, `fmt.Printf` dan `fmt.Scan`
  2. Verb format: `%d`, `%s`, `%f`, `%v`, `%q`, `%t`
  3. `strings` dan `strconv` packages untuk manipulasi string dasar
- **Snippet Interaktif:** Program yang membaca nama dan umur dari stdin, lalu mencetak greeting terformat: "Halo [nama], umurmu [umur] tahun"
- **Quiz Teknis:** Apa bedanya `%v` dan `%+v` dalam `fmt.Printf`? Verb format apa yang digunakan untuk membaca input integer?

### Pelajaran 1.6 — Comments, Dokumentasi, dan Code Style
- **Materi Inti:**
  1. Single-line `//` dan multi-line `/* */` comments
  2. Doc comments (`// FunctionName ...`) dan generator dokumen `godoc`
  3. Go Proverbs: "Clear is better than clever", Go fmt rules, dan effective Go guidelines
- **Snippet Interaktif:** Tulis fungsi dengan doc comment yang baik, generate godoc, dan bandingkan dengan kode tanpa dokumentasi
- **Quiz Teknis:** Apa itu "effective Go"? Apa tujuan utama `go vet`? Bagaimana cara menghasilkan dokumentasi dari kode Go?

---

## MODUL 2: Struktur Kontrol & Alur Program

### Pelajaran 2.1 — If, Else If, Else
- **Materi Inti:**
  1. Sintaks if/else if/else dan blok inisialisasi di dalam if (`if x := 5; x > 3`)
  2. Nested if dan best practice menghindari deep nesting
  3. Truthy/falsy: Go tidak mengizinkan non-boolean dalam kondisi
- **Snippet Interaktif:** Program klasifikasi nilai (A/B/C/D/F) menggunakan if-else chain dengan blok inisialisasi variabel
- **Quiz Teknis:** Apa output dari `if x := 10; x > 5 { fmt.Println("Besar") } else { fmt.Println("Kecil") }`? Bisakah `if x > 5` di Go tanpa tipe eksplisit?

### Pelajaran 2.2 — Switch Statement
- **Materi Inti:**
  1. Switch ekspresi (berdasarkan nilai) dan switch type switch (`switch v.(type)`)
  2. Fallthrough behavior (berbeda dengan C/Java) dan `default` case
  3. Case tanpa ekspresi: `switch { case cond1: ... }` sebagai if-else chain
- **Snippet Interaktif:** Program evaluasi hari dalam minggu (menggunakan `time.Day.String()`) dengan switch, termasuk weekend detection
- **Quiz Teknis:** Apa bedanya `break` dalam switch Go vs C? Apa itu type switch dan kapan digunakan?

### Pelajaran 2.3 — For Loop (Satu-satunya Loop)
- **Materi Inti:**
  1. Three-part for: `for i := 0; i < n; i++`
  2. While-style: `for condition { ... }` dan infinite loop: `for { ... }`
  3. `break`, `continue`, dan `goto` (penggunaan terbatas)
- **Snippet Interaktif:** Implementasikan FizzBuzz (1-100): kelipatan 3 → "Fizz", kelipatan 5 → "Buzz", keduanya → "FizzBuzz"
- **Quiz Teknis:** Apa output dari `for i := 0; i < 3; i++ { fmt.Print(i) }`? Apakah Go memiliki `while` keyword?

### Pelajaran 2.4 — Range dan Iterasi Koleksi
- **Materi Inti:**
  1. `range` pada slice: `for i, v := range slice`
  2. `range` pada map: `for k, v := range map`
  3. `range` pada string (byte vs rune untuk Unicode) dan `_` untuk mengabaikan index/value
- **Snippet Interaktif:** Hitung frekuensi karakter dalam string "go语言真有趣" menggunakan map dan range, tangani Unicode dengan benar
- **Quiz Teknis:** Apa yang dikembalikan `range` pada string secara default (byte atau rune)? Bagaimana cara mengabaikan index saat range?

### Pelajaran 2.5 — Defer, Panic, dan Recover
- **Materi Inti:**
  1. `defer` untuk eksekusi terlambat (LIFO order), penggunaan umum: resource cleanup
  2. `panic` untuk kesalahan fatal dan `recover` untuk menangkap panic
- **Snippet Interaktif:** Tulis fungsi yang membuka file, defer close, dan tunjukkan LIFO defer dengan 3 defer statement. Tambahkan recover untuk handle panic
- **Quiz Teknis:** Dalam urutan apa defer dieksekusi? Apa perbedaan panic dan error dalam Go? Bisakah recover menangkap panic di fungsi lain?

### Pelajaran 2.6 — Pattern Matching dengan Select
- **Materi Inti:**
  1. `select` untuk multiplexing channel operations
  2. `select` dengan `default` untuk non-blocking operations
  3. Timeout handling dengan `select` dan `time.After`
- **Snippet Interaktif:** Simulasikan request dengan 3 channel (API 1, API 2, API 3) dan gunakan select untuk menerima respons pertama yang tersedia
- **Quiz Teknis:** Apa yang terjadi jika beberapa channel siap dalam select? Bagaimana cara membuat channel operation non-blocking?

---

## MODUL 3: Fungsi, Closures & Method

### Pelajaran 3.1 — Deklarasi dan Pemanggilan Fungsi
- **Materi Inti:**
  1. Sintaks fungsi: `func nama(param tipe) tipeKembalian { ... }`
  2. Multiple return values dan named return values
  3. Variadic functions: `func variadic(nums ...int)` dan spread `...`
- **Snippet Interaktif:** Buat fungsi `hitung(a, b int) (jumlah, selisih, hasilBagi int, sisa int)` dan fungsi variadic `rataRata(angles ...float64)`
- **Quiz Teknis:** Apa itu variadic function? Bagaimana cara mendefinisikan named return values? Apa sintaks untuk fungsi dengan 3 nilai kembalian?

### Pelajaran 3.2 — Fungsi sebagai First-Class Citizen
- **Materi Inti:**
  1. Fungsi sebagai nilai: assign ke variabel, passing sebagai argument
  2. Function types dan anonymous functions (literals)
  3. Higher-order functions: `map`, `filter`, `reduce` pattern
- **Snippet Interaktif:** Implementasikan `apply(nums []int, fn func(int) int) []int` yang menerapkan fungsi pada setiap elemen slice, lalu panggil dengan fungsi kuadrat dan kubik
- **Quiz Teknis:** Apa tipe dari variabel `f := func(x int) int { return x * 2 }`? Bagaimana cara melewatkan fungsi sebagai parameter?

### Pelajaran 3.3 — Closures dan Scope
- **Materi Inti:**
  1. Closure: fungsi yang "menangkap" variabel dari luar scope
  2. Variabel captured oleh reference, bukan by value
  3. Pitfall closure dalam loop: `for i := range` dan closure sharing variabel
- **Snippet Interaktif:** Buat counter function `func newCounter() func() int` yang mengembalikan closure menghitung naik. Tunjukkan bug klasik closure-in-loop dan perbaikinya
- **Quiz Teknis:** Apa itu closure? Apakah variabel yang di-capture disalin atau direferensikan? Apa bug umum closure dalam loop?

### Pelajaran 3.4 — Recursion dan Factorial/Fibonacci
- **Materi Inti:**
  1. Rekursi dasar: fungsi memanggil dirinya sendiri
  2. Base case dan recursive case
  3. Memoization untuk optimasi rekursi dan stack overflow prevention
- **Snippet Interaktif:** Implementasikan Fibonacci dengan rekursi sederhana, lalu versi memoized menggunakan map. Bandingkan performa keduanya untuk n=40
- **Quiz Teknis:** Apa itu base case? Mengapa rekursi Fibonacci tanpa memoisasi sangat lambat untuk n>40?

### Pelajaran 3.5 — Method pada Tipe
- **Materi Inti:**
  1. Method declaration: `func (r Receiver) nama() tipe` vs function
  2. Value receiver vs pointer receiver dan kapan menggunakan masing-masing
  3. Method sets dan konsekuensinya untuk interface satisfaction
- **Snippet Interaktif:** Buat tipe `Rectangle` dengan method `Area()`, `Perimeter()`, dan `Scale(factor float64)` menggunakan pointer receiver
- **Quiz Teknis:** Apa perbedaan value receiver dan pointer receiver? Method mana yang dimiliki oleh `*T` vs `T`?

### Pelajaran 3.6 — Receivers, Embedded Types & Method Chaining
- **Materi Inti:**
  1. Embedded types (struct within struct) dan method promotion
  2. Method chaining: method mengembalikan pointer receiver
  3. Overriding methods pada embedded types
- **Snippet Interaktif:** Buat tipe `Logger` dengan method `Log()`, `Warn()`, `Error()` yang mendukung chaining: `logger.Log("msg").Warn("warning")`
- **Quiz Teknis:** Apa itu method promotion? Bagaimana method chaining bekerja di Go?

---

## MODUL 4: Struct, Interface & Pemrograman Berorientasi Objek Go

### Pelajaran 4.1 — Struct Deklarasi dan Inisialisasi
- **Materi Inti:**
  1. Struct definition: `type Nama struct { field tipe }`
  2. Inisialisasi: literal `Point{x: 1, y: 2}`, `&Point{}`, dan `new(Point)`
  3. Zero value dan field access dengan dot notation
- **Snippet Interaktif:** Buat struct `Buku` (judul, penulis, harga), inisialisasi 3 buku, dan hitung total harga semua buku
- **Quiz Teknis:** Apa zero value untuk struct? Bagaimana cara membuat pointer ke struct literal?

### Pelajaran 4.2 — Field Tags, Embedding, dan Komposisi
- **Materi Inti:**
  1. Struct tags: `json:"nama_field"`, `db:"column_name"` untuk serialisasi
  2. Struct embedding (komposisi, bukan pewarisan)
  3. Akses field tertanam dan shadowing
- **Snippet Interaktif:** Buat struct `User` (name, email) dan struct `Admin` yang embed `User` + `role string`. Tambahkan tag `json` pada field dan marshal ke JSON
- **Quiz Teknis:** Apa itu struct embedding? Apa bedanya dengan inheritance? Bagaimana tag struct digunakan?

### Pelajaran 4.3 — Interface Dasar
- **Materi Inti:**
  1. Interface definition: `interface { Method1() Tipe1; Method2() Tipe2 }`
  2. Implementasi implisit: tidak ada `implements` keyword
  3. Empty interface `interface{}` / `any` (Go 1.18+) dan type assertion
- **Snippet Interaktif:** Buat interface `Shape` dengan method `Area() float64`. Implementasikan pada `Circle` dan `Rectangle`. Gunakan `any` dan type assertion untuk print tipe
- **Quiz Teknis:** Apa itu empty interface? Apa itu type assertion dan syntax-nya? Bagaimana Go menangkap implementasi interface?

### Pelajaran 4.4 — Interface Lanjutan dan Polymorphism
- **Materi Inti:**
  1. Interface composition: menggabungkan interface
  2. Interface sebagai contract dan decoupling
  3. Polymorphism: fungsi menerima interface, menerima berbagai tipe implementasi
- **Snippet Interaktif:** Buat interface `Speaker { Speak() string }` dan `Animal{Speaker}`. Implementasikan pada `Dog`, `Cat`, lalu fungsi `Announce(speaker Speaker)` yang memanggil Speak
- **Quiz Teknis:** Apa itu interface composition? Bagaimana Go menggunakan interface untuk decoupling kode?

### Pelajaran 4.5 — Type Switch dan Type Assertion Lanjutan
- **Materi Inti:**
  1. Type switch: `switch v.(type) { case int: ... case string: ... }`
  2. Safe type assertion: `val, ok := v.(Tipe)` dan comma-ok idiom
  3. Reflection basics: `reflect.TypeOf()` dan `reflect.ValueOf()`
- **Snippet Interaktif:** Buat fungsi `printType(any)` yang menggunakan type switch untuk menangani int, string, float64, dan slice, dengan default case
- **Quiz Teknis:** Apa bedanya type assertion `v.(Tipe)` dan `v.(Tipe)` dengan comma-ok? Apa fungsi `reflect.TypeOf`?

### Pelajaran 4.6 — Generics: Introduction (Go 1.18+)
- **Materi Inti:**
  1. Type parameters: `func Map[K comparable, V any](m map[K]V, fn func(V) V) map[K]V`
  2. Type constraints: `comparable`, `ordered`, dan custom constraint interfaces
  3. Generic types: `type Stack[T any] struct { items []T }`
- **Snippet Interaktif:** Buat generic `Filter[T any](slice []T, predicate func(T) bool) []T`, uji dengan `int` dan `string`
- **Quiz Teknis:** Apa itu type parameter? Apa batasan constraint `comparable`? Kapan Go 1.18 memperkenalkan generics?

---

## MODUL 5: Goroutines, Channels & Concurrency

### Pelajaran 5.1 — Goroutines: Dasar
- **Materi Inti:**
  1. `go` keyword untuk menjalankan fungsi sebagai goroutine
  2. Lifecycle goroutine: created → scheduled → running → done
  3. Main goroutine vs child goroutine dan masalah synchronisasi dasar
- **Snippet Interaktif:** Buat 3 goroutine yang masing-masing print angka 1-5 dengan jeda, amati interleaving output. Gunakan `time.Sleep` untuk koordinasi sederhana
- **Quiz Teknis:** Apa keyword untuk memulai goroutine? Apa perbedaan goroutine dan thread OS?

### Pelajaran 5.2 — Channels: Buffered dan Unbuffered
- **Materi Inti:**
  1. Channel creation: `ch := make(chan int)` (unbuffered) dan `ch := make(chan int, 5)` (buffered)
  2. Send `ch <- 1` dan receive `val := <-ch`
  3. Full buffer blocking (buffered) dan send/receive deadlock (unbuffered)
- **Snippet Interaktif:** Buat program dengan buffered channel (capacity 3), kirim 5 item, dan amati blocking behavior. Lalu uji unbuffered channel tanpa receiver
- **Quiz Teknis:** Apa bedanya buffered dan unbuffered channel? Apa yang terjadi mengirim ke channel full?

### Pelajaran 5.3 — Channel Direction dan Safety
- **Materi Inti:**
  1. Directional channels: `chan<- int` (send-only) dan `<-chan int` (receive-only)
  2. Channel sebagai argument fungsi untuk membatasi operasi
  3. Range pada channel: `for val := range ch` dan close channel
- **Snippet Interaktif:** Buat producer goroutine yang mengirim data ke `chan<- int` dan consumer yang membaca dari `<-chan int`. Gunakan `close` dan `range` untuk menyelesaikan konsumsi
- **Quiz Teknis:** Apa sintaks channel send-only? Apa yang terjadi saat range channel yang sudah di-close?

### Pelajaran 5.4 — Select: Multiplexing Channel
- **Materi Inti:**
  1. `select` untuk menunggu beberapa channel secara bersamaan
  2. Random selection ketika beberapa channel siap
  3. `default` case untuk non-blocking select
- **Snippet Interaktif:** Buat 2 channel (fast dan slow producer), gunakan select untuk memproses data dari channel mana pun yang tersedia lebih dulu
- **Quiz Teknis:** Apa yang terjadi jika dua channel siap dalam select? Bagaimana default case mengubah blocking behavior?

### Pelajaran 5.5 — WaitGroup dan Sync Primitives
- **Materi Inti:**
  1. `sync.WaitGroup`: `Add`, `Done`, `Wait` untuk menunggu goroutine
  2. `sync.Mutex`: lock/unlock untuk shared memory protection
  3. `sync.Once`: eksekusi tunggal dan `sync.Map` untuk concurrent map
- **Snippet Interaktif:** Simulasikan bank account dengan 10 goroutine yang deposit/withdraw concurrently. Gunakan Mutex untuk melindungi balance dan tunjukkan race condition tanpa mutex
- **Quiz Teknis:** Apa fungsi `WaitGroup.Add(0)` vs `WaitGroup.Add(1)`? Kapan harus menggunakan `sync.Map` daripada `map` biasa?

### Pelajaran 5.6 — Race Condition dan Detect
- **Materi Inti:**
  1. Race condition: definisi dan contoh klasik (counter tanpa lock)
  2. `-race` flag: `go run -race` dan `go test -race` untuk detect
  3. Best practices: jangan share memory by communicating (via channel)
- **Snippet Interaktif:** Tulis program dengan race condition (counter increment tanpa lock), jalankan dengan `go run -race` untuk melihat deteksi, lalu perbaiki dengan channel
- **Quiz Teknis:** Apa itu race condition? Bagaimana cara mendeteksinya? Apa prinsip Go tentang sharing memory?

---

## MODUL 6: Context & Error Handling

### Pelajaran 6.1 — Error Handling Fundamentals
- **Materi Inti:**
  1. Pola error Go: fungsi mengembalikan `(result, error)` dan `if err != nil`
  2. `error` interface: `type error interface { Error() string }`
  3. `errors.New()`, `fmt.Errorf()` dengan `%w` wrapping
- **Snippet Interaktif:** Buat fungsi `divide(a, b float64) (float64, error)` yang mengembalikan error pembagian nol. Tangani error di main dan wrap dengan `fmt.Errorf`
- **Quiz Teknis:** Apa itu `error` interface? Apa bedanya `errors.New` dan `fmt.Errorf` dengan `%w`?

### Pelajaran 6.2 — Custom Error dan Errors As/Is
- **Materi Inti:**
  1. Custom error type dengan struct: `type InvalidInputError struct { Field string }`
  2. `errors.Is(err, target)` untuk pengecekan error tertentu
  3. `errors.As(err, &target)` untuk extract custom error
- **Snippet Interaktif:** Buat custom error `ValidationError` dengan field `Field` dan `Msg`. Fungsi validasi mengembalikan error ini, lalu tangani dengan `errors.As`
- **Quiz Teknis:** Apa fungsi `errors.As`? Bagaimana membedakan error jenis tertentu dari wrapped error?

### Pelajaran 6.3 — Context Dasar (context.Context)
- **Materi Inti:**
  1. `context.Context`: interface untuk cancellation, deadline, dan request-scoped values
  2. `context.Background()` dan `context.TODO()`
  3. `context.WithCancel`, `context.WithTimeout`, `context.WithDeadline`
- **Snippet Interaktif:** Buat goroutine pekerja yang menerima context. Tambahkan timeout 2 detik, simulasi pekerjaan lambat, dan amati cancellation via `ctx.Done()`
- **Quiz Teknis:** Apa itu `context.Context`? Apa perbedaan `WithCancel` dan `WithTimeout`?

### Pelajaran 6.4 — Context untuk Cancellation Propagation
- **Materi Inti:**
  1. Propagasi context melalui call chain: `func handler(ctx context.Context)`
  2. `ctx.Err()` dan `context.Canceled` vs `context.DeadlineExceeded`
  3. Cancel function dan defer pattern: `defer cancel()`
- **Snippet Interaktif:** Buat chain 3 goroutine (A → B → C) yang semua menerima context yang sama. Cancel dari A dan amati B dan C berhenti. Gunakan defer cancel()
- **Quiz Teknis:** Apa yang terjadi ketika context di-cancel? Apa itu `defer cancel()` pattern?

### Pelajaran 6.5 — Context Values dan Middleware Pattern
- **Materi Inti:**
  1. `context.WithValue` untuk request-scoped data (user ID, trace ID)
  2. Key type kustom untuk menghindari collision: `type ctxKey string`
  3. Middleware pattern: fungsi yang menerima handler + context dan mengembalikan handler
- **Snippet Interaktif:** Implementasikan middleware logging yang menambahkan request ID ke context, handler yang membaca request ID dari context, dan chain middleware
- **Quiz Teknis:** Mengapa disarankan menggunakan custom key type daripada string untuk `WithValue`? Apa itu middleware pattern dalam konteks Go?

### Pelajaran 6.6 — Error Handling Strategy & Best Practices
- **Materi Inti:**
  1. Layering error handling: wrap errors di layer bawah, handle di layer atas
  2. Sentinel errors vs custom errors vs wrapped errors — kapan memilih
  3. Panic vs error: kapan pantas panic (harusnya tidak, kecuali bug)
- **Snippet Interaktif:** Buat service layer sederhana (repo → service → handler) dengan error wrapping di setiap layer dan handling yang tepat di layer paling atas
- **Quiz Teknis:** Kapan seharusnya menggunakan panic dalam Go? Apa perbedaan sentinel error dan wrapped error?

---

## MODUL 7: Generics, Koleksi & Pipeline

### Pelajaran 7.1 — Generics: Constraints dan Comparable
- **Materi Inti:**
  1. Constraint interface: `type Number interface { int | float64 }`
  2. `comparable` constraint dan penggunaannya dalam map/generics
  3. Union types dalam constraint: `T int | string | float64`
- **Snippet Interaktif:** Buat generic `Min[T ordered](a, b T) T` dan generic `Contains[T comparable](slice []T, val T) bool`. Uji dengan berbagai tipe.
- **Quiz Teknis:** Apa itu union type dalam constraint? Menggunakan `comparable` vs `comparable`? Apa itu `ordered` constraint?

### Pelajaran 7.2 — Generic Data Structures
- **Materi Inti:**
  1. Generic struct: `type Queue[T any] struct { items []T }`
  2. Generic methods pada struct: `func (q *Queue[T]) Enqueue(item T)`
  3. Generic map/set operations dan kasus penggunaan
- **Snippet Interaktif:** Implementasikan generic `Stack[T]`, `Set[T comparable]`, dan `LinkedList[T]` dengan operasi dasar (push/pop, add/remove, insert/delete)
- **Quiz Teknis:** Apakah constraint tipe untuk Set? Mengapa `any` dan `interface{}` setara?

### Pelajaran 7.3 — Slice Lanjutan
- **Materi Inti:**
  1. Slice mechanics: pointer, length, capacity (`s = s[:n]`, `s = s[:len(s)-1]`)
  2. `append` dan memory reallocation, preallocation dengan `make([]T, 0, cap)`
  3. Copy vs assignment (shared backing array) dan `copy()`
- **Snippet Interaktif:** Demonstrasikan backing array sharing: buat slice, sub-slice, ubah elemen sub-slice, dan lihat perubahan pada slice asli. Bandingkan performa append dengan/without preallocation
- **Quiz Teknis:** Apa bedanya `copy()` dan assignment slice? Apa itu backing array?

### Pelajaran 7.4 — Map Lanjutan dan Iterasi
- **Materi Inti:**
  1. Map internals: hash map, O(1) average access
  2. Safe concurrent map: `sync.Map` vs `map + Mutex` benchmark
  3. Map deletion: `delete(m, key)` dan iterasi safety
- **Snippet Interaktif:** Benchmark `map + Mutex` vs `sync.Map` untuk 1000 goroutine concurrent reads/writes. Analisis hasil dengan `go test -bench`
- **Quiz Teknis:** Kapan `sync.Map` lebih baik daripada `map`+`Mutex`? Apa kompleksitas time map access?

### Pelajaran 7.5 — Pipeline Pattern dengan Channel
- **Materi Inti:**
  1. Fan-out: 1 channel → banyak goroutine worker
  2. Fan-in: banyak channel → 1 channel (merge)
  3. Pipeline: stage1 → stage2 → stage3 dengan channels di antara
- **Snippet Interaktif:** Buat pipeline: generate numbers → square numbers → filter even → print results. Setiap tahap adalah goroutine terpisah yang terhubung via channel
- **Quiz Teknis:** Apa itu fan-out pattern? Bagaimana pipeline pattern menggunakan channels?

### Pelajaran 7.6 — Pooling dan Resource Management
- **Materi Inti:**
  1. `sync.Pool`: reuse objects untuk mengurangi GC pressure
  2. `sync.Once`: inisialisasi sekali (lazy singleton)
  3. Resource cleanup pattern: `defer` + error check
- **Snippet Interaktif:** Buat object pool untuk `bytes.Buffer` (prevent allocation berulang). Gunakan `sync.Once` untuk singleton config loader. Bandingkan alokasi dengan/without pool
- **Quiz Teknis:** Apa tujuan `sync.Pool`? Kapan `sync.Once` lebih baik daripada inisialisasi di main?

---

## MODUL 8: Paket, Modul & Dependency Management

### Pelajaran 8.1 — Package Design dan Konvensi
- **Materi Inti:**
  1. Package declaration, naming convention (snake_case → kebab, `go.mod` name = import path)
  2. Exported vs unexported: kapitalisasi huruf (Capital = exported)
  3. Package main vs library dan `cmd/` directory pattern
- **Snippet Interaktif:** Buat 2 paket: `geometry` (exported `Area()`) dan `utils` (unexported helper). Import kedua paket di `main` dan perhatikan aksesibilitas
- **Quiz Teknis:** Apa aturan naming untuk exported identifier? Apa perbedaan `package main` dan library package?

### Pelajaran 8.2 — Import Management dan Aliasing
- **Materi Inti:**
  1. Import statement, import alias: `import f "fmt"` dan dot import: `import . "fmt"`
  2. Import grouping dan blank import `_` untuk side effects (init)
  3. Circular import problem dan solusi: extract ke paket ketiga
- **Snippet Interaktif:** Demonstrasikan dot import, alias, dan blank import dengan paket `database/sql` (driver registration via blank import)
- **Quiz Teknis:** Apa itu blank import dan kapan digunakan? Apa masalah circular import?

### Pelajaran 8.3 — Modul Proxy dan Go Proxy Protocol
- **Materi Inti:**
  1. `proxy.golang.org` dan `SUMDB` (sum database)
  2. `go env GOPROXY`, `GOSUMDB`, `GOFLAGS`
  3. Private module: `.gitconfig` dan `GONOSUMCHECK`, `GONOPROXY`
- **Snippet Interaktif:** Konfigurasi GOPROXY berbeda (direct, proxy, offline), coba `go mod download` dengan setiap konfigurasi, dan lihat perbedaan behavior
- **Quiz Teknis:** Apa itu `proxy.golang.org`? Bagaimana cara mengakses private module di Go?

### Pelajaran 8.4 — Minimal Version Selection (MVS)
- **Materi Inti:**
  1. MVS: Go memilih versi minimal yang kompatibel, bukan terbaru
  2. `go get` dan `go upgrade`: perbedaan behavior MVS
  3. `go.mod` directive: `go 1.x.x`, `require`, `exclude`, `replace`
- **Snippet Interaktif:** Buat modul dengan dependensi, coba `go get package@latest` vs `go get package`, analisis perubahan `go.mod`, dan gunakan `replace` untuk override lokal
- **Quiz Teknis:** Apa itu MVS? Bagaimana `go get` tanpa version bekerja di bawah MVS?

### Pelajaran 8.5 — Vendor Directory dan Offline Build
- **Materi Inti:**
  1. `go mod vendor`: membuat vendor directory
  2. `-mod=vendor` flag dan `go env -w GOFLAGS=-mod=vendor`
  3. Keuntungan vendor: reproducible build, offline development
- **Snippet Interaktif:** Clone project dengan dependensi eksternal, buat vendor directory, hapus cache go, dan build dengan `-mod=vendor` untuk bukti offline build
- **Quiz Teknis:** Apa fungsi vendor directory? Kapan sebaiknya menggunakan vendor?

### Pelajaran 8.6 — Monorepo dan Workspace (Go 1.18+)
- **Materi Inti:**
  1. `go work` file untuk multi-module workspace
  2. `go work init` dan `go work use`
  3. Monorepo pattern: package sharing tanpa publish ke proxy
- **Snippet Interaktif:** Buat workspace dengan 2 modul lokal (aplikasi dan library), gunakan `go work init` dan `go work use`, modifikasi library dan test langsung di aplikasi
- **Quiz Teknis:** Apa itu `go.work` file? Kapan harus menggunakan workspace?

---

## MODUL 9: Testing, Benchmarking & Quality

### Pelajaran 9.1 — Unit Testing Dasar
- **Materi Inti:**
  1. Test file convention: `_test.go`, `func TestXxx(t *testing.T)`
  2. Table-driven tests: `[]struct { input X; want Y }` pattern
  3. `t.Errorf` vs `t.Fatalf`, subtests: `t.Run`
- **Snippet Interaktif:** Tulis test untuk fungsi kalkulator (add, subtract, multiply, divide) menggunakan table-driven pattern. Jalankan `go test -v`
- **Quiz Teknis:** Apa konvensi penamaan file test? Bedanya `t.Errorf` dan `t.Fatalf`?

### Pelajaran 9.2 — Benchmarking dan Profiling
- **Materi Inti:**
  1. Benchmark: `func BenchmarkXxx(b *testing.B)` dan `-bench` flag
  2. `b.ReportAllocs()`, `b.ResetTimer()`, `b.RunParallel`
  3. Memory profiling: `go test -memprofile` dan CPU profiling: `go test -cpuprofile`
- **Snippet Interaktif:** Benchmark append vs preallocated slice, benchmark string concatenation vs `strings.Builder`. Hasilkan memory profile dan analyze
- **Quiz Teknis:** Apa output `go test -bench` (N dan ns/op)? Bagaimana mengaktifkan memory reporting?

### Pelajaran 9.3 — Mocking dan Dependency Injection
- **Materi Inti:**
  1. Interface-based mocking: buat mock implementasi interface untuk testing
  2. Dependency injection via parameter: `func Service(db DBInterface)`
  3. Generate mock: `go generate` dan tools (mockgen, mockery)
- **Snippet Interaktif:** Buat interface `UserRepository` dan mock `MockUserRepository`. Inject mock ke service layer dan test tanpa database nyata
- **Quiz Teknis:** Mengapa interface memudahkan testing? Apa itu dependency injection?

### Pelajaran 9.4 — Integration Testing dan httptest
- **Materi Inti:**
  1. `net/http/httptest`: `httptest.NewServer` dan `httptest.NewRecorder`
  2. Integration test: setup → execute → verify teardown pattern
  3. Database testing: `sqlx` atau `gorm` test container, migrations
- **Snippet Interaktif:** Buat HTTP handler dan test dengan `httptest.NewRecorder`. Verifikasi status code, headers, dan body response
- **Quiz Teknis:** Apa fungsi `httptest.NewRecorder`? Bedanya unit test dan integration test?

### Pelajaran 9.5 — Race Detection dan Linting
- **Materi Inti:**
  1. `go test -race`: race detector dan interpretasi output
  2. `go vet`: static analysis dan detected issues
  3. `golangci-lint`: linting suite dan konfigurasi `.golangci.yml`
- **Snippet Interaktif:** Tulis kode dengan race condition, jalankan `go test -race` untuk deteksi. Setup `golangci-lint` dan jalankan pada kode dengan masalah umum (unused import, shadowing)
- **Quiz Teknis:** Apa perbedaan `go vet` dan `go test -race`? Apa itu `golangci-lint`?

### Pelajaran 9.6 — Continuous Integration untuk Go
- **Materi Inti:**
  1. GitHub Actions: workflow untuk `go test`, `go vet`, `go build`
  2. Matrix build: Go versi berbeda dan OS berbeda
  3. Code coverage: `go test -coverprofile`, `go tool cover`
- **Snippet Interaktif:** Buat `.github/workflows/ci.yml` yang menjalankan test, vet, build, dan coverage report untuk Go 1.21 dan 1.22 pada Linux dan macOS
- **Quiz Teknis:** Apa itu matrix strategy di GitHub Actions? Bagaimana cara generate coverage report?

---

## MODUL 10: Proyek Akhir & Best Practices Industri

### Pelajaran 10.1 — REST API dengan Standard Library
- **Materi Inti:**
  1. `net/http`: `http.ListenAndServe`, `http.HandleFunc`, `http.NewRequest`
  2. JSON serialization: `json.Marshal` dan `json.Unmarshal`
  3. Middleware pattern di `net/http`: function wrapper
- **Snippet Interaktif:** Buat REST API minimal (CRUD buku) tanpa framework — hanya `net/http` + `encoding/json` + `sync.Mutex` untuk storage
- **Quiz Teknis:** Apa keuntungan mengakan stdlib untuk REST API? Bagaimana middleware bekerja di `net/http`?

### Pelajaran 10.2 — HTTP Client dan Eksternal API
- **Materi Inti:**
  1. `http.Client`: timeout, transport, custom headers
  2. `context` integration: request dengan timeout/cancel
  3. JSON API consumption: GET/POST ke public API dan parse response
- **Snippet Interaktif:** Konsumsi API publik (OpenWeatherMap free tier atau JSONPlaceholder), parse JSON response ke struct, tangani error dan timeout dengan context
- **Quiz Teknis:** Mengapa harus menggunakan `http.Client` singleton daripada `http.Get`? Bagaimana context digunakan dalam HTTP request?

### Pelajaran 10.3 — Database dengan Database/sql
- **Materi Inti:**
  1. `database/sql`: connection pooling, `Prepare`, `Query`, `Exec`
  2. `sql.Rows`: iterate dan `sql.Row`: single result
  3. Migration strategy dan `sql.DB` lifecycle
- **Snippet Interaktif:** Hubungkan ke SQLite (embedded), buat tabel, INSERT data, SELECT dengan WHERE, UPDATE, dan DELETE. Tunjukkan connection pool settings (`SetMaxOpenConns`)
- **Quiz Teknis:** Apa itu connection pool? Apa fungsi `db.Close()` dan kapan harus dipanggil?

### Pelajaran 10.4 — Konfigurasi dan Environment Management
- **Materi Inti:**
  1. Environment variables: `os.Getenv`, `os.LookupEnv`, `os.Setenv`
  2. Konfigurasi struct: `mapstructure` atau manual parsing
  3. `.env` file: `godotenv` library dan 12-factor app principles
- **Snippet Interaktif:** Buat aplikasi yang membaca konfigurasi dari env vars (DB_HOST, DB_PORT, LOG_LEVEL), dengan default values dan validation. Gunakan `godotenv` untuk `.env` loading
- **Quiz Teknis:** Apa itu 12-factor app? Bagaimana cara aman membaca sensitive env vars?

### Pelajaran 10.5 — Logging dan Observability
- **Materi Inti:**
  1. Standard `log` package: `log.Println`, `log.Printf`, `log.SetOutput`
  2. Structured logging: `slog` (Go 1.21+) dan JSON handler
  3. Metrics: `expvar` dan `prometheus/client_golang` basics
- **Snippet Interaktif:** Ganti log package dengan `slog` (JSON handler), buat structured logs dengan level INFO/WARN/ERROR. Tambahkan `expvar` untuk expose request count metric
- **Quiz Teknis:** Apa itu structured logging? Mengapa `slog` lebih baik dari `log`?

### Pelajaran 10.6 — Deployment dan Final Best Practices
- **Materi Inti:**
  1. Cross-compilation: `GOOS=linux GOARCH=amd64 go build`
  2. Docker: multi-stage build untuk Go (builder + slim runtime)
  3. Best practices review: error handling, naming, testing, concurrency patterns — review checklist
- **Snippet Interaktif:** Build binary Go, buat Dockerfile multi-stage (golang:1.22 builder → alpine:3.19 runtime), build Docker image, dan jalankan container
- **Quiz Teknis:** Apa keuntungan multi-stage Docker build untuk Go? Apa perintah cross-compile untuk Linux ARM64?

---

## REKAPITULASI MODUL

| No | Modul | Jumlah Pelajaran | Topik Utama |
|----|-------|------------------|-------------|
| 1 | Fondasi Bahasa Go | 6 | Tooling, variabel, operator, I/O, komentar |
| 2 | Struktur Kontrol | 6 | if/switch/for/range/defer/select |
| 3 | Fungsi & Method | 6 | Fungsi, closure, rekursi, method, receivers |
| 4 | Struct & Interface | 6 | Struct, embedding, interface, generics intro |
| 5 | Goroutines & Channels | 6 | Concurrency, channel, select, sync, race |
| 6 | Context & Error | 6 | Error handling, context, cancellation |
| 7 | Generics & Koleksi | 6 | Generics, slice, map, pipeline, pool |
| 8 | Paket & Modul | 6 | Package, import, proxy, MVS, vendor, workspace |
| 9 | Testing & Quality | 6 | Unit test, benchmark, mock, lint, CI |
| 10 | Proyek Akhir | 6 | REST API, HTTP client, DB, config, logging, deploy |

**Total: 60 pelajaran (10 modul × 6 pelajaran)**

---

## CATATAN KONVERSI KE JSON

Setiap pelajaran memiliki struktur konsisten:
- `lesson_id`: "M01L01" sampai "M10L06"
- `module_id`: "M01" sampai "M10"
- `title`: Judul pelajaran
- `core_points`: Array string (2-3 poin materi inti)
- `interactive_snippet`: Deskripsi snippet Go interaktif
- `technical_quiz`: String quiz teknis

Contoh struktur JSON:
```json
{
  "lesson_id": "M01L01",
  "module_id": "M01",
  "title": "Sejarah Go dan Filosofi Desain Bahasa",
  "core_points": [
    "Asal mula Go (2009) dan masalah yang diatasi",
    "Filosofi desain: kesederhanaan, keterbacaan, konvensi > konfigurasi",
    "Ekosistem Go saat ini: Go 1.22+, tooling, dan komunitas"
  ],
  "interactive_snippet": "Jalankan go version, go env, dan gofmt -d pada file dengan indentasi campuran",
  "technical_quiz": "Apa perbedaan antara go run, go build, dan go install? Sebutkan 3 filosofi desain inti Go."
}
```
