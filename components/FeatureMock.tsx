"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MockVariant } from "@/lib/content";
import { cn } from "@/lib/cn";

interface FeatureMockProps {
  variant: MockVariant;
  highlight?: boolean;
  /** Rounded card style for the module explorer panel */
  modulePreview?: boolean;
}

/** Clean, green-only product mockups shown beside each feature. */
export function FeatureMock({ variant, highlight, modulePreview }: FeatureMockProps) {
  if (variant === "content") return <ContentMock modulePreview={modulePreview} />;
  if (variant === "video") return <VideoMock modulePreview={modulePreview} />;
  if (variant === "roleplay") return <RoleplayMock modulePreview={modulePreview} />;
  if (variant === "reporting") return <ReportingMock modulePreview={modulePreview} />;
  if (variant === "search") return <SearchMock highlight={highlight} modulePreview={modulePreview} />;
  if (variant === "reputation") return <ReputationMock modulePreview={modulePreview} />;
  if (variant === "ecom") return <EcomMock modulePreview={modulePreview} />;
  return <ReachMock modulePreview={modulePreview} />;
}

function Panel({
  children,
  preview,
  highlight,
  modulePreview,
}: {
  children: React.ReactNode;
  preview?: boolean;
  highlight?: boolean;
  modulePreview?: boolean;
}) {
  return (
    <div
      className={cn(
        modulePreview ? "module-card w-full max-w-md p-4 sm:p-6" : "border bg-card p-4 shadow-lift sm:p-6",
        !modulePreview &&
          (highlight
            ? "border-[var(--card-highlight-border)] ring-1 ring-brand-accent/25"
            : "border-[var(--card-border)] ring-1 ring-black/[0.04]"),
        !modulePreview && highlight && "border-l-4 border-l-brand-accent",
      )}
    >
      {children}
    </div>
  );
}

function PanelHead({
  label,
  badge,
}: {
  label: string;
  badge?: "preview";
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <p className="eyebrow-text text-mid">{label}</p>
      {badge === "preview" && (
        <span className="border border-border bg-card-inner px-2 py-0.5 text-[11px] font-medium text-mid">
          Preview
        </span>
      )}
    </div>
  );
}

function IllustrativeDisclaimer() {
  return (
    <p className="mt-4 text-xs italic text-mid/80">
      Illustrative. Not your account
    </p>
  );
}

