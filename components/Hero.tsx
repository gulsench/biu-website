import { hero } from "@/lib/content";
import { Button } from "./ui/Button";
import { GradientBackground } from "./ui/gradient-backgrounds";
import { Reveal, RevealItem } from "./ui/Reveal";
import { HeroSubline } from "./HeroSubline";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientBackground variant="brand" className="bg-surface">
      <div className="mx-auto flex max-w-container flex-col items-center px-6 py-14 text-center md:px-8 md:py-16 lg:py-20">
        {/* Copy */}
        <Reveal stagger className="mx-auto max-w-4xl">
          <RevealItem>
            <span className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2">
              <span className="h-1.5 w-1.5 bg-brand-600" />
              <span className="eyebrow-text text-muted">{hero.eyebrow}</span>
            </span>
          </RevealItem>

          <RevealItem>
            <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.08] tracking-[-0.04em] text-ink">
              <span className="block">
                {hero.h1.map((seg, i) => (
                  <span key={i} className={seg.accent ? "accent" : undefined}>
                    {seg.text}
                  </span>
                ))}
              </span>
              <HeroSubline className="mt-3 block text-[clamp(1.5rem,3vw,2.125rem)] font-normal leading-[1.15] tracking-[-0.035em] text-ink/75">
                {hero.h1Line2}
              </HeroSubline>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] font-semibold leading-[1.45] tracking-[-0.015em] text-ink sm:mt-7 sm:text-[1.25rem]">
              {hero.sub}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-7 flex w-full justify-center sm:w-auto">
              <Button variant="primary" size="lg" className="w-full max-w-xs sm:w-auto">
                {hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </div>
      </GradientBackground>
    </section>
  );
}
