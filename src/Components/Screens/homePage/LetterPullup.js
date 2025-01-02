"use client";

import { motion } from "framer-motion";

import { cn } from "../../../lib/utils";

export function LetterPullup({
    className,
    words,
    delay,
}) {
    const letters = words.split("");

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * (delay ? delay : 0.1),
            },
        }),
    };

    return (
        <div className="Letterpullup">
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        "inline-block text-center font-bold leading-4 text-black drop-shadow-sm",
                        className,
                    )}
                >
                    {letter === " " ? <span >&nbsp;</span> : letter}
                </motion.span>
            ))}
        </div>
    );
}
