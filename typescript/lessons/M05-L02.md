# Index Signatures

**Index Signatures** memungkinkan kita mendefinisikan object dengan properti dinamis (dynamic property names) di mana nama properti tidak diketahui sebelumnya. Ini sangat berguna untuk dictionary, map, atau object dengan keys yang tidak bisa ditentukan secara statis.

⏱️ 15 menit
📊 Kesulitan: Menengah
📚 Tipe: Interfaces

##
1
Tujuan Pembelajaran

-
Memahami sintaks index signatures (`[key: string]: T`)

-
Mendefinisikan object dengan properti dinamis

-
Menggunakan `string`, `number`, atau `symbol` sebagai index key type

-
Memahami batasan dan best practices index signatures

##
2
Penjelasan

Index signature digunakan ketika kita ingin mendefinisikan object yang bisa memiliki properti dengan nama yang tidak ditentukan sebelumnya. Sintaksnya mirip seperti method signature, tetapi dengan nama property di dalam kurung siku.

### Sintaks Dasar

```
// Dictionary dengan string keys dan number values
interface Dictionary {
[key: string]: number;
}

const dict: Dictionary = {
one: 1,
two: 2,
"three": 3
};
```

### String Index Signature

Jenis yang paling umum. Semua properti harus memiliki tipe yang sama:

```
interface StringMap {
[key: string]: string;
}

const map: StringMap = {
a: "apple",
b: "banana"
};
```

### Number Index Signature

```
interface NumberMap {
[key: number]: string;
}

const numMap: NumberMap = {
0: "zero",
1: "one",
2: "two"
};
```

### Index Signature dengan Mixed Types

Karena index signature hanya bisa memiliki satu tipe untuk semua values, kita perlu menggunakan union jika values bisa berbagai tipe.

```
interface MixedMap {
[key: string]: string | number | boolean;
}
```

### Index Signature dengan Object Properties

Ketika menggunakan index signature, semua properti yang dideklarasikan secara eksplisit harus compatible dengan tipe index signature.

```
interface Config {
readonly apiKey: string;  // OK - string compatible dengan string index
[key: string]: string;     // semua properti harus string
}
```

**❌ Error:** Jika properti eksplisit tidak sesuai dengan index signature type, TypeScript akan error.

```
interface BadConfig {
timeout: number;  // Error!
[key: string]: string; // Semua harus string
}
```

### Use Cases Umum

- **Dictionary / Map**: Object dengan keys dinamis (misal: `{ [lang]: string }` untuk i18n)

- **Configuration objects**: Config dengan banyak keys yang tidak bisa ditentukan sebelumnya

- **Cache / Store**: Key-value store dengan string keys

- **Grouping data**: Mengelompokkan array items berdasarkan property

### Index Signature vs Mapped Types

Index signature membuat semua properti memiliki tipe yang sama. Mapped types bisa membuat tipe berbeda per properti. Gunakan mapped types ketika butuh kontrol lebih granular.

**💡 Tips:** Index signatures adalah cara untuk membuat "loose" object types. Gunakan ketika keys tidak bisa ditentukan sebelumnya. Untuk object dengan known keys, gunakan regular interface properties.

##
3
Latihan

### Latihan 1: Internationalization Dictionary

Buat interface `I18nDictionary` dengan index signature `[key: string]: string`. Buat object `messages` yang berisi terjemahan untuk `"hello"`, `"goodbye"`, dll dalam bahasa Indonesia.

Lihat Solusi

```
interface I18nDictionary {
[key: string]: string;
}

const messages: I18nDictionary = {
hello: "Halo",
goodbye: "Selamat tinggal",
thanks: "Terima kasih"
};
```

### Latihan 2: Settings Store

Buat interface `SettingsStore` dengan index signature `[key: string]: number | boolean | string`. Buat object `settings` dengan beberapa settings seperti `"theme"`: `"dark"`, `"fontSize"`: `14`, `"notifications"`: `true`.

Lihat Solusi

```
interface SettingsStore {
[key: string]: string | number | boolean;
}

const settings: SettingsStore = {
theme: "dark",
fontSize: 14,
notifications: true,
autoSave: true
};
```

← Sebelumnya

Modul 4 - Lesson 6 dari 6 (Modul 4 Complete!)

Selanjutnya →
