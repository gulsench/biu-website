import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
      card: "0",
      chip: "0",
      pill: "0",
    },
    extend: {
      colors: {
        brand: {
          900: "rgb(var(--brand-900-rgb) / <alpha-value>)",
          700: "rgb(var(--brand-700-rgb) / <alpha-value>)",
          600: "rgb(var(--brand-600-rgb) / <alpha-value>)",
          500: "rgb(var(--brand-500-rgb) / <alpha-value>)",
          400: "rgb(var(--brand-400-rgb) / <alpha-value>)",
          accent: "rgb(var(--brand-accent-rgb) / <alpha-value>)",
          glow: "var(--brand-glow)",
        },
        ink: "var(--ink)",
        mid: "var(--mid)",
        muted: "var(--muted)",
        "green-text": "var(--color-green-text)",
        border: "var(--border)",
        surface: "var(--surface)",
        surfacealt: "var(--surface-alt)",
        card: "var(--card)",
        "card-inner": "var(--card-inner)",
        "card-border": "var(--card-border)",
        band: "var(--band)",
        white: "rgb(255 255 255 / <alpha-value>)",
        up: "var(--up)",
        down: "var(--down)",
        warn: "var(--warn)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",
        lift: "0 2px 8px rgba(0,0,0,.08), 0 12px 32px rgba(0,0,0,.06)",
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
