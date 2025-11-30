import React from 'react';
import { EXPERIENCES } from "../constants/index.jsx";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            staggerChildren: 0.25,
        },
    },
};

const workItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55 },
    },
};

const WorkExperience = () => {
    return (
        <motion.section
            id="work-experience"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto mt-24"
        >
            <h2 className="text-center text-4xl font-semibold tracking-tight mb-10">
                Work Experience
            </h2>

            <motion.div className="space-y-10 px-4 sm:px-8 lg:px-16">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={workItemVariants}
                        whileHover={{ scale: 1.025, translateY: -2 }}
                        className="
                            rounded-2xl p-7
                            border border-white/15
                            bg-white/5
                            backdrop-blur-md
                            shadow-[0_0_25px_rgba(255,255,255,0.07)]
                            hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
                            transition-all duration-300
                        "
                    >
                        <h3 className="text-2xl font-semibold text-white/95">
                            {experience.title}
                        </h3>
                        <p className="text-lg text-white/80 mt-1">
                            {experience.company}
                        </p>
                        <p className="text-sm text-white/50 mt-0.5">
                            {experience.duration}
                        </p>

                        <p className="mt-4 text-base text-white/85 leading-relaxed">
                            {experience.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default WorkExperience;
