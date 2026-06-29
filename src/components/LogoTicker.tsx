import { cn } from "@/lib/utils";

export type LogoTickerItem =
  | { type: "text"; label: string }
  | { type: "image"; name: string; slug: string };

interface LogoTickerProps {
  items: LogoTickerItem[];
  className?: string;
  itemClassName?: string;
}

export function LogoTicker({ items, className, itemClassName }: LogoTickerProps) {
  const ticker = [...items, ...items];

  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <ul className="flex w-max animate-hero-ticker-scroll list-none items-center gap-10 px-4 md:gap-14">
        {ticker.map((item, i) => (
          <li
            key={`${item.type === "text" ? item.label : item.name}-${i}`}
            className={cn("flex-shrink-0", itemClassName)}
            aria-hidden={i >= items.length}
          >
            {item.type === "text" ? (
              <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-color-text-dim transition-colors hover:text-blue sm:text-[17px]">
                {item.label}
              </span>
            ) : (
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${item.slug}.svg`}
                alt={item.name}
                width={120}
                height={28}
                className="h-6 w-auto opacity-70 transition-opacity hover:opacity-100 sm:h-7"
                loading="lazy"
                decoding="async"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
