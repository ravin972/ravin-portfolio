import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArchitectureMap } from "@/components/architecture-map";
import { FlowPlayer } from "@/components/flow-player";
import { Pipeline } from "@/components/pipeline";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { archLanes, flowStages, pipeline } from "@/content/architecture";

export const metadata: Metadata = buildMetadata({
  title: "Architecture",
  path: "/architecture",
  description:
    "How a real-time AI voice call moves through a five-service, multi-tenant backend — the system map and the request lifecycle, step by step.",
});

export default function ArchitecturePage() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-8 pb-8 pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Architecture · AVA ONE"
          title="How a call moves through the system."
          lede="A real-time AI voice call is a hard deadline, not a request/response. Here's the multi-tenant, five-service backend that keeps it feeling live — the system map, then the request lifecycle end to end."
        />
      </section>

      <section className="mx-auto max-w-[1100px] px-8 py-6">
        <div className="rounded-[18px] border border-border bg-gradient-to-b from-[#101014] to-[#0a0a0b] px-[26px] py-6">
          <Pipeline nodes={pipeline} />
        </div>
      </section>

      <Reveal as="section" className="mx-auto max-w-[1100px] px-8 py-8">
        <h2 className="mb-[26px] font-display text-[clamp(24px,3vw,34px)] font-semibold tracking-display text-ink-8">
          The system map
        </h2>
        <ArchitectureMap lanes={archLanes} />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1100px] px-8 py-8">
        <h2 className="mb-[26px] font-display text-[clamp(24px,3vw,34px)] font-semibold tracking-display text-ink-8">
          The request lifecycle
        </h2>
        <FlowPlayer stages={flowStages} />
      </Reveal>

      <section className="mx-auto max-w-[1100px] px-8 pb-24 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8">
          <p className="max-w-[46ch] font-body text-sm text-ink-6">
            Want the engineering decisions and the real code behind each stage?
          </p>
          <Button asChild>
            <Link href="/projects/ava-one">Read the AVA ONE case study →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
