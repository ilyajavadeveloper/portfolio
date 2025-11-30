import React from 'react';
import { EDUCATION } from "../constants/index.jsx";
import { motion } from "framer-motion";

const EducationSection = () => {
    return (
        <section className="py-20 px-6 lg:px-16" id="education">
            {/* Title */}
            <motion.h2
                className="mb-12 text-center text-4xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Education
            </motion.h2>

            {/* Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 25, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="
                            rounded-2xl p-8
                            bg-white/5 backdrop-blur-md
                            border border-white/15
                            shadow-[0_0_25px_rgba(255,255,255,0.07)]
                            hover:shadow-[0_0_35px_rgba(255,255,255,0.14)]
                            transition-all duration-300
                        "
                    >
                        <h3 className="text-2xl font-semibold text-white/95 mb-1">
                            {edu.degree}
                        </h3>

                        <p className="text-lg text-white/80">
                            {edu.institution}
                        </p>

                        <p className="text-sm text-white/50 mt-0.5">
                            {edu.duration}
                        </p>

                        <p className="mt-4 text-base text-white/85 leading-relaxed">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
