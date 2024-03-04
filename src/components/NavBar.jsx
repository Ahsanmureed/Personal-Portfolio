import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between h-20  overflow-hidden  px-4 w-full  bg-black fixed ">
        <h1 className="text-white text-5xl font-signature">Ahsan</h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className=" cursor-pointer text-gray-400  z-10  text-3xl md:hidden  "
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
