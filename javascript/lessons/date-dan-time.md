# Date dan Temporal API

**Slug**: `date-dan-time` · **Level**: Intermediate · **Waktu**: 20 Menit

## 🎯 Tujuan Pembelajaran
- Memahami representasi internal objek `Date`, komputasi Unix Epoch milidetik, serta mekanisme timezone offset pada engine JavaScript.
- Menguasai pemformatan internasionalisasi deterministik menggunakan `Intl.DateTimeFormat` untuk menangani variasi lokal dan zona waktu.
- Mengidentifikasi kelemahan arsitektural `Date` klasik (mutabilitas, parsing ambigu) dan mengadopsi paradigma baru TC39 `Temporal API` (tipe data terpisah, `PlainDate`, `ZonedDateTime`, presisi nanodetik).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Objek `Date` klasik diimplementasikan sejak JavaScript 1.0 (diadaptasi dari `java.util.Date` pada JDK 1.0). Secara internal di V8 engine, instance `Date` membungkus satu nilai primitif floating-point 64-bit IEEE 754 di dalam internal slot `[[DateValue]]`. Nilai ini merepresentasikan jumlah milidetik yang telah berlalu sejak *Unix Epoch* (1 Januari 1970 00:00:00 UTC). Batas maksimum representasi waktu adalah ±100,000,000 hari terhadap Epoch.

Terdapat tiga kelemahan mendasar pada `Date` warisan:
1. **Mutabilitas State**: Method setter seperti `.setFullYear()` atau `.setMonth()` memodifikasi referensi memori instance secara langsung (*in-place mutation*). Hal ini menyebabkan efek samping (*side-effects*) ketika instance dibagikan lintas modul atau fungsi.
2. **Indexing Bulan Berbasis Nol (0-Indexed)**: Bulan direpresentasikan dari `0` (Januari) hingga `11` (Desember), sedangkan tanggal berbasis 1 (`1`–`31`). Inkonsistensi ini memicu *off-by-one errors*.
3. **Ambiguasi Parsial Timezone**: Parsing string seperti `new Date("2024-05-15")` diperlakukan sebagai UTC, sedangkan `new Date("2024-05-15T00:00:00")` sering kali diparsing sebagai Local Time oleh implementasi browser lama. Selain itu, `Date` tidak mendukung representasi tanggal murni tanpa komponen waktu atau zona waktu.

Untuk mengatasi limitasi tersebut, proposal TC39 menghadirkan **Temporal API**. Temporal memisahkan entitas waktu menjadi tipe-tipe spesifik yang bersifat *immutable*:
- `Temporal.Instant`: Titik absolut pada garis waktu universal (presisi nanodetik, berbasis epoch UTC).
- `Temporal.ZonedDateTime`: Titik waktu absolut yang terikat pada kalender dan zona waktu geografis spesifik (IANA Timezone).
- `Temporal.PlainDate`, `Temporal.PlainTime`, `Temporal.PlainDateTime`: Representasi waktu lokal "di dinding" (*wall-clock time*) tanpa offset timezone.
- `Temporal.Duration`: Representasi durasi waktu untuk operasi aritmetika deterministik.

### 2. Sintaks & Penggunaan Modern

Manipulasi waktu modern menuntut isolasi mutasi menggunakan immutability, pemformatan via `Intl`, serta penggunaan `Temporal` (atau polyfill `@js-temporal/polyfill`).

```javascript
// --- 1. Pendekatan Klasik Modern: Intl.DateTimeFormat ---
const now = new Date();

// Formatting lokal tanpa library eksternal
const jakartaFormatter = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  dateStyle: 'full',
  timeStyle: 'long',
});

console.log("Format ID-Jakarta:", jakartaFormatter.format(now));
// Output: Format ID-Jakarta: [Hari], [Tanggal] [Bulan] [Tahun] pukul [Jam].[Menit].[Detik] GMT+7

// Perhitungan Imutabel Manual pada Date Klasik
function addDaysImmutable(date, days) {
  const result = new Date(date.getTime()); // Salin primitive timestamp
  result.setDate(result.getDate() + days);
  return result;
}

const baseDate = new Date('2024-01-31T00:00:00Z');
const nextMonth = addDaysImmutable(baseDate, 1);
console.log("Base Date:", baseDate.toISOString()); // Tetap 2024-01-31
console.log("Next Day:", nextMonth.toISOString());   // 2024-02-01

// --- 2. Temporal API (Spesifikasi Modern TC39 Stage 3/4) ---
// Simulasi fungsional pola Temporal API
if (typeof Temporal !== 'undefined') {
  // Titik waktu absolut
  const instant = Temporal.Now.instant();
  console.log("Instant Epoch Nanoseconds:", instant.epochNanoseconds);

  // Waktu spesifik zona geografis IANA
  const zonedDateTime = instant.toZonedDateTimeISO('Asia/Tokyo');
  console.log("Tokyo Time:", zonedDateTime.toString());

  // Tanggal murni tanpa timezone (misal: Tanggal Lahir)
  const birthday = Temporal.PlainDate.from({ year: 1995, month: 8, day: 17 });
  const nextBirthday = birthday.add({ years: 30 });
  console.log("PlainDate 30 Tahun Kemudian:", nextBirthday.toString()); // 2025-08-17

  // Perhitungan Durasi Antardua Tanggal
  const d1 = Temporal.PlainDate.from('2024-01-01');
  const d2 = Temporal.PlainDate.from('2024-12-31');
  const duration = d1.until(d2, { largestUnit: 'day' });
  console.log(`Selisih: ${duration.days} hari`); // 365 hari (2024 tahun kabisat)
} else {
  console.log("Engine belum mengaktifkan flag global Temporal (Gunakan polyfill pada runtime).");
}
```

