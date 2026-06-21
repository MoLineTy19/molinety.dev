"use client"

import HeroSection from "@/app/components/heroSection/section";
import MarqueeSection from "@/app/components/marqueeSection/section";
import OffersSection from "@/app/components/offersSection/section";
import TelegramOffersSection from "@/app/components/telegramOffersSection/section";
import { Particles } from "@/components/ui/particles";
import AnimatedSection from "@/app/components/animatedSection";
import { motion, useScroll, useTransform } from "motion/react";
import AiAgentsSection from "@/app/components/aiAgents/section";
import SkillsSection from "@/app/components/skillsSection/section";
import ProjectsSection from "@/app/components/projectsSection/section";
import TestimonialsSection from "@/app/components/testimonialsSection/section";
import Footer from "@/app/components/footer/section";
import MagneticCursor from "@/app/components/magneticCursor";


export default function Home() {
    const { scrollYProgress } = useScroll();

    // Color-shifting фон при скролле — signature-момент сайта.
    // Диапазоны подобраны под реальные секции: hero → офферы (тепло) → AI (indigo) → финиш.
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.15, 0.30, 0.60, 0.95],
        ["#0A0A0A", "rgb(35 11 0 / 0.63)", "#121725", "#0A0A0A"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0.3, 0.5, 1],
        ["#ffffff", "#ffffff", "#ffffff"]
    );

    return (
        <motion.div style={{ backgroundColor, color: textColor }} className="relative transition-colors">
            {/* Кастомный magnetic-курсор — только на устройствах с fine pointer (мышь/трекпад).
             * На тач-устройствах не активируется, чтобы не ломать iOS/Android. */}
            <MagneticCursor />

            {/* Particles fixed под контентом; вешаем на весь вьюпорт, чтобы не «обрезались»
             * при коротких секциях. pointer-events-none — не мешает кликам. */}
            <Particles className="pointer-events-none fixed inset-0 z-0" quantity={70} />

            {/* px адаптивный: 5 на мобиле (чтобы не прижимало к краю 320px) → 20 на десктопе.
             * z-10 чтобы контент был над Particles. */}
            <main className="relative z-10 px-5 sm:px-8 lg:px-20">
                <HeroSection />
                <AnimatedSection>
                    <MarqueeSection />
                </AnimatedSection>
                <OffersSection />
                <TelegramOffersSection />
                <AiAgentsSection />
                <SkillsSection />
                <ProjectsSection />
                {/* Отзывы. Пока массив testimonials пуст — секция не рендерится.
                 * Заполни app/lib/testimonials.ts реальными цитатами с Kwork. */}
                <TestimonialsSection />
                <Footer />
            </main>
        </motion.div>
    );
}
