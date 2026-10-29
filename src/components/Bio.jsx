import React from "react";
import { BIO } from "../constants/index.jsx";
import { motion } from "framer-motion";
import { UserCheck, Cpu, Layers, ShieldAlert, Code2, Sparkles } from "lucide-react";

const BIO_HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Core Stack",
    value: "TS · React · Next.js · Java",
    desc: "Production web & mobile apps with clean architecture",
    accent: "text-sky-400 border-sky-400/25 bg-sky-500/10",
  },
  {
    icon: Cpu,
    label: "Diagnostics & Telemetry",
    value: "Scania SDP3 · CAN-bus",
    desc: "Hardware-adjacent fault tracing & ECU calibration",
    accent: "text-emerald-400 border-emerald-400/25 bg-emerald-500/10",
  },
  {
    icon: Layers,
    label: "Mission-Critical Ops",
    value: "Ashdod Port TOS · Navy",
    desc: "High-load logistics & real-time command systems",
    accent: "text-indigo-400 border-indigo-400/25 bg-indigo-500/10",
  },
  {
    icon: ShieldAlert,
    label: "Engineering Mindset",
    value: "Root-Cause First",
    desc: "Strict data integrity, predictability & zero guesswork",
    accent: "text-amber-400 border-amber-400/25 bg-amber-500/10",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

function Bio() {
  return (
    <section
      id="bio"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-[140px]" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center lg:mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <UserCheck size={15} />
          <span>Profile // Overview</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Where Software Meets Real Systems
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Bridging modern frontend & full-stack engineering with industrial-grade diagnostics and high-reliability operations.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left: Narrative Glass Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-6 backdrop-blur-xl sm:p-8 lg:col-span-7 lg:p-10"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50">
              <Sparkles size={14} className="text-sky-400" />
              Engineering Background
            </span>
            <span className="font-mono text-xs text-white/35">BIO.01</span>
          </div>

          <div className="space-y-5">
            {BIO.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={item}
                className="text-sm leading-relaxed text-white/80 sm:text-base lg:text-[1.05rem] lg:leading-8"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right: 4 Key Pillar Bento Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
        >
          {BIO_HIGHLIGHTS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -4 }}
                className="group relative flex items-start gap-4 rounded-3xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${pillar.accent}`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/45">
                    {pillar.label}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold text-white sm:text-lg">
                    {pillar.value}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Bio;
