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
  if (variant === "social-content") return <SocialContentMock modulePreview={modulePreview} />;
  if (variant === "social-hashtag") return <SocialHashtagMock modulePreview={modulePreview} />;
  if (variant === "social-comments") return <SocialCommentsMock modulePreview={modulePreview} />;
  if (variant === "social-engagement") return <SocialEngagementMock modulePreview={modulePreview} />;
  if (variant === "aeo-share") return <AeoShareMock modulePreview={modulePreview} />;
  if (variant === "aeo-gaps") return <AeoGapsMock modulePreview={modulePreview} />;
  if (variant === "aeo-alerts") return <AeoAlertsMock modulePreview={modulePreview} />;
  if (variant === "aeo-benchmark") return <AeoBenchmarkMock modulePreview={modulePreview} />;
  if (variant === "comp-share") return <CompShareMock modulePreview={modulePreview} />;
  if (variant === "comp-gaps") return <CompGapsMock modulePreview={modulePreview} />;
  if (variant === "comp-moves") return <CompMovesMock modulePreview={modulePreview} />;
  if (variant === "comp-benchmark") return <CompBenchmarkMock modulePreview={modulePreview} />;
  if (variant === "rep-awareness") return <RepAwarenessMock modulePreview={modulePreview} />;
  if (variant === "rep-trust") return <RepTrustMock modulePreview={modulePreview} />;
  if (variant === "rep-consideration") return <RepConsiderationMock modulePreview={modulePreview} />;
  if (variant === "rep-choice") return <RepChoiceMock modulePreview={modulePreview} />;
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
        modulePreview ? "module-card flex h-full w-full max-w-md flex-col p-4 sm:p-6" : "border bg-card p-4 shadow-lift sm:p-6",
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
        <span className="border border-border bg-card-inner px-2 py-0.5 text-[11px] font-normal text-mid">
          Preview
        </span>
      )}
    </div>
  );
}

function SocialInsight({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 border-t border-border pt-3 text-[11px] leading-relaxed text-mid">
      {children}
    </p>
  );
}

function SocialScoreHeader({
  label,
  score,
  suffix = "/100",
  delta,
  deltaUp,
  subtitle,
}: {
  label: string;
  score: string | number;
  suffix?: string;
  delta: string;
  deltaUp: boolean;
  subtitle: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow-text text-mid">{label}</p>
        <div className="shrink-0 text-right">
          <p className="text-xl font-bold leading-none text-ink">
            {score}
            {suffix ? (
              <span className="text-[12px] font-semibold text-mid">{suffix}</span>
            ) : null}
          </p>
          <p
            className={cn(
              "mt-1 text-[11px] font-semibold",
              deltaUp ? "text-brand-700" : "text-mid",
            )}
          >
            {deltaUp ? "▲" : "▼"} {delta}
          </p>
        </div>
      </div>
      <p className="mt-2 text-[12px] leading-snug text-mid">{subtitle}</p>
    </div>
  );
}

function SocialContentMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const formats = [
    { label: "Reels", metric: "84% avg reach", pct: 84, strong: true },
    { label: "Carousels", metric: "57% saves", pct: 57, strong: false },
    { label: "Static Posts", metric: "28% ↓ fading", pct: 28, strong: false },
    { label: "Text Only", metric: "15% lowest", pct: 15, strong: false },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Content"
        score={74}
        delta="+8 vs last month"
        deltaUp
        subtitle="What you post — how each format performs"
      />
      <div className="space-y-2.5 border border-[var(--card-border)] bg-card-inner p-3">
        {formats.map((row, i) => (
          <div key={row.label} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className="truncate font-medium text-ink">{row.label}</span>
              <span className="shrink-0 text-mid">{row.metric}</span>
            </div>
            <div className="h-1.5 overflow-hidden bg-surfacealt">
              <motion.div
                className="h-full"
                style={{
                  background: row.strong ? "var(--brand-600)" : "var(--brand-400)",
                  opacity: row.strong ? 1 : 0.45,
                }}
                initial={{ width: reduce ? `${row.pct}%` : 0 }}
                whileInView={{ width: `${row.pct}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 0.7, delay: i * 0.06 }}
              />
            </div>
          </div>
        ))}
      </div>
      <SocialInsight>
        Reels posted Mon–Wed get <span className="font-semibold text-ink">2.3×</span> more
        reach than Thu–Fri. BIU shows your best posting window.
      </SocialInsight>
    </Panel>
  );
}

function SocialHashtagMock({ modulePreview }: { modulePreview?: boolean }) {
  const working = [
    { tag: "#BrandIntelligence", note: "↑ reach/post" },
    { tag: "#MarketingOps", note: "↑ reach/post" },
  ];
  const hurting = [
    { tag: "#Marketing", note: "too broad" },
    { tag: "#SocialMedia", note: "saturated" },
  ];
  const opportunities = ["#AIMarketing", "#B2BGrowth", "#GrowthOps"];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Hashtag"
        score={58}
        delta="−4 vs last month"
        deltaUp={false}
        subtitle="Which tags amplify reach — which ones bury you"
      />
      <div className="space-y-3 border border-[var(--card-border)] bg-card-inner p-3">
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-mid">
            Working
          </p>
          <div className="space-y-1">
            {working.map((t) => (
              <div
                key={t.tag}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <span className="truncate font-medium text-brand-700">{t.tag}</span>
                <span className="shrink-0 text-mid">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-2">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-mid">
            Hurting reach
          </p>
          <div className="space-y-1">
            {hurting.map((t) => (
              <div
                key={t.tag}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <span className="truncate font-medium text-ink">{t.tag}</span>
                <span className="shrink-0 text-mid">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 border-t border-border pt-2">
          {opportunities.map((tag) => (
            <span
              key={tag}
              className="module-pill border border-brand-600/20 bg-brand-glow px-2 py-0.5 text-[10px] text-brand-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <SocialInsight>
        <span className="font-semibold text-ink">#Marketing</span> on 74% of posts cuts reach
        by 62%. BIU suggests niche alternatives that lift discovery.
      </SocialInsight>
    </Panel>
  );
}

function SocialCommentsMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const positive = 65;
  const neutral = 22;
  const negative = 13;
  const themes = ["Love the content", "Pricing concern", "Want a demo"];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Comments"
        score={82}
        delta="+12 vs last month"
        deltaUp
        subtitle="What your audience actually says about you"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="var(--border)" strokeWidth="8" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="var(--brand-600)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 26}
                initial={{
                  strokeDashoffset: reduce
                    ? 2 * Math.PI * 26 * (1 - positive / 100)
                    : 2 * Math.PI * 26,
                }}
                whileInView={{
                  strokeDashoffset: 2 * Math.PI * 26 * (1 - positive / 100),
                }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 1 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-ink">{positive}%</span>
              <span className="text-[8px] text-mid">positive</span>
            </div>
          </div>
          <ul className="min-w-0 flex-1 space-y-1 text-[11px]">
            {[
              ["Positive", `${positive}%`, "text-brand-700"],
              ["Neutral", `${neutral}%`, "text-mid"],
              ["Negative", `${negative}%`, "text-mid"],
            ].map(([k, v, color]) => (
              <li key={k} className="flex justify-between gap-2">
                <span className="text-mid">{k}</span>
                <span className={cn("font-semibold", color)}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-3">
          {themes.map((theme) => (
            <span
              key={theme}
              className="module-pill border border-border bg-surfacealt px-2 py-0.5 text-[10px] text-ink"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
      <SocialInsight>
        <span className="font-semibold text-ink">14 prospects</span> asked for a demo in comments
        this month — BIU tags them for follow-up.
      </SocialInsight>
    </Panel>
  );
}

function SocialEngagementMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const pts = [28, 32, 30, 36, 38, 42, 46, 50];
  const w = 240;
  const h = 56;
  const max = 52;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join("");
  const breakdown = [
    ["Likes", "62%"],
    ["Comments", "19%"],
    ["Shares", "11%"],
    ["Saves", "8%"],
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow-text text-mid">Engagement</p>
          <div className="shrink-0 text-right">
            <p className="text-xl font-bold leading-none text-ink">4.2%</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-700">
              ▲ vs 1.8% industry avg
            </p>
          </div>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-mid">
          The one metric that predicts your growth
        </p>
      </div>
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-mid">
          8-week trend
        </p>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-hidden">
          <motion.path
            d={path}
            fill="none"
            stroke="var(--brand-600)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 1, ease: "easeInOut" }}
          />
        </svg>
        <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-border pt-3">
          {breakdown.map(([label, value]) => (
            <div
              key={label}
              className="module-chip border border-border bg-surfacealt px-2 py-1.5"
            >
              <p className="text-[10px] text-mid">{label}</p>
              <p className="text-[12px] font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] font-semibold text-brand-700">
          2.3× industry average ↑
        </p>
      </div>
    </Panel>
  );
}

function AeoShareMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 18, engines: ["P", "G"] },
    { name: "Rival A", pct: 34, engines: ["C", "P", "G"] },
    { name: "Rival B", pct: 22, engines: ["C", "G"] },
    { name: "Rival C", pct: 15, engines: ["P"] },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Share of Search"
        score="18%"
        suffix=""
        delta="in category answers"
        deltaUp={false}
        subtitle="Who owns the AI answer in your category right now"
      />
      <div className="space-y-2.5 border border-[var(--card-border)] bg-card-inner p-3">
        {rows.map((row, i) => (
          <div key={row.name} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className={cn("truncate font-medium", i === 0 ? "text-ink" : "text-mid")}>
                {row.name}
              </span>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="flex gap-0.5">
                  {["C", "P", "G"].map((e) => (
                    <span
                      key={e}
                      className={cn(
                        "flex h-4 w-4 items-center justify-center text-[8px] font-bold",
                        row.engines.includes(e)
                          ? "bg-brand-glow text-brand-700"
                          : "bg-surfacealt text-mid/40",
                      )}
                    >
                      {e}
                    </span>
                  ))}
                </span>
                <span className="w-8 text-right font-mono font-semibold text-ink">{row.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden bg-surfacealt">
              <motion.div
                className="h-full"
                style={{
                  background: i === 0 ? "var(--brand-600)" : "var(--brand-400)",
                  opacity: i === 0 ? 1 : 0.4,
                }}
                initial={{ width: reduce ? `${row.pct}%` : 0 }}
                whileInView={{ width: `${row.pct}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 0.7, delay: i * 0.06 }}
              />
            </div>
          </div>
        ))}
        <p className="pt-1 text-[9px] text-mid">C = ChatGPT · P = Perplexity · G = Google AI</p>
      </div>
      <SocialInsight>
        Rival A owns <span className="font-semibold text-ink">34%</span> of category answers.
        You&apos;re strongest on Perplexity — double down there.
      </SocialInsight>
    </Panel>
  );
}

