import GlassCard from "./GlassCard";

interface Props {
  title: string;
  value: string;
  change: string;
}

export default function StatsCard({ title, value, change }: Props) {
  return (
    <GlassCard className="floating-card p-3 w-[150px]">
      <p className="text-gray-400 text-[11px] leading-tight">{title}</p>

      <h2 className="text-white text-xl font-bold mt-1.5">{value}</h2>

      <div className="flex items-center gap-1.5 mt-2">
        <div className="h-1.5 w-1.5 rounded-full bg-heroAccent" />

        <span className="text-heroAccent text-xs">{change}</span>
      </div>
    </GlassCard>
  );
}
