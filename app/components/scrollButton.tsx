'use client';

import {useLenis} from "@/app/lenisProvider";

export const ScrollButton = ({ targetId, children }: { targetId: string; children: React.ReactNode }) => {
    const lenis = useLenis();

    const handleClick = () => {
        if (lenis) {
            lenis.scrollTo(`#${targetId}`, { offset: 0, duration: 1.2 });
        } else {
            // fallback на случай, если Lenis ещё не инициализирован
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <button onClick={handleClick} className="cursor-pointer">{children}</button>;
};