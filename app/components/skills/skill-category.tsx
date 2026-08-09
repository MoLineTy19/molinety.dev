import { type SkillCategoryData } from "./skills-data";

/**
 * Категория навыков: моно-заголовок + строка pill-тегов.
 * primary - основная технология, подсвечена акцентом.
 */
export function SkillCategory({ category }: { category: SkillCategoryData }) {
    return (
        <div className="flex flex-col gap-3.5">
            <div className="border-b border-border pb-2 font-mono text-xs uppercase tracking-wider text-muted">
                {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className={`rounded-md border px-3.5 py-1.5 text-sm font-medium transition-all hover:-translate-y-px ${
                            skill.primary
                                ? "border-accent/30 bg-accent/10 text-accent"
                                : "border-border bg-surface text-secondary hover:border-accent/40 hover:text-accent"
                        }`}
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
}