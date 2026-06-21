import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ScrollButton } from "@/app/components/scrollButton";
import AnimatedSection from "@/app/components/animatedSection";

/**
 * Footer = финальный CTA. Правки:
 *  - h1 text-[100px] → h2 с clamp (на мобиле не ломается, семантика: h1 один — в hero)
 *  - один канал (только Kwork) → три: Telegram + Kwork + email
 *  - добавлен microcopy «Ответ за 2 часа. Оценка — за 24ч» (снимает страх первого контакта)
 *  - адаптивный padding и перенос блоков на мобиле
 */
export default function Footer() {
    return (
        <section>
            <AnimatedSection>
                <div className="mt-24 sm:mt-32">
                    <h2 className="mb-8 text-[clamp(2.25rem,7vw,6rem)] font-black leading-[0.95]">
                        Давай без лишних слов?
                    </h2>

                    {/* Первичный CTA — самый заметный. data-magnetic для signature-курсора. */}
                    <Link href="https://kwork.ru/user/molinety" data-magnetic>
                        <ShimmerButton
                            borderRadius="0"
                            background="rgba(255, 105, 0)"
                            className="px-8 py-5 text-2xl font-bold sm:text-4xl"
                        >
                            Написать мне →
                        </ShimmerButton>
                    </Link>

                    {/* Microcopy — снимает страх «а что после клика» */}
                    <p className="mt-6 text-sm text-gray-400 sm:text-base">
                        Отвечу за 2 часа. Бесплатная оценка проекта — за 24 часа.
                    </p>

                    {/* Альтернативные каналы связи */}
                    <div className="mt-8 flex flex-wrap gap-3 text-sm">
                        <Link
                            href="https://t.me/im_so_good"
                            className="border border-gray-400/50 px-5 py-3 tracking-wide transition-colors hover:border-orange-500/70 hover:text-orange-500"
                        >
                            Telegram
                        </Link>
                        <Link
                            href="mailto:drcomprf@gmail.com"
                            className="border border-gray-400/50 px-5 py-3 tracking-wide transition-colors hover:border-orange-500/70 hover:text-orange-500"
                        >
                            ✉️ Почта
                        </Link>
                        <Link
                            href="https://kwork.ru/user/molinety"
                            className="border border-gray-400/50 px-5 py-3 tracking-wide transition-colors hover:border-orange-500/70 hover:text-orange-500"
                        >
                            Kwork
                        </Link>
                    </div>

                    {/* Нижняя полоса — лого + копирайт */}
                    <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t p-5 sm:flex-row sm:items-center">
                        <ScrollButton targetId={"home"}>
                            <span className="text-xl font-bold text-orange-500">molinety</span>
                            <span className="text-xl font-bold">.dev</span>
                        </ScrollButton>
                        <span className="text-xs text-gray-400 sm:text-sm">
                            © 2026. Веб‑разработка, боты, AI — быстро, надёжно, под ключ.
                        </span>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
