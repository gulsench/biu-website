import type { ProblemBlock } from"@/lib/content";
import { problems } from"@/lib/content";
import { Eyebrow } from"./ui/Eyebrow";
import { Reveal, RevealItem } from"./ui/Reveal";
import { cn } from"@/lib/cn";

function ProblemVisual({ visual }: { visual: ProblemBlock["visual"] }) {
 if (visual ==="search-shift") {
 return (
 <div className="border border-card-border bg-card p-6 shadow-lift">
 <p className="eyebrow-text mb-4 text-mid">Search results</p>
 <div className="border border-brand-600/30 bg-brand-glow p-4">
 <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
 AI Overview
 </p>
 <div className="space-y-2">
 <div className="h-2.5 w-5/6 bg-brand-600/70"/>
 <div className="h-2.5 w-4/6 bg-brand-600/50"/>
 <div className="h-2.5 w-3/6 bg-brand-600/35"/>
 </div>
 </div>
 <div className="mt-4 space-y-3">
 {[0, 1, 2].map((i) => (
 <div key={i} className="border border-border bg-surfacealt p-3">
 <div className="h-2 w-2/5 bg-mid/50"/>
 <div className="mt-2 h-1.5 w-4/5 bg-muted/40"/>
 </div>
 ))}
 </div>
 </div>
 );
 }

 if (visual ==="buyer-journey") {
 return (
 <div className="border border-card-border bg-card p-6 shadow-lift">
 <p className="eyebrow-text mb-5 text-mid">Buyer journey</p>
 <ol className="space-y-3">
 {[
 { k:"Asks AI", on: true },
 { k:"Reads the answer", on: true },
 { k:"Shortlist forms", on: true },
 { k:"Visits your site", on: false },
 ].map((s, i) => (
 <li key={s.k} className="flex items-center gap-3">
 <span
 className={cn(
"flex h-7 w-7 flex-shrink-0 items-center justify-center text-[12px] font-bold",
 s.on
 ?"bg-brand-600 text-white"
 :"border border-border bg-surfacealt text-muted",
 )}
 >
 {i + 1}
 </span>
 <span
 className={cn(
"text-[14px] font-medium",
 s.on ?"text-ink":"text-muted",
 )}
 >
 {s.k}
 </span>
 </li>
 ))}
 </ol>
 </div>
 );
 }

 return (
 <div className="border border-card-border bg-card p-6 shadow-lift">
 <p className="eyebrow-text mb-5 text-mid">Your tools today</p>
 <div className="grid grid-cols-2 gap-3">
 {["SEO","Reviews","Marketplace","Social"].map((t) => (
 <div
 key={t}
 className="border border-border bg-surfacealt px-4 py-5 text-center text-[13px] font-semibold text-mid"
 >
 {t}
 </div>
 ))}
 </div>
 <div className="mt-4 border border-dashed border-border px-4 py-3 text-center text-[12px] font-medium text-muted">
 No single source of truth
 </div>
 </div>
 );
}

function ProblemRow({ data, flip }: { data: ProblemBlock; flip?: boolean }) {
 return (
 <div className="mx-auto grid max-w-container items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
 <Reveal stagger className={cn(flip &&"lg:order-2")}>
 <RevealItem>
 <Eyebrow className="mb-5">{data.eyebrow}</Eyebrow>
 </RevealItem>
 <RevealItem>
 <h2 className="h2-display mb-5 max-w-xl text-ink">
 {data.title.map((seg, i) => (
 <span key={i} className={seg.accent ?"accent": undefined}>
 {seg.text}
 </span>
 ))}
 </h2>
 </RevealItem>
 <RevealItem>
 <p className="body-text mb-7 max-w-lg text-mid">{data.body}</p>
 </RevealItem>
 <RevealItem>
 <ul className="space-y-3">
 {data.points.map((p) => (
 <li
 key={p}
 className="flex items-start gap-3 text-[14.5px] text-ink"
 >
 <svg
 width="18"
 height="18"
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
 {p}
 </li>
 ))}
 </ul>
 </RevealItem>
 </Reveal>

 <Reveal delay={0.1} className={cn(flip &&"lg:order-1")}>
 <ProblemVisual visual={data.visual} />
 </Reveal>
 </div>
 );
}

export function ProblemDiscovery() {
 return (
 <section id="why"className="border-b border-border bg-surface">
 {problems.map((p, i) => (
 <div key={p.id} className={cn(i > 0 &&"border-t border-border")}>
 <ProblemRow data={p} flip={i % 2 === 1} />
 </div>
 ))}
 </section>
 );
}
