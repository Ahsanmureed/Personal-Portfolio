import React from "react";
import img from "../assets/ahsan.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-36 py-32 md:py-32 gap-12 md:gap-28"
    >
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          I'm a Full Stack
        </h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Developer
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:w-[40vw] leading-relaxed">
          Hello Geeks, I'm <span className="text-blue-400">Ahsan Mureed</span>, a passionate Full Stack Developer specializing in <span className="text-blue-400">React</span>.
        </p>

        {/* Portfolio Button */}
        <div className="mt-6">
          <Link
            to="portfolio"
            smooth
            duration={500}
            offset={-20}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          className="md:w-[28vw] w-[75vw] max-w-[400px] rounded-lg shadow-lg"
          src={img}
          alt="Ahsan Mureed"
        />
      </div>
    </div>
  );
};

export default Hero;
