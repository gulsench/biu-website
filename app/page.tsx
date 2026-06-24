import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { FourModulesIllustration } from "@/components/FourModulesIllustration";
import { ProductPillars } from "@/components/ProductPillars";
import { Roadmap } from "@/components/Roadmap";
import { Copilot } from "@/components/Copilot";
import { Integrations } from "@/components/Integrations";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <Hero />
        <LogoCarousel />
        <FourModulesIllustration />
        <ProductPillars />
        <Copilot />
        <Integrations />
        <CaseStudies />
        <Roadmap />
        <FAQ />
      </main>
    </SiteShell>
  );
}
