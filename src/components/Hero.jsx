import React, { useState, useEffect } from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Download,
  ArrowUpRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Code2,
  MapPin,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiThreedotjs,
  SiPostgresql,
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
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-300" },
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
      delay: i * 0.08,
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
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 pb-16 sm:pt-28 md:pt-32 lg:py-24 xl:py-28"
    >
      {/* ================= AMBIENT BACKGROUND ACCENTS ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle technical grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 45%, #000 30%, transparent 100%)",
          }}
        />

        {/* Ambient spotlights with rich cosmic tone */}
        <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px] sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px] sm:h-[32rem] sm:w-[32rem]" />
        <div className="absolute left-1/3 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1480px]">
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14">
          
          {/* ================= TOP ON MOBILE / RIGHT ON DESKTOP: PORTRAIT & HUD ================= */}
          <motion.div
            className="order-1 flex w-full justify-center lg:order-2 lg:col-span-6 xl:col-span-6 lg:justify-end"
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
              /* Significantly widened container: up to 420px on mobile, 560px-660px on desktop */
              className="group relative w-full max-w-[370px] xs:max-w-[420px] sm:max-w-[490px] md:max-w-[530px] lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px]"
            >
              {/* Dynamic Multi-Color Ambient Backlight Glow */}
              <div className="pointer-events-none absolute -inset-8 rounded-[56px] bg-gradient-to-tr from-sky-500/25 via-blue-500/15 to-indigo-600/30 opacity-80 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:blur-3xl sm:-inset-12 sm:blur-3xl" />

              {/* Outer Cyber Glass Frame */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-b from-white/15 via-white/[0.05] to-black/40 p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:rounded-[42px] sm:p-3.5">
                
                {/* Top Frame HUD Bar */}
                <div className="mb-2.5 flex items-center justify-between px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-semibold text-emerald-400">SYS.ONLINE</span>
                    <span className="text-white/30">//</span>
                    <span className="text-white/70">ILYA.HVOSTENKO</span>
                  </span>
                  <span className="hidden font-mono text-sky-300/80 sm:inline">
                    FULL-STACK.DEV
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[26px] sm:rounded-[34px]">
                  
                  {/* Subtle Tech Corner Markers */}
                  <div className="pointer-events-none absolute top-3 left-3 z-20 font-mono text-xs font-bold text-sky-400/70 drop-shadow">
                    +
                  </div>
                  <div className="pointer-events-none absolute top-3 right-3 z-20 font-mono text-xs font-bold text-sky-400/70 drop-shadow">
                    +
                  </div>

                  {/* Main Portrait Image: Centered face positioned higher up, larger frame */}
                  <img
                    src={heroPortrait}
                    alt="Ilya Hvostenko portrait"
                    style={{ objectPosition: "50% 64%" }}
                    className="h-[430px] xs:h-[470px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px] 2xl:h-[680px] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    draggable={false}
                  />

                  {/* Sleek Atmospheric Vignette for telemetry readability - only at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {/* Bottom Embedded Telemetry Card */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2.5 rounded-2xl border border-white/20 bg-black/75 p-2.5 shadow-lg backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-3.5">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-500/20 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] sm:h-11 sm:w-11">
                        <Cpu size={19} className="sm:hidden" />
                        <Cpu size={22} className="hidden sm:block" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <p className="font-mono text-[9px] uppercase tracking-wider text-sky-300 sm:text-[11px]">
                            Full-Stack & Systems
                          </p>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-[11px] font-bold text-white sm:text-sm">
                          Web · Mobile · Architecture
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, "contact")}
                      className="group/btn inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-300 hover:border-white/50 hover:bg-white hover:text-black active:scale-95 sm:h-10 sm:w-10"
                      aria-label="Contact Ilya"
                    >
                      <ChevronRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Badge: Open to Work */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pointer-events-none absolute -right-3 top-8 hidden items-center gap-2.5 rounded-2xl border border-sky-400/30 bg-black/85 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:flex lg:-right-6"
              >
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-sky-300">
                    Open to Work
                  </p>
                  <p className="text-xs font-bold text-white">
                    Full-Stack & Frontend
                  </p>
                </div>
              </motion.div>

              {/* Floating Bottom-Left Badge: Production Shipped */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pointer-events-none absolute -left-3 bottom-24 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-black/85 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:flex lg:-left-6"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                    Production Track
                  </p>
                  <p className="text-xs font-bold text-white">
                    10+ Shipped Projects
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ================= BELOW ON MOBILE / LEFT ON DESKTOP: TEXT & ACTIONS ================= */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-6 xl:col-span-6 lg:items-start lg:text-left">
            
            {/* STATUS BADGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-5 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 shadow-sm backdrop-blur-xl sm:text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Full-Stack & Frontend roles</span>
              <span className="text-white/30">•</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-white/60">
                <MapPin size={12} className="text-sky-400" />
                Israel / Remote
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-white"
            >
              <span className="bg-gradient-to-br from-white via-slate-100 to-sky-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(56,189,248,0.25)]">
                {HERO.name}
              </span>
            </motion.h1>

            {/* DYNAMIC DEVELOPER TERMINAL ROLE SWITCHER */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-5 flex w-full max-w-xl items-center justify-center lg:justify-start"
            >
              <div className="inline-flex w-full items-center gap-2.5 rounded-2xl border border-white/15 bg-black/50 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md sm:w-auto">
                {/* Terminal prompt dots */}
                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400 sm:text-sm">
                  <Terminal size={16} className="text-sky-400" />
                  <span className="text-white/50">ilya@dev:~$</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="font-mono text-xs font-semibold tracking-tight text-sky-200 sm:text-sm md:text-base"
                  >
                    {ROLES[roleIndex]}
                    <span className="inline-block animate-pulse font-bold text-sky-400">_</span>
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
              I build fast, scalable web and mobile applications using{" "}
              <span className="font-semibold text-white underline decoration-sky-400/50 underline-offset-4">TypeScript</span>,{" "}
              <span className="font-semibold text-white underline decoration-cyan-400/50 underline-offset-4">React</span>,{" "}
              <span className="font-semibold text-white underline decoration-indigo-400/50 underline-offset-4">Next.js</span>, and{" "}
              <span className="font-semibold text-white underline decoration-sky-400/50 underline-offset-4">React Native</span>{" "}
              — backed by <span className="font-semibold text-white">Java / Spring Boot</span> architecture and diagnostic engineering experience.
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
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/85 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
                  >
                    <Icon className={`text-sm transition-transform duration-300 group-hover:scale-110 ${tech.color}`} />
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
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Engineering Principles
                </span>
                <span className="font-mono text-[11px] text-sky-400/70">
                  Tap / Hover to explore
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
                          ? "border-sky-400/40 bg-white/[0.12] shadow-[0_12px_32px_rgba(56,189,248,0.15)] ring-1 ring-sky-400/30"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div>
                        <div className="mb-2.5 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-300">
                            <Icon size={14} className="text-sky-400" />
                            {card.tag}
                          </span>
                          <span className="font-mono text-[11px] text-white/35">
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
                className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_35px_rgba(255,255,255,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/95 sm:w-auto sm:text-base active:scale-95"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* CV Download Button */}
              <a
                href="/Ilya_Hvostenko_CV.pdf"
                download="Ilya_Hvostenko_CV.pdf"
                aria-label="Download CV"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-400/40 bg-sky-500/15 px-6 py-3.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(56,189,248,0.15)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/70 hover:bg-sky-500/25 sm:text-sm active:scale-95"
              >
                <Download size={16} strokeWidth={2.4} className="shrink-0 text-sky-300" />
                <span>Download CV</span>
              </a>

              {/* Social Links */}
              <div className="mt-1 flex items-center justify-center gap-2.5 sm:mt-0 sm:ml-auto lg:ml-2">
                {SOCIAL_MEDIA_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social link ${index + 1}`}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-white/80 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/15 hover:text-white active:scale-95"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
