import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 2,
      src: reactParallax,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 3,
      src: navbar,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 4,
      src: reactSmooth,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 5,
      src: installNode,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
    {
      id: 6,
      src: reactWeather,
      link: "https://google.com",
      code: "https://github.com/Ahsanmureed",
    },
  ];

  return (
    <div name="portfolio" className=" text-white md:h-screen mt-8 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
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
