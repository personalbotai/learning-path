# Project 3: Real-time Chat App UI & WebSocket Simulation

**Slug**: `project-realtime-chat-app` · **Level**: Advanced · **Waktu**: 3 Jam

## 🎯 Tujuan Pembelajaran
- Menguasai perancangan arsitektur koneksi WebSocket tangguh (*resilient connection*) mencakup strategi *exponential backoff reconnect*, *jitter*, dan *heartbeat ping-pong* untuk mendeteksi *half-open TCP connection*.
- Mengimplementasikan sistem pub/sub *in-memory* berbasis *room channels* dan sinkronisasi status real-time (*typing indicators*, *read receipts*, dan *presence*).
- Mengoptimalkan alur rendering pesan chat dan manajemen scroll DOM melalui *microtask scheduling* dan teknik *batched DOM updates* guna mencegah *layout thrashing*.

---

## 📖 Materi Lengkap

### 1. Konsep Utama
Komunikasi real-time pada aplikasi web modern menuntut pergeseran paradigma dari model *request-response* berbasis HTTP/1.1 stateless menuju koneksi persisten *full-duplex* berbasis WebSocket (RFC 6455). Pada arsitektur WebSocket, setelah proses *handshake HTTP Upgrade* selesai, soket TCP tetap terbuka dua arah. Hal ini memangkas *network latency* dan *HTTP header overhead* dari setiap pertukaran paket data.

Namun, mengelola koneksi persisten di lingkungan produksi menghadirkan tantangan stabilitas jaringan:
1. **Half-Open TCP Connections**: NAT router, proxy, atau firewall seluler dapat memutuskan koneksi TCP tanpa mengirimkan paket `FIN` atau `RST`. Klien tetap mengira soket `OPEN`, padahal kanal transmisi data telah terputus. Solusinya adalah mekanisme **Heartbeat Ping-Pong** periodik pada *application layer* atau *protocol layer*.
2. **Reconnection Storms**: Ketika server chat mengalami *restart* mendadak, ribuan klien yang mencoba melakukan rekoneksi serentak pada interval waktu yang sama dapat menimbulkan serangan *Denial of Service* (DoS) internal. Mitigasi wajib diterapkan menggunakan algoritma **Exponential Backoff dengan Full Jitter**:
   $$\text{Delay} = \text{random}(0, \min(\text{MaxDelay}, \text{BaseDelay} \times 2^{\text{attempt}}))$$
3. **Event Loop & UI Performance**: Aliran pesan masuk dengan intensitas tinggi (*burst traffic*) akan membanjiri *Macrotask Queue*. Jika setiap pesan memicu manipulasi DOM sinkron secara langsung, V8 dan browser layout engine akan terpaksa melakukan kalkulasi reflow berulang (*layout thrashing*). Oleh karena itu, mutasi UI dan penyesuaian scroll viewport perlu diagregasikan dalam satu frame rendering menggunakan `requestAnimationFrame` atau Microtask queueing (`queueMicrotask`).

### 2. Sintaks & Penggunaan Modern
Pada ES2024, pengelolaan state koneksi asynchronous disederhanakan menggunakan *modern class fields*, `Promise.withResolvers()`, serta *structured lifecycle cleanup* dengan `AsyncDisposable` (`Symbol.asyncDispose`).

