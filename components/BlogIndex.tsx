import { blog } from "@/lib/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal, RevealItem } from "./ui/Reveal";

export function BlogIndex() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="section-wrap">
        <SectionHeader
          label={blog.eyebrow}
          title={blog.title}
          sub={blog.sub}
          className="mb-14"
        />

        <Reveal stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <RevealItem key={post.slug}>
              <article className="flex h-full flex-col border border-card-border bg-card p-7 transition-colors hover:border-brand-600/30">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="border border-brand-600/30 bg-brand-glow px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                    {post.category}
                  </span>
                  <span className="text-[12px] text-muted">{post.readTime}</span>
                </div>
                <h3 className="h3-display mb-3 text-ink">{post.title}</h3>
                <p className="flex-1 text-[14px] leading-relaxed text-mid">
                  {post.excerpt}
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <time className="text-[12px] font-medium text-muted" dateTime={post.date}>
                    {post.date}
                  </time>
                </footer>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
