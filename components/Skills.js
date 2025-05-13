import React from 'react'

const Skills = () => {
  return (
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
  )
}

export default Skills