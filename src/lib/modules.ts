export type ModuleId = "aeo" | "social" | "competition" | "reputation";

export type PillarId =
  | "share-of-search"
  | "answer-gaps"
  | "citation-alerts"
  | "aeo-score"
  | "content"
  | "hashtag"
  | "comments"
  | "engagement"
  | "share-of-voice"
  | "content-gap"
  | "move-tracker"
  | "benchmark-score"
  | "awareness"
  | "trust"
  | "consideration"
  | "choice";

export interface Pillar {
  id: PillarId;
  label: string;
  description: string;
}

export interface ProductModule {
  id: ModuleId;
  label: string;
  description: string;
  pillars: Pillar[];
}

export const productModules: ProductModule[] = [
  {
    id: "aeo",
    label: "AEO",
    description:
      "Answer Engine Optimization tracks how your brand shows up across ChatGPT, Perplexity, Google AI Overviews, and every engine buyers ask first.",
    pillars: [
      {
        id: "share-of-search",
        label: "Share of Search",
        description:
          "Who owns the AI answer in your category right now — measured across every engine that shapes buyer decisions.",
      },
      {
        id: "answer-gaps",
        label: "Answer Gaps",
        description:
          "Queries where rivals appear and you don't, so your team knows exactly which answers to win next.",
      },
      {
        id: "citation-alerts",
        label: "Citation Alerts",
        description:
          "Real-time signals when competitors gain citations or your position shifts across answer engines.",
      },
      {
        id: "aeo-score",
        label: "AEO Score",
        description:
          "One benchmark score for visibility, citations, coverage, and velocity — against your category leaders.",
      },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    description:
      "Social and voice signals show whether your distribution is building momentum, and catch the content shift that moves reach.",
    pillars: [
      {
        id: "content",
        label: "Content",
        description:
          "Content quality and format performance — which posts compound reach and which formats to double down on.",
      },
      {
        id: "hashtag",
        label: "Hashtag",
        description:
          "Top-performing tags and reach trends so your social strategy follows signal, not guesswork.",
      },
      {
        id: "comments",
        label: "Comments",
        description:
          "Sentiment in the conversation around your brand — positive, neutral, and negative, tracked over time.",
      },
      {
        id: "engagement",
        label: "Engagement",
        description:
          "Engagement rate and momentum across channels, with a clear read on what's accelerating or stalling.",
      },
    ],
  },
  {
    id: "competition",
    label: "Competition",
    description:
      "Track competitive share of voice across categories and rivals. Know the day a competitor starts winning the answer you're missing.",
    pillars: [
      {
        id: "share-of-voice",
        label: "Share of Voice",
        description:
          "Your share of category conversation versus rivals — and who's pulling ahead in AI answers.",
      },
      {
        id: "content-gap",
        label: "Content Gap",
        description:
          "Topics rivals cover and you don't, ranked by the gap's impact on your category position.",
      },
      {
        id: "move-tracker",
        label: "Move Tracker",
        description:
          "Competitor moves as they happen — new pages, citations, and category plays worth monitoring.",
      },
      {
        id: "benchmark-score",
        label: "Benchmark Score",
        description:
          "How you stack up on content depth, AI presence, and social velocity against category leaders.",
      },
    ],
  },
  {
    id: "reputation",
    label: "Reputation",
    description:
      "The gap between being found and being chosen. BIU tracks trust, consideration, and choice signals — not star ratings alone.",
    pillars: [
      {
        id: "awareness",
        label: "Awareness",
        description:
          "Unaided brand recall versus category average and the leader — how top-of-mind you really are.",
      },
      {
        id: "trust",
        label: "Trust",
        description:
          "Trust index from reviews, NPS, sentiment, and authority — the signals that move consideration.",
      },
      {
        id: "consideration",
        label: "Consideration",
        description:
          "Where you rank on the purchase shortlist when buyers compare options in your category.",
      },
      {
        id: "choice",
        label: "Choice",
        description:
          "Final purchase preference share — the moment between consideration and the decision to buy.",
      },
    ],
  },
];
