import { Cpu, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl border border-heroAccent/40 bg-heroAccent/10 flex items-center justify-center">
            <Cpu className="text-heroAccent" size={22} />
          </div>

          <span className="text-white font-semibold text-xl">
            Michael Okoyenta
          </span>
        </Link>
        {/* <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          GL<span className="text-primary">.</span>
        </a> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navItems.map((navItem, index) => (
              <a
                key={index}
                href={navItem.link}
                target={navItem?.target}
                rel={navItem?.rel}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="mailto:michaelonyedika32@gmail.com"
            target="_blank"
            className="hidden md:inline-block px-6 py-3 rounded-xl border border-heroAccent text-white text-sm backdrop-blur-md hover:border-heroAccent/40 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden glass-strong-2 mt-2 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((navItem, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={navItem.link}
                  target={navItem?.target}
                  rel={navItem?.rel}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {navItem.name}
                </motion.a>
              ))}

              <motion.a
                variants={itemVariants}
                href="mailto:michaelonyedika32@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block px-6 py-3 rounded-xl border border-heroAccent text-white text-sm text-center backdrop-blur-md hover:border-heroAccent/40 transition"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
