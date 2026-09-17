# Record, Tuple & Readonly Tuple Utility Types

**Record<K, T>**, **Readonly<T>**, dan **ReadonlyTuple** adalah utility types untuk membuat object types dinamis, immutable structures, dan fixed-length arrays dengan specific types per index.

⏱️ 20 menit
📊 Kesulitan: Menengah

## 🎯 Tujuan Pembelajaran

-
Memahami Record<K, T> untuk membuat object dengan known keys

-
Menggunakan Readonly<T> untuk membuat immutable types

-
Bekerja dengan tuple types dan readonly tuples

-
Menerapkan utility types untuk configuration maps dan constant structures

## 📚 Konten Utama

### Record<K, T>

`Record<K, T>` membangun object type di mana semua properties memiliki type yang sama. `K` adalah union of property names (keys), dan `T` adalah value type.

// Record dengan string keys dan number values
type StringNumberMap = Record<string, number>;

// Equivalent to: { [key: string]: number }
const scores: StringNumberMap = {
alice: 95,
bob: 87,
charlie: 92
};

// Record dengan specific keys
type UserRoles = Record<"admin" | "user" | "guest", boolean>;

const roles: UserRoles = {
admin: true,
user: true,
guest: false
};

### Use Cases for Record

- **Configuration maps**: `Record<string, Config>`

- **Lookup tables**: `Record<Status, string>`

- **Feature flags**: `Record<FeatureName, boolean>`

- **Caches**: `Record<string, CachedData>`

### Readonly<T>

`Readonly<T>` membuat semua properties dari type `T` menjadi readonly. Ini mencegah assignment setelah initialization.

interface MutableUser {
name: string;
age: number;
}

type ReadonlyUser = Readonly<MutableUser>;

const user: ReadonlyUser = { name: "Alice", age: 30 };
user.name = "Bob";  // ❌ Error: Cannot assign to 'name' because it is a read-only property

// Readonly juga bekerja dengan arrays
const nums: ReadonlyArray<number> = [1, 2, 3];
nums.push(4);  // ❌ Error

### Tuple Types & Readonly Tuples

Tuple adalah array dengan fixed length dan specific types per index. Readonly tuple mencegah mutation.

// Tuple biasa (mutable)
let position: [number, number] = [10, 20];
position[0] = 30;  // ✅ OK
position.push(40); // ❌ Error: length mismatch

// Readonly tuple
const fixedPosition: readonly [number, number] = [10, 20];
fixedPosition[0] = 30;  // ❌ Error: readonly
fixedPosition.push(40); // ❌ Error: readonly

// Tuple dengan mixed types
type UserTuple = [number, string, boolean];
const user: UserTuple = [1, "Alice", true];

### Combining Utility Types

Anda bisa menumpuk utility types untuk presisi yang lebih tinggi.

// Readonly Record
type ReadonlyConfig = Readonly<Record<string, string>>;

const config: ReadonlyConfig = {
apiUrl: "https://api.example.com",
timeout: "5000"
};
config.apiUrl = "new";  // ❌ Error

// Readonly tuple of objects
type ReadonlyPointList = readonly [{ x: number; y: number }];

const points: ReadonlyPointList = [{ x: 0, y: 0 }];
points[0].x = 10;  // ❌ Error: readonly

### Implementation Details

Di balik layar, utility types ini menggunakan mapped types dan modifiers:

type Readonly<T> = {
readonly [P in keyof T]: T[P];
};

type Record<K extends keyof any, T> = {
[P in K]: T;
};

// Tuples are arrays with fixed length and types per index
type Tuple = [string, number, boolean];
// readonly tuple
type ReadonlyTuple = readonly [string, number];

## 💻 Exercises

### Exercise 1: Feature Flags

Buat Record untuk feature flags.

- Define union type `Feature = "darkMode" | "notifications" | "beta"`

- Buat `FeatureFlags = Record<Feature, boolean>`

- Buat object `flags: FeatureFlags` dengan nilai boolean

- Coba ubah nilai - seharusnya diizinkan karena mutable

### Exercise 2: Immutable Config

Gunakan Readonly untuk configuration object.

- Buat interface `AppConfig` dengan beberapa settings

- Buat `ReadonlyConfig = Readonly<AppConfig>`

- Assign ke variable dan coba modify property

- Observe TypeScript errors

### Exercise 3: Tuple Operations

Bekerja dengan tuple dan readonly tuples.

- Buat tuple `RGB = [number, number, number]`

- Buat function `scaleColor(rgb: RGB, factor: number): RGB`

- Ubah ke readonly tuple dan coba modify

- Catat perbedaan behavior

← Previous

Take Quiz
