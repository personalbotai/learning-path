# TypeScript vs JavaScript

Meski TypeScript dikompilasi ke JavaScript, kedua bahasa memiliki perbedaan filosofi, kemampuan, dan use case yang signifikan. Memahami perbandingan ini membantu kita membuat keputusan arsitektur yang tepat untuk proyek.

⏱️ 10 menit
📊 Kesulitan: Pemula
💻 Tipe: Perbandingan

##

Tujuan Pembelajaran

-

Menyadari perbedaan filosofi antara TypeScript dan JavaScript

-

Mengenal kelebihan dan kekurangan masing-masing bahasa

-

Memahami kapan menggunakan TypeScript vs JavaScript

-

Mengerti compatibility dan interopability antara keduanya

## Perbandingan Mendalam

TypeScript dan JavaScript sering dibandingkan karena kedekatannya. Namun, mereka memiliki perbedaan fundamental yang memengaruhi cara kita mengembangkan aplikasi. Mari kita analisis dimensi-dimensi kunci.

Aspek
TypeScript
JavaScript

Type System
Statis (compile-time checking)
Dinamis (runtime checking)

Learning Curve
Lebih curam (perlu belajar type system)
Lebih landai (langsung bisa coding)

Tooling
Excellent (VS Code first-class support)
Baik, namun kurang akurat tanpa types

Error Detection
Sebelum runtime (compile-time)
Saat runtime (bisa jadi production bug)

Performance
Sama (karena dikompilasi ke JS)
Native (langsung dieksekusi)

Code Maintainability
Tinggi (types sebagai dokumentasi hidup)
Bergantung pada dokumentasi manual

Adoption
Cepat tumbuh, khususnya di enterprise
Sangat luas (semua browser, Node.js)

Ecosystem
Semua package JS + DefinitelyTyped
Largest ecosystem (npm)

### Kompatibilitas JavaScript

#### ✅ TypeScript 100% Kompatibel dengan JavaScript

Setiap kode JavaScript yang valid adalah kode TypeScript yang valid. Anda dapat mengubah ekstensi file `.js` menjadi `.ts` dan mulai menambahkan type annotations secara bertahap. Fitur ini memungkinkan **gradual adoption** - tidak perlu rewrite seluruh codebase.

```
// JavaScript (valid TypeScript)
function tambah(a, b) {
return a + b;
}

// TypeScript (lebih informatif)
function tambah(a: number, b: number): number {
return a + b;
}
```

### Kapan Menggunakan TypeScript?

####

Gunakan TypeScript untuk:

- • Aplikasi enterprise dengan tim besar

- • Codebase yang akan di-maintain jangka panjang

- • Proyek dengan kompleksitas tinggi

- • Framework modern (React, Angular, Vue)

- • Backend Node.js dengan banyak endpoint

- • Ketika autocomplete dan refactoring tools sangat diperlukan

####

JavaScript masih tepat untuk:

- • Prototyping cepat (proof of concept)

- • Script kecil atau automation

- • Proyek dengan timeline sangat singkat

- • Learning fundamental JavaScript

- • Codebase sederhana dengan 1-2 developer

- • Library yang ingin remained pure JS

### Transpilation Process

Proses TypeScript ke JavaScript melibatkan **transpilation** (source-to-source compilation). Berikut adalah alur kerjanya:

```
// File: app.ts (TypeScript dengan type annotations)
interface User {
id: number;
name: string;
}

function greet(user: User): string {
return `Halo, ${user.name}! (ID: ${user.id})`;
}

const admin: User = { id: 1, name: "Admin" };
console.log(greet(admin));
```

Setelah kompilasi dengan `tsc app.ts`, TypeScript akan menghasilkan:

```
// File: app.js (JavaScript hasil transpilasi)
// Type annotations dihilangkan (type erasure)

function greet(user) {
return `Halo, ${user.name}! (ID: ${user.id})`;
}

const admin = { id: 1, name: "Admin" };
console.log(greet(admin));
```

#### 📌 Type Erasure

TypeScript melakukan type erasure selama transpilasi. Ini berarti semua type annotations (seperti `: number`, `: string`, interface definitions) dihapus dari kode akhir. Hasilnya murni JavaScript yang bisa dijalankan di environment mana pun. Karena ini, TypeScript **tidak** menambahkan runtime overhead.

### Interoperabilitas dengan Ekosistem JavaScript

Salah satu keunggulan TypeScript adalah kemampuannya bekerja sama dengan ekosistem JavaScript yang sudah mapan:

- **NPM Packages**: Hampir semua package NPM bisa digunakan di TypeScript.

- **DefinitelyTyped**: Repositori >10,000 package dengan type definitions (`@types/package-name`).

- **Gradual Adoption**: Bisa mulai dari satu file `.ts` di project JavaScript yang ada.

- **Configuration Fleksibel**: `tsconfig.json` mengontrol seberapa ketat type checking-nya.

- **Allow JS**: Bisa mengizinkan file `.js` di dalam project TypeScript (dengan `allowJs: true`).

### Kesimpulan

TypeScript bukan pengganti JavaScript, melainkan **enhancement** yang memberikan type safety dan developer experience yang jauh lebih baik. JavaScript tetap relevan untuk skenario tertentu yang membutuhkan fleksibilitas tinggi atau development sangat cepat. Untuk proyek-proyek serius, enterprise, atau yang akan dikembangkan oleh tim, TypeScript menjadi pilihan yang sangat disarankan.

#### 💡 Tips:

Mulailah dengan TypeScript meski untuk project kecil. Kebiasaan menulis type-safe code akan membawa manfaat jangka panjang. Dan ingat: Anda bisa mengatur strictness dengan `strict: false` di `tsconfig.json` jika ingin lebih fleksibel saat awal.

##

Latihan Praktik

Bandingkan kode JavaScript dan TypeScript untuk fungsi yang sama. Amati perbedaan error handling dan IDE support:

#### JavaScript (dynamic)

```
function processUser(user) {
if (!user || !user.name) {
throw new Error("Invalid user");
}
return `Hello, ${user.name}`;
}

// Bisa dipanggil dengan apa pun - error hanya di runtime
processUser({ id: 1 }); // ❌ runtime error: Cannot read property 'name'
```

#### TypeScript (static)

```
interface User {
name: string;
}

function processUser(user: User): string {
return `Hello, ${user.name}`;
}

// TypeScript akan error saat kompilasi jika:
// processUser({ id: 1 }); // ❌ Property 'name' missing

const validUser = { name: "Alice" };
processUser(validUser); // ✅ OK
```

Previous

Selesai & Lanjutkan

Next

### Quiz Modul 1

Setelah menyelesaikan semua lesson di Modul 1, kamu akan mengakses quiz dengan 10 pertanyaan untuk menguji pemahamanmu.

Quiz akan tersedia setelah semua lesson selesai
