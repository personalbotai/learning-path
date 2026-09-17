# DefinitelyTyped: Repository Type Definitions

**DefinitelyTyped** adalah repository terbesar di GitHub yang berisi high-quality TypeScript definition files (.d.ts) untuk ratusan library JavaScript. Dikelola oleh komunitas, DefinitelyTyped adalah sumber utama untuk TypeScript type definitions dari library populer yang belum menyediakan types secara native.

⏱️ 20 menit
📊 Kesulitan: Menengah

##
1
Tujuan Pembelajaran

-
▹
Memahami apa itu DefinitelyTyped dan perannya dalam ekosistem TypeScript

-
▹
Menggunakan type definitions dari DefinitelyTyped di project TypeScript

-
▹
Memahami struktur repository DefinitelyTyped di GitHub

-
▹
Menginstall type definitions menggunakan npm (package @types/*)

-
▹
Berkontribusi ke DefinitelyTyped dengan membuat atau memperbaiki type definitions

##
2
Apa itu DefinitelyTyped?

**DefinitelyTyped** adalah centralized repository yang dikelola komunitas untuk TypeScript definition files. Repository ini berisi type definitions untuk ribuan library JavaScript yang tidak menyediakan TypeScript support secara native. Definition files di DefinitelyTyped di-publish ke npm dengan nama paket `@types/<library-name>`.

**Repository:** github.com/DefinitelyTyped/DefinitelyTyped
**Website:** definitelytyped.org

### Kenapa DefinitelyTyped Penting?

- **Ekosistem TypeScript berkembang cepat** - Banyak library JavaScript populer belum memiliki TypeScript definitions

- **Type safety untuk library eksternal** - TypeScript compiler bisa melakukan type checking untuk library ini

- **Autocompletion & IntelliSense** - IDE seperti VS Code mendapatkan autocompletion yang akurat

- **Community-driven** - Dikontribusi oleh ribuan developer dari seluruh dunia

- **Quality control** - Setiap definition di-review dan di-test sebelum di-publish

### Struktur Repository

Repository DefinitelyTyped memiliki struktur yang terorganisir dengan baik:

DefinitelyTyped/
├── types/
│   ├── react/
│   │   ├── index.d.ts          # Main definition file
│   │   ├── react.d.ts          # React core types
│   │   ├── jsx.d.ts            # JSX types
│   │   ├── test-utils/
│   │   └── package.json        # Metadata dan dependencies
│   ├── lodash/
│   │   ├── index.d.ts
│   │   ├── fp.d.ts
│   │   └── package.json
│   └── ... (ribuan library lainnya)
├── scripts/
├── OWNERS                     # Maintainer list
└── README.md

### Penggunaan di TypeScript Project

Type definitions dari DefinitelyTyped diinstall menggunakan npm atau yarn dengan nama paket `@types/<library-name>`. TypeScript compiler akan otomatis menemukan types tersebut.

# Install type definitions untuk library 'lodash'
npm install --save-dev @types/lodash

# Atau dengan yarn
yarn add --dev @types/lodash

# Untuk beberapa library, type definitions sudah termasuk dalam paket utama
# Misal: axios sudah menyertakan types secara native
npm install axios  # Tidak perlu @types/axios

### Type Roots dan Types di tsconfig.json

TypeScript secara otomatis mencari type definitions di `node_modules/@types`. Namun, kita bisa mengubah perilaku ini dengan `typeRoots` dan `types` di `tsconfig.json`.

{
"compilerOptions": {
// Daftar folder yang berisi type definitions
"typeRoots": [
"./node_modules/@types",
"./custom-types"
],

// Jika diisi, HANYA types yang tercantum yang akan di-include
// Kosong berarti include semua @types
"types": ["node", "jest", "react"]
}
}

### Contoh: Menggunakan React dengan TypeScript

React memiliki type definitions di DefinitelyTyped. Setelah menginstall `@types/react` dan `@types/react-dom`, kita mendapatkan full type support untuk React APIs.

# Install React dan type definitions
npm install react react-dom
npm install --save-dev @types/react @types/react-dom

# Sekarang kita bisa menggunakan React dengan type safety
import React from 'react';

interface Props {
name: string;
age?: number;
}

const Greeting: React.FC<Props> = ({ name, age }) => (
<div>
<h1>Hello, {name}!</h1>
{age && <p>You are {age} years old</p>}
</div>
);

### Mencari Type Definitions

Untuk mencari apakah library memiliki type definitions di DefinitelyTyped:

- Kunjungi npmjs.com dan cari `@types/<library-name>`

- Cek halaman library di npm - ada badge "Typings" jika tersedia

- Gunakan command `npm info @types/<library-name>` untuk memeriksa

- Kunjungi repository DefinitelyTyped dan cari di folder `types/`

# Cek apakah @types/lodash tersedia
npm info @types/lodash

# Output akan menunjukkan version, description, dll

### Kapan Tidak Perlu @types?

Beberapa library sudah menyertakan type definitions di dalam paket mereka sendiri. Jika library memiliki field `"types"` di `package.json`, maka tidak perlu menginstall `@types/<library>` terpisah.

{
"name": "axios",
"version": "1.4.0",
"main": "./dist/axios.js",
"types": "./dist/axios.d.ts"  // Types sudah included
}

##
3
Contoh Praktis: Setup TypeScript dengan Multiple Libraries

Mari kita lihat contoh project yang menggunakan beberapa library populer beserta type definitions-nya.

### Setup Project

Kita akan membuat project yang menggunakan:

- `express` - Web framework (types already included)

- `lodash` - Utility library (needs @types/lodash)

- `moment` - Date manipulation (needs @types/moment)

- `axios` - HTTP client (types included)

- `react` - UI library (needs @types/react)

# Install dependencies
npm install express lodash moment axios react react-dom
npm install --save-dev typescript @types/node @types/lodash @types/moment @types/react @types/react-dom

# tsconfig.json
{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,  // Skip type checking of declaration files
"forceConsistentCasingInFileNames": true,
"outDir": "./dist"
},
"include": ["src/**/*"],
"exclude": ["node_modules"]
}

