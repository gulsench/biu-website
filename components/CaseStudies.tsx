import { caseStudies } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal, RevealItem } from "./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";

export function CaseStudies({ showSub = false }: { showSub?: boolean }) {
  return (
    <section id="customer-stories" className="relative overflow-hidden border-b border-border bg-band">
      <SectionBackground tone="band" />
      <div className="section-wrap relative z-10">
        <SectionHeader
          title={caseStudies.title}
          sub={showSub ? caseStudies.sub : undefined}
          className="mb-14"
        />

        <Reveal stagger className="grid gap-5 md:grid-cols-3">
          {caseStudies.testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col border border-card-border bg-card p-7">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="mb-4 text-brand-600/40"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10 11H6.5A2.5 2.5 0 0 1 9 8.5V6a5 5 0 0 0-5 5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Zm10 0h-3.5A2.5 2.5 0 0 1 19 8.5V6a5 5 0 0 0-5 5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-[14px] font-semibold text-ink">{t.name}</p>
                  <p className="text-[13px] text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
