"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  modulePillars,
  pillarsCategory,
  productModules,
} from "@/lib/content";
import { FeatureMock } from "./FeatureMock";
import { cn } from "@/lib/cn";
import { SectionBackground } from "./ui/SectionBackground";

export function ProductPillars() {
  const [activeModule, setActiveModule] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const reduce = useReducedMotion();

  const currentModule = productModules[activeModule];
  const pillars = modulePillars[currentModule.id];
  const currentPillar = pillars[activePillar];
  const previewKey = `${currentModule.id}-${currentPillar.id}`;

  function selectModule(index: number) {
    setActiveModule(index);
    setActivePillar(0);
  }

  return (
    <section id="modules" className="relative overflow-hidden border-b border-border bg-surface">
      <SectionBackground tone="surface" />
      <div className="section-wrap relative z-10">
        <h2 className="h2-display mb-8 max-w-2xl text-ink md:mb-12">{pillarsCategory.title}</h2>

        {/* Module selector */}
        <div className="mb-12">
          <p className="eyebrow-text mb-4 text-mid">{pillarsCategory.modulesLabel}</p>
          <div
            role="tablist"
            aria-label="Product modules"
            className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
          >
            {productModules.map((mod, i) => {
              const selected = i === activeModule;
              return (
                <button
                  key={mod.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectModule(i)}
                  data-active={selected}
                  className={cn(
                    "module-nav-item border px-3 py-2.5 text-[13px] font-semibold transition-colors sm:px-4 sm:text-[14px]",
                    selected
                      ? "border-brand-600/30 bg-brand-glow text-ink"
                      : "border-border bg-card text-mid hover:border-brand-600/20 hover:text-ink",
                  )}
                >
                  {mod.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14">
          {/* Left: pillar list */}
          <div>
            <p className="eyebrow-text mb-4 text-mid">{pillarsCategory.pillarsLabel}</p>
            <p className="mb-6 text-[15px] font-medium text-ink">
              {currentModule.label}
            </p>

            <div
              role="tablist"
              aria-label={`${currentModule.label} product pillars`}
              className="mb-8 flex flex-col gap-1"
            >
              {pillars.map((pillar, i) => {
                const selected = i === activePillar;
                return (
                  <button
                    key={pillar.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActivePillar(i)}
                    data-active={selected}
                    className={cn(
                      "module-nav-item px-4 py-3.5 text-left text-[17px] font-semibold tracking-tight",
                      selected ? "text-ink" : "text-mid hover:text-ink",
                    )}
                  >
                    {pillar.label}
                  </button>
                );
              })}
            </div>

            <button type="button" className="module-cta w-full px-6 py-3 text-[14px] font-semibold sm:w-auto">
              {pillarsCategory.cta}
            </button>
          </div>

          {/* Right: preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={previewKey}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: reduce ? 0 : 0.28 }}
              className="module-preview-panel flex min-h-[300px] items-center justify-center p-4 sm:min-h-[360px] sm:p-8 lg:min-h-[480px] lg:p-12"
            >
              <FeatureMock
                variant={currentPillar.mock}
                modulePreview
                highlight={activePillar === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
