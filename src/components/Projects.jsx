import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const fallback = "/images/placeholder.png"; // Заглушка если не грузится

  return (
    <div className="relative w-full h-48 bg-gray-700 rounded-t-3xl overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700" />
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
    </div>
  );
};

function Projects() {
  return (
    <section id="projects" className="pt-20 px-4 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-3xl lg:text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gray-800 bg-opacity-80 shadow-lg flex flex-col"
          >
            <LazyImage src={project.image} alt={project.name} />

            <div className="p-6 flex flex-col flex-grow justify-between text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>

              <div className="mt-4 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-black font-semibold transition hover:bg-gray-300"
                >
                  Visit Website
                  <MdArrowOutward />
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
