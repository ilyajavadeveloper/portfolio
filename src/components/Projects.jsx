import React, { useState } from "react";
import {
    MdArrowOutward,
    MdAutoAwesome,
    MdLayers,
    MdWeb,
    MdStar,
} from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

/* ================= HELPERS ================= */

const getProjectTech = (project) => {
    return project.technologies || project.stack || project.tags || [];
};

/* ================= IMAGE ================= */

const LazyImage = ({ src, alt, size = "default" }) => {
    const [loaded, setLoaded] = useState(false);
    const fallback = "/images/placeholder.png";

    const imageHeight =
        size === "hero"
            ? "h-72 sm:h-80 lg:h-full lg:min-h-[460px]"
            : "h-60 sm:h-64 lg:h-72";

    return (
        <div className={`relative w-full overflow-hidden bg-white/5 ${imageHeight}`}>
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/15 to-white/5" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallback;
                    setLoaded(true);
                }}
                className={`
                    h-full w-full object-cover transition-all duration-700
                    group-hover:scale-105
                    ${loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"}
                `}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
        </div>
    );
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project, index }) => {
    const techList = getProjectTech(project);

    return (
        <motion.article
            variants={cardVariants}
            custom={index + 1}
            whileHover={{ y: -9 }}
            className="
                group relative flex h-full flex-col overflow-hidden
                rounded-[2rem] border border-white/15
                bg-white/[0.055] backdrop-blur
                transition duration-300
                hover:border-white/35 hover:bg-white/[0.09]
            "
        >
            <div className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem]">
                <LazyImage src={project.image} alt={project.name} />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
                    0{index + 1}
                </div>

                <div className="flex flex-grow flex-col justify-between p-6">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                            <MdWeb size={15} />
                            Landing
                        </div>

                        <h3 className="text-2xl font-extrabold tracking-tight text-white">
                            {project.name}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                            {project.description}
                        </p>

                        {techList.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {techList.slice(0, 5).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="
                                            rounded-full border border-white/12
                                            bg-white/[0.07] px-3 py-1
                                            text-xs font-semibold text-white/65
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center gap-2
                                    rounded-full border border-white/20
                                    bg-white/10 px-6 py-3
                                    text-sm font-bold text-white
                                    backdrop-blur transition
                                    hover:border-white/45 hover:bg-white/20
                                "
                            >
                                View Landing
                                <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ) : (
                            <span
                                className="
                                    inline-flex items-center gap-2
                                    rounded-full border border-white/10
                                    bg-white/5 px-6 py-3
                                    text-sm font-bold text-white/45
                                "
                            >
                                Coming Soon
                            </span>
                        )}

                        <div className="hidden h-px flex-1 bg-gradient-to-r from-white/25 to-transparent sm:block" />
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

/* ================= STANDALONE PROJECT ================= */

const StandaloneProject = ({ project }) => {
    if (!project) return null;

    const techList = getProjectTech(project);

    return (
        <motion.article
            variants={cardVariants}
            custom={8}
            whileHover={{ y: -10 }}
            className="
                group relative overflow-hidden rounded-[2.25rem]
                border border-white/20
                bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-white/[0.04]
                backdrop-blur
                transition duration-300
                hover:border-white/40
            "
        >
            <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-[130px]" />
            <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10 grid overflow-hidden rounded-[2.25rem] lg:grid-cols-[1.05fr_0.95fr]">
                <LazyImage src={project.image} alt={project.name} size="hero" />

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                            <MdStar size={16} />
                            Standalone Project
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55 backdrop-blur">
                            Special build
                        </span>
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {project.name}
                    </h3>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                        {project.description}
                    </p>

                    {techList.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {techList.slice(0, 8).map((tech, i) => (
                                <span
                                    key={i}
                                    className="
                                        rounded-full border border-white/14
                                        bg-white/[0.08] px-4 py-2
                                        text-xs font-semibold text-white/70
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex w-full items-center justify-center gap-2
                                    rounded-full border border-white/25
                                    bg-white/15 px-7 py-4
                                    text-sm font-extrabold text-white
                                    backdrop-blur transition
                                    hover:border-white/50 hover:bg-white/25
                                    sm:w-auto
                                "
                            >
                                View Full Project
                                <MdArrowOutward className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ) : (
                            <span
                                className="
                                    inline-flex w-full items-center justify-center gap-2
                                    rounded-full border border-white/10
                                    bg-white/5 px-7 py-4
                                    text-sm font-extrabold text-white/45
                                    sm:w-auto
                                "
                            >
                                Coming Soon
                            </span>
                        )}

                        <div className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

/* ================= MAIN COMPONENT ================= */

function Projects() {
    const landingProjects = PROJECTS.slice(0, -1);
    const standaloneProject = PROJECTS[PROJECTS.length - 1];

    return (
        <motion.section
            id="projects"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-16"
        >
            {/* BACKGROUND ATMOSPHERE */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-[170px]" />
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />
            <div className="pointer-events-none absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-white/5 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <motion.div
                    variants={cardVariants}
                    custom={1}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur">
                        <MdAutoAwesome size={18} />
                        Portfolio work
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Selected Projects
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
                        A curated collection of landing pages and standalone builds focused on visual quality,
                        structure, responsiveness and clean user experience.
                    </p>
                </motion.div>

                {/* LANDINGS SECTION */}
                {landingProjects.length > 0 && (
                    <div className="mb-24">
                        <motion.div
                            variants={cardVariants}
                            custom={2}
                            className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                        >
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                    <MdLayers size={17} />
                                    Collection
                                </div>

                                <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                    Landing Pages
                                </h3>

                                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/58">
                                    Marketing-style pages built around first impression, clean composition,
                                    responsive layout and strong visual presentation.
                                </p>
                            </div>

                            <div className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-bold text-white/60 backdrop-blur">
                                {landingProjects.length} builds
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                            {landingProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id || index}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* STANDALONE SECTION */}
                {standaloneProject && (
                    <div>
                        <motion.div
                            variants={cardVariants}
                            custom={6}
                            className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                        >
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                    <MdStar size={17} />
                                    Separate case
                                </div>

                                <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                    Standalone Project
                                </h3>

                                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/58">
                                    A separate project block reserved for deeper builds, stronger concepts
                                    and future full-scale work.
                                </p>
                            </div>
                        </motion.div>

                        <StandaloneProject project={standaloneProject} />
                    </div>
                )}
            </div>
        </motion.section>
    );
}

export default Projects;