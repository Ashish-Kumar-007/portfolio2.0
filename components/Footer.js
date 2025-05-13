import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
        <footer className="bg-[#090d19] text-gray-400 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="font-semibold text-white mb-1">Quick Links</h4>
          <ul className="flex gap-2">
            <li>
              <a
                href="#home"
                className="hover:text-orange-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-300 transition-colors"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-300 transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start text-xl">
          <span className="text-white font-semibold text-sm mb-2">
            Follow Me:
          </span>
          <div className="flex flex-row gap-6">
            <a
              href="https://linkedin.com/in/web3-eth-ashish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/web3_eth_ashish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/Ashish-Kumar-007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-center mt-2">
        © {new Date().getFullYear()} Ashish Kumar Sahoo. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer