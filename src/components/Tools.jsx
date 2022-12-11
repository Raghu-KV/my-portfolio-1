import React from "react";
import HTML from "../assets/html.png";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import tw from "../assets/tailwind.png";
import css from "../assets/css.png";
import xd from "../assets/XD.png";
import ps from "../assets/PS.png";
import ai from "../assets/AI.png";

function Tools() {
  const tools = [
    { id: 1, icon: react, name: "React" },
    { id: 2, icon: js, name: "Java Script" },
    { id: 3, icon: tw, name: "Tailwind" },
    { id: 4, icon: css, name: "CSS" },
    { id: 5, icon: HTML, name: "HTML" },
    { id: 6, icon: xd, name: "XD" },
    { id: 7, icon: ps, name: "Photoshop" },
    { id: 8, icon: ai, name: "Illustrator" },
  ];
  return (
    <div name="tools" className="container mx-auto items-center">
      <div className="px-6 mb-24">
        <div className="mb-8 text-center md:text-left">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-5xl">
            Skills & Tools
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {/* <div className="px-4 py-4 rounded-md bg-gray-800 md:flex md:justify-center md:items-center text-center">
            <div className="text-center">
              <img
                src={HTML}
                alt=""
                className="w-9 mb-2 md:mb-0  mx-auto md:w-14"
              />
            </div>
            <p className=" text-sm md:text-2xl font-semibold md:ml-4 text-white">
              HTML
            </p>
          </div> */}
          {tools.map(({ id, icon, name }) => (
            <div
              className="px-4 py-4 rounded-md bg-gray-800 md:flex md:justify-center md:items-center text-center"
              key={id}
            >
              <div className="text-center">
                <img
                  src={icon}
                  alt=""
                  className="w-9 mb-2 md:mb-0  mx-auto xl:w-14"
                />
              </div>
              <p className=" text-sm xl:text-2xl font-semibold md:ml-4 text-white">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
