import type { CodeSample } from "@/types";

/** Real code behind the AVA ONE case study, rendered by <CodeTabs />. */
export const codeSamples: CodeSample[] = [
  {
    id: "sentence-queue",
    filename: "sentence-queue.ts",
    language: "ts",
    code: `// Sentence Queue — decouples the LLM token stream from TTS
// so audio starts on sentence one, not the full reply.
class SentenceQueue {
  private buffer = "";
  private queue: string[] = [];

  push(token: string) {
    this.buffer += token;
    // flush complete sentences to Aura the moment they close
    const parts = this.buffer.split(/(?<=[.!?])\\s+/);
    this.buffer = parts.pop() ?? "";
    for (const s of parts) this.enqueue(s.trim());
  }

  private enqueue(sentence: string) {
    if (!sentence) return;
    this.queue.push(sentence);
    void this.drain();            // fire-and-forget TTS
  }
}`,
  },
  {
    id: "worker-lock",
    filename: "worker-lock.ts",
    language: "ts",
    code: `// One active call per line. The slot lock is released in
// \`finally\` — a crash never leaves a stale slot (the bug
// that used to deadlock the worker under load).
worker.process("place-call", async (job) => {
  const slot = \`line:\${job.data.lineId}:lock\`;
  const held = await redis.set(slot, job.id, "NX", "EX", 900);
  if (!held) return job.moveToDelayed(Date.now() + 5000);

  try {
    return await runCallPipeline(job.data);
  } finally {
    await redis.del(slot);        // always release, even on throw
  }
});`,
  },
  {
    id: "tenant-scope",
    filename: "tenant-scope.ts",
    language: "ts",
    code: `// Every query is scoped by orgId at the data layer, so a
// tenant can never read across the boundary — even on a
// shared database.
export const scoped = (orgId: string) => ({
  leads: {
    findMany: (args = {}) =>
      prisma.lead.findMany({ ...args, where: { ...args.where, orgId } }),
    create: (data: LeadInput) =>
      prisma.lead.create({ data: { ...data, orgId } }),
  },
});`,
  },
  {
    id: "migration",
    filename: "migration.sql",
    language: "sql",
    code: `-- Zero-downtime column add on a shared production DB.
-- Guarded + idempotent. Never \`prisma migrate\` / \`db push\`.
ALTER TABLE "Lead"
  ADD COLUMN IF NOT EXISTS "stage" "LeadStage" NOT NULL DEFAULT 'NEW';

CREATE INDEX CONCURRENTLY IF NOT EXISTS
  "Lead_orgId_stage_idx" ON "Lead" ("orgId", "stage");`,
  },
];
