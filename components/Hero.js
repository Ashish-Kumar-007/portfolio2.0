// src/components/Hero.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-orange-400 text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m <span className="text-yellow-300">Eveelyn</span></h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Web Developer & Designer</h2>
        <p className="text-lg mb-6">I’m the Front-End Developer for #Company in Bangladesh. Visit my profile & stay connected with me.</p>
        <a
          href="/assets/resume.pdf"
          download
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Download My CV
        </a>
        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
          <a href="#" className="text-2xl hover:text-yellow-300"><FaLinkedin /></a>
          <a href="#" className="text-2xl hover:text-yellow-300"><FaGithub /></a>
          <a href="#" className="text-2xl hover:text-yellow-300"><FaEnvelope /></a>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
