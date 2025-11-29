import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO } from "../constants/index.jsx";
import { motion } from "framer-motion";
import { HiDocumentText, HiDownload, HiEye } from "react-icons/hi";

const CVCard = ({ title, file }) => (
    <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className="
            flex flex-col items-center p-6 rounded-2xl
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_25px_rgba(255,255,255,0.15)]
            hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]
            transition-all duration-300
            w-[230px] sm:w-[250px]
        "
    >
        <div
            className="
                h-52 w-40 sm:h-56 sm:w-44 rounded-xl
                bg-gradient-to-b from-neutral-200/95 to-neutral-100
                shadow-inner flex flex-col items-center justify-center
                text-black font-bold text-lg border border-neutral-300
            "
        >
            <HiDocumentText size={55} className="opacity-70" />
            <span className="mt-2">{title}</span>
        </div>

        <p className="mt-5 text-lg font-medium text-white/90">
            2 pages · PDF
        </p>

        <div className="mt-5 flex gap-4 w-full justify-center">
            <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex items-center gap-1 px-4 py-2 rounded-lg
                    bg-white/20 hover:bg-white/30
                    text-white text-sm transition
                "
            >
                <HiEye size={18} /> View
            </a>

            <a
                href={file}
                download={title + '.pdf'}
                className="
                    flex items-center gap-1 px-4 py-2 rounded-lg
                    bg-white/20 hover:bg-white/30
                    text-white text-sm transition
                "
            >
                <HiDownload size={18} /> Download
            </a>
        </div>
    </motion.div>
);

// animation variants for stagger reveal
const textContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
        },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
    return (
        <section
            className="flex flex-col lg:flex-row min-h-screen items-center gap-8 lg:gap-0 pt-10"
        >
            {/* LEFT TEXT */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={textContainer}
                className="w-full lg:w-1/2 px-4"
            >
                <motion.h2
                    variants={textItem}
                    className="my-8 text-4xl font-bold md:text-5xl lg:text-7xl tracking-tight"
                >
                    {HERO.name}
                </motion.h2>

                <motion.p
                    variants={textItem}
                    className="text-3xl tracking-tighter lg:text-4xl mb-6"
                >
                    {HERO.greet}
                </motion.p>

                {/* 4 PARAGRAPHS — SHORTER BUT POWERFUL */}
                <motion.p
                    variants={textItem}
                    className="text-xl leading-relaxed text-white/90 max-w-2xl mb-6"
                >
                    I create modern, aesthetic, high-performance web apps that combine precise engineering 
                    with expressive, human-centered design. My goal is always the same: make products that 
                    feel smooth, intentional, premium, and emotionally engaging.
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-xl leading-relaxed text-white/90 max-w-2xl mb-6"
                >
                    My expertise includes <b>React, Next.js, TypeScript, Tailwind, Zustand</b>, backend APIs, 
                    auth systems, databases, and scalable architecture. I also build mobile apps with 
                    <b> React Native</b> and craft high-end interactive visuals, including 3D experiences 
                    using Three.js and performant animations.
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-xl leading-relaxed text-white/90 max-w-2xl mb-6"
                >
                    I approach projects like a product engineer — shaping UX flows, designing system structure, 
                    building UI logic, optimizing performance, and polishing the final experience until it feels 
                    cohesive and well-crafted. Not just functional — but outstanding.
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-xl leading-relaxed text-white/90 max-w-2xl mb-10"
                >
                    I’m looking for a team where quality matters, where initiative is valued, and where building 
                    exceptional digital products is the standard. I bring creativity, discipline, technical clarity, 
                    and an obsession for great design and smooth user experience.
                </motion.p>
            </motion.div>

            {/* RIGHT IMAGE + CV BLOCK */}
            <div
                className="
                w-full lg:w-1/2 flex flex-col items-center
                px-4
            "
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <motion.img
                        src={heroPortrait}
                        alt="Ilya Portrait"
                        width={550}
                        height={550}
                        className="
                            rounded-3xl object-cover max-w-full select-none
                            shadow-[0_0_40px_rgba(255,255,255,0.25)]
                        "
                    />

                    <div
                        className="
                            absolute inset-0 rounded-3xl
                            bg-white/10 blur-3xl
                        "
                    ></div>
                </motion.div>

                <div
                    className="
                        mt-10 flex flex-col gap-10 md:flex-row
                        justify-center items-center
                    "
                >
                    <CVCard title="IT CV" file="/IT_CV_Ilya_2Pages_DarkPro.pdf" />
                    <CVCard
                        title="General CV"
                        file="/General_CV_Ilya_2Pages_Expanded_Final.pdf"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
