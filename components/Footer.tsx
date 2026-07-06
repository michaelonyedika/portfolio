import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { HeroLink } from "./HeroLink";
import { fadeInUp, staggerContainer } from "./ui/motionVariants";
import Particles from "./Particles";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden lg:scroll-mt-20"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0">
        <Particles />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <motion.div
        className="flex flex-col items-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={fadeInUp} className="heading lg:max-w-[45vw]">
          Let&apos;s Engineer <span className="text-heroAccent">The </span>
          Future Together.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-white-200 md:mt-10 my-5 text-center md:max-w-2xl leading-relaxed"
        >
          Whether you&apos;re launching an AI startup, modernizing an existing
          platform, or building a custom SaaS product, I&apos;m here to turn
          ambitious ideas into production-ready solutions.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <HeroLink
            variant="accent"
            href="mailto:michaelonyedika32@gmail.com"
            target="_blank"
          >
            Let&apos;s Talk →
          </HeroLink>
        </motion.div>
        {/* <button className="px-6 py-3 rounded-full text-white bg-heroAccent shadow-[0_0_30px_rgba(168,85,247,.7)] hover:bg-none hover:text-heroAccent border border-heroAccent transition hover:shadow-[0_0_30px_rgba(168,85,247,.7)]">
          View Projects
        </button> */}
        {/* <a href="mailto:michaelonyedika32@gmail.com" target="_blank">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
      </motion.div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Michael Okoyenta.
        </p>

        <motion.div
          className="flex items-center md:gap-3 gap-6"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {socialMedia.map((info) => (
            <motion.a
              key={info.id}
              variants={fadeInUp}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={info.link}
              target="_blank"
            >
              {/* I need to add my phone contact info */}
              <img src={info.img} alt="icons" width={20} height={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
