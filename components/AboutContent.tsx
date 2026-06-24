import { about } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal, RevealItem } from "./ui/Reveal";

export function AboutContent() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="section-wrap">
        <SectionHeader
          label={about.eyebrow}
          title={about.title}
          sub={about.intro}
          className="mb-14"
        />

        <Reveal stagger className="grid gap-5 md:grid-cols-3">
          {about.beliefs.map((belief) => (
            <RevealItem key={belief.title}>
              <article className="h-full border border-card-border bg-card p-7">
                <h3 className="h3-display mb-3 text-ink">{belief.title}</h3>
                <p className="text-[14px] leading-relaxed text-mid">{belief.body}</p>
              </article>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-14 text-center">
          <a
            href={about.cta.href}
            className="inline-flex items-center justify-center border border-brand-600/20 bg-brand-600 px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {about.cta.label}
            <span aria-hidden className="ml-2">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
