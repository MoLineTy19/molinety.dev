export type Project = {
    /** Уникальный slug — он же имя папки в public/showcase/<slug>/ */
    slug: string;
    /** Отображаемое название */
    title: string;
    /** Короткое описание для карточки */
    description: string;
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
        description: "Лендинг specialty-кофейни в Москве: свежая обжарка, зёрна с 12 ферм. Тёплая палитра, типографика, адаптив.",
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/specialty-coffee/preview.jpg",
        year: 2026,
    },
    {
        slug: "visora",
        title: "Visora — AI text-to-image",
        description: "Лендинг AI-генератора изображений по текстовому описанию. Тёмная тема, 40+ стилей, акцент на скорости.",
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/visora/preview.jpg",
        year: 2026,
    },
    {
        slug: "volt-grid",
        title: "VoltGrid — зарядка для EV",
        description: "Сайт сети зарядных станций для электромобилей: до 250 кВт, 1240 станций по России, тарифы для бизнеса.",
        stack: ["Next.js", "Tailwind", "Lenis"],
        preview: "/showcase/volt-grid/preview.svg",
        year: 2026,
    },
];
