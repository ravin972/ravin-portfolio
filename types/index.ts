// Central domain types. Every section on the site is driven by data that
// conforms to one of these — no repeated UI, no hardcoded copy in components.

export type IconName =
  | "server"
  | "cpu"
  | "database"
  | "radio"
  | "shield"
  | "workflow"
  | "boxes"
  | "gitBranch";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  external?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface TechGroup {
  title: string;
  items: string[];
}

/** A project — powers the bento grid, the Projects index, and detail routes. */
export interface Project {
  slug: string;
  name: string;
  year: string;
  status: "ongoing" | "shipped";
  featured?: boolean;
  badge?: string;
  category: ProjectCategory[];
  role: string;
  summary: string;
  description: string;
  tech: string[];
  href?: string;
  external?: boolean;
  metrics?: Stat[];
}

export type ProjectCategory = "ai" | "saas" | "backend" | "oss";

export interface ProjectFilter {
  id: ProjectCategory | "all";
  label: string;
}

/** One node in an architecture diagram lane. */
export interface ArchNode {
  label: string;
  detail?: string;
  emphasis?: boolean;
}

export interface ArchLane {
  title: string;
  nodes: ArchNode[];
}

/** One step in the animated request-lifecycle player. */
export interface FlowStage {
  index: number;
  name: string;
  detail: string;
}

/** An engineering decision write-up (problem / decision / why). */
export interface Decision {
  id: string;
  title: string;
  problem: string;
  decision: string;
  why: string;
}

/** A labelled code sample rendered in the tabbed viewer. */
export interface CodeSample {
  id: string;
  filename: string;
  language: string;
  code: string;
}

export interface Principle {
  n: string;
  title: string;
  body: string;
}

export interface ExperienceEntry {
  period: string;
  location: string;
  role: string;
  org: string;
  bullets: string[];
}

export interface WritingEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  href?: string;
  status?: "published" | "draft";
}
