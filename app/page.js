import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section id="home" className="text-center py-16 ">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm Ashish, a Full Stack Developer</p>
        <p className="text-lg">
          Scroll down to see my projects and contact information!
        </p>
        
      </section>
 

      {/* About Section */}
      <section id="about" className="py-16">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          Experienced Full Stack & Blockchain Developer with a solid foundation
          in smart contract development and decentralized technologies. Skilled
          in building scalable and secure decentralized applications (dApps) on
          Ethereum, Binance Smart Chain, and Polygon using tools like Solidity,
          Hardhat, Ethers.js, and Web3.js. Proficient in frontend and backend
          development with React.js, Next.js, Node.js, and Express.js,
          integrating Web3 seamlessly into modern web stacks. Passionate about
          decentralization, developer advocacy, and delivering intuitive,
          user-first Web3 experiences.
        </p>
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="rounded-full w-48 mx-auto"
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Technical Skills
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Frontend</h2>
            <ul className="list-disc pl-5">
              <li>React</li>
              <li>Next.js</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h1 className="text-3xl font-semibold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mb-4">
              Built with React, Node.js, and Solidity. A decentralized app
              for...
            </p>
            <a
              href="https://github.com/your-repo-link"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p className="text-gray-600 mb-4">
              Developed a full-stack app for...
            </p>
            <a
              href="https://github.com/your-repo-link"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <h1 className="text-3xl font-semibold mb-8">Contact Me</h1>
        <form className="max-w-md mx-auto space-y-6">
          <label className="block">
            Name:
            <input
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block">
            Email:
            <input
              type="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block">
            Message:
            <textarea className="w-full p-3 mt-2 border border-gray-300 rounded" />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
