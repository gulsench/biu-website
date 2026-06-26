"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { isNavDropdown, navCtas, navLinks } from "@/lib/content";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
      className={cn("transition-transform", open && "rotate-180")}
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="text-ink">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function Nav() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileResourcesOpen(false);
      }
    }

    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileResourcesOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
    setResourcesOpen(false);
  }

  return (
    <header
      data-mobile-nav
      className="border-b border-border bg-card"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-container items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a
          href="/"
          aria-label="BIU home"
          className="flex shrink-0 items-center gap-2 text-[17px] font-bold tracking-tight text-ink"
        >
          <Image
            src="/logo.png"
            alt="BIU logo"
            width={200}
            height={191}
            priority
            className="h-7 w-auto"
          />
        </a>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((item) =>
            isNavDropdown(item) ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  onClick={() => setResourcesOpen((v) => !v)}
                  className="inline-flex items-center gap-1 text-[14px] font-normal text-mid transition-colors hover:text-ink"
                >
                  {item.label}
                  <Chevron open={resourcesOpen} />
                </button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                      transition={{ duration: reduce ? 0 : 0.15 }}
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <ul
                        role="menu"
                        className="min-w-[200px] overflow-hidden border border-border bg-card py-2 shadow-lift"
                      >
                        {item.children.map((child) => (
                          <li key={child.label} role="none">
                            <a
                              role="menuitem"
                              href={child.href}
                              className="block px-4 py-2.5 text-[14px] font-normal text-mid transition-colors hover:bg-surfacealt hover:text-ink"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[14px] font-normal text-mid transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="module" className="hidden sm:inline-flex">
            {navCtas.primary}
          </Button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border bg-card lg:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            key="mobile-nav-menu"
            role="navigation"
            aria-label="Mobile"
            initial={reduce ? undefined : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="mx-auto max-w-container px-4 py-4 sm:px-6">
              <ul className="space-y-1">
                {navLinks.map((item) =>
                  isNavDropdown(item) ? (
                    <li key={item.label}>
                      <button
                        type="button"
                        aria-expanded={mobileResourcesOpen}
                        onClick={() => setMobileResourcesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-left text-[15px] font-normal text-ink transition-colors hover:text-brand-700"
                      >
                        {item.label}
                        <Chevron open={mobileResourcesOpen} />
                      </button>
                      <AnimatePresence>
                        {mobileResourcesOpen && (
                          <motion.ul
                            initial={reduce ? undefined : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={reduce ? undefined : { opacity: 0, height: 0 }}
                            transition={{ duration: reduce ? 0 : 0.15 }}
                            className="mb-2 ml-3 overflow-hidden border-l border-border pl-3"
                          >
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <a
                                  href={child.href}
                                  onClick={closeMobile}
                                  className="block py-2.5 text-[14px] font-normal text-mid transition-colors hover:text-ink"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        className="block rounded-sm px-3 py-3 text-[15px] font-normal text-ink transition-colors hover:text-brand-700"
                      >
                        {item.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-4 border-t border-border pt-4 sm:hidden">
                <Button variant="module" className="w-full" onClick={closeMobile}>
                  {navCtas.primary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
