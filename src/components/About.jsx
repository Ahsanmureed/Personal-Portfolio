import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex flex-col items-center justify-center px-6 md:px-32 py-16 text-center bg-black"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold border-b-4 border-gray-500 text-white inline-block mb-6">
        About
      </h1>

      {/* About Content */}
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
        Hello Geeks, I'm <span className="text-blue-400">Ahsan Mureed</span>, a passionate full-stack developer specializing in{" "}
        <span className="text-blue-400">React</span>.  
        I love building modern, scalable, and user-friendly web applications.
      </p>
    </div>
  );
};

export default About;
