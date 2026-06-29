import { Reveal } from "@/components/Reveal";
import { LogoTicker } from "@/components/LogoTicker";

const logos = [
  "Northbeam",
  "Loop",
  "Glowwell",
  "Stack & Co",
  "Verdant",
  "Hypergrowth",
  "Onyx Labs",
  "Brightside",
];

export function LogoCarousel() {
  return (
    <section className="w-full border-t border-color-border bg-color-bg py-8 md:py-12">
      <div className="section-container">
        <Reveal>
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-color-text-dim sm:mb-8">
            Trusted by modern brand and growth teams
          </p>
          <LogoTicker
            items={logos.map((label) => ({ type: "text" as const, label }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
