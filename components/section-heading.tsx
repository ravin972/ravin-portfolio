import { cn } from "@/lib/utils";

/** Eyebrow + title + optional lede — used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const titleClass =
    Tag === "h1"
      ? "font-display font-bold tracking-tightest text-ink-8 text-[clamp(38px,5vw,62px)] leading-[1.02]"
      : "font-display font-semibold tracking-display text-ink-8 text-[clamp(26px,3.4vw,38px)] leading-[1.15]";

  return (
    <div className={className}>
      {eyebrow && (
        <div className="mb-4 font-mono text-[11px] uppercase leading-none tracking-[0.18em] text-ink-5">
          {eyebrow}
        </div>
      )}
      <Tag className={cn(titleClass, "max-w-[22ch]")}>{title}</Tag>
      {lede && (
        <p className="mt-5 max-w-[60ch] font-body text-[clamp(15px,1.4vw,18px)] leading-relaxed text-ink-7">
          {lede}
        </p>
      )}
    </div>
  );
}
