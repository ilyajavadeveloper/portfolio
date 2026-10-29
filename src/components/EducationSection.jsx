import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  BookOpen,
  Code2,
  Wrench,
  Cpu,
  Layers,
  Terminal,
  Workflow,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ================= DATA ================= */

const selfDrivenEducation = {
  degree: "Continuous Full-Stack & UI Engineering",
  institution: "Project-Driven Learning & Architecture",
  duration: "Ongoing — Present",
  description:
    "Focused on modern React/Next.js patterns, TypeScript type safety, 3D/WebGL interactive experiences, and scalable frontend system design verified through deployed applications.",
  highlights: [
    "Building production-grade interfaces with React, Next.js, Tailwind CSS, Framer Motion, and Three.js.",
    "Engineering responsive layouts across mobile, tablet, and ultra-wide desktop viewports.",
    "Applying clean state management, server/client separation, and reusable component abstractions.",
  ],
};

const diagnosticLearning = {
  degree: "Systems & Diagnostic Engineering",
  institution: "Scania Automotive Diagnostics & PDI",
  duration: "2025 — Present",
  description:
    "Hands-on electrical and CAN-bus diagnostics on commercial vehicles — reinforcing structured root-cause analysis, telemetry interpretation, and zero-guesswork troubleshooting.",
  highlights: [
    "Tracing complex multi-ECU faults from symptom to root cause using Scania SDP3.",
    "Reading technical schematics, sensor data streams, and hardware-software control loops.",
    "Translating industrial diagnostic discipline directly into software debugging and architecture.",
  ],
};

const learningTracks = [
  {
    icon: Code2,
    title: "Frontend Core",
    text: "TypeScript, React, Next.js App Router, reusable hooks, and clean module boundaries.",
  },
  {
    icon: Layers,
    title: "UI Architecture",
    text: "Design systems, predictable state flow, and scalable component hierarchies.",
  },
  {
    icon: Sparkles,
    title: "Motion & 3D Web",
    text: "GSAP timelines, Framer Motion micro-interactions, and Three.js / R3F scenes.",
  },
  {
    icon: Workflow,
    title: "Responsive Fluidity",
    text: "Mobile-first adaptive grids, fluid typography, and cross-browser stability.",
  },
  {
    icon: Terminal,
    title: "Backend & Data",
    text: "Java, Spring Boot, SQL/NoSQL persistence, REST APIs, and event-driven workflows.",
  },
  {
    icon: Cpu,
    title: "Diagnostic Mindset",
    text: "Isolate the signal, inspect the data flow, and resolve the underlying root cause.",
  },
];

const studyPrinciples = [
  "Learn by shipping real production applications, not by collecting passive theory.",
  "Treat every UI component as a system with clear state, timing, and responsibility.",
  "Visual polish attracts attention; architectural reliability keeps users.",
  "Connect hardware diagnostic precision with software debugging: never guess — verify.",
];

/* ================= COMPONENT ================= */

const EducationSection = () => {
  const extendedEducation = [
    ...EDUCATION,
    selfDrivenEducation,
    diagnosticLearning,
  ];

  return (
    <motion.section
      id="education"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px]" />

      {/* Header */}
      <motion.div variants={cardVariants} className="mb-14 text-center lg:mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <GraduationCap size={15} />
          <span>Academic & Practical Foundation</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Education & Engineering Growth
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Formal full-stack software engineering training combined with military command center operations and continuous technical evolution.
        </p>
      </motion.div>

      {/* Main Education Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {extendedEducation.map((edu, index) => {
          const isSelf = edu.degree.includes("Continuous");
          const isDiag = edu.degree.includes("Diagnostic");

          return (
            <motion.article
              key={index}
              variants={cardVariants}
              custom={index + 1}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.06] sm:p-8"
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-300">
                      {isSelf ? (
                        <Laptop size={20} />
                      ) : isDiag ? (
                        <Wrench size={20} />
                      ) : (
                        <GraduationCap size={20} />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-sky-200/80 sm:text-sm">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] font-semibold text-white/75">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <ul className="mt-5 space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-white/65 sm:text-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-sky-400/80"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* IT Growth System Matrix */}
      <motion.div
        className="mt-12 lg:mt-16"
        variants={cardVariants}
        custom={5}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent p-6 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/15 text-sky-300">
                <Terminal size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Core Engineering Pillars
                </h3>
                <p className="mt-0.5 text-xs text-white/55 sm:text-sm">
                  How I approach architecture, interfaces, and problem-solving
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-300">
              Always Evolving
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningTracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {track.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-white/65 sm:text-sm">
                    {track.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Principles Footer Row */}
          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 md:grid-cols-2">
            {studyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <BookOpen className="mt-0.5 shrink-0 text-sky-400/75" size={16} />
                <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
