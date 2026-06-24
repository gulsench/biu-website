import type { HeadlineSegment } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label?: string;
  title: string | HeadlineSegment[];
  sub?: string;
  /** per-section accent token value for the eyebrow */
  accent?: string;
  className?: string;
  align?: "left" | "center";
}

function renderTitle(title: string | HeadlineSegment[]) {
  if (typeof title === "string") return title;

  return title.map((seg, i) =>
    seg.accent ? (
      <span key={i} className="accent">
        {seg.text}
      </span>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  );
}

export function SectionHeader({
  label,
  title,
  sub,
  accent,
  className,
  align = "center",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <Reveal
      stagger
      className={cn(centered && "mx-auto max-w-2xl text-center", className)}
    >
      {label ? (
        <Eyebrow color={accent} className="mb-4">
          {label}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "h2-display mb-4 text-ink",
          centered ? "mx-auto max-w-2xl" : "max-w-3xl"
        )}
      >
        {renderTitle(title)}
      </h2>
      {sub && (
        <p
          className={cn(
            "body-text max-w-xl text-mid",
            centered && "mx-auto"
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
