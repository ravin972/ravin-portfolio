import type { CommitEntry, OpenSourceActivityData } from "@/types";

/**
 * REPRESENTATIVE open-source activity for the home "Open-source & activity"
 * section. Intentionally static — it reads as real work while the live
 * GitHub integration ("goes live on GitHub connect") is deferred to PI-5,
 * which will replace this module's data with a cached fetch against the
 * @ravin972 GitHub API behind the same types.
 */

const WEEKS = 30;
const DAYS = 7;

/**
 * Deterministic pseudo-random intensity (0–4), weighted like a real
 * contribution graph (mostly low with occasional bursts). Deterministic so
 * server and client render identically — no hydration mismatch, stable builds.
 */
function seededContributions(count: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < count; i += 1) {
    const noise = Math.sin(i * 12.9898) * 43758.5453;
    const f = noise - Math.floor(noise); // 0..1
    out.push(f < 0.5 ? 0 : f < 0.72 ? 1 : f < 0.88 ? 2 : f < 0.96 ? 3 : 4);
  }
  return out;
}

const recentCommits: CommitEntry[] = [
  { message: "feat: sentence-queue backpressure for Aura TTS", repo: "ava-one-outbound", when: "2d ago" },
  { message: "fix: round-robin skips inactive reps", repo: "avacrm", when: "4d ago" },
  { message: "perf: release BullMQ slot lock in finally", repo: "ava-one-outbound", when: "1w ago" },
  { message: "docs: OpenAPI examples for session endpoints", repo: "voxly", when: "2w ago" },
];

export const openSourceActivity: OpenSourceActivityData = {
  handle: "@ravin972",
  status: "representative · goes live on GitHub connect",
  commits: recentCommits,
  contributions: seededContributions(WEEKS * DAYS),
  weeks: WEEKS,
  days: DAYS,
};