### 3. Studi Kasus Nyata

**Studi Kasus**: Sistem Kalkulasi SLA (*Service Level Agreement*) Pemrosesan Pesanan Antar-Zona Waktu dengan Memperhitungkan Jam Kerja (UTC offset awareness).

```javascript
/**
 * Menghitung batas akhir SLA (deadline) pemrosesan pesanan.
 * Pesanan setelah pukul 17:00 waktu gudang (WIB) akan dialihkan ke hari kerja berikutnya.
 */
function calculateOrderSLA(orderTimestampISO, workingHoursDuration = 24) {
  const orderDate = new Date(orderTimestampISO);
  
  // Ambil data komponen jam di zona waktu gudang (Asia/Jakarta)
  const partsFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    hour12: false,
  });
  
  const warehouseHour = parseInt(partsFormatter.format(orderDate), 10);
  let slaTarget = new Date(orderDate.getTime());

  // Logika cutoff: Jika order > 17:00 WIB, tambahkan rollover 12 jam sebelum hitung SLA
  if (warehouseHour >= 17) {
    slaTarget = new Date(slaTarget.getTime() + (12 * 60 * 60 * 1000));
  }

  // Tambahkan durasi SLA (jam ke milidetik)
  slaTarget = new Date(slaTarget.getTime() + (workingHoursDuration * 60 * 60 * 1000));

  return {
    orderReceivedAtUTC: orderDate.toISOString(),
    slaDeadlineUTC: slaTarget.toISOString(),
    slaDeadlineWIB: new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }).format(slaTarget)
  };
}

// Simulasi pesanan masuk pukul 18:30 WIB (11:30 UTC)
const incomingOrder = "2024-03-25T11:30:00.000Z";
const slaDetails = calculateOrderSLA(incomingOrder, 24);
console.log("Detail SLA Pesanan:", slaDetails);
```

### 4. Diagram Alur & Visualisasi Event Loop

Objek `Date` mengandalkan *system clock* OS melalui layer abstraksi kernel. Ketika timer asynchronous seperti `setTimeout` atau `setInterval` dieksekusi bersamaan dengan pembacaan waktu, resolusi waktu tidak selalu tepat pada level milidetik karena mekanisme penjadwalan Macrotask.

Berikut visualisasi interaksi Call Stack, Web APIs, Microtask Queue, dan Macrotask Queue:

```text
┌────────────────┐     ┌────────────────────────┐
│   Call Stack   │ ──> │ Web APIs / libuv Timer │
│  (Synchronous) │     │ (fetch, setTimeout, DOM)│
└───────┬────────┘     └───────────┬────────────┘
        │                          │
        ▼ (Queueing)               ▼ (Resolved)
┌────────────────┐     ┌────────────────────────┐
│ Microtask Queue│     │    Macrotask Queue     │
│(Promise, async)│     │(setTimeout, setInterval│
└────────────────┘     └────────────────────────┘
```

Saat eksekusi berjalan:
1. `const start = Date.now()` dieksekusi secara sinkron di **Call Stack**.
2. Pemanggilan `setTimeout(cb, 100)` mendaftarkan timer ke **libuv / Web APIs**.
3. Callback timer diletakkan ke **Macrotask Queue** setelah 100ms.
4. Jika **Call Stack** atau **Microtask Queue** terblokir oleh komputasi berat, eksekusi callback akan tertunda (*timer drift*), sehingga `Date.now() - start` di dalam callback menghasilkan nilai lebih besar dari 100ms.

---

## 💡 Best Practices & Tips
- ✅ **Gunakan `Intl.DateTimeFormat`** untuk formatting teks tanggal alih-alih manipulasi string manual atau memanggil `.getMonth()`, `.getDate()`.
- ✅ **Simpan dan transmisikan data waktu selalu dalam format UTC** (misal: ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ` atau Unix timestamp integer). Konversi ke local time hanya pada *presentation layer* pengguna.
- ✅ **Lakukan kloning eksplisit** (`new Date(existingDate.getTime())`) sebelum memanggil method mutator pada `Date` warisan untuk mencegah perubahan state yang tidak disengaja.
- ❌ **Hindari parsing string non-standar dengan `Date.parse()`** atau `new Date("2024/01/02")` karena engine browser memiliki implementasi parsing heuristik yang berbeda-beda.

---

## ✍️ Latihan Mandiri
1. Di **Code Editor di bawah**, buatlah fungsi `getDaysBetweenDates(dateStr1, dateStr2)` yang menerima dua string ISO murni (`YYYY-MM-DD`), memproses perhitungan selisih hari secara akurat tanpa terpengaruh pergeseran jam *Daylight Saving Time* (DST).
2. Di **Code Editor di bawah**, buat implementasi pemformat format jadwal penerbangan yang menerima UTC timestamp dan mengembalikan object berisi waktu keberangkatan dalam dua zona waktu berbeda (`Asia/Jakarta` dan `Europe/London`) menggunakan `Intl.DateTimeFormat`.

---

## 🔗 Referensi
- [MDN Web Docs: Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN Web Docs: Temporal API Proposal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [ECMAScript Specification: Date Objects & Temporal Proposal](https://tc39.es/proposal-temporal/)