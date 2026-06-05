import TelegramOffer from "@/app/components/offersSection/telegramOffer";
import AnimatedSection from "@/app/components/animatedSection";

export default function TelegramOffersSection() {
    return (
        <section className="relative my-30" id="telegramOffers">
            <div className="flex items-center content-center justify-between">
                <div>
                    <AnimatedSection>
                        <h2 className="text-xs text-gray-400 tracking-[2] mb-6 mt-10">ТЕЛЕГРАММ БОТЫ</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <span className="text-5xl font-black">Телеграмм решения</span>
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className="text-gray-400/95 text-lg mt-4 mb-8">От простых утилит до ИИ-ассистентов, встроенных в
                            ваши
                            процессы.</p>
                    </AnimatedSection>
                </div>
                <AnimatedSection>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-20 h-20"
                    >
                        <circle cx="12" cy="12" r="10" fill="#f97316"/>
                        <path
                            fill="white"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.06-.18-.07-.05-.17-.03-.25-.02-.12.02-1.96 1.24-5.53 3.66-.52.36-.99.54-1.41.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.41-1.4-.87.03-.24.36-.49.99-.74 2.64-1.15 6.67-2.46 8.79-3.24 1.16-.43 2.12-.71 2.78-.83.77-.13 1.12.12 1.02.73z"
                        />
                    </svg>
                </AnimatedSection>

            </div>
            <AnimatedSection>
                <TelegramOffer title="Простой телеграмм-бот" description="Меню, кнопки, формы, уведомления, контент-рассылки, каталоги, быстрые сценарии для маркетинга и поддержки" indexOffer={1} price="2 000">
                    <div className="flex-2 p-4 flex flex-col items-center">
                        <div className="max-w-90 border-3/1 rotate-2">
                            <div className="rounded-4xl border-10 border-gray-700">
                                <div className="bg-[#17212b] h-140 flex flex-col rounded-2xl">
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2"/>
                                        </svg>
                                        <span className="text-white font-medium">Поддержка</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                        <div
                                            className="bg-[#2b5278] text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%] text-sm">Здравствуйте!
                                            Чем могу помочь?
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <div
                                                className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">📦
                                                Заказать
                                            </div>
                                            <div
                                                className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">📞
                                                Контакты
                                            </div>
                                            <div
                                                className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">❓
                                                Вопрос
                                            </div>
                                        </div>
                                        <div
                                            className="bg-[#2c2e3a] text-gray-200 rounded-2xl rounded-br-md px-3 py-2 self-end max-w-[85%] text-sm ml-auto">Как
                                            оформить заказ?
                                        </div>
                                        <div
                                            className="bg-[#2b5278] text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%] text-sm">Нажмите
                                            «Заказать» и заполните форму.
                                        </div>
                                        <div className="mt-auto"></div>
                                    </div>
                                    <div className="bg-[#1f2a36] rounded-full p-2 m-3 flex items-center gap-2">
                                        <input type="text" placeholder="Сообщение..."
                                               className="flex-1 bg-transparent border-none text-white text-sm outline-none"
                                               disabled/>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TelegramOffer>
            </AnimatedSection>
            <AnimatedSection>
                <TelegramOffer title="Бот с ИИ / оплатой / API" description="Подключение нейросетей, приём оплаты (Stars, CryptoBot, ЮMoney), интеграция внешних сервисов, реферальные и бонусные системы." indexOffer={2} price="5 000">
                    <div className="flex-2 p-4 flex flex-col items-center">
                        <div className="max-w-90 border-3/1 -rotate-1">
                            <div className="rounded-4xl border-10 border-gray-700">
                                <div className="bg-[#17212b] h-140 flex flex-col rounded-2xl">
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2"/>
                                        </svg>
                                        <span className="text-white font-medium">AI Оплата</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                        <div className="bg-[#2c2e3a] text-gray-200 rounded-2xl rounded-br-md px-3 py-2 self-end max-w-[85%] text-sm ml-auto">Подбери тариф</div>
                                        <div className="bg-[#2b5278] text-white rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%] text-sm">Рекомендую «Бизнес» — 15 000 ₽. Есть скидка 20% по промокоду AI20</div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <div className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">💳 Оплатить</div>
                                            <div className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">📄 Детали</div>
                                            <div className="bg-[#229ED9]/15 border border-[#229ED9]/40 rounded-xl px-3 py-1.5 text-sm text-[#229ED9]">🔄 Другой тариф</div>
                                        </div>
                                        <div className="bg-[#1f2a36] rounded-xl p-3 flex items-center gap-2 border border-[#229ED9]/20">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9"><path d="M3 10h18M6 4h12M6 20h12M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
                                            <span className="text-white text-sm">Списание: 12 000 ₽</span>
                                            <span className="text-[#229ED9] text-xs ml-auto">API: OK</span>
                                        </div>
                                        <div className="mt-auto"></div>
                                    </div>
                                    <div className="bg-[#1f2a36] rounded-full p-2 m-3 flex items-center gap-2">
                                        <input type="text" placeholder="Запрос к ИИ..." className="flex-1 bg-transparent border-none text-white text-sm outline-none" disabled/>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#229ED9">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TelegramOffer>
            </AnimatedSection>
            <AnimatedSection>
                <TelegramOffer title="Сложные бизнес-процессы" description="CRM-интеграция, многоуровневые воронки, аналитика, дашборды, массовые рассылки, платёжные системы, мультиязычность и сложная бизнес-логика." indexOffer={3} price="10 000">
                    <div className="flex-2 p-4 flex flex-col items-center">
                        <div className="bg-[#1f2a36] rounded-[32px] p-3 device-shadow rotate-2">
                            <div className="bg-[#17212b] rounded-3xl overflow-hidden w-[380px] flex flex-col">
                                <div className="flex items-center px-4 py-3 border-b border-white/10">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] shrink-0">
                                        <path d="M15 18l-6-6 6-6" stroke="#229ED9" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <span
                                        className="flex-1 text-center text-white font-medium text-[17px]">Бизнес-процессы</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] shrink-0">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>

                                <div className="p-5 flex flex-col gap-5">
                                    <div className="bg-[#1f2a36] rounded-2xl p-4 flex items-center gap-3">
                                        <div
                                            className="w-12 h-12 bg-[#2b5278] rounded-2xl flex items-center justify-center text-2xl">📋
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-white font-medium text-base">Согласование договора</div>
                                            <div className="text-[#8e9eae] text-xs mt-1">Ожидает подписи · step 2/4</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#8e9eae] text-sm">Прогресс</span>
                                            <span className="text-white font-medium">65%</span>
                                        </div>
                                        <div className="bg-[#2c2e3a] rounded-full h-1.5 mt-2">
                                            <div className="bg-[#229ED9] rounded-full h-full w-[65%]"></div>
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs text-[#5e6f8d]">
                                            <span className="text-[#229ED9] font-medium">Заявка</span>
                                            <span className="text-[#229ED9] font-medium">Анализ</span>
                                            <span>Соглас.</span>
                                            <span>Исполн.</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-[#8e9eae] text-sm">Активных процессов</span>
                                        <span className="text-white font-medium">12</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#8e9eae] text-sm">Эффективность</span>
                                        <span className="text-white font-medium">87%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#8e9eae] text-sm">Среднее время этапа</span>
                                        <span className="text-white font-medium">4.2 ч</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                  <span
                                      className="bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-full px-3 py-1.5 text-sm text-[#229ED9]">✅ Согласовать</span>
                                        <span
                                            className="bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-full px-3 py-1.5 text-sm text-[#229ED9]">📝 Редактировать</span>
                                        <span
                                            className="bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-full px-3 py-1.5 text-sm text-[#229ED9]">📊 Отчёт</span>
                                    </div>

                                    <div className="flex justify-between items-center border-t border-white/5 pt-3">
                                        <span className="text-[#8e9eae] text-sm">📄 Коммерческое предложение.pdf</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa">
                                            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>

                                    <div
                                        className="bg-[#229ED9] rounded-2xl py-3 text-white font-semibold text-center text-base">
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