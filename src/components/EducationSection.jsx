import React from 'react';
import { EDUCATION } from "../constants/index.jsx";
import { motion } from "framer-motion";

const EducationSection = () => {
    return (
        <section className='py-16 px-6 lg:px-16' id='education'>
            {/* Заголовок с анимацией */}
            <motion.h2
                className='mb-10 text-center text-4xl font-bold text-white'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Education
            </motion.h2>

            {/* Карточки образования */}
            <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={index}
                        className='p-6 md:p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300'
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-xl font-semibold text-white'>{edu.degree}</h3>
                        <p className='text-lg text-gray-300'>{edu.institution}</p>
                        <p className='text-sm text-gray-400'>{edu.duration}</p>
                        <p className='mt-3 text-gray-200'>{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
