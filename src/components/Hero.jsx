import React from "react";
import heroPortrait from "../assets/hero-portrait-bw.jpg";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

/* ================= ANIMATIONS ================= */

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -120,
  },

  visible: (i = 1) => ({
    opacity: 1,
    x: 0,

    transition: {
      delay: i * 0.15,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

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
  const manifesto = [
    "I design and engineer interfaces that feel intentional, calm and structurally sound.",
    "Frontend is architecture — state, timing, hierarchy and responsibility.",
    "I build component systems that survive scale, change and real users.",
    "Performance, predictability and clarity always beat trends.",
    "Clean abstractions and technical honesty define my work.",
    "Products should feel premium today and remain reliable years later.",
  ];

  return (
      <section
          id="home"
          className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 lg:pt-28 xl:pt-32"
      >
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col items-center justify-center gap-12 px-5 sm:px-6 md:gap-14 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-20 2xl:max-w-[1500px] 2xl:gap-24">
          {/* ================= TEXT ================= */}

          <div className="order-2 flex w-full flex-col justify-center lg:order-1">
            {/* ================= HEADINGS ================= */}

            <motion.h1
                className="relative z-10 mb-6 text-center text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-left sm:text-6xl lg:mb-7 lg:text-6xl xl:text-7xl 2xl:text-8xl"
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={1}
            >
            <span className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {HERO.name}
            </span>
            </motion.h1>

            <motion.p
                className="mb-5 text-center text-2xl font-bold text-white/95 sm:text-left sm:text-3xl lg:text-[1.7rem] xl:text-3xl"
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={2}
            >
              {HERO.greet}
            </motion.p>

            <motion.p
                className="mb-8 max-w-xl text-center text-lg leading-relaxed text-white/85 sm:text-left sm:text-xl lg:mb-9 lg:text-lg xl:text-xl"
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={3}
            >
              {HERO.description}
            </motion.p>

            {/* ================= MANIFEST ================= */}

            <div className="mb-10 space-y-4 sm:mb-12 lg:mb-10 lg:space-y-3 xl:mb-14 xl:space-y-5">
              {manifesto.map((text, index) => (
                  <motion.p
                      key={text}
                      className="max-w-xl text-center text-base font-medium leading-relaxed text-white/80 sm:text-left sm:text-lg lg:text-base xl:text-lg"
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      custom={index + 1}
                  >
                    {text}
                  </motion.p>
              ))}
            </div>

            {/* ================= CV DOWNLOADS ================= */}

            <motion.div
                className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5 xl:gap-6"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={7}
            >
              <a
                  href="/IT%20CV.pdf"
                  download="IT CV.pdf"
                  aria-label="Download IT CV"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/15 px-8 py-4 text-base font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/25 sm:w-auto lg:px-7 xl:px-9 xl:py-5"
              >
                <Download size={20} strokeWidth={2.2} />

                <span>IT CV</span>
              </a>

              <a
                  href="/General%20CV.pdf"
                  download="General CV.pdf"
                  aria-label="Download General CV"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white/90 transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20 sm:w-auto lg:px-7 xl:px-9 xl:py-5"
              >
                <Download size={20} strokeWidth={2.2} />

                <span>General CV</span>
              </a>
            </motion.div>
          </div>

          {/* ================= IMAGE ================= */}

          <motion.div
              className="order-1 flex w-full justify-center lg:order-2 lg:justify-end"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.95,
                ease: "easeOut",
              }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[390px] md:max-w-[460px] lg:max-w-[390px] xl:max-w-[500px] 2xl:max-w-[590px]">
              {/* ================= GLOW ================= */}

              <div className="pointer-events-none absolute -inset-8 hidden rounded-[56px] bg-white/10 blur-[100px] sm:block lg:-inset-10 lg:blur-[120px] xl:-inset-14 xl:blur-[150px]" />

              {/* ================= PORTRAIT ================= */}

              <img
                  src={heroPortrait}
                  alt="Ilya Hvostenko portrait"
                  className="relative h-auto w-full rounded-[32px] object-contain shadow-none sm:rounded-[40px] sm:shadow-[0_80px_180px_rgba(0,0,0,0.75)] lg:rounded-[44px] xl:rounded-[52px] xl:shadow-[0_120px_280px_rgba(0,0,0,0.9)]"
                  draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;