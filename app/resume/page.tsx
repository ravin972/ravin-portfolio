import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Résumé",
  path: "/resume",
  description: `Résumé of ${site.name} — ${site.role}.`,
});

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-[1000px] px-8 pb-20 pt-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-[18px] font-mono text-[11px] uppercase leading-none tracking-[0.2em] text-ink-5">
            Résumé
          </p>
          <h1 className="font-display text-[clamp(34px,4.6vw,54px)] font-bold tracking-tightest text-ink-8">
            {site.name}
          </h1>
          <p className="mt-3 font-body text-[15px] text-ink-6">{site.role}</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <a href={site.resumePath} download>
              ↓ Download PDF
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
              Open in new tab ↗
            </a>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <object
          data={site.resumePath}
          type="application/pdf"
          className="h-[1100px] w-full"
          aria-label={`${site.name} résumé PDF`}
        >
          <div className="p-10 text-center">
            <p className="font-body text-sm text-ink-6">
              Your browser can&rsquo;t display the embedded PDF.{" "}
              <a href={site.resumePath} download className="text-violet-soft underline underline-offset-4">
                Download the résumé
              </a>{" "}
              instead.
            </p>
          </div>
        </object>
      </div>
    </section>
  );
}
