"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import type { FlowStage } from "@/types";
import { cn } from "@/lib/utils";

const INTERVAL = 1700;

/**
 * Animated request-lifecycle player. Auto-advances when playing; each stage
 * is also directly clickable. The detail panel crossfades between stages.
 */
export function FlowPlayer({ stages }: { stages: FlowStage[] }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    setPlaying(false);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setPlaying(true);
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % stages.length);
    }, INTERVAL);
  }, [stages.length]);

  useEffect(() => () => stop(), [stop]);

  const toggle = () => (playing ? stop() : start());
  const jump = (i: number) => {
    stop();
    setCurrent(i);
  };

  const active = stages[current];

  return (
    <div className="rounded-[18px] border border-border bg-[#0d0d11] p-[26px]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-display text-[15px] font-semibold text-ink-8">
            Play the request lifecycle
          </div>
          <div className="mt-0.5 font-body text-[12.5px] text-ink-6">
            Step through a call, or click any stage.
          </div>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-2.5 rounded-[10px] bg-violet px-[18px] py-2.5 font-body text-[13px] font-semibold text-white transition-colors hover:bg-violet-bright"
          aria-pressed={playing}
        >
          {playing ? <Pause size={13} /> : <Play size={13} />}
          {playing ? "Pause" : "Play flow"}
        </button>
      </div>

      <ol className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
        {stages.map((s) => {
          const on = s.index === current;
          return (
            <li key={s.index}>
              <button
                type="button"
                onClick={() => jump(s.index)}
                aria-current={on ? "step" : undefined}
                className={cn(
                  "w-full rounded-xl border px-[15px] py-3.5 text-left transition-all duration-300",
                  on
                    ? "-translate-y-0.5 border-violet/75 bg-[#17131f] shadow-glow"
                    : "border-border bg-surface hover:border-violet/40",
                )}
              >
                <div
                  className={cn(
                    "font-mono text-[11px] font-semibold",
                    on ? "text-violet-soft" : "text-ink-5",
                  )}
                >
                  {String(s.index + 1).padStart(2, "0")}
                </div>
                <div className="mt-1.5 font-display text-[13px] font-semibold text-ink-8">
                  {s.name.split(" · ")[0]}
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex items-start gap-[18px] rounded-xl border border-violet/20 bg-[#0f0d15] px-[22px] py-5">
        <div className="w-[52px] flex-none font-display text-[30px] font-bold tracking-display text-violet">
          {String(current + 1).padStart(2, "0")}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="font-display text-base font-semibold text-ink-8">
              {active.name}
            </div>
            <div className="mt-1.5 font-body text-sm leading-relaxed text-ink-6">
              {active.detail}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
