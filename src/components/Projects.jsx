import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const fallback = "/images/placeholder.png";

  return (
    <div className="relative w-full h-52 rounded-t-3xl overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/10 backdrop-blur-sm" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={(e) => (e.target.src = fallback)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
    </div>
  );
};

function Projects() {
  return (
    <section id="projects" className="pt-24 px-4 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-3xl lg:text-4xl font-semibold tracking-tight text-white"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            whileHover={{ scale: 1.03, y: -3 }}
            className="
              relative flex flex-col overflow-hidden rounded-3xl
              bg-white/8 backdrop-blur-xl
              border border-white/20
              shadow-[0_0_35px_rgba(255,255,255,0.10)]
              hover:shadow-[0_0_55px_rgba(255,255,255,0.18)]
              transition-all duration-300
            "
          >
            <LazyImage src={project.image} alt={project.name} />

            <div className="px-7 py-8 flex flex-col flex-grow justify-between text-white/90">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-white/95">
                  {project.name}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed max-w-xs mx-auto">
                  {project.description}
                </p>
              </div>

              <div className="mt-7 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-6 py-2.5
                    rounded-full bg-white text-black
                    font-semibold tracking-tight
                    transition-all duration-300
                    hover:bg-white/90 hover:shadow-lg
                  "
                >
                  Visit Website
                  <MdArrowOutward className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
