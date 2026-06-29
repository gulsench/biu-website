import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const productLinks = [
  { label: "AEO", href: "#modules" },
  { label: "Social Media", href: "#modules" },
  { label: "Competition", href: "#modules" },
  { label: "Reputation", href: "#modules" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Customer Stories", href: "#customer-stories" },
  { label: "FAQ", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  {
    label: "X",
    href: "#",
    path: "M13.5 10.6 19.4 4h-1.4l-5.1 5.7L8.8 4H4l6.2 8.7L4 20h1.4l5.4-6.1 4.3 6.1H20l-6.5-9.4Zm-1.9 2.2-.6-.9L6 5h2.2l4 5.6.6.9 5.2 7.3h-2.2l-4.2-6Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V20H3.4V8.4Zm5 0h3v1.6h.04c.42-.8 1.45-1.64 2.98-1.64 3.18 0 3.77 2.1 3.77 4.82V20h-3.1v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V20h-3.1V8.4Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 4.7c-2 0-2.27.01-3.06.05-2.5.11-3.68 1.3-3.79 3.79C5.11 9.33 5.1 9.6 5.1 12s.01 2.67.05 3.46c.11 2.5 1.29 3.68 3.79 3.79.79.04 1.06.05 3.06.05s2.27-.01 3.06-.05c2.5-.11 3.68-1.3 3.79-3.79.04-.79.05-1.06.05-3.46s-.01-2.67-.05-3.46c-.11-2.49-1.29-3.68-3.79-3.79C14.27 4.71 14 4.7 12 4.7Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2s-.19-1.36-.78-1.96c-.75-.78-1.58-.79-1.96-.83C16.13 4.2 12 4.2 12 4.2h-.01s-4.12 0-6.85.21c-.38.04-1.21.05-1.96.83-.59.6-.78 1.96-.78 1.96S2.2 8.8 2.2 10.4v1.49c0 1.6.2 3.2.2 3.2s.19 1.36.78 1.96c.75.78 1.74.75 2.18.84 1.58.15 6.64.2 6.64.2s4.13-.01 6.86-.22c.38-.04 1.21-.05 1.96-.83.59-.6.78-1.96.78-1.96s.2-1.6.2-3.2V10.4c0-1.6-.2-3.2-.2-3.2ZM9.9 13.7V8.9l4.3 2.4-4.3 2.4Z",
  },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
        {title}
      </p>
      {children}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-blue text-white">
      <div className="section-container pt-14 pb-4 md:pt-20 md:pb-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight md:text-[2.5rem] lg:text-[2.75rem]">
              AI growth intelligence for brands that compete.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-[15px]">
              One score. Four modules. Built for teams who need to know where they
              show up in AI answers — and the one move that closes the gap.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            <FooterColumn title="Product">
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Resources">
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Company">
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Connect">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d={social.path} fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="relative mt-10 md:mt-14">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
          aria-hidden
        >
          <span className="translate-y-[18%] whitespace-nowrap font-heading text-[clamp(4.5rem,20vw,11rem)] font-bold leading-none tracking-tight text-white/[0.08]">
            Boast It UP
          </span>
        </div>

        <div className="relative z-10 flex justify-center pb-2">
          <Link
            to="/"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform hover:scale-[1.03]"
            aria-label="Boast It UP home"
          >
            <span className="font-heading text-lg font-bold text-blue">BIU</span>
          </Link>
        </div>

        <div className="relative z-10 section-container flex justify-end pb-6 pt-16 md:pt-20 md:pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
            © 2026 · Boast It UP · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
