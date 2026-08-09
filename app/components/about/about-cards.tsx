import {Box, Boxes, Code2, LucideIcon} from "lucide-react";

type Card = {
    icon: LucideIcon;
    title: string;
    subtitle: string;
};

const cards: Card[] = [
    { icon: Code2, title: "Python", subtitle: "С 2022 · API, боты, парсеры" },
    { icon: Boxes, title: "Go", subtitle: "С 2024 · Производительный бэкенд" },
    { icon: Box, title: "Docker", subtitle: "Контейнеризация и деплой" },
];

/**
 * Три карточки стека справа от текста в About.
 */
export function AboutCards() {
    return (
        <div className="flex flex-col gap-3">
            {cards.map(({ icon: Icon, title, subtitle }) => (
                <div
                    key={title}
                    className="flex items-center gap-4 rounded-xl border border-border-light bg-surface p-5 transition-colors hover:border-accent/25"
                >
                    <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                        <p className="text-xs text-muted">{subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}