import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed w-full h-20 bg-black flex items-center justify-between px-6 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-white text-3xl md:text-4xl font-bold font-signature">
        Ahsan
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-12">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-gray-400 hover:text-white transition duration-300 cursor-pointer capitalize text-lg"
          >
            <Link to={link} smooth duration={500} offset={-20}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="text-gray-400 text-3xl cursor-pointer md:hidden transition duration-300 z-50"
      >
        {nav ?'' : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon Inside Menu */}
        <div
          onClick={() => setNav(false)}
          className="absolute top-5 right-5 text-gray-400 text-4xl cursor-pointer hover:text-white transition duration-300"
        >
          <FaTimes />
        </div>

        {/* Menu Links */}
        <ul className="text-gray-400 space-y-6 text-2xl">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize hover:text-white transition">
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
