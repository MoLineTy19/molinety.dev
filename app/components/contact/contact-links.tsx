import { Mail, Send, ShoppingBag } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/github-icon";

/**
 * Четыре канала связи в карточке Contact.
 * Стиль - как у ghost-кнопок в hero, но центрированные.
 */
export function ContactLinks() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <a
                href="mailto:drcomprf@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-accent/50 hover:text-accent"
            >
                <Mail size={16} />
                drcomprf@gmail.com
            </a>
            <a
                href="https://t.me/im_so_good"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-accent/50 hover:text-accent"
            >
                <Send size={16} />
                Telegram
            </a>
            <a
                href="https://github.com/MoLineTy19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-accent/50 hover:text-accent"
            >
                <GithubIcon size={16} />
                GitHub
            </a>
            <a
                href="https://kwork.ru/user/molinety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-accent/50 hover:text-accent"
            >
                <ShoppingBag size={16} />
                Kwork
            </a>
        </div>
    );
}
