import React from "react";
import img from "../assets/Ahsan.jpg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div
      name="home"
      className="   
     flex md:flex-row flex-col items-center justify-between py-44 md:py-28 px-24  gap-28  "
    >
      <div>
        <h1 className="text-white text-4xl md:text-6xl ">I'm a Full Stack</h1>
        <h1 className="text-white text-4xl md:text-6xl ">Developer</h1>
        <p className="text-gray-300 flex-wrap w-[78vw] md:w-[42vw] mt-2 pl-0 mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          eum deserunt culpa accusantium ipsa doloremque pariatur, quis, nulla
          delectus sjkhidh dkdiddh didhdi dihddi dkdd.
        </p>
        <Link
          to="portfolio"
          smooth
          duration={500}
          className="  cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full mt-7"
        >
          Portfolio
        </Link>
      </div>
      <div>
        <img className="md:w-[28vw] w-[100vw] h-[37vh] md:h-[72vh] rounded-lg" src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
