"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { fadeInUp } from "./ui/motionVariants";
import Particles from "./Particles";

const RecentProjects = () => {
  return (
    <div className="py-20 scroll-mt-20" id="projects">
      <Particles />
      <motion.h1
        className="heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Recent <span className="text-heroAccent">Projects</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, idx) => (
          <motion.div
            className={`lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]`}
            key={item.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (idx % 3) * 0.1 }}
            onClick={() =>
              item.link &&
              window.open(item.link, "_blank", "noopener,noreferrer")
            }
          >
            {/* <a href={item.link} target="_blank" rel="noopener noreferrer"> */}
            <PinContainer title={item.pinLink} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rotate-[0.6deg]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#d9c9f1",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.clickableText}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
            {/* </a> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
