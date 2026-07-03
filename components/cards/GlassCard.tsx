interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-2xl
        bg-white/5
        border
        border-heroAccent/20
        rounded-3xl
        shadow-[0_0_50px_rgba(168,85,247,.15)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
