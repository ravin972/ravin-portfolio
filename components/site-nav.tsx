"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/command-palette";
import { useCommandPalette } from "@/hooks/use-command-palette";

export function SiteNav() {
  const pathname = usePathname();
  const palette = useCommandPalette();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-3.5"
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet font-display text-sm font-bold text-white">
              R
            </span>
            <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink-8">
              {site.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-body text-sm font-medium transition-colors hover:text-ink-8",
                    isActive(item.href) ? "text-ink-8" : "text-ink-6",
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={palette.openPalette}
              className="hidden items-center gap-1.5 rounded-[9px] border border-border-strong bg-white/[0.02] px-2.5 py-1.5 font-mono text-xs text-ink-5 transition-colors hover:border-violet/50 hover:text-ink-8 sm:flex"
              aria-label="Open command palette"
            >
              ⌘K
            </button>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={site.resumePath} download>
                Résumé
              </a>
            </Button>
            <button
              type="button"
              className="text-ink-7 md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 font-body text-[15px] font-medium",
                    isActive(item.href) ? "bg-white/5 text-ink-8" : "text-ink-6",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resumePath}
                download
                className="mt-1 block rounded-lg px-3 py-2.5 font-body text-[15px] font-medium text-violet-soft"
              >
                Download résumé ↓
              </a>
            </li>
          </ul>
        )}
      </header>

      <CommandPalette open={palette.open} onClose={palette.close} />
    </>
  );
}
