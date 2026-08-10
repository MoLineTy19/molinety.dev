"use client"

import {useEffect, useState} from "react";
import Link from "next/link";

const NAV_ITEMS = [
    { href: "#about", label: "Обо мне"},
    { href: "#skills", label: "Стек"},
    { href: "#projects", label: "Проекты"},
    { href: "#contact", label: "Контакты"}
]

export function TopNav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Тень/бордер при скролле
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Блокировка body scroll + закрытие по Escape, пока меню открыто
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            const onKey = (e: KeyboardEvent) => {
                if (e.key === "Escape") setOpen(false);
            }
            window.addEventListener("keydown", onKey);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", onKey);
            };
        }
        document.body.style.overflow = "";
    }, [open]);

    return (
        <>
            <nav
                aria-label="Основная навигация"
                className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-5 backdrop-blur-xl transition-colors sm:px-8 lg:px-12 ${
                    scrolled
                        ? "border-b border-border-light bg-background/90"
                        : "border-b border-transparent bg-background/70"
                }`}
            >
                <Link href={"#home"} className={"font-heading text-xl font-bold tracking-tight"}>
                    Mo<span className={"text-accent"}>Line</span>Ty
                </Link>

                {/* Desktop */}
                <ul className={"hidden items-center gap-8 md:flex"}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={"relative text-sm font-medium text-secondary transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger — mobile only */}
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Закрыть меню" : "Открыть меню"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="relative flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-accent md:hidden"
                >
                    <span className="relative block h-3 w-5">
                        <span className={`absolute left-0 h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${open ? "top-[5px] rotate-45" : "top-0"}`} />
                        <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-[5px] opacity-0" : "top-[5px]"}`} />
                        <span className={`absolute left-0 h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
                    </span>
                </button>
            </nav>

            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
                    open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
            >
                <ul className="flex flex-col px-6 py-4">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block border-b border-border-light py-4 font-heading text-2xl font-semibold text-secondary transition-colors hover:text-accent"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}