import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/hvostenko-dev",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/ilyajavadev?t=Pw_d8gBFzXQ0udIKbj9yDQ&s=35",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ilya.hvostenko/?locale=ru_RU",
    icon: Facebook,
  },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative mx-auto mt-12 w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Brand Column */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <Logo />
            <p className="mt-4 max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
              Full-Stack & Frontend Engineer building scalable web and mobile applications, interactive 3D/motion UI, and reliable system architectures.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <a
                href="/Ilya_Hvostenko_CV.pdf"
                download="Ilya_Hvostenko_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-xs font-bold text-white transition hover:border-white/30 hover:bg-white/15"
              >
                <Download size={14} className="text-sky-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/45 lg:text-left">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-center text-xs font-semibold text-white/70 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white lg:text-left"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Socials */}
          <div className="flex flex-col items-center lg:col-span-3 lg:items-end">
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Connect
            </h4>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="group mb-5 flex w-full items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/30 p-4 transition hover:border-sky-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10 text-sky-300">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Let’s Talk
                  </p>
                  <p className="text-[11px] text-white/50">Send a message</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              />
            </a>

            <div className="flex flex-wrap justify-center gap-2">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/65 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-white/45">
            © {currentYear}{" "}
            <span className="font-semibold text-white/75">Ilya Hvostenko</span>. Built with React, Tailwind CSS & Framer Motion.
          </p>

          <a
            href="#home"
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-xs font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
