import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FourModules } from "@/components/FourModules";
import { Copilot } from "@/components/Copilot";
import { Roadmap } from "@/components/Roadmap";
import { Integrations } from "@/components/Integrations";
import { CustomerStories } from "@/components/CustomerStories";
import { CircularSpinText } from "@/components/CircularSpinText";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Index() {
  return (
    <div className="min-h-screen bg-color-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(var(--color-blue)/0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(var(--color-blue)/0.08),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-6 right-2 z-0 sm:bottom-8 sm:right-6 md:bottom-8 lg:right-10"
          aria-hidden
        >
          <CircularSpinText
            className="pointer-events-auto scale-[0.72] text-blue opacity-50 sm:scale-90 md:scale-100 dark:opacity-40"
            text="AEO • SOCIAL • COMPETITION • REPUTATION • "
            spinDuration={28}
            size={168}
            radius={62}
            fontSize={9}
            fontWeight={700}
            onHover="speedUp"
            showCircleBorder={false}
          />
        </div>
        <div className="relative z-10 section-container py-14 md:py-20 lg:py-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="mb-6 inline-flex items-center px-4 py-1.5 border border-blue/30 bg-color-paper/90 text-xs font-semibold tracking-wide text-color-text shadow-sm backdrop-blur-sm"
            >
              <span>For D2C Brands, Founders, Marketing team.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
              className="font-heading text-color-text"
            >
              <span className="block text-[clamp(2.125rem,5.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.045em]">
                Great brands are built on{" "}
                <span className="font-bold text-blue">effort.</span>
              </span>
              <span className="mt-3 block text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-[-0.04em] text-color-text">
                We help you get there.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.16 }}
              className="font-heading mt-5 max-w-xl text-[1.0625rem] font-normal leading-[1.55] tracking-[-0.02em] text-color-text-muted md:mt-6 md:text-[1.1875rem]"
            >
              Know where you show up in{" "}
              <span className="font-semibold text-color-text">AI answers</span>, and the{" "}
              <span className="font-semibold text-blue">one move</span> that closes the
              gap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.24 }}
              className="mt-8 flex w-full justify-center md:mt-9"
            >
              <a
                href="#"
                className="flex w-full max-w-md items-center justify-center rounded-lg border border-blue bg-blue px-6 py-3.5 font-body text-sm font-semibold text-white shadow-[0_8px_24px_hsl(var(--color-blue)/0.28)] transition-all hover:opacity-95 hover:shadow-[0_10px_28px_hsl(var(--color-blue)/0.34)] group sm:min-h-11 sm:w-auto md:text-base"
              >
                <span className="text-center">See your AI visibility score</span>
                <ArrowRight
                  size={16}
                  className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <FourModules />

      <Copilot />

      <Integrations />

      <CustomerStories />

      <Roadmap />

      {/* CTA Section */}
      <section className="w-full border-t border-color-border bg-color-bg py-20 md:py-32">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-6xl font-medium text-color-text mb-4">
              Ready to win AI search?
            </h2>
            <p className="text-lg text-color-text-muted mb-8 max-w-2xl mx-auto">
              Run your free AI visibility audit and see exactly where your brand
              stands.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90 group sm:w-auto sm:min-h-12"
              >
                See your AI visibility score
                <ArrowRight
                  size={16}
                  className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg border border-color-border bg-color-surface px-6 py-3.5 font-medium text-color-text transition-colors hover:bg-color-paper sm:w-auto sm:min-h-12"
              >
                Book a demo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
