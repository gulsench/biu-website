import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | BIU",
  description:
    "Answers about BIU, AI Share of Search, answer engine optimization, and how the platform works.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <main>
        <FAQ />
      </main>
    </SiteShell>
  );
}