function SearchMock({
  highlight,
  modulePreview,
}: {
  highlight?: boolean;
  modulePreview?: boolean;
}) {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 12 },
    { name: "Leader", pct: 78 },
    { name: "Competitor B", pct: 41 },
    { name: "Competitor C", pct: 23 },
  ];
  return (
    <Panel highlight={highlight} modulePreview={modulePreview}>
      <PanelHead label="AI Share of Search" />
      <div className="space-y-4 border border-[var(--card-border)] bg-card-inner p-4">
        {rows.map((r, i) => (
          <div key={r.name}>
            <div className="mb-1.5 flex items-center justify-between text-[12.5px]">
              <span className={i === 0 ? "font-bold text-ink" : "text-mid"}>
                {r.name}
              </span>
              <span className="font-mono font-semibold text-ink">{r.pct}%</span>
            </div>
            <div className="h-2.5 overflow-hidden bg-surfacealt">
              <motion.div
                className="h-full"
                style={{
                  background: i === 0 ? "var(--brand-600)" : "var(--brand-400)",
                  opacity: i === 0 ? 1 : 0.55,
                }}
                initial={{ width: reduce ? `${r.pct}%` : 0 }}
                whileInView={{ width: `${r.pct}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: reduce ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-border pt-4 text-[12px] text-mid">
        You appear in <span className="font-semibold text-ink">12%</span> of
        category answers. The leader appears in{""}
        <span className="font-semibold text-ink">78%</span>.
      </p>
    </Panel>
  );
}

function ReputationMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const score = 58;
  const circumference = 2 * Math.PI * 52;
  return (
    <Panel preview modulePreview={modulePreview}>
      <PanelHead label="Reputation Signal" badge="preview" />
      <div className="border border-[var(--card-border)] bg-card-inner p-4">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="relative h-32 w-32 flex-shrink-0">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="var(--border)"
                strokeWidth="12"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="var(--brand-600)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: reduce
                    ? circumference * (1 - score / 100)
                    : circumference,
                }}
                whileInView={{
                  strokeDashoffset: circumference * (1 - score / 100),
                }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: reduce ? 0 : 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold tracking-tight text-ink">
                {score}
              </span>
              <span className="text-[10px] text-muted">/ 100</span>
            </div>
          </div>
          <ul className="space-y-3 text-[12.5px]">
            {[
              ["Review velocity", "Below cadence"],
              ["Sentiment", "Stable"],
              ["Authority", "Improving"],
            ].map(([k, v]) => (
              <li key={k} className="flex flex-col">
                <span className="text-mid">{k}</span>
                <span className="font-semibold text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <IllustrativeDisclaimer />
    </Panel>
  );
}

function EcomMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <Panel preview modulePreview={modulePreview}>
      <PanelHead label="Product Visibility → Revenue" badge="preview" />
      <div className="border border-[var(--card-border)] bg-card-inner p-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[12px] text-muted">Visibility score</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-ink">
              48 <span className="text-muted">→</span> 72
            </p>
          </div>
          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
            className="bg-surfacealt px-4 py-3 text-right"
          >
            <p className="text-[12px] text-muted">Est. organic conversion</p>
            <p className="mt-0.5 text-xl font-extrabold tracking-tight text-ink">
              +$80k<span className="text-[12px] font-semibold text-mid">/qtr</span>
            </p>
          </motion.div>
        </div>
        <div className="mt-5 flex items-end gap-1.5">
          {[34, 40, 38, 46, 52, 60, 66, 72].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1"
              style={{
                background: i >= 6 ? "var(--brand-600)" : "var(--brand-400)",
                opacity: i >= 6 ? 1 : 0.4,
              }}
              initial={{ height: reduce ? h : 0 }}
              whileInView={{ height: h }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
      <IllustrativeDisclaimer />
    </Panel>
  );
}

function ReachMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const pts = [22, 26, 24, 30, 28, 20, 16, 14];
  const max = 32;
  const w = 280;
  const h = 90;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join("");
  return (
    <Panel preview modulePreview={modulePreview}>
      <PanelHead label="Reach Velocity" badge="preview" />
      <div className="border border-[var(--card-border)] bg-card-inner p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-extrabold tracking-tight text-ink">
            71{""}
            <span className="text-base font-semibold text-mid">↓ from 76</span>
          </p>
          <span className="bg-surfacealt px-2.5 py-1 text-[11px] font-medium text-mid">
            Posting −60%
          </span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 w-full overflow-visible">
          <motion.path
            d={path}
            fill="none"
            stroke="var(--brand-600)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: "easeInOut" }}
          />
        </svg>
        <p className="mt-4 border-t border-border pt-4 text-[12px] text-mid">
          One posting change is rippling across three channels.
        </p>
      </div>
      <IllustrativeDisclaimer />
    </Panel>
  );
}

function ContentMock({ modulePreview }: { modulePreview?: boolean }) {
  return (
    <div className={cn("relative w-full max-w-lg", modulePreview && "px-2")}>
      <div className="module-card absolute -right-2 top-6 z-0 w-[88%] p-5 opacity-90">
        <p className="text-[15px] font-bold text-ink">Draft lesson outline</p>
        <p className="mt-1 text-[12px] text-muted">Module 2 · Product knowledge</p>
        <div className="mt-4 space-y-2">
          {[72, 88, 64].map((w) => (
            <div
              key={w}
              className="h-2 bg-surfacealt"
              style={{ width: `${w}%`, borderRadius: 4 }}
            />
          ))}
        </div>
      </div>
      <div className="module-card relative z-10 mx-auto w-[92%] p-6">
        <p className="text-[17px] font-bold text-ink">Generate with AI</p>
        <p className="mt-1 text-[13px] text-muted">Topic, tone, and learning objective</p>
        <div className="module-chip mt-5 border border-border bg-surfacealt px-4 py-3 text-[13px] text-mid">
          Explain our positioning vs. top 3 competitors for new hires
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Concise", "Scenario-based", "Quiz-ready"].map((tag) => (
            <span
              key={tag}
              className="module-pill border border-border bg-white px-3 py-1 text-[11px] font-medium text-mid"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="module-cta mt-5 w-full px-4 py-2.5 text-[13px] font-semibold"
        >
          Generate content +
        </button>
      </div>
    </div>
  );
}

function VideoMock({ modulePreview }: { modulePreview?: boolean }) {
  const avatars = [
    { name: "Derek", selected: true },
    { name: "Maya", selected: false },
    { name: "Alex", selected: false },
  ];

  return (
    <div className={cn("relative w-full max-w-lg", modulePreview && "px-2")}>
      <div className="module-card absolute -left-1 top-8 z-0 w-[78%] p-5 opacity-95">
        <p className="text-[15px] font-bold text-ink">Create AI Video</p>
        <p className="mt-1 text-[12px] text-muted">Lesson 1.1 · Identify key objections</p>
        <p className="mt-4 text-[12px] font-semibold text-ink">Script</p>
        <div className="mt-2 space-y-2">
          {[90, 76, 84].map((w) => (
            <div
              key={w}
              className="h-2 bg-surfacealt"
              style={{ width: `${w}%`, borderRadius: 4 }}
            />
          ))}
        </div>
        <button
          type="button"
          className="module-cta mt-5 px-4 py-2 text-[12px] font-semibold"
        >
          Generate Video +
        </button>
      </div>
      <div className="module-card relative z-10 ml-auto w-[88%] p-6">
        <p className="text-[17px] font-bold text-ink">Select Avatar</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {avatars.map((a) => (
            <div key={a.name} className="relative">
              <div
                className={cn(
                  "module-chip aspect-square overflow-hidden border bg-surfacealt",
                  a.selected ? "border-ink" : "border-border",
                )}
              >
                <div className="flex h-full items-end justify-center bg-gradient-to-b from-[#e8e4df] to-[#d4cfc8] pb-2 text-[10px] font-medium text-mid">
                  {a.name}
                </div>
              </div>
              {a.selected && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-ink text-[10px] text-white">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] font-semibold text-ink">Voice and Language</p>
        <div className="mt-2 space-y-2">
          <div className="module-chip flex items-center justify-between border border-border bg-white px-3 py-2.5 text-[12px]">
            <span>🇮🇳 English (India)</span>
            <span className="text-muted">▾</span>
          </div>
          <div className="module-chip flex items-center justify-between border border-border bg-white px-3 py-2.5 text-[12px]">
            <span>🔊 Sushant (English IND)</span>
            <span className="text-muted">▾</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[12px] font-medium text-ink">Auto-generate Captions</span>
          <span className="module-pill relative h-6 w-11 bg-ink" aria-hidden>
            <span className="absolute right-0.5 top-0.5 h-5 w-5 bg-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

function RoleplayMock({ modulePreview }: { modulePreview?: boolean }) {
  const lines = [
    { role: "Coach", text: "A buyer says your price is 30% above the market. How do you open?" },
    { role: "You", text: "I'd anchor on outcomes first: what's the cost of staying with the status quo?" },
    { role: "Coach", text: "Strong start. Now handle the follow-up: they want a discount to match." },
  ];

  return (
    <div className={cn("w-full max-w-md", modulePreview && "px-2")}>
      <div className="module-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[17px] font-bold text-ink">Live roleplay</p>
            <p className="mt-1 text-[12px] text-muted">Scenario · Enterprise objection handling</p>
          </div>
          <span className="module-pill bg-[#e8f4ef] px-3 py-1 text-[11px] font-semibold text-brand-700">
            In progress
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {lines.map((line) => (
            <div
              key={line.text}
              className={cn(
                "module-chip px-4 py-3 text-[13px] leading-relaxed",
                line.role === "You"
                  ? "ml-6 border border-brand-600/20 bg-brand-glow text-ink"
                  : "border border-border bg-surfacealt text-mid",
              )}
            >
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-muted">
                {line.role}
              </span>
              {line.text}
            </div>
          ))}
        </div>
        <div className="module-chip mt-4 flex items-center gap-2 border border-border bg-white px-4 py-3">
          <span className="text-[13px] text-muted">Type your response…</span>
        </div>
      </div>
    </div>
  );
}

function ReportingMock({ modulePreview }: { modulePreview?: boolean }) {
  const bars = [42, 58, 48, 72, 66, 80];

  return (
    <div className={cn("w-full max-w-md", modulePreview && "px-2")}>
      <div className="module-card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[17px] font-bold text-ink">Team progress</p>
            <p className="mt-1 text-[12px] text-muted">Last 30 days · All cohorts</p>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-ink">
            84<span className="text-sm font-semibold text-mid">%</span>
          </span>
        </div>
        <div className="mt-6 flex items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: h,
                borderRadius: 6,
                background: i === bars.length - 1 ? "var(--brand-600)" : "#d4e4dc",
              }}
            />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ["Completion rate", "84%"],
            ["Avg. quiz score", "91%"],
            ["Time to certify", "12 days"],
            ["Active learners", "248"],
          ].map(([label, value]) => (
            <div key={label} className="module-chip border border-border bg-surfacealt px-3 py-3">
              <p className="text-[11px] text-muted">{label}</p>
              <p className="mt-0.5 text-[15px] font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
