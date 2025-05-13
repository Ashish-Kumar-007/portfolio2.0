import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#090d19] shadow-sm text-white py-4 z-50">
          <nav className="container mx-auto flex justify-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="hover:text-orange-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-300">
                  Contact
                </a>
              </li>
                           <li>
                <a href="https://calendly.com/ashishsahoo2015/connect-with-ashish" target='_blank' className="hover:text-orange-300">
                  Schedule Call
                </a>
              </li>
            </ul>
          </nav>
        </header>
  )
}

export default Header