import React from "react";
import { BIO } from "../constants/index.jsx";
import { motion } from "framer-motion";

// ================= ANIMATION =================

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

// ================= COMPONENT =================

function Bio() {
    return (
        <section
            id="bio"
            className="mx-auto max-w-4xl px-6 py-28"
        >
            <motion.h2
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-16 text-center text-3xl font-semibold tracking-wide lg:text-4xl"
            >
                Bio
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
            >
                {BIO.map((bio, index) => (
                    <motion.p
                        key={index}
                        variants={item}
                        className="text-lg leading-relaxed text-white/80 lg:text-xl"
                    >
                        {bio}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
}

export default Bio;
