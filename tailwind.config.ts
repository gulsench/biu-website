import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1232px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: "hsl(var(--color-blue))",
        "color-bg": "var(--color-bg)",
        "color-bg-alt": "var(--color-bg-alt)",
        "color-paper": "var(--color-paper)",
        "color-surface": "var(--color-surface)",
        "color-blue-tint": "var(--color-blue-tint)",
        "color-blue-paper": "var(--color-blue-paper)",
        "color-text": "var(--color-text)",
        "color-text-muted": "var(--color-text-muted)",
        "color-text-dim": "var(--color-text-dim)",
        "color-blue": "var(--color-blue-light)",
        "color-border": "var(--color-border)",
        "color-border-light": "var(--color-border-light)",
        "color-border-dashed": "var(--color-border-dashed)",
        "color-card-blue": "var(--color-card-blue)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hero-ticker-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hero-ticker-scroll": "hero-ticker-scroll 36s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
