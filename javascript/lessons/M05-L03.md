# String Methods Lengkap (ES2024)

**Slug**: `string-methods-lengkap` · **Level**: Basic · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami representasi internal tipe string primitif, sifat *immutability*, dan pengelolaan memori pada V8 engine (*String Interning* dan *ConsString*).
- Menguasai ekosistem metode pencarian, manipulasi, formatting, dan ekstraksi string modern (`slice`, `at`, `replaceAll`, `padStart`, `padEnd`, `matchAll`).
- Mengimplementasikan *Tagged Template Literals* tingkat lanjut untuk sanitasi data dan transformasi teks dinamis yang aman.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Secara fundamental, tipe `string` dalam JavaScript adalah tipe data primitif yang bersifat **immutable** (tidak dapat diubah setelah dialokasikan ke memori). Setiap operasi manipulasi string tidak pernah mengubah string asli secara *in-place*, melainkan selalu mengalokasikan blok memori baru dan mengembalikan referensi string baru. JavaScript merepresentasikan teks menggunakan pengkodean UTF-16 (*16-bit code units*), di mana sebagian besar karakter umum menempati 1 *code unit* (2 byte), sedangkan karakter khusus seperti emoji atau simbol historis memerlukan *surrogate pair* (2 *code units* / 4 byte).

Di balik layar, V8 Engine mengoptimalkan alokasi memori string menggunakan struktur data internal khusus. Untuk mencegah overhead duplikasi string konstan yang berulang, engine menerapkan mekanisme **String Table / String Interning**, di mana string yang identik merujuk pada alamat memori heap yang sama. Ketika melakukan konkatenasi beruntun, alih-alih langsung menyalin buffer karakter, V8 membentuk representasi pohon biner yang disebut **ConsString** (menghubungkan dua substring sebagai *pointers*). Ketika panjang string telah stabil atau dilakukan inspeksi karakter mendalam, struktur tersebut diratakan (*flattened*) menjadi **SeqOneByteString** atau **SeqTwoByteString**.

Karakteristik *immutability* ini menuntut pemilihan metode pemrosesan string yang efisien. Mengakses indeks karakter via bracket notation `str[0] = 'X'` akan gagal secara diam-diam (*silent fail*) dalam non-strict mode atau melempar `TypeError` pada strict mode. Oleh karena itu, standardisasi ECMAScript (hingga ES2024) menyediakan kumpulan metode komprehensif untuk pencarian, pemotongan, modifikasi pola, dan penataan format string.

### 2. Sintaks & Penggunaan Modern

```javascript
// --- 1. Inspeksi & Pencarian Presisi ---
const logEntry = "2024-10-25 [AUTH_SERVICE] ERROR: Token expired for user_9921";

console.log(logEntry.includes("[AUTH_SERVICE]")); // true
console.log(logEntry.startsWith("2024-10-25"));   // true
console.log(logEntry.endsWith("user_9921"));      // true
console.log(logEntry.indexOf("ERROR"));           // 26 (posisi indeks awal)

// --- 2. Ekstraksi Modern & Negative Indexing (ES2022+) ---
const payload = "TX-89412-ID";

// .at() mendukung indeks negatif tanpa kalkulasi manual str.length - 1
console.log(payload.at(0));   // "T"
console.log(payload.at(-1));  // "D"
console.log(payload.at(-2));  // "I"

// .slice(start, end) mengekstrak substring (start inclusive, end exclusive)
const txCode = payload.slice(3, 8); // "89412"
const region = payload.slice(-2);   // "ID"
console.log({ txCode, region });

// --- 3. Transformasi, Replacement, & Padding ---
const dirtyInput = "   admin@domain.internal   \n";
const cleanInput = dirtyInput.trim(); // membersihkan whitespace di kedua sisi
console.log(`Cleaned: '${cleanInput}'`);

const rawTemplate = "User {id} requested transfer of {id} currency";
// .replaceAll() menggantikan seluruh kemunculan tanpa butuh global regex /g
const populated = rawTemplate.replaceAll("{id}", "9901");
console.log(populated); // "User 9901 requested transfer of 9901 currency"

// Format angka sequential dengan padStart / padEnd
const invoiceSeq = "45";
const formattedInvoice = `INV-${invoiceSeq.padStart(6, "0")}`;
console.log(formattedInvoice); // "INV-000045"

// --- 4. Tagged Template Literals ---
// Fungsi parser kustom yang mencegat string fragments dan evaluated expressions
function sqlSanitizer(strings, ...values) {
  return strings.reduce((accumulator, fragment, index) => {
    const value = values[index - 1];
    // Contoh sanitasi sederhana: escape single quotes untuk mencegah injection
    const sanitizedValue = typeof value === "string" 
      ? `'${value.replaceAll("'", "''")}'` 
      : value;
    return accumulator + sanitizedValue + fragment;
  });
}

