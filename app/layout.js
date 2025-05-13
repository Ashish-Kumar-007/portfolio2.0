// app/layout.js or pages/_app.js
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <Header />
        {/* Added padding-top to offset header */}
        <main className=" ">{children}</main>{" "}
        {/* Added padding-top to offset header */}
        <Footer />
      </body>
    </html>
  );
}
