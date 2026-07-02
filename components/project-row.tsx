import Link from "next/link";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Full-width editorial row for the Projects index (numbered). */
export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const external = project.external;
  const href = project.href ?? `/projects/${project.slug}`;
  const num = String(index + 1).padStart(2, "0");
  const yearColor = project.status === "ongoing" ? "text-violet" : "text-ink-5";

  const inner = (
    <>
      <span className="font-mono text-[15px] text-violet">{num}</span>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink-8">
            {project.name}
          </span>
          {project.badge && (
            <Badge variant={project.category.includes("oss") ? "muted" : "violet"}>
              {project.badge}
              {external ? " ↗" : project.href ? " →" : ""}
            </Badge>
          )}
        </div>
        <p className="mt-[11px] max-w-[62ch] font-body text-[14.5px] leading-relaxed text-ink-6">
          {project.summary}
        </p>
        <ul className="mt-[15px] flex flex-wrap gap-[7px]">
          {project.tech.slice(0, 5).map((t) => (
            <li key={t}>
              <Badge variant="tech">{t}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <span className={cn("whitespace-nowrap text-right font-mono text-xs", yearColor)}>
        {project.year}
        {project.status === "ongoing" ? " →" : ""}
      </span>
    </>
  );

  const classes =
    "grid grid-cols-[56px_1fr_auto] items-start gap-[26px] rounded-[18px] border border-border bg-surface p-7 no-underline transition-colors hover:border-violet/45 hover:bg-[#14121b]";

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
