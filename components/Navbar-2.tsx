"use client";

import Link from "next/link";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { HeroLink } from "./HeroLink";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        <Link href="/#" className="flex items-center gap-3">
          <div
            className="
              h-12
              w-12
              rounded-xl
              border
              border-heroAccent/40
              bg-heroAccent/10
              flex
              items-center
              justify-center
              shadow-[0_0_40px_rgba(168,85,247,.45)]
            "
          >
            <Cpu className="text-heroAccent" size={22} />
          </div>

          <span className="text-white font-semibold text-xl">
            Michael Okoyenta
          </span>
        </Link>

        <nav className="hidden lg:flex gap-10 text-gray-300">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="
                hover:text-heroAccent
                transition
              "
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* <HeroLink
          variant="glass"
          className="border-heroAccent"
          href="/portfolio"
        >
          Hire Me
        </HeroLink> */}

        <button
          className="hidden md:inline-block
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-heroAccent
                    text-white
                    text-sm
                    backdrop-blur-md
                    hover:border-heroAccent/40
                    transition
                  "
        >
          Hire Me
        </button>

        {/* <button
          className="
            px-6
            py-3
            rounded-full
            border
            border-heroAccent
            text-white
            transition
            hover:bg-heroAccent
            hover:shadow-[0_0_30px_rgba(168,85,247,.7)]
          "
        >
          Hire Me
        </button> */}
      </div>
    </motion.header>
  );
}
