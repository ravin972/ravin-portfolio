import type { Stat, Principle, TechGroup, WritingEntry } from "@/types";

export const heroStats: Stat[] = [
  { value: "3+", label: "years shipping production backends" },
  { value: "2", label: "multi-tenant SaaS products led" },
  { value: "4m 12s", label: "first clean AI voice call", accent: true },
  { value: "40%+", label: "query performance gains" },
  { value: "85%+", label: "coverage on critical modules" },
];

export const principles: Principle[] = [
  {
    n: "01",
    title: "Design for closure, not just launch.",
    body: "I take products from inception through production and clean handover — architecture that survives after the demo.",
  },
  {
    n: "02",
    title: "Decouple to survive load.",
    body: "A sentence queue between LLM and TTS. A finally-block that always releases the slot. Backpressure over hope.",
  },
  {
    n: "03",
    title: "Tenancy is a data-isolation problem.",
    body: "orgId scoping on every query, RBAC at the middleware. The boundary is enforced where the data lives.",
  },
  {
    n: "04",
    title: "Zero-downtime by default.",
    body: "Guarded, idempotent raw SQL on shared production DBs. Never a blind migrate on live data.",
  },
];

export const stack: TechGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "FastAPI", "Django · DRF"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Prisma 7"],
  },
  {
    title: "Real-time · Queues",
    items: ["BullMQ", "Celery", "Redis Streams", "SSE", "WebSockets"],
  },
  {
    title: "AI · Voice",
    items: ["Twilio", "Deepgram Nova-2", "Deepgram Aura", "Gemini Flash", "Whisper"],
  },
  {
    title: "Security · Patterns",
    items: ["JWT · OAuth2", "RBAC", "Multi-tenancy", "CQRS", "Event-driven"],
  },
];

export const bio = [
  "I'm a backend-leaning full-stack engineer based in Gurugram. Most of my work lives in the parts of a product users never see — the request lifecycle, the queue that absorbs a spike, the migration that runs safely on live tenant data at 2am.",
  "Over the last three years I've taken products from an empty repo to production and clean handover: a multi-tenant AI voice SaaS, a white-label CRM, an OTT audit, an open-source FastAPI platform. I like problems where the constraint is real — a phone call that can't wait for a paragraph, a tenant boundary that can't leak, a worker that can't wedge the line.",
  "I reach for the boring, durable answer more often than the clever one: decouple the two slow things, release the lock in finally, push the invariant down to where the data lives. That's the kind of engineering I want to keep doing — designing systems that stay up.",
];

export const focusAreas = [
  "Distributed backend systems",
  "AI & real-time voice infra",
  "Multi-tenant SaaS",
  "Platform & developer experience",
];

/**
 * Writing is content-driven and typed. Populate `href` (or an MDX route)
 * as posts go live; the Writing page renders whatever is in this array and
 * shows a considered empty state when nothing is published yet.
 */
export const writing: WritingEntry[] = [
  {
    slug: "sentence-queue-latency",
    title: "The sentence queue: making AI voice feel real-time",
    excerpt:
      "Why serial STT→LLM→TTS makes a call feel broken, and how a small buffer between the model and the synthesizer removes compounding latency.",
    date: "2025-09-01",
    readingTime: "7 min",
    tags: ["ai-voice", "latency", "architecture"],
    status: "draft",
  },
  {
    slug: "multi-tenant-data-layer",
    title: "Tenancy belongs at the data layer, not the route",
    excerpt:
      "Route-level tenant checks are one forgotten guard away from a leak. A pattern for scoping every query by orgId — and why it survives future PRs.",
    date: "2025-07-15",
    readingTime: "6 min",
    tags: ["multi-tenancy", "postgres", "prisma"],
    status: "draft",
  },
];
