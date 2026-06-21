import Link from "next/link";
import {projects} from "@/app/lib/projects";
import ProjectCard from "@/app/components/projectsSection/projectCard";
import AnimatedSection from "@/app/components/animatedSection";

export default function ProjectsSection() {
    // На главной показываем максимум 3 свежих проекта
    const featured = projects.slice(0, 3);

    return (
        <section id="projects">
            <div className="mt-30">
                <AnimatedSection>
                    <h2 className="text-xs text-gray-400 tracking-[2] mb-6">ПРОЕКТЫ</h2>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                    <span className="text-5xl font-black">Что я уже сверстал и собрал</span>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    {featured.map((project) => (
                        <ProjectCard key={project.slug} project={project}/>
                    ))}
                </div>

                <AnimatedSection delay={0.1}>
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/projects"
                            className="border border-gray-400/50 hover:border-orange-500/70 hover:text-orange-500 transition-colors px-8 py-4 tracking-widest"
                        >
                            ВСЕ ПРОЕКТЫ -&gt;
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
