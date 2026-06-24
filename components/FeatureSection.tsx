import type { FeatureSection as FeatureData } from "@/lib/content";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealItem } from "./ui/Reveal";
import { FeatureMock } from "./FeatureMock";
import { cn } from "@/lib/cn";

export function FeatureSection({
  data,
  flip,
}: {
  data: FeatureData;
  flip?: boolean;
}) {
  const isAeo = data.id === "aeo";

  return (
    <div
      id={data.id}
      className={cn(
        "scroll-mt-16 border-b border-border",
        isAeo
          ? "bg-brand-accent/[0.04]"
          : undefined,
      )}
    >
      <div className="mx-auto grid max-w-container items-center gap-10 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal stagger className={cn(flip && "lg:order-2")}>
          <RevealItem>
            <div className="mb-5 flex items-center gap-3">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              {isAeo && (
                <span className="border border-brand-accent/30 bg-brand-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-text">
                  Ships first
                </span>
              )}
              {data.status === "Coming soon" && (
                <span className="border border-border bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-mid">
                  {data.status}
                </span>
              )}
            </div>
          </RevealItem>
          <RevealItem>
            <h2 className="h2-display mb-5 max-w-xl text-ink">
              {data.title.map((seg, i) => (
                <span key={i} className={seg.accent ? "accent" : undefined}>
                  {seg.text}
                </span>
              ))}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="body-text mb-7 max-w-lg text-mid">{data.body}</p>
          </RevealItem>
          <RevealItem>
            <ul className="space-y-3">
              {data.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[14.5px] text-ink"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    className="mt-0.5 flex-shrink-0 text-brand-600"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5 8 14.5 16 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>

        {/* Mock */}
        <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>
          <div
            className={cn(
              "relative",
              isAeo &&
                "before:pointer-events-none before:absolute before:-inset-3 before:bg-brand-accent/[0.07] before:blur-xl",
            )}
          >
            <FeatureMock variant={data.mock} highlight={isAeo} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
