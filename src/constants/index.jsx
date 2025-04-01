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
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiMongodb,
  SiJavascript,
  SiSpring,
  SiHibernate,
  SiMysql,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

// Оставляем только одну картинку, которую используем для Lumo Music Player.
// Если у вас есть реальная картинка Lumo, используйте её вместо project1.jpeg.
import projectImage1 from "../assets/project1.jpeg";

/**
 * Ссылки в навигации (без ссылки GitHub, только основные секции, кроме Projects).
 * Ссылку Projects будете добавлять непосредственно в NavBar, указывая #lumo-music-player
 */
export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// Настройки для "шапки" (Hero-секция)
export const HERO = {
  name: "Ilya Hvostenko",
  greet: "Hello there! 👋🏻",
  description:
      "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

// Краткая биография
export const BIO = [
  "I’m a full stack developer with a strong frontend orientation. My main expertise lies in building responsive, accessible, and visually engaging web applications using React, TypeScript, and modern styling tools like Tailwind and SCSS.",
  "I began my development journey in backend Java, but quickly gravitated toward frontend, where I enjoy translating complex logic into elegant user interfaces. At Elpisor LTD, I worked on both frontend and backend for StockStats and Edutreck CRM, giving me hands-on experience across the entire development lifecycle.",
  "I’m passionate about clean code, reusable components, and delivering intuitive user experiences. I stay current with frontend trends and love collaborating with teams to ship production-grade features that users love.",
];

// Основные навыки
export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <SiTypescript className="text-2xl text-blue-500 lg:text-4xl" />,
    name: "TypeScript",
    experience: "3+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <FaJava className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Java",
    experience: "3+ years",
  },
  {
    icon: <SiSpring className="text-4xl text-green-700 lg:text-5xl" />,
    name: "Spring",
    experience: "3+ years",
  },
  {
    icon: <SiHibernate className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Hibernate",
    experience: "3+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "3+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "3+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "3+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "3+ years",
  },
];

/**
 * Единственный проект – Lumo Music Player
 * ID: "lumo-music-player" (Если в компоненте Projects вы используете другие механизмы,
 * можно оставить id как число. Главное, чтобы <section id="lumo-music-player" /> совпадало
 * с якорем #lumo-music-player в NavBar.)
 */
export const PROJECTS = [
  {
    id: "lumo-music-player",
    name: "Lumo Music Player",
    description: "A feature-rich music player built with React. Enjoy your favorite tracks with a sleek UI and easy playlist management.",
    image: projectImage1,
    githubLink: "https://github.com/ilyajavadeveloper/Lumo-music-app.git",
  },
];

// Опыт работы
export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Elpisor LTD",
    duration: "2022 - Present",
    description:
        "Developed frontend and backend for Edutreck CRM using React, TypeScript, and Java Spring Boot. Implemented scalable RESTful APIs, user authentication, and interactive UI components. Created StockStats – a real-time stock analytics tool with data visualization and backend services. Improved system efficiency, API performance, and reduced user-side errors by over 60%.",
  },
];

// Образование
export const EDUCATION = [
  {
    degree: "Java Full Stack Developer",
    institution: "Tel-Ran Educational Center",
    duration: "2020 - 2022",
    description:
        "Completed an intensive full stack development program with a focus on Java backend technologies and modern frontend frameworks like React. Gained hands-on experience in cloud services, microservices architecture, and deployment strategies.",
  },
  {
    degree: "Advanced IT Technologies & Computer Graphics",
    institution: "Private Program",
    duration: "2018 - 2020",
    description:
        "Completed 420 academic hours focused on IT infrastructure, software tools, and visual design concepts. Strengthened fundamentals in system architecture and computer graphics.",
  },
];

// Социальные ссылки
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ilyajavadeveloper",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
