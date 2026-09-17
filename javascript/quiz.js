// Quiz System for JavaScript Learning Path
class QuizManager {
    constructor() {
        this.currentModule = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizData = null;
    }

    async loadQuiz(moduleId) {
        try {
            const response = await fetch(`quizzes/module-${moduleId}.json`);
            if (!response.ok) {
                throw new Error(`Quiz for module ${moduleId} not found`);
            }
            this.quizData = await response.json();
            this.currentModule = moduleId;
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.score = 0;
            return this.quizData;
        } catch (error) {
            console.error('Failed to load quiz:', error);
            return null;
        }
    }

    getCurrentQuestion() {
        if (!this.quizData || !this.quizData.questions) {
            return null;
        }
        return this.quizData.questions[this.currentQuestionIndex];
    }

    selectAnswer(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
    }

    hasAnsweredCurrent() {
        return this.userAnswers[this.currentQuestionIndex] !== undefined;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.quizData.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }

    calculateScore() {
        this.score = 0;
        this.quizData.questions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                this.score++;
            }
        });
        return this.score;
    }

    getResults() {
        const total = this.quizData.questions.length;
        const percentage = Math.round((this.score / total) * 100);
        const passing = this.quizData.passingScore || 70;
        const passed = percentage >= passing;

        return {
            score: this.score,
            total: total,
            percentage: percentage,
            passingScore: passing,
            passed: passed,
            questions: this.quizData.questions.map((q, i) => ({
                question: q.question,
                options: q.options,
                correct: q.correct,
                userAnswer: this.userAnswers[i],
                explanation: q.explanation
            }))
        };
    }

    isModulePassed(moduleId) {
        const key = `quiz_passed_${moduleId}`;
        return localStorage.getItem(key) === 'true';
    }

    markModulePassed(moduleId, percentage) {
        const key = `quiz_passed_${moduleId}`;
        localStorage.setItem(key, 'true');
        localStorage.setItem(`quiz_score_${moduleId}`, percentage.toString());

        // Unlock next module if score >= 70%
        if (percentage >= 70) {
            const unlockedKey = `unlocked_modules`;
            const unlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[]');
            if (!unlocked.includes(moduleId + 1)) {
                unlocked.push(moduleId + 1);
                localStorage.setItem(unlockedKey, JSON.stringify(unlocked));
            }
        }
    }
}

// Initialize global quiz manager
window.quizManager = new QuizManager();