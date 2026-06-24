import { copilot } from"@/lib/content";
import { Eyebrow } from"./ui/Eyebrow";
import { Reveal, RevealItem } from"./ui/Reveal";
import { SectionBackground } from "./ui/SectionBackground";
import { cn } from"@/lib/cn";

function ChatMock() {
 return (
 <div className="border border-card-border bg-card p-6 shadow-lift">
 <div className="mb-5 flex items-center gap-2">
 <span className="h-2.5 w-2.5 bg-brand-600"/>
 <p className="eyebrow-text text-mid">BIU Copilot</p>
 </div>
 <div className="space-y-4">
 {copilot.chat.map((m, i) => (
 <div
 key={i}
 className={cn(
"flex",
 m.role ==="user"?"justify-end":"justify-start",
 )}
 >
 <p
 className={cn(
"max-w-[85%] px-4 py-3 text-[13.5px] leading-relaxed",
 m.role ==="user"
 ?"bg-brand-600 text-white"
 :"border border-border bg-surfacealt text-ink",
 )}
 >
 {m.text}
 </p>
 </div>
 ))}
 </div>
 </div>
 );
}

export function Copilot() {
 return (
 <section id="copilot" className="relative overflow-hidden border-b border-border bg-band">
 <SectionBackground tone="band" />
 <div className="section-wrap relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
 <Reveal stagger className="order-1">
 <RevealItem>
 <Eyebrow className="mb-5">{copilot.eyebrow}</Eyebrow>
 </RevealItem>
 <RevealItem>
 <h2 className="h2-display mb-5 max-w-xl text-ink">
 {copilot.title.map((seg, i) => (
 <span key={i} className={seg.accent ?"accent": undefined}>
 {seg.text}
 </span>
 ))}
 </h2>
 </RevealItem>
 <RevealItem>
 <p className="body-text mb-7 max-w-lg text-mid">{copilot.body}</p>
 </RevealItem>
 <RevealItem>
 <ul className="space-y-3">
 {copilot.bullets.map((b) => (
 <li
 key={b}
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
 {b}
 </li>
 ))}
 </ul>
 </RevealItem>
 </Reveal>

 <Reveal delay={0.1} className="order-2 lg:order-first">
 <ChatMock />
 </Reveal>
 </div>
 </section>
 );
}
