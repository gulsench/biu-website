import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const productLinks = ["AEO", "Social Media", "Competition", "Reputation"];
const resourceLinks = ["Customer Stories", "Blogs", "FAQs"];

const resourceHrefs: Record<string, string> = {
  "Customer Stories": "#customer-stories",
  Blogs: "#",
  FAQs: "#",
};

function NavDropdown({
  label,
  links,
  hrefFor,
}: {
  label: string;
  links: string[];
  hrefFor: (link: string) => string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 font-body text-sm font-medium text-color-text hover:text-color-text-muted transition-colors">
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
          >
            <div className="bg-color-surface border border-color-border rounded-lg shadow-sm min-w-[180px] overflow-hidden py-1">
              {links.map((link) => (
                <a
                  key={link}
                  href={hrefFor(link)}
                  className="block px-4 py-2 text-sm font-medium text-color-text hover:bg-color-bg-alt transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-color-border bg-color-bg/95 backdrop-blur-sm"
    >
      <div className="mx-auto w-full max-w-[1232px] px-6 md:px-8 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="flex-shrink-0 font-heading font-bold text-xl text-blue"
        >
          Boast It UP
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavDropdown label="Products" links={productLinks} hrefFor={() => "#modules"} />
          <NavDropdown
            label="Resources"
            links={resourceLinks}
            hrefFor={(link) => resourceHrefs[link] ?? "#"}
          />
          <a
            href="#"
            className="font-body text-sm font-medium text-color-text hover:text-color-text-muted transition-colors"
          >
            About us
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#"
              className="px-5 py-2 border border-color-border bg-color-paper font-body text-sm font-medium text-color-text rounded hover:bg-color-bg-alt transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="inline-flex items-center h-9 px-4 bg-blue text-white border border-blue rounded font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a demo
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-color-text"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-color-border bg-color-surface overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-mono uppercase text-color-text-dim mb-3">
                  Products
                </p>
                <div className="space-y-2">
                  {productLinks.map((link) => (
                    <a
                      key={link}
                      href="#modules"
                      className="block text-sm text-color-text hover:text-blue"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-color-border">
                <p className="text-xs font-mono uppercase text-color-text-dim mb-3">
                  Resources
                </p>
                <div className="space-y-2">
                  {resourceLinks.map((link) => (
                    <a
                      key={link}
                      href={resourceHrefs[link] ?? "#"}
                      className="block text-sm text-color-text hover:text-blue"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="block text-sm font-medium text-color-text hover:text-blue"
              >
                About us
              </a>
              <div className="pt-4 border-t border-color-border space-y-2">
                <a
                  href="#"
                  className="block text-sm font-medium text-color-text hover:text-blue"
                >
                  Login
                </a>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-color-border">
                <span className="text-sm font-medium text-color-text">Appearance</span>
                <ThemeToggle />
              </div>
              <a
                href="#"
                className="block w-full text-center py-3 bg-blue text-white rounded-lg font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
