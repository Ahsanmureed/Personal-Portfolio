import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 7, src: node, title: "Node.js", style: "shadow-green-500" },
    { id: 8, src: express, title: "Express.js", style: "shadow-gray-600" },
    { id: 9, src: mongodb, title: "MongoDB", style: "shadow-green-600" },
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-black py-20 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-center">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2 mb-6">
          Experience
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Technologies I have worked with
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-gray-900 shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 p-6 rounded-lg flex flex-col items-center ${style}`}
            >
              <img src={src} alt={title} className="w-20 h-20 object-contain" />
              <p className="mt-4 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
