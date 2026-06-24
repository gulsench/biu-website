// All copy + structured data for the BIU homepage, single source of truth.
// Layout/hierarchy mirrors a reference marketing template; all copy is original
// to Boast It UP (BIU) and grounded in its mission: AI Growth Intelligence.

/** Heading segment, accent words get the green emphasis treatment. */
export type HeadlineSegment = { text: string; accent?: boolean };

// ── ANNOUNCEMENT BAR ────────────────────────────────────────────────────────
export const announcement =
  "AI search is the new front page. See where your brand stands, free.";

// ── NAV ─────────────────────────────────────────────────────────────────────
export type NavLink = { label: string; href: string };

export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: NavLink[]; href?: never };

export function isNavDropdown(
  item: NavItem,
): item is { label: string; children: NavLink[] } {
  return "children" in item;
}

export const navLinks: NavItem[] = [
  { label: "Product", href: "/#modules" },
  {
    label: "Resources",
    children: [
      { label: "Blogs", href: "/blog" },
      { label: "Customer Stories", href: "/customer-stories" },
    ],
  },
  { label: "About Us", href: "/about" },
];

export const navCtas = {
  secondary: "Sign in",
  primary: "Request Demo",
};

/** Canonical engine list, use for all copy enumerations. */
export const ENGINE_NAMES =
  "ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude";

// ── HERO ──────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "AI Growth Intelligence Platform",
  h1: [
    { text: "Great brands are built on " },
    { text: "effort", accent: true },
    { text: "." },
  ] as HeadlineSegment[],
  h1Line2: "We help you get there.",
  lead: `Buyers ask ${ENGINE_NAMES} before they ask you.`,
  sub: "Know where you show up in AI answers, and the one move that closes the gap.",
  ctaPrimary: "See your AI visibility score",
};

// ── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "About BIU",
  title: [
    { text: "Built for brands competing in " },
    { text: "AI era", accent: true },
    { text: " markets." },
  ] satisfies HeadlineSegment[],
  intro:
    "Boast It UP (BIU) is the AI Growth Intelligence platform. We help brand and growth teams see how they show up across answer engines, understand the one root cause behind the gap, and act on a single Market Momentum Score the whole company can trust.",
  beliefs: [
    {
      title: "The answer engine is the new front page",
      body: "Ranking #1 on Google no longer means you're found. For a growing share of buyers, the answer engine is the destination. If your brand isn't in the answer, you're not in the consideration set.",
    },
    {
      title: "One score beats ten dashboards",
      body: "Growth teams drown in charts but still miss the signal that moved the number. BIU folds every module into one Market Momentum Score, so everyone reads from the same source of truth.",
    },
    {
      title: "Insight should ship with the next move",
      body: "Every alert comes with a prioritised playbook. Your team starts from the answer, not the spreadsheet.",
    },
  ],
  cta: {
    label: "Explore the four modules",
    href: "/#modules",
  },
};

// ── OUTCOMES STRIP (what you get to see) ────────────────────────────────────
export const outcomes: { value: string; label: string }[] = [
  { value: "1", label: "Market Momentum Score" },
  { value: "4", label: "Intelligence modules" },
  { value: "5", label: "Answer engines tracked" },
  { value: "14 days", label: "To first root-cause alert" },
  { value: "24h", label: "To first category insight" },
  { value: "0", label: "Reports to read" },
];

// ── ANSWER ENGINES (logo-row equivalent) ────────────────────────────────────
export const enginesHeading = "Measured across the engines buyers actually ask";

export type EngineIcon =
  | "openai"
  | "perplexity"
  | "google"
  | "gemini"
  | "claude";

export const engines: { name: string; icon: EngineIcon }[] = [
  { name: "ChatGPT", icon: "openai" },
  { name: "Perplexity", icon: "perplexity" },
  { name: "Google AI Overviews", icon: "google" },
  { name: "Gemini", icon: "gemini" },
  { name: "Claude", icon: "claude" },
];

// ── STATEMENT (single large idea) ───────────────────────────────────────────
export const statement = {
  lead: "Ranking #1 on Google no longer means you're found.",
  body: "For a growing share of buyers, the answer engine is the destination. If your brand isn't in the answer, you're not in the consideration set.",
};

// ── FEATURE SECTIONS (modules) ──────────────────────────────────────────────
export type MockVariant =
  | "search"
  | "reputation"
  | "ecom"
  | "reach"
  | "content"
  | "video"
  | "roleplay"
  | "reporting";

