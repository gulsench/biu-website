import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | BIU",
  description:
    "Boast It UP (BIU) is the AI Growth Intelligence platform for brands competing in AI era markets.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <AboutContent />
      </main>
    </SiteShell>
  );
}
