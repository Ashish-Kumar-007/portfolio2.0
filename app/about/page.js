// app/about/page.js
export default function About() {
    return (
      <section className="py-16">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          I'm a passionate Full Stack Developer with experience in building modern web applications.
          My expertise includes React, Node.js, and Solidity. I have a strong interest in Web3 technologies
          and blockchain development.
        </p>
        <img src="/images/profile.jpg" alt="Profile" className="rounded-full w-48 mx-auto" />
      </section>
    );
  }
  