import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type GradientVariant = "indigo" | "emerald" | "teal" | "brand";

const gradientStyles: Record<GradientVariant, CSSProperties> = {
  indigo: {
    backgroundImage:
      "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    backgroundSize: "100% 100%",
  },
  emerald: {
    backgroundImage:
      "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #10b981 100%)",
    backgroundSize: "100% 100%",
  },
  teal: {
    backgroundImage:
      "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)",
    backgroundSize: "100% 100%",
  },
  brand: {
    backgroundImage:
      "radial-gradient(125% 125% at 50% 10%, #1a201e 35%, #0f1211 58%, #141f19 100%)",
    backgroundSize: "100% 100%",
  },
};

export interface GradientBackgroundProps {
  /** Preset gradient from the source snippets (`brand` = BIU green). */
  variant?: GradientVariant;
  className?: string;
  children?: ReactNode;
}

export function GradientBackground({
  variant = "brand",
  className,
  children,
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={gradientStyles[variant]}
      />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}

/** shadcn-style default export name from the source snippet. */
export const Component = GradientBackground;