export interface FeatureSection {
  id: string;
  eyebrow: string;
  title: HeadlineSegment[];
  body: string;
  bullets: string[];
  mock: MockVariant;
  status?: "Coming soon";
}

export const features: FeatureSection[] = [
  {
    id: "aeo",
    eyebrow: "AEO",
    title: [
      { text: "Win the " },
      { text: "AI answer", accent: true },
      { text: " before buyers choose." },
    ],
    body: "Answer Engine Optimization tracks how your brand shows up across ChatGPT, Perplexity, Google AI Overviews, and every engine buyers ask first.",
    bullets: [
      "AI Share of Search across answer engines",
      "Category and query-cluster coverage",
      "Citation and mention tracking",
    ],
    mock: "search",
  },
  {
    id: "voice",
    eyebrow: "Social Media / Voice Intelligence",
    title: [
      { text: "Know if your voice is " },
      { text: "compounding", accent: true },
      { text: " or stalling." },
    ],
    body: "Social and voice signals show whether your distribution is building momentum, and catch the single content shift that moves reach across channels.",
    bullets: [
      "Organic reach velocity",
      "Social content performance",
      "Cross-channel audience signals",
    ],
    mock: "reach",
    status: "Coming soon",
  },
  {
    id: "competition",
    eyebrow: "Competition",
    title: [
      { text: "See where competitors appear in " },
      { text: "AI answers.", accent: true },
      { text: " Before you do." },
    ],
    body: "Track competitive share of voice across categories and rivals. Know the day a competitor starts winning the answer you're missing from.",
    bullets: [
      "Competitive benchmarking by category",
      "Share of Voice vs. rivals",
      "LLM visibility across every engine",
    ],
    mock: "search",
    status: "Coming soon",
  },
  {
    id: "reputation",
    eyebrow: "Reputation",
    title: [
      { text: "The gap between being found and being " },
      { text: "chosen", accent: true },
      { text: "." },
    ],
    body: "Your Reputation Signal is moved by review velocity and authority, not star ratings alone. BIU names the gap and the cadence needed to close it.",
    bullets: [
      "Brand trust & sentiment monitoring",
      "Review velocity intelligence",
      "Authority and citation tracking",
    ],
    mock: "reputation",
    status: "Coming soon",
  },
];

// ── PLATFORM (capability grid) ──────────────────────────────────────────────
export const platform: { tag: string; title: string; body: string }[] = [
  {
    tag: "Measure",
    title: "AI visibility, quantified",
    body: `AI Share of Search and Share of Voice across ${ENGINE_NAMES}, by category and competitor.`,
  },
  {
    tag: "Unify",
    title: "One Market Momentum Score",
    body: "AEO, social voice, competition, and reputation folded into a single score your whole team can rally around.",
  },
  {
    tag: "Diagnose",
    title: "Root-cause alerts",
    body: "When signals move, BIU finds the one change behind them, and flags it within 14 days, not next quarter.",
  },
  {
    tag: "Act",
    title: "Prioritised playbooks",
    body: "Every alert ships with the next move, ranked by impact, so the briefing already has the answer.",
  },
  {
    tag: "Benchmark",
    title: "Category intelligence",
    body: "See what a strong score looks like in your category, and exactly how far the leaders are ahead.",
  },
  {
    tag: "Monitor",
    title: "An always-on loop",
    body: "Continuous monitoring across 5 AI answer engines and every channel, the loop refines as your brand moves.",
  },
];

// ── COMPARISON (with / without BIU) ─────────────────────────────────────────
export const comparison = {
  withoutLabel: "Your stack today",
  withLabel: "With BIU",
  rows: [
    {
      without: "Keyword tools that can't see AI answers",
      with: "AI Share of Search measured across 5 answer engines",
    },
    {
      without: "Signals scattered across five dashboards",
      with: "One Market Momentum Score",
    },
    {
      without: "Charts your team has to interpret",
      with: "The root cause, named for you",
    },
    {
      without: "Find out next quarter",
      with: "Root-cause alert in 14 days",
    },
    {
      without: "Guess the next move",
      with: "A prioritised playbook, ranked by impact",
    },
  ],
};

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const faq: { q: string; a: string }[] = [
  {
    q: "What is AI Share of Search?",
    a: `It's the percentage of AI generated answers in a category where your brand appears, measured across ${ENGINE_NAMES}. For most brands today, that number is close to zero.`,
  },
  {
    q: "How is this different from Semrush or other SEO tools?",
    a: "Keyword tools measure where you rank on Google. They can't see AI generated answers. BIU measures the visibility layer those tools miss, and connects it to AEO, competition, social voice, and reputation.",
  },
  {
    q: "What do I get from the free audit?",
    a: "Your category run against 5 AI answer engines, your current AI Share of Search, and the single biggest gap between you and the leaders. No demo call required.",
  },
  {
    q: "Which modules are available now?",
    a: "AEO is live today. Social Media / Voice Intelligence, Competition, and Reputation are rolling out, all feeding the same Market Momentum Score.",
  },
  {
    q: "Who is BIU built for?",
    a: "D2C and SME brand teams competing in AI era markets, founders, CMOs, and growth leads who need one source of truth instead of five disconnected tools.",
  },
  {
    q: "How fast can we get started?",
    a: "The free audit takes minutes. Once connected, BIU surfaces a category-level insight within 24 hours and a first root-cause alert within 14 days.",
  },
];

