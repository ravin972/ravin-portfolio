import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    period: "2025 — Present",
    location: "Gurugram, IN",
    role: "Software Engineer · AI & Backend",
    org: "AVA ONE / AVACRM",
    bullets: [
      "Architected and built AVA ONE, a multi-tenant AI voice calling SaaS, solo — from empty repo to a clean live call.",
      "Led AVACRM as a white-label multi-tenant platform: RBAC, multi-source lead ingestion, round-robin assignment.",
      "Designed the streaming STT→LLM→TTS pipeline and the sentence-queue that made real-time conversation feel natural.",
      "Owned zero-downtime schema evolution on shared production databases with guarded, idempotent raw SQL.",
    ],
  },
  {
    period: "2024 — 2025",
    location: "Remote",
    role: "Backend Engineer · Consulting & Contract",
    org: "AnimeKey.tv · independent clients",
    bullets: [
      "Ran an architecture audit and handover for an OTT platform on NestJS + MongoDB Atlas + AWS ECS.",
      "Delivered a CTO-level remediation roadmap and a region-migration plan for scale.",
      "Drove 40%+ query-performance gains on high-traffic modules through indexing and query redesign.",
    ],
  },
  {
    period: "2023 — 2024",
    location: "Remote",
    role: "Full-Stack Engineer",
    org: "DivyaSangrah · Voxly (OSS)",
    bullets: [
      "Built a production e-commerce platform: 500+ SKUs, Razorpay, and a webhook-driven order pipeline.",
      "Shipped Voxly, an open-source FastAPI platform with JWT RBAC and a documented OpenAPI surface.",
      "Established the testing discipline — 85%+ coverage on critical modules — I still carry into every project.",
    ],
  },
];

export const facts = [
  { title: "Education", primary: "B.Tech · Computer Science", secondary: "India · 2023" },
  { title: "Availability", primary: "Immediate · 1-month notice", secondary: "Open to relocation & remote" },
  { title: "Languages", primary: "English · Hindi", secondary: "Professional working proficiency" },
];
