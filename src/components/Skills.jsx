import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles, Database, Wrench, ShieldCheck } from "lucide-react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiExpo,
  SiThreedotjs,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiWebpack,
  SiGit,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
  SiAppwrite,
  SiDocker,
  SiFigma,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= DATA ================= */

const SKILL_GROUPS = [
  {
    id: "01",
    title: "Frontend & Mobile Core",
    subtitle: "Component architecture & cross-platform apps",
    badgeIcon: Layers,
    accent: "from-sky-400 to-cyan-300",
    skills: [
      { name: "React", icon: RiReactjsLine, level: 0.92, color: "text-cyan-400" },
      { name: "Next.js (App Router)", icon: SiNextdotjs, level: 0.9, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, level: 0.9, color: "text-blue-400" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 0.92, color: "text-yellow-400" },
      { name: "React Native", icon: RiReactjsLine, level: 0.82, color: "text-sky-300" },
      { name: "Expo", icon: SiExpo, level: 0.8, color: "text-white/90" },
    ],
  },
  {
    id: "02",
    title: "UI, Motion & 3D Graphics",
    subtitle: "Interactive layouts & hardware-accelerated transitions",
    badgeIcon: Sparkles,
    accent: "from-indigo-400 to-purple-400",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 0.94, color: "text-sky-400" },
      { name: "GSAP + ScrollTrigger", icon: SiJavascript, level: 0.92, color: "text-emerald-400" },
      { name: "Framer Motion", icon: SiFramer, level: 0.9, color: "text-pink-400" },
      { name: "Three.js / R3F", icon: SiThreedotjs, level: 0.85, color: "text-orange-400" },
      { name: "@react-three/drei", icon: SiThreedotjs, level: 0.82, color: "text-amber-300" },
      { name: "Fluid Responsive Design", icon: SiTailwindcss, level: 0.92, color: "text-cyan-300" },
    ],
  },
  {
    id: "03",
    title: "State & Data Flow",
    subtitle: "Predictable client & server state synchronization",
    badgeIcon: Cpu,
    accent: "from-emerald-400 to-teal-300",
    skills: [
      { name: "Zustand", icon: SiRedux, level: 0.9, color: "text-amber-400" },
      { name: "TanStack Query", icon: SiPostman, level: 0.88, color: "text-rose-400" },
      { name: "Redux Toolkit", icon: SiRedux, level: 0.84, color: "text-purple-400" },
      { name: "REST & Realtime APIs", icon: SiPostman, level: 0.88, color: "text-orange-400" },
    ],
  },
  {
    id: "04",
    title: "Backend & Databases",
    subtitle: "Enterprise Java architecture & persistence",
    badgeIcon: Database,
    accent: "from-amber-400 to-orange-400",
    skills: [
      { name: "Java", icon: FaJava, level: 0.85, color: "text-orange-400" },
      { name: "Spring Boot", icon: SiSpring, level: 0.82, color: "text-emerald-400" },
      { name: "Hibernate / JPA", icon: SiHibernate, level: 0.78, color: "text-amber-300" },
      { name: "Node.js", icon: SiNodedotjs, level: 0.78, color: "text-green-400" },
      { name: "MongoDB", icon: SiMongodb, level: 0.82, color: "text-emerald-500" },
      { name: "PostgreSQL / MySQL", icon: SiMysql, level: 0.78, color: "text-sky-300" },
      { name: "Redis", icon: SiRedis, level: 0.74, color: "text-red-400" },
    ],
  },
  {
    id: "05",
    title: "Tooling & Infrastructure",
    subtitle: "Modern build pipelines & version control",
    badgeIcon: Wrench,
    accent: "from-sky-400 to-indigo-400",
    skills: [
      { name: "Vite", icon: SiVite, level: 0.92, color: "text-purple-400" },
      { name: "Git & GitHub Workflows", icon: SiGit, level: 0.92, color: "text-orange-500" },
      { name: "Webpack", icon: SiWebpack, level: 0.76, color: "text-sky-400" },
      { name: "Docker", icon: SiDocker, level: 0.7, color: "text-blue-400" },
      { name: "Appwrite / BaaS", icon: SiAppwrite, level: 0.76, color: "text-rose-500" },
    ],
  },
  {
    id: "06",
    title: "Product & Engineering Culture",
    subtitle: "Reliability, performance & UX discipline",
    badgeIcon: ShieldCheck,
    accent: "from-cyan-400 to-emerald-400",
    skills: [
      { name: "Component Systems", icon: SiFigma, level: 0.92, color: "text-pink-400" },
      { name: "Performance Optimization", icon: SiVite, level: 0.88, color: "text-amber-300" },
      { name: "Design ↔ Dev Handoff", icon: SiFigma, level: 0.9, color: "text-purple-400" },
      { name: "Accessibility (a11y)", icon: SiFigma, level: 0.8, color: "text-sky-300" },
      { name: "Root-Cause Debugging", icon: SiPostman, level: 0.94, color: "text-emerald-400" },
    ],
  },
];

/* ================= COMPONENT ================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-24 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center lg:mb-16"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <Cpu size={15} />
          <span>Technical Stack // Capabilities</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Skills & Engineering Stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Production-tested technologies across frontend architecture, interactive 3D/motion, and Java/Spring backend systems.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {SKILL_GROUPS.map((group) => {
          const BadgeIcon = group.badgeIcon;
          return (
            <motion.div
              key={group.id}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.055] sm:p-8"
            >
              <div>
                {/* Card Header */}
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] text-sky-300">
                      <BadgeIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                        {group.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-white/50 sm:text-sm">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-white/30">
                    {group.id}
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    const pct = Math.round(skill.level * 100);
                    return (
                      <motion.div key={idx} variants={item} className="group/skill">
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <Icon
                              className={`text-lg transition-transform duration-300 group-hover/skill:scale-110 ${skill.color}`}
                            />
                            <span className="font-medium text-white/85 group-hover/skill:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-white/40 group-hover/skill:text-white/70">
                            {pct}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className={`h-full origin-left rounded-full bg-gradient-to-r ${group.accent}`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
