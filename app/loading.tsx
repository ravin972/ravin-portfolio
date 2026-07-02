/**
 * Route-transition fallback. Rarely shown on statically generated routes, but
 * keeps navigation graceful for any future dynamic or streamed segments.
 * Uses the reduced-motion-aware `blink` animation from globals.css.
 */
export default function Loading() {
  return (
    <section
      className="mx-auto flex min-h-[70vh] max-w-[1180px] items-center justify-center px-8 py-24"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-5">
        <span className="h-2 w-2 animate-blink rounded-full bg-violet" aria-hidden />
        Loading
      </div>
    </section>
  );
}
