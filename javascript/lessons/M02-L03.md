# Set dan WeakSet

**Slug**: `set-dan-weakset` · **Level**: Intermediate · **Waktu**: 15 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai struktur data `Set` untuk mengelola koleksi nilai unik primitif maupun objek dengan kompleksitas waktu rata-rata $O(1)$.
- Mengimplementasikan metode aljabar himpunan modern ES2024 (`union`, `intersection`, `difference`, `symmetricDifference`).
- Memahami mekanisme garbage collection pada `WeakSet` untuk mencegah memory leak dalam pelacakan metadata objek dan deteksi circular reference.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Struktur data bawaan JavaScript seperti `Array` menyimpan elemen secara sekuensial dengan indeks berbasis nol dan mengizinkan duplikasi. Ketika aplikasi membutuhkan penjaminan keunikan nilai, pencarian pada `Array` via `indexOf` atau `includes` memakan kompleksitas waktu $O(n)$. Di sinilah `Set` hadir sebagai struktur data berakar pada tabel hash (*hash table/hash set*), memungkinkan operasi penambahan, pengecekan, dan penghapusan berjalan dalam kompleksitas rata-rata $O(1)$.

Di balik layar (seperti pada engine V8), `Set` menyimpan entri menggunakan algoritma pembandingan kesetaraan *SameValueZero*. Algoritma ini mirip dengan `===` (*strict equality*), namun memperlakukan `NaN` sama dengan `NaN` (sehingga `NaN` tidak akan diduplikasi) dan menganggap `+0` sama dengan `-0`. `Set` mempertahankan urutan penyisipan elemen (*insertion order*), yang berarti saat melakukan iterasi, elemen akan dieksekusi sesuai urutan pertama kali mereka dimasukkan.

Sebaliknya, `WeakSet` adalah varian khusus di mana koleksi **hanya dapat menampung objek dan Symbol yang tidak terdaftar** (*non-registered symbols*). Karakteristik krusial dari `WeakSet` terletak pada sifat referensinya yang bersifat *weak* (lemah). Entri dalam `WeakSet` tidak mencegah algoritma *Mark-and-Sweep Garbage Collector* (GC) engine JavaScript untuk membersihkan objek target dari Memory Heap jika tidak ada lagi referensi *strong* lain yang mengarah ke objek tersebut. Karena referensinya tidak dapat dipastikan tetap hidup di memori, `WeakSet` tidak bersifat *iterable* (tidak memiliki metode seperti `forEach`, `keys`, `values`) dan tidak memiliki properti `size`.

### 2. Sintaks & Penggunaan Modern
Pada spesifikasi ECMAScript 2024, `Set` diperkaya dengan metode matematika himpunan bawaan (*Set Composition Methods*) seperti `union()`, `intersection()`, `difference()`, `symmetricDifference()`, `isSubsetOf()`, `isSupersetOf()`, dan `isDisjointFrom()`.

```javascript
// Inisialisasi Set dan deduplikasi Array
const rawUserRoles = ['ADMIN', 'EDITOR', 'VIEWER', 'EDITOR', 'ADMIN'];
const uniqueRoles = new Set(rawUserRoles);

uniqueRoles.add('SUPERADMIN');
console.log('Ukuran Set:', uniqueRoles.size); // 4
console.log('Has EDITOR:', uniqueRoles.has('EDITOR')); // true

// Konversi Set kembali ke Array menggunakan Spread Operator
const deduplicatedArray = [...uniqueRoles];
console.log('Deduplicated Array:', deduplicatedArray);

// Fitur ES2024: Operasi Himpunan Modern
const activeFeatures = new Set(['AUTH', 'BILLING', 'ANALYTICS']);
const betaFeatures = new Set(['ANALYTICS', 'AI_COPILOT', 'WEBHOOKS']);

// 1. Union (Gabungan A U B)
const allFeatures = activeFeatures.union(betaFeatures);
console.log('Union:', [...allFeatures]); 
// ['AUTH', 'BILLING', 'ANALYTICS', 'AI_COPILOT', 'WEBHOOKS']

// 2. Intersection (Irisan A ∩ B)
const sharedFeatures = activeFeatures.intersection(betaFeatures);
console.log('Intersection:', [...sharedFeatures]); 
// ['ANALYTICS']

// 3. Difference (Selisih A \ B: ada di A tapi tidak di B)
const strictlyActive = activeFeatures.difference(betaFeatures);
console.log('Difference:', [...strictlyActive]); 
// ['AUTH', 'BILLING']

// 4. Symmetric Difference (Ada di A atau B, tapi tidak di keduanya)
const nonOverlapping = activeFeatures.symmetricDifference(betaFeatures);
console.log('Symmetric Difference:', [...nonOverlapping]); 
// ['AUTH', 'BILLING', 'AI_COPILOT', 'WEBHOOKS']
```

