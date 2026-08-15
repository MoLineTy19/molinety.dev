import type {Metadata} from "next";
import Link from "next/link";
import {ArrowLeft, ArrowUpRight} from "lucide-react";
import { TopNav } from "@/app/components/nav/top-nav";
import { Footer } from "@/app/components/footer/footer";
import { projects } from "@/app/components/projects/projects-data";
import { WorksList } from "@/app/components/works/works-list";

export const metadata: Metadata = {
    title: "Работы",
    description:
        "Каталог проектов MoLineTy: бэкенд-движки на Go, десктоп-инструменты на Python, автоматизация и фронтенд на Next.js. Открытый исходный код.",
    openGraph: {
        title: "Работы · MoLineTy",
        description: "Бэкенд-движки, десктоп-инструменты и автоматизация с открытым исходным кодом.",
    },
};

function pluralProjects(n: number) {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return "проект";
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "проекта";
    return "проектов";
}

export default function WorksPage() {
    return (
        <>
            <TopNav />
            <main className="flex-1 pt-16">
                <header className="mx-auto w-full max-w-5xl px-6 pb-10 pt-16 sm:px-8 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted transition-colors hover:text-accent"
                    >
                        <ArrowLeft size={14} />
                        molinety.ru/works
                    </Link>

                    <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Работы
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
                        Каталог проектов: бэкенд-движки, десктоп-инструменты и автоматизация.
                        Каждый доведён до релиза, исходники открыты.
                    </p>

                    <p className="mt-4 font-mono text-xs tracking-wider text-muted">
                        {projects.length} {pluralProjects(projects.length)}
                    </p>
                </header>

                <WorksList projects={projects} />

                <section className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-8 lg:px-8">
                    <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-border-light bg-surface-alt p-8 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                                Похожая задача?
                            </h2>
                            <p className="mt-1 text-sm text-secondary">
                                Соберу бэкенд, напишу инструмент или автоматизирую рутину. Обсудим детали.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dim active:translate-y-px"
                        >
                            Написать мне
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
