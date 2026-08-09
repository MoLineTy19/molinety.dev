import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "MoLineTy · Fullstack Developer",
        template: "%s · MoLineTy",
    },
    description:
        "Fullstack-разработчик. Бэкенд на Python и Go, фронтенд на React/Next.js. 4 года в коммерческой разработке. Проекты на GitHub.",
    keywords: ["fullstack", "backend", "frontend", "разработчик", "Python", "Go", "React", "Next.js", "портфолио"],
    authors: [{ name: "MoLineTy" }],
    creator: "MoLineTy",
    openGraph: {
        title: "MoLineTy · Fullstack Developer",
        description: "Бэкенд на Python и Go, фронтенд на React/Next.js. 4 года в коммерческой разработке.",
        type: "website",
        locale: "ru_RU",
    },
    twitter: {
        card: "summary_large_image",
        title: "MoLineTy · Fullstack Developer",
        description: "Бэкенд на Python и Go, фронтенд на React/Next.js.",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}
