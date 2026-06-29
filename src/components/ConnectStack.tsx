import { Reveal } from "@/components/Reveal";
import { LogoTicker, type LogoTickerItem } from "@/components/LogoTicker";

const stackIntegrations: LogoTickerItem[] = [
  { type: "image", name: "Shopify", slug: "shopify" },
  { type: "image", name: "Amazon", slug: "amazon" },
  { type: "image", name: "Google", slug: "google" },
  { type: "image", name: "Meta", slug: "meta" },
  { type: "image", name: "Instagram", slug: "instagram" },
  { type: "image", name: "YouTube", slug: "youtube" },
  { type: "image", name: "TikTok", slug: "tiktok" },
  { type: "image", name: "Semrush", slug: "semrush" },
  { type: "image", name: "HubSpot", slug: "hubspot" },
  { type: "image", name: "Slack", slug: "slack" },
  { type: "image", name: "Trustpilot", slug: "trustpilot" },
  { type: "text", label: "Klaviyo" },
];

const stackGroups = [
  {
    label: "Commerce",
    items: ["Shopify", "Amazon"],
  },
  {
    label: "Discovery",
    items: ["Google", "Meta", "Semrush"],
  },
  {
    label: "Social & comms",
    items: ["Instagram", "YouTube", "TikTok", "Slack"],
  },
  {
    label: "Retention",
    items: ["HubSpot", "Klaviyo", "Trustpilot"],
  },
];

export function ConnectStack() {
  return (
    <section
      id="integrations"
      className="w-full overflow-x-clip border-t border-color-border bg-color-surface py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="eyebrow mb-4">Integrations</p>
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium text-color-text md:text-5xl">
            Plugs into the stack you{" "}
            <span className="text-blue">already run.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-color-text-muted sm:text-base md:text-lg">
            Connect your channels in minutes. BIU reads from where your brand
            already lives — no rip-and-replace, no new workflow to learn.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.06} className="mt-2 w-full">
        <LogoTicker items={stackIntegrations} />
      </Reveal>

      <div className="section-container">
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {stackGroups.map((group, index) => (
            <Reveal key={group.label} delay={0.08 + index * 0.04} y={12}>
              <div className="h-full border border-color-border bg-color-bg-alt px-4 py-4 sm:px-5 sm:py-5">
                <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-color-text-dim">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] font-medium text-color-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
