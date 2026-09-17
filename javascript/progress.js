// Progress Tracking System
class ProgressManager {
    constructor() {
        this.STORAGE_KEY = 'js-learning-path-progress';
        this.achievements = this.loadAchievements();
    }

    loadAchievements() {
        return {
            first_lesson: { title: "First Step", description: "Complete your first lesson", icon: "fa-shoe-prints" },
            quiz_master: { title: "Quiz Master", description: "Pass 5 quizzes with 100%", icon: "fa-brain" },
            speed_runner: { title: "Speed Runner", description: "Complete a module in under 1 hour", icon: "fa-bolt" },
            completionist: { title: "Completionist", description: "Finish all lessons in a module", icon: "fa-check-double" },
            code_runner: { title: "Code Runner", description: "Execute 50 code examples", icon: "fa-code" }
        };
    }

    getProgress() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : {
            completedLessons: [],
            lessonTimes: {},
            codeExecutions: 0,
            achievements: [],
            startedAt: new Date().toISOString()
        };
    }

    saveProgress(progress) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    }

    markLessonComplete(moduleId, lessonId) {
        const progress = this.getProgress();
        const lessonKey = `${moduleId}-${lessonId}`;
        
        if (!progress.completedLessons.includes(lessonKey)) {
            progress.completedLessons.push(lessonKey);
            
            // Track time for speedrunner achievement
            if (!progress.lessonTimes[lessonKey]) {
                progress.lessonTimes[lessonKey] = Date.now();
            }
            
            this.saveProgress(progress);
            
            // Check achievements
            this.checkAchievements(progress);
            
            return true;
        }
        return false;
    }

    isLessonComplete(moduleId, lessonId) {
        const progress = this.getProgress();
        const lessonKey = `${moduleId}-${lessonId}`;
        return progress.completedLessons.includes(lessonKey);
    }

    incrementCodeExecutions() {
        const progress = this.getProgress();
        progress.codeExecutions++;
        this.saveProgress(progress);
        this.checkAchievements(progress);
    }

    getModuleProgress(moduleId) {
        const progress = this.getProgress();
        const moduleLessons = MODULES[moduleId - 1].lessons;
        const total = moduleLessons.length;
        const completed = moduleLessons.filter(l => 
            progress.completedLessons.includes(`${moduleId}-${l.id}`)
        ).length;
        return Math.round((completed / total) * 100);
    }

    getTotalProgress() {
        const progress = this.getProgress();
        const totalLessons = MODULES.reduce((sum, mod) => sum + mod.lessons.length, 0);
        const completed = progress.completedLessons.length;
        return Math.round((completed / totalLessons) * 100);
    }

    checkAchievements(progress) {
        const newAchievements = [];
        
        // First lesson
        if (progress.completedLessons.length >= 1 && !progress.achievements.includes('first_lesson')) {
            progress.achievements.push('first_lesson');
            newAchievements.push(this.achievements.first_lesson);
        }
        
        // Code runner (50 executions)
        if (progress.codeExecutions >= 50 && !progress.achievements.includes('code_runner')) {
            progress.achievements.push('code_runner');
            newAchievements.push(this.achievements.code_runner);
        }
        
        // Completionist (all lessons in a module)
        for (let i = 1; i <= MODULES.length; i++) {
            const moduleLessons = MODULES[i - 1].lessons;
            const allComplete = moduleLessons.every(l => 
                progress.completedLessons.includes(`${i}-${l.id}`)
            );
            if (allComplete && !progress.achievements.includes(`completionist_${i}`)) {
                progress.achievements.push(`completionist_${i}`);
                newAchievements.push(this.achievements.completionist);
            }
        }
        
        this.saveProgress(progress);
        return newAchievements;
    }

    unlockAchievement(achievementKey) {
        const progress = this.getProgress();
        if (!progress.achievements.includes(achievementKey)) {
            progress.achievements.push(achievementKey);
            this.saveProgress(progress);
            return this.achievements[achievementKey] || { title: achievementKey, description: "Achievement unlocked!", icon: "fa-trophy" };
        }
        return null;
    }

    resetProgress() {
        if (confirm("Apakah Anda yakin ingin mereset semua progress? Tindakan ini tidak dapat dibatalkan.")) {
            localStorage.removeItem(this.STORAGE_KEY);
            location.reload();
        }
    }

    renderProgressBar() {
        const total = this.getTotalProgress();
        document.getElementById('total-progress').textContent = `${total}%`;
        
        // Update module progress in sidebar
        document.querySelectorAll('.module-item').forEach(item => {
            const moduleId = parseInt(item.dataset.moduleId);
            const progress = this.getModuleProgress(moduleId);
            const bar = item.querySelector('.progress-bar');
            if (bar) {
                bar.style.width = `${progress}%`;
                bar.className = `progress-bar h-1 rounded ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`;
            }
        });
    }
}

// Initialize global progress manager
window.progressManager = new ProgressManager();