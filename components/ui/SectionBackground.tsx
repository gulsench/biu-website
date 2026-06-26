import { cn } from "@/lib/cn";

export type SectionTone = "surface" | "band" | "accent";

const toneStyles: Record<
  SectionTone,
  { orbA: string; orbB: string; wash?: string }
> = {
  surface: {
    orbA: "bg-[radial-gradient(circle,rgba(74,222,128,0.12)_0%,transparent_68%)]",
    orbB: "bg-[radial-gradient(circle,rgba(54,189,131,0.06)_0%,transparent_72%)]",
    wash:
      "bg-[linear-gradient(165deg,rgba(15,22,19,0.4)_0%,transparent_42%,rgba(15,18,17,0.85)_100%)]",
  },
  band: {
    orbA: "bg-[radial-gradient(circle,rgba(74,222,128,0.08)_0%,transparent_70%)]",
    orbB: "bg-[radial-gradient(circle,rgba(20,24,23,0.9)_0%,transparent_72%)]",
    wash:
      "bg-[linear-gradient(120deg,transparent_0%,rgba(54,189,131,0.06)_55%,transparent_100%)]",
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
