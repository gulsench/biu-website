import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { productModules } from "@/lib/modules";
import { ModuleMock } from "@/components/ModuleMock";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

function CornerMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("absolute h-2 w-2 border border-white/40 bg-white/10", className)}
      aria-hidden
    />
  );
}

export function FourModules() {
  const [activeModule, setActiveModule] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const reduce = useReducedMotion();

  const module = productModules[activeModule];
  const pillar = module.pillars[activePillar];
  const previewKey = `${module.id}-${pillar.id}`;
  const moduleNumber = String(activeModule + 1).padStart(2, "0");

  function selectModule(index: number) {
    setActiveModule(index);
    setActivePillar(0);
  }

  return (
    <section id="modules" className="w-full border-t border-color-border bg-color-surface py-16 md:py-24">
      <div className="section-container">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:gap-16">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-medium leading-tight text-color-text md:text-[2.5rem]">
                Four intelligence{" "}
                <span className="text-blue">modules.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-color-text-muted md:text-[15px]">
                One platform for AI visibility, social momentum, competitive
                intelligence, and reputation — folded into a single score.
              </p>
            </Reveal>

            <nav
              role="tablist"
              aria-label="Intelligence modules"
              className="mt-10 flex flex-col"
            >
              {productModules.map((mod, index) => {
                const selected = index === activeModule;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={mod.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectModule(index)}
                    className={cn(
                      "group relative flex w-full items-center gap-4 border-b border-color-border py-4 text-left transition-colors",
                      selected ? "text-color-text" : "text-color-text-muted hover:text-color-text",
                    )}
                  >
                    <span className="w-6 flex-shrink-0 font-mono text-xs text-color-text-dim">
                      {number}
                    </span>
                    <span className="flex-1 font-heading text-base font-medium leading-snug md:text-[17px]">
                      {mod.label}
                    </span>
                    <span
                      className={cn(
                        "h-2 w-2 flex-shrink-0",
                        selected ? "bg-blue" : "bg-transparent",
                      )}
                      aria-hidden
                    />
                    {selected ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue" aria-hidden />
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden bg-blue">
                <CornerMark className="left-3 top-3" />
                <CornerMark className="right-3 top-3" />
                <CornerMark className="bottom-3 left-3" />
                <CornerMark className="bottom-3 right-3" />

                <div className="flex min-h-[280px] items-center justify-center p-6 sm:min-h-[320px] sm:p-10 md:min-h-[360px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={previewKey}
                      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                      transition={{ duration: reduce ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}
                      className="w-full max-w-md"
                    >
                      <ModuleMock pillarId={pillar.id} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={previewKey}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: reduce ? 0 : 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="border border-t-0 border-color-border bg-color-surface px-6 py-8 sm:px-8 sm:py-10"
                >
                  <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue">
                    {moduleNumber} · {module.label.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-medium text-color-text md:text-4xl">
                    {pillar.label}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-color-text-muted md:text-base">
                    {pillar.description}
                  </p>

                  <div
                    role="tablist"
                    aria-label={`${module.label} pillars`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {module.pillars.map((p, i) => (
                      <button
                        key={p.id}
                        role="tab"
                        aria-selected={i === activePillar}
                        onClick={() => setActivePillar(i)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors",
                          i === activePillar
                            ? "border-blue/30 bg-color-blue-tint text-blue"
                            : "border-color-border bg-color-bg-alt text-color-text-muted hover:border-blue/20 hover:text-color-text",
                        )}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
