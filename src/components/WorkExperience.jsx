import React from 'react';
import { EXPERIENCES } from "../constants/index.jsx";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
};

const workItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

const WorkExperience = () => {
    return (
        <motion.section
            id="work-experience"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto mt-16"
        >
            <h2 className="text-center text-4xl font-semibold tracking-tighter mb-8">
                Work Experience
            </h2>

            <motion.div className="space-y-8 p-10">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl border border-stone-50/30 bg-white/20 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                        variants={workItemVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="text-2xl font-semibold">{experience.title}</h3>
                        <p className="text-xl">{experience.company}</p>
                        <p className="text-sm text-stone-300">{experience.duration}</p>
                        <p className="mt-2 text-base">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default WorkExperience;
