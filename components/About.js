import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
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
  )
}

export default About