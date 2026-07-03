"use client";
import Image from "next/image";
import Navbar from "./Navbar-2";
import GlowButton from "./GlowButton";
import BackgroundGlow from "./BackgroundGlow";
import StatsCard from "./cards/StatsCard";
import AISuggestion from "./cards/AISuggestion";
import ActivityCard from "./cards/ActivityCard";

import { motion } from "framer-motion";
import { Code2, Zap, Bot } from "lucide-react";

import MouseGlow from "./MouseGlow";

import Particles from "./Particles";
import { HeroLink } from "./HeroLink";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable, tested, scalable.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Ships features without debt.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "Smart features, baked in.",
  },
];

function DeveloperImage({ className }: { className?: string }) {
  return (
    <motion.div
      className={`relative shrink-0 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/fullstack-img.png"
        alt="Developer"
        fill
        priority
        className="object-cover object-bottom drop-shadow-[0_0_90px_rgba(168,85,247,.5)]"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[650px] lg:h-[650px] bg-[#040404] overflow-hidden">
      <MouseGlow />

      <Particles />
      <BackgroundGlow />

      {/* <Navbar /> */}

      {/* DESKTOP: bold developer image anchored to the bottom, text left, cards stacked right */}
      <div className="hidden lg:block relative z-10 h-full">
        {/* Developer - bold, grounded at the bottom of the hero, growing upward */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 translate-y-[40px] w-[672px] xl:w-[772px] z-0">
          <DeveloperImage className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl h-full px-8 pt-28 pb-8">
          <div className="relative h-full">
            {/* LEFT: copy */}
            <motion.div
              className="absolute z-20 left-0 top-0 h-full w-[540px] flex flex-col justify-center gap-4"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="flex items-center gap-2 uppercase tracking-[2px] text-heroAccent text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-heroAccent" />
                Full Stack Developer
              </span>

              <h1 className=" text-6xl font-bold leading-tight text-white">
                Crafting
                <span className="block text-heroAccent">Intelligent</span>
                <span className="hero-title">Digital Products</span>
              </h1>

              <p className="text-gray-400 text-sm leading-relaxed">
                Building modern web applications, scalable backend systems,
                AI-powered experiences and premium digital products with
                performance in mind.
              </p>

              <div className="flex gap-3">
                {/* <GlowButton>View Projects</GlowButton> */}
                {/* px-6 py-3 rounded-full border border-heroAccent text-whitetransition hover:bg-heroAccent hover:shadow-[0_0_30px_rgba(168,85,247,.7)]" */}
                {/* <button className="px-6 py-3 rounded-full  text-whitetransition bg-heroAccent shadow-[0_0_30px_rgba(168,85,247,.7)] hover:bg-transparent hover:text-heroAccent border border-heroAccent transition hover:shadow-[0_0_30px_rgba(168,85,247,.7)]">
                  View Projects
                </button> */}

                {/* <button className="px-6 py-3 rounded-full text-white bg-heroAccent shadow-[0_0_30px_rgba(168,85,247,.7)] hover:bg-none hover:text-heroAccent border border-heroAccent transition hover:shadow-[0_0_30px_rgba(168,85,247,.7)]">
                  View Projects
                </button>
                <button className="px-6 py-3 rounded-full text-heroAccent border border-heroAccent  hover:text-white transition hover:bg-heroAccent hover:shadow-[0_0_30px_rgba(168,85,247,.7)]">
                  View Projects
                </button> */}

                {/* <button
                  className="
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-heroAccent/40
                    text-white
                    text-sm
                    backdrop-blur-md
                    hover:border-heroAccent
                    transition
                  "
                >
                  Download CV
                </button> */}

                {/* 1. heroAccentBtn Style */}
                <HeroLink variant="accent" href="/projects">
                  View Projects
                </HeroLink>

                {/* 2. heroAccentBtnHover Style */}
                {/* <HeroLink variant="accentHover" href="/portfolio">
                  View Projects
                </HeroLink> */}

                {/* 3. heroAccentBtnGlass Style */}
                <HeroLink variant="glass" href="/resume.pdf" target="_blank">
                  Download CV
                </HeroLink>
              </div>

              <div className="flex gap-5 mt-2">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-1.5 max-w-[100px]"
                  >
                    <Icon className="text-heroAccent" size={18} />
                    <span className="text-white text-xs font-semibold">
                      {title}
                    </span>
                    <span className="text-gray-500 text-[11px] leading-tight">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: stacked cards */}
            <div className="absolute z-20 right-0 top-0 h-full flex flex-col justify-center items-end gap-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <AISuggestion />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ActivityCard />
              </motion.div>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <StatsCard
                  title="Completed Projects"
                  value="28+"
                  change="+18%"
                />
                <StatsCard
                  title="Client Satisfaction"
                  value="99%"
                  change="+6%"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET: simplified, stacked, centered */}
      <div className="lg:hidden relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-40 pb-0 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="flex items-center gap-2 uppercase tracking-[4px] text-heroAccent text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-heroAccent" />
            Full Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Crafting
            <span className="block text-heroAccent">Intelligent</span>
            <span className="hero-title">Digital Products</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            Building modern web applications, scalable backend systems,
            AI-powered experiences and premium digital products with performance
            in mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* 1. heroAccentBtn Style */}
            <HeroLink variant="accent" href="/projects">
              View Projects
            </HeroLink>

            {/* 3. heroAccentBtnGlass Style */}
            <HeroLink variant="glass" href="/resume.pdf" target="_blank">
              Download CV
            </HeroLink>
            {/* <GlowButton>View Projects</GlowButton>

            <button
              className="
                px-6
                py-3
                rounded-xl
                border
                border-purple-500/40
                text-white
                text-sm
                backdrop-blur-md
                hover:border-purple-500
                transition
              "
            >
              Download CV
            </button> */}
          </div>
        </motion.div>

        <DeveloperImage className=" relative h-[300px] w-[480px] sm:h-[380px] sm:w-[600px]" />
      </div>
    </section>
  );
}
