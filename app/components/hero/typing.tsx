"use client"

import {useReducedMotion} from "framer-motion";
import {useEffect, useRef, useState} from "react";

type TypingProps = {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDelay?: number;
}

export default function Typing({words, typingSpeed = 70, deletingSpeed = 35, pauseDelay = 2000}: TypingProps) {
    const reduced = useReducedMotion();
    const [text, setText] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        if (reduced) setText(words[0] ?? "");
    }, [reduced, words]);

    useEffect(() => {
        if (reduced) return;

        const current = words[wordIdx] ?? "";

        // Набираем
        if (!deleting && text.length < current.length) {
            timeoutRef.current = setTimeout(() => {
                setText(current.slice(0, text.length + 1));
            }, typingSpeed);
            return;
        }

        // Добор завершён -> пауза -> начать удаление
        if (!deleting && text.length === current.length) {
            timeoutRef.current = setTimeout(() => setDeleting(true), pauseDelay);
            return;
        }

        // Удаляем
        if (deleting && text.length > 0) {
            timeoutRef.current = setTimeout(() => {
                setText(current.slice(0, text.length - 1));
            }, deletingSpeed);
            return;
        }

        if (deleting && text.length === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
            return;
        }
    }, [text, deleting, wordIdx, words, reduced, typingSpeed, deletingSpeed, pauseDelay]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current)
    }, []);

    return (
        <span aria-hidden={false}>
            {text}
            {!reduced && <span className={"animate-blink ml-0.5 inline-"}/>}
        </span>
    )
}