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
    <div name="portfolio" className=" text-white md:h-screen mt-8 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-[90vh]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="blank"
                  href={link}
                >
                  Demo
                </a>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
