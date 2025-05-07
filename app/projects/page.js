// app/projects/page.js
export default function Projects() {
    return (
      <section className="py-16">
        <h1 className="text-3xl font-semibold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600 mb-4">Built with React, Node.js, and Solidity. A decentralized app for...</p>
            <a href="https://github.com/your-repo-link" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p className="text-gray-600 mb-4">Developed a full-stack app for...</p>
            <a href="https://github.com/your-repo-link" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>
    );
  }
  