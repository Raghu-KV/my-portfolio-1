import React from "react";
import HTML from "../assets/html.png";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import tw from "../assets/tailwind.png";
import css from "../assets/css.png";
import xd from "../assets/XD.png";
import ps from "../assets/PS.png";
import ai from "../assets/AI.png";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/express.svg";

function Tools() {
  const tools = [
    { id: 1, icon: mongodb, name: "MongoDb" },
    { id: 2, icon: express, name: "Express" },
    { id: 3, icon: react, name: "React" },
    { id: 4, icon: node, name: "Node.js" },
    { id: 5, icon: js, name: "Java Script" },
    { id: 6, icon: tw, name: "Tailwind" },
    { id: 7, icon: css, name: "CSS" },
    { id: 8, icon: HTML, name: "HTML" },
    { id: 9, icon: xd, name: "XD" },
    { id: 10, icon: ps, name: "Photoshop" },
    { id: 11, icon: ai, name: "Illustrator" },
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
          {tools.map(({ id, icon, name }) => (
            <div
              className="py-4 rounded-md bg-gray-800 md:flex md:justify-center md:items-center text-center"
              key={id}
            >
              <div className="text-center">
                <img
                  src={icon}
                  alt=""
                  className="w-9 mb-2 md:mb-0  mx-auto xl:w-14"
                />
              </div>
              <p className=" text-sm xl:text-2xl xl:font-semibold md:ml-4 text-white">
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
