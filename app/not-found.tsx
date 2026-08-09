import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
            <div className="relative overflow-hidden">
                <h1 className="font-heading text-[clamp(5rem,20vw,12rem)] font-black leading-none text-accent">
                    404
                </h1>
            </div>
            <p className="mt-4 text-lg text-secondary">
                Такой страницы нет. Возможно, ссылка устарела.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim active:translate-y-px"
            >
                <ArrowLeft size={16} />
                На главную
            </Link>
        </main>
    );
}
