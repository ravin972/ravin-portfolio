import type { Project, ProjectFilter } from "@/types";

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI · Voice" },
  { id: "saas", label: "Multi-tenant SaaS" },
  { id: "backend", label: "Backend" },
  { id: "oss", label: "Open source" },
];

export const projects: Project[] = [
  {
    slug: "ava-one",
    name: "AVA ONE Outbound",
    year: "2025",
    status: "ongoing",
    featured: true,
    badge: "flagship · case study",
    category: ["ai", "saas", "backend"],
    role: "Solo architect & builder",
    summary:
      "Solo-built multi-tenant AI voice calling SaaS. Streaming STT→LLM→TTS with a sentence-queue, a 5-service Docker Compose backend, SSE Mission Control, SHA-256 API keys, and orgId-scoped Prisma on every query.",
    description:
      "A production-grade, multi-tenant AI voice calling SaaS — architected and built solo, from an empty repo to a clean 4-minute live call. Real-time STT → LLM → TTS, orchestrated across a five-service backend with worker queues, backpressure, and zero-downtime migrations on shared production data.",
    tech: ["Node.js", "TypeScript", "Prisma 7", "BullMQ", "Twilio", "Deepgram", "Gemini Flash", "Redis", "PostgreSQL"],
    href: "/projects/ava-one",
    metrics: [
      { value: "Multi-tenant", label: "orgId on every query" },
      { value: "5 services", label: "Docker Compose" },
      { value: "4m 12s", label: "first clean call", accent: true },
      { value: "5 roles", label: "RBAC · SHA-256 keys" },
      { value: "SSE", label: "Mission Control" },
    ],
  },
  {
    slug: "avacrm",
    name: "AVACRM",
    year: "2025",
    status: "ongoing",
    category: ["saas", "backend"],
    role: "Lead architect",
    summary:
      "White-label CRM. Round-robin lead assignment across Meta Lead Ads, JustDial, Apollo & inbound webhooks.",
    description:
      "White-label, multi-tenant CRM for ZA & SA markets. Lead architect — 5-role RBAC, round-robin lead assignment across Meta Lead Ads, JustDial, Apollo & inbound webhooks, and multi-language voice campaigns.",
    tech: ["TypeScript", "PostgreSQL", "Redis", "RBAC"],
    href: "/contact",
  },
  {
    slug: "animekey",
    name: "AnimeKey.tv",
    year: "2025",
    status: "shipped",
    category: ["backend", "saas"],
    role: "Architecture audit & handover lead",
    summary:
      "OTT audit — NestJS, Mongo Atlas, AWS ECS. Region migration plan for CTO review.",
    description:
      "Architecture audit & handover lead for an OTT streaming platform on NestJS, MongoDB Atlas & AWS ECS. Delivered a CTO-level remediation roadmap and a region-migration plan for scale.",
    tech: ["NestJS", "MongoDB", "AWS ECS", "Next.js"],
    href: "/contact",
  },
  {
    slug: "voxly",
    name: "Voxly",
    year: "2024",
    status: "shipped",
    badge: "open source",
    category: ["backend", "oss"],
    role: "Creator",
    summary:
      "Open-source FastAPI mentorship platform. Normalized schema, JWT RBAC, and a documented OpenAPI surface.",
    description:
      "Open-source FastAPI mentorship platform. Normalized schema, JWT-based RBAC, and a fully documented OpenAPI surface — built as a reference-quality backend.",
    tech: ["FastAPI", "PostgreSQL", "JWT", "OpenAPI"],
    href: "https://github.com/ravin972",
    external: true,
  },
  {
    slug: "divyasangrah",
    name: "DivyaSangrah",
    year: "2024",
    status: "shipped",
    category: ["backend"],
    role: "Full-stack engineer",
    summary:
      "Production e-commerce, 500+ SKUs, Razorpay + a webhook-driven order pipeline with reconciliation.",
    description:
      "Production e-commerce platform — 500+ SKUs, Razorpay payments, and a webhook-driven order pipeline with reconciliation. Built end-to-end on Next.js + Express.",
    tech: ["Next.js", "Express", "Razorpay", "Webhooks"],
    href: "https://github.com/ravin972",
    external: true,
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
) as Record<string, Project>;

export const featuredProject = projects.find((p) => p.featured)!;
