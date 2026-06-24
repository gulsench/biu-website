import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog | BIU",
  description:
    "Playbooks, benchmarks, and analysis on AI visibility, market momentum, and answer engine optimization.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <main>
        <BlogIndex />
      </main>
    </SiteShell>
  );
}
