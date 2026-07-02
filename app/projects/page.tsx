import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsList } from "@/components/projects-list";
import { buildMetadata } from "@/lib/seo";
import { projects, projectFilters } from "@/content/projects";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Backends for real-time voice, multi-tenant SaaS, streaming, and commerce — most taken from an empty repo to production.",
});

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-8 pb-20 pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Selected systems · 2023 — 2025"
        title="Systems I've architected & shipped."
        lede="Backends for real-time voice, multi-tenant SaaS, streaming, and commerce — most taken from an empty repo to production."
      />
      <ProjectsList projects={projects} filters={projectFilters} />
    </section>
  );
}
