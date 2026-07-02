"use client";

import { useEffect, useState } from "react";

/**
 * Thin fixed reading-progress bar for long-form pages (mounted per-page, so it
 * only appears where used). rAF-throttled scroll listener; decorative, so it's
 * aria-hidden. Width transition is CSS — neutralized under reduced-motion.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-violet shadow-glow transition-[width] duration-100 ease-out-quint"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
