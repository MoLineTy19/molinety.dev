import type {Metadata} from "next";
import Link from "next/link";
import {projects} from "@/app/lib/projects";
import ProjectCard from "@/app/components/projectsSection/projectCard";

    export const metadata: Metadata = {
    title: "Проекты | molinety.dev",
    description: "Каталог свёрстанных проектов — адаптивные сайты, лендинги и веб-приложения.",
};

export default function ProjectsPage() {
    return (
        <main className="px-20 py-20">
            <Link
                href="/#projects"
                className="text-gray-400 hover:text-orange-500 transition-colors tracking-widest text-xs"
            >
                &lt;- НАЗАД
            </Link>

            <header className="mt-8 mb-20">
                <h2 className="text-xs text-gray-400 tracking-[2] mb-6">ПРОЕКТЫ</h2>
                <h1 className="text-6xl font-black">Все работы</h1>
                <p className="text-gray-400/90 mt-6 max-w-2xl">
                    Свёрстанные и собранные проекты. Кликни на карточку — откроется живой сайт прямо здесь.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </div>
        </main>
    );
}
