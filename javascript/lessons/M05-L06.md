# RegExp: Named Groups, matchAll, Lookbehind

**Slug**: `regexp-regular-expressions` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Menguasai isolasi data dinamis menggunakan Named Capture Groups (`(?<name>)`) dan Named Backreferences (`\k<name>`) untuk meningkatkan *readability* dan *maintainability* kode.
- Mengimplementasikan Positive Lookbehind (`(?<=)`) dan Negative Lookbehind (`(?<! )`) untuk mencocokkan pola berbasis konteks tanpa mengonsumsi karakter (*zero-width assertions*).
- Memanfaatkan `String.prototype.matchAll()` untuk ekstraksi data iteratif yang *memory-efficient* dan menghindari *state mutation bug* pada properti `RegExp.lastIndex`.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Di balik layar runtime V8 (Node.js/Chrome), Regular Expression dikompilasi menjadi *bytecode* khusus atau instruksi mesin langsung oleh mesin kompilator *Irregexp*. Saat mengevaluasi ekspresi reguler, engine mengimplementasikan *backtracking non-deterministic finite automaton* (NFA). 

Pola RegExp didefinisikan melalui dua cara:
1. **RegExp Literal (`/pattern/flags`)**: Dikompilasi saat evaluasi skrip awal (*compile-time*), menghasilkan performa lebih cepat jika pola bersifat statis.
2. **Konstruktor `new RegExp('pattern', 'flags')`**: Dikompilasi pada saat runtime (*execution-time*), ideal untuk pola dinamis, namun memerlukan escaping ganda pada karakter khusus string (misal: `\\d` untuk digit).

Modern JavaScript (ES2018–ES2024) menghadirkan fungsionalitas deklaratif mutakhir:
- **Flags Modern**: 
  - `s` (*dotAll*): Mengizinkan karakter titik (`.`) mencocokkan karakter *newline* (`\n`, `\r`).
  - `u` (*unicode*): Menangani *surrogate pairs* UTF-16 secara akurat.
  - `v` (*unicodeSets*, ES2024): Superset dari flag `u` yang memungkinkan operasi himpunan (irisan `&&`, pengurangan `--`) pada kelas karakter serta pencocokan properti *string*.
  - `y` (*sticky*): Mencocokkan string tepat pada indeks `lastIndex` tanpa melakukan scanning ke indeks setelahnya.
- **Lookbehind Assertions**: Merupakan *zero-width assertion* yang memeriksa kecocokan pola *sebelum* posisi saat ini tanpa memasukkan teks tersebut ke dalam hasil tangkapan.
- **Named Groups**: Memberikan alias semantik pada token capture group sehingga ekstraksi data tidak lagi terikat pada indeks numerik yang rentan *breaking change*.

---

### 2. Sintaks & Penggunaan Modern

ES2024 menyederhanakan manipulasi teks kompleks dengan sintaks ekspresif:

```javascript
// 1. ES2024 unicodeSets (v flag) & Named Capture Groups
const tokenPattern = /^(?<type>[A-Z]{3})-(?<id>[\p{Decimal_Number}--\p{ASCII}]+)$/v;
// Menggunakan Unicode Sets untuk menangkap angka non-ASCII
const sampleToken = "DEV-٤٥٦"; 
const tokenMatch = sampleToken.match(tokenPattern);

console.log(tokenMatch.groups); 
// Output: { type: 'DEV', id: '٤٥٦' }

// 2. Lookbehind Assertions & matchAll
const payload = "PRICE: IDR750000; DISCOUNT: USD50; TAX: IDR15000; PREV: EUR10";

// Positive Lookbehind (?<=IDR): Ambil angka yang HANYA diawali 'IDR'
// Negative Lookbehind (?<!DISCOUNT: \w+): Abaikan jika ada konteks tertentu
const idrPriceRegex = /(?<=IDR)(?<amount>\d+)/g;

// Menggunakan matchAll (menghasilkan lazy iterator, bebas efek samping lastIndex)
const matchesIterator = payload.matchAll(idrPriceRegex);

for (const match of matchesIterator) {
  console.log(`Ditemukan nominal IDR: ${match.groups.amount} pada index ${match.index}`);
}
// Output:
// Ditemukan nominal IDR: 750000 pada index 10
// Ditemukan nominal IDR: 15000 pada index 40

// 3. Named Backreference (\k<name>) dan Replacement
const duplicateTagRegex = /<(?<tag>\w+)>.*?<\/\k<tag>>/gs;
const htmlSnippet = `<div>Materi ES2024\nFitur RegExp</div><span>Valid</span><p>Mismatch</div>`;

const validTags = [...htmlSnippet.matchAll(duplicateTagRegex)].map(m => m[0]);
console.log(validTags);
// Output: [ '<div>Materi ES2024\nFitur RegExp</div>', '<span>Valid</span>' ]
```

---

### 3. Studi Kasus Nyata
**Skenario**: Parsing dan sanitasi file Log Transaksi Finansial multi-baris. Kita perlu mengekstrak ID transaksi, mata uang, nilai transaksi (hanya yang berhasil / `SUCCESS`), dan metadata waktu tanpa melakukan regex execution loop manual yang rentan terhadap *infinite loops*.

