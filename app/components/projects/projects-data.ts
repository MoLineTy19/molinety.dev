/** Тип проекта для каталога /works */
export type ProjectCategory = "backend" | "desktop" | "automation" | "frontend" | "fullstack";

/** Человекочитаемые названия категорий (фильтры каталога, бейдж карточки) */
export const categoryLabels: Record<ProjectCategory, string> = {
    backend: "Бэкенд",
    desktop: "Десктоп",
    automation: "Автоматизация",
    frontend: "Фронтенд",
    fullstack: "Фулстек",
};

export type Project = {
    slug: string;
    num: string;
    title: string;
    description: string;
    highlights: string[];
    stack: string[];
    /** тип проекта для фильтра на странице /works */
    category: ProjectCategory;
    /** цвет абстрактного градиента-превью */
    gradient: "orange" | "blue" | "green" | "purple";
    /** ссылка на исходники (опционально) */
    codeUrl?: string;
    /** ссылка на живой сайт или демо (опционально) */
    liveUrl?: string;
};

/**
 * Каталог проектов.
 */
export const projects: Project[] = [
    {
        slug: "funpay-core",
        num: "01",
        title: "FunPay-Core",
        description:
            "Бэкенд-движок на Go для автоматизации работы продавцов на FunPay. Stateless-мост: берёт на себя всю работу с маркетплейсом и отдаёт её через локальный REST API.",
        highlights: [
            "REST API: заказы, офферы, чаты, баланс",
            "Лонг-поллинг событий с буфером в памяти",
            "Human-tempo поллинг с джиттером против детекта",
            "Docker multi-stage, hot-reload сессии без рестарта",
        ],
        stack: ["Go", "net/http", "Docker", "REST API"],
        category: "backend",
        gradient: "orange",
        codeUrl: "https://github.com/MoLineTy19/FunPay-Core",
    },
    {
        slug: "boosty-dumper",
        num: "02",
        title: "Boosty-Dumper",
        description:
            "Десктопное приложение на Python для скачивания медиа из подписок Boosty. GUI и CLI в одной сборке, параллельная загрузка и устойчивость к ошибкам сети.",
        highlights: [
            "GUI на PySide6 + CLI в одной сборке .exe",
            "Параллельная загрузка 1-32 потоков",
            "Авторетраи на 5xx/таймаутах, пауза на 429",
            "Пропуск уже скачанных файлов, пагинация",
        ],
        stack: ["Python", "PySide6", "PyInstaller", "ThreadPoolExecutor"],
        category: "desktop",
        gradient: "green",
        codeUrl: "https://github.com/MoLineTy19/Boosty-Dumper",
    },
    {
        slug: "ytstats",
        num: "03",
        title: "Youtube-Stats-to-GS",
        description:
            "Сборщик статистики YouTube-каналов с авто-выгрузкой в Google Sheets. Из 100-строчного скрипта перерос в многослойную архитектуру с типизацией и устойчивостью к ошибкам API.",
        highlights: [
            "YouTube Data API v3 → Google Sheets",
            "Полная пагинация, без лимита в 50 видео",
            "Ретраи с экспоненциальным backoff (429, 5xx)",
            "Repository/Factory паттерны, mypy + ruff",
        ],
        stack: ["Python", "googleapiclient", "gspread", "mypy"],
        category: "automation",
        gradient: "blue",
        codeUrl: "https://github.com/MoLineTy19/Youtube-Stats-to-GS",
    },
    {
        slug: "portfolio",
        num: "04",
        title: "Этот сайт",
        description:
            "Персональное портфолио. Next.js, TypeScript, Tailwind v4, анимации на motion. Сделан с нуля, включая дизайн-систему и адаптив.",
        highlights: [
            "Next.js 16 + React 19 + TypeScript",
            "Tailwind v4 дизайн-токены, тёмная тема",
            "Анимации появления на motion",
            "Доступность: focus-visible, reduced-motion",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind", "motion"],
        category: "frontend",
        gradient: "purple",
        codeUrl: "https://github.com/MoLineTy19",
    },
    {
        slug: "moly",
        num: "05",
        title: "Moly",
        description:
            "Локальный менеджер паролей с шифрованием на стороне клиента: мастер-пароль не покидает браузер, сервер хранит только шифртекст. Next.js, сборка в Electron.",
        highlights: [
            "AES-256-GCM, ключ выводится из мастер-пароля через PBKDF2",
            "Теги с drag-and-drop, избранное, поиск с подсветкой",
            "Генератор паролей, импорт/экспорт JSON и CSV",
            "Автоблокировка по таймеру и при уходе со вкладки",
        ],
        stack: ["Next.js", "TypeScript", "Zustand", "Electron"],
        category: "desktop",
        gradient: "blue",
        codeUrl: "https://github.com/MoLineTy19/moly",
    },
    {
        slug: "noir-store",
        num: "06",
        title: "NOIR Store",
        description:
            "Демо-магазин мерча в Telegram Mini App: каталог, корзина, оформление и статусы заказов. Бэкенд на FastAPI валидирует заказы, уведомления уходят админу и клиенту через бота.",
        highlights: [
            "Состав и сумма заказа пересчитываются на сервере",
            "Подпись initData проверяется через HMAC-SHA256",
            "Уведомления админу и клиенту через бота на aiogram",
            "Нативные MainButton, BackButton и haptic-фидбек",
        ],
        stack: ["FastAPI", "aiogram", "React", "TypeScript"],
        category: "fullstack",
        gradient: "purple",
        codeUrl: "https://github.com/MoLineTy19/NOIR-Store",
        liveUrl: "https://t.me/noir_store_demo_bot",
    },
    {
        slug: "nurafast",
        num: "07",
        title: "NuraFast",
        description:
            "Telegram-бот, который разбирает бланки анализов из PDF, объясняет результаты обычным языком и ведёт план здоровья: питание, БАДы, сон. Раз в неделю сам спрашивает самочувствие и показывает динамику.",
        highlights: [
            "Разбор PDF-бланков (Инвитро) через pdfplumber",
            "LLM-слой: смена провайдера одной переменной в .env",
            "FastAPI-админка: пользователи, подписки, конверсия",
            "Оплата через webhook с проверкой HMAC-SHA256",
        ],
        stack: ["Python", "aiogram", "FastAPI", "PostgreSQL"],
        category: "fullstack",
        gradient: "green",
        liveUrl: "https://t.me/nurafast_bot",
    },
];
