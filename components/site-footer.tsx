import Link from "next/link";
import { nav, site, socials } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1180px] px-8 pb-10 pt-14">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[32ch]">
            <div className="font-display text-[26px] font-bold tracking-display text-ink-8">
              {site.name}
            </div>
            <p className="mt-3 font-body text-[13.5px] leading-relaxed text-ink-5">
              Backend architect for real-time AI voice & multi-tenant systems.
              Designed like a product, not a portfolio.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <nav aria-label="Footer pages" className="flex flex-col gap-[11px]">
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink-5">PAGES</span>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-[13px] text-ink-7 transition-colors hover:text-ink-8"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Elsewhere" className="flex flex-col gap-[11px]">
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink-5">ELSEWHERE</span>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="font-body text-[13px] text-ink-7 transition-colors hover:text-ink-8"
                >
                  {s.label} {s.external ? "↗" : ""}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-2 border-t border-border pt-5">
          <span className="font-mono text-[11px] text-ink-4">
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="font-mono text-[11px] text-ink-4">
            {site.location} · Available for senior & founding roles
          </span>
        </div>
      </div>
    </footer>
  );
}
