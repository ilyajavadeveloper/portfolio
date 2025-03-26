import React from 'react';
import { SKILLS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

const Skills = () => {
    return (
        <motion.div
            className='container mx-auto'
            id='skills'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Skills</h2>
            <motion.div className='mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 shadow-md'>
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`py-6 flex items-center justify-between transition-all duration-300 ${
                            index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''
                        }`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className='flex items-center gap-4'>
                            {skill.icon}
                            <span className='text-xl'>{skill.name}</span>
                        </div>
                        <span className='text-lg text-stone-300'>{skill.experience}</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;
