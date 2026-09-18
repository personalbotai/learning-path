# Math Object: Operasi Matematika & Trigonometri

**Slug**: `math-object` · **Level**: Basic · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Memahami karakteristik static built-in `Math` object dan representasi floating-point IEEE 754 di balik operasi aritmetika JavaScript.
- Menguasai perbedaan semantik empat metode pembulatan (`Math.floor`, `Math.ceil`, `Math.round`, `Math.trunc`) pada bilangan positif maupun negatif.
- Mengimplementasikan kalkulasi geometris (`Math.hypot`, trigonometri) dan generator bilangan acak berbasis rentang (*bounded pseudo-random*) secara presisi.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di dalam JavaScript, `Math` bukanlah sebuah fungsi konstruktor (*constructor function*), melainkan *built-in namespace object* statis yang berada pada `globalThis.Math`. Anda tidak dapat menginstansiasinya menggunakan kata kunci `new Math()` maupun memanggilnya secara langsung sebagai fungsi `Math()`. Semua properti dan metodenya bersifat statis (*static properties & methods*).

Di balik layar, engine JavaScript modern seperti V8 (Node.js/Chrome) mengeksekusi operasi `Math` melalui instruksi JIT (*Just-In-Time*) compiler intrinsics. Artinya, saat engine mendeteksi pemanggilan seperti `Math.sqrt()` atau `Math.sin()`, V8 tidak selalu mengeksekusi fungsi JavaScript reguler dengan *overhead* Call Stack standar, melainkan langsung menerjemahkannya menjadi instruksi assembly level CPU (seperti SSE2/AVX pada x86_64 atau instruksi FPU pada ARM).

Semua perhitungan numerik di dalam `Math` beroperasi di atas standar **IEEE 754 Double Precision Floating Point (64-bit)**:
- **1 bit** tanda (*sign*)
- **11 bit** eksponen (*exponent*)
- **52 bit** mantissa (*fraction/significand*)

Keterbatasan representasi biner 64-bit ini menghasilkan fenomena *precision loss* pada bilangan desimal tertentu (misalnya `0.1 + 0.2 === 0.30000000000000004`). Memahami cara kerja `Math` dan mitigasi batas presisi ini sangat krusial agar manipulasi koordinat, fisika grafis, dan kalkulasi analitik menghasilkan nilai yang valid dan terprediksi.

### 2. Sintaks & Penggunaan Modern

Operasi `Math` terbagi ke dalam empat kategori utama: konstanta matematis, pembulatan (*rounding*), pemangkatan & akar (*exponential & logarithmic*), serta trigonometri & randomisasi.

```javascript
// 1. Konstanta Matematis (Immutable Built-in Properties)
console.log("PI:", Math.PI);             // ~3.141592653589793
console.log("Euler Base (E):", Math.E);  // ~2.718281828459045
console.log("SQRT2:", Math.SQRT2);       // ~1.4142135623730951

// 2. Perbandingan Semantik Operasi Pembulatan (Rounding)
const posVal = 5.67;
const negVal = -5.67;

// Math.floor: Membulatkan ke bawah (ke arah minus tak hingga)
console.log("floor pos:", Math.floor(posVal)); // 5
console.log("floor neg:", Math.floor(negVal)); // -6

// Math.ceil: Membulatkan ke atas (ke arah positif tak hingga)
console.log("ceil pos:", Math.ceil(posVal));   // 6
console.log("ceil neg:", Math.ceil(negVal));   // -5

// Math.round: Pembulatan standar (>= 0.5 ke atas, < 0.5 ke bawah)
console.log("round pos:", Math.round(posVal)); // 6
console.log("round neg:", Math.round(negVal)); // -6 (khusus -5.5 dibulatkan ke -5)

// Math.trunc: Membuang angka di belakang koma (menuju 0)
console.log("trunc pos:", Math.trunc(posVal)); // 5
console.log("trunc neg:", Math.trunc(negVal)); // -5

// 3. Eksponensial, Akar, dan Hipotenusa
console.log("Power (2^8):", Math.pow(2, 8));     // 256 (atau gunakan operator 2 ** 8)
console.log("Square Root:", Math.sqrt(144));    // 12
console.log("Cubic Root:", Math.cbrt(27));      // 3
// Math.hypot mencegah overflow/underflow intermediate calculations
console.log("Hypotenuse (3, 4):", Math.hypot(3, 4)); // 5 (sqrt(3^2 + 4^2))

// 4. Random Range Generator [min, max] Inclusive
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // Formula: Math.random() menghasilkan [0, 1)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}
console.log("Random 10-20:", getRandomIntInclusive(10, 20));
```

