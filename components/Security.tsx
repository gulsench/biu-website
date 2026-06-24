import { security } from"@/lib/content";
import { SectionHeader } from"./ui/SectionHeader";
import { Reveal, RevealItem } from"./ui/Reveal";

export function Security() {
 return (
 <section className="border-b border-border bg-band">
 <div className="mx-auto max-w-container px-6 py-24">
 <SectionHeader
 label={security.eyebrow}
 title={security.title}
 sub={security.sub}
 className="mb-14"
 />

 <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {security.badges.map((b) => (
 <RevealItem key={b.name}>
 <div className="flex h-full flex-col items-center border border-card-border bg-card p-7 text-center">
 <span className="flex h-12 w-12 items-center justify-center border border-brand-600/30 bg-brand-glow text-brand-600">
 <svg width="22"height="22"viewBox="0 0 24 24"fill="none"aria-hidden>
 <path
 d="M12 3 5 6v5c0 4.4 3 8.5 7 9.7 4-1.2 7-5.3 7-9.7V6l-7-3Z"
 stroke="currentColor"
 strokeWidth="1.6"
 strokeLinejoin="round"
 />
 <path
 d="m9 12 2 2 4-4"
 stroke="currentColor"
 strokeWidth="1.6"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 </span>
 <p className="mt-4 text-[15px] font-semibold text-ink">
 {b.name}
 </p>
 <p className="mt-1 text-[13px] text-muted">{b.note}</p>
 </div>
 </RevealItem>
 ))}
 </Reveal>
 </div>
 </section>
 );
}
