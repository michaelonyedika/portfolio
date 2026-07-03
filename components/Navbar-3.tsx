import Link from "next/link";

const navLinks = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between gap-2">
        <Link href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(168,85,247,.5)]">
            M.
          </div>

          <div className="leading-tight min-w-0">
            <h1 className="text-white font-semibold text-sm sm:text-lg truncate">
              Michael Okoyenta
            </h1>
            <p className="hidden sm:block text-[11px] tracking-[2px] text-purple-400 uppercase">
              AI Full-Stack Engineer
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-full px-8 py-3 gap-8">
          {navLinks.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="shrink-0 rounded-full bg-purple-600 hover:bg-purple-500 px-4 sm:px-7 py-2.5 sm:py-3 text-white text-xs sm:text-sm shadow-[0_0_30px_rgba(168,85,247,.4)] transition"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
