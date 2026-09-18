# Project 1: Interactive Quiz Application Engine

**Slug**: `project-interactive-quiz-app` · **Level**: Advanced · **Waktu**: 2 Jam

## 🎯 Tujuan Pembelajaran
- Mengonstruksi arsitektur *engine* kuis modular berbasis *Deterministic Finite State Machine* (FSM) yang bebas dari *race condition*.
- Mengimplementasikan penghitung waktu mundur presisi tinggi dengan mitigasi *timer drift* memanfaatkan `performance.now()` dan sinkronisasi Macrotask Queue.
- Mengelola state terisolasi dengan operasi *immutable* ES2024 (`Array.prototype.with()`) serta serialisasi aman pada `sessionStorage`.
- Membangun *pipeline* evaluasi jawaban deterministik dan generator analitik metrik performa (*accuracy rate*, *average time per question*, *distribution matrix*).

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Arsitektur aplikasi kuis interaktif level *production* membutuhkan pemisahan tegas antara State Management, Presentation Layer, dan Temporal Engine (Timer). Dalam runtime JavaScript (V8 Engine), model reaktivitas kuis rentan terhadap desinkronisasi data jika mutasi state dilakukan secara langsung pada memori Heap tanpa proteksi immutability. Ketika referensi objek kuis dimutasi secara liar (*in-place mutation*), riwayat jawaban dan integritas timer dapat rusak saat terjadi re-render UI atau interupsi asinkron.

Pengelolaan timer berbasis `setInterval` konvensional di JavaScript tidak menjamin eksekusi waktu nyata. Callback timer dimasukkan ke dalam **Macrotask Queue** (Task Queue). Jika Call Stack sedang mengeksekusi komputasi berat, eksekusi callback timer akan tertunda (mengalami *timer drift* kumulatif). Untuk mengatasinya, engine harus menghitung selisih waktu aktual menggunakan *Monotonic Clock* (`performance.now()`) terhadap target timestamp masa depan, bukan hanya mengandalkan interval deterministik.

```text
                                 EVENT LOOP TIMING ARCHITECTURE
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [Call Stack] ──(Eksekusi FSM)──> [Web APIs: performance.now() + setTimeout (100ms)]    │
│       ▲                                        │                                       │
│       │                                        ▼ (Register Macrotask)                  │
│ [Microtask Queue]                ┌───────────────────────────┐                         │
│ (State Updates / Promises)       │      Macrotask Queue      │                         │
│       ▲                          │ ┌───────────────────────┐ │                         │
│       │                          │ │ Timer Tick Evaluation │ │                         │
│       └──────────────────────────┼─┤ (Drift Compensation)  │ │                         │
│                                  │ └───────────────────────┘ │                         │
│                                  └───────────────────────────┘                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

Persistensi sesi ke `sessionStorage` bertindak sebagai lapisan *snapshot hydration*. Saat browser memuat ulang halaman (*page refresh*), engine membaca payload terenkapsulasi, memvalidasi integritas skema state via *type checking* ketat, lalu memulihkan indeks pertanyaan dan sisa alokasi waktu tanpa kehilangan progres pengguna.

### 2. Sintaks & Penggunaan Modern
Arsitektur engine memanfaatkan fitur ES2024: `#privateFields` untuk *encapsulation*, `Array.prototype.with()` untuk mutasi state *immutable*, dan `Promise.withResolvers()` untuk mempermudah sinkronisasi transisi state asinkron.

