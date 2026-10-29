import React, { useState, useEffect } from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ArrowUpRight, Terminal, Cpu, Layers, Sparkles, ShieldCheck, ChevronRight } from "lucide-react";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiThreedotjs,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

/* ================= DATA ================= */

const ROLES = [
  "Full-Stack & Frontend Engineer",
  "React · Next.js · TypeScript",
  "UI Architecture & 3D Motion",
  "Java / Spring & System Diagnostics",
];

const TECH_PILLS = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React / RN", icon: RiReactjsLine, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Three.js", icon: SiThreedotjs, color: "text-orange-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Spring Boot", icon: SiSpring, color: "text-emerald-400" },
];

const MANIFESTO_CARDS = [
  {
    id: "01",
    tag: "Architecture",
    icon: Layers,
    title: "State, timing & hierarchy",
    text: "I engineer component systems that stay predictable under scale, change, and real operational pressure.",
  },
  {
    id: "02",
    tag: "Craft & Motion",
    icon: Sparkles,
    title: "Intentional & calm UI",
    text: "Interfaces should feel tactile and responsive — blending clean abstractions with hardware-accelerated motion.",
  },
  {
    id: "03",
    tag: "Reliability",
    icon: ShieldCheck,
    title: "Technical honesty",
    text: "Shaped by mission-critical diagnostics & logistics: root-cause clarity and performance always beat short-lived trends.",
  },
];

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ================= COMPONENT ================= */

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  // Subtle 3D tilt for desktop portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 160 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 pb-16 sm:pt-28 md:pt-32 lg:py-28 xl:py-32"
    >
      {/* ================= AMBIENT BACKGROUND ACCENTS ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle technical grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
        {/* Ambient spotlights */}
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-500/15 blur-[110px] sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/15 blur-[130px] sm:h-[28rem] sm:w-[28rem]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          
          {/* ================= LEFT COLUMN: TEXT & CONTROLS ================= */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            
            {/* STATUS BADGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-5 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-xl sm:text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Full-Stack & Frontend roles</span>
              <span className="hidden text-white/30 sm:inline">•</span>
              <span className="hidden font-mono text-[11px] uppercase tracking-wider text-white/60 sm:inline">
                Israel / Remote
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 text-[clamp(2.5rem,6vw,5.25rem)] font-extrabold leading-[1.03] tracking-tight text-white"
            >
              <span className="bg-gradient-to-br from-white via-white to-white/65 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                {HERO.name}
              </span>
            </motion.h1>

            {/* DYNAMIC ROLE SUBTITLE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-5 flex min-h-[2.25rem] items-center justify-center sm:min-h-[2.5rem] lg:justify-start"
            >
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/30 px-3.5 py-1.5 backdrop-blur-md">
                <Terminal size={18} className="shrink-0 text-sky-400" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-mono text-sm font-semibold tracking-tight text-sky-200 sm:text-base md:text-lg"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* MAIN DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mb-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:leading-relaxed"
            >
              {HERO.description}
            </motion.p>

            {/* CORE TECH STACK PILLS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mb-7 flex max-w-2xl flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              {TECH_PILLS.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md transition duration-300 hover:border-white/25 hover:bg-white/[0.1]"
                  >
                    <Icon className={`text-sm ${tech.color}`} />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </motion.div>

            {/* INTERACTIVE ENGINEERING MANIFESTO BENTO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mb-8 w-full max-w-2xl"
            >
              <div className="mb-2.5 flex items-center justify-between px-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Engineering Philosophy
                </span>
                <span className="font-mono text-[11px] text-white/35 sm:hidden">
                  Tap to switch
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                {MANIFESTO_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  const isActive = activeCard === idx;
                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => setActiveCard(idx)}
                      onMouseEnter={() => setActiveCard(idx)}
                      className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-300 ${
                        isActive
                          ? "border-white/35 bg-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div>
                        <div className="mb-2.5 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-300/90">
                            <Icon size={14} className="text-sky-400" />
                            {card.tag}
                          </span>
                          <span className="font-mono text-[11px] text-white/30">
                            {card.id}
                          </span>
                        </div>
                        <h3 className="mb-1.5 text-sm font-bold text-white">
                          {card.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-white/70">
                          {card.text}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA BUTTONS & SOCIALS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex w-full max-w-2xl flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              {/* Primary CTA: Explore Projects */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto sm:text-base"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* CV Download Buttons */}
              <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:items-center sm:gap-3">
                <a
                  href="/IT%20CV.pdf"
                  download="IT CV.pdf"
                  aria-label="Download IT CV"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-4 py-3.5 text-xs font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 sm:px-5 sm:text-sm"
                >
                  <Download size={16} strokeWidth={2.2} className="shrink-0 text-sky-300" />
                  <span>IT CV</span>
                </a>

                <a
                  href="/General%20CV.pdf"
                  download="General CV.pdf"
                  aria-label="Download General CV"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-xs font-semibold text-white/85 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/15 sm:px-5 sm:text-sm"
                >
                  <Download size={16} strokeWidth={2} className="shrink-0 text-white/70" />
                  <span>General CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-1 flex items-center justify-center gap-2.5 sm:mt-0 sm:ml-auto lg:ml-2">
                {SOCIAL_MEDIA_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social link ${index + 1}`}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-white/80 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/15 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: PORTRAIT & HUD CARD ================= */}
          <motion.div
            className="order-1 flex w-full justify-center lg:order-2 lg:col-span-5 lg:justify-end"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="group relative w-full max-w-[270px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]"
            >
              {/* Ambient Backlight Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-sky-500/20 via-white/10 to-indigo-500/20 opacity-75 blur-2xl transition duration-500 group-hover:opacity-100 sm:-inset-10 sm:blur-3xl" />

              {/* Outer Glass Frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-b from-white/15 to-white/[0.03] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:rounded-[38px] sm:p-3">
                
                {/* Top Frame HUD Bar */}
                <div className="mb-2 flex items-center justify-between px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    SYS.PORTRAIT // 01
                  </span>
                  <span>ILYA.HVOSTENKO</span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[30px]">
                  <img
                    src={heroPortrait}
                    alt="Ilya Hvostenko portrait"
                    className="h-[310px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[540px]"
                    draggable={false}
                  />

                  {/* Subtle Bottom Vignette for HUD readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Bottom Embedded Telemetry Card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/60 p-3 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-300">
                        <Cpu size={20} />
                      </div>
                      <div className="text-left">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-sky-300/90 sm:text-[11px]">
                          Full-Stack & Systems
                        </p>
                        <p className="text-xs font-bold text-white sm:text-sm">
                          Web · Mobile · Diagnostics
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, "contact")}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black"
                      aria-label="Contact Ilya"
                    >
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Badge (Desktop / Tablet) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pointer-events-none absolute -right-3 top-10 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-black/75 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl sm:flex lg:-right-6"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                    Production Focus
                  </p>
                  <p className="text-xs font-bold text-white">
                    10+ Shipped Projects
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
