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
    <section id="modules" className="relative overflow-hidden section-edge-b bg-surface">
      <SectionBackground tone="surface" />
      <div className="section-wrap relative z-10">
        <h2 className="h2-display mx-auto mb-8 max-w-2xl text-center text-ink md:mb-12">
          {pillarsCategory.title}
        </h2>

        {/* Module selector */}
        <div className="mb-10 flex justify-center md:mb-12">
          <div
            role="tablist"
            aria-label="Product modules"
            className="grid max-w-xl grid-cols-2 justify-items-center gap-2 sm:flex sm:flex-wrap sm:justify-center"
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
            <p className="mb-4 text-[13px] font-semibold text-green-text sm:text-[14px]">
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
          <div className="module-preview-panel flex h-[360px] items-stretch justify-center p-4 sm:h-[400px] sm:p-8 lg:h-[480px] lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={previewKey}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: reduce ? 0 : 0.28 }}
                className="flex h-full w-full max-w-md items-stretch"
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
      </div>
    </section>
  );
}
