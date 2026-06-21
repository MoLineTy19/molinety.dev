import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

/**
 * Бегущая строка. Раньше был чистый список технологий (DOCKER, TYPESCRIPT...) —
 * бизнес-ЦА это не цепляет. Добавили вперемешку соцдоказательства, услуги и
 * ключевые технологии: так строка работает и как trust-сигнал, и как stack-витрина.
 * Опечатки исправлены (PlAYWRIGHT→PLAYWRIGHT, SCHACN→SHADCN).
 */
export default function MarqueeSection() {
    const words = [
        "⭐ 5.0 KWORK",
        "20+ ПРОЕКТОВ",
        "4 ГОДА В IT",
        "ОТВЕТ ЗА 2 ЧАСА",
        "NEXT.JS",
        "PYTHON",
        "TELEGRAM-БОТЫ",
        "AI-АГЕНТЫ",
        "ЛЕНДИНГИ ПОД КЛЮЧ",
        "TYPESCRIPT",
        "POSTGRESQL",
        "FASTAPI",
        "DOCKER",
        "REACT",
        "ПАРСИНГ + АВТОМАТИЗАЦИЯ",
        "REDIS",
        "AIOGRAM",
        "TAILWIND",
        "CI/CD",
        "EXPRESS.JS",
        "NODE.JS",
        "GITHUB",
        "NGINX",
        "REST API",
        "PLAYWRIGHT",
        "TELETHON",
        "SQLITE",
        "SHADCN/UI",
    ];

    return (
        <section className="flex flex-col border-b border-gray-500/30 py-4">
            <ScrollVelocityContainer className="font-medium text-3xl md:text-5xl">
                <ScrollVelocityRow baseVelocity={2} direction={1} scrollReactivity={false}>
                    {words.join("  ·  ")}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={2} direction={-1} scrollReactivity={false}>
                    {words.join("  ·  ")}
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </section>
    )
}
