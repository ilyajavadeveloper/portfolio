import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

/* ================= ANIMATIONS ================= */

const slideLeft = {
  hidden: { opacity: 0, x: -140 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};

/* ================= COMPONENT ================= */

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 lg:pt-36"
    >
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-28">

        {/* ================= IMAGE ================= */}
        <motion.div
          className="order-1 flex w-full justify-center lg:order-2 lg:w-[55%]"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[760px]">
            <div className="absolute -inset-14 rounded-[72px] bg-white/10 blur-[160px]" />
            <img
              src={heroPortrait}
              alt="Ilya Hvostenko portrait"
              className="relative w-full rounded-[52px] object-cover shadow-[0_120px_280px_rgba(0,0,0,0.9)]"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <div className="order-2 flex w-full flex-col justify-center lg:order-1 lg:w-[45%]">

          {/* ===== HEADINGS ===== */}
          <motion.h1
            className="mb-8 text-center text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-left md:text-6xl lg:text-7xl"
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_10px_60px_rgba(255,255,255,0.25)]">
              {HERO.name}
            </span>
          </motion.h1>

          <motion.p
            className="mb-6 text-center text-3xl font-bold text-white/95 sm:text-left"
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {HERO.greet}
          </motion.p>

          <motion.p
            className="mb-10 max-w-xl text-center text-xl leading-relaxed text-white/85 sm:text-left"
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {HERO.description}
          </motion.p>

          {/* ===== MANIFEST (TRIMMED) ===== */}
          <div className="mb-14 space-y-5">
            {[
              "I design and engineer interfaces that feel intentional, calm and structurally sound.",
              "Frontend is architecture — state, timing, hierarchy and responsibility.",
              "I build component systems that survive scale, change and real users.",
              "Performance, predictability and clarity always beat trends.",
              "Clean abstractions and technical honesty define my work.",
              "Products should feel premium today and remain reliable years later.",
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

          {/* ================= CV DOWNLOADS (INLINE) ================= */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
            <a
              href="/IT%20CV.pdf"
              download
              className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/15 px-9 py-5 text-base font-bold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/25"
            >
              <Download size={20} />
              IT Resume
            </a>

            <a
              href="/General%20CV.pdf"
              download
              className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-9 py-5 text-base font-bold text-white/90 transition hover:border-white/50 hover:bg-white/20"
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
