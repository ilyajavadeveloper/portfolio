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
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const WorkExperience = () => {
    const extendedExperiences = [
        {
            title: "Electrician Diagnostic Technician",
            company: "Scania",
            duration: "2025 — Present",
            description:
                "Working with electrical diagnostics, troubleshooting and technical inspection of Scania vehicles. My role combines practical electrical work, system-level thinking and precise fault analysis across modern vehicle systems.",
            highlights: [
                "Diagnosing electrical and electronic faults in commercial vehicles using structured troubleshooting methods.",
                "Working with vehicle wiring, sensors, control units, batteries, charging systems and communication-related issues.",
                "Reading technical diagrams, identifying failure points and tracing problems from symptoms to root cause.",
                "Performing inspections, repairs and verification checks to make sure systems work reliably after service.",
                "Developing a strong understanding of how mechanical, electrical and software-controlled systems interact in real machines.",
                "Building discipline, responsibility and accuracy through hands-on work where mistakes are expensive and details matter.",
            ],
        },
        {
            title: "Self-Driven IT Education",
            company: "Independent Learning",
            duration: "Ongoing — Present",
            description:
                "Continuously studying frontend development, modern JavaScript, React, UI architecture and real-world software engineering practices. My learning process is self-driven, project-based and focused on building clean, scalable and practical digital products.",
            highlights: [
                "Studying React, JavaScript, component architecture, routing, animations and responsive design.",
                "Building personal projects to turn theory into real interface logic and production-style code.",
                "Improving understanding of state management, reusable components, clean structure and maintainable frontend systems.",
                "Learning how to design interfaces that are not only visually strong, but also readable, fast and user-friendly.",
                "Practicing Git, project organization, debugging and deployment habits used in real development workflows.",
                "Continuing to learn every day, because software changes constantly and strong engineers never stop upgrading.",
            ],
        },
        ...EXPERIENCES,
    ];

    return (
        <motion.section
            id="work-experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
                {extendedExperiences.map((exp, index) => (
                    <motion.article
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="
                            group
                            relative overflow-hidden rounded-3xl
                            border border-white/15
                            bg-white/5
                            p-6 sm:p-8
                            backdrop-blur
                            transition
                            hover:border-white/30
                            hover:bg-white/10
                        "
                    >
                        {/* GLOW */}
                        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-white/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                        {/* CONTENT */}
                        <div className="relative z-10">
                            {/* HEADER */}
                            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                                        {exp.title}
                                    </h3>

                                    <p className="mt-1 text-lg font-medium text-white/80">
                                        {exp.company}
                                    </p>
                                </div>

                                <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/80">
                                    {exp.duration}
                                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="space-y-4 text-white/75">
                                <p className="text-base leading-relaxed sm:text-lg">
                                    {exp.description}
                                </p>

                                {exp.highlights && (
                                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70 sm:text-base">
                                        {exp.highlights.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default WorkExperience;