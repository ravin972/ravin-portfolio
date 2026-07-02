import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArchitectureMap } from "@/components/architecture-map";
import { FlowPlayer } from "@/components/flow-player";
import { CodeTabs } from "@/components/code-tabs";
import { DecisionCard } from "@/components/decision-card";
import { Pipeline } from "@/components/pipeline";
import { StatStrip } from "@/components/stat-strip";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import {
  archLanes,
  flowStages,
  decisions,
  problemCards,
  impact,
  carryForward,
  pipeline,
} from "@/content/architecture";
import { codeSamples } from "@/content/code-samples";
import { ReadingProgress } from "@/components/reading-progress";
import { CaseStudyNav } from "@/components/case-study-nav";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions" },
  { id: "code", label: "Code" },
  { id: "impact", label: "Impact" },
];

/** The full AVA ONE engineering case study. */
export function AvaOneCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <ReadingProgress />
      <CaseStudyNav sections={sections} />

      {/* HEADER */}
      <section id="overview" className="mx-auto max-w-[1100px] px-8 pb-10 pt-14">
        <Link
          href="/projects"
          className="mb-[34px] inline-flex items-center gap-1.5 font-body text-[13px] text-ink-6 transition-colors hover:text-ink-8"
        >
          ← All systems
        </Link>
        <p className="mb-[18px] font-mono text-[11px] uppercase leading-none tracking-[0.2em] text-violet">
          Case study · Independent product
        </p>
        <h1 className="max-w-[16ch] font-display text-[clamp(38px,5.4vw,66px)] font-bold leading-[1.02] tracking-tightest text-ink-8">
          {project.name}
        </h1>
        <p className="mt-[22px] max-w-[60ch] font-body text-[clamp(16px,1.5vw,19px)] leading-relaxed text-ink-7">
          A production-grade, multi-tenant{" "}
          <strong className="font-semibold text-ink-8">AI voice calling SaaS</strong>{" "}
          — architected and built solo, from an empty repo to a clean 4-minute
          live call. Real-time STT → LLM → TTS, orchestrated across a five-service
          backend.
        </p>
        <div className="mt-[26px] flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-ink-5">
          <span>{project.role}</span><span className="text-ink-4">/</span>
          <span>{project.year}</span><span className="text-ink-4">/</span>
          <span>{project.tech.join(" · ")}</span>
        </div>
      </section>

      {/* AT A GLANCE */}
      {project.metrics && (
        <section className="mx-auto max-w-[1100px] px-8 pb-10 pt-5">
          <StatStrip stats={project.metrics} />
        </section>
      )}

      {/* PIPELINE */}
      <section className="mx-auto max-w-[1100px] px-8 py-6">
        <div className="rounded-[18px] border border-border bg-gradient-to-b from-[#101014] to-[#0a0a0b] px-[26px] py-6">
          <Pipeline nodes={pipeline} />
        </div>
      </section>

      {/* PROBLEM */}
      <Reveal as="section" id="problem" className="mx-auto max-w-[1100px] scroll-mt-24 px-8 py-11">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
          01 · The problem
        </p>
        <h2 className="max-w-[24ch] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-display text-ink-8">
          A phone call can&rsquo;t wait for a paragraph.
        </h2>
        <p className="mt-5 max-w-[68ch] font-body text-base leading-[1.65] text-ink-6">
          Real-time voice AI is a latency problem wearing a product&rsquo;s
          clothes. Transcribe the caller, wait for the full LLM response, then
          synthesize it, and the silence compounds until the call feels broken.
          On top of that it had to be{" "}
          <strong className="font-semibold text-ink-7">multi-tenant from day one</strong>{" "}
          — every tenant&rsquo;s calls, keys, and recordings isolated — and the
          workers had to survive crashes without wedging the line.
        </p>
        <div className="mt-[26px] grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {problemCards.map((c) => (
            <div key={c.title} className="rounded-[14px] border border-border bg-surface p-5">
              <div className="mb-[7px] font-display text-[14px] font-semibold text-ink-8">
                {c.title}
              </div>
              <p className="font-body text-[13px] leading-relaxed text-ink-5">{c.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ARCHITECTURE */}
      <Reveal as="section" id="architecture" className="mx-auto max-w-[1100px] scroll-mt-24 px-8 py-11">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
          02 · The architecture
        </p>
        <h2 className="mb-[26px] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-display text-ink-8">
          Five services, one request lifecycle.
        </h2>
        <ArchitectureMap lanes={archLanes} />
        <div className="mt-4">
          <FlowPlayer stages={flowStages} />
        </div>
      </Reveal>

      {/* DECISIONS */}
      <Reveal as="section" id="decisions" className="mx-auto max-w-[1100px] scroll-mt-24 px-8 py-11">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
          03 · Engineering decisions
        </p>
        <h2 className="mb-[30px] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-display text-ink-8">
          Four calls that made it hold.
        </h2>
        <div className="flex flex-col gap-3.5">
          {decisions.map((d) => (
            <DecisionCard key={d.id} decision={d} />
          ))}
        </div>
      </Reveal>

      {/* CODE */}
      <Reveal as="section" id="code" className="mx-auto max-w-[1100px] scroll-mt-24 px-8 py-11">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
          04 · The code behind it
        </p>
        <h2 className="mb-[26px] font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-display text-ink-8">
          Not pseudocode.
        </h2>
        <CodeTabs samples={codeSamples} />
      </Reveal>

      {/* IMPACT + LESSONS */}
      <Reveal as="section" id="impact" className="mx-auto max-w-[1100px] scroll-mt-24 px-8 pb-10 pt-11">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-[18px] border border-violet/20 bg-gradient-to-br from-violet-tint to-[#0c0c10] p-7">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-violet">
              05 · Impact
            </p>
            <ul className="flex flex-col gap-3.5">
              {impact.map((line) => (
                <li key={line} className="flex gap-[11px]">
                  <span className="font-bold text-violet">→</span>
                  <span className="font-body text-[14.5px] leading-snug text-ink-7">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[18px] border border-border bg-surface p-7">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
              06 · What I&rsquo;d carry forward
            </p>
            <p className="font-body text-[14.5px] leading-[1.65] text-ink-6">
              {carryForward}
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-[26px]">
          <Link href="/projects" className="font-body text-sm text-ink-6 transition-colors hover:text-ink-8">
            ← All systems
          </Link>
          <Button asChild>
            <Link href="/contact">Work with me →</Link>
          </Button>
        </div>
      </Reveal>
    </>
  );
}
