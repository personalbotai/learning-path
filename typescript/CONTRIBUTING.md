# Contributing to JavaScript Learning Path

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🎯 How to Contribute

### 1. Content Creation (Most Needed!)

We need **lesson content** for all modules (currently only Module 1 has complete lessons). Each lesson should:

- Be written in **Bahasa Indonesia** ( formal but accessible)
- Include clear explanations with examples
- Have at least 3-5 code examples
- Include an interactive "Try It Yourself" section
- Follow the existing HTML template structure
- Be placed in `lessons/` directory with slug filename

**Lesson Template Structure:**
```html
<h1>Lesson Title</h1>

<div class="bg-gray-900 p-6 rounded-lg mb-6">
    <h2 class="text-2xl font-semibold mb-4 text-blue-300">Section Title</h2>
    <p class="mb-4 text-gray-300">Explanation text...</p>
    <pre><code class="language-javascript">// Code examples</code></pre>
</div>
```

### 2. Quiz Questions

Each module needs 10 quiz questions in JSON format (`quizzes/module-X.json`). See `quizzes/module-1.json` for template.

**Quiz Question Structure:**
```json
{
  "id": 1,
  "question": "Question text?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "explanation": "Explanation why the answer is correct"
}
```

### 3. Bug Reports & Feature Requests

- Use GitHub Issues
- Provide steps to reproduce bugs
- Describe features with clear use cases

### 4. Code Improvements

- Follow existing code style (ES6+)
- Test in browser before submitting PR
- Keep dependencies minimal (no npm packages, use CDN)

## 🚀 Development Workflow

1. **Fork this repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/javascript-learning-path.git
   cd javascript-learning-path
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/new-lesson-module-2
   ```
4. **Make your changes**
   - Add lesson HTML file to `lessons/`
   - Update `modules.js` if adding new lessons
   - Test locally with a web server
   ```bash
   python3 -m http.server 8000
   # Open http://localhost:8000
   ```
5. **Commit with clear message**
   ```bash
   git add .
   git commit -m "Add: Lesson 2.1 - Array Basics"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/new-lesson-module-2
   ```
7. **Open Pull Request** to `main` branch
   - Describe changes
   - Link related issues
   - Screenshots if UI changes

## 📝 Content Guidelines

- **Language**: Formal Bahasa Indonesia (like technical documentation)
- **Tone**: Educational, encouraging, clear
- **Examples**: Real-world, practical, not too trivial
- **Difficulty**: Progressive from basics to advanced
- **Avoid**: Copy-pasting from other sources (plagiarism)
- **Cite**: If referencing external material, provide attribution

## ✅ Checklist Before Submitting PR

- [ ] Lesson HTML file is valid (no broken tags)
- [ ] Code examples are correct and tested
- [ ] No console errors when loading lesson
- [ ] Navigation links work (if internal linking)
- [ ] Quiz JSON is valid (if adding quiz)
- [ ] `modules.js` updated with new lesson entry
- [ ] README.md reflects changes (if adding significant content)
- [ ] Tested on mobile viewport (responsive)
- [ ] No broken images or assets

## 🏷️ Git Commit Convention

- `Add: <description>` - New feature/content
- `Fix: <description>` - Bug fix
- `Update: <description>` - Content update
- `Remove: <description>` - Delete/cleanup
- `Docs: <description>` - Documentation only

Example: `Add: Lesson 6.5 - Fetch API with async/await`

## 📞 Questions?

Open an issue or contact the maintainer.

---

**Happy Contributing!** 🚀

*"Ordo ex Chao" - Archon*