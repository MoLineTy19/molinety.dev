import {CircleDashed, Clock, Layers, LucideIcon} from "lucide-react";

type Item = {
    icon: LucideIcon;
    title: string;
    year: string;
    text: string;
}

const items: Item[] = [
    {
        icon: CircleDashed,
        title: "Начало пути",
        year: "2022",
        text: "Первые шаги в программировании. Python, базы данных, первые API.",
    },
    {
        icon: Clock,
        title: "Node.js и продакшен",
        year: "2023",
        text: "Переход на JavaScript/Node.js. Первые коммерческие проекты и работа с реальными пользователями.",
    },
    {
        icon: Layers,
        title: "Go и серьезный бэкенд",
        year: "2024 - н.в.",
        text: "Добавил Go для задач, где важна производительность. REST API, Docker, работа с внешними сервисами.",
    },
];

/**
 * Таймлайн пути по годам.
 */
export function Timeline() {
    return (
        <div className="relative flex flex-col">
            {/* вертикальная линия */}
            <div className="absolute bottom-0 left-3.75 top-0 w-px bg-border-light" />

            {items.map(({ icon: Icon, title, year, text }) => (
                <div key={title} className="relative flex gap-6 py-4">
                    <div className="relative z-10 flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background">
                        <Icon size={14} className="text-accent" />
                    </div>
                    <div className="pt-0.5">
                        <h3 className="font-heading text-base font-semibold text-foreground">
                            {title}
                        </h3>
                        <div className="mb-1.5 font-mono text-xs text-accent">{year}</div>
                        <p className="text-sm leading-relaxed text-secondary">{text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
