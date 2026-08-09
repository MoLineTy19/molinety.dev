export type Project = {
    slug: string;
    num: string;
    title: string;
    description: string;
    highlights: string[];
    stack: string[];
    /** цвет абстрактного градиента-превью */
    gradient: "orange" | "blue" | "green" | "purple";
    /** ссылка на исходники (опционально) */
    codeUrl?: string;
    /** ссылка на живой сайт (опционально) */
    liveUrl?: string;
    year?: number;
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
        gradient: "orange",
        codeUrl: "https://github.com/MoLineTy19/FunPay-Core",
        year: 2025,
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
        gradient: "green",
        codeUrl: "https://github.com/MoLineTy19/Boosty-Dumper",
        year: 2025,
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
        gradient: "blue",
        codeUrl: "https://github.com/MoLineTy19/Youtube-Stats-to-GS",
        year: 2025,
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
        gradient: "purple",
        codeUrl: "https://github.com/MoLineTy19",
        year: 2025,
    },
];
