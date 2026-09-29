#!/usr/bin/env python3
"""
Expand learning path lesson markdown files to deep roadmap.sh style tutorials.
Uses local 9router LLM endpoint with SSE stream handling and concurrent task workers.
"""

import os
import glob
import re
import json
import asyncio
import aiohttp
import sys

BASE_DIR = '/data/data/com.termux/files/home/learning-path'
TRACKS = ['sql', 'cpp', 'php', 'kotlin', 'csharp', 'dart']
API_URL = 'http://127.0.0.1:20128/v1/chat/completions'

# Read API key from ~/.hermes/.env
API_KEY = ""
env_path = '/data/data/com.termux/files/home/.hermes/.env'
if os.path.exists(env_path):
    with open(env_path) as f:
        for line in f:
            if 'OPENAI_API_KEY' in line:
                API_KEY = line.strip().split('=', 1)[1]

SYSTEM_PROMPT = """Kamu adalah kurikuler & software engineer senior yang menyusun modul pembelajaran interaktif berstandar roadmap.sh dalam Bahasa Indonesia teknis yang lugas, padat, dan mendalam.
Tugasmu adalah menulis materi tutorial mendalam untuk topik pelajaran yang diberikan.

Pedoman Konten:
1. Materi harus komprehensif, tidak dangkal, dengan penjelasan arsitektur, cara kerja di balik layar (memory, runtime, byte-code/compiler/execution engine).
2. Tampilkan contoh kode praktis yang modern, idiomatik, dan runnable.
3. Berikan bagian "Common Pitfalls & Best Practices" yang nyata dihadapi developer di industri.
4. Gunakan format Markdown yang rapi tanpa mengubah atau menghilangkan struktur bagian utama.
5. JANGAN mengulang frontmatter ID/Duration. Cukup fokus pada isi tutorial.

Struktur output Markdown yang diharapkan:
### 1. Konsep & Arsitektur Mendalam
(Jelaskan konsep, alasan mengapa fitur/konsep ini ada, dan cara kerjanya di runtime/compiler)

### 2. Implementasi & Contoh Kasus Nyata
```<lang>
// Kode implementasi yang jelas, idiomatik, dan disertai komentar penjelas
```
(Penjelasan baris kode penting dan variasi penggunaannya)

### 3. Cara Kerja di Balik Layar (Under the Hood)
- **Eksekusi & Runtime**: ...
- **Alokasi Memori / Resource**: ...
- **Trade-offs**: ...

### 4. Best Practices & Common Pitfalls
- **Do's**: ...
- **Don'ts**: ...
- **Edge Cases**: ...

### 5. Tantangan Eksplorasi Mandiri
1. ...
2. ...
"""

async def expand_lesson(session, track, filepath, sem, dry_run=False):
    async with sem:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Parse title & metadata
        lines = content.split('\n')
        title = lines[0].lstrip('#').strip() if lines else os.path.basename(filepath)
        meta_line = lines[2] if len(lines) > 2 and '**ID**' in lines[2] else ""
        
        prompt = f"Topik Pelajaran: {title}\nBahasa Pemrograman / Track: {track.upper()}\nFile: {os.path.basename(filepath)}"
        
        payload = {
            "model": "test-model",
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.3,
            "stream": True
        }
        
        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }
        
        if dry_run:
            print(f"[DRY-RUN] Would process: {track}/{os.path.basename(filepath)} - {title}")
            return True

        for attempt in range(3):
            try:
                full_text = []
                async with session.post(API_URL, json=payload, headers=headers, timeout=120) as resp:
                    if resp.status != 200:
                        err_text = await resp.text()
                        print(f"[{track}/{os.path.basename(filepath)}] HTTP {resp.status}: {err_text[:100]}")
                        await asyncio.sleep(2)
                        continue
                        
                    async for line in resp.content:
                        decoded = line.decode('utf-8').strip()
                        if decoded.startswith('data: '):
                            data_str = decoded[6:]
                            if data_str == '[DONE]':
                                break
                            try:
                                chunk = json.loads(data_str)
                                delta = chunk.get('choices', [{}])[0].get('delta', {})
                                if 'content' in delta and delta['content']:
                                    full_text.append(delta['content'])
                            except:
                                pass

                generated_body = "".join(full_text).strip()
                if len(generated_body) < 200:
                    print(f"[{track}/{os.path.basename(filepath)}] Generated too short ({len(generated_body)} chars), retrying...")
                    await asyncio.sleep(1)
                    continue

                # Reassemble lesson markdown
                new_content = f"# {title}\n\n{meta_line}\n\n## 🎯 Tujuan Pembelajaran\n- Menguasai pemahaman fundamental dan praktis mengenai **{title}**.\n- Memahami arsitektur internal, alur eksekusi, serta optimasi performa pada ekosistem {track.upper()}.\n- Mampu menghindari jebakan (common pitfalls) dan menerapkan standar penulisan kode modern industri.\n\n## 📖 Materi Lengkap\n\n{generated_body}\n"
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                    
                print(f"✓ [{track}/{os.path.basename(filepath)}] Successfully updated ({len(new_content)} bytes)")
                return True
            except Exception as e:
                print(f"[{track}/{os.path.basename(filepath)}] Attempt {attempt+1} error: {e}")
                await asyncio.sleep(2)

        return False

async def main():
    target_track = None
    dry_run = False
    limit_files = None
    
    for arg in sys.argv[1:]:
        if arg == '--dry-run':
            dry_run = True
        elif arg.startswith('--limit='):
            limit_files = int(arg.split('=')[1])
        elif arg in TRACKS:
            target_track = arg
                
    tracks_to_process = [target_track] if target_track else TRACKS
    
    tasks = []
    sem = asyncio.Semaphore(4)
    
    connector = aiohttp.TCPConnector(limit=10)
    async with aiohttp.ClientSession(connector=connector) as session:
        for t in tracks_to_process:
            files = sorted(glob.glob(f"{BASE_DIR}/{t}/lessons/*.md"))
            if limit_files:
                files = files[:limit_files]
            for f in files:
                tasks.append(expand_lesson(session, t, f, sem, dry_run=dry_run))
                
        print(f"Queued {len(tasks)} lesson files across tracks: {', '.join(tracks_to_process)}...")
        results = await asyncio.gather(*tasks)
        success_count = sum(1 for r in results if r)
        print(f"\nExecution finished! Success: {success_count}/{len(tasks)}")

if __name__ == '__main__':
    asyncio.run(main())
