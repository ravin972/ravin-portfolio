import type { Decision } from "@/types";

/** Problem / Decision / Why write-up card. */
export function DecisionCard({ decision }: { decision: Decision }) {
  const rows: { label: string; text: string; accent?: boolean }[] = [
    { label: "PROBLEM", text: decision.problem },
    { label: "DECISION", text: decision.decision },
    { label: "WHY", text: decision.why, accent: true },
  ];

  return (
    <article className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-[26px] transition-colors hover:border-violet/30 md:grid-cols-[180px_1fr]">
      <div>
        <div className="mb-2 font-mono text-xs text-violet">DECISION {decision.id}</div>
        <h3 className="font-display text-lg font-semibold leading-tight text-ink-8">
          {decision.title}
        </h3>
      </div>
      <dl className="flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <dt
              className={`shrink-0 font-mono text-[11px] sm:w-[70px] ${
                r.accent ? "text-violet" : "text-ink-5"
              }`}
            >
              {r.label}
            </dt>
            <dd className="font-body text-[14px] leading-relaxed text-ink-6">
              {r.text}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
