import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (i = 1) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.15, duration: 0.9, ease: "easeOut" },
    }),
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.75, ease: "easeOut" },
    }),
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden pt-24 lg:pt-36"
        >
            <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center gap-16 px-6 lg:flex-row lg:items-stretch lg:gap-28">

                {/* IMAGE — FIRST ON MOBILE */}
                <motion.div
                    className="order-1 flex w-full justify-center lg:order-2 lg:w-[55%]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[740px]">
                        <div className="absolute -inset-8 rounded-[48px] bg-white/5 blur-3xl" />
                        <img
                            src={heroPortrait}
                            alt="Ilya Hvostenko portrait"
                            className="relative w-full rounded-[48px] object-cover shadow-[0_80px_200px_rgba(0,0,0,0.8)]"
                            draggable={false}
                        />
                    </div>
                </motion.div>

                {/* TEXT — SECOND ON MOBILE */}
                <div className="order-2 flex w-full flex-col justify-between lg:order-1 lg:w-[45%]">
                    {/* TOP TEXT */}
                    <div>
                        <motion.h1
                            className="mb-8 text-center text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-left md:text-6xl lg:text-7xl"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                        >
                            {HERO.name}
                        </motion.h1>

                        <motion.p
                            className="mb-6 text-center text-3xl font-bold text-white/95 sm:text-left"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                        >
                            {HERO.greet}
                        </motion.p>

                        <motion.p
                            className="mb-12 max-w-xl text-center text-xl leading-relaxed text-white/80 sm:text-left"
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                        >
                            {HERO.description}
                        </motion.p>

                        {/* PARAGRAPHS */}
                        <div className="space-y-6">
                            {[
                                "I design and engineer interfaces that feel deliberate, premium and alive.",
                                "Every interaction is crafted with rhythm, hierarchy and intent.",
                                "Strong focus on performance, scalability and clean system architecture.",
                                "Frontend is an engineering discipline — not decoration.",
                                "Motion is used only where it adds meaning, clarity and emotion.",
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    className="max-w-xl text-center text-lg font-medium leading-relaxed text-white/80 sm:text-left"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i + 1}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM — CV BUTTONS */}
                    <div className="mt-14 flex flex-wrap justify-center gap-5 sm:justify-start">
                        <a
                            href="/cv/IT_CV_Ilya_2Pages_DarkPro.pdf"
                            download
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/20"
                        >
                            <Download size={20} />
                            IT Resume
                        </a>

                        <a
                            href="/cv/General_CV_Ilya_2Pages_Expanded_Final.pdf"
                            download
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/20"
                        >
                            <Download size={20} />
                            General Resume
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
