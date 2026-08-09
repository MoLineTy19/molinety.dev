import { Mail, Send, ShoppingBag } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/github-icon";

/**
 * Минималистичный подвал.
 * Слева - копирайт с авто-годом (не хардкод «2025»).
 * Справа - соц-иконки (с aria-label для скринридеров).
 */
export function Footer() {
    return (
        <footer className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 border-t border-border-light px-6 py-8 text-sm text-muted sm:flex-row sm:px-8 lg:px-12">
            <p>
                &copy; {new Date().getFullYear()} MoLineTy · Built with curiosity and caffeine
            </p>
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/MoLineTy19"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition-colors hover:text-accent"
                >
                    <GithubIcon size={16} />
                </a>
                <a
                    href="https://t.me/im_so_good"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="transition-colors hover:text-accent"
                >
                    <Send size={16} />
                </a>
                <a
                    href="mailto:drcomprf@gmail.com"
                    aria-label="Email"
                    className="transition-colors hover:text-accent"
                >
                    <Mail size={16} />
                </a>
                <a
                    href="https://kwork.ru/user/molinety"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kwork"
                    className="transition-colors hover:text-accent"
                >
                    <ShoppingBag size={16} />
                </a>
            </div>
        </footer>
    );
}
