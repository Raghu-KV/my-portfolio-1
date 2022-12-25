import React from "react";
import Array from "../assets/portfolio/arrayDestruct.jpg";

function Portfolio() {
  const project = [
    { id: 1, name: Array, dis: "this project is about CURD oprations" },
    { id: 2, name: Array, dis: "this project is about CURD oprations" },
    { id: 3, name: Array, dis: "this project is about CURD oprations" },
    { id: 4, name: Array, dis: "this project is about CURD oprations" },
    { id: 5, name: Array, dis: "this project is about CURD oprations" },
  ];

  return (
    <div name="Portfolio" className="container mx-auto items-center mb-24">
      <div className="px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-5xl">
            Portfolio
          </span>
        </div>
        <div className="flex flex-wrap justify-center">
          {project.map(({ name, dis, id }) => (
            <div className="w-full md:w-1/2 lg:w-1/3" key={id}>
              <div className="border border-sky-500 rounded-lg mx-2 my-2">
                <div>
                  <img src={name} alt="" className="rounded-t-lg" />
                </div>
                <p className="text-center my-4 text-gray-400 text-base md:text-lg">
                  {dis}
                </p>
                <div className="flex justify-center mb-4 mx-6">
                  <button className="text-center block  text-base rounded-lg border border-sky-500 py-2 px-4 text-cyan-400 hover:bg-sky-500 hover:text-white duration-200 w-full mx-2">
                    Demo{" "}
                  </button>

                  <button className="text-center block  text-base rounded-lg border border-sky-500 py-2 px-4 text-cyan-400 hover:bg-sky-500 hover:text-white duration-200 w-full mx-2">
                    Code{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
