import React, { useState, useEffect } from "react";
import { HERO, NAVIGATION_LINKS } from "../constants/index.jsx";
import { Menu, X, ArrowUpRight, Download, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#work-experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, []);

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-black/70 px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:px-6"
            : "border-white/10 bg-black/35 px-4 py-3.5 backdrop-blur-xl sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-3 text-white"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-400 transition duration-300 group-hover:border-sky-400/60 group-hover:bg-sky-500/25">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
                {HERO.name}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-white/45 sm:block">
                Full-Stack & Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-lg border border-white/15 bg-white/12 shadow-sm"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="/IT%20CV.pdf"
              download="IT CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-3.5 py-2 text-xs font-bold text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Download size={14} className="text-sky-400" />
              <span>IT CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/90"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-4">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border border-white/15 bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                      )}
                    </a>
                  );
                })}

                <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-4">
                  <a
                    href="/IT%20CV.pdf"
                    download="IT CV.pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white"
                  >
                    <Download size={15} className="text-sky-400" />
                    <span>Download IT CV</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white py-3 text-xs font-bold text-black"
                  >
                    <span>Let’s Talk</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavBar;
