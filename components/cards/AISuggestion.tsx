import { Sparkles, ArrowRight } from "lucide-react";

import GlassCard from "./GlassCard";

export default function AISuggestion() {
  return (
    <GlassCard className="floating-card p-4 w-80">
      <div className="flex justify-between">
        <div className="flex gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-heroAccent/20 flex items-center justify-center shrink-0">
            <Sparkles className="text-heroAccent" size={16} />
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">AI Suggestion</h4>

            <p className="text-gray-400 text-xs">Smart Portfolio Analysis</p>
          </div>
        </div>

        <ArrowRight className="text-heroAccent" size={16} />
      </div>

      <div className="h-1.5 rounded-full bg-white/10 mt-4 overflow-hidden">
        <div
          className="
                    h-full
                    w-3/4
                    rounded-full
                    bg-gradient-to-r
                    from-heroAccent
                    to-fuchsia-500
                "
        />
      </div>
    </GlassCard>
  );
}