### 3. Studi Kasus Nyata
Dalam arsitektur serialisasi data hierarkis (seperti JSON deep-cloning atau graph traversing), referensi melingkar (*circular reference*) dapat memicu *infinite loop* atau `RangeError: Maximum call stack size exceeded`. Menggunakan `Set` biasa untuk melacak node yang telah dikunjungi berisiko menahan seluruh referensi objek di memori secara permanen. `WeakSet` adalah solusi deterministik untuk penandaan objek sementara (*transient tagging*) yang ramah alokasi Heap Memory.

```javascript
// Deteksi Circular Reference & Deep Clone Sanitizer menggunakan WeakSet
function detectCircularReference(obj, visited = new WeakSet()) {
  // Jika bukan objek atau bernilai null, abaikan (bukan target WeakSet)
  if (obj === null || typeof obj !== 'object') {
    return false;
  }

  // Jika objek sudah pernah masuk dalam traversal path, terjadi circular reference
  if (visited.has(obj)) {
    return true;
  }

  // Tandai objek saat ini ke dalam WeakSet
  visited.add(obj);

  for (const key of Object.keys(obj)) {
    if (detectCircularReference(obj[key], visited)) {
      return true;
    }
  }

  return false;
}

// Uji Kasus Struktur Graph
const nodeA = { name: 'Node A', children: [] };
const nodeB = { name: 'Node B', children: [] };
const nodeC = { name: 'Node C', children: [] };

nodeA.children.push(nodeB);
nodeB.children.push(nodeC);

console.log('Status Node A (Linier):', detectCircularReference(nodeA)); // false

// Buat siklus sirkular: Node C mereferensikan Node A kembali
nodeC.children.push(nodeA);

console.log('Status Node A (Sirkular):', detectCircularReference(nodeA)); // true
```

### 4. Visualisasi & Mental Model
```text
┌────────────────────────────────────────────────────────────────────────┐
│                        Memory Heap: Set vs WeakSet                     │
│                                                                        │
│  [Stack Reference]              [Heap Memory]                          │
│                                                                        │
│  let standardSet ──(Strong)───> ┌──────────────────────────┐           │
│                                 │ Set: { ObjA }            │           │
│                                 │  │                       │           │
│                                 │  └──(Strong Ref)──> ObjA │ (Tertahan)│
│                                 └──────────────────────────┘           │
│                                                                        │
│  let weakTracker ──(Strong)───> ┌──────────────────────────┐           │
│                                 │ WeakSet: (ObjB)          │           │
│                                 │  :                       │           │
│                                 │  ···(Weak Ref)····> ObjB │ (Bebas GC)│
│                                 └──────────────────────────┘           │
│                                                                        │
│  * Ketika ref eksternal ke ObjB = null, GC Engine langsung mereklamasi │
│    ruang memori ObjB tanpa perlu menghapusnya manual dari WeakSet.     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ Gunakan `Set` ketimbang `Array` jika skenario aplikasi menuntut pencarian nilai unik frekuensi tinggi (`.has()`) untuk menjaga efisiensi waktu tetap $O(1)$.
- ✅ Manfaatkan metode himpunan ES2024 (`.intersection()`, `.difference()`) untuk memproses operasi filtering relasional daripada melakukan chaining filter manual (`array.filter(x => other.includes(x))`).
- ✅ Gunakan `WeakSet` khusus untuk penandaan metadata privat (*brand checking* atau *visited flags*) tanpa khawatir menimbulkan *memory leak* saat siklus hidup objek target berakhir.
- ❌ Jangan gunakan `WeakSet` apabila Anda memerlukan pembacaan ukuran data (`.size`) atau butuh melakukan iterasi daftar elemen (`for..of`), karena sifatnya non-enumerable.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah sebuah fungsi `findCommonPermissions(roleA, roleB)` yang menerima dua buah Set berisi string izin sistem, lalu kembalikan Set baru yang hanya berisi izin yang dimiliki oleh **kedua** peran tersebut menggunakan metode ES2024 `intersection`.
2. Implementasikan mekanisme proteksi *DOM / Object Mutability Guard* di **Code Editor di bawah** menggunakan `WeakSet`. Buat fungsi `markAsProcessed(obj)` dan `isProcessed(obj)` untuk memastikan sebuah objek konfigurasi hanya dapat diproses tepat satu kali.

---

## 🔗 Referensi
- [MDN Web Docs: Set Standard Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN Web Docs: WeakSet Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
- [ECMAScript Set Methods Specification (TC39)](https://tc39.es/ecma262/#sec-set-objects)