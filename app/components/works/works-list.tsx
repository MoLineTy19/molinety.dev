"use client"

import {useState} from "react";
import {AnimatedSection} from "@/app/components/animated-section";
import {
    categoryLabels,
    type Project,
    type ProjectCategory,
} from "@/app/components/projects/projects-data";
import {WorksCard} from "./works-card";

type Filter = "all" | ProjectCategory;

/**
 * Каталог работ: sticky-панель фильтров + сетка карточек.
 * Категории и счётчики считаются из данных: новая категория
 * в ProjectCategory сама появится в фильтрах.
 */
export function WorksList({ projects }: { projects: Project[] }) {
    const [filter, setFilter] = useState<Filter>("all");

    const filters: { value: Filter; label: string; count: number }[] = [
        { value: "all", label: "Все", count: projects.length },
        ...(Object.entries(categoryLabels) as [ProjectCategory, string][]).map(
            ([value, label]) => ({
                value,
                label,
                count: projects.filter((p) => p.category === value).length,
            }),
        ),
    ];

    const visible = filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <>
            <div className="sticky top-16 z-30 border-y border-border-light bg-background/80 backdrop-blur-xl">
                <div
                    className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-2 px-6 py-3 sm:px-8 lg:px-8"
                    role="group"
                    aria-label="Фильтр по типу проекта"
                >
                    {filters.map(({ value, label, count }) => {
                        const active = filter === value;
                        return (
                            <button
                                key={value}
                                type="button"
                                aria-pressed={active}
                                onClick={() => setFilter(value)}
                                className={`rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                                    active
                                        ? "border-accent/40 bg-accent/10 text-accent"
                                        : "border-border-light text-secondary hover:border-border hover:text-foreground"
                                }`}
                            >
                                {label} <span className="font-mono text-xs opacity-55">{count}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <section aria-label="Список работ" className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-8 lg:px-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {visible.map((project, i) => (
                        <AnimatedSection key={project.slug} delay={i * 0.08}>
                            <WorksCard project={project} />
                        </AnimatedSection>
                    ))}
                </div>

                {visible.length === 0 && (
                    <p className="py-16 text-center text-sm text-muted">
                        В этой категории пока пусто.
                    </p>
                )}
            </section>
        </>
    );
}
