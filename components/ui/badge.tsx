import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-mono transition-colors",
  {
    variants: {
      variant: {
        violet:
          "border-violet/30 bg-transparent text-violet text-[10px] px-[9px] py-[3px]",
        muted:
          "border-border-strong bg-transparent text-ink-6 text-[10px] px-[9px] py-[3px]",
        tech:
          "border-border bg-transparent text-ink-7 text-[11px] px-[9px] py-[5px] rounded-[7px]",
      },
    },
    defaultVariants: { variant: "violet" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
