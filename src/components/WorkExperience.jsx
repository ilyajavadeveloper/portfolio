import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Anchor, Shield, Code2, CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const WorkExperience = () => {
  const extendedExperiences = [
    {
      title: "Diagnostics & PDI Systems Specialist (Automotive)",
      company: "Scania Israel",
      duration: "2025 – Present",
      tag: "CAN-bus · ECU Telemetry · SDP3",
      icon: Cpu,
      accent: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      description:
        "Performing advanced electronic diagnostics, ECU software calibration, CAN-bus troubleshooting, and Pre-Delivery Inspections (PDI) on commercial fleet vehicles using Scania SDP3.",
      highlights: [
        "Diagnosing electrical and electronic faults across networked ECUs using structured root-cause methodology.",
        "Reading complex wiring schematics, sensor telemetry, and communication bus protocols under tight operational deadlines.",
        "Verifying hardware-software interactions, firmware calibrations, and system reliability prior to fleet deployment.",
      ],
    },
    {
      title: "Full-Stack & Frontend Developer",
      company: "Independent & Commercial Projects",
      duration: "2022 – Present",
      tag: "TypeScript · React · Next.js · Java",
      icon: Code2,
      accent: "text-sky-400 border-sky-400/30 bg-sky-500/10",
      description:
        "Architecting and shipping full-stack web applications, interactive 3D/motion showcases, and multi-language (RTL/LTR) commercial platforms.",
      highlights: [
        "Built and deployed 10+ production applications including FinTech dashboards, crypto analytics, 3D showcases, and corporate platforms.",
        "Engineered scalable component systems with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.",
        "Integrated authentication, background event workflows (Inngest), AI APIs, and database persistence (MongoDB / SQL).",
      ],
    },
    {
      title: EXPERIENCES[1]?.title || "Terminal Operations System (TOS) Specialist",
      company: EXPERIENCES[1]?.company || "Ashdod Port — TOS Division",
      duration: EXPERIENCES[1]?.duration || "2024 – 2025",
      tag: "Enterprise TOS · Real-Time Logistics",
      icon: Anchor,
      accent: "text-indigo-400 border-indigo-400/30 bg-indigo-500/10",
      description:
        EXPERIENCES[1]?.description ||
        "Operated enterprise-grade Terminal Operating Systems (TOS) in Israel’s busiest maritime port. Managed real-time vessel workflows, yard planning, container routing, and mission-critical logistics data under high operational load.",
      highlights: [
        "Coordinated real-time container routing, crane telemetry, and yard state across high-concurrency terminal operations.",
        "Maintained strict data integrity and rapid incident resolution in a 24/7 mission-critical logistics environment.",
      ],
    },
    {
      title: EXPERIENCES[2]?.title || 'Operations & Intelligence Coordinator (חמ״ל קמ"ציה)',
      company: EXPERIENCES[2]?.company || "IDF — 916th Patrol Squadron, Israeli Navy",
      duration: EXPERIENCES[2]?.duration || "2018 – 2021",
      tag: "Naval Command Center · C4I Systems",
      icon: Shield,
      accent: "text-amber-400 border-amber-400/30 bg-amber-500/10",
      description:
        EXPERIENCES[2]?.description ||
        "Served in the naval operational command center (War Room). Managed encrypted communications, real-time radar/sensor tracking, resource scheduling, and high-priority incident response for coastal security units.",
      highlights: [
        "Operated tactical C4I software, radar feeds, and encrypted communication networks under high-stakes conditions.",
        "Coordinated multi-unit maritime patrols and fast decision-making workflows.",
      ],
    },
  ];

  return (
    <motion.section
      id="work-experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Section Title */}
      <div className="mb-14 text-center lg:mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <Briefcase size={15} />
          <span>Career Track // Operations & Code</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Work Experience
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Real systems, real diagnostics, and production software — shaped by environments where reliability is non-negotiable.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical Timeline Line (Desktop/Tablet) */}
        <div className="pointer-events-none absolute bottom-4 left-6 top-4 hidden w-px bg-gradient-to-b from-sky-400/50 via-white/15 to-transparent sm:block" />

        <div className="space-y-6 sm:space-y-8">
          {extendedExperiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="group relative sm:pl-16"
              >
                {/* Timeline Node Icon */}
                <div
                  className={` absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl transition-transform duration-300 group-hover:scale-110 sm:flex ${exp.accent}`}
                >
                  <Icon size={20} />
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.06] sm:p-8">
                  <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 md:flex-row md:items-start">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300">
                          {exp.company}
                        </span>
                        <span className="text-white/25">•</span>
                        <span className="font-mono text-[11px] text-white/50">
                          {exp.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {exp.title}
                      </h3>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 font-mono text-xs font-semibold text-white/80">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="mt-5 space-y-2.5">
                      {exp.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-white/65 sm:text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-sky-400/80"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
