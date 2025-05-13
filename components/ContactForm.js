import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast, Flip } from "react-toastify";
import Image from "next/image";

export default function ContactForm() {
  const form = useRef(null);
  const handleSubmit = () => {
    toast.success("Form submitted successfully!");
  };
  return (
    <div>
      <section
        id="contact"
        ref={form}
        className="bg-[#0f172a] text-white py-16 px-4 "
      >
        <div className="max-w-6xl mx-auto flex flex-col bg-[#1920385c] md:flex-row items-center gap-2 md:gap-10 shadow-md md:p-6 rounded-bl-4xl rounded-tr-4xl">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/contact.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8 ">
            <h2 className="text-3xl font-bold mb-6">
              Contact <span className="text-[#fb9700]">With Me</span>
            </h2>

            <form ref={form} id="contact_form" className="space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md focus:outline-none focus:border-[#fb9700]"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#fb9700] text-white px-6 py-2 rounded-full w-full hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
