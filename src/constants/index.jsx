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

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  // { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ilya Hvostenko",
  greet: "Hello there! 👋🏻",
  description:
      "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const BIO = [
  "I’m a full stack developer with a strong frontend orientation. My main expertise lies in building responsive, accessible, and visually engaging web applications using React, TypeScript, and modern styling tools like Tailwind and SCSS.",
  "I began my development journey in backend Java, but quickly gravitated toward frontend, where I enjoy translating complex logic into elegant user interfaces. At Elpisor LTD, I worked on both frontend and backend for StockStats and Edutreck CRM, giving me hands-on experience across the entire development lifecycle.",
  "I’m passionate about clean code, reusable components, and delivering intuitive user experiences. I stay current with frontend trends and love collaborating with teams to ship production-grade features that users love.",
];

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

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
        "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
        "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
        "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
        "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
        "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Elpisor LTD",
    duration: "2022 - Present",
    description:
        "Developed frontend and backend for Edutreck CRM using React, TypeScript, and Java Spring Boot. Implemented scalable RESTful APIs, user authentication, and interactive UI components. Created StockStats – a real-time stock analytics tool with data visualization and backend services. Improved system efficiency, API performance, and reduced user-side errors by over 60%.",
  },
];

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
