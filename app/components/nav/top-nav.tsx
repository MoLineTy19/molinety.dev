"use client"

import {useEffect, useState} from "react";
import Link from "next/link";

const NAV_ITEMS = [
    { href: "#about", label: "Обо мне"},
    { href: "#skills", label: "Стек"},
    { href: "#projects", label: "Проекты"},
    { href: "#contats", label: "Контакты"}
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
                className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-5 backdrop-blur-xl transition-colors sm:px-8 lg:px-12 ${
                    scrolled
                        ? "border-b border-border-light bg-background/90"
                        : "border-b border-transparent bg-background/70"
                }`}
            >
                <Link href={"#home"} className={"font-heading text-xl font-bold tracking-tight"}>
                    Mo<span className={"text-accent"}>Line</span>Ty
                </Link>

                <ul className={"hidden items-center gap-8 md:flex"}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={"relative text-sm font-medium text-secondary transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"}>
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </>
    )
}