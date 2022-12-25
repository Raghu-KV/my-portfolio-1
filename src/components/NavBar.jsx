import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const navLinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Contact" },
  ];

  return (
    <div className=" text-white bg-gradient-to-l from-black to-gray-800 sticky top-0">
      <div className="container mx-auto flex justify-between items-center h-20">
        <div>
          <Link to="Home" smooth offset={-150} duration={800}>
            <h1 className="text-5xl font-signature md:ml-0 ml-6 cursor-pointer">
              Raghu
            </h1>
          </Link>
        </div>
        <ul className="hidden md:flex">
          {navLinks.map(({ id, link }) => (
            <li
              className="px-4 cursor-pointer text-gray-400 font-medium hover:scale-105 hover:text-white duration-200 text-base"
              key={id}
            >
              <Link to={link} smooth duration={800} offset={-150}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="pr-6 z-10 text-gray-400 md:hidden"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        {nav ? (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 right-0 w-1/2 h-screen 
          bg-gradient-to-b from-black to-gray-800 text-gray-400"
          >
            {navLinks.map(({ id, link }) => (
              <li className="py-3 px-4 text-xl" key={id}>
                <Link
                  to={link}
                  smooth
                  duration={800}
                  offset={-150}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
