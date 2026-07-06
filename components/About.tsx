import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "./Particles";
import { companies } from "@/data";
import { fadeInUp, fadeInUpScale, staggerContainer } from "./ui/motionVariants";

const highlights = [
  {
    icon: Code2,
    title: "AI Engineering",
    description:
      "Developing intelligent applications powered by LLMs, AI agents, automation, and modern machine learning technologies.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description:
      "Designing secure backend systems and cloud-native infrastructure built for performance, reliability, and growth.",
  },
  {
    icon: Users,
    title: "Collaborative Development",
    description:
      "Partnering with startups and teams to transform ideas into polished, production-ready software through agile development.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Exploring emerging AI technologies, modern frameworks, and engineering best practices to build future-ready products.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden lg:scroll-mt-20" id="about">
      <Particles />
      {/* <BackgroundGlow /> */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <span className="text-heroAccent text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>

            {/* "Building scalable AI-powered and full-stack applications." */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight text-heroAccent"
            >
              Building AI-Powered
              <span className="font-serif italic font-normal text-white">
                {" "}
                and Modern Full-Stack Applications.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-purpleForeground"
            >
              <p>
                I&apos;m an AI Full-Stack Engineer passionate about building
                intelligent, scalable, and high-performance digital products. I
                combine modern web technologies with artificial intelligence to
                create seamless user experiences and robust backend systems.
              </p>
              <p>
                From AI-powered SaaS platforms and automation tools to
                cloud-native applications, I transform complex ideas into
                secure, scalable solutions that help businesses innovate and
                grow.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glassAbout rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                &quot;Building intelligent software that empowers people, solves
                real-world challenges, and turns ambitious ideas into
                exceptional digital experiences.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Hilights */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpScale}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-heroAccent/10 flex items-center justify-center mb-4 hover:bg-heroAccent/20">
                  <item.icon className="w-6 h-6 text-heroAccent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-purpleForeground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-20 lg:scroll-mt-32"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        id="ai-stack"
      >
        {companies.map((company) => (
          <motion.div
            key={company.id}
            variants={fadeInUp}
            className="flex md:max-w-60 max-w-32 gap-2"
          >
            <img src={company.img} alt={company.name} className="md:w-10 w-5" />
            <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl ">
              {company.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
