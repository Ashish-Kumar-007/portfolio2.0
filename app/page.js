// Import necessary modules and components
"use client";
import Image from "next/image";
import TextLoop from "react-text-loop";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast, Flip } from "react-toastify";

export default function Home() {
  const form = useRef(null);

  return (
    <div className="">
      {/* Hero Section */}
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

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-[#0d1830]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/assets/working.png"
              alt="Ashish working with a laptop"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              I am a passionate Full Stack Developer and Web3 enthusiast with a
              focus on creating clean, scalable, and performant applications. I
              have experience working with technologies like React, Node.js,
              Solidity, and Ethers.js. My mission is to help build the
              decentralized web.
            </p>
            <a
              href="#projects"
              className="bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-white rounded-lg font-medium shadow hover:opacity-90"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Academic Qualification and Job Experience */}
      <section className=" flex justify-center bg-[#0c152a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-48 gap-20">
          {/* Academic Qualification */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 ">
              <span className="inline-block border-b-4 border-[#fb9700] pb-2">
                Acad
              </span>
              emic <span className="text-[#fb9700]">Qualification</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Master In Computer Applications
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Institute of Management and Information Technology, Cuttack{" "}
                    <br /> (2020 - 2022)
                  </p>
                </div>
              </li>
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">B.Sc. in Botany</h3>
                  <p className="text-gray-400 text-sm">
                    Netaji Subash Memorial City Degree College, Cuttack <br />{" "}
                    (2017 - 2020)
                  </p>
                </div>
              </li>
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Higher Secondary</h3>
                  <p className="text-gray-400 text-sm">
                    J.K.B.K Govt. Junior College, Cuttack <br /> (2015 - 2017)
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Job Experience */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="inline-block border-b-4 border-[#fb9700] pb-2">
                Job
              </span>{" "}
              <span className="text-[#fb9700]">Experience</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Software Developer - I
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Aarna Protocol (Nov. 2023 - Aug. 2024)
                  </p>
                </div>
              </li>
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Freelance Frontend and Smart Contract Developer
                  </h3>
                  <p className="text-gray-400 text-sm">
                    SubLabs (Jul. 2023 - Dec. 2023)
                  </p>
                </div>
              </li>
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Web3 Developer</h3>
                  <p className="text-gray-400 text-sm">
                    BSBSTech Pvt. Ltd. (Mar. 2023 - Jul. 2023)
                  </p>
                </div>
              </li>
              <li className="flex items-center  gap-4">
                <div className="text-[#fb9700] text-xl border p-2 rounded-full">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Blockchain Developer
                  </h3>
                  <p className="text-gray-400 text-sm">
                    NFThing (May. 2022 - Nov. 2022)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#0d172e] text-white py-12 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          My <span className="text-[#fb9700]">Skills</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["Solidity", "JavaScript", "TypeScript", "HTML"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1 bg-pink-600/20 border border-pink-500 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-green-600/20 border border-green-500 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "RemixIDE", "Git", "Hardhat", "Foundry"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-4 py-1 bg-gray-600/20 border border-gray-400 rounded-full"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "Bootstrap5", "TailwindCSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1 bg-blue-600/20 border border-blue-400 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Web3 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Web3</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Web3.js",
                  "Ethers.js",
                  "Wagmi",
                  "DeFi",
                  "ERC20",
                  "ERC721",
                  "ERC1155",
                  "ERC4626",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-purple-600/20 border border-purple-500 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Blockchain */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
              <div className="flex flex-wrap gap-3">
                {["Ethereum", "Binance", "Polygon", "Arbitrum"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-yellow-600/20 border border-yellow-500 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0f172afc]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#0f172a] rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <Image
                src="/images/project1.jpg"
                alt="Project 1"
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  FluidPass
                </h3>
                <p className="text-gray-300 mb-4">
                  A crypto ticketing platform with streaming payments using
                  Superfluid & Next.js.
                </p>
                <a
                  href="https://github.com/your-repo-link"
                  target="_blank"
                  className="text-pink-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <Image
                src="/images/project2.jpg"
                alt="Project 2"
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  DeWork
                </h3>
                <p className="text-gray-300 mb-4">
                  Smart contract-based check-in & rewards system for employees
                  using Solidity & Hardhat.
                </p>
                <a
                  href="https://github.com/your-repo-link"
                  target="_blank"
                  className="text-pink-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={form}
        className="bg-[#0f172a] text-white py-16 px-4 "
      >
        <div className="max-w-6xl mx-auto flex flex-col bg-[#1920385c] md:flex-row items-center gap-2 md:gap-10 shadow-md md:p-6 rounded-bl-4xl rounded-tr-4xl">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/contact.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8 ">
            <h2 className="text-3xl font-bold mb-6">
              Contact <span className="text-[#fb9700]">With Me</span>
            </h2>

            <form ref={form} id="contact_form" className="space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#fb9700] text-white px-6 py-2 rounded-full w-full hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
