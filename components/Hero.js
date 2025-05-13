// src/components/Hero.jsx
import React from 'react';
import TextLoop from "react-text-loop";

const Hero = () => {
  return (
<section className="min-h-screen px-4 bg-gradient-to-br from-[#0d172e] via-[#0f172a] to-[#0f172afc] text-white flex items-center">
        <div className="container mx-auto flex flex-col md:flex-col justify-center items-center gap-2 px-[25px]">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-[#fb9700]">Ashish Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold mb-6">
              <TextLoop interval={5000}>
                <span className="text-amber-400">Full Stack Developer</span>
                <span className="text-amber-300">Smart Contract Engineer</span>
                <span className="text-amber-200">Blockchain Developer</span>
              </TextLoop>
            </h2>
            <a
              href="assets/cv.pdf"
              target="_blank"
              className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-white rounded-lg font-medium shadow hover:opacity-90"
            >
              Download My CV
            </a>
          </div>

          {/* Profile Image */}
          {/* <div className="flex-1 flex justify-center">
            <div className="w-72 h-96 ">
              <Image
                src="/assets/dev-profile.png"
                alt="Profile"
                width={250}
                height={500}
                className="object-cover"
              />
            </div>
          </div> */}
        </div>
      </section>
  );
};

export default Hero;
