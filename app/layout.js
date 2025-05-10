// app/layout.js or pages/_app.js
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <html lang="en" className={firaCode.variable}>
      <head>
        <meta charSet="UTF-8" />
        <title>Ashish Kumar Sahoo</title>
      </head>
      <body className="font-firacode text-slate-200">
        <header className="fixed top-0 left-0 right-0 bg-[#08083ce1] shadow-sm text-white py-4 z-50">
          <nav className="container mx-auto flex justify-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="hover:text-blue-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className=" ">{children}</main>{" "}
        {/* Added padding-top to offset header */}
        <footer className="bg-[#08083ce1] text-gray-400 py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Quick Links */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="font-semibold text-white mb-1">Quick Links</h4>
              <ul className="flex gap-2">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-300 transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row items-center space-x-6 text-2xl">
              <span className="text-white font-medium text-sm">Follow Me:</span>
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

          {/* Copyright */}
          <p className="text-sm text-center mt-2">
            © {new Date().getFullYear()} Ashish Kumar Sahoo. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
