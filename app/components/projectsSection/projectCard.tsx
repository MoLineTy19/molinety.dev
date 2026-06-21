import Link from "next/link";
import Image from "next/image";
import type {Project} from "@/app/lib/projects";

export default function ProjectCard({project}: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group border border-gray-700/60 hover:border-orange-500/70 transition-colors flex flex-col overflow-hidden"
        >
            <div className="relative aspect-video overflow-hidden bg-black/40">
                <Image
                    src={project.preview}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    {project.year && (
                        <span className="text-xs text-gray-400/70 tracking-widest">{project.year}</span>
                    )}
                </div>
                <p className="text-gray-400/90 text-sm mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 border border-gray-700/60 text-gray-300/90 tracking-wider"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
