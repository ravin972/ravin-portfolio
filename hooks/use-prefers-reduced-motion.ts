"use client";

import { useReducedMotion } from "framer-motion";

/** Wrapper around framer's hook so components can import from one place. */
export function usePrefersReducedMotion() {
  return useReducedMotion() ?? false;
}
