import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { buildMetadata } from "@/lib/seo";
import { site, socials } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Open to Senior Backend, Founding Engineer, AI Engineer & Platform roles — remote or relocation. Immediate availability, one-month notice.",
});

type Card = { label: string; value: string; href: string; cta: string; external?: boolean };

const cards: Card[] = [
  { label: "EMAIL", value: site.email, href: `mailto:${site.email}`, cta: "Send a message →" },
  { label: "PHONE", value: site.phone, href: `tel:${site.phoneHref}`, cta: "Call or WhatsApp →" },
  ...socials
    .filter((s) => s.external)
    .map((s) => ({
      label: s.label.toUpperCase(),
      value: s.handle,
      href: s.href,
      cta: s.label === "GitHub" ? "See the code ↗" : "Connect ↗",
      external: true,
    })),
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-8 pb-24 pt-16">
      <div className="mb-[22px] flex items-center gap-2.5 font-mono text-[12px] text-lime">
        <span className="h-2 w-2 animate-blink rounded-full bg-lime" aria-hidden />
        AVAILABLE FOR SENIOR &amp; FOUNDING ROLES
      </div>
      <h1 className="max-w-[16ch] font-display text-[clamp(40px,5.4vw,72px)] font-bold leading-[1.0] tracking-tightest text-ink-8">
        Let&rsquo;s build something that stays up.
      </h1>
      <p className="mt-[22px] max-w-[56ch] font-body text-[clamp(16px,1.5vw,19px)] leading-relaxed text-ink-7">
        Open to Senior Backend, Founding Engineer, AI Engineer &amp; Platform
        roles — remote or relocation. Immediate availability, one-month notice.
      </p>

      <div className="mt-11 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 no-underline transition-colors hover:border-violet/45 hover:bg-[#14121b]"
          >
            <span className="font-mono text-[11px] text-ink-5">{c.label}</span>
            <span className="break-words font-display text-base font-semibold text-ink-8">
              {c.value}
            </span>
            <span className="mt-auto font-body text-[12px] text-violet-soft">{c.cta}</span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <CopyEmailButton email={site.email} />
        <Button asChild variant="outline">
          <a href={site.resumePath} download>
            ↓ Download résumé
          </a>
        </Button>
      </div>

      <div className="mt-10 border-t border-border pt-6 font-mono text-[12.5px] text-ink-5">
        📍 {site.location} · {site.timezone}
      </div>
    </section>
  );
}
