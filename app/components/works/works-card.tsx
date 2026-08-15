import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/github-icon";
import { categoryLabels, type Project } from "@/app/components/projects/projects-data";

/**
 * Карточка работы для каталога /works.
 * Отличается от ProjectCard на главной: превью выше, бейдж категории,
 * список фич убран, чтобы каталог просматривался быстрее.
 */
const gradientClasses: Record<Project["gradient"], string> = {
    orange: "grad-orange",
    blue: "grad-blue",
    green: "grad-green",
    purple: "grad-purple",
};

export function WorksCard({ project }: { project: Project }) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border-light bg-surface-alt transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[0_12px_40px_rgba(249,115,22,0.06),0_0_0_1px_rgba(249,115,22,0.08)]">
            <div className="absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className={`preview-abstract relative flex h-44 items-center justify-center border-b border-border-light ${gradientClasses[project.gradient]}`}>
                <span className="absolute left-4 top-4 rounded bg-background/60 px-2.5 py-1 font-mono text-xs tracking-wider text-secondary backdrop-blur-sm">
                    {categoryLabels[project.category].toLowerCase()}
                </span>
                <span className="project-icon relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <span className="font-mono text-sm text-accent">{project.num}</span>
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3.5 p-7">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                </h2>

                <p className="text-sm leading-relaxed text-secondary">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {(project.codeUrl || project.liveUrl) && (
                    <div className="mt-auto flex gap-4 border-t border-border-light pt-3">
                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                            >
                                <GithubIcon size={14} />
                                Code
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                            >
                                <ExternalLink size={14} />
                                Site
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