### Example Code dengan Full Type Support

// src/server.ts (Express with types)
import express, { Request, Response, Application } from 'express';
import _ from 'lodash';
import moment from 'moment';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const app: Application = express();
const port = number(process.env.PORT) || 3000;

// Type-safe lodash usage
const users = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 }
];

const sortedUsers = _.orderBy(users, ['age'], ['desc']);
// TypeScript knows sortedUsers is User[]

// Type-safe moment usage
const now = moment();
const formatted = now.format('YYYY-MM-DD HH:mm:ss');
console.log(`Current time: ${formatted}`);

// Type-safe axios usage
const config: AxiosRequestConfig = {
method: 'get',
url: 'https://api.example.com/data',
headers: { 'Content-Type': 'application/json' }
};

const response: AxiosResponse<any> = await axios(config);
console.log(response.data);

app.get('/', (req: Request, res: Response) => {
res.send('Hello World!');
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

### Common Issues & Solutions

#### Issue: "Cannot find module 'xyz' or its corresponding type declarations"

TypeScript tidak dapat menemukan type definitions untuk library tersebut.

**Solution:** Install `@types/xyz` atau cek apakah library sudah include types. Jika tidak ada @types, buat declaration file custom.

#### Issue: Conflicting types dari dua package

Terjadi duplicate atau incompatible type definitions.

**Solution:** Gunakan `"skipLibCheck": true` di tsconfig.json untuk melewati pengecekan declaration files, atau pastikan hanya satu versi type definitions yang terinstall.

#### Best Practice: Always use type definitions

Selalu gunakan type definitions untuk library eksternal. Ini memberikan type safety, better autocompletion, dan mencegah runtime errors.

##
4
Latihan & Exercises

### Exercise 1: Explore DefinitelyTyped

Kunjungi repository DefinitelyTyped di GitHub dan:

- Cari type definitions untuk library `chalk` (console styling)

- Cek struktur folder dan file `index.d.ts`-nya

- Identifikasi 5 functions atau types yang didefinisikan

- Lihat `package.json` untuk metadata dan dependencies

### Exercise 2: Install dan Gunakan @types

Buat project TypeScript baru dan install library berikut beserta type definitions-nya:

- `validator` - string validation library (`npm install validator @types/validator`)

- `uuid` - UUID generator (`npm install uuid @types/uuid`)

- `qrcode` - QR code generator (cek apakah ada @types)

Gunakan masing-masing library dalam TypeScript code dan pastikan type checking berjalan dengan baik.

### Exercise 3: Contribute to DefinitelyTyped

(Opsional) Cari library yang belum memiliki type definitions di DefinitelyTyped. Buat minimal declaration file dengan 3-5 functions/classes utama dan submit pull request ke DefinitelyTyped repository. Ikuti contributing guidelines.

**Tips:** Banyak developer mendapatkan kontribusi pertama mereka di DefinitelyTyped sebagai cara untuk belajar TypeScript dan berkontribusi ke open source.

##
5
Quiz - DefinitelyTyped

Loading quiz questions...

← Previous Lesson

Lesson 2 of 4

Next Lesson →
