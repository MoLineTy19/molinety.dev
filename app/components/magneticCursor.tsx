"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

/**
 * Signature-момент: кастомный «magnetic» курсор.
 *
 * Поведение:
 *  - маленький оранжевый шарик плавно следует за курсором (spring)
 *  - при наведении на элементы с [data-magnetic] — растёт и слегка «примагничивается»
 *  - АКТИВЕН ТОЛЬКО при (pointer: fine) — на тач-устройствах не запускается,
 *    чтобы не ломать iOS/Android
 *  - уважает prefers-reduced-motion: при включённой настройке компонент не рендерится
 *
 * Использование: добавь data-magnetic на любые кнопки/ссылки, чтобы курсор реагировал.
 * Нативный курсор НЕ скрываем (сохраняем доступность для тач-скринов и точность).
 */
export default function MagneticCursor() {
    const [enabled, setEnabled] = useState(false)
    const [hovering, setHovering] = useState(false)

    const x = useMotionValue(-100)
    const y = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
    const cx = useSpring(x, springConfig)
    const cy = useSpring(y, springConfig)

    useEffect(() => {
        // Не запускаем на тач-устройствах и при запросе на уменьшение движения.
        const finePointer = window.matchMedia("(pointer: fine)").matches
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (!finePointer || reducedMotion) return

        setEnabled(true)

        const move = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)

            // Проверяем, наведён ли курсор на «магнитный» элемент
            const target = e.target as HTMLElement | null
            setHovering(Boolean(target?.closest("[data-magnetic]")))
        }

        window.addEventListener("mousemove", move, { passive: true })
        return () => window.removeEventListener("mousemove", move)
    }, [x, y])

    if (!enabled) return null

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
            style={{ x: cx, y: cy }}
        >
            <motion.div
                className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500"
                animate={{
                    width: hovering ? 48 : 14,
                    height: hovering ? 48 : 14,
                    opacity: hovering ? 0.9 : 0.6,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
        </motion.div>
    )
}
