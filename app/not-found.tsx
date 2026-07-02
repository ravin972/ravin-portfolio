import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Page not found · ${site.name}`,
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1180px] flex-col items-center justify-center px-8 py-24 text-center">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-violet">
        404
      </p>
      <h1 className="max-w-[18ch] font-display text-[clamp(34px,5vw,60px)] font-bold leading-[1.05] tracking-tightest text-ink-8">
        This route was never deployed.
      </h1>
      <p className="mt-5 max-w-[48ch] font-body text-[15px] leading-relaxed text-ink-6">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved.
        Let&rsquo;s get you back to something that stays up.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">View all systems</Link>
        </Button>
      </div>
    </section>
  );
}
