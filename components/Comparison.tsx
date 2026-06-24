import { comparison } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

export function Comparison() {
  return (
    <section id="compare" className="border-b border-border">
      <div className="mx-auto max-w-container px-6 py-24">
        <SectionHeader
          label="Why BIU"
          title={[
            { text: "Stop piecing it" },
            { text: "together", accent: true },
            { text: "." },
          ]}
          sub="What it looks like before BIU, and after."
          className="mb-14"
        />

        <Reveal className="mx-auto max-w-3xl overflow-hidden border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-surfacealt">
            <div className="px-5 py-4 text-[13px] font-semibold text-muted sm:px-7">
              {comparison.withoutLabel}
            </div>
            <div className="border-l border-border px-5 py-4 text-[13px] font-bold text-green-text sm:px-7">
              {comparison.withLabel}
            </div>
          </div>
          {comparison.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-border last:border-0"
            >
              <div className="flex items-start gap-2.5 px-5 py-4 text-[13.5px] text-mid sm:px-7">
                <span aria-hidden className="mt-0.5 text-muted">
                  ×
                </span>
                {row.without}
              </div>
              <div className="flex items-start gap-2.5 border-l border-border bg-[color-mix(in_srgb,var(--brand-accent)_12%,var(--card))] px-5 py-4 text-[13.5px] font-medium text-ink sm:px-7">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  className="mt-0.5 flex-shrink-0 text-brand-600"
                  aria-hidden
                >
                  <path
                    d="M4 10.5 8 14.5 16 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {row.with}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
