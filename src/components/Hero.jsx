import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO } from "../constants/index.jsx";
import { motion } from "framer-motion";
import { HiDocumentText, HiDownload, HiEye } from "react-icons/hi";

const CVCard = ({ title, file }) => (
    <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="
            flex flex-col items-center p-6 rounded-2xl
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-[0_0_25px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]
            transition-all duration-300
            w-[260px]                 /* wider, clean */
        "
    >
        <div
            className="
                h-56 w-44 rounded-xl     /* bigger, perfect symmetry */
                bg-gradient-to-b from-neutral-200/95 to-neutral-100
                shadow-inner flex flex-col items-center justify-center
                text-black font-bold text-lg
                border border-neutral-300
            "
        >
            <HiDocumentText size={60} className="opacity-70" />
            <span className="mt-2">{title}</span>
        </div>

        <p className="mt-5 text-lg font-medium text-white/90">
            2 pages · PDF
        </p>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-4 w-full justify-center">
            {/* OPEN BUTTON */}
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

            {/* DOWNLOAD BUTTON */}
            <a
                href={file}
                download={title + ".pdf"}
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

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            
            {/* LEFT TEXT BLOCK */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
            >
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-7xl">
                    {HERO.name}
                </h2>

                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    {HERO.greet}
                </p>

                <p className="mb-8 p-2 text-xl leading-relaxed text-white/90">
                    {HERO.description}
                </p>

                {/* CV BLOCK */}
                <div className="mt-10 flex flex-col gap-10 p-2 md:flex-row">
                    <CVCard
                        title="IT CV"
                        file="/IT_CV_Ilya_2Pages_DarkPro.pdf"
                    />
                    <CVCard
                        title="General CV"
                        file="/General_CV_Ilya_2Pages_Expanded_Final.pdf"
                    />
                </div>
            </motion.div>

            {/* RIGHT IMAGE BLOCK */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 lg:p-8"
            >
                <div className="flex justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={heroPortrait}
                        alt="Ilya Portrait"
                        width={550}
                        height={550}
                        className="
                            rounded-3xl
                            object-cover
                            shadow-[0_0_40px_rgba(255,255,255,0.2)]
                            max-w-full select-none
                        "
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
