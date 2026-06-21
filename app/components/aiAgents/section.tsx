import { Beam } from "@/app/components/aiAgents/beam";
import AnimatedSection from "@/app/components/animatedSection";

/**
 * Секция AI-агентов.
 *
 * Пропорции колонок: тексту — 2 части, Beam — 3 части. Beam-канва имеет
 * фиксированную геометрию (h-[300px], 3 ряда кружков, max-w-lg внутри),
 * и ей нужно много горизонтального места — иначе лучи сжимаются и наезжают.
 * В оригинале это работало потому, что у левого блока flex-2 был невалидным
 * (игнорировался → контентная ширина), а Beam занимал всё остальное.
 *
 * ВАЖНО: не оборачиваем Beam в items-center/justify-center — у него внутри
 * собственный mt-20, и двойное центрирование смещает канву вниз.
 */
export default function AiAgentsSection() {
    return (
        <section id="aiAgents">
            <AnimatedSection>
                <div className="mt-24 flex flex-col gap-8 border-t border-gray-300/10 py-12 sm:mt-32 md:flex-row md:items-center md:gap-12 md:py-16">
                    <div className="md:flex-[2] md:basis-2/5">
                        <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-black tracking-[0.05em] text-orange-500">
                            AI-АГЕНТЫ
                        </h2>
                        <p className="mt-3 text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-tight">
                            Автоматизируй сложное. Упрощай главное.
                        </p>
                        <p className="mt-4 text-lg text-gray-300 sm:text-xl">
                            Нейросети, которые работают за тебя 24/7.
                        </p>
                    </div>
                    <div className="min-w-0 md:flex-[3] md:basis-3/5">
                        <Beam/>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
