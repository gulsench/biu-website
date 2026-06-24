import { modulesHub, productModules } from "@/lib/content";
import { cn } from "@/lib/cn";
import { SectionBackground } from "./ui/SectionBackground";

function ModuleBox({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "modules-diagram-box flex min-h-[64px] items-center border border-card-border bg-card px-5 py-4",
        className,
      )}
    >
      <span className="text-[14px] font-semibold leading-snug text-ink sm:text-[15px]">
        {label}
      </span>
    </div>
  );
}

function HubBox({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "modules-diagram-hub flex min-h-[220px] flex-col items-center justify-center border-2 border-brand-600/35 bg-brand-glow px-6 py-8 text-center sm:min-h-[260px]",
        className,
      )}
    >
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
        {modulesHub.label}
      </span>
      <p className="mt-3 text-[16px] font-bold leading-snug text-ink sm:text-[17px]">
        {modulesHub.title}
      </p>
      <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-mid">
        {modulesHub.body}
      </p>
    </div>
  );
}

/** Left: four module boxes. Right: single BIU hub. All connected by lines. */
export function FourModulesIllustration() {
  const moduleCenters = [12.5, 37.5, 62.5, 87.5];
  const busX = 56;
  const hubX = 74;

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-surface"
      aria-label="Module architecture diagram"
    >
      <SectionBackground tone="surface" />
      <div className="relative z-10 mx-auto max-w-container px-4 py-12 sm:px-6 md:py-20">
        <figure
          className="modules-diagram mx-auto w-full max-w-4xl"
          aria-label="Four intelligence modules on the left connected to the BIU Market Momentum Score on the right"
        >
          <div className="relative grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 lg:gap-14">
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <g stroke="var(--border)" strokeWidth="0.75" vectorEffect="non-scaling-stroke">
                {moduleCenters.map((y) => (
                  <line key={y} x1="32" y1={y} x2={busX} y2={y} />
                ))}
                <line x1={busX} y1={moduleCenters[0]} x2={busX} y2={moduleCenters[3]} />
                <line x1={busX} y1="50" x2={hubX} y2="50" />
              </g>
            </svg>

            <div className="relative z-[1] flex flex-col gap-3 sm:gap-3.5">
              {productModules.map((mod) => (
                <ModuleBox key={mod.id} label={mod.label} />
              ))}
            </div>

            <div className="relative z-[1] flex items-center justify-center md:justify-end">
              <HubBox className="w-full max-w-[280px]" />
            </div>
          </div>

          <figcaption className="sr-only">
            {productModules.map((m) => m.label).join(", ")} connect to {modulesHub.title}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
