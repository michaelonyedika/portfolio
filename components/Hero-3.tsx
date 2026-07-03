import Image from "next/image";
import { Mail, MapPin, Star } from "lucide-react";

import { projects, socialMedia, testimonials } from "@/data";

const latestProject = projects[2];
const impactStats = [testimonials[0], testimonials[3]];

export default function Hero() {
  return (
    <section className="relative">
      {/* Background glow + grid */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-purple-600/30 blur-[120px] sm:blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-grid-small-white/[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen px-5 sm:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20 flex flex-col lg:flex-row items-center">
        {/* LEFT */}

        <div className="w-full lg:w-1/2 z-20 text-center lg:text-left">
          <p className="flex items-center justify-center lg:justify-start gap-2 uppercase tracking-[5px] text-purple-400 text-xs sm:text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(168,85,247,.8)]" />
            AI Full-Stack Engineer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Building Digital Products That{" "}
            <span className="text-purple-500">Feel Like The Future.</span>
          </h1>

          <p className="text-gray-400 mt-6 sm:mt-8 max-w-lg mx-auto lg:mx-0 text-base sm:text-xl leading-relaxed">
            I build AI-powered SaaS products, scalable backend systems, and
            modern web experiences that combine beautiful UI with powerful
            engineering underneath.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_50px_rgba(168,85,247,.4)] transition"
            >
              Hire Me →
            </a>

            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-purple-500/30 text-white backdrop-blur-xl hover:bg-white/5 transition"
            >
              View Projects
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 sm:mt-12">
            <span className="text-gray-500 text-sm uppercase tracking-[3px]">
              Follow Me
            </span>

            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-purple-600/20 transition"
              >
                <img src={info.img} alt="" width={18} height={18} />
              </a>
            ))}

            <a
              href="mailto:michaelonyedika32@gmail.com"
              className="w-10 h-10 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-purple-600/20 transition"
            >
              <Mail className="w-[18px] h-[18px] text-white" />
            </a>
          </div>
        </div>

        {/* CENTER IMAGE */}

        <div className="relative flex justify-center w-full lg:w-auto mt-10 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0">
          <div className="hidden lg:block absolute bottom-10 w-[520px] h-[520px] rounded-full border border-purple-500/20" />
          <div className="hidden lg:block absolute bottom-10 w-[420px] h-[420px] rounded-full border border-purple-500/30" />

          <Image
            src="/hero-3.png"
            alt="Michael Okoyenta"
            width={560}
            height={760}
            priority
            className="relative object-contain w-56 sm:w-72 lg:w-[560px] h-auto"
          />
        </div>

        {/* RIGHT */}

        <div className="flex flex-col w-full sm:max-w-md mx-auto lg:mx-0 lg:ml-auto lg:w-[320px] gap-6 lg:gap-8 mt-10 lg:mt-0">
          <div className="glass p-7">
            <p className="text-gray-400 text-xs uppercase tracking-[3px]">
              Latest Project
            </p>

            <h3 className="text-white text-lg font-semibold mt-3">
              {latestProject.title.split(" - ")[0]}
            </h3>

            <p className="text-gray-400 mt-1">
              {latestProject.title.split(" - ")[1]}
            </p>

            <div className="flex mt-6">
              {latestProject.iconLists.slice(0, 4).map((icon, index) => (
                <div
                  key={icon}
                  className="w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center"
                  style={{ marginLeft: index === 0 ? 0 : -10 }}
                >
                  <img src={icon} alt="" className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-7">
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xs uppercase tracking-[3px]">
                Availability
              </p>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,.8)]" />
            </div>

            <h3 className="text-white text-lg font-semibold mt-3">
              Open for Freelance
            </h3>

            <div className="flex gap-1 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-purple-400 fill-current"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-400 mt-4">
              <MapPin className="w-4 h-4" />
              Worldwide
            </div>
          </div>

          <div className="glass p-6 grid grid-cols-2 gap-4">
            {impactStats.map((stat) => (
              <div
                key={stat.title}
                className="first:border-r first:border-white/10 first:pr-4"
              >
                <h2 className="text-3xl text-white font-bold">{stat.name}</h2>
                <p className="text-gray-400 mt-2 text-sm leading-snug">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
