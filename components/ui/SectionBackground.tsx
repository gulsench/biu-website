import { cn } from "@/lib/cn";

export type SectionTone = "surface" | "band" | "accent";

const toneStyles: Record<
  SectionTone,
  { orbA: string; orbB: string; wash?: string }
> = {
  surface: {
    orbA: "bg-[radial-gradient(circle,rgba(34,197,94,0.13)_0%,transparent_68%)]",
    orbB: "bg-[radial-gradient(circle,rgba(22,163,74,0.07)_0%,transparent_72%)]",
    wash:
      "bg-[linear-gradient(165deg,rgba(240,253,244,0.45)_0%,transparent_42%,rgba(250,250,250,0.6)_100%)]",
  },
  band: {
    orbA: "bg-[radial-gradient(circle,rgba(34,197,94,0.09)_0%,transparent_70%)]",
    orbB: "bg-[radial-gradient(circle,rgba(245,245,245,0.9)_0%,transparent_72%)]",
    wash:
      "bg-[linear-gradient(120deg,transparent_0%,rgba(240,253,244,0.35)_55%,transparent_100%)]",
  },
  accent: {
    orbA: "bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_68%)]",
    orbB: "bg-[radial-gradient(circle,rgba(0,0,0,0.07)_0%,transparent_72%)]",
  },
};

interface SectionBackgroundProps {
  tone?: SectionTone;
  /** Lighter motion for compact sections like logo strips */
  subtle?: boolean;
  className?: string;
}

export function SectionBackground({
  tone = "surface",
  subtle = false,
  className,
}: SectionBackgroundProps) {
  const styles = toneStyles[tone];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "section-bg-orb section-bg-orb-a",
          styles.orbA,
          subtle && "section-bg-orb--subtle",
        )}
      />
      <div
        className={cn(
          "section-bg-orb section-bg-orb-b",
          styles.orbB,
          subtle && "section-bg-orb--subtle",
        )}
      />
      {styles.wash ? (
        <div className={cn("section-bg-wash", styles.wash)} />
      ) : null}
    </div>
  );
}
