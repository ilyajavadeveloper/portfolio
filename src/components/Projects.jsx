import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const LazyImage = ({
                       src,
                       alt,
                       className = "h-56",
                   }) => {
    const [loaded, setLoaded] = useState(false);
    const fallback = "/images/placeholder.png";

    const handleError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallback;
    };

    return (
        <div
            className={`
        relative w-full overflow-hidden bg-white/5
        ${className}
      `}
        >
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={handleError}
                className={`
          h-full w-full object-cover
          transition-all duration-700
          ${
                    loaded
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                }
        `}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </div>
    );
};

const Technologies = ({ technologies }) => {
    if (!technologies?.length) {
        return null;
    }

    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <span
                    key={technology}
                    className="
            rounded-full border border-white/10
            bg-white/5 px-3 py-1.5
            text-xs font-medium text-white/65
            backdrop-blur-md
          "
                >
          {technology}
        </span>
            ))}
        </div>
    );
};

function Projects() {  
    const featuredProjects = PROJECTS.filter(
        (project) => project.category === "featured",
    );

    const landingProjects = PROJECTS.filter(
        (project) => project.category === "landing",
    );

    return (
        <section
            id="projects"
            className="relative overflow-hidden px-6 pt-24 lg:px-16"
        >
            {/* Background decoration */}

            <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

            {/* Main header */}

            <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative z-10 mb-20 text-center"
            >
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-white/40">
          My work
        </span>

                <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                    Selected Projects
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
                    From focused landing pages to immersive 3D systems and
                    motion-driven digital experiences.
                </p>
            </motion.div>

            {/* ================= FEATURED PROJECTS ================= */}

            <div className="relative z-10 mx-auto mb-28 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                Advanced work
              </span>

                            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Featured Experiences
                            </h3>
                        </div>

                        <p className="max-w-lg text-sm leading-relaxed text-white/50 md:text-right">
                            Larger projects focused on complex interactions,
                            real-time 3D graphics, cinematic motion and
                            experimental frontend engineering.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                                ease: "easeOut",
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            whileHover={{ y: -10 }}
                            className="
                group relative flex flex-col overflow-hidden
                rounded-[2rem] border border-white/15
                bg-white/[0.04] backdrop-blur-xl
                transition-all duration-500
                hover:border-white/30
                hover:bg-white/[0.07]
                hover:shadow-2xl
                hover:shadow-black/40
              "
                        >
                            <LazyImage
                                src={project.image}
                                alt={project.name}
                                className="h-72 md:h-80 lg:h-[350px]"
                            />

                            <div className="relative z-10 flex flex-grow flex-col justify-between p-7 md:p-8">
                                <div>
                                    <div className="mb-5 flex items-center justify-between gap-4">
                    <span
                        className="
                        rounded-full border border-white/15
                        bg-white/10 px-4 py-2
                        text-xs font-bold uppercase
                        tracking-[0.15em] text-white/75
                        backdrop-blur-md
                      "
                    >
                      {project.label}
                    </span>

                                        <span className="text-sm font-medium text-white/30">
                      0{index + 1}
                    </span>
                                    </div>

                                    <h4 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                                        {project.name}
                                    </h4>

                                    <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                                        {project.description}
                                    </p>

                                    <Technologies
                                        technologies={project.technologies}
                                    />
                                </div>

                                <div className="mt-8">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.name}`}
                                        className="
                      inline-flex items-center gap-3
                      rounded-full border border-white/20
                      bg-white px-6 py-3
                      text-sm font-bold text-black
                      transition-all duration-300
                      hover:scale-[1.03]
                      hover:bg-white/85
                    "
                                    >
                                        Explore Project

                                        <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Hover glow */}

                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* ================= LANDING PAGES ================= */}

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Websites
          </span>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Landing Pages
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
                        Responsive commercial websites built around visual
                        identity, clear hierarchy and smooth user interaction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {landingProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            whileHover={{ y: -8 }}
                            className="
                group relative flex flex-col overflow-hidden
                rounded-3xl border border-white/15
                bg-white/[0.04] backdrop-blur-xl
                transition-all duration-500
                hover:border-white/30
                hover:bg-white/[0.08]
              "
                        >
                            <LazyImage
                                src={project.image}
                                alt={project.name}
                                className="h-56"
                            />

                            <div className="relative z-10 flex flex-grow flex-col justify-between p-6">
                                <div>
                  <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Landing page
                  </span>

                                    <h4 className="mb-3 text-xl font-bold text-white">
                                        {project.name}
                                    </h4>

                                    <p className="text-sm leading-6 text-white/60">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-7">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.name}`}
                                        className="
                      inline-flex items-center gap-2
                      rounded-full border border-white/20
                      bg-white/10 px-5 py-2.5
                      text-sm font-semibold text-white
                      backdrop-blur-md
                      transition-all duration-300
                      hover:border-white/40
                      hover:bg-white/20
                    "
                                    >
                                        View Project

                                        <MdArrowOutward className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-white/10 blur-[70px]" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;