function AeoGapsMock({ modulePreview }: { modulePreview?: boolean }) {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH" },
    { topic: "Reputation scoring tools", you: false, opp: "URGENT" },
    { topic: "Best AEO platforms", you: true, opp: "LEAD" },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Answer Gaps"
        score={23}
        suffix=" gaps"
        delta="across engines"
        deltaUp={false}
        subtitle="Queries rivals win. You're completely invisible."
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="mb-2 grid grid-cols-[1fr_28px_52px] gap-1 text-[9px] font-semibold uppercase tracking-wide text-mid">
          <span>Topic</span>
          <span className="text-center">You</span>
          <span className="text-right">Opp.</span>
        </div>
        <div className="space-y-2">
          {gaps.map((gap) => (
            <div
              key={gap.topic}
              className="grid grid-cols-[1fr_28px_52px] items-center gap-1 text-[11px]"
            >
              <span className="truncate text-ink">{gap.topic}</span>
              <span className="text-center text-mid">{gap.you ? "✓" : "✕"}</span>
              <span
                className={cn(
                  "module-pill truncate px-1 py-0.5 text-center text-[9px] font-semibold",
                  gap.opp === "URGENT"
                    ? "bg-surfacealt text-ink"
                    : gap.opp === "LEAD"
                      ? "border border-brand-600/20 bg-brand-glow text-brand-700"
                      : "border border-border bg-surfacealt text-mid",
                )}
              >
                {gap.opp}
              </span>
            </div>
          ))}
        </div>
      </div>
      <SocialInsight>
        <span className="font-semibold text-ink">3 urgent gaps</span> where all rivals appear in
        AI answers — BIU prioritizes your content calendar.
      </SocialInsight>
    </Panel>
  );
}

