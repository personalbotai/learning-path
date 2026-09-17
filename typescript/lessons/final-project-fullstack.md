# Project: Full-Stack TypeScript Application

Bangun aplikasi full-stack lengkap menggunakan TypeScript di seluruh stack: React frontend, Express.js REST API, dan database dengan Drizzle ORM. Project kapstone ini mengintegrasikan semua konsep TypeScript yang dipelajari - dari tipe dasar, interfaces, generics, hingga advanced utility types - dalam arsitektur production-ready.

⏱️ 8-10 jam
📊 Kesulitan: Capstone Project

## 🎯 Tujuan Pembelajaran

-
Menggunakan TypeScript dengan Node.js untuk CLI applications

-
Parsing command-line arguments dengan type safety (commander, yargs)

-
Membuat executable script dengan `#!/usr/bin/env node`

-
Menangani I/O operations (read/write files, stdout)

-
Menerapkan error handling dan exit codes yang tepat

## 📚 Konten Utama

### Project Overview: File Processor CLI

Kita akan membuat CLI tool bernama **"fileproc"** yang dapat:

- Read file (text/JSON)

- Transform content (uppercase, lowercase, capitalize)

- Write output ke file atau stdout

- Support batch processing multiple files

- Provide help dan version info

### Setup Project

# Create project directory
mkdir fileproc-cli
cd fileproc-cli

# Initialize Node.js project
npm init -y

# Install dependencies
npm install commander chalk

# Install dev dependencies
npm install --save-dev typescript @types/node tsx

# Initialize TypeScript
npx tsc --init

### Project Structure

fileproc-cli/
├── src/
│   ├── index.ts          # Entry point
│   ├── commands/         # Command implementations
│   │   ├── transform.ts
│   │   └── batch.ts
│   ├── utils/
│   │   ├── file.ts       # File operations
│   │   └── formatter.ts  # Text transformations
│   └── types.ts          # Type definitions
├── bin/
│   └── fileproc          # Executable script
├── package.json
├── tsconfig.json
└── README.md

### TypeScript Configuration for CLI

Update `tsconfig.json`:

{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"outDir": "./dist",
"rootDir": "./src",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
}

### Implementasi: Type Definitions

`src/types.ts`:

export type TransformType = "uppercase" | "lowercase" | "capitalize";

export interface FileOptions {
input: string;
output?: string;
transform?: TransformType;
verbose?: boolean;
}

export interface ProcessedFile {
input: string;
output: string;
transformed: boolean;
}

### Implementasi: File Utilities

`src/utils/file.ts`:

import { promises as fs } from 'fs';
import path from 'path';
import { FileOptions, ProcessedFile } from '../types';

export async function readFile(filepath: string): Promise<string> {
try {
return await fs.readFile(filepath, 'utf-8');
} catch (error) {
throw new Error(`Failed to read file: ${filepath}`);
}
}

export async function writeFile(filepath: string, content: string): Promise<void> {
try {
await fs.writeFile(filepath, content, 'utf-8');
} catch (error) {
throw new Error(`Failed to write file: ${filepath}`);
}
}

export async function processFile(options: FileOptions): Promise<ProcessedFile> {
const content = await readFile(options.input);
let output = content;

if (options.transform) {
output = await transformText(content, options.transform);
}

if (options.output) {
await writeFile(options.output, output);
}

return {
input: options.input,
output: options.output || 'stdout',
transformed: !!options.transform
};
}

### Implementasi: Formatter

`src/utils/formatter.ts`:

import { TransformType } from '../types';

export async function transformText(
text: string,
type: TransformType
): Promise<string> {
switch (type) {
case 'uppercase':
return text.toUpperCase();
case 'lowercase':
return text.toLowerCase();
case 'capitalize':
return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
default:
throw new Error(`Unknown transform type: ${type}`);
}
}

### Implementasi: CLI dengan Commander

`src/index.ts`:

import { Command } from 'commander';
import chalk from 'chalk';
import { processFile } from './utils/file';
import { FileOptions, TransformType } from './types';

const program = new Command();

program
.name('fileproc')
.description('CLI tool untuk memproses file teks dengan TypeScript')
.version('1.0.0');

program
.command('transform')
.description('Transform file teks')
.requiredOption('-i, --input <file>', 'Input file path')
.option('-o, --output <file>', 'Output file path (default: stdout)')
.option('-t, --transform <type>', 'Transform type: uppercase|lowercase|capitalize')
.option('-v, --verbose', 'Enable verbose output')
.action(async (options) => {
try {
const opts: FileOptions = {
input: options.input,
output: options.output,
transform: options.transform as TransformType,
verbose: options.verbose
};

const result = await processFile(opts);

if (opts.verbose) {
console.log(chalk.green(`✓ Processed: ${result.input} → ${result.output}`));
console.log(chalk.blue(`Transformed: ${result.transformed}`));
} else {
console.log(result.output);
}
} catch (error) {
console.error(chalk.red(`Error: ${(error as Error).message}`));
process.exit(1);
}
});

program.parse();

### Executable Script

`bin/fileproc`:

#!/usr/bin/env node
// This file will be symlinked or copied to node_modules/.bin/

import { fileURLToPath } from 'url';
import path from 'path';

// Required for ES modules
import '../dist/index.js';

### Package.json Setup

Update `package.json`:

{
"name": "fileproc-cli",
"version": "1.0.0",
"description": "CLI tool untuk memproses file dengan TypeScript",
"main": "dist/index.js",
"bin": {
"fileproc": "./bin/fileproc"
},
"scripts": {
"build": "tsc",
"start": "tsx src/index.ts",
"dev": "tsc --watch",
"lint": "eslint src/**/*.ts"
},
"keywords": ["cli", "typescript", "file-processor"],
"author": "Your Name",
"license": "MIT",
"dependencies": {
"chalk": "^4.1.2",
"commander": "^9.4.1"
},
"devDependencies": {
"@types/node": "^18.0.0",
"tsx": "^3.12.0",
"typescript": "^5.0.0"
}
}

### Build & Test

# Compile TypeScript
npm run build

# Link globally untuk testing
npm link

# Test CLI
fileproc transform -i input.txt -o output.txt -t uppercase
fileproc transform -i input.txt -t lowercase --verbose

### Best Practices

- Gunakan `strict: true` di tsconfig untuk type safety maksimal

- Handle errors dengan proper exit codes (0 = success, non-zero = error)

- Provide `--help` dan `--version` flags otomatis

- Use `chalk` atau `colorette` untuk colored output

- Support stdin untuk pipeline operations (`cat file | fileproc transform -t uppercase`)

- Write unit tests dengan Jest/Vitest untuk utility functions

## 💻 Exercises

### Exercise 1: Basic CLI

Implement CLI dengan single command.

- Setup project dengan TypeScript + Commander

- Buat command `greet <name>` yang output "Hello, {name}!"

- Add option `--uppercase` untuk uppercase output

- Build dan test dengan `npm link`

### Exercise 2: File Processor

Implement file transformation logic.

- Buat function `readFile` dan `writeFile` dengan proper error handling

- Implement `transformText` dengan switch case untuk uppercase/lowercase/capitalize

- Integrasikan ke command `transform`

- Test dengan actual files

### Exercise 3: Advanced Features

Tambahkan batch processing dan JSON support.

- Buat command `batch <glob>` untuk process multiple files

- Support JSON transformation (parse, modify, stringify)

- Add `--dry-run` flag untuk preview tanpa write

- Implement progress bar dengan `cl-progress`

← Previous

Take Quiz
