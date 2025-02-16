import React from "react";

import blog from "../assets/portfolio/blog.png";
import ecommerce from "../assets/portfolio/ecommerce.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      link: "https://mernblog34.netlify.app",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 2,
      src: ecommerce,
      link: "https://mern-ecommerce-dqm5.vercel.app",
      code: "https://github.com/Ahsanmureed",
    },
  ];

  return (
    <div name="portfolio" className="text-white h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-900">
      <div className="max-w-screen-lg w-full">
        {/* Heading */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Portfolio</p>
          <p className="py-4 text-gray-400">Here are some of my recent projects</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={src}
                alt="Project Thumbnail"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href={link}
                    className="w-1/2 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-bl-lg transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={code}
                    className="w-1/2 text-center py-3 bg-gray-700 hover:bg-gray-900 text-white font-semibold rounded-br-lg transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
