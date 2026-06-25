import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  RiReactjsLine
} from "react-icons/ri";

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
  SiAppwrite
} from "react-icons/si";

import { DiRedis } from "react-icons/di";

// Если не используешь — можешь удалить
import projectImage1 from "../assets/project1.jpeg";

// ================= NAVIGATION =================

export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ================= HERO =================

export const HERO = {
  name: "Ilya Hvostenko",
  greet: "Hello there! 👋🏻",
  description:
      "Frontend is my craft, design is my language. I build interfaces that feel alive — fast, modern and emotionally engaging. Combining React, Next.js, mobile development and 3D graphics, I turn complex ideas into smooth, interactive digital experiences.",
};


// ================= BIO =================

export const BIO = [
  "I’m a full-stack developer with a frontend-first mindset, focused on building modern, expressive and high-performance interfaces. My core stack includes React, Next.js, React Native, TypeScript, Tailwind CSS, Three.js and advanced motion tooling.",

  "Alongside development, I work with enterprise-grade Terminal Operating Systems (TOS) at Ashdod Port — one of Israel’s busiest maritime terminals — dealing with complex logistics, real-time workflows and mission-critical data.",

  "This experience shaped my engineering mindset: clarity over noise, reliability over shortcuts, and UX that supports fast decision-making under pressure.",

  "I started my path in backend development with Java, Spring Boot and databases, building strong foundations in system design before transitioning fully into frontend engineering.",

  "Today, I focus on clean architecture, reusable components, meaningful motion and premium-feeling user experiences — continuously refining my craft through real-world systems and advanced 3D interfaces.",
];



