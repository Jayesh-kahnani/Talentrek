import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // Example: console.log("Form submitted!");
  };

  return (
    <div id="contact" className="max-w-lg mx-auto my-8 p-6 bg-champagne rounded-3xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring-gray-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blackish text-champagne rounded-md shadow-sm hover:bg-hover-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
