import { announcement } from "@/lib/content";

export function AnnouncementBar() {
  return (
    <div className="h-10 border-b border-border bg-brand-glow text-ink">
      <a
        href="#platform"
        className="mx-auto flex h-full max-w-container items-center justify-center gap-2 px-4 text-center text-xs font-medium text-mid transition-colors hover:text-ink sm:px-6 sm:text-[12.5px]"
      >
        {announcement}
        <span aria-hidden className="text-brand-600">
          →
        </span>
      </a>
    </div>
  );
}