export const SKILLS = [
  // ================= FRONTEND CORE =================
  { icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />, name: "React" },
  { icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />, name: "Next.js" },
  { icon: <RiReactjsLine className="text-4xl text-cyan-300 lg:text-5xl" />, name: "React Native" },
  { icon: <SiExpo className="text-4xl text-black lg:text-5xl" />, name: "Expo" },
  { icon: <SiThreedotjs className="text-4xl text-orange-400 lg:text-5xl" />, name: "Three.js" },

  // ================= UI / MOTION =================
  { icon: <SiFramer className="text-4xl text-pink-400 lg:text-5xl" />, name: "Framer Motion" },
  { icon: <SiTailwindcss className="text-4xl text-sky-400 lg:text-5xl" />, name: "Tailwind CSS" },
  { icon: <SiJavascript className="text-4xl text-green-400 lg:text-5xl" />, name: "GSAP" },

  // ================= LANGUAGES =================
  { icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />, name: "TypeScript" },
  { icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />, name: "JavaScript (ES6+)" },

  // ================= STATE & DATA =================
  { icon: <FaNodeJs className="text-4xl text-lime-400 lg:text-5xl" />, name: "Zustand" },
  { icon: <FaNodeJs className="text-4xl text-orange-400 lg:text-5xl" />, name: "Redux Toolkit" },
  { icon: <FaNodeJs className="text-4xl text-blue-400 lg:text-5xl" />, name: "React Query / TanStack Query" },

  // ================= TOOLING =================
  { icon: <SiVite className="text-4xl text-purple-300 lg:text-5xl" />, name: "Vite" },
  { icon: <SiWebpack className="text-4xl text-blue-300 lg:text-5xl" />, name: "Webpack" },
  { icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />, name: "Git & GitHub" },
  { icon: <SiGit className="text-4xl text-red-500 lg:text-5xl" />, name: "CI/CD Basics" },

  // ================= FRONTEND FUNDAMENTALS =================
  { icon: <SiJavascript className="text-4xl text-pink-300 lg:text-5xl" />, name: "Responsive Design" },
  { icon: <SiJavascript className="text-4xl text-indigo-300 lg:text-5xl" />, name: "Accessibility (a11y)" },
  { icon: <SiJavascript className="text-4xl text-teal-300 lg:text-5xl" />, name: "Performance Optimization" },
  { icon: <SiJavascript className="text-4xl text-gray-300 lg:text-5xl" />, name: "Component Architecture" },

  // ================= BACKEND =================
  { icon: <FaJava className="text-4xl text-red-500 lg:text-5xl" />, name: "Java" },
  { icon: <SiSpring className="text-4xl text-green-700 lg:text-5xl" />, name: "Spring Boot" },
  { icon: <SiHibernate className="text-4xl text-purple-600 lg:text-5xl" />, name: "Hibernate" },
  { icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />, name: "MySQL" },
  { icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />, name: "MongoDB" },
  { icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />, name: "Redis" },
  { icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />, name: "Node.js" },

  // ================= SERVICES & TOOLS =================
  { icon: <SiAppwrite className="text-4xl text-red-400 lg:text-5xl" />, name: "Appwrite" },
];
export const PROJECTS = [
  {
    id: 1,
    name: "Maestro Studio",
    type: "landing",
    description:
        "A landing page for a family photo studio and digital agency, focused on atmosphere, visuals, and emotional branding.",
    link: "https://maestro-studio-phi.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://maestro-studio-phi.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
  },
  {
    id: 2,
    name: "Maestro Web",
    type: "landing",
    description:
        "A promo website for a studio specializing in landing pages and business sites. Clean UX/UI and smooth interactions.",
    link: "https://maestro-web-nine.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://maestro-web-nine.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
  },
  {
    id: 3,
    name: "Lev Group",
    type: "landing",
    description:
        "A corporate site for a real-world building maintenance and property management company. Multi-language and strict business style.",
    link: "https://lev-group.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://lev-group.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
  },
  {
    id: 4,
    name: "Lila",
    type: "landing",
    description:
        "A modern neon-themed landing page packed with smooth animations, bold visual rhythm, polished interactions, and a clean responsive layout crafted for a premium aesthetic feel.",
    link: "https://lila-neon.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://lila-neon.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
  },
  {
    id: 5,
    name: "Hutzahav",
    type: "landing",
    description:
        "A deeply creative landing featuring expressive UI effects, layered motion, elegant transitions, and a refined layout that blends storytelling with stylish modern design.",
    link: "https://hutzaav2.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://hutzaav2.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
  },

  // КРУПНЫЕ ПРОЕКТЫ

  {
    id: 6,
    name: "Awwwards-Nu 3D Motion Experience",
    type: "featured",
    description:
        "An experimental, motion-first landing experience inspired by award-winning digital studios. Built with GSAP ScrollTrigger and dynamic video layers, the project combines cinematic transitions, parallax depth, smooth scroll physics, and expressive micro-interactions. Each section behaves as a visual scene, carefully orchestrated through modular animation timelines.",
    link: "https://awwwards-nu-murex.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://awwwards-nu-murex.vercel.app/&meta=false&screenshot=true&embed=screenshot.url&force=true&waitUntil=networkidle2&viewport.width=1600&viewport.height=900&waitForTimeout=8000",
  },
  {
    id: 7,
    name: "MacBook Pro GSAP Experience",
    type: "featured",
    description:
        "A cinematic Apple-inspired product experience built with React and GSAP. The project combines scroll-driven animations, video sequences, smooth transitions, interactive product showcases, and a fully responsive interface inspired by Apple's visual design language.",
    link:
        "https://macbook-apple-app-yhxg-git-main-ilyajavadevs-projects.vercel.app/",
    image:
        "https://api.microlink.io/?url=https%3A%2F%2Fmacbook-apple-app-yhxg-git-main-ilyajavadevs-projects.vercel.app%2F%3Fscreenshot%3Dnew&meta=false&screenshot=true&embed=screenshot.url&force=true&waitUntil=networkidle2&viewport.width=1600&viewport.height=900&waitForTimeout=12000",
  },
  {
    id: 8,
    name: "Three.js AI T-Shirt Customizer",
    type: "featured",
    description:
        "An interactive 3D product customization experience built with React and Three.js. Users can change shirt colors, upload custom logos and textures, and generate unique designs using AI while previewing every update directly on a real-time 3D model.",
    link: "https://three-js-ai-rho.vercel.app/",
    image:
        "https://api.microlink.io/?url=https://three-js-ai-rho.vercel.app/&meta=false&screenshot=true&embed=screenshot.url&force=true&waitUntil=networkidle2&viewport.width=1600&viewport.height=900&waitForTimeout=6000",
  },
];
// ================= EXPERIENCE =================

