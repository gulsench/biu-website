import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type LogoTickerItem =
  | { type: "text"; label: string }
  | { type: "image"; name: string; slug: string };

interface LogoTickerProps {
  items: LogoTickerItem[];
  className?: string;
  itemClassName?: string;
  /** Scroll duration in seconds */
  duration?: number;
}

const MIN_ITEMS_PER_TRACK = 16;

function buildTrackItems(items: LogoTickerItem[]) {
  const track = [...items];
  while (track.length < MIN_ITEMS_PER_TRACK) {
    track.push(...items);
  }
  return track;
}

function TickerItem({
  item,
  className,
}: {
  item: LogoTickerItem;
  className?: string;
}) {
  if (item.type === "text") {
    return (
      <span
        className={cn(
          "whitespace-nowrap text-[15px] font-bold tracking-tight text-color-text-muted transition-colors hover:text-color-text sm:text-[17px]",
          className,
        )}
      >
        {item.label}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${item.slug}.svg`}
      alt={item.name}
      width={128}
      height={32}
      className={cn(
        "h-7 w-auto max-w-[128px] object-contain opacity-80 brightness-0 invert transition-opacity hover:opacity-100 sm:h-8",
        className,
      )}
      loading="lazy"
      decoding="async"
    />
  );
}

function TickerTrack({
  items,
  itemClassName,
  ariaHidden = false,
}: {
  items: LogoTickerItem[];
  itemClassName?: string;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 list-none items-center gap-10 pr-10 md:gap-14 md:pr-14"
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <li
          key={`${item.type === "text" ? item.label : item.name}-${ariaHidden ? "clone" : "base"}-${index}`}
          className={cn("flex shrink-0 items-center", itemClassName)}
        >
          <TickerItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export function LogoTicker({
  items,
  className,
  itemClassName,
  duration = 45,
}: LogoTickerProps) {
  const trackItems = useMemo(() => buildTrackItems(items), [items]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="marquee-mask py-4 md:py-5"
        style={{ ["--hero-ticker-duration" as string]: `${duration}s` }}
      >
        <div className="hero-ticker-loop">
          <TickerTrack items={trackItems} itemClassName={itemClassName} />
          <TickerTrack
            items={trackItems}
            itemClassName={itemClassName}
            ariaHidden
          />
        </div>
      </div>
    </div>
  );
}
