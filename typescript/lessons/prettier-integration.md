# Prettier Integration dengan TypeScript

**Prettier** adalah code formatter opinionated yang memastikan konsistensi styling di seluruh codebase. Integrasi Prettier dengan TypeScript memastikan kode Selalu terformat dengan konsisten, meningkatkan readability, dan mengurangi debates tentang code style.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami peran Prettier dalam development workflow TypeScript

-
Menginstall dan mengkonfigurasi Prettier untuk proyek TypeScript

-
Mengintegrasikan Prettier dengan ESLint untuk menghindari conflicts

-
Menggunakan Prettier CLI dan editor integrations (VS Code)

-
Mengatur pre-commit hooks dengan Husky untuk auto-format

## 📚 Konten Utama

### Apa itu Prettier?

Prettier adalah **code formatter opinionated** yang menerapkan aturan formatting yang konsisten dengan removing semua styling asli dan memformat ulang kode sesuai dengan aturan yang telah ditentukan. Berbeda dengan ESLint yang menemukan pattern problems, Prettier mengubah kode agar sesuai dengan style guide.

Untuk TypeScript, Prettier memahami syntax TypeScript dan tidak merusak type annotations. Prettier bekerja dengan **recursive parsing** dan mencetak ulang code dengan consistent spacing, line breaks, dan quotes.

### Instalasi Prettier

Install Prettier sebagai dev dependency di proyek TypeScript:

# Install prettier locally
npm install --save-dev prettier

# Atau dengan yarn
yarn add --dev prettier

# Install TypeScript parser untuk prettier (biasanya sudah dikenali otomatis)
npm install --save-dev @typescript-eslint/parser

### Konfigurasi Prettier

Prettier mencari konfigurasi dari beberapa sources dalam urutan prioritas:

- `.prettierrc` (JSON, YAML, atau JS)

- `.prettierrc.toml`

- `.prettierrc.json`

- `.prettierrc.yaml` / `.prettierrc.yml`

- `.prettierrc.js`

- `prettier.config.js`

- `package.json` field `"prettier"`

Contoh konfigurasi `.prettierrc.json`:

{
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5",
"printWidth": 80,
"arrowParens": "always",
"endOfLine": "lf"
}

### Menjalankan Prettier

Format file atau entire directory dengan Prettier CLI:

# Format semua file .ts di src/
npx prettier --write src/

# Format file tertentu
npx prettier --write src/index.ts src/utils/helpers.ts

# Check formatting tanpa modify (untuk CI)
npx prettier --check src/

# Format dengan config custom
npx prettier --write --config .prettierrc.json src/

### Prettier dengan VS Code

Install VS Code extension **"Prettier - Code formatter"**. Kemudian configure settings:

{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.formatOnPaste": false,
"[typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}

### ESLint + Prettier Integration

ESLint dan Prettier bisa bertabrakan karena keduanya ingin mengatur formatting. Gunakan `eslint-config-prettier` untuk menonaktifkan ESLint rules yang berkonflik dengan Prettier.

# Install packages
npm install --save-dev eslint-config-prettier

# Di .eslintrc.json, extend config:
{
"extends": [
"eslint:recommended",
"plugin:@typescript-eslint/recommended",
"prettier"  // Harus di akhir!
]
}

Dengan setup ini, ESLint akan fokus ke code quality issues, sedangkan Prettier menangani formatting. Anda juga bisa menggunakan `eslint-plugin-prettier` untuk menjalankan Prettier sebagai ESLint rule.

### Husky + lint-staged untuk Auto-Format

Otomatis format files sebelum commit menggunakan Husky (git hooks) dan lint-staged:

# Install
npm install --save-dev husky lint-staged

# Inisialisasi husky
npx husky install

# Tambah pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Di package.json, tambah lint-staged config:
{
"lint-staged": {
"*.{ts,tsx}": [
"eslint --fix",
"prettier --write"
],
"*.{json,md,html,css,scss}": [
"prettier --write"
]
}
}

### Best Practices

- Gunakan `singleQuote: true` untuk konsistensi dengan TypeScript community

- Set `trailingComma: es5` untuk kompatibilitas

- Gunakan `arrowParens: always` untuk arrow functions konsisten

- Pastikan `endOfLine: lf` untuk cross-platform consistency

- Integrasikan dengan CI pipeline untuk cek formatting sebelum merge

- Jangan ubah Prettier config terlalu sering agar maintain konsistensi

## 💻 Exercises

### Exercise 1: Setup Prettier

Inisialisasi Prettier di proyek TypeScript yang sudah ada.

- Install Prettier sebagai dev dependency

- Buat file `.prettierrc.json` dengan konfigurasi yang disarankan

- Format seluruh codebase dengan `npx prettier --write`

- Verifikasi tidak ada formatting warnings

### Exercise 2: Integrasi ESLint

Gabungkan ESLint dan Prettier tanpa conflicts.

- Install `eslint-config-prettier`

- Update `.eslintrc.json` untuk include `"prettier"` di extends

- Run `npx eslint src/` dan pastikan tidak ada conflicts

### Exercise 3: Husky Hook

Setup auto-format sebelum commit.

- Install Husky dan lint-staged

- Buat pre-commit hook yang menjalankan Prettier

- Buat file yang tidak terformat, commit, dan verify auto-format berjalan

← Previous

Take Quiz