### 3. Studi Kasus Nyata
Dalam simulasi fisika 2D (misal: sistem navigasi atau game), kita perlu menghitung jarak antar entitas, sudut rotasi target (*trajectory angle*), dan normalisasi vektor posisi dengan toleransi floating-point IEEE 754.

```javascript
class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Hitung jarak Euclidean menggunakan Math.hypot
  distanceTo(target) {
    return Math.hypot(target.x - this.x, target.y - this.y);
  }

  // Hitung sudut arah (radian) menuju target menggunakan Math.atan2
  angleTo(target) {
    const deltaY = target.y - this.y;
    const deltaX = target.x - this.x;
    return Math.atan2(deltaY, deltaX);
  }

  // Konversi Radian ke Derajat
  static toDegrees(radians) {
    return radians * (180 / Math.PI);
  }

  // Pemeriksaan kesetaraan koordinat dengan toleransi IEEE 754
  isApproximatelyEqual(target, epsilon = Number.EPSILON) {
    return (
      Math.abs(this.x - target.x) < epsilon &&
      Math.abs(this.y - target.y) < epsilon
    );
  }
}

// Simulasi radar pelacak
const drone = new Vector2D(10.5, 20.2);
const baseStation = new Vector2D(40.8, 60.6);

const distance = drone.distanceTo(baseStation);
const angleRad = drone.angleTo(baseStation);
const angleDeg = Vector2D.toDegrees(angleRad);

console.log(`Jarak: ${distance.toFixed(2)} unit`);
console.log(`Sudut: ${angleDeg.toFixed(2)}° (Radian: ${angleRad.toFixed(4)})`);
console.log("Posisi identik?", drone.isApproximatelyEqual(new Vector2D(10.5, 20.2)));
```

### 4. Visualisasi & Mental Model

Perbedaan mendasar pembulatan bilangan terhadap sumbu bilangan riil:

```text
       Sumbu Negatif (-)                        Sumbu Positif (+)
 <─────────────────────────────┼─────────────────────────────>
 -6      -5.67        -5       0       5        5.67         6
  │        │           │       │       │          │          │
  └────────┼───────────┘       │       └──────────┼──────────┘
           │                                      │
   Math.floor(-5.67) ──> -6               Math.floor(5.67) ──> 5 (Ke kiri/mengecil)
   Math.ceil(-5.67)  ──> -5               Math.ceil(5.67)  ──> 6 (Ke kanan/membesar)
   Math.trunc(-5.67) ──> -5               Math.trunc(5.67) ──> 5 (Memotong ke arah 0)
   Math.round(-5.67) ──> -6               Math.round(5.67) ──> 6 (Titik terdekat)
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `Math.hypot()`** dibanding kombinasi manual `Math.sqrt(x*x + y*y)` saat menghitung jarak multi-dimensi untuk mencegah *intermediate numeric overflow* atau *underflow* pada bilangan sangat besar/kecil.
- ✅ **Gunakan `Number.EPSILON`** bersama `Math.abs(a - b) < Number.EPSILON` saat membandingkan kesetaraan hasil komputasi *floating-point* untuk menghindari bug presisi IEEE 754.
- ✅ **Pilih `Math.trunc()`** jika tujuan Anda murni membuang digit pecahan (integer casting), bukan `Math.floor()` yang memiliki perilaku berbeda pada domain bilangan negatif.
- ❌ **Hindari penggunaan `Math.random()`** untuk kebutuhan kriptografi, token otentikasi, atau pembuatan UUID unik; gunakan API Web Crypto bawaan (`crypto.getRandomValues()`).

---

## ✍️ Latihan Mandiri
1. Buat fungsi `clamp(val, min, max)` pada **Code Editor di bawah** yang memanfaatkan kombinasi `Math.min` dan `Math.max` untuk mengunci nilai `val` agar selalu berada dalam interval `[min, max]`.
2. Implementasikan fungsi penghitung koordinat polar ke kartesius `polarToCartesian(radius, angleInDegrees)` pada **Code Editor di bawah** dengan memanfaatkan `Math.cos`, `Math.sin`, dan konversi derajat ke radian.

---

## 🔗 Referensi
- [MDN Web Docs: JavaScript Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [ECMAScript® 2024 Language Specification: The Math Object](https://tc39.es/ecma262/#sec-math-object)