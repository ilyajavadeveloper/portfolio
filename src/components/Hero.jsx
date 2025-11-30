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
            flex flex-col items-center p-5 rounded-2xl
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_25px_rgba(255,255,255,0.12)]
            hover:shadow-[0_0_45px_rgba(255,255,255,0.25)]
            transition-all duration-300
            w-[200px] sm:w-[220px]
        "
    >
        <div
            className="
                h-48 w-36 sm:h-52 sm:w-40 rounded-xl
                bg-gradient-to-b from-neutral-200/95 to-neutral-100
                shadow-inner flex flex-col items-center justify-center
                text-black font-bold text-base border border-neutral-300
            "
        >
            <HiDocumentText size={50} className="opacity-70" />
            <span className="mt-2">{title}</span>
        </div>

        <p className="mt-4 text-base font-medium text-white/80">
            2 pages · PDF
        </p>

        <div className="mt-4 flex gap-3 w-full justify-center">
            <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    flex items-center gap-1 px-3 py-1.5 rounded-lg
                    bg-white/20 hover:bg-white/30 text-white text-sm transition
                "
            >
                <HiEye size={16} /> View
            </a>

            <a
                href={file}
                download={title + '.pdf'}
                className="
                    flex items-center gap-1 px-3 py-1.5 rounded-lg
                    bg-white/20 hover:bg-white/30 text-white text-sm transition
                "
            >
                <HiDownload size={16} /> Download
            </a>
        </div>
    </motion.div>
);

const textContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, duration: 0.4 },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
    return (
        <section
            className="
                flex flex-col lg:flex-row
                min-h-[90vh]
                items-center lg:items-start justify-center
                gap-16 lg:gap-20
                pt-20 lg:pt-32 pb-16 px-6
            "
        >

            {/* MOBILE IMAGE FIRST */}
            <div className="block lg:hidden w-full flex justify-center mb-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                    className="relative"
                >
                    <img
                        src={heroPortrait}
                        alt="Ilya Portrait"
                        className="
                            rounded-3xl object-cover
                            w-[90%] max-w-[360px]
                            mx-auto select-none
                            shadow-[0_0_45px_rgba(255,255,255,0.22)]
                        "
                    />
                    <div
                        className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl pointer-events-none"
                    ></div>
                </motion.div>
            </div>

            {/* LEFT — TEXT + CVs */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={textContainer}
                className="
                    w-full lg:w-1/2
                    flex flex-col
                    items-start lg:items-start
                    max-w-xl
                    text-center lg:text-left
                "
            >
                <motion.h2
                    variants={textItem}
                    className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight"
                >
                    {HERO.name}
                </motion.h2>

                <motion.p
                    variants={textItem}
                    className="text-2xl tracking-tight lg:text-3xl mb-5"
                >
                    {HERO.greet}
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-lg lg:text-xl leading-relaxed text-white/85 mb-4"
                >
                    I create modern, aesthetic, high-performance web apps that combine precise engineering 
                    with expressive design — building digital experiences that feel smooth, intentional, and premium.
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-lg lg:text-xl leading-relaxed text-white/85 mb-4"
                >
                    Skilled in <b>React, Next.js, TypeScript, Tailwind, Zustand</b>, backend APIs, authentication, 
                    databases, and scalable architecture. I craft mobile apps with <b>React Native</b> and create 
                    interactive visuals with <b>Three.js</b>.
                </motion.p>

                <motion.p
                    variants={textItem}
                    className="text-lg lg:text-xl leading-relaxed text-white/85 mb-8"
                >
                    I’m looking for a team where engineering quality, creativity, and product thinking come first.
                </motion.p>

                {/* CVs */}
                <motion.div
                    variants={textItem}
                    className="
                        mt-4 flex flex-col sm:flex-row gap-8
                        justify-center lg:justify-start w-full
                    "
                >
                    <CVCard title="IT CV" file="/IT_CV_Ilya_2Pages_DarkPro.pdf" />
                    <CVCard title="General CV" file="/General_CV_Ilya_2Pages_Expanded_Final.pdf" />
                </motion.div>
            </motion.div>

            {/* DESKTOP IMAGE */}
            <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-start pt-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                    className="relative"
                >
                    <img
                        src={heroPortrait}
                        alt="Ilya Portrait"
                        width={580}
                        height={580}
                        className="
                            rounded-3xl object-cover
                            max-w-[440px] md:max-w-[520px] lg:max-w-[580px]
                            select-none
                            shadow-[0_0_45px_rgba(255,255,255,0.22)]
                        "
                    />
                    <div
                        className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl pointer-events-none"
                    ></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
