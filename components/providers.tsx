"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

/**
 * Client provider mounted once in the root layout. Owns the mouse-glow
 * pointer listener and enforces reduced-motion across all framer animations.
 */
export function Providers({ children }: { children: ReactNode }) {
  useMouseGlow();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
