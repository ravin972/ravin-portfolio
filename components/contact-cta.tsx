import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

/** Reused on the home page and the bottom of the case study. */
export function ContactCTA() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-violet/20 bg-gradient-to-br from-violet-tint via-[#0c0c10] to-[#0c0c10] px-10 py-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[100px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 animate-ambient rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.22), transparent 68%)",
        }}
      />
      <h2 className="relative mx-auto max-w-[20ch] font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.1] tracking-display text-ink-8">
        Let&rsquo;s build something that stays up.
      </h2>
      <p className="relative mx-auto mb-8 mt-[18px] max-w-[52ch] font-body text-base leading-relaxed text-ink-7">
        Open to Senior Backend, Founding, AI &amp; Platform Engineering roles.
      </p>
      <div className="relative flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/contact">Get in touch →</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={site.resumePath} download>
            Download résumé
          </a>
        </Button>
      </div>
    </div>
  );
}
