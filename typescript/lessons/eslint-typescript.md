# ESLint untuk TypeScript

**ESLint** adalah linter yang widely-used untuk JavaScript dan TypeScript. Ini membantu menegakkan coding standards, menemukan potential bugs, dan meningkatkan code quality dengan memberikan warnings dan errors berdasarkan configurable rules. Untuk TypeScript, ESLint membutuhkan plugin dan parser khusus.

⏱️ 25 menit
📊 Kesulitan: Menengah

##
1
Tujuan Pembelajaran

-
▹
Menginstall dan mengkonfigurasi ESLint untuk TypeScript projects

-
▹
Memahami perbedaan `@typescript-eslint/parser` dan `@typescript-eslint/eslint-plugin`

-
▹
Menggunakan TypeScript-specific linting rules

-
▹
Integrasi ESLint dengan VS Code dan pre-commit hooks

-
▹
Customizing rules dan extending configurations

##
2
Setup ESLint dengan TypeScript

ESLint secara native hanya understands JavaScript. Untuk lint TypeScript code, kita perlu dua package tambahan:

- `@typescript-eslint/parser` - Parser yang mengubah TypeScript code menjadi format yang bisa dipahami ESLint

- `@typescript-eslint/eslint-plugin` - Plugin yang berisi TypeScript-specific rules

# Install ESLint dan packages TypeScript
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Atau dengan yarn
yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

### Konfigurasi ESLint (eslint.config.js)

Buat file konfigurasi ESLint di root project. Untuk TypeScript, kita perlu menentukan parser dan plugin.

// eslint.config.js (ESLint v9+ flat config)
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
{
"parser": '@typescript-eslint/parser',
"parserOptions": {
"ecmaVersion": 2022,
"sourceType": "module",
"project": ["./tsconfig.json"]
},
"plugins": ["@typescript-eslint"],
"rules": {
"@typescript-eslint/explicit-function-return-type": "warn",
"@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
"@typescript-eslint/no-explicit-any": "error",
"@typescript-eslint/prefer-const": "error",
"@typescript-eslint/no-floating-promises": "error"
}
},
{
"files": ["./**/*.ts", "./**/*.tsx"]
}
);

### Menggunakan Predefined Configs

TypeScript ESLint menyediakan predefined configurations yang bisa kita extend:

// eslint.config.js - Using recommended configs
import tseslint from 'typescript-eslint';

export default tseslint.config(
{
"extends": [
tseslint.configs.flat.recommended.typeChecked,
// Atau dengan string:
// "plugin:@typescript-eslint/recommended-type-checked"
],
"rules": {
// Override rules here
}
}
);

### Important TypeScript-Specific Rules

Berikut adalah beberapa important rules dari `@typescript-eslint` plugin:

Rule
Deskripsi
Severity

@typescript-eslint/no-explicit-any
Melarang penggunaan type `any` (kecuali diallowed)
Error

@typescript-eslint/explicit-function-return-type
Meminta explicit return type untuk functions
Warning

@typescript-eslint/no-unused-vars
Mendeteksi variables yang dideklarasikan tapi tidak digunakan
Error

@typescript-eslint/consistent-type-imports
Memaksa consistent style untuk type imports
Warning

@typescript-eslint/no-floating-promises
Mendeteksi promises yang tidak di-handle
Error

@typescript-eslint/prefer-optional-chain
Mengganti null checks dengan optional chaining (?.)
Warning

### VS Code Integration

Install ESLint extension untuk VS Code agar linting errors dan warnings muncul directly di editor.

# Install VS Code ESLint extension
# Code: ms-vscode.vscode-eslint

# Pastikan settings.json mengaktifkan ESLint untuk TypeScript:
{
"eslint.validate": [
"javascript",
"javascriptreact",
"typescript",
"typescriptreact"
],
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}
}

### Pre-commit Hooks dengan Husky

Gunakan Husky untuk menjalankan ESLint sebelum setiap commit. Ini ensures code quality dan mencegah commits dengan linting errors.

# Install Husky dan lint-staged
npm install --save-dev husky lint-staged

# Inisialisasi Husky
npx husky init

# package.json scripts
{
"scripts": {
"lint": "eslint . --ext .ts,.tsx",
"lint:fix": "eslint . --ext .ts,.tsx --fix"
}
}

# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged

# package.json - lint-staged config
{
"lint-staged": {
"*.{ts,tsx}": [
"eslint --fix",
"prettier --write"
]
}
}

### Common ESLint Issues dengan TypeScript

#### Issue: "Parsing error: Cannot read file tsconfig.json"

ESLint tidak bisa menemukan tsconfig.json untuk type checking.

**Solution:** Pastikan `parserOptions.project` di eslint.config.js menunjuk ke correct tsconfig.json path. Gunakan absolute path atau relative dari project root.

#### Issue: Performance slow saat linting

TypeScript ESLint bisa lambat karena type checking.

**Solution:** Gunakan `parserOptions.createDefaultProgram`: false (default), pastikan `tsconfig.json` include hanya file yang diperlukan, atau gunakan `--cache` flag.

#### Best Practice: Recommended Configs

Gunakan `tseslint.configs.recommendedTypeChecked` untuk setup yang baik out-of-the-box dengan type-aware rules tanpa terlalu strict. Tambahkan rules manual sesuai project needs.

##
4
Latihan & Exercises

### Exercise 1: Basic ESLint Setup

Buat project TypeScript baru dan setup ESLint dengan following requirements:

- Install ESLint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin

- Buat eslint.config.js dengan parser dan plugin TypeScript

- Enable rules: no-explicit-any (error), no-unused-vars (error), prefer-const (warning)

- Buat file `bad-code.ts` yang sengaja melanggar beberapa rules

- Jalankan `npx eslint bad-code.ts` dan verify errors muncul

### Exercise 2: VS Code Integration

Konfigurasi VS Code untuk:

- Validate TypeScript files dengan ESLint

- Auto-fix linting errors on save

- Tampilkan errors dan warnings di Problems panel

Buka file TypeScript yang memiliki linting errors dan verify VS Code menampilkan them.

### Exercise 3: Husky Pre-commit Hook

Setup Husky dan lint-staged untuk:

- Run ESLint automatically sebelum setiap commit

- Auto-fix fixable errors

- Blok commit jika ada linting errors

Test dengan membuat changes yang memiliki linting errors dan cek apakah commit berhasil atau ditolak.

### Exercise 4: Custom Rule Configuration

Experiment dengan customizing ESLint rules:

- Set `@typescript-eslint/explicit-function-return-type` ke "error"

- Enable `@typescript-eslint/no-floating-promises`

- Configure `@typescript-eslint/consistent-type-imports` dengan style "type-only"

- Buat code yang violating these rules dan verify ESLint catches them

**Tips:** Gunakan `npx eslint . --ext .ts,.tsx --fix` untuk auto-fix many common issues. Tapi manual review tetap diperlukan untuk complex fixes.

##
5
Quiz - ESLint untuk TypeScript

Loading quiz questions...

← Previous Lesson

Lesson 7 of 8

Next Lesson →
