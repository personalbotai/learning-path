# Build Tools: Webpack, Babel, esbuild

TypeScript compiler (`tsc`) hanya melakukan transpilation dari TypeScript ke JavaScript. Untuk aplikasi kompleks, kita membutuhkan **build tools** seperti Webpack, Babel, atau esbuild untuk bundling, minification, code splitting, asset management, dan integrasi dengan ekosistem JavaScript.

⏱️ 25 menit
📊 Kesulitan: Lanjutan
📚 Tipe: Tooling

##
Tujuan Pembelajaran

-
Memahami peran **build tools** vs TypeScript compiler

-
Mengkonfigurasi **Webpack** dengan `ts-loader` atau `babel-loader`

-
Menggunakan **Babel** dengan preset `@babel/preset-typescript`

-
Mengenal **esbuild** dan **SWC** sebagai alternatif cepat

-
Memahami **transpilation vs bundling**

-
Mengetahui kapan menggunakan `tsc` saja vs build tools

## Transpilation vs Bundling

### ⚙️ TypeScript Compiler (tsc)

- **Transpilation saja** - TS → JS

- Tidak melakukan bundling

- Tidak minify/uglify

- Tidak handle assets (images, CSS)

- Cepat, ringan, straightforward

- Cocok untuk: Node.js backend, library, simple projects

### 📦 Build Tools (Webpack/Babel/esbuild)

- **Bundling** - gabungkan multiple files

- Code splitting & lazy loading

- Minification & optimization

- Asset handling (CSS, images, fonts)

- Dev server dengan HMR

- Cocok untuk: Frontend apps, SPAs, complex projects

### 💡 Decision Guide:

- **Use tsc alone** untuk: Node.js CLI tools, backend services, libraries yang akan dipublish, simple scripts

- **Use build tool** untuk: React/Vue/Angular apps, frontend dengan assets, code splitting need, dev server/HMR

- **Hybrid**: tsc untuk type-checking + esbuild/webpack untuk bundling (fast builds)

## Webpack dengan TypeScript

**Webpack** adalah module bundler yang paling populer. Untuk TypeScript, kita gunakan `ts-loader` atau `babel-loader` dengan `@babel/preset-typescript`.

### Setup Webpack + ts-loader

// webpack.config.js
const path = require('path');

module.exports = {
entry: './src/index.ts',
module: {
rules: [
{
test: /\.tsx?$/,
use: [
{
loader: 'ts-loader',
options: {
transpileOnly: true  // Cepat, type-checking terpisah (fork-ts-checker-webpack-plugin)
}
}
]
}
]
},
resolve: {
extensions: ['.tsx', '.ts', '.js']
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
}
};

### Setup Webpack + Babel

// .babelrc
{
"presets": [
"@babel/preset-env",
"@babel/preset-typescript"
]
}

// webpack.config.js (snippet)
{
module: {
rules: [
{
test: /\.tsx?$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
}
]
}
}

## Babel: The JavaScript Compiler

**Babel** adalah JavaScript compiler yang juga bisa handle TypeScript via `@babel/preset-typescript`. Babel hanya **strips types** dan transforms syntax (no type checking). Type checking harus dilakukan terpisah (tsc --noEmit atau fork-ts-checker).

// Install
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript babel-loader

// babel.config.json
{
"presets": [
["@babel/preset-env", { "targets": "> 0.25%, not dead" }],
"@babel/preset-typescript"
]
}

### ⚠️ Babel vs tsc:

Babel **tidak melakukan type checking**. Anda harus menjalankan `tsc --noEmit` secara terpisah untuk type checking. Atau gunakan `fork-ts-checker-webpack-plugin` di Webpack untuk parallelism.

## esbuild: Super Fast Bundler

**esbuild** adalah bundler yang ditulis dalam Go, sangat cepat (10-100x lebih cepat dari Webpack). Written by Evan Wallace (creator of Vite). Support TypeScript out-of-the-box tanpa plugin tambahan.

// Install
npm install --save-dev esbuild

// build.js
require('esbuild').build({
entryPoints: ['src/index.ts'],
bundle: true,
outfile: 'dist/bundle.js',
platform: 'node',  // atau 'browser'
target: ['es2020'],
sourcemap: true,
minify: true
}).catch(() => process.exit(1));

// package.json script
{
"scripts": {
"build": "node build.js"
}
}

### ✅ Why esbuild?

- Extremely fast (written in Go, parallel processing)

- TypeScript support built-in (no loader needed)

- Tree shaking, minification, sourcemaps

- Great for CLI tools, libraries, backend apps

- Used by Vite (dev server) dan Turborepo

## SWC: Rust-based Compiler

**SWC** (Speedy Web Compiler) adalah compiler/transpiler yang ditulis dalam Rust, sangat cepat, dan digunakan oleh Next.js, Vite, dan banyak tools. Dukungan TypeScript-nya excellent.

// Install
npm install --save-dev @swc/core @swc/cli

// .swcrc
{
"jsc": {
"target": "es2020",
"parser": {
"syntax": "ecmascript",
"tsx": true
},
"transform": {
"react": {
"runtime": "automatic"
}
}
},
"module": {
"type": "commonjs"
}
}

// package.json script
{
"scripts": {
"build": "swc src -d dist"
}
}

## Comparison Table

Tool
Speed
Type Checking
Bundling
Use Case

tsc
Fast
✅ Built-in
❌ No
Backend, libs, simple

Webpack
Slow
Via plugin
✅ Yes
Complex frontend apps

Babel
Fast
❌ No
Via bundler
Transpilation only

esbuild
🚀 Very Fast
❌ No
✅ Yes
CLI, libs, backend

SWC
🚀 Very Fast
❌ No
✅ Yes
Next.js, Vite, general

### ✅ Modern Stack Recommendation:

- **React/Vue apps**: Vite (dev) + esbuild/SWC (build) atau Webpack if needed

- **Node.js backend**: tsc alone (simple) atau esbuild for bundling

- **Libraries**: tsc for .d.ts + esbuild for bundle

- **Maximum speed**: esbuild atau SWC (10-100x faster than Webpack)

##
💻
Latihan Praktis

### Latihan 1: Webpack + ts-loader

Setup Webpack untuk React + TypeScript app:

- Entry: `./src/index.tsx`

- Output: `./dist/bundle.js`

- Rule untuk `.tsx?` dengan ts-loader

- Resolve extensions: .tsx, .ts, .js

- Add HtmlWebpackPlugin untuk index.html

### Latihan 2: Babel + TypeScript

Konfigurasi Babel untuk TypeScript project:

- Install: @babel/core, @babel/preset-env, @babel/preset-typescript

- Buat babel.config.json dengan kedua preset

- Tambahkan script build: `"babel src --out-dir dist --extensions .ts,.tsx"`

- Jalankan tsc --noEmit terpisah untuk type checking

### Latihan 3: esbuild untuk CLI Tool

Buat build script dengan esbuild untuk TypeScript CLI tool:

- Entry: `./bin/cli.ts`

- Platform: node

- Bundle: true

- Target: ES2020

- Minify: false (CLI tools often readable)

- Outfile: `./dist/cli.js`

← Sebelumnya: Path Mapping

🔖 Bookmark

✓ Selesai

Selanjutnya: ESLint untuk TypeScript →
