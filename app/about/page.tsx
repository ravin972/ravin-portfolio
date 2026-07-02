import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { bio, focusAreas, principles } from "@/content/site-content";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description: "Backend-leaning full-stack engineer who cares about what happens after the demo — the request lifecycle, the queue, the migration that runs safely at 2am.",
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-8 pb-20 pt-16">
      <p className="mb-[18px] font-mono text-[11px] uppercase leading-none tracking-[0.2em] text-ink-5">
        About
      </p>
      <h1 className="max-w-[20ch] font-display text-[clamp(36px,4.6vw,58px)] font-bold leading-[1.06] tracking-tightest text-ink-8">
        I care about what happens after the demo.
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-5">
          {bio.map((para, i) => (
            <p
              key={i}
              className="font-body text-[16px] leading-[1.7] text-ink-7 first:text-[17px]"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-surface p-[22px]">
            <div className="mb-3.5 font-mono text-[11px] text-violet">FOCUS</div>
            <div className="flex flex-col gap-2.5">
              {focusAreas.map((f) => (
                <span key={f} className="font-display text-sm text-ink-8">{f}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-[22px]">
            <div className="mb-3.5 font-mono text-[11px] text-violet">PRINCIPLES</div>
            <div className="flex flex-col gap-3">
              {principles.map((p) => (
                <div key={p.n} className="font-body text-[13.5px] leading-snug text-ink-6">
                  {p.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
