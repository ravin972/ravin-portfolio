import type { ArchLane, FlowStage, Decision } from "@/types";

/** The AVA ONE system map, rendered as three lanes in ArchitectureMap. */
export const archLanes: ArchLane[] = [
  {
    title: "Ingress",
    nodes: [
      { label: "Twilio Voice" },
      { label: "Scheduler" },
      { label: "API keys · SHA-256" },
    ],
  },
  {
    title: "Core · orgId-scoped",
    nodes: [
      { label: "API Gateway", detail: "RBAC middleware · 5 roles", emphasis: true },
      { label: "BullMQ Worker" },
      { label: "Redis" },
      { label: "PostgreSQL · Supabase" },
    ],
  },
  {
    title: "AI pipeline",
    nodes: [
      { label: "Deepgram STT" },
      { label: "Gemini Flash" },
      { label: "Sentence Queue", emphasis: true },
      { label: "Deepgram Aura TTS" },
    ],
  },
];

/** Steps of the animated request-lifecycle player. */
export const flowStages: FlowStage[] = [
  {
    index: 0,
    name: "Call placed · Twilio",
    detail:
      "Twilio places the outbound call and opens a bi-directional media stream to the worker.",
  },
  {
    index: 1,
    name: "Streaming STT · Deepgram Nova-2",
    detail:
      "Caller audio streams to Deepgram Nova-2 for low-latency, real-time transcription.",
  },
  {
    index: 2,
    name: "Reasoning · Gemini Flash",
    detail:
      "Gemini Flash generates the reply and extracts structured data from the live conversation.",
  },
  {
    index: 3,
    name: "Sentence queue · backpressure",
    detail:
      "The reply is split into sentences and buffered — decoupling the LLM from TTS so speech begins on sentence one.",
  },
  {
    index: 4,
    name: "Speech · Deepgram Aura",
    detail:
      "Deepgram Aura synthesizes each sentence to audio the moment it arrives from the queue.",
  },
  {
    index: 5,
    name: "Playback · Twilio media stream",
    detail:
      "Audio streams back through Twilio; goodbye detection ends the call cleanly and triggers extraction.",
  },
];

/** The AVA ONE pipeline shown on the home hero and case-study header. */
export const pipeline = [
  { label: "Twilio", sub: "call in" },
  { label: "Deepgram", sub: "Nova-2 · STT" },
  { label: "Gemini", sub: "Flash · LLM" },
  { label: "Sentence Queue", sub: "decouple", emphasis: true },
  { label: "Aura", sub: "TTS" },
  { label: "Media Stream", sub: "playback" },
];

export const decisions: Decision[] = [
  {
    id: "01",
    title: "Sentence-queue streaming",
    problem:
      "Serial STT→LLM→TTS made every turn lag; latency compounded across the call.",
    decision:
      "Buffer the LLM output into sentences and stream each to Aura as it closes.",
    why: "Audio starts on sentence one. The LLM and TTS run in parallel, so latency stops accumulating.",
  },
  {
    id: "02",
    title: "Finally-block slot locks",
    problem:
      "A crashed call worker left its Redis slot held — deadlocking the line under load.",
    decision:
      "One BullMQ slot lock per line, released in a finally block — always.",
    why: "Even on a throw, the slot frees. No stale locks, no infinite-loop crashes in production.",
  },
  {
    id: "03",
    title: "orgId at the data layer",
    problem:
      "Route-level tenant checks are one forgotten guard away from a cross-tenant leak.",
    decision:
      "Scope every Prisma query by orgId through a shared factory; RBAC enforced in middleware.",
    why: "Isolation lives where the data lives — not in a route a future PR can forget.",
  },
  {
    id: "04",
    title: "Guarded raw-SQL migrations",
    problem:
      "Schema changes on a shared production DB can't risk downtime or data loss.",
    decision:
      "Idempotent raw SQL — ADD COLUMN IF NOT EXISTS, CREATE INDEX CONCURRENTLY. Never a blind migrate.",
    why: "Every deploy is safe to re-run and safe to roll forward, on live tenant data.",
  },
];

export const problemCards = [
  {
    title: "Latency compounds",
    body: "STT → LLM → TTS in series makes every turn feel slow.",
  },
  {
    title: "Isolation is non-negotiable",
    body: "Tenants share infra but must never share data.",
  },
  {
    title: "Workers must self-heal",
    body: "A crashed job can't strand a phone line forever.",
  },
];

export const impact = [
  "First clean 4m 12s live call with natural goodbye detection.",
  "Structured data extracted straight from the conversation.",
  "Super Admin Command Center for cross-tenant management.",
  "Zero stale-slot crashes after the finally-block fix.",
];

export const carryForward =
  "The wins came from decoupling — a queue between two slow things, a lock released no matter what. And from pushing invariants down: tenancy belongs at the data layer, not the route. The rest is discipline: idempotent migrations, and treating a phone call as a hard real-time deadline, not a request/response.";
