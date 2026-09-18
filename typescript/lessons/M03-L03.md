# Dynamic Import dan Code Splitting

**Dynamic import()** adalah fitur ECMAScript yang memungkinkan kita memuat module secara **lazy** (baru saat dibutuhkan). Di TypeScript, fitur ini digunakan untuk **code splitting** - memecah bundle besar menjadi chunk-chunk kecil yang dimuat sesuai permintaan, meningkatkan performa initial load.

⏱️ 20 menit
📊 Kesulitan: Menengah
📚 Tipe: Performance Optimization

##
Tujuan Pembelajaran

-
Memahami konsep **code splitting** dan mengapa penting untuk performa

-
Menggunakan `import()` expression untuk dynamic import

-
Menangani module yang di-load secara async dengan `Promise`

-
Mengimplementasikan **route-based splitting** di aplikasi web

-
Menggunakan `import.meta.glob` (Vite) atau similar patterns

-
Memahami TypeScript types untuk dynamic import: `typeof import()`

## Apa itu Code Splitting?

Secara default, bundler (Webpack, Rollup, esbuild) menggabungkan semua module JavaScript/TypeScript menjadi satu atau beberapa file bundle besar. **Code splitting** adalah teknik untuk memecah bundle tersebut menjadi **chunks** yang lebih kecil yang dimuat secara **lazy** hanya ketika diperlukan. Ini sangat mengurangi **initial load time** karena user tidak perlu download seluruh aplikasi sekaligus.

### 🚀 Manfaat Code Splitting:

- **Faster initial load** - hanya download code yang diperlukan untuk halaman awal

- **Better caching** - chunk-chunk yang rarely changed bisa di-cache lebih lama

- **Reduced bandwidth** - user hanya download kode yang akan dieksekusi

- **Improved user experience** - interaksi lebih cepat, terutama di mobile

## Dynamic import() Expression

**Dynamic import()** adalah fungsi built-in yang mengembalikan `Promise` untuk module yang di-load. Tidak seperti static import (yang di-evaluate pada compile time), dynamic import dieksekusi pada runtime.

// Static import (compile-time, synchronous evaluation)
import { someFunction } from './module';
someFunction();

// Dynamic import (runtime, async evaluation)
import('./module')
.then(module => {
module.someFunction();
})
.catch(err => {
console.error('Failed to load module', err);
});

// Dengan async/await
const module = await import('./module');
module.someFunction();

### ⚠️ Penting:

Dynamic import() hanya bisa digunakan di tingkat **module top-level** atau di dalam **functions/blocks**. Tidak bisa digunakan di dalam `if` statements secara synchronous, tapi bisa di dalam async function. Path string bisa berupa literal atau template string (dynamic path).

### TypeScript Types untuk Dynamic Import

Ketika menggunakan dynamic import, TypeScript perlu tahu struktur module yang akan di-load. Gunakan `typeof import()` untuk mengambil type dari module.

// File: heavy-module.ts
export interface HeavyData {
id: number;
name: string;
metadata: Record<string, any>;
}

export function processHeavyData(data: HeavyData[]): HeavyData[] {
return data.filter(d => d.id > 0);
}

export default class HeavyProcessor {
process(data: HeavyData[]): HeavyData[] {
return processHeavyData(data);
}
}

// File: app.ts - dengan typing
type HeavyModule = typeof import('./heavy-module');

async function loadHeavyFeature(): Promise<void> {
const module: HeavyModule = await import('./heavy-module');

const data: HeavyModule.HeavyData[] = [
{ id: 1, name: 'Item 1', metadata: {} },
{ id: 2, name: 'Item 2', metadata: {} }
];

const processor = new module.default();
const result = processor.process(data);
console.log(result);
}

## Use Cases untuk Dynamic Import

### 1. Route-Based Code Splitting (SPA)

Di aplikasi single-page app (React, Vue, Svelte), kita bisa lazy-load route components hanya ketika user navigasi ke rute tersebut.

// File: router.ts (contoh dengan vanilla TS)
const routes = new Map<string, () => Promise<Module>>>();

routes.set('/dashboard', () => import('./pages/dashboard'));
routes.set('/settings', () => import('./pages/settings'));
routes.set('/profile', () => import('./pages/profile'));

async function navigate(path: string): Promise<void> {
const loader = routes.get(path);
if (loader) {
const module = await loader();
// Render module.default atau module.
}
}

### 2. Feature-Based Splitting

Load heavy features (charting, editor, video processing) hanya ketika user aktif menggunakan fitur tersebut.

// File: app.ts
let chartModule: typeof import('./charts') | null = null;

async function showChartEditor() {
if (!chartModule) {
chartModule = await import('./charts');  // Load hanya sekali
}
const ChartEditor = chartModule.default;
// Tampilkan editor
}

### 3. Conditional Loading

Load module berbeda berdasarkan kondisi (browser support, user role, device type).

async function loadPaymentGateway(provider: string) {
let module;
switch (provider) {
case 'stripe':
module = await import('./payments/stripe');
break;
case 'paypal':
module = await import('./payments/paypal');
break;
}
return module?.default;
}

## Webpack Magic Comments

Ketika menggunakan Webpack, kita bisa memberikan **magic comments** pada dynamic import untuk mengontrol chunk creation dan naming.

// Buat chunk dengan nama spesifik
const module = await import(/* webpackChunkName: "charts" */ './charts');

// Prefetch chunk (akan di-download saat idle)
const module = await import(/* webpackPrefetch: true */ './heavy-module');

// Preload chunk (prioritas tinggi, di-download segera)
const module = await import(/* webpackPreload: true */ './critical-module');

// Multiple chunks dalam satu import
const [moduleA, moduleB] = await Promise.all([
import(/* webpackChunkName: "utils-a" */ './utils-a'),
import(/* webpackChunkName: "utils-b" */ './utils-b')
]);

### ✅ Best Practice:

Gunakan **dynamic import()** untuk komponen/routes yang tidak diperlukan saat initial load. Pastikan showing loading state (spinner, skeleton) saat module di-load. Avoid over-splitting - terlalu banyak chunk bisa increase HTTP requests.

##
💻
Latihan Praktis

### Latihan 1: Lazy Load Report Generator

Anda memiliki module `report-generator.ts` yang berat (200KB) karena library PDF generation. Implementasikan lazy loading:

- Buat tombol "Generate PDF Report" di UI

- Ketika tombol diklik, dynamic import module `report-generator`

- Tampilkan loading spinner selama module di-load

- Setelah loaded, panggil fungsi `generateReport(data)`

### Latihan 2: Route-Based Splitting

Buat sistem routing sederhana dengan 3 halaman: Home (langsung), Dashboard (lazy), Settings (lazy). Setiap halaman adalah module terpisah dengan default export. Gunakan dynamic import saat navigasi ke Dashboard/Settings.

### Latihan 3: Typing Dynamic Import

Module `image-editor.ts` export default class `ImageEditor` dan named export interface `EditorOptions`. Buat function `loadImageEditor()` yang:

- Dynamic import module dengan proper TypeScript typing

- Return instance dari ImageEditor class

- Accept parameter `options: EditorOptions`

← Sebelumnya: Barrel Files

🔖 Bookmark

✓ Selesai

Selanjutnya: Ambient Modules →
