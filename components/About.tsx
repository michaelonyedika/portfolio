import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import Particles from "./Particles";
import BackgroundGlow from "./BackgroundGlow";
import { companies } from "@/data";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Coded design",
    description: "Providing design that can be converted to code.",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Optimizing within time duration.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life by design.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* <Particles /> */}
      {/* <BackgroundGlow /> */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-heroAccent text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* "Building scalable AI-powered and full-stack applications." */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-heroAccent">
              Building AI-powered
              <span className="font-serif italic font-normal text-white">
                {" "}
                and full-stack applications.
              </span>
            </h2>

            <div className="space-y-4 text-purpleForeground animate-fade-in animation-delay-200">
              <p>
                I'm an AI full-Stack Software Engineer with 3+ years of
                experience building scalable web applications using React.js,
                Next.js, Express.js, FastAPI, and Flask. Skilled in developing
                responsive user interfaces, designing RESTful APIs, integrating
                payment systems, and managing MySQL and PostgreSQL databases.
              </p>
              <p>
                Experienced in delivering fintech, SaaS, e-commerce, and
                analytics solutions in collaborative agile environments.
              </p>
            </div>

            <div className="glassAbout rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build intelligent, scalable software that
                solves real-world problems, and delivers exceptional user
                experiences through AI and modern engineering."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-heroAccent/10 flex items-center justify-center mb-4 hover:bg-heroAccent/20">
                  <item.icon className="w-6 h-6 text-heroAccent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-purpleForeground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-16">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
              />
              {/* <img
                        src={company.nameImg}
                        alt={company.name}
                        width={company.id === 4 || company.id === 5 ? 100 : 150}
                        className="md:w-24 w-20"
                      /> */}
              {/* lg:text-2xl md:text-xl text-base */}
              <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl ">
                {company.name}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
