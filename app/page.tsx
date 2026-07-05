// app/page.tsx
"use client";

import { useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero-2";
// import Grid from "@/components/Grid";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import PageAtmosphere from "@/components/PageAtmosphere";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Navbar } from "@/components/NavbarRay";

const Home = () => {
  // useEffect(() => {
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      {/* <FloatingNav navItems={navItems} /> */}
      <Navbar />
      <Hero />

      <main className="relative bg-[#040404] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <PageAtmosphere />

        <div className="relative z-10 max-w-7xl w-full">
          <About />
          {/* <Grid /> */}
          <RecentProjects />
          <Clients />
          <Experience />
          {/* <Approach /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
