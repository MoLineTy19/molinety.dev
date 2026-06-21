export type Project = {
    /** Уникальный slug — он же имя папки в public/showcase/<slug>/ */
    slug: string;
    /** Отображаемое название */
    title: string;
    /** Категория для фильтрации/бейджа на карточке */
    category: "Лендинг" | "Сайт" | "Telegram-бот" | "AI-агент";
    /** Короткое описание для карточки */
    description: string;
    /** Ключевая проблема заказчика — 1 строка */
    problem: string;
    /** Что сделал — 1-2 строки */
    solution: string;
    /** Цифры результата. Бери только ЧЕСТНЫЕ метрики (Lighthouse/скорость — твои реальные).
     * Ложные цифры убивают доверие быстрее, чем их отсутствие. */
    metrics?: { label: string; value: string }[];
    /** Стек / технологии */
    stack: string[];
    /** Путь к скриншоту-превью относительно public/ (например /showcase/<slug>/preview.png) */
    preview: string;
    /** Необязательно: ссылка на исходники (GitHub) */
    source?: string;
    /** Необязательно: год создания */
    year?: number;
};

/**
 * Каталог проектов. Каждый объект = один проект.
 * Чтобы добавить новый проект:
 *   1. Собери проект в статику и положи в public/showcase/<slug>/
 *   2. Положи туда же preview.png (скриншот для карточки)
 *   3. Допиши сюда новый объект
 * После этого проект автоматически появится на главной и на /projects.
 */
export const projects: Project[] = [
    {
        slug: "specialty-coffee",
        title: "Зерно — specialty-кофейня",
        category: "Лендинг",
        description: "Лендинг московской specialty-кофейни: свежая обжарка, зёрна с 12 ферм.",
        problem: "Привлечь гостей и донести «specialty» ценность без тяжёлого многостраничника.",
        solution: "Тёплый одностраничник с фокусом на продукт: обжарка, фермы, меню, контакты.",
        metrics: [
            { label: "Lighthouse", value: "96" },
            { label: "Загрузка", value: "1.2с" },
            { label: "Адаптив", value: "100%" },
        ],
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/specialty-coffee/preview.jpg",
        year: 2026,
    },
    {
        slug: "visora",
        title: "Visora — AI text-to-image",
        category: "Лендинг",
        description: "Лендинг AI-генератора изображений по тексту. 40+ стилей, акцент на скорости.",
        problem: "Объяснить технологию за 5 секунд и подвести к демо/подписке.",
        solution: "Тёмный лендинг с live-превью генерации, тарифами и интеграцией оплаты.",
        metrics: [
            { label: "Lighthouse", value: "94" },
            { label: "Стилей", value: "40+" },
            { label: "Адаптив", value: "100%" },
        ],
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/visora/preview.jpg",
        year: 2026,
    },
    {
        slug: "volt-grid",
        title: "VoltGrid — зарядка для EV",
        category: "Сайт",
        description: "Сайт сети зарядных станций для электромобилей: тарифы для бизнеса, карта покрытия.",
        problem: "Донести B2B-аудитории покрытие и тарифы, не перегружая частного водителя.",
        solution: "Многостраничный сайт: карта 1240 станций, тарифы, раздел для бизнеса.",
        metrics: [
            { label: "Станций", value: "1240" },
            { label: "Мощность", value: "250кВт" },
            { label: "Адаптив", value: "100%" },
        ],
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/volt-grid/preview.svg",
        year: 2026,
    },
];
