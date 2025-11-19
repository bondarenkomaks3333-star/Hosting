// DASHBOARD FUNCTIONALITY
function initDashboard() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <!-- СТАТИСТИКА -->
        <div class="dashboard-grid">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-server"></i></div>
                <div class="stat-value">95%</div>
                <div class="stat-label">Загрузка CPU</div>
                <div class="progress-bar"><div class="progress-fill" style="width: 95%"></div></div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-memory"></i></div>
                <div class="stat-value">78%</div>
                <div class="stat-label">Использование RAM</div>
                <div class="progress-bar"><div class="progress-fill" style="width: 78%"></div></div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-hdd"></i></div>
                <div class="stat-value">62%</div>
                <div class="stat-label">Дисковое пространство</div>
                <div class="progress-bar"><div class="progress-fill" style="width: 62%"></div></div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-network-wired"></i></div>
                <div class="stat-value">2.4 GB</div>
                <div class="stat-label">Трафик за сегодня</div>
                <div class="progress-bar"><div class="progress-fill" style="width: 45%"></div></div>
            </div>
        </div>

        <!-- БЫСТРЫЕ ДЕЙСТВИЯ -->
        <div class="quick-actions">
            <div class="action-btn" onclick="quickAction('domain')">
                <div class="action-icon"><i class="fas fa-plus"></i></div>
                <div>Добавить домен</div>
            </div>
            <div class="action-btn" onclick="quickAction('database')">
                <div class="action-icon"><i class="fas fa-database"></i></div>
                <div>Создать БД</div>
            </div>
            <div class="action-btn" onclick="quickAction('security')">
                <div class="action-icon"><i class="fas fa-shield-alt"></i></div>
                <div>Настройки безопасности</div>
            </div>
            <div class="action-btn" onclick="quickAction('stats')">
                <div class="action-icon"><i class="fas fa-chart-line"></i></div>
                <div>Статистика</div>
            </div>
        </div>

        <!-- ОСНОВНЫЕ ФУНКЦИИ -->
        <div class="features-section">
            <h2 style="margin-bottom: 20px; color: var(--primary);">
                <i class="fas fa-star"></i> Основные возможности
            </h2>
            <div class="features-grid" id="features-grid"></div>
        </div>
    `;

    // Загружаем функции
    loadFeatures();
    initQuickActions();
}

function initQuickActions() {
    // Добавляем стили для быстрых действий
    const style = document.createElement('style');
    style.textContent = `
        .quick-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }
        
        .action-btn {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: slideIn 0.5s ease;
        }
        
        .action-btn:hover {
            background: var(--surface-light);
            border-color: var(--primary);
            transform: translateY(-2px);
        }
        
        .action-icon {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .features-section {
            margin: 40px 0;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
        }
        
        .feature-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 30px;
            transition: all 0.3s ease;
            animation: slideIn 0.8s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        
        .feature-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .feature-icon {
            width: 50px;
            height: 50px;
            background: var(--gradient);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        
        .feature-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--text);
        }
        
        .feature-list {
            list-style: none;
            margin-top: 15px;
        }
        
        .feature-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-light);
        }
        
        .feature-list li::before {
            content: '✓';
            color: var(--success);
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}

function quickAction(action) {
    const actions = {
        domain: '🌐 Добавление нового домена',
        database: '🗄️ Создание базы данных',
        security: '🔒 Настройки безопасности',
        stats: '📊 Просмотр статистики'
    };
    alert(`${actions[action]}\n\nЭта функция активна в полной версии панели управления`);
}
