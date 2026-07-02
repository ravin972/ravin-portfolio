import type { OpenSourceActivityData } from "@/types";
import { cn } from "@/lib/utils";

/** Intensity 0–4 → cell color. Mirrors the GitHub graph, in Ghost Violet. */
const LEVEL_CLASS = [
  "bg-white/[0.05]",
  "bg-violet/25",
  "bg-violet/45",
  "bg-violet/70",
  "bg-violet",
] as const;

const Cell = ({ level }: { level: number }) => (
  <span className={cn("h-[9px] w-[9px] rounded-[2px]", LEVEL_CLASS[level] ?? LEVEL_CLASS[0])} />
);

/**
 * Home "Open-source & activity" section: a representative contribution
 * heatmap + recent commits. Presentational and content-driven — data comes
 * from content/github.ts (static today, live via GitHub connect in PI-5).
 */
export function OpenSourceActivity({ activity }: { activity: OpenSourceActivityData }) {
  return (
    <div>
      <div className="mb-[26px] flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-[30px] font-semibold tracking-display text-ink-8">
          Open-source &amp; activity
        </h2>
        <span className="flex items-center gap-2 font-mono text-[11px] text-ink-5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#E0A33E]" aria-hidden />
          {activity.status} · {activity.handle}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="mb-5 font-display text-[15px] font-semibold text-ink-8">
            Contribution activity
          </h3>
          <div className="overflow-hidden">
            <div
              role="img"
              aria-label={`Representative GitHub contribution activity for ${activity.handle}`}
              className="grid grid-flow-col gap-[3px]"
              style={{ gridTemplateRows: `repeat(${activity.days}, minmax(0, 1fr))` }}
            >
              {activity.contributions.map((level, i) => (
                <Cell key={i} level={level} />
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1.5 font-mono text-[10px] text-ink-5">
            Less
            {[0, 1, 2, 3, 4].map((l) => (
              <Cell key={l} level={l} />
            ))}
            More
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="mb-5 font-display text-[15px] font-semibold text-ink-8">
            Recent commits
          </h3>
          <ul className="flex flex-col gap-4">
            {activity.commits.map((c) => (
              <li key={`${c.repo}-${c.message}`}>
                <div className="font-mono text-[13px] font-medium text-ink-8">{c.message}</div>
                <div className="mt-1 font-mono text-[11.5px] text-ink-5">
                  {c.repo} · {c.when}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
