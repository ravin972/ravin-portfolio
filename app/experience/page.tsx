import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";
import { experience, facts } from "@/content/experience";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  path: "/experience",
  description: "Three years of shipping production backends across AI voice, multi-tenant SaaS, streaming, and commerce.",
});

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-[1000px] px-8 pb-20 pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Experience"
        title="Three years of shipping production backends."
      />

      <div className="mt-6">
        {experience.map((e) => (
          <div
            key={e.period}
            className="grid grid-cols-1 gap-8 border-t border-border py-8 md:grid-cols-[180px_1fr]"
          >
            <div>
              <div className="font-mono text-xs text-violet">{e.period}</div>
              <div className="mt-1.5 font-mono text-xs text-ink-5">{e.location}</div>
            </div>
            <div>
              <h2 className="font-display text-[21px] font-semibold text-ink-8">{e.role}</h2>
              <div className="mt-1 font-body text-[13px] text-violet-soft">{e.org}</div>
              <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-[18px]">
                {e.bullets.map((b) => (
                  <li key={b} className="font-body text-[14.5px] leading-[1.6] text-ink-6">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-11 flex flex-wrap gap-10 border-t border-border pt-11">
        {facts.map((f) => (
          <div key={f.title}>
            <div className="mb-3 font-mono text-[11px] text-violet">
              {f.title.toUpperCase()}
            </div>
            <div className="font-display text-base font-semibold text-ink-8">{f.primary}</div>
            <div className="mt-1 font-body text-[13px] text-ink-5">{f.secondary}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
