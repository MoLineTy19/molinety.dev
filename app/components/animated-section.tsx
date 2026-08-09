"use client"

import {ReactNode} from "react";
import {useReducedMotion} from "framer-motion";
import {motion} from "motion/react";

type AnimatedSectionProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
    as?: "div" | "section" | "li" | "article";
}


/**
 * Обёртка для scroll-reveal: элемент появляется снизу с fade-in,
 * когда входит во вьюпорт.
 */
export function AnimatedSection({ children, delay = 0, className, as = "div"}: AnimatedSectionProps) {
    const reduced = useReducedMotion();

    const MotionTag = motion[as];

    if (reduced) {
        return <MotionTag className={className}>{children}</MotionTag>
    }

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </MotionTag>
    )
}