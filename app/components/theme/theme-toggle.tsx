"use client"

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button
                type="button"
                aria-label="Переключить тему"
                className="flex h-10 w-10 items-center justify-center text-secondary transition-colors hover:text-accent"
            >
                <span className="h-4.5 w-4.5" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
            className="flex h-10 w-10 items-center justify-center text-secondary transition-colors hover:text-accent"
        >
            {mounted ? (
                isDark ? (
                    <Sun size={18} />
                ) : (
                    <Moon size={18} />
                )
            ) : (
                <span className="h-4.5 w-4.5" />
            )}
        </button>
    );
}