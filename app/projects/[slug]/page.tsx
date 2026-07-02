import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatStrip } from "@/components/stat-strip";
import { AvaOneCaseStudy } from "@/components/ava-one-case-study";
import { buildMetadata } from "@/lib/seo";
import { projects, projectsBySlug } from "@/content/projects";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projectsBySlug[params.slug];
  if (!project) return buildMetadata({ title: "Project not found", path: "/projects" });
  return buildMetadata({
    title: project.name,
    path: `/projects/${project.slug}`,
    description: project.description,
    keywords: project.tech,
  });
}

export default function ProjectDetailPage({ params }: Params) {
  const project = projectsBySlug[params.slug];
  if (!project) notFound();

  // The flagship gets the full engineering case study.
  if (project.slug === "ava-one") {
    return <AvaOneCaseStudy project={project} />;
  }

  // Every other project gets a clean, data-driven detail view.
  return (
    <section className="mx-auto max-w-[900px] px-8 pb-20 pt-14">
      <Link
        href="/projects"
        className="mb-[34px] inline-flex items-center gap-1.5 font-body text-[13px] text-ink-6 transition-colors hover:text-ink-8"
      >
        ← All systems
      </Link>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-display text-[clamp(34px,4.6vw,54px)] font-bold tracking-tightest text-ink-8">
          {project.name}
        </h1>
        {project.badge && <Badge variant="muted">{project.badge}</Badge>}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-ink-5">
        <span>{project.role}</span><span className="text-ink-4">/</span>
        <span>{project.year}</span>
      </div>
      <p className="mt-6 max-w-[62ch] font-body text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-ink-7">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mt-10">
          <StatStrip stats={project.metrics} />
        </div>
      )}

      <div className="mt-10">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-violet">
          Stack
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge variant="tech">{t}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Link href="/projects" className="font-body text-sm text-ink-6 hover:text-ink-8">
          ← All systems
        </Link>
        <div className="flex gap-3">
          {project.external && project.href && (
            <Button asChild variant="outline">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                View on GitHub ↗
              </a>
            </Button>
          )}
          <Button asChild>
            <Link href="/contact">Work with me →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
