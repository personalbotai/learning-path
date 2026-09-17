# TypeScript Learning Path Quizzes - Generated Data

This directory contains quiz data for each module of the TypeScript Learning Path.
All quizzes are in Indonesian and align with the lesson content.

## Format

Each quiz JSON file contains:
- `moduleId`: Module number
- `moduleTitle`: Module title
- `questions`: Array of question objects with:
  - `id`: Unique question ID
  - `question`: Question text (Indonesian)
  - `options`: Array of 4 choices
  - `correct`: Index of correct answer (0-3)
  - `explanation`: Explanation of correct answer
  - `type`: "multiple-choice" or "code-evaluation"

## Modules

1. Dasar-Dasar TypeScript (10 questions)
2. Tipe Dasar TypeScript (10 questions)
3. Advanced Types (15 questions)
4. Interfaces dan Type Aliases (12 questions)
5. Functions TypeScript (12 questions)
6. Generics (15 questions)
7. Classes TypeScript (12 questions)
8. Modules dan Namespaces (15 questions)
9. Configuration Tooling (15 questions)
10. Integration dengan JavaScript (10 questions)
11. Advanced Utility Types (15 questions)
12. Real-World Projects (20 questions)

**Total: 171 questions**

## Usage

Quizzes are loaded dynamically by `quiz.js` based on the current module.
Each lesson page includes a "Quiz" button that loads the corresponding quiz.
