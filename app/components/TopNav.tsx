import { ScrollButton } from "@/app/components/scrollButton";
import Link from "next/link";

/**
 * TopNav. Было: px-20 (съедает половину 320px), bg-black/5 (почти прозрачный —
 * не читается), h-[6%] (хрупко), nav без адаптива → пункты вылазят за экран на мобиле.
 * Стало: backdrop-blur-xl + bg-black/40 (читаемо), px адаптивный,
 * на мобиле — горизонтально-скроллируемая лента чипов, на md+ — полноценный nav.
 */
export default function TopNav() {
    const navItems = [
        { id: "projects", label: "ПРОЕКТЫ" },
        { id: "offers", label: "ТАРИФЫ" },
        { id: "telegramOffers", label: "TELEGRAM" },
        { id: "aiAgents", label: "AI-АГЕНТЫ" },
        { id: "skills", label: "PYTHON" },
        { id: "testimonials", label: "ОТЗЫВЫ"}
    ];

    return (
        <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-4 border-b border-white/10 bg-black/40 px-5 backdrop-blur-xl sm:px-8 lg:px-20">
            <ScrollButton targetId={"home"}>
                <span className="text-xl font-bold text-orange-500">molinety</span>
                <span className="text-xl font-bold">.dev</span>
            </ScrollButton>

            {/* На мобиле — горизонтальная скролл-лента чипов, на md+ — обычный ряд */}
            <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap text-xs font-medium tracking-widest text-gray-400 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-8 md:overflow-visible">
                {navItems.map((item) => (
                    <ScrollButton key={item.id} targetId={item.id}>
                        <span className="cursor-pointer transition-colors hover:text-orange-500">
                            {item.label}
                        </span>
                    </ScrollButton>
                ))}
            </div>

            <Link
                href="https://kwork.ru/user/molinety"
                className="shrink-0 bg-orange-500 px-3 py-2 text-sm font-bold tracking-wide text-black transition-opacity hover:opacity-90 sm:px-4 sm:text-base"
            >
                KWORK
            </Link>
        </nav>
    )
}
