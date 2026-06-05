import { motion } from "framer-motion";

import InputOption from "@/app/components/offersSection/InputOption";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card";
import {PulsatingButton} from "@/components/ui/pulsating-button";
import AnimatedSection from "@/app/components/animatedSection";

export default function OffersSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="offers">
            <div className="mt-30">
                <AnimatedSection>
                    <h2 className="text-xs text-gray-400 tracking-[2] mb-6">ТАРИФЫ</h2>
                </AnimatedSection>
                <AnimatedSection>
                    <span className="text-5xl font-black">Выберите формат сотрудничества под ваш бизнес</span>
                </AnimatedSection>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 items-center">
                    <motion.article variants={itemVariants} className="border border-gray-700 p-8 flex flex-col">
                        <p className="text-xs text-gray-300/60 mb-4">TIER 1</p>
                        <h1 className="text-2xl font-black mb-3">Базовый</h1>
                        <p className="text-4xl font-bold text-orange-500">ОТ 5 000 ₽</p>
                        <p className="text-gray-400/95 text-sm mb-10">Быстрый старт. Первые заявки без переплаты.</p>
                        <div className="mb-5 flex justify-center">
                            <svg width="440" height="260" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"
                                 className="rounded-lg shadow-lg">
                                <rect width="320" height="180" fill="#0d0d0d"/>
                                <rect width="320" height="26" fill="rgba(255,255,255,0.03)"/>
                                <circle cx="16" cy="13" r="5" fill="rgba(249,115,22,0.6)"/>
                                <rect x="26" y="9" width="34" height="8" rx="2" fill="rgba(249,115,22,0.3)"/>
                                <rect x="240" y="9" width="26" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="272" y="9" width="26" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="72" y="38" width="176" height="12" rx="3" fill="rgba(255,255,255,0.2)"/>
                                <rect x="96" y="55" width="128" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                                <rect x="120" y="67" width="80" height="16" rx="5" fill="rgba(249,115,22,0.4)"/>
                                <line x1="0" y1="96" x2="320" y2="96" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                                <rect x="8" y="104" width="94" height="68" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                                <rect x="113" y="104" width="94" height="68" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                                <rect x="218" y="104" width="94" height="68" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                                <circle cx="30" cy="118" r="7" fill="rgba(249,115,22,0.18)"/>
                                <circle cx="135" cy="118" r="7" fill="rgba(249,115,22,0.18)"/>
                                <circle cx="240" cy="118" r="7" fill="rgba(249,115,22,0.18)"/>
                                <rect x="16" y="130" width="64" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
                                <rect x="16" y="140" width="74" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="16" y="148" width="58" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="16" y="156" width="46" height="8" rx="3" fill="rgba(249,115,22,0.2)"/>
                                <rect x="121" y="130" width="64" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
                                <rect x="121" y="140" width="74" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="121" y="148" width="58" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="121" y="156" width="46" height="8" rx="3" fill="rgba(249,115,22,0.2)"/>
                                <rect x="226" y="130" width="64" height="6" rx="1" fill="rgba(255,255,255,0.2)"/>
                                <rect x="226" y="140" width="74" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="226" y="148" width="58" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
                                <rect x="226" y="156" width="46" height="8" rx="3" fill="rgba(249,115,22,0.2)"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputOption text="Посадочная страница под ключ"/>
                            <InputOption text="Адаптив + скорость загрузки"/>
                            <InputOption text="Форма заявки + карта / контакты"/>
                            <InputOption text="Базовая SEO-настройка"/>
                            <InputOption text="Гарантия 14 дней правок"/>
                        </div>
                        <button className="cursor-pointer border border-gray-400/50 p-4 w-full mt-6">ОБСУДИТЬ</button>
                        <p className="text-xs text-gray-400/70 mt-4 text-center">подходит для лендингов и визиток</p>
                    </motion.article>
                    <NeonGradientCard neonColors={{firstColor: "#ff6900", secondColor: "#ff4400"}} borderRadius={0}>
                        <p className="text-xs text-orange-500 mb-4">TIER 2</p>
                        <h1 className="text-2xl font-black mb-3">Продвинутый</h1>
                        <p className="text-4xl font-bold text-orange-500">ОТ 15 000 ₽</p>
                        <p className="text-gray-400/95 text-sm mb-10">Системный сайт. Готов масштабироваться.</p>
                        <div className="mb-5 flex justify-center">
                            <svg width="580" height="300" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"
                                 className="w-full h-auto rounded-lg">
                                <rect width="320" height="180" fill="#0d0d0d"/>
                                <rect width="320" height="26" fill="rgba(255,255,255,0.03)"/>
                                <circle cx="16" cy="13" r="5" fill="rgba(249,115,22,0.6)"/>
                                <rect x="26" y="9" width="34" height="8" rx="2" fill="rgba(249,115,22,0.3)"/>
                                <rect x="160" y="9" width="34" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="200" y="9" width="34" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="240" y="7" width="60" height="12" rx="5" fill="rgba(249,115,22,0.35)"/>
                                <rect x="60" y="38" width="200" height="10" rx="3" fill="rgba(255,255,255,0.2)"/>
                                <rect x="80" y="52" width="160" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                                <rect x="100" y="63" width="120" height="14" rx="4" fill="rgba(249,115,22,0.4)"/>
                                <rect x="8" y="88" width="304" height="28" rx="4" fill="rgba(249,115,22,0.04)"
                                      stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
                                <rect x="16" y="94" width="40" height="4" rx="1" fill="rgba(249,115,22,0.3)"/>
                                <rect x="70" y="94" width="40" height="4" rx="1" fill="rgba(255,255,255,0.12)"/>
                                <rect x="124" y="94" width="40" height="4" rx="1" fill="rgba(255,255,255,0.12)"/>
                                <rect x="178" y="94" width="40" height="4" rx="1" fill="rgba(255,255,255,0.12)"/>
                                <rect x="8" y="122" width="72" height="50" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <rect x="88" y="122" width="72" height="50" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <rect x="168" y="122" width="72" height="50" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <rect x="248" y="122" width="64" height="50" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <circle cx="24" cy="134" r="5" fill="rgba(249,115,22,0.2)"/>
                                <circle cx="104" cy="134" r="5" fill="rgba(249,115,22,0.2)"/>
                                <circle cx="184" cy="134" r="5" fill="rgba(249,115,22,0.2)"/>
                                <circle cx="264" cy="134" r="5" fill="rgba(249,115,22,0.2)"/>
                                <rect x="14" y="144" width="52" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
                                <rect x="14" y="152" width="44" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                                <rect x="94" y="144" width="52" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
                                <rect x="94" y="152" width="44" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                                <rect x="174" y="144" width="52" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
                                <rect x="174" y="152" width="44" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                                <rect x="254" y="144" width="44" height="4" rx="1" fill="rgba(255,255,255,0.18)"/>
                                <rect x="254" y="152" width="36" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputOption text="5–7 страниц в едином стиле"/>
                            <InputOption text="Личный кабинет или калькулятор"/>
                            <InputOption text="Интеграция: Telegram, CRM, таблицы"/>
                            <InputOption text="Онлайн-оплата (карты / СБП)"/>
                            <InputOption text="Админ-панель + аналитика"/>
                        </div>
                        <PulsatingButton className="cursor-pointer border bg-orange-500 p-4 w-full mt-6 text-black">ОБСУДИТЬ</PulsatingButton>
                        <p className="text-xs text-gray-400/70 mt-4 text-center">идеально для услуг, сервисов, магазинов до 500 товаров</p>
                    </NeonGradientCard>
                    {/*<article className="border border-orange-500 p-8 h-full flex flex-col relative">*/}
                    {/*    */}
                    {/*</article>*/}
                    <motion.article variants={itemVariants} className="border border-gray-700 p-8 flex flex-col">
                        <p className="text-xs text-gray-300/60 mb-4">TIER 3</p>
                        <h1 className="text-2xl font-black mb-3">Бизнес</h1>
                        <p className="text-4xl font-bold text-orange-500">ОТ 30 000 ₽</p>
                        <p className="text-gray-400/95 text-sm mb-10">Продуктовый уровень. Сложные процессы — просто.</p>
                        <div className="mb-5 flex justify-center">
                            <svg width="480" height="260" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"
                                 className="rounded-lg shadow-lg">
                                <rect width="320" height="180" fill="#0d0d0d"/>
                                <rect width="320" height="26" fill="rgba(255,255,255,0.03)"/>
                                <circle cx="16" cy="13" r="5" fill="rgba(249,115,22,0.7)"/>
                                <rect x="26" y="9" width="40" height="8" rx="2" fill="rgba(249,115,22,0.4)"/>
                                <rect x="130" y="9" width="40" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="176" y="9" width="40" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <rect x="222" y="9" width="40" height="8" rx="2" fill="rgba(255,255,255,0.14)"/>
                                <circle cx="280" cy="13" r="7" fill="rgba(249,115,22,0.25)" stroke="rgba(249,115,22,0.5)"
                                        strokeWidth="1"/>
                                <rect x="20" y="38" width="180" height="12" rx="3" fill="rgba(255,255,255,0.22)"/>
                                <rect x="20" y="54" width="140" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                                <rect x="220" y="38" width="80" height="32" rx="5" fill="rgba(249,115,22,0.1)"
                                      stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
                                <rect x="230" y="46" width="60" height="6" rx="1" fill="rgba(249,115,22,0.5)"/>
                                <rect x="230" y="56" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
                                <rect x="8" y="82" width="148" height="44" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <polyline points="16,118 40,106 70,114 100,94 130,100 148,90" fill="none"
                                          stroke="rgba(249,115,22,0.7)" strokeWidth="1.5"/>
                                <circle cx="40" cy="106" r="2" fill="rgba(249,115,22,0.9)"/>
                                <circle cx="100" cy="94" r="2" fill="rgba(249,115,22,0.9)"/>
                                <rect x="12" y="110" width="30" height="4" rx="1" fill="rgba(255,255,255,0.08)"/>
                                <rect x="12" y="118" width="20" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
                                <rect x="164" y="82" width="148" height="44" rx="4" fill="rgba(255,255,255,0.03)"
                                      stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
                                <rect x="172" y="90" width="60" height="4" rx="1" fill="rgba(249,115,22,0.4)"/>
                                <rect x="172" y="98" width="80" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
                                <rect x="172" y="104" width="70" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
                                <rect x="172" y="110" width="50" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
                                <rect x="260" y="90" width="44" height="6" rx="2" fill="rgba(249,115,22,0.25)"/>
                                <rect x="8" y="134" width="304" height="38" rx="5" fill="rgba(249,115,22,0.03)"
                                      stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
                                <rect x="16" y="144" width="28" height="6" rx="2" fill="rgba(249,115,22,0.3)"/>
                                <rect x="54" y="144" width="28" height="6" rx="2" fill="rgba(255,255,255,0.12)"/>
                                <rect x="92" y="144" width="28" height="6" rx="2" fill="rgba(255,255,255,0.12)"/>
                                <rect x="130" y="144" width="40" height="6" rx="2" fill="rgba(249,115,22,0.25)"/>
                                <rect x="240" y="144" width="40" height="6" rx="2" fill="rgba(255,255,255,0.12)"/>
                                <rect x="288" y="144" width="16" height="6" rx="2" fill="rgba(249,115,22,0.4)"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputOption text="Кабинеты, роли доступа, платежи"/>
                            <InputOption text="Интеграция с CRM, 1С, внешними API"/>
                            <InputOption text="Автоматизация отчётов и рассылок"/>
                            <InputOption text="Архитектура под высокую нагрузку"/>
                            <InputOption text="DevOps: CI/CD, мониторинг, бекапы"/>
                        </div>
                        <button className="cursor-pointer border border-gray-400/50 p-4 w-full mt-6">ОБСУДИТЬ</button>
                        <p className="text-xs text-gray-400/70 mt-4 text-center">для маркетплейсов, EdTech,
                            B2B-платформ</p>
                    </motion.article>
                </motion.div>
            </div>
        </section>
    )
}