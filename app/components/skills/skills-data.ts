export type Skill = {
    name: string;
    primary?: boolean; // true: основная технология, подсвечена акцентом
};

export type SkillCategoryData = {
    title: string;
    skills: Skill[];
};

/**
 * Данные стека. primary: true помечает основные технологии (подсвечены акцентом).
 * Порядок внутри категории = от сильного к слабому.
 */
export const skillsData: SkillCategoryData[] = [
    {
        title: "Языки",
        skills: [
            { name: "Python", primary: true },
            { name: "Go", primary: true },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "SQL" },
        ],
    },
    {
        title: "Backend / Python",
        skills: [
            { name: "FastAPI", primary: true },
            { name: "aiogram" },
            { name: "PySide6" },
            { name: "PyInstaller" },
            { name: "googleapiclient" },
        ],
    },
    {
        title: "Backend / Go",
        skills: [
            { name: "net/http" },
            { name: "godotenv" },
            { name: "Docker multi-stage" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "Next.js", primary: true },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind" },
        ],
    },
    {
        title: "Базы данных",
        skills: [
            { name: "PostgreSQL", primary: true },
            { name: "SQLite" },
            { name: "Redis" },
        ],
    },
    {
        title: "Инфраструктура",
        skills: [
            { name: "Docker", primary: true },
            { name: "Git" },
            { name: "Linux" },
            { name: "REST API" },
        ],
    },
];
