// Import necessary modules and components
"use client";
import Image from "next/image";
import TextLoop from "react-text-loop";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

import TabbedProjects from "@/components/TabbedProjects";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QualificationAndExp from "@/components/QualificationAndExp";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Academic Qualification and Job Experience */}
      <QualificationAndExp />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <TabbedProjects />

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}
