import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatStrip } from "@/components/stat-strip";
import { Pipeline } from "@/components/pipeline";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA } from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { heroStats, principles, stack } from "@/content/site-content";
import { projects, featuredProject } from "@/content/projects";
import { pipeline } from "@/content/architecture";
import { TechStack } from "@/components/tech-stack";
import { OpenSourceActivity } from "@/components/open-source-activity";
import { openSourceActivity } from "@/content/github";

export const metadata: Metadata = buildMetadata({
  path: "/",
  keywords: [
    "Backend Architect",
    "AI Voice Infrastructure",
    "Multi-tenant SaaS",
    "Node.js",
    "TypeScript",
    "Distributed Systems",
    "Ravinder Pandey",
  ],
});

export default function HomePage() {
  const bento = projects.slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-[1180px] px-8 pb-10 pt-24">
        <p className="mb-[30px] font-mono text-[11px] uppercase leading-none tracking-[0.2em] text-ink-5">
          {site.role}
        </p>
        <h1 className="max-w-[17ch] font-display text-[clamp(44px,6.4vw,80px)] font-bold leading-[1.0] tracking-tightest text-ink-8">
          I build the backends behind{" "}
          <span className="text-violet">real-time AI voice.</span>
        </h1>
        <p className="mt-[26px] max-w-[60ch] font-body text-[clamp(16px,1.5vw,19px)] leading-relaxed text-ink-7">
          Streaming STT → LLM → TTS pipelines, multi-tenant SaaS, and
          zero-downtime systems that stay up under production load. I design
          distributed backends from inception to closure.
        </p>
        <div className="mt-[34px] flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects/ava-one">Read the AVA ONE case study →</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">All systems</Link>
          </Button>
        </div>
        <div className="mt-[34px] flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-ink-5">
          <span>Gurugram, IN</span><span className="text-ink-4">/</span>
          <span>3+ yrs</span><span className="text-ink-4">/</span>
          <span>Leading AVA ONE &amp; AVACRM</span><span className="text-ink-4">/</span>
          <span>Node · Python · TypeScript</span>
        </div>
      </section>

      {/* HERO PIPELINE */}
      <section className="mx-auto max-w-[1180px] px-8 pb-10 pt-5">
        <div className="rounded-[18px] border border-border bg-gradient-to-b from-[#101014] to-[#0a0a0b] px-[26px] py-6">
          <div className="mb-[22px] flex flex-wrap items-center justify-between gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-5">
              Live AI voice pipeline · AVA ONE
            </span>
            <Link
              href="/architecture"
              className="rounded-full border border-violet/30 px-[11px] py-1 font-mono text-[11px] text-violet-soft transition-colors hover:bg-violet/12"
            >
              step through it →
            </Link>
          </div>
          <Pipeline nodes={pipeline} />
        </div>
      </section>

      {/* STATS */}
      <Reveal as="section" className="mx-auto max-w-[1180px] px-8 py-11">
        <StatStrip stats={heroStats} />
      </Reveal>

      {/* FEATURED WORK */}
      <Reveal as="section" className="mx-auto max-w-[1180px] px-8 py-13">
        <div className="mb-[26px] flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-[30px] font-semibold tracking-display text-ink-8">
            Selected systems
          </h2>
          <Link href="/projects" className="font-body text-[13px] text-violet-soft">
            View all →
          </Link>
        </div>
        <div className="grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
          <ProjectCard
            project={featuredProject}
            className="flex flex-col md:col-span-2 md:row-span-2"
          />
          {bento.slice(1).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Reveal>

      {/* PHILOSOPHY */}
      <Reveal as="section" className="mx-auto max-w-[1180px] px-8 py-14">
        <SectionHeading
          eyebrow="How I build"
          title="Systems thinking over feature-stacking."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.n}>
              <div className="mb-3 font-mono text-sm text-violet">{p.n}</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink-8">
                {p.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-6">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* STACK */}
      <Reveal as="section" className="mx-auto max-w-[1180px] px-8 py-14">
        <SectionHeading eyebrow="Toolkit" title="The stack I reach for." className="mb-9" />
        <TechStack groups={stack} />
      </Reveal>

      {/* OPEN SOURCE & ACTIVITY */}
      <Reveal as="section" className="mx-auto max-w-[1180px] px-8 py-14">
        <OpenSourceActivity activity={openSourceActivity} />
      </Reveal>

      {/* CTA */}
      <section className="mx-auto max-w-[1180px] px-8 pb-24 pt-10">
        <ContactCTA />
      </section>
    </>
  );
}
