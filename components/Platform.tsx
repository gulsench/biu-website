import { platform } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Platform() {
  return (
    <section id="platform" className="border-b border-border">
      <div className="mx-auto max-w-container px-6 py-24">
        <SectionHeader
          label="The platform"
          title={[
            { text: "One platform. One" },
            { text: "score", accent: true },
            { text: "." },
          ]}
          sub="Every module feeds a single Market Momentum Score, so the whole team reads from one source of truth."
          className="mb-14"
        />

        <Reveal stagger className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {platform.map((p, i) => (
            <div
              key={p.title}
              className="bg-card p-7 transition-colors duration-300 hover:bg-brand-glow"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-[12px] font-semibold text-green-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow-text text-muted">{p.tag}</span>
              </div>
              <h3 className="h3-display mb-2 text-ink">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-mid">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
