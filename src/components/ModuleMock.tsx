import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarId } from "@/lib/modules";
import { cn } from "@/lib/utils";

function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[220px] w-full flex-col overflow-hidden rounded-lg border border-color-border bg-color-surface p-4 text-color-text shadow-sm sm:min-h-[240px] sm:p-5",
        className,
      )}
    >
      {children}
    </div>
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
        <p className="eyebrow-text text-color-text-muted">{label}</p>
        <div className="shrink-0 text-right">
          <p className="text-xl font-bold leading-none text-color-text">
            {score}
            {suffix ? (
              <span className="text-[12px] font-semibold text-color-text-muted">{suffix}</span>
            ) : null}
          </p>
          <p
            className={cn(
              "mt-1 text-[11px] font-semibold",
              deltaUp ? "text-blue" : "text-color-text-muted",
            )}
          >
            {deltaUp ? "▲" : "▼"} {delta}
          </p>
        </div>
      </div>
      <p className="mt-2 text-[12px] leading-snug text-color-text-muted">{subtitle}</p>
    </div>
  );
}

function SocialContentMock() {
  const reduce = useReducedMotion();
  const formats = [
    { label: "Reels", metric: "84% avg reach", pct: 84, strong: true },
    { label: "Carousels", metric: "57% saves", pct: 57, strong: false },
    { label: "Static Posts", metric: "28% ↓ fading", pct: 28, strong: false },
    { label: "Text Only", metric: "15% lowest", pct: 15, strong: false },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Content"
        score={74}
        delta="+8 vs last month"
        deltaUp
        subtitle="What you post — how each format performs"
      />
      <div className="space-y-2.5 border border-color-border bg-color-bg-alt p-3">
        {formats.map((row, i) => (
          <div key={row.label} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className="truncate font-medium text-color-text">{row.label}</span>
              <span className="shrink-0 text-color-text-muted">{row.metric}</span>
            </div>
            <div className="h-1.5 overflow-hidden bg-color-bg-alt">
              <motion.div
                className="h-full"
                style={{
                  background: row.strong ? "hsl(var(--color-blue))" : "#7dd4a8",
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
    </Panel>
  );
}

function SocialHashtagMock() {
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
    <Panel>
      <SocialScoreHeader
        label="Hashtag"
        score={58}
        delta="−4 vs last month"
        deltaUp={false}
        subtitle="Which tags amplify reach — which ones bury you"
      />
      <div className="space-y-3 border border-color-border bg-color-bg-alt p-3">
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-color-text-muted">
            Working
          </p>
          <div className="space-y-1">
            {working.map((t) => (
              <div
                key={t.tag}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <span className="truncate font-medium text-blue">{t.tag}</span>
                <span className="shrink-0 text-color-text-muted">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-color-border pt-2">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-color-text-muted">
            Hurting reach
          </p>
          <div className="space-y-1">
            {hurting.map((t) => (
              <div
                key={t.tag}
                className="flex items-center justify-between gap-2 text-[11px]"
              >
                <span className="truncate font-medium text-color-text">{t.tag}</span>
                <span className="shrink-0 text-color-text-muted">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 border-t border-color-border pt-2">
          {opportunities.map((tag) => (
            <span
              key={tag}
              className="rounded border border-blue/20 bg-color-blue-tint px-2 py-0.5 text-[10px] text-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function SocialCommentsMock() {
  const reduce = useReducedMotion();
  const positive = 65;
  const neutral = 22;
  const negative = 13;
  const themes = ["Love the content", "Pricing concern", "Want a demo"];

  return (
    <Panel>
      <SocialScoreHeader
        label="Comments"
        score={82}
        delta="+12 vs last month"
        deltaUp
        subtitle="What your audience actually says about you"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#bde5d0" strokeWidth="8" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="hsl(var(--color-blue))"
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
              <span className="text-sm font-bold text-color-text">{positive}%</span>
              <span className="text-[8px] text-color-text-muted">positive</span>
            </div>
          </div>
          <ul className="min-w-0 flex-1 space-y-1 text-[11px]">
            {[
              ["Positive", `${positive}%`, "text-blue"],
              ["Neutral", `${neutral}%`, "text-color-text-muted"],
              ["Negative", `${negative}%`, "text-color-text-muted"],
            ].map(([k, v, color]) => (
              <li key={k} className="flex justify-between gap-2">
                <span className="text-color-text-muted">{k}</span>
                <span className={cn("font-semibold", color)}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-color-border pt-3">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded border border-color-border bg-color-bg-alt px-2 py-0.5 text-[10px] text-color-text"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function SocialEngagementMock() {
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
    <Panel>
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow-text text-color-text-muted">Engagement</p>
          <div className="shrink-0 text-right">
            <p className="text-xl font-bold leading-none text-color-text">4.2%</p>
            <p className="mt-1 text-[11px] font-semibold text-blue">
              ▲ vs 1.8% industry avg
            </p>
          </div>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-color-text-muted">
          The one metric that predicts your growth
        </p>
      </div>
      <div className="border border-color-border bg-color-bg-alt p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-color-text-muted">
          8-week trend
        </p>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-hidden">
          <motion.path
            d={path}
            fill="none"
            stroke="hsl(var(--color-blue))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 1, ease: "easeInOut" }}
          />
        </svg>
        <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-color-border pt-3">
          {breakdown.map(([label, value]) => (
            <div
              key={label}
              className="rounded-md border border-color-border bg-color-bg-alt px-2 py-1.5"
            >
              <p className="text-[10px] text-color-text-muted">{label}</p>
              <p className="text-[12px] font-bold text-color-text">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] font-semibold text-blue">
          2.3× industry average ↑
        </p>
      </div>
    </Panel>
  );
}

function AeoShareMock() {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 18, engines: ["P", "G"] },
    { name: "Rival A", pct: 34, engines: ["C", "P", "G"] },
    { name: "Rival B", pct: 22, engines: ["C", "G"] },
    { name: "Rival C", pct: 15, engines: ["P"] },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Share of Search"
        score="18%"
        suffix=""
        delta="in category answers"
        deltaUp={false}
        subtitle="Who owns the AI answer in your category right now"
      />
      <div className="space-y-2.5 border border-color-border bg-color-bg-alt p-3">
        {rows.map((row, i) => (
          <div key={row.name} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className={cn("truncate font-medium", i === 0 ? "text-color-text" : "text-color-text-muted")}>
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
                          ? "bg-color-blue-tint text-blue"
                          : "bg-color-bg-alt text-color-text-muted/40",
                      )}
                    >
                      {e}
                    </span>
                  ))}
                </span>
                <span className="w-8 text-right font-mono font-semibold text-color-text">{row.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden bg-color-bg-alt">
              <motion.div
                className="h-full"
                style={{
                  background: i === 0 ? "hsl(var(--color-blue))" : "#7dd4a8",
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
        <p className="pt-1 text-[9px] text-color-text-muted">C = ChatGPT · P = Perplexity · G = Google AI</p>
      </div>
    </Panel>
  );
}

function AeoGapsMock() {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH" },
    { topic: "Reputation scoring tools", you: false, opp: "URGENT" },
    { topic: "Best AEO platforms", you: true, opp: "LEAD" },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Answer Gaps"
        score={23}
        suffix=" gaps"
        delta="across engines"
        deltaUp={false}
        subtitle="Queries rivals win. You're completely invisible."
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="mb-2 grid grid-cols-[1fr_28px_52px] gap-1 text-[9px] font-semibold uppercase tracking-wide text-color-text-muted">
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
              <span className="truncate text-color-text">{gap.topic}</span>
              <span className="text-center text-color-text-muted">{gap.you ? "✓" : "✕"}</span>
              <span
                className={cn(
                  "rounded truncate px-1 py-0.5 text-center text-[9px] font-semibold",
                  gap.opp === "URGENT"
                    ? "bg-color-bg-alt text-color-text"
                    : gap.opp === "LEAD"
                      ? "border border-blue/20 bg-color-blue-tint text-blue"
                      : "border border-color-border bg-color-bg-alt text-color-text-muted",
                )}
              >
                {gap.opp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function AeoAlertsMock() {
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
    <Panel>
      <SocialScoreHeader
        label="Citation Alerts"
        score={3}
        suffix=" new"
        delta="this week"
        deltaUp={false}
        subtitle="What changed in AI answers you don't know about yet"
      />
      <div className="space-y-2 border border-color-border bg-color-bg-alt p-3">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="flex items-start justify-between gap-2 border-b border-color-border pb-2 last:border-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-color-text">{alert.title}</p>
              <p className="text-[10px] text-color-text-muted">{alert.meta}</p>
            </div>
            <span
              className={cn(
                "rounded shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                alert.status === "THREAT"
                  ? "bg-color-bg-alt text-color-text"
                  : alert.status === "MONITOR"
                    ? "border border-color-border bg-color-bg-alt text-color-text-muted"
                    : "border border-blue/20 bg-color-blue-tint text-blue",
              )}
            >
              {alert.status}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function AeoScoreMock() {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const engines = ["GPT", "Perp", "GAI", "Claude"];

  return (
    <Panel>
      <SocialScoreHeader
        label="AEO Score"
        score={71}
        delta="#2 in category"
        deltaUp
        subtitle="Your score vs rivals — the one number that settles it"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {engines.map((e, i) => (
            <span
              key={e}
              className={cn(
                "rounded px-2 py-0.5 text-[9px] font-semibold",
                i === 0
                  ? "border border-blue/20 bg-color-blue-tint text-blue"
                  : "border border-color-border bg-color-bg-alt text-color-text-muted",
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
              <span className={cn("font-medium", r.highlight ? "text-color-text" : "text-color-text-muted")}>
                {r.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-color-text">{r.score}</span>
                <span className="text-[10px] text-color-text-muted">{r.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function CompShareMock() {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 18, channels: ["A"] },
    { name: "Rival A", pct: 34, channels: ["G", "S", "A"] },
    { name: "Rival B", pct: 22, channels: ["G", "S"] },
    { name: "Rival C", pct: 15, channels: ["G"] },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Share of Voice"
        score="18%"
        suffix=""
        delta="of category conversation"
        deltaUp={false}
        subtitle="Who owns the conversation in your category right now"
      />
      <div className="space-y-2.5 border border-color-border bg-color-bg-alt p-3">
        {rows.map((row, i) => (
          <div key={row.name} className="min-w-0">
            <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
              <span className={cn("truncate font-medium", i === 0 ? "text-color-text" : "text-color-text-muted")}>
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
                          ? "bg-color-blue-tint text-blue"
                          : "bg-color-bg-alt text-color-text-muted/40",
                      )}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
                <span className="w-8 text-right font-mono font-semibold text-color-text">{row.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden bg-color-bg-alt">
              <motion.div
                className="h-full"
                style={{
                  background: i === 0 ? "hsl(var(--color-blue))" : "#7dd4a8",
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
        <p className="pt-1 text-[9px] text-color-text-muted">G = Google · S = Social · A = AI Search</p>
      </div>
    </Panel>
  );
}

function CompGapsMock() {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH" },
    { topic: "Reputation scoring", you: false, opp: "URGENT" },
    { topic: "Competitive intelligence", you: true, opp: "LEAD" },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Content Gap"
        score={23}
        suffix=" gaps"
        delta="vs rivals"
        deltaUp={false}
        subtitle="Topics rivals rank for. You're completely invisible."
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="mb-2 grid grid-cols-[1fr_28px_52px] gap-1 text-[9px] font-semibold uppercase tracking-wide text-color-text-muted">
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
              <span className="truncate text-color-text">{gap.topic}</span>
              <span className="text-center text-color-text-muted">{gap.you ? "✓" : "✕"}</span>
              <span
                className={cn(
                  "rounded truncate px-1 py-0.5 text-center text-[9px] font-semibold",
                  gap.opp === "URGENT"
                    ? "bg-color-bg-alt text-color-text"
                    : gap.opp === "LEAD"
                      ? "border border-blue/20 bg-color-blue-tint text-blue"
                      : "border border-color-border bg-color-bg-alt text-color-text-muted",
                )}
              >
                {gap.opp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function CompMovesMock() {
  const moves = [
    { title: "Rival A launched new pricing tier", meta: "2 days ago", status: "THREAT" },
    { title: "Rival B published category report", meta: "4 days ago", status: "MONITOR" },
    { title: "Category search volume up 9%", meta: "This week", status: "SIGNAL" },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Move Tracker"
        score={3}
        suffix=" moves"
        delta="this week"
        deltaUp={false}
        subtitle="What rivals did this week you don't know about yet"
      />
      <div className="space-y-2 border border-color-border bg-color-bg-alt p-3">
        {moves.map((move) => (
          <div
            key={move.title}
            className="flex items-start justify-between gap-2 border-b border-color-border pb-2 last:border-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-color-text">{move.title}</p>
              <p className="text-[10px] text-color-text-muted">{move.meta}</p>
            </div>
            <span
              className={cn(
                "rounded shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                move.status === "THREAT"
                  ? "bg-color-bg-alt text-color-text"
                  : move.status === "MONITOR"
                    ? "border border-color-border bg-color-bg-alt text-color-text-muted"
                    : "border border-blue/20 bg-color-blue-tint text-blue",
              )}
            >
              {move.status}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function CompBenchmarkMock() {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const modules = ["AEO", "SOC", "CMP", "REP"];

  return (
    <Panel>
      <SocialScoreHeader
        label="Benchmark Score"
        score={71}
        delta="#2 in category"
        deltaUp
        subtitle="Your score vs rivals — the one number that settles it"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {modules.map((m, i) => (
            <span
              key={m}
              className={cn(
                "rounded px-2 py-0.5 text-[9px] font-semibold",
                i === 2
                  ? "border border-blue/20 bg-color-blue-tint text-blue"
                  : "border border-color-border bg-color-bg-alt text-color-text-muted",
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
              <span className={cn("font-medium", r.highlight ? "text-color-text" : "text-color-text-muted")}>
                {r.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-color-text">{r.score}</span>
                <span className="text-[10px] text-color-text-muted">{r.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function RepAwarenessMock() {
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
    <Panel>
      <SocialScoreHeader
        label="Awareness"
        score={62}
        delta="+6 vs last quarter"
        deltaUp
        subtitle="How visible your brand is before buyers start comparing"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Brand mentions", "1.2k/mo"],
            ["Category share", "14%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-color-border bg-color-bg-alt px-2 py-1.5">
              <p className="text-[10px] text-color-text-muted">{label}</p>
              <p className="text-[12px] font-bold text-color-text">{value}</p>
            </div>
          ))}
        </div>
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-color-text-muted">
          Mention trend
        </p>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-hidden">
          <motion.path
            d={path}
            fill="none"
            stroke="hsl(var(--color-blue))"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 1 }}
          />
        </svg>
      </div>
    </Panel>
  );
}

function RepTrustMock() {
  const reduce = useReducedMotion();
  const score = 58;
  const circumference = 2 * Math.PI * 26;
  const sources = [
    { name: "G2", status: "Below cadence" },
    { name: "Trustpilot", status: "On track" },
    { name: "Capterra", status: "Improving" },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Trust"
        score={score}
        delta="−3 vs last month"
        deltaUp={false}
        subtitle="Review velocity and sentiment that move your Reputation Signal"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#bde5d0" strokeWidth="8" />
              <motion.circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="hsl(var(--color-blue))"
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
              <span className="text-sm font-bold text-color-text">{score}</span>
              <span className="text-[8px] text-color-text-muted">/100</span>
            </div>
          </div>
          <ul className="min-w-0 flex-1 space-y-1.5 text-[11px]">
            {sources.map((s) => (
              <li key={s.name} className="flex justify-between gap-2">
                <span className="text-color-text-muted">{s.name}</span>
                <span className="truncate font-medium text-color-text">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}

function RepConsiderationMock() {
  const themes = ["Best for enterprise", "Pricing concern", "Easy integration"];

  return (
    <Panel>
      <SocialScoreHeader
        label="Consideration"
        score="34%"
        suffix=""
        delta="of buyer shortlists"
        deltaUp={false}
        subtitle="Whether you make the list when buyers start comparing"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <div className="space-y-2.5">
          {[
            { name: "You", pct: 34 },
            { name: "Leader", pct: 67 },
            { name: "Category avg", pct: 48 },
          ].map((row, i) => (
            <div key={row.name}>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className={i === 0 ? "font-medium text-color-text" : "text-color-text-muted"}>{row.name}</span>
                <span className="font-mono font-semibold text-color-text">{row.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden bg-color-bg-alt">
                <div
                  className="h-full"
                  style={{
                    width: `${row.pct}%`,
                    background: i === 0 ? "hsl(var(--color-blue))" : "#7dd4a8",
                    opacity: i === 0 ? 1 : 0.4,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-color-border pt-3">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded border border-color-border bg-color-bg-alt px-2 py-0.5 text-[10px] text-color-text"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function RepChoiceMock() {
  const drivers = [
    { label: "Integration depth", rank: "3rd", strong: false },
    { label: "Support quality", rank: "2nd", strong: true },
    { label: "Time to value", rank: "4th", strong: false },
  ];

  return (
    <Panel>
      <SocialScoreHeader
        label="Choice"
        score={48}
        delta="win-rate signal"
        deltaUp={false}
        subtitle="Why buyers pick you — or pass you over"
      />
      <div className="border border-color-border bg-color-bg-alt p-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-color-text-muted">
          Top choice drivers
        </p>
        <div className="space-y-2">
          {drivers.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between gap-2 text-[11px]"
            >
              <span className="truncate text-color-text">{d.label}</span>
              <span
                className={cn(
                  "rounded shrink-0 px-1.5 py-0.5 text-[9px] font-semibold",
                  d.strong
                    ? "border border-blue/20 bg-color-blue-tint text-blue"
                    : "border border-color-border bg-color-bg-alt text-color-text-muted",
                )}
              >
                {d.rank}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-color-border pt-3">
          {[
            ["Chosen for", "Support"],
            ["Lost to", "Integration"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-color-border bg-color-bg-alt px-2 py-1.5">
              <p className="text-[10px] text-color-text-muted">{label}</p>
              <p className="truncate text-[11px] font-bold text-color-text">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
const MOCKS: Record<PillarId, () => ReactNode> = {
  "share-of-search": AeoShareMock,
  "answer-gaps": AeoGapsMock,
  "citation-alerts": AeoAlertsMock,
  "aeo-score": AeoScoreMock,
  content: SocialContentMock,
  hashtag: SocialHashtagMock,
  comments: SocialCommentsMock,
  engagement: SocialEngagementMock,
  "share-of-voice": CompShareMock,
  "content-gap": CompGapsMock,
  "move-tracker": CompMovesMock,
  "benchmark-score": CompBenchmarkMock,
  awareness: RepAwarenessMock,
  trust: RepTrustMock,
  consideration: RepConsiderationMock,
  choice: RepChoiceMock,
};

export function ModuleMock({ pillarId }: { pillarId: PillarId }) {
  const Mock = MOCKS[pillarId];
  return <Mock />;
}
