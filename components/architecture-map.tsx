import type { ArchLane } from "@/types";
import { cn } from "@/lib/utils";

const connectorStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  backgroundImage:
    "linear-gradient(90deg, transparent, rgba(124,92,255,0.95), transparent)",
};

/** Three-lane system map (Ingress → Core → AI pipeline). */
export function ArchitectureMap({ lanes }: { lanes: ArchLane[] }) {
  return (
    <div className="rounded-[18px] border border-border bg-gradient-to-b from-[#101015] to-[#0a0a0b] p-[26px]">
      <div className="flex flex-wrap items-stretch gap-0">
        {lanes.map((lane, li) => (
          <div key={lane.title} className="contents">
            <div className="flex min-w-[150px] flex-1 flex-col gap-[9px]">
              <span className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-5">
                {lane.title}
              </span>
              {lane.nodes.map((node) => (
                <div
                  key={node.label}
                  className={cn(
                    "rounded-[10px] border px-[13px] py-[11px] transition-colors",
                    node.emphasis
                      ? "border-violet/45 bg-violet-tint"
                      : "border-border-strong bg-ink-1 hover:border-violet/50",
                  )}
                >
                  <div className="font-display text-[13px] font-semibold text-ink-8">
                    {node.label}
                  </div>
                  {node.detail && (
                    <div className="mt-0.5 font-mono text-[10px] text-violet-soft">
                      {node.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {li < lanes.length - 1 && (
              <div className="flex min-w-[36px] items-center justify-center px-1" aria-hidden>
                <div
                  className="h-0.5 w-full rounded-sm bg-[length:40px_100%] bg-no-repeat animate-flow"
                  style={{ ...connectorStyle, animationDelay: `${li * 0.5}s` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
