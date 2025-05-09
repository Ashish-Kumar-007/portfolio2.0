import React from "react";

export default function Contact () {
    const handleSubmit = () => {
        toast.success("Form submitted successfully!");
      };
  return (
    <div>
      {" "}
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
            onClick={handleSubmit}
            placeholder="Submit"
            type="button"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
          />
        </form>
      </section>
    </div>
  );
};
