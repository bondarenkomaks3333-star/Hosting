// ANIMATIONS AND INTERACTIONS
function initAnimations() {
    // Анимация прогресс-баров
    animateProgressBars();
    
    // Обновление статистики каждые 5 секунд
    setInterval(updateStats, 5000);
    
    // Добавляем анимации при наведении
    setTimeout(() => {
        const cards = document.querySelectorAll('.stat-card, .feature-card, .action-btn');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }, 1000);
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

function updateStats() {
    const stats = document.querySelectorAll('.stat-value');
    if (stats.length > 0) {
        stats.forEach(stat => {
            const currentValue = parseInt(stat.textContent);
            const newValue = Math.min(100, Math.max(0, currentValue + (Math.random() * 10 - 5)));
            stat.textContent = Math.round(newValue) + (stat.textContent.includes('%') ? '%' : ' GB');
            
            // Обновляем прогресс-бар
            const progressBar = stat.parentElement.querySelector('.progress-fill');
            if (progressBar) {
                progressBar.style.width = newValue + '%';
            }
        });
    }
}
