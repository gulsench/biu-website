import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { CaseStudies } from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Customer Stories | BIU",
  description:
    "See how brand and growth teams use BIU to win AI answers, cut reporting time, and compound market momentum.",
};

export default function CustomerStoriesPage() {
  return (
    <SiteShell>
      <main>
        <CaseStudies showSub />
      </main>
    </SiteShell>
  );
}
