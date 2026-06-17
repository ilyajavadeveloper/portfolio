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
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.16,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.55,
            ease: "easeOut",
        },
    }),
};

/* ================= DATA ================= */

const selfDrivenEducation = {
    degree: "Self-Driven IT Education",
    institution: "Independent Learning & Real Projects",
    duration: "Ongoing — Present",
    description:
        "Continuous self-education focused on frontend development, React, modern JavaScript, UI architecture and practical software engineering. The learning process is project-based: every concept is tested through real components, layouts, animations and production-style structure.",
    highlights: [
        "Building real portfolio components with React, Tailwind CSS and Framer Motion.",
        "Practicing responsive design across mobile, tablet, laptop and large desktop screens.",
        "Learning how to structure components, constants, reusable data and clean UI sections.",
        "Improving debugging habits by fixing layout, scale, overflow, navigation and animation issues.",
        "Studying frontend architecture through practice, not only passive theory.",
    ],
};

const diagnosticLearning = {
    degree: "Technical Diagnostic Thinking",
    institution: "Electrical Diagnostics Experience — Scania",
    duration: "2025 — Present",
    description:
        "Hands-on technical work as an electrician diagnostic technician has strengthened my engineering mindset: reading systems, tracing faults, understanding cause and effect, and working with precision under real responsibility.",
    highlights: [
        "Developing structured problem-solving through electrical diagnostics and fault tracing.",
        "Working with complex systems where small details can affect the whole machine.",
        "Reading technical logic, wiring behavior and system interactions step by step.",
        "Training patience, accuracy and responsibility through real equipment and real consequences.",
        "Transferring diagnostic thinking into software: isolate the issue, inspect the flow, fix the root cause.",
    ],
};

const learningTracks = [
    {
        icon: Code2,
        title: "Frontend Engineering",
        text: "React, JavaScript, component structure, props, reusable UI patterns and clean project organization.",
    },
    {
        icon: Layers,
        title: "Interface Architecture",
        text: "Building sections that scale: navigation, hero blocks, experience cards, education layouts and project pages.",
    },
    {
        icon: Sparkles,
        title: "Motion & Visual Feel",
        text: "Using Framer Motion, transitions, hover states and subtle visual rhythm to make interfaces feel premium.",
    },
    {
        icon: Workflow,
        title: "Responsive Systems",
        text: "Adapting layouts for phones, tablets, laptops and large monitors without breaking composition.",
    },
    {
        icon: Terminal,
        title: "Developer Workflow",
        text: "Practicing Git-style thinking, clean files, reusable constants, debugging and production-ready habits.",
    },
    {
        icon: Cpu,
        title: "System Thinking",
        text: "Combining IT learning with diagnostic experience: understanding systems deeply, not randomly guessing.",
    },
];

const studyPrinciples = [
    "I learn by building real things, not by collecting empty theory.",
    "Every component is treated like a system: structure, responsibility, spacing and behavior.",
    "Clean UI matters, but reliable logic matters even more.",
    "I connect technical diagnostics with software debugging: find the root cause, not the surface symptom.",
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
            viewport={{ once: true, amount: 0.12 }}
            className="relative overflow-hidden py-24 px-5 sm:px-6 lg:px-16"
        >
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <motion.div
                    variants={fadeUp}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur">
                        <GraduationCap size={18} />
                        Education path
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Education & Learning
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
                        Structured education, self-driven IT growth and technical experience shaped by real systems,
                        real debugging and continuous improvement.
                    </p>
                </motion.div>

                {/* MAIN EDUCATION CARDS */}
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {extendedEducation.map((edu, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            custom={index + 1}
                            whileHover={{ y: -7 }}
                            className="
                                group
                                relative overflow-hidden rounded-3xl
                                border border-white/15
                                bg-white/[0.055]
                                p-6 sm:p-8
                                backdrop-blur
                                transition
                                hover:border-white/30
                                hover:bg-white/[0.085]
                            "
                        >
                            {/* CARD GLOW */}
                            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-white/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-5 flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                                        {edu.degree === "Self-Driven IT Education" ? (
                                            <Laptop className="text-white/80" size={24} />
                                        ) : edu.degree === "Technical Diagnostic Thinking" ? (
                                            <Wrench className="text-white/80" size={24} />
                                        ) : (
                                            <GraduationCap className="text-white/80" size={24} />
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                                            {edu.degree}
                                        </h3>

                                        <p className="mt-2 text-base font-medium text-white/75 sm:text-lg">
                                            {edu.institution}
                                        </p>
                                    </div>
                                </div>

                                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/70">
                                    {edu.duration}
                                </span>

                                <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                                    {edu.description}
                                </p>

                                {edu.highlights && (
                                    <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/68 sm:text-base">
                                        {edu.highlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* IT LEARNING SYSTEM */}
                <motion.div
                    className="mt-20"
                    variants={cardVariants}
                    custom={extendedEducation.length + 1}
                >
                    <div
                        className="
                            relative overflow-hidden rounded-[2rem]
                            border border-white/20
                            bg-gradient-to-br from-white/12 via-white/7 to-white/5
                            p-6 sm:p-8 lg:p-10
                            backdrop-blur
                        "
                    >
                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

                        <div className="relative z-10">
                            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                                        <Laptop className="text-white/80" size={28} />
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                                            IT Growth System
                                        </h3>
                                        <p className="mt-2 text-white/60">
                                            Practical frontend learning built around real output
                                        </p>
                                    </div>
                                </div>

                                <span className="w-fit rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-bold text-white/75">
                                    Always improving
                                </span>
                            </div>

                            <p className="max-w-4xl text-base leading-relaxed text-white/78 sm:text-lg">
                                My IT education is not passive. I build, break, fix and improve. The focus is on
                                modern frontend development, component architecture, responsive interfaces,
                                animation quality and clean implementation. Every project becomes a small laboratory:
                                layout, state, timing, hierarchy, user flow and visual polish.
                            </p>

                            <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                                {learningTracks.map((track, i) => {
                                    const Icon = track.icon;

                                    return (
                                        <motion.div
                                            key={i}
                                            variants={fadeUp}
                                            custom={i + 1}
                                            className="
                                                rounded-2xl
                                                border border-white/12
                                                bg-black/20
                                                p-5
                                                transition
                                                hover:border-white/25
                                                hover:bg-white/10
                                            "
                                        >
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                                                    <Icon size={20} className="text-white/75" />
                                                </div>

                                                <h4 className="text-lg font-bold text-white">
                                                    {track.title}
                                                </h4>
                                            </div>

                                            <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                                                {track.text}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* STUDY PRINCIPLES */}
                <motion.div
                    className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
                    variants={cardVariants}
                    custom={extendedEducation.length + 2}
                >
                    {studyPrinciples.map((principle, index) => (
                        <div
                            key={index}
                            className="
                                flex items-start gap-4 rounded-2xl
                                border border-white/12
                                bg-white/[0.045]
                                p-5
                                backdrop-blur
                            "
                        >
                            <BookOpen className="mt-1 shrink-0 text-white/55" size={20} />
                            <p className="text-base leading-relaxed text-white/72">
                                {principle}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default EducationSection;