```javascript
// Definisi Status Transisi FSM
const QuizStatus = Object.freeze({
  IDLE: 'IDLE',
  IN_PROGRESS: 'IN_PROGRESS',
  EVALUATING: 'EVALUATING',
  COMPLETED: 'COMPLETED'
});

class QuizEngine {
  #questions = [];
  #currentIndex = 0;
  #userAnswers = [];
  #status = QuizStatus.IDLE;
  #timerId = null;
  #timeRemaining = 0;
  #onTickCallback = null;
  #storageKey = 'QUIZ_ENGINE_SNAPSHOT_v1';

  constructor(questions, { onTick = () => {} } = {}) {
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Validasi Gagal: Dataset pertanyaan harus berupa array non-kosong.');
    }
    this.#questions = Object.freeze(structuredClone(questions));
    this.#userAnswers = new Array(questions.length).fill(null);
    this.#onTickCallback = onTick;
  }

  get state() {
    return Object.freeze({
      status: this.#status,
      currentIndex: this.#currentIndex,
      currentQuestion: this.#questions[this.#currentIndex] ?? null,
      totalQuestions: this.#questions.length,
      timeRemaining: this.#timeRemaining,
      answers: [...this.#userAnswers],
      isFinished: this.#status === QuizStatus.COMPLETED
    });
  }

  start() {
    if (this.#status !== QuizStatus.IDLE) return;
    this.#status = QuizStatus.IN_PROGRESS;
    this.#loadQuestion(0);
  }

  #loadQuestion(index) {
    this.#currentIndex = index;
    const currentQ = this.#questions[index];
    this.#timeRemaining = currentQ.timeLimitSec;
    this.#startPreciseTimer(currentQ.timeLimitSec);
    this.#persist();
  }

  #startPreciseTimer(seconds) {
    if (this.#timerId) clearInterval(this.#timerId);
    const targetTimestamp = performance.now() + (seconds * 1000);

    this.#timerId = setInterval(() => {
      const remainingMs = targetTimestamp - performance.now();
      const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));
      this.#timeRemaining = remainingSec;
      this.#onTickCallback(remainingSec);

      if (remainingSec <= 0) {
        clearInterval(this.#timerId);
        this.submitAnswer(-1); // -1 mengindikasikan timeout
      }
    }, 200);
  }

  submitAnswer(selectedOptionIndex) {
    if (this.#status !== QuizStatus.IN_PROGRESS) return null;
    
    clearInterval(this.#timerId);
    this.#status = QuizStatus.EVALUATING;

    const currentQ = this.#questions[this.#currentIndex];
    const isCorrect = selectedOptionIndex === currentQ.correctIndex;
    const evaluation = {
      questionId: currentQ.id,
      selectedOptionIndex,
      isCorrect,
      explanation: currentQ.explanation,
      timeSpent: currentQ.timeLimitSec - this.#timeRemaining
    };

    // ES2024 Immutable Array Update
    this.#userAnswers = this.#userAnswers.with(this.#currentIndex, evaluation);

    if (this.#currentIndex + 1 < this.#questions.length) {
      this.#status = QuizStatus.IN_PROGRESS;
      this.#loadQuestion(this.#currentIndex + 1);
    } else {
      this.#status = QuizStatus.COMPLETED;
      this.#persist();
    }

    return evaluation;
  }

  #persist() {
    const payload = {
      currentIndex: this.#currentIndex,
      userAnswers: this.#userAnswers,
      status: this.#status
    };
    sessionStorage.setItem(this.#storageKey, JSON.stringify(payload));
  }

  generateAnalyticsReport() {
    if (this.#status !== QuizStatus.COMPLETED) {
      throw new Error('Laporan hanya dapat dibuat setelah kuis selesai.');
    }

    const total = this.#userAnswers.length;
    const correctCount = this.#userAnswers.filter(a => a?.isCorrect).length;
    const totalTimeSpent = this.#userAnswers.reduce((acc, curr) => acc + (curr?.timeSpent ?? 0), 0);

    return {
      metrics: {
        totalQuestions: total,
        correctAnswers: correctCount,
        incorrectAnswers: total - correctCount,
        accuracyPercentage: Number(((correctCount / total) * 100).toFixed(2)),
        averageTimePerQuestionSec: Number((totalTimeSpent / total).toFixed(2))
      },
      detailedBreakdown: this.#userAnswers
    };
  }
}
```

### 3. Studi Kasus Nyata
Implementasi simulasi pengujian kuis arsitektur engine dengan injeksi mock dataset dan lifecycle evaluasi real-time.

