import { useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const projects = {
  "Web3 Projects": [
    {
      title: "NFT Marketplace",
      description: "A decentralized NFT trading platform on Ethereum.",
      image: "/images/nft-marketplace.png", // ✅ path from public folder
    },
    {
      title: "Web3 Wallet",
      description: "A crypto wallet interface with Web3.js integration.",
      image: "/images/web3-wallet.png",
    },
  ],
  "Full Stack Projects": [
    {
      title: "E-commerce Store",
      description: "React + Node.js based full-stack shopping site.",
      image: "/images/ecommerce-store.png",
    },
    {
      title: "Real-Time Chat",
      description: "Chat app using Socket.IO and MongoDB.",
      image: "/images/chat-app.png",
    },
  ],
};

export default function TabbedProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = Object.keys(projects);

  return (
    <div id="projects" className="w-full mx-auto py-12 px-4 bg-[#0f172afc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-[#fb9700]">Projects</span>
        </h2>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex justify-center space-x-8 cursor-pointer">
            {tabs.map((tab, idx) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  clsx(
                    "pb-2 text-lg font-semibold transition",
                    selected
                      ? "border-b-4 border-[#fb9700] text-[#fb9700] cursor-pointer"
                      : "text-gray-400 hover:text-white cursor-pointer"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-8">
            {Object.values(projects).map((projList, idx) => (
              <Tab.Panel key={idx}>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {projList.map((proj, i) => (
                    <div
                      key={i}
                      className="bg-[#0f172a] rounded-lg shadow-lg overflow-hidden border border-gray-700"
                    >
                      <Image
                        src={proj.image}
                        alt="Project 1"
                        width={500}
                        height={300}
                        className="w-full object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {proj.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{proj.description}</p>
                        <a
                          href="https://github.com/your-repo-link"
                          target="_blank"
                          className="text-pink-400 font-medium hover:underline"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
