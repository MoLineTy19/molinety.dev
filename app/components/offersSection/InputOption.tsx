/**
 * Пункт списка возможностей тарифа. Раньше это был disabled <input type=checkbox>,
 * который всё равно попадал в tab-очерёдность и сбивал a11y. Заменили на
 * декоративный неинтерактивный span с галочкой.
 */
export default function InputOption({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-200">
            <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center border border-gray-400/50 bg-orange-500/10 text-orange-500">
                ✓
            </span>
            <span>{text}</span>
        </div>
    )
}
