import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import ProjectCard from "@/app/components/projectsSection/projectCard";

export const metadata: Metadata = {
    title: "Проекты | molinety.dev",
    description: "Каталог свёрстанных проектов — адаптивные сайты, лендинги и веб-приложения.",
};

export default function ProjectsPage() {
    return (
        <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
            <Link
                href="/#projects"
                className="text-xs tracking-widest text-gray-400 transition-colors hover:text-orange-500"
            >
                &lt;- НАЗАД
            </Link>

            <header className="mb-12 mt-8 sm:mb-16 sm:mt-10">
                <h2 className="mb-6 text-xs tracking-[0.2em] text-gray-400">ПРОЕКТЫ</h2>
                {/* На этой странице это главный заголовок → h1 */}
                <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-tight">Все работы</h1>
                <p className="mt-6 max-w-2xl text-gray-300">
                    Свёрстанные и собранные проекты. Кликни на карточку — откроется живой сайт прямо здесь.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </main>
    );
}
