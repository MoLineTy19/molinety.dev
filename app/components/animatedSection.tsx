import { motion } from "framer-motion";
import React from "react";

export default function AnimatedSection({ children, delay = 0 }: { children?: React.ReactNode , delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // сработает, когда элемент за 100px до вьюпорта
            transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {children}
        </motion.div>
    )
}
