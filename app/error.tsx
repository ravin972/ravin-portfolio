"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Route-segment error boundary. Catches render/runtime errors below the root
 * layout and offers recovery without a full reload. Real error reporting is
 * wired in the Launch phase; for now we surface to the console.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1180px] flex-col items-center justify-center px-8 py-24 text-center">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-heat">
        Unexpected error
      </p>
      <h1 className="max-w-[20ch] font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.06] tracking-tightest text-ink-8">
        Something threw where it shouldn&rsquo;t have.
      </h1>
      <p className="mt-5 max-w-[50ch] font-body text-[15px] leading-relaxed text-ink-6">
        This was caught by a boundary, not the whole app. Try again, or head
        back home.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
