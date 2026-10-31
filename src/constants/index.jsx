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
import sergeyHvostenkoImg from "../assets/sergey-hvostenko.jpg";

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

const GITHUB = "https://github.com/hvostenko-dev";

// Live screenshot of a deployed site via Microlink (3D / video sites need a longer wait)
const screenshot = (url, waitMs = 3000) =>
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1600&viewport.height=900&waitForTimeout=${waitMs}`;

export const PROJECTS = [
    // ================= FEATURED PROJECTS (6) =================

    {
        id: 1,
        name: "PulseQuant",
        category: "featured",
        label: "Full-Stack FinTech Platform",
        description:
            "AI market intelligence & portfolio terminal. Paper-trading portfolio with mark-to-market P&L and sector allocation, stock screener, watchlists with price alerts, live NYSE/NASDAQ session status, ⌘K search and daily AI news digests generated by Gemini through Inngest background workflows.",
        link: "https://stock-market-signalist-app.vercel.app/",
        github: `${GITHUB}/pulsequant`,
        image: "/projects/pulsequant.png",
        technologies: [
            "Next.js 16",
            "TypeScript",
            "MongoDB",
            "Better Auth",
            "Inngest",
            "Gemini AI",
            "Finnhub API",
            "Tailwind CSS",
        ],
    },

    {
        id: 2,
        name: "NexusFi Pro",
        category: "featured",
        label: "Crypto Intelligence Terminal",
        description:
            "Institutional-style crypto analytics terminal. Live OHLC candlestick charts, global market telemetry, market radar heatmap, portfolio P&L tracker, watchlist with price alerts and a Crypto Lab with market-cap what-if and DCA simulators — all on live CoinGecko data.",
        link: "https://coin-pulse-crypto-app.vercel.app/",
        github: `${GITHUB}/nexusfi-pro`,
        image: "/projects/nexusfi-pro.png",
        technologies: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "shadcn/ui",
            "Lightweight Charts",
            "CoinGecko API",
            "Tailwind CSS",
        ],
    },

    {
        id: 3,
        name: "ATELIER 3D",
        category: "featured",
        label: "WebGL Apparel Studio",
        description:
            "Interactive 3D apparel configurator. Real-time PBR fabric simulation with procedural bump maps, multi-zone decals and typography, AI-style procedural patterns, HDRI lighting and camera presets, undo/redo history, saved looks and tech-pack export.",
        link: "https://three-js-ai-rho.vercel.app/",
        github: `${GITHUB}/atelier-3d`,
        image: "/projects/atelier-3d.png",
        technologies: [
            "React 19",
            "Three.js",
            "React Three Fiber",
            "Drei",
            "Valtio",
            "Framer Motion",
        ],
    },

    {
        id: 4,
        name: "MacBook Pro 3D Experience",
        category: "featured",
        label: "3D Product Experience",
        description:
            "Apple-style MacBook Pro (M4) product page. Scroll-driven GSAP cinematics, a 3D laptop with live video textures, tap-to-switch feature showcase on mobile, M4 / M4 Pro / M4 Max chip comparison and a buy configurator synced with the 3D model.",
        link: "https://macbook-apple-app-yhxg.vercel.app/",
        github: `${GITHUB}/macbook-pro-3d`,
        image: "/projects/macbook-pro-3d.png",
        technologies: [
            "React 19",
            "Three.js",
            "React Three Fiber",
            "GSAP",
            "Zustand",
            "Tailwind CSS",
        ],
    },

    {
        id: 5,
        name: "iPhone 15 Pro 3D Showcase",
        category: "featured",
        label: "3D Product Showcase",
        description:
            "Immersive iPhone 15 Pro launch page. Interactive 3D model viewer with color and size switching, synchronized video carousel with progress indicators, GSAP scroll timelines and a fully responsive layout down to small phones.",
        link: "https://iphonewebsite-three-js.vercel.app/",
        github: `${GITHUB}/iphone-15-pro-3d`,
        image: "/projects/iphone-15-pro-3d.png",
        technologies: [
            "React 19",
            "Three.js",
            "React Three Fiber",
            "GSAP",
            "Tailwind CSS",
        ],
    },

    {
        id: 6,
        name: "Zentry — Awwwards Experience",
        category: "featured",
        label: "Advanced UI Motion",
        description:
            "Awwwards-inspired motion experience. Clip-path video portals, kinetic 3D typography, bento grid with tilt micro-interactions, scroll-triggered GSAP timelines and a mobile navigation built for touch devices.",
        link: "https://awwwards-nu-murex.vercel.app/",
        github: `${GITHUB}/zentry-awwwards`,
        image: "/projects/zentry.png",
        technologies: ["React", "GSAP", "ScrollTrigger", "Tailwind CSS v4"],
    },

    // ================= COMMERCIAL & LANDING PAGES (4) =================

    {
        id: 7,
        name: "Lev Group",
        category: "landing",
        description:
            "Corporate website for an Israeli building maintenance and property management company. HE / EN / FR / RU with RTL & LTR, inquiry form and accessibility statement.",
        link: "https://lev-group.vercel.app/",
        github: `${GITHUB}/LevGroup`,
        image: "/projects/lev-group.png",
    },

    {
        id: 8,
        name: "Maestro Web",
        category: "landing",
        description:
            "Promo website for a digital web studio. EN / RU / HE with RTL, video hero, 3D-tilt glass cards, custom cursor and animated FAQ.",
        link: "https://maestro-web-nine.vercel.app/",
        github: `${GITHUB}/MAESTRO-WEB`,
        image: "/projects/maestro-web.png",
    },

    {
        id: 9,
        name: "Maestro Studio",
        category: "landing",
        description:
            "Landing page for a photo & video production studio in Ashdod. EN / RU / HE with RTL, gallery lightbox and reduced-motion accessibility.",
        link: "https://maestro-studio-phi.vercel.app/",
        github: `${GITHUB}/MAESTRO-STUDIO`,
        image: "/projects/maestro-studio.png",
    },

    {
        id: 10,
        name: "Lila",
        category: "landing",
        description:
            "Landing page for a psychological transformational game. Scroll-spy navigation, session pricing, FAQ, Google Maps and SEO with Open Graph & JSON-LD.",
        link: "https://lila-neon.vercel.app/",
        github: `${GITHUB}/Lila`,
        image: "/projects/lila.png",
    },
    {
        id: 11,
        name: "Sergey Hvostenko Portfolio",
        category: "landing",
        description:
            "Multidisciplinary visual art & 3D architectural portfolio for artist Sergey Hvostenko. EN / RU / HE with full RTL, curated 92-work gallery archive, interactive lightbox and AI video showcases.",
        link: "https://sergey-hvostenko-website-ilyajavadevs-projects.vercel.app/",
        github: `${GITHUB}/Sergey-Hvostenko-website-`,
        image: sergeyHvostenkoImg,
    },
    {
        id: 12,
        name: "Hutzahav — Haute Couture Atelier",
        category: "landing",
        description:
            "Luxury bespoke tailoring & textile art atelier website for designer Galina Khvostenko (Ashdod, Israel). Direct inquiry online boutique with bag, wishlist, custom size guide and gift certificate designer. Real-time bespoke cost & turnaround calculator, 4-step couture journey, curated lookbook with dual grid/editorial views, interactive Google Maps geolocation with Waze & Easy.co.il deep-links, multi-channel booking (WhatsApp, Telegram, Email), and comprehensive accessibility toolbar (נגישות / WCAG).",
        link: "https://hutzahav.vercel.app/",
        github: `${GITHUB}/hutzahav`,
        image: "/projects/hutzahav.jpg",
        technologies: [
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Lucide Icons",
            "Google Maps API",
            "WCAG Accessibility",
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
            "Served in the naval operational command center (War Room). Managed tactical radio encryption (COMSEC), secure communication channels, shore-side operational logistics, shift rosters, and shore readiness planning for naval patrol units.",
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