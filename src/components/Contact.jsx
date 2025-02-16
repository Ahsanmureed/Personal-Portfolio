// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-screen-lg w-full text-center">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">Contact</h2>
        <p className="text-gray-400 mt-3 text-lg">Let's connect! Fill out the form below.</p>
      </div>
      <form action="https://getform.io/f/eapwqewb" method="POST" className="w-full md:w-1/2 space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg mt-8">
        <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea name="message" placeholder="Enter your message" rows="6" className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-white font-semibold rounded-md hover:scale-105 transition-transform duration-300">Let's Talk</button>
      </form>
    </div>
  );
};

export default Contact;
