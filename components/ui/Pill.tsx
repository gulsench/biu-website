import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PillProps {
  children: ReactNode;
  className?: string;
  /** inline style for token-driven colors (e.g. per-module hue) */
  tone?: "neutral" | "accent";
  dot?: boolean;
  dotColor?: string;
  textColor?: string;
  bgColor?: string;
}

export function Pill({
  children,
  className,
  dot = false,
  dotColor,
  textColor,
  bgColor,
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold",
        className
      )}
      style={{ color: textColor, background: bgColor }}
    >
      {dot && (
        <span
          className="h-1.5 w-1.5"
          style={{ background: dotColor ?? "currentColor" }}
        />
      )}
      {children}
    </span>
  );
}
