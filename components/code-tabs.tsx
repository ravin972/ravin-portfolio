"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { CodeSample } from "@/types";
import { cn } from "@/lib/utils";

/** Tabbed, copyable code viewer for the case study. */
export function CodeTabs({ samples }: { samples: CodeSample[] }) {
  const [active, setActive] = useState(samples[0]?.id);
  const [copied, setCopied] = useState(false);
  const current = samples.find((s) => s.id === active) ?? samples[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-[#0c0c0f]">
      <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-border p-3">
        <div
          className="flex flex-wrap gap-1"
          role="tablist"
          aria-label="Code samples"
        >
          {samples.map((s) => {
            const on = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(s.id)}
                className={cn(
                  "rounded-lg border px-3 py-[7px] font-mono text-xs transition-colors",
                  on
                    ? "border-violet/40 bg-[#1c1c22] text-ink-8"
                    : "border-transparent text-ink-5 hover:text-ink-7",
                )}
              >
                {s.filename}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-[11px] py-[7px] font-mono text-[11px] text-ink-6 transition-colors hover:border-violet/40 hover:text-ink-8"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-6 py-[22px] font-mono text-[13px] leading-[1.7] text-[#c6c8d0]">
        <code>{current.code}</code>
      </pre>
    </div>
  );
}
