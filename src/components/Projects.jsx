import React from "react";
import {MdArrowOutward} from "react-icons/md";
import {PROJECTS} from "../constants/index.jsx";
import {motion} from "framer-motion";


function Projects({projects}) {
    return (
        <section id="projects" className="pt-20">
            <motion.h2
                initial={{opacity: 0,y:-20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.8 }}
                className="mb-8 text-center text-3xl lg:text-4xl">Projects</motion.h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <motion.div
                        initial={{opacity:0,scale:0.9}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:0.5 }}
                        whileHover={{scale:1.05}}
                        className="group relative overflow-hidden rounded-3xl bg-gray-800 p-4"
                        key={project.id}
                    >
                        {/* Картинка проекта */}
                        <motion.img
                            whileHover={{scale:1.1}}
                            src={project.image}
                            alt={project.name}
                            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                        {/* Название и описание */}
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                        <motion.div
                            initial={{opacity:0,scale:1.0}}
                            whileHover={{opacity:1}}
                            transition={{duration:0.5 }}
                            className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                            <h3 className='mb-2 text-2xl'>{project.name}</h3>
                            <p className='mb-12 p-4'>{project.description}</p>
                            <a href={project.githubLink} target='_blank' rel='nooponer noreferrer'
                               className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'>
                                <div className='flex items-center'>
                                    <span>View on GitHub</span>
                                    <MdArrowOutward/>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
