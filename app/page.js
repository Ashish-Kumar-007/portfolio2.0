// Import necessary modules and components
"use client";
import Image from "next/image";
import TextLoop from "react-text-loop";
export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="min-h-screen px-4 bg-[#08083ce1] text-white flex items-center">
        <div className="container mx-auto flex flex-col md:flex-col justify-center items-center gap-2 px-[25px]">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-[#fb9700]">Ashish Kumar Sahoo</span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold mb-6">
              <TextLoop interval={5000}>
                <span className="text-amber-400">Full Stack Developer</span>
                <span className="text-amber-300">Smart Contract Engineer</span>
                <span className="text-amber-200">Blockchain Enthusiast</span>
              </TextLoop>
            </h2>
            <a
              href="#"
              className="inline-block bg-amber-50 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-100"
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
      <section id="about" className="py-20 px-4 bg-[#070839dd]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Image
              src="/images/profile.jpg"
              alt="Ashish working with a laptop"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
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

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-20 px-4 bg-[#060734dd]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & <span className="text-pink-500">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Next.js, React, JavaScript</li>
                <li>Node.js, Express</li>
                <li>Solidity, Web3.js, Ethers.js</li>
                <li>Tailwind CSS, HTML, CSS</li>
                <li>MongoDB, PostgreSQL</li>
                <li>Git, GitHub, Vercel, Hardhat</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Certifications
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Meta Front-End Developer Professional Certificate</li>
                <li>Ethereum and Solidity: The Complete Developer's Guide</li>
                <li>Certified Web3 Developer – Alchemy University</li>
                <li>Solidity Smart Contracts – MetaSchool</li>
                <li>
                  Build the New Internet Hackathon – WalletConnect (Winner)
                </li>
                <li>Road to Web3 Phase 2 Hackathon – Metaschool (Winner)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#08093edd]">
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
      <section id="contact" className="py-20 px-4 bg-[#090a47dd] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Get in <span className="text-orange-400">Touch</span>
        </h2>
        <p className="text-gray-300 mb-6">
          I'd love to hear from you! Whether it's a project, job opportunity, or
          just a chat.
        </p>
        <a
          href="mailto:ashish@email.com"
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