// ── CLOSING CTA ─────────────────────────────────────────────────────────────
export const closingCta = {
  headline: [
    { text: "Your competitors are already in the answer. " },
    { text: "Close the gap", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "Run your free AI visibility audit and see exactly where your brand stands.",
  cta: "See your AI visibility score",
};

// ── FOOTER ──────────────────────────────────────────────────────────────────
export type FooterLinkItem = { label: string; href: string };

export const footer = {
  tagline:
    "The AI Growth Intelligence platform. Built for brands that compete in AI era markets.",
  email: "hello@boastitup.com",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Four Intelligence Modules", href: "/#modules" },
        { label: "AEO", href: "/#modules" },
        { label: "Social Media", href: "/#modules" },
        { label: "Competition", href: "/#modules" },
        { label: "Reputation", href: "/#modules" },
        { label: "AI Copilot", href: "/#copilot" },
        { label: "Integrations", href: "/#integrations" },
        { label: "Roadmap", href: "/#roadmap" },
      ] satisfies FooterLinkItem[],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Customer Stories", href: "/customer-stories" },
        { label: "FAQ", href: "/#faq" },
      ] satisfies FooterLinkItem[],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Request Demo", href: "mailto:hello@boastitup.com" },
        { label: "Contact", href: "mailto:hello@boastitup.com" },
      ] satisfies FooterLinkItem[],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ] satisfies FooterLinkItem[],
  social: [
    { label: "X", icon: "x" },
    { label: "LinkedIn", icon: "linkedin" },
    { label: "Instagram", icon: "instagram" },
    { label: "YouTube", icon: "youtube" },
  ],
  legalLeft: "© 2026 Boast It UP · boastitup.com",
  newsletter: {
    title: "Stay ahead of AI search",
    body: "Monthly benchmarks and playbooks on AI visibility. No fluff.",
    placeholder: "you@company.com",
    cta: "Subscribe",
  },
};

// ── SOCIAL PROOF LOGO CAROUSEL ──────────────────────────────────────────────
export const socialProof = {
  heading: "Trusted by modern brand and growth teams",
  logos: [
    "Northbeam",
    "Loop",
    "Glowwell",
    "Stack & Co",
    "Verdant",
    "Hypergrowth",
    "Onyx Labs",
    "Brightside",
  ],
};

// ── PROBLEM DISCOVERY (alternating narrative) ───────────────────────────────
export interface ProblemBlock {
  id: string;
  eyebrow: string;
  title: HeadlineSegment[];
  body: string;
  points: string[];
  visual: "search-shift" | "buyer-journey" | "scattered";
}

export const problems: ProblemBlock[] = [
  {
    id: "found",
    eyebrow: "The shift",
    title: [
      { text: "Ranking #1 on Google no longer means you're " },
      { text: "found", accent: true },
      { text: "." },
    ],
    body: "For a growing share of buyers, the AI answer is the destination, not the ten blue links. If your brand isn't named in the answer, you're not in the consideration set.",
    points: [
      "AI Overviews now sit above organic results",
      "Buyers act on the answer, not the search page",
      "Traditional rank tracking can't see any of it",
    ],
    visual: "search-shift",
  },
  {
    id: "ask",
    eyebrow: "The buyer",
    title: [
      { text: "Your buyers ask " },
      { text: "AI", accent: true },
      { text: " before they ask you." },
    ],
    body: "Discovery now starts inside ChatGPT, Perplexity, Gemini and Google AI Overviews. By the time a buyer reaches your site, the shortlist is often already written.",
    points: [
      "Category research happens inside answer engines",
      "Recommendations are shaped before your first touch",
      "The brands cited become the default choice",
    ],
    visual: "buyer-journey",
  },
  {
    id: "scattered",
    eyebrow: "The status quo",
    title: [
      { text: "Five dashboards. " },
      { text: "Zero answers", accent: true },
      { text: "." },
    ],
    body: "SEO, reviews, marketplace, and social each live in their own tool. Nobody owns the one number that says whether your brand is winning the market.",
    points: [
      "Signals scattered across disconnected tools",
      "Charts your team still has to interpret",
      "Root cause found a quarter too late",
    ],
    visual: "scattered",
  },
];

