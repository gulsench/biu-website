import { Reveal } from "@/components/Reveal";
import { LogoTicker, type LogoTickerItem } from "@/components/LogoTicker";

const integrations: LogoTickerItem[] = [
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

export function Integrations() {
  return (
    <section
      id="integrations"
      className="w-full overflow-hidden border-t border-color-border bg-color-surface py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-12 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-medium text-color-text md:text-5xl">
            Plugs into the stack you already run.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-color-text-muted md:text-lg">
            Connect your channels in minutes. BIU reads from where your brand
            already lives.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <LogoTicker items={integrations} />
        </Reveal>
      </div>
    </section>
  );
}
