import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";

import {
    SiTypescript,
    SiMongodb,
    SiJavascript,
    SiSpring,
    SiHibernate,
    SiMysql,
    SiNextdotjs,
    SiExpo,
    SiThreedotjs,
    SiFramer,
    SiTailwindcss,
    SiVite,
    SiWebpack,
    SiGit,
    SiAppwrite,
    SiRedux,
    SiReactquery,
    SiGithubactions,
} from "react-icons/si";

import { DiRedis } from "react-icons/di";

// ================= NAVIGATION =================

export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work-experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

// ================= HERO =================

export const HERO = {
    name: "Ilya Hvostenko",
    greet: "Full-Stack & Frontend Engineer",
    description:
        "I build fast, scalable web and mobile applications using TypeScript, React, Next.js, and React Native — backed by Java/Spring architecture and hands-on experience with mission-critical logistics and automotive diagnostic systems.",
};

// ================= BIO =================

export const BIO = [
    "I’m a Full-Stack Developer with a strong Frontend & Mobile focus (TypeScript, React, Next.js, React Native, Tailwind CSS, and Three.js), dedicated to building responsive, production-grade applications.",

    "What sets me apart is my hands-on industrial and hardware-adjacent background. Currently working as a Diagnostics & PDI Systems Specialist at Scania, and previously managing Terminal Operating Systems (TOS) at Ashdod Port, I deal daily with CAN-bus protocols, ECU telemetry, and mission-critical operational data.",

    "This background shaped my core engineering mindset: systematic debugging, root-cause analysis, strict data integrity, and interfaces designed for fast decision-making under real-world pressure.",

    "Trained in enterprise backend development (Java, Spring Boot, SQL/NoSQL) and experienced in delivering commercial web solutions, I bridge the gap between complex backend logic and polished, interactive user interfaces.",
];

// ================= SKILLS =================

export const SKILLS = [
    { icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />, name: "TypeScript" },
    { icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />, name: "JavaScript (ES6+)" },
    { icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />, name: "Next.js" },
    { icon: <RiReactjsLine className="text-4xl text-cyan-300 lg:text-5xl" />, name: "React Native" },
    { icon: <SiExpo className="text-4xl text-white lg:text-5xl" />, name: "Expo" },
    { icon: <SiRedux className="text-4xl text-purple-500 lg:text-5xl" />, name: "Redux Toolkit" },
    { icon: <SiReactquery className="text-4xl text-red-400 lg:text-5xl" />, name: "TanStack Query" },
    { icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />, name: "Tailwind CSS" },
    { icon: <SiFramer className="text-4xl text-pink-400 lg:text-5xl" />, name: "Framer Motion" },
    { icon: <SiThreedotjs className="text-4xl text-orange-400 lg:text-5xl" />, name: "Three.js / R3F" },
    { icon: <SiJavascript className="text-4xl text-green-400 lg:text-5xl" />, name: "GSAP" },
    { icon: <SiSpring className="text-4xl text-green-500 lg:text-5xl" />, name: "Spring Boot" },
    { icon: <SiMysql className="text-4xl text-blue-400 lg:text-5xl" />, name: "PostgreSQL / MySQL" },
    { icon: <SiMongodb className="text-4xl text-green-500 lg:text-5xl" />, name: "MongoDB" },
    { icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />, name: "Redis" },
    { icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />, name: "Git & GitHub" },
    { icon: <SiGithubactions className="text-4xl text-blue-400 lg:text-5xl" />, name: "CI/CD Workflows" },
];

// ================= PROJECTS =================

