# Declaration Files (.d.ts)

**Declaration files** (file dengan ekstensi `.d.ts`) adalah mekanisme TypeScript untuk memberikan informasi typing tentang kode JavaScript yang sudah ada. File ini berisi only type definitions tanpa implementation, memungkinkan TypeScript memahami library JavaScript yang tidak ditulis dalam TypeScript.

⏱️ 20 menit
📊 Kesulitan: Menengah

##
1
Tujuan Pembelajaran

-
▹
Memahami fungsi dan tujuan declaration files dalam ekosistem TypeScript

-
▹
Membuat declaration file sederhana untuk JavaScript library

-
▹
Menggunakan `declare`, `module`, dan `namespace` dalam .d.ts files

-
▹
Mengintegrasikan declaration files dengan TypeScript project configuration

-
▹
Menemukan dan menggunakan declaration files dari DefinitelyTyped

##
2
Konsep Declaration Files

TypeScript adalah superset JavaScript yang menambahkan static typing. Namun, banyak library JavaScript yang ada belum memiliki type definitions. **Declaration files** (.d.ts) adalah solusi untuk memberikan informasi typing tentang kode JavaScript eksternal kepada TypeScript compiler tanpa mengubah kode asli.

### Karakteristik Declaration Files

- **Hanya berisi type information** - tidak ada implementation atau executable code

- **Ekstensi .d.ts** - TypeScript otomatis mengenali file ini sebagai declaration file

- **Global atau module** - Dapat mendefinisikan global variables atau module exports

- **Ambient contexts** - Menggunakan kata kunci `declare` untuk menandai definitions yang ada di runtime

### Kata Kunci `declare`

Kata kunci `declare` digunakan untuk menandakan bahwa variabel, function, class, atau module sudah ada di runtime (biasanya dari JavaScript library) dan hanya memberikan type information kepada TypeScript.

// declaration-file-example.d.ts
declare const myLibrary: {
(message: string): void;
version: string;
utils: {
format(date: Date): string;
};
};

### Module Declarations

Untuk library yang menggunakan module system (CommonJS, AMD, atau ES Modules), kita menggunakan `declare module` untuk mendefinisikan shape-nya.

// my-library.d.ts
declare module 'my-library' {
export function calculate(x: number, y: number): number;
export const VERSION: string;
export default class Calculator {
add(a: number, b: number): number;
subtract(a: number, b: number): number;
};
}

### Global Declarations

Beberapa library menambahkan variables ke global scope (seperti jQuery, lodash, atau utility functions). Declaration file dapat mendefinisikan global variables menggunakan `declare var`, `declare let`, atau `declare const`.

// jquery.d.ts
declare var $: {
(selector: string): JQuery;
ajax(settings: AjaxSettings): JqXHR;
};

interface JQuery {
text(value?: string): JQuery;
on(event: string, handler: Function): JQuery;
}

interface AjaxSettings {
url: string;
method?: string;
data?: any;
}

interface JqXHR extends Promise<any> {}

### Namespace Declarations

Namespace dalam declaration files digunakan untuk mengelompokkan related types dan interfaces, mirip dengan namespace di TypeScript. Berguna untuk library yang mengorganisir API dalam namespace.

// d3.d.ts
declare namespace D3 {
export interface Selection<T, TResult, TThis, TJoin> {
append(name: string): Selection<T, TResult, TThis, TJoin>;
attr(name: string, value: string | number): this;
data(values: Array<T>): this;
}

export function select(selector: string): Selection<any, any, any, any>;
export function selectAll(selector: string): Selection<any, any, any, any>;
}

### Augmenting Existing Types

Kadang kita ingin menambahkan properties atau methods ke existing types (seperti adding custom methods ke `String` prototype). Declaration files mendukung **declaration merging** dan **module augmentation`.

// custom-string-extensions.d.ts
interface String {
capitalize(): string;
toTitleCase(): string;
}

declare module 'express' {
export interface Request {
user?: User;
startTime: Date;
}
}

### Triple-Slash Directives

Triple-slash directives (`/// <reference ... />`) digunakan untuk memberikan instruksi kepada TypeScript compiler tentang file-file lain yang harus di-include dalam compilation. Ini adalah cara lama, dan modern TypeScript lebih memilih menggunakan `tsconfig.json` `include` dan `files`.

