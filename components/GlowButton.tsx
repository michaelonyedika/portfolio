"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function GlowButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,

        boxShadow: "0px 0px 60px rgba(168,85,247,.9)",
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="

relative

overflow-hidden

rounded-xl

px-8

py-4

font-semibold

text-white

bg-gradient-to-r

from-purple-600

to-fuchsia-600

"
    >
      <span className="relative z-10">{children}</span>

      <div
        className="

absolute

inset-0

bg-gradient-to-r

from-white/20

to-transparent

opacity-0

hover:opacity-100

transition

"
      />
    </motion.button>
  );
}
