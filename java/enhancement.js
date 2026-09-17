// Modern UI Enhancements
(function() {
    'use strict';
    
    // Theme Management
    function initTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        updateThemeIcon(theme);
    }
    
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        const icon = document.getElementById('themeToggleIcon');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    // Mobile Menu
    function initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
            
            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
        }
    }
    
    // Progress Tracking Enhancement
    function updateProgressBars() {
        const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
        const completed = progress.completedLessons || [];
        
        // Update all progress bars
        document.querySelectorAll('[data-progress]').forEach(el => {
            const moduleIdx = parseInt(el.dataset.progress);
            const total = parseInt(el.dataset.total || '0');
            const completedCount = completed.filter(l => l.startsWith(moduleIdx + '-')).length;
            const percentage = total > 0 ? (completedCount / total) * 100 : 0;
            
            const fill = el.querySelector('.progress-fill-modern');
            if (fill) {
                fill.style.width = percentage + '%';
            }
        });
    }
    
    // Smooth Scroll
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Initialize all enhancements
    function init() {
        initTheme();
        initMobileMenu();
        updateProgressBars();
        initSmoothScroll();
        
        // Setup theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Add intersection observer for animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            });
            
            document.querySelectorAll('.card-hover').forEach(el => observer.observe(el));
        }
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
