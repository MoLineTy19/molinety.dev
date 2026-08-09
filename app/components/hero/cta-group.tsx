import Link from "next/link";
import { Mail, Send, ShoppingBag } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/github-icon";

/**
 * Четыре CTA в hero.
 *   Связаться: primary (bg-accent), ведёт на секцию контактов.
 *   GitHub, Telegram, Kwork: ghost (border), внешние, в новой вкладке.
 *
 * active:translate-y-px даёт pressed-фидбек.
 * target/rel обязательны для внешних ссылок.
 */
export function CTAGroup() {
    return (
        <div className="flex flex-wrap gap-4">
            <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim active:translate-y-px"
            >
                <Mail size={16} />
                Связаться
            </Link>
            <a
                href="https://github.com/MoLineTy19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-secondary transition-colors hover:border-accent/50 hover:text-accent active:translate-y-px"
            >
                <GithubIcon size={16} />
                GitHub
            </a>
            <a
                href="https://t.me/im_so_good"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-secondary transition-colors hover:border-accent/50 hover:text-accent active:translate-y-px"
            >
                <Send size={16} />
                Telegram
            </a>
            <a
                href="https://kwork.ru/user/molinety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-secondary transition-colors hover:border-accent/50 hover:text-accent active:translate-y-px"
            >
                <ShoppingBag size={16} />
                Kwork
            </a>
        </div>
    );
}
