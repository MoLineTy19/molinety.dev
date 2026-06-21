import Link from "next/link";
import { projects } from "@/app/lib/projects";
import ProjectCard from "@/app/components/projectsSection/projectCard";
import AnimatedSection from "@/app/components/animatedSection";

export default function ProjectsSection() {
    // На главной показываем максимум 3 свежих проекта
    const featured = projects.slice(0, 3);

    return (
        <section id="projects">
            <div className="mt-24 sm:mt-32">
                <AnimatedSection>
                    <h2 className="mb-6 text-xs tracking-[0.2em] text-gray-400">ПРОЕКТЫ</h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                    {/* h2, не span — семантически это заголовок секции */}
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-black leading-tight">
                        Что я уже сверстал и собрал
                    </h2>
                </AnimatedSection>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-20">
                    {featured.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                <AnimatedSection delay={0.1}>
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/projects"
                            className="border border-gray-400/50 px-8 py-4 tracking-widest transition-colors hover:border-orange-500/70 hover:text-orange-500"
                        >
                            ВСЕ ПРОЕКТЫ →
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
