import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg"; // 🧱 твоя фотка с кирпичной стеной
import { HERO } from "../constants/index.jsx";
import { motion } from "framer-motion";

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

                <p className="mb-8 p-2 text-xl">
                    {HERO.description}
                </p>
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
              shadow-[0_0_40px_rgba(255,255,255,0.15)]
              max-w-full
              select-none
            "
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
