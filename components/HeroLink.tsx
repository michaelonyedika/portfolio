import React from "react";
import Link, { LinkProps } from "next/link";

// Extend Next.js LinkProps and add custom variant + className support
interface HeroLinkProps extends LinkProps {
  variant?: "accent" | "accentHover" | "glass";
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export const HeroLink: React.FC<HeroLinkProps> = ({
  variant = "accent",
  children,
  className = "",
  href,
  ...props
}) => {
  // Base classes that apply to all links (added inline-block for proper spacing)
  const baseClasses =
    "inline-block px-6 py-3 text-center transition duration-300 ease-in-out";

  // Variant-specific Tailwind classes
  const variantClasses = {
    // shadow-[0_0_30px_rgba(168,85,247,.7)]
    accent:
      "rounded-full text-white bg-heroAccent hover:bg-transparent hover:text-heroAccent border border-heroAccent hover:shadow-[0_0_30px_rgba(168,85,247,.7)]",
    accentHover:
      "rounded-full text-heroAccent border border-heroAccent hover:text-white hover:bg-heroAccent hover:shadow-[0_0_30px_rgba(168,85,247,.7)]",
    glass:
      "rounded-xl border border-heroAccent/40 text-white text-sm backdrop-blur-md hover:border-heroAccent",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};
