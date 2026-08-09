/**
 * Бейдж-теглайн вверху hero: «● Fullstack Developer».
 * Зелёная точка - пульсирует,
 * сигнализирует «доступен для заказа».
 */

export function Pill() {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-accent">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-500" />
            Fullstack Developer
        </span>
    );
}