const userIdInput = "admin' OR '1'='1";
const query = sqlSanitizer`SELECT * FROM users WHERE username = ${userIdInput} AND status = ${1}`;
console.log(query);
// Output: SELECT * FROM users WHERE username = 'admin'' OR ''1''=''1' AND status = 1
```

### 3. Studi Kasus Nyata
Dalam sistem *Payment Gateway*, data sensitif (seperti nomor kartu kredit, identitas pengguna, dan token transaksi) wajib disanitasi (*masking*) sebelum dicatat ke sistem audit log terdistribusi.

```javascript
// Generator Data Masking dan Payload Normalizer
class AuditLogFormatter {
  static maskCreditCard(cardNumber) {
    const sanitized = cardNumber.replaceAll(/\D/g, ""); // Hapus non-digit
    if (sanitized.length < 13 || sanitized.length > 19) {
      throw new Error("Nomor kartu tidak valid");
    }
    
    const visibleTail = sanitized.slice(-4);
    const maskedHead = "*".repeat(sanitized.length - 4);
    
    // Kelompokkan dalam chunk 4 karakter
    const fullMasked = (maskedHead + visibleTail);
    return fullMasked.match(/.{1,4}/g)?.join("-") ?? fullMasked;
  }

  static parseAuditMetadata(rawLog) {
    // Memproses log terstruktur dengan pemotongan efisien
    const parts = rawLog.split("|").map(segment => segment.trim());
    const [timestamp, level, context, rawMessage] = parts;

    return {
      timestamp,
      level,
      context: context.replace(/^\[|\]$/g, ""),
      message: rawMessage.replaceAll('"', "")
    };
  }
}

// Eksekusi Kasus
const rawCard = "4111-2222-3333-4567";
const maskedResult = AuditLogFormatter.maskCreditCard(rawCard);
console.log(`Masked Card: ${maskedResult}`); // "************-4567" -> format chunk: "****-****-****-4567"

const rawSystemLog = "2024-11-04T10:00:00Z | WARN | [PAYMENT_GATEWAY] | \"Transaction timeout from vendor\"";
const parsedLog = AuditLogFormatter.parseAuditMetadata(rawSystemLog);
console.log(parsedLog);
// { timestamp: '2024-11-04T10:00:00Z', level: 'WARN', context: 'PAYMENT_GATEWAY', message: 'Transaction timeout from vendor' }
```

### 4. Visualisasi & Mental Model

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                   V8 Heap & Immutability Lifecycle                      │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. Inisialisasi:                                                        │
│    const str = "JavaScript"; ──> [ Heap: String ("JavaScript") ]       │
│                                           │                             │
│ 2. Operasi Non-Mutasi (Gagal):            ▼                             │
│    str[0] = "Y";              ──> [ Nilai Heap Tidak Berubah ]          │
│                                                                         │
│ 3. Pembuatan String Baru:                                               │
│    const updated = str.slice(4);                                        │
│          │                                                              │
│          └──> [ Alokasi Heap Baru: "Script" ]                           │
│               (str asli tetap utuh di referensi awal)                   │
├─────────────────────────────────────────────────────────────────────────┤
│               Indexing: Positive vs Negative (.at / .slice)             │
│                                                                         │
│   Karakter :   J    a    v    a    S    c    r    i    p    t          │
│   Positif  :   0    1    2    3    4    5    6    7    8    9          │
│   Negatif  : -10   -9   -8   -7   -6   -5   -4   -3   -2   -1          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ Gunakan `str.at(-1)` daripada `str[str.length - 1]` untuk mendapatkan karakter terakhir karena sintaksnya lebih ringkas, aman, dan ekspresif.
- ✅ Utamakan `str.replaceAll("pattern", "replacement")` dibanding `str.replace(/pattern/g, "replacement")` saat melakukan penggantian string statis sederhana tanpa regular expression.
- ✅ Gunakan `str.slice()` daripada metode warisan lama seperti `str.substr()` (sudah deprecated) atau `str.substring()` karena konsistensi perilakunya terhadap indeks negatif.
- ❌ Jangan melakukan konkatenasi ribuan string di dalam loop sinkronus intensif (`str += data`). Gunakan array buffer yang diakhiri dengan `arr.join("")` untuk meminimalkan beban pembuatan objek *ConsString* pada engine JavaScript.

---

## ✍️ Latihan Mandiri
1. Buka **Code Editor di bawah**, lalu buat fungsi `formatCurrency(amount, currencyCode)` yang menerima angka mentah (misal: `75000`) dan kode (misal: `"IDR"`), lalu mengembalikan string dengan format rata kanan 15 karakter dengan padding titik (contoh output: `IDR.......75.000`).
2. Tulis implementasi *Tagged Template Literals* bernama `highlight` di **Code Editor di bawah** yang secara otomatis membungkus setiap variabel string atau number di dalam tag `<mark>value</mark>`, sedangkan fragmen teks statis dibiarkan apa adanya.

---

## 🔗 Referensi
- [MDN Web Docs: String Standard Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [ECMAScript® 2024 Language Specification: String Objects](https://tc39.es/ecma262/#sec-string-objects)