// ── FRAMEWORK (the BIU growth loop) ─────────────────────────────────────────
export const framework = {
  eyebrow: "The framework",
  title: [
    { text: "One loop, from signal to " },
    { text: "next move", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "BIU turns scattered market signals into one score, one root cause, and one prioritised action, on a loop that compounds.",
  steps: [
    {
      tag: "01",
      title: "Measure",
      body: "AEO, competition, social voice, and reputation captured across every engine and channel.",
    },
    {
      tag: "02",
      title: "Unify",
      body: "Every signal folds into a single Market Momentum Score your whole team reads the same way.",
    },
    {
      tag: "03",
      title: "Diagnose",
      body: "When the score moves, BIU names the one root cause behind it, not a wall of charts.",
    },
    {
      tag: "04",
      title: "Act",
      body: "Each alert ships with a prioritised playbook, so the next move is already decided.",
    },
  ],
};

// ── PRODUCT PILLARS (modules × pillars) ─────────────────────────────────────
export const pillarsCategory = {
  title: "Four intelligence modules",
  modulesLabel: "Our four modules",
  pillarsLabel: "Product pillars",
  cta: "Request Demo",
};

export type ProductPillar = {
  id: string;
  label: string;
  mock: MockVariant;
};

export const productModules = [
  { id: "aeo", label: "AEO" },
  { id: "social", label: "Social Media" },
  { id: "competition", label: "Competition" },
  { id: "reputation", label: "Reputation" },
] as const;

export type ProductModuleId = (typeof productModules)[number]["id"];

export const modulePillars: Record<ProductModuleId, ProductPillar[]> = {
  aeo: [
    { id: "chatgpt", label: "ChatGPT", mock: "search" },
    { id: "google-ai-overviews", label: "Google AI Overviews", mock: "search" },
    { id: "perplexity", label: "Perplexity", mock: "search" },
    { id: "claude", label: "Claude", mock: "search" },
  ],
  social: [
    { id: "content", label: "Content", mock: "reach" },
    { id: "hashtag", label: "Hashtag", mock: "reach" },
    { id: "comments", label: "Comments", mock: "reach" },
    { id: "engagement", label: "Engagement", mock: "reach" },
  ],
  competition: [
    { id: "category-benchmark", label: "Category benchmarking", mock: "search" },
    { id: "share-of-voice", label: "Share of voice", mock: "search" },
    { id: "llm-visibility", label: "LLM visibility", mock: "search" },
    { id: "rival-tracking", label: "Rival tracking", mock: "search" },
  ],
  reputation: [
    { id: "awareness", label: "Awareness", mock: "reputation" },
    { id: "trust", label: "Trust", mock: "reputation" },
    { id: "consideration", label: "Consideration", mock: "reputation" },
    { id: "choice", label: "Choice", mock: "reputation" },
  ],
};

export const modulesHub = {
  label: "BIU",
  title: "Market Momentum Score",
  body: "Every module feeds one score your whole team reads the same way.",
};

// ── ROADMAP (coming soon) ───────────────────────────────────────────────────
export const roadmap = {
  eyebrow: "On the roadmap",
  title: [
    { text: "More intelligence, " },
    { text: "coming soon", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  items: [
    {
      name: "Knowledge",
      body: "A living category knowledge base that answers what good looks like, and how far ahead the leaders are.",
    },
    {
      name: "Recruit",
      body: "Turn brand momentum into a talent magnet, with employer-brand signals tracked alongside growth.",
    },
  ],
};

// ── AI COPILOT (coach) ──────────────────────────────────────────────────────
export const copilot = {
  eyebrow: "AI Copilot",
  title: [
    { text: "An analyst that never " },
    { text: "sleeps", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  body: "BIU Copilot watches every signal, surfaces the one change that matters, and writes the briefing for you, so your team starts from the answer, not the spreadsheet.",
  bullets: [
    "Root-cause analysis in plain language",
    "Prioritised next moves, ranked by impact",
    "Ask anything about your market in natural language",
  ],
  chat: [
    { role: "user", text: "Why did our Momentum Score drop this week?" },
    {
      role: "ai",
      text: "Your AI Share of Search fell 6pts in 'organic skincare' after a competitor was newly cited by Perplexity and Google AI Overviews. Biggest lever: 3 authority placements. Want the playbook?",
    },
  ],
};

// ── INTEGRATIONS ────────────────────────────────────────────────────────────
export const integrations = {
  eyebrow: "Integrations",
  title: [
    { text: "Plugs into the stack you " },
    { text: "already run", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "Connect your channels in minutes. BIU reads from where your brand already lives.",
  logos: [
    "Shopify",
    "Amazon",
    "Google",
    "Meta",
    "Instagram",
    "YouTube",
    "TikTok",
    "Semrush",
    "HubSpot",
    "Slack",
    "Trustpilot",
    "Klaviyo",
  ],
};

// ── BLOG ────────────────────────────────────────────────────────────────────
export const blog = {
  eyebrow: "Resources",
  title: [
    { text: "Insights on " },
    { text: "AI growth", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "Playbooks, benchmarks, and analysis on AI visibility, market momentum, and the shift to answer engines.",
  posts: [
    {
      slug: "ai-share-of-search-benchmark-2026",
      title: "The 2026 AI Share of Search benchmark",
      excerpt:
        "How often category leaders appear in ChatGPT, Perplexity, and Google AI Overviews, and what separates brands that get cited from brands that don't.",
      date: "May 2026",
      category: "Benchmark",
      readTime: "7 min read",
    },
    {
      slug: "root-cause-alerts-playbook",
      title: "From dashboards to root-cause alerts",
      excerpt:
        "Why growth teams drown in charts but still miss the one signal that moved the score, and how to fix the weekly reporting loop.",
      date: "April 2026",
      category: "Playbook",
      readTime: "5 min read",
    },
    {
      slug: "aeo-vs-seo-consideration-set",
      title: "AEO vs SEO: winning the consideration set",
      excerpt:
        "Ranking first on Google no longer guarantees you're in the AI answer. What to measure when buyers ask engines before they ask you.",
      date: "March 2026",
      category: "Strategy",
      readTime: "6 min read",
    },
    {
      slug: "reputation-signal-velocity",
      title: "Reputation Signal is about velocity, not stars",
      excerpt:
        "Review volume, authority, and citation cadence move trust faster than ratings alone. A framework for closing the found-to-chosen gap.",
      date: "February 2026",
      category: "Reputation",
      readTime: "8 min read",
    },
    {
      slug: "competitive-share-of-voice-ai",
      title: "Tracking competitive share of voice in AI answers",
      excerpt:
        "The day a rival starts winning your category query is the day your pipeline feels it. How to benchmark LLM visibility by cluster and competitor.",
      date: "January 2026",
      category: "Competition",
      readTime: "6 min read",
    },
    {
      slug: "market-momentum-score-explained",
      title: "What the Market Momentum Score actually measures",
      excerpt:
        "One number your whole team can trust, built from AEO, social, competition, and reputation signals feeding a single source of truth.",
      date: "December 2025",
      category: "Product",
      readTime: "4 min read",
    },
  ],
};

// ── CASE STUDIES / SOCIAL PROOF ─────────────────────────────────────────────
export const caseStudies = {
  title: [
    { text: "Customer " },
    { text: "stories", accent: true },
  ] satisfies HeadlineSegment[],
  sub: "How growth teams use BIU to win AI answers, cut reporting time, and move one trusted score together.",
  testimonials: [
    {
      quote:
        "We finally have one number the whole team trusts. BIU told us exactly why we slipped, and what to fix first.",
      name: "Priya Nair",
      role: "Head of Growth, Glowwell",
    },
    {
      quote:
        "We were invisible in AI answers and didn't know it. Within a quarter we were the brand getting cited.",
      name: "Marcus Lee",
      role: "Founder, Stack & Co",
    },
    {
      quote:
        "It replaced five dashboards and a weekly reporting scramble with a single briefing that's already actionable.",
      name: "Dana Okafor",
      role: "CMO, Verdant",
    },
  ],
};

// ── SECURITY / TRUST ────────────────────────────────────────────────────────
export const security = {
  eyebrow: "Security & trust",
  title: [
    { text: "Enterprise-grade by " },
    { text: "default", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "Your data is encrypted in transit and at rest, and never sold or shared.",
  badges: [
    { name: "SOC 2 Type II", note: "Audited controls" },
    { name: "GDPR", note: "EU data compliance" },
    { name: "ISO 27001", note: "Information security" },
    { name: "AES-256", note: "Encryption at rest" },
  ],
};
