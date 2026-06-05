"use client"

import HeroSection from "@/app/components/heroSection/section";
import MarqueeSection from "@/app/components/marqueeSection/section";
import OffersSection from "@/app/components/offersSection/section";
import TelegramOffersSection from "@/app/components/telegramOffersSection/section";
import {Particles} from "@/components/ui/particles";
import AnimatedSection from "@/app/components/animatedSection";
import {motion, useScroll, useTransform} from "motion/react";
import AiAgentsSection from "@/app/components/aiAgents/section";
import SkillsSection from "@/app/components/skillsSection/section";
import Footer from "@/app/components/footer/section";


export default function Home() {
    const { scrollYProgress } = useScroll();

    const backgroundColor = useTransform(
        scrollYProgress,
        [0.2, 0.3, 0.6, 1],
        ["#0A0A0AFF", "rgb(35 11 0 / 0.63)", "#121725", "#0A0A0AFF"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0.3, 0.5, 1],
        ["#ffffff", "#ffffff", "#ffffff"]
    );

    return (
        <motion.div style={{ backgroundColor, color: textColor }} className="transition-all">
            <main className="px-20">
                <Particles className="absolute inset-0 z-0" />
                <HeroSection />
                <AnimatedSection>
                    <MarqueeSection />
                </AnimatedSection>
                <OffersSection />
                <TelegramOffersSection />
                <AiAgentsSection />
                <SkillsSection />
                <Footer />
            </main>
        </motion.div>

  );
}
