"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 scroll-mt-20">
      <h1 className="heading">
        Impact &<span className="text-heroAccent"> Achievements</span>
      </h1>
      {/* "Impact & Achievements" */}
      {/* "Kind words from satisfied clients" */}

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />

                <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl ">
                  {company.name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
