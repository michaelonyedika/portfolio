import GlassCard from "./GlassCard";

export default function ActivityCard() {
  return (
    <GlassCard className="floating-card p-4 w-80">
      <h4 className="text-white font-semibold text-sm">Active Projects</h4>

      <div className="space-y-2.5 mt-3">
        {[
          "Customer Support Agent",
          "Ecommerce dashboard",
          "Crowdsourcing platform",
        ].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">{item}</span>

            <div
              className="
              h-1.5
              w-1.5
              rounded-full
              bg-heroAccent
              animate-pulse
            "
            />
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
