import React from "react";
import { motion } from "framer-motion";

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

// ================= ANIMATION =================

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ================= DATA =================

const SKILL_GROUPS = [
  {
    title: "Frontend Core",
    skills: [
      { name: "React", icon: RiReactjsLine, level: 0.92 },
      { name: "Next.js (App Router)", icon: SiNextdotjs, level: 0.9 },
      { name: "TypeScript", icon: SiTypescript, level: 0.9 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 0.92 },
      { name: "React Native", icon: RiReactjsLine, level: 0.82 },
      { name: "Expo", icon: SiExpo, level: 0.8 },
    ],
  },

  {
    title: "State Management & Data Flow",
    skills: [
      { name: "Zustand", icon: SiRedux, level: 0.9 },
      { name: "Redux Toolkit", icon: SiRedux, level: 0.82 },
      { name: "React Query / TanStack Query", icon: SiPostman, level: 0.88 },
      { name: "Client / Server State Separation", icon: SiRedux, level: 0.85 },
    ],
  },

  {
    title: "UI / Motion / 3D",
    skills: [
      { name: "GSAP + ScrollTrigger", icon: SiJavascript, level: 0.92 },
      { name: "Framer Motion", icon: SiFramer, level: 0.88 },
      { name: "Three.js", icon: SiThreedotjs, level: 0.85 },
      { name: "React Three Fiber (R3F)", icon: SiThreedotjs, level: 0.82 },
      { name: "@react-three/drei", icon: SiThreedotjs, level: 0.8 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 0.92 },
      { name: "Fluid / Responsive Layouts", icon: SiTailwindcss, level: 0.9 },
    ],
  },

  {
    title: "Backend & Data",
    skills: [
      { name: "Java", icon: FaJava, level: 0.85 },
      { name: "Spring Boot", icon: SiSpring, level: 0.82 },
      { name: "Hibernate / JPA", icon: SiHibernate, level: 0.78 },
      { name: "Node.js", icon: SiNodedotjs, level: 0.76 },
      { name: "MongoDB", icon: SiMongodb, level: 0.8 },
      { name: "MySQL", icon: SiMysql, level: 0.75 },
      { name: "Redis", icon: SiRedis, level: 0.72 },
    ],
  },

  {
    title: "Tooling & Infrastructure",
    skills: [
      { name: "Vite", icon: SiVite, level: 0.92 },
      { name: "Webpack", icon: SiWebpack, level: 0.75 },
      { name: "Git / GitHub", icon: SiGit, level: 0.92 },
      { name: "Docker (basic)", icon: SiDocker, level: 0.68 },
      { name: "CI/CD fundamentals", icon: SiGit, level: 0.72 },
    ],
  },

  {
    title: "Product, UX & Engineering Culture",
    skills: [
      { name: "Component Architecture", icon: SiFigma, level: 0.92 },
      { name: "Performance Optimization", icon: SiVite, level: 0.88 },
      { name: "Accessibility (a11y)", icon: SiFigma, level: 0.76 },
      { name: "Design ↔ Dev Collaboration", icon: SiFigma, level: 0.9 },
      { name: "API Integration", icon: SiPostman, level: 0.88 },
      { name: "Appwrite / BaaS", icon: SiAppwrite, level: 0.72 },
    ],
  },
];

// ================= COMPONENT =================

const Skills = () => {
  return (
      <section id="skills" className="container mx-auto mt-32 px-4">
        <h2 className="mb-16 text-center text-4xl font-semibold">
          Skills & Stack
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
              <motion.div
                  key={i}
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.04)]"
              >
                <h3 className="mb-8 text-xl font-medium tracking-wide">
                  {group.title}
                </h3>

                <div className="space-y-6">
                  {group.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                            className="group"
                        >
                          <div className="mb-2 flex items-center gap-4">
                            <Icon className="text-3xl opacity-80 transition group-hover:opacity-100" />
                            <span className="text-lg">{skill.name}</span>
                          </div>

                          {/* PROGRESS */}
                          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: skill.level }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full origin-left bg-gradient-to-r from-white/70 via-white/40 to-white/10"
                            />
                          </div>
                        </motion.div>
                    );
                  })}
                </div>
              </motion.div>
          ))}
        </div>
      </section>
  );
};

export default Skills;