export const EXPERIENCES = [
  {
    title: "Terminal Operations System Specialist",
    company: "Ashdod Port — TOS Division",
    duration: "2024 – Present",
    description:
        "Managing enterprise-grade Terminal Operating Systems (TOS). Overseeing vessel workflow, yard planning, container routing, crane operations and real-time logistics in Israel’s busiest port. Ensuring operational accuracy, data integrity and smooth cargo movement across the terminal.",
  },

  {
    title: "Full Stack Developer",
    company: "Elpisor LTD",
    duration: "2022 – 2023",
    description:
        "Developed Edutreck CRM and StockStats analytics. Built REST APIs, authentication, dashboards and data-driven UI. Improved performance, optimized UX flow and delivered production features with React, TS, Node, Java and Spring.",
  },

  {
    title: "Software Engineering Student & Independent Developer",
    company: "Self-Driven + Tel-Ran College",
    duration: "2021 – 2023",
    description:
        "Studied Java, Spring, databases, algorithms, cloud and frontend engineering. Built multiple full-stack and 3D projects (React, TypeScript, Three.js, Expo). Strengthened problem-solving, architecture thinking and real production workflows.",
  },

  {
    title: "Operations & Intelligence Coordinator (חמ״ל קמ\"ציה)",
    company: "IDF — 916 Battalion, Navy",
    duration: "2018 – 2021",
    description:
        "Worked in the Navy operational command center. Managed encrypted communication, scheduling, manpower, real-time monitoring and mission-level operational flow. Supported coastal security units and coordinated high-priority responses.",
  },
];

// ================= EDUCATION =================

export const EDUCATION = [

  {
    degree: "Military Service — Naval Operations & Intelligence",
    institution: "IDF — חיל הים (חמ\"ל קמ\"ציה)",
    duration: "2018 – 2021",
    description:
        "Full combat-support naval service. Operational intelligence workflow, secure communication, scheduling, coordination and mission execution.",
  },
  {
    degree: "Java Full Stack Developer",
    institution: "Tel-Ran Educational Center",
    duration: "2020 – 2022",
    description:
        "Studied Java, Spring Boot, SQL/NoSQL, cloud, networks and full-stack web development with React.",
  },
  {
    degree: "Advanced IT Technologies & Computer Graphics",
    institution: "Private Program",
    duration: "2018 – 2020",
    description:
        "420 hours in IT infrastructure, architecture fundamentals, software tools and computer graphics.",
  },
  {
    degree: "Independent Software Development",
    institution: "Self-Taught",
    duration: "Ongoing",
    description:
        "Continuous learning: React, TypeScript, Three.js, mobile development, backend systems, animations and modern frontend architecture.",
  },
];

// ================= SOCIALS =================

export const SOCIAL_MEDIA_LINKS = [
  { href: "https://facebook.com/", icon: <FaFacebook fontSize={25} className="hover:opacity-80" /> },
  { href: "https://discord.com/", icon: <FaDiscord fontSize={25} className="hover:opacity-80" /> },
  { href: "https://instagram.com/", icon: <FaInstagram fontSize={25} className="hover:opacity-80" /> },
  { href: "https://x.com/", icon: <FaTwitter fontSize={25} className="hover:opacity-80" /> },
  { href: "https://github.com/ilyajavadeveloper", icon: <FaGithub fontSize={25} className="hover:opacity-80" /> },
  { href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/", icon: <FaLinkedin fontSize={25} className="hover:opacity-80" /> },
];
