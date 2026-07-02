"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project, ProjectCategory, ProjectFilter } from "@/types";
import { ProjectRow } from "@/components/project-row";
import { cn } from "@/lib/utils";

/** Client wrapper: category filter + animated list. Data comes in as props. */
export function ProjectsList({
  projects,
  filters,
}: {
  projects: Project[];
  filters: ProjectFilter[];
}) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <>
      <div className="mt-[30px] flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => {
          const on = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full border px-[15px] py-2 font-mono text-xs transition-colors",
                on
                  ? "border-violet/60 bg-violet/12 text-ink-8"
                  : "border-border-strong text-ink-6 hover:text-ink-8",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-3.5">
        {visible.map((p, i) => (
          <motion.div
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
          >
            <ProjectRow project={p} index={projects.indexOf(p)} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
