import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

/**
 * Секция Python-скиллов. Правки:
 *  - flex-2/flex-4 → flex-1/flex-3 (валидные классы, пропорции 1:3)
 *  - на мобиле колонки складываются (flex-col), terminal над текстом
 *  - grid 2x2 → 1 на мобиле, 2 на sm+
 *  - контрасты текста подняты (gray-300 вместо gray-300/80)
 *  - заголовки: убрал дубли h2, теперь один h2-оффер + подзаголовок
 */
export default function SkillsSection() {
    return (
        <section id="skills">
            <div className="flex flex-col gap-10 border-b border-t border-gray-700/30 py-16 lg:flex-row lg:gap-20 lg:py-20">
                <div className="flex-1">
                    <Terminal className="w-full max-w-full">
                        <TypingAnimation>npx create-ai-agent@latest</TypingAnimation>
                        <AnimatedSpan>✔ Loading neural context... [DONE]</AnimatedSpan>
                        <AnimatedSpan>✔ Validating environment variables.</AnimatedSpan>
                        <AnimatedSpan>✔ Connecting to GPT‑5 bridge (secure).</AnimatedSpan>

                        <TypingAnimation>ai agent deploy --name=automator --skill=unblock</TypingAnimation>
                        <AnimatedSpan>✔ Spawning worker threads (4 cores).</AnimatedSpan>
                        <AnimatedSpan>✔ Bypassing rate limits... success.</AnimatedSpan>
                        <AnimatedSpan>✔ Attaching memory to context window (∞ tokens).</AnimatedSpan>
                    </Terminal>
                </div>
                <div className="min-w-0 flex-1 lg:flex-[3]">
                    <h2 className="mb-3 tracking-widest text-orange-500">PYTHON: ПАРСИНГ + ИНТЕГРАЦИИ</h2>
                    <h2 className="mb-4 text-[clamp(1.5rem,3.5vw,2.5rem)] font-black leading-tight">
                        От сырых данных до готовых отчётов
                    </h2>
                    <p className="mb-8 text-gray-300">
                        Программирую сбор информации, связываю сервисы, автоматизирую отчётность.
                        Выгрузка куда угодно: Excel, Google Таблицы, CSV, SQL.
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="border border-gray-700/40 bg-white/5 p-4">
                            <h3 className="mb-2 font-bold">Обработка файлов</h3>
                            <p className="text-gray-300">Excel, PDF, Word, изображения, извлечение текста, конвертация, объединение и разбор любых форматов.</p>
                        </div>
                        <div className="border border-gray-700/40 bg-white/5 p-4">
                            <h3 className="mb-2 font-bold">Интеграция с API</h3>
                            <p className="text-gray-300">REST, SOAP, GraphQL, авторизация, лимиты, ретраи, логирование, подключение к любым внешним сервисам.</p>
                        </div>
                        <div className="border border-gray-700/40 bg-white/5 p-4">
                            <h3 className="mb-2 font-bold">Мониторинг и оповещения</h3>
                            <p className="text-gray-300">Отслеживание изменений на сайтах, проверка доступности, отправка уведомлений в Telegram, email, Slack.</p>
                        </div>
                        <div className="border border-gray-700/40 bg-white/5 p-4">
                            <h3 className="mb-2 font-bold">Базы данных и SQL</h3>
                            <p className="text-gray-300">PostgreSQL, MySQL, SQLite, сложные запросы, миграции, бэкапы, соединение парсеров напрямую с БД.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
