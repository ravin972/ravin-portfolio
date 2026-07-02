"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Shared entrance transition — ease-out-quint per the PUL$E motion spec. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, for hand-tuned sequences. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  /** Optional id, e.g. for scroll-spy anchors. */
  id?: string;
}

/**
 * Scroll-triggered reveal. Animates once when 8% enters the viewport.
 * Reduced-motion users get the content immediately (framer handles this
 * globally via MotionConfig in the providers).
 */
export function Reveal({ children, className, delay = 0, as = "div", id }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -5% 0px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
