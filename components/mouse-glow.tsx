"use client";

/**
 * Fixed radial glow that follows the pointer. The --mx/--my custom
 * properties are written by useMouseGlow() in Providers. Purely decorative
 * (aria-hidden) and disabled for reduced-motion via the hook not updating.
 */
export function MouseGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(560px circle at var(--mx,50vw) var(--my,14vh), rgba(124,92,255,0.09), transparent 42%)",
      }}
    />
  );
}
