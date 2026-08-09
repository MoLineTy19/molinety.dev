import {AnimatedSection} from "@/app/components/animated-section";
import {SectionHeader} from "@/app/components/about/section-header";
import {projects} from "@/app/components/projects/projects-data";
import {ProjectCard} from "@/app/components/projects/project-card";

export function Projects() {
    return (
        <section id={"projects"} className={"mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 lg:px-8"}>
            <AnimatedSection>
                <SectionHeader num={"03"} title={"Проекты"} />
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {projects.map((project, i) => (
                    <AnimatedSection key={project.slug} delay={i * 0.08}>
                        <ProjectCard project={project}></ProjectCard>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    )
}