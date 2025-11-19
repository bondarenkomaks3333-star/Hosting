// FEATURES DATA AND RENDERING
function loadFeatures() {
    const features = [
        {
            icon: 'fas fa-tachometer-alt',
            title: '🎯 Панель управления',
            description: 'Интуитивный интерфейс для управления хостингом',
            features: ['Визуальный редактор', 'Управление пользователями', 'Мониторинг в реальном времени']
        },
        {
            icon: 'fas fa-sync-alt',
            title: '🔄 Автоматическое развертывание',
            description: 'Поддержка Git, FTP, Docker',
            features: ['Git интеграция', 'Docker контейнеры', 'CI/CD пайплайны']
        },
        {
            icon: 'fas fa-globe',
            title: '🌐 Управление доменами',
            description: 'DNS management, SSL сертификаты',
            features: ['DNS management', 'Бесплатные SSL', 'Поддомены']
        },
        {
            icon: 'fas fa-chart-bar',
            title: '📊 Мониторинг',
            description: 'Статистика использования ресурсов',
            features: ['Метрики производительности', 'Анализ трафика', 'Uptime мониторинг']
        },
        {
            icon: 'fas fa-database',
            title: '🗄️ Базы данных',
            description: 'MySQL, PostgreSQL, MongoDB',
            features: ['MySQL/MariaDB', 'PostgreSQL', 'MongoDB', 'Redis']
        },
        {
            icon: 'fas fa-shield-alt',
            title: '🔒 Безопасность',
            description: 'Firewall, анти-DDoS, резервное копирование',
            features: ['Firewall', 'Анти-DDoS', 'Авто-бэкапы', 'SSL/TLS']
        },
        {
            icon: 'fas fa-expand-arrows-alt',
            title: '📈 Масштабирование',
            description: 'Автоматическое масштабирование ресурсов',
            features: ['Auto-scaling', 'Load balancing', 'Кластерные решения']
        },
        {
            icon: 'fas fa-code',
            title: '🔌 API',
            description: 'REST API для интеграции',
            features: ['REST API', 'Webhooks', 'Документация', 'SDK']
        }
    ];

    const featuresGrid = document.getElementById('features-grid');
    
    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <div class="feature-header">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <div class="feature-title">${feature.title}</div>
            </div>
            <p>${feature.description}</p>
            <ul class="feature-list">
                ${feature.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
        featuresGrid.appendChild(featureCard);
    });
}
