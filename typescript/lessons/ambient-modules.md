# Ambient Modules dan declare

**Ambient modules** adalah cara TypeScript untuk mendeskripsikan module yang sudah ada di lingkungan JavaScript (library eksternal tanpa TypeScript types). Kata kunci `declare` digunakan untuk menambahkan type definitions tanpa implementation, memungkinkan TypeScript memahami library yang tidak ditulis dalam TypeScript.

⏱️ 20 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Integration

##
Tujuan Pembelajaran

-
Memahami apa itu **ambient declarations** dan kapan digunakan

-
Menggunakan `declare module 'library-name'` untuk ambient module

-
Menambahkan **global variable types** dengan `declare var/let/const`

-
Mendefinisikan **global function types** dengan `declare function`

-
Menggunakan `declare namespace` untuk global namespaces

-
Memahami perbedaan **.d.ts files** vs regular .ts files

## Apa itu Ambient Declarations?

**Ambient declarations** adalah deklarasi TypeScript yang hanya memberikan informasi **type** tanpa menyediakan **implementation**. Mereka digunakan untuk menggambarkan kode yang sudah ada di luar TypeScript environment (seperti library JavaScript vanilla, global variables dari browser, atau native APIs). Ambient declarations selalu menggunakan kata kunci `declare` dan tidak menghasilkan JavaScript code saat dikompilasi.

### 🔑 Aturan Ambient Declarations:

- Hanya berisi **type information**, tidak ada implementation

- Gunakan kata kunci `declare` di depan deklarasi

- Biasanya ditempatkan di file `.d.ts` (declaration files)

- TypeScript akan **ignore** file .d.ts saat emit JavaScript (hanya untuk type checking)

- Berguna untuk JavaScript libraries, global variables, DOM APIs, dll

## Ambient Modules untuk External Libraries

Ketika menggunakan JavaScript library yang tidak memiliki TypeScript definitions, kita perlu membuat **ambient module declaration** agar TypeScript tidak error saat import dan penggunaan.

### Contoh: Library 'moment' (tanpa @types)

// File: types/moment.d.ts
declare module 'moment' {
export default class Moment {
format(pattern: string): string;
add(amount: number, unit: string): this;
subtract(amount: number, unit: string): this;
// ... method lain yang dibutuhkan
}

export function utc(): Moment;
export function unix(timestamp: number): Moment;
}

// File: app.ts
import moment from 'moment';  // TypeScript tahu 'moment' dari ambient module

const now = moment();
console.log(now.format('YYYY-MM-DD'));

## Global Variable & Function Declarations

Banyak library JavaScript menambahkan variabel global atau fungsi global ke environment (biasanya melalui `<script>` tag). TypeScript perlu tahu types untuk variabel/fungsi global tersebut.

### Contoh: Global Variable (jQuery $)

// File: types/jquery.d.ts
declare var $: typeof import('jquery');

// Atau lebih detail:
declare const $: {
(selector: string): JQuery;
ajax(settings: any): void;
// ... method lainnya
};

### Contoh: Global Function

// File: types/google-analytics.d.ts
declare function ga(command: string, ...args: any[]): void;

// Penggunaan:
ga('send', 'event', 'button', 'click');

## Ambient Namespaces

Beberapa library membuat **namespace global** (object yang berisi banyak properties/functions). Kita bisa mendeklarasikannya dengan `declare namespace`.

// File: types/google-maps.d.ts
declare namespace google {
interface MapOptions {
center: LatLng;
zoom: number;
}

class Map {
constructor(element: HTMLElement, options: MapOptions);
setCenter(latLng: LatLng): void;
}

interface LatLng {
lat(): number;
lng(): number;
}
}

// Penggunaan:
const map = new google.Map(document.getElementById('map'), {
center: { lat: -6.2088, lng: 106.8456 },
zoom: 10
});

## Triple-Slash Directives

TypeScript menggunakan **triple-slash directives** `/// <reference ... />` untuk menyatakan dependency antar declaration files. Ini jarang digunakan hari ini karena TypeScript secara otomatis menemukan file .d.ts di `node_modules/@types` dan folder yang dikonfigurasi di `tsconfig.json`.

// Lama (sebelum TypeScript 2.0)
/// <reference path="../types/jquery.d.ts" />

// Modern: TypeScript auto-includes dari node_modules/@types
// Tidak perlu triple-slash jika file .d.ts di folder yang tepat

### ✅ Best Practice:

Selamainya gunakan **DefinitelyTyped** (`@types/package`) untuk library populer. Hanya buat ambient declaration manual untuk:

- Library yang sudah tidak maintenance dan tidak ada di @types

- Custom global variables dari legacy scripts

- Internal APIs yang tidak bisa di-import sebagai module

- Browser APIs yang belum didukung TypeScript (experimental)

##
💻
Latihan Praktis

### Latihan 1: Ambient Module untuk Legacy Library

Anda harus menggunakan library JavaScript `legacy-analytics.js` yang menambahkan global function `trackEvent(eventName, data)`. Buat file `types/legacy-analytics.d.ts` dengan ambient declaration yang tepat.

### Latihan 2: Global Namespace Declaration

Library `charting-lib.js` menambahkan global namespace `ChartLib` dengan interface `Chart` dan `ChartOptions`. Buat ambient declaration untuk namespace tersebut.

### Latihan 3: Ambient Module dengan Multiple Exports

Module `'payment-gateway'` (JavaScript) export default class `PaymentGateway` dan named export interface `PaymentOptions`. Buat ambient module declaration yang akurat.

← Sebelumnya: Dynamic Import

🔖 Bookmark

✓ Selesai

Selanjutnya: Namespaces →
