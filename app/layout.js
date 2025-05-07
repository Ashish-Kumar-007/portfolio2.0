// app/layout.js or pages/_app.js
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>My Portfolio</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 z-50">
          <nav className="container mx-auto flex justify-center space-x-8">
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-blue-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300">About Me</a></li>
              <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="pt-16 container mx-auto p-8">{children}</main> {/* Added padding-top to offset header */}
        
        <footer className="bg-blue-600 text-white py-4 text-center">
          <p>&copy; 2025 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