export const PROJECTS = [
    // ================= COMMERCIAL & LANDING PAGES (4) =================

    {
        id: 1,
        name: "Lev Group — Corporate Platform",
        category: "landing",
        description:
            "Production corporate website for an Israeli building maintenance and property management company. Features multi-language support (RTL/LTR) and lead generation.",
        link: "https://lev-group.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://lev-group.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    },

    {
        id: 2,
        name: "Maestro Web Agency",
        category: "landing",
        description:
            "Commercial promo website for a digital web studio specializing in conversion-focused landing pages and business platforms.",
        link: "https://maestro-web-nine.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://maestro-web-nine.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    },

    {
        id: 3,
        name: "Maestro Studio",
        category: "landing",
        description:
            "Production landing page for a family photo studio and creative agency, engineered for fast media loading and visual storytelling.",
        link: "https://maestro-studio-phi.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://maestro-studio-phi.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    },

    {
        id: 4,
        name: "Lila Digital",
        category: "landing",
        description:
            "Modern neon-themed landing page featuring smooth hardware-accelerated animations, responsive grid layout, and interactive UI components.",
        link: "https://lila-neon.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://lila-neon.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    },

    // ================= FEATURED PROJECTS (4) =================

    {
        id: 10,
        name: "Stock Market Signalist",
        category: "featured",
        label: "Full-Stack FinTech Platform",
        description:
            "Full-stack financial market platform for tracking real-time stock data, managing personalized watchlists, and generating automated AI market summaries via background event workflows.",
        link: "https://stock-market-signalist-app.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://stock-market-signalist-app.vercel.app/&meta=false&screenshot=true&embed=screenshot.url",
        technologies: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Better Auth",
            "Inngest",
            "Gemini API",
            "Finnhub API",
            "Tailwind CSS",
        ],
    },

    {
        id: 11,
        name: "CoinPulse Crypto Analytics",
        category: "featured",
        label: "Crypto Market Dashboard",
        description:
            "Cryptocurrency analytics platform featuring live price tracking, interactive TradingView candlestick charts, market cap filtering, and real-time currency conversion.",
        link: "https://coin-pulse-crypto-app.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://coin-pulse-crypto-app.vercel.app/&meta=false&screenshot=true&embed=screenshot.url",
        technologies: [
            "Next.js",
            "TypeScript",
            "React",
            "CoinGecko API",
            "Lightweight Charts",
            "Tailwind CSS",
        ],
    },

    {
        id: 12,
        name: "Awwwards Motion Experience",
        category: "featured",
        label: "Advanced UI Motion",
        description:
            "Motion-driven web interface built around scroll-triggered timelines, clip-path transitions, layered video playback, and 3D tilt micro-interactions.",
        link: "https://awwwards-nu-murex.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://awwwards-nu-murex.vercel.app/&meta=false&screenshot=true&embed=screenshot.url",
        technologies: ["React", "GSAP", "ScrollTrigger", "Framer Motion", "Tailwind CSS"],
    },

    {
        id: 13,
        name: "iPhone 15 Pro 3D Showcase",
        category: "featured",
        label: "3D Product Showcase",
        description:
            "Immersive 3D device showcase combining interactive model inspection, synchronized video carousels, and GSAP scroll timelines.",
        link: "https://iphonewebsite-three-js.vercel.app/",
        image:
            "https://api.microlink.io/?url=https://iphonewebsite-three-js.vercel.app/&meta=false&screenshot=true&embed=screenshot.url",
        technologies: [
            "React",
            "Three.js",
            "React Three Fiber",
            "GSAP",
            "Tailwind CSS",
        ],
    },
];

// ================= EXPERIENCE =================

export const EXPERIENCES = [
    {
        title: "Diagnostics & PDI Systems Specialist (Automotive)",
        company: "Scania Israel",
        duration: "2025 – Present",
        description:
            "Performing advanced electronic diagnostics, ECU software calibration, CAN-bus troubleshooting, and Pre-Delivery Inspections (PDI) on commercial fleet vehicles using Scania SDP3. Applying rigorous engineering troubleshooting and systematic root-cause analysis under tight operational deadlines.",
    },
    {
        title: "Terminal Operations System (TOS) Specialist",
        company: "Ashdod Port — TOS Division",
        duration: "2024 – 2025",
        description:
            "Operated enterprise-grade Terminal Operating Systems (TOS) in Israel’s busiest maritime port. Managed real-time vessel workflows, yard planning, container routing, and mission-critical logistics data under high operational load.",
    },
    {
        title: "Operations & Intelligence Coordinator (חמ״ל קמ\"ציה)",
        company: "IDF — 916th Patrol Squadron, Israeli Navy",
        duration: "2018 – 2021",
        description:
            "Served in the naval operational command center (War Room). Managed encrypted communications, real-time radar/sensor tracking, resource scheduling, and high-priority incident response for coastal security units.",
    },
];

// ================= EDUCATION =================

export const EDUCATION = [
    {
        degree: "Java Full-Stack Software Engineering",
        institution: "Tel-Ran Educational Center",
        duration: "2020 – 2022",
        description:
            "Intensive 2-year engineering program covering Java, Spring Boot, Hibernate, SQL/NoSQL databases, data structures, algorithms, and modern frontend development with React and TypeScript.",
    },
    {
        degree: "Military Service — Naval Operations & Command Center",
        institution: "IDF — Israeli Navy (חיל הים, פלגה 916)",
        duration: "2018 – 2021",
        description:
            "Full combat-support service in an operational command center, working with real-time tactical software, encrypted networks, and mission coordination.",
    },
];

// ================= SOCIALS =================

export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://github.com/hvostenko-dev",
        icon: <FaGithub fontSize={28} className="text-white/80 transition-colors hover:text-white" />,
    },
    {
        href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/",
        icon: <FaLinkedin fontSize={28} className="text-white/80 transition-colors hover:text-sky-400" />,
    },
];