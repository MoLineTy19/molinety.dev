import {AnimatedSection} from "@/app/components/animated-section";
import {SectionHeader} from "@/app/components/about/section-header";
import {skillsData} from "@/app/components/skills/skills-data";
import {SkillCategory} from "@/app/components/skills/skill-category";

export function Skills() {
    return (
        <section id={"skills"} className={"mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 lg:px-12"}>
            <AnimatedSection>
                <SectionHeader num={"02"} title={"Стэк"} />
            </AnimatedSection>

            <AnimatedSection delay={0.1} className={"mt-12"}>
                <div className="rounded-2xl border border-border-light bg-surface-alt p-8 sm:p-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        {skillsData.map((cat) => (
                            <SkillCategory key={cat.title} category={cat} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

        </section>
    )
}