import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const WorkExperience = () => {
    return (
        <motion.section
            id="work-experience"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto mt-24 px-6"
        >
            {/* SECTION TITLE */}
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    Work Experience
                </h2>
                <p className="mt-4 text-lg text-white/60">
                    Real projects, real systems, real responsibility
                </p>
            </div>

            {/* EXPERIENCE LIST */}
            <div className="space-y-10">
                {EXPERIENCES.map((exp, index) => (
                    <motion.article
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="
              relative overflow-hidden rounded-3xl
              border border-white/15
              bg-white/5
              p-8
              backdrop-blur
              transition
              hover:border-white/30
              hover:bg-white/10
            "
                    >
                        {/* glow */}
                        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-white/5 opacity-0 blur-2xl transition group-hover:opacity-100" />

                        {/* HEADER */}
                        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    {exp.title}
                                </h3>
                                <p className="text-lg font-medium text-white/80">
                                    {exp.company}
                                </p>
                            </div>

                            <span className="mt-2 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/80 sm:mt-0">
                {exp.duration}
              </span>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="space-y-4 text-white/75">
                            <p className="text-lg leading-relaxed">
                                {exp.description}
                            </p>

                            {/* OPTIONAL EXTENDED LOGIC */}
                            {exp.highlights && (
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-white/70">
                                    {exp.highlights.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default WorkExperience;
