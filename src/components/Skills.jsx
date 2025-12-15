import React from "react";
import { SKILLS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.section
      className="container mx-auto"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="mb-14 mt-24 text-center text-4xl font-semibold">
        Skills
      </h2>

      <motion.div className="mx-2 rounded-3xl border border-stone-50/20 bg-white/[0.02] px-4 py-4 shadow-xl backdrop-blur lg:px-20">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`group relative flex items-center justify-between py-6 transition-all ${
              index !== SKILLS.length - 1
                ? "border-b border-stone-50/15"
                : ""
            }`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-xl font-medium">
                {skill.name}
              </span>
            </div>

            {/* RIGHT — VISUAL FILL */}
            <div className="relative flex w-40 items-center justify-end">
              <div className="h-[2px] w-full rounded-full bg-stone-700/40 overflow-hidden">
                <div className="h-full w-2/3 origin-left scale-x-0 bg-gradient-to-r from-white/60 to-white/20 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </div>

            {/* HOVER GLOW */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/[0.03]" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