function AeoAlertsMock({ modulePreview }: { modulePreview?: boolean }) {
  const alerts = [
    {
      title: "Rival A cited in ChatGPT for pricing",
      meta: "2 days ago",
      status: "THREAT",
    },
    {
      title: "Rival B added Perplexity source link",
      meta: "4 days ago",
      status: "MONITOR",
    },
    {
      title: "Category query volume up 12%",
      meta: "This week",
      status: "SIGNAL",
    },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Citation Alerts"
        score={3}
        suffix=" new"
        delta="this week"
        deltaUp={false}
        subtitle="What changed in AI answers you don't know about yet"
      />
      <div className="space-y-2 border border-[var(--card-border)] bg-card-inner p-3">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="flex items-start justify-between gap-2 border-b border-border pb-2 last:border-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-ink">{alert.title}</p>
              <p className="text-[10px] text-mid">{alert.meta}</p>
            </div>
            <span
              className={cn(
                "module-pill shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                alert.status === "THREAT"
                  ? "bg-surfacealt text-ink"
                  : alert.status === "MONITOR"
                    ? "border border-border bg-surfacealt text-mid"
                    : "border border-brand-600/20 bg-brand-glow text-brand-700",
              )}
            >
              {alert.status}
            </span>
          </div>
        ))}
      </div>
      <SocialInsight>
        Rival A&apos;s ChatGPT citation is a direct threat to your consideration set — BIU flags
        the exact query cluster.
      </SocialInsight>
    </Panel>
  );
}