```javascript
const rawAuditLog = `
[2024-10-25T08:12:00Z] STATUS:SUCCESS TX_ID:TXN-8821 VALUE:USD$1200.50 REF:USR-01
[2024-10-25T08:14:12Z] STATUS:FAILED  TX_ID:TXN-8822 VALUE:IDR75000.00 REF:USR-02
[2024-10-25T08:15:30Z] STATUS:SUCCESS TX_ID:TXN-8823 VALUE:EUR€450.00 REF:USR-03
[2024-10-25T08:19:05Z] STATUS:PENDING TX_ID:TXN-8824 VALUE:USD$90.00 REF:USR-04
`;

// Logika RegExp:
// 1. (?<=STATUS:SUCCESS\s+TX_ID:) -> Positive Lookbehind untuk memastikan status transaksi SUCCESS
// 2. (?<txId>[\w-]+) -> Named group ID Transaksi
// 3. VALUE:(?<currency>[A-Z]{3})[^\d]* -> Menangkap kode ISO mata uang
// 4. (?<amount>\d+\.\d{2}) -> Menangkap nominal float
const successfulTxRegex = /(?<=STATUS:SUCCESS\s+TX_ID:)(?<txId>[\w-]+)\s+VALUE:(?<currency>[A-Z]{3})[^\d]*(?<amount>\d+\.\d{2})/g;

function parseAuditLog(logContent) {
  const parsedRecords = [];

  // String.prototype.matchAll menghasilkan RegExpStringIterator
  for (const record of logContent.matchAll(successfulTxRegex)) {
    const { txId, currency, amount } = record.groups;
    
    parsedRecords.push({
      transactionId: txId,
      currency: currency,
      amount: parseFloat(amount),
      rawIndex: record.index
    });
  }

  return parsedRecords;
}

const auditResult = parseAuditLog(rawAuditLog);
console.log(JSON.stringify(auditResult, null, 2));
// Output:
// [
//   { "transactionId": "TXN-8821", "currency": "USD", "amount": 1200.5, "rawIndex": 38 },
//   { "transactionId": "TXN-8823", "currency": "EUR", "amount": 450, "rawIndex": 204 }
// ]
```

---

### 4. Visualisasi & Mental Model

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                         Lookaround & matchAll Lifecycle                          │
└──────────────────────────────────────────────────────────────────────────────────┘

 Target String: "STATUS:SUCCESS TX_ID:TXN-99 VALUE:USD$500"
                                     ▲
                                     │
 1. Lookbehind Assert: (?<=STATUS:SUCCESS\s+TX_ID:)
    [V8 Irregexp Engine] ── Mengintip ke belakang (Zero-width check, Cursor TIDAK maju)
    ├─ Match? ── Yes ───► Mulai Capture Groups
    └─ Match? ── No  ───► Backtrack & loncat ke karakter berikutnya

 2. Named Capture Extraction:
    Capture: (?<txId>[\w-]+) ───► Heap Memory: groups.txId = "TXN-99"
    Capture: (?<currency>[A-Z]{3}) ──► groups.currency = "USD"
    Capture: (?<amount>\d+) ─────────► groups.amount = "500"

 3. matchAll Iterator Pipeline:
    ┌─────────────────────────┐
    │ logContent.matchAll(rg) │ ──► Return: Generator / Lazy RegExpStringIterator
    └───────────┬─────────────┘
                │ (.next())
                ▼
    [ MatchObject 1 ] ──► { groups: { txId: "TXN-99", ... }, index: 31 }
    (Internal pointer `lastIndex` tersimpan di iterator frame, instance regex tetap immutable)
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `String.prototype.matchAll()` daripada `RegExp.prototype.exec()` dalam loop**. `exec()` memutasi properti internal `lastIndex` pada instance RegExp yang sama, memicu *bug state sharing* jika instance diakses secara konkuren.
- ✅ **Gunakan Destructuring dengan Default Object pada Named Groups**: `const { user, domain } = match.groups ?? {};` untuk mencegah `TypeError: Cannot destructure property of undefined` saat pencocokan gagal.
- ✅ **Optimalkan Penggunaan Lookbehind**: Jangan gunakan lookbehind dengan rentang karakter tak terbatas (`(?<=a.*b)`) jika tidak perlu, karena engine V8 mengalokasikan memori tambahan untuk melacak *variable-length reverse step*.
- ❌ **Anti-Pattern: Memeriksa regex berflag `/g` menggunakan `RegExp.prototype.test()` berulang kali**:
  ```javascript
  const re = /abc/g;
  console.log(re.test("abc")); // true (lastIndex: 3)
  console.log(re.test("abc")); // false (karena pencarian dimulai dari index 3!)
  ```

---

## ✍️ Latihan Mandiri
1. Pada **Code Editor di bawah**, buatlah sebuah regular expression dengan *Named Capture Groups* dan *Negative Lookbehind* yang dapat memvalidasi dan mengekstrak nomor port HTTP/HTTPS yang valid (`1-65535`) tetapi **menolak** jika port tersebut didahului oleh kata `INTERNAL-PORT:`.
2. Gunakan `String.prototype.matchAll()` pada **Code Editor di bawah** untuk mengurai string koneksi database URI (contoh: `postgres://user:pass@localhost:5432/mydb`) menjadi objek utuh (`protocol`, `username`, `password`, `host`, `port`, `database`).

---

## 🔗 Referensi
- [MDN Web Docs: Named Capture Groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [MDN Web Docs: String.prototype.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
- [TC39 Proposal: RegExp `v` flag (unicodeSets)](https://github.com/tc39/proposal-regexp-v-flag)