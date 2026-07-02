"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Copy, ExternalLink, Download } from "lucide-react";
import { nav, site, socials } from "@/content/site";
import { cn } from "@/lib/utils";

type Command = {
  id: string;
  label: string;
  keywords: string;
  icon: "go" | "copy" | "ext" | "download";
  run: () => void;
};

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const pages: Command[] = [
      { id: "home", label: "Home", keywords: "home overview start", icon: "go", run: () => go("/") },
      ...nav.map((n) => ({
        id: n.href,
        label: n.label,
        keywords: `${n.label} page`,
        icon: "go" as const,
        run: () => go(n.href),
      })),
    ];
    const actions: Command[] = [
      {
        id: "copy-email",
        label: "Copy email",
        keywords: "copy email address contact",
        icon: "copy",
        run: () => {
          navigator.clipboard?.writeText(site.email);
          onClose();
        },
      },
      ...socials
        .filter((s) => s.external)
        .map((s) => ({
          id: s.href,
          label: `Open ${s.label}`,
          keywords: `open ${s.label} ${s.handle}`,
          icon: "ext" as const,
          run: () => {
            window.open(s.href, "_blank", "noopener");
            onClose();
          },
        })),
      {
        id: "resume",
        label: "Download résumé",
        keywords: "download resume cv",
        icon: "download",
        run: () => {
          const a = document.createElement("a");
          a.href = site.resumePath;
          a.download = "";
          a.click();
          onClose();
        },
      },
    ];
    return [...pages, ...actions];

    function go(href: string) {
      router.push(href);
      onClose();
    }
  }, [router, onClose]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return commands;
    return commands.filter((c) => c.keywords.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  };

  const iconFor = (icon: Command["icon"]) => {
    const props = { size: 15, className: "text-ink-5" };
    if (icon === "go") return <ArrowRight {...props} className="text-violet" />;
    if (icon === "copy") return <Copy {...props} />;
    if (icon === "ext") return <ExternalLink {...props} />;
    return <Download {...props} />;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#060608]/70 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-border-strong bg-ink-1 shadow-lift"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 border-b border-border px-4 py-3.5">
              <span className="font-mono text-[13px] text-violet">⌘</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Jump to a page, copy email, open GitHub…"
                className="flex-1 bg-transparent font-body text-[15px] text-ink-8 outline-none placeholder:text-ink-5"
                aria-label="Search commands"
              />
              <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-ink-4">
                ESC
              </span>
            </div>
            <ul className="max-h-[340px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-body text-sm text-ink-5">
                  No matches.
                </li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id}>
                  <button
                    type="button"
                    onClick={cmd.run}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors",
                      i === active ? "bg-violet/12" : "bg-transparent",
                    )}
                  >
                    <span className="flex w-4 justify-center">{iconFor(cmd.icon)}</span>
                    <span className="font-body text-sm text-ink-8">{cmd.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
