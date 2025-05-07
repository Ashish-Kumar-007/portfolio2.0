// app/contact/page.js
"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission to an API route
    console.log(formData);
  };

  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <label className="block">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded"
          />
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">
          Submit
        </button>
      </form>
    </section>
  );
}
