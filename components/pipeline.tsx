import { cn } from "@/lib/utils";

const connector =
  "h-0.5 min-w-[18px] flex-1 rounded-sm bg-[length:60px_100%] bg-no-repeat animate-flow";
const connectorStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  backgroundImage:
    "linear-gradient(90deg, transparent, rgba(124,92,255,0.95), transparent)",
};

/** The AVA ONE STT→LLM→TTS pipeline strip with a traveling violet signal. */
export function Pipeline({
  nodes,
}: {
  nodes: { label: string; sub: string; emphasis?: boolean }[];
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {nodes.map((n, i) => (
        <div key={n.label} className="contents">
          <div
            className={cn(
              "flex flex-none flex-col gap-[3px] rounded-[11px] border px-[13px] py-3",
              n.emphasis
                ? "animate-pulseNode border-violet/40 bg-violet-tint"
                : "border-border-strong bg-ink-1",
            )}
          >
            <span className="font-display text-[13px] font-semibold text-ink-8">
              {n.label}
            </span>
            <span
              className={cn(
                "font-mono text-[10px]",
                n.emphasis ? "text-violet-soft" : "text-ink-5",
              )}
            >
              {n.sub}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <div
              className={connector}
              style={{ ...connectorStyle, animationDelay: `${i * 0.3}s` }}
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}
