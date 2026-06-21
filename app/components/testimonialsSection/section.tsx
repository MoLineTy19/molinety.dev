import { testimonials, type Testimonial } from "@/app/lib/testimonials";
import AnimatedSection from "@/app/components/animatedSection";

/**
 * Секция отзывов. Social proof между проектами и финальным CTA.
 *
 * ВАЖНО: все цитаты берём ТОЛЬКО реальные (с профиля Kwork).
 * Фейковые отзывы — репутационная бомба (см. testimonials.ts).
 *
 * Пока testimonials пуст — секция не рендерится.
 * Когда добавишь реальные цитаты в app/lib/testimonials.ts, она появится автоматически.
 */
function Stars({ count = 5 }: { count?: number }) {
    return (
        <div className="mb-3 flex gap-0.5 text-orange-500" aria-label={`Оценка: ${count} из 5`}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
}

function TestimonialCard({ t }: { t: Testimonial }) {
    return (
        <figure className="flex h-full flex-col border border-gray-700/60 bg-white/[0.02] p-6 transition-colors hover:border-orange-500/40">
            <Stars count={t.rating ?? 5} />
            <blockquote className="flex-1 text-sm leading-relaxed text-gray-200 sm:text-base">
                «{t.text}»
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-700/40 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-sm font-bold text-orange-500">
                    {t.authorInitial ?? t.author.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">{t.author}</div>
                    {t.projectType && (
                        <div className="truncate text-xs text-gray-400">{t.projectType}</div>
                    )}
                </div>
            </figcaption>
        </figure>
    );
}

export default function TestimonialsSection() {
    // Пока нет ни одного отзыва — не показываем секцию совсем (лучше пусто, чем фейк).
    if (testimonials.length === 0) return null;

    return (
        <section id="testimonials">
            <div className="mt-24 sm:mt-32">
                <AnimatedSection>
                    <h2 className="mb-6 text-xs tracking-[0.2em] text-gray-400">ОТЗЫВЫ</h2>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-black leading-tight">
                        Что говорят заказчики
                    </h2>
                </AnimatedSection>
                <AnimatedSection>
                    <p className="mt-4 max-w-2xl text-gray-300">
                        Реальные отзывы с площадки Kwork. Без редактирования смысла.
                    </p>
                </AnimatedSection>

                <div className={`mt-12 grid gap-6 sm:mt-16 ${
                    testimonials.length === 1
                        ? "grid-cols-1 max-w-xl"
                        : testimonials.length === 2
                            ? "grid-cols-1 sm:grid-cols-2"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}>
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
