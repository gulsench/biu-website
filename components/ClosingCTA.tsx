import { closingCta } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";

export function ClosingCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-surface">
      <SectionBackground tone="surface" />
      <div className="relative z-10 mx-auto max-w-container px-4 py-10 sm:px-6 md:py-16">
        <Reveal
          stagger
          className="relative overflow-hidden bg-brand-600 px-4 py-14 text-center sm:px-6 sm:py-20 md:px-12"
        >
          <SectionBackground tone="accent" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h2-display mb-5 text-white">
              {closingCta.headline.map((seg, i) => (
                <span key={i} className={seg.accent ? "text-brand-900" : undefined}>
                  {seg.text}
                </span>
              ))}
            </h2>
            <p className="mb-9 text-[15px] text-white/85">{closingCta.sub}</p>
            <Button variant="audit" size="lg">
              {closingCta.cta}
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
