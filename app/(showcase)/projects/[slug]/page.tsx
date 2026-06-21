import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import {projects} from "@/app/lib/projects";

/** Прегенерация страниц для каждого проекта на этапе сборки */
export function generateStaticParams() {
    return projects.map((p) => ({slug: p.slug}));
}

/** Динамические SEO-метаданные */
export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;
    const project = projects.find((p) => p.slug === slug);
    return {
        title: project ? `${project.title} | molinety.dev` : "Проект не найден",
        description: project?.description,
    };
}

export default async function ProjectViewer({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="h-screen flex flex-col">
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700/40 bg-black/40 backdrop-blur-md">
                <Link
                    href="/projects"
                    className="text-gray-400 hover:text-orange-500 transition-colors tracking-widest text-xs"
                >
                    &lt;- ВСЕ ПРОЕКТЫ
                </Link>
                <div className="text-center">
                    <h1 className="text-lg font-black">{project.title}</h1>
                    {project.source && (
                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-orange-500 hover:underline"
                        >
                            исходники
                        </a>
                    )}
                </div>
                <a
                    href={`/showcase/${project.slug}/index.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors tracking-widest text-xs"
                >
                    ОТКРЫТЬ В НОВОЙ ВКЛАДКЕ -&gt;
                </a>
            </header>

            <iframe
                src={`/showcase/${project.slug}/index.html`}
                title={project.title}
                className="flex-1 w-full border-0 bg-white"
            />
        </main>
    );
}
