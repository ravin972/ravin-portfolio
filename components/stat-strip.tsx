import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

/** Hairline-divided metric strip. Data-driven — pass any Stat[]. */
export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="bg-[#0c0c0f] px-6 py-6">
          <dd
            className={cn(
              "font-display text-[34px] font-bold tracking-display",
              s.accent ? "text-violet" : "text-ink-8",
            )}
          >
            {s.value}
          </dd>
          <dt className="mt-1.5 font-body text-[13px] text-ink-6">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
