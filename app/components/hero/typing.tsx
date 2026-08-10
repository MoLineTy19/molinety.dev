"use client"

import {useReducedMotion} from "framer-motion";
import {useEffect, useReducer} from "react";

type TypingProps = {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDelay?: number;
}

type State = {
    text: string;
    wordIdx: number;
    deleting: boolean;
};

type Action =
    | { type: "TYPE"; char: string }
    | { type: "DELETE" }
    | { type: "START_DELETING" }
    | { type: "NEXT_WORD"; count: number };

const initialState: State = {text: "", wordIdx: 0, deleting: false};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "TYPE":
            return {...state, text: action.char};
        case "DELETE":
            return {...state, text: state.text.slice(0, -1)};
        case "START_DELETING":
            return {...state, deleting: true};
        case "NEXT_WORD":
            return {
                ...state,
                deleting: false,
                text: "",
                wordIdx: (state.wordIdx + 1) % action.count,
            };
        default:
            return state;
    }
}

export default function Typing({words, typingSpeed = 70, deletingSpeed = 35, pauseDelay = 2000}: TypingProps) {
    const reduced = useReducedMotion();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (reduced) return;

        const current = words[state.wordIdx] ?? "";

        if (!state.deleting) {
            if (state.text.length < current.length) {
                // Набираем следующий символ
                const id = setTimeout(() => {
                    dispatch({type: "TYPE", char: current.slice(0, state.text.length + 1)});
                }, typingSpeed);
                return () => clearTimeout(id);
            }
            // Добор завершён -> пауза -> начать удаление
            const id = setTimeout(() => dispatch({type: "START_DELETING"}), pauseDelay);
            return () => clearTimeout(id);
        }

        // Режим удаления
        if (state.text.length > 0) {
            const id = setTimeout(() => dispatch({type: "DELETE"}), deletingSpeed);
            return () => clearTimeout(id);
        }

        // Слово полностью удалено -> следующее (короткая пауза на пустом)
        const id = setTimeout(() => dispatch({type: "NEXT_WORD", count: words.length}), typingSpeed);
        return () => clearTimeout(id);
    }, [state.text, state.deleting, state.wordIdx, words, reduced, typingSpeed, deletingSpeed, pauseDelay]);

    // Reduced motion: показываем первое слово как производное значение, без state
    const text = reduced ? (words[0] ?? "") : state.text;

    return (
        <span aria-hidden={false}>
            {text}
            {!reduced && <span className={"animate-blink ml-0.5 inline-block"}/>}
        </span>
    )
}
