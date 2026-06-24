import { integrations } from"@/lib/content";
import { SectionHeader } from"./ui/SectionHeader";
import { Reveal, RevealItem } from"./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";

export function Integrations() {
 return (
 <section id="integrations" className="relative overflow-hidden border-b border-border bg-surface">
      <SectionBackground tone="surface" />
      <div className="section-wrap relative z-10">
 <SectionHeader
 label={integrations.eyebrow}
 title={integrations.title}
 sub={integrations.sub}
 className="mb-14"
 />

        <Reveal
          stagger
          className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-4"
        >
          {integrations.logos.map((name) => (
            <RevealItem key={name}>
              <div className="relative flex items-center justify-center bg-card px-4 py-8 text-[16px] font-bold tracking-tight text-mid transition-all duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:bg-brand-glow hover:text-brand-700 hover:shadow-[0_8px_24px_rgba(22,163,74,0.14)]">
                {name}
              </div>
            </RevealItem>
          ))}
        </Reveal>
 </div>
 </section>
 );
}
