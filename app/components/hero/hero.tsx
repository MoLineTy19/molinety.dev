import { ParticleField } from "./particle-field";
import {Pill} from "@/app/components/hero/pill";
import Typing from "@/app/components/hero/typing";
import {CTAGroup} from "@/app/components/hero/cta-group";
import {Metrics} from "@/app/components/hero/metrics";

const typingWords = ["пишет код", "решает задачи", "строит системы", "доставляет в прод"];


export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-dvh items-center overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
        >
            <ParticleField />

            <div
                aria-hidden="true"
                className="hero-glow pointer-events-none absolute -right-52 -top-52 h-150 w-150 rounded-full"
            />
            <div
                aria-hidden="true"
                className="hero-glow-2 pointer-events-none absolute -bottom-28 -left-28 h-100 w-100 rounded-full"
            />

            <div className="relative z-10 mx-auto w-full max-w-4xl">
                <Pill />

                <h1 className="mt-7 font-heading text-[clamp(2.75rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight">
                    MoLineTy
                    <br />
                    <span className="text-muted">
                        <Typing words={typingWords} />
                    </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
                    Fullstack-разработчик. Бэкенд на Python и Go, фронтенд на React.
                    Делаю сайты и сервисы под ключ, целиком. С 2022 года в коммерческой разработке.
                </p>

                <div className="mt-10">
                    <CTAGroup />
                </div>

                <Metrics />
            </div>
        </section>
    )
}