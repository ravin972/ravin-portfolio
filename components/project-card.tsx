import Link from "next/link";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Compact card for the home bento grid. Links to detail or external. */
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const external = project.external;
  const href = project.href ?? `/projects/${project.slug}`;

  const inner = (
    <>
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-[17px] font-semibold text-ink-8">
          {project.name}
        </span>
        {project.badge && <Badge variant="muted">{project.badge}</Badge>}
      </div>
      <p className="mt-2.5 font-body text-[12.5px] leading-relaxed text-ink-6">
        {project.summary}
      </p>
    </>
  );

  const classes = cn(
    "block rounded-[18px] border border-border bg-[#121216] p-[22px] no-underline transition-colors hover:border-violet/45",
    className,
  );

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
