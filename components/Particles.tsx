"use client";

import { motion } from "framer-motion";

export default function Particles({ count = 40 }: { count?: number }) {
  const particles = [...Array(count)];

  return (
    <>
      {particles.map((_, i) => (
        <motion.span
          key={i}
          suppressHydrationWarning
          className="absolute rounded-full bg-heroAccent"
          style={{
            width: Math.random() * 4 + 2,

            height: Math.random() * 4 + 2,

            left: `${Math.random() * 100}%`,

            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],

            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,

            duration: 4 + Math.random() * 6,

            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
}
