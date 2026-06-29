import { Reveal } from "@/components/Reveal";

const stories = [
  {
    quote:
      "We finally have one number the whole team trusts. BIU told us exactly why we slipped, and what to fix first.",
    name: "Priya Nair",
    role: "Head of Growth, Glowwell",
    metric: "+34% AI Share of Search",
  },
  {
    quote:
      "We were invisible in AI answers and didn't know it. Within a quarter we were the brand getting cited.",
    name: "Marcus Lee",
    role: "Founder, Stack & Co",
    metric: "Cited in category answers",
  },
  {
    quote:
      "It replaced five dashboards and a weekly reporting scramble with a single briefing that's already actionable.",
    name: "Dana Okafor",
    role: "CMO, Verdant",
    metric: "5 dashboards → 1 score",
  },
];

export function CustomerStories() {
  return (
    <section
      id="customer-stories"
      className="w-full border-t border-color-border bg-color-bg py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-12 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-medium text-color-text md:text-5xl">
            Customer <span className="text-blue">stories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-color-text-muted md:text-lg">
            How growth teams use BIU to win AI answers, cut reporting time, and
            move one trusted score together.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((story, idx) => (
            <Reveal key={story.name} delay={idx * 0.07} y={20}>
              <figure className="flex h-full flex-col rounded-lg border border-color-border bg-color-surface p-7 md:p-8">
                <span className="mb-5 inline-flex w-fit rounded-full bg-color-blue-tint px-3 py-1 text-xs font-semibold text-blue">
                  {story.metric}
                </span>
                <blockquote className="flex-1 font-body text-[15px] leading-relaxed text-color-text">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-color-border pt-5">
                  <p className="font-heading text-sm font-medium text-color-text">
                    {story.name}
                  </p>
                  <p className="mt-0.5 text-sm text-color-text-muted">
                    {story.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
