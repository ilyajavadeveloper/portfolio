import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    const fallback = "/images/placeholder.png";

    return (
        <div className="relative h-56 w-full overflow-hidden rounded-t-3xl bg-white/5">
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={(e) => (e.currentTarget.src = fallback)}
                className={`h-full w-full object-cover transition-all duration-700 ${
                    loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
            />

            {/* image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
    );
};

function Projects() {
    return (
        <section
            id="projects"
            className="relative px-6 pt-24 lg:px-16"
        >
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    Selected Projects
                </h2>
                <p className="mt-4 text-lg text-white/60">
                    Real products, real systems, production-level work
                </p>
            </motion.div>

            {/* GRID */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="
              group relative flex flex-col overflow-hidden
              rounded-3xl border border-white/15
              bg-white/5 backdrop-blur
              transition
              hover:border-white/30
              hover:bg-white/10
            "
                    >
                        <LazyImage src={project.image} alt={project.name} />

                        {/* CONTENT */}
                        <div className="flex flex-grow flex-col justify-between p-6">
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    {project.name}
                                </h3>
                                <p className="text-sm leading-relaxed text-white/70">
                                    {project.description}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-6">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/20
                    bg-white/10 px-6 py-3
                    text-sm font-semibold text-white
                    backdrop-blur transition
                    hover:border-white/40 hover:bg-white/20
                  "
                                >
                                    View Project
                                    <MdArrowOutward className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </div>

                        {/* glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                            <div className="absolute -inset-1 rounded-3xl bg-white/10 blur-2xl" />
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