function AeoBenchmarkMock({ modulePreview }: { modulePreview?: boolean }) {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const engines = ["GPT", "Perp", "GAI", "Claude"];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="AEO Score"
        score={71}
        delta="#2 in category"
        deltaUp
        subtitle="Your score vs rivals — the one number that settles it"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {engines.map((e, i) => (
            <span
              key={e}
              className={cn(
                "module-pill px-2 py-0.5 text-[9px] font-semibold",
                i === 0
                  ? "border border-brand-600/20 bg-brand-glow text-brand-700"
                  : "border border-border bg-surfacealt text-mid",
              )}
            >
              {e}
            </span>
          ))}
        </div>
        <div className="space-y-1.5">
          {rivals.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between gap-2 text-[11px]"
            >
              <span className={cn("font-medium", r.highlight ? "text-ink" : "text-mid")}>
                {r.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-ink">{r.score}</span>
                <span className="text-[10px] text-mid">{r.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialInsight>
        You rank <span className="font-semibold text-ink">#2 overall</span> — but ChatGPT is where
        Rival A is pulling away. Focus there.
      </SocialInsight>
    </Panel>
  );
}

function CompShareMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 18, channels: ["A"] },
    { name: "Rival A", pct: 34, channels: ["G", "S", "A"] },
    { name: "Rival B", pct: 22, channels: ["G", "S"] },
    { name: "Rival C", pct: 15, channels: ["G"] },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Share of Voice"
        score="18%"
        suffix=""
        delta="of category conversation"
        deltaUp={false}
        subtitle="Who owns the conversation in your category right now"
      />
      <div className="space-y-2.5 border border-[var(--card-border)] bg-card-inner p-3">
        {rows.map((row, i) => (
          <div key={row.name} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className={cn("truncate font-medium", i === 0 ? "text-ink" : "text-mid")}>
                {row.name}
              </span>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="flex gap-0.5">
                  {["G", "S", "A"].map((ch) => (
                    <span
                      key={ch}
                      className={cn(
                        "flex h-4 w-4 items-center justify-center text-[8px] font-bold",
                        row.channels.includes(ch)
                          ? "bg-brand-glow text-brand-700"
                          : "bg-surfacealt text-mid/40",
                      )}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
                <span className="w-8 text-right font-mono font-semibold text-ink">{row.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden bg-surfacealt">
              <motion.div
                className="h-full"
                style={{
                  background: i === 0 ? "var(--brand-600)" : "var(--brand-400)",
                  opacity: i === 0 ? 1 : 0.4,
                }}
                initial={{ width: reduce ? `${row.pct}%` : 0 }}
                whileInView={{ width: `${row.pct}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 0.7, delay: i * 0.06 }}
              />
            </div>
          </div>
        ))}
        <p className="pt-1 text-[9px] text-mid">G = Google · S = Social · A = AI Search</p>
      </div>
      <SocialInsight>
        Rival A owns <span className="font-semibold text-ink">34%</span> of category conversation.
        You&apos;re strongest on AI Search — double down there.
      </SocialInsight>
    </Panel>
  );
}

function CompGapsMock({ modulePreview }: { modulePreview?: boolean }) {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH" },
    { topic: "Reputation scoring", you: false, opp: "URGENT" },
    { topic: "Competitive intelligence", you: true, opp: "LEAD" },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Content Gap"
        score={23}
        suffix=" gaps"
        delta="vs rivals"
        deltaUp={false}
        subtitle="Topics rivals rank for. You're completely invisible."
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="mb-2 grid grid-cols-[1fr_28px_52px] gap-1 text-[9px] font-semibold uppercase tracking-wide text-mid">
          <span>Topic</span>
          <span className="text-center">You</span>
          <span className="text-right">Opp.</span>
        </div>
        <div className="space-y-2">
          {gaps.map((gap) => (
            <div
              key={gap.topic}
              className="grid grid-cols-[1fr_28px_52px] items-center gap-1 text-[11px]"
            >
              <span className="truncate text-ink">{gap.topic}</span>
              <span className="text-center text-mid">{gap.you ? "✓" : "✕"}</span>
              <span
                className={cn(
                  "module-pill truncate px-1 py-0.5 text-center text-[9px] font-semibold",
                  gap.opp === "URGENT"
                    ? "bg-surfacealt text-ink"
                    : gap.opp === "LEAD"
                      ? "border border-brand-600/20 bg-brand-glow text-brand-700"
                      : "border border-border bg-surfacealt text-mid",
                )}
              >
                {gap.opp}
              </span>
            </div>
          ))}
        </div>
      </div>
      <SocialInsight>
        <span className="font-semibold text-ink">3 urgent gaps</span> where all rivals outrank you
        — BIU builds your content calendar around them.
      </SocialInsight>
    </Panel>
  );
}

function CompMovesMock({ modulePreview }: { modulePreview?: boolean }) {
  const moves = [
    { title: "Rival A launched new pricing tier", meta: "2 days ago", status: "THREAT" },
    { title: "Rival B published category report", meta: "4 days ago", status: "MONITOR" },
    { title: "Category search volume up 9%", meta: "This week", status: "SIGNAL" },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Move Tracker"
        score={3}
        suffix=" moves"
        delta="this week"
        deltaUp={false}
        subtitle="What rivals did this week you don't know about yet"
      />
      <div className="space-y-2 border border-[var(--card-border)] bg-card-inner p-3">
        {moves.map((move) => (
          <div
            key={move.title}
            className="flex items-start justify-between gap-2 border-b border-border pb-2 last:border-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-ink">{move.title}</p>
              <p className="text-[10px] text-mid">{move.meta}</p>
            </div>
            <span
              className={cn(
                "module-pill shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                move.status === "THREAT"
                  ? "bg-surfacealt text-ink"
                  : move.status === "MONITOR"
                    ? "border border-border bg-surfacealt text-mid"
                    : "border border-brand-600/20 bg-brand-glow text-brand-700",
              )}
            >
              {move.status}
            </span>
          </div>
        ))}
      </div>
      <SocialInsight>
        Rival A&apos;s pricing move shifts the category narrative — BIU tracks impact on your
        share of voice within 14 days.
      </SocialInsight>
    </Panel>
  );
}

function CompBenchmarkMock({ modulePreview }: { modulePreview?: boolean }) {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const modules = ["AEO", "SOC", "CMP", "REP"];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Benchmark Score"
        score={71}
        delta="#2 in category"
        deltaUp
        subtitle="Your score vs rivals — the one number that settles it"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {modules.map((m, i) => (
            <span
              key={m}
              className={cn(
                "module-pill px-2 py-0.5 text-[9px] font-semibold",
                i === 2
                  ? "border border-brand-600/20 bg-brand-glow text-brand-700"
                  : "border border-border bg-surfacealt text-mid",
              )}
            >
              {m}
            </span>
          ))}
        </div>
        <div className="space-y-1.5">
          {rivals.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between gap-2 text-[11px]"
            >
              <span className={cn("font-medium", r.highlight ? "text-ink" : "text-mid")}>
                {r.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-ink">{r.score}</span>
                <span className="text-[10px] text-mid">{r.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialInsight>
        You rank <span className="font-semibold text-ink">#2 overall</span> — but Competition is
        where Rival A is pulling away. Focus there.
      </SocialInsight>
    </Panel>
  );
}

function RepAwarenessMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const pts = [42, 44, 46, 48, 50, 52, 55, 58];
  const w = 240;
  const h = 48;
  const max = 60;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join("");

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Awareness"
        score={62}
        delta="+6 vs last quarter"
        deltaUp
        subtitle="How visible your brand is before buyers start comparing"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Brand mentions", "1.2k/mo"],
            ["Category share", "14%"],
          ].map(([label, value]) => (
            <div key={label} className="module-chip border border-border bg-surfacealt px-2 py-1.5">
              <p className="text-[10px] text-mid">{label}</p>
              <p className="text-[12px] font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-mid">
          Mention trend
        </p>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-hidden">
          <motion.path
            d={path}
            fill="none"
            stroke="var(--brand-600)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 1 }}
          />
        </svg>
      </div>
      <SocialInsight>
        Mentions are rising but you&apos;re still below the category median — BIU shows which
        channels close the gap fastest.
      </SocialInsight>
    </Panel>
  );
}

function RepTrustMock({ modulePreview }: { modulePreview?: boolean }) {
  const reduce = useReducedMotion();
  const score = 58;
  const circumference = 2 * Math.PI * 26;
  const sources = [
    { name: "G2", status: "Below cadence" },
    { name: "Trustpilot", status: "On track" },
    { name: "Capterra", status: "Improving" },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Trust"
        score={score}
        delta="−3 vs last month"
        deltaUp={false}
        subtitle="Review velocity and sentiment that move your Reputation Signal"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="var(--border)" strokeWidth="8" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="var(--brand-600)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: reduce
                    ? circumference * (1 - score / 100)
                    : circumference,
                }}
                whileInView={{ strokeDashoffset: circumference * (1 - score / 100) }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 1 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-ink">{score}</span>
              <span className="text-[8px] text-mid">/100</span>
            </div>
          </div>
          <ul className="min-w-0 flex-1 space-y-1.5 text-[11px]">
            {sources.map((s) => (
              <li key={s.name} className="flex justify-between gap-2">
                <span className="text-mid">{s.name}</span>
                <span className="truncate font-medium text-ink">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SocialInsight>
        <span className="font-semibold text-ink">3 weeks</span> since your last G2 review — BIU
        flags the cadence gap before it hits your score.
      </SocialInsight>
    </Panel>
  );
}

function RepConsiderationMock({ modulePreview }: { modulePreview?: boolean }) {
  const themes = ["Best for enterprise", "Pricing concern", "Easy integration"];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Consideration"
        score="34%"
        suffix=""
        delta="of buyer shortlists"
        deltaUp={false}
        subtitle="Whether you make the list when buyers start comparing"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <div className="space-y-2.5">
          {[
            { name: "You", pct: 34 },
            { name: "Leader", pct: 67 },
            { name: "Category avg", pct: 48 },
          ].map((row, i) => (
            <div key={row.name}>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className={i === 0 ? "font-medium text-ink" : "text-mid"}>{row.name}</span>
                <span className="font-mono font-semibold text-ink">{row.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden bg-surfacealt">
                <div
                  className="h-full"
                  style={{
                    width: `${row.pct}%`,
                    background: i === 0 ? "var(--brand-600)" : "var(--brand-400)",
                    opacity: i === 0 ? 1 : 0.4,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-3">
          {themes.map((theme) => (
            <span
              key={theme}
              className="module-pill border border-border bg-surfacealt px-2 py-0.5 text-[10px] text-ink"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
      <SocialInsight>
        You appear in <span className="font-semibold text-ink">34%</span> of comparison content vs.
        the leader at 67% — BIU maps the themes to close.
      </SocialInsight>
    </Panel>
  );
}

function RepChoiceMock({ modulePreview }: { modulePreview?: boolean }) {
  const drivers = [
    { label: "Integration depth", rank: "3rd", strong: false },
    { label: "Support quality", rank: "2nd", strong: true },
    { label: "Time to value", rank: "4th", strong: false },
  ];

  return (
    <Panel preview modulePreview={modulePreview}>
      <SocialScoreHeader
        label="Choice"
        score={48}
        delta="win-rate signal"
        deltaUp={false}
        subtitle="Why buyers pick you — or pass you over"
      />
      <div className="border border-[var(--card-border)] bg-card-inner p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-mid">
          Top choice drivers
        </p>
        <div className="space-y-2">
          {drivers.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between gap-2 text-[11px]"
            >
              <span className="truncate text-ink">{d.label}</span>
              <span
                className={cn(
                  "module-pill shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                  d.strong
                    ? "border border-brand-600/20 bg-brand-glow text-brand-700"
                    : "border border-border bg-surfacealt text-mid",
                )}
              >
                {d.rank}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-border pt-3">
          {[
            ["Chosen for", "Support"],
            ["Lost to", "Integration"],
          ].map(([label, value]) => (
            <div key={label} className="module-chip border border-border bg-surfacealt px-2 py-1.5">
              <p className="text-[10px] text-mid">{label}</p>
              <p className="truncate text-[11px] font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <SocialInsight>
        Prospects cite <span className="font-semibold text-ink">integration</span> as a top choice
        driver — you rank 3rd. BIU shows what to fix first.
      </SocialInsight>
    </Panel>
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
              <span className="text-3xl font-bold tracking-tight text-ink">
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
            <p className="mt-1 text-2xl font-bold tracking-tight text-ink">
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
            <p className="mt-0.5 text-xl font-bold tracking-tight text-ink">
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
          <p className="text-2xl font-bold tracking-tight text-ink">
            71{""}
            <span className="text-base font-semibold text-mid">↓ from 76</span>
          </p>
          <span className="bg-surfacealt px-2.5 py-1 text-[11px] font-normal text-mid">
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
              className="module-pill border border-border bg-card-inner px-3 py-1 text-[11px] font-normal text-mid"
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
                <div className="flex h-full items-end justify-center bg-gradient-to-b from-[#e8e4df] to-[#d4cfc8] pb-2 text-[10px] font-normal text-mid">
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
          <div className="module-chip flex items-center justify-between border border-border bg-card-inner px-3 py-2.5 text-[12px]">
            <span>🇮🇳 English (India)</span>
            <span className="text-muted">▾</span>
          </div>
          <div className="module-chip flex items-center justify-between border border-border bg-card-inner px-3 py-2.5 text-[12px]">
            <span>🔊 Sushant (English IND)</span>
            <span className="text-muted">▾</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[12px] font-normal text-ink">Auto-generate Captions</span>
          <span className="module-pill relative h-6 w-11 bg-ink" aria-hidden>
            <span className="absolute right-0.5 top-0.5 h-5 w-5 bg-card-inner" />
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
        <div className="module-chip mt-4 flex items-center gap-2 border border-border bg-card-inner px-4 py-3">
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
          <span className="text-2xl font-bold tracking-tight text-ink">
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
