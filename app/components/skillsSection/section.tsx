import {AnimatedSpan, Terminal, TypingAnimation} from "@/components/ui/terminal";

export default function SkillsSection(){
    return (
        <section id="skills">
            <div className="flex border-t border-b border-gray-700/30 py-20 gap-20">
                <div className="flex-2">
                    <Terminal className="max-w-full w-full">
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
                <div className="flex-4 min-w-0">
                    <h2 className="text-orange-500 mb-6 tracking-widest">PYTHON: ПАРСИНГ + ИНТЕГРАЦИИ </h2>
                    <h2 className="text-4xl font-black mb-4">
                        От сырых данных до готовых отчётов
                    </h2>
                    <p className="text-gray-300/80 mb-8">
                        Программирую сбор информации, связываю сервисы, автоматизирую отчётность. Выгрузка куда угодно: Excel, Google Таблицы, CSV, SQL.
                    </p>
                    <div>
                        <div className="grid grid-rows-2 grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-gray-700/40 p-3">
                                <h2 className="font-bold mb-2">Обработка файлов</h2>
                                <p className="text-gray-300/80">Excel, PDF, Word, изображения, извлечение текста, конвертация, объединение и разбор любых форматов.</p>
                            </div>
                            <div className="bg-white/5 border border-gray-700/40 p-3">
                                <h2 className="font-bold mb-2">Интеграция с API</h2>
                                <p className="text-gray-300/80">REST, SOAP, GraphQL, авторизация, лимиты, ретраи, логирование, подключение к любым внешним сервисам.</p>
                            </div>
                            <div className="bg-white/5 border border-gray-700/40 p-3">
                                <h2 className="font-bold mb-2">Мониторинг и оповещения</h2>
                                <p className="text-gray-300/80">Отслеживание изменений на сайтах, проверка доступности, отправка уведомлений в Telegram, email, Slack.</p>
                            </div>
                            <div className="bg-white/5 border border-gray-700/40 p-3">
                                <h2 className="font-bold mb-2">Базы данных и SQL</h2>
                                <p className="text-gray-300/80">PostgreSQL, MySQL, SQLite, сложные запросы, миграции, бэкапы, соединение парсеров напрямую с БД.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}