/// <reference path="./jquery.d.ts" />
/// <reference path="./d3.d.ts" />

// Sekarang kita bisa menggunakan types dari library tersebut
const element = $('#my-div');
element.text('Hello World');

##
3
Contoh Praktis: Declaration File untuk Library JavaScript

Mari kita buat declaration file untuk hypothetical JavaScript library `chart-library` yang belum memiliki TypeScript support.

###  Struktur Library

Library ini memiliki:

- Global function `createChart`

- Module exports untuk `Chart` class, tipe `ChartOptions`, dan `ChartData`

- Event system dengan event names dan callback signatures

// chart-library.d.ts

// 1. Global function untuk browser environment
declare function createChart(container: HTMLElement, options: ChartOptions): Chart;

// 2. Type definitions
export interface ChartOptions {
type: 'bar' | 'line' | 'pie';
title?: string;
width?: number;
height?: number;
responsive?: boolean;
theme?: 'light' | 'dark';
}

export interface ChartData {
labels: string[];
datasets: Dataset[];
}

export interface Dataset {
label: string;
data: number[];
backgroundColor?: string | string[];
borderColor?: string;
}

// 3. Class definition
export default class Chart {
constructor(container: HTMLElement, options: ChartOptions);

update(data: ChartData): void;
destroy(): void;
resize(width: number, height: number): void;

on(event: ChartEvent, callback: EventListener): this;
off(event: ChartEvent, callback?: EventListener): this;
}

export type ChartEvent =
| 'click'
| 'hover'
| 'legendClick'
| 'dataPointClick';

export interface EventListener {
(event: ChartEvent, data?: any): void;
}

// 4. Module declaration untuk import syntax
declare module 'chart-library' {
export default Chart;
export { createChart, ChartOptions, ChartData, Dataset, ChartEvent };
}

### Penggunaan di TypeScript Project

Setelah declaration file dibuat, letakkan di direktori project (biasanya di `types/` atau `@types/` folder) dan TypeScript akan otomatis menggunakan type definitions tersebut.

// tsconfig.json
{
"compilerOptions": {
"typeRoots": ["./node_modules/@types", "./types"],
"types": [] // empty array means include all @types
}
}

// app.ts
import Chart from 'chart-library';
import { createChart, ChartOptions } from 'chart-library';

const container = document.getElementById('chart') as HTMLElement;

const options: ChartOptions = {
type: 'bar',
title: 'Sales Data',
responsive: true
};

const chart = new Chart(container, options);
chart.update({
labels: ['Jan', 'Feb', 'Mar'],
datasets: [{
label: 'Revenue',
data: [1000, 2000, 1500]
}]
});

##
4
Latihan & Exercises

### Exercise 1: Simple Utility Library

Buat declaration file untuk utility library `utils-lib` yang memiliki following functions:

- `formatDate(date: Date, format: string): string`

- `deepClone<T>(obj: T): T`

- `debounce<T extends (...args: any[]) => any>(func: T, wait: number): T`

- ` throttle<T extends (...args: any[]) => any>(func: T, limit: number): T`

### Exercise 2: DOM Manipulation Library

TypeScript tidak tahu tentang DOM API secara default di Node.js environment. Buat declaration file yang menambahkan types untuk:

- `document.getElementById(id: string): HTMLElement | null`

- `document.querySelector(selector: string): Element | null`

- `Element.addEventListener(event: string, handler: Function): void`

### Exercise 3: Third-Party Integration

Ambil library JavaScript dari npm yang belum memiliki TypeScript types (misal: `moment`, `lodash` tanpa types). Cari declaration file-nya di DefinitelyTyped atau buat sendiri minimal types untuk 5 functions yang sering digunakan.

**Tips:** Cek repository `@types` di GitHub (DefinitelyTyped/DefinitelyTyped) untuk melihat contoh declaration file yang baik dan lengkap.

##
5
Quiz - Declaration Files

Loading quiz questions...

← Previous Lesson

Lesson 1 of 4

Next Lesson →
