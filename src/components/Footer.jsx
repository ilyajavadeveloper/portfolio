import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import {
    Facebook,
    Instagram,
    Twitter,
    Github,
    Linkedin,
    ArrowUpRight,
    Sparkles,
    Mail,
} from "lucide-react";

const SOCIAL_MEDIA_LINKS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/ilya.hvostenko/?locale=ru_RU",
        icon: Facebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41",
        icon: Instagram,
    },
    {
        label: "X / Twitter",
        href: "https://x.com/ilyajavadev?t=Pw_d8gBFzXQ0udIKbj9yDQ&s=35",
        icon: Twitter,
    },
    {
        label: "GitHub",
        href: "https://github.com/ilyajavadeveloper",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/",
        icon: Linkedin,
    },
];

const FOOTER_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#work-experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const containerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.12,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleAnchorClick = (e, href) => {
        if (!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.getElementById(href.replace("#", ""));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.footer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-28 overflow-hidden px-5 pb-8 sm:px-6 lg:px-16"
        >
            {/* BACKGROUND ATMOSPHERE */}
            <div className="pointer-events-none absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[150px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[130px]" />
            <div className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* TOP DIVIDER */}
                <motion.div
                    variants={itemVariants}
                    className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />

                {/* MAIN FOOTER CARD */}
                <motion.div
                    variants={itemVariants}
                    className="
                        group relative overflow-hidden rounded-[2.25rem]
                        border border-white/15
                        bg-gradient-to-br from-white/[0.1] via-white/[0.055] to-white/[0.025]
                        p-6 backdrop-blur
                        sm:p-8 lg:p-10
                    "
                >
                    {/* CARD GLOW */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-[130px]" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
                    <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                        {/* TOP AREA */}
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                            {/* BRAND */}
                            <motion.div variants={itemVariants}>
                                <div className="mb-7 flex justify-center lg:justify-start">
                                    <div className="rounded-3xl border border-white/10 bg-black/20 px-6 py-4 backdrop-blur">
                                        <Logo />
                                    </div>
                                </div>

                                <div className="text-center lg:text-left">
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                                        <Sparkles size={16} />
                                        Built with intent
                                    </div>

                                    <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                        Interfaces that feel clean, calm and reliable.
                                    </h3>

                                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">
                                        Portfolio of Ilya Hvostenko — frontend work, landing pages,
                                        clean UI systems and continuous engineering growth.
                                    </p>
                                </div>
                            </motion.div>

                            {/* NAVIGATION */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:justify-items-end"
                            >
                                <div className="w-full max-w-sm">
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                                        Navigation
                                    </h4>

                                    <div className="grid grid-cols-2 gap-3">
                                        {FOOTER_LINKS.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.href}
                                                onClick={(e) => handleAnchorClick(e, link.href)}
                                                className="
                                                    rounded-2xl border border-white/10
                                                    bg-white/[0.045] px-4 py-3
                                                    text-sm font-semibold text-white/62
                                                    transition
                                                    hover:border-white/25
                                                    hover:bg-white/[0.09]
                                                    hover:text-white
                                                "
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full max-w-sm">
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                                        Contact
                                    </h4>

                                    <a
                                        href="#contact"
                                        onClick={(e) => handleAnchorClick(e, "#contact")}
                                        className="
                                            group/contact flex items-center justify-between gap-4
                                            rounded-3xl border border-white/12
                                            bg-black/20 p-5
                                            transition
                                            hover:border-white/30
                                            hover:bg-white/[0.08]
                                        "
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
                                                <Mail size={22} className="text-white/70" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-bold text-white">
                                                    Let’s build
                                                </p>
                                                <p className="mt-1 text-sm text-white/50">
                                                    Send a message
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={22}
                                            className="text-white/50 transition group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 group-hover/contact:text-white"
                                        />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* SOCIALS */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 border-t border-white/10 pt-8"
                        >
                            <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
                                <div className="text-center md:text-left">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                                        Social links
                                    </p>
                                    <p className="mt-2 text-sm text-white/50">
                                        Code, work, updates and digital footprint.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {SOCIAL_MEDIA_LINKS.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={index}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={item.label}
                                                title={item.label}
                                                className="
                                                    group/social relative flex h-14 w-14 items-center justify-center
                                                    overflow-hidden rounded-2xl
                                                    border border-white/12
                                                    bg-white/[0.055] text-white/55
                                                    backdrop-blur transition
                                                    hover:-translate-y-1
                                                    hover:border-white/30
                                                    hover:bg-white/[0.11]
                                                    hover:text-white
                                                "
                                            >
                                                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition duration-700 group-hover/social:translate-x-[120%]" />

                                                <Icon
                                                    size={25}
                                                    className="relative z-10 transition-transform duration-300 group-hover/social:scale-110"
                                                />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* BOTTOM */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 md:flex-row"
                        >
                            <p className="text-center text-sm text-white/40 md:text-left">
                                © {currentYear}{" "}
                                <span className="font-semibold text-white/62">
                                    Ilya Hvostenko
                                </span>
                                . All rights reserved.
                            </p>

                            <a
                                href="#home"
                                onClick={(e) => handleAnchorClick(e, "#home")}
                                className="
                                    inline-flex items-center gap-2
                                    rounded-full border border-white/15
                                    bg-white/[0.055] px-5 py-3
                                    text-sm font-bold text-white/58
                                    transition
                                    hover:border-white/30
                                    hover:bg-white/[0.1]
                                    hover:text-white
                                "
                            >
                                Back to top
                                <ArrowUpRight size={17} />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;