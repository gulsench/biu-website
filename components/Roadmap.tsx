import { roadmap } from"@/lib/content";
import { SectionHeader } from"./ui/SectionHeader";
import { Reveal, RevealItem } from"./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";

export function Roadmap() {
 return (
 <section id="roadmap" className="relative overflow-hidden border-b border-border bg-surface">
 <SectionBackground tone="surface" />
 <div className="section-wrap relative z-10">
 <SectionHeader
 label={roadmap.eyebrow}
 title={roadmap.title}
 className="mb-14"
 />

 <Reveal stagger className="grid gap-5 md:grid-cols-2">
 {roadmap.items.map((item) => (
 <RevealItem key={item.name}>
 <div className="relative h-full overflow-hidden border border-card-border bg-card p-8">
 <div
 aria-hidden
 className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_70%)]"
 />
 <span className="inline-flex border border-brand-600/30 bg-brand-glow px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
 Coming soon
 </span>
 <h3 className="h3-display mb-2 mt-5 text-ink">{item.name}</h3>
 <p className="max-w-md text-[14px] leading-relaxed text-mid">
 {item.body}
 </p>
 </div>
 </RevealItem>
 ))}
 </Reveal>
 </div>
 </section>
 );
}
