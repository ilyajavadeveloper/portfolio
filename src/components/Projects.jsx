import React, { useState, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Code2, Globe, Sparkles } from "lucide-react";

const LazyImage = ({ src, alt, className = "h-56" }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setLoaded(true);
      } else {
        setFailed(true);
      }
    }
  }, [src]);

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900/80 ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03]" />
      )}
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/40 p-6 text-center">
          <Globe className="text-sky-400/60" size={32} />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            {alt}
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-[1.04] ${
            loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/25 to-transparent" />
    </div>
  );
};

const Technologies = ({ technologies }) => {
  if (!technologies?.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-medium text-sky-200/80 backdrop-blur-md transition group-hover:border-white/20 group-hover:bg-white/[0.07]"
        >
          {technology}
        </span>
      ))}
    </div>
  );
};

function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.category === "featured");
  const landingProjects = PROJECTS.filter((project) => project.category === "landing");

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Ambient Spotlights */}
      <div className="pointer-events-none absolute left-1/2 top-36 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mb-14 text-center lg:mb-20"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <Code2 size={15} />
          <span>Selected Work // Production</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Featured Projects & Platforms
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Full-stack platforms, interactive 3D experiences, and high-conversion commercial web solutions deployed to production.
        </p>
      </motion.div>

      {/* ================= FEATURED PROJECTS ================= */}
      <div className="relative z-10 mb-20 lg:mb-28">
        <div className="mb-8 flex flex-col justify-between gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              01 // Full-Stack & Advanced UI
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Flagship Applications
            </h3>
          </div>
          <span className="font-mono text-xs text-white/40">
            {featuredProjects.length} Production Builds
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:border-sky-400/35 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Browser Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="max-w-[200px] truncate font-mono text-[11px] text-white/40 sm:max-w-xs">
                  {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
                <span className="font-mono text-[11px] font-bold text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <LazyImage
                src={project.image}
                alt={project.name}
                className="h-56 sm:h-64 md:h-72"
              />

              <div className="relative z-10 flex flex-grow flex-col justify-between p-6 sm:p-7 md:p-8">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                      <Sparkles size={12} />
                      {project.label}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-sky-200 sm:text-2xl">
                    {project.name}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                    {project.description}
                  </p>

                  <Technologies technologies={project.technologies} />
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black transition-all duration-300 hover:bg-sky-200 sm:text-sm"
                    >
                      <span>Live Demo</span>
                      <MdArrowOutward className="text-base" />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white sm:text-sm"
                      >
                        <FaGithub className="text-base" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                  <span className="hidden font-mono text-[11px] uppercase tracking-wider text-white/35 sm:inline">
                    Production
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ================= COMMERCIAL & LANDING PAGES ================= */}
      {landingProjects.length > 0 && (
        <div className="relative z-10">
          <div className="mb-8 flex flex-col justify-between gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                02 // Commercial & Client Work
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Business Platforms & Landing Pages
              </h3>
            </div>
            <span className="font-mono text-xs text-white/40">
              Conversion & RTL/LTR Ready
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {landingProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-3.5 py-2">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                    </div>
                    <span className="font-mono text-[10px] text-white/40">
                      CLIENT // 0{idx + 1}
                    </span>
                  </div>

                  <LazyImage src={project.image} alt={project.name} className="h-44" />

                  <div className="p-5">
                    <h4 className="text-base font-bold text-white transition-colors group-hover:text-sky-300 sm:text-lg">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/85 transition-colors hover:text-white"
                  >
                    <span>Visit Website</span>
                    <MdArrowOutward className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      className="inline-flex items-center gap-1 text-xs font-medium text-white/50 transition-colors hover:text-white"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
