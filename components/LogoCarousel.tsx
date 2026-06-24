import { socialProof } from "@/lib/content";
import { SectionBackground } from "./ui/SectionBackground";

export function LogoCarousel() {
  const logos = [...socialProof.logos, ...socialProof.logos];
  return (
    <section className="relative overflow-hidden border-y border-border bg-band">
      <SectionBackground tone="band" subtle />
      <div className="relative z-10 mx-auto max-w-container px-4 py-8 sm:px-6 sm:py-12">
        <p className="eyebrow-text mb-6 text-center text-muted sm:mb-8">
          {socialProof.heading}
        </p>
        <div className="marquee-mask overflow-hidden">
          <ul className="animate-marquee flex w-max items-center gap-14">
            {logos.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="whitespace-nowrap text-[15px] font-bold tracking-tight text-muted/80 sm:text-[19px]"
                aria-hidden={i >= socialProof.logos.length}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
