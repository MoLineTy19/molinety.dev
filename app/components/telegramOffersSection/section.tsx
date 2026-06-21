import TelegramOffer from "@/app/components/offersSection/telegramOffer";
import AnimatedSection from "@/app/components/animatedSection";

/**
 * Секция Telegram-решений. Правки:
 *  - flex-2 → flex-1 (валидный класс)
 *  - border-10/border-3/1/max-w-90 → валидные arbitrary values
 *  - h-140 → h-[560px] с max-w约束 (Tailwind v4 не имеет h-140)
 *  - на мобиле мок-телефоны становятся полноширинными и скейлятся
 *  - контрасты приглушённых текстов подняты до gray-300
 */
export default function TelegramOffersSection() {
    return (
        <section className="relative my-24 sm:my-32" id="telegramOffers">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                    <AnimatedSection>
                        <h2 className="mb-6 mt-6 text-xs tracking-[0.2em] text-gray-400 sm:mt-10">
                            ТЕЛЕГРАМ-БОТЫ
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-black leading-tight">
                            Telegram-решения
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className="mb-8 mt-4 text-base text-gray-300 sm:text-lg">
                            От простых утилит до ИИ-ассистентов, встроенных в ваши процессы.
                        </p>
                    </AnimatedSection>
                </div>
                <AnimatedSection>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                        <circle cx="12" cy="12" r="10" fill="#f97316"/>
                        <path
                            fill="white"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.06-.18-.07-.05-.17-.03-.25-.02-.12.02-1.96 1.24-5.53 3.66-.52.36-.99.54-1.41.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.41-1.4-.87.03-.24.36-.49.99-.74 2.64-1.15 6.67-2.46 8.79-3.24 1.16-.43 2.12-.71 2.78-.83.77-.13 1.12.12 1.02.73z"
                        />
                    </svg>
                </AnimatedSection>
            </div>

            {/* Мок-бот 1: простой бот */}
            <AnimatedSection>
                <TelegramOffer
                    title="Простой Telegram-бот"
                    description="Меню, кнопки, формы, уведомления, контент-рассылки, каталоги, быстрые сценарии для маркетинга и поддержки."
                    indexOffer={1}
                    price="2 000"
                >
                    <div className="flex flex-1 items-center justify-center p-4">
                        <div className="w-full max-w-sm rotate-2 rounded-2xl border border-gray-700 p-1.5">
                            <div className="flex h-[500px] flex-col rounded-2xl bg-[#17212b]">
                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2"/>
                                    </svg>
                                    <span className="font-medium text-white">Поддержка</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#2b5278] px-3 py-2 text-sm text-white">
                                        Здравствуйте! Чем могу помочь?
                                    </div>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">📦 Заказать</div>
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">📞 Контакты</div>
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">❓ Вопрос</div>
                                    </div>
                                    <div className="ml-auto max-w-[85%] self-end rounded-2xl rounded-br-md bg-[#2c2e3a] px-3 py-2 text-sm text-gray-200">
                                        Как оформить заказ?
                                    </div>
                                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#2b5278] px-3 py-2 text-sm text-white">
                                        Нажмите «Заказать» и заполните форму.
                                    </div>
                                </div>
                                <div className="m-3 flex items-center gap-2 rounded-full bg-[#1f2a36] p-2">
                                    <input type="text" placeholder="Сообщение..."
                                           className="flex-1 border-none bg-transparent text-sm text-white outline-none"
                                           disabled/>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </TelegramOffer>
            </AnimatedSection>

            {/* Мок-бот 2: бот с ИИ/оплатой */}
            <AnimatedSection>
                <TelegramOffer
                    title="Бот с ИИ / оплатой / API"
                    description="Подключение нейросетей, приём оплаты (Stars, CryptoBot, ЮMoney), интеграция внешних сервисов, реферальные и бонусные системы."
                    indexOffer={2}
                    price="5 000"
                >
                    <div className="flex flex-1 items-center justify-center p-4">
                        <div className="w-full max-w-sm -rotate-1 rounded-2xl border border-gray-700 p-1.5">
                            <div className="flex h-[500px] flex-col rounded-2xl bg-[#17212b]">
                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2"/>
                                    </svg>
                                    <span className="font-medium text-white">AI Оплата</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                                    <div className="ml-auto max-w-[85%] self-end rounded-2xl rounded-br-md bg-[#2c2e3a] px-3 py-2 text-sm text-gray-200">
                                        Подбери тариф
                                    </div>
                                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#2b5278] px-3 py-2 text-sm text-white">
                                        Рекомендую «Бизнес» — 15 000 ₽. Скидка 20% по промокоду AI20
                                    </div>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">💳 Оплатить</div>
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">📄 Детали</div>
                                        <div className="rounded-xl border border-[#229ED9]/40 bg-[#229ED9]/15 px-3 py-1.5 text-sm text-[#229ED9]">🔄 Другой тариф</div>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-xl border border-[#229ED9]/20 bg-[#1f2a36] p-3">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9">
                                            <path d="M3 10h18M6 4h12M6 20h12M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                                        </svg>
                                        <span className="text-sm text-white">Списание: 12 000 ₽</span>
                                        <span className="ml-auto text-xs text-[#229ED9]">API: OK</span>
                                    </div>
                                </div>
                                <div className="m-3 flex items-center gap-2 rounded-full bg-[#1f2a36] p-2">
                                    <input type="text" placeholder="Запрос к ИИ..." className="flex-1 border-none bg-transparent text-sm text-white outline-none" disabled/>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </TelegramOffer>
            </AnimatedSection>

            {/* Мок-бот 3: сложные бизнес-процессы */}
            <AnimatedSection>
                <TelegramOffer
                    title="Сложные бизнес-процессы"
                    description="CRM-интеграция, многоуровневые воронки, аналитика, дашборды, массовые рассылки, платёжные системы, мультиязычность и сложная бизнес-логика."
                    indexOffer={3}
                    price="10 000"
                >
                    <div className="flex flex-1 items-center justify-center p-4">
                        <div className="w-full max-w-sm rotate-2 rounded-[28px] bg-[#1f2a36] p-2.5">
                            <div className="flex w-full flex-col overflow-hidden rounded-3xl bg-[#17212b]">
                                <div className="flex items-center border-b border-white/10 px-4 py-3">
                                    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] shrink-0">
                                        <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <span className="flex-1 text-center text-[17px] font-medium text-white">
                                        Бизнес-процессы
                                    </span>
                                    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] shrink-0">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-5 p-5">
                                    <div className="flex items-center gap-3 rounded-2xl bg-[#1f2a36] p-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b5278] text-2xl">📋</div>
                                        <div className="flex-1">
                                            <div className="text-base font-medium text-white">Согласование договора</div>
                                            <div className="mt-1 text-xs text-[#8e9eae]">Ожидает подписи · step 2/4</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#8e9eae]">Прогресс</span>
                                            <span className="font-medium text-white">65%</span>
                                        </div>
                                        <div className="mt-2 h-1.5 rounded-full bg-[#2c2e3a]">
                                            <div className="h-full w-[65%] rounded-full bg-[#229ED9]"></div>
                                        </div>
                                        <div className="mt-2 flex justify-between text-xs text-[#5e6f8d]">
                                            <span className="font-medium text-[#229ED9]">Заявка</span>
                                            <span className="font-medium text-[#229ED9]">Анализ</span>
                                            <span>Соглас.</span>
                                            <span>Исполн.</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#8e9eae]">Активных процессов</span>
                                        <span className="font-medium text-white">12</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#8e9eae]">Эффективность</span>
                                        <span className="font-medium text-white">87%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[#8e9eae]">Среднее время этапа</span>
                                        <span className="font-medium text-white">4.2 ч</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full border border-[#229ED9]/30 bg-[#229ED9]/10 px-3 py-1.5 text-sm text-[#229ED9]">✅ Согласовать</span>
                                        <span className="rounded-full border border-[#229ED9]/30 bg-[#229ED9]/10 px-3 py-1.5 text-sm text-[#229ED9]">📝 Редактировать</span>
                                        <span className="rounded-full border border-[#229ED9]/30 bg-[#229ED9]/10 px-3 py-1.5 text-sm text-[#229ED9]">📊 Отчёт</span>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                        <span className="text-sm text-[#8e9eae]">📄 Коммерческое предложение.pdf</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa">
                                            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>

                                    <div className="rounded-2xl bg-[#229ED9] py-3 text-center text-base font-semibold text-white">
                                        Перейти к процессу
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TelegramOffer>
            </AnimatedSection>
        </section>
    )
}
