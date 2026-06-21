import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";

/**
 * Карточка проекта. Было: просто картинка + заголовок + стек.
 * Стало: добавили бейдж категории и блок метрик (problem → solution → результат),
 * осмысленный alt для скринридеров, hover-state с подсветкой.
 * Метрики берём только честные (Lighthouse, скорость, покрытие) — без выдуманных «+200% заявок».
 */
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden border border-gray-700/60 transition-colors hover:border-orange-500/70"
        >
            <div className="relative aspect-video overflow-hidden bg-black/40">
                <Image
                    src={project.preview}
                    alt={`Превью проекта: ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Бейдж категории — поверх превью */}
                <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-widest text-orange-500 backdrop-blur-sm">
                    {project.category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-black sm:text-2xl">{project.title}</h3>
                    {project.year && (
                        <span className="text-xs tracking-widest text-gray-400">{project.year}</span>
                    )}
                </div>

                <p className="mb-4 flex-1 text-sm text-gray-300">{project.description}</p>

                {/* Метрики результата — ключевое отличие от «просто картинок» */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="mb-4 grid grid-cols-3 gap-2 border-y border-gray-700/40 py-3">
                        {project.metrics.map((m) => (
                            <div key={m.label} className="text-center">
                                <div className="text-lg font-black text-orange-500">{m.value}</div>
                                <div className="text-[10px] uppercase tracking-wider text-gray-400">
                                    {m.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="border border-gray-700/60 px-2 py-1 text-xs tracking-wider text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