```javascript
// Simulasi Client WebSocket Resilien dengan Heartbeat & Exponential Backoff
class ResilientWebSocketSimulator {
  #url;
  #state = 'DISCONNECTED'; // CONNECTING | OPEN | CLOSING | DISCONNECTED
  #reconnectAttempts = 0;
  #maxReconnectAttempts = 5;
  #baseDelay = 200; // ms
  #maxDelay = 3000;  // ms
  #heartbeatTimer = null;
  #heartbeatInterval = 1000;
  #listeners = new Map();

  constructor(url) {
    this.#url = url;
  }

  on(event, callback) {
    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());
    this.#listeners.get(event).add(callback);
    return () => this.#listeners.get(event).delete(callback);
  }

  #emit(event, payload) {
    this.#listeners.get(event)?.forEach(fn => fn(payload));
  }

  async connect() {
    if (this.#state === 'OPEN' || this.#state === 'CONNECTING') return;

    this.#state = 'CONNECTING';
    this.#emit('status', { state: this.#state, attempt: this.#reconnectAttempts });

    try {
      await this.#simulateHandshake();
      this.#state = 'OPEN';
      this.#reconnectAttempts = 0;
      this.#emit('status', { state: this.#state });
      this.#startHeartbeat();
    } catch (err) {
      this.#handleDisconnect(err.message);
    }
  }

  #simulateHandshake() {
    const { promise, resolve, reject } = Promise.withResolvers();
    setTimeout(() => {
      // Simulasi kegagalan handshake pada percobaan awal (20% kegagalan)
      if (this.#reconnectAttempts === 0 && Math.random() < 0.2) {
        reject(new Error('Handshake Upgrade Failed'));
      } else {
        resolve();
      }
    }, 150);
    return promise;
  }

  #startHeartbeat() {
    this.#stopHeartbeat();
    this.#heartbeatTimer = setInterval(() => {
      if (this.#state !== 'OPEN') return;
      this.#emit('ping', { timestamp: Date.now() });
      // Kirim heartbeat frame
    }, this.#heartbeatInterval);
  }

  #stopHeartbeat() {
    if (this.#heartbeatTimer) clearInterval(this.#heartbeatTimer);
    this.#heartbeatTimer = null;
  }

  send(channel, payload) {
    if (this.#state !== 'OPEN') {
      throw new Error(`Gagal mengirim data: Koneksi berada dalam status ${this.#state}`);
    }
    const message = { channel, payload, timestamp: Date.now() };
    this.#emit('send', message);
    return message;
  }

  #handleDisconnect(reason) {
    this.#stopHeartbeat();
    this.#state = 'DISCONNECTED';
    this.#emit('status', { state: this.#state, reason });

    if (this.#reconnectAttempts < this.#maxReconnectAttempts) {
      // Perhitungan Exponential Backoff dengan Full Jitter
      const exponential = Math.min(this.#maxDelay, this.#baseDelay * (2 ** this.#reconnectAttempts));
      const jitterDelay = Math.floor(Math.random() * exponential);

      this.#reconnectAttempts++;
      this.#emit('reconnecting', { attempt: this.#reconnectAttempts, delayMs: jitterDelay });
      setTimeout(() => this.connect(), jitterDelay);
    } else {
      this.#emit('error', new Error('Batas maksimum rekoneksi tercapai. Koneksi ditutup permanen.'));
    }
  }

  disconnect() {
    this.#stopHeartbeat();
    this.#state = 'DISCONNECTED';
    this.#reconnectAttempts = this.#maxReconnectAttempts; // Cegah reconnect
    this.#emit('status', { state: this.#state, reason: 'Client intentionally closed connection' });
  }
}

// Inisialisasi Klien
const client = new ResilientWebSocketSimulator('wss://chat.internal/v1');

client.on('status', status => console.log('[STATUS]:', JSON.stringify(status)));
client.on('reconnecting', retry => console.log('[RETRY]:', JSON.stringify(retry)));
client.on('ping', () => console.log('[HEARTBEAT]: Ping dikirim ke server...'));

client.connect();
```

### 3. Studi Kasus Nyata
Implementasi Real-Time Chat Engine yang mengelola isolasi *Room Channel*, pelacakan *Typing Indicator* berbasis *debouncing/timer*, *Read Receipts*, dan penanganan antrean pesan berformat (*Markdown/Rich Payload*).

```javascript
class RealtimeChatRoomManager {
  #socket;
  #currentUserId;
  #rooms = new Map(); // roomId -> Set<Message>
  #typingTrackers = new Map(); // `${roomId}:${userId}` -> TimeoutId

  constructor(socketClient, currentUserId) {
    this.#socket = socketClient;
    this.#currentUserId = currentUserId;
    this.#initSocketListeners();
  }

  #initSocketListeners() {
    this.#socket.on('send', ({ channel, payload }) => {
      this.#processIncomingPacket(channel, payload);
    });
  }

  joinRoom(roomId) {
    if (!this.#rooms.has(roomId)) {
      this.#rooms.set(roomId, []);
      console.log(`[ROOM]: User ${this.#currentUserId} bergabung ke room: ${roomId}`);
    }
  }

  sendMessage(roomId, content, metadata = {}) {
    if (!this.#rooms.has(roomId)) {
      throw new Error(`User belum bergabung di dalam room: ${roomId}`);
    }

    const payload = {
      messageId: `msg_${crypto.randomUUID()}`,
      senderId: this.#currentUserId,
      content,
      type: metadata.type ?? 'text', // 'text' | 'rich-embed' | 'system'
      status: 'SENT',
      timestamp: Date.now()
    };

    this.#socket.send(`room:${roomId}`, payload);
    return payload.messageId;
  }

  notifyTyping(roomId) {
    this.#socket.send(`room:${roomId}:typing`, {
      userId: this.#currentUserId,
      isTyping: true
    });
  }

  markAsRead(roomId, messageId) {
    this.#socket.send(`room:${roomId}:ack`, {
      readerId: this.#currentUserId,
      messageId,
      status: 'READ',
      readAt: Date.now()
    });
  }

  #processIncomingPacket(channel, payload) {
    if (channel.endsWith(':typing')) {
      this.#handleTypingPresence(channel, payload);
    } else if (channel.endsWith(':ack')) {
      this.#handleReadReceipt(payload);
    } else if (channel.startsWith('room:')) {
      const roomId = channel.replace('room:', '');
      this.#appendMessage(roomId, payload);
    }
  }

  #handleTypingPresence(channel, { userId, isTyping }) {
    if (userId === this.#currentUserId) return;
    const key = `${channel}:${userId}`;

    if (this.#typingTrackers.has(key)) {
      clearTimeout(this.#typingTrackers.get(key));
    }

    console.log(`[PRESENCE]: User ${userId} sedang mengetik...`);

    const timeout = setTimeout(() => {
      console.log(`[PRESENCE]: User ${userId} berhenti mengetik.`);
      this.#typingTrackers.delete(key);
    }, 2000);

    this.#typingTrackers.set(key, timeout);
  }

  #handleReadReceipt({ readerId, messageId, status }) {
    console.log(`[RECEIPT]: Pesan ${messageId} telah di-${status} oleh ${readerId}`);
  }

  #appendMessage(roomId, message) {
    const messages = this.#rooms.get(roomId);
    if (!messages) return;

    messages.push(message);
    console.log(`[MESSAGE RECEIVED] [Room: ${roomId}] ${message.senderId}: ${message.content}`);

    // Simulasi Optimasi Auto-Scroll Viewport:
    // Gunakan microtask agar penyesuaian scroll dijalankan segera setelah batch mutasi selesai
    queueMicrotask(() => {
      console.log(`[DOM UI]: Auto-scroll terpancing ke bawah untuk Message ID: ${message.messageId}`);
    });
  }
}