```javascript
// Mock dataset kuis spesialisasi runtime JavaScript
const javascriptQuizDataset = [
  {
    id: 'js-01',
    text: 'Di mana deklarasi let dan const dialokasikan saat fase Creation Phase?',
    options: [
      'Global Variable Environment langsung',
      'Lexical Environment (TDZ - Temporal Dead Zone)',
      'Call Stack Execution Buffer',
      'Microtask Heap Memory'
    ],
    correctIndex: 1,
    timeLimitSec: 10,
    explanation: 'let/const ditempatkan di Lexical Environment dan berada di TDZ sebelum inisialisasi tercapai.'
  },
  {
    id: 'js-02',
    text: 'Metode mana yang menghasilkan array baru secara immutable di ES2024?',
    options: ['Array.prototype.push', 'Array.prototype.reverse', 'Array.prototype.with', 'Array.prototype.splice'],
    correctIndex: 2,
    timeLimitSec: 8,
    explanation: 'Array.prototype.with() mengembalikan array baru dengan elemen yang diubah tanpa mutasi array asal.'
  }
];

// Mock SessionStorage untuk lingkungan Node.js/Headless
const storageMock = new Map();
globalThis.sessionStorage = {
  setItem: (k, v) => storageMock.set(k, String(v)),
  getItem: (k) => storageMock.get(k) ?? null,
  removeItem: (k) => storageMock.delete(k)
};

// Pipeline Eksekusi Engine
const engine = new QuizEngine(javascriptQuizDataset, {
  onTick: (sec) => {
    // Dipanggil setiap tick sinkronisasi
  }
});

console.log('--- INISIALISASI KUIS ---');
engine.start();
console.log('State Awal:', engine.state.currentQuestion.text);

// Pengguna menjawab Soal 1 dengan Benar
console.log('\n--- MENJAWAB SOAL 1 ---');
const eval1 = engine.submitAnswer(1);
console.log('Hasil Evaluasi 1:', { Benar: eval1.isCorrect, Alasan: eval1.explanation });

// Pengguna menjawab Soal 2 dengan Salah
console.log('\n--- MENJAWAB SOAL 2 ---');
const eval2 = engine.submitAnswer(0);
console.log('Hasil Evaluasi 2:', { Benar: eval2.isCorrect, Alasan: eval2.explanation });

// Menampilkan Hasil Akhir & Analisis
console.log('\n--- LAPORAN ANALITIK KUIS ---');
const finalReport = engine.generateAnalyticsReport();
console.log('Ringkasan Metrik:', JSON.stringify(finalReport.metrics, null, 2));
```

### 4. Visualisasi & Mental Model
```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                         FINITE STATE MACHINE & SNAPSHOT FLOW                             │
└──────────────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
                                ┌───────────┐
                                │   IDLE    │ ─── start()
                                └─────┬─────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
      ┌───────────────> │        IN_PROGRESS        │ <────────────────────────┐
      │                 └─────────────┬─────────────┘                          │
      │                               │ submitAnswer() / Timeout               │
      │                               ▼                                        │
      │                 ┌───────────────────────────┐                          │
      │                 │        EVALUATING         │                          │
      │                 └─────────────┬─────────────┘                          │
      │                               │                                        │
      │          [Ada Soal Selanjutnya?]                                       │
      │                 ├─── Ya ──────┴────────────────────────────────────────┘
      │                 └─── Tidak
      │                        │
      │                        ▼
      │                 ┌─────────────┐
      │                 │  COMPLETED  │ ─── generateAnalyticsReport()
      │                 └─────────────┘
      │
      └────── [sessionStorage Snapshot Hydration: Memulihkan index, jawaban, status]
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Monotonic Time Target**: Hindari reduksi `timeRemaining--` per detik. Hitung selisih terhadap `performance.now() + offset` untuk mencegah distorsi akibat Macrotask blocking.
- ✅ **Lindungi Integritas State dengan Immutability**: Gunakan `structuredClone` saat inisialisasi dataset dan `Array.prototype.with()` pada pembaharuan jawaban per indeks.
- ✅ **Isolasi Mutasi Melalui Encapsulation**: Gunakan *Private Class Fields* (`#`) untuk mencegah manipulasi eksternal pada status kuis dan kunci jawaban.
- ❌ **Hindari Menyimpan Instance Object Kompleks ke SessionStorage**: Simpan hanya skema data primitif/JSON murni; jangan menyimpan reference function atau prototype kotor.

---

## ✍️ Latihan Mandiri
1. Modifikasi class `QuizEngine` pada **Code Editor di bawah** untuk menambahkan fitur *Streak Multiplier Score* (misal: jika menjawab benar $\ge 2$ kali berturut-turut, skor mendapat bobot $1.5\times$).
2. Buatlah metode statis `QuizEngine.hydrateFromSession()` pada **Code Editor di bawah** yang mampu membaca payload `sessionStorage`, memvalidasi strukturnya, dan mengembalikan instance engine baru yang siap melanjutkan kuis dari titik terakhir.

---

## 🔗 Referensi
- [MDN Web Docs: Array.prototype.with()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)
- [MDN Web Docs: Performance.now() Monotonic Clock](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [ECMAScript 2024 Language Specification (ECMA-262)](https://tc39.es/ecma262/)