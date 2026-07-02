import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { writing } from "@/content/site-content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Writing",
  path: "/writing",
  description: "Notes on backend architecture, AI voice infrastructure, latency, and multi-tenancy.",
});

export default function WritingPage() {
  const published = writing.filter((w) => w.status !== "draft");
  const upcoming = writing.filter((w) => w.status === "draft");

  return (
    <section className="mx-auto max-w-[900px] px-8 pb-20 pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Writing"
        title="Notes from the backend."
        lede="Essays on latency, multi-tenancy, AI voice pipelines, and the durable-over-clever decisions behind them."
      />

      {published.length > 0 && (
        <ul className="mt-10 flex flex-col">
          {published.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.href ?? `/writing/${post.slug}`}
                className="group grid grid-cols-1 gap-2 border-t border-border py-7 transition-colors hover:bg-white/[0.02] sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink-8">{post.title}</h2>
                  <p className="mt-2 max-w-[60ch] font-body text-[14px] leading-relaxed text-ink-6">
                    {post.excerpt}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="tech">#{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left font-mono text-xs text-ink-5 sm:text-right">
                  <div>{formatDate(post.date)}</div>
                  <div className="mt-1.5">{post.readingTime}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Considered empty / coming-soon state — the array drives everything. */}
      {published.length === 0 && (
        <div className="mt-12 rounded-2xl border border-border bg-surface p-10 text-center">
          <p className="font-display text-lg font-semibold text-ink-8">
            First pieces are in the queue.
          </p>
          <p className="mx-auto mt-2 max-w-[46ch] font-body text-sm text-ink-6">
            Deep-dives on the sentence queue and the multi-tenant data layer are
            being written. In the meantime, the{" "}
            <Link href="/projects/ava-one" className="text-violet-soft underline-offset-4 hover:underline">
              AVA ONE case study
            </Link>{" "}
            covers the architecture in depth.
          </p>
        </div>
      )}

      {upcoming.length > 0 && (
        <div className="mt-12">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-5">
            In progress
          </div>
          <ul className="flex flex-col gap-3">
            {upcoming.map((post) => (
              <li
                key={post.slug}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4"
              >
                <div>
                  <div className="font-display text-[15px] font-semibold text-ink-7">
                    {post.title}
                  </div>
                  <div className="mt-1 font-body text-[13px] text-ink-5">{post.excerpt}</div>
                </div>
                <Badge variant="muted">draft</Badge>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