// Simulasi Pengujian Terintegrasi
const chat = new RealtimeChatRoomManager(client, 'user_alice_99');

// Jalankan skenario setelah soket terkoneksi
setTimeout(() => {
  chat.joinRoom('engineering-core');
  chat.notifyTyping('engineering-core');
  
  const msgId = chat.sendMessage('engineering-core', 'Deploy ke cluster staging selesai tanpa error.');
  
  setTimeout(() => {
    chat.markAsRead('engineering-core', msgId);
  }, 500);
}, 300);
```

### 4. Diagram Alur & Visualisasi Event Loop
Berikut adalah visualisasi alur eksekusi saat paket data WebSocket tiba, memicu *Heartbeat Timer* (Macrotask), *Ack Resolution* (Microtask), dan Rendering Scroll UI:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                              CALL STACK                                │
│ [resilientWebSocket.send()] ──> [notifyTyping()] ──> [appendMessage()] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Web APIs (Networking / Timers)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        WEB APIs & BACKGROUND THREAD                    │
│  - TCP Socket I/O (WebSocket packet received)                          │
│  - setTimeout/setInterval (Heartbeat Ping-Pong & Typing Debounce)      │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
    (Task Ready)    │                                │ (Microtask Queued)
                    ▼                                ▼
┌──────────────────────────────────────┐   ┌─────────────────────────────┐
│           MACROTASK QUEUE            │   │       MICROTASK QUEUE       │
│  1. WebSocket onmessage event        │   │  1. queueMicrotask()        │
│  2. Heartbeat setInterval callback   │   │     (Calculate Auto-Scroll) │
│  3. Typing Indicator Timeout expiry  │   │  2. Promise.resolve()       │
└───────────────────┬──────────────────┘   │     (Sync Read Status)      │
                    │                      └──────────────┬──────────────┘
                    │                                     │
                    ▼                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                             EVENT LOOP                                 │
│  Aturan: Eksekusi SELURUH Microtask Queue hingga KOSONG sebelum        │
│  mengambil Macrotask berikutnya atau masuk ke Render Phase (rAF / DOM) │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Best Practices & Tips
- ✅ **Gunakan Jitter pada Reconnect Backoff**: Selalu tambahkan variabel acak (*random noise*) pada interval penundaan rekoneksi untuk mencegah fenomena *Thundering Herd Problem* pada infrastruktur gateway.
- ✅ **Manfaatkan `Promise.withResolvers()`**: Gunakan fitur modern ini saat membutuhkan sinkronisasi status soket asynchronous dari callback internal tanpa *boilerplate nesting*.
- ✅ **Gunakan `queueMicrotask` untuk Agregasi Scroll**: Jalankan kalkulasi posisi scroll container (`scrollTop = scrollHeight`) pada antrean *Microtask* guna memastikan elemen pesan telah terdaftar pada tree DOM sebelum koordinat dibaca.
- ❌ **Hindari Hardcoded Fixed Retry Interval**: Jangan pernah mencoba melakukan rekoneksi berulang dengan `setInterval(reconnect, 1000)` tanpa batasan (*backoff cap*), karena dapat melumpuhkan performa baterai klien dan membebani load balancer.

---

## ✍️ Latihan Mandiri
1. Modifikasi kelas `ResilientWebSocketSimulator` pada **Code Editor di bawah** dengan menambahkan batas waktu tunggu (*Heartbeat Timeout*). Jika klien tidak menerima paket *Pong* balasan dari server dalam 3 detik setelah *Ping* dikirim, paksa soket untuk `DISCONNECT` dan picu prosedur rekoneksi otomatis.
2. Tambahkan fitur *Message Queue Buffer* pada **Code Editor di bawah**: Jika aplikasi memanggil `sendMessage()` saat soket berada pada status `DISCONNECTED` atau `CONNECTING`, tampung pesan tersebut ke dalam antrean *in-memory* dan kirimkan secara berurutan (*flush*) seketika setelah status soket berubah menjadi `OPEN`.

---

## 🔗 Referensi
- [MDN Web Docs: The WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [RFC 6455: The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
- [ECMAScript 2024 (ES15) Language Specification](https://tc39.es/ecma262/2024/)