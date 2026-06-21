import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ScrollButton } from "@/app/components/scrollButton";
import Link from "next/link";

/**
 * Hero. Раньше здесь было только {"<Данил/>"} + typing ролей —
 * без оффера, подзаголовка и CTA. Теперь:
 *   eyebrow → единственный h1 (оффер) → подзаголовок → 2 CTA → trust-strip → scroll-hint.
 * h1 на всей странице один (остальные заголовки — h2/h3), что правильно для SEO/a11y.
 */
export default function HeroSection() {
    return (
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
            {/* eyebrow — крошечная строка-контекст */}
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gray-400 sm:text-xs">
                Портфолио · 4 года в IT · Kwork
            </p>

            {/* Оффер — единственный <h1> на странице */}
            <h1 className="max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.95] text-orange-500">
                Сайты, боты и AI-агенты,
                <br className="hidden sm:block"/> которые приносят заявки
            </h1>

            {/* Раньше здесь была typing-анимация крупным шрифтом с tracking-widest.
             * Сохраняем «кодерский» вайб, но в формате компактного mono-подзаголовка. */}
            <div className="mt-6 font-mono text-[clamp(0.95rem,2.5vw,1.5rem)] text-gray-300">
                <TypingAnimation
                    words={["Full-stack разработчик", "Python · JS · TS", "4 года в IT"]}
                    loop
                />
            </div>

            {/* Подзаголовок — конкретика для ЦА (бизнес, RU) */}
            <p className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
                Меня зовут Данил. Делаю под ключ: от лендинга за 5 000 ₽ до продуктов
                с платежами и AI. Next.js, Python, Telegram-боты.
            </p>

            {/* Два CTA — первичный (Shimmer) + вторичный (на проекты).
             * data-magnetic — триггер для MagneticCursor (signature-курсор). */}
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
                <Link href="https://kwork.ru/user/molinety" className="w-full sm:w-auto" data-magnetic>
                    <ShimmerButton
                        borderRadius="0"
                        background="rgba(255, 105, 0)"
                        className="w-full px-8 py-4 text-lg font-bold sm:w-auto"
                    >
                        Обсудить проект →
                    </ShimmerButton>
                </Link>
                <ScrollButton targetId="projects">
                    <span className="inline-block w-full cursor-pointer border border-gray-400/50 px-8 py-4 text-lg tracking-wide transition-colors hover:border-orange-500/70 hover:text-orange-500 sm:w-auto">
                        Смотреть работы
                    </span>
                </ScrollButton>
            </div>

            {/* Trust-strip — мини-соцдоказательство прямо в hero */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 sm:text-sm">
                <span>⭐ 5.0 на Kwork</span>
                <span className="hidden h-3 w-px bg-gray-700 sm:block"/>
                <span>20+ проектов</span>
                <span className="hidden h-3 w-px bg-gray-700 sm:block"/>
                <span>Ответ за 2 часа</span>
            </div>

            {/* Рабочий скролл-индикатор (animate-scrollDot теперь определён в globals.css) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-orange-400/80">
                    <div className="mt-2 h-2 w-1 animate-scrollDot rounded-full bg-orange-400"/>
                </div>
            </div>
        </section>
    )
}
