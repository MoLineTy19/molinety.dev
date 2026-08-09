import {AnimatedSection} from "@/app/components/animated-section";
import {SectionHeader} from "@/app/components/about/section-header";
import {AboutCards} from "@/app/components/about/about-cards";
import {Timeline} from "@/app/components/about/timeline";

export function About() {
    return (
        <section id={"about"} className={"mx-auto w-full max-w-5xl px-6 py-24 sm:px-8 lg:px-12"}>
            <AnimatedSection>
                <SectionHeader num={"01"} title={"Обо мне"}/>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                <AnimatedSection delay={0.1}>
                    <p className="font-heading text-xl leading-relaxed text-foreground">
                        Fullstack-разработчик. Делаю сайты и сервисы под ключ.
                    </p>
                    <p className="mt-5 text-secondary">
                        С 2022 года в коммерческой разработке. На бэке пишу на Python
                        (FastAPI, боты, парсеры) и Go (сервисы, где важна производительность).
                        На фронте - React и Next.js, как этот сайт.
                    </p>
                    <p className="mt-4 text-secondary">
                        Считаю, что хороший код начинается с понимания задачи,
                        а не с выбора фреймворка. Сначала вникаю в то, что нужно заказчику,
                        а инструмент подбираю под задачу.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <AboutCards />
                </AnimatedSection>
            </div>

            <AnimatedSection delay={0.15} className="mt-16">
                <Timeline />
            </AnimatedSection>
        </section>
    )
}