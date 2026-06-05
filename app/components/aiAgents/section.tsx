import {Beam} from "@/app/components/aiAgents/beam";
import AnimatedSection from "@/app/components/animatedSection";

export default function AiAgentsSection() {
    return (
        <section id="aiAgents">
            <AnimatedSection>
                <div className="flex mt-30 mb-20 border-t border-gray-300/10">
                    <div className="flex-2">
                        <h2 className="text-5xl text-orange-500 font-black tracking-[2] mb-6 mt-30">AI-АГЕНТЫ</h2>
                        <span className="text-5xl font-semibold">Автоматизируй сложное. Упрощай главное.</span>
                        <p className="text-xl text-gray-400 mt-4">Нейросети, которые работают за тебя 24/7</p>
                    </div>
                    <div className="flex-1">
                        <Beam/>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}