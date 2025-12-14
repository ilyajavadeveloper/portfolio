import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, BookOpen } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const EducationSection = () => {
    return (
        <section
            id="education"
            className="relative py-24 px-6 lg:px-16"
        >
            {/* HEADER */}
            <div className="mb-16 text-center">
                <motion.h2
                    className="text-4xl font-extrabold tracking-tight text-white md:text-5xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Education & Learning
                </motion.h2>
                <p className="mt-4 text-lg text-white/60">
                    Structured education, professional training and continuous self-development
                </p>
            </div>

            {/* MAIN EDUCATION */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
                {EDUCATION.map((edu, index) => (
                    <motion.article
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={index}
                        viewport={{ once: true }}
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
                        <div className="mb-4 flex items-center gap-3">
                            <GraduationCap className="text-white/80" />
                            <h3 className="text-2xl font-bold text-white">
                                {edu.degree}
                            </h3>
                        </div>

                        <p className="text-lg font-medium text-white/80">
                            {edu.institution}
                        </p>

                        <span className="mt-2 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/70">
              {edu.duration}
            </span>

                        <p className="mt-6 text-base leading-relaxed text-white/75">
                            {edu.description}
                        </p>

                        {edu.highlights && (
                            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-white/70">
                                {edu.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </motion.article>
                ))}
            </div>

            {/* COURSES / SELF-LEARNING */}
            <motion.div
                className="mx-auto mt-20 max-w-6xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={EDUCATION.length + 1}
            >
                <div
                    className="
            relative overflow-hidden rounded-3xl
            border border-white/20
            bg-gradient-to-br from-white/10 to-white/5
            p-10
            backdrop-blur
          "
                >
                    <div className="mb-6 flex items-center gap-3">
                        <Laptop className="text-white/80" />
                        <h3 className="text-3xl font-extrabold text-white">
                            IT Courses & Continuous Learning
                        </h3>
                    </div>

                    <p className="max-w-3xl text-lg leading-relaxed text-white/80">
                        Continuous hands-on learning focused on modern frontend, full stack engineering
                        and system design. Practical approach with real projects, not theory-only courses.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            "Advanced React, Next.js & modern frontend architecture",
                            "TypeScript, scalable component systems, design systems",
                            "Backend fundamentals: Java, Spring Boot, REST APIs",
                            "3D & visual engineering: Three.js, R3F, animation pipelines",
                            "Performance optimization, accessibility, responsive patterns",
                            "Real-world projects, production deployment and CI/CD basics",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3"
                            >
                                <BookOpen className="mt-1 text-white/60" size={18} />
                                <p className="text-base text-white/75">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default EducationSection;
