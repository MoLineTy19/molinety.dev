"use client"

import {useEffect, useRef} from "react";
import {useReducedMotion} from "framer-motion";

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")
        if (!ctx) return;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const COUNT = isMobile ? 60 : 120;
        const LINK_DIST = isMobile ? 90 : 120;

        type P = { x: number; y: number; vx: number; vy: number };
        let particles: P[] = [];
        let rafId = 0;
        let frame = 0;
        let inView = true;
        let lines: { a: P; b: P }[] = [];
        const mouse = { x: -9999, y: -9999 };

        const accent = getComputedStyle(document.documentElement)
            .getPropertyValue("--accent")
            .trim() || "#f97316";

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    function resize() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx!.setTransform(1, 0, 0, 1, 0, 0);
        ctx!.scale(dpr, dpr);
        // Частицы создаём только при первом рендере. На ресайзе не пересоздаём:
        // на мобиле при скролле адресная строка прячется/появляется, dvh меняется,
        // resize стреляет постоянно - регенерация всех частиц выглядит как «разбег».
        if (particles.length === 0) initParticles(rect.width, rect.height);
    }

        function initParticles(w: number, h: number) {
            particles = Array.from({ length: COUNT }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
            }));
        }

        function draw() {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            ctx!.clearRect(0, 0, rect.width, rect.height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > rect.width) p.vx *= -1;
                if (p.y < 0 || p.y > rect.height) p.vy *= -1;
            }

            if (frame % 3 === 0) {
                lines = [];
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        if (dx * dx + dy * dy < LINK_DIST * LINK_DIST) {
                            lines.push({ a: particles[i], b: particles[j] });
                        }
                    }
                }
            }

            ctx!.lineWidth = 1;
            for (const { a, b } of lines) {
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.hypot(dx, dy);
                const alpha = 1 - dist / LINK_DIST;
                ctx!.strokeStyle = `rgba(249, 115, 22, ${alpha * 0.12})`;
                ctx!.beginPath();
                ctx!.moveTo(a.x, a.y);
                ctx!.lineTo(b.x, b.y);
                ctx!.stroke();
            }

            ctx!.fillStyle = accent;
            for (const p of particles) {
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                ctx!.fill();
            }

            frame++;
        }

        function animate() {
            if (inView) draw();
            rafId = requestAnimationFrame(animate);
        }

        resize();
        animate();

        const io = new IntersectionObserver(
            ([entry]) => { inView = entry.isIntersecting; },
            { threshold: 0 }
        );
        io.observe(canvas);

        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 150);
        };
        const onMouse = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouse);

        return () => {
            cancelAnimationFrame(rafId);
            io.disconnect();
            clearTimeout(resizeTimer);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouse);
        };
    }, [reduced]);

    if (reduced) return null;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        />
    );
}