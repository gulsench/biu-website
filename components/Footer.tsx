import Image from "next/image";
import { footer } from "@/lib/content";

const socialPaths: Record<string, string> = {
  x: "M13.5 10.6 19.4 4h-1.4l-5.1 5.7L8.8 4H4l6.2 8.7L4 20h1.4l5.4-6.1 4.3 6.1H20l-6.5-9.4Zm-1.9 2.2-.6-.9L6 5h2.2l4 5.6.6.9 5.2 7.3h-2.2l-4.2-6Z",
  linkedin:
    "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V20H3.4V8.4Zm5 0h3v1.6h.04c.42-.8 1.45-1.64 2.98-1.64 3.18 0 3.77 2.1 3.77 4.82V20h-3.1v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V20h-3.1V8.4Z",
  instagram:
    "M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 4.7c-2 0-2.27.01-3.06.05-2.5.11-3.68 1.3-3.79 3.79C5.11 9.33 5.1 9.6 5.1 12s.01 2.67.05 3.46c.11 2.5 1.29 3.68 3.79 3.79.79.04 1.06.05 3.06.05s2.27-.01 3.06-.05c2.5-.11 3.68-1.3 3.79-3.79.04-.79.05-1.06.05-3.46s-.01-2.67-.05-3.46c-.11-2.49-1.29-3.68-3.79-3.79C14.27 4.71 14 4.7 12 4.7Z",
  youtube:
    "M21.6 7.2s-.19-1.36-.78-1.96c-.75-.78-1.58-.79-1.96-.83C16.13 4.2 12 4.2 12 4.2h-.01s-4.12 0-6.85.21c-.38.04-1.21.05-1.96.83-.59.6-.78 1.96-.78 1.96S2.2 8.8 2.2 10.4v1.49c0 1.6.2 3.2.2 3.2s.19 1.36.78 1.96c.75.78 1.74.75 2.18.84 1.58.15 6.64.2 6.64.2s4.13-.01 6.86-.22c.38-.04 1.21-.05 1.96-.83.59-.6.78-1.96.78-1.96s.2-1.6.2-3.2V10.4c0-1.6-.2-3.2-.2-3.2ZM9.9 13.7V8.9l4.3 2.4-4.3 2.4Z",
};

export function Footer() {
  return (
    <footer role="contentinfo" className="site-footer border-t">
      <div className="mx-auto max-w-container px-4 py-14 sm:px-6">
        <div className="footer-newsletter mb-12 grid gap-6 border p-5 sm:grid-cols-2 sm:items-center sm:p-8">
          <div>
            <h3 className="text-[20px] font-bold tracking-tight text-white">
              {footer.newsletter.title}
            </h3>
            <p className="mt-1.5 max-w-md text-[13.5px] text-[var(--footer-muted)]">
              {footer.newsletter.body}
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <input
              type="email"
              required
              placeholder={footer.newsletter.placeholder}
              aria-label="Email address"
              className="footer-input w-full border px-4 py-3 text-[14px] outline-none transition-colors sm:max-w-xs"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {footer.newsletter.cta}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="/" aria-label="BIU home" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="BIU logo"
                width={262}
                height={250}
                className="h-7 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-3 max-w-[240px] text-[12px] leading-snug text-[var(--footer-muted)]">
              {footer.tagline}
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-3 inline-block text-[12px] font-medium text-[var(--footer-text)] transition-colors"
            >
              {footer.email}
            </a>
            <div className="mt-4 flex items-center gap-2">
              {footer.social.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="footer-social flex h-9 w-9 items-center justify-center border transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      d={socialPaths[s.icon]}
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--footer-muted)]">
                {col.title}
              </p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-0.5 text-[12px] leading-tight text-[var(--footer-text)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-[var(--footer-border)] pt-5 text-[11px] text-[var(--footer-muted)] sm:flex-row sm:items-center">
          <span>
            © 2026 Boast It UP ·{" "}
            <a href="https://boastitup.com" className="transition-colors">
              boastitup.com
            </a>
          </span>
          {footer.legal.length > 0 && (
            <span className="flex flex-wrap items-center">
              {footer.legal.map((link, i) => (
                <span key={link.label} className="inline-flex items-center">
                  {i > 0 && (
                    <span aria-hidden className="px-1.5">
                      ·
                    </span>
                  )}
                  <a href={link.href} className="transition-colors">
                    {link.label}
                  </a>
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
