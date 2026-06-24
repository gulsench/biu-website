import { framework } from"@/lib/content";
import { SectionHeader } from"./ui/SectionHeader";
import { Reveal, RevealItem } from"./ui/Reveal";

export function Framework() {
 return (
 <section id="framework"className="border-b border-border bg-band">
 <div className="mx-auto max-w-container px-6 py-24">
 <SectionHeader
 label={framework.eyebrow}
 title={framework.title}
 sub={framework.sub}
 className="mb-14"
 />

 <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {framework.steps.map((step) => (
 <RevealItem key={step.title}>
 <div className="h-full border border-card-border bg-card p-7 transition-colors hover:border-brand-600/30">
 <span className="font-mono text-[13px] font-bold text-brand-600">
 {step.tag}
 </span>
 <h3 className="h3-display mb-2 mt-4 text-ink">{step.title}</h3>
 <p className="text-[14px] leading-relaxed text-mid">
 {step.body}
 </p>
 </div>
 </RevealItem>
 ))}
 </Reveal>
 </div>
 </section>
 );
}
