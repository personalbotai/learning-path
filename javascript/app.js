// JavaScript Learning Path — Modern Interactive Engine
// Unified template matching Python Learning Path master spec
// Depends on: MODULES from modules.js (loaded first)

(function () {
'use strict';

/* ============ State ============ */
let currentModuleId = 1;
let currentLessonId = 1;
let quizState = null;

const STORAGE_KEY = 'js-learning-path-progress-v2';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

/* Migrate legacy v1 keys */
try {
  const legacy = JSON.parse(localStorage.getItem('javascript_progress') || '{}');
  if (Object.keys(legacy).length && !localStorage.getItem(STORAGE_KEY)) {
    const m = { _migrated: true };
    Object.keys(legacy).forEach(k => { m[k] = true; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
  }
} catch {}

let progress = loadProgress();

/* ============ Helpers ============ */
function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getModule(id) { return (window.MODULES ?? []).find(m => m.id === id); }
function getLesson(modId, lessonId) {
  const mod = getModule(modId);
  return mod?.lessons?.find(l => l.id === lessonId) ?? null;
}
function key(modId, lessonId) { return `${modId}-${lessonId}`; }
function isComplete(modId, lessonId) { return !!progress[key(modId, lessonId)]; }
function flatLessons() {
  const out = [];
  (window.MODULES ?? []).forEach(m => m.lessons.forEach(l => out.push({ moduleId: m.id, lesson: l })));
  return out;
}
function totalLessons() { return (window.MODULES ?? []).reduce((s, m) => s + m.lessons.length, 0); }
function doneCount() { return flatLessons().filter(x => isComplete(x.moduleId, x.lesson.id)).length; }
function moduleDone(modId) {
  const mod = getModule(modId);
  return mod ? mod.lessons.filter(l => isComplete(modId, l.id)).length : 0;
}
function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* ============ Progress ============ */
function updateProgress() {
  const total = totalLessons(), done = doneCount();
  const pct = total ? Math.round((done / total) * 100) : 0;
  const t = document.getElementById('progress-text');
  const f = document.getElementById('progress-fill');
  if (t) t.textContent = pct + '%';
  if (f) f.style.width = pct + '%';
  const mob = document.getElementById('mobile-progress');
  if (mob) mob.textContent = pct + '%';
}
function resetProgress() {
  if (!confirm('Yakin reset semua kemajuan belajar?')) return;
  progress = {}; saveProgress(progress);
  updateProgress(); renderNav();
  try {
    const saved = JSON.parse(localStorage.getItem('javascript_last_lesson') || '{}');
    if (saved.modId && saved.lessonId) {
      loadLesson(saved.modId, saved.lessonId);
    } else {
      loadLesson(1, 1);
    }
  } catch(e) {
    loadLesson(1, 1);
  }
  updateCompleteButtons();
}

/* ============ Sidebar Nav (Accordion) ============ */
function lessonIcon(modId, l) {
  if (isComplete(modId, l.id)) return '✅';
  if (l.project) return '🚀';
  return '○';
}
function renderNav(filter) {
  const nav = document.getElementById('lessons-nav');
  if (!nav) return;
  const q = (filter ?? '').trim().toLowerCase();
  nav.innerHTML = (window.MODULES ?? []).map(mod => {
    let lessons = mod.lessons;
    if (q) lessons = lessons.filter(l => l.title.toLowerCase().includes(q));
    if (q && !lessons.length && !mod.title.toLowerCase().includes(q)) return '';
    const done = moduleDone(mod.id), total = mod.lessons.length;
    const isCurrentModule = mod.id === currentModuleId;
    const expanded = (isCurrentModule || q) ? '' : 'hidden';
    const badgeCls = done === total ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/5 text-slate-500';
    const iconColor = isCurrentModule ? 'text-yellow-400' : 'text-slate-500';
    return `<div class="mb-1">
      <button onclick="toggleModule(${mod.id})" class="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition rounded-lg text-left">
        <span class="flex items-center gap-2 truncate"><i class="${mod.icon ?? 'fas fa-folder'} ${iconColor} text-sm w-4 text-center"></i><span class="truncate">${esc(mod.title)}</span></span>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${badgeCls}">${done}/${total}</span>
      </button>
      <div id="module-${mod.id}" class="space-y-0.5 mt-0.5 px-2 ${expanded}">
        ${lessons.map(l => {
          const idx = flatLessons().findIndex(x => x.moduleId === mod.id && x.lesson.id === l.id);
          const isActive = mod.id === currentModuleId && l.id === currentLessonId;
          const isDone = isComplete(mod.id, l.id);
          const cls = isActive ? 'lesson-active font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';
          return `<button onclick="loadLesson(${mod.id}, ${l.id}); closeSidebar();" class="w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center gap-2.5 ${cls}">
            <span class="text-[11px] shrink-0">${isDone ? '✅' : (l.project ? '🚀' : '○')}</span>
            <span class="truncate flex-1">${esc(l.title)}</span>
            <span class="text-[10px] text-slate-600 shrink-0">${esc(l.duration ?? '')}</span>
          </button>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
  updateProgress();
}
function toggleModule(id) {
  const el = document.getElementById('module-' + id);
  if (el) el.classList.toggle('hidden');
}

/* ============ Modern ES2024 Code Snippets ============ */
const SNIPPETS = {
  // Module 1: Dasar-Dasar JavaScript
  'pengenalan-dan-sejarah': `// 🌟 JavaScript: Dari Netscape 1995 → ECMAScript 2024
const facts = {
  creator: 'Brendan Eich',
  year: 1995,
  designTime: '10 hari',
  currentSpec: 'ES2024'
};

// ES2024: Object.groupBy (baru!)
const items = [
  { type: 'runtime', name: 'Node.js' },
  { type: 'runtime', name: 'Deno' },
  { type: 'runtime', name: 'Bun' },
  { type: 'browser', name: 'Chrome V8' }
];
// Object.groupBy(items, item => item.type);
console.log(\`\${facts.creator} membuat JS dalam \${facts.designTime}!\`);
console.log('Runtime modern:', items.filter(i => i.type === 'runtime').map(i => i.name).join(', '));`,

  'setup-environment': `// 🛠️ Environment Modern: Node.js, Deno, & Bun
// Node.js: node -v && npm -v
// Deno:    deno --version (built-in TS, linter, formatter)
// Bun:    bun --version  (bundler, test runner, 3x lebih cepat)

const runtime = typeof window !== 'undefined' ? 'Browser' : 'Node.js/Bun/Deno';
console.log(\`Runtime: \${runtime}\`);

// ES2022: Top-level await (di modules)
// const data = await fetch('https://api.example.com/data');

// globalThis — universal global object
console.log('globalThis tersedia:', typeof globalThis !== 'undefined');

// Fitur cek environment
const features = ['Modules (ESM)', 'Top-level await', 'Import maps'];
features.forEach(f => console.log(\`✅ \${f}\`));`,

  'variabel-dan-tipe-data': `// 📦 Variabel & Tipe Data Modern
const nama = 'Sinta';
let umur = 25;
// var — hindari! gunakan let/const

// ES2020: BigInt untuk angka besar
const bigNumber = 9007199254740991n;
console.log('BigInt:', bigNumber + 1n);

// ES2020: Nullish Coalescing (??)
const config = {
  port: null,
  host: undefined,
  debug: false
};
console.log('port:', config.port ?? 3000);     // 3000 (null → default)
console.log('debug:', config.debug ?? true);   // false (false bukan nullish!)

// ES2020: Optional Chaining (?.)
const user = { profile: { name: 'Budi' } };
console.log('Nama:', user?.profile?.name);       // 'Budi'
console.log('Email:', user?.contact?.email ?? 'N/A'); // 'N/A'

console.log(typeof nama, typeof umur, typeof bigNumber);`,

  'operator-dan-ekspresi': `// ⚡ Operator Modern JavaScript
const a = 10, b = 3;
console.log('Exponentiation:', a ** b);        // 1000

// ES2021: Logical Assignment Operators
let x = null;
x ??= 42;        // x = x ?? 42
console.log('??=', x); // 42

let y = '';
y ||= 'default'; // y = y || 'default'
console.log('||=', y); // 'default'

let z = 1;
z &&= z * 2;     // z = z && z * 2
console.log('&&=', z); // 2

// ES2020: Optional Chaining for method calls
const arr = [1, 2, 3];
console.log('at(-1):', arr.at?.(-1));  // 3 (ES2022: Array.at())

// Nullish coalescing vs OR
console.log(0 || 'fallback');    // 'fallback' (0 falsy)
console.log(0 ?? 'fallback');    // 0 (0 bukan null/undefined)`,

  'kontrol-alur-if-else': `// 🔀 Kontrol Alur Modern
const status = 'active';
const role = 'admin';

// Pattern matching style (switch true)
switch (true) {
  case status === 'active' && role === 'admin':
    console.log('Full access'); break;
  case status === 'active':
    console.log('Limited access'); break;
  default:
    console.log('No access');
}

// Optional chaining dalam kondisi
const user = { permissions: { canEdit: true } };
if (user?.permissions?.canEdit) {
  console.log('User can edit');
}

// Nullish coalescing dalam default
const timeout = undefined;
const actual = timeout ?? 5000;
console.log('Timeout:', actual, 'ms');`,

  'perulangan': `// 🔁 Perulangan Modern
const items = ['Node.js', 'Deno', 'Bun'];

// for...of (ES6) — iterasi nilai
for (const item of items) {
  console.log('Runtime:', item);
}

// Array.entries() untuk index + value
for (const [i, item] of items.entries()) {
  console.log(\`\${i + 1}. \${item}\`);
}

// ES2024: Iterator helpers (proposal stage 4)
// items.values().map(x => x.toUpperCase()).toArray();

// for await...of (async iteration)
async function* generateIds() {
  yield 1; yield 2; yield 3;
}
// for await (const id of generateIds()) { ... }

// Object.entries for object iteration
const config = { host: 'localhost', port: 3000 };
for (const [key, val] of Object.entries(config)) {
  console.log(\`\${key}: \${val}\`);
}`,

  // Module 2: Struktur Data
  'array-dasar-dan-metode': `// 📊 Array Methods Modern
const arr = [1, 2, 3, 4, 5];

// ES2023: toSorted, toReversed, with (immutable)
console.log('toSorted:', [...arr].sort((a,b) => b-a));
console.log('Original:', arr); // unchanged!

// ES2022: Array.at() — negative indexing
console.log('Last:', arr.at(-1));    // 5
console.log('2nd last:', arr.at(-2)); // 4

// ES2023: Array.findLast() & findLastIndex()
const nums = [1, 2, 3, 4, 3, 2];
console.log('findLast > 2:', nums.findLast(n => n > 2)); // 3
console.log('findLastIndex:', nums.findLastIndex(n => n > 2)); // 4

// Spread & destructuring
const [first, ...rest] = arr;
console.log('First:', first, 'Rest:', rest);

// Array.from with mapping
console.log(Array.from({length: 5}, (_, i) => i * 2));`,

  'object-properti-dan-metode': `// 🏗️ Object Modern JavaScript
// ES2024: Object.groupBy
const people = [
  { name: 'Ani', dept: 'Eng' },
  { name: 'Budi', dept: 'Sales' },
  { name: 'Cici', dept: 'Eng' }
];
// const grouped = Object.groupBy(people, p => p.dept);

// Shorthand, computed, spread
const key = 'status';
const user = {
  name: 'Sinta',
  [key]: 'active',
  greet() { return \`Hi, \${this.name}\`; }
};

// Optional chaining deep access
const config = { db: { host: 'localhost' } };
console.log('DB:', config?.db?.host ?? 'N/A');
console.log('Redis:', config?.redis?.host ?? 'not configured');

// Object.entries / fromEntries
const filtered = Object.fromEntries(
  Object.entries(user).filter(([k]) => k !== 'status')
);
console.log('Filtered:', JSON.stringify(filtered));`,

  'set-dan-weakset': `// 🔗 Set & WeakSet
const tags = new Set(['js', 'ts', 'js', 'node']);
console.log('Unique:', [...tags]); // ['js', 'ts', 'node']
console.log('Size:', tags.size);

// Set operations (ES2025 proposal, polyfill available)
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
// Polyfill-style:
const union = new Set([...a, ...b]);
const intersection = new Set([...a].filter(x => b.has(x)));
console.log('Union:', [...union]);
console.log('Intersection:', [...intersection]);

// WeakSet — for object references only, GC-friendly
const ws = new WeakSet();
let obj = { id: 1 };
ws.add(obj);
console.log('Has obj:', ws.has(obj));`,

  'map-dan-weakmap': `// 🗺️ Map & WeakMap
const cache = new Map();
cache.set('user:1', { name: 'Ani' });
cache.set('user:2', { name: 'Budi' });

// Map iteration
for (const [key, val] of cache) {
  console.log(\`\${key} → \${val.name}\`);
}

// Map from entries
const config = new Map(Object.entries({
  host: 'localhost', port: 3000
}));
console.log('Port:', config.get('port'));

// WeakMap — private data pattern
const _private = new WeakMap();
class User {
  constructor(name, secret) {
    this.name = name;
    _private.set(this, { secret });
  }
  getSecret() { return _private.get(this)?.secret; }
}
const u = new User('Budi', 's3cret');
console.log(u.name, u.getSecret());`,

  'json-serialisasi-dan-parsing': `// 📋 JSON Modern
const data = {
  name: 'App',
  version: 1,
  config: { debug: false, port: 3000 }
};

// Pretty print
console.log(JSON.stringify(data, null, 2));

// Replacer function
const safe = JSON.stringify(data, (key, val) =>
  key === 'debug' ? undefined : val
);
console.log('Without debug:', safe);

// JSON.parse with reviver
const parsed = JSON.parse('{"date":"2024-01-01"}', (key, val) =>
  key === 'date' ? new Date(val) : val
);
console.log('Parsed date:', parsed.date?.toISOString?.() ?? parsed.date);

// structuredClone (ES2022) — deep clone
const original = { nested: { arr: [1, 2] } };
const clone = structuredClone(original);
clone.nested.arr.push(3);
console.log('Original:', original.nested.arr); // [1, 2]
console.log('Clone:', clone.nested.arr);       // [1, 2, 3]`,

  // Module 3: OOP
  'class-dan-object': `// 🏛️ Class Modern JavaScript
class User {
  // ES2022: Private fields
  #id;
  #password;

  // ES2022: Static private
  static #count = 0;

  constructor(name, password) {
    this.name = name;
    this.#id = ++User.#count;
    this.#password = password;
  }

  get id() { return this.#id; }

  // ES2022: Public class fields
  role = 'user';

  greet() { return \`[\${this.#id}] Hello, \${this.name}!\`; }

  static getCount() { return User.#count; }
}

const u1 = new User('Ani', 'secret123');
const u2 = new User('Budi', 'pass456');
console.log(u1.greet());
console.log(u2.greet());
console.log('Total users:', User.getCount());
// console.log(u1.#password); // SyntaxError!`,

  'constructor-dan-methods': `// 🔧 Constructor & Methods
class APIClient {
  #baseUrl;
  #headers;

  constructor(baseUrl, { headers = {} } = {}) {
    this.#baseUrl = baseUrl;
    this.#headers = { 'Content-Type': 'application/json', ...headers };
  }

  // Computed method name
  ['get'](path) {
    console.log(\`GET \${this.#baseUrl}\${path}\`);
    return { status: 200 };
  }

  // Async method
  async fetchData(path) {
    console.log(\`Fetching \${path}...\`);
    return { data: [] };
  }

  // toString override
  toString() { return \`APIClient(\${this.#baseUrl})\`; }
}

const client = new APIClient('https://api.example.com');
console.log(String(client));
client['get']('/users');`,

  'inheritance-dengan-extends': `// 🧬 Inheritance Modern
class Shape {
  constructor(name) { this.name = name; }
  area() { throw new Error('Override area()!'); }
  toString() { return \`\${this.name}: area=\${this.area()}\`; }
}

class Circle extends Shape {
  #radius;
  constructor(r) { super('Circle'); this.#radius = r; }
  area() { return Math.PI * this.#radius ** 2; }
}

class Rectangle extends Shape {
  constructor(w, h) { super('Rectangle'); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

[new Circle(5), new Rectangle(4, 6)].forEach(s =>
  console.log(\`\${s.name}: \${s.area().toFixed(2)}\`)
);`,

  'encapsulation-getter-setter': `// 🔒 Encapsulation: Private + Getter/Setter
class Temperature {
  #celsius;

  constructor(celsius) {
    this.celsius = celsius; // uses setter
  }

  get celsius() { return this.#celsius; }
  set celsius(val) {
    if (typeof val !== 'number') throw new TypeError('Number required');
    this.#celsius = val;
  }

  get fahrenheit() { return this.#celsius * 9/5 + 32; }
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }

  toString() {
    return \`\${this.#celsius}°C / \${this.fahrenheit.toFixed(1)}°F\`;
  }
}

const t = new Temperature(100);
console.log(t.toString());   // 100°C / 212.0°F
t.fahrenheit = 32;
console.log(t.toString());   // 0°C / 32.0°F`,

  'polymorphism-dan-method-overriding': `// 🎭 Polymorphism
class Serializable {
  toJSON() { throw new Error('Implement toJSON'); }
  serialize() { return JSON.stringify(this.toJSON()); }
}

class User extends Serializable {
  constructor(name, email) {
    super();
    this.name = name;
    this.email = email;
  }
  toJSON() { return { type: 'user', name: this.name, email: this.email }; }
}

class Product extends Serializable {
  constructor(title, price) {
    super();
    this.title = title;
    this.price = price;
  }
  toJSON() { return { type: 'product', title: this.title, price: this.price }; }
}

// Polymorphic usage
[new User('Ani', 'ani@dev.id'), new Product('Laptop', 15000000)]
  .forEach(item => console.log(item.serialize()));`,

  // Module 4: Fungsi dan Scope
  'closure-dan-lexical-scoping': `// 🔐 Closure & Lexical Scope
// Closure = fungsi + lingkungan saat dibuat
function createCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11

// Practical: memoize with closure
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
}

const expensiveCalc = memoize((n) => {
  console.log('Computing...');
  return n ** 2;
});
console.log(expensiveCalc(5)); // Computing... 25
console.log(expensiveCalc(5)); // 25 (cached!)`,

  'this-keyword-binding': `// 🎯 this Keyword & Binding
const obj = {
  name: 'MyObj',
  regular() { return this?.name ?? 'undefined'; },
  arrow: () => 'arrow has no own this'
};

console.log('Regular:', obj.regular());
console.log('Arrow:', obj.arrow());

// bind, call, apply
function greet(greeting) {
  return \`\${greeting}, \${this?.name ?? 'World'}!\`;
}
const bound = greet.bind({ name: 'Sinta' });
console.log(bound('Halo'));
console.log(greet.call({ name: 'Budi' }, 'Hi'));

// Optional chaining with this
class EventBus {
  #handlers = new Map();
  on(event, fn) {
    if (!this.#handlers.has(event)) this.#handlers.set(event, []);
    this.#handlers.get(event).push(fn);
  }
  emit(event, data) {
    this.#handlers.get(event)?.forEach(fn => fn(data));
  }
}
const bus = new EventBus();
bus.on('click', (d) => console.log('Clicked:', d));
bus.emit('click', { x: 100 });`,

  'arrow-functions-perilaku-this': `// ➡️ Arrow Functions & this
// Arrow functions inherit this from enclosing scope
class Timer {
  #seconds = 0;
  #label;

  constructor(label) { this.#label = label; }

  start() {
    // Arrow keeps 'this' from start()
    const tick = () => {
      this.#seconds++;
      console.log(\`[\${this.#label}] \${this.#seconds}s\`);
    };
    tick(); tick(); tick();
  }

  // Arrow in methods
  reset = () => { this.#seconds = 0; };
}

const t = new Timer('Demo');
t.start();

// Practical patterns
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const double = x => x * 2;
const addOne = x => x + 1;
const transform = pipe(double, addOne, double);
console.log('pipe(5):', transform(5)); // (5*2+1)*2 = 22`,

  'iife-dan-module-pattern': `// 📦 IIFE & Module Pattern → ES Modules
// Legacy IIFE pattern
const Counter = (() => {
  let count = 0;
  return {
    inc: () => ++count,
    val: () => count
  };
})();

console.log(Counter.inc(), Counter.inc()); // 1 2

// Modern: ES Modules (ESM)
// export const add = (a, b) => a + b;
// import { add } from './math.js';

// Top-level await (ES2022) — in ESM modules:
// const config = await fetch('/config.json').then(r => r.json());

// Import assertions (ES2024):
// import data from './data.json' with { type: 'json' };

// Dynamic import
async function loadModule() {
  // const { default: lib } = await import('./lib.js');
  console.log('Dynamic import ready');
}
loadModule();

console.log('IIFE counter:', Counter.val());`,

  'prototype-dan-prototype-chain': `// ⛓️ Prototype Chain
// Everything in JS has a prototype (except Object.create(null))
const arr = [1, 2, 3];
console.log('Array proto chain:');
console.log('arr.__proto__ === Array.prototype:', Object.getPrototypeOf(arr) === Array.prototype);

// Custom prototype chain
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return \`\${this.name} makes a sound\`; };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() { return \`\${this.name} barks!\`; };

const dog = new Dog('Rex');
console.log(dog.speak());
console.log('instanceof Animal:', dog instanceof Animal);

// Modern alternative: just use class!
class Cat extends Animal {
  speak() { return \`\${this.name} meows\`; }
}
console.log(new Cat('Kitty').speak());`,

  // Module 5: Standard Library
  'math-object': `// 🔢 Math Object
console.log('PI:', Math.PI.toFixed(10));
console.log('E:', Math.E.toFixed(10));

// Useful methods
console.log('floor:', Math.floor(4.7));    // 4
console.log('ceil:', Math.ceil(4.1));      // 5
console.log('round:', Math.round(4.5));    // 5
console.log('trunc:', Math.trunc(-4.7));   // -4 (ES6)

// Random in range
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random 1-100:', randomInt(1, 100));

// Clamping
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
console.log('Clamp 150 to 0-100:', clamp(150, 0, 100));

// ES2024: Math.sumPrecise (proposal)
console.log('hypot:', Math.hypot(3, 4)); // 5`,

  'date-dan-time': `// 📅 Date & Temporal (ES2024+)
const now = new Date();
console.log('ISO:', now.toISOString());
console.log('Locale:', now.toLocaleDateString('id-ID', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}));

// Date arithmetic
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log('Tomorrow:', tomorrow.toLocaleDateString('id-ID'));

// Timestamp
console.log('Timestamp:', Date.now());

// Intl.RelativeTimeFormat (modern)
const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });
console.log(rtf.format(-1, 'day'));   // 'kemarin'
console.log(rtf.format(2, 'hour'));   // 'dalam 2 jam'

// Note: Temporal API (replacing Date) coming in ES2025+
// Temporal.Now.plainDateISO()
console.log('Tip: Temporal API will replace Date in future ES spec');`,

  'string-methods-lengkap': `// 🔤 String Methods Modern
const str = '  Hello, JavaScript World!  ';

// Trim variants
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// ES2021: replaceAll
const csv = 'a,b,c,d';
console.log(csv.replaceAll(',', ' | '));

// ES2022: at()
console.log('First:', str.trim().at(0));
console.log('Last:', str.trim().at(-1));

// Includes, startsWith, endsWith
console.log('includes JS:', str.includes('JavaScript'));
console.log('starts with Hello:', str.trim().startsWith('Hello'));

// padStart/padEnd (ES2017)
console.log('42'.padStart(5, '0')); // '00042'

// Template literals & tagged templates
const highlight = (strings, ...values) =>
  strings.reduce((r, s, i) => r + s + (values[i] ? \`【\${values[i]}】\` : ''), '');
const lang = 'JavaScript';
console.log(highlight\`Belajar \${lang} itu menyenangkan!\`);`,

  'array-higher-order-functions': `// 🚀 Array Higher-Order Functions
const products = [
  { name: 'Laptop', price: 15000000, cat: 'electronics' },
  { name: 'Keyboard', price: 500000, cat: 'electronics' },
  { name: 'Coffee', price: 50000, cat: 'food' },
  { name: 'Mouse', price: 200000, cat: 'electronics' }
];

// Chain: filter → map → reduce
const totalElectronics = products
  .filter(p => p.cat === 'electronics')
  .map(p => p.price)
  .reduce((sum, p) => sum + p, 0);

console.log('Total electronics:', totalElectronics.toLocaleString('id-ID'));

// flatMap (ES2019)
const sentences = ['Hello World', 'Foo Bar'];
console.log(sentences.flatMap(s => s.split(' ')));

// ES2023: toSorted (immutable sort)
const sorted = products.toSorted((a, b) => a.price - b.price);
console.log('Cheapest:', sorted[0].name);
console.log('Original first:', products[0].name); // unchanged`,

  'number-dan-bigint': `// 🔢 Number & BigInt
console.log('MAX_SAFE:', Number.MAX_SAFE_INTEGER);
console.log('Is safe?', Number.isSafeInteger(9007199254740991));

// BigInt for arbitrary precision
const big = 123456789012345678901234567890n;
console.log('BigInt:', big);
console.log('BigInt math:', big * 2n);

// Number methods
console.log('isNaN:', Number.isNaN(NaN));         // true
console.log('isFinite:', Number.isFinite(Infinity)); // false
console.log('parseInt:', Number.parseInt('42px'));  // 42
console.log('parseFloat:', Number.parseFloat('3.14xyz')); // 3.14

// Intl.NumberFormat
const fmt = new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR'
});
console.log(fmt.format(15000000)); // Rp 15.000.000,00

// ES2021: Numeric separators
const billion = 1_000_000_000;
console.log('Billion:', billion);`,

  'regexp-regular-expressions': `// 🔍 RegExp Modern
// ES2018: Named capture groups
const dateRe = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const match = '2024-06-15'.match(dateRe);
console.log('Year:', match?.groups?.year);
console.log('Month:', match?.groups?.month);

// ES2020: matchAll
const text = 'cat 1, dog 2, bird 3';
const pattern = /(\\w+) (\\d)/g;
for (const m of text.matchAll(pattern)) {
  console.log(\`\${m[1]}: \${m[2]}\`);
}

// ES2018: Lookbehind assertions
const prices = 'USD100 EUR200 IDR500000';
const idr = prices.match(/(?<=IDR)\\d+/);
console.log('IDR amount:', idr?.[0]);

// ES2022: /d flag (match indices)
const re = /hello/di;
const r = re.exec('Hello World');
console.log('Match:', r?.[0], 'index:', r?.index);`,

  // Module 6: Web Development
  'dom-manipulation-dasar': `// 🌐 DOM Manipulation
// Modern selectors
// document.querySelector('.class');
// document.querySelectorAll('li');

// createElement & template
const el = { tag: 'div', class: 'card', text: 'Hello DOM!' };
console.log(\`Creating: <\${el.tag} class="\${el.class}">\${el.text}</\${el.tag}>\`);

// IntersectionObserver (lazy loading)
console.log('IntersectionObserver:', typeof IntersectionObserver !== 'undefined');

// MutationObserver
console.log('MutationObserver:', typeof MutationObserver !== 'undefined');

// Modern API patterns
const createEl = (tag, props = {}, children = []) => ({
  tag, ...props, children
});
const vdom = createEl('div', { id: 'app' }, [
  createEl('h1', { text: 'Hello' }),
  createEl('p', { text: 'Virtual DOM pattern' })
]);
console.log('VDOM:', JSON.stringify(vdom, null, 2));`,

  'events-handling-delegasi': `// 🎯 Events & Delegation
// Event delegation — handle events on parent
// document.getElementById('list').addEventListener('click', e => {
//   if (e.target.matches('li')) handleItem(e.target);
// });

// AbortController for cleanup (ES2020+)
const controller = new AbortController();
console.log('AbortController signal:', !controller.signal.aborted);
controller.abort();
console.log('After abort:', controller.signal.aborted);

// Custom Events
class EventEmitter {
  #handlers = {};
  on(event, fn) {
    (this.#handlers[event] ??= []).push(fn);
  }
  emit(event, ...args) {
    this.#handlers[event]?.forEach(fn => fn(...args));
  }
  off(event, fn) {
    this.#handlers[event] = this.#handlers[event]?.filter(f => f !== fn) ?? [];
  }
}

const emitter = new EventEmitter();
emitter.on('data', d => console.log('Received:', d));
emitter.emit('data', { id: 1, name: 'Test' });`,

  'fetch-api-http-requests': `// 🌍 Fetch API Modern
// Basic fetch with async/await
async function fetchDemo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log('Todo:', data.title);

    // AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // Fetch with signal
    // await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    console.log('Fetch with AbortController: ready');
  } catch (err) {
    console.log('Error:', err?.message ?? String(err));
  }
}
fetchDemo();

// Response methods
// response.json()
// response.text()
// response.blob()
// response.arrayBuffer()
// response.formData()`,

  'async-await-asynchronous': `// ⏳ Async/Await & Promises
// ES2024: Promise.withResolvers()
// const { promise, resolve, reject } = Promise.withResolvers();

// Promise combinators
async function demo() {
  const p1 = Promise.resolve('A');
  const p2 = Promise.resolve('B');
  const p3 = Promise.resolve('C');

  // Promise.all — all must resolve
  const all = await Promise.all([p1, p2, p3]);
  console.log('all:', all);

  // Promise.allSettled — never rejects
  const settled = await Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('err')
  ]);
  console.log('settled:', JSON.stringify(settled));

  // Promise.any — first to resolve (ES2021)
  const first = await Promise.any([
    new Promise(r => setTimeout(() => r('slow'), 100)),
    Promise.resolve('fast')
  ]);
  console.log('any:', first); // 'fast'
}
demo();

// Top-level await (ES2022, in ESM):
// const config = await loadConfig();`,

  'debugging-chrome-devtools': `// 🐛 Debugging Modern
// console methods beyond .log()
console.table([
  { name: 'console.log', use: 'general output' },
  { name: 'console.table', use: 'tabular data' },
  { name: 'console.group', use: 'grouped output' }
]);

console.group('Debug Session');
console.log('Step 1: Init');
console.warn('Step 2: Warning');
console.error('Step 3: Error (demo)');
console.groupEnd();

// console.time for performance
console.time('loop');
let sum = 0;
for (let i = 0; i < 1000000; i++) sum += i;
console.timeEnd('loop');
console.log('Sum:', sum);

// console.assert
console.assert(1 === 1, 'This won\\'t show');
// console.assert(1 === 2, 'This will show!');

// debugger; — breakpoint in code
// Performance API
console.log('Performance.now():', Math.round(performance.now()), 'ms');`,

  'error-handling-try-catch': `// 🛡️ Error Handling Modern
// ES2019: Optional catch binding
try {
  JSON.parse('invalid json');
} catch {
  console.log('JSON parse failed (no binding needed)');
}

// Custom error classes
class AppError extends Error {
  constructor(message, code, details) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;
  }
}

try {
  throw new AppError('Not Found', 404, { path: '/api/users' });
} catch (e) {
  console.log(\`[\${e.code}] \${e.message}\`);
  console.log('Details:', JSON.stringify(e.details));
}

// Error cause (ES2022)
try {
  try { throw new Error('DB connection failed'); }
  catch (dbErr) {
    throw new Error('Service unavailable', { cause: dbErr });
  }
} catch (e) {
  console.log('Error:', e.message);
  console.log('Cause:', e.cause?.message);
}`,

  'project-todo-list-app': `// 📝 Project: Todo App (Modern JS)
class TodoApp {
  #todos = [];
  #nextId = 1;

  add(text) {
    this.#todos.push({ id: this.#nextId++, text, done: false, createdAt: Date.now() });
    return this;
  }

  toggle(id) {
    const todo = this.#todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
    return this;
  }

  remove(id) {
    this.#todos = this.#todos.filter(t => t.id !== id);
    return this;
  }

  get pending() { return this.#todos.filter(t => !t.done); }
  get completed() { return this.#todos.filter(t => t.done); }

  display() {
    this.#todos.forEach(t =>
      console.log(\`\${t.done ? '✅' : '⬜'} [\${t.id}] \${t.text}\`)
    );
    console.log(\`--- \${this.completed.length}/\${this.#todos.length} selesai ---\`);
  }
}

const app = new TodoApp();
app.add('Belajar ES2024').add('Coba Bun runtime').add('Review Deno API');
app.toggle(1);
app.display();`,

  'project-weather-dashboard': `// 🌤️ Project: Weather Dashboard
class WeatherDashboard {
  #apiKey;
  #cache = new Map();

  constructor(apiKey = 'demo') {
    this.#apiKey = apiKey;
  }

  async getWeather(city) {
    if (this.#cache.has(city)) {
      console.log(\`Cache hit for \${city}\`);
      return this.#cache.get(city);
    }

    // Simulated API response
    const data = {
      city,
      temp: Math.round(20 + Math.random() * 15),
      humidity: Math.round(40 + Math.random() * 40),
      condition: ['Cerah', 'Berawan', 'Hujan'][Math.floor(Math.random() * 3)]
    };

    this.#cache.set(city, data);
    return data;
  }

  async display(cities) {
    const results = await Promise.all(cities.map(c => this.getWeather(c)));
    console.log('🌤️ Weather Dashboard');
    console.log('─'.repeat(40));
    results.forEach(w => {
      console.log(\`📍 \${w.city}: \${w.temp}°C | \${w.humidity}% | \${w.condition}\`);
    });
  }
}

const dashboard = new WeatherDashboard();
dashboard.display(['Jakarta', 'Bandung', 'Surabaya']);`,

  // Module 7: Tooling
  'npm-dan-package-json': `// 📦 npm & package.json
// Modern package managers: npm, yarn, pnpm, bun
const packageJson = {
  name: 'my-app',
  version: '1.0.0',
  type: 'module',  // ES modules by default
  scripts: {
    dev: 'node --watch index.js',  // Node.js 18+ built-in watch
    test: 'node --test',           // Node.js 18+ built-in test runner
    lint: 'eslint .'
  },
  engines: { node: '>=20' },
  dependencies: {},
  devDependencies: {}
};

console.log(JSON.stringify(packageJson, null, 2));
console.log('\\nTip: Gunakan Bun untuk install 30x lebih cepat!');
console.log('bun install  |  bun run dev  |  bun test');`,

  'es6-modules-import-export': `// 📤 ES Modules (ESM)
// Named exports
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;

// Default export
// export default class Calculator { ... }

// Import
// import Calculator, { add, multiply } from './math.js';

// Dynamic import (lazy loading)
async function loadFeature() {
  // const { feature } = await import('./feature.js');
  console.log('Dynamic import: lazy-loaded!');
}
loadFeature();

// Import assertions (ES2024)
// import config from './config.json' with { type: 'json' };
// import styles from './app.css' with { type: 'css' };

// Re-export patterns
// export { default as Utils } from './utils.js';
// export * from './helpers.js';

// Top-level await (ES2022)
// const data = await fetch('/api/config').then(r => r.json());
console.log('ESM: type: "module" in package.json for Node.js');`,

  'babel-transpiling': `// 🔄 Babel & Modern Alternatives
// Babel config (.babelrc / babel.config.json)
const babelConfig = {
  presets: [
    ['@babel/preset-env', {
      targets: '> 0.25%, not dead',
      modules: false,
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: ['@babel/plugin-proposal-decorators']
};
console.log('Babel config:', JSON.stringify(babelConfig, null, 2));

// Modern alternatives (no Babel needed!):
console.log('\\n🚀 Alternatives to Babel:');
console.log('• SWC — Rust-based, 70x faster');
console.log('• esbuild — Go-based, 100x faster');
console.log('• Bun — built-in transpiler');
console.log('• Deno — native TypeScript support');
console.log('\\nTip: Node.js 20+ supports most ES2024 natively!');`,

  'webpack-bundling-assets': `// 📦 Bundlers Modern
// webpack.config.js basics
const webpackConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: { filename: 'bundle.js' },
  module: { rules: [{ test: /\\.js$/, use: 'babel-loader' }] }
};
console.log('Webpack:', JSON.stringify(webpackConfig, null, 2));

// Modern alternatives
console.log('\\n🚀 Modern Bundlers:');
console.log('• Vite — dev server + Rollup build');
console.log('• esbuild — extremely fast (Go)');
console.log('• Rollup — tree-shaking, ESM-first');
console.log('• Turbopack — Rust, by Vercel');
console.log('• Bun — built-in bundler');
console.log('\\nVite example:');
console.log('  npm create vite@latest my-app');
console.log('  cd my-app && npm install && npm run dev');`,

  'eslint-dan-prettier': `// ✨ ESLint & Prettier
// ESLint flat config (eslint.config.js) — ES2024 standard
const eslintConfig = {
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always']
  }
};
console.log('ESLint config:', JSON.stringify(eslintConfig, null, 2));

// Prettier config
const prettierConfig = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5'
};
console.log('\\nPrettier config:', JSON.stringify(prettierConfig, null, 2));

// Modern linting setup
console.log('\\n🛠️ Modern Setup:');
console.log('npm init @eslint/config@latest');
console.log('npx prettier --write .');
console.log('\\n💡 Biome: single tool for lint+format (Rust, fast!)');`,

  'jest-testing-framework': `// 🧪 Testing Modern
// Node.js built-in test runner (v18+)
// import { test, describe } from 'node:test';
// import assert from 'node:assert';

// describe('Calculator', () => {
//   test('add', () => assert.strictEqual(add(2, 3), 5));
// });

// Vitest — modern, fast, Vite-compatible
console.log('Testing frameworks:');
console.log('• node:test — built-in (Node 18+)');
console.log('• Vitest — modern, fast, ESM-native');
console.log('• Jest — mature, large ecosystem');
console.log('• Bun test — built-in, extremely fast');

// Example test structure
const add = (a, b) => a + b;
const tests = [
  { input: [2, 3], expected: 5 },
  { input: [-1, 1], expected: 0 },
  { input: [0, 0], expected: 0 }
];
tests.forEach(({ input, expected }) => {
  const result = add(...input);
  const status = result === expected ? '✅' : '❌';
  console.log(\`\${status} add(\${input}) = \${result} (expected \${expected})\`);
});`,

  // Module 8: Best Practices
  'clean-code-principles': `// 🧹 Clean Code JavaScript
// 1. Meaningful names
const MAX_RETRY_COUNT = 3; // bukan 'n' atau 'x'

// 2. Small functions, single responsibility
const isValidEmail = (email) => /^[^@]+@[^@]+\\.[^@]+$/.test(email);
const sanitize = (input) => input?.trim()?.toLowerCase() ?? '';

// 3. Early returns
function processUser(user) {
  if (!user?.name) return { error: 'Name required' };
  if (!isValidEmail(user?.email ?? '')) return { error: 'Invalid email' };
  return { success: true, user: { ...user, email: sanitize(user.email) } };
}

console.log(processUser({ name: 'Ani', email: 'Ani@Dev.ID' }));
console.log(processUser({ name: '' }));

// 4. Avoid magic numbers
// 5. Use optional chaining & nullish coalescing
// 6. Prefer immutable operations (toSorted, map, filter)
console.log('\\n✅ Clean Code = readable + maintainable + testable');`,

  'performance-optimization': `// ⚡ Performance Optimization
// 1. Avoid unnecessary work
console.time('reduce vs loop');
const arr = Array.from({ length: 100000 }, (_, i) => i);
const sum = arr.reduce((a, b) => a + b, 0);
console.timeEnd('reduce vs loop');
console.log('Sum:', sum);

// 2. Debounce & Throttle
const debounce = (fn, ms) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};

// 3. WeakRef for memory management (ES2021)
let bigObj = { data: new Array(10000).fill('x') };
const ref = new WeakRef(bigObj);
console.log('WeakRef alive:', ref.deref() !== undefined);

// 4. structuredClone vs JSON parse/stringify
console.time('structuredClone');
const clone = structuredClone({ nested: { arr: [1,2,3] } });
console.timeEnd('structuredClone');

// 5. Use Map over Object for frequent adds/deletes
console.log('\\n💡 Tips: Use Chrome DevTools Performance tab');`,

  'javascript-security': `// 🔐 Security Best Practices
// 1. Never eval() user input
// eval(userInput); // ❌ NEVER!

// 2. Sanitize HTML
const sanitizeHTML = (str) =>
  str.replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#39;'
  }[c]));

console.log(sanitizeHTML('<script>alert("xss")</script>'));

// 3. Use Content-Security-Policy headers
// 4. Validate on server, never trust client

// 5. Use crypto API
const randomBytes = new Uint8Array(16);
crypto.getRandomValues(randomBytes);
console.log('Secure random:', Array.from(randomBytes).map(b => b.toString(16).padStart(2,'0')).join(''));

// 6. SubtleCrypto for hashing
// const hash = await crypto.subtle.digest('SHA-256', data);

console.log('\\n🛡️ Security checklist:');
console.log('• No eval/innerHTML with user data');
console.log('• CSP headers');
console.log('• HTTPS everywhere');
console.log('• Input validation server-side');`,

  'code-review-checklist': `// 📋 Code Review Checklist
const checklist = [
  { cat: 'Logic', items: ['Edge cases handled?', 'Error handling present?', 'No off-by-one?'] },
  { cat: 'Style', items: ['const > let > var?', 'Descriptive names?', 'No magic numbers?'] },
  { cat: 'Modern', items: ['Optional chaining (?.)', 'Nullish coalescing (??)', 'Private fields (#)'] },
  { cat: 'Perf', items: ['No memory leaks?', 'Debounced events?', 'Lazy loading?'] },
  { cat: 'Security', items: ['No eval?', 'Input sanitized?', 'No secrets in code?'] }
];

checklist.forEach(({ cat, items }) => {
  console.log(\`\\n📌 \${cat}:\`);
  items.forEach(item => console.log(\`  ☐ \${item}\`));
});

console.log('\\n✅ Review = quality gate → better code');`,

  'web-workers-multi-threading': `// 🧵 Web Workers
// Main thread — create worker
// const worker = new Worker('worker.js');
// worker.postMessage({ task: 'compute', data: [1,2,3] });
// worker.onmessage = (e) => console.log('Result:', e.data);

// Worker file (worker.js):
// self.onmessage = (e) => {
//   const result = heavyComputation(e.data);
//   self.postMessage(result);
// };

// SharedArrayBuffer + Atomics (true shared memory)
console.log('SharedArrayBuffer:', typeof SharedArrayBuffer !== 'undefined');

// navigator.hardwareConcurrency
console.log('CPU cores:', typeof navigator !== 'undefined'
  ? navigator.hardwareConcurrency ?? 'N/A'
  : 'N/A (not in browser)');

// Practical: offload heavy work
console.log('\\n🧵 Worker patterns:');
console.log('• Web Worker — separate thread');
console.log('• SharedWorker — shared between tabs');
console.log('• Service Worker — offline/caching');
console.log('• Worklet — low-level (audio, paint)');`,

  // Module 9: Advanced
  'generators-dan-iterators': `// 🔄 Generators & Iterators
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

console.log('Range:', [...range(0, 10, 2)]); // [0, 2, 4, 6, 8]

// Infinite generator
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Take first N from infinite
function take(gen, n) {
  const result = [];
  for (const val of gen) {
    result.push(val);
    if (result.length >= n) break;
  }
  return result;
}

console.log('Fib(10):', take(fibonacci(), 10));

// Async generators
async function* asyncRange(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}
// for await (const val of asyncRange(5)) { ... }
console.log('Async generators: for await...of');`,

  'proxy-dan-reflection-api': `// 🪞 Proxy & Reflect
// Proxy — intercept object operations
const handler = {
  get(target, prop) {
    console.log(\`GET \${String(prop)}\`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(\`SET \${String(prop)} = \${value}\`);
    if (typeof value === 'number' && value < 0) {
      throw new RangeError('Negative not allowed');
    }
    return Reflect.set(target, prop, value);
  }
};

const data = new Proxy({}, handler);
data.name = 'Test';
data.count = 42;
console.log('Name:', data.name);

// Practical: reactive state
function reactive(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      const old = target[prop];
      target[prop] = value;
      console.log(\`State: \${String(prop)} \${old} → \${value}\`);
      return true;
    }
  });
}

const state = reactive({ count: 0 });
state.count = 1;
state.count = 2;`,

  'design-patterns-javascript': `// 🏗️ Design Patterns
// 1. Singleton
class Database {
  static #instance;
  static getInstance() {
    return Database.#instance ??= new Database();
  }
  constructor() {
    if (Database.#instance) return Database.#instance;
    this.connection = 'connected';
  }
}

// 2. Observer (Event Emitter)
class Store {
  #state = {};
  #listeners = new Set();

  subscribe(fn) { this.#listeners.add(fn); return () => this.#listeners.delete(fn); }
  setState(updates) {
    this.#state = { ...this.#state, ...updates };
    this.#listeners.forEach(fn => fn(this.#state));
  }
  getState() { return { ...this.#state }; }
}

const store = new Store();
const unsub = store.subscribe(s => console.log('State:', JSON.stringify(s)));
store.setState({ user: 'Ani' });
store.setState({ theme: 'dark' });
unsub();

// 3. Factory
const createShape = (type) => {
  const shapes = { circle: { area: r => Math.PI * r ** 2 }, rect: { area: (w, h) => w * h } };
  return shapes[type] ?? null;
};
console.log('Circle area:', createShape('circle')?.area(5)?.toFixed(2));`,

  // Module 10: Projects
  'project-interactive-quiz-app': `// 🎮 Project: Quiz App
class QuizApp {
  #questions; #current = 0; #score = 0;

  constructor(questions) { this.#questions = questions; }

  get currentQuestion() { return this.#questions[this.#current]; }
  get isFinished() { return this.#current >= this.#questions.length; }
  get summary() {
    return \`Score: \${this.#score}/\${this.#questions.length} (\${Math.round(this.#score / this.#questions.length * 100)}%)\`;
  }

  answer(idx) {
    const q = this.currentQuestion;
    if (!q) return null;
    const correct = idx === q.correct;
    if (correct) this.#score++;
    this.#current++;
    return { correct, explanation: q.explanation };
  }
}

const quiz = new QuizApp([
  { q: 'typeof null?', options: ['null','object','undefined'], correct: 1, explanation: 'Bug historis JS' },
  { q: '0 === -0?', options: ['true','false'], correct: 0, explanation: 'Keduanya === true' },
  { q: 'NaN === NaN?', options: ['true','false'], correct: 1, explanation: 'NaN tidak === apapun' }
]);

while (!quiz.isFinished) {
  const q = quiz.currentQuestion;
  console.log(\`Q: \${q.q} → Answer: \${q.options[q.correct]}\`);
  const r = quiz.answer(q.correct);
  console.log(r.correct ? '✅' : '❌', r.explanation);
}
console.log(quiz.summary);`,

  'project-expense-tracker': `// 💰 Project: Expense Tracker
class ExpenseTracker {
  #transactions = [];

  add(desc, amount, category = 'other') {
    this.#transactions.push({
      id: crypto.randomUUID?.() ?? String(Date.now()),
      desc, amount, category,
      date: new Date().toISOString().split('T')[0]
    });
    return this;
  }

  get balance() { return this.#transactions.reduce((s, t) => s + t.amount, 0); }
  get income() { return this.#transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0); }
  get expenses() { return this.#transactions.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0); }

  byCategory() {
    const grouped = {};
    this.#transactions.forEach(t => {
      grouped[t.category] ??= 0;
      grouped[t.category] += t.amount;
    });
    return grouped;
  }

  display() {
    const fmt = n => new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR' }).format(n);
    console.log('💰 Expense Tracker');
    console.log(\`Income: \${fmt(this.income)}\`);
    console.log(\`Expenses: \${fmt(this.expenses)}\`);
    console.log(\`Balance: \${fmt(this.balance)}\`);
    console.log('By category:', JSON.stringify(this.byCategory()));
  }
}

const tracker = new ExpenseTracker();
tracker.add('Gaji', 10000000, 'income');
tracker.add('Makan', -500000, 'food');
tracker.add('Transport', -200000, 'transport');
tracker.add('Freelance', 3000000, 'income');
tracker.display();`,

  'project-realtime-chat-app': `// 💬 Project: Chat App Architecture
class ChatRoom {
  #messages = [];
  #users = new Map();

  join(userId, name) {
    this.#users.set(userId, { name, joinedAt: Date.now() });
    this.#broadcast('system', \`\${name} bergabung\`);
  }

  send(userId, text) {
    const user = this.#users.get(userId);
    if (!user) return;
    const msg = {
      id: this.#messages.length + 1,
      user: user.name,
      text: text?.trim() ?? '',
      time: new Date().toLocaleTimeString('id-ID')
    };
    this.#messages.push(msg);
    console.log(\`[\${msg.time}] \${msg.user}: \${msg.text}\`);
  }

  #broadcast(type, text) {
    console.log(\`📢 [\${type}] \${text}\`);
  }

  get history() { return [...this.#messages]; }
  get online() { return [...this.#users.values()].map(u => u.name); }
}

const room = new ChatRoom();
room.join('u1', 'Ani');
room.join('u2', 'Budi');
room.send('u1', 'Halo semua! 👋');
room.send('u2', 'Halo Ani! Sedang belajar JS?');
room.send('u1', 'Iya, ES2024 features keren!');
console.log('Online:', room.online);`,

  'project-ecommerce-filter': `// 🛒 Project: E-commerce Filter
class ProductFilter {
  #products;

  constructor(products) { this.#products = products; }

  filter({ minPrice, maxPrice, category, search, inStock } = {}) {
    return this.#products.filter(p => {
      if (minPrice != null && p.price < minPrice) return false;
      if (maxPrice != null && p.price > maxPrice) return false;
      if (category && p.category !== category) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (inStock != null && p.inStock !== inStock) return false;
      return true;
    });
  }

  sort(products, by = 'price', order = 'asc') {
    return products.toSorted((a, b) => {
      const diff = typeof a[by] === 'string'
        ? a[by].localeCompare(b[by])
        : (a[by] ?? 0) - (b[by] ?? 0);
      return order === 'asc' ? diff : -diff;
    });
  }
}

const products = [
  { name: 'Laptop Pro', price: 20000000, category: 'electronics', inStock: true },
  { name: 'Wireless Mouse', price: 300000, category: 'electronics', inStock: true },
  { name: 'Coffee Beans', price: 150000, category: 'food', inStock: false },
  { name: 'Mechanical Keyboard', price: 1500000, category: 'electronics', inStock: true }
];

const filter = new ProductFilter(products);
const results = filter.sort(
  filter.filter({ category: 'electronics', inStock: true }),
  'price', 'asc'
);
results.forEach(p => console.log(\`\${p.name}: Rp \${p.price.toLocaleString()}\`));`,

  'final-project-fullstack': `// 🚀 Full-Stack JS Architecture
// Modern stack: Node/Bun + Express/Hono + DB

class MiniAPI {
  #routes = new Map();
  #data = new Map();

  get(path, handler) { this.#routes.set(\`GET \${path}\`, handler); }
  post(path, handler) { this.#routes.set(\`POST \${path}\`, handler); }

  async handle(method, path, body) {
    const handler = this.#routes.get(\`\${method} \${path}\`);
    if (!handler) return { status: 404, body: { error: 'Not found' } };
    try {
      const result = await handler({ body, db: this.#data });
      return { status: 200, body: result };
    } catch (e) {
      return { status: 500, body: { error: e?.message ?? 'Server error' } };
    }
  }
}

const api = new MiniAPI();
api.get('/users', ({ db }) => [...(db.get('users') ?? [])]);
api.post('/users', ({ body, db }) => {
  const users = db.get('users') ?? [];
  users.push({ id: users.length + 1, ...body });
  db.set('users', users);
  return { created: true, count: users.length };
});

// Simulate requests
(async () => {
  console.log(await api.handle('POST', '/users', { name: 'Ani' }));
  console.log(await api.handle('POST', '/users', { name: 'Budi' }));
  console.log(await api.handle('GET', '/users'));
  console.log('\\n🚀 Stack: Bun/Deno + Hono + Prisma + PostgreSQL');
})();`
};

function defaultSnippet(slug) {
  return SNIPPETS[slug] || `// Tulis kode JavaScript di sini...\nconsole.log("Hello, JavaScript!");`;
}

/* ============ Lesson Loader ============ */
async function loadLesson(modId, lessonId) {
  try { localStorage.setItem('javascript_last_lesson', JSON.stringify({modId, lessonId})); } catch(e){}
  const mod = getModule(modId), lesson = getLesson(modId, lessonId);
  if (!mod || !lesson) return;
  currentModuleId = modId; currentLessonId = lessonId; quizState = null;

  const bc = document.getElementById('breadcrumb');
  const lt = document.getElementById('lesson-title');
  if (bc) bc.textContent = `Modul ${mod.id}: ${mod.title} · Lesson ${lesson.id} of ${totalLessons()}`;
  if (lt) lt.textContent = lesson.title;

  const contentEl = document.getElementById('lesson-content');
  if (contentEl) contentEl.innerHTML = '<div class="py-10 text-center text-slate-500"><i class="fas fa-circle-notch fa-spin text-xl mb-2"></i><p class="text-sm">Memuat materi...</p></div>';

  try {
    const res = await fetch(`lessons/${lesson.slug}.md`, { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const mdText = await res.text();
    if (contentEl) {
      contentEl.innerHTML = marked.parse(mdText);
      // Apply syntax highlighting
      contentEl.querySelectorAll('pre code').forEach(block => {
        try { hljs.highlightElement(block); } catch {}
      });
    }
  } catch {
    if (contentEl) contentEl.innerHTML = `<h2>${esc(lesson.title)}</h2><p class="text-slate-400">Materi untuk pelajaran ini.</p>`;
  }

  const editor = document.getElementById('code-editor');
  if (editor) editor.value = defaultSnippet(lesson.slug);
  const out = document.getElementById('output');
  if (out) out.innerHTML = '<span class="text-slate-600">// Tekan Run untuk menjalankan kode</span>';
  const vm = document.getElementById('validation-msg');
  if (vm) vm.className = 'mt-3 p-4 rounded-xl hidden text-sm';

  renderModuleQuiz(modId);
  updateNavButtons();
  updateCompleteButtons();
  renderNav(preserveSearch());
  closeSidebar();

  try { history.replaceState(null, '', `#m${modId}-l${lessonId}`); } catch {}
  const sc = document.getElementById('content-scroll');
  if (sc) sc.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============ Quiz ============ */
async function renderModuleQuiz(modId) {
  const sec = document.getElementById('quiz-section');
  const box = document.getElementById('quiz-content');
  const res = document.getElementById('quiz-result');
  if (!sec || !box) return;
  sec.classList.add('hidden');
  box.innerHTML = '';
  if (res) res.innerHTML = '';

  const mod = getModule(modId);
  if (!mod?.quiz?.questionCount) return;

  try {
    const resp = await fetch(`quizzes/module-${modId}.json`, { cache: 'no-store' });
    if (!resp.ok) return;
    const data = await resp.json();
    if (!data.questions?.length) return;
    quizState = { moduleId: modId, questions: data.questions.slice(0, 5), passing: data.passingScore ?? 70 };
    sec.classList.remove('hidden');
    box.innerHTML = `<p class="text-slate-200 text-sm font-medium mb-3">Kuis Modul ${modId} — ${quizState.questions.length} soal. Kelulusan: ${quizState.passing}%.</p>` +
      quizState.questions.map((q, i) => `
        <div class="mb-3" data-q="${i}">
          <p class="text-slate-200 text-sm font-medium mb-2">${i + 1}. ${esc(q.question)}</p>
          <div class="space-y-2">${q.options.map((opt, j) => `
            <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-white/5 border border-white/5 cursor-pointer transition text-xs sm:text-sm text-slate-300">
              <input type="radio" name="mq-${i}" value="${j}" class="text-yellow-500 focus:ring-0">
              <span>${esc(opt)}</span>
            </label>`).join('')}</div>
        </div>`).join('');
  } catch {}
}

function checkQuiz() {
  const res = document.getElementById('quiz-result');
  if (!quizState) return;
  let correct = 0;
  quizState.questions.forEach((q, i) => {
    const sel = document.querySelector(`input[name="mq-${i}"]:checked`);
    const val = sel ? parseInt(sel.value, 10) : -1;
    if (val === q.correct) correct++;
  });
  const pct = Math.round((correct / quizState.questions.length) * 100);
  const pass = pct >= quizState.passing;
  if (res) res.innerHTML = `<div class="p-4 rounded-xl ${pass ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/20 text-rose-300'} text-sm">
    <div class="font-bold flex items-center gap-2"><i class="fas ${pass ? 'fa-trophy' : 'fa-redo'}"></i> Skor: ${correct}/${quizState.questions.length} (${pct}%) — ${pass ? 'Lulus! 🎉' : 'Belum lulus, coba lagi.'}</div></div>`;
  if (pass) {
    try { localStorage.setItem('quiz_passed_' + quizState.moduleId, 'true'); } catch {}
  }
}

/* ============ Code Playground ============ */
function runCode() {
  const ed = document.getElementById('code-editor');
  const out = document.getElementById('output');
  const vm = document.getElementById('validation-msg');
  if (!ed || !out) return;

  const logs = [];
  const oLog = console.log, oErr = console.error, oWarn = console.warn, oTable = console.table;
  const oTime = console.time, oTimeEnd = console.timeEnd, oGroup = console.group, oGroupEnd = console.groupEnd;
  const oAssert = console.assert;
  const timers = {};

  const fmt = a => {
    if (a === undefined) return 'undefined';
    if (a === null) return 'null';
    if (typeof a === 'string') return a;
    if (typeof a === 'object') { try { return JSON.stringify(a, null, 2); } catch { return String(a); } }
    return String(a);
  };
  console.log = (...a) => { oLog(...a); logs.push(a.map(fmt).join(' ')); };
  console.error = (...a) => { oErr(...a); logs.push('❌ ' + a.map(fmt).join(' ')); };
  console.warn = (...a) => { oWarn(...a); logs.push('⚠️ ' + a.map(fmt).join(' ')); };
  console.table = (data) => { logs.push(fmt(data)); };
  console.time = (label) => { timers[label] = performance.now(); };
  console.timeEnd = (label) => {
    const elapsed = timers[label] ? (performance.now() - timers[label]).toFixed(2) : '?';
    logs.push(`${label}: ${elapsed}ms`);
    delete timers[label];
  };
  console.group = (label) => { logs.push(`▼ ${label ?? ''}`); };
  console.groupEnd = () => {};
  console.assert = (cond, ...a) => { if (!cond) logs.push('Assertion failed: ' + a.map(fmt).join(' ')); };

  try {
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    const fn = new AsyncFunction('"use strict";\n' + ed.value);
    fn().then(() => {
      out.innerHTML = '<pre class="text-emerald-400 font-mono text-xs sm:text-sm whitespace-pre-wrap">' +
        esc(logs.join('\n') || '(Selesai tanpa output)') + '</pre>';
      if (vm) { vm.className = 'mt-3 p-4 rounded-xl text-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-300';
        vm.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Kode berjalan tanpa error 🎉'; }
    }).catch(e => {
      out.innerHTML = '<pre class="text-rose-400 font-mono text-xs sm:text-sm whitespace-pre-wrap">❌ ' + esc(e.name + ': ' + e.message) + '</pre>';
      if (vm) { vm.className = 'mt-3 p-4 rounded-xl text-sm bg-rose-500/10 border border-rose-500/20 text-rose-300';
        vm.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Ada error — baca pesan di atas.'; }
    }).finally(() => {
      console.log = oLog; console.error = oErr; console.warn = oWarn; console.table = oTable;
      console.time = oTime; console.timeEnd = oTimeEnd; console.group = oGroup; console.groupEnd = oGroupEnd;
      console.assert = oAssert;
    });
  } catch (e) {
    out.innerHTML = '<pre class="text-rose-400 font-mono text-xs sm:text-sm whitespace-pre-wrap">❌ ' + esc(e.name + ': ' + e.message) + '</pre>';
    if (vm) { vm.className = 'mt-3 p-4 rounded-xl text-sm bg-rose-500/10 border border-rose-500/20 text-rose-300';
      vm.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Ada error — baca pesan di atas.'; }
    console.log = oLog; console.error = oErr; console.warn = oWarn; console.table = oTable;
    console.time = oTime; console.timeEnd = oTimeEnd; console.group = oGroup; console.groupEnd = oGroupEnd;
    console.assert = oAssert;
  }
}

function resetCode() {
  const l = getLesson(currentModuleId, currentLessonId);
  const ed = document.getElementById('code-editor');
  if (ed) ed.value = defaultSnippet(l?.slug ?? '');
  const out = document.getElementById('output');
  if (out) out.innerHTML = '<span class="text-slate-600">// Tekan Run untuk menjalankan kode</span>';
  const vm = document.getElementById('validation-msg');
  if (vm) vm.className = 'mt-3 p-4 rounded-xl hidden text-sm';
}

/* ============ Navigation ============ */
function flatIndex() {
  const f = flatLessons();
  return f.findIndex(x => x.moduleId === currentModuleId && x.lesson.id === currentLessonId);
}
function updateNavButtons() {
  const f = flatLessons(), i = flatIndex();
  const p = document.getElementById('prev-btn'), n = document.getElementById('next-btn');
  if (p) p.disabled = i <= 0;
  if (n) n.disabled = i < 0 || i >= f.length - 1;
}
function nextLesson() {
  const f = flatLessons(), i = flatIndex();
  if (i >= 0 && i < f.length - 1) loadLesson(f[i + 1].moduleId, f[i + 1].lesson.id);
}
function prevLesson() {
  const f = flatLessons(), i = flatIndex();
  if (i > 0) loadLesson(f[i - 1].moduleId, f[i - 1].lesson.id);
}

function markComplete() {
  progress[key(currentModuleId, currentLessonId)] = true;
  saveProgress(progress);
  updateCompleteButtons();
  renderNav(preserveSearch());
  const f = flatLessons(), i = flatIndex();
  if (i >= 0 && i < f.length - 1) setTimeout(() => loadLesson(f[i + 1].moduleId, f[i + 1].lesson.id), 300);
}

function updateCompleteButtons() {
  const isDone = isComplete(currentModuleId, currentLessonId);
  const a = document.getElementById('complete-btn');
  const b = document.getElementById('completed-btn');
  if (a) a.style.display = isDone ? 'none' : 'inline-flex';
  if (b) b.style.display = isDone ? 'inline-flex' : 'none';
}

/* ============ Sidebar Mobile ============ */
function closeSidebar() {
  if (window.innerWidth >= 1024) return;
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  if (sb) sb.classList.remove('sidebar-open');
  if (ov) ov.classList.remove('overlay-open');
}

/* ============ Search ============ */
function preserveSearch() {
  const s = document.getElementById('lesson-search');
  return s ? s.value : '';
}

/* ============ Boot ============ */
document.addEventListener('DOMContentLoaded', () => {
  // initTheme removed
  renderNav();
  updateProgress();

  // Search
  const searchInput = document.getElementById('lesson-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => renderNav(searchInput.value), 200));
  }

  // Mobile sidebar toggle
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-open');
      overlay.classList.toggle('overlay-open');
    });
  }

  // Deep link
  let m = 1, l = 1;
  try {
    const h = location.hash.match(/#m(\d+)-l(\d+)/);
    if (h && getLesson(parseInt(h[1], 10), parseInt(h[2], 10))) {
      m = parseInt(h[1], 10); l = parseInt(h[2], 10);
    }
  } catch {}
  if (!getLesson(m, l) && (window.MODULES ?? []).length) {
    m = window.MODULES[0].id;
    l = window.MODULES[0].lessons[0].id;
  }
  loadLesson(m, l);
});

// Global exports for onclick handlers
window.loadLesson = loadLesson;
window.toggleModule = toggleModule;
window.nextLesson = nextLesson;
window.prevLesson = prevLesson;
window.markComplete = markComplete;
window.resetProgress = resetProgress;
window.runCode = runCode;
window.resetCode = resetCode;
window.checkQuiz = checkQuiz;
window.closeSidebar = closeSidebar;

})();


// ============================================

// ============================================
// Unified Certificate Generator & Gating (100% Completion Only)
// ============================================

window.isCourseFullyCompleted = function() {
    const total = typeof totalLessons === 'function' ? totalLessons() : 50;
    const done = typeof doneCount === 'function' ? doneCount() : Object.keys(progress || {}).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const total = typeof totalLessons === 'function' ? totalLessons() : 50;
    const done = typeof doneCount === 'function' ? doneCount() : Object.keys(progress || {}).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;

    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');

    if (!isCompleted) {
        // Show Locked State
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');

        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        // Show Unlocked State
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');

        const savedName = localStorage.getItem('user_cert_name') || 'Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;

        setTimeout(() => {
            window.drawCertificate();
        }, 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark Luxury
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Outer Border & Accents
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#eab308');
    gradient.addColorStop(0.5, '#ca8a04');
    gradient.addColorStop(1, '#eab308');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Corner ornaments
    const drawCorner = (x, y) => {
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    };
    drawCorner(45, 45);
    drawCorner(width - 45, 45);
    drawCorner(45, height - 45);
    drawCorner(width - 45, height - 45);
    
    // Header Tag
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#eab308';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    // Title
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('JavaScript Learning Path — Modern ES2024+', width / 2, 175);
    
    // Subtext
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan kepada:', width / 2, 240);
    
    // Student Name
    ctx.font = '700 46px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(studentName, width / 2, 310);
    
    // Underline name
    const textWidth = ctx.measureText(studentName).width;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo((width - textWidth) / 2 - 20, 335);
    ctx.lineTo((width + textWidth) / 2 + 20, 335);
    ctx.stroke();
    
    // Paragraph
    ctx.font = '400 18px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% seluruh kurikulum interaktif, latihan kode praktik,', width / 2, 400);
    ctx.fillText('dan uji pemahaman (quiz) pada platform JavaScript Learning Path dengan predikat Sangat Memuaskan.', width / 2, 430);
    
    // Verification & Date Footer
    const today = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const codeId = 'LP-' + Math.abs(studentName.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(8, '0');
    
    ctx.textAlign = 'left';
    ctx.font = '500 14px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Tanggal: ${today}`, 90, 560);
    ctx.fillText(`ID Sertifikat: #${codeId}`, 90, 585);
    ctx.fillText(`Status: Terverifikasi (100% Selesai)`, 90, 610);
    
    // Seal / Badge
    ctx.save();
    ctx.beginPath();
    ctx.arc(width - 150, 570, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fill();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.textAlign = 'center';
    ctx.font = '32px Inter, sans-serif';
    ctx.fillText('🟨', width - 150, 565);
    ctx.font = '700 10px Inter, sans-serif';
    ctx.fillStyle = '#eab308';
    ctx.fillText('VERIFIED', width - 150, 595);
    ctx.restore();
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat diunduh setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    const name = (document.getElementById('cert-name-input')?.value || 'sertifikat').trim().toLowerCase().replace(/\s+/g, '-');
    link.download = `sertifikat-${name}-javascript.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) {
        alert('Sertifikat hanya dapat dicetak setelah menyelesaikan 100% seluruh modul!');
        return;
    }
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const win = window.open('', '_blank');
    if (win) {
        win.document.write(`
            <html>
                <head>
                    <title>Cetak Sertifikat</title>
                    <style>
                        body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #111; }
                        img { max-width: 95vw; max-height: 95vh; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                        @media print {
                            body { background: transparent; }
                            img { width: 100%; max-width: 100%; }
                        }
                    </style>
                </head>
                <body onload="window.print()">
                    <img src="${dataUrl}">
                </body>
            </html>
        `);
        win.document.close();
    }
};
