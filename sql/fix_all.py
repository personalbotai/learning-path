import re
import json

def read_json_less_mods(filepath, lang):
    with open(filepath) as f: text = f.read()
    
    if lang == 'javascript':
        # we parse markdown
        modules = []
        lessons = []
        mod_id = 0
        l_cnt = 1
        for line in text.splitlines():
            mod_match = re.search(r'## Modul (\d+):\s*(.*)', line, re.IGNORECASE) or re.search(r'^### Modul (\d+):\s*(.*)', line, re.IGNORECASE)
            if mod_match:
                mod_id += 1 
                title = mod_match.group(2).strip()
                modules.append({
                    "id": mod_id,
                    "title": f"Modul {mod_id}: {title}",
                    "description": "JavaScript modern ES2024+",
                    "icon": "fas fa-code",
                    "lessons": []
                })
                continue
            les_match = re.search(r'### \d+\.\d+\s+(.*)', line) or re.search(r'\*\*\d+\.\d+\.?\s*(.*)\*\*', line) or re.search(r'### Pelajaran \d+\.\d+\s+[—\-]\s+(.*)', line)
            if les_match and "Modul" not in line and mod_id > 0:
                raw_title = les_match.group(1).replace('*', '').strip()
                title = f"{l_cnt}. {raw_title}"
                # In JS it's nested!
                modules[-1]["lessons"].append({
                    "id": l_cnt, "title": title, "slug": f"js-{l_cnt}", "duration": "15 min", "color": "blue",
                    "content": f"# {title}\n\nMateri detail JavaScript.",
                    "code": f"// JS Snippet\nconsole.log('{title}');",
                    "quiz": {"question": "Konsep JS?", "options": ["A","B","C","D"], "answer": 0, "explanation": "Penjelasan JS"}
                })
                l_cnt += 1
        return modules
    elif lang == 'go':
        # parse markdown to standard flat structure
        modules = []
        lessons = []
        mod_id = 0
        l_cnt = 1
        for line in text.splitlines():
            mod_match = re.search(r'## MODUL (\d+):\s*(.*)', line, re.IGNORECASE) or re.search(r'^### Modul (\d+):\s*(.*)', line, re.IGNORECASE)
            if mod_match:
                mod_id += 1 
                title = mod_match.group(2).strip()
                modules.append({
                    "id": mod_id,
                    "title": f"Modul {mod_id}: {title}",
                    "desc": "Go modern",
                    "icon": "fas fa-code"
                })
                continue
            les_match = re.search(r'### Pelajaran \d+\.\d+\s+[—\-]\s+(.*)', line) or re.search(r'### (.*)', line)
            if les_match and "Modul" not in line and mod_id > 0:
                raw_title = les_match.group(1).replace('*', '').strip()
                title = f"{l_cnt}. {raw_title}"
                lessons.append({
                    "id": l_cnt, "slug": f"go-{l_cnt}", "title": title,
                    "module": modules[-1]["title"], "moduleId": mod_id, "duration": "15 m", "level": "Semua",
                    "content": f"# {title}\n\nMateri Go.",
                    "code": f"// Go\npackage main\nimport \"fmt\"\nfunc main() {{ fmt.Println(\"{title}\") }}",
                    "quiz": {"question": "Pertanyaan Go", "options": ["A","B","C","D"], "answer": 0, "explanation": "Penjelasan"}
                })
                l_cnt += 1
        return modules, lessons


# For JS, write to modules.js
js_mods = read_json_less_mods('/data/data/com.termux/files/home/js-learning-path-outline.md', 'javascript')
if len(js_mods) > 0:
    s = "const MODULES = " + json.dumps(js_mods, indent=2) + ";\n\nwindow.MODULES = MODULES;\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = MODULES;\n}"
    with open('/data/data/com.termux/files/home/javascript-learning-path/modules.js', 'w') as f:
        f.write(s)
    print("JS patched via modules.js")

# For Go, patch app.js
go_mods, go_less = read_json_less_mods('/data/data/com.termux/files/home/go-learning-path/outline-kurikulum.md', 'go')
if len(go_less) > 0:
    if len(go_less) > 60: go_less = go_less[:60]
    with open('/data/data/com.termux/files/home/go-learning-path/app.js', 'r') as f:
        code = f.read()
    
    # modules array
    code = re.sub(r'const MODULES = \[.*?\];', 'const MODULES = ' + json.dumps(go_mods, indent=2) + ';', code, flags=re.DOTALL)
    
    # lessons array
    start = code.find("const lessons = [")
    if start != -1:
        # find the second "];" in the file
        first_bracket = code.find("];")
        second_bracket = code.find("];", first_bracket + 2)
        if second_bracket != -1 and second_bracket > start:
            code = code[:start] + "const lessons = " + json.dumps(go_less, indent=2) + code[second_bracket+2:]
            with open('/data/data/com.termux/files/home/go-learning-path/app.js', 'w') as f:
                f.write(code)
            print("Go patched via app.js")

