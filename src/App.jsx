import React from "react";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import {PROJECTS} from "./constants/index.jsx";
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className='react h-full overflow-y-auto antialiased'>
            {/* Фоновый div */}
            <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-image'></div>

            {/* Контент поверх фона */}
            <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
                <NavBar />
                <Hero />
               {/*<Projects projects={PROJECTS} /> */}
                <Bio/>
                <Skills/>
                <WorkExperience />
                <EducationSection />
                <ContactForm/>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
