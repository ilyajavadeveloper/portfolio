import React from "react";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import { PROJECTS } from "./constants/index.jsx";
import Bio from "./components/Bio.jsx";
import Skills from "./components/Skills.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white antialiased">
      {/* Ambient Fixed Background Layer */}
      <div className="bg-image pointer-events-none fixed inset-0 z-0 opacity-90" />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)`,
          backgroundSize: "4.5rem 4.5rem",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full flex-col">
        <NavBar />
        <main className="flex w-full flex-col">
          <Hero />
          <Bio />
          <Skills />
          <Projects projects={PROJECTS} />
          <WorkExperience />
          <EducationSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
