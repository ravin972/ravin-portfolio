"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CaseStudySection {
  id: string;
  label: string;
}

/**
 * Scroll-spy section nav for long-form case studies. Dots live in the left
 * gutter on wide screens only (xl+), so the centered content layout is never
 * touched. Anchor links keep it keyboard-operable; IntersectionObserver marks
 * the active section as it crosses the viewport midline.
 */
export function CaseStudyNav({ sections }: { sections: CaseStudySection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Case study sections"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {sections.map((s) => {
        const on = s.id === active;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={on ? "true" : undefined}
            className="group relative flex items-center focus-visible:outline-none"
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-violet",
                on
                  ? "border-violet bg-violet shadow-glow"
                  : "border-ink-4 group-hover:border-violet/70",
              )}
            />
            <span className="pointer-events-none absolute left-6 whitespace-nowrap rounded-md border border-border-strong bg-ink-1 px-2 py-1 font-mono text-[10px] text-ink-7